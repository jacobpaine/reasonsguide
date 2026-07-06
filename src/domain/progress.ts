import type {
  PracticeHistoryEntry,
  ReasoningOrFallacyLabel,
  SessionScore,
  Settings,
  UserProgress,
} from "./types";
import { ALL_LABELS } from "./labels";
import { calculateMastery } from "./mastery";
import {
  readVersioned,
  removeKey,
  writeVersioned,
} from "@/lib/localStorage";

/**
 * Progress persistence: the one place the domain touches localStorage.
 * Everything else takes and returns plain data.
 */

export const PROGRESS_KEY = "reasonsguide:progress";
export const SETTINGS_KEY = "reasonsguide:settings";
export const PENDING_SESSION_KEY = "reasonsguide:pending-session";
export const LAST_RESULT_KEY = "reasonsguide:last-result";
export const SCHEMA_VERSION = 1;

export const EMPTY_PROGRESS: UserProgress = {
  completedLessons: [],
  unlockedLabels: [],
  mastery: {},
  practiceHistory: [],
};

export const DEFAULT_SETTINGS: Settings = {
  theme: { mode: "system" },
  textSize: { size: "medium" },
};

const validLabelIds = new Set<string>(ALL_LABELS.map((l) => l.id));

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

export function isUserProgress(value: unknown): value is UserProgress {
  if (typeof value !== "object" || value === null) return false;
  const p = value as Record<string, unknown>;
  return (
    isStringArray(p.completedLessons) &&
    isStringArray(p.unlockedLabels) &&
    (p.unlockedLabels as string[]).every((id) => validLabelIds.has(id)) &&
    typeof p.mastery === "object" &&
    p.mastery !== null &&
    Array.isArray(p.practiceHistory)
  );
}

export function isSettings(value: unknown): value is Settings {
  if (typeof value !== "object" || value === null) return false;
  const s = value as { theme?: { mode?: unknown }; textSize?: { size?: unknown } };
  return (
    !!s.theme &&
    ["light", "dark", "system"].includes(s.theme.mode as string) &&
    !!s.textSize &&
    ["small", "medium", "large"].includes(s.textSize.size as string)
  );
}

export function loadProgress(): UserProgress {
  return readVersioned(PROGRESS_KEY, SCHEMA_VERSION, isUserProgress, EMPTY_PROGRESS);
}

export function persistProgress(progress: UserProgress): boolean {
  return writeVersioned(PROGRESS_KEY, SCHEMA_VERSION, progress);
}

export function resetProgress(): void {
  removeKey(PROGRESS_KEY);
  removeKey(PENDING_SESSION_KEY);
  removeKey(LAST_RESULT_KEY);
}

export function loadSettings(): Settings {
  return readVersioned(SETTINGS_KEY, SCHEMA_VERSION, isSettings, DEFAULT_SETTINGS);
}

export function persistSettings(settings: Settings): boolean {
  return writeVersioned(SETTINGS_KEY, SCHEMA_VERSION, settings);
}

/**
 * Fold a finished practice session into progress: update mastery and
 * append a history entry. Pure with respect to its inputs.
 */
export function recordSession(
  progress: UserProgress,
  score: SessionScore,
  selectedLabels: readonly ReasoningOrFallacyLabel[],
  storyIds: readonly string[],
  now: string,
  entryId: string,
): UserProgress {
  const entry: PracticeHistoryEntry = {
    id: entryId,
    completedAt: now,
    selectedLabels,
    storyIds,
    correct: score.totals.correct,
    missed: score.totals.missed,
    overLabeled: score.totals.overLabeled,
    wrongLabel: score.totals.wrongLabel,
  };
  return {
    ...progress,
    mastery: calculateMastery(progress.mastery, score.labelEvents, now),
    practiceHistory: [...progress.practiceHistory, entry],
  };
}
