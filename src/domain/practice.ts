import type {
  ExplanationOption,
  PracticeSentence,
  PracticeStory,
  ReasoningOrFallacyLabel,
} from "./types";
import type { Rng } from "@/lib/rng";
import { shuffle } from "@/lib/rng";

/**
 * Practice session assembly.
 *
 * Given the labels the user selected, choose stories so that:
 * - every story's target labels are within the selection (no unfair targets)
 * - across the session, each selected label appears at least once when the
 *   content pool allows it
 * - story order is otherwise varied (seeded rng for testability)
 */

export const STORIES_PER_SESSION = 3;

export function targetLabelsOf(story: PracticeStory): ReasoningOrFallacyLabel[] {
  const labels = story.sentences
    .filter((s) => s.isTarget && s.primaryLabel)
    .map((s) => s.primaryLabel as ReasoningOrFallacyLabel);
  return [...new Set(labels)];
}

/** Stories with at least one target label in the user's selection. */
export function eligibleStories(
  stories: readonly PracticeStory[],
  selected: readonly ReasoningOrFallacyLabel[],
): PracticeStory[] {
  const selectedSet = new Set(selected);
  return stories.filter((story) => {
    const targets = targetLabelsOf(story);
    return targets.length > 0 && targets.some((label) => selectedSet.has(label));
  });
}

export function selectPracticeStories(
  stories: readonly PracticeStory[],
  selected: readonly ReasoningOrFallacyLabel[],
  rng: Rng,
  count: number = STORIES_PER_SESSION,
): PracticeStory[] {
  const pool = shuffle(eligibleStories(stories, selected), rng);
  if (pool.length <= count) return pool;

  // 20% of sessions pick purely at random for variety; the other 80% use a
  // randomized first-fit cover so each selected label is likely represented.
  if (rng() < 0.2) {
    return pool.slice(0, count);
  }

  const uncovered = new Set(selected);
  const chosen: PracticeStory[] = [];
  const remaining = [...pool];

  while (chosen.length < count && remaining.length > 0) {
    const coveringIndex = remaining.findIndex((story) =>
      targetLabelsOf(story).some((l) => uncovered.has(l)),
    );
    const [picked] = remaining.splice(Math.max(coveringIndex, 0), 1);
    chosen.push(picked);
    targetLabelsOf(picked).forEach((l) => uncovered.delete(l));
  }
  return shuffle(chosen, rng);
}

/**
 * Build the 3–5 explanation options shown for a target sentence, with the
 * correct option included and order randomized.
 */
export function buildExplanationOptions(
  sentence: PracticeSentence,
  rng: Rng,
  max = 5,
): ExplanationOption[] {
  if (!sentence.correctExplanationId) return [...sentence.explanationOptions];
  const correct = sentence.explanationOptions.filter(
    (o) => o.id === sentence.correctExplanationId,
  );
  const distractors = sentence.explanationOptions.filter(
    (o) => o.id !== sentence.correctExplanationId,
  );
  const picked = [...correct, ...shuffle(distractors, rng).slice(0, max - 1)];
  return shuffle(picked, rng);
}
