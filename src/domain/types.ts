/**
 * Core domain types. Everything here is plain immutable data —
 * no React, no storage, no side effects.
 */

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------

export type ReasoningLabelId =
  | "claim-support"
  | "deductive"
  | "inductive"
  | "abductive"
  | "analogical"
  | "causal"
  | "statistical"
  | "bayesian"
  | "authority"
  | "practical"
  | "moral"
  | "comparative"
  | "conductive"
  | "definitional"
  | "conceptual"
  | "classification"
  | "part-whole"
  | "dialectical";

export type FallacyLabelId =
  // formal
  | "affirming-consequent"
  | "denying-antecedent"
  | "undistributed-middle"
  | "contradictory-premises"
  // evidence
  | "hasty-generalization"
  | "anecdotal-evidence"
  | "cherry-picking"
  | "biased-sample"
  | "survivorship-bias"
  // causal
  | "post-hoc"
  | "correlation-causation"
  | "single-cause"
  | "slippery-slope"
  // relevance
  | "ad-hominem"
  | "straw-man"
  | "red-herring"
  | "tu-quoque"
  | "appeal-to-emotion"
  // presumption
  | "begging-the-question"
  | "loaded-question"
  | "false-dilemma"
  | "special-pleading"
  | "moving-goalposts"
  // language
  | "equivocation"
  | "ambiguity"
  | "composition"
  | "division";

export type ReasoningOrFallacyLabel = ReasoningLabelId | FallacyLabelId;
export type LabelId = ReasoningOrFallacyLabel;

export type LabelKind = "reasoning" | "fallacy";

export type ReasoningCategory = "core" | "applied" | "structural";
export type FallacyCategory =
  | "formal"
  | "evidence"
  | "causal"
  | "relevance"
  | "presumption"
  | "language";

export type ReasoningLabel = {
  id: ReasoningLabelId;
  kind: "reasoning";
  name: string;
  /** Friendly beginner-facing alias, e.g. "Rule reasoning" for deduction. */
  friendlyName?: string;
  category: ReasoningCategory;
  shortDefinition: string;
};

export type FallacyLabel = {
  id: FallacyLabelId;
  kind: "fallacy";
  name: string;
  friendlyName?: string;
  category: FallacyCategory;
  shortDefinition: string;
  /** Which kinds of reasoning this fallacy is a failure mode of. */
  failureOf?: ReasoningLabelId[];
};

export type Label = ReasoningLabel | FallacyLabel;

// ---------------------------------------------------------------------------
// Curriculum & lessons
// ---------------------------------------------------------------------------

export type LessonStatus = "ready" | "draft";

export type WorkedExample = {
  id: string;
  title?: string;
  /** The example argument, one sentence per array item. */
  passage: readonly string[];
  /** Why this passage is an instance of the concept. */
  explanation: string;
};

export type GuidedChoice = {
  id: string;
  text: string;
  isCorrect: boolean;
  /** Shown after the learner picks this choice. */
  feedback: string;
};

export type GuidedExample = {
  id: string;
  passage: readonly string[];
  prompt: string;
  hint: string;
  choices: readonly GuidedChoice[];
};

/** A question offering several label options for a short passage. */
export type MixedQuestion = {
  id: string;
  passage: readonly string[];
  options: readonly LabelId[];
  correctLabel: LabelId;
  explanation: string;
};

export type Lesson = {
  id: string;
  title: string;
  status: LessonStatus;
  /** Labels this lesson teaches and unlocks for practice on completion. */
  labelIds: readonly LabelId[];
  definition: string;
  memoryHook: string;
  /** Phrases that signal this kind of reasoning in the wild. */
  soundsLike: readonly string[];
  workedExamples: readonly WorkedExample[];
  guidedExamples: readonly GuidedExample[];
  mixedQuestions: readonly MixedQuestion[];
  unlockChallenge: readonly MixedQuestion[];
};

export type CurriculumTrack = "reasoning" | "fallacy";

