"use client";

import Link from "next/link";
import { LESSONS } from "@/content/curriculum";
import { nextAvailableLesson } from "@/domain/curriculum";
import { useProgress } from "@/components/layout/useProgress";
import { Card } from "@/components/ui/Card";

export function HomeView() {
  const { progress, loaded } = useProgress();

  const nextLesson = nextAvailableLesson(LESSONS, progress);
  const hasStarted = progress.completedLessons.length > 0;
  const hasUnlocked = progress.unlockedLabels.length > 0;

  return (
    <article className="space-y-8">
      <header className="space-y-4 pt-6">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
          A field notebook for arguments
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          Learn to see the shape of reasoning.
        </h1>
        <p className="max-w-prose text-ink-soft">
          Every argument has a form — a rule applied, a pattern projected, a
          clue explained. This journal teaches you to recognize those forms in
          short stories, one sentence at a time. First you learn what kind of
          reasoning is happening; only later do you learn how each kind goes
          wrong.
        </p>
      </header>

      <div className="flex flex-wrap gap-3" aria-busy={!loaded}>
        {nextLesson && (
          <Link
            href={`/lesson/${nextLesson.id}/`}
            className="rounded-md bg-accent px-5 py-2.5 font-sans text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            {hasStarted ? `Continue: ${nextLesson.title}` : "Start learning"}
          </Link>
        )}
        {!nextLesson && (
          <Link
            href="/learn/"
            className="rounded-md bg-accent px-5 py-2.5 font-sans text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            Browse the chapters
          </Link>
        )}
        {hasUnlocked && (
          <Link
            href="/practice/"
            className="rounded-md border border-line bg-raised px-5 py-2.5 font-sans text-sm font-medium transition-colors hover:border-accent"
          >
            Practice ({progress.unlockedLabels.length} unlocked)
          </Link>
        )}
      </div>

      <section aria-label="How it works" className="grid gap-4 sm:grid-cols-3">
        <Card>
          <h2 className="font-sans text-sm font-semibold">1 · Learn a form</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Each chapter teaches one kind of reasoning: a plain definition, a
            memory hook, worked examples, and guided questions.
          </p>
        </Card>
        <Card>
          <h2 className="font-sans text-sm font-semibold">2 · Pass the unlock</h2>
          <p className="mt-2 text-sm text-ink-soft">
            A short challenge confirms you can spot the form among its
            neighbors — then it joins your practice shelf.
          </p>
        </Card>
        <Card>
          <h2 className="font-sans text-sm font-semibold">3 · Read the stories</h2>
          <p className="mt-2 text-sm text-ink-soft">
            In practice, you mark the sentences where reasoning happens, name
            the form, and say why. The journal keeps score of your mastery.
          </p>
        </Card>
      </section>
    </article>
  );
}
