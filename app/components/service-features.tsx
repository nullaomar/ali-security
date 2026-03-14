"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  features: string[];
};

export default function ServiceFeatures({ features }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Split: first item is the featured large card, rest are list items
  const featured = features[0];
  const rest = features.slice(1);

  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
      {/* Left - Featured capability (large card) */}
      <div
        className="feature-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#8b6914]/10 via-white/[0.02] to-transparent p-7 lg:min-h-[320px]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
          transition: "all 800ms cubic-bezier(0.22,1,0.36,1) 0ms",
        }}
      >
        {/* Large gold number */}
        <span className="font-mono text-[64px] font-bold leading-none text-[#8b6914]/[0.08] transition-all duration-500 group-hover:text-[#8b6914]/[0.15]">
          01
        </span>

        <div className="mt-auto">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#8b6914]/15 transition-colors duration-300 group-hover:bg-[#8b6914]/25">
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5 fill-[#a08030]"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-[17px] font-semibold leading-snug text-white/90 transition-colors duration-300 group-hover:text-white">
            {featured}
          </p>
        </div>

        {/* Shine + border */}
        <div className="feature-shine pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-[#8b6914]/25" />
      </div>

      {/* Right - Remaining capabilities as a clean stack */}
      <div className="flex flex-col gap-3">
        {rest.map((feature, i) => (
          <div
            key={i}
            className="feature-card group relative flex items-center gap-5 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: `all 700ms cubic-bezier(0.22,1,0.36,1) ${120 + i * 80}ms`,
            }}
          >
            {/* Number */}
            <span className="shrink-0 font-mono text-[22px] font-bold text-[#8b6914]/20 transition-colors duration-300 group-hover:text-[#8b6914]/50">
              {String(i + 2).padStart(2, "0")}
            </span>

            {/* Vertical gold accent */}
            <div className="h-8 w-[2px] shrink-0 rounded-full bg-[#8b6914]/15 transition-all duration-500 group-hover:h-10 group-hover:bg-[#8b6914]/40" />

            {/* Text */}
            <span className="text-[14px] leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/85">
              {feature}
            </span>

            {/* Hover glow */}
            <div className="feature-shine pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-500 group-hover:border-[#8b6914]/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
