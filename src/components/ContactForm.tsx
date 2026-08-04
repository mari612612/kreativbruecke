"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hallo@kreativbruecke.org";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Kontaktanfrage von ${name || "Website"}`;
    const body = [
      message,
      "",
      "---",
      `Name: ${name}`,
      `E-Mail: ${email}`,
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30"
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
          className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30"
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
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full resize-none rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30"
          placeholder="Wie können wir dir helfen?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-clay px-6 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-clay-dark sm:w-auto"
      >
        Nachricht senden
      </button>
      <p className="text-xs text-navy/60">
        Beim Absenden öffnet sich dein E-Mail-Programm mit einer
        vorausgefüllten Nachricht an uns.
      </p>
    </form>
  );
}
