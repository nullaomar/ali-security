import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/page-hero";
import ScrollReveal from "../components/scroll-reveal";
import ApplyForm from "../components/apply-form";

export const metadata: Metadata = {
  title: "Apply Now | Capra Security",
  description: "Join the Capra Security team. We are looking for dedicated security professionals to join our growing nationwide network.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <PageHero
        badge="Careers"
        title="Join the Capra Security Team"
        description="We are always looking for dedicated, professional individuals to join our growing network of security personnel. If you have the skills and the commitment, we want to hear from you."
      />

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <ScrollReveal delayMs={80}>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Why Work With Us</h2>
                <div className="mt-6 space-y-4">
                  {[
                    { title: "Competitive Pay", desc: "Industry-competitive wages with opportunities for overtime and shift premiums." },
                    { title: "Flexible Scheduling", desc: "Full-time, part-time, and contract positions available to fit your lifestyle." },
                    { title: "Professional Development", desc: "Ongoing training in conflict resolution, first aid, fire safety, and more." },
                    { title: "Nationwide Opportunities", desc: "Placements available across multiple provinces and service categories." },
                    { title: "Supportive Environment", desc: "24/7 dispatch support and a management team that values your safety and well-being." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-[var(--blue)]">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                        <p className="mt-0.5 text-[13px] text-[var(--text-tertiary)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Have questions?</p>
                  <p className="mt-1 text-[13px] text-[var(--text-tertiary)]">Contact our recruitment team for more information.</p>
                  <a href="mailto:info@caprasecurity.ca" className="mt-2 inline-flex text-sm font-semibold text-[var(--blue)] transition hover:text-[var(--accent)]">
                    info@caprasecurity.ca
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 shadow-xl shadow-black/[0.03] md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">Application Form</h3>
                  <p className="mt-1 text-sm text-[var(--text-tertiary)]">Fill out the form below and our team will be in touch.</p>
                </div>
                <ApplyForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
