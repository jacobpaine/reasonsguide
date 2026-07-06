import { describe, expect, it } from "vitest";
import { recordSession, EMPTY_PROGRESS } from "@/domain/progress";
import { scorePracticeSession } from "@/domain/scoring";
import { beginnerStories } from "@/content/stories/beginner";

const NOW = "2026-07-06T00:00:00.000Z";

describe("recordSession", () => {
  const story = beginnerStories[0];
  const target = story.sentences.find((s) => s.isTarget)!;

  it("updates mastery and appends a history entry without mutating input", () => {
    const score = scorePracticeSession([story], {
      [story.id]: [
        {
          sentenceId: target.id,
          labelId: target.primaryLabel!,
          explanationId: target.correctExplanationId,
        },
      ],
    });
    const next = recordSession(
      EMPTY_PROGRESS,
      score,
      story.includedLabels,
      [story.id],
      NOW,
      "entry-1",
    );

    expect(EMPTY_PROGRESS.practiceHistory).toHaveLength(0);
    expect(next.practiceHistory).toHaveLength(1);
    expect(next.practiceHistory[0]).toMatchObject({
      id: "entry-1",
      correct: 1,
      storyIds: [story.id],
    });
    expect(next.mastery[target.primaryLabel!]?.mastery).toBe(1);
    // the other target was missed, so its label records a zero-score attempt
    const otherTarget = story.sentences.find((s) => s.isTarget && s.id !== target.id)!;
    expect(next.mastery[otherTarget.primaryLabel!]?.mastery).toBe(0);
  });
});
