import type { Lesson } from "@/domain/types";

export const claimSupportLesson: Lesson = {
  id: "claim-support",
  title: "Claim and support",
  status: "ready",
  labelIds: ["claim-support"],
  definition:
    "An argument begins when someone makes a claim — a statement offered as true — and gives support: reasons, evidence, or examples meant to make the claim believable. Before judging any argument, first find the claim, then find what is holding it up.",
  memoryHook: "Find the claim; find what holds it up.",
  soundsLike: [
    "I think X, because…",
    "The evidence suggests…",
    "…and that's why I believe it.",
  ],
  workedExamples: [
    {
      id: "cs-w1",
      title: "A claim with two supports",
      passage: [
        "The community garden should stay open through the winter.",
        "Attendance in November was higher than it was in July.",
        "Three volunteers have already offered to shovel the paths.",
      ],
      explanation:
        "The first sentence is the claim — the thing being argued for. The second offers evidence (people actually come in cold months), and the third answers a practical objection (someone will maintain it). Both sentences exist to hold the claim up.",
    },
    {
      id: "cs-w2",
      title: "Support from observation",
      passage: [
        "The nights here must be getting colder year over year.",
        "The maples turned two weeks earlier than last autumn, and the dahlias were blackened by the tenth of October.",
      ],
      explanation:
        "The claim comes first; the support is a pair of observations offered as signs that the claim is true. Notice that support doesn't have to be numbers — it just has to give you a reason to believe.",
    },
  ],
  guidedExamples: [
    {
      id: "cs-g1",
      passage: [
        "Marisol says the new bakery will not last a year.",
        "Rents on that block have doubled since spring.",
        "Two cafés there closed before their leases ended.",
      ],
      prompt: "Which sentence states the claim being supported?",
      hint: "The claim is the sentence the others are trying to make believable.",
      choices: [
        {
          id: "cs-g1-a",
          text: "“Marisol says the new bakery will not last a year.”",
          isCorrect: true,
          feedback:
            "Yes. The prediction about the bakery is what's at stake; the other two sentences are reasons to believe it.",
        },
        {
          id: "cs-g1-b",
          text: "“Rents on that block have doubled since spring.”",
          isCorrect: false,
          feedback:
            "This is support — a fact offered as a reason the bakery might fail. The claim is the prediction it props up.",
        },
        {
          id: "cs-g1-c",
          text: "“Two cafés there closed before their leases ended.”",
          isCorrect: false,
          feedback:
            "This is also support. Ask: which sentence would collapse if the reasons were taken away? That one is the claim.",
        },
      ],
    },
    {
      id: "cs-g2",
      passage: [
        "You should take the coastal train instead of driving.",
        "It arrives downtown before the morning meetings start.",
        "Parking near the office costs more than the ticket.",
      ],
      prompt: "What are the second and third sentences doing?",
      hint: "Ask what work each sentence is doing for the first one.",
      choices: [
        {
          id: "cs-g2-a",
          text: "They give support: reasons to accept the recommendation.",
          isCorrect: true,
          feedback:
            "Right. Each one supplies a reason — timing and cost — that makes the recommendation worth believing.",
        },
        {
          id: "cs-g2-b",
          text: "They make separate, unrelated claims.",
          isCorrect: false,
          feedback:
            "They could stand alone, but here they're doing a job: giving you reasons to accept the first sentence.",
        },
        {
          id: "cs-g2-c",
          text: "They restate the claim in different words.",
          isCorrect: false,
          feedback:
            "Restating a claim adds no support. These sentences add new information that counts in the claim's favor.",
        },
      ],
    },
    {
      id: "cs-g3",
      passage: [
        "This is simply the best translation of the novel available.",
        "Everyone who matters agrees.",
      ],
      prompt: "What is missing from this argument?",
      hint: "Is there anything here you could actually check?",
      choices: [
        {
          id: "cs-g3-a",
          text: "Genuine support — the second sentence just gestures at agreement.",
          isCorrect: true,
          feedback:
            "Exactly. “Everyone who matters agrees” names no one and cites nothing. A claim without checkable support is a bare assertion.",
        },
        {
          id: "cs-g3-b",
          text: "A claim — nothing is being asserted.",
          isCorrect: false,
          feedback:
            "There's definitely a claim (“the best translation”). What's thin is the support offered for it.",
        },
        {
          id: "cs-g3-c",
          text: "Nothing — this is a fully supported argument.",
          isCorrect: false,
          feedback:
            "Look at what you could verify. Vague appeals to unnamed agreement give you no way to check the claim.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "cs-m1",
      passage: [
        "The bridge repairs should be finished before the festival.",
        "The contractor completed the north span three days early, and the remaining work is smaller.",
      ],
      options: ["claim-support", "deductive", "inductive"],
      correctLabel: "claim-support",
      explanation:
        "A prediction is claimed, and two facts are offered as reasons to believe it. That claim-plus-reasons shape is the heart of claim and support.",
    },
    {
      id: "cs-m2",
      passage: [
        "Every member of the choir is a volunteer.",
        "Tomas is a member of the choir.",
        "So Tomas is a volunteer.",
      ],
      options: ["claim-support", "deductive", "inductive"],
      correctLabel: "deductive",
      explanation:
        "This is a preview of the next chapter: a general rule applied to a specific case, where the conclusion must follow. It's more than support — it's rule-based certainty.",
    },
    {
      id: "cs-m3",
      passage: [
        "The old lighthouse is worth the detour.",
        "The keeper's log from 1911 is displayed inside, and the view reaches three counties on a clear day.",
      ],
      options: ["claim-support", "deductive", "inductive"],
      correctLabel: "claim-support",
      explanation:
        "A recommendation backed by two concrete reasons. Neither reason forces the conclusion — they simply hold it up.",
    },
    {
      id: "cs-m4",
      passage: [
        "The ferry has left the dock at 7:05 every morning this month.",
        "It will probably leave at 7:05 tomorrow.",
      ],
      options: ["claim-support", "inductive", "deductive"],
      correctLabel: "inductive",
      explanation:
        "Another preview: this argues from a repeated pattern to a likely next case. Pattern-based likelihood is inductive reasoning, coming up soon.",
    },
    {
      id: "cs-m5",
      passage: [
        "We should replant the east slope with native grasses.",
        "They need no irrigation once established.",
        "Their roots held the west slope through last year's storms.",
      ],
      options: ["claim-support", "deductive", "inductive"],
      correctLabel: "claim-support",
      explanation:
        "One claim, two independent reasons. Notice how each reason could be checked on its own — that's what makes it support rather than restatement.",
    },
  ],
  unlockChallenge: [
    {
      id: "cs-u1",
      passage: [
        "The night market should move indoors for January.",
        "Vendor sign-ups drop by half when temperatures fall below freezing.",
        "The armory hall is free that month and holds every stall.",
      ],
      options: ["claim-support", "deductive", "inductive"],
      correctLabel: "claim-support",
      explanation:
        "A proposal held up by two checkable reasons: a pattern in sign-ups and an available venue.",
    },
    {
      id: "cs-u2",
      passage: [
        "Anyone can see this is the finest orchard in the valley.",
        "It just is, and always has been.",
      ],
      options: ["claim-support", "inductive", "deductive"],
      correctLabel: "claim-support",
      explanation:
        "This is claim and support in form — but notice the support is empty. Learning to see the shape is the first step; judging its strength comes later.",
    },
    {
      id: "cs-u3",
      passage: [
        "The reading room needs a second exit.",
        "The fire code requires two exits for rooms over fifty occupants, and the room seats eighty.",
      ],
      options: ["claim-support", "deductive", "inductive"],
      correctLabel: "deductive",
      explanation:
        "The support here is a rule plus a fact that together *require* the conclusion — a taste of deduction, your next chapter.",
    },
  ],
};
