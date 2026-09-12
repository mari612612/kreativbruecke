import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Kreativbrücke e.V. gemäß § 5 TMG.",
};

export default function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-serif-display text-3xl font-semibold text-navy sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-6 rounded-xl bg-clay/10 px-5 py-4 text-sm text-clay">
        Hinweis: Diese Seite enthält Platzhalter (in eckigen Klammern).
        Bitte vor Veröffentlichung durch die tatsächlichen Vereinsdaten
        ersetzen.
      </div>

      <div className="mt-10 space-y-8 text-navy/85 leading-relaxed">
        <div>
          <h2 className="font-semibold text-navy">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2">
            Kreativbrücke e.V.
            <br />
            Lübecker Straße 11
            <br />
            50668 Köln
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">Vertreten durch</h2>
          <p className="mt-2">
            Marian Viola
            <br />
            Martin Kolloch
            <br />
            Sophia Antonia Tengelmann
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">Registereintrag</h2>
          <p className="mt-2">
            Eintragung im Vereinsregister.
            <br />
            Registergericht: Amtsgericht Köln
            <br />
            Registernummer: VR 22817
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">Kontakt</h2>
          <p className="mt-2">
            Telefon: 0176 61327276
            <br />
            E-Mail:{" "}
            <a
              href="mailto:hallo@kreativbruecke.org"
              className="text-clay hover:text-clay-dark"
            >
              hallo@kreativbruecke.org
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-2">
            [Name, Anschrift der verantwortlichen Person]
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p className="mt-2">
            Sofern vorhanden, Umsatzsteuer-Identifikationsnummer gemäß
            § 27 a Umsatzsteuergesetz: [USt-IdNr., falls vorhanden]
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            Streitschlichtung
          </h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <span className="break-all">
              https://ec.europa.eu/consumers/odr/
            </span>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">Haftungshinweis</h2>
          <p className="mt-2">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir
            keine Haftung für die Inhalte externer Links. Für den Inhalt
            der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </div>
      </div>
    </section>
  );
}
