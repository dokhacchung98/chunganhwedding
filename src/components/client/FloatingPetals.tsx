"use client";

import { useEffect, useState } from "react";

const PETAL_COUNT = 18;

type Petal = {
  id: number;
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
      left: (i / PETAL_COUNT) * 100 + (Math.random() * 5 - 2.5),
      size: 8 + Math.random() * 10,
      delay: Math.random() * 14,
      duration: 10 + Math.random() * 8,
      swayDuration: 3 + Math.random() * 4,
      rotation: Math.random() * 360,
      opacity: 0.25 + Math.random() * 0.35,
    });
  }
  return petals;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPetals(generatePetals());
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
          <svg viewBox="0 0 12 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0 C3 4 0 8 2 12 C4 16 8 16 10 12 C12 8 9 4 6 0Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
