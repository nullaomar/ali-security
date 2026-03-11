"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Fire Watch Security Guard", href: "/services/fire-watch" },
  { label: "Mobile Security Guard", href: "/services/mobile-security" },
  { label: "Loss Prevention", href: "/services/loss-prevention" },
  { label: "Event Security", href: "/services/event-security" },
  { label: "Security Operations & Logistics", href: "/services/operations-logistics" },
  { label: "Industrial Security Services", href: "/services/industrial-security" },
  { label: "Onsite Construction Security", href: "/services/construction-security" },
];

type SearchEntry = {
  id: string;
  label: string;
  hint: string;
  href: string;
  keywords: string;
  kind: "page" | "service" | "action";
};

const staticSearchEntries: SearchEntry[] = [
  { id: "sr-home", label: "Home", hint: "Main landing page", href: "/", keywords: "home landing main", kind: "page" },
  { id: "sr-about", label: "About Us", hint: "Our story and values", href: "/about", keywords: "about company story team values", kind: "page" },
  { id: "sr-services", label: "All Services", hint: "Browse all security services", href: "/services", keywords: "services security overview", kind: "page" },
  { id: "sr-contact", label: "Contact Us", hint: "Get in touch with our team", href: "/contact", keywords: "contact email phone reach", kind: "page" },
  { id: "sr-quote", label: "Get a Quote", hint: "Request a free security quote", href: "/quote", keywords: "quote estimate pricing free", kind: "action" },
  { id: "sr-apply", label: "Apply to Work", hint: "Join our security team", href: "/apply", keywords: "apply job career work hiring", kind: "action" },
  { id: "sr-fire", label: "Fire Watch Security", hint: "24/7 fire watch guard services", href: "/services/fire-watch", keywords: "fire watch guard patrol safety", kind: "service" },
  { id: "sr-mobile", label: "Mobile Security Guard", hint: "Mobile patrol and response", href: "/services/mobile-security", keywords: "mobile patrol vehicle response", kind: "service" },
  { id: "sr-loss", label: "Loss Prevention", hint: "Retail and asset protection", href: "/services/loss-prevention", keywords: "loss prevention retail theft asset", kind: "service" },
  { id: "sr-event", label: "Event Security", hint: "Event and venue protection", href: "/services/event-security", keywords: "event venue concert festival crowd", kind: "service" },
  { id: "sr-ops", label: "Security Operations", hint: "Operations and logistics management", href: "/services/operations-logistics", keywords: "operations logistics management dispatch", kind: "service" },
  { id: "sr-industrial", label: "Industrial Security", hint: "Industrial site protection", href: "/services/industrial-security", keywords: "industrial factory warehouse plant", kind: "service" },
  { id: "sr-construction", label: "Construction Security", hint: "Construction site guards", href: "/services/construction-security", keywords: "construction site building onsite", kind: "service" },
];

function scoreEntry(entry: SearchEntry, query: string) {
  const q = query.toLowerCase();
  const label = entry.label.toLowerCase();
  const hint = entry.hint.toLowerCase();
  const keywords = entry.keywords.toLowerCase();

  let score = 0;
  if (label === q) score += 140;
  if (label.startsWith(q)) score += 95;
  if (label.includes(q)) score += 60;
  if (hint.includes(q)) score += 35;
  if (keywords.includes(q)) score += 25;
  return score;
}

