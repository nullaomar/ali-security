"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "REIT Security", href: "/services/reit-security" },
  { label: "Property Management Security", href: "/services/property-management" },
  { label: "Commercial & Industrial Logistics", href: "/services/commercial-industrial-logistics" },
  { label: "Mobile Security Guard", href: "/services/mobile-security" },
  { label: "Loss Prevention", href: "/services/loss-prevention" },
  { label: "Event Security", href: "/services/event-security" },
  { label: "Onsite Construction Security", href: "/services/construction-security" },
  { label: "Fire Watch Security Guard", href: "/services/fire-watch" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 lg:px-6 lg:pt-4">
      {/* Inner floating pill bar */}
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-0.5 lg:px-6 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(15,27,45,0.72)] backdrop-blur-2xl border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
            : "bg-[rgba(15,27,45,0.55)] backdrop-blur-xl border-white/[0.06]"
        }`}
      >
        {/* Logo - oversized to leak below navbar */}
        <Link href="/" className="relative z-50 flex items-center gap-2.5">
          <Image
            src="/logoo.jpg"
            alt="Capra Security"
            width={130}
            height={130}
            className="h-[120px] w-[120px] object-contain"
            style={{ marginBottom: "-50px" }}
            priority
          />
        </Link>

        {/* Desktop nav - centered, spread out */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((p) => !p)}
                  className={`flex items-center gap-1.5 text-[15px] font-bold transition hover:text-[#d4a017] ${
                    isActive(link.href) ? "text-[#d4a017] drop-shadow-[0_2px_10px_rgba(212,160,23,0.4)]" : "text-white/90"
                  }`}
                >
                  {link.label}
                  <svg className={`h-4.5 w-4.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="navbar-dropdown-enter absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] z-50 w-56 rounded-xl border border-white/[0.08] bg-[rgba(16,17,20,0.95)] backdrop-blur-xl py-1.5 shadow-2xl">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-[13px] font-semibold text-white/80 transition hover:bg-white/[0.04] hover:text-[#d4a017]"
                    >
                      All Services
                    </Link>
                    <div className="mx-3 my-1 h-px bg-white/[0.06]" />
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`block px-4 py-1.5 text-[13px] transition hover:bg-white/[0.04] hover:text-[#d4a017] ${
                          pathname === s.href ? "text-[#8b6914]" : "text-white/45"
                        }`}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[15px] font-bold transition hover:text-[#d4a017] ${
                  isActive(link.href) ? "text-[#d4a017] drop-shadow-[0_2px_10px_rgba(212,160,23,0.4)]" : "text-white/90"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#8b6914]" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:5199925412"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-white/70 transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Us
          </a>
          <Link
            href="/quote"
            className="rounded-full bg-[#8b6914] px-5 py-1.5 text-[13px] font-bold text-white transition hover:bg-[#a07a1a] hover:shadow-[0_4px_16px_rgba(139,105,20,0.3)]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((p) => !p)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] transition hover:bg-white/[0.04] lg:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile expanded menu - separate floating pill panel */}
      {menuOpen && (
        <div className="navbar-mobile-enter mx-auto mt-2 max-w-7xl rounded-3xl border border-white/[0.08] bg-[rgba(15,27,45,0.92)] backdrop-blur-xl px-5 pb-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] lg:hidden">
          <nav className="flex flex-col gap-0.5 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2.5 text-[15px] font-medium transition hover:bg-white/[0.04] ${
                  isActive(link.href) ? "text-[#8b6914]" : "text-white/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-[#8b6914]/30 pl-3">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-full px-3 py-2 text-[13px] text-white/40 transition hover:bg-white/[0.04] hover:text-[#d4a017]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="tel:5199925412"
                className="rounded-full border border-white/[0.06] px-3 py-2.5 text-center text-sm text-white/60 transition hover:text-white"
              >
                Call 519-992-5412
              </a>
              <Link
                href="/quote"
                className="rounded-full bg-[#8b6914] px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
