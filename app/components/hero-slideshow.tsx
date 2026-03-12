"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/event-safety.jpg",
    alt: "Event safety and security",
  },
  {
    src: "/security-guards-1.jpg",
    alt: "Security guards on duty",
  },
  {
    src: "/firefighter.jpg",
    alt: "Fire watch security guard",
  },
  {
    src: "/loss-prevention.jpg",
    alt: "Loss prevention security",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`slideshow-img ${idx === current ? "active" : ""}`}
        />
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[var(--surface)]" />
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}
