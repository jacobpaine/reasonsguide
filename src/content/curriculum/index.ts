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
import { expectedValueLesson } from "./expected-value";
import { precedentLesson } from "./precedent";
import { practicalLesson } from "./practical";
import { moralLesson } from "./moral";
import { comparativeLesson } from "./comparative";
import { conductiveLesson } from "./conductive";
import { definitionalLesson } from "./definitional";
import { conceptualLesson } from "./conceptual";
import { classificationLesson } from "./classification";
import { partWholeLesson } from "./part-whole";
import { dialecticalLesson } from "./dialectical";
import { thoughtExperimentLesson } from "./thought-experiment";
import { reductioLesson } from "./reductio";
import { fallaciesIntroLesson } from "./fallacies-intro";
import { evidenceFallaciesLesson } from "./evidence-fallacies";
import { causalFallaciesLesson } from "./causal-fallacies";
import { formalFallaciesLesson } from "./formal-fallacies";
import { relevanceFallaciesLesson } from "./relevance-fallacies";
import { presumptionFallaciesLesson } from "./presumption-fallacies";
import { languageFallaciesLesson } from "./language-fallacies";

/**
 * The curriculum path, in suggested learning order (all written chapters are
 * open; the order is a path, not a gate).
 *
 * Ordering principle: the core inference forms, then reasoning in use
 * (applied/evaluative), then reasoning about words, ideas, and structure —
 * and only then fallacies, framed as failure modes of forms already learned.
 * The UI shows the two tracks (reasoning / fallacies) as separate tabs.
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
  expectedValueLesson,
  precedentLesson,
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
  thoughtExperimentLesson,
  reductioLesson,
  // failure modes
  fallaciesIntroLesson,
  evidenceFallaciesLesson,
  causalFallaciesLesson,
  formalFallaciesLesson,
  relevanceFallaciesLesson,
  presumptionFallaciesLesson,
  languageFallaciesLesson,
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}
