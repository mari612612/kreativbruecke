import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { isRateLimited } from "@/lib/rate-limit";

const CONTACT_EMAIL = "hallo@kreativbruecke.org";

const spendenbescheinigungSchema = z.object({
  name: z
    .string({ error: "Bitte gib deinen Namen an." })
    .trim()
    .min(1, "Bitte gib deinen Namen an."),
  address: z
    .string({ error: "Bitte gib deine Anschrift an." })
    .trim()
    .min(1, "Bitte gib deine Anschrift an."),
  email: z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z
      .string()
      .trim()
      .email("Bitte gib eine gültige E-Mail-Adresse an.")
      .optional()
  ),
  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Bleibt es nicht
  // leer, wird weiter unten stillschweigend ein Fake-Erfolg zurückgegeben.
  website: z.string().optional(),
});

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuche es in einer Minute erneut." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = spendenbescheinigungSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ??
          "Bitte fülle alle Felder korrekt aus.",
      },
      { status: 400 }
    );
  }

  const { name, address, email, website } = parsed.data;

  // Honeypot ausgefüllt -> vermutlich Bot: Erfolg vortäuschen, nichts versenden.
  if (website) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ist nicht gesetzt.");
    return NextResponse.json(
      {
        error:
          "Der Versand ist aktuell nicht verfügbar. Bitte schreib uns direkt an hallo@kreativbruecke.org.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const bodyLines = [`Name: ${name}`, `Anschrift: ${address}`];
  if (email) bodyLines.push(`E-Mail: ${email}`);

  const { error } = await resend.emails.send({
    from: "Kreativbrücke Website <hallo@kreativbruecke.org>",
    to: CONTACT_EMAIL,
    ...(email ? { replyTo: email } : {}),
    subject: `Spendenbescheinigung angefragt von ${name}`,
    text: bodyLines.join("\n"),
  });

  if (error) {
    console.error("Resend-Fehler:", error);
    return NextResponse.json(
      {
        error:
          "Deine Angaben konnten nicht gesendet werden. Bitte versuche es später erneut oder schreib uns direkt an hallo@kreativbruecke.org.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
