import type { PracticeStory } from "@/domain/types";
import { beginnerStories } from "./beginner";
import { intermediateStories } from "./intermediate";
import { appliedStories } from "./applied";
import { fallacyStories } from "./fallacies";
import { evidenceFallacyStories } from "./evidence-fallacies";
import { causalFallacyStories } from "./causal-fallacies";

export const ALL_STORIES: readonly PracticeStory[] = [
  ...beginnerStories,
  ...intermediateStories,
  ...appliedStories,
  ...fallacyStories,
  ...evidenceFallacyStories,
  ...causalFallacyStories,
];

export function getStory(id: string): PracticeStory | undefined {
  return ALL_STORIES.find((story) => story.id === id);
}
