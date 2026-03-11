import type { CSSProperties } from "react";

function revealDelay(delayMs: number): CSSProperties {
  return { "--reveal-delay": `${delayMs}ms` } as CSSProperties;
}

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="hero-grid border-b bg-gradient-to-b from-white via-[var(--background)] to-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 lg:px-8">
        <p
          className="reveal-up inline-flex items-center gap-2 rounded-full border border-[var(--blue)]/15 bg-[var(--blue-soft)] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--blue)]"
          style={revealDelay(80)}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
          {badge}
        </p>
        <h1
          className="reveal-up mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.1] text-[var(--text-primary)]"
          style={revealDelay(140)}
        >
          {title}
        </h1>
        <p
          className="reveal-up mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-[17px]"
          style={revealDelay(220)}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