function kindChip(kind: SearchEntry["kind"]) {
  if (kind === "service") return "Service";
  if (kind === "action") return "Action";
  return "Page";
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const suggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return staticSearchEntries.slice(0, 8);

    return staticSearchEntries
      .map((entry) => ({ entry, score: scoreEntry(entry, q) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((item) => item.entry);
  }, [searchQuery]);

  useEffect(() => {
    if (activeIdx >= suggestions.length) setActiveIdx(0);
  }, [activeIdx, suggestions.length]);

  function handleSelect(entry: SearchEntry) {
    router.push(entry.href);
    setSearchOpen(false);
    setSearchQuery("");
  }

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const suggestion = suggestions[activeIdx];
    if (suggestion) {
      handleSelect(suggestion);
    } else {
      setSearchOpen(false);
    }
  }

  function onSearchKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSearchOpen(true);
      setActiveIdx((prev) => (suggestions.length ? (prev + 1) % suggestions.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSearchOpen(true);
      setActiveIdx((prev) => (suggestions.length ? (prev - 1 + suggestions.length) % suggestions.length : 0));
    } else if (e.key === "Escape") {
      setSearchOpen(false);
    }
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(0,0,0,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:gap-6 lg:px-8">
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
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold leading-tight tracking-tight text-white">Capra Security</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#8b6914]">Security Services</span>
          </div>
        </Link>

        {/* Desktop search bar */}
        <div className="hidden flex-1 lg:block mx-6" ref={searchRef}>
          <div className="relative max-w-lg">
            <form
              onSubmit={onSearchSubmit}
              className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.05] px-3.5 py-2.5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21l-4.3-4.3" />
                <circle cx="11" cy="11" r="7" />
              </svg>
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                  setActiveIdx(0);
                }}
                onFocus={() => setSearchOpen(true)}
                onKeyDown={onSearchKeyDown}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                placeholder="Search services, pages, actions..."
              />
            </form>

            {searchOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-white/[0.06] bg-[#101114] p-2 shadow-xl">
                {suggestions.length === 0 ? (
                  <div className="rounded-lg px-3 py-2 text-sm text-white/40">No results found.</div>
                ) : (
                  <div className="space-y-1">
                    {suggestions.map((suggestion, idx) => (
                      <button
                        key={suggestion.id}
                        type="button"
                        onClick={() => handleSelect(suggestion)}
                        className={
                          idx === activeIdx
                            ? "flex w-full items-center justify-between rounded-lg border border-[#8b6914]/35 bg-[#8b6914]/10 px-3 py-2 text-left"
                            : "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition hover:bg-white/[0.04]"
                        }
                      >
                        <span>
                          <span className="block text-sm font-medium text-white">{suggestion.label}</span>
                          <span className="block text-xs text-white/40">{suggestion.hint}</span>
                        </span>
                        <span className="ml-3 rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
                          {kindChip(suggestion.kind)}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} ref={dropdownRef} className="relative">
                <div className="flex items-center gap-0.5">
                  <Link
                    href={link.href}
                    className={`text-[15px] transition hover:text-[#8b6914] ${
                      isActive(link.href) ? "font-semibold text-[#8b6914]" : "text-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((p) => !p)}
                    className="p-1 text-white/40 transition hover:text-[#8b6914]"
                    aria-label="Toggle services menu"
                  >
                    <svg className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {servicesOpen && (
                  <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-72 overflow-hidden rounded-xl border border-white/[0.06] bg-[#101114] p-2 shadow-xl">
                    <Link
                      href="/services"
                      className="mb-1 block rounded-lg border-b border-white/[0.06] px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.04] hover:text-[#8b6914]"
                    >
                      All Services Overview
                    </Link>
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-white/[0.04] hover:text-[#8b6914] ${
                          pathname === s.href ? "bg-white/[0.04] text-[#8b6914]" : "text-white/50"
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
                className={`text-sm transition hover:text-[#8b6914] ${
                  isActive(link.href) ? "font-semibold text-[#8b6914]" : "text-white/60"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/apply"
            className="rounded-lg border border-white/[0.06] px-3 py-2 text-sm text-white transition hover:border-[#8b6914] hover:text-[#8b6914]"
          >
            Apply Now
          </Link>
          <Link
            href="/quote"
            className="rounded-lg bg-[#8b6914] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#a07a1a]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((p) => !p)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] transition hover:bg-white/[0.04] lg:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav links row */}
      <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 pb-3 text-xs uppercase tracking-[0.16em] text-white/40 lg:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap transition hover:text-[#8b6914] ${
              isActive(link.href) ? "font-semibold text-[#8b6914]" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile expanded menu */}
      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#101114] px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-0.5 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 text-sm transition hover:bg-white/[0.04] ${
                  isActive(link.href) ? "font-medium text-[#8b6914]" : "text-white/60"
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
                  className="rounded-lg px-3 py-2 text-[13px] text-white/40 transition hover:bg-white/[0.04] hover:text-[#8b6914]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/apply"
                className="rounded-lg border border-white/[0.06] px-3 py-2.5 text-center text-sm text-white transition hover:border-[#8b6914] hover:text-[#8b6914]"
              >
                Apply Now
              </Link>
              <Link
                href="/quote"
                className="rounded-lg bg-[#8b6914] px-3 py-2.5 text-center text-sm font-semibold text-white"
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
