import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { isRateLimited } from "@/lib/rate-limit";

const CONTACT_EMAIL = "hallo@kreativbruecke.org";

const CATEGORY_LABEL = {
  kooperation: "Kooperationsanfrage",
  finanziell: "Anfrage zur finanziellen Unterstützung",
  sonstiges: "Kontaktanfrage",
} as const;

const contactSchema = z.object({
  // Nur beim Kontaktformular (/kontakt) und bei "Kooperation anfragen"
  // (Startseite/Über-uns) gesetzt.
  organisation: z.string().trim().min(1).optional(),
  orgType: z.string().trim().min(1).optional(),
  category: z.enum(["kooperation", "finanziell", "sonstiges"]).optional(),
  name: z
    .string({ error: "Bitte gib deinen Namen an." })
    .trim()
    .min(1, "Bitte gib deinen Namen an."),
  email: z
    .string({ error: "Bitte gib deine E-Mail-Adresse an." })
    .trim()
    .min(1, "Bitte gib deine E-Mail-Adresse an.")
    .email("Bitte gib eine gültige E-Mail-Adresse an."),
  message: z
    .string({ error: "Bitte gib eine Nachricht an." })
    .trim()
    .min(10, "Deine Nachricht sollte mindestens 10 Zeichen lang sein."),
  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Bleibt es nicht
  // leer, wird weiter unten stillschweigend ein Fake-Erfolg zurückgegeben,
  // statt die Anfrage hier mit einem verräterischen Validierungsfehler
  // abzulehnen.
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

  const parsed = contactSchema.safeParse(body);
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

  const { organisation, orgType, category, name, email, message, website } =
    parsed.data;

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

  const subjectLabel = category ? CATEGORY_LABEL[category] : "Anfrage";
  const subject = `${subjectLabel} von ${organisation || name}`;

  const bodyLines: string[] = [];
  if (category) bodyLines.push(`Kategorie: ${CATEGORY_LABEL[category]}`);
  if (organisation) {
    bodyLines.push(
      `Organisation/Einrichtung: ${organisation}${orgType ? ` (${orgType})` : ""}`
    );
  }
  bodyLines.push(`Name: ${name}`, `E-Mail: ${email}`, "", "Nachricht:", message);

  const { error } = await resend.emails.send({
    from: "Kreativbrücke Website <hallo@kreativbruecke.org>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject,
    text: bodyLines.join("\n"),
  });

  if (error) {
    console.error("Resend-Fehler:", error);
    return NextResponse.json(
      {
        error:
          "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut oder schreib uns direkt an hallo@kreativbruecke.org.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
