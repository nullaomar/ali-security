import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import ApplyForm from "../components/apply-form";

export const metadata: Metadata = {
  title: "Work With Us | Capra Security",
  description:
    "Join the Capra Security team. We are looking for dedicated security professionals to join our growing network across Ontario.",
};

const benefits = [
  { label: "Competitive Pay" },
  { label: "Flexible Scheduling" },
  { label: "Ongoing Training" },
  { label: "Multiple Locations" },
  { label: "24/7 Support" },
];

export default function WorkWithUsPage() {
  return (
    <main className="bg-[#080f1a]">
      {/* ── HERO + BENEFITS ── */}
      <section className="relative overflow-hidden bg-[#080f1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,105,20,0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 md:pb-24 md:pt-40 lg:px-8">
          <ScrollReveal delayMs={80}>
            <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
              Careers
            </span>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] text-white">
              Join the Capra Security Team
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/45">
              We are always looking for dedicated, professional individuals to
              join our growing network of security personnel across Ontario.
            </p>
          </ScrollReveal>

          {/* Inline benefit pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {benefits.map((b, idx) => (
              <ScrollReveal key={b.label} delayMs={200 + idx * 60} variant="scale">
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-[#8b6914]/60">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[13px] font-medium text-white/50">{b.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="glow-line absolute bottom-0 left-0 right-0" />
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="border-t border-white/[0.04] bg-[#0f1b2d]">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <ScrollReveal delayMs={80}>
            <div className="mb-10 text-center">
              <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                Apply Now
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Application Form
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/35">
                Fill out the form below and upload your resume. Our recruitment
                team will review your application and be in touch.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={160}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm md:p-10">
              <ApplyForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#080f1a]">
        <div className="cta-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,105,20,0.15)_0%,_transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <ScrollReveal variant="scale" delayMs={80}>
            <h2 className="text-shimmer-gold text-4xl font-bold md:text-5xl">
              Ready to Start Your Career?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/35">
              Join a team that values professionalism, integrity, and your
              personal growth. Have questions? Reach out anytime.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@caprasecurity.ca"
                className="hero-btn group inline-flex items-center gap-2 rounded-xl bg-[#8b6914] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a08030] hover:shadow-[0_12px_32px_rgba(139,105,20,0.3)]"
              >
                Email Us
                <svg viewBox="0 0 20 20" className="hero-btn-arrow h-4 w-4" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="tel:4169530539"
                className="hero-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#8b6914]/40 hover:bg-white/10"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 416-953-0539
              </a>
              <Link
                href="/contact"
                className="hero-btn inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#8b6914]/40 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
