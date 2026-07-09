import type { Lesson } from "@/domain/types";

export const dialecticalLesson: Lesson = {
  id: "dialectical",
  title: "Dialectical reasoning",
  status: "ready",
  labelIds: ["dialectical"],
  definition:
    "Dialectical reasoning refines a position by taking objections seriously: state the view, meet the strongest counterargument fairly, and defend or amend in response. Its product is not victory but a better position — one that carries its objections' scars as credentials.",
  memoryHook: "A view earns its keep by answering objections.",
  soundsLike: [
    "The strongest objection to this is… — and here is why it doesn't hold.",
    "You're right about the cost; the plan should change to meet it.",
    "Let me put your point in its best form before I answer it.",
  ],
  workedExamples: [
    {
      id: "dl-w1",
      title: "The plan that improved under fire",
      passage: [
        "The warden proposed closing the cliff path each winter, for the ice.",
        "The strongest objection came from the shore cottagers: the path was their short way to the school, and winter was exactly when the long way flooded.",
        "The warden granted the point in full and amended: closed in ice weather only, with the flood road's state posted at both ends.",
        "The cottagers, whose objection had built half of it, voted for the amended plan.",
      ],
      explanation:
        "Watch what the objection does: it isn't deflected or endured but *used* — the final plan contains it. Dialectical reasoning treats opposition as material. The tell is amendment traceable to the objection, and an objector who can find their point honored inside the result.",
    },
    {
      id: "dl-w2",
      title: "Strengthening the objection first",
      passage: [
        "Arguing for the new seed, the agent first stated the case against it better than its opponents had: dearer by a third, untried in clay, and a bad year would fall hardest on the smallest farms.",
        "Then she answered each in order — the yield paid the difference in one harvest, the clay trials were running now, and the cooperative would carry the smallest farms' risk the first year.",
        "The seed carried the meeting, having first survived the best case against it.",
      ],
      explanation:
        "The agent argues against herself before arguing for herself — the objections in their strongest form, then the answers. A position that has met the best opposition earns a different kind of confidence than one that met none. That deliberate strengthening of the other side is dialectical reasoning's most honest habit.",
    },
  ],
  guidedExamples: [
    {
      id: "dl-g1",
      passage: [
        "Petra argued the archive should lend its maps to the school.",
        "The archivist objected that schoolchildren's hands would be the end of century-old paper.",
        "Petra revised: facsimiles for the classroom, originals viewable under glass on visits — and asked the archivist whether the objection was now met.",
        "It was, said the archivist, and better than met.",
      ],
      prompt: "What makes this exchange dialectical rather than a mere dispute?",
      hint: "Trace where the objection ends up.",
      choices: [
        {
          id: "dl-g1-a",
          text: "The objection is absorbed into a revised position, and the objector confirms it has been answered.",
          isCorrect: true,
          feedback:
            "Yes — statement, objection, amendment, and the closing of the loop with the objector. The revised proposal is the *product* of the opposition, which is dialectic working as designed.",
        },
        {
          id: "dl-g1-b",
          text: "Petra wins by persistence, repeating the proposal until it passes.",
          isCorrect: false,
          feedback:
            "The proposal that passes isn't the one she started with — that's the whole point. Persistence repeats; dialectic revises.",
        },
        {
          id: "dl-g1-c",
          text: "The two sides split the difference to end the argument.",
          isCorrect: false,
          feedback:
            "Nothing was split — the facsimile plan fully serves the school *and* fully protects the paper. Dialectical amendment seeks the position that answers the objection, not the midpoint between demands.",
        },
      ],
    },
    {
      id: "dl-g2",
      passage: [
        "Before the vote, the reeve restated the opposition's case: 'Your claim is that the common ought not be fenced because fencing it once made it easier to fence it twice — have I put it fairly?'",
        "'More fairly than I did,' the objector admitted.",
        "Only then did the reeve answer it.",
      ],
      prompt: "Why does the reeve restate the objection before answering it?",
      hint: "What does answering a weak version of a view accomplish?",
      choices: [
        {
          id: "dl-g2-a",
          text: "An answer only counts against the position actually held — so the position must first be stated at full strength.",
          isCorrect: true,
          feedback:
            "Exactly. Answering a weakened version wins nothing; the real objection just stands back up. The restate-and-confirm move guarantees the coming answer engages the strongest form — dialectic's basic discipline.",
        },
        {
          id: "dl-g2-b",
          text: "To flatter the objector into voting his way.",
          isCorrect: false,
          feedback:
            "The objector's comfort is a side effect. The reeve's own answer is worthless unless aimed at the true target — the restatement protects the *argument*, not the mood.",
        },
        {
          id: "dl-g2-c",
          text: "To delay the vote while support gathered.",
          isCorrect: false,
          feedback:
            "One sentence of restatement delays nothing. Its function is accuracy: fix the objection's best form in place so the answer can be judged against it.",
        },
      ],
    },
    {
      id: "dl-g3",
      passage: [
        "The engineer's flood plan met an objection she could not answer: the upstream village would take more water under it, and she had no remedy to offer.",
        "She said so at the meeting, and marked the plan 'unresolved against the upstream objection' in her own report.",
        "The plan waited a season, until the retention pond design answered what she could not.",
      ],
      prompt: "What does the engineer's response show about dialectical reasoning?",
      hint: "Not every objection can be met. What then?",
      choices: [
        {
          id: "dl-g3-a",
          text: "An unanswered objection is recorded as a standing debt against the view, not argued away or ignored.",
          isCorrect: true,
          feedback:
            "Right. Dialectic keeps honest books: objections met are credits, objections unmet are debts carried openly. Her position stayed provisional until the pond design paid the debt — which is how views are supposed to improve.",
        },
        {
          id: "dl-g3-b",
          text: "That she should have withdrawn the plan entirely.",
          isCorrect: false,
          feedback:
            "Withdrawal is one option; suspension with the debt on record is another, and often better — the plan's merits survived, awaiting an answer that eventually came.",
        },
        {
          id: "dl-g3-c",
          text: "That objections from villages outweigh objections from engineers.",
          isCorrect: false,
          feedback:
            "The objection's source never mattered — its unanswered *content* did. Dialectic weighs arguments, not the addresses they come from.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "dl-m1",
      passage: [
        "The proposal to move market day drew the granary's objection: carts can't load on the same day the stalls fill the square.",
        "The mover took the point whole and split the day — stalls till two, carts after — and the granary withdrew its objection as answered.",
      ],
      options: ["dialectical", "conductive", "practical"],
      correctLabel: "dialectical",
      explanation:
        "Objection stated, taken at strength, and answered by amendment the objector accepts. The final position was built by the exchange.",
    },
    {
      id: "dl-m2",
      passage: [
        "For moving market day: the fishermen's tides, the schoolmaster's timetable, and the carrier's routes all favored Thursday.",
        "Against: only habit.",
        "On balance, Thursday.",
      ],
      options: ["conductive", "dialectical", "comparative"],
      correctLabel: "conductive",
      explanation:
        "Independent reasons weighed to a verdict. Nothing is objected to and answered — the against-side is counted, not engaged. That's the ledger, not the dialogue.",
    },
    {
      id: "dl-m3",
      passage: [
        "'Your strongest case,' the miller told the weir's opponents, 'is the eel run — put it any way you like and I'll answer the best version.'",
        "They put it; he conceded a sluice gate open each September; and the objection, its authors agreed, was met.",
      ],
      options: ["dialectical", "authority", "moral"],
      correctLabel: "dialectical",
      explanation:
        "Inviting the objection in its best form, conceding what it proves, and amending to meet it — with the objectors confirming. Dialectic's full loop.",
    },
    {
      id: "dl-m4",
      passage: [
        "Each pier of the bridge was rated for ten tons, but the surveyor rated the bridge by its piers *and* its spans together, and the weakest span governed.",
        "Eight tons, said the notice, whatever the piers could bear.",
      ],
      options: ["part-whole", "dialectical", "deductive"],
      correctLabel: "part-whole",
      explanation:
        "A property's trip from parts to whole, governed by a stated composition rule (the minimum). No objection is being met — a structure is being reasoned across.",
    },
    {
      id: "dl-m5",
      passage: [
        "The historian's draft claimed the harbor predated the church.",
        "A reviewer objected from the tithe rolls; the historian checked, found the rolls decisive against her, and the second draft argued the reverse — crediting the objection in its first footnote.",
      ],
      options: ["dialectical", "abductive", "claim-support"],
      correctLabel: "dialectical",
      explanation:
        "The position didn't just bend — it reversed under a decisive objection, and says so. Dialectical reasoning includes losing well: the objection improved the book.",
    },
  ],
  unlockChallenge: [
    {
      id: "dl-u1",
      passage: [
        "The plan for a village pump stood against the objection that the well women's trade would vanish with it.",
        "The planners answered by hiring the same women to keep the pump and the accounts — and the objection's author seconded the motion.",
      ],
      options: ["dialectical", "practical", "conductive"],
      correctLabel: "dialectical",
      explanation:
        "The objection is met inside the revised plan, and its author's second is the receipt. Position improved by opposition.",
    },
    {
      id: "dl-u2",
      passage: [
        "For the pump: cleaner water, shorter hauls, and the doctor's endorsement.",
        "Against: the cost of pipe.",
        "The council weighed the three against the one and voted the pump through.",
      ],
      options: ["conductive", "dialectical", "comparative"],
      correctLabel: "conductive",
      explanation:
        "Reasons weighed in a ledger to a verdict — the cost is counted and outweighed, never answered or amended for. Weighing is conductive; engaging is dialectical.",
    },
    {
      id: "dl-u3",
      passage: [
        "The astronomer's lecture ended with the objection she could not yet answer — the parallax her theory predicted and no one had measured.",
        "'Hold the theory loosely until someone measures it,' she told the society, 'and hold me to this page when they do.'",
      ],
      options: ["dialectical", "bayesian", "authority"],
      correctLabel: "dialectical",
      explanation:
        "The strongest objection is stated by the view's own author and carried openly as a debt, with the verdict deferred to its answer. That bookkeeping of objections is dialectic — here practiced against herself.",
    },
    {
      id: "dl-u4",
      passage: [
        "A city planner proposed removing parking bays on the main shopping street to install a protected bike lane.",
        "Business owners objected that the lost parking would drive away customers.",
        "The planner revised the design: half the removed bays became cargo-bike delivery zones, and an agreement with the neighboring car park gave drivers an overflow option.",
        "The business owners reviewed the revision and withdrew their objection as answered.",
      ],
      options: ["dialectical", "practical", "conductive"],
      correctLabel: "dialectical",
      explanation:
        "The objection wasn't deflected or outweighed — it was absorbed into a revised proposal that the objectors themselves confirmed as meeting their concern. Objection, amendment, and the objector's confirmation form the full dialectical loop.",
    },
    {
      id: "dl-u5",
      passage: [
        "Before voting on a bypass route, the chair listed reasons in favor: faster freight deliveries, quieter village streets, and lower accident rates at the central junction.",
        "Against: the construction cost and the impact on the wetlands.",
        "Three in favor, two against — the chair judged the two against insufficient to outweigh the three, and the committee voted for the bypass.",
      ],
      options: ["conductive", "dialectical", "comparative"],
      correctLabel: "conductive",
      explanation:
        "Independent reasons for and against are listed, counted, and weighed to a verdict. The cost and wetland impact are judged insufficient — but they are not engaged or answered, only outweighed. Counting the against-side and declaring it lighter is the ledger, not the dialogue.",
    },
    {
      id: "dl-u6",
      passage: [
        "At a product review meeting, the manager walked through the launch plan and asked for blockers.",
        "A security engineer flagged a data-handling vulnerability the manager could not resolve on the spot.",
        "She updated the project board: the concern was logged as a blocking issue, the launch date was moved out three weeks, and the plan would advance only once the security team confirmed the fix was in place.",
      ],
      options: ["dialectical", "practical", "claim-support"],
      correctLabel: "dialectical",
      explanation:
        "An unanswered objection is recorded as a standing debt against the plan — the position suspends rather than advancing, and waits for the objection to be met. Carrying objections honestly, rather than routing around them, is dialectical reasoning's discipline.",
    },
  ],
};
