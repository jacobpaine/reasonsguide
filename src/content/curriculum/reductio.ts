import type { Lesson } from "@/domain/types";

export const reductioLesson: Lesson = {
  id: "reductio",
  title: "Reductio ad absurdum",
  status: "ready",
  labelIds: ["reductio"],
  definition:
    "Reductio ad absurdum proves a claim by assuming its opposite and reasoning from that assumption until a contradiction or manifest absurdity follows — which shows the assumption must be false, and therefore the original claim true. Three moves: assume NOT-P, reason from it consistently, arrive at something impossible; since NOT-P cannot hold, P must.",
  memoryHook: "Assume the opposite; follow the logic; let it break itself.",
  soundsLike: [
    "Suppose, for argument's sake, that the opposite were true...",
    "Follow that to its conclusion and you get a contradiction.",
    "If that were right, then X and not-X would both have to hold.",
    "The position defeats itself: assume it's true and it becomes false.",
  ],
  workedExamples: [
    {
      id: "rd-w1",
      title: "The decree that predates its own evidence",
      passage: [
        "The registrar proved the founding charter's claimed date was wrong.",
        "She assumed, for the argument, that the charter was signed on the date it stated.",
        "But the charter referenced the town seal — which the metalsmith's records showed was cast three weeks after that date.",
        "A document cannot cite an object that did not yet exist; the assumption of the correct date led to an impossibility, so the date was false.",
      ],
      explanation:
        "Watch the structure: the registrar does not dispute the date on handwriting grounds or gut feeling — she *assumes it correct* and follows the logic until it breaks. If the date holds, the seal must predate its making, which is impossible. The impossible conclusion is the proof: NOT-P (the date is wrong) led to absurdity when denied, so P (the date is wrong) must be true. Reductio is recognizable by that backward move — assuming what you want to deny, then letting the assumption destroy itself.",
    },
    {
      id: "rd-w2",
      title: "The bylaw that voids itself",
      passage: [
        "The council's archivist showed that the bylaw 'any decision not recorded in the minutes within 48 hours is void' had never itself been recorded in the minutes.",
        "She assumed the bylaw was valid and in force.",
        "If valid, then any unrecorded decision is void — including the bylaw itself, which was never recorded.",
        "A rule that declares itself void when assumed valid cannot stand; the bylaw, taken at full strength, refuted itself.",
      ],
      explanation:
        "The archivist argues from the bylaw's own terms, not against its purpose. She assumes it is in force and follows that assumption: it applies to all unrecorded decisions; it is itself an unrecorded decision; therefore it applies to itself and voids itself. The contradiction is logical impossibility — the bylaw cannot simultaneously be valid and void. This self-defeating move is reductio's clearest form: the denial of 'the bylaw is void' produces the bylaw's own invalidation.",
    },
  ],
  guidedExamples: [
    {
      id: "rd-g1",
      passage: [
        "The treasurer told the board its 'no exceptions' signing rule was unworkable.",
        "He assumed the rule exactly as written: every payment requires two signatures, with no exceptions whatsoever.",
        "But the board's own emergency protocol required payments to be authorized even when only one member was reachable.",
        "A rule whose strict application prevents what the organization's own framework requires cannot be the intended rule; the 'no exceptions' claim refuted itself.",
      ],
      prompt: "How does the treasurer argue against the rule?",
      hint: "He never says the rule's purpose is wrong. What does he argue from?",
      choices: [
        {
          id: "rd-g1-a",
          text: "He assumes the rule is fully in force and shows that assumption contradicts another requirement the board itself holds.",
          isCorrect: true,
          feedback:
            "Yes — he takes 'no exceptions' at face value and follows it to where it breaks: the emergency protocol requires what the rule forbids. The contradiction with the board's own framework is the proof that 'no exceptions' cannot be correct. That assume-derive-contradict structure is reductio.",
        },
        {
          id: "rd-g1-b",
          text: "He states the rule, raises the strongest objection to it, and proposes an amended version the board can accept.",
          isCorrect: false,
          feedback:
            "That describes dialectical reasoning — taking an objection seriously and revising the position to absorb it. The treasurer doesn't propose an amendment; he proves the rule cannot stand as stated. Dialectic seeks a better position; reductio shows the current position is self-contradictory.",
        },
        {
          id: "rd-g1-c",
          text: "He imagines an emergency scenario to test how the rule would behave in an unusual case.",
          isCorrect: false,
          feedback:
            "A thought experiment explores hypotheticals to reveal what a principle implies or where it breaks down — asking 'what would this rule mean here?' The treasurer is doing something more surgical: he assumes the rule fully in force and derives a contradiction, not a new insight about edge cases. The emergency case is the contradiction, not an exploration.",
        },
      ],
    },
    {
      id: "rd-g2",
      passage: [
        "The inspector proved the authentication certificate was forged without consulting ink samples or handwriting experts.",
        "She assumed it was genuine: a genuine certificate's every claim is true.",
        "One claim read: 'No document predating this registry has legal standing' — and the certificate's own seal predated the registry it cited.",
        "If genuine, the certificate voided itself; a self-voiding authentic document is impossible, so the certificate was forged.",
      ],
      prompt: "The inspector proves the certificate is forged by...",
      hint: "She never compares it to other documents. Where does her proof begin?",
      choices: [
        {
          id: "rd-g2-a",
          text: "Assuming the certificate is genuine and showing that assumption leads to a contradiction in the certificate's own terms.",
          isCorrect: true,
          feedback:
            "Exactly — she grants the certificate full authenticity and follows the consequences: genuine certificates contain only true claims; one claim voids documents predating the registry; the certificate predates the registry; so the certificate voids itself. The impossibility of a self-voiding authentic document means the certificate is not authentic.",
        },
        {
          id: "rd-g2-b",
          text: "Comparing the certificate to known authentic documents and noting what it lacks.",
          isCorrect: false,
          feedback:
            "That would be analogical reasoning — arguing from similarity or dissimilarity to a conclusion. Analogy requires comparison documents; reductio needs only the document itself. The inspector's proof runs entirely from the certificate's own claims, with nothing outside them consulted.",
        },
        {
          id: "rd-g2-c",
          text: "Listing several suspicious features of the certificate that together make forgery the most likely explanation.",
          isCorrect: false,
          feedback:
            "Listing independent considerations and weighing them toward a verdict is conductive reasoning; inferring the best explanation from suspicious signs is abductive. The inspector doesn't accumulate suspicions — she finds a single logical impossibility that is, on its own, conclusive. Reductio doesn't need accumulated evidence; one genuine contradiction closes the case.",
        },
      ],
    },
    {
      id: "rd-g3",
      passage: [
        "A student told the professor: 'You cannot be certain that nothing can be known with certainty.'",
        "If the professor is certain of that claim, she is certain of at least one thing — which contradicts it.",
        "If she is not certain of it, she cannot assert it as established fact.",
        "Either way, the claim that no certainty is possible is self-defeating.",
      ],
      prompt: "What kind of reasoning does the student use?",
      hint: "The student doesn't argue about certainty in general — she argues about this particular claim specifically.",
      choices: [
        {
          id: "rd-g3-a",
          text: "Reductio: she assumes the claim is true and shows it leads to its own negation.",
          isCorrect: true,
          feedback:
            "Right — assume 'no certainty is possible' is certain, and you immediately have a certainty, which the claim denies. The student closes the other escape route too: if uncertain, it can't be asserted as fact. Both paths lead to contradiction. Reductio proves the claim cannot be coherently maintained.",
        },
        {
          id: "rd-g3-b",
          text: "Deductive reasoning, applying the definition of certainty to the professor's claim.",
          isCorrect: false,
          feedback:
            "Deductive reasoning applies a known rule forward to a conclusion that must follow. The student isn't applying a general rule about certainty to a case — she's assuming the professor's specific claim and deriving its own contradiction. The direction matters: deduction goes rule → conclusion; reductio goes assume-NOT-P → contradiction → P.",
        },
        {
          id: "rd-g3-c",
          text: "Inductive reasoning, pointing out that many confident claims have proved wrong.",
          isCorrect: false,
          feedback:
            "Inductive reasoning would generalize from cases: 'many certainties have been overturned, so this one may be too.' The student never cites examples of overturned certainties — she proves the claim is logically self-undermining by following its own assumption to a contradiction. The proof is internal and immediate, not empirical.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "rd-m1",
      passage: [
        "The philosopher proposed that all truths are culture-dependent — that there are no universal truths.",
        "A student replied: if that is a universal truth, it contradicts itself.",
        "If it is not universal but only a culture-dependent claim, it cannot bind anyone outside that culture, and the philosopher cannot assert it to everyone.",
        "Assumed true on either reading, the claim refutes itself.",
      ],
      options: ["reductio", "dialectical", "conceptual"],
      correctLabel: "reductio",
      explanation:
        "The student assumes the philosopher's claim in each of its possible forms and shows each leads to contradiction. No synthesis is sought, no objection answered and absorbed — the claim is shown to be self-defeating by following it. That is reductio, not a dialectical exchange.",
    },
    {
      id: "rd-m2",
      passage: [
        "The council voted on a motion and the clerk recorded it — but the minutes showed the quorum was one short.",
        "The solicitor asked: suppose the vote is valid despite the quorum failure.",
        "Then the quorum rule was effectively suspended — but no one had moved to suspend it, and suspending it also required a quorum.",
        "Assuming the invalid vote valid produced an impossibility; the vote was void.",
      ],
      options: ["reductio", "deductive", "practical"],
      correctLabel: "reductio",
      explanation:
        "The solicitor assumes the vote is valid and follows: a valid quorum-less vote means the quorum rule was suspended, but suspending it required quorum, so the assumption requires what it denies. Deductive reasoning would apply the quorum rule forward to a conclusion; here the move is to assume validity and derive a self-contradiction.",
    },
    {
      id: "rd-m3",
      passage: [
        "The mill's lease ran 'for as long as the river runs.'",
        "When the mill company went bankrupt, the trustee argued the lease was a perpetuity and could not be terminated.",
        "The court applied the duration clause to the facts: the river had run throughout and continued to run.",
        "The lease was therefore still in force.",
      ],
      options: ["deductive", "reductio", "analogical"],
      correctLabel: "deductive",
      explanation:
        "A defined term in a legal instrument is applied forward to a conclusion: 'river still runs' satisfies the duration clause, so the lease holds. There is no assumption of an opposite and no derivation of absurdity — a rule is applied to the facts to produce a necessary result. That's deduction.",
    },
    {
      id: "rd-m4",
      passage: [
        "The committee heard four independent reasons to shorten the grant cycle: faster corrections, better alignment with funder deadlines, reduced administrative backlog, and earlier impact measurement.",
        "Against: the administrative staff would need retraining.",
        "The chair weighed the four gains against the one cost and recommended the shorter cycle.",
      ],
      options: ["conductive", "reductio", "comparative"],
      correctLabel: "conductive",
      explanation:
        "Several independent considerations — four in favor, one against — are weighed to a verdict. The single cost is counted and judged insufficient, not shown to be self-defeating. No opposite is assumed; no contradiction derived. That's the ledger of conductive reasoning, not the contradiction-hunt of reductio.",
    },
    {
      id: "rd-m5",
      passage: [
        "The logician claimed to have found a set containing all sets that do not contain themselves.",
        "Her colleague asked: does that set contain itself?",
        "If yes, it fails the membership rule — it does not contain itself — a contradiction.",
        "If no, it satisfies the rule and must be included — another contradiction.",
        "No such set can exist.",
      ],
      options: ["reductio", "deductive", "inductive"],
      correctLabel: "reductio",
      explanation:
        "Assume the set exists, follow the assumption in each direction, find a contradiction in both. The set cannot exist. The distinctive move is the bifurcated assumption — testing both possibilities and finding each impossible — which closes off the claim completely. This is reductio in its most rigorous mathematical form.",
    },
  ],
  unlockChallenge: [
    {
      id: "rd-u1",
      passage: [
        "The surveyor proved the recorded property boundary was wrong.",
        "She assumed, for the argument, that the boundary as recorded was correct.",
        "But the same deed that drew the boundary also conveyed 'the full orchard including all its corners' — and the recorded line cut one corner off.",
        "A deed cannot correctly establish a boundary that excludes what the same deed conveys; the assumption of a correct boundary contradicted the deed itself.",
      ],
      options: ["reductio", "analogical", "causal"],
      correctLabel: "reductio",
      explanation:
        "Assume the boundary is correct; follow to the deed's conveyance clause; find a contradiction — the deed simultaneously includes and excludes the same corner. The assume-derive-contradict structure is reductio's signature. Analogy would compare this deed to others; causal reasoning would ask what produced the error.",
    },
    {
      id: "rd-u2",
      passage: [
        "The warden proposed closing the forest path each winter for safety.",
        "The villagers objected: the path was the only winter route to the school when the road flooded.",
        "The warden amended the proposal: the path would close only in ice conditions, with flood-road status posted at both ends.",
        "The villagers found the objection fully answered and supported the revised plan.",
      ],
      options: ["dialectical", "reductio", "practical"],
      correctLabel: "dialectical",
      explanation:
        "An objection is taken seriously and absorbed into a revised plan that the objectors confirm as meeting their concern. Nothing is assumed and shown self-contradictory — the position improves through genuine engagement with opposition. That's dialectical reasoning: amendment traceable to the objection, and an objector who can find their point honored inside the result.",
    },
    {
      id: "rd-u3",
      passage: [
        "The clerk argued that no rule-bound body can grant itself unlimited authority to waive its own rules.",
        "Suppose it could: then the power to waive would itself be derived from a rule.",
        "But if the body can waive any rule, it can waive the rule granting it that power — leaving it with none.",
        "Any claimed unlimited waiver authority, assumed to exist, produces its own cancellation.",
      ],
      options: ["reductio", "practical", "conceptual"],
      correctLabel: "reductio",
      explanation:
        "Assume the unlimited waiver authority exists; follow: the body can waive the rule granting that authority; therefore it can eliminate the authority itself. The assumption produces a state in which the authority cannot exist. Self-refutation by the assume-and-derive method is reductio. Conceptual reasoning would ask what authority *as a concept* requires; reductio shows this particular claim is logically self-defeating.",
    },
    {
      id: "rd-u4",
      passage: [
        "A magistrate's standing order read: 'All standing orders must be renewed annually or they lapse.'",
        "A clerk noticed the order had never been renewed.",
        "If the standing order is valid, it requires annual renewal — and since it was never renewed, it has lapsed by its own terms.",
        "A standing order that declares itself lapsed when assumed valid cannot be valid.",
      ],
      options: ["reductio", "deductive", "dialectical"],
      correctLabel: "reductio",
      explanation:
        "The order is assumed valid; that assumption is followed: validity requires renewal, no renewal occurred, therefore it lapsed. The assumption of validity produces evidence of its own invalidity. The self-undermining move is reductio. Deduction would apply the rule forward to a different case; here the rule is turned on itself by assuming it holds.",
    },
    {
      id: "rd-u5",
      passage: [
        "Three geologists, having sampled seven sites across the formation, noted that every site showed the same mineral signature.",
        "They concluded the entire formation was likely of a single depositional origin.",
      ],
      options: ["inductive", "reductio", "abductive"],
      correctLabel: "inductive",
      explanation:
        "Observed cases — seven sites, uniform signature — are generalized to a broader conclusion about the formation as a whole. No opposite is assumed; no contradiction derived. The reasoning runs from a sample to a pattern, which is inductive. Abductive reasoning would ask what single explanation best accounts for the signature; induction here simply extends the pattern.",
    },
  ],
};
