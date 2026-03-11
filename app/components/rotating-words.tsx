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
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 500);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="rotating-word-wrapper">
      <span className={`rotating-word ${className} ${animating ? "exit" : "enter"}`}>
        {words[index]}
      </span>
    </span>
  );
}
