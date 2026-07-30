import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Zweck, Zielgruppe und Werte von Kreativbrücke e.V. – warum wir Menschen durch kreatives und keramisches Gestalten verbinden.",
};

export default function UeberUns() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Über uns
          </p>
          <h1 className="mt-3 font-serif-display text-4xl font-semibold text-navy sm:text-5xl">
            Warum es Kreativbrücke e.V. gibt
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/80">
            Kreativbrücke e.V. ist ein gemeinnütziger Verein, der kreatives
            und keramisches Gestalten als Werkzeug für Begegnung, Teilhabe
            und persönliche Entfaltung nutzt. Wir glauben: Wenn Menschen
            gemeinsam mit ihren Händen arbeiten, entstehen nicht nur Objekte
            aus Ton – es entstehen Beziehungen, Vertrauen und neue
            Perspektiven.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <h2 className="font-serif-display text-2xl font-semibold text-navy sm:text-3xl">
          Unser Zweck
        </h2>
        <div className="mt-4 space-y-4 text-navy/80 leading-relaxed">
          <p>
            Wir fördern Kunst, Kultur und soziales Miteinander, indem wir
            Werkstätten, Kurse und offene Ateliers rund um Keramik und
            kreatives Gestalten anbieten. Dabei steht nicht das perfekte
            Ergebnis im Vordergrund, sondern der gemeinsame Weg dorthin:
            Ausprobieren, Scheitern, neu Ansetzen – und am Ende etwas mit
            den eigenen Händen geschaffen zu haben.
          </p>
          <p>
            Als eingetragener, gemeinnütziger Verein arbeiten wir nicht
            gewinnorientiert. Mitgliedsbeiträge, Spenden und Fördergelder
            fließen direkt in Materialien, Werkstattmieten, den Auf- und
            Ausbau von Brennöfen sowie in Programme, die Teilnahme
            unabhängig vom Geldbeutel ermöglichen.
          </p>
        </div>

        <h2 className="mt-12 font-serif-display text-2xl font-semibold text-navy sm:text-3xl">
          Für wen wir da sind
        </h2>
        <p className="mt-4 text-navy/80 leading-relaxed">
          Unsere Angebote richten sich an ein breites Publikum – bewusst
          ohne enge Zielgruppendefinition, weil Kreativität für jede und
          jeden zugänglich sein soll:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Einsteiger:innen & Neugierige",
              text: "Menschen, die noch nie mit Ton gearbeitet haben und in entspannter Atmosphäre erste Erfahrungen sammeln möchten.",
            },
            {
              title: "Kinder, Jugendliche & Familien",
              text: "Ferien- und Wochenendangebote, die spielerisch an kreatives Gestalten heranführen.",
            },
            {
              title: "Ältere Menschen",
              text: "Offene Treffs, die Begegnung, Feinmotorik und Freude am gemeinsamen Tun fördern.",
            },
            {
              title: "Menschen in besonderen Lebenslagen",
              text: "Kreatives Gestalten als niedrigschwelliger Zugang zu Gemeinschaft, etwa für Menschen mit Fluchterfahrung, Isolation oder Belastung.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`${
                i % 2 === 0 ? "rounded-ceramic" : "rounded-ceramic-alt"
              } bg-white/60 p-6 ring-1 ring-navy/5`}
            >
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-serif-display text-2xl font-semibold text-navy sm:text-3xl">
          Wie wir arbeiten
        </h2>
        <ul className="mt-4 space-y-3 text-navy/80 leading-relaxed">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-clay" />
            Ehrenamtliches Engagement bildet das Rückgrat unserer Arbeit –
            getragen von Menschen, die ihre Zeit und ihr handwerkliches
            Wissen teilen.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-clay" />
            Wir kooperieren mit lokalen Einrichtungen, Schulen und
            sozialen Trägern, um unsere Angebote dorthin zu bringen, wo
            sie gebraucht werden.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-clay" />
            Transparenz und Nachhaltigkeit sind uns wichtig – von der
            Verwendung der Mittel bis zur Wahl unserer Materialien.
          </li>
        </ul>

        <div className="mt-12 rounded-ceramic bg-navy p-8 text-cream">
          <p className="font-serif-display text-xl font-semibold">
            Möchtest du Teil von Kreativbrücke e.V. werden?
          </p>
          <p className="mt-2 text-cream/75">
            Als Mitglied, Ehrenamtliche:r oder Unterstützer:in – wir freuen
            uns auf dich.
          </p>
          <Link
            href="/kontakt"
            className="mt-5 inline-block rounded-full bg-clay px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-clay-dark"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
