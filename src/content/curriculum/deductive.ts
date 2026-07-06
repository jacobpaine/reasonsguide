import type { Lesson } from "@/domain/types";

export const deductiveLesson: Lesson = {
  id: "deductive",
  title: "Deductive reasoning",
  status: "ready",
  labelIds: ["deductive"],
  definition:
    "Deductive reasoning uses rules, definitions, or necessary relationships to reach a conclusion. If the premises are true and the argument is valid, the conclusion must be true — there is no maybe about it.",
  memoryHook: "Deduction = rule-based certainty.",
  soundsLike: [
    "All … are …, and this is one, so…",
    "By definition…",
    "If that's true, then this must be true.",
  ],
  workedExamples: [
    {
      id: "de-w1",
      title: "A rule containing a case",
      passage: [
        "All birds are animals.",
        "A robin is a bird.",
        "Therefore, a robin is an animal.",
      ],
      explanation:
        "The conclusion follows because the general rule includes the specific case. If the first two sentences are true, the third cannot be false — that necessity is the signature of deduction.",
    },
    {
      id: "de-w2",
      title: "A rule applied to a schedule",
      passage: [
        "The archive closes to visitors whenever the humidity alarm sounds.",
        "The humidity alarm sounded at noon.",
        "So the archive closed to visitors at noon.",
      ],
      explanation:
        "An if–then rule plus the fact that the 'if' happened forces the 'then'. Nothing about likelihood or pattern here — the rule itself does all the work.",
    },
  ],
  guidedExamples: [
    {
      id: "de-g1",
      passage: [
        "Every manuscript in this cabinet is from before 1800.",
        "This letter came from the cabinet.",
        "So this letter is from before 1800.",
      ],
      prompt: "Why does the conclusion follow with certainty?",
      hint: "Look at how the first sentence covers the second.",
      choices: [
        {
          id: "de-g1-a",
          text: "The general rule about the cabinet includes this specific letter.",
          isCorrect: true,
          feedback:
            "Yes. 'Every manuscript in this cabinet' leaves no room for exceptions, so the letter must be covered.",
        },
        {
          id: "de-g1-b",
          text: "Most old letters come from cabinets like this one.",
          isCorrect: false,
          feedback:
            "That would be a pattern-based guess. This argument doesn't rely on what's usual — the rule guarantees the conclusion.",
        },
        {
          id: "de-g1-c",
          text: "The letter looks old, which suggests it's from before 1800.",
          isCorrect: false,
          feedback:
            "Appearance never enters the argument. Only the rule and the letter's origin are used, and together they force the conclusion.",
        },
      ],
    },
    {
      id: "de-g2",
      passage: [
        "If the tide table is right, the causeway is underwater by six.",
        "The tide table is right.",
        "The causeway is underwater by six.",
      ],
      prompt: "What makes this deductive rather than a prediction from experience?",
      hint: "Where does the certainty come from — past observations, or the structure of the sentences?",
      choices: [
        {
          id: "de-g2-a",
          text: "The if–then rule plus its condition being met force the conclusion.",
          isCorrect: true,
          feedback:
            "Right. Grant the two premises and the conclusion is unavoidable. That's deduction's shape: if A then B; A; therefore B.",
        },
        {
          id: "de-g2-b",
          text: "The causeway has flooded at six every day this week.",
          isCorrect: false,
          feedback:
            "No past floods are mentioned. The argument runs entirely on the rule, not on a track record.",
        },
        {
          id: "de-g2-c",
          text: "Tide tables are usually reliable.",
          isCorrect: false,
          feedback:
            "The argument doesn't hedge with 'usually'. It takes the table's correctness as a premise and deduces from there.",
        },
      ],
    },
    {
      id: "de-g3",
      passage: [
        "A widow is a woman whose spouse has died.",
        "Iris's spouse died last spring.",
        "Iris is a widow.",
      ],
      prompt: "What kind of rule powers this deduction?",
      hint: "The first sentence isn't an observation about the world.",
      choices: [
        {
          id: "de-g3-a",
          text: "A definition — the meaning of the word does the work.",
          isCorrect: true,
          feedback:
            "Exactly. Definitions are rules about words, and applying them is deduction at its purest: the conclusion is true by meaning alone.",
        },
        {
          id: "de-g3-b",
          text: "A statistical pattern about widows.",
          isCorrect: false,
          feedback:
            "No counting or likelihood appears. The word's definition settles the matter outright.",
        },
        {
          id: "de-g3-c",
          text: "An expert's testimony about Iris.",
          isCorrect: false,
          feedback:
            "No one is being trusted here. The definition plus one fact make the conclusion necessary.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "de-m1",
      passage: [
        "All ferries in the fleet carry lifeboats.",
        "The Selkie is a ferry in the fleet.",
        "So the Selkie carries lifeboats.",
      ],
      options: ["deductive", "claim-support", "inductive"],
      correctLabel: "deductive",
      explanation: "A rule about the whole fleet includes the specific ship. The conclusion is forced, not merely supported.",
    },
    {
      id: "de-m2",
      passage: [
        "The café should add a second espresso machine.",
        "The morning line often reaches the door, and the current machine is out of service one week a month.",
      ],
      options: ["deductive", "claim-support", "inductive"],
      correctLabel: "claim-support",
      explanation:
        "Two reasons hold up a recommendation, but nothing forces it — you could accept both reasons and still reasonably disagree. That's support, not deduction.",
    },
    {
      id: "de-m3",
      passage: [
        "If a parcel weighs over two kilos, it goes by freight.",
        "This parcel weighs three kilos.",
        "It goes by freight.",
      ],
      options: ["deductive", "inductive", "claim-support"],
      correctLabel: "deductive",
      explanation: "If–then rule, condition met, conclusion forced. The classic deductive shape.",
    },
    {
      id: "de-m4",
      passage: [
        "The last four winters, the pond froze solid by January.",
        "It will probably freeze solid by January again.",
      ],
      options: ["inductive", "deductive", "claim-support"],
      correctLabel: "inductive",
      explanation:
        "The word 'probably' gives it away: this argues from a run of past cases to a likely next one. Patterns suggest; rules compel.",
    },
    {
      id: "de-m5",
      passage: [
        "No perishable goods may be stored in the loft.",
        "These crates hold perishable goods.",
        "So these crates may not be stored in the loft.",
      ],
      options: ["deductive", "claim-support", "inductive"],
      correctLabel: "deductive",
      explanation: "A prohibition covering all perishables necessarily covers these crates. Rule-based certainty again.",
    },
  ],
  unlockChallenge: [
    {
      id: "de-u1",
      passage: [
        "Every entry in the ledger is initialed by the clerk.",
        "This entry is in the ledger.",
        "So this entry is initialed by the clerk.",
      ],
      options: ["deductive", "inductive", "claim-support"],
      correctLabel: "deductive",
      explanation: "The universal rule includes the case; the conclusion cannot fail if the premises hold.",
    },
    {
      id: "de-u2",
      passage: [
        "The trail has been muddy after every autumn rain we've seen.",
        "It rained last night, so expect mud today.",
      ],
      options: ["inductive", "deductive", "claim-support"],
      correctLabel: "inductive",
      explanation:
        "This leans on experience — 'every autumn rain we've seen' — not on a rule that guarantees mud. Likely, yes; necessary, no.",
    },
    {
      id: "de-u3",
      passage: [
        "A sonnet has fourteen lines.",
        "This poem has eleven lines.",
        "So this poem is not a sonnet.",
      ],
      options: ["deductive", "claim-support", "inductive"],
      correctLabel: "deductive",
      explanation:
        "A definition plus a count force the conclusion. Deduction can rule things out just as firmly as it rules them in.",
    },
  ],
};
