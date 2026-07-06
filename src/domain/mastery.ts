import type {
  LabelEvent,
  MasteryRecord,
  ReasoningOrFallacyLabel,
} from "./types";

/**
 * Mastery is an exponentially weighted moving average in [0, 1]:
 * recent practice counts more than old practice, and a single bad
 * session doesn't erase real progress.
 */

const EWMA_WEIGHT = 0.3; // weight given to the newest event

export function emptyMastery(
  labelId: ReasoningOrFallacyLabel,
  now: string,
): MasteryRecord {
  return { labelId, attempts: 0, mastery: 0, lastPracticedAt: now };
}

export function applyEvent(record: MasteryRecord, event: LabelEvent, now: string): MasteryRecord {
  const mastery =
    record.attempts === 0
      ? event.score
      : record.mastery * (1 - EWMA_WEIGHT) + event.score * EWMA_WEIGHT;
  return {
    ...record,
    attempts: record.attempts + 1,
    mastery: Math.min(1, Math.max(0, mastery)),
    lastPracticedAt: now,
  };
}

/**
 * Fold a session's label events into a mastery map. Returns a new map;
 * the input is not mutated.
 */
export function calculateMastery(
  current: Readonly<Partial<Record<ReasoningOrFallacyLabel, MasteryRecord>>>,
  events: readonly LabelEvent[],
  now: string,
): Partial<Record<ReasoningOrFallacyLabel, MasteryRecord>> {
  return events.reduce(
    (acc, event) => {
      const existing = acc[event.labelId] ?? emptyMastery(event.labelId, now);
      return { ...acc, [event.labelId]: applyEvent(existing, event, now) };
    },
    { ...current },
  );
}

export type MasteryTier = "unpracticed" | "sprouting" | "developing" | "solid" | "fluent";

export function masteryTier(record: MasteryRecord | undefined): MasteryTier {
  if (!record || record.attempts === 0) return "unpracticed";
  if (record.mastery < 0.35) return "sprouting";
  if (record.mastery < 0.6) return "developing";
  if (record.mastery < 0.85) return "solid";
  return "fluent";
}

export const MASTERY_TIER_NAMES: Readonly<Record<MasteryTier, string>> = {
  unpracticed: "Not yet practiced",
  sprouting: "First attempts",
  developing: "Developing",
  solid: "Solid",
  fluent: "Fluent",
};
