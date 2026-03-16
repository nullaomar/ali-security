import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contact Us | Capra Security",
  description:
    "Get in touch with Capra Security. Call 416-953-0539 or email info@caprasecurity.ca. Offices in Mississauga and Windsor, Ontario.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#080f1a]">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#080f1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,105,20,0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 md:pb-20 md:pt-40 lg:px-8">
          <ScrollReveal delayMs={80}>
            <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
              Get in Touch
            </span>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] text-white">
              Contact Us
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/45">
              Ready to discuss your security needs? Reach out to our team for a
              free consultation and personalized quote.
            </p>
          </ScrollReveal>
        </div>
        <div className="glow-line absolute bottom-0 left-0 right-0" />
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="border-t border-white/[0.04] bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Phone",
                value: "416-953-0539",
                detail: "Available 24/7 for emergencies",
                href: "tel:4169530539",
                icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
              },
              {
                label: "Email",
                value: "info@caprasecurity.ca",
                detail: "We respond within 2-4 business hours",
                href: "mailto:info@caprasecurity.ca",
                icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
              },
              {
                label: "Offices",
                value: "Mississauga & Windsor",
                detail: "Serving the GTA and Southwestern Ontario",
                icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
              },
            ].map((method, idx) => (
              <ScrollReveal key={method.label} delayMs={100 + idx * 80} variant="scale">
                <article className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#8b6914]/20 hover:bg-white/[0.04]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b6914]/10 text-[#a08030] transition-colors duration-300 group-hover:bg-[#8b6914]/20">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {method.icon.split(" M").map((d, i) => (
                        <path key={i} d={i === 0 ? d : `M${d}`} />
                      ))}
                      {method.label === "Offices" && <circle cx="12" cy="10" r="3" />}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b6914]/50">
                    {method.label}
                  </h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="mt-2 block text-lg font-semibold text-white transition hover:text-[#d4a017]"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-white">{method.value}</p>
                  )}
                  <p className="mt-1.5 text-[13px] text-white/35">{method.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="border-t border-white/[0.04] bg-[#0f1b2d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <ScrollReveal delayMs={80}>
            <div className="mb-10 text-center">
              <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                Our Locations
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Come Visit Us at One of Our <span className="text-[#8b6914]">Offices</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mississauga */}
            <ScrollReveal delayMs={80} variant="left">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b6914]/10">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#a08030]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Mississauga Office</h3>
                    <p className="text-[13px] text-white/35">Head Office</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/50">
                  7315 Torbram Rd<br />
                  Mississauga, ON L4T 1G8
                </p>
              </div>
            </ScrollReveal>

            {/* Windsor */}
            <ScrollReveal delayMs={160} variant="right">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b6914]/10">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#a08030]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Windsor Office</h3>
                    <p className="text-[13px] text-white/35">Regional Office</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/50">
                  3129 Marentette Ave, Unit #5<br />
                  Windsor, Ontario N8X 4G1
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HOURS & ACTIONS ── */}
      <section className="border-t border-white/[0.04] bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal delayMs={80}>
              <div>
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                  Availability
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Business Hours
                </h2>
                <div className="mt-8 space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed (Emergency line active)" },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
                    >
                      <span className="text-sm font-medium text-white/70">{item.day}</span>
                      <span className="text-sm text-white/40">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[#8b6914]/20 bg-[#8b6914]/[0.06] p-5">
                  <p className="text-sm font-semibold text-[#d4a017]">24/7 Emergency Response</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/40">
                    Our dispatch centre operates around the clock. For urgent
                    security needs, call us directly at{" "}
                    <a href="tel:4169530539" className="text-[#a08030] hover:text-[#d4a017]">
                      416-953-0539
                    </a>{" "}
                    for immediate assistance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div>
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                  Next Steps
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Quick Actions
                </h2>
                <div className="mt-8 space-y-3">
                  {[
                    {
                      href: "/quote",
                      title: "Request a Free Quote",
                      desc: "Get a customized security proposal",
                    },
                    {
                      href: "/work-with-us",
                      title: "Apply for a Position",
                      desc: "Join our team of security professionals",
                    },
                    {
                      href: "/services",
                      title: "Browse Our Services",
                      desc: "Explore our full range of security solutions",
                    },
                  ].map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-500 hover:border-[#8b6914]/25 hover:bg-white/[0.04]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {action.title}
                        </p>
                        <p className="mt-0.5 text-[13px] text-white/35">
                          {action.desc}
                        </p>
                      </div>
                      <svg
                        viewBox="0 0 20 20"
                        className="h-5 w-5 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8b6914]"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#080f1a]">
        <div className="cta-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,105,20,0.15)_0%,_transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <ScrollReveal variant="scale" delayMs={80}>
            <h2 className="text-shimmer-gold text-4xl font-bold md:text-5xl">
              Let&apos;s Secure Your Operation
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/35">
              Contact us today for a free consultation. We respond within 2-4
              business hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="hero-btn group inline-flex items-center gap-2 rounded-xl bg-[#8b6914] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a08030] hover:shadow-[0_12px_32px_rgba(139,105,20,0.3)]"
              >
                Get a Quote
                <svg viewBox="0 0 20 20" className="hero-btn-arrow h-4 w-4" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <a
                href="tel:4169530539"
                className="hero-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#8b6914]/40 hover:bg-white/10"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 416-953-0539
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
