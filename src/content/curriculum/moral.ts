import type { Lesson } from "@/domain/types";

export const moralLesson: Lesson = {
  id: "moral",
  title: "Moral and normative reasoning",
  status: "ready",
  labelIds: ["moral"],
  definition:
    "Moral reasoning argues about what ought to be done, deriving its verdict from values, duties, rights, or principles rather than from facts alone. Facts enter as inputs — what happened, who is affected — but no pile of facts yields an 'ought' until a value joins them.",
  memoryHook: "From 'is' plus a value to 'ought'.",
  soundsLike: [
    "It would be wrong to…, whatever it costs us.",
    "She has a right to know.",
    "A promise was given, and that settles it.",
  ],
  workedExamples: [
    {
      id: "mo-w1",
      title: "The promised field",
      passage: [
        "Selling the east field would clear the farm's debts in a season.",
        "But the field was promised to Tam's sister for her flock, and the promise was made freely, with both parents witnessing.",
        "Promises freely made must be kept, so the field is not Tam's to sell — however good the price.",
      ],
      explanation:
        "Notice the shape: a fact (the promise was made), a principle (freely made promises bind), and an 'ought' that follows from the two together. The financial facts don't disappear — they're outweighed. Practical reasoning would ask what best serves Tam's goals; moral reasoning asks what the promise permits, and answers from the principle.",
    },
    {
      id: "mo-w2",
      title: "The unnamed donor",
      passage: [
        "The infirmary's new wing was funded by a donor who asked to stay unnamed.",
        "The board knew the name would draw further gifts if published.",
        "The donor's condition was accepted when the money was; accepting a condition obliges you to honor it, so the name stays out of the annual report.",
      ],
      explanation:
        "Again the verdict flows from a norm — accepted conditions oblige — applied to the facts. The board's reasoning would fail as practical reasoning (publishing serves the fundraising goal better); it succeeds as moral reasoning because the operative question is what they are bound to do, not what pays.",
    },
  ],
  guidedExamples: [
    {
      id: "mo-g1",
      passage: [
        "The flood rolls came to the clerk with two names entered twice, doubling those families' relief.",
        "No one else would ever have known.",
        "Taking relief twice takes it from neighbors with equal claim, and equal claims deserve equal treatment — so the clerk corrected the rolls.",
      ],
      prompt: "What is doing the real work in the clerk's conclusion?",
      hint: "Strip away the facts about the rolls. What remains?",
      choices: [
        {
          id: "mo-g1-a",
          text: "A principle — equal claims deserve equal treatment — joined to the facts.",
          isCorrect: true,
          feedback:
            "Yes. The facts alone ('two names appear twice') recommend nothing. The principle converts them into an ought. That fact-plus-value structure is moral reasoning's signature.",
        },
        {
          id: "mo-g1-b",
          text: "The risk that the doubled names would eventually be discovered.",
          isCorrect: false,
          feedback:
            "The passage rules that out — no one would have known. Reasoning from discovery risk would be practical (protecting a goal); the clerk's reason is the equal claim of the other families.",
        },
        {
          id: "mo-g1-c",
          text: "A pattern: clerks who correct rolls prosper in the long run.",
          isCorrect: false,
          feedback:
            "No such pattern is cited, and none is needed. The conclusion doesn't rest on what tends to happen but on what fairness requires here.",
        },
      ],
    },
    {
      id: "mo-g2",
      passage: [
        "Two arguments were made for repairing the almshouse roof before the church's.",
        "First: the almshouse residents cannot fund repairs themselves, and a parish owes shelter first to those who cannot secure their own.",
        "Second: a leaking almshouse would embarrass the parish at the bishop's visit.",
      ],
      prompt: "Which argument is moral reasoning, and why?",
      hint: "One runs on a duty; the other runs on an outcome someone wants to avoid.",
      choices: [
        {
          id: "mo-g2-a",
          text: "The first — it derives the priority from a duty owed to the vulnerable.",
          isCorrect: true,
          feedback:
            "Right. 'A parish owes shelter first to those who cannot secure their own' is a normative principle; the conclusion inherits its force. The second argument serves a goal (avoiding embarrassment) — that's practical reasoning, whatever one thinks of the goal.",
        },
        {
          id: "mo-g2-b",
          text: "The second — embarrassment is a stronger motive than duty.",
          isCorrect: false,
          feedback:
            "Strength of motive isn't the test. Moral reasoning is identified by its ground — values, duties, rights — not by how hard it pushes. The embarrassment argument grounds out in a goal.",
        },
        {
          id: "mo-g2-c",
          text: "Both equally — each ends in the same recommendation.",
          isCorrect: false,
          feedback:
            "Same destination, different engines. Identifying reasoning means looking at what drives the conclusion, and only the first is driven by a norm.",
        },
      ],
    },
    {
      id: "mo-g3",
      passage: [
        "The apprentice argued: 'Everyone in the yard pads their hours a little, so padding hours is fine.'",
      ],
      prompt: "What has the apprentice's argument left out?",
      hint: "He has facts about what is done. What would he need for a conclusion about what may be done?",
      choices: [
        {
          id: "mo-g3-a",
          text: "A value or principle — commonness alone can't turn an 'is' into an 'ought'.",
          isCorrect: true,
          feedback:
            "Exactly. 'Everyone does it' is a fact about practice. To reach 'it is fine', he'd need a premise like 'whatever is common is permissible' — and once stated aloud, that principle looks far less obvious. Moral arguments stand or fall on the value they smuggle or state.",
        },
        {
          id: "mo-g3-b",
          text: "A larger sample — he should survey more yards first.",
          isCorrect: false,
          feedback:
            "More yards would strengthen the factual claim about commonness, but the gap isn't factual. However common the padding, the step to 'fine' still needs a norm.",
        },
        {
          id: "mo-g3-c",
          text: "Nothing — widespread practice does settle what's acceptable.",
          isCorrect: false,
          feedback:
            "That is itself a moral principle, and a shaky one: widespread practices have included much that we now condemn. The lesson isn't that he's wrong, but that the hidden premise must come into the open to be judged.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "mo-m1",
      passage: [
        "The nets brought up a marked lobster pot from another man's grounds, still full.",
        "What another man's labor has filled is his, whatever the current did with it — so the catch went back over the side, pot and all.",
      ],
      options: ["moral", "practical", "claim-support"],
      correctLabel: "moral",
      explanation:
        "The conclusion rests on a principle about labor and ownership, applied against the crew's own interest. No goal of theirs is served — that's the tell against practical reasoning.",
    },
    {
      id: "mo-m2",
      passage: [
        "To have the barn raised before the rains, the frame must go up while the sawyer is still in the valley.",
        "So the raising should be called for Saturday.",
      ],
      options: ["practical", "moral", "deductive"],
      correctLabel: "practical",
      explanation:
        "Goal (barn before rains), means (the sawyer's window), action. The 'should' here is goal-driven — swap the goal and the should dissolves, which no principle-driven ought would do.",
    },
    {
      id: "mo-m3",
      passage: [
        "The letters in the trunk were written to the colonel by a woman still living in the parish.",
        "Private words belong to those who wrote them, not to those who find them, so the historian sought her leave before quoting a line.",
      ],
      options: ["moral", "authority", "definitional"],
      correctLabel: "moral",
      explanation:
        "A principle about privacy and ownership generates the historian's obligation. (An argument about what the word 'belong' legally means would be definitional — a later chapter; here the principle, not the word, carries it.)",
    },
    {
      id: "mo-m4",
      passage: [
        "The village should trust the assayer's report on the well water.",
        "She is trained to the work, tests the same way in every village, and gains nothing by the result going either way.",
      ],
      options: ["claim-support", "moral", "authority"],
      correctLabel: "claim-support",
      explanation:
        "Three checkable reasons support a recommendation about whom to trust. Nothing is yet accepted on her word (that would be authority reasoning), and no duty is invoked.",
    },
    {
      id: "mo-m5",
      passage: [
        "The old miller can no longer carry his own sacks, and pride keeps him from asking.",
        "Those who fed a village for forty years ought not to go short in their last ones — so the baker sends flour up the hill, unasked and unmentioned.",
      ],
      options: ["moral", "conductive", "practical"],
      correctLabel: "moral",
      explanation:
        "One principle — long service earns care — does all the work, quietly against the baker's own convenience. Many-reasons weighing (conductive, coming soon) isn't happening; one value is.",
    },
  ],
  unlockChallenge: [
    {
      id: "mo-u1",
      passage: [
        "The survey error favored the parish by three acres of the widow's land.",
        "Gains taken from another's mistake are not gains a parish may keep, said the warden, and the boundary was redrawn at parish expense.",
      ],
      options: ["moral", "practical", "claim-support"],
      correctLabel: "moral",
      explanation:
        "A norm about unearned gains produces the ought, and the parish acts against its own interest — principle, not goal, is steering.",
    },
    {
      id: "mo-u2",
      passage: [
        "If the beacon is to be lit by dusk, the oil must go up the cliff by noon.",
        "So the oil should go up with the morning cart.",
      ],
      options: ["practical", "moral", "causal"],
      correctLabel: "practical",
      explanation:
        "Means fitted to an end. The 'should' serves the beacon-lighting goal and would vanish with it.",
    },
    {
      id: "mo-u3",
      passage: [
        "The prize committee learned the winning pie was baked from the contest judge's own recipe, shared privately.",
        "A contest is a promise of equal footing, and judging your own recipe breaks it — the prize was re-awarded, with apologies all round.",
      ],
      options: ["moral", "definitional", "authority"],
      correctLabel: "moral",
      explanation:
        "The committee reasons from what a contest *promises* — fairness — to what must be done when the promise is broken. The value premise ('a contest is a promise of equal footing') powers the verdict.",
    },
  ],
};
