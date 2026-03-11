"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "David Chen",
    role: "Facility Manager",
    company: "Meridian Properties",
    text: "Capra Security transformed our building security overnight. Their guards are professional, punctual, and genuinely care about our tenants' safety.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Operations Director",
    company: "NovaTech Industries",
    text: "We switched to Capra for our warehouse security and haven't looked back. Their real-time reporting and GPS tracking gives us total peace of mind.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Event Coordinator",
    company: "Lakeshore Events",
    text: "Every event we run, Capra's team is there early, prepared, and handles crowds with professionalism. They've become our go-to security partner.",
    rating: 5,
  },
  {
    name: "Jennifer Walsh",
    role: "Regional Manager",
    company: "Apex Retail Group",
    text: "Loss prevention was a major issue for us. Since partnering with Capra, shrinkage is down 40%. Their guards are sharp and well-trained.",
    rating: 5,
  },
];

export default function TestimonialCards() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="reveal-up flex flex-col gap-3" style={{ "--reveal-delay": "400ms" } as React.CSSProperties}>
      {/* Active card */}
      <div className="testimonial-card-active relative rounded-2xl border border-[var(--border)] bg-white p-5 shadow-lg">
        {/* Quote mark */}
        <svg className="absolute right-4 top-4 h-8 w-8 text-[#c81e1e]/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
        </svg>

        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: testimonials[active].rating }).map((_, i) => (
            <svg key={i} className="h-3.5 w-3.5 text-[#b8860b]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">
          &ldquo;{testimonials[active].text}&rdquo;
        </p>

        {/* Author */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c81e1e] text-xs font-bold text-white">
            {testimonials[active].name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[var(--text-primary)]">{testimonials[active].name}</p>
            <p className="text-[11px] text-[var(--text-quaternary)]">{testimonials[active].role}, {testimonials[active].company}</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === active ? "w-5 bg-[#c81e1e]" : "w-1.5 bg-[var(--border-strong)]"
            }`}
            aria-label={`Testimonial ${idx + 1}`}
          />
        ))}
      </div>

      {/* Peek of next card */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 opacity-50">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-white">
            {testimonials[(active + 1) % testimonials.length].name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[var(--text-primary)]">{testimonials[(active + 1) % testimonials.length].name}</p>
            <p className="text-[10px] text-[var(--text-quaternary)]">{testimonials[(active + 1) % testimonials.length].company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
