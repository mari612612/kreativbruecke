import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Wie Kreativbrücke e.V. starten möchte – erste Ideen für niedrigschwellige, aufsuchende Angebote rund um kreatives Gestalten.",
};

const VORHABEN = [
  {
    title: "Keramik bemalen als Einstieg",
    text: "Wir starten bewusst niedrigschwellig: mit dem Bemalen von Keramik – ganz ohne Vorerfahrung und ohne Töpferscheibe, einfach mit Pinsel und Farbe.",
  },
  {
    title: "Wir kommen zu euch",
    text: "Gerade am Anfang möchten wir dorthin gehen, wo unsere Zielgruppe bereits ist – etwa in Seniorenheime, Schulen oder soziale Einrichtungen – und das Angebot direkt vor Ort mitbringen.",
  },
  {
    title: "Bei uns vor Ort",
    text: "Wer den Weg zu uns gehen kann, ist herzlich eingeladen, in unseren Räumen mitzumachen und andere beim Gestalten zu treffen.",
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
            Wie wir starten wollen
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/80">
            Kreativbrücke e.V. befindet sich gerade erst in der Gründung –
            feste Programme gibt es noch nicht. Stattdessen haben wir eine
            klare Vorstellung davon, wie wir anfangen möchten. Diese wächst
            mit den Menschen, die mitmachen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {VORHABEN.map((item, i) => (
            <article
              key={item.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "rounded-ceramic" : "rounded-ceramic-alt"
              } bg-white/60 p-6 ring-1 ring-navy/5 transition-shadow hover:shadow-md`}
            >
              <h2 className="font-serif-display text-lg font-semibold text-navy">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-ceramic bg-navy p-8 text-center text-cream sm:p-10">
          <p className="font-serif-display text-2xl font-semibold">
            Du hast eine Idee oder möchtest kooperieren?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-cream/75">
            Ob Schule, Seniorenheim, soziale Einrichtung oder eigene
            Projektidee – wir bauen unser Angebot gerade erst auf und freuen
            uns über jeden Kontakt.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-block rounded-full bg-clay px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-clay-dark"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
