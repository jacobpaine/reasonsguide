import type { Lesson } from "@/domain/types";

export const conductiveLesson: Lesson = {
  id: "conductive",
  title: "Conductive reasoning",
  status: "ready",
  labelIds: ["conductive"],
  definition:
    "Conductive reasoning weighs several independent reasons — often on both sides — to reach a verdict that no single reason could carry alone. Each reason counts on its own; remove one and the others still count; the conclusion rests on the balance.",
  memoryHook: "Many small reasons, weighed together.",
  soundsLike: [
    "Taking everything together…",
    "On the one hand…, on the other…, and on balance…",
    "No one thing decides it, but it all points the same way.",
  ],
  workedExamples: [
    {
      id: "cu-w1",
      title: "Taking the cottage",
      passage: [
        "For the cottage: the rent was fair, the light was good for her mending work, and her sister lived two lanes off.",
        "Against it: the roof wanted patching and the well was shared.",
        "None of the five settled it alone, but weighed together the fors outweighed the againsts, and Ede took the cottage.",
      ],
      explanation:
        "Five independent considerations, each standing on its own feet — the good light would count even if the rent were dear. The conclusion comes from the balance, and honest conductive reasoning shows the against-side too. Contrast a deductive argument, which one broken premise destroys: here you could strike any single reason and the verdict might well survive.",
    },
    {
      id: "cu-w2",
      title: "Independence is the point",
      passage: [
        "The vestry heard four reasons to keep the old organ: it was sound at the last inspection, the organist knew its temperament, replacement would cost three roofs' worth, and it had been the gift of a founding family.",
        "The treasurer noted that these were four separate reasons, not one reason said four ways — cost would count even if sentiment vanished, and sentiment even if costs fell.",
        "Weighed together, with no strong reason against, the organ stayed.",
      ],
      explanation:
        "The treasurer's observation names conductive reasoning's engine: independence. Four restatements of one reason make a chorus, not a case. Four genuinely separate reasons accumulate — each survives the others' failure — which is why the form is sometimes called cumulative reasoning.",
    },
  ],
  guidedExamples: [
    {
      id: "cu-g1",
      passage: [
        "Should the fair move to the water meadow?",
        "For: more room, firmer cart access, and the river for the children.",
        "Against: the walk from the village, and old Han's grazing lease.",
        "The council took the move, judging the fors heavier — and paid Han for the season.",
      ],
      prompt: "What marks this as conductive rather than a single-reason argument?",
      hint: "Try deleting any one reason. What happens to the conclusion?",
      choices: [
        {
          id: "cu-g1-a",
          text: "The verdict rests on the balance of several independent reasons, and would survive losing any one of them.",
          isCorrect: true,
          feedback:
            "Yes. Each reason weighs by itself; the conclusion belongs to the pile, not to any brick. Note the honest ledger — reasons against are counted, then outweighed, not hidden.",
        },
        {
          id: "cu-g1-b",
          text: "The room, the access, and the river are really one reason: the meadow is bigger.",
          isCorrect: false,
          feedback:
            "Cart access and the river aren't size restated — a bigger meadow could have had boggy access and no river. Testing independence is the right instinct, though; here it passes.",
        },
        {
          id: "cu-g1-c",
          text: "The council ranked the meadow against the square on named criteria.",
          isCorrect: false,
          feedback:
            "Close cousin, different shape: comparative reasoning scores rival options criterion by criterion. This argument gathers reasons for and against one proposal and weighs the heap.",
        },
      ],
    },
    {
      id: "cu-g2",
      passage: [
        "Counsel for the mill listed six reasons the accounts were sound.",
        "The auditor read them twice and observed that four of the six were the same reason — 'the books balance' — wearing different coats.",
        "Six reasons had become three, and the case, while still fair, was lighter than its list.",
      ],
      prompt: "What weakness in a conductive argument did the auditor find?",
      hint: "Count the reasons the way the auditor did.",
      choices: [
        {
          id: "cu-g2-a",
          text: "Padding — restated reasons masquerading as independent ones inflate the apparent weight.",
          isCorrect: true,
          feedback:
            "Exactly. Conductive strength comes from genuinely separate supports, so the first audit of any 'many reasons' argument is to merge duplicates. The case survived, but at its true weight.",
        },
        {
          id: "cu-g2-b",
          text: "A false premise — one of the six reasons was untrue.",
          isCorrect: false,
          feedback:
            "No reason was shown false; four were shown identical. Truth and independence are separate audits, and this one was about independence.",
        },
        {
          id: "cu-g2-c",
          text: "A missing criterion that the comparison should have included.",
          isCorrect: false,
          feedback:
            "Nothing is being compared to a rival here. The flaw is internal to the pile of reasons — double-counting — not a missing column in a table.",
        },
      ],
    },
    {
      id: "cu-g3",
      passage: [
        "Arguing for the sea wall, the engineer gave the tides, the insurance ledgers, and the memory of the '09 flood.",
        "Arguing against, the fishermen gave the cost and the loss of the shingle beach.",
        "The chairman ruled the wall approved 'because the tides settle it' — and the engineer, oddly, objected: the tides alone settled nothing; it was the whole weight together that carried.",
      ],
      prompt: "Why would the engineer object to winning that way?",
      hint: "What happens to a verdict that leans on one reason if that reason weakens?",
      choices: [
        {
          id: "cu-g3-a",
          text: "A conclusion credited to one reason stands or falls with it; credited to the balance, it's sturdier and more honest.",
          isCorrect: true,
          feedback:
            "Right. If new tide tables soften that single pillar, a one-reason ruling collapses. The conductive case — tides AND ledgers AND history, against cost AND shingle — survives partial damage. Getting the *shape* of the win right matters for the day the facts shift.",
        },
        {
          id: "cu-g3-b",
          text: "The engineer wanted the fishermen's reasons ignored entirely.",
          isCorrect: false,
          feedback:
            "The opposite — the balance the engineer invokes includes the against-side. Counting opposing reasons and outweighing them is conductive reasoning at its most honest.",
        },
        {
          id: "cu-g3-c",
          text: "Because the tides argument was actually false.",
          isCorrect: false,
          feedback:
            "The tides argument was sound. The objection is structural: even a sound reason shouldn't be promoted to sole bearer of a verdict that many reasons earned.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "cu-m1",
      passage: [
        "The ferry should keep its winter service: the mainland doctor comes by it, the egg trade depends on it, the crew would scatter if laid off, and the subsidy covers most of the loss.",
        "Any one of these might be answered; together, the harbor board found them decisive.",
      ],
      options: ["conductive", "claim-support", "practical"],
      correctLabel: "conductive",
      explanation:
        "Four independent reasons explicitly weighed as a body — the board itself notes no single one carries it. That's the conductive signature.",
    },
    {
      id: "cu-m2",
      passage: [
        "The winter ferry should be kept.",
        "Without it, the island has no doctor from November to March.",
      ],
      options: ["claim-support", "conductive", "moral"],
      correctLabel: "claim-support",
      explanation:
        "One claim, one supporting reason. Conductive reasoning needs several independent weights and, typically, a visible balance.",
    },
    {
      id: "cu-m3",
      passage: [
        "For closing the quarry road in thaw season: the slides of the last two springs, the cost of clearing them, and the schoolchildren who walk beneath the cut.",
        "Against: the two farms that must go the long way round.",
        "On balance, the surveyor recommended closure, the long way round being an inconvenience and the cut being a danger.",
      ],
      options: ["conductive", "comparative", "causal"],
      correctLabel: "conductive",
      explanation:
        "Reasons for and against one proposal, weighed to a verdict with the weighing shown. (Comparative reasoning would rank rival options; here there's one proposal and a ledger.)",
    },
    {
      id: "cu-m4",
      passage: [
        "Judged on draught, on cargo room, and on handling in a chop, the ketch ranked ahead of the sloop for the island run.",
      ],
      options: ["comparative", "conductive", "analogical"],
      correctLabel: "comparative",
      explanation:
        "Two rival options scored on named criteria into a ranking — a table, not a ledger of pros and cons for one proposal.",
    },
    {
      id: "cu-m5",
      passage: [
        "That the hives should move before the spraying: the drift maps say so, last year's losses say so, and the beekeeper's association says so.",
        "Each alone is answerable — maps err, one bad year proves little, associations are cautious by trade — but all three together moved the hives.",
      ],
      options: ["conductive", "authority", "inductive"],
      correctLabel: "conductive",
      explanation:
        "Three independent supports — a model, a track record, an expert body — none decisive, all counted. The explicit 'each alone is answerable' is conductive reasoning talking about itself.",
    },
  ],
  unlockChallenge: [
    {
      id: "cu-u1",
      passage: [
        "For mending the church clock: the market runs by it, the smith has the parts at hand, and the tower must be scaffolded this summer anyway for the leads.",
        "Against: the cost, in a lean year.",
        "The vestry judged the fors together heavier than the lean year, and the clock was mended.",
      ],
      options: ["conductive", "claim-support", "practical"],
      correctLabel: "conductive",
      explanation:
        "Independent reasons on both sides, a stated balance, a verdict owned by the whole ledger.",
    },
    {
      id: "cu-u2",
      passage: [
        "On price, the two clockmakers matched; on speed, the nearer man won; on the word of other parishes, the farther man.",
        "Weighting the parishes' word heaviest, the vestry ranked the farther man first.",
      ],
      options: ["comparative", "conductive", "authority"],
      correctLabel: "comparative",
      explanation:
        "Two rivals, three shared criteria, declared weights, a ranking. The options are being ordered against each other — comparison, not accumulation.",
    },
    {
      id: "cu-u3",
      passage: [
        "Ana weighed staying the winter: the work was steady, the loft was warm, and the harbor company suited her.",
        "Against these, only the letter from home, which pulled harder than all three together.",
        "She judged the balance honestly and bought her ticket south.",
      ],
      options: ["conductive", "moral", "abductive"],
      correctLabel: "conductive",
      explanation:
        "The verdict goes *against* the more numerous reasons — a reminder that conductive weighing counts heaviness, not heads. Three light reasons lost to one heavy one, and the reasoning showed its scale.",
    },
  ],
};
