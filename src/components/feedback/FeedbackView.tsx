"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PracticeStory, SentenceResult } from "@/domain/types";
import { getLabel } from "@/domain/labels";
import { masteryTier, MASTERY_TIER_NAMES } from "@/domain/mastery";
import { loadSessionResult, type StoredSessionResult } from "@/domain/session";
import { getStory } from "@/content/stories";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

/**
 * Verdicts are conveyed by symbol + word + tint together, never color alone.
 */
const VERDICT_PRESENTATION: Record<
  SentenceResult["verdict"],
  { symbol: string; word: string; tone: string }
> = {
  correct: { symbol: "✓", word: "Correct", tone: "border-l-4 border-accent bg-accent-soft" },
  "wrong-label": { symbol: "✕", word: "Wrong label", tone: "border-l-4 border-line bg-mark" },
  missed: { symbol: "○", word: "Missed", tone: "border-l-4 border-line bg-mark" },
  "over-labeled": { symbol: "△", word: "Over-labeled", tone: "border-l-4 border-line bg-mark" },
  clear: { symbol: "", word: "", tone: "" },
};

function SentenceFeedback({
  story,
  result,
  chosenExplanationId,
}: {
  story: PracticeStory;
  result: SentenceResult;
  chosenExplanationId?: string;
}) {
  const sentence = story.sentences.find((s) => s.id === result.sentenceId);
  if (!sentence) return null;
  const view = VERDICT_PRESENTATION[result.verdict];

  if (result.verdict === "clear") {
    return <p className="px-3 py-1.5 text-ink-soft">{sentence.text}</p>;
  }

  const correctExplanation = sentence.explanationOptions.find(
    (o) => o.id === sentence.correctExplanationId,
  );

  return (
    <div className={cn("rounded-md px-3 py-2", view.tone)}>
      <p>{sentence.text}</p>
      <p className="mt-1 font-sans text-xs font-semibold">
        {view.symbol} {view.word}
        {result.verdict === "correct" && result.expectedLabel && (
          <> — {getLabel(result.expectedLabel).name}</>
        )}
        {result.verdict === "wrong-label" && result.chosenLabel && result.expectedLabel && (
          <>
            {" "}
            — you chose {getLabel(result.chosenLabel).name}; this is{" "}
            {getLabel(result.expectedLabel).name}
          </>
        )}
        {result.verdict === "missed" && result.expectedLabel && (
          <> — this was {getLabel(result.expectedLabel).name}</>
        )}
        {result.verdict === "over-labeled" && result.chosenLabel && (
          <>
            {" "}
            — you marked it {getLabel(result.chosenLabel).name}, but this
            sentence carries no target reasoning
          </>
        )}
      </p>
      {result.verdict === "correct" && result.explanationCorrect === false && correctExplanation && (
        <p className="mt-1 font-sans text-xs text-ink-soft">
          Right label, but the reasoning was different: {correctExplanation.text}
        </p>
      )}
      {result.verdict === "correct" && result.explanationCorrect === true && (
        <p className="mt-1 font-sans text-xs text-ink-soft">
          Explanation right too.
        </p>
      )}
      {(result.verdict === "missed" || result.verdict === "wrong-label") &&
        correctExplanation && (
          <p className="mt-1 font-sans text-xs text-ink-soft">
            Why: {correctExplanation.text}
          </p>
        )}
      {chosenExplanationId === undefined &&
        result.verdict === "correct" &&
        result.explanationCorrect === undefined && null}
    </div>
  );
}

export function FeedbackView() {
  const [result, setResult] = useState<StoredSessionResult | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Post-mount localStorage hydration (static export renders without storage).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult(loadSessionResult());
    setChecked(true);
  }, []);

  if (!checked) {
    return <p role="status" className="text-ink-soft">Reading the entry…</p>;
  }

  if (!result) {
    return (
      <Card>
        <p>No finished session to review.</p>
        <Link
          href="/practice/"
          className="mt-3 inline-block font-sans text-sm text-accent underline-offset-4 hover:underline"
        >
          Start a practice entry →
        </Link>
      </Card>
    );
  }

  const { totals } = result.score;

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">The entry, reviewed</h1>
        <p className="font-sans text-sm text-ink-soft" role="status">
          {totals.correct} correct · {totals.missed} missed · {totals.wrongLabel}{" "}
          mislabeled · {totals.overLabeled} over-labeled
          {totals.explanationsAttempted > 0 && (
            <>
              {" "}
              · explanations {totals.explanationsCorrect}/{totals.explanationsAttempted}
            </>
          )}
        </p>
      </header>

      {result.score.storyScores.map((storyScore) => {
        const story = getStory(storyScore.storyId);
        if (!story) return null;
        const answers = result.answers[story.id] ?? [];
        return (
          <section key={story.id} aria-label={`Feedback for ${story.title}`}>
            <h2 className="text-xl font-semibold tracking-tight">{story.title}</h2>
            <div className="mt-3 space-y-1.5">
              {storyScore.sentenceResults.map((sentenceResult) => (
                <SentenceFeedback
                  key={sentenceResult.sentenceId}
                  story={story}
                  result={sentenceResult}
                  chosenExplanationId={
                    answers.find((a) => a.sentenceId === sentenceResult.sentenceId)
                      ?.explanationId
                  }
                />
              ))}
            </div>
          </section>
        );
      })}

      <section aria-label="Mastery changes">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft">
          Mastery
        </h2>
        <ul className="mt-3 space-y-2">
          {result.masteryChanges.map((change) => {
            const delta = change.after - change.before;
            const direction =
              Math.abs(delta) < 0.005 ? "held steady" : delta > 0 ? "rose" : "dipped";
            return (
              <li key={change.labelId} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-medium">{getLabel(change.labelId).name}</span>
                <span className="font-sans text-sm text-ink-soft">
                  {direction} {Math.abs(delta) >= 0.005 && `(${delta > 0 ? "+" : "−"}${Math.abs(delta).toFixed(2)})`}{" "}
                  — now{" "}
                  {MASTERY_TIER_NAMES[
                    masteryTier({
                      labelId: change.labelId,
                      attempts: change.attemptsBefore + 1,
                      mastery: change.after,
                      lastPracticedAt: result.completedAt,
                    })
                  ].toLowerCase()}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="flex gap-3 border-t border-line pt-5">
        <Link
          href="/practice/"
          className="rounded-md bg-accent px-4 py-2 font-sans text-sm font-medium text-accent-ink hover:opacity-90"
        >
          Another entry
        </Link>
        <Link
          href="/learn/"
          className="rounded-md border border-line bg-raised px-4 py-2 font-sans text-sm font-medium hover:border-accent"
        >
          Back to chapters
        </Link>
      </div>
    </article>
  );
}
