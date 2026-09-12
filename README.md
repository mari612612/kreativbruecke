# kreativbruecke

Website für Verein

Next.js-Website (App Router) für Kreativbrücke e.V. mit Tailwind CSS.

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft dann unter http://localhost:3000.

### Umgebungsvariablen

Für den Versand des Kontaktformulars wird [Resend](https://resend.com)
genutzt. `.env.example` nach `.env.local` kopieren und `RESEND_API_KEY`
eintragen:

```bash
cp .env.example .env.local
```

Ohne gesetzten `RESEND_API_KEY` zeigt das Kontaktformular einen Fehler an,
statt E-Mails zu versenden.

## Seiten

- `/` – Startseite
- `/ueber-uns` – Über uns
- `/projekte` – Projekte
- `/kontakt` – Kontakt (Anfrageformular, Versand per E-Mail über `/api/contact`)
- `/spenden` – Hinweise zu Spenden
- `/impressum` – Impressum
- `/datenschutz` – Datenschutzerklärung

## Vor dem Livegang

`/impressum` und `/datenschutz` enthalten Platzhalter in eckigen Klammern
(z. B. Adresse, Registergericht, verantwortliche Person). Bitte durch die
echten Vereinsdaten ersetzen – idealerweise mit rechtlicher Prüfung, da es
sich um gesetzlich vorgeschriebene Pflichtangaben handelt.
