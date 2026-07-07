import type { Lesson } from "@/domain/types";

export const classificationLesson: Lesson = {
  id: "classification",
  title: "Classification reasoning",
  status: "ready",
  labelIds: ["classification"],
  definition:
    "Classification reasoning places a case into a category and draws conclusions from what is known of the category's members: identify the marks, sort the case, inherit the traits. Its strength hangs on two hinges — whether the case truly belongs, and whether the inherited trait truly runs through the category.",
  memoryHook: "Sort it, then inherit the category's traits.",
  soundsLike: [
    "Round stem, so it's a rush — expect the pith.",
    "That's no moth; see the clubbed feelers? Butterfly, and day-flying.",
    "This clause makes it a lease, and leases can be assigned.",
  ],
  workedExamples: [
    {
      id: "cx-w1",
      title: "The mushroom's family",
      passage: [
        "The forager turned the mushroom over: gills running down the stem, a fluted cap, flesh smelling faintly of apricot.",
        "Those are the chanterelle's marks, and the chanterelle keeps no poisonous kin in these woods that share all three.",
        "Sorted into that family, the find inherited the family's reputation, and went into the basket.",
      ],
      explanation:
        "The reasoning has three visible steps: marks observed, category assigned, trait inherited. Note where the care goes — 'no poisonous kin that share all three' checks the sorting hinge (could these marks belong to something else?), which is where classification arguments live or die.",
    },
    {
      id: "cx-w2",
      title: "Sorting a document",
      passage: [
        "The paper granted exclusive use of the mill for seven years at a yearly rent — whatever its heading said, those are the marks of a lease.",
        "Leases in this county survive the sale of the property; licenses do not.",
        "So when the mill was sold, the sorting settled the tenant's fate: the paper being a lease, her seven years survived the sale.",
      ],
      explanation:
        "Categories carry consequences — that's why sorting matters. The document is classified by its features, not its label ('whatever its heading said'), and then inherits the legal traits of its true category. Classification often does quiet work inside law, medicine, and natural history alike.",
    },
  ],
  guidedExamples: [
    {
      id: "cx-g1",
      passage: [
        "The bird on the wire had a notched tail and rusty throat: a swallow, not the martin the children claimed.",
        "Swallows in this valley leave by the first week of October.",
        "So the wire would be empty within the fortnight.",
      ],
      prompt: "What are the two hinges this argument turns on?",
      hint: "One hinge is about the bird; the other is about the category.",
      choices: [
        {
          id: "cx-g1-a",
          text: "Whether the marks truly make it a swallow, and whether the leaving-date truly holds for swallows.",
          isCorrect: true,
          feedback:
            "Yes — sorting and inheritance, the two places a classification argument can fail. Notched tail and rusty throat settle the first; the valley's records settle the second. Check both hinges and the conclusion rides.",
        },
        {
          id: "cx-g1-b",
          text: "Whether the children can be trusted, and whether the wire is comfortable.",
          isCorrect: false,
          feedback:
            "The children's claim is corrected by the marks, not by their character — the argument runs on features and categories, and the wire's comfort touches neither hinge.",
        },
        {
          id: "cx-g1-c",
          text: "Whether birds cause autumn, and whether autumn causes birds.",
          isCorrect: false,
          feedback:
            "No causal claim is made. The date comes to this bird by membership — swallows leave then, this is a swallow — not by anything the bird causes.",
        },
      ],
    },
    {
      id: "cx-g2",
      passage: [
        "The apprentice sorted the crate's contents as 'brass' by the color and rang up the brass rate.",
        "The founder weighed one fitting in her palm, scratched it, and re-sorted: bronze — heavier, and cutting duller.",
        "Same crate, new category, and a different price, melting point, and buyer followed it out the door.",
      ],
      prompt: "What lesson about classification does the founder's correction teach?",
      hint: "Where did the apprentice's sorting go wrong — and how much followed from it?",
      choices: [
        {
          id: "cx-g2-a",
          text: "Sorting on too few marks risks the wrong category — and every inherited trait goes wrong with it.",
          isCorrect: true,
          feedback:
            "Exactly. Color alone under-determines the category; weight and hardness discriminate. And because traits arrive by inheritance, one bad sort corrupts everything downstream — price, melting point, buyer. The sort is load-bearing.",
        },
        {
          id: "cx-g2-b",
          text: "Founders outrank apprentices, so her category wins.",
          isCorrect: false,
          feedback:
            "Her sort wins by the scratch test and the heft, not the rank. Anyone with the marks in hand could have corrected it — classification answers to features.",
        },
        {
          id: "cx-g2-c",
          text: "Categories are arbitrary, so either sort was fine.",
          isCorrect: false,
          feedback:
            "The melting point disagrees. Where categories track real differences, sorting wrongly has real costs — which is precisely why the marks deserve care.",
        },
      ],
    },
    {
      id: "cx-g3",
      passage: [
        "'It's a weed,' said the new gardener, reaching for the fork.",
        "'Sorted how?' asked the old one. 'By where it grows, everything here was a weed once.'",
        "The plant, examined, bore the marks of the kitchen sage the last tenant let run wild — and stayed.",
      ],
      prompt: "What was wrong with the new gardener's classification?",
      hint: "What marks was 'weed' sorted on?",
      choices: [
        {
          id: "cx-g3-a",
          text: "'Weed' was assigned without discriminating marks — the category came first and the features never got consulted.",
          isCorrect: true,
          feedback:
            "Right. A sort that consults no marks isn't classification but labeling. The old gardener's question — 'sorted how?' — is the challenge every classification must survive: name the features that put the case in the class.",
        },
        {
          id: "cx-g3-b",
          text: "Weeds don't exist, so nothing can be sorted as one.",
          isCorrect: false,
          feedback:
            "The category is real enough for working purposes — unwanted, outcompeting, self-sown. The failure was applying it by reflex rather than by marks.",
        },
        {
          id: "cx-g3-c",
          text: "The new gardener lacked the authority to classify plants.",
          isCorrect: false,
          feedback:
            "No license is needed — only marks. The old gardener didn't pull rank; he pulled a question the sort couldn't answer.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "cx-m1",
      passage: [
        "The snake in the woodpile had round pupils and no rattle: a harmless grass snake by every mark in the warden's book.",
        "Grass snakes bite nothing they can't swallow, so the hens were in no danger.",
      ],
      options: ["classification", "deductive", "definitional"],
      correctLabel: "classification",
      explanation:
        "Marks observed, category assigned from the warden's book, trait inherited to settle the practical worry. Sort-then-inherit throughout.",
    },
    {
      id: "cx-m2",
      passage: [
        "The bylaw defines 'livestock' as animals kept for produce or draught.",
        "The peacock is kept for neither, only for glory.",
        "So the peacock is no livestock within the bylaw, whatever the tax collector hopes.",
      ],
      options: ["definitional", "classification", "conceptual"],
      correctLabel: "definitional",
      explanation:
        "The question is the reach of a stipulated term, settled by the bylaw's own wording. Classification sorts by natural marks into kinds; this pins a word.",
    },
    {
      id: "cx-m3",
      passage: [
        "The timbers rang hollow to the knock and showed the honeycomb of old worm — the marks, said the shipwright, of what the yards call biscuit oak.",
        "Biscuit oak holds paint and fails fastenings.",
        "So she'd repaint the transom gladly and trust no bolt driven into it.",
      ],
      options: ["classification", "causal", "analogical"],
      correctLabel: "classification",
      explanation:
        "The timber is sorted into a known kind by its marks, and two of the kind's traits — one reassuring, one damning — are inherited to guide the work.",
    },
    {
      id: "cx-m4",
      passage: [
        "Every hull the yard has sheathed in the new copper has come back clean of worm.",
        "The Merle, sheathed last spring, will probably come back clean too.",
      ],
      options: ["inductive", "classification", "statistical"],
      correctLabel: "inductive",
      explanation:
        "A track record projected onto the next case. No sorting by marks into a kind — the Merle's membership was never in question, only the pattern's continuation.",
    },
    {
      id: "cx-m5",
      passage: [
        "The seed heads nodded on one side only, and the stems wore a bloom you could wipe with a thumb: oats, not the barley the sacks claimed.",
        "Oats want an earlier sowing here, so the field plan moved forward a fortnight.",
      ],
      options: ["classification", "abductive", "practical"],
      correctLabel: "classification",
      explanation:
        "Mislabelled sacks are overruled by marks; the grain is re-sorted, and the category's sowing habits are inherited into the plan. (The plan's shift is downstream — the reasoning that matters happened at the sort.)",
    },
  ],
  unlockChallenge: [
    {
      id: "cx-u1",
      passage: [
        "Five petals, thorned canes, hips forming where the flowers had been: the hedge was a dog rose, not the bramble the map marked.",
        "Dog rose takes hard cutting and comes back kinder for it, so the hedge was cut hard without a qualm.",
      ],
      options: ["classification", "definitional", "inductive"],
      correctLabel: "classification",
      explanation:
        "Marks overrule the map, the plant is sorted, and the kind's known tolerance of hard cutting is inherited into the decision.",
    },
    {
      id: "cx-u2",
      passage: [
        "By the harbor rules, any vessel over ten meters must carry a stern light.",
        "The Merle runs eleven meters.",
        "So the Merle must carry a stern light.",
      ],
      options: ["deductive", "classification", "claim-support"],
      correctLabel: "deductive",
      explanation:
        "A clear rule applied to an uncontested measurement — no sorting by marks was needed. When membership is given, application is deduction.",
    },
    {
      id: "cx-u3",
      passage: [
        "The jar's honey had set hard and white within the month, with a bloom like lard.",
        "Rape honey does exactly that, and rape honey is honey for all purposes but the connoisseur's.",
        "So the jar was sorted to the cooking shelf, not the bin.",
      ],
      options: ["classification", "causal", "statistical"],
      correctLabel: "classification",
      explanation:
        "The setting behavior is a sorting mark; the jar joins the rape-honey kind and inherits both its standing (honest honey) and its station (the cooking shelf).",
    },
  ],
};
