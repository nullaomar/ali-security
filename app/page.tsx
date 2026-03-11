import Link from "next/link";
import type { CSSProperties } from "react";
import ScrollReveal from "./components/scroll-reveal";
import HeroSlideshow from "./components/hero-slideshow";
import RotatingWords from "./components/rotating-words";
import TestimonialCards from "./components/testimonial-cards";
import AnimatedCounter from "./components/animated-counter";
import ScrollJourney from "./components/scroll-journey";
import { services } from "./lib/services-data";

const tickerItems = [
  "FIRE WATCH",
  "LOSS PREVENTION",
  "EVENT SECURITY",
  "MOBILE PATROL",
  "INDUSTRIAL SECURITY",
  "CONSTRUCTION SITES",
  "24/7 NATIONWIDE",
  "LICENSED & INSURED",
];

const stats = [
  { value: "24/7", label: "Operations Centre", sub: "Always active" },
  { value: "2020", label: "Year Founded", sub: "Growing nationwide" },
  { value: "7+", label: "Service Categories", sub: "Full-spectrum coverage" },
  { value: "100%", label: "Licensed & Insured", sub: "Complete compliance" },
];

const process = [
  { step: "01", title: "Assessment", description: "We conduct a thorough on-site or virtual evaluation of your property, risks, and operational requirements." },
  { step: "02", title: "Custom Solution", description: "Our team designs a tailored security plan with the right personnel, technology, protocols, and reporting structure." },
  { step: "03", title: "Deployment", description: "Vetted, trained guards are deployed with GPS tracking, real-time reporting, and 24/7 dispatch support." },
  { step: "04", title: "Ongoing Support", description: "Regular performance reviews, incident analysis, and plan adjustments ensure your security stays ahead of emerging threats." },
];

