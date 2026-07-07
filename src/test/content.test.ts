import { describe, expect, it } from "vitest";
import { LESSONS } from "@/content/curriculum";
import { ALL_STORIES } from "@/content/stories";
import { beginnerStories } from "@/content/stories/beginner";
import { intermediateStories } from "@/content/stories/intermediate";
import { appliedStories } from "@/content/stories/applied";
import { valuesStories } from "@/content/stories/values";
import { meaningStories } from "@/content/stories/meaning";
import { structureStories } from "@/content/stories/structure";
import { fallacyStories } from "@/content/stories/fallacies";
import { evidenceFallacyStories } from "@/content/stories/evidence-fallacies";
import { causalFallacyStories } from "@/content/stories/causal-fallacies";
import { formalFallacyStories } from "@/content/stories/formal-fallacies";
import { relevanceFallacyStories } from "@/content/stories/relevance-fallacies";
import { presumptionFallacyStories } from "@/content/stories/presumption-fallacies";
import { languageFallacyStories } from "@/content/stories/language-fallacies";
import { targetLabelsOf } from "@/domain/practice";
import { getLabel } from "@/domain/labels";

/**
 * Content contract tests: every story and lesson must satisfy the invariants
 * the game logic and UI rely on. Add a story that breaks the rules and these
 * fail — by design.
 */

describe("practice stories", () => {
  it("has at least 7 stories of each type", () => {
    expect(beginnerStories.length).toBeGreaterThanOrEqual(7);
    expect(intermediateStories.length).toBeGreaterThanOrEqual(7);
    expect(appliedStories.length).toBeGreaterThanOrEqual(7);
    expect(valuesStories.length).toBeGreaterThanOrEqual(7);
    expect(meaningStories.length).toBeGreaterThanOrEqual(7);
    expect(structureStories.length).toBeGreaterThanOrEqual(7);
    expect(fallacyStories.length).toBeGreaterThanOrEqual(7);
    expect(evidenceFallacyStories.length).toBeGreaterThanOrEqual(7);
    expect(causalFallacyStories.length).toBeGreaterThanOrEqual(7);
    expect(formalFallacyStories.length).toBeGreaterThanOrEqual(7);
    expect(relevanceFallacyStories.length).toBeGreaterThanOrEqual(7);
    expect(presumptionFallacyStories.length).toBeGreaterThanOrEqual(7);
    expect(languageFallacyStories.length).toBeGreaterThanOrEqual(7);
    expect(ALL_STORIES.length).toBeGreaterThanOrEqual(91);
  });

  it("each practiced label is targeted by enough stories for varied sessions", () => {
    // Every label used by any story should appear in at least 3 stories,
    // so repeated sessions with the same selection can differ.
    const counts = new Map<string, number>();
    for (const story of ALL_STORIES) {
      for (const label of targetLabelsOf(story)) {
        counts.set(label, (counts.get(label) ?? 0) + 1);
      }
    }
    for (const [label, count] of counts) {
      expect(count, `stories targeting ${label}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("has unique story and sentence ids", () => {
    const storyIds = ALL_STORIES.map((s) => s.id);
    expect(new Set(storyIds).size).toBe(storyIds.length);
    const sentenceIds = ALL_STORIES.flatMap((s) => s.sentences.map((x) => x.id));
    expect(new Set(sentenceIds).size).toBe(sentenceIds.length);
  });

  it.each(ALL_STORIES.map((s) => [s.title, s] as const))(
    "%s: has 5–7 sentences and 2–3 targets",
    (_title, story) => {
      expect(story.sentences.length).toBeGreaterThanOrEqual(5);
      expect(story.sentences.length).toBeLessThanOrEqual(7);
      const targets = story.sentences.filter((s) => s.isTarget);
      expect(targets.length).toBeGreaterThanOrEqual(2);
      expect(targets.length).toBeLessThanOrEqual(3);
    },
  );

  it.each(ALL_STORIES.map((s) => [s.title, s] as const))(
    "%s: every target has a primary label, 3–5 explanation options, and a valid correct option",
    (_title, story) => {
      for (const sentence of story.sentences.filter((s) => s.isTarget)) {
        expect(sentence.primaryLabel).toBeDefined();
        expect(() => getLabel(sentence.primaryLabel!)).not.toThrow();
        expect(sentence.explanationOptions.length).toBeGreaterThanOrEqual(3);
        expect(sentence.explanationOptions.length).toBeLessThanOrEqual(5);
        expect(sentence.correctExplanationId).toBeDefined();
        expect(
          sentence.explanationOptions.some((o) => o.id === sentence.correctExplanationId),
        ).toBe(true);
      }
    },
  );

  it.each(ALL_STORIES.map((s) => [s.title, s] as const))(
    "%s: includedLabels matches the target labels",
    (_title, story) => {
      expect([...targetLabelsOf(story)].sort()).toEqual([...story.includedLabels].sort());
    },
  );

  it("neutral sentences carry no labels or options", () => {
    for (const story of ALL_STORIES) {
      for (const sentence of story.sentences.filter((s) => !s.isTarget)) {
        expect(sentence.labels).toHaveLength(0);
        expect(sentence.primaryLabel).toBeUndefined();
        expect(sentence.explanationOptions).toHaveLength(0);
      }
    }
  });
});

describe("lessons", () => {
  const ready = LESSONS.filter((l) => l.status === "ready");

  it("has unique lesson ids and covers every planned label exactly once", () => {
    const ids = LESSONS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
    const taught = LESSONS.flatMap((l) => l.labelIds);
    expect(new Set(taught).size).toBe(taught.length);
    expect(taught).toHaveLength(45); // 18 reasoning + 27 fallacies
  });

  it.each(ready.map((l) => [l.title, l] as const))(
    "%s: has the full lesson structure",
    (_title, lesson) => {
      expect(lesson.definition.length).toBeGreaterThan(40);
      expect(lesson.memoryHook.length).toBeGreaterThan(5);
      expect(lesson.soundsLike.length).toBeGreaterThanOrEqual(2);
      expect(lesson.workedExamples).toHaveLength(2);
      expect(lesson.guidedExamples).toHaveLength(3);
      expect(lesson.mixedQuestions).toHaveLength(5);
      expect(lesson.unlockChallenge).toHaveLength(3);
    },
  );

  it("every question's correct label is among its options", () => {
    for (const lesson of ready) {
      for (const q of [...lesson.mixedQuestions, ...lesson.unlockChallenge]) {
        expect(q.options).toContain(q.correctLabel);
        expect(new Set(q.options).size).toBe(q.options.length);
      }
    }
  });

  it("guided examples each have exactly one correct choice", () => {
    for (const lesson of ready) {
      for (const g of lesson.guidedExamples) {
        expect(g.choices.filter((c) => c.isCorrect)).toHaveLength(1);
      }
    }
  });

  it("reasoning lessons come before the first fallacy lesson", () => {
    const firstFallacyIndex = LESSONS.findIndex((l) =>
      l.labelIds.some((id) => getLabel(id).kind === "fallacy"),
    );
    const coreReasoning = ["claim-support", "deductive", "inductive", "abductive"];
    for (const id of coreReasoning) {
      expect(LESSONS.findIndex((l) => l.id === id)).toBeLessThan(firstFallacyIndex);
    }
  });
});
