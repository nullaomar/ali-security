"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: "up" | "fade";
  once?: boolean;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
  once = true,
  threshold = 0.18,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const revealClass = variant === "fade" ? "scroll-reveal-fade" : "scroll-reveal-up";
  const classes = [revealClass, visible ? "is-visible" : "", className].filter(Boolean).join(" ");
  const style = { "--reveal-delay": `${delayMs}ms` } as CSSProperties;

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
