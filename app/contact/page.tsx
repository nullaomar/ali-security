import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/page-hero";
import ScrollReveal from "../components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contact Us | Capra Security",
  description: "Get in touch with Capra Security. Call 519-992-5412 or email info@caprasecurity.ca. Located at 3129 Marentette Ave, Unit #5, Windsor, Ontario.",
};

const contactMethods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "519-992-5412",
    detail: "Available 24/7 for emergencies",
    href: "tel:5199925412",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    label: "Email",
    value: "info@caprasecurity.ca",
    detail: "We respond within 2-4 business hours",
    href: "mailto:info@caprasecurity.ca",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Office",
    value: "3129 Marentette Ave, Unit #5",
    detail: "Windsor, Ontario N8X 4G1",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <PageHero
        badge="Contact Us"
        title="Get in Touch"
        description="Ready to discuss your security needs? Reach out to our team for a free consultation and personalized quote. We're available 24/7 for emergency requests."
      />

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method, idx) => (
              <ScrollReveal key={method.label} delayMs={80 + idx * 60}>
                <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--accent-mid)]">
                    {method.icon}
                  </div>
                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-quaternary)]">{method.label}</h3>
                  {method.href ? (
                    <a href={method.href} className="mt-1 block text-lg font-semibold text-[var(--text-primary)] transition hover:text-[var(--blue)]">
                      {method.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">{method.value}</p>
                  )}
                  <p className="mt-1 text-[13px] text-[var(--text-tertiary)]">{method.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal delayMs={80}>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">Business Hours</h2>
                <div className="mt-6 space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed (Emergency line active)" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between rounded-xl border border-[var(--border)] bg-white px-5 py-3.5">
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item.day}</span>
                      <span className="text-sm text-[var(--text-tertiary)]">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[var(--blue)]/15 bg-[var(--blue-soft)] p-5">
                  <p className="text-sm font-semibold text-[var(--accent)]">24/7 Emergency Response</p>
                  <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
                    Our dispatch centre operates around the clock. For urgent security needs, call us directly at 519-992-5412 for immediate assistance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">Quick Actions</h2>
                <div className="mt-6 space-y-3">
                  <Link href="/quote" className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--blue)]/30 hover:shadow-md">
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Request a Free Quote</p>
                      <p className="mt-0.5 text-[13px] text-[var(--text-tertiary)]">Get a customized security proposal</p>
                    </div>
                    <svg viewBox="0 0 20 20" className="h-5 w-5 text-[var(--text-quaternary)]" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="/apply" className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--blue)]/30 hover:shadow-md">
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Apply for a Position</p>
                      <p className="mt-0.5 text-[13px] text-[var(--text-tertiary)]">Join our team of security professionals</p>
                    </div>
                    <svg viewBox="0 0 20 20" className="h-5 w-5 text-[var(--text-quaternary)]" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="/services" className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--blue)]/30 hover:shadow-md">
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Browse Our Services</p>
                      <p className="mt-0.5 text-[13px] text-[var(--text-tertiary)]">Explore our full range of security solutions</p>
                    </div>
                    <svg viewBox="0 0 20 20" className="h-5 w-5 text-[var(--text-quaternary)]" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
