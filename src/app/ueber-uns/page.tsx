import type { Metadata } from "next";
import Link from "next/link";
import { AUDIENCES } from "@/data/audiences";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Zweck, Zielgruppe und Werte von Kreativbrücke e.V. – warum wir Menschen durch kreatives und keramisches Gestalten verbinden.",
};

const WORKING_PRINCIPLES = [
  {
    title: "Ehrenamt",
    text: "Ehrenamtliches Engagement bildet das Rückgrat unserer Arbeit – getragen von Menschen, die ihre Zeit und ihr handwerkliches Wissen teilen.",
  },
  {
    title: "Kooperation",
    text: "Wir kooperieren mit lokalen Einrichtungen, Schulen und sozialen Trägern, um unsere Angebote dorthin zu bringen, wo sie gebraucht werden.",
  },
  {
    title: "Transparenz",
    text: "Transparenz und Nachhaltigkeit sind uns wichtig – von der Verwendung der Mittel bis zur Wahl unserer Materialien.",
  },
];

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p
            className="animate-fade-up text-sm font-semibold uppercase tracking-wide text-clay"
            style={{ animationDelay: "0ms" }}
          >
            Über uns
          </p>
          <h1
            className="animate-fade-up mt-3 font-serif-display text-4xl font-semibold text-navy sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Warum es Kreativbrücke e.V. gibt
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-navy/80"
            style={{ animationDelay: "180ms" }}
          >
            Kreativbrücke e.V. ist ein gemeinnütziger Verein, der kreatives
            und keramisches Gestalten als Werkzeug für Begegnung, Teilhabe
            und persönliche Entfaltung nutzt. Wir glauben: Wenn Menschen
            gemeinsam mit ihren Händen arbeiten, entstehen nicht nur Objekte
            aus Ton – es entstehen Beziehungen, Vertrauen und neue
            Perspektiven.
          </p>
        </div>
      </section>

      <WaveDivider from="var(--color-sky)" to="var(--color-cream)" variant={2} />

      {/* Unser Zweck */}
      <section className="w-full" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      <WaveDivider from="var(--color-cream)" to="var(--color-sky)" variant={0} />

      {/* Für wen wir da sind */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="font-serif-display text-2xl font-semibold text-navy sm:text-3xl">
              Für wen wir da sind
            </h2>
            <p className="mt-4 max-w-2xl text-navy/80 leading-relaxed">
              Wir ermöglichen kreative, künstlerische und gestalterische
              Betätigung für Menschen, denen der Zugang dazu sonst aus
              finanziellen, gesundheitlichen, sozialen oder anderen Gründen
              nicht oder nur eingeschränkt möglich ist:
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {AUDIENCES.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div
                  className={`h-full ${
                    i % 2 === 0 ? "rounded-ceramic" : "rounded-ceramic-alt"
                  } bg-white/60 p-6 ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/75">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="var(--color-sky)" to="#ffffff" variant={1} />

      {/* Wie wir arbeiten */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="font-serif-display text-2xl font-semibold text-navy sm:text-3xl">
              Wie wir arbeiten
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {WORKING_PRINCIPLES.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 120}
                className={i === 1 ? "sm:-translate-y-3" : ""}
              >
                <div
                  className={`h-full ${
                    i % 2 === 0 ? "rounded-ceramic" : "rounded-ceramic-alt"
                  } bg-cream p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay font-serif-display text-sm font-semibold text-cream">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-serif-display text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/75">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12">
            <div className="rounded-ceramic bg-navy p-8 text-cream">
              <p className="font-serif-display text-xl font-semibold">
                Möchtest du Teil von Kreativbrücke e.V. werden?
              </p>
              <p className="mt-2 text-cream/75">
                Als Mitglied, Ehrenamtliche:r oder Unterstützer:in – wir
                freuen uns auf dich.
              </p>
              <Link
                href="/kontakt"
                className="mt-5 inline-block rounded-full bg-clay px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-clay-dark"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
