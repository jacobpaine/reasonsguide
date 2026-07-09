import type { Lesson } from "@/domain/types";

export const causalFallaciesLesson: Lesson = {
  id: "causal-fallacies",
  title: "When cause goes wrong: causal fallacies",
  status: "ready",
  labelIds: ["correlation-causation", "single-cause", "slippery-slope"],
  definition:
    "Three further ways causal reasoning fails. Correlation-implies-causation treats two things that move together as if one drove the other, forgetting coincidence, reverse cause, and common causes. The single-cause fallacy crowns one contributor as the whole story of a complex outcome. The slippery slope insists one step must end in catastrophe without arguing a single link of the chain.",
  memoryHook: "A cause needs a mechanism, its co-causes counted, and every link argued.",
  soundsLike: [
    "The two rise together, so one must drive the other. (correlation as causation)",
    "The real reason is simply X — nothing else need enter into it. (single cause)",
    "Allow this today, and before long everything is lost. (slippery slope)",
  ],
  workedExamples: [
    {
      id: "cf-w1",
      title: "Moving together, driving nothing",
      passage: [
        "Across the county's villages, those with more storks nesting on the chimneys record more births.",
        "No one supposes the storks deliver the children.",
        "Larger villages have more chimneys and more cradles alike — the size drives both counts.",
        "Two lines can rise together for three reasons: one drives the other, the other drives the one, or something third drives both — and the chart looks identical in all three cases.",
      ],
      explanation:
        "This is correlation-implies-causation with the mask off. The stork chart is real; the causal reading is the error. Distinguish it from post hoc, met earlier: post hoc says B *followed* A once, so A caused B; this fallacy says B *tracks* A across many cases, so A causes B. Both skip the same question — what's the mechanism, and what else could produce this pattern?",
    },
    {
      id: "cf-w2",
      title: "The slope nobody greased",
      passage: [
        "When the reading room proposed lending novels, a member warned: first novels, then idle afternoons, then the young unfit for trade, and the town's ruin complete.",
        "Each arrow in that chain — novels to idleness, idleness to unfitness, unfitness to ruin — is a causal claim needing its own evidence.",
        "The warning supplies none; it substitutes momentum for argument.",
        "Some slopes are real: a chain argued link by link is legitimate causal reasoning. The fallacy is the chain asserted whole, links unexamined.",
      ],
      explanation:
        "The slippery slope borrows the *feeling* of causal inevitability without doing causal work. The test is simple and fair: take each link alone and ask what evidence moves it. A prediction that survives that test isn't a fallacy at all — which is why the diagnosis is about the missing argument, never merely about predicting bad outcomes.",
    },
  ],
  guidedExamples: [
    {
      id: "cf-g1",
      passage: [
        "The almshouse warden noticed that residents who kept window plants lived longer than those who didn't.",
        "She concluded that window plants lengthen life, and ordered ferns for every sill.",
      ],
      prompt: "What has the warden overlooked?",
      hint: "What kind of resident keeps a plant alive in the first place?",
      choices: [
        {
          id: "cf-g1-a",
          text: "A common cause — the vigor that keeps a resident tending plants may be what keeps them living, too.",
          isCorrect: true,
          feedback:
            "Yes. Health could drive both the gardening and the longevity, making the ferns passengers rather than engines. The correlation is real; its causal reading needs the rivals ruled out — reverse cause and common cause first among them.",
        },
        {
          id: "cf-g1-b",
          text: "Her sample is corrupted because it includes only surviving residents.",
          isCorrect: false,
          feedback:
            "A worthy suspicion elsewhere, but she compared living residents with and without plants — the filter ran equally over both groups. The flaw is in reading the difference causally, not in who was counted.",
        },
        {
          id: "cf-g1-c",
          text: "Nothing — a difference that large must mean the plants are doing something.",
          isCorrect: false,
          feedback:
            "Size makes a correlation more interesting, not more causal. The stork counts differ largely too; the question is always what produces the pattern.",
        },
      ],
    },
    {
      id: "cf-g2",
      passage: [
        "The mill fire had three findings in the surveyor's report: oiled rags stored by the stove, a chimney uncleaned for years, and a watchman asleep.",
        "The owner's public statement blamed the watchman, entire and alone.",
      ],
      prompt: "What makes the owner's statement a single-cause fallacy rather than a fair reading?",
      hint: "Compare the statement against the report it summarizes.",
      choices: [
        {
          id: "cf-g2-a",
          text: "The evidence itself names three contributors, and the statement erases two of them.",
          isCorrect: true,
          feedback:
            "Right — and note who benefits from the erasure: the rags and the chimney were the owner's to manage. The single-cause fallacy often travels with an interest in *which* single cause gets crowned.",
        },
        {
          id: "cf-g2-b",
          text: "Blaming any person for a fire is always fallacious.",
          isCorrect: false,
          feedback:
            "The watchman genuinely contributed; naming him isn't the error. Promoting one contributor to the whole story — 'entire and alone' — is.",
        },
        {
          id: "cf-g2-c",
          text: "The fire followed the watchman's falling asleep, and sequence never indicates cause.",
          isCorrect: false,
          feedback:
            "Sequence is weak evidence, but that's post hoc's territory. Here the causal roles are established by the report; the fallacy is in the counting, not the timing.",
        },
      ],
    },
    {
      id: "cf-g3",
      passage: [
        "Two objections were raised to draining the upper marsh.",
        "The first: 'Drain it, and next season's floods will scour the lower fields — the marsh holds back exactly the spring water that road already struggles to pass.'",
        "The second: 'Drain it, and soon every wild acre in the parish will be plowed, and the parish itself unrecognizable.'",
      ],
      prompt: "Why is the first objection legitimate and the second a slippery slope?",
      hint: "Look for the links.",
      choices: [
        {
          id: "cf-g3-a",
          text: "The first argues its single causal link with a mechanism; the second asserts a long chain with none.",
          isCorrect: true,
          feedback:
            "Exactly. Marsh-holds-water-back is an arguable mechanism connecting step to consequence. Wild-acres-all-plowed names no force that moves from this drainage to that end. The difference isn't gloominess — it's whether the links are argued.",
        },
        {
          id: "cf-g3-b",
          text: "The first predicts a nearer event, and near predictions are always sounder.",
          isCorrect: false,
          feedback:
            "Distance isn't the diagnosis — well-argued long chains exist, and unargued short ones too. What separates these two is the presence and absence of reasons at each link.",
        },
        {
          id: "cf-g3-c",
          text: "Nothing separates them — both oppose the drainage, so both are slopes.",
          isCorrect: false,
          feedback:
            "Opposing a change isn't a fallacy. If it were, no warning could ever be sound — and flood warnings with mechanisms behind them very much can be.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "cf-m1",
      passage: [
        "Villages along the coach road sell more remedies and record more illness than villages off it.",
        "The apothecaries' guild concluded that its remedies were plainly being bought where they were needed — proof the remedies drive recovery.",
        "A skeptic noted the coach road brings travelers, and travelers bring both custom and colds.",
      ],
      options: ["correlation-causation", "single-cause", "post-hoc"],
      correctLabel: "correlation-causation",
      explanation:
        "Remedy sales and illness move together across villages, and the guild reads causation into it — while the coach road, a common cause, sits in plain sight.",
    },
    {
      id: "cf-m2",
      passage: [
        "The choir lost its treble section over two years — the mill's shifts changed, the school moved to the valley, and the new organist favored harder settings.",
        "The organist's critics settled the matter simply: the hard settings had emptied the stalls, and there was no more to say.",
      ],
      options: ["single-cause", "slippery-slope", "correlation-causation"],
      correctLabel: "single-cause",
      explanation:
        "Three departures-shaped causes are on the table; the critics crown the one they dislike and dismiss the rest — 'no more to say' is the fallacy speaking.",
    },
    {
      id: "cf-m3",
      passage: [
        "Let the ferry run on Sundays, the elder warned, and next the shops would open, then the fair would come, and within a generation no one in the parish would remember what quiet was.",
      ],
      options: ["slippery-slope", "single-cause", "causal"],
      correctLabel: "slippery-slope",
      explanation:
        "Ferry to shops to fair to a generation's forgetting — four links, zero arguments. The chain's length is asserted as if it were momentum.",
    },
    {
      id: "cf-m4",
      passage: [
        "The dye works opened in March; by May the river trout were gone below the outfall but thriving above it.",
        "The warden bottled water at both points: the downstream sample killed minnows in a day, the upstream sample didn't.",
        "She concluded the works' discharge was killing the fish.",
      ],
      options: ["causal", "correlation-causation", "post-hoc"],
      correctLabel: "causal",
      explanation:
        "Healthy causal reasoning: a located difference, a comparison above and below the suspected cause, and a direct test of mechanism. This is what the fallacies are failures *of*.",
    },
    {
      id: "cf-m5",
      passage: [
        "The bakery's ovens were relined on Monday, and on Tuesday the bread rose poorly.",
        "The baker's wife blamed the new lining, though Tuesday was also the day the new flour sacks were opened.",
      ],
      options: ["post-hoc", "correlation-causation", "single-cause"],
      correctLabel: "post-hoc",
      explanation:
        "One event followed another once, and the sequence carries the blame — the first causal fallacy you learned, here to be told apart from its cousins. (Correlation-causation needs things moving together across many cases, not one morning's aftermath.)",
    },
  ],
  unlockChallenge: [
    {
      id: "cf-u1",
      passage: [
        "Households that subscribe to the lending library also keep tidier accounts, the alderman found, so he proposed subscriptions as the cure for the town's debtors.",
        "The clerk murmured that the sort of household that subscribes may be the sort that ledgers neatly anyway.",
      ],
      options: ["correlation-causation", "single-cause", "slippery-slope"],
      correctLabel: "correlation-causation",
      explanation:
        "Subscriptions and tidy accounts keep company; the alderman promotes the company to causation while a common cause — the households' character — goes unexamined.",
    },
    {
      id: "cf-u2",
      passage: [
        "The harvest festival lost money in a year of rain, higher hall rent, and a rival fair in the next town.",
        "The committee's report named the rain alone, the rent and the rival appearing nowhere in it.",
      ],
      options: ["single-cause", "correlation-causation", "post-hoc"],
      correctLabel: "single-cause",
      explanation:
        "A three-parent loss is written up with one parent. Convenient, too: the weather is the only cause the committee didn't negotiate.",
    },
    {
      id: "cf-u3",
      passage: [
        "Permit one dovecote inside the walls, the warden argued, and soon every yard would keep birds, then the grain stores would be ruined, and the town would starve among its pigeons.",
      ],
      options: ["slippery-slope", "causal", "single-cause"],
      correctLabel: "slippery-slope",
      explanation:
        "From one dovecote to civic starvation with every link unargued — the escalation is theatrical precisely because no mechanism could be named.",
    },
    {
      id: "cf-u4",
      passage: [
        "When the office building installed a new ventilation system, reported headaches fell sharply the following month.",
        "The facilities team compared headache rates against the same month in three prior years, checked whether a passing flu season could account for it, and confirmed no other building changes had occurred that week.",
        "Only this building improved; comparable offices nearby saw no change.",
        "They concluded the ventilation was responsible.",
      ],
      options: ["causal", "correlation-causation", "post-hoc"],
      correctLabel: "causal",
      explanation:
        "Competing explanations eliminated, time-matched comparisons made, a single change isolated — this is the mechanism-and-check work causal reasoning requires, not a correlation or a bare sequence.",
    },
    {
      id: "cf-u5",
      passage: [
        "Allow students to resubmit one assignment, the department chair warned, and next semester they'd expect unlimited chances at everything, then grades would lose all meaning, and within five years no employer in the field would trust a degree from the institution.",
      ],
      options: ["slippery-slope", "single-cause", "correlation-causation"],
      correctLabel: "slippery-slope",
      explanation:
        "From one resubmission policy to institutional ruin through a chain where no link is argued — each step is asserted as inevitable, and the mechanism that would move it is never named.",
    },
  ],
};
