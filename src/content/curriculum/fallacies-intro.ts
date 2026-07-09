import type { Lesson } from "@/domain/types";

export const fallaciesIntroLesson: Lesson = {
  id: "fallacies-intro",
  title: "When reasoning breaks: first fallacies",
  status: "ready",
  labelIds: ["hasty-generalization", "post-hoc", "anecdotal-evidence"],
  definition:
    "A fallacy is not a new kind of reasoning — it is a familiar kind of reasoning gone wrong. Hasty generalization is induction with too few cases. Post hoc is causal reasoning that mistakes sequence for cause. Anecdotal evidence is statistical reasoning that lets one vivid story outweigh the numbers. Because you can now recognize the healthy forms, you can recognize their failure modes.",
  memoryHook: "A fallacy is good reasoning's shape with the strength missing.",
  soundsLike: [
    "I tried it once and it was terrible, so they all are. (hasty generalization)",
    "Right after we changed X, Y happened — so X did it. (post hoc)",
    "Forget the studies; my uncle smoked for sixty years and was fine. (anecdotal evidence)",
  ],
  workedExamples: [
    {
      id: "fi-w1",
      title: "Induction, then its failure",
      passage: [
        "Compare two arguments about the same orchard.",
        "First: we sampled apples from forty trees across every row, and all were sweet — so the crop is probably sweet.",
        "Second: the first apple I tried was sour, so the whole crop is bad.",
        "Both have induction's shape: cases, then a generalization.",
        "The second is a hasty generalization — one case, from one tree, carrying a conclusion about thousands.",
      ],
      explanation:
        "The failure isn't in the shape but in the support. Induction earns its conclusion with enough varied cases; hasty generalization borrows the shape without paying. Spotting it means asking one question: how many cases, and how varied?",
    },
    {
      id: "fi-w2",
      title: "Cause, then its failure",
      passage: [
        "The town installed new streetlights in March, and in April the pothole complaints doubled.",
        "A councilor argued the bright lights were damaging the asphalt.",
        "In fact, April is when the frost heave ends and every pothole of winter is revealed.",
        "The councilor's argument is post hoc: B followed A, therefore A caused B.",
      ],
      explanation:
        "Causal reasoning needs a mechanism or a test — cover the lights, compare unlit streets, something. Post hoc offers only the calendar. Sequence is where causal investigation starts; treating it as where the investigation ends is the fallacy.",
    },
  ],
  guidedExamples: [
    {
      id: "fi-g1",
      passage: [
        "Bea's cousin visited the coast once, in a storm, and pronounces the whole region dreary.",
      ],
      prompt: "Which healthy form of reasoning is failing here, and how?",
      hint: "What is the conclusion generalizing from?",
      choices: [
        {
          id: "fi-g1-a",
          text: "Induction — one stormy visit can't support a claim about the whole region.",
          isCorrect: true,
          feedback:
            "Yes: hasty generalization. The shape is inductive (case → general claim), but a single unrepresentative case can't carry the weight.",
        },
        {
          id: "fi-g1-b",
          text: "Deduction — the cousin's rule about coasts is false.",
          isCorrect: false,
          feedback:
            "No rule is being applied. The cousin argues from an experience to a generalization — that's induction's shape, undernourished.",
        },
        {
          id: "fi-g1-c",
          text: "Causal reasoning — the storm didn't cause the dreariness.",
          isCorrect: false,
          feedback:
            "No cause-and-effect claim is made. The problem is a generalization built on one case.",
        },
      ],
    },
    {
      id: "fi-g2",
      passage: [
        "Tomas started wearing a copper bracelet on Monday.",
        "By Friday his shoulder felt better, so he credits the bracelet.",
      ],
      prompt: "What is missing from Tomas's causal reasoning?",
      hint: "What else could explain a shoulder improving over a week?",
      choices: [
        {
          id: "fi-g2-a",
          text: "Any check against rival explanations — rest and time were never ruled out.",
          isCorrect: true,
          feedback:
            "Right: post hoc. Sore shoulders often mend in a week on their own. 'After' is not 'because' until the rivals — healing, rest, coincidence — are addressed.",
        },
        {
          id: "fi-g2-b",
          text: "A larger sample of copper bracelets.",
          isCorrect: false,
          feedback:
            "More bracelets wouldn't fix the core problem: nothing connects this bracelet to this shoulder beyond the calendar.",
        },
        {
          id: "fi-g2-c",
          text: "Nothing — improvement after use is good evidence of cause.",
          isCorrect: false,
          feedback:
            "Sequence alone is where causal questions begin, not where they're settled. That leap is precisely the post hoc fallacy.",
        },
      ],
    },
    {
      id: "fi-g3",
      passage: [
        "The village surveyed 300 households: the new bus route saves riders forty minutes a day on average.",
        "At the meeting, one man told a long story about the morning the new bus broke down.",
        "The room voted to call the route 'unreliable'.",
      ],
      prompt: "What went wrong in the room's reasoning?",
      hint: "What did the vivid story displace?",
      choices: [
        {
          id: "fi-g3-a",
          text: "One memorable story outweighed a 300-household measurement.",
          isCorrect: true,
          feedback:
            "Yes: anecdotal evidence. The story is true and vivid — and it is one data point standing against three hundred. Vividness is not weight.",
        },
        {
          id: "fi-g3-b",
          text: "The survey was too small to mean anything.",
          isCorrect: false,
          feedback:
            "Three hundred households is a solid sample for a village. The failure was letting a single anecdote override it.",
        },
        {
          id: "fi-g3-c",
          text: "The man's story was probably false.",
          isCorrect: false,
          feedback:
            "The story may well be true. Anecdotal evidence isn't about lying — it's about giving one case the weight of many.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "fi-m1",
      passage: [
        "The new intern misfiled one folder on her first morning.",
        "The registrar concluded she was careless and couldn't be trusted with the archive.",
      ],
      options: ["hasty-generalization", "post-hoc", "anecdotal-evidence"],
      correctLabel: "hasty-generalization",
      explanation: "A sweeping character conclusion from a single case — induction's shape with one data point.",
    },
    {
      id: "fi-m2",
      passage: [
        "The choir switched to the new hymnals in October.",
        "In November two sopranos caught colds, and the director blamed the hymnals' dusty pages.",
      ],
      options: ["post-hoc", "hasty-generalization", "anecdotal-evidence"],
      correctLabel: "post-hoc",
      explanation:
        "Colds followed the hymnals, therefore the hymnals — sequence standing in for cause, with November's usual colds never considered.",
    },
    {
      id: "fi-m3",
      passage: [
        "Trials involving thousands of patients show the tonic performs no better than water.",
        "But Mrs. Alberti swears it cured her nephew, so the shop keeps recommending it.",
      ],
      options: ["anecdotal-evidence", "post-hoc", "hasty-generalization"],
      correctLabel: "anecdotal-evidence",
      explanation: "One vivid testimonial set against large trials — and allowed to win.",
    },
    {
      id: "fi-m4",
      passage: [
        "We sampled bread from every bakery in the quarter, twice each month, for a year.",
        "The rye consistently rated highest.",
        "The quarter's best everyday loaf is probably the rye.",
      ],
      options: ["inductive", "hasty-generalization", "anecdotal-evidence"],
      correctLabel: "inductive",
      explanation:
        "This one is healthy: many varied samples over a year, a measured conclusion with 'probably'. Not every generalization is hasty.",
    },
    {
      id: "fi-m5",
      passage: [
        "The gallery moved its opening to Thursdays and attendance rose.",
        "The curator checked: a rival gallery closed the same month, and its regulars migrated over.",
        "She credits the rival's closure, not the new night, for most of the rise.",
      ],
      options: ["causal", "post-hoc", "anecdotal-evidence"],
      correctLabel: "causal",
      explanation:
        "Healthy causal reasoning: the timing coincidence was investigated, and a rival cause turned out to fit the evidence better.",
    },
  ],
  unlockChallenge: [
    {
      id: "fi-u1",
      passage: [
        "A tourist was short-changed once at the harbor market.",
        "He now warns everyone that the town's merchants are dishonest.",
      ],
      options: ["hasty-generalization", "post-hoc", "anecdotal-evidence"],
      correctLabel: "hasty-generalization",
      explanation: "One incident, one merchant — generalized to every merchant in town.",
    },
    {
      id: "fi-u2",
      passage: [
        "The inn repainted its sign on Friday, and bookings rose over the weekend.",
        "The innkeeper is now sure the sign did it, though a festival filled every inn in the county that weekend.",
      ],
      options: ["post-hoc", "anecdotal-evidence", "hasty-generalization"],
      correctLabel: "post-hoc",
      explanation: "Bookings followed the repaint, so the repaint gets credit — while an obvious rival cause goes ignored.",
    },
    {
      id: "fi-u3",
      passage: [
        "Regional records show the mountain road is the safest route by every measure.",
        "But a neighbor's harrowing story about one icy drive convinced the family the road is a death trap.",
      ],
      options: ["anecdotal-evidence", "hasty-generalization", "post-hoc"],
      correctLabel: "anecdotal-evidence",
      explanation: "A single dramatic story outweighs the records — vividness beating measurement.",
    },
    {
      id: "fi-u4",
      passage: [
        "The first three customers at a new coffee cart all ordered oat milk.",
        "The owner immediately quadrupled her oat milk order and halved her regular-milk supply, convinced she had identified the neighborhood's clear preference.",
      ],
      options: ["hasty-generalization", "post-hoc", "anecdotal-evidence"],
      correctLabel: "hasty-generalization",
      explanation:
        "Three customers at the start of one morning can't support a claim about a neighborhood's preference. The generalization has induction's shape — cases to a general conclusion — but far too few and unrepresentative cases to carry it.",
    },
    {
      id: "fi-u5",
      passage: [
        "A software team tracked which bug categories slipped past testing over eighteen months.",
        "Memory-leak bugs appeared in production in 11 of 15 releases, across different engineers and code bases.",
        "The team concluded that memory leaks were their most persistent category of slip and added a mandatory memory-profiling step to the release checklist.",
      ],
      options: ["inductive", "hasty-generalization", "post-hoc"],
      correctLabel: "inductive",
      explanation:
        "Many releases tracked over eighteen months, a precise count across varied conditions, and a proportionate response — this is induction earning its conclusion. Unlike hasty generalization, the pattern here is genuinely well-supported before the inference is drawn.",
    },
    {
      id: "fi-u6",
      passage: [
        "After speed bumps were installed in June, the number of pedestrians counted crossing the main road rose by 30 percent in July and August.",
        "The transport committee attributed the increase to the speed bumps, without investigating whether school-holiday traffic patterns, a new crossing signal, or nearby road closures might account for it.",
      ],
      options: ["post-hoc", "anecdotal-evidence", "causal"],
      correctLabel: "post-hoc",
      explanation:
        "Speed bumps came before the rise in crossings, so the committee credits them — but no rival explanations were examined. Sequence is where causal investigation begins, not where it ends; treating it as sufficient is the post hoc fallacy.",
    },
  ],
};
