import Link from "next/link";

export default function MobileDonateBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-cream/95 px-5 py-3 backdrop-blur supports-[backdrop-filter]:bg-cream/85 sm:hidden">
      <Link
        href="/spenden"
        className="block w-full rounded-full bg-clay py-3 text-center text-base font-semibold text-cream shadow-sm transition-colors hover:bg-clay-dark"
      >
        Jetzt spenden
      </Link>
    </div>
  );
}
