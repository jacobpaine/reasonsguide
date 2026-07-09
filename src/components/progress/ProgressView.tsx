"use client";

import Link from "next/link";
import { useProgress } from "@/components/layout/useProgress";
import { Card } from "@/components/ui/Card";
import {
  ALL_LABELS,
  groupLabelsByCategory,
  REASONING_CATEGORY_NAMES,
  FALLACY_CATEGORY_NAMES,
} from "@/domain/labels";
import { masteryTier, MASTERY_TIER_NAMES } from "@/domain/mastery";
import { LESSONS } from "@/content/curriculum";
import { cn } from "@/lib/cn";
import type { LabelId, ReasoningCategory, FallacyCategory } from "@/domain/types";

const ALL_IDS = ALL_LABELS.map((l) => l.id as LabelId);

const TIER_CLASS: Record<ReturnType<typeof masteryTier>, string> = {
  unpracticed: "text-ink-soft",
  sprouting: "text-ink-soft",
  developing: "text-ink",
  solid: "text-accent",
  fluent: "font-semibold text-accent",
};

function lessonFor(labelId: LabelId) {
  return LESSONS.find((l) => (l.labelIds as readonly string[]).includes(labelId));
}

export function ProgressView() {
  const { progress, loaded } = useProgress();

  const groups = groupLabelsByCategory(ALL_IDS);
  const reasoningGroups = groups.filter((g) => g.kind === "reasoning");
  const fallacyGroups = groups.filter((g) => g.kind === "fallacy");

  const unlockedSet = new Set(progress.unlockedLabels);
  const totalUnlocked = unlockedSet.size;
  const totalFluent = ALL_LABELS.filter(
    (l) => masteryTier(progress.mastery[l.id as LabelId]) === "fluent",
  ).length;

  if (loaded && totalUnlocked === 0) {
    return (
      <article className="space-y-8" aria-busy={!loaded}>
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Progress</h1>
        </header>
        <Card>
          <p className="text-ink-soft">
            Complete a chapter to unlock your first forms for practice.
          </p>
          <div className="mt-4">
            <Link
              href="/learn/"
              className="font-sans text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Go to chapters →
            </Link>
          </div>
        </Card>
      </article>
    );
  }

  return (
    <article className="space-y-10" aria-busy={!loaded}>
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">Progress</h1>
        <p className="font-sans text-sm text-ink-soft">
          {totalUnlocked} of {ALL_LABELS.length} forms unlocked
          {totalFluent > 0 && ` · ${totalFluent} fluent`}
        </p>
      </header>

      <section aria-label="Reasoning forms" className="space-y-6">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-soft">
          Reasoning
        </h2>
        {reasoningGroups.map((group) => (
          <div key={group.category} className="space-y-1">
            <h3 className="font-sans text-sm font-medium text-ink-soft">
              {REASONING_CATEGORY_NAMES[group.category as ReasoningCategory]}
            </h3>
            <ul className="divide-y divide-line rounded-md border border-line">
              {group.labels.map((label) => {
                const unlocked = unlockedSet.has(label.id as LabelId);
                const tier = masteryTier(progress.mastery[label.id as LabelId]);
                const lesson = lessonFor(label.id as LabelId);
                return (
                  <li
                    key={label.id}
                    className={cn(
                      "flex items-baseline justify-between gap-4 px-4 py-3",
                      !unlocked && "opacity-50",
                    )}
                  >
                    <span>
                      <span className="font-medium">{label.name}</span>
                      {label.friendlyName && (
                        <span className="ml-2 font-sans text-xs text-ink-soft">
                          {label.friendlyName}
                        </span>
                      )}
                    </span>
                    {unlocked ? (
                      <span
                        className={cn("shrink-0 font-sans text-xs", TIER_CLASS[tier])}
                        title={label.shortDefinition}
                      >
                        {MASTERY_TIER_NAMES[tier]}
                      </span>
                    ) : (
                      <Link
                        href={lesson ? `/lesson/${lesson.id}/` : "/learn/"}
                        className="shrink-0 font-sans text-xs text-ink-soft underline-offset-2 hover:underline"
                      >
                        {lesson ? `Unlock in "${lesson.title}"` : "Locked"}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      <section aria-label="Fallacies" className="space-y-6">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-soft">
          Fallacies
        </h2>
        {fallacyGroups.map((group) => (
          <div key={group.category} className="space-y-1">
            <h3 className="font-sans text-sm font-medium text-ink-soft">
              {FALLACY_CATEGORY_NAMES[group.category as FallacyCategory]}
            </h3>
            <ul className="divide-y divide-line rounded-md border border-line">
              {group.labels.map((label) => {
                const unlocked = unlockedSet.has(label.id as LabelId);
                const tier = masteryTier(progress.mastery[label.id as LabelId]);
                const lesson = lessonFor(label.id as LabelId);
                return (
                  <li
                    key={label.id}
                    className={cn(
                      "flex items-baseline justify-between gap-4 px-4 py-3",
                      !unlocked && "opacity-50",
                    )}
                  >
                    <span className="font-medium">{label.name}</span>
                    {unlocked ? (
                      <span
                        className={cn("shrink-0 font-sans text-xs", TIER_CLASS[tier])}
                        title={label.shortDefinition}
                      >
                        {MASTERY_TIER_NAMES[tier]}
                      </span>
                    ) : (
                      <Link
                        href={lesson ? `/lesson/${lesson.id}/` : "/learn/"}
                        className="shrink-0 font-sans text-xs text-ink-soft underline-offset-2 hover:underline"
                      >
                        {lesson ? `Unlock in "${lesson.title}"` : "Locked"}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}
