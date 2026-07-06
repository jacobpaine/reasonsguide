import type { PracticeStory } from "@/domain/types";
import { beginnerStories } from "./beginner";
import { intermediateStories } from "./intermediate";
import { fallacyStories } from "./fallacies";

export const ALL_STORIES: readonly PracticeStory[] = [
  ...beginnerStories,
  ...intermediateStories,
  ...fallacyStories,
];

export function getStory(id: string): PracticeStory | undefined {
  return ALL_STORIES.find((story) => story.id === id);
}
