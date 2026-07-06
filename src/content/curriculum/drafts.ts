import type { LabelId, Lesson } from "@/domain/types";

/**
 * Draft lesson scaffolds for every planned label that doesn't yet have a
 * full lesson. Each has a real definition and memory hook; examples and
 * questions are added when the lesson is promoted to "ready".
 * See .claude/skills/curriculum for the authoring guide.
 */

function draft(
  id: string,
  title: string,
  labelIds: readonly LabelId[],
  definition: string,
  memoryHook: string,
): Lesson {
  return {
    id,
    title,
    status: "draft",
    labelIds,
    definition,
    memoryHook,
    soundsLike: [],
    workedExamples: [],
    guidedExamples: [],
    mixedQuestions: [],
    unlockChallenge: [],
  };
}

export const reasoningDrafts: readonly Lesson[] = [
  draft(
    "bayesian",
    "Bayesian reasoning",
    ["bayesian"],
    "Bayesian reasoning updates how likely a belief is as new evidence arrives: start from a prior likelihood, then shift it in proportion to how strongly the evidence favors one hypothesis over its rivals.",
    "New evidence moves the needle — by just the right amount.",
  ),
  draft(
    "authority",
    "Authority and testimony",
    ["authority"],
    "Authority reasoning accepts a claim because a credible source vouches for it. Its strength depends on the source's expertise in the relevant domain, their track record, and whether experts agree.",
    "Trust the source only as far as their expertise reaches.",
  ),
  draft(
    "practical",
    "Practical reasoning",
    ["practical"],
    "Practical reasoning moves from a goal you hold and beliefs about means to a decision to act: I want G; doing A is the best available way to get G; so I should do A.",
    "Goal + best means → action.",
  ),
  draft(
    "moral",
    "Moral and normative reasoning",
    ["moral"],
    "Moral reasoning argues about what ought to be done, deriving verdicts from values, duties, rights, or principles rather than from facts alone.",
    "From 'is' plus a value to 'ought'.",
  ),
  draft(
    "comparative",
    "Comparative reasoning",
    ["comparative"],
    "Comparative reasoning ranks options against each other along shared criteria: better, worse, or equal — and shows its work by naming the criteria.",
    "Rank options by named criteria.",
  ),
  draft(
    "conductive",
    "Conductive reasoning",
    ["conductive"],
    "Conductive reasoning weighs several independent reasons for and against a conclusion together. No single reason settles it; the verdict comes from the balance.",
    "Many small reasons, weighed together.",
  ),
  draft(
    "definitional",
    "Definitional reasoning",
    ["definitional"],
    "Definitional reasoning settles a question by clarifying what a term means or requires — whether a case falls under a word once the word is made precise.",
    "Settle the word, settle the question.",
  ),
  draft(
    "conceptual",
    "Conceptual reasoning",
    ["conceptual"],
    "Conceptual reasoning works out what follows from how a concept is structured or how it relates to neighboring concepts — what promising entails, what fairness excludes.",
    "Unfold what the idea already contains.",
  ),
  draft(
    "classification",
    "Classification reasoning",
    ["classification"],
    "Classification reasoning places a case in a category and draws conclusions from what is true of the category's members.",
    "Sort it, then inherit the category's traits.",
  ),
  draft(
    "part-whole",
    "Part–whole reasoning",
    ["part-whole"],
    "Part–whole reasoning moves between properties of parts and properties of the whole — sometimes validly, sometimes not, which is why it deserves care.",
    "Check whether the property survives the trip between part and whole.",
  ),
  draft(
    "dialectical",
    "Dialectical reasoning",
    ["dialectical"],
    "Dialectical reasoning refines a position by taking objections seriously: state the view, meet the strongest counterargument, and revise or defend in response.",
    "A view earns its keep by answering objections.",
  ),
];

