import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Ein Überblick über die Projekte und Angebote von Kreativbrücke e.V. – von offenen Werkstätten bis zu Gemeinschaftsprojekten.",
};

const PROJECTS = [
  {
    title: "Offene Töpferwerkstatt",
    tag: "Wöchentlich",
    text: "Jeden Mittwochabend öffnen wir unsere Werkstatt für alle, die frei an der Töpferscheibe oder von Hand arbeiten möchten – Anfänger:innen inklusive.",
  },
  {
    title: "Kreativbrücke für Schulen",
    tag: "Kooperation",
    text: "Gemeinsam mit lokalen Schulen bringen wir Keramik-Workshops in den Unterricht und ermöglichen Schüler:innen ein praktisches, kreatives Erlebnis.",
  },
  {
    title: "Ferienwerkstatt für Kinder",
    tag: "Saisonal",
    text: "In den Schulferien gestalten Kinder eigene Objekte aus Ton – von der ersten Idee bis zum gebrannten Ergebnis zum Mitnehmen.",
  },
  {
    title: "Gemeinschaftsprojekt: Wandkeramik",
    tag: "Community-Projekt",
    text: "Nachbarschaften gestalten gemeinsam großformatige Keramik-Wandbilder für öffentliche Räume – ein sichtbares Zeichen für Zusammenhalt.",
  },
  {
    title: "Begegnungscafé mit Werkbank",
    tag: "Monatlich",
    text: "Ein offenes Format, das Kaffee, Gespräch und kreatives Gestalten verbindet – besonders für Menschen, die neu in der Stadt oder isoliert sind.",
  },
  {
    title: "Brennofen-Patenschaften",
    tag: "Förderprojekt",
    text: "Mit Spenden und Patenschaften finanzieren wir Betrieb und Wartung unserer Brennöfen, damit die Werkstatt allen offensteht.",
  },
];

export default function Projekte() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Projekte
          </p>
          <h1 className="mt-3 max-w-2xl font-serif-display text-4xl font-semibold text-navy sm:text-5xl">
            Was wir gemeinsam gestalten
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/80">
            Von der offenen Werkstatt bis zum Gemeinschaftsprojekt im
            öffentlichen Raum: Unsere Angebote entstehen aus den
            Bedürfnissen der Menschen, die mitmachen – und wachsen mit
            ihnen weiter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl bg-white/60 p-6 ring-1 ring-navy/5 transition-shadow hover:shadow-md"
            >
              <span className="inline-block w-fit rounded-full bg-sky/60 px-3 py-1 text-xs font-semibold text-navy">
                {project.tag}
              </span>
              <h2 className="mt-4 font-serif-display text-lg font-semibold text-navy">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">
                {project.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-navy p-8 text-center text-cream sm:p-10">
          <p className="font-serif-display text-2xl font-semibold">
            Du hast eine Projektidee?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-cream/75">
            Wir sind offen für neue Formate und Kooperationen. Sprich uns
            gerne an – gemeinsam finden wir einen Weg, deine Idee
            umzusetzen.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-block rounded-full bg-clay px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-clay-dark"
          >
            Idee einreichen
          </Link>
        </div>
      </section>
    </>
  );
}
