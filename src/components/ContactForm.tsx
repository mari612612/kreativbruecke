"use client";

import { useState, type FormEvent } from "react";
import { ORG_TYPES } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";

export default function ContactForm() {
  const [organisation, setOrganisation] = useState("");
  const [orgType, setOrgType] = useState<(typeof ORG_TYPES)[number]>(
    ORG_TYPES[0]
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot, bleibt für Menschen leer

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organisation,
          orgType,
          name,
          email,
          message,
          website,
        }),
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
        <p className="font-semibold">Danke für deine Anfrage!</p>
        <p className="mt-1 text-sm text-navy/80">
          Wir melden uns innerhalb weniger Stunden bei dir zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <label
            htmlFor="organisation"
            className="block text-sm font-medium text-navy"
          >
            Organisation / Einrichtung
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            className={inputClass}
            placeholder="Name der Organisation"
          />
        </div>

        <div>
          <label
            htmlFor="orgType"
            className="block text-sm font-medium text-navy"
          >
            Art der Einrichtung
          </label>
          <select
            id="orgType"
            name="orgType"
            required
            value={orgType}
            onChange={(e) =>
              setOrgType(e.target.value as (typeof ORG_TYPES)[number])
            }
            className={inputClass}
          >
            {ORG_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Dein Name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy"
        >
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="deine@email.de"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Wie können wir dir helfen?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-clay px-6 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-clay-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
      <p className="text-xs text-navy/60">
        Wir melden uns in der Regel innerhalb weniger Stunden zurück.
      </p>
    </form>
  );
}
