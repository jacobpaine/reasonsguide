import type {
  FallacyCategory,
  FallacyLabel,
  Label,
  LabelId,
  ReasoningCategory,
  ReasoningLabel,
  ReasoningLabelId,
} from "./types";

/**
 * The label registry: every reasoning type and fallacy the game knows about.
 * Content files and UI look labels up here; nothing else should hardcode names.
 */

export const REASONING_LABELS: readonly ReasoningLabel[] = [
  {
    id: "claim-support",
    kind: "reasoning",
    name: "Claim and support",
    friendlyName: "Backing up a claim",
    category: "core",
    shortDefinition: "A statement offered as true, together with reasons meant to support it.",
  },
  {
    id: "deductive",
    kind: "reasoning",
    name: "Deductive reasoning",
    friendlyName: "Rule reasoning",
    category: "core",
    shortDefinition:
      "Applying rules, definitions, or necessary relationships so the conclusion must follow.",
  },
  {
    id: "inductive",
    kind: "reasoning",
    name: "Inductive reasoning",
    friendlyName: "Pattern reasoning",
    category: "core",
    shortDefinition: "Generalizing from observed cases to a broader pattern or expectation.",
  },
  {
    id: "abductive",
    kind: "reasoning",
    name: "Abductive reasoning",
    friendlyName: "Clue reasoning",
    category: "core",
    shortDefinition: "Inferring the best available explanation for a surprising observation.",
  },
  {
    id: "analogical",
    kind: "reasoning",
    name: "Analogical reasoning",
    friendlyName: "Comparison reasoning",
    category: "core",
    shortDefinition:
      "Concluding that two things share a further property because they are alike in known ways.",
  },
  {
    id: "causal",
    kind: "reasoning",
    name: "Causal reasoning",
    friendlyName: "Cause reasoning",
    category: "core",
    shortDefinition: "Reasoning about what makes what happen — causes, effects, and mechanisms.",
  },
  {
    id: "statistical",
    kind: "reasoning",
    name: "Statistical reasoning",
    friendlyName: "Number reasoning",
    category: "core",
    shortDefinition: "Drawing conclusions from rates, proportions, samples, and probabilities.",
  },
  {
    id: "bayesian",
    kind: "reasoning",
    name: "Bayesian reasoning",
    friendlyName: "Belief-updating reasoning",
    category: "core",
    shortDefinition: "Updating how likely a belief is as new evidence arrives.",
  },
  {
    id: "authority",
    kind: "reasoning",
    name: "Authority / testimony",
    friendlyName: "Expert reasoning",
    category: "applied",
    shortDefinition: "Accepting a claim because a credible source vouches for it.",
  },
  {
    id: "expected-value",
    kind: "reasoning",
    name: "Expected-value reasoning",
    friendlyName: "Risk-and-reward reasoning",
    category: "applied",
    shortDefinition:
      "Choosing an action by weighing each possible outcome's magnitude against its probability.",
  },
  {
    id: "precedent",
    kind: "reasoning",
    name: "Precedent reasoning",
    friendlyName: "Prior-case reasoning",
    category: "applied",
    shortDefinition:
      "Applying the treatment established in a past decision to a sufficiently similar current case.",
  },
  {
    id: "practical",
    kind: "reasoning",
    name: "Practical reasoning",
    friendlyName: "Goal reasoning",
    category: "applied",
    shortDefinition: "Choosing an action because it is a means to a goal you hold.",
  },
  {
    id: "moral",
    kind: "reasoning",
    name: "Moral / normative reasoning",
    friendlyName: "Value reasoning",
    category: "applied",
    shortDefinition: "Reasoning about what ought to be done, from values, duties, or principles.",
  },
  {
    id: "comparative",
    kind: "reasoning",
    name: "Comparative reasoning",
    friendlyName: "Better-or-worse reasoning",
    category: "applied",
    shortDefinition: "Ranking options against each other along shared criteria.",
  },
  {
    id: "conductive",
    kind: "reasoning",
    name: "Conductive reasoning",
    friendlyName: "Many-reasons reasoning",
    category: "applied",
    shortDefinition:
      "Weighing several independent reasons for and against a conclusion together.",
  },
  {
    id: "definitional",
    kind: "reasoning",
    name: "Definitional reasoning",
    friendlyName: "What-counts reasoning",
    category: "structural",
    shortDefinition: "Settling a question by clarifying what a term means or requires.",
  },
  {
    id: "conceptual",
    kind: "reasoning",
    name: "Conceptual reasoning",
    friendlyName: "Idea reasoning",
    category: "structural",
    shortDefinition: "Working out what follows from how a concept is structured or related to others.",
  },
  {
    id: "classification",
    kind: "reasoning",
    name: "Classification reasoning",
    friendlyName: "Sorting reasoning",
    category: "structural",
    shortDefinition: "Placing a case in a category and drawing conclusions from the category.",
  },
  {
    id: "part-whole",
    kind: "reasoning",
    name: "Part–whole reasoning",
    friendlyName: "Pieces-and-whole reasoning",
    category: "structural",
    shortDefinition: "Reasoning between properties of parts and properties of the whole.",
  },
  {
    id: "dialectical",
    kind: "reasoning",
    name: "Dialectical reasoning",
    friendlyName: "Back-and-forth reasoning",
    category: "structural",
    shortDefinition:
      "Refining a position by taking objections seriously and responding to them.",
  },
  {
    id: "thought-experiment",
    kind: "reasoning",
    name: "Thought experiment",
    friendlyName: "What-if reasoning",
    category: "structural",
    shortDefinition:
      "Reasoning inside a hypothetical scenario to test whether a principle holds or reveals its limits.",
  },
  {
    id: "reductio",
    kind: "reasoning",
    name: "Reductio ad absurdum",
    friendlyName: "Absurdity reasoning",
    category: "structural",
    shortDefinition:
      "Proving a claim by assuming its opposite and showing that assumption leads to contradiction or absurdity.",
  },
];

