export const DONATION_ACCOUNT = {
  holder: "Kreativbrücke e.V.",
  iban: "DE90 1001 8000 0481 1718 76",
  ibanRaw: "DE90100180000481171876",
  bic: "FNOMDEB2",
} as const;

export const MONTHLY_SUGGESTIONS = [
  {
    amount: "10 €",
    text: "Unterstützt laufende Materialkosten in unseren Kreativstudios.",
  },
  {
    amount: "25 €",
    text: "Hilft, Kursplätze für Menschen zu fördern, die sie sich sonst nicht leisten könnten.",
  },
  {
    amount: "50 €",
    text: "Trägt spürbar dazu bei, unser Angebot langfristig abzusichern.",
  },
] as const;

/**
 * EPC-QR- / Girocode-Payload (EPC069-12) für einen SEPA-Überweisungsauftrag.
 * Betrag und alle weiteren optionalen Felder bleiben bewusst leer, damit
 * Spender:innen sie in ihrer Banking-App selbst eintragen.
 */
export function buildGirocodePayload(): string {
  return [
    "BCD",
    "002",
    "1",
    "SCT",
    DONATION_ACCOUNT.bic,
    DONATION_ACCOUNT.holder,
    DONATION_ACCOUNT.ibanRaw,
  ].join("\n");
}
