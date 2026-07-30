import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif-display text-xl font-semibold">
              Kreativbrücke e.V.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
              Wir bringen Menschen durch gemeinsames kreatives und keramisches
              Gestalten zusammen – offen für alle, unabhängig von Alter,
              Herkunft oder Vorerfahrung.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/" className="hover:text-cream">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-cream">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/projekte" className="hover:text-cream">
                  Projekte
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-cream">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky">
              Rechtliches
            </p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/impressum" className="hover:text-cream">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-cream">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <a
                  href="mailto:kontakt@kreativbruecke-ev.de"
                  className="hover:text-cream"
                >
                  kontakt@kreativbruecke-ev.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/60">
          © {new Date().getFullYear()} Kreativbrücke e.V. · Gemeinnütziger
          Verein
        </div>
      </div>
    </footer>
  );
}
