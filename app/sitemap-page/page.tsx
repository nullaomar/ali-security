import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/page-hero";
import { services } from "../lib/services-data";

export const metadata: Metadata = {
  title: "Sitemap | Capra Security",
  description: "Complete sitemap of the Capra Security website.",
};

const pages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Apply Now", href: "/apply" },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <PageHero
        badge="Sitemap"
        title="Site Navigation"
        description="A complete overview of all pages on the Capra Security website."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Main Pages</h2>
              <ul className="mt-4 space-y-2.5">
                {pages.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--blue)]">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Services</h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/services" className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--blue)]">All Services Overview</Link>
                </li>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--blue)]">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Contact</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-[var(--text-secondary)]">
                <li><a href="tel:5199925412" className="transition hover:text-[var(--blue)]">519-992-5412</a></li>
                <li><a href="mailto:info@caprasecurity.ca" className="transition hover:text-[var(--blue)]">info@caprasecurity.ca</a></li>
                <li>3129 Marentette Ave, Unit #5<br />Windsor, Ontario N8X 4G1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
