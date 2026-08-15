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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-header.png"
            alt="Kreativbrücke e.V."
            width={1935}
            height={289}
            priority
            className="h-10 w-auto sm:h-12"
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
                    ? "bg-sky-dark text-navy"
                    : "text-navy/80 hover:bg-white/60 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="relative ml-2">
            <button
              type="button"
              disabled
              title="Direktspenden sind bald möglich"
              className="cursor-not-allowed rounded-full bg-clay/40 px-5 py-2 text-sm font-semibold text-cream/70"
            >
              Spenden
            </button>
            <span className="absolute left-1/2 top-full mt-1 w-max -translate-x-1/2 text-[11px] font-medium text-navy/60">
              Direktspenden bald möglich
            </span>
          </div>
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
                      ? "bg-sky-dark text-navy"
                      : "text-navy/80 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <button
                type="button"
                disabled
                className="block w-full cursor-not-allowed rounded-xl bg-clay/40 px-4 py-3 text-center font-semibold text-cream/70"
              >
                Spenden
              </button>
              <p className="mt-1.5 text-center text-xs font-medium text-navy/60">
                Direktspenden bald möglich
              </p>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
