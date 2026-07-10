import { describe, expect, it } from "vitest";
import { scorePracticeSession, scoreStory } from "@/domain/scoring";
import type { PracticeStory } from "@/domain/types";

const story: PracticeStory = {
  id: "st",
  title: "Test story",
  difficulty: "beginner",
  includedLabels: ["deductive", "inductive"],
  sentences: [
    { id: "n1", text: "Neutral one.", labels: [], explanationOptions: [], isTarget: false },
    {
      id: "t1",
      text: "Target deductive.",
      labels: ["deductive"],
      primaryLabel: "deductive",
      isTarget: true,
      correctExplanationId: "t1-good",
      explanationOptions: [
        { id: "t1-good", text: "right" },
        { id: "t1-bad", text: "wrong" },
      ],
    },
    {
      id: "t2",
      text: "Target inductive.",
      labels: ["inductive"],
      primaryLabel: "inductive",
      isTarget: true,
      correctExplanationId: "t2-good",
      explanationOptions: [
        { id: "t2-good", text: "right" },
        { id: "t2-bad", text: "wrong" },
      ],
    },
    { id: "n2", text: "Neutral two.", labels: [], explanationOptions: [], isTarget: false },
  ],
};

describe("scoreStory", () => {
  it("marks a correctly labeled target with correct explanation as correct", () => {
    const result = scoreStory(story, [
      { sentenceId: "t1", labelId: "deductive", explanationId: "t1-good" },
    ]);
    const t1 = result.sentenceResults.find((r) => r.sentenceId === "t1");
    expect(t1?.verdict).toBe("correct");
    expect(t1?.explanationCorrect).toBe(true);
  });

  it("tracks a correct label with a wrong explanation", () => {
    const result = scoreStory(story, [
      { sentenceId: "t1", labelId: "deductive", explanationId: "t1-bad" },
    ]);
    const t1 = result.sentenceResults.find((r) => r.sentenceId === "t1");
    expect(t1?.verdict).toBe("correct");
    expect(t1?.explanationCorrect).toBe(false);
  });

  it("marks a target with the wrong label as wrong-label", () => {
    const result = scoreStory(story, [
      { sentenceId: "t1", labelId: "inductive", explanationId: "t1-bad" },
    ]);
    expect(result.sentenceResults.find((r) => r.sentenceId === "t1")?.verdict).toBe(
      "wrong-label",
    );
    expect(result.wrongLabel).toBe(1);
  });

  it("marks unanswered targets as missed", () => {
    const result = scoreStory(story, []);
    expect(result.missed).toBe(2);
    expect(result.correct).toBe(0);
  });

  it("marks labeled neutral sentences as over-labeled and untouched ones as clear", () => {
    const result = scoreStory(story, [{ sentenceId: "n1", labelId: "deductive" }]);
    expect(result.sentenceResults.find((r) => r.sentenceId === "n1")?.verdict).toBe(
      "over-labeled",
    );
    expect(result.sentenceResults.find((r) => r.sentenceId === "n2")?.verdict).toBe(
      "clear",
    );
    expect(result.overLabeled).toBe(1);
  });
});

describe("scoreStory with selectedLabels", () => {
  it("treats a target whose label is not selected as clear, even if unanswered", () => {
    const result = scoreStory(story, [], new Set(["deductive"]));
    // t1 (deductive) is active → missed; t2 (inductive) is inactive → clear
    expect(result.sentenceResults.find((r) => r.sentenceId === "t1")?.verdict).toBe("missed");
    expect(result.sentenceResults.find((r) => r.sentenceId === "t2")?.verdict).toBe("clear");
    expect(result.missed).toBe(1);
  });

  it("emits no mastery event for an inactive target even if the user labeled it", () => {
    const result = scoreStory(
      story,
      [{ sentenceId: "t2", labelId: "deductive" }],
      new Set(["deductive"]),
    );
    // t2 is inactive (inductive, not in selection): clear regardless of answer
    expect(result.sentenceResults.find((r) => r.sentenceId === "t2")?.verdict).toBe("clear");
    expect(result.overLabeled).toBe(0);
  });
});

describe("scorePracticeSession", () => {
  it("aggregates totals across stories and emits label events", () => {
    const score = scorePracticeSession([story], {
      st: [
        { sentenceId: "t1", labelId: "deductive", explanationId: "t1-good" },
        { sentenceId: "n1", labelId: "inductive" },
      ],
    });
    expect(score.totals.correct).toBe(1);
    expect(score.totals.missed).toBe(1);
    expect(score.totals.overLabeled).toBe(1);

    // events: t1 correct (1.0), t2 missed (0), n1 over-labeled penalty (0)
    const deductiveEvent = score.labelEvents.find((e) => e.labelId === "deductive");
    expect(deductiveEvent?.score).toBe(1);
    const inductiveEvents = score.labelEvents.filter((e) => e.labelId === "inductive");
    expect(inductiveEvents).toHaveLength(2);
    expect(inductiveEvents.every((e) => e.score === 0)).toBe(true);
  });

  it("scores a correct label with wrong explanation below a full match", () => {
    const score = scorePracticeSession([story], {
      st: [{ sentenceId: "t1", labelId: "deductive", explanationId: "t1-bad" }],
    });
    const event = score.labelEvents.find((e) => e.labelId === "deductive");
    expect(event?.score).toBeGreaterThan(0);
    expect(event?.score).toBeLessThan(1);
  });

  it("treats stories with no answers entry as fully missed", () => {
    const score = scorePracticeSession([story], {});
    expect(score.totals.missed).toBe(2);
    expect(score.totals.overLabeled).toBe(0);
  });
});
