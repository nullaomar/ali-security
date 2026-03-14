"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-[#080f1a]">
      {/* BG image */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format"
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[12000ms] ease-out ${loaded ? "scale-110" : "scale-100"}`}
        style={{ opacity: 0.2 }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080f1a] via-[#080f1a]/75 to-[#080f1a]/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080f1a]/90 via-[#080f1a]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,105,20,0.06)_0%,_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:pb-28 md:pt-44 lg:px-8">
        {/* Title */}
        <h1 className="max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
          {["Security", "You", "Can", "Trust."].map((word, i) => (
            <span
              key={i}
              className="mr-[0.3em] inline-block"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${300 + i * 90}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${300 + i * 90}ms`,
              }}
            >
              {word}
            </span>
          ))}
          <br />
          {["Service", "You'll", "Remember."].map((word, i) => (
            <span
              key={i}
              className={`mr-[0.3em] inline-block ${i === 0 ? "text-[#8b6914]" : ""}`}
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${660 + i * 90}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${660 + i * 90}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Gold line */}
        <div
          className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-[#8b6914] via-[#a08030] to-transparent"
          style={{
            width: loaded ? "10rem" : "0",
            opacity: loaded ? 1 : 0,
            transition:
              "width 900ms cubic-bezier(0.22,1,0.36,1) 900ms, opacity 600ms ease 900ms",
          }}
        />

        {/* Description */}
        <p
          className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/50"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 700ms cubic-bezier(0.22,1,0.36,1) 1000ms",
          }}
        >
          With over 20 years of combined management experience, Capra Security
          has built a nationwide network of highly vetted security professionals.
          We deliver personalized recommendations through comprehensive
          performance analysis for every client.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 800ms ease 1400ms",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <div className="service-scroll-line h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
