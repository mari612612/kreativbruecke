import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hinweise zu Spenden",
  description:
    "Rechtliche Hinweise zu Spenden an Kreativbrücke e.V. – Widerrufsrecht, Zahlungsabwicklung und Verwendung der Spenden.",
};

export default function Spenden() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-serif-display text-3xl font-semibold text-navy sm:text-4xl">
        Hinweise zu Spenden
      </h1>

      <div className="mt-10 space-y-4 text-navy/85 leading-relaxed">
        <p>
          Spenden an Kreativbrücke e.V. sind freiwillige, unentgeltliche
          Zuwendungen ohne Anspruch auf eine Gegenleistung. Es handelt
          sich nicht um einen Kaufvertrag oder eine entgeltliche
          Dienstleistung; ein Widerrufsrecht nach den Vorschriften für
          Fernabsatzverträge besteht daher nicht – unabhängig davon, ob
          per Überweisung, PayPal oder Kreditkarte gespendet wird.
        </p>
        <p>
          Bei Zahlung per PayPal oder Kreditkarte erfolgt die
          Zahlungsabwicklung durch die jeweiligen Anbieter (siehe{" "}
          <Link href="/datenschutz" className="text-clay hover:text-clay-dark">
            Datenschutzerklärung
          </Link>
          ). Kreativbrücke e.V. erhält und speichert keine vollständigen
          Zahlungsdaten wie Kartennummern.
        </p>
        <p>
          Spenden werden ausschließlich zur Erfüllung unserer
          satzungsmäßigen, gemeinnützigen Zwecke verwendet.
        </p>
      </div>
    </section>
  );
}
