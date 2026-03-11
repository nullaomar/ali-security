"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&q=80&auto=format",
    alt: "Security guard monitoring surveillance cameras",
  },
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80&auto=format",
    alt: "Corporate building security",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80&auto=format",
    alt: "Modern office security operations",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format",
    alt: "Commercial building exterior at dusk",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
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
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[var(--surface)]" />
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}
