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
            5. Zahlungsdienstleister bei Spenden
          </h2>
          <p className="mt-2">
            Wenn du per Kreditkarte spendest, setzen wir den
            Zahlungsdienstleister Stripe ein. Anbieter ist Stripe
            Payments Europe, Limited, 1 Grand Canal Street Lower, Grand
            Canal Dock, Dublin, D02 H210, Irland („Stripe“). Die dafür
            erforderlichen Zahlungsdaten (z. B. Kartennummer,
            Ablaufdatum, Sicherheitscode) werden direkt an Stripe
            übermittelt und dort verarbeitet; wir selbst erhalten und
            speichern diese Daten nicht. Die Verarbeitung erfolgt zur
            Durchführung der von dir veranlassten Zahlung (Art. 6 Abs. 1
            lit. b DSGVO) sowie zur Betrugsprävention (Art. 6 Abs. 1
            lit. f DSGVO). Eine Datenübermittlung an die
            Muttergesellschaft Stripe, Inc. mit Sitz in den USA ist
            dabei nicht ausgeschlossen und über die
            EU-Standardvertragsklauseln (Art. 46 DSGVO) abgesichert.
            Weitere Informationen:{" "}
            <a
              href="https://stripe.com/de/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay hover:text-clay-dark"
            >
              stripe.com/de/privacy
            </a>
          </p>
          <p className="mt-2">
            Wenn du per PayPal spendest, werden deine Daten an PayPal
            (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal,
            L-2449 Luxemburg („PayPal“), übermittelt. Rechtsgrundlage ist
            ebenfalls die Durchführung der von dir veranlassten Zahlung
            (Art. 6 Abs. 1 lit. b DSGVO). Weitere Informationen:{" "}
            <a
              href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay hover:text-clay-dark"
            >
              paypal.com/de/webapps/mpp/ua/privacy-full
            </a>
          </p>
          <p className="mt-2">
            Bei Spenden per Überweisung erhalten wir ausschließlich die
            von deiner Bank übermittelten Daten (Name, IBAN,
            Verwendungszweck), die zur Zuordnung deiner Spende
            verarbeitet werden (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            6. Kontaktformular und E-Mail-Kontakt
          </h2>
          <p className="mt-2">
            Wenn du uns über das Kontaktformular oder per E-Mail
            kontaktierst, werden die von dir angegebenen Daten
            (Organisation/Einrichtung, Art der Einrichtung, Name,
            E-Mail-Adresse, Nachrichteninhalt) ausschließlich zum Zweck
            der Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage
            hierfür ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
          </p>
          <p className="mt-2">
            Für den Versand der Formulardaten per E-Mail nutzen wir den
            Dienst Resend (Plus Five Five, Inc., 2261 Market Street
            #5039, San Francisco, CA 94114, USA). Deine Angaben werden
            dabei als
            E-Mail an unser Postfach übermittelt; Resend verarbeitet die
            Daten in unserem Auftrag ausschließlich zu diesem Zweck (Art.
            28 DSGVO) und speichert sie nicht dauerhaft. Eine Übermittlung
            in die USA ist dabei nicht ausgeschlossen und über die
            EU-Standardvertragsklauseln (Art. 46 DSGVO) abgesichert.
          </p>
          <p className="mt-2">
            Zum Schutz vor Missbrauch und Spam speichern wir beim Absenden
            des Formulars vorübergehend deine IP-Adresse, um die Anzahl
            der Anfragen pro Minute zu begrenzen (Rechtsgrundlage: Art. 6
            Abs. 1 lit. f DSGVO, berechtigtes Interesse an einem
            funktionsfähigen, missbrauchsfreien Formular). Die IP-Adresse
            wird dabei nur kurzzeitig im Arbeitsspeicher gehalten und
            nicht dauerhaft gespeichert.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">7. Cookies</h2>
          <p className="mt-2">
            Diese Website verwendet keine Cookies zu Analyse- oder
            Marketingzwecken. Im Spendenbereich können technisch
            notwendige Cookies unserer Zahlungsdienstleister PayPal und
            Stripe gesetzt werden, die zur Abwicklung und Absicherung
            der von dir veranlassten Zahlung erforderlich sind (Art. 6
            Abs. 1 lit. b, f DSGVO). Diese werden ausschließlich dann
            geladen, wenn du den Spendenbereich aufrufst bzw. eine
            Zahlungsmethode auswählst.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-navy">
            8. Deine Rechte als betroffene Person
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
            9. Änderung dieser Datenschutzerklärung
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
