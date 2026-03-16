"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Combined Experience" },
  { value: 24, suffix: "/7", label: "Dispatch & Response" },
  { value: 50, suffix: "+", label: "Locations Actively Monitored" },
  { value: 100, suffix: "%", label: "Provincial Compliance" },
];

export default function AboutStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  const animate = useCallback(() => {
    const duration = 1500;
    const steps = 40;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((s) => Math.round(s.value * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          animate();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: `all 600ms cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
          }}
        >
          <span className="text-3xl font-bold text-[#8b6914] md:text-4xl">
            {counts[i]}
            {stat.suffix}
          </span>
          <p className="mt-1 text-[12px] font-medium uppercase tracking-wider text-white/30">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
