"use client";

import { useCallback, useEffect, useState } from "react";
import type { UserProgress } from "@/domain/types";
import {
  EMPTY_PROGRESS,
  loadProgress,
  persistProgress,
  resetProgress as clearStoredProgress,
} from "@/domain/progress";

/**
 * Client-side progress state. Renders with empty progress until mounted
 * (so static HTML matches the first client render), then loads from
 * localStorage. All mutations go through pure domain functions; this hook
 * only holds state and persists it.
 */
export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(EMPTY_PROGRESS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Post-mount localStorage hydration (static export renders without storage).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(loadProgress());
    setLoaded(true);
  }, []);

  const update = useCallback((next: UserProgress) => {
    setProgress(next);
    persistProgress(next);
  }, []);

  const reset = useCallback(() => {
    clearStoredProgress();
    setProgress(EMPTY_PROGRESS);
  }, []);

  return { progress, loaded, update, reset };
}
