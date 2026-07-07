import type { Lesson } from "@/domain/types";
import { claimSupportLesson } from "./claim-support";
import { deductiveLesson } from "./deductive";
import { inductiveLesson } from "./inductive";
import { abductiveLesson } from "./abductive";
import { analogicalLesson } from "./analogical";
import { causalLesson } from "./causal";
import { statisticalLesson } from "./statistical";
import { bayesianLesson } from "./bayesian";
import { authorityLesson } from "./authority";
import { practicalLesson } from "./practical";
import { moralLesson } from "./moral";
import { comparativeLesson } from "./comparative";
import { conductiveLesson } from "./conductive";
import { definitionalLesson } from "./definitional";
import { conceptualLesson } from "./conceptual";
import { classificationLesson } from "./classification";
import { partWholeLesson } from "./part-whole";
import { dialecticalLesson } from "./dialectical";
import { fallaciesIntroLesson } from "./fallacies-intro";
import { evidenceFallaciesLesson } from "./evidence-fallacies";
import { causalFallaciesLesson } from "./causal-fallacies";
import { fallacyDrafts } from "./drafts";

/**
 * The curriculum path, in suggested learning order (all written chapters are
 * open; the order is a path, not a gate). Drafts appear as "future chapters".
 *
 * Ordering principle: the core inference forms, then reasoning in use
 * (applied/evaluative), then reasoning about words, ideas, and structure —
 * and only then fallacies, framed as failure modes of forms already learned.
 */
export const LESSONS: readonly Lesson[] = [
  // core inference
  claimSupportLesson,
  deductiveLesson,
  inductiveLesson,
  abductiveLesson,
  analogicalLesson,
  causalLesson,
  statisticalLesson,
  bayesianLesson,
  // reasoning in use
  authorityLesson,
  practicalLesson,
  moralLesson,
  comparativeLesson,
  conductiveLesson,
  // words, ideas, and structure
  definitionalLesson,
  conceptualLesson,
  classificationLesson,
  partWholeLesson,
  dialecticalLesson,
  // failure modes
  fallaciesIntroLesson,
  evidenceFallaciesLesson,
  causalFallaciesLesson,
  ...fallacyDrafts,
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}
