"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { LESSONS, getLesson } from "@/content/curriculum";
import { completeLesson } from "@/domain/curriculum";
import type { GuidedExample, MixedQuestion } from "@/domain/types";
import { useProgress } from "@/components/layout/useProgress";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LabelChip } from "@/components/ui/LabelChip";
import { QuestionCard } from "./QuestionCard";
import { cn } from "@/lib/cn";
import { createRng } from "@/lib/rng";

function pickChallengeQuestions(questions: readonly MixedQuestion[], seed: number): MixedQuestion[] {
  const rng = createRng(seed + 1);
  const shuffled = [...questions].sort(() => rng() - 0.5);
  return shuffled.slice(0, Math.min(3, shuffled.length));
}

type Stage = "overview" | "worked" | "guided" | "mixed" | "challenge" | "complete";

const STAGE_TITLES: Record<Stage, string> = {
  overview: "The idea",
  worked: "Worked examples",
  guided: "Guided examples",
  mixed: "Mixed identification",
  challenge: "Unlock challenge",
  complete: "Chapter complete",
};

function GuidedCard({ example }: { example: GuidedExample }) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const chosenChoice = example.choices.find((c) => c.id === chosen);

  return (
    <Card>
      <blockquote className="space-y-1 border-l-2 border-line pl-4 italic">
        {example.passage.map((sentence, i) => (
          <p key={i}>{sentence}</p>
        ))}
      </blockquote>
      <p className="mt-4 font-sans text-sm font-medium">{example.prompt}</p>
      {!showHint && chosen === null && (
        <button
          type="button"
          onClick={() => setShowHint(true)}
          className="mt-1 font-sans text-xs text-ink-soft underline underline-offset-2 hover:text-ink"
        >
          Show a hint
        </button>
      )}
      {showHint && chosen === null && (
        <p className="mt-1 text-sm italic text-ink-soft">Hint: {example.hint}</p>
      )}
      <div className="mt-3 space-y-2">
        {example.choices.map((choice) => (
          <button
            key={choice.id}
            type="button"
            onClick={() => setChosen(choice.id)}
            aria-pressed={chosen === choice.id}
            className={cn(
              "block w-full rounded-md border px-4 py-2.5 text-left text-sm transition-colors",
              chosen === choice.id
                ? "border-accent bg-accent-soft"
                : "border-line bg-paper hover:border-accent",
              chosen !== null && chosen !== choice.id && "opacity-55",
            )}
          >
            {choice.text}
          </button>
        ))}
      </div>
      {chosenChoice && (
        <div role="status" className="mt-4 rounded-md bg-accent-soft p-4 text-sm">
          <p className="font-sans font-semibold">
            {chosenChoice.isCorrect ? "✓ Yes" : "✗ Not this one"}
          </p>
          <p className="mt-1">{chosenChoice.feedback}</p>
          {!chosenChoice.isCorrect && (
            <button
              type="button"
              onClick={() => setChosen(null)}
              className="mt-2 font-sans text-xs underline underline-offset-2"
            >
              Try again
            </button>
          )}
        </div>
      )}
    </Card>
  );
}

