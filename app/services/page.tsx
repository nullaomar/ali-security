import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/page-hero";
import ScrollReveal from "../components/scroll-reveal";
import { services } from "../lib/services-data";

export const metadata: Metadata = {
  title: "Our Services | Capra Security",
  description: "Seven specialized security service categories — Fire Watch, Mobile Patrol, Loss Prevention, Event Security, Operations & Logistics, Industrial Security, and Construction Security.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <PageHero
        badge="Our Services"
        title="Full-Spectrum Security Solutions"
        description="Seven specialized service categories covering every security need — from emergency fire watch to long-term industrial protection. Each service is backed by trained, vetted personnel and 24/7 dispatch support."
      />

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <ScrollReveal key={service.slug} delayMs={80 + idx * 50}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <article className="service-card flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--accent-mid)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {service.iconPath.split(" M").map((d, i) => (
                          <path key={i} d={i === 0 ? d : `M${d}`} />
                        ))}
                      </svg>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-tertiary)]">{service.shortDesc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--blue)] transition group-hover:gap-2.5">
                      View service details
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--accent)]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
          <ScrollReveal delayMs={80}>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Need a Custom Security Solution?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
              Every property and operation is different. Let us design a security plan tailored to your specific needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[var(--accent)] transition hover:bg-gray-50">Get a Quote</Link>
              <a href="tel:5199925412" className="rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Call 519-992-5412</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
