import type { Metadata } from "next";
import Image from "next/image";
import { AUDIENCES } from "@/data/audiences";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import HomeContactFlow from "@/components/HomeContactFlow";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Zweck, Zielgruppe und Werte von Kreativbrücke e.V. – warum wir Menschen durch kreatives und keramisches Gestalten verbinden.",
};

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
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
                Kreativbrücke e.V. ist ein gemeinnütziger Verein, der
                kreatives und keramisches Gestalten als Werkzeug für
                Begegnung, Teilhabe und persönliche Entfaltung nutzt. Wir
                glauben: Wenn Menschen gemeinsam mit ihren Händen arbeiten,
                entstehen nicht nur Objekte aus Ton – es entstehen
                Beziehungen, Vertrauen und neue Perspektiven.
              </p>
            </div>
            <div
              className="animate-fade-up mx-auto w-full max-w-[280px] sm:max-w-xs lg:mx-0 lg:max-w-none"
              style={{ animationDelay: "300ms" }}
            >
              <div className="relative aspect-[900/986] w-full rotate-[-3deg]">
                <Image
                  src="/team-marian-sophia.jpg"
                  alt="Marian und Sophia, die Gründer:innen von Kreativbrücke e.V., lachend in ihren pinken layers-Pullovern"
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, 280px"
                  className="rounded-[62%_38%_41%_59%/55%_44%_56%_45%] object-cover shadow-xl ring-4 ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wie alles begann */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 sm:pb-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_13rem]">
              <div>
                <h2 className="font-serif-display text-2xl font-semibold text-navy sm:text-3xl">
                  Wie alles begann
                </h2>
                <div className="mt-4 space-y-4 text-navy/80 leading-relaxed">
                  <p>
                    Wir sind Marian und Sophia. Mit{" "}
                    <a
                      href="https://layers-studios.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-clay hover:text-clay-dark"
                    >
                      layers
                    </a>{" "}
                    haben wir mit unseren Studios in{" "}
                    <a
                      href="https://layers-studios.de/koeln"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-clay hover:text-clay-dark"
                    >
                      Köln
                    </a>{" "}
                    und{" "}
                    <a
                      href="https://layers-studios.de/muenster"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-clay hover:text-clay-dark"
                    >
                      Münster
                    </a>{" "}
                    bereits Orte geschaffen, an denen Menschen zusammenkommen, um
                    gemeinsam zu gestalten. Dabei wurde uns schnell klar:
                    Nicht alle, die von diesem Zusammenkommen profitieren
                    würden, können den Weg zu uns auch tatsächlich gehen –
                    aus finanziellen, gesundheitlichen, sozialen oder
                    anderen Gründen. Genau für diese Menschen haben wir
                    Kreativbrücke e.V. ins Leben gerufen.
                  </p>
                  <p>
                    Kreativbrücke e.V. befindet sich gerade erst in der
                    Gründung – und schon jetzt sind wir nicht allein: Erste
                    Unterstützer:innen und Ehrenamtliche bringen sich mit
                    ihrer Zeit, ihrem Wissen und ihrer Energie ein und
                    helfen uns, aus der Idee einen lebendigen Verein zu
                    machen.
                  </p>
                </div>
              </div>
              <div className="mx-auto flex w-full max-w-xs items-start justify-center gap-6 sm:max-w-sm lg:mx-0 lg:w-52 lg:max-w-none lg:flex-col lg:gap-12 lg:pt-6">
                <div className="relative aspect-square w-1/2 rotate-[5deg] sm:w-36 lg:w-36 lg:self-end">
                  <Image
                    src="/team-marian.jpg"
                    alt="Marian, Mitgründer von Kreativbrücke e.V."
                    fill
                    sizes="144px"
                    className="rounded-[55%_45%_48%_52%/48%_52%_45%_55%] object-cover shadow-lg ring-4 ring-white"
                  />
                </div>
                <div className="relative aspect-square w-1/2 rotate-[-6deg] sm:w-40 lg:w-40 lg:self-start">
                  <Image
                    src="/team-sophia.jpg"
                    alt="Sophia, Mitgründerin von Kreativbrücke e.V."
                    fill
                    sizes="160px"
                    className="rounded-[48%_52%_55%_45%/45%_55%_48%_52%] object-cover shadow-lg ring-4 ring-white"
                  />
                </div>
              </div>
            </div>
          </Reveal>
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
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
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

      {/* Wie möchtest du mitwirken? */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <HomeContactFlow />
          </Reveal>
        </div>
      </section>
    </>
  );
}
