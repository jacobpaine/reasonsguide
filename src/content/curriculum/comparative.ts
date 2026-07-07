import type { Lesson } from "@/domain/types";

export const comparativeLesson: Lesson = {
  id: "comparative",
  title: "Comparative reasoning",
  status: "ready",
  labelIds: ["comparative"],
  definition:
    "Comparative reasoning ranks options against each other along shared, named criteria — better, worse, or equal — and shows its work by saying which criteria count and how the options fare on each. Its conclusion is a ranking, not yet a decision.",
  memoryHook: "Rank options by named criteria.",
  soundsLike: [
    "On cost and on durability, the oak beats the pine.",
    "Weaker in the wind, but far easier to mend.",
    "All told, the north route is the better of the two.",
  ],
  workedExamples: [
    {
      id: "cq-w1",
      title: "Two wells",
      passage: [
        "The village weighed its two candidate well sites on three counts: depth to water, distance from the byres, and ease of digging.",
        "The green site was shallower and farther from the byres; the lane site was easier digging but close enough to the byres to worry the doctor.",
        "On two counts of three — and the counts that matter most — the green site ranked better.",
      ],
      explanation:
        "Everything comparative reasoning needs is on display: named criteria, both options scored on each, and an explicit weighing ('the counts that matter most'). The conclusion is a ranking. Deciding to dig is a further, practical step — comparison hands its ranking to the decision, but the two are different work.",
    },
    {
      id: "cq-w2",
      title: "Better at what, exactly",
      passage: [
        "Asked which of two ponies was better, the horse-dealer refused the question until it grew criteria.",
        "For a child learning to ride: the gray, being calm and forgiving.",
        "For hauling the peat cart: the bay, by a full hand of muscle — 'better' bare of criteria, she said, is a word doing no work.",
      ],
      explanation:
        "Comparisons are only as meaningful as their criteria. The dealer's move — replacing bare 'better' with 'better for X' — is the heart of the skill. Notice this differs from analogical reasoning, which uses a likeness to transfer a property; comparative reasoning uses criteria to order rivals.",
    },
  ],
  guidedExamples: [
    {
      id: "cq-g1",
      passage: [
        "The choir needed a rehearsal night and had two offers: the schoolroom and the sail loft.",
        "The schoolroom was warm and central but free only till eight; the loft was cold and far but theirs till midnight.",
        "For a choir of early risers, the conductor ranked the schoolroom first.",
      ],
      prompt: "What makes the conductor's conclusion comparative reasoning done properly?",
      hint: "Look for the criteria — and for what makes the tie-break honest.",
      choices: [
        {
          id: "cq-g1-a",
          text: "Both options are scored on the same named criteria, and the weighing is tied to what the choir needs.",
          isCorrect: true,
          feedback:
            "Yes. Warmth, location, and hours are applied to both options alike, and 'early risers' explains why the hours criterion weighs lightly. A ranking with visible criteria and visible weights can be checked — that's its virtue.",
        },
        {
          id: "cq-g1-b",
          text: "The schoolroom is simply the traditional choice for choirs.",
          isCorrect: false,
          feedback:
            "Tradition appears nowhere in the reasoning. The ranking is earned by criteria, which is exactly what separates comparison from habit.",
        },
        {
          id: "cq-g1-c",
          text: "The conductor tried both rooms and projected the pattern forward.",
          isCorrect: false,
          feedback:
            "No trial or track record is mentioned — that would be inductive. The options are ranked on their stated features, side by side.",
        },
      ],
    },
    {
      id: "cq-g2",
      passage: [
        "Comparing the two ferry routes, the clerk's table gave the north passage better time, better shelter, and better moorings.",
        "The pilot added one line to the table: the north passage crosses the bar, and the bar has sunk boats.",
        "The ranking held, the pilot allowed — but the table without that line had been a different, easier argument.",
      ],
      prompt: "What did the pilot's line change about the comparison?",
      hint: "Rankings depend on which criteria are allowed in.",
      choices: [
        {
          id: "cq-g2-a",
          text: "It completed the criteria — a comparison that omits a relevant criterion ranks a fiction.",
          isCorrect: true,
          feedback:
            "Right. The commonest way comparisons mislead isn't bad scoring but a missing column. Testing a ranking means asking not just 'are these scores fair?' but 'is anything that matters absent from the table?'",
        },
        {
          id: "cq-g2-b",
          text: "It proved the south passage better after all.",
          isCorrect: false,
          feedback:
            "The ranking held — the pilot said so. The point isn't a reversed verdict but an honest table: three-for-three became three-to-one, a different strength of conclusion.",
        },
        {
          id: "cq-g2-c",
          text: "It replaced the comparison with the pilot's expert say-so.",
          isCorrect: false,
          feedback:
            "The pilot added a criterion for the table to weigh, not a verdict to defer to. The reasoning stayed comparative; it just got a fourth column.",
        },
      ],
    },
    {
      id: "cq-g3",
      passage: [
        "'Our harbor is better than Saltmarsh's,' the alderman declared, 'as anyone with eyes can see.'",
        "The harbormaster asked mildly: better for shelter, for depth, for trade, or for painting pictures of?",
      ],
      prompt: "What is the harbormaster's question doing?",
      hint: "Compare it to the horse-dealer's refusal.",
      choices: [
        {
          id: "cq-g3-a",
          text: "Forcing a bare 'better' to name its criteria, without which the claim can't be assessed.",
          isCorrect: true,
          feedback:
            "Exactly. 'Better' without criteria isn't yet a comparison — it's an applause line. The question converts a slogan into something that could be true or false, one criterion at a time.",
        },
        {
          id: "cq-g3-b",
          text: "Mocking the alderman to win the exchange.",
          isCorrect: false,
          feedback:
            "The tone may be dry, but the move is substantive: no criteria, no comparison. Answer the question and a real ranking can begin.",
        },
        {
          id: "cq-g3-c",
          text: "Denying that harbors can ever be compared.",
          isCorrect: false,
          feedback:
            "Quite the opposite — the question lists four ways the comparison could proceed. It insists on the machinery, not against it.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "cq-m1",
      passage: [
        "Of the two mill sites, the upper falls offered more head of water and firmer footings; the lower falls offered a shorter cart road.",
        "Power and foundations counting for more than cartage, the surveyor ranked the upper falls the better site.",
      ],
      options: ["comparative", "practical", "analogical"],
      correctLabel: "comparative",
      explanation:
        "Named criteria, both options scored, weights declared, ranking concluded. (Choosing to build there would be the practical step after.)",
    },
    {
      id: "cq-m2",
      passage: [
        "Grayford's mill, on falls much like our upper falls, has run sixty years without a footing repair.",
        "A mill on our upper falls would probably prove as durable.",
      ],
      options: ["analogical", "comparative", "inductive"],
      correctLabel: "analogical",
      explanation:
        "One case's outcome is transferred to another via a relevant likeness. Nothing is being ranked — a property is being carried across.",
    },
    {
      id: "cq-m3",
      passage: [
        "The committee set the three bell-founders side by side: on price, on delivery, and on the sound of bells already hung.",
        "Harrow's foundry stood first on sound, second on price, first on delivery — and first over all.",
      ],
      options: ["comparative", "authority", "conductive"],
      correctLabel: "comparative",
      explanation:
        "Rivals ordered along shared criteria into an overall ranking. The reasoning weighs *options against options* — not independent reasons for one conclusion, which is conductive's territory (next chapter).",
    },
    {
      id: "cq-m4",
      passage: [
        "To hang the new bell before the frosts, the tower work must start this month.",
        "So the masons should be engaged this week.",
      ],
      options: ["practical", "comparative", "deductive"],
      correctLabel: "practical",
      explanation:
        "A goal and its timing constraint select an action. No rivals are ranked; a deadline is served.",
    },
    {
      id: "cq-m5",
      passage: [
        "The schoolmistress compared the two primers page by page: the older drilled letters sooner, the newer held attention longer, and neither was stronger on sums.",
        "For a schoolroom that loses children to the window, she judged the newer primer the better of the pair.",
      ],
      options: ["comparative", "moral", "claim-support"],
      correctLabel: "comparative",
      explanation:
        "Criteria (drills, attention, sums), scores for both, and a weighting justified by her classroom's actual need. A ranking with its work shown.",
    },
  ],
  unlockChallenge: [
    {
      id: "cq-u1",
      passage: [
        "Judged on keeping through winter, on flavor, and on yield, the russet outranked the pippin in two counts of three.",
        "The orchard book listed the russet the better apple for the cold barns.",
      ],
      options: ["comparative", "inductive", "analogical"],
      correctLabel: "comparative",
      explanation:
        "Shared criteria, both varieties scored, a qualified ranking ('for the cold barns'). Comparison with its table visible.",
    },
    {
      id: "cq-u2",
      passage: [
        "The pippin has kept poorly in our barn every winter we've stored it.",
        "It will probably keep poorly again this year.",
      ],
      options: ["inductive", "comparative", "practical"],
      correctLabel: "inductive",
      explanation:
        "One option's own track record projected forward — no second option, no criteria, no ranking.",
    },
    {
      id: "cq-u3",
      passage: [
        "Between the two offers for the wool clip, the mill's paid more; the merchant's paid sooner and in coin.",
        "With the loan due in coin at Michaelmas, the shepherd ranked the merchant's offer better — the higher price losing to the harder criterion.",
      ],
      options: ["comparative", "practical", "moral"],
      correctLabel: "comparative",
      explanation:
        "Two offers, criteria named, and an explicit weighting driven by circumstance. The ranking is the conclusion; acting on it comes after.",
    },
  ],
};
