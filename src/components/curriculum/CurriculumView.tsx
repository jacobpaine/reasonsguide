"use client";

import Link from "next/link";
import { LESSONS } from "@/content/curriculum";
import { isLessonCompleted } from "@/domain/curriculum";
import { masteryTier, MASTERY_TIER_NAMES } from "@/domain/mastery";
import { getLabel } from "@/domain/labels";
import { useProgress } from "@/components/layout/useProgress";
import { Card } from "@/components/ui/Card";
import { LabelChip } from "@/components/ui/LabelChip";

export function CurriculumView() {
  const { progress, loaded } = useProgress();

  const readyLessons = LESSONS.filter((l) => l.status === "ready");
  const draftLessons = LESSONS.filter((l) => l.status === "draft");

  return (
    <article className="space-y-10" aria-busy={!loaded}>
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Chapters</h1>
        <p className="max-w-prose text-ink-soft">
          The numbering suggests a path — from recognizing healthy reasoning
          to diagnosing its failures — but every written chapter is open to
          read in any order. Finishing a chapter&apos;s unlock challenge is
          what adds its forms to your practice shelf.
        </p>
      </header>

      <section aria-label="Available chapters">
        <ol className="space-y-4">
          {readyLessons.map((lesson, index) => {
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
                          <span key={`${id}-tier`} className="font-sans text-xs text-ink-soft">
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
    </article>
  );
}
