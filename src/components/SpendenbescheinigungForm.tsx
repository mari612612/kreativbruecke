"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";

export default function SpendenbescheinigungForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot, bleibt für Menschen leer

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/spendenbescheinigung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, address, email, website }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(
          data.error ?? "Da ist etwas schiefgelaufen. Bitte versuch es erneut."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage(
        "Da ist etwas schiefgelaufen. Bitte versuch es erneut oder schreib uns direkt an hallo@kreativbruecke.org."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-sky/60 px-5 py-4 text-navy">
        <p className="font-semibold">Danke für deine Angaben!</p>
        <p className="mt-1 text-sm text-navy/80">
          Wir melden uns bei dir, sobald wir Spendenbescheinigungen ausstellen
          können.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="sb-website">Website</label>
        <input
          id="sb-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sb-name" className="block text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="sb-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Vor- und Nachname"
          />
        </div>
        <div>
          <label htmlFor="sb-email" className="block text-sm font-medium text-navy">
            E-Mail (optional)
          </label>
          <input
            id="sb-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="deine@email.de"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sb-address" className="block text-sm font-medium text-navy">
          Anschrift
        </label>
        <textarea
          id="sb-address"
          required
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder={"Straße und Hausnummer\nPLZ und Ort"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-clay px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-clay-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Wird gesendet …" : "Angaben senden"}
      </button>
    </form>
  );
}
