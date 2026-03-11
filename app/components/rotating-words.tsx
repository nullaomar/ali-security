"use client";

import { useEffect, useState } from "react";

type RotatingWordsProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export default function RotatingWords({
  words,
  interval = 3000,
  className = "",
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="rotating-word-wrapper">
      {words.map((word, i) => (
        <span
          key={word}
          className={`rotating-word ${className}`}
          style={{
            position: i === 0 ? "relative" : "absolute",
            left: i === 0 ? undefined : 0,
            top: i === 0 ? undefined : 0,
            opacity: i === index ? 1 : 0,
            transition: "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
