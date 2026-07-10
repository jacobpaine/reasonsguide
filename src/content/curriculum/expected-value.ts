import type { Lesson } from "@/domain/types";

export const expectedValueLesson: Lesson = {
  id: "expected-value",
  title: "Expected-value reasoning",
  status: "ready",
  labelIds: ["expected-value"],
  definition:
    "Expected-value reasoning chooses an action by listing the possible outcomes, assigning each a probability, and multiplying that probability by the outcome's magnitude — then comparing the weighted totals across options. The center of gravity is always a decision under uncertainty: not 'what will happen?' but 'given the odds and the stakes, what should I do?'",
  memoryHook: "Don't just count the odds — multiply them by what's at stake, then choose.",
  soundsLike: [
    "Even if it only works half the time, the payoff makes it worth the attempt.",
    "The downside is small and capped; the upside, weighted by its odds, is larger.",
    "I'd expect to lose a little most days, but win big enough on the good ones to come out ahead.",
    "At those odds and that prize, entering costs less than it's worth in expectation.",
  ],
  workedExamples: [
    {
      id: "ev-w1",
      title: "The certification course",
      passage: [
        "The union's certification course costs $300 upfront; certified journeymen in the trade earn roughly $6,000 more per year.",
        "Tomás puts his odds of passing on the first attempt at about 70% — if he fails, a retake costs another $200.",
        "The expected cost of getting certified is roughly $360; the expected annual gain is $6,000. He signs up.",
      ],
      explanation:
        "All four moves of expected-value reasoning are visible. Outcomes: pass on the first try, or fail and retake. Probabilities: 70% and 30%. Magnitudes: $300 or $500 in cost against $6,000 per year in gain. Comparison: the gap between expected cost (roughly $360) and expected return ($6,000) is overwhelming, so the action is clear. Practical reasoning would have been simpler — 'training earns more money, so take it' — but it skips the probability weighting entirely. Expected-value reasoning makes the uncertainty the center of the analysis rather than a background assumption.",
    },
    {
      id: "ev-w2",
      title: "The door-prize queue",
      passage: [
        "A theme park offers a daily door prize: one visitor in fifty wins a free annual pass worth $200.",
        "Entering the raffle means five minutes in a side queue.",
        "Vee divided $200 by 50, got $4 of expected value per five minutes of standing, and went straight to the coasters.",
      ],
      explanation:
        "Vee converts the uncertain prize into an expected value — $200 × (1/50) = $4 — and compares it to the cost of entering (five minutes). Deciding against an action is still expected-value reasoning; the form doesn't require a 'yes.' The four moves: outcomes named (win or not), probability assigned (1 in 50), magnitude weighed ($200 prize, five minutes of time), comparison made (the rate is unimpressive). This differs from statistical reasoning, which would use the same 1-in-50 figure to describe the raffle's odds. Expected-value reasoning uses that figure to choose whether to enter.",
    },
  ],
  guidedExamples: [
    {
      id: "ev-g1",
      passage: [
        "Ines has two ways to get across town: a direct bus that reliably takes 35 minutes, or a rideshare that takes 20 minutes in clear traffic and 50 minutes in congestion — and traffic is congested about half the time.",
        "She calculates the rideshare's expected travel time at 35 minutes as well, costs four times as much, and adds unpredictability.",
        "She takes the bus.",
      ],
      prompt: "What move does Ines make that plain goal-directed reasoning would skip?",
      hint:
        "Both options get her to the destination. What extra step determines which one she picks?",
      choices: [
        {
          id: "ev-g1-a",
          text: "She picks the option that reliably achieves her goal — getting across town.",
          isCorrect: false,
          feedback:
            "That's practical reasoning: identify a means that achieves the goal and take it. But both options get Ines to her destination, so 'reliably reaches the goal' doesn't choose between them. The step that does is weighting each rideshare outcome (20 min, 50% of the time; 50 min, 50% of the time) by its probability — then comparing that expected time to the bus. Practical reasoning stops at 'this means achieves the goal'; expected-value reasoning continues into probability × magnitude.",
        },
        {
          id: "ev-g1-b",
          text: "She cites traffic data to describe how often rideshares are slow.",
          isCorrect: false,
          feedback:
            "Citing a rate to support a claim ('rideshares are frequently late in this city') would be statistical reasoning. Ines uses the same congestion rate as an input to a decision — she multiplies it by the magnitude (extra travel time) to produce an expected travel cost before choosing. The statistics serve a choice, not a claim.",
        },
        {
          id: "ev-g1-c",
          text: "She multiplies each rideshare outcome's probability by its time cost, finds the expected total matches the bus, and the cost and uncertainty tip it against the rideshare.",
          isCorrect: true,
          feedback:
            "Exactly right. Practical reasoning says 'rideshare reaches the goal — take it.' Expected-value reasoning asks: 'across the probability-weighted outcomes, which option costs less in time, money, and variance?' That extra multiplication step — probability × magnitude, applied to each uncertain outcome — is the move practical reasoning doesn't make.",
        },
      ],
    },
    {
      id: "ev-g2",
      passage: [
        "An equipment supplier knows that one compressor in eight fails within two years of purchase.",
        "Extended coverage for two years costs $120; a replacement compressor runs $800.",
        "She reasons: (1/8) × $800 = $100 expected replacement cost — $20 less than the coverage price.",
        "She declines the extended coverage.",
      ],
      prompt: "The supplier uses a failure rate to decide. Why isn't this statistical reasoning?",
      hint: "Ask what the 1-in-8 rate is for. Is it supporting a claim, or serving a choice?",
      choices: [
        {
          id: "ev-g2-a",
          text: "Because the failure rate comes from past equipment rather than a formal study.",
          isCorrect: false,
          feedback:
            "Where the rate comes from doesn't determine the reasoning type. A rate from a formal study could equally appear in statistical or expected-value reasoning. The deciding factor is what the rate does: describe a pattern, or drive a decision by being multiplied against a magnitude.",
        },
        {
          id: "ev-g2-b",
          text: "Because the rate is multiplied by the magnitude of the potential loss and the result is compared against the cost of acting — the statistics serve a decision, not a claim.",
          isCorrect: true,
          feedback:
            "Yes. Statistical reasoning would stop here: '1 in 8 compressors fails within two years — that's the failure rate.' Expected-value reasoning takes that rate further: (1/8) × $800 = $100 expected replacement cost, compared against $120 for coverage. The statistics are the input; the choice is the output. That conversion from 'what typically happens' to 'what should I do given the odds and stakes' is the mark of expected-value reasoning.",
        },
        {
          id: "ev-g2-c",
          text: "Because the decision turns out to be 'no' — she declines the coverage.",
          isCorrect: false,
          feedback:
            "The direction of the decision doesn't mark the reasoning type. Statistical reasoning could also lead to declining coverage (if the rate seemed low) without any probability × magnitude multiplication. What marks expected-value reasoning is the explicit multiplication of the odds by the potential cost to arrive at an expected value, which is then compared against the known price of coverage.",
        },
      ],
    },
    {
      id: "ev-g3",
      passage: [
        "After two dry months, Patel revised his drought estimate upward from 15% to 45%.",
        "Irrigation equipment costs $3,000; unprotected crops stand to lose roughly $7,000 in a drought.",
        "At 45% odds, the expected loss from going without irrigation is $3,150 — more than the equipment costs.",
        "He orders the irrigation system.",
      ],
      prompt:
        "Two different kinds of reasoning appear here. Which kind drives the purchase in the final sentence?",
      hint:
        "Find where Patel shifts from revising a belief to making a choice. What does the choice require beyond the probability alone?",
      choices: [
        {
          id: "ev-g3-a",
          text: "Bayesian reasoning — he updated his drought estimate, and that update led him to act.",
          isCorrect: false,
          feedback:
            "The update from 15% to 45% is Bayesian: new evidence (two dry months) moves his belief. But the updated probability alone doesn't select the irrigation system — plenty of things become more likely without triggering a purchase. What selects the system is comparing 45% × $7,000 = $3,150 against the $3,000 equipment price. Bayesian reasoning handed off a revised probability, then stepped aside; expected-value reasoning used that probability to weigh the decision.",
        },
        {
          id: "ev-g3-b",
          text: "Causal reasoning — drought causes crop loss, so blocking drought protects the crops.",
          isCorrect: false,
          feedback:
            "The causal link (drought → crop loss) explains the magnitude, but it doesn't determine whether to spend $3,000. That question requires knowing how likely drought is and how large the loss would be — probability × magnitude. The causal relationship enters as a background assumption; the decision itself is driven by comparing the weighted expected loss ($3,150) to the cost of acting ($3,000).",
        },
        {
          id: "ev-g3-c",
          text: "Expected-value reasoning — the updated probability is multiplied by the magnitude of the loss, and the result exceeds the cost of acting.",
          isCorrect: true,
          feedback:
            "Exactly. The Bayesian step produced a probability (45%); the expected-value step put it to use: 45% × $7,000 = $3,150 > $3,000 equipment cost, so order the system. The two forms are sequential and complementary — Bayesian reasoning updates beliefs as evidence arrives; expected-value reasoning acts on those updated beliefs when a choice must be made.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "ev-m1",
      passage: [
        "Submitting a research grant takes a full week of drafting.",
        "Awards go to roughly one in ten applicants, and the prize funds twelve months of independent research — time Naledi currently has no other path to.",
        "She weighs the 10% chance of a research year against a week's drafting work, decides the probability-weighted gain clears the cost, and submits.",
      ],
      options: ["expected-value", "practical", "statistical"],
      correctLabel: "expected-value",
      explanation:
        "Naledi doesn't just say 'applying leads to funding, so apply' (practical) or cite the 10% as a descriptive fact (statistical). She multiplies the probability by the magnitude (a full research year) and compares that weighted benefit to the cost (a week of work). The explicit probability × magnitude comparison under uncertainty is the expected-value move.",
    },
    {
      id: "ev-m2",
      passage: [
        "A survey of 800 office workers found that 61% reported feeling more focused after switching to a four-day week.",
        "The researchers concluded that four-day schedules are associated with a meaningful focus improvement.",
      ],
      options: ["statistical", "expected-value", "inductive"],
      correctLabel: "statistical",
      explanation:
        "A measured rate from a sample is used to support a claim about the association. No decision is being made and no outcome is being weighted by its probability — the numbers describe a pattern and back a conclusion. That's statistical reasoning.",
    },
    {
      id: "ev-m3",
      passage: [
        "The craft market's outdoor booth costs $350 to rent for the day.",
        "Mira estimates a 65% chance of dry weather and $900 in sales, and a 35% chance of rain that cuts sales to $80.",
        "The weighted average works out to $613 — well above the booth fee — so she reserves the spot.",
      ],
      options: ["expected-value", "bayesian", "causal"],
      correctLabel: "expected-value",
      explanation:
        "Outcomes enumerated (dry, rainy), probabilities assigned (65%/35%), magnitudes weighed ($900/$80), weighted total ($613) compared to the action's cost ($350). All four expected-value moves are visible. Bayesian reasoning would have updated how likely rain is given new evidence; here the probability is already in hand and is being used to choose whether to book the booth.",
    },
    {
      id: "ev-m4",
      passage: [
        "The wine buyer initially thought there was a strong chance — perhaps four in five — that the cellar was well-maintained.",
        "Then she opened the humidity log and found three months above 75%, a condition that good cellars almost never show.",
        "She revised her confidence downward: probably not well-stored after all.",
      ],
      options: ["bayesian", "expected-value", "abductive"],
      correctLabel: "bayesian",
      explanation:
        "A prior (four in five well-stored) meets evidence (humidity spikes) that is far more expected under poor conditions than good ones, and her confidence shifts accordingly. No action is chosen and no probability is multiplied against a magnitude. Belief is revised — that's Bayesian reasoning, not expected-value.",
    },
    {
      id: "ev-m5",
      passage: [
        "An offer came in on the house at $215,000, contingent on repairs.",
        "An independent buyer might pay $240,000, but finding one could take months — and there was roughly a 40% chance they'd negotiate down to $220,000 anyway.",
        "The probability-weighted independent-buyer path came to about $232,000; subtract $10,000 in carrying costs and it lands at $222,000 — better than the contingent offer.",
        "They held out for an independent buyer.",
      ],
      options: ["expected-value", "comparative", "practical"],
      correctLabel: "expected-value",
      explanation:
        "Outcomes enumerated (full price vs. negotiated down), probabilities assigned (60%/40%), magnitudes weighed, carrying costs subtracted, and the net compared to the certain offer. This is the full expected-value structure: uncertainty acknowledged, probability × magnitude computed, decision made on the weighted comparison.",
    },
  ],
  unlockChallenge: [
    {
      id: "ev-u1",
      passage: [
        "Getting a second contractor bid takes a week; going with the first saves time but risks overpaying.",
        "The first bid is $4,800. Yuri estimates a 55% chance a second bid comes in $800 cheaper.",
        "The expected saving from searching further is $440 — less than the $600 he values a week of his consulting time at.",
        "He accepts the first bid.",
      ],
      options: ["expected-value", "practical", "statistical"],
      correctLabel: "expected-value",
      explanation:
        "Yuri weighs the 55% probability of saving $800 (expected saving: $440) against the certain cost of a week of his time ($600). Expected saving < cost of searching, so he accepts the first bid. Probability × magnitude compared against the cost of an action — that's expected-value reasoning.",
    },
    {
      id: "ev-u2",
      passage: [
        "Alana has a stable role paying $80,000 per year.",
        "A startup offers a base of $60,000 plus options worth roughly $200,000 if the company succeeds — and she puts the odds of success at about 30% for companies at this stage.",
        "Expected total compensation at the startup: $60,000 + (30% × $200,000) = $120,000 per year — $40,000 more than her current role.",
        "She takes the startup job.",
      ],
      options: ["expected-value", "bayesian", "authority"],
      correctLabel: "expected-value",
      explanation:
        "Outcomes listed (startup succeeds or doesn't), probability assigned (30%), magnitude weighed ($200,000 in options), comparison made ($120,000 expected vs. $80,000 certain). All four expected-value moves are explicit. No prior is being updated and no expert's word is doing the work — the decision rests entirely on the probability-weighted comparison.",
    },
    {
      id: "ev-u3",
      passage: [
        "To finish the project on time, the team needs the data compiled by Thursday.",
        "Jess sends the request to the data team first thing Monday morning.",
      ],
      options: ["practical", "expected-value", "deductive"],
      correctLabel: "practical",
      explanation:
        "Jess has a goal (finish on time) and picks an action that achieves it (request data early enough). No uncertain outcomes are enumerated and no probabilities are multiplied against magnitudes. Practical reasoning identifies the best available means to a goal — expected-value reasoning would arise only if Jess faced uncertain outcomes requiring a probability × magnitude comparison before choosing.",
    },
    {
      id: "ev-u4",
      passage: [
        "Road salt applied at the junction reduced skidding incidents by 34% across three winter seasons.",
        "The transport authority cited the figure in recommending that the salting program continue.",
      ],
      options: ["statistical", "expected-value", "causal"],
      correctLabel: "statistical",
      explanation:
        "A measured rate (34% reduction) drawn from three seasons of data is offered to back a recommendation. The number describes an observed effect; it does not enumerate uncertain outcomes or weigh them against their probabilities to drive a choice. That's statistical reasoning — numbers marshaled to support a claim.",
    },
  ],
};
