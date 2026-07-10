import type {
  LabelEvent,
  PracticeStory,
  SentenceResult,
  SessionScore,
  StoryScore,
  UserAnswer,
} from "./types";

/**
 * Scoring rules.
 *
 * Each sentence gets one verdict:
 * - target + correct label            → "correct"
 * - target + wrong label              → "wrong-label"
 * - target + no answer                → "missed"
 * - neutral + any answer              → "over-labeled"
 * - neutral + no answer               → "clear"
 *
 * Mastery events (0–1 per involved label):
 * - correct label + correct explanation → 1.0
 * - correct label + wrong explanation   → 0.6
 * - wrong label / missed target         → 0 for the *expected* label
 * Over-labeling a neutral sentence emits a 0 event for the label the user
 * chose, so guess-everything strategies cost mastery.
 */

const SCORE_LABEL_AND_EXPLANATION = 1.0;
const SCORE_LABEL_ONLY = 0.6;

export function scoreStory(
  story: PracticeStory,
  answers: readonly UserAnswer[],
  selectedLabels?: ReadonlySet<string>,
): StoryScore {
  const answersBySentence = new Map(answers.map((a) => [a.sentenceId, a]));

  const sentenceResults: SentenceResult[] = story.sentences.map((sentence) => {
    const answer = answersBySentence.get(sentence.id);
    // A target is "active" only when its label is among the session's selected labels.
    // Inactive targets (label not selected) are treated as neutral so learners aren't
    // penalized for missing forms they aren't practicing.
    const isActiveTarget =
      sentence.isTarget &&
      (!selectedLabels || !sentence.primaryLabel || selectedLabels.has(sentence.primaryLabel));

    if (isActiveTarget) {
      if (!answer) {
        return {
          sentenceId: sentence.id,
          verdict: "missed",
          expectedLabel: sentence.primaryLabel,
        };
      }
      if (answer.labelId === sentence.primaryLabel) {
        const explanationCorrect =
          sentence.correctExplanationId !== undefined
            ? answer.explanationId === sentence.correctExplanationId
            : undefined;
        return {
          sentenceId: sentence.id,
          verdict: "correct",
          expectedLabel: sentence.primaryLabel,
          chosenLabel: answer.labelId,
          explanationCorrect,
        };
      }
      return {
        sentenceId: sentence.id,
        verdict: "wrong-label",
        expectedLabel: sentence.primaryLabel,
        chosenLabel: answer.labelId,
      };
    }
    if (sentence.isTarget) {
      // Inactive target: treat as clear regardless of whether the user marked it.
      return { sentenceId: sentence.id, verdict: "clear" };
    }
    if (answer) {
      return {
        sentenceId: sentence.id,
        verdict: "over-labeled",
        chosenLabel: answer.labelId,
      };
    }
    return { sentenceId: sentence.id, verdict: "clear" };
  });

  return {
    storyId: story.id,
    sentenceResults,
    correct: sentenceResults.filter((r) => r.verdict === "correct").length,
    wrongLabel: sentenceResults.filter((r) => r.verdict === "wrong-label").length,
    missed: sentenceResults.filter((r) => r.verdict === "missed").length,
    overLabeled: sentenceResults.filter((r) => r.verdict === "over-labeled").length,
  };
}

function labelEventsForStory(score: StoryScore): LabelEvent[] {
  return score.sentenceResults.flatMap((result): LabelEvent[] => {
    switch (result.verdict) {
      case "correct":
        return [
          {
            labelId: result.expectedLabel!,
            score:
              result.explanationCorrect === false
                ? SCORE_LABEL_ONLY
                : SCORE_LABEL_AND_EXPLANATION,
          },
        ];
      case "wrong-label":
      case "missed":
        return [{ labelId: result.expectedLabel!, score: 0 }];
      case "over-labeled":
        return [{ labelId: result.chosenLabel!, score: 0 }];
      case "clear":
        return [];
    }
  });
}

export function scorePracticeSession(
  stories: readonly PracticeStory[],
  answersByStory: Readonly<Record<string, readonly UserAnswer[]>>,
  selectedLabels?: ReadonlySet<string>,
): SessionScore {
  const storyScores = stories.map((story) =>
    scoreStory(story, answersByStory[story.id] ?? [], selectedLabels),
  );
  const labelEvents = storyScores.flatMap(labelEventsForStory);

  const allResults = storyScores.flatMap((s) => s.sentenceResults);
  const withExplanation = allResults.filter((r) => r.explanationCorrect !== undefined);

  return {
    storyScores,
    labelEvents,
    totals: {
      correct: storyScores.reduce((n, s) => n + s.correct, 0),
      wrongLabel: storyScores.reduce((n, s) => n + s.wrongLabel, 0),
      missed: storyScores.reduce((n, s) => n + s.missed, 0),
      overLabeled: storyScores.reduce((n, s) => n + s.overLabeled, 0),
      explanationsCorrect: withExplanation.filter((r) => r.explanationCorrect).length,
      explanationsAttempted: withExplanation.length,
    },
  };
}
