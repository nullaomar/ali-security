"use client";

import { useState, type FormEvent } from "react";

const positionOptions = [
  "Security Guard",
  "Mobile Patrol Officer",
  "Fire Watch Guard",
  "Event Security Personnel",
  "Loss Prevention Officer",
  "Site Supervisor",
  "Other",
];

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">Application Submitted</h3>
        <p className="mt-2 max-w-sm text-sm text-[var(--text-tertiary)]">
          Thank you for your interest. Our recruitment team will review your application and contact you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-quaternary)] focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.08)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-name" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">Full Name</label>
          <input id="apply-name" type="text" required placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="apply-email" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">Email</label>
          <input id="apply-email" type="email" required placeholder="you@email.com" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-phone" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">Phone</label>
          <input id="apply-phone" type="tel" required placeholder="(519) 000-0000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="apply-city" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">City / Region</label>
          <input id="apply-city" type="text" required placeholder="Windsor, ON" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="apply-position" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">Position Interested In</label>
        <select id="apply-position" required className={inputClass} defaultValue="">
          <option value="" disabled>Select a position</option>
          {positionOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="apply-license" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">Security License #</label>
        <input id="apply-license" type="text" placeholder="Your security license number (if applicable)" className={inputClass} />
      </div>

      <div>
        <label htmlFor="apply-experience" className="mb-1.5 block text-[13px] font-medium text-[var(--text-secondary)]">Experience &amp; Qualifications</label>
        <textarea
          id="apply-experience"
          rows={4}
          placeholder="Describe your security experience, certifications, availability, etc."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-[var(--accent)] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg hover:shadow-[var(--accent)]/10 disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
