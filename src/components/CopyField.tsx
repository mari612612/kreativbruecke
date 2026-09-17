"use client";

import { useState } from "react";

export default function CopyField({
  label,
  value,
  copyValue,
  mono = true,
}: {
  label: string;
  value: string;
  copyValue?: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard-API evtl. nicht verfügbar (z. B. kein sicherer Kontext) –
      // dann bleibt der Wert zumindest zum manuellen Markieren sichtbar.
    }
  }

  return (
    <div className="flex min-w-0 flex-col gap-2 rounded-xl border border-navy/15 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-navy/50">
          {label}
        </p>
        <p
          className={`mt-0.5 break-words text-navy ${mono ? "font-mono text-sm sm:text-base" : ""}`}
        >
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="self-start shrink-0 rounded-full bg-clay/10 px-3 py-1.5 text-sm font-semibold text-clay transition-colors hover:bg-clay/20 sm:self-auto"
      >
        {copied ? "Kopiert!" : "Kopieren"}
      </button>
    </div>
  );
}
