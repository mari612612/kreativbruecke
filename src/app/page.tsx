import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="texture-rings absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-cream/60 sm:-right-16"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-sm font-medium text-navy shadow-sm">
            Gemeinnütziger Verein für Kreativität &amp; Keramik
          </p>
          <h1 className="mt-6 max-w-2xl font-serif-display text-4xl font-semibold leading-tight text-navy sm:text-5xl md:text-6xl">
            Kreativität verbindet Menschen.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/80">
            Kreativbrücke e.V. schafft Räume, in denen Menschen mit Ton, Farbe
            und Werkzeug gemeinsam gestalten – und dabei einander begegnen.
            Ob am Anfang oder mit Erfahrung: Bei uns ist jede und jeder
            willkommen.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-clay px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-clay-dark"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              href="/projekte"
              className="rounded-full border border-navy/20 px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy/5"
            >
              Unsere Projekte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Zweck / kurze Vorstellung */}
      <section className="bg-white/40 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="font-serif-display text-3xl font-semibold text-navy">
                Wofür wir stehen
              </h2>
              <p className="mt-4 text-navy/75">
                Drei Werte, die unsere Arbeit als Verein prägen.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
              {[
                {
                  title: "Begegnung",
                  text: "Wir bringen Menschen unterschiedlichen Alters und Hintergrunds an den Werktisch – Kreativität als gemeinsame Sprache.",
                },
                {
                  title: "Handwerk",
                  text: "Ob Ton, Glasur oder Brand: Wir vermitteln kreatives und keramisches Handwerk mit Freude am eigenen Tun.",
                },
                {
                  title: "Teilhabe",
                  text: "Unsere Angebote sind bewusst niedrigschwellig gestaltet, damit möglichst viele Menschen mitmachen können.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-navy/5"
                >
                  <h3 className="font-serif-display text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-navy py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h2 className="font-serif-display text-2xl font-semibold text-cream sm:text-3xl">
              Lust, mitzugestalten?
            </h2>
            <p className="mt-2 max-w-lg text-cream/75">
              Ob als Teilnehmende, Ehrenamtliche oder Fördermitglied –
              wir freuen uns über jede und jeden, der Kreativbrücke e.V.
              unterstützen möchte.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 rounded-full bg-clay px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-clay-dark"
          >
            Schreib uns
          </Link>
        </div>
      </section>
    </>
  );
}
