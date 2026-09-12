import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Kreativbrücke e.V. gemäß DSGVO.",
};

export default function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-serif-display text-3xl font-semibold text-navy sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-8 text-navy/85 leading-relaxed">
        <div>
          <h2 className="font-semibold text-navy">1. Verantwortlicher</h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website
            ist:
            <br />
            Kreativbrücke e.V.
            <br />
            Lübecker Straße 11
            <br />
            50668 Köln
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
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p className="mt-2">
            Wir verarbeiten personenbezogene Daten unserer Nutzer:innen
            grundsätzlich nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Website sowie unserer Inhalte und Leistungen
            erforderlich ist. Die Verarbeitung personenbezogener Daten
            erfolgt regelmäßig nur nach Einwilligung der Nutzer:innen
            oder auf Grundlage einer anderen gesetzlichen Erlaubnis gemäß
            Art. 6 DSGVO.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            3. Hosting und Server-Logfiles
          </h2>
          <p className="mt-2">
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA („Vercel“), gehostet. Beim Aufruf
            dieser Website erhebt Vercel automatisch Informationen in
            sogenannten Server-Logfiles, die dein Browser übermittelt
            (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
            Seite, verwendeter Browser). Diese Daten werden zur
            Sicherstellung eines störungsfreien Betriebs sowie aus
            Sicherheitsgründen verarbeitet (Art. 6 Abs. 1 lit. f DSGVO)
            und nicht mit anderen Datenquellen zusammengeführt.
          </p>
          <p className="mt-2">
            Die Verarbeitung kann dabei auch auf Servern von Vercel in
            den USA erfolgen. Vercel hat sich vertraglich zur Einhaltung
            der EU-Standardvertragsklauseln (Art. 46 DSGVO) verpflichtet,
            die ein angemessenes Datenschutzniveau sicherstellen sollen.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">4. Schriftarten</h2>
          <p className="mt-2">
            Diese Website bindet Schriftarten lokal ein. Es findet dabei
            keine Verbindung zu Servern von Google statt, und es werden
            keine Daten an Google übertragen.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            5. Kontaktformular und E-Mail-Kontakt
          </h2>
          <p className="mt-2">
            Wenn du uns über das Kontaktformular oder per E-Mail
            kontaktierst, werden die von dir angegebenen Daten (Name,
            E-Mail-Adresse, Nachrichteninhalt) ausschließlich zum Zweck
            der Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage
            hierfür ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
          </p>
          <p className="mt-2">
            Unser Kontaktformular öffnet dein lokales E-Mail-Programm und
            übermittelt deine Angaben direkt per E-Mail an uns; es werden
            dabei keine Formulardaten auf einem Server dieser Website
            gespeichert oder protokolliert.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">6. Cookies</h2>
          <p className="mt-2">
            Diese Website verwendet aktuell keine Cookies zu Analyse-
            oder Marketingzwecken. Sollten künftig Cookies oder
            vergleichbare Technologien eingesetzt werden, wird diese
            Datenschutzerklärung entsprechend angepasst und – soweit
            erforderlich – eine Einwilligung eingeholt.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            7. Deine Rechte als betroffene Person
          </h2>
          <p className="mt-2">
            Du hast im Rahmen der gesetzlichen Vorgaben das Recht auf
            Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen
            die Verarbeitung deiner personenbezogenen Daten. Wende dich
            hierzu gerne an die oben genannte Kontaktadresse.
          </p>
          <p className="mt-2">
            Darüber hinaus steht dir ein Beschwerderecht bei einer
            Datenschutzaufsichtsbehörde zu. Zuständig ist:
            <br />
            Landesbeauftragte für Datenschutz und Informationsfreiheit
            Nordrhein-Westfalen (LDI NRW)
            <br />
            Kavalleriestr. 2–4
            <br />
            40213 Düsseldorf
            <br />
            Telefon: 0211 38424-0
            <br />
            E-Mail:{" "}
            <a
              href="mailto:poststelle@ldi.nrw.de"
              className="text-clay hover:text-clay-dark"
            >
              poststelle@ldi.nrw.de
            </a>
            <br />
            <a
              href="https://www.ldi.nrw.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay hover:text-clay-dark"
            >
              www.ldi.nrw.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            8. Änderung dieser Datenschutzerklärung
          </h2>
          <p className="mt-2">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
            damit sie stets den aktuellen rechtlichen Anforderungen
            entspricht oder um Änderungen unserer Leistungen umzusetzen.
          </p>
        </div>
      </div>
    </section>
  );
}
