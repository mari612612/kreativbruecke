import Image from "next/image";
import HomeContactFlow from "@/components/HomeContactFlow";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";
import { AUDIENCES } from "@/data/audiences";

const AUDIENCE_WORDS = AUDIENCES.map((a) => a.short);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden">
        <Image
          src="/bridge-icon-v2.png"
          alt=""
          aria-hidden
          width={1384}
          height={435}
          className="animate-drift pointer-events-none absolute bottom-0 left-1/2 w-[150%] max-w-none opacity-[0.06] sm:w-[115%] md:w-[100%]"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
          <p
            className="animate-fade-up inline-flex items-center gap-2 rounded-md bg-cream px-4 py-1.5 text-sm font-medium text-navy shadow-sm"
            style={{ animationDelay: "0ms" }}
          >
            Gemeinnütziger Verein für Kreativität &amp; Keramik
          </p>
          <h1
            className="animate-fade-up mt-8 max-w-3xl font-serif-display text-5xl font-semibold leading-[0.95] tracking-tight text-navy sm:text-7xl md:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            Kreativität
            <br />
            verbindet Menschen.
          </h1>
          <p
            className="animate-fade-up mt-5 font-serif-display text-2xl italic text-clay sm:text-3xl"
            style={{ animationDelay: "180ms" }}
          >
            Für <RotatingWord words={AUDIENCE_WORDS} />.
          </p>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-navy/80"
            style={{ animationDelay: "260ms" }}
          >
            Kreativbrücke e.V. schafft Räume, in denen Menschen mit Ton, Farbe
            und Werkzeug gemeinsam gestalten und dabei einander begegnen.
            Ob am Anfang oder mit Erfahrung: Bei uns ist jede und jeder
            willkommen.
          </p>
        </div>
      </section>

      {/* Für wen wir da sind */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-serif-display text-3xl font-semibold text-navy sm:text-4xl">
              Für wen wir da sind
            </h2>
            <p className="mt-3 max-w-2xl text-navy/75">
              Wir ermöglichen kreative, künstlerische und gestalterische
              Betätigung für Menschen, denen der Zugang dazu sonst aus
              finanziellen, gesundheitlichen, sozialen oder anderen Gründen
              nicht oder nur eingeschränkt möglich ist.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {AUDIENCES.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div
                  className={`h-full ${
                    i % 2 === 0 ? "rounded-ceramic" : "rounded-ceramic-alt"
                  } bg-white/60 p-5 ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
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

      {/* Zweck / kurze Vorstellung */}
      <section className="bg-white/40 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <Reveal className="md:col-span-1">
              <h2 className="font-serif-display text-4xl font-semibold text-navy">
                Wofür wir stehen
              </h2>
              <p className="mt-4 text-navy/75">
                Drei Werte, die unsere Arbeit als Verein prägen.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
              {[
                {
                  title: "Begegnung",
                  text: "Wir bringen Menschen unterschiedlichen Alters und Hintergrunds in die Kreativstudios – Kreativität als gemeinsame Sprache.",
                  offset: "md:translate-y-4",
                },
                {
                  title: "Handwerk",
                  text: "Wir vermitteln kreatives Handwerk mit Freude am eigenen Tun.",
                  offset: "md:-translate-y-2",
                },
                {
                  title: "Teilhabe",
                  text: "Unsere Angebote sind bewusst niedrigschwellig gestaltet, damit möglichst viele Menschen mitmachen können.",
                  offset: "md:translate-y-4",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 120} className={item.offset}>
                  <div
                    className={`${
                      i % 2 === 0 ? "rounded-ceramic" : "rounded-ceramic-alt"
                    } bg-cream p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  >
                    <h3 className="font-serif-display text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/75">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wie möchtest du mitwirken? */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <HomeContactFlow />
          </Reveal>
        </div>
      </section>
    </>
  );
}
