import type { CurriculumItem, Lesson, UnlockState } from "./types";
import { getLabel } from "./labels";

/**
 * Curriculum progression rules.
 *
 * Every written (ready) lesson is open to take in any order — the lesson
 * sequence is a suggested path, not a gate. What stays gated is practice:
 * a lesson's labels only join the practice shelf when the lesson is
 * completed (its unlock challenge passed). Drafts can't be taken at all.
 */

export function toCurriculumItems(lessons: readonly Lesson[]): CurriculumItem[] {
  return lessons.map((lesson, index) => ({
    lessonId: lesson.id,
    order: index,
    track: lesson.labelIds.every((id) => getLabel(id).kind === "reasoning")
      ? "reasoning"
      : "fallacy",
    status: lesson.status,
    title: lesson.title,
    labelIds: lesson.labelIds,
    blurb: lesson.definition,
  }));
}

export function isLessonCompleted(state: UnlockState, lessonId: string): boolean {
  return state.completedLessons.includes(lessonId);
}

/** A lesson is available if it's written ("ready"); drafts are not. */
export function isLessonAvailable(
  lessons: readonly Lesson[],
  lessonId: string,
): boolean {
  const lesson = lessons.find((l) => l.id === lessonId);
  return lesson?.status === "ready";
}

/** The next ready lesson the user hasn't completed, if any. */
export function nextAvailableLesson(
  lessons: readonly Lesson[],
  state: UnlockState,
): Lesson | undefined {
  return lessons.find(
    (l) => l.status === "ready" && !state.completedLessons.includes(l.id),
  );
}

/**
 * Mark a lesson complete and unlock its labels. Returns a new state;
 * completing an already-completed lesson is a no-op.
 */
export function completeLesson(
  lessons: readonly Lesson[],
  state: UnlockState,
  lessonId: string,
): UnlockState {
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson || state.completedLessons.includes(lessonId)) return state;
  return {
    completedLessons: [...state.completedLessons, lessonId],
    unlockedLabels: [
      ...state.unlockedLabels,
      ...lesson.labelIds.filter((id) => !state.unlockedLabels.includes(id)),
    ],
  };
}

/** Alias matching the spec's name: completing a lesson is what unlocks the next. */
export const unlockNextLesson = completeLesson;

export function getUnlockedLabels(state: UnlockState): readonly UnlockState["unlockedLabels"][number][] {
  return state.unlockedLabels;
}
