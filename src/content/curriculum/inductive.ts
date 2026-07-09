import type { Lesson } from "@/domain/types";

export const inductiveLesson: Lesson = {
  id: "inductive",
  title: "Inductive reasoning",
  status: "ready",
  labelIds: ["inductive"],
  definition:
    "Inductive reasoning moves from observed cases to a broader pattern or a likely next case. Good induction makes its conclusion probable, never certain — more cases, more varied cases, and no known exceptions all strengthen it.",
  memoryHook: "Induction = pattern-based likelihood.",
  soundsLike: [
    "Every time so far…",
    "It usually turns out that…",
    "The last five were like this, so the next one probably will be.",
  ],
  workedExamples: [
    {
      id: "in-w1",
      title: "From a run of cases to the next case",
      passage: [
        "The ferry has left the dock at 7:05 every weekday this month.",
        "Today is a weekday.",
        "So the ferry will probably leave at 7:05 today.",
      ],
      explanation:
        "Twenty-odd observed departures form a pattern, and the pattern is projected onto today. The conclusion says 'probably' because a schedule change or a storm could still break the pattern — that openness to exceptions is what makes it induction, not deduction.",
    },
    {
      id: "in-w2",
      title: "From samples to a generalization",
      passage: [
        "Every apple we've picked from the north orchard this week has been sweet.",
        "We've picked from trees at both ends and the middle.",
        "The north orchard's apples are probably sweet this year.",
      ],
      explanation:
        "The generalization covers the whole orchard, but the evidence is a sample. Notice the second sentence: sampling from different parts of the orchard makes the pattern more trustworthy. Variety in the evidence is a quiet mark of careful induction.",
    },
  ],
  guidedExamples: [
    {
      id: "in-g1",
      passage: [
        "The heron has fished the same bend of the river at dawn all summer.",
        "It will probably be there at dawn tomorrow.",
      ],
      prompt: "What makes this inductive rather than deductive?",
      hint: "Could the conclusion be false even if the first sentence is true?",
      choices: [
        {
          id: "in-g1-a",
          text: "The pattern makes tomorrow likely but not guaranteed.",
          isCorrect: true,
          feedback:
            "Right. No rule forces the heron to return. A long pattern earns the word 'probably' — and nothing stronger.",
        },
        {
          id: "in-g1-b",
          text: "A rule about herons guarantees the conclusion.",
          isCorrect: false,
          feedback:
            "No such rule appears. The argument rests entirely on the summer's observations — that's a pattern, not a rule.",
        },
        {
          id: "in-g1-c",
          text: "It explains why the heron chose this bend of the river.",
          isCorrect: false,
          feedback:
            "The argument never asks why. It only projects an observed pattern forward — explanation-seeking is a different move you'll meet soon.",
        },
      ],
    },
    {
      id: "in-g2",
      passage: [
        "Nadia tried three of the bakery's loaves: the rye, the seeded, and the sourdough.",
        "All three were underbaked.",
        "She concluded the bakery's bread is generally underbaked.",
      ],
      prompt: "What kind of inductive move is Nadia making?",
      hint: "She goes from some cases to a claim about all of them.",
      choices: [
        {
          id: "in-g2-a",
          text: "Generalizing from a sample to the whole.",
          isCorrect: true,
          feedback:
            "Yes — three loaves stand in for the bakery's bread as a whole. Whether three varied loaves are enough is a fair question, and exactly the right kind of question to ask of induction.",
        },
        {
          id: "in-g2-b",
          text: "Applying a definition of 'underbaked'.",
          isCorrect: false,
          feedback:
            "No definition is doing the work. The move is from tasted loaves to untasted ones — sample to whole.",
        },
        {
          id: "in-g2-c",
          text: "Trusting an expert's judgment about the bakery.",
          isCorrect: false,
          feedback:
            "Nadia relies on her own observations, not on anyone's authority. The inference runs from her cases to a general claim.",
        },
      ],
    },
    {
      id: "in-g3",
      passage: [
        "In ten years of records, the mountain pass has closed every time November snowfall exceeded a meter.",
        "This November's snowfall passed a meter yesterday.",
        "The pass will very likely close.",
      ],
      prompt: "Why is this strong induction rather than certainty?",
      hint: "Ten years of agreement is impressive — but what would deduction need that this lacks?",
      choices: [
        {
          id: "in-g3-a",
          text: "The track record is long and consistent, but no rule makes closure necessary.",
          isCorrect: true,
          feedback:
            "Exactly. 'Very likely' is honestly earned by ten years of cases. Deduction would need a rule — say, a law requiring closure — that this argument doesn't have.",
        },
        {
          id: "in-g3-b",
          text: "The conclusion is certain because the records leave no exceptions.",
          isCorrect: false,
          feedback:
            "A spotless record still isn't a guarantee — a new plow, a mild week, a policy change could break the pattern. Induction's conclusions stay probable.",
        },
        {
          id: "in-g3-c",
          text: "It's weak because ten cases is a small sample.",
          isCorrect: false,
          feedback:
            "Ten for ten across a decade, with a clear threshold, is a strong pattern. Strength comes from consistency and relevance, not raw count alone.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "in-m1",
      passage: [
        "Each of the last six market days, the honey stall sold out by noon.",
        "It will probably sell out by noon next market day.",
      ],
      options: ["inductive", "deductive", "claim-support"],
      correctLabel: "inductive",
      explanation: "A run of past cases projected onto the next case — pattern-based likelihood.",
    },
    {
      id: "in-m2",
      passage: [
        "All stalls in the covered row pay the winter fee.",
        "The honey stall is in the covered row.",
        "So the honey stall pays the winter fee.",
      ],
      options: ["deductive", "inductive", "claim-support"],
      correctLabel: "deductive",
      explanation: "A rule covering the whole row necessarily covers this stall. Certainty from structure, not from a pattern.",
    },
    {
      id: "in-m3",
      passage: [
        "The town should repaint the harbor railings this year.",
        "Rust has broken through in a dozen places, and repainting now costs a fifth of replacing them later.",
      ],
      options: ["claim-support", "inductive", "deductive"],
      correctLabel: "claim-support",
      explanation: "A recommendation held up by two reasons. There's no pattern being projected and no rule forcing anything.",
    },
    {
      id: "in-m4",
      passage: [
        "Every violin the luthier has repaired for us came back sounding better than before.",
        "The viola we just sent her will probably come back sounding better too.",
      ],
      options: ["inductive", "claim-support", "deductive"],
      correctLabel: "inductive",
      explanation:
        "Past cases form the pattern; the new case is expected to fit it. The small stretch from violins to a viola is worth noticing — induction often stretches a little.",
    },
    {
      id: "in-m5",
      passage: [
        "Storms from the southwest have flooded the lower road nine autumns out of ten.",
        "A southwest storm is forecast for tonight.",
        "The lower road will probably flood.",
      ],
      options: ["inductive", "deductive", "claim-support"],
      correctLabel: "inductive",
      explanation: "A strong but imperfect frequency — nine in ten — grounds a probable conclusion. Honest induction keeps the 'probably'.",
    },
  ],
  unlockChallenge: [
    {
      id: "in-u1",
      passage: [
        "The night bus has been late every rainy evening this winter.",
        "It's raining tonight, so it will probably be late.",
      ],
      options: ["inductive", "deductive", "claim-support"],
      correctLabel: "inductive",
      explanation: "Observed pattern plus a matching condition yields a probable — not necessary — conclusion.",
    },
    {
      id: "in-u2",
      passage: [
        "Members may borrow at most four volumes at a time.",
        "Silas is a member with four volumes out.",
        "So Silas may not borrow another volume.",
      ],
      options: ["deductive", "inductive", "claim-support"],
      correctLabel: "deductive",
      explanation: "The lending rule plus Silas's count force the conclusion. No pattern or probability involved.",
    },
    {
      id: "in-u3",
      passage: [
        "In forty years of village fairs, no October fair has ever been rained out.",
        "This year's October fair probably won't be rained out either.",
      ],
      options: ["inductive", "claim-support", "deductive"],
      correctLabel: "inductive",
      explanation: "Forty spotless years make a strong pattern — and still only a probable conclusion. That restraint is induction done well.",
    },
    {
      id: "in-u4",
      passage: [
        "Every team meeting scheduled after lunch this quarter has run at least twenty minutes over its allotted time.",
        "The Thursday after-lunch meeting will probably run over too.",
      ],
      options: ["inductive", "deductive", "claim-support"],
      correctLabel: "inductive",
      explanation:
        "A consistent run of overruns projects a likely next outcome. 'Probably' is the honest word here — a rule isn't delivering this conclusion, a pattern is.",
    },
    {
      id: "in-u5",
      passage: [
        "The community centre should add a second pottery kiln.",
        "Firing slots book out weeks in advance, and three instructors have said they would offer evening classes if more kiln time were available.",
      ],
      options: ["claim-support", "inductive", "deductive"],
      correctLabel: "claim-support",
      explanation:
        "A recommendation with two supporting reasons — unmet demand and instructor readiness. No pattern is being projected onto a next case; no rule forces anything.",
    },
    {
      id: "in-u6",
      passage: [
        "All items checked out from the tool library must be returned within seven days.",
        "This pressure washer was checked out eight days ago.",
        "So this pressure washer is overdue.",
      ],
      options: ["deductive", "inductive", "claim-support"],
      correctLabel: "deductive",
      explanation:
        "A lending rule plus one measured fact force the conclusion. No pattern from past returns is being projected — the rule alone closes the case.",
    },
  ],
};