export const fallacyDrafts: readonly Lesson[] = [
  // formal
  draft(
    "affirming-consequent",
    "Affirming the consequent",
    ["affirming-consequent"],
    "From 'if A then B' and 'B', concluding 'A'. Deduction run backward: the rule guarantees B when A holds, but B can arrive by other roads.",
    "The 'then' part can have many causes.",
  ),
  draft(
    "denying-antecedent",
    "Denying the antecedent",
    ["denying-antecedent"],
    "From 'if A then B' and 'not A', concluding 'not B'. But the rule never said A was the only way to B.",
    "Blocking one road to B doesn't close them all.",
  ),
  draft(
    "undistributed-middle",
    "Undistributed middle",
    ["undistributed-middle"],
    "Linking two things merely because they share a category: all A are C, all B are C, therefore A are B. The shared category never connects them.",
    "Sharing a shelf doesn't make two books the same.",
  ),
  draft(
    "contradictory-premises",
    "Contradictory premises",
    ["contradictory-premises"],
    "Arguing from premises that cannot all be true at once. Whatever follows, follows from nothing.",
    "If the premises fight, the conclusion is orphaned.",
  ),
  // evidence (hasty-generalization, post-hoc, anecdotal-evidence taught in the intro lesson)
  draft(
    "cherry-picking",
    "Cherry-picking",
    ["cherry-picking"],
    "Citing only the evidence that favors a conclusion while ignoring the rest. Each cited fact may be true; the selection is the lie.",
    "True pieces, false picture.",
  ),
  draft(
    "biased-sample",
    "Biased sample",
    ["biased-sample"],
    "Generalizing from a sample gathered in a way that over-represents some kinds of cases — polling drivers about bike lanes.",
    "Ask who never got asked.",
  ),
  draft(
    "survivorship-bias",
    "Survivorship bias",
    ["survivorship-bias"],
    "Drawing conclusions only from cases that made it through a filter — studying the returned planes, the successful founders, the buildings still standing.",
    "The missing cases are the evidence.",
  ),
  // causal
  draft(
    "correlation-causation",
    "Correlation implies causation",
    ["correlation-causation"],
    "Treating two things that move together as if one caused the other, without ruling out coincidence, reverse causation, or a common cause.",
    "Moving together isn't pushing.",
  ),
  draft(
    "single-cause",
    "Single-cause fallacy",
    ["single-cause"],
    "Explaining a complex outcome by one cause when several contributed. The chosen cause is often real — just not alone.",
    "Big outcomes rarely have one parent.",
  ),
  draft(
    "slippery-slope",
    "Slippery slope",
    ["slippery-slope"],
    "Claiming one step must lead to an extreme outcome without defending each link in the chain. Chains exist; this fallacy skips proving them.",
    "Every link needs its own argument.",
  ),
  // relevance
  draft(
    "ad-hominem",
    "Ad hominem",
    ["ad-hominem"],
    "Attacking the person making an argument instead of the argument. The speaker's flaws leave their premises and logic untouched.",
    "Aim at the argument, not the arguer.",
  ),
  draft(
    "straw-man",
    "Straw man",
    ["straw-man"],
    "Rebutting a distorted, weaker version of someone's position and declaring victory over the real one.",
    "Beating the copy proves nothing about the original.",
  ),
  draft(
    "red-herring",
    "Red herring",
    ["red-herring"],
    "Steering the discussion toward an irrelevant point so the original question is never answered.",
    "Follow the scent back to the question.",
  ),
  draft(
    "tu-quoque",
    "Tu quoque",
    ["tu-quoque"],
    "Deflecting a criticism by accusing the critic of the same fault. Their hypocrisy doesn't make the criticism false.",
    "'You too' is not 'not true'.",
  ),
  draft(
    "appeal-to-emotion",
    "Appeal to emotion",
    ["appeal-to-emotion"],
    "Substituting a strong feeling — pity, fear, pride — for evidence that a claim is true. Feelings can accompany good arguments; here they replace one.",
    "Moved is not the same as shown.",
  ),
  // presumption
  draft(
    "begging-the-question",
    "Begging the question",
    ["begging-the-question"],
    "Supporting a conclusion with a premise that already assumes it — the argument travels in a circle.",
    "The premise is the conclusion in costume.",
  ),
  draft(
    "loaded-question",
    "Loaded question",
    ["loaded-question"],
    "Asking a question that smuggles in an unproven assumption, so any direct answer concedes it.",
    "Refuse the smuggled premise, not just the question.",
  ),
  draft(
    "false-dilemma",
    "False dilemma",
    ["false-dilemma"],
    "Presenting two options as the only options when others exist, forcing a choice the facts don't force.",
    "Count the doors yourself.",
  ),
  draft(
    "special-pleading",
    "Special pleading",
    ["special-pleading"],
    "Exempting your own case from a standard you apply to everyone else, without a relevant difference to justify the exemption.",
    "Same standard unless you can name the difference.",
  ),
  draft(
    "moving-goalposts",
    "Moving the goalposts",
    ["moving-goalposts"],
    "Raising the standard of evidence after it has been met, so no evidence can ever count as enough.",
    "If the bar jumps when cleared, the bar was never the point.",
  ),
  // language
  draft(
    "equivocation",
    "Equivocation",
    ["equivocation"],
    "Shifting the meaning of a key word mid-argument so the conclusion trades on the switch.",
    "One word, two meanings, zero validity.",
  ),
  draft(
    "ambiguity",
    "Ambiguity",
    ["ambiguity"],
    "Relying on a phrase that can be read more than one way, letting the argument borrow whichever reading helps.",
    "Pin the meaning before you weigh the claim.",
  ),
  draft(
    "composition",
    "Composition",
    ["composition"],
    "Assuming what is true of the parts must be true of the whole — each brick is light, so the wall is light.",
    "Parts' traits don't always add up.",
  ),
  draft(
    "division",
    "Division",
    ["division"],
    "Assuming what is true of the whole must be true of each part — the choir is excellent, so every singer is.",
    "The whole's traits don't always trickle down.",
  ),
];