function revealDelay(delayMs: number): CSSProperties {
  return { "--reveal-delay": `${delayMs}ms` } as CSSProperties;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Scroll journey indicator */}
      <ScrollJourney />

      {/* ── Hero with Slideshow ── */}
      <section className="glow-line relative overflow-hidden section-divider-down" style={{ background: "var(--background)" }}>
        <HeroSlideshow />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-10 pb-20 md:pt-14 md:pb-28 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="reveal-up mt-1" style={revealDelay(0)}>
                <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-[#0f1b2d]">
                  Welcome to Capra
                </p>
                <div className="mt-2 h-[2px] w-16 bg-[#8b6914]" />
              </div>

              <h1 className="reveal-up mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-tight" style={revealDelay(80)}>
                <RotatingWords
                  words={[
                    "Security You Can Trust.",
                    "Safety You Can Count On.",
                    "Defense You Can Rely On.",
                  ]}
                  interval={3500}
                  className="text-shimmer"
                />
              </h1>

              <p
                className="reveal-up mt-5 max-w-xl text-[15px] font-medium leading-relaxed text-[#111111]"
                style={revealDelay(200)}
              >
                Since 2020, Capra Security has built a nationwide network of vetted security professionals across Canada. We deliver tailored protection for corporate, retail, industrial, and event operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="hero-btn hero-btn-red reveal-up inline-flex items-center gap-2 rounded-xl bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white shadow-lg"
                  style={revealDelay(350)}
                >
                  Get a Quote
                  <svg viewBox="0 0 20 20" className="hero-btn-arrow h-4 w-4" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="hero-btn hero-btn-white reveal-up inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f1b2d] shadow-lg"
                  style={revealDelay(450)}
                >
                  View Services
                  <svg viewBox="0 0 20 20" className="hero-btn-arrow h-4 w-4" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <TestimonialCards />
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker Strip ── */}
      <div className="ticker-strip bg-[#8b6914] py-3 relative z-10">
        <div className="ticker-strip-track">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-4 px-6 text-[12px] font-bold uppercase tracking-[0.2em] text-white/90">
              {item}
              <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Services preview ── */}
      <section className="bg-[#0f1b2d] pt-16 pb-14 section-divider-down" style={{ background: "#0f1b2d" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal delayMs={80}>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div>
                  <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-[#8b6914]">
                    Our Services
                  </p>
                  <div className="mt-2 h-[2px] w-16 bg-white/50" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                  <span className="services-text-shimmer">Full-Spectrum Security Solutions</span>
                </h2>
              </div>
              <Link href="/services" className="btn-arrow inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/70 transition hover:text-white">
                View all services
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, idx) => (
              <ScrollReveal key={service.slug} delayMs={100 + idx * 120} variant="scale">
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <article className="service-bento relative h-[200px] overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover blur-[0.8px] transition-all duration-700 group-hover:scale-110 group-hover:blur-0" />
                    <div className="service-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                    <div className="service-shine" />
                    <div className="service-border-glow" />
                    <div className="service-content relative flex h-full flex-col justify-end p-5">
                      <h3 className="text-base font-bold text-white transition-transform duration-300 group-hover:translate-x-1">{service.title}</h3>
                      <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-white/85 line-clamp-2 transition-opacity duration-300 group-hover:text-white">{service.shortDesc}</p>
                      <span className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-semibold text-white/70 transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#8b6914]">
                        Learn more
                        <svg viewBox="0 0 20 20" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(4).map((service, idx) => (
              <ScrollReveal key={service.slug} delayMs={200 + idx * 120} variant="scale">
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <article className="service-bento relative h-[200px] overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover blur-[0.8px] transition-all duration-700 group-hover:scale-110 group-hover:blur-0" />
                    <div className="service-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                    <div className="service-shine" />
                    <div className="service-border-glow" />
                    <div className="service-content relative flex h-full flex-col justify-end p-5">
                      <h3 className="text-base font-bold text-white transition-transform duration-300 group-hover:translate-x-1">{service.title}</h3>
                      <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-white/85 line-clamp-2 transition-opacity duration-300 group-hover:text-white">{service.shortDesc}</p>
                      <span className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-semibold text-white/70 transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#8b6914]">
                        Learn more
                        <svg viewBox="0 0 20 20" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Counter Strip ── */}
      <section className="bg-[#0a1220] py-14 relative z-10">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                sub={stat.sub}
                delayMs={idx * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ── */}
      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal delayMs={80} variant="left">
              <div>
                <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-[#8b6914]">
                  About Capra Security
                </p>
                <div className="mt-2 h-[2px] w-16 bg-[#0f1b2d]" />
                <h2 className="mt-5 text-3xl font-semibold text-[#0f1b2d] md:text-4xl">
                  A Trusted Partner in Protection
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
                  Established in 2020, Capra Security has built a nationwide network of highly vetted security
                  professionals. We examine performance indicators through comprehensive vetting processes and
                  deliver personalized recommendations for every client.
                </p>
                <Link
                  href="/about"
                  className="btn-arrow mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6914] transition hover:gap-3"
                >
                  Learn more about us
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={200} variant="right">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Integrity", desc: "Transparent operations with honest reporting and ethical conduct at every level." },
                  { title: "Accountability", desc: "GPS tracking, shift logs, and real-time incident communication you can rely on." },
                  { title: "Innovation", desc: "Leveraging modern technology for smarter, more efficient security operations." },
                  { title: "Personalization", desc: "Every client receives a tailored security solution designed for their unique needs." },
                ].map((v) => (
                  <article key={v.title} className="rounded-2xl border border-[#0f1b2d]/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-[#8b6914]/30">
                    <h3 className="text-sm font-semibold text-[#0f1b2d]">{v.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-tertiary)]">{v.desc}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white section-divider-up" style={{ background: "white" }}>
        <div className="mx-auto max-w-7xl px-5 pt-24 pb-20 lg:px-8">
          <ScrollReveal delayMs={80} variant="fade">
            <div className="mb-12 max-w-2xl">
              <p className="text-[15px] font-bold uppercase tracking-[0.18em] text-[#8b6914]">
                How It Works
              </p>
              <div className="mt-2 h-[2px] w-16 bg-[#0f1b2d]" />
              <h2 className="mt-5 text-3xl font-semibold text-[#0f1b2d] md:text-4xl">
                From Assessment to Deployment
              </h2>
            </div>
          </ScrollReveal>

          {/* Timeline-style process */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-4 top-0 bottom-0 hidden w-[2px] bg-gradient-to-b from-[#8b6914]/40 via-[#0f1b2d]/20 to-transparent lg:block" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p, idx) => (
                <ScrollReveal key={p.step} delayMs={100 + idx * 150} variant={idx % 2 === 0 ? "left" : "right"}>
                  <article className="relative rounded-2xl border border-[#0f1b2d]/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#8b6914]/30">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f1b2d] text-[13px] font-bold text-[#8b6914]">{p.step}</span>
                    <h3 className="mt-3 text-lg font-semibold text-[#0f1b2d]">{p.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-tertiary)]">{p.description}</p>
                    {idx < process.length - 1 && (
                      <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-[#8b6914]/30 lg:block" />
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0f1b2d] overflow-hidden relative">
        {/* Decorative radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#8b6914]/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8">
          <ScrollReveal delayMs={0} variant="scale">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to Secure Your Operation?</h2>
          </ScrollReveal>
          <ScrollReveal delayMs={150} variant="fade">
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              Whether you need a single fire watch guard or a full-scale security operation, Capra Security
              has the experience, personnel, and infrastructure to protect what matters most.
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={300} variant="up">
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="rounded-xl bg-[#8b6914] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-400 hover:-translate-y-1 hover:bg-[#a07a1a] hover:shadow-[0_8px_30px_rgba(139,105,20,0.3)]">
                Request a Quote
              </Link>
              <a href="tel:5199925412" className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-400 hover:-translate-y-1 hover:bg-white/5 hover:border-[#8b6914]/40">
                Call 519-992-5412
              </a>
              <Link href="/contact" className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-400 hover:-translate-y-1 hover:bg-white/5 hover:border-[#8b6914]/40">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
