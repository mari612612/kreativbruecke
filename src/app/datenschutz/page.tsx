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

      <div className="mt-6 rounded-xl bg-clay/10 px-5 py-4 text-sm text-clay">
        Hinweis: Diese Seite enthält Platzhalter (in eckigen Klammern).
        Bitte vor Veröffentlichung durch einen fachkundig geprüften Text
        mit den tatsächlichen Angaben eures Vereins ersetzen.
      </div>

      <div className="mt-10 space-y-8 text-navy/85 leading-relaxed">
        <div>
          <h2 className="font-semibold text-navy">1. Verantwortlicher</h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website
            ist:
            <br />
            Kreativbrücke e.V.
            <br />
            [Straße und Hausnummer]
            <br />
            [Postleitzahl und Ort]
            <br />
            E-Mail:{" "}
            <a
              href="mailto:kontakt@kreativbruecke-ev.de"
              className="text-clay hover:text-clay-dark"
            >
              kontakt@kreativbruecke-ev.de
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
            3. Bereitstellung der Website / Server-Logfiles
          </h2>
          <p className="mt-2">
            Beim Aufruf dieser Website erhebt unser Hosting-Anbieter
            automatisch Informationen in sogenannten Server-Logfiles, die
            der Browser übermittelt (z. B. IP-Adresse, Datum und Uhrzeit
            des Zugriffs, aufgerufene Seite, verwendeter Browser). Diese
            Daten werden zur Sicherstellung eines störungsfreien
            Betriebs sowie aus Sicherheitsgründen verarbeitet (Art. 6
            Abs. 1 lit. f DSGVO) und nicht mit anderen Datenquellen
            zusammengeführt.
          </p>
          <p className="mt-2">
            [Angaben zum konkreten Hosting-Anbieter, Serverstandort und
            Speicherdauer der Logfiles ergänzen.]
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            4. Kontaktformular und E-Mail-Kontakt
          </h2>
          <p className="mt-2">
            Wenn du uns über das Kontaktformular oder per E-Mail
            kontaktierst, werden die von dir angegebenen Daten (Name,
            E-Mail-Adresse, Nachrichtinhalt) ausschließlich zum Zweck der
            Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage
            hierfür ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO (Bearbeitung
            vorvertraglicher bzw. berechtigter Anfragen).
          </p>
          <p className="mt-2">
            Unser Kontaktformular öffnet dein lokales E-Mail-Programm und
            übermittelt deine Angaben direkt per E-Mail an uns; es werden
            dabei keine Formulardaten auf einem Server dieser Website
            gespeichert oder protokolliert.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">5. Cookies</h2>
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
            6. Deine Rechte als betroffene Person
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
            Datenschutzaufsichtsbehörde zu, beispielsweise bei der für
            uns zuständigen Aufsichtsbehörde: [Zuständige
            Datenschutzaufsichtsbehörde ergänzen].
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            7. Änderung dieser Datenschutzerklärung
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
