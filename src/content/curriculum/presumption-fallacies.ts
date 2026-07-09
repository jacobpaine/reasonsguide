import type { Lesson } from "@/domain/types";

export const presumptionFallaciesLesson: Lesson = {
  id: "presumption-fallacies",
  title: "When the ground is rigged: presumption fallacies",
  status: "ready",
  labelIds: [
    "begging-the-question",
    "loaded-question",
    "false-dilemma",
    "special-pleading",
    "moving-goalposts",
  ],
  definition:
    "Presumption fallacies rig the ground before the argument starts. Begging the question smuggles the conclusion into a premise; the loaded question smuggles it into a question; the false dilemma smuggles away the other options; special pleading exempts one case from everyone's standard; moving the goalposts raises the standard whenever it's met. None of them argues badly, exactly — they arrange things so no argument is needed.",
  memoryHook: "Check what the argument assumes before it begins.",
  soundsLike: [
    "It's true because it's the plain truth. (begging the question)",
    "Why do you keep hiding the accounts? (loaded question)",
    "Either we act tonight or we lose everything. (false dilemma)",
    "The rule is the rule — though naturally not for this case. (special pleading)",
    "Fine, you've shown that — but real proof would be… (moving the goalposts)",
  ],
  workedExamples: [
    {
      id: "pu-w1",
      title: "The circle and the trapdoor",
      passage: [
        "Asked why the old survey should be trusted over the new one, the steward explained that the old survey was the authoritative one — and what makes a survey authoritative, he allowed, is that it is to be trusted.",
        "His second move was a question for the new surveyor: 'When did you first decide to redraw the line in the manor's favor?'",
        "The first move travels in a circle; the second opens a trapdoor under any answer.",
      ],
      explanation:
        "Begging the question and the loaded question are the same smuggling done in different vehicles. The circle: trusted because authoritative, authoritative because trusted — the conclusion wears a premise's coat. The trapdoor: 'when did you decide' presumes the deciding, so yes-and-no both confess. The cure for both is the same — drag the assumption into the open and demand it be argued for.",
    },
    {
      id: "pu-w2",
      title: "The standard that climbs",
      passage: [
        "The skeptic said he'd believe the new strain outyielded the old when a test plot showed it.",
        "The plot showed it; he wanted a full season. The season showed it; he wanted a wet year. The wet year came and went in the strain's favor.",
        "'What would convince you?' asked the agent — and the silence that followed was the whole diagnosis.",
      ],
      explanation:
        "Moving the goalposts hides inside reasonable-sounding rigor: each new demand, alone, could be fair. The pattern convicts — the standard rises exactly and only when met. The agent's question is the standard test for it: a genuine skeptic can name what would change their mind; a goalpost-mover's answer recedes forever.",
    },
  ],
  guidedExamples: [
    {
      id: "pu-g1",
      passage: [
        "The vote on the harbor dues was called for dusk.",
        "The chairman framed it for the hall: pay the new dues willingly, or watch the harbor silt shut within five years — the choice, he said, was exactly that simple.",
        "The pilot's association had that morning published a third plan, dredging funded by a toll on outbound coal.",
      ],
      prompt: "What has the chairman's framing done?",
      hint: "Count the options in the room, then count the options in his sentence.",
      choices: [
        {
          id: "pu-g1-a",
          text: "Reduced a many-doored question to two doors — a false dilemma, with the pilots' plan standing outside it.",
          isCorrect: true,
          feedback:
            "Yes. The tell is 'exactly that simple': real choices rarely are. The test is always the same — go looking for the third door, and here it was published that morning.",
        },
        {
          id: "pu-g1-b",
          text: "Assumed the dues are fair, which is what the vote was to decide.",
          isCorrect: false,
          feedback:
            "He assumes something narrower and sneakier: that the dues and disaster are the only options. The smuggled cargo is the missing alternatives, not the conclusion itself.",
        },
        {
          id: "pu-g1-c",
          text: "Raised the bar for what counts as a workable plan after one was offered.",
          isCorrect: false,
          feedback:
            "The pilots' plan wasn't demanded and dismissed against a climbing standard — it was framed out of existence entirely. Erasing options is the dilemma's work; escalating demands is the goalposts'.",
        },
      ],
    },
    {
      id: "pu-g2",
      passage: [
        "The bylaw fined any stallholder trading before the market bell.",
        "The clerk fined three early traders that spring, briskly.",
        "When his own brother's stall opened early, the clerk found the case 'different in nature' — the brother being, he explained, an early riser rather than an early trader.",
      ],
      prompt: "What makes this special pleading rather than a fair distinction?",
      hint: "Would 'early riser' have spared the other three?",
      choices: [
        {
          id: "pu-g2-a",
          text: "The exemption names no difference the bylaw cares about — any of the fined three could have claimed it equally.",
          isCorrect: true,
          feedback:
            "Right. That's the test for special pleading: could the excuse be pled by the cases that *weren't* excused? A relevant difference distinguishes; 'different in nature', unspecified, merely exempts.",
        },
        {
          id: "pu-g2-b",
          text: "The clerk had no authority to fine anyone at all.",
          isCorrect: false,
          feedback:
            "His authority is intact — he used it three times. The rot is in the uneven application: one standard for the parish, another for the family.",
        },
        {
          id: "pu-g2-c",
          text: "Rules should bend for family, so the clerk was right but for the wrong reason.",
          isCorrect: false,
          feedback:
            "If the rule *should* bend for family, that's a change to argue openly for everyone's family. Special pleading is bending it silently, once, for one's own.",
        },
      ],
    },
    {
      id: "pu-g3",
      passage: [
        "'This remedy works,' the peddler told the crowd, 'because it has genuine curative power.'",
        "A woman asked what the curative power consisted in.",
        "'Its power,' he said patiently, 'to work.'",
      ],
      prompt: "Why has the peddler said nothing at all?",
      hint: "Follow 'works' around the loop.",
      choices: [
        {
          id: "pu-g3-a",
          text: "The premise is the conclusion re-worded — 'curative power' just means 'works', so the claim supports itself in a circle.",
          isCorrect: true,
          feedback:
            "Yes: begging the question in its purest form. The woman's question is the standard probe — ask what the supporting term amounts to, and a circle collapses into one assertion said twice.",
        },
        {
          id: "pu-g3-b",
          text: "He offered no testimonials from satisfied customers.",
          isCorrect: false,
          feedback:
            "Testimonials would raise different problems (you've met anecdotal evidence). The present flaw is structural: whatever else is missing, the argument given has zero forward motion.",
        },
        {
          id: "pu-g3-c",
          text: "He gave the crowd only two choices: buy or suffer.",
          isCorrect: false,
          feedback:
            "No options were narrowed — no dilemma appears. The whole performance is one claim orbiting itself.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "pu-m1",
      passage: [
        "The advocate assured the bench that his client was trustworthy.",
        "Asked for grounds, he noted that a trustworthy man's word could be relied on, and his client had given his word he was trustworthy.",
      ],
      options: ["begging-the-question", "loaded-question", "special-pleading"],
      correctLabel: "begging-the-question",
      explanation:
        "The client's trustworthiness is proven by assuming it — his word counts only if the conclusion is already true. A circle with a bow on it.",
    },
    {
      id: "pu-m2",
      passage: [
        "The examiner's first question to the young pilot was: 'How often do you still misjudge the ebb on the bar?'",
      ],
      options: ["loaded-question", "begging-the-question", "ad-hominem"],
      correctLabel: "loaded-question",
      explanation:
        "'Still' plants the misjudging as settled fact — 'rarely' confesses, 'never' sounds evasive. The assumption rides in the question, not in any premise.",
    },
    {
      id: "pu-m3",
      passage: [
        "The landlord put the tenants' choice plainly: accept the new terms as written, or the row of cottages goes to the auctioneer within the month.",
        "The almshouse trust's standing offer to buy the row and keep the tenants was in his coat pocket as he spoke.",
      ],
      options: ["false-dilemma", "appeal-to-emotion", "moving-goalposts"],
      correctLabel: "false-dilemma",
      explanation:
        "Two options presented as the world, with the third folded in a pocket. The dilemma is false by the speaker's own knowledge.",
    },
    {
      id: "pu-m4",
      passage: [
        "The society expelled members whose dues ran a year late — three that decade.",
        "The treasurer's own dues ran two years late, which the committee excused, treasurers' duties being, it was minuted, 'payment of a higher kind'.",
      ],
      options: ["special-pleading", "begging-the-question", "tu-quoque"],
      correctLabel: "special-pleading",
      explanation:
        "The standard applied thrice is waived once, for the standard's own keeper — and 'payment of a higher kind' names no difference the rulebook knows.",
    },
    {
      id: "pu-m5",
      passage: [
        "The objection was that the new loom would put the outworkers behind on piece rates.",
        "The mill's manager restated it fairly, checked it against the wage books with the objectors watching, and where the books bore them out, adjusted the rates before the loom was uncrated.",
      ],
      options: ["dialectical", "moving-goalposts", "false-dilemma"],
      correctLabel: "dialectical",
      explanation:
        "The healthy contrast: objection taken at strength, tested on shared evidence, and answered by amendment. No ground was rigged — the ground was walked together.",
    },
  ],
  unlockChallenge: [
    {
      id: "pu-u1",
      passage: [
        "Shown the assay clearing the new well, the elder wanted a second assay; shown the second, he wanted a dry-season test; the dry season passing clean, he declared that only a full generation's health would satisfy a careful man.",
      ],
      options: ["moving-goalposts", "false-dilemma", "begging-the-question"],
      correctLabel: "moving-goalposts",
      explanation:
        "Each met standard births a steeper one, ending at a proof no living person could deliver. The climbing is the fallacy.",
    },
    {
      id: "pu-u2",
      passage: [
        "The petition's opening line asked signers: 'Should the council finally stop wasting the poor rate on its friends?'",
      ],
      options: ["loaded-question", "begging-the-question", "straw-man"],
      correctLabel: "loaded-question",
      explanation:
        "'Finally stop' assumes the wasting and the friends. Signing answers a question; the accusation slips through unexamined underneath it.",
    },
    {
      id: "pu-u3",
      passage: [
        "Either the village keeps every custom exactly as our grandmothers kept it, the sexton warned, or it may as well keep none.",
        "The village had, within living memory, changed the well-dressing date twice and survived both.",
      ],
      options: ["false-dilemma", "slippery-slope", "special-pleading"],
      correctLabel: "false-dilemma",
      explanation:
        "All-or-none offered as the only doors, while the village's own history walks through the middle one twice. (No chain of consequences is argued — the options are simply erased, which marks this as the dilemma rather than a slope.)",
    },
    {
      id: "pu-u4",
      passage: [
        "The committee weighed three proposals for the break-room renovation: a full refurbishment, a partial update limited to the kitchenette, and a simple deep-clean.",
        "They scored each against cost, disruption time, and staff preference survey data.",
        "The kitchenette update scored highest on all three measures and was chosen.",
      ],
      options: ["comparative", "false-dilemma", "special-pleading"],
      correctLabel: "comparative",
      explanation:
        "Multiple genuine options, shared criteria, evidence consulted — the healthy contrast with false dilemma, which would have erased two of the three proposals before the weighing began.",
    },
    {
      id: "pu-u5",
      passage: [
        "The employee asked her manager for a performance review ahead of the raise cycle.",
        "He said he needed three months of consistent output first; she delivered it.",
        "He then said he also needed to see improved client-feedback scores; those came in strong.",
        "He noted that quarterly targets hadn't been finalized yet, and suggested revisiting the review after they were.",
      ],
      options: ["moving-goalposts", "loaded-question", "begging-the-question"],
      correctLabel: "moving-goalposts",
      explanation:
        "Each standard met produces a new, steeper one — the bar climbs only when cleared, which is the pattern that convicts this as goalpost-moving rather than genuine rigor.",
    },
  ],
};
