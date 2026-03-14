import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import ServicesHero from "../components/services-hero";
import { services } from "../lib/services-data";

export const metadata: Metadata = {
  title: "Our Services | Capra Security",
  description:
    "Eight specialized security service categories - Fire Watch, Mobile Patrol, Loss Prevention, Event Security, REIT, Property Management, Industrial, and Construction Security.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#080f1a]">
      {/* ── HERO ── */}
      <ServicesHero />

      {/* ── SERVICE CARDS GRID ── */}
      <section className="border-t border-white/[0.04] bg-[#0f1b2d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          {/* Primary 4 */}
          <ScrollReveal delayMs={60}>
            <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
              01 - Core Services
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Primary Security Solutions
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((service, idx) => (
              <ScrollReveal
                key={service.slug}
                delayMs={100 + idx * 70}
                variant="scale"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <article className="service-other-card relative h-64 overflow-hidden rounded-2xl sm:h-72">
                    {/* BG image */}
                    <img
                      src={service.image}
                      alt=""
                      className="why-card-img absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080f1a] via-[#080f1a]/75 to-[#080f1a]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080f1a]/60 to-transparent" />

                    {/* Border glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-[#8b6914]/30" />
                    {/* Shine */}
                    <div className="feature-shine pointer-events-none absolute inset-0 z-[1]" />

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-end p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b6914]/15 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#8b6914]/25">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-[#a08030]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {service.iconPath.split(" M").map((d, i) => (
                            <path key={i} d={i === 0 ? d : `M${d}`} />
                          ))}
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/60">
                        {service.shortDesc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8b6914]/60 transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#a08030]">
                        View details
                        <svg
                          viewBox="0 0 20 20"
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-auto my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent lg:my-20" />

          {/* Specialized services */}
          <ScrollReveal delayMs={60}>
            <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
              02 - Specialized
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Specialized Security Services
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(4).map((service, idx) => (
              <ScrollReveal
                key={service.slug}
                delayMs={100 + idx * 70}
                variant="scale"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <article className="service-other-card relative h-56 overflow-hidden rounded-2xl">
                    {/* BG image */}
                    <img
                      src={service.image}
                      alt=""
                      className="why-card-img absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080f1a] via-[#080f1a]/80 to-[#080f1a]/25" />

                    {/* Border glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-[#8b6914]/30" />
                    <div className="feature-shine pointer-events-none absolute inset-0 z-[1]" />

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-end p-5">
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#8b6914]/15 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#8b6914]/25">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-[#a08030]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {service.iconPath.split(" M").map((d, i) => (
                            <path key={i} d={i === 0 ? d : `M${d}`} />
                          ))}
                        </svg>
                      </div>
                      <h3 className="text-[15px] font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
                        {service.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-white/55">
                        {service.shortDesc}
                      </p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#080f1a]">
        <div className="cta-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,105,20,0.15)_0%,_transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <ScrollReveal variant="scale" delayMs={80}>
            <h2 className="text-shimmer-gold text-4xl font-bold md:text-5xl">
              Need a Custom Solution?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/35">
              Every property and operation is different. Let us design a security
              plan tailored to your specific needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="hero-btn group inline-flex items-center gap-2 rounded-xl bg-[#8b6914] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a08030] hover:shadow-[0_12px_32px_rgba(139,105,20,0.3)]"
              >
                Get a Quote
                <svg
                  viewBox="0 0 20 20"
                  className="hero-btn-arrow h-4 w-4"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <a
                href="tel:4169530539"
                className="hero-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#8b6914]/40 hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="currentColor"
                >
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
