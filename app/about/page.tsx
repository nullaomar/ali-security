import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import AboutHero from "../components/about-hero";
import AboutStats from "../components/about-stats";

export const metadata: Metadata = {
  title: "About Us | Capra Security",
  description:
    "Learn about Capra Security - with over 20 years of combined management experience, operating a nationwide network of vetted security professionals guided by integrity, accountability, and innovation.",
};

const whyUs = [
  {
    title: "Accountable Reporting",
    desc: "Detailed incident reports and shift logs delivered consistently.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80&auto=format",
  },
  {
    title: "Responsive Management",
    desc: "Direct access to management - not a call centre.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80&auto=format",
  },
  {
    title: "PM-Focused Approach",
    desc: "Built for property manager workflows, expectations & escalations.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&auto=format",
  },
  {
    title: "Scalable Coverage",
    desc: "Single site or full portfolio - we scale to your footprint.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format",
  },
];

const featuredClients = [
  { name: "Hilton Hotels & Resorts", industry: "Hospitality", logo: "/clients/hilton.jpg" },
  { name: "Cineplex", industry: "Entertainment", logo: "/clients/cineplex.png" },
  { name: "Hampton by Hilton", industry: "Hospitality", logo: "/clients/hampton.png" },
  { name: "La Primavera Event Space", industry: "Events & Venues", logo: "/clients/la-primavera.webp" },
  { name: "Hyatt", industry: "Hospitality", logo: "/clients/hyatt.jpg" },
{ name: "Cadillac Fairview", industry: "Real Estate Investment", logo: "/clients/cadillac-fairview.jpg" },
  { name: "Oxford Properties", industry: "Real Estate & Investment", logo: "" },
  { name: "Dream Unlimited", industry: "Development & Management", logo: "" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#080f1a]">
      {/* ── 1. CINEMATIC HERO ── */}
      <AboutHero />

      {/* ── 2. STATS + FEATURED CLIENTS ── */}
      <section className="border-y border-white/[0.04] bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
          {/* Stats row */}
          <AboutStats />

          {/* Divider */}
          <div className="mx-auto my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Featured Clients - Logo Banner */}
          <ScrollReveal delayMs={80}>
            <p className="text-center text-[11px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/40">
              Trusted By Industry Leaders
            </p>
          </ScrollReveal>
          <div className="client-banner mt-6 overflow-hidden">
            <div className="client-banner-track flex items-center">
              {[0, 1].map((setIdx) => (
                <div key={setIdx} className="flex shrink-0 items-center">
                  {featuredClients.map((client) => (
                    <div
                      key={`${setIdx}-${client.name}`}
                      className="group mx-8 flex shrink-0 items-center gap-3 md:mx-12"
                    >
                      {/* Logo or initial */}
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="h-10 w-10 shrink-0 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] transition-all duration-400 group-hover:border-[#8b6914]/25 group-hover:bg-[#8b6914]/10">
                          <span className="text-[15px] font-bold text-white/50 transition-colors duration-400 group-hover:text-[#a08030]">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="whitespace-nowrap text-[14px] font-semibold text-white/40 transition-colors duration-400 group-hover:text-white/80">
                          {client.name}
                        </span>
                        <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-wider text-white/15 transition-colors duration-400 group-hover:text-[#8b6914]/50">
                          {client.industry}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MISSION - IMAGE COLLAGE + TEXT ── */}
      <section className="bg-[#0f1b2d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Overlapping photo collage */}
            <ScrollReveal variant="left" delayMs={80}>
              <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[500px] lg:max-w-none">
                {/* Main large image - floating */}
                <div className="collage-img-1 absolute left-0 top-0 h-[70%] w-[65%] cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(139,105,20,0.15)]">
                  <img
                    src="/capra-team.jpg"
                    alt="Capra Security team"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] transition-all duration-500 hover:ring-[#8b6914]/20" />
                </div>
                {/* Secondary image - floating offset */}
                <div className="collage-img-2 absolute bottom-0 right-0 h-[60%] w-[55%] cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(139,105,20,0.15)]">
                  <img
                    src="/capra-office.jpg"
                    alt="Capra Security office"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08]" />
                </div>
                {/* Small accent image - floating */}
                <div className="collage-img-3 absolute right-[10%] top-[5%] h-[30%] w-[30%] cursor-pointer overflow-hidden rounded-xl shadow-xl transition-shadow duration-500 hover:shadow-[0_16px_40px_rgba(139,105,20,0.15)]">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80&auto=format"
                    alt="Monitoring"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.08]" />
                </div>
                {/* Gold accent bars - pulsing */}
                <div className="gold-bar-animated absolute -left-3 top-[15%] w-1 rounded-full bg-gradient-to-b from-[#8b6914] via-[#a08030] to-transparent" />
                <div className="gold-bar-animated-2 absolute bottom-[20%] -right-3 w-1 rounded-full bg-gradient-to-t from-[#8b6914] via-[#a08030] to-transparent" />
              </div>
            </ScrollReveal>

            {/* Right - Mission text */}
            <ScrollReveal variant="right" delayMs={200}>
              <div>
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                  Our Mission
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Delivering{" "}
                  <span className="relative inline-block">
                    <span className="text-[#8b6914]">Peace of Mind</span>
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#8b6914]/30" />
                  </span>
                </h2>
                <p className="mt-6 text-base leading-[1.8] text-white/50">
                  Our mission is delivering peace of mind through access to
                  reliable, professional, and trusted security services - always
                  guided by integrity, accountability, and innovation.
                </p>
                <p className="mt-4 text-base leading-[1.8] text-white/50">
                  Whether you need corporate security, retail loss prevention,
                  industrial site protection, or event management, our team is
                  your trusted partner. With over 20 years of combined
                  management experience, we have built a nationwide network of
                  highly vetted professionals who deliver results.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="hero-btn inline-flex items-center gap-2 rounded-xl bg-[#8b6914] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a08030] hover:shadow-[0_12px_32px_rgba(139,105,20,0.3)]"
                  >
                    View Our Services
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
                    className="hero-btn inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#8b6914]/40 hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CAPRA - 4 IMAGE CARDS ── */}
      <section className="border-t border-white/[0.04] bg-[#0a1220]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <ScrollReveal delayMs={80}>
            <div className="text-center">
              <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#8b6914]/50">
                Why Capra
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Why Clients{" "}
                <span className="text-[#8b6914]">Choose Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <ScrollReveal
                key={item.title}
                delayMs={120 + i * 80}
                variant="up"
              >
                <div className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl">
                  {/* BG image - darkened by default, reveals on hover */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 ease-out group-hover:opacity-70 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1a] via-[#080f1a]/70 to-transparent transition-opacity duration-500 group-hover:via-[#080f1a]/50" />

                  {/* Content - slides up on hover */}
                  <div className="relative flex h-full flex-col justify-end p-5 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b6914]/20 backdrop-blur-sm transition-all duration-500 group-hover:bg-[#8b6914]/30 group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-[#a08030]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-[15px] font-bold text-white transition-colors duration-300 group-hover:text-[#d4a017]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-h-0 overflow-hidden text-[12px] leading-relaxed text-white/50 opacity-0 transition-all duration-500 ease-out group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FULL-WIDTH PHOTO BAND (was 6) ── */}
      <section className="relative h-64 overflow-hidden md:h-80">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format"
          alt=""
          className="quote-band-img h-full w-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080f1a] via-transparent to-[#080f1a]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] via-transparent to-[#0f1b2d]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal variant="scale" delayMs={80}>
            <div className="text-center">
              <p className="text-lg font-semibold text-white/80 md:text-2xl">
                &ldquo;Protection is not just what we do -{" "}
                <span className="text-[#8b6914]">it&apos;s who we are.</span>
                &rdquo;
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-wider text-white/30">
                Capra Security Leadership
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#080f1a]">
        <div className="cta-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,105,20,0.15)_0%,_transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <ScrollReveal variant="scale" delayMs={80}>
            <h2 className="text-shimmer-gold text-4xl font-bold md:text-5xl">
              Join the Capra Security Team
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/35">
              We are always looking for dedicated professionals to join our
              growing network of security personnel across Canada.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="hero-btn group inline-flex items-center gap-2 rounded-xl bg-[#8b6914] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a08030] hover:shadow-[0_12px_32px_rgba(139,105,20,0.3)]"
              >
                Apply Now
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
              <Link
                href="/quote"
                className="hero-btn inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#8b6914]/40 hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
