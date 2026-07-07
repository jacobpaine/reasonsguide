import type { Lesson } from "@/domain/types";

export const formalFallaciesLesson: Lesson = {
  id: "formal-fallacies",
  title: "When deduction breaks: formal fallacies",
  status: "ready",
  labelIds: [
    "affirming-consequent",
    "denying-antecedent",
    "undistributed-middle",
    "contradictory-premises",
  ],
  definition:
    "Formal fallacies are deduction with the wiring crossed: the argument borrows deduction's confident shape, but the shape itself is invalid, so true premises can still deliver a false conclusion. Affirming the consequent runs an if–then backward; denying the antecedent closes one road to B and declares B unreachable; the undistributed middle links two things only through a shared category; contradictory premises argue from a pair that cannot both be true.",
  memoryHook: "Deduction's shape without deduction's guarantee.",
  soundsLike: [
    "The step is wet, so it rained. (affirming the consequent)",
    "It didn't rain, so the step can't be wet. (denying the antecedent)",
    "Herons eat fish and otters eat fish, so herons are a kind of otter. (undistributed middle)",
    "No one was there — and they all saw it. (contradictory premises)",
  ],
  workedExamples: [
    {
      id: "fo-w1",
      title: "The rule run backward",
      passage: [
        "The rule is sound: if the night boat came in, the harbor lamp is out by dawn.",
        "This dawn the lamp was out, and the clerk logged the night boat as arrived.",
        "But the keeper douses that lamp for cleaning, in fog, and on his saint's day — the lamp's being out has several roads, and the rule only paves one of them.",
      ],
      explanation:
        "Valid deduction runs 'if A then B; A; therefore B'. The clerk ran it backward: B, therefore A. The rule guarantees the lamp goes out *when* the boat comes; it says nothing about the boat *whenever* the lamp is out. Affirming the consequent always has this cure: list the other roads to B.",
    },
    {
      id: "fo-w2",
      title: "Linked only through the middle",
      passage: [
        "All smugglers land on the north shingle, the excise man reasoned, and the shrimpers land on the north shingle too.",
        "He therefore watched the shrimpers as smugglers-in-waiting.",
        "But 'lands on the north shingle' is where the two groups touch, not what makes them one — everything that shares a beach does not share a trade.",
      ],
      explanation:
        "All A are C; all B are C; therefore A are B. The middle term — landing on the shingle — never covers everything in either group, so it cannot weld them together. The undistributed middle feels like classification, but sound classification sorts by marks that define the kind; this sorts by a property shared with half the county.",
    },
  ],
  guidedExamples: [
    {
      id: "fo-g1",
      passage: [
        "If the well is fouled, the water tastes of iron.",
        "The water tastes of iron this week.",
        "The parish concluded the well was fouled and voted funds to dig it out.",
      ],
      prompt: "What should the parish have checked before voting?",
      hint: "How many things make water taste of iron?",
      choices: [
        {
          id: "fo-g1-a",
          text: "Whether iron taste has other causes — new pipes, high groundwater — since the rule only runs from fouling to taste, not back.",
          isCorrect: true,
          feedback:
            "Yes: affirming the consequent. The if–then licenses one direction. The taste is consistent with fouling, not proof of it — and the parish's own new pump-irons were the likelier road.",
        },
        {
          id: "fo-g1-b",
          text: "Whether the water truly tastes of iron, since testimony about taste is weak.",
          isCorrect: false,
          feedback:
            "The premise can be granted — the flaw survives it. Even certain iron taste doesn't force 'fouled well'; the arrow points the wrong way.",
        },
        {
          id: "fo-g1-c",
          text: "Nothing — with both premises true, the conclusion is guaranteed.",
          isCorrect: false,
          feedback:
            "That's true of valid shapes only. 'If A then B; B; so A' is not one of them: a wet step doesn't prove rain while the washing hangs above it.",
        },
      ],
    },
    {
      id: "fo-g2",
      passage: [
        "If a member signs the book, he may vote at the meeting.",
        "Corran never signed the book.",
        "So, the secretary ruled, Corran may not vote.",
      ],
      prompt: "Why doesn't the ruling follow from the rule as stated?",
      hint: "Does the rule say signing is the only way to a vote?",
      choices: [
        {
          id: "fo-g2-a",
          text: "The rule gives one sufficient route to voting, not the sole route — founders, for instance, voted by charter without signing.",
          isCorrect: true,
          feedback:
            "Right: denying the antecedent. 'If A then B' plus 'not A' leaves B open — B may arrive by other doors. The secretary needed 'only if he signs', a different and stronger rule.",
        },
        {
          id: "fo-g2-b",
          text: "The rule is unfair, so no conclusion from it binds anyone.",
          isCorrect: false,
          feedback:
            "Fair or not, the question is what the rule's logic yields — and 'not A, therefore not B' isn't it. Judge validity first, justice separately.",
        },
        {
          id: "fo-g2-c",
          text: "It does follow — the rule connects signing and voting, and Corran broke the connection.",
          isCorrect: false,
          feedback:
            "The connection runs one way. Blocking one road to B doesn't close them all; that's the fallacy's memory hook, and the founders' charter is the open road.",
        },
      ],
    },
    {
      id: "fo-g3",
      passage: [
        "The advocate's case for his client ran: the man was in the tavern all evening, as three friends swear.",
        "And when the window broke, he fled the churchyard in panic, as anyone innocent might.",
        "The magistrate put down her pen: a man in the tavern all evening was never in the churchyard to flee it.",
      ],
      prompt: "What has the magistrate noticed?",
      hint: "Set the two premises beside each other.",
      choices: [
        {
          id: "fo-g3-a",
          text: "The premises contradict each other — both cannot be true, so nothing can be argued from the pair.",
          isCorrect: true,
          feedback:
            "Yes: contradictory premises. Each premise might excuse the client alone; together they cancel. An argument may pick either story, but an argument built on both is built on nothing.",
        },
        {
          id: "fo-g3-b",
          text: "The friends are lying, so the first premise is false.",
          isCorrect: false,
          feedback:
            "Perhaps — but the magistrate hasn't judged the witnesses. Her point is prior and structural: whichever premise is true, the *pair* cannot be, so the case self-destructs before evidence is weighed.",
        },
        {
          id: "fo-g3-c",
          text: "Fleeing proves guilt, so the second premise sinks the client.",
          isCorrect: false,
          feedback:
            "Flight proves little either way — but that's a different discussion. The magistrate's pen stopped at the clash between the premises, not at what one of them implies.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "fo-m1",
      passage: [
        "If the hives swarm, the orchard falls quiet by noon.",
        "The orchard was quiet by noon.",
        "So the hives have swarmed, said the new keeper, reaching for the swarm-box.",
      ],
      options: ["affirming-consequent", "denying-antecedent", "deductive"],
      correctLabel: "affirming-consequent",
      explanation:
        "Quiet is the consequent, and it has other parents — cold, rain, a robbed hive. The rule runs from swarm to quiet; the keeper ran it backward.",
    },
    {
      id: "fo-m2",
      passage: [
        "Any boat flying the yellow flag must anchor in the quarantine reach.",
        "The Petrel flies the yellow flag.",
        "So the Petrel must anchor in the quarantine reach.",
      ],
      options: ["deductive", "affirming-consequent", "undistributed-middle"],
      correctLabel: "deductive",
      explanation:
        "Rule forward, condition met, conclusion forced — the valid shape the fallacies counterfeit. Keep recognizing the healthy form among its failures.",
    },
    {
      id: "fo-m3",
      passage: [
        "If the frost comes before the fair, the cider apples are lost.",
        "The frost held off this year.",
        "So the apples are safe, the steward announced — three days before the blight took them.",
      ],
      options: ["denying-antecedent", "affirming-consequent", "contradictory-premises"],
      correctLabel: "denying-antecedent",
      explanation:
        "No frost removes one threat, not all of them. 'If A then B; not A; so not B' forgets that B — lost apples — has other roads, and the blight walked one.",
    },
    {
      id: "fo-m4",
      passage: [
        "All the manor's deeds are kept in oak chests, the searcher reasoned, and this chest is oak.",
        "So this chest holds manor deeds — and he had it carried up three flights before opening it on the gardener's bulbs.",
      ],
      options: ["undistributed-middle", "affirming-consequent", "classification"],
      correctLabel: "undistributed-middle",
      explanation:
        "Deeds-chests and this chest meet only in the middle term 'oak' — which covers half the furniture in the county. Shared material, not shared contents.",
    },
    {
      id: "fo-m5",
      passage: [
        "The petition argued the footpath had been walked continuously since the abbey's time.",
        "It argued in the same breath that the path was newly needed, no way across the valley having existed before the mill came.",
        "The commissioners declined to grant what the petition gave and took away in alternating lines.",
      ],
      options: ["contradictory-premises", "denying-antecedent", "begging-the-question"],
      correctLabel: "contradictory-premises",
      explanation:
        "Walked since the abbey, and no way across before the mill — the premises unmake each other, and a case can stand on either but not both.",
    },
  ],
  unlockChallenge: [
    {
      id: "fo-u1",
      passage: [
        "If the beacon was lit, the fleet turned home before the storm.",
        "The fleet turned home before the storm.",
        "So the beacon was lit, the wreck inquiry concluded — closing the file on the keeper.",
      ],
      options: ["affirming-consequent", "deductive", "denying-antecedent"],
      correctLabel: "affirming-consequent",
      explanation:
        "The fleet had other reasons to turn — falling glass, a full hold. The consequent arrived; the antecedent was inferred backward, and the keeper deserved a better inquiry.",
    },
    {
      id: "fo-u2",
      passage: [
        "If a candidate is guild-trained, she may sit the assay.",
        "Mira is not guild-trained.",
        "So Mira may not sit the assay, ruled the warden — though the statute's next line admitted any candidate a master vouches for.",
      ],
      options: ["denying-antecedent", "undistributed-middle", "special-pleading"],
      correctLabel: "denying-antecedent",
      explanation:
        "One sufficient route denied, all routes declared closed — with the second route printed a line below. Not-A leaves B standing wherever another door opens.",
    },
    {
      id: "fo-u3",
      passage: [
        "Everything the late collector loved is in this room, said the heir, and everything valuable he owned is in this room too.",
        "Therefore everything he loved is valuable — and she priced the pressed seaweed accordingly.",
      ],
      options: ["undistributed-middle", "contradictory-premises", "composition"],
      correctLabel: "undistributed-middle",
      explanation:
        "Loved things and valuable things share only the room — the middle term. Two groups in one place are still two groups, as the seaweed's buyer explained.",
    },
  ],
};
