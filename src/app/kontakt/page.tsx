import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nimm Kontakt zu Kreativbrücke e.V. auf – per Formular oder E-Mail. Wir freuen uns auf deine Nachricht.",
};

export default function Kontakt() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-clay">
        Kontakt
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold text-navy sm:text-5xl">
        Melde dich bei uns
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/80">
        Du hast Fragen zu unseren Angeboten, möchtest mitmachen oder eine
        Projektidee einbringen? Schreib uns über das Formular oder direkt
        per E-Mail – wir melden uns so schnell wie möglich zurück.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-navy/5 sm:p-8">
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-navy/5 sm:p-8">
            <h2 className="font-serif-display text-lg font-semibold text-navy">
              Direkt per E-Mail
            </h2>
            <p className="mt-2 text-sm text-navy/75">
              Lieber ohne Formular? Schreib uns einfach direkt:
            </p>
            <a
              href="mailto:kontakt@kreativbruecke-ev.de"
              className="mt-3 inline-block break-all font-semibold text-clay hover:text-clay-dark"
            >
              kontakt@kreativbruecke-ev.de
            </a>
          </div>

          <div className="rounded-2xl bg-navy p-6 text-cream sm:p-8">
            <h2 className="font-serif-display text-lg font-semibold">
              Werkstatt &amp; Anschrift
            </h2>
            <address className="mt-3 space-y-1 text-sm not-italic text-cream/80">
              <p>Kreativbrücke e.V.</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
            </address>
            <p className="mt-4 text-xs text-cream/60">
              Bitte trage hier eure tatsächliche Anschrift ein.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