export const FALLACY_LABELS: readonly FallacyLabel[] = [
  // --- formal -------------------------------------------------------------
  {
    id: "affirming-consequent",
    kind: "fallacy",
    name: "Affirming the consequent",
    category: "formal",
    shortDefinition:
      "Concluding the 'if' part from the 'then' part: if A then B; B; therefore A.",
    failureOf: ["deductive"],
  },
  {
    id: "denying-antecedent",
    kind: "fallacy",
    name: "Denying the antecedent",
    category: "formal",
    shortDefinition: "If A then B; not A; therefore not B — but B may hold for other reasons.",
    failureOf: ["deductive"],
  },
  {
    id: "undistributed-middle",
    kind: "fallacy",
    name: "Undistributed middle",
    category: "formal",
    shortDefinition:
      "Linking two things only through a shared category: all A are C, all B are C, so A are B.",
    failureOf: ["deductive", "classification"],
  },
  {
    id: "contradictory-premises",
    kind: "fallacy",
    name: "Contradictory premises",
    category: "formal",
    shortDefinition: "Arguing from premises that cannot all be true at once.",
    failureOf: ["deductive"],
  },
  // --- evidence -----------------------------------------------------------
  {
    id: "hasty-generalization",
    kind: "fallacy",
    name: "Hasty generalization",
    friendlyName: "Jumping to a pattern",
    category: "evidence",
    shortDefinition: "Generalizing from too few cases to support the conclusion.",
    failureOf: ["inductive"],
  },
  {
    id: "anecdotal-evidence",
    kind: "fallacy",
    name: "Anecdotal evidence",
    friendlyName: "One-story proof",
    category: "evidence",
    shortDefinition: "Treating a vivid personal story as if it outweighed broader evidence.",
    failureOf: ["inductive", "statistical"],
  },
  {
    id: "cherry-picking",
    kind: "fallacy",
    name: "Cherry-picking",
    category: "evidence",
    shortDefinition: "Citing only the evidence that favors a conclusion and ignoring the rest.",
    failureOf: ["statistical", "conductive"],
  },
  {
    id: "biased-sample",
    kind: "fallacy",
    name: "Biased sample",
    category: "evidence",
    shortDefinition: "Generalizing from a sample that doesn't represent the group.",
    failureOf: ["statistical", "inductive"],
  },
  {
    id: "survivorship-bias",
    kind: "fallacy",
    name: "Survivorship bias",
    category: "evidence",
    shortDefinition: "Drawing conclusions only from the cases that made it through a filter.",
    failureOf: ["statistical", "inductive"],
  },
  // --- causal -------------------------------------------------------------
  {
    id: "post-hoc",
    kind: "fallacy",
    name: "Post hoc",
    friendlyName: "After-so-because",
    category: "causal",
    shortDefinition: "Assuming that because B followed A, A caused B.",
    failureOf: ["causal"],
  },
  {
    id: "correlation-causation",
    kind: "fallacy",
    name: "Correlation implies causation",
    category: "causal",
    shortDefinition: "Treating two things that move together as if one caused the other.",
    failureOf: ["causal", "statistical"],
  },
  {
    id: "single-cause",
    kind: "fallacy",
    name: "Single-cause fallacy",
    category: "causal",
    shortDefinition: "Explaining a complex outcome by one cause when several contributed.",
    failureOf: ["causal"],
  },
  {
    id: "slippery-slope",
    kind: "fallacy",
    name: "Slippery slope",
    category: "causal",
    shortDefinition:
      "Claiming one step must lead to an extreme outcome without showing each link.",
    failureOf: ["causal", "practical"],
  },
  // --- relevance ----------------------------------------------------------
  {
    id: "ad-hominem",
    kind: "fallacy",
    name: "Ad hominem",
    category: "relevance",
    shortDefinition: "Attacking the person making the argument instead of the argument.",
    failureOf: ["dialectical"],
  },
  {
    id: "straw-man",
    kind: "fallacy",
    name: "Straw man",
    category: "relevance",
    shortDefinition: "Rebutting a distorted, weaker version of someone's actual position.",
    failureOf: ["dialectical"],
  },
  {
    id: "red-herring",
    kind: "fallacy",
    name: "Red herring",
    category: "relevance",
    shortDefinition: "Steering the discussion to an irrelevant point to avoid the real issue.",
    failureOf: ["dialectical"],
  },
  {
    id: "tu-quoque",
    kind: "fallacy",
    name: "Tu quoque",
    category: "relevance",
    shortDefinition: "Deflecting a criticism by accusing the critic of the same fault.",
    failureOf: ["dialectical"],
  },
  {
    id: "appeal-to-emotion",
    kind: "fallacy",
    name: "Appeal to emotion",
    category: "relevance",
    shortDefinition: "Substituting a strong feeling for evidence that a claim is true.",
    failureOf: ["claim-support"],
  },
  // --- presumption ----------------------------------------------------------
  {
    id: "begging-the-question",
    kind: "fallacy",
    name: "Begging the question",
    category: "presumption",
    shortDefinition: "Supporting a conclusion with a premise that already assumes it.",
    failureOf: ["claim-support", "deductive"],
  },
  {
    id: "loaded-question",
    kind: "fallacy",
    name: "Loaded question",
    category: "presumption",
    shortDefinition: "Asking a question that smuggles in an unproven assumption.",
    failureOf: ["dialectical"],
  },
  {
    id: "false-dilemma",
    kind: "fallacy",
    name: "False dilemma",
    category: "presumption",
    shortDefinition: "Presenting two options as the only options when others exist.",
    failureOf: ["practical", "comparative"],
  },
  {
    id: "special-pleading",
    kind: "fallacy",
    name: "Special pleading",
    category: "presumption",
    shortDefinition: "Exempting your own case from a standard you apply to everyone else.",
    failureOf: ["moral", "conductive"],
  },
  {
    id: "moving-goalposts",
    kind: "fallacy",
    name: "Moving the goalposts",
    category: "presumption",
    shortDefinition: "Raising the standard of evidence after it has been met.",
    failureOf: ["dialectical"],
  },
  // --- language -------------------------------------------------------------
  {
    id: "equivocation",
    kind: "fallacy",
    name: "Equivocation",
    category: "language",
    shortDefinition: "Shifting the meaning of a key word mid-argument.",
    failureOf: ["definitional", "deductive"],
  },
  {
    id: "ambiguity",
    kind: "fallacy",
    name: "Ambiguity",
    category: "language",
    shortDefinition: "Relying on an unclear phrase that can be read more than one way.",
    failureOf: ["definitional"],
  },
  {
    id: "composition",
    kind: "fallacy",
    name: "Composition",
    category: "language",
    shortDefinition: "Assuming what's true of the parts must be true of the whole.",
    failureOf: ["part-whole"],
  },
  {
    id: "division",
    kind: "fallacy",
    name: "Division",
    category: "language",
    shortDefinition: "Assuming what's true of the whole must be true of each part.",
    failureOf: ["part-whole"],
  },
];

