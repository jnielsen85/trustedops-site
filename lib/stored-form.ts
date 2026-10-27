import { useSyncExternalStore } from "react";

const subscribeNoop = () => () => {};

/** False on the server and during hydration, true once rendering in the browser. */
export function useHydrated() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

/** Saved form progress from localStorage merged over the defaults, or the defaults if none/corrupt. */
export function readStored<T extends object>(key: string, initial: T): T {
  try {
    const stored = JSON.parse(localStorage.getItem(key) ?? "null");
    return stored ? { ...initial, ...stored } : initial;
  } catch {
    return initial;
  }
}
