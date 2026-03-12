import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/scroll-reveal";
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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="hero-grid border-b bg-gradient-to-b from-white via-[var(--background)] to-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 pt-28 pb-16 md:pt-32 md:pb-20 lg:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[var(--text-tertiary)]">
            <Link href="/services" className="transition hover:text-[var(--accent)]">Services</Link>
            <span>/</span>
            <span className="text-[var(--text-primary)]">{service.title}</span>
          </div>
          <h1 className="reveal-up mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.1] text-[var(--text-primary)]" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            {service.title}
          </h1>
          <p className="reveal-up mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-[17px]" style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            {service.shortDesc}
          </p>
          <div className="reveal-up mt-8 flex flex-wrap gap-3" style={{ "--reveal-delay": "260ms" } as React.CSSProperties}>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]">
              Get a Quote for This Service
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <a href="tel:5199925412" className="inline-flex items-center rounded-xl border border-[var(--border-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              Call 519-992-5412
            </a>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <ScrollReveal delayMs={80}>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">Service Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">{service.longDesc}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">Key Features</h3>
                <ul className="mt-4 space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-[var(--blue)]">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-b bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <ScrollReveal delayMs={80}>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">Other Services</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, idx) => (
              <ScrollReveal key={s.slug} delayMs={100 + idx * 50}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <article className="service-card rounded-2xl border border-[var(--border)] bg-white p-5">
                    <h3 className="text-[15px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">{s.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-tertiary)]">{s.shortDesc}</p>
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
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
              Contact us today for a free consultation and customized proposal for {service.title.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[var(--accent)] transition hover:bg-gray-50">Get a Quote</Link>
              <Link href="/contact" className="rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
