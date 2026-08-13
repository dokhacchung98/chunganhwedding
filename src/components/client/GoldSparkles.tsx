"use client";

import { useEffect, useState } from "react";

const SPARKLE_COUNT = 12;

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
      left: 5 + Math.random() * 90,
      top: 5 + Math.random() * 90,
      size: 3 + Math.random() * 5,
      delay: Math.random() * 6,
      duration: 2 + Math.random() * 3,
    });
  }
  return sparkles;
}

export function GoldSparkles({ className = "" }: { className?: string }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setSparkles(generateSparkles());
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className={`gold-sparkles ${className}`.trim()} aria-hidden="true">
      {sparkles.map((s) => (
        <i
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
          ✦
        </i>
      ))}
    </div>
  );
}
