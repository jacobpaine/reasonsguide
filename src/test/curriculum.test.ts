import { describe, expect, it } from "vitest";
import {
  completeLesson,
  isLessonAvailable,
  nextAvailableLesson,
} from "@/domain/curriculum";
import { LESSONS } from "@/content/curriculum";
import type { UnlockState } from "@/domain/types";

const fresh: UnlockState = { completedLessons: [], unlockedLabels: [] };

describe("lesson availability", () => {
  it("every ready lesson is open from the start, in any order", () => {
    for (const lesson of LESSONS.filter((l) => l.status === "ready")) {
      expect(isLessonAvailable(LESSONS, lesson.id)).toBe(true);
    }
  });

  it("draft lessons are never available", () => {
    const drafts = LESSONS.filter((l) => l.status === "draft");
    expect(drafts.length).toBeGreaterThan(0);
    for (const draft of drafts) {
      expect(isLessonAvailable(LESSONS, draft.id)).toBe(false);
    }
  });

  it("unknown lesson ids are not available", () => {
    expect(isLessonAvailable(LESSONS, "no-such-lesson")).toBe(false);
  });

  it("open chapters do not put labels into practice — completion does", () => {
    // A later chapter can be taken first, but its labels only unlock on completion.
    expect(fresh.unlockedLabels).toHaveLength(0);
    const after = completeLesson(LESSONS, fresh, "bayesian");
    expect(after.unlockedLabels).toEqual(["bayesian"]);
    // Other chapters' labels remain out of practice until their own completion.
    expect(after.unlockedLabels).not.toContain("deductive");
  });
});

describe("completeLesson", () => {
  it("unlocks the lesson's labels", () => {
    const after = completeLesson(LESSONS, fresh, "claim-support");
    expect(after.completedLessons).toContain("claim-support");
    expect(after.unlockedLabels).toContain("claim-support");
  });

  it("is a no-op for unknown or already-completed lessons", () => {
    expect(completeLesson(LESSONS, fresh, "nope")).toBe(fresh);
    const once = completeLesson(LESSONS, fresh, "claim-support");
    const twice = completeLesson(LESSONS, once, "claim-support");
    expect(twice).toBe(once);
  });

  it("does not mutate the previous state", () => {
    completeLesson(LESSONS, fresh, "claim-support");
    expect(fresh.completedLessons).toHaveLength(0);
  });

  it("unlocks all three fallacy labels from the intro fallacies lesson", () => {
    const after = completeLesson(LESSONS, fresh, "fallacies-intro");
    expect(after.unlockedLabels).toEqual(
      expect.arrayContaining(["hasty-generalization", "post-hoc", "anecdotal-evidence"]),
    );
  });
});

describe("nextAvailableLesson", () => {
  it("walks the ready path in order", () => {
    expect(nextAvailableLesson(LESSONS, fresh)?.id).toBe("claim-support");
    const after = completeLesson(LESSONS, fresh, "claim-support");
    expect(nextAvailableLesson(LESSONS, after)?.id).toBe("deductive");
  });

  it("returns undefined when every ready lesson is complete", () => {
    const allDone: UnlockState = {
      completedLessons: LESSONS.filter((l) => l.status === "ready").map((l) => l.id),
      unlockedLabels: [],
    };
    expect(nextAvailableLesson(LESSONS, allDone)).toBeUndefined();
  });
});