export type CurriculumItem = {
  lessonId: string;
  order: number;
  track: CurriculumTrack;
  status: LessonStatus;
  title: string;
  labelIds: readonly LabelId[];
  blurb: string;
};

// ---------------------------------------------------------------------------
// Practice
// ---------------------------------------------------------------------------

export type ExplanationOption = {
  id: string;
  text: string;
};

export type PracticeSentence = {
  id: string;
  text: string;
  labels: readonly ReasoningOrFallacyLabel[];
  primaryLabel?: ReasoningOrFallacyLabel;
  explanationOptions: readonly ExplanationOption[];
  correctExplanationId?: string;
  isTarget: boolean;
};

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type PracticeStory = {
  id: string;
  title: string;
  difficulty: Difficulty;
  sentences: readonly PracticeSentence[];
  includedLabels: readonly ReasoningOrFallacyLabel[];
};

/** One label + explanation the user attached to a sentence. */
export type UserAnswer = {
  sentenceId: string;
  labelId: ReasoningOrFallacyLabel;
  explanationId?: string;
};

export type PracticeSession = {
  id: string;
  selectedLabels: readonly ReasoningOrFallacyLabel[];
  storyIds: readonly string[];
  /** Answers keyed by story id. */
  answers: Readonly<Record<string, readonly UserAnswer[]>>;
  startedAt: string;
  completedAt?: string;
};

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

export type SentenceVerdict =
  | "correct" // target sentence, correct label
  | "wrong-label" // target sentence, but the wrong label was chosen
  | "missed" // target sentence left unlabeled
  | "over-labeled" // neutral sentence that was labeled
  | "clear"; // neutral sentence correctly left alone

export type SentenceResult = {
  sentenceId: string;
  verdict: SentenceVerdict;
  expectedLabel?: ReasoningOrFallacyLabel;
  chosenLabel?: ReasoningOrFallacyLabel;
  /** Only present when the label was correct and an explanation was chosen. */
  explanationCorrect?: boolean;
};

export type StoryScore = {
  storyId: string;
  sentenceResults: readonly SentenceResult[];
  correct: number;
  wrongLabel: number;
  missed: number;
  overLabeled: number;
};

/** A per-label outcome in [0, 1] used to update mastery. */
export type LabelEvent = {
  labelId: ReasoningOrFallacyLabel;
  score: number;
};

export type SessionScore = {
  storyScores: readonly StoryScore[];
  labelEvents: readonly LabelEvent[];
  totals: {
    correct: number;
    wrongLabel: number;
    missed: number;
    overLabeled: number;
    explanationsCorrect: number;
    explanationsAttempted: number;
  };
};

// ---------------------------------------------------------------------------
// Progress & settings
// ---------------------------------------------------------------------------

export type MasteryRecord = {
  labelId: ReasoningOrFallacyLabel;
  attempts: number;
  /** Exponentially weighted score in [0, 1]. */
  mastery: number;
  lastPracticedAt: string;
};

export type UnlockState = {
  completedLessons: readonly string[];
  unlockedLabels: readonly ReasoningOrFallacyLabel[];
};

export type PracticeHistoryEntry = {
  id: string;
  completedAt: string;
  selectedLabels: readonly ReasoningOrFallacyLabel[];
  storyIds: readonly string[];
  correct: number;
  missed: number;
  overLabeled: number;
  wrongLabel: number;
};

export type UserProgress = {
  completedLessons: readonly string[];
  unlockedLabels: readonly ReasoningOrFallacyLabel[];
  mastery: Readonly<Partial<Record<ReasoningOrFallacyLabel, MasteryRecord>>>;
  practiceHistory: readonly PracticeHistoryEntry[];
  lastRoute?: string;
};

export type ThemeMode = "light" | "dark" | "system";
export type ThemeSettings = { mode: ThemeMode };

export type TextSize = "small" | "medium" | "large";
export type TextSizeSettings = { size: TextSize };

export type Settings = {
  theme: ThemeSettings;
  textSize: TextSizeSettings;
};
