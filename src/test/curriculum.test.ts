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
  it("only the first ready lesson is available at the start", () => {
    const ready = LESSONS.filter((l) => l.status === "ready");
    expect(isLessonAvailable(LESSONS, fresh, ready[0].id)).toBe(true);
    expect(isLessonAvailable(LESSONS, fresh, ready[1].id)).toBe(false);
  });

  it("draft lessons are never available", () => {
    const draft = LESSONS.find((l) => l.status === "draft");
    expect(draft).toBeDefined();
    const allDone: UnlockState = {
      completedLessons: LESSONS.map((l) => l.id),
      unlockedLabels: [],
    };
    expect(isLessonAvailable(LESSONS, allDone, draft!.id)).toBe(false);
  });

  it("completing a lesson makes the next ready lesson available", () => {
    const ready = LESSONS.filter((l) => l.status === "ready");
    const after = completeLesson(LESSONS, fresh, ready[0].id);
    expect(isLessonAvailable(LESSONS, after, ready[1].id)).toBe(true);
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
