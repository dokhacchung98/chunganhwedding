"use client";

import { useEffect, useState } from "react";

type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

const emptyCountdown: CountdownValue = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  complete: false,
};

function getCountdown(target: string): CountdownValue {
  const distance = new Date(target).getTime() - Date.now();
  if (distance <= 0) return { ...emptyCountdown, complete: true };

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
    complete: false,
  };
}

export function Countdown({ target }: { target: string }) {
  const [value, setValue] = useState<CountdownValue>(emptyCountdown);

  useEffect(() => {
    const update = () => setValue(getCountdown(target));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [target]);

  if (value.complete) {
    return <p className="countdown__complete">Hôm nay là ngày hạnh phúc!</p>;
  }

  const units = [
    [value.days, "Ngày"],
    [value.hours, "Giờ"],
    [value.minutes, "Phút"],
    [value.seconds, "Giây"],
  ] as const;

  return (
    <div className="countdown" role="timer" aria-label="Thời gian còn lại đến lễ cưới">
      {units.map(([number, label]) => (
        <div className="countdown__unit" key={label}>
          <strong>
            <i key={number}>{String(number).padStart(2, "0")}</i>
          </strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
