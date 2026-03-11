import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Fire Watch Security Guard", href: "/services/fire-watch" },
  { label: "Mobile Security Guard", href: "/services/mobile-security" },
  { label: "Loss Prevention", href: "/services/loss-prevention" },
  { label: "Event Security", href: "/services/event-security" },
  { label: "Security Operations & Logistics", href: "/services/operations-logistics" },
  { label: "Industrial Security Services", href: "/services/industrial-security" },
  { label: "Onsite Construction Security", href: "/services/construction-security" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Apply Now", href: "/apply" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Sitemap", href: "/sitemap-page" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-[var(--accent)]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Capra Security" width={44} height={44} className="h-11 w-11 rounded-lg object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold leading-tight text-white">Capra Security</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/40">Security Services</span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Our mission is delivering peace of mind through access to reliable, professional, and trusted security services &mdash; always guided by integrity, accountability, and innovation.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { label: "Instagram", path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.07] text-white/50 transition hover:bg-white/[0.12] hover:text-white/80">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/60 transition hover:text-white">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-white/35" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:5199925412" className="transition hover:text-white">519-992-5412</a>
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-white/35" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:info@caprasecurity.ca" className="transition hover:text-white">info@caprasecurity.ca</a>
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-white/35" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>3129 Marentette Ave, Unit #5<br />Windsor, Ontario N8X 4G1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-6 text-center text-xs text-white/35">
          &copy; {new Date().getFullYear()} Capra Security. All rights reserved. Licensed &amp; Insured.
        </div>
      </div>
    </footer>
  );
}