export function LessonFlow({ lessonId }: { lessonId: string }) {
  const lesson = getLesson(lessonId);
  const { progress, update } = useProgress();
  const [stage, setStage] = useState<Stage>("overview");
  const [challengeKey, setChallengeKey] = useState(0);
  const [challengeResults, setChallengeResults] = useState<boolean[]>([]);

  const challengeQuestions = useMemo(
    () => lesson ? pickChallengeQuestions(lesson.unlockChallenge, challengeKey) : [],
    [lesson, challengeKey],
  );

  if (!lesson) return null;

  if (lesson.status === "draft") {
    return (
      <article className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">{lesson.title}</h1>
        <Card>
          <p className="font-sans text-sm font-semibold text-ink-soft">
            This chapter is drafted but not yet written.
          </p>
          <p className="mt-3">{lesson.definition}</p>
          <p className="mt-3 italic text-ink-soft">“{lesson.memoryHook}”</p>
        </Card>
        <Link href="/learn/" className="font-sans text-sm text-accent underline-offset-4 hover:underline">
          ← Back to chapters
        </Link>
      </article>
    );
  }

  const challengePassed =
    challengeResults.length === challengeQuestions.length &&
    challengeResults.every(Boolean);
  const challengeFinished = challengeResults.length === challengeQuestions.length;

  const finishChallenge = () => {
    if (challengePassed) {
      update({ ...progress, ...completeLesson(LESSONS, progress, lesson.id) });
      setStage("complete");
    }
  };

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
          Chapter · {STAGE_TITLES[stage]}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">{lesson.title}</h1>
        <div className="flex flex-wrap gap-2">
          {lesson.labelIds.map((id) => (
            <LabelChip key={id} labelId={id} showFriendly />
          ))}
        </div>
      </header>

      {stage === "overview" && (
        <div className="space-y-4">
          <Card>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft">
              Definition
            </h2>
            <p className="mt-2">{lesson.definition}</p>
            <h2 className="mt-5 font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft">
              Memory hook
            </h2>
            <p className="mt-2 italic">“{lesson.memoryHook}”</p>
            <h2 className="mt-5 font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft">
              What it sounds like
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-ink-soft">
              {lesson.soundsLike.map((phrase, i) => (
                <li key={i}>{phrase}</li>
              ))}
            </ul>
          </Card>
          <Button onClick={() => setStage("worked")}>See worked examples</Button>
        </div>
      )}

      {stage === "worked" && (
        <div className="space-y-4">
          {lesson.workedExamples.map((example) => (
            <Card key={example.id}>
              {example.title && (
                <h2 className="font-sans text-sm font-semibold">{example.title}</h2>
              )}
              <blockquote className="mt-3 space-y-1 border-l-2 border-line pl-4 italic">
                {example.passage.map((sentence, i) => (
                  <p key={i}>{sentence}</p>
                ))}
              </blockquote>
              <p className="mt-4 text-sm">
                <span className="font-sans font-semibold">Why: </span>
                {example.explanation}
              </p>
            </Card>
          ))}
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStage("overview")}>
              Back
            </Button>
            <Button onClick={() => setStage("guided")}>Try guided examples</Button>
          </div>
        </div>
      )}

      {stage === "guided" && (
        <div className="space-y-4">
          {lesson.guidedExamples.map((example) => (
            <GuidedCard key={example.id} example={example} />
          ))}
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStage("worked")}>
              Back
            </Button>
            <Button onClick={() => setStage("mixed")}>Mixed identification</Button>
          </div>
        </div>
      )}

      {stage === "mixed" && (
        <div className="space-y-4">
          <p className="max-w-prose text-sm text-ink-soft">
            Now the forms are mixed together. Answer each one; the explanations
            are where the learning lives.
          </p>
          {lesson.mixedQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} onAnswered={() => {}} />
          ))}
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStage("guided")}>
              Back
            </Button>
            <Button onClick={() => setStage("challenge")}>Take the unlock challenge</Button>
          </div>
        </div>
      )}

      {stage === "challenge" && (
        <div className="space-y-4">
          <p className="max-w-prose text-sm text-ink-soft">
            Answer all {challengeQuestions.length} correctly on the first
            try to unlock{" "}
            {lesson.labelIds.length > 1 ? "these forms" : "this form"} for
            practice. You can retake it as often as you like.
          </p>
          {challengeQuestions.map((question) => (
            <QuestionCard
              key={`${question.id}-${challengeKey}`}
              question={question}
              onAnswered={(correct) =>
                setChallengeResults((prev) => [...prev, correct])
              }
            />
          ))}
          {challengeFinished && !challengePassed && (
            <Card role="status">
              <p className="font-sans text-sm font-semibold">
                Not quite — {challengeResults.filter(Boolean).length} of{" "}
                {challengeQuestions.length} on the first try.
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Reread the explanations above, then try a fresh attempt.
              </p>
              <Button
                className="mt-3"
                onClick={() => {
                  setChallengeResults([]);
                  setChallengeKey((k) => k + 1);
                }}
              >
                Retake the challenge
              </Button>
            </Card>
          )}
          {challengePassed && (
            <Button onClick={finishChallenge}>
              Complete chapter & unlock
            </Button>
          )}
        </div>
      )}

      {stage === "complete" && (
        <Card role="status">
          <h2 className="text-xl font-semibold">Unlocked.</h2>
          <p className="mt-2">
            {lesson.labelIds.length > 1 ? "These forms are" : "This form is"} now
            on your practice shelf. Recognition sharpens with use — stories
            hide their reasoning better than lessons do.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {lesson.labelIds.map((id) => (
              <LabelChip key={id} labelId={id} />
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <Link
              href="/practice/"
              className="rounded-md bg-accent px-4 py-2 font-sans text-sm font-medium text-accent-ink hover:opacity-90"
            >
              Go practice
            </Link>
            <Link
              href="/learn/"
              className="rounded-md border border-line bg-raised px-4 py-2 font-sans text-sm font-medium hover:border-accent"
            >
              Next chapter
            </Link>
          </div>
        </Card>
      )}
    </article>
  );
}
