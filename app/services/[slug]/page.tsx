import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/scroll-reveal";
import ServiceHero from "../../components/service-hero";
import ServiceFeatures from "../../components/service-features";
import ServiceProcess from "../../components/service-process";
import { services, getServiceBySlug } from "../../lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found | Capra Security" };
  return {
    title: `${service.title} | Capra Security`,
    description: service.shortDesc,
  };
}

const trustItems = [
  "Licensed & Insured",
  "24/7 Operations Center",
  "Rapid Emergency Response",
  "GPS-Tracked Patrols",
  "Provincial Compliance",
  "Custom Security Plans",
  "Dedicated Account Managers",
  "Former Law Enforcement",
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <main className="bg-[#080f1a]">
      {/* ── 1. CINEMATIC HERO ── */}
      <ServiceHero
        title={service.title}
        description={service.shortDesc}
        image={service.image}
      />

      {/* ── 2. SERVICE OVERVIEW ── */}
      <section className="border-t border-white/[0.04] bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <ScrollReveal variant="left" delayMs={80}>
              <div>
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                  01 - Overview
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Service Overview
                </h2>
                <p className="mt-6 text-base leading-[1.8] text-white/45">
                  {service.longDesc}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#a08030] transition hover:text-[#d4a017]"
                  >
                    Request a proposal
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right" delayMs={200}>
              <div className="relative">
                {/* Gold accent bar */}
                <div className="absolute -left-3 bottom-6 top-6 w-1 rounded-full bg-gradient-to-b from-[#8b6914] via-[#a08030] to-[#8b6914]/20" />
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[320px] w-full object-cover lg:h-[400px]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. KEY CAPABILITIES ── */}
      <section className="border-t border-white/[0.04] bg-[#0f1b2d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <ScrollReveal delayMs={80}>
            <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
              02 - Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Key Capabilities
            </h2>
          </ScrollReveal>
          <div className="mt-10">
            <ServiceFeatures features={service.features} />
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS TIMELINE ── */}
      <section className="border-t border-white/[0.04] bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <ScrollReveal delayMs={80}>
            <div className="mb-16 text-center">
              <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                03 - Process
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                How We Work
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/35">
                A proven four-step approach that ensures seamless integration and
                maximum protection from day one.
              </p>
            </div>
          </ScrollReveal>
          <ServiceProcess />
        </div>
      </section>

      {/* ── 5. TRUST TICKER BAND ── */}
      <section className="overflow-hidden border-y border-white/[0.04] bg-[#080f1a] py-4">
        <div className="ticker-strip">
          <div className="ticker-strip-track">
            {[0, 1].map((setIdx) => (
              <div key={setIdx} className="flex items-center">
                {trustItems.map((item, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="flex items-center gap-3 px-8"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 shrink-0 fill-[#8b6914]/40"
                    >
                      <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
                    </svg>
                    <span className="whitespace-nowrap text-[13px] font-medium text-white/30">
                      {item}
                    </span>
                    <span className="text-[8px] text-[#8b6914]/30">◆</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OTHER SERVICES ── */}
      <section className="bg-[#0f1b2d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <ScrollReveal delayMs={80}>
            <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
              Explore More
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Other Services
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, idx) => (
              <ScrollReveal
                key={s.slug}
                delayMs={100 + idx * 60}
                variant="scale"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group block"
                >
                  <article className="service-other-card relative h-52 overflow-hidden rounded-2xl">
                    <img
                      src={s.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080f1a] via-[#080f1a]/70 to-[#080f1a]/20" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-[#8b6914]/30" />

                    {/* Shine sweep */}
                    <div className="service-shine pointer-events-none absolute inset-0 z-[1]" />

                    <div className="relative flex h-full flex-col justify-end p-5">
                      <h3 className="text-[15px] font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                        {s.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-white/50">
                        {s.shortDesc}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-[#8b6914]/60 transition-colors duration-300 group-hover:text-[#a08030]">
                        Learn more
                        <svg
                          viewBox="0 0 20 20"
                          className="h-3 w-3"
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
        </div>
      </section>

      {/* ── 7. CTA WITH GLOW ── */}
      <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#080f1a]">
        {/* Radial gold glow */}
        <div className="cta-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,105,20,0.15)_0%,_transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <ScrollReveal variant="scale" delayMs={80}>
            <h2 className="text-shimmer-gold text-4xl font-bold md:text-5xl">
              Ready to Secure Your Operation?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/35">
              Contact us today for a free consultation and customized security
              proposal for {service.title.toLowerCase()}.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="hero-btn group inline-flex items-center gap-2 rounded-xl bg-[#8b6914] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a08030] hover:shadow-[0_12px_32px_rgba(139,105,20,0.3)]"
              >
                Request a Quote
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
              <Link
                href="/contact"
                className="hero-btn inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#8b6914]/40 hover:bg-white/10"
              >
                Contact Us
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
