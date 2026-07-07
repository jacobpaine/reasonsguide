import { describe, expect, it } from "vitest";
import {
  buildExplanationOptions,
  eligibleStories,
  selectPracticeStories,
  targetLabelsOf,
} from "@/domain/practice";
import { ALL_STORIES } from "@/content/stories";
import { createRng } from "@/lib/rng";
import type { PracticeSentence } from "@/domain/types";

describe("eligibleStories", () => {
  it("only returns stories whose every target label was selected", () => {
    const stories = eligibleStories(ALL_STORIES, ["deductive", "abductive"]);
    expect(stories.length).toBeGreaterThan(0);
    for (const story of stories) {
      for (const label of targetLabelsOf(story)) {
        expect(["deductive", "abductive"]).toContain(label);
      }
    }
  });

  it("excludes stories containing unselected target labels", () => {
    // Only deductive selected: eligible stories must target deduction alone.
    const stories = eligibleStories(ALL_STORIES, ["deductive"]);
    expect(stories.length).toBeGreaterThanOrEqual(1);
    for (const story of stories) {
      expect(targetLabelsOf(story)).toEqual(["deductive"]);
    }
  });

  it("returns nothing for an empty selection", () => {
    expect(eligibleStories(ALL_STORIES, [])).toEqual([]);
  });
});

describe("selectPracticeStories", () => {
  it("returns at most the requested count", () => {
    const selected = ["deductive", "inductive", "abductive"] as const;
    const stories = selectPracticeStories(ALL_STORIES, selected, createRng(1));
    expect(stories.length).toBeLessThanOrEqual(3);
    expect(stories.length).toBeGreaterThan(0);
  });

  it("covers every selected label across the session when content allows", () => {
    const selected = ["deductive", "inductive", "abductive"] as const;
    for (const seed of [1, 2, 3, 42, 99]) {
      const stories = selectPracticeStories(ALL_STORIES, selected, createRng(seed));
      const covered = new Set(stories.flatMap(targetLabelsOf));
      for (const label of selected) {
        expect(covered.has(label)).toBe(true);
      }
    }
  });

  it("is deterministic for a given seed", () => {
    const selected = ["hasty-generalization", "post-hoc", "anecdotal-evidence"] as const;
    const a = selectPracticeStories(ALL_STORIES, selected, createRng(7)).map((s) => s.id);
    const b = selectPracticeStories(ALL_STORIES, selected, createRng(7)).map((s) => s.id);
    expect(a).toEqual(b);
  });

  it("works with a single selected label", () => {
    const stories = selectPracticeStories(ALL_STORIES, ["deductive"], createRng(1));
    expect(stories.length).toBeGreaterThanOrEqual(1);
    for (const story of stories) {
      expect(targetLabelsOf(story)).toEqual(["deductive"]);
    }
  });

  it("randomizes which stories are drawn across sessions", () => {
    // With 7+ eligible stories per set, different seeds must not all yield
    // the same three stories.
    const selected = ["deductive", "inductive", "abductive"] as const;
    const draws = new Set(
      Array.from({ length: 20 }, (_, seed) =>
        selectPracticeStories(ALL_STORIES, selected, createRng(seed + 1))
          .map((s) => s.id)
          .sort()
          .join("|"),
      ),
    );
    expect(draws.size).toBeGreaterThan(3);
  });

  it("offers stories mixing a fallacy with its healthy parent form", () => {
    // Completed fallacy chapters should surface inside practice stories
    // alongside the reasoning they are failures of.
    const pairs: ReadonlyArray<readonly ["deductive" | "dialectical" | "part-whole", string]> = [
      ["deductive", "affirming-consequent"],
      ["dialectical", "moving-goalposts"],
      ["part-whole", "composition"],
    ];
    for (const [parent, fallacy] of pairs) {
      const mixed = ALL_STORIES.filter((story) => {
        const targets = targetLabelsOf(story) as readonly string[];
        return targets.includes(parent) && targets.includes(fallacy);
      });
      expect(mixed.length, `${parent} + ${fallacy}`).toBeGreaterThanOrEqual(1);
      // And each such story is reachable by selecting exactly its own labels.
      for (const story of mixed) {
        expect(eligibleStories(ALL_STORIES, story.includedLabels)).toContain(story);
      }
    }
  });

  it("randomizes single-label sessions too when enough stories exist", () => {
    const draws = new Set(
      Array.from({ length: 20 }, (_, seed) =>
        selectPracticeStories(ALL_STORIES, ["hasty-generalization", "post-hoc", "anecdotal-evidence"], createRng(seed + 100))
          .map((s) => s.id)
          .sort()
          .join("|"),
      ),
    );
    expect(draws.size).toBeGreaterThan(3);
  });
});

describe("buildExplanationOptions", () => {
  const sentence: PracticeSentence = {
    id: "s1",
    text: "Example.",
    labels: ["deductive"],
    primaryLabel: "deductive",
    isTarget: true,
    correctExplanationId: "e1",
    explanationOptions: [
      { id: "e1", text: "correct" },
      { id: "e2", text: "distractor A" },
      { id: "e3", text: "distractor B" },
      { id: "e4", text: "distractor C" },
      { id: "e5", text: "distractor D" },
      { id: "e6", text: "distractor E" },
    ],
  };

  it("always includes the correct explanation", () => {
    for (const seed of [1, 2, 3, 4, 5]) {
      const options = buildExplanationOptions(sentence, createRng(seed));
      expect(options.some((o) => o.id === "e1")).toBe(true);
    }
  });

  it("caps the number of options at five", () => {
    const options = buildExplanationOptions(sentence, createRng(1));
    expect(options.length).toBeLessThanOrEqual(5);
    expect(options.length).toBeGreaterThanOrEqual(3);
  });

  it("does not mutate the sentence's own options", () => {
    const before = [...sentence.explanationOptions];
    buildExplanationOptions(sentence, createRng(1));
    expect(sentence.explanationOptions).toEqual(before);
  });
});
