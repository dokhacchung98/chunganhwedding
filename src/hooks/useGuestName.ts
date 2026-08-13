"use client";

import { useSyncExternalStore } from "react";

const fallbackGuest = "Bạn và gia đình";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getSnapshot() {
  const value = new URLSearchParams(window.location.search).get("guest");
  return value?.trim().slice(0, 80) || fallbackGuest;
}

function getServerSnapshot() {
  return fallbackGuest;
}

export function useGuestName() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
