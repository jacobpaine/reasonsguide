import type { Lesson } from "@/domain/types";
import { claimSupportLesson } from "./claim-support";
import { deductiveLesson } from "./deductive";
import { inductiveLesson } from "./inductive";
import { abductiveLesson } from "./abductive";
import { analogicalLesson } from "./analogical";
import { causalLesson } from "./causal";
import { statisticalLesson } from "./statistical";
import { fallaciesIntroLesson } from "./fallacies-intro";
import { fallacyDrafts, reasoningDrafts } from "./drafts";

/**
 * The curriculum path, in learning order. Ready lessons form the unlockable
 * spine; drafts appear in the journal as "future chapters".
 *
 * Ordering principle: learn to recognize kinds of reasoning first, then meet
 * fallacies as failure modes of forms you already know.
 */
export const LESSONS: readonly Lesson[] = [
  claimSupportLesson,
  deductiveLesson,
  inductiveLesson,
  abductiveLesson,
  analogicalLesson,
  causalLesson,
  statisticalLesson,
  fallaciesIntroLesson,
  ...reasoningDrafts,
  ...fallacyDrafts,
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}
