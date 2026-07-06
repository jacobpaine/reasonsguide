"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { LabelId } from "@/domain/types";
import { groupLabelsByCategory } from "@/domain/labels";
import { masteryTier, MASTERY_TIER_NAMES } from "@/domain/mastery";
import {
  eligibleStories,
  selectPracticeStories,
  STORIES_PER_SESSION,
} from "@/domain/practice";
import { savePendingSession } from "@/domain/session";
import { ALL_STORIES } from "@/content/stories";
import { createRng } from "@/lib/rng";
import { useProgress } from "@/components/layout/useProgress";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export function PracticeSetupView() {
  const router = useRouter();
  const { progress, loaded } = useProgress();
  const [selected, setSelected] = useState<readonly LabelId[]>([]);

  const groups = useMemo(
    () => groupLabelsByCategory(progress.unlockedLabels),
    [progress.unlockedLabels],
  );

  const availableStories = useMemo(
    () => (selected.length > 0 ? eligibleStories(ALL_STORIES, selected).length : 0),
    [selected],
  );

  const toggle = (id: LabelId) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const start = () => {
    const stories = selectPracticeStories(
      ALL_STORIES,
      selected,
      createRng(Date.now() >>> 0),
    );
    if (stories.length === 0) return;
    savePendingSession({
      selectedLabels: selected,
      storyIds: stories.map((s) => s.id),
      createdAt: new Date().toISOString(),
    });
    router.push("/practice/session/");
  };

  if (loaded && progress.unlockedLabels.length === 0) {
    return (
      <article className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Practice</h1>
        <Card>
          <p>
            Nothing is unlocked yet. Practice opens as you finish chapters —
            each unlock challenge you pass adds a form to this shelf.
          </p>
          <Link
            href="/learn/"
            className="mt-4 inline-block rounded-md bg-accent px-4 py-2 font-sans text-sm font-medium text-accent-ink hover:opacity-90"
          >
            Go to the chapters
          </Link>
        </Card>
      </article>
    );
  }

  return (
    <article className="space-y-8" aria-busy={!loaded}>
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">New entry</h1>
        <p className="max-w-prose text-ink-soft">
          Choose which forms to hunt for. You&apos;ll read{" "}
          {STORIES_PER_SESSION} short stories and mark the sentences where your
          chosen forms appear. Not every form appears in every story.
        </p>
      </header>

      {groups.map((group) => (
        <fieldset key={`${group.kind}-${group.category}`}>
          <legend className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft">
            {group.categoryName}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.labels.map((label) => {
              const isOn = selected.includes(label.id);
              const record = progress.mastery[label.id];
              return (
                <button
                  key={label.id}
                  type="button"
                  onClick={() => toggle(label.id)}
                  aria-pressed={isOn}
                  className={cn(
                    "rounded-md border px-3.5 py-2 text-left font-sans text-sm transition-colors",
                    isOn
                      ? "border-accent bg-accent-soft"
                      : "border-line bg-raised hover:border-accent",
                  )}
                >
                  <span className="font-medium">
                    {isOn ? "✓ " : ""}
                    {label.name}
                  </span>
                  <span className="block text-xs text-ink-soft">
                    {MASTERY_TIER_NAMES[masteryTier(record)]}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}

      <div className="space-y-2 border-t border-line pt-5">
        {selected.length > 0 && availableStories === 0 && (
          <p role="status" className="text-sm text-ink-soft">
            No stories fit this exact combination yet — try adding or removing
            a form. (Stories only use forms you&apos;ve selected, so narrow
            mixes need matching stories.)
          </p>
        )}
        {selected.length > 0 && availableStories > 0 && (
          <p role="status" className="font-sans text-xs text-ink-soft">
            {Math.min(availableStories, STORIES_PER_SESSION)} of{" "}
            {availableStories} matching {availableStories === 1 ? "story" : "stories"}{" "}
            will be drawn.
          </p>
        )}
        <Button onClick={start} disabled={selected.length === 0 || availableStories === 0}>
          Begin the entry
        </Button>
      </div>
    </article>
  );
}
