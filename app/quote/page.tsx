import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import QuoteForm from "../components/quote-form";

export const metadata: Metadata = {
  title: "Get a Quote | Capra Security",
  description: "Request a free, no-obligation security quote from Capra Security. We respond within 24 hours with a customized proposal.",
};

function revealDelay(delayMs: number): CSSProperties {
  return { "--reveal-delay": `${delayMs}ms` } as CSSProperties;
}

const steps = [
  { step: "01", title: "Submit Your Request", desc: "Fill out the form with your security requirements and property details.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { step: "02", title: "Consultation Call", desc: "Our team will contact you within 24 hours to discuss your needs in detail.", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { step: "03", title: "Custom Proposal", desc: "Receive a detailed proposal with pricing, staffing plan, and service timeline.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { step: "04", title: "Deployment", desc: "Once approved, we deploy vetted guards according to your custom plan.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#080f1a]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0f1b2d]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b2d]/60 via-transparent to-[#080f1a]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-36 pb-16 md:pt-40 md:pb-20 lg:px-8">
          <div className="reveal-up" style={revealDelay(0)}>
            <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-[#8b6914]">
              Free Quote
            </p>
            <div className="mt-2 h-[2px] w-16 bg-[#8b6914]" />
          </div>
          <h1
            className="reveal-up mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.1] text-white"
            style={revealDelay(80)}
          >
            Request a <span className="text-[#8b6914]">Security</span> Quote
          </h1>
          <p
            className="reveal-up mt-5 max-w-2xl text-base leading-relaxed text-white/50 md:text-[17px]"
            style={revealDelay(160)}
          >
            Tell us about your security needs and we&apos;ll provide a customized, no-obligation proposal within 24 hours. Every solution is tailored to your specific requirements.
          </p>
        </div>
      </section>

      {/* ── Form + Steps ── */}
      <section className="bg-[#0f1b2d]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Left - Steps + CTA */}
            <ScrollReveal delayMs={80} variant="left">
              <div>
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                  How It Works
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-white">What to Expect</h2>
                <div className="mt-8 space-y-6">
                  {steps.map((item) => (
                    <div key={item.step} className="group flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8b6914]/15 transition-colors duration-300 group-hover:bg-[#8b6914]/25">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#8b6914]" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-[#8b6914]/40">{item.step}</span>
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                        </div>
                        <p className="mt-1 text-[13px] leading-relaxed text-white/40">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Prefer to talk card */}
                <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                  <p className="text-sm font-semibold text-white">Prefer to talk?</p>
                  <p className="mt-1 text-[13px] text-white/40">Call us directly for an immediate consultation.</p>
                  <a
                    href="tel:4169530539"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6914] transition hover:text-[#a08030]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    416-953-0539
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal delayMs={160} variant="right">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0a1220] p-6 shadow-2xl md:p-8">
                <QuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
