"use client";

import { useState } from "react";
import Link from "next/link";
import { LESSONS } from "@/content/curriculum";
import { isLessonCompleted } from "@/domain/curriculum";
import { masteryTier, MASTERY_TIER_NAMES } from "@/domain/mastery";
import { getLabel } from "@/domain/labels";
import type { Lesson } from "@/domain/types";
import { useProgress } from "@/components/layout/useProgress";
import { Card } from "@/components/ui/Card";
import { LabelChip } from "@/components/ui/LabelChip";
import { cn } from "@/lib/cn";

type Track = "reasoning" | "fallacies";

function lessonTrack(lesson: Lesson): Track {
  return lesson.labelIds.every((id) => getLabel(id).kind === "reasoning")
    ? "reasoning"
    : "fallacies";
}

const TRACK_INTRO: Record<Track, string> = {
  reasoning:
    "The forms of healthy inference, from rules and patterns to values, words, and structure. The numbering suggests a path, but every chapter is open in any order.",
  fallacies:
    "Every fallacy here is a failure mode of a reasoning form from the other tab — induction gone hasty, deduction run backward, debate derailed. Finishing a chapter adds its fallacies to your practice shelf, where they hide inside stories beside the healthy forms.",
};

export function CurriculumView() {
  const { progress, loaded } = useProgress();
  const [track, setTrack] = useState<Track>("reasoning");

  const readyLessons = LESSONS.filter((l) => l.status === "ready");
  const trackLessons = readyLessons.filter((l) => lessonTrack(l) === track);
  const draftLessons = LESSONS.filter((l) => l.status === "draft");

  const completedIn = (t: Track) =>
    readyLessons.filter(
      (l) => lessonTrack(l) === t && isLessonCompleted(progress, l.id),
    ).length;
  const totalIn = (t: Track) =>
    readyLessons.filter((l) => lessonTrack(l) === t).length;

  return (
    <article className="space-y-8" aria-busy={!loaded}>
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Chapters</h1>
      </header>

      <div
        role="tablist"
        aria-label="Chapter tracks"
        className="flex gap-2 border-b border-line"
      >
        {(["reasoning", "fallacies"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={track === t}
            onClick={() => setTrack(t)}
            className={cn(
              "-mb-px rounded-t-md border-b-2 px-4 py-2 font-sans text-sm font-medium transition-colors",
              track === t
                ? "border-accent text-ink"
                : "border-transparent text-ink-soft hover:text-ink",
            )}
          >
            {t === "reasoning" ? "Reasoning" : "Fallacies"}
            <span className="ml-2 text-xs text-ink-soft">
              {completedIn(t)}/{totalIn(t)}
            </span>
          </button>
        ))}
      </div>

      <p className="max-w-prose text-ink-soft">{TRACK_INTRO[track]}</p>

      <section aria-label={`${track} chapters`}>
        <ol className="space-y-4">
          {trackLessons.map((lesson, index) => {
            const completed = isLessonCompleted(progress, lesson.id);
            return (
              <li key={lesson.id}>
                <Card className="transition-colors">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-semibold">
                      <span className="mr-2 font-sans text-sm text-ink-soft">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {lesson.title}
                    </h2>
                    <span className="shrink-0 font-sans text-xs text-ink-soft">
                      {completed ? "✓ Completed" : "Open"}
                    </span>
                  </div>
                  <p className="mt-2 max-w-prose text-sm text-ink-soft">
                    {lesson.definition}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {lesson.labelIds.map((id) => (
                      <LabelChip key={id} labelId={id} showFriendly />
                    ))}
                    {completed &&
                      lesson.labelIds.map((id) => {
                        const record = progress.mastery[id];
                        const tier = masteryTier(record);
                        return (
                          <span
                            key={`${id}-tier`}
                            className="font-sans text-xs text-ink-soft"
                          >
                            {getLabel(id).name}: {MASTERY_TIER_NAMES[tier]}
                          </span>
                        );
                      })}
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/lesson/${lesson.id}/`}
                      className="font-sans text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      {completed ? "Revisit chapter →" : "Begin chapter →"}
                    </Link>
                  </div>
                </Card>
              </li>
            );
          })}
        </ol>
      </section>

      {draftLessons.length > 0 && (
        <section aria-label="Future chapters" className="space-y-3">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft">
            Future chapters — drafted, not yet written
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {draftLessons.map((lesson) => (
              <li
                key={lesson.id}
                className="rounded-md border border-dashed border-line px-4 py-3"
              >
                <span className="text-sm font-medium">{lesson.title}</span>
                <p className="mt-1 text-xs text-ink-soft">{lesson.memoryHook}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
