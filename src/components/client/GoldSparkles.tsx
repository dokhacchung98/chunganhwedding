"use client";

import { useEffect, useState } from "react";

const SPARKLE_COUNT = 14;

type Sparkle = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

function generateSparkles(): Sparkle[] {
  const sparkles: Sparkle[] = [];
  for (let i = 0; i < SPARKLE_COUNT; i++) {
    sparkles.push({
      id: i,
      left: 4 + Math.random() * 92,
      top: 4 + Math.random() * 92,
      size: 7 + Math.random() * 9,
      delay: Math.random() * 6,
      duration: 2.2 + Math.random() * 3,
    });
  }
  return sparkles;
}

export function GoldSparkles({ className = "" }: { className?: string }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const frame = requestAnimationFrame(() => {
      setSparkles(generateSparkles());
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className={`gold-sparkles ${className}`.trim()} aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="gold-sparkles__dot"
          style={
            {
              "--spark-left": `${s.left}%`,
              "--spark-top": `${s.top}%`,
              "--spark-size": `${s.size}px`,
              "--spark-delay": `${s.delay}s`,
              "--spark-duration": `${s.duration}s`,
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M12 0 C12 6.5 17.5 12 24 12 C17.5 12 12 17.5 12 24 C12 17.5 6.5 12 0 12 C6.5 12 12 6.5 12 0 Z" />
            <circle cx="12" cy="12" r="2.5" fill="#fff" opacity="0.9" />
          </svg>
        </span>
      ))}
    </div>
  );
}
