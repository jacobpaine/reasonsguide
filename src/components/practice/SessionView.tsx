"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type {
  ExplanationOption,
  LabelId,
  PracticeSentence,
  PracticeStory,
  UserAnswer,
} from "@/domain/types";
import { getLabel } from "@/domain/labels";
import { buildExplanationOptions } from "@/domain/practice";
import { scorePracticeSession } from "@/domain/scoring";
import { recordSession } from "@/domain/progress";
import {
  clearPendingSession,
  loadPendingSession,
  saveSessionResult,
  type MasteryChange,
  type PendingSession,
} from "@/domain/session";
import { getStory } from "@/content/stories";
import { createRng } from "@/lib/rng";
import { newId } from "@/lib/ids";
import { useProgress } from "@/components/layout/useProgress";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** The annotation panel: pick a label, then pick an explanation. */
function AnnotationPanel({
  sentence,
  selectableLabels,
  onConfirm,
  onCancel,
}: {
  sentence: PracticeSentence;
  selectableLabels: readonly LabelId[];
  onConfirm: (answer: UserAnswer) => void;
  onCancel: () => void;
}) {
  const [labelId, setLabelId] = useState<LabelId | null>(null);

  // Stable per-sentence shuffle so options don't reorder on re-render.
  const explanationOptions: ExplanationOption[] = useMemo(
    () => buildExplanationOptions(sentence, createRng(hashString(sentence.id))),
    [sentence],
  );

  const needsExplanation = sentence.isTarget || explanationOptions.length > 0;

  return (
    <Card aria-label="Annotate sentence">
      <blockquote className="border-l-2 border-accent pl-4 italic">
        {sentence.text}
      </blockquote>

      {labelId === null ? (
        <fieldset className="mt-4">
          <legend className="font-sans text-sm font-medium">
            What form of reasoning does this sentence show?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {selectableLabels.map((id) => {
              const label = getLabel(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    if (needsExplanation && explanationOptions.length > 0) {
                      setLabelId(id);
                    } else {
                      onConfirm({ sentenceId: sentence.id, labelId: id });
                    }
                  }}
                  className="rounded-md border border-line bg-paper px-3.5 py-2 text-left font-sans text-sm transition-colors hover:border-accent"
                >
                  <span className="font-medium">{label.name}</span>
                  <span className="block text-xs text-ink-soft">
                    {label.shortDefinition}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      ) : (
        <fieldset className="mt-4">
          <legend className="font-sans text-sm font-medium">
            You chose {getLabel(labelId).name}. Why is that the right reading?
          </legend>
          <div className="mt-3 space-y-2">
            {explanationOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  onConfirm({
                    sentenceId: sentence.id,
                    labelId,
                    explanationId: option.id,
                  })
                }
                className="block w-full rounded-md border border-line bg-paper px-4 py-2.5 text-left text-sm transition-colors hover:border-accent"
              >
                {option.text}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setLabelId(null)}
            className="mt-3 font-sans text-xs text-ink-soft underline underline-offset-2 hover:text-ink"
          >
            ← Change label
          </button>
        </fieldset>
      )}

      <button
        type="button"
        onClick={onCancel}
        className="mt-4 font-sans text-xs text-ink-soft underline underline-offset-2 hover:text-ink"
      >
        Cancel — leave this sentence unmarked
      </button>
    </Card>
  );
}

export function StoryReader({
  story,
  storyNumber,
  storyCount,
  selectableLabels,
  onSubmit,
}: {
  story: PracticeStory;
  storyNumber: number;
  storyCount: number;
  selectableLabels: readonly LabelId[];
  onSubmit: (answers: readonly UserAnswer[]) => void;
}) {
  const [answers, setAnswers] = useState<readonly UserAnswer[]>([]);
  const [annotatingId, setAnnotatingId] = useState<string | null>(null);

  const answerFor = (sentenceId: string) =>
    answers.find((a) => a.sentenceId === sentenceId);

  const annotating = annotatingId
    ? story.sentences.find((s) => s.id === annotatingId)
    : undefined;

  return (
    <section aria-label={`Story ${storyNumber} of ${storyCount}`} className="space-y-5">
      <header className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">{story.title}</h2>
        <span className="font-sans text-xs text-ink-soft">
          Story {storyNumber} of {storyCount}
        </span>
      </header>

      <p className="font-sans text-sm text-ink-soft">
        Select each sentence where one of your chosen forms appears, and leave
        the rest unmarked. Selecting works by keyboard too — each sentence is a
        button.
      </p>

      <div role="group" aria-label="Story sentences" className="space-y-1">
        {story.sentences.map((sentence) => {
          const answer = answerFor(sentence.id);
          return (
            <button
              key={sentence.id}
              type="button"
              onClick={() =>
                setAnnotatingId(annotatingId === sentence.id ? null : sentence.id)
              }
              aria-pressed={annotatingId === sentence.id || answer !== undefined}
              className={cn(
                "block w-full rounded-md px-3 py-1.5 text-left leading-relaxed transition-colors",
                answer !== undefined
                  ? "bg-mark"
                  : annotatingId === sentence.id
                    ? "bg-accent-soft"
                    : "hover:bg-accent-soft",
              )}
            >
              {sentence.text}
              {answer && (
                <span className="mt-1 block font-sans text-xs font-medium text-ink-soft">
                  ✎ Marked as {getLabel(answer.labelId).name}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {annotating && !answerFor(annotating.id) && (
        <AnnotationPanel
          sentence={annotating}
          selectableLabels={selectableLabels}
          onConfirm={(answer) => {
            setAnswers((prev) => [...prev, answer]);
            setAnnotatingId(null);
          }}
          onCancel={() => setAnnotatingId(null)}
        />
      )}

      {annotating && answerFor(annotating.id) && (
        <Card role="status">
          <p className="text-sm">
            This sentence is marked as{" "}
            <strong>{getLabel(answerFor(annotating.id)!.labelId).name}</strong>.
          </p>
          <div className="mt-3 flex gap-3">
            <Button
              variant="secondary"
              onClick={() => {
                setAnswers((prev) => prev.filter((a) => a.sentenceId !== annotating.id));
                setAnnotatingId(null);
              }}
            >
              Remove mark
            </Button>
            <Button variant="quiet" onClick={() => setAnnotatingId(null)}>
              Keep it
            </Button>
          </div>
        </Card>
      )}

      <div className="border-t border-line pt-4">
        <p className="font-sans text-xs text-ink-soft">
          {answers.length === 0
            ? "No sentences marked yet."
            : `${answers.length} ${answers.length === 1 ? "sentence" : "sentences"} marked. Review your marks above before submitting.`}
        </p>
        <Button className="mt-2" onClick={() => onSubmit(answers)}>
          {storyNumber === storyCount ? "Submit final story" : "Submit story"}
        </Button>
      </div>
    </section>
  );
}

export function SessionView() {
  const router = useRouter();
  const { progress, loaded, update } = useProgress();
  const [pending, setPending] = useState<PendingSession | null>(null);
  const [checked, setChecked] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [answersByStory, setAnswersByStory] = useState<
    Record<string, readonly UserAnswer[]>
  >({});

  useEffect(() => {
    // Post-mount localStorage hydration: the static HTML must render without
    // storage, so the one-time read has to live in an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPending(loadPendingSession());
    setChecked(true);
  }, []);

  const stories = useMemo(
    () =>
      (pending?.storyIds ?? [])
        .map((id) => getStory(id))
        .filter((s): s is PracticeStory => s !== undefined),
    [pending],
  );

  if (!checked || !loaded) {
    return <p role="status" className="text-ink-soft">Opening the journal…</p>;
  }

  if (!pending || stories.length === 0) {
    return (
      <Card>
        <p>No practice session is set up.</p>
        <Link
          href="/practice/"
          className="mt-3 inline-block font-sans text-sm text-accent underline-offset-4 hover:underline"
        >
          Choose forms to practice →
        </Link>
      </Card>
    );
  }

  const story = stories[storyIndex];

  const handleSubmit = (answers: readonly UserAnswer[]) => {
    const nextAnswers = { ...answersByStory, [story.id]: answers };
    if (storyIndex < stories.length - 1) {
      setAnswersByStory(nextAnswers);
      setStoryIndex(storyIndex + 1);
      window.scrollTo({ top: 0 });
      return;
    }

    // Final story: score the whole session, fold it into progress, and
    // hand the result to the feedback screen.
    const score = scorePracticeSession(stories, nextAnswers);
    const now = new Date().toISOString();
    const involvedLabels = [...new Set(score.labelEvents.map((e) => e.labelId))];
    const nextProgress = recordSession(
      progress,
      score,
      pending.selectedLabels,
      pending.storyIds,
      now,
      newId("session"),
    );
    const masteryChanges: MasteryChange[] = involvedLabels.map((labelId) => ({
      labelId,
      before: progress.mastery[labelId]?.mastery ?? 0,
      after: nextProgress.mastery[labelId]?.mastery ?? 0,
      attemptsBefore: progress.mastery[labelId]?.attempts ?? 0,
    }));
    update(nextProgress);
    saveSessionResult({
      score,
      selectedLabels: pending.selectedLabels,
      storyIds: pending.storyIds,
      answers: nextAnswers,
      masteryChanges,
      completedAt: now,
    });
    clearPendingSession();
    router.push("/feedback/");
  };

  return (
    <StoryReader
      key={story.id}
      story={story}
      storyNumber={storyIndex + 1}
      storyCount={stories.length}
      selectableLabels={pending.selectedLabels}
      onSubmit={handleSubmit}
    />
  );
}
