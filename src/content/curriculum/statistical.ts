import type { Lesson } from "@/domain/types";

export const statisticalLesson: Lesson = {
  id: "statistical",
  title: "Statistical reasoning",
  status: "ready",
  labelIds: ["statistical"],
  definition:
    "Statistical reasoning draws conclusions from rates, proportions, samples, and probabilities — moving from how often something happens to how likely it is here. Its strength lives in the details: how big the sample is, how it was gathered, and whether the rate actually applies to the case at hand.",
  memoryHook: "From how often to how likely.",
  soundsLike: [
    "Nine times out of ten…",
    "In a sample of…",
    "The rate among … is …, so the chance here is about…",
  ],
  workedExamples: [
    {
      id: "st-w1",
      title: "From a rate to a single case",
      passage: [
        "Of the 200 saplings planted along the river path, 170 survived their first winter.",
        "The new sapling by the footbridge was planted the same way, in the same soil.",
        "It has roughly an 85 percent chance of surviving its first winter.",
      ],
      explanation:
        "A measured rate (170 of 200) becomes a probability for one new case. The middle sentence matters: the rate only transfers because the new sapling belongs to the same group the rate describes.",
    },
    {
      id: "st-w2",
      title: "Reading a proportion carefully",
      passage: [
        "A survey of 400 library visitors found that 68 percent wanted longer Sunday hours.",
        "The survey was taken across four weeks, at different times of day.",
        "Most library visitors likely favor longer Sunday hours.",
      ],
      explanation:
        "The conclusion leans on two things: a decent sample size and a sampling method that didn't just catch one kind of visitor. When you read a statistic, the method that produced it is part of the argument.",
    },
  ],
  guidedExamples: [
    {
      id: "st-g1",
      passage: [
        "Nine of the ten wells tested in the valley showed safe mineral levels.",
        "The Alders' well is in the same valley, drawing from the same aquifer.",
        "Their well is probably safe.",
      ],
      prompt: "What carries the probability from the ten wells to the Alders' well?",
      hint: "Why mention the aquifer at all?",
      choices: [
        {
          id: "st-g1-a",
          text: "The Alders' well belongs to the same group the 9-in-10 rate describes.",
          isCorrect: true,
          feedback:
            "Yes. A rate transfers to a case only when the case genuinely belongs to the measured group — same valley, same aquifer.",
        },
        {
          id: "st-g1-b",
          text: "Ten wells is a large enough sample to be certain.",
          isCorrect: false,
          feedback:
            "Ten is modest, and certainty was never on offer. The key move is membership in the measured group, and the conclusion rightly says 'probably'.",
        },
        {
          id: "st-g1-c",
          text: "Well water in valleys is always safe.",
          isCorrect: false,
          feedback:
            "No such rule exists, and one of the ten wells failed. The argument works with rates, not universal rules.",
        },
      ],
    },
    {
      id: "st-g2",
      passage: [
        "A poll outside the hardware store found 80 percent of respondents opposed the new bike lane.",
        "The pollster surveyed only weekday-morning customers, most arriving by car.",
        "The town paper called the lane 'widely opposed'.",
      ],
      prompt: "What weakens the leap from this poll to 'the town opposes the lane'?",
      hint: "Who never got asked?",
      choices: [
        {
          id: "st-g2-a",
          text: "The sample over-represents drivers, so it may not reflect the town.",
          isCorrect: true,
          feedback:
            "Right. A rate is only as good as the sample behind it. Weekday drivers at a hardware store aren't the whole town — cyclists, transit riders, and weekend shoppers were never counted.",
        },
        {
          id: "st-g2-b",
          text: "80 percent is too high a number to be true.",
          isCorrect: false,
          feedback:
            "High numbers can be true. The concern isn't the size of the percentage but who was — and wasn't — in the sample.",
        },
        {
          id: "st-g2-c",
          text: "Polls can never tell us anything about opinion.",
          isCorrect: false,
          feedback:
            "Well-sampled polls tell us plenty. The lesson is to check the method, not to dismiss statistics altogether.",
        },
      ],
    },
    {
      id: "st-g3",
      passage: [
        "The night ferry runs late one crossing in twenty.",
        "Tonight's crossing is a night ferry crossing like any other.",
        "There's about a 5 percent chance tonight's ferry runs late.",
      ],
      prompt: "What is this argument doing with the 1-in-20 rate?",
      hint: "Follow the number from the group to the single night.",
      choices: [
        {
          id: "st-g3-a",
          text: "Converting a group's frequency into a probability for one case.",
          isCorrect: true,
          feedback:
            "Exactly — the signature statistical move. The honest 'about' acknowledges that tonight might differ in unmeasured ways (weather, holidays).",
        },
        {
          id: "st-g3-b",
          text: "Proving tonight's ferry will be on time.",
          isCorrect: false,
          feedback:
            "A 5 percent chance of lateness is not proof of punctuality. Statistical conclusions are graded, not guaranteed.",
        },
        {
          id: "st-g3-c",
          text: "Explaining why ferries run late.",
          isCorrect: false,
          feedback:
            "No cause is offered anywhere. The argument moves from a frequency to a likelihood, staying entirely among the numbers.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "st-m1",
      passage: [
        "Of 120 bulbs planted in the shaded bed last year, 90 bloomed.",
        "The same bed was planted the same way this year.",
        "About three-quarters of this year's bulbs will likely bloom.",
      ],
      options: ["statistical", "inductive", "causal"],
      correctLabel: "statistical",
      explanation:
        "A measured proportion (90 of 120) is carried forward as a likelihood. The explicit rate is what makes it statistical rather than loose pattern talk.",
    },
    {
      id: "st-m2",
      passage: [
        "The tulips by the gate have opened before the daffodils every spring we've kept records.",
        "They'll probably open first again this spring.",
      ],
      options: ["inductive", "statistical", "analogical"],
      correctLabel: "inductive",
      explanation:
        "A pattern projected forward with no rate or proportion in play — induction in its plain form.",
    },
    {
      id: "st-m3",
      passage: [
        "Only a third of the bulbs near the walnut tree bloomed, against three-quarters everywhere else.",
        "Walnut roots release a chemical that suppresses many plants, and the failures trace the root line.",
        "The walnut is likely suppressing those bulbs.",
      ],
      options: ["causal", "statistical", "abductive"],
      correctLabel: "causal",
      explanation:
        "The numbers set up the puzzle, but the argument's work is connecting cause to effect through a mechanism and its footprint.",
    },
    {
      id: "st-m4",
      passage: [
        "In the harbor survey, 7 percent of hulls inspected had shipworm damage.",
        "The Petrel is an inspected-class hull moored in the same harbor.",
        "There's roughly a 7 percent chance the Petrel has shipworm damage.",
      ],
      options: ["statistical", "abductive", "deductive"],
      correctLabel: "statistical",
      explanation: "A group rate applied to a member of the group — frequency to single-case probability.",
    },
    {
      id: "st-m5",
      passage: [
        "Grayport cut hull damage by scheduling inspections before the warm season.",
        "Our harbor has the same waters and the same shipworm cycle.",
        "Early inspections would probably help here too.",
      ],
      options: ["analogical", "statistical", "claim-support"],
      correctLabel: "analogical",
      explanation:
        "The inference rides on a comparison between similar harbors, not on any stated rate.",
    },
  ],
  unlockChallenge: [
    {
      id: "st-u1",
      passage: [
        "Across five years, 12 percent of entries in the pie contest have been savory.",
        "About a tenth of this year's forty entries will likely be savory.",
      ],
      options: ["statistical", "inductive", "causal"],
      correctLabel: "statistical",
      explanation: "A measured historical rate is applied to a new instance of the same event.",
    },
    {
      id: "st-u2",
      passage: [
        "A show of hands at the savory-pie stand found most tasters prefer savory pies.",
        "The organizers announced that the town prefers savory pies.",
      ],
      options: ["statistical", "deductive", "claim-support"],
      correctLabel: "statistical",
      explanation:
        "This is statistical reasoning done badly — a sample gathered where savory fans congregate. Recognizing the move is step one; the fallacies chapter names what's wrong with it.",
    },
    {
      id: "st-u3",
      passage: [
        "One entry in eight won a ribbon last year, and Prue entered one pie.",
        "Prue has about a one-in-eight chance of a ribbon.",
      ],
      options: ["statistical", "abductive", "inductive"],
      correctLabel: "statistical",
      explanation:
        "A frequency becomes a single-case probability. (A sharper estimate would ask about Prue's baking — refining rates with evidence is Bayesian reasoning, a later chapter.)",
    },
  ],
};
