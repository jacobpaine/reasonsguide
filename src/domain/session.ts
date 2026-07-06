import type {
  ReasoningOrFallacyLabel,
  SessionScore,
} from "./types";
import { readJson, removeKey, writeJson } from "@/lib/localStorage";
import { LAST_RESULT_KEY, PENDING_SESSION_KEY } from "./progress";

/**
 * Hand-off state between the practice screens. The setup screen writes a
 * pending session; the session screen consumes it; the session screen writes
 * a result; the feedback screen reads it. Kept in localStorage so a static
 * export needs no query strings or server state.
 */

export type PendingSession = {
  selectedLabels: readonly ReasoningOrFallacyLabel[];
  storyIds: readonly string[];
  createdAt: string;
};

export type MasteryChange = {
  labelId: ReasoningOrFallacyLabel;
  before: number;
  after: number;
  attemptsBefore: number;
};

export type StoredSessionResult = {
  score: SessionScore;
  selectedLabels: readonly ReasoningOrFallacyLabel[];
  storyIds: readonly string[];
  /** Answers by story id, so feedback can show what the user chose. */
  answers: Readonly<
    Record<string, readonly { sentenceId: string; labelId: ReasoningOrFallacyLabel; explanationId?: string }[]>
  >;
  masteryChanges: readonly MasteryChange[];
  completedAt: string;
};

function isPendingSession(value: unknown): value is PendingSession {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return Array.isArray(v.selectedLabels) && Array.isArray(v.storyIds);
}

function isStoredResult(value: unknown): value is StoredSessionResult {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.score === "object" &&
    v.score !== null &&
    Array.isArray(v.storyIds) &&
    Array.isArray(v.masteryChanges)
  );
}

export function savePendingSession(session: PendingSession): void {
  writeJson(PENDING_SESSION_KEY, session);
}

export function loadPendingSession(): PendingSession | null {
  return readJson<PendingSession | null>(
    PENDING_SESSION_KEY,
    (v): v is PendingSession | null => v === null || isPendingSession(v),
    null,
  );
}

export function clearPendingSession(): void {
  removeKey(PENDING_SESSION_KEY);
}

export function saveSessionResult(result: StoredSessionResult): void {
  writeJson(LAST_RESULT_KEY, result);
}

export function loadSessionResult(): StoredSessionResult | null {
  return readJson<StoredSessionResult | null>(
    LAST_RESULT_KEY,
    (v): v is StoredSessionResult | null => v === null || isStoredResult(v),
    null,
  );
}
