import type { PracticeStory } from "@/domain/types";
import { beginnerStories } from "./beginner";
import { intermediateStories } from "./intermediate";
import { appliedStories } from "./applied";
import { valuesStories } from "./values";
import { meaningStories } from "./meaning";
import { structureStories } from "./structure";
import { fallacyStories } from "./fallacies";
import { evidenceFallacyStories } from "./evidence-fallacies";
import { causalFallacyStories } from "./causal-fallacies";
import { formalFallacyStories } from "./formal-fallacies";
import { relevanceFallacyStories } from "./relevance-fallacies";
import { presumptionFallacyStories } from "./presumption-fallacies";
import { languageFallacyStories } from "./language-fallacies";

export const ALL_STORIES: readonly PracticeStory[] = [
  ...beginnerStories,
  ...intermediateStories,
  ...appliedStories,
  ...valuesStories,
  ...meaningStories,
  ...structureStories,
  ...fallacyStories,
  ...evidenceFallacyStories,
  ...causalFallacyStories,
  ...formalFallacyStories,
  ...relevanceFallacyStories,
  ...presumptionFallacyStories,
  ...languageFallacyStories,
];

export function getStory(id: string): PracticeStory | undefined {
  return ALL_STORIES.find((story) => story.id === id);
}
