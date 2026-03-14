"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "Consultation",
    desc: "We begin with an in-depth conversation to understand your unique security challenges, risk profile, and operational requirements.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    ),
  },
  {
    title: "Site Assessment",
    desc: "Our specialists conduct a thorough on-site evaluation, identifying vulnerabilities and mapping out a tailored security architecture.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
      />
    ),
  },
  {
    title: "Strategic Deployment",
    desc: "Trained, licensed professionals are deployed with clear protocols, real-time communication systems, and comprehensive reporting frameworks.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    title: "Ongoing Excellence",
    desc: "Continuous monitoring, regular performance reviews, and adaptive strategies ensure your security program evolves with your needs.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
      />
    ),
  },
];

export default function ServiceProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    new Array(processSteps.length).fill(false),
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepsRef.current.forEach((node, i) => {
      if (!node) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSteps((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(node);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const activeCount = activeSteps.filter(Boolean).length;

  return (
    <div ref={containerRef} className="relative">
      {/* Timeline */}
      <div className="absolute bottom-0 left-6 top-0 w-[2px] bg-white/[0.06] lg:left-1/2 lg:-translate-x-px">
        <div
          className="w-full rounded-full bg-gradient-to-b from-[#8b6914] to-[#a08030]/60"
          style={{
            height: `${(activeCount / processSteps.length) * 100}%`,
            transition: "height 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-20 lg:space-y-24">
        {processSteps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              ref={(el) => {
                stepsRef.current[i] = el;
              }}
              className="relative"
            >
              {/* Node circle */}
              <div className="absolute left-6 z-10 -translate-x-1/2 lg:left-1/2">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-700 ${
                    activeSteps[i]
                      ? "border-[#8b6914] bg-[#8b6914]/15 shadow-[0_0_24px_rgba(139,105,20,0.2)]"
                      : "border-white/10 bg-[#0a1220]"
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold transition-colors duration-700 ${
                      activeSteps[i] ? "text-[#a08030]" : "text-white/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`pl-16 lg:w-[calc(50%-3rem)] lg:pl-0 ${
                  isEven
                    ? "lg:pr-8"
                    : "lg:ml-auto lg:pl-8"
                }`}
              >
                <div
                  style={{
                    opacity: activeSteps[i] ? 1 : 0,
                    transform: activeSteps[i]
                      ? "translateY(0) translateX(0)"
                      : `translateY(20px) translateX(${isEven ? "-20px" : "20px"})`,
                    transition: "all 700ms cubic-bezier(0.22,1,0.36,1) 150ms",
                  }}
                  className={isEven ? "lg:text-right" : ""}
                >
                  {/* Icon */}
                  <div
                    className={`mb-3 inline-flex items-center gap-3 ${isEven ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-500 ${
                        activeSteps[i]
                          ? "bg-[#8b6914]/15"
                          : "bg-white/[0.04]"
                      }`}
                    >
                      <svg
                        className={`h-5 w-5 transition-colors duration-500 ${
                          activeSteps[i]
                            ? "stroke-[#a08030]"
                            : "stroke-white/25"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        {step.icon}
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/45">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
