"use client";

import { useEffect, useState } from "react";

const milestones = [
  { label: "Welcome", icon: "shield" },
  { label: "Services", icon: "grid" },
  { label: "About", icon: "users" },
  { label: "Process", icon: "flow" },
  { label: "Contact", icon: "phone" },
];

function MilestoneIcon({ icon, active }: { icon: string; active: boolean }) {
  const cls = `h-3 w-3 transition-colors duration-500 ${active ? "text-[#8b6914]" : "text-white/30"}`;
  switch (icon) {
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 1a1 1 0 00-.707.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414l-7-7A1 1 0 0010 1z" clipRule="evenodd" />
        </svg>
      );
    case "grid":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case "users":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      );
    case "flow":
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 14V12a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      );
  }
}

export default function ScrollJourney() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(scrollPercent, 1));

      const sectionCount = milestones.length;
      setActiveSection(Math.min(Math.floor(scrollPercent * sectionCount), sectionCount - 1));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-0">
      {/* Track */}
      <div className="relative flex flex-col items-center">
        {milestones.map((m, idx) => (
          <div key={m.label} className="flex flex-col items-center">
            {/* Dot */}
            <div className="relative group">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                  idx <= activeSection
                    ? "border-[#8b6914] bg-[#0f1b2d] shadow-[0_0_12px_rgba(139,105,20,0.3)]"
                    : "border-white/10 bg-[#0f1b2d]/60"
                }`}
              >
                <MilestoneIcon icon={m.icon} active={idx <= activeSection} />
              </div>
              {/* Label tooltip */}
              <span
                className={`absolute right-10 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0f1b2d] px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-all duration-300 pointer-events-none ${
                  idx === activeSection
                    ? "opacity-100 translate-x-0 text-[#8b6914]"
                    : "opacity-0 translate-x-2 text-white/50"
                }`}
              >
                {m.label}
              </span>
            </div>
            {/* Connector line */}
            {idx < milestones.length - 1 && (
              <div className="relative h-10 w-[2px] bg-white/[0.06] overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full bg-[#8b6914] transition-all duration-700 ease-out"
                  style={{
                    height: idx < activeSection ? "100%" : idx === activeSection ? `${(progress * milestones.length - activeSection) * 100}%` : "0%",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
