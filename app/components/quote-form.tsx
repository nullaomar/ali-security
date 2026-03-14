"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "REIT Security",
  "Property Management Security",
  "Commercial & Industrial Logistics",
  "Mobile Security Guard",
  "Loss Prevention",
  "Event Security",
  "Onsite Construction Security",
  "Fire Watch Security Guard",
  "Other",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      location: (form.elements.namedItem("location") as HTMLInputElement).value,
      details: (form.elements.namedItem("details") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us at 416-953-0539.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">Quote Request Received</h3>
        <p className="mt-2 max-w-sm text-sm text-[var(--text-tertiary)]">
          Our team will review your request and provide a customized proposal within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-quaternary)] focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.08)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">
            Full Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">
            Company / Organization
          </label>
          <input id="company" name="company" type="text" placeholder="Optional" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="(416) 000-0000" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">
          Service Required
        </label>
        <select id="service" name="service" required className={inputClass} defaultValue="">
          <option value="" disabled>Select a service</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="location" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">
          Location / Site Address
        </label>
        <input id="location" name="location" type="text" placeholder="City, Province or full address" className={inputClass} />
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Describe your security needs, schedule, number of guards, etc."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-[var(--accent)] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/10 disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Request Free Quote"}
      </button>

      <p className="text-center text-xs text-[var(--text-quaternary)]">
        No obligation. We typically respond within 2-4 business hours.
      </p>
    </form>
  );
}
