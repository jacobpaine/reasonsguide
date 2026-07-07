import type { Lesson } from "@/domain/types";

export const definitionalLesson: Lesson = {
  id: "definitional",
  title: "Definitional reasoning",
  status: "ready",
  labelIds: ["definitional"],
  definition:
    "Definitional reasoning settles a question by making a word's meaning precise: what the term requires, and whether the case at hand meets those requirements. Many disputes that look like arguments about the world are arguments about a word — and dissolve the moment the word is pinned.",
  memoryHook: "Settle the word, settle the question.",
  soundsLike: [
    "It depends what you mean by…",
    "Strictly speaking, a … must…",
    "By the deed's own terms, that counts.",
  ],
  workedExamples: [
    {
      id: "df-w1",
      title: "What the lease means by 'garden'",
      passage: [
        "The lease lets the tenant 'keep a garden', and the landlord objected to the beehives as no part of one.",
        "The lease itself defines a garden as ground cultivated for the household's food and comfort.",
        "Honey being food and the hives standing on cultivated ground, the hives fall within the lease's own definition — and the question was over.",
      ],
      explanation:
        "The dispute sounds like a quarrel about bees; it's a quarrel about a word, and the lease supplies the word's requirements. Definitional reasoning runs: here is what the term requires; here is the case; the case meets (or fails) the requirements. Once the definition is fixed, the final step is deductive — the definitional work was fixing it.",
    },
    {
      id: "df-w2",
      title: "Drawing the line before judging the case",
      passage: [
        "The prize is for the valley's best 'cottage loaf', and Perrin's entry was two stacked rounds the size of a cartwheel.",
        "The judges first settled the term: a cottage loaf is two rounds, the lesser atop the greater, baked as one — nothing in the tradition speaks to size.",
        "Under that definition Perrin's loaf competed fairly, whatever the judges thought of its ambition.",
      ],
      explanation:
        "Notice the order of operations: the judges settle what 'cottage loaf' requires before looking at Perrin's entry, so the definition can't be quietly bent to reach a preferred verdict. Fixing the meaning first, case second, is definitional reasoning practiced honestly.",
    },
  ],
  guidedExamples: [
    {
      id: "df-g1",
      passage: [
        "The bylaw exempts 'working boats' from the mooring fee, and Odd's ferry hasn't carried a paying soul in two years.",
        "The harbor book defines a working boat as one licensed and offered for hire, whether or not hired.",
        "Licensed and offered Odd's ferry is, so the exemption stands.",
      ],
      prompt: "What actually settles Odd's case?",
      hint: "Not the ferry's history — look at where the answer comes from.",
      choices: [
        {
          id: "df-g1-a",
          text: "The harbor book's definition — 'offered for hire' is the requirement, and the ferry meets it.",
          isCorrect: true,
          feedback:
            "Yes. The two idle years feel damning but are irrelevant to the term as defined. Definitional reasoning lives on exactly this discipline: the requirements as written, not the impression the case makes.",
        },
        {
          id: "df-g1-b",
          text: "The pattern of Odd's past fees — he has always been exempted before.",
          isCorrect: false,
          feedback:
            "No precedent is cited, and none is needed. The definition answers directly; past treatment would matter only if the term were left vague.",
        },
        {
          id: "df-g1-c",
          text: "The harbormaster's authority to rule as he pleases.",
          isCorrect: false,
          feedback:
            "The harbormaster is bound by the book, not the source of it here. The definition decides; an official merely reads it.",
        },
      ],
    },
    {
      id: "df-g2",
      passage: [
        "Two neighbors argued whether the winter count of 'residents' should include the lighthouse keeper, who sleeps ashore only in storms.",
        "One meant 'resident' as anyone whose work fixes them to the parish; the other meant anyone who sleeps in it most nights.",
        "They discovered they agreed on every fact about the keeper — and had never once been arguing about him.",
      ],
      prompt: "What did the neighbors' discovery reveal about their dispute?",
      hint: "They agree on all the facts. What's left to disagree about?",
      choices: [
        {
          id: "df-g2-a",
          text: "It was verbal — two definitions in play, so the same facts yielded opposite answers.",
          isCorrect: true,
          feedback:
            "Exactly. This is the diagnostic move of definitional reasoning: when parties share every fact and still clash, look for a word carrying two meanings. Choose the definition (or keep both, labeled) and the dispute dissolves.",
        },
        {
          id: "df-g2-b",
          text: "One of them must be lying about the keeper's habits.",
          isCorrect: false,
          feedback:
            "The passage says they agree on every fact. A factual dispute needs a factual disagreement; this one has none — only a split word.",
        },
        {
          id: "df-g2-c",
          text: "The question is unanswerable and should be dropped.",
          isCorrect: false,
          feedback:
            "It's answerable twice over — once per definition. What's needed isn't surrender but a choice of meaning suited to the count's purpose.",
        },
      ],
    },
    {
      id: "df-g3",
      passage: [
        "The act protects 'ancient hedgerows', defined as those standing before the enclosure maps of 1809.",
        "The disputed hedge appears, faint but unmistakable, on the 1806 survey.",
        "So the hedge is protected — not because it is beautiful or beloved, though it is both, but because it meets the definition.",
      ],
      prompt: "Why does the speaker set aside 'beautiful and beloved'?",
      hint: "What does the act's term actually require?",
      choices: [
        {
          id: "df-g3-a",
          text: "Because the definition's requirement is age, and only evidence of age bears on it.",
          isCorrect: true,
          feedback:
            "Right. Definitional reasoning derives its power from ignoring everything the definition doesn't mention. Beauty may argue for a better act; under this act, the 1806 survey is the whole case.",
        },
        {
          id: "df-g3-b",
          text: "Because beauty can't be proven and so never matters in reasoning.",
          isCorrect: false,
          feedback:
            "Beauty matters to plenty of reasoning — moral and comparative arguments run on such judgments. It's this *definition* that excludes it, not reasoning at large.",
        },
        {
          id: "df-g3-c",
          text: "Because old things are better than beautiful things.",
          isCorrect: false,
          feedback:
            "No such ranking is made. The act picked age as its criterion; the reasoning just follows the pick.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "df-m1",
      passage: [
        "The society's medal is for a 'first ascent', which its charter defines as reaching a summit by any route no one has completed before.",
        "Berta's route up the north face was new, though the summit had been reached from the south for a century.",
        "Under the charter, hers was no first ascent — the summit, not the route, is what the term counts.",
      ],
      options: ["definitional", "deductive", "classification"],
      correctLabel: "definitional",
      explanation:
        "The whole question turns on making the term precise and testing the case against it. (The final step applies the fixed definition deductively — but fixing what 'first ascent' requires was the work.)",
    },
    {
      id: "df-m2",
      passage: [
        "All entries postmarked after Friday are disqualified, by rule seven.",
        "Perrin's entry is postmarked Saturday.",
        "So Perrin's entry is disqualified.",
      ],
      options: ["deductive", "definitional", "claim-support"],
      correctLabel: "deductive",
      explanation:
        "No word is in dispute — the rule is clear and merely applied to a case. When the meaning is already settled, application is plain deduction.",
    },
    {
      id: "df-m3",
      passage: [
        "Is the mudflat 'land' for the purposes of the grazing rights?",
        "The old grant defines land as ground dry at ordinary high tide, and the flat drowns twice a day.",
        "So the grazing rights never reached it.",
      ],
      options: ["definitional", "causal", "part-whole"],
      correctLabel: "definitional",
      explanation:
        "A boundary dispute resolved by pinning a word: the grant's own definition of 'land' excludes the flat, and the question closes with the term.",
    },
    {
      id: "df-m4",
      passage: [
        "Whether to call the old custom 'fair' was argued at length.",
        "Whatever the word, the custom takes from those who least can spare and gives to those who least need — and what does that should end.",
      ],
      options: ["moral", "definitional", "conductive"],
      correctLabel: "moral",
      explanation:
        "The speaker refuses the verbal question and reasons from a principle to an ought. A definitional argument would settle what 'fair' requires; this one bypasses the word for the value.",
    },
    {
      id: "df-m5",
      passage: [
        "The insurance covers 'storm damage', which the policy defines as harm done by wind or by water driven by wind.",
        "The barn roof fell under snow-weight on a windless night.",
        "The loss, whatever else it is, is not storm damage within the policy.",
      ],
      options: ["definitional", "abductive", "statistical"],
      correctLabel: "definitional",
      explanation:
        "The policy's definition sets the requirements; the windless night fails them. Hard on the farmer — but the reasoning is about the term's reach, and the term decides.",
    },
  ],
  unlockChallenge: [
    {
      id: "df-u1",
      passage: [
        "The ferry charter grants free passage to 'islanders', defined as those keeping their principal dwelling on the island.",
        "Mora winters on the mainland but keeps her only house, her boat, and her flock on the island.",
        "Her principal dwelling being the island house, she rides free — the winters notwithstanding.",
      ],
      options: ["definitional", "deductive", "moral"],
      correctLabel: "definitional",
      explanation:
        "The case looks ambiguous until the term is pinned: 'principal dwelling' is the requirement, and the facts meet it. Word settled, question settled.",
    },
    {
      id: "df-u2",
      passage: [
        "Call it 'borrowing' or call it 'taking' — the ladder came back cracked, and a thing returned worse than it went out obliges the returner to mend it.",
      ],
      options: ["moral", "definitional", "claim-support"],
      correctLabel: "moral",
      explanation:
        "The speaker explicitly waves the word away and reasons from a principle about obligation. When the verdict would be the same under either definition, the argument isn't definitional.",
    },
    {
      id: "df-u3",
      passage: [
        "The two surveyors agreed on the stream's every bend, yet one called it the parish 'boundary' and the other did not.",
        "It emerged the old grant defines the boundary as the stream's course *as of 1750* — and the stream has wandered since.",
        "On the grant's definition, the boundary lies where the water ran then, not where it runs now, and both men could finally draw the same line.",
      ],
      options: ["definitional", "causal", "comparative"],
      correctLabel: "definitional",
      explanation:
        "Agreement on all the facts, disagreement in the line — the mark of a word doing double duty. The grant's definition of 'boundary' resolves it without a single new fact.",
    },
  ],
};
