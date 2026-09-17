import type { Metadata } from "next";
import Link from "next/link";
import QRCode from "qrcode";
import CopyField from "@/components/CopyField";
import SpendenbescheinigungForm from "@/components/SpendenbescheinigungForm";
import {
  DONATION_ACCOUNT,
  MONTHLY_SUGGESTIONS,
  buildGirocodePayload,
} from "@/lib/donation";

export const metadata: Metadata = {
  title: "Spenden",
  description:
    "Unterstütze Kreativbrücke e.V. per Überweisung oder Dauerauftrag – Bankverbindung, Girocode zum Scannen und Hinweise zur Spendenbescheinigung.",
};

const VERWENDUNGSZWECK_BEISPIEL = "Spende [Ihr Name]";

async function getGirocodeSvg() {
  const raw = await QRCode.toString(buildGirocodePayload(), {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
  });
  return raw.replace(
    "<svg ",
    '<svg style="width:100%;height:100%;display:block" '
  );
}

export default async function Spenden() {
  const girocodeSvg = await getGirocodeSvg();

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay">
          Spenden
        </p>
        <h1 className="mt-3 font-serif-display text-4xl font-semibold text-navy sm:text-5xl">
          Unterstütze Kreativbrücke e.V.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/80">
          Direktspenden per Kreditkarte oder PayPal folgen, sobald unsere
          Steuernummer vorliegt. Bis dahin freuen wir uns über deine
          Unterstützung per Überweisung oder Dauerauftrag – ganz klassisch mit
          den Kontodaten unten.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Einmalig spenden */}
          <div className="rounded-ceramic bg-white/60 p-6 ring-1 ring-navy/5 sm:p-8">
            <h2 className="font-serif-display text-2xl font-semibold text-navy">
              Einmalig spenden
            </h2>
            <p className="mt-2 text-sm text-navy/75">
              Per Überweisung oder direkt mit deiner Banking-App scannen.
            </p>

            <div className="mt-6 space-y-3">
              <CopyField label="Kontoinhaber" value={DONATION_ACCOUNT.holder} mono={false} />
              <CopyField
                label="IBAN"
                value={DONATION_ACCOUNT.iban}
                copyValue={DONATION_ACCOUNT.ibanRaw}
              />
              <CopyField label="BIC" value={DONATION_ACCOUNT.bic} />
              <CopyField
                label="Verwendungszweck (Vorschlag)"
                value={VERWENDUNGSZWECK_BEISPIEL}
                mono={false}
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-navy/60">
              Bitte ersetze &bdquo;[Ihr Name]&ldquo; durch deinen Namen – so
              können wir deine Spende später eindeutig zuordnen, etwa für eine
              Spendenbescheinigung.
            </p>

            <div className="mt-6 flex items-center gap-4 rounded-xl bg-cream/70 p-4">
              <div
                className="h-28 w-28 shrink-0 sm:h-32 sm:w-32"
                dangerouslySetInnerHTML={{ __html: girocodeSvg }}
              />
              <p className="text-sm leading-relaxed text-navy/75">
                Mit der Banking-App scannen (Girocode) – Kontodaten werden
                automatisch übernommen, den Betrag trägst du selbst ein.
              </p>
            </div>
          </div>

          {/* Dauerhaft spenden */}
          <div className="rounded-ceramic-alt bg-white/60 p-6 ring-1 ring-navy/5 sm:p-8">
            <h2 className="font-serif-display text-2xl font-semibold text-navy">
              Dauerhaft spenden
            </h2>
            <p className="mt-2 text-sm text-navy/75">
              Richte bei deiner Bank einen Dauerauftrag mit diesen Kontodaten
              ein, z. B. monatlich zum 1.
            </p>

            <div className="mt-6 space-y-3">
              <CopyField label="Kontoinhaber" value={DONATION_ACCOUNT.holder} mono={false} />
              <CopyField
                label="IBAN"
                value={DONATION_ACCOUNT.iban}
                copyValue={DONATION_ACCOUNT.ibanRaw}
              />
              <CopyField label="BIC" value={DONATION_ACCOUNT.bic} />
              <CopyField
                label="Verwendungszweck (Vorschlag)"
                value={VERWENDUNGSZWECK_BEISPIEL}
                mono={false}
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-navy/60">
              Bitte ersetze &bdquo;[Ihr Name]&ldquo; durch deinen Namen – so
              können wir deine Spende später eindeutig zuordnen, etwa für eine
              Spendenbescheinigung.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {MONTHLY_SUGGESTIONS.map((s) => (
                <div
                  key={s.amount}
                  className="rounded-xl bg-cream/70 p-4 text-center"
                >
                  <p className="font-serif-display text-xl font-semibold text-navy">
                    {s.amount}
                    <span className="text-sm font-sans font-normal text-navy/60">
                      {" "}
                      / Monat
                    </span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-navy/70">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spendenbescheinigung (optional) */}
        <div className="mt-10 rounded-ceramic bg-clay/10 p-6 ring-1 ring-clay/20 sm:p-8">
          <h2 className="font-serif-display text-xl font-semibold text-navy">
            Für eine Spendenbescheinigung
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/80">
            Hinterlasse hier freiwillig deinen Namen und deine Adresse, damit
            wir dir eine Zuwendungsbestätigung ausstellen können, sobald die
            Anerkennung unserer Gemeinnützigkeit vorliegt.
          </p>
          <SpendenbescheinigungForm />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="space-y-4 text-navy/85 leading-relaxed">
          <h2 className="font-serif-display text-lg font-semibold text-navy">
            Hinweise zu Spenden
          </h2>
          <p>
            Spenden an Kreativbrücke e.V. sind freiwillige, unentgeltliche
            Zuwendungen ohne Anspruch auf eine Gegenleistung. Es handelt sich
            nicht um einen Kaufvertrag oder eine entgeltliche Dienstleistung;
            ein Widerrufsrecht nach den Vorschriften für Fernabsatzverträge
            besteht daher nicht.
          </p>
          <p>
            Spenden werden ausschließlich zur Erfüllung unserer
            satzungsmäßigen, gemeinnützigen Zwecke verwendet. Weitere
            Informationen zur Verarbeitung deiner Daten findest du in unserer{" "}
            <Link
              href="/datenschutz"
              className="text-clay hover:text-clay-dark"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
