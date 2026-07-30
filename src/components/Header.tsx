"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-sky/90 backdrop-blur supports-[backdrop-filter]:bg-sky/80 border-b border-navy/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/2.png"
            alt="Kreativbrücke e.V."
            width={2000}
            height={500}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-navy text-cream"
                    : "text-navy/80 hover:bg-white/60 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="ml-2 rounded-full bg-clay px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-clay-dark"
          >
            Mitmachen
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menü öffnen"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/10 bg-sky px-5 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    pathname === link.href
                      ? "bg-navy text-cream"
                      : "text-navy/80 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-clay px-4 py-3 text-center font-semibold text-cream"
              >
                Mitmachen
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
