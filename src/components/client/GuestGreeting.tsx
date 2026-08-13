"use client";

import { useGuestName } from "@/hooks/useGuestName";

export function GuestGreeting({ className = "" }: { className?: string }) {
  const guest = useGuestName();
  return <strong className={`guest-name ${className}`.trim()}>{guest}</strong>;
}
