"use client";

import type { CSSProperties } from "react";

type AnimatedWordsProps = {
  text: string;
  baseDelay?: number;
  stagger?: number;
  className?: string;
};

export default function AnimatedWords({
  text,
  baseDelay = 400,
  stagger = 80,
  className = "",
}: AnimatedWordsProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden py-1">
          <span
            className="word-animate"
            style={{ "--word-delay": `${baseDelay + idx * stagger}ms` } as CSSProperties}
          >
            {word}
          </span>
          {idx < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
