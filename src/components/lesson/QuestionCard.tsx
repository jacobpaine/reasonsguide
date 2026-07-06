"use client";

import { useState } from "react";
import type { MixedQuestion } from "@/domain/types";
import { getLabel } from "@/domain/labels";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

/**
 * One label-identification question. The learner picks a label for the
 * passage; feedback appears immediately and `onAnswered` reports whether
 * the first attempt was correct.
 */
export function QuestionCard({
  question,
  onAnswered,
}: {
  question: MixedQuestion;
  onAnswered: (correct: boolean) => void;
}) {
  const [chosen, setChosen] = useState<string | null>(null);
  const answered = chosen !== null;
  const correct = chosen === question.correctLabel;

  return (
    <Card>
      <blockquote className="space-y-1 border-l-2 border-line pl-4 italic">
        {question.passage.map((sentence, i) => (
          <p key={i}>{sentence}</p>
        ))}
      </blockquote>
      <fieldset className="mt-4" disabled={answered}>
        <legend className="font-sans text-sm font-medium">
          What kind of reasoning is this passage doing?
        </legend>
        <div className="mt-3 space-y-2">
          {question.options.map((labelId) => {
            const label = getLabel(labelId);
            const isThis = chosen === labelId;
            return (
              <button
                key={labelId}
                type="button"
                onClick={() => {
                  setChosen(labelId);
                  onAnswered(labelId === question.correctLabel);
                }}
                aria-pressed={isThis}
                className={cn(
                  "block w-full rounded-md border px-4 py-2.5 text-left transition-colors",
                  isThis
                    ? "border-accent bg-accent-soft"
                    : "border-line bg-paper hover:border-accent",
                  answered && !isThis && "opacity-55",
                )}
              >
                <span className="font-sans text-sm font-medium">
                  {label.name}
                  {label.friendlyName ? (
                    <span className="ml-2 font-normal italic text-ink-soft">
                      {label.friendlyName}
                    </span>
                  ) : null}
                </span>
                <span className="mt-0.5 block text-sm text-ink-soft">
                  {label.shortDefinition}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>
      {answered && (
        <div role="status" className="mt-4 rounded-md bg-accent-soft p-4 text-sm">
          <p className="font-sans font-semibold">
            {correct ? "✓ Correct" : `✗ Not quite — this is ${getLabel(question.correctLabel).name.toLowerCase()}.`}
          </p>
          <p className="mt-1">{question.explanation}</p>
        </div>
      )}
    </Card>
  );
}
