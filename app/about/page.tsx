import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/page-hero";
import ScrollReveal from "../components/scroll-reveal";

export const metadata: Metadata = {
  title: "About Us | Capra Security",
  description: "Learn about Capra Security — founded in 2020, operating a nationwide network of vetted security professionals guided by integrity, accountability, and innovation.",
};

const values = [
  { title: "Integrity", desc: "Transparent operations with honest reporting and ethical conduct at every level of our organization." },
  { title: "Accountability", desc: "GPS tracking, shift logs, and real-time incident communication you can rely on at all times." },
  { title: "Innovation", desc: "Leveraging modern technology for smarter, more efficient security operations and faster response times." },
  { title: "Personalization", desc: "Every client receives a tailored security solution designed for their unique operational needs." },
  { title: "Professionalism", desc: "Rigorous vetting and ongoing training ensures our guards uphold the highest standards of service." },
  { title: "Reliability", desc: "24/7 dispatch centre and nationwide coverage means we are always ready when you need us." },
];

const milestones = [
  { year: "2020", title: "Founded", desc: "Capra Security was established with a mission to deliver reliable, professional security services." },
  { year: "2021", title: "Nationwide Expansion", desc: "Expanded operations to serve clients across multiple provinces with a growing team of vetted professionals." },
  { year: "2022", title: "7 Service Lines", desc: "Launched our full spectrum of seven specialized security service categories." },
  { year: "2023", title: "Technology Integration", desc: "Introduced GPS-tracked patrols, digital reporting, and real-time dispatch monitoring." },
  { year: "2024", title: "Industry Recognition", desc: "Recognized for excellence in emergency fire watch and industrial security services." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <PageHero
        badge="About Us"
        title="Security You Can Trust. Service You'll Remember."
        description="Established in 2020, Capra Security has built a nationwide network of highly vetted security professionals. We examine performance indicators through comprehensive vetting processes and deliver personalized recommendations for every client."
      />

      {/* Mission */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal delayMs={80}>
              <div>
                <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">Our Mission</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
                  Our mission is delivering peace of mind through access to reliable, professional, and trusted
                  security services — always guided by integrity, accountability, and innovation.
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                  Whether you need corporate security, retail loss prevention, industrial site protection, or
                  event management, our team is your trusted partner. We take the time to understand your unique
                  challenges and build security programs that address them comprehensively.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/services" className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]">
                    View Our Services
                  </Link>
                  <Link href="/contact" className="rounded-xl border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={160}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Why Clients Choose Us</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Comprehensive vetting and performance indicator analysis",
                    "Personalized security recommendations for every client",
                    "Nationwide network with local expertise",
                    "24/7 dispatch and emergency response capability",
                    "Transparent reporting and real-time communication",
                    "Full compliance with Provincial Fire Codes and bylaws",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-[var(--blue)]">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <ScrollReveal delayMs={80}>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">Our Core Values</h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-secondary)]">
              These principles guide every decision we make and every guard we deploy.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, idx) => (
              <ScrollReveal key={v.title} delayMs={120 + idx * 60}>
                <article className="rounded-2xl border border-[var(--border)] bg-white p-6">
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">{v.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-tertiary)]">{v.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <ScrollReveal delayMs={80}>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">Our Journey</h2>
          </ScrollReveal>
          <div className="mt-10 space-y-4">
            {milestones.map((m, idx) => (
              <ScrollReveal key={m.year} delayMs={120 + idx * 70}>
                <div className="flex gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="text-2xl font-semibold text-[var(--blue)]">{m.year}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">{m.title}</h3>
                    <p className="mt-1 text-[13px] text-[var(--text-tertiary)]">{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--accent)]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
          <ScrollReveal delayMs={80}>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Join the Capra Security Team</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
              We are always looking for dedicated professionals to join our growing network of security personnel.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/apply" className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[var(--accent)] transition hover:bg-gray-50">Apply Now</Link>
              <Link href="/contact" className="rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
