import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/page-hero";
import ScrollReveal from "../components/scroll-reveal";
import QuoteForm from "../components/quote-form";

export const metadata: Metadata = {
  title: "Get a Quote | Capra Security",
  description: "Request a free, no-obligation security quote from Capra Security. We respond within 24 hours with a customized proposal.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <PageHero
        badge="Free Quote"
        title="Request a Security Quote"
        description="Tell us about your security needs and we'll provide a customized, no-obligation proposal within 24 hours. Every solution is tailored to your specific requirements."
      />

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <ScrollReveal delayMs={80}>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--text-primary)]">What to Expect</h2>
                <div className="mt-6 space-y-4">
                  {[
                    { step: "1", title: "Submit Your Request", desc: "Fill out the form with your security requirements and property details." },
                    { step: "2", title: "Consultation Call", desc: "Our team will contact you within 24 hours to discuss your needs in detail." },
                    { step: "3", title: "Custom Proposal", desc: "Receive a detailed proposal with pricing, staffing plan, and service timeline." },
                    { step: "4", title: "Deployment", desc: "Once approved, we deploy vetted guards according to your custom plan." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                        <p className="mt-0.5 text-[13px] text-[var(--text-tertiary)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Prefer to talk?</p>
                  <p className="mt-1 text-[13px] text-[var(--text-tertiary)]">Call us directly for an immediate consultation.</p>
                  <a href="tel:5199925412" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] transition hover:text-[var(--accent)]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    519-992-5412
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 shadow-xl shadow-black/[0.03] md:p-8">
                <QuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