export const ALL_LABELS: readonly Label[] = [...REASONING_LABELS, ...FALLACY_LABELS];

const labelIndex: ReadonlyMap<LabelId, Label> = new Map(ALL_LABELS.map((l) => [l.id, l]));

export function getLabel(id: LabelId): Label {
  const label = labelIndex.get(id);
  if (!label) throw new Error(`Unknown label id: ${id}`);
  return label;
}

export function isReasoningLabel(id: LabelId): id is ReasoningLabelId {
  return getLabel(id).kind === "reasoning";
}

export function labelName(id: LabelId): string {
  return getLabel(id).name;
}

export function labelFriendlyName(id: LabelId): string | undefined {
  return getLabel(id).friendlyName;
}

/** Human-readable headings for grouped display. */
export const REASONING_CATEGORY_NAMES: Readonly<Record<ReasoningCategory, string>> = {
  core: "Core forms of inference",
  applied: "Reasoning in use",
  structural: "Reasoning about concepts and structure",
};

export const FALLACY_CATEGORY_NAMES: Readonly<Record<FallacyCategory, string>> = {
  formal: "Formal fallacies",
  evidence: "Evidence fallacies",
  causal: "Causal fallacies",
  relevance: "Relevance fallacies",
  presumption: "Presumption fallacies",
  language: "Language fallacies",
};

export type LabelGroup = {
  kind: Label["kind"];
  category: ReasoningCategory | FallacyCategory;
  categoryName: string;
  labels: readonly Label[];
};

/**
 * Group a set of label ids by kind and category, preserving registry order.
 * Used by the practice setup screen and curriculum overview.
 */
export function groupLabelsByCategory(ids: readonly LabelId[]): LabelGroup[] {
  const wanted = new Set(ids);
  const groups: LabelGroup[] = [];
  const byKey = new Map<string, Label[]>();

  for (const label of ALL_LABELS) {
    if (!wanted.has(label.id)) continue;
    const key = `${label.kind}:${label.category}`;
    const existing = byKey.get(key);
    if (existing) {
      existing.push(label);
    } else {
      const labels: Label[] = [label];
      byKey.set(key, labels);
      groups.push({
        kind: label.kind,
        category: label.category,
        categoryName:
          label.kind === "reasoning"
            ? REASONING_CATEGORY_NAMES[label.category as ReasoningCategory]
            : FALLACY_CATEGORY_NAMES[label.category as FallacyCategory],
        labels,
      });
    }
  }
  return groups;
}
