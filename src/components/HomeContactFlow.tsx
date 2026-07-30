"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "kontakt@kreativbruecke-ev.de";

type Category = "kooperation" | "mitgliedschaft" | "sonstiges";

const CATEGORIES: {
  id: Category;
  title: string;
  text: string;
}[] = [
  {
    id: "kooperation",
    title: "Kooperation",
    text: "Schule, Verein oder Unternehmen",
  },
  {
    id: "mitgliedschaft",
    title: "Mitgliedschaft",
    text: "Als Mitglied oder Fördermitglied dabei sein",
  },
  {
    id: "sonstiges",
    title: "Sonstiges",
    text: "Andere Frage oder Anliegen",
  },
];

const CATEGORY_LABEL: Record<Category, string> = {
  kooperation: "Kooperationsanfrage",
  mitgliedschaft: "Mitgliedschaftsanfrage",
  sonstiges: "Kontaktanfrage",
};

const ORG_TYPES = ["Schule", "Verein", "Unternehmen", "Andere"];

export default function HomeContactFlow() {
  const [category, setCategory] = useState<Category | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [orgType, setOrgType] = useState(ORG_TYPES[0]);
  const [message, setMessage] = useState("");

  function reset() {
    setCategory(null);
    setName("");
    setEmail("");
    setOrg("");
    setOrgType(ORG_TYPES[0]);
    setMessage("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!category) return;

    const subjectWho = category === "kooperation" ? org || name : name;
    const subject = `${CATEGORY_LABEL[category]} von ${subjectWho || "Website"}`;

    const bodyLines = [message, "", "---", `Kategorie: ${CATEGORY_LABEL[category]}`];
    if (category === "kooperation") {
      bodyLines.push(`Organisation: ${org} (${orgType})`);
    }
    bodyLines.push(`Name: ${name}`, `E-Mail: ${email}`);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";

  if (!category) {
    return (
      <div className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-navy/60">
          Wie möchtest du mitwirken?
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`w-full max-w-xs flex-1 text-left ${
                i % 2 === 0 ? "rounded-ceramic" : "rounded-ceramic-alt"
              } bg-cream p-5 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <span className="font-serif-display text-lg font-semibold text-navy">
                {c.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-navy/70">
                {c.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 max-w-xl rounded-ceramic bg-white/70 p-6 ring-1 ring-navy/5 sm:p-8">
      <button
        type="button"
        onClick={reset}
        className="text-sm font-medium text-navy/60 hover:text-navy"
      >
        ← Andere Kategorie wählen
      </button>
      <p className="mt-3 font-serif-display text-lg font-semibold text-navy">
        {CATEGORY_LABEL[category]}
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        {category === "kooperation" && (
          <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
            <div>
              <label htmlFor="org" className="block text-sm font-medium text-navy">
                Organisation / Einrichtung
              </label>
              <input
                id="org"
                type="text"
                required
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className={inputClass}
                placeholder="Name der Organisation"
              />
            </div>
            <div>
              <label htmlFor="orgType" className="block text-sm font-medium text-navy">
                Art
              </label>
              <select
                id="orgType"
                value={orgType}
                onChange={(e) => setOrgType(e.target.value)}
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
        )}

        <div>
          <label htmlFor="hcf-name" className="block text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="hcf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Dein Name"
          />
        </div>

        <div>
          <label htmlFor="hcf-email" className="block text-sm font-medium text-navy">
            E-Mail
          </label>
          <input
            id="hcf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="deine@email.de"
          />
        </div>

        <div>
          <label htmlFor="hcf-message" className="block text-sm font-medium text-navy">
            Nachricht
          </label>
          <textarea
            id="hcf-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
            placeholder="Wie können wir dir helfen?"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-clay px-6 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-clay-dark sm:w-auto"
        >
          Nachricht senden
        </button>
      </form>
    </div>
  );
}
