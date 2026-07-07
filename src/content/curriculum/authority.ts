import type { Lesson } from "@/domain/types";

export const authorityLesson: Lesson = {
  id: "authority",
  title: "Authority and testimony",
  status: "ready",
  labelIds: ["authority"],
  definition:
    "Authority reasoning accepts a claim because a credible source vouches for it. Most of what anyone knows arrives this way, and it is perfectly good reasoning — as strong as the source's expertise in the relevant domain, their track record and incentives, and the agreement of other qualified sources.",
  memoryHook: "Trust the source as far as their expertise reaches — and no farther.",
  soundsLike: [
    "According to the surveyor…",
    "She's spent forty years on exactly this.",
    "Every reference work agrees on the point.",
  ],
  workedExamples: [
    {
      id: "au-w1",
      title: "The pilot's word",
      passage: [
        "The chart showed three fathoms over the bar, but the harbor pilot said the winter storms had moved the sand, and to take the northern passage.",
        "The captain had never known Pilot Okafor wrong about this harbor in twenty years of crossings.",
        "She took the northern passage on his word.",
      ],
      explanation:
        "The captain believes a claim she cannot check herself, and the belief is well placed: the pilot's expertise is exactly about this harbor, his track record is long and known to her, and he bears the consequences of being wrong alongside her. Those three checks — relevant domain, record, incentives — are what separate good authority reasoning from mere deference.",
    },
    {
      id: "au-w2",
      title: "Where the expertise ends",
      passage: [
        "The village trusted Dr. Imrey on fevers and setting bones, and rightly — she had trained for it and her patients mended.",
        "When she pronounced on the best way to drain the lower field, the farmers listened politely and then asked the ditcher.",
        "Her authority ran exactly as far as her training did, and the village had the sense to notice where it stopped.",
      ],
      explanation:
        "Expertise does not transfer between domains. The same person can be an excellent authority on one question and an ordinary guesser on the next. Testing whether the source's competence covers *this* claim — not whether the source is impressive in general — is the heart of the skill.",
    },
  ],
  guidedExamples: [
    {
      id: "au-g1",
      passage: [
        "The auctioneer's catalogue called the desk seventeenth-century.",
        "So did the retired cabinetmaker who had restored such desks for fifty years and had no stake in the sale.",
        "Bel put more weight on the cabinetmaker's opinion than the catalogue's.",
      ],
      prompt: "Why is Bel right to weigh the two sources differently?",
      hint: "Both sources claim expertise. What else differs between them?",
      choices: [
        {
          id: "au-g1-a",
          text: "The cabinetmaker has deep relevant expertise and nothing to gain, while the catalogue profits from a grander date.",
          isCorrect: true,
          feedback:
            "Yes. Authority reasoning weighs incentives alongside expertise. The auctioneer may know furniture too — but his interest in a higher price is a standing reason to discount his dating, where the cabinetmaker's disinterest is a reason to trust hers.",
        },
        {
          id: "au-g1-b",
          text: "Catalogues are printed, and printed claims are less reliable than spoken ones.",
          isCorrect: false,
          feedback:
            "The medium is beside the point — printed reference works are often the best sources we have. What matters is who stands behind the claim, with what expertise and what stake.",
        },
        {
          id: "au-g1-c",
          text: "The cabinetmaker is older, and older opinions carry more weight.",
          isCorrect: false,
          feedback:
            "Age alone confers nothing. It's the fifty years spent on *these desks* — domain-specific experience — plus the absence of a stake that earns the extra weight.",
        },
      ],
    },
    {
      id: "au-g2",
      passage: [
        "A famous singer, beloved across three counties, endorsed a method for locating well water with a brass rod.",
        "The village's two well-diggers, between them eighty years in the trade, said the method found water exactly as often as guessing.",
        "The parish sank its well where the diggers said.",
      ],
      prompt: "What principle did the parish apply?",
      hint: "Fame is a kind of authority — but authority over what?",
      choices: [
        {
          id: "au-g2-a",
          text: "Expertise must be in the relevant domain — a great singer is no authority on groundwater.",
          isCorrect: true,
          feedback:
            "Exactly. The singer's authority is real, but it is authority about singing. Testimony borrows its strength from competence at the specific question, and celebrity is competence at nothing in particular.",
        },
        {
          id: "au-g2-b",
          text: "Never trust anyone's testimony; only direct observation counts.",
          isCorrect: false,
          feedback:
            "The parish did trust testimony — the diggers'. Refusing all authority would leave us knowing almost nothing; the skill is choosing whose word bears on the question.",
        },
        {
          id: "au-g2-c",
          text: "The majority is always right, and the diggers outnumbered the singer.",
          isCorrect: false,
          feedback:
            "Two against one isn't the argument. Had the singer been joined by ten more singers, the diggers' relevant expertise would still carry the day.",
        },
      ],
    },
    {
      id: "au-g3",
      passage: [
        "Three respected almanac-makers predicted a hard winter; two others, equally respected, predicted a mild one.",
        "The innkeeper laid in a middling store of wood and resolved to watch the sky herself.",
      ],
      prompt: "What does expert disagreement do to authority reasoning?",
      hint: "The innkeeper neither ignored the almanacs nor picked a favorite.",
      choices: [
        {
          id: "au-g3-a",
          text: "It weakens the force of any one expert's word, so conclusions should be held more loosely.",
          isCorrect: true,
          feedback:
            "Right. Authority is strongest when qualified sources converge. When they split, the honest response is lowered confidence and hedged bets — exactly the innkeeper's middling woodpile.",
        },
        {
          id: "au-g3-b",
          text: "It proves that almanac-making is no real expertise at all.",
          isCorrect: false,
          feedback:
            "Disagreement at the hard edges doesn't erase a discipline — physicians disagree over difficult cases and remain worth consulting. It signals uncertainty, not fraud.",
        },
        {
          id: "au-g3-c",
          text: "Nothing — she should trust whichever three formed the majority.",
          isCorrect: false,
          feedback:
            "A 3–2 split among equals is nearly a coin toss, not a verdict. Counting heads helps only when the margin is wide and the heads are independent.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "au-m1",
      passage: [
        "The bridge inspector, licensed and twenty years at the work, tagged the footbridge unsafe after her survey.",
        "The parish closed it that afternoon on her finding.",
      ],
      options: ["authority", "claim-support", "deductive"],
      correctLabel: "authority",
      explanation:
        "The parish accepts the claim on the strength of the source — relevant, credentialed, experienced. They didn't inspect the bridge; they weighed the inspector.",
    },
    {
      id: "au-m2",
      passage: [
        "The footbridge should be rebuilt in oak rather than pine.",
        "Oak lasts three times as long in wet crossings, and the price gap has narrowed since the new sawmill opened.",
      ],
      options: ["claim-support", "authority", "inductive"],
      correctLabel: "claim-support",
      explanation:
        "Two checkable reasons hold up a recommendation. No one's say-so is doing the work — the facts themselves are offered as support.",
    },
    {
      id: "au-m3",
      passage: [
        "Every gardening manual on the shelf, and the county's plant registrar besides, identifies the vine as bittersweet nightshade.",
        "Tam labeled it nightshade and fenced the chickens away from it.",
      ],
      options: ["authority", "abductive", "statistical"],
      correctLabel: "authority",
      explanation:
        "Converging expert sources — the manuals and the registrar — settle the identification. Agreement among independent authorities is testimony at its strongest.",
    },
    {
      id: "au-m4",
      passage: [
        "The ferryman has called the afternoon chop right every day this season.",
        "He says tomorrow will be rough, so it probably will be.",
      ],
      options: ["authority", "inductive", "causal"],
      correctLabel: "authority",
      explanation:
        "The conclusion rests on his word, credentialed by his track record. (The record is what certifies the source — but it's still his testimony, not your own pattern, doing the work.)",
    },
    {
      id: "au-m5",
      passage: [
        "Every boat the old wright has caulked stayed dry through its first three winters.",
        "The boat she caulked for us this spring will probably stay dry too.",
      ],
      options: ["inductive", "authority", "claim-support"],
      correctLabel: "inductive",
      explanation:
        "Here the reasoner projects an observed pattern in the wright's *work*, not a claim from her mouth. No testimony is accepted — a track record is extended. That's induction.",
    },
  ],
  unlockChallenge: [
    {
      id: "au-u1",
      passage: [
        "The assayer's report, stamped and signed, put the ore at too low a grade to mine.",
        "The company let the claim lapse on the report's authority.",
      ],
      options: ["authority", "statistical", "claim-support"],
      correctLabel: "authority",
      explanation:
        "A qualified source's finding is accepted as settling the matter — the company weighed the assayer, not the ore.",
    },
    {
      id: "au-u2",
      passage: [
        "The lighthouse keeper says the northern shoal has shifted east since the charts were drawn.",
        "He watches that water every day of his life, and no one contradicts him.",
        "The fishing boats now round the shoal wide to the east.",
      ],
      options: ["authority", "abductive", "inductive"],
      correctLabel: "authority",
      explanation:
        "Daily, domain-specific observation plus an uncontradicted record make the keeper's testimony strong — and testimony is what the boats are steering by.",
    },
    {
      id: "au-u3",
      passage: [
        "We should trust the new bell-founder with the recasting.",
        "Her Marlow bell has rung true for a decade, the cathedral works trained her, and the guild lists not one complaint against her name.",
      ],
      options: ["claim-support", "authority", "deductive"],
      correctLabel: "claim-support",
      explanation:
        "Careful: this is an argument *about* whom to trust, giving three checkable reasons for a recommendation. Nothing is yet believed on her say-so — that comes later, when she speaks about bells.",
    },
  ],
};
