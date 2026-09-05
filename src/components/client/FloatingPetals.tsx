"use client";

import { useEffect, useState } from "react";

const PETAL_COUNT = 20;

type Petal = {
  id: number;
  variant: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  swayDuration: number;
  rotation: number;
  opacity: number;
};

function generatePetals(): Petal[] {
  const petals: Petal[] = [];
  for (let i = 0; i < PETAL_COUNT; i++) {
    petals.push({
      id: i,
      variant: i % 3,
      left: (i / PETAL_COUNT) * 100 + (Math.random() * 6 - 3),
      size: 14 + Math.random() * 12,
      delay: Math.random() * 14,
      duration: 11 + Math.random() * 8,
      swayDuration: 3.5 + Math.random() * 4,
      rotation: Math.random() * 360,
      opacity: 0.35 + Math.random() * 0.4,
    });
  }
  return petals;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const frame = requestAnimationFrame(() => {
      setPetals(generatePetals());
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="floating-petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="floating-petals__petal"
          style={
            {
              "--petal-left": `${p.left}%`,
              "--petal-size": `${p.size}px`,
              "--petal-delay": `${p.delay}s`,
              "--petal-duration": `${p.duration}s`,
              "--petal-sway": `${p.swayDuration}s`,
              "--petal-rotation": `${p.rotation}deg`,
              "--petal-opacity": p.opacity,
            } as React.CSSProperties
          }
        >
          {p.variant === 0 ? (
            // Cánh hoa hồng dáng trái tim mềm mại
            <svg viewBox="0 0 24 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2 C8 -1 1 5 1 14 C1 22 9 27 12 28 C15 27 23 22 23 14 C23 5 16 -1 12 2Z"
                fillOpacity="0.85"
              />
              <path
                d="M12 6 C10 12 8 18 12 24"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="0.8"
                fill="none"
              />
            </svg>
          ) : p.variant === 1 ? (
            // Cánh hoa đào uốn lượn có khía cong
            <svg viewBox="0 0 22 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 C7 0 2 6 2 13 C2 19 7 24 11 26 C15 24 20 19 20 13 C20 6 15 0 11 1 C10.5 2 11.5 2 11 1Z"
                fillOpacity="0.75"
              />
              <path
                d="M11 4 C11 12 9 18 11 22"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.7"
                fill="none"
              />
            </svg>
          ) : (
            // Cánh hoa bay nghiêng tự nhiên trong gió
            <svg viewBox="0 0 20 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 0 C4 5 1 14 3 20 C5 26 12 28 15 26 C19 23 18 13 14 6 C12 3 11 1 10 0Z"
                fillOpacity="0.8"
              />
              <path
                d="M10 3 C8 10 7 18 13 24"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="0.7"
                fill="none"
              />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}
