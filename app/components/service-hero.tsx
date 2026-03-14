"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceHero({ title, description, image }: Props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const words = title.split(" ");

  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-[#080f1a]">
      {/* Background image with slow zoom */}
      <img
        src={image}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[12000ms] ease-out ${loaded ? "scale-110" : "scale-100"}`}
        style={{ opacity: 0.35 }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080f1a] via-[#080f1a]/75 to-[#080f1a]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080f1a]/90 via-[#080f1a]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,105,20,0.06)_0%,_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:pb-28 md:pt-44 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-[13px]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 600ms cubic-bezier(0.22,1,0.36,1) 200ms",
          }}
        >
          <Link
            href="/services"
            className="text-white/40 transition hover:text-[#a08030]"
          >
            Services
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-[#a08030]">{title}</span>
        </nav>

        {/* Title with word stagger */}
        <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
          {words.map((word, i) => (
            <span
              key={i}
              className="mr-[0.3em] inline-block"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${250 + i * 90}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${250 + i * 90}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Gold line draw */}
        <div
          className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-[#8b6914] via-[#a08030] to-transparent"
          style={{
            width: loaded ? "8rem" : "0",
            opacity: loaded ? 1 : 0,
            transition:
              "width 900ms cubic-bezier(0.22,1,0.36,1) 650ms, opacity 600ms ease 650ms",
          }}
        />

        {/* Description */}
        <p
          className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/50"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 700ms cubic-bezier(0.22,1,0.36,1) 750ms",
          }}
        >
          {description}
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-wrap gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 700ms cubic-bezier(0.22,1,0.36,1) 900ms",
          }}
        >
          <Link
            href="/quote"
            className="hero-btn group inline-flex items-center gap-2 rounded-xl bg-[#8b6914] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#a08030] hover:shadow-[0_12px_32px_rgba(139,105,20,0.3)]"
          >
            Get a Quote
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
          <a
            href="tel:4169530539"
            className="hero-btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#8b6914]/40 hover:bg-white/10"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            416-953-0539
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 800ms ease 1300ms",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <div className="service-scroll-line h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
