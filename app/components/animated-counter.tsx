"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  label: string;
  sub: string;
  delayMs?: number;
};

export default function AnimatedCounter({ value, label, sub, delayMs = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setVisible(true), delayMs);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  useEffect(() => {
    if (!visible) return;

    // Check if value is numeric
    const numMatch = value.match(/^(\d+)(.*)$/);
    if (!numMatch) {
      // Non-numeric like "24/7" - just reveal it
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const suffix = numMatch[2] || "";
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const t = step / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      current = Math.round(eased * target);
      setDisplayValue(`${current}${suffix}`);

      if (step >= steps) {
        setDisplayValue(`${target}${suffix}`);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-3xl font-bold text-[#8b6914] md:text-4xl">{displayValue || value}</div>
      <div className="mt-1 text-sm font-semibold text-white">{label}</div>
      <div className="mt-0.5 text-[12px] text-white/40">{sub}</div>
    </div>
  );
}
