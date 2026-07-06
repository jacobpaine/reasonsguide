import type { Lesson } from "@/domain/types";

export const abductiveLesson: Lesson = {
  id: "abductive",
  title: "Abductive reasoning",
  status: "ready",
  labelIds: ["abductive"],
  definition:
    "Abductive reasoning starts from a surprising or puzzling observation and infers the explanation that best accounts for it. The conclusion is a hypothesis — the strongest candidate among rivals — held provisionally until better evidence arrives.",
  memoryHook: "Abduction = the best explanation of the clues.",
  soundsLike: [
    "The most likely explanation is…",
    "That would account for why…",
    "Something must have… — it's the only thing that fits.",
  ],
  workedExamples: [
    {
      id: "ab-w1",
      title: "Explaining the wet lane",
      passage: [
        "The lane outside the shop is wet, but only under the awning's broken gutter.",
        "The sky has been clear all morning.",
        "The best explanation is that someone hosed the pavement — or the gutter dripped overnight condensation.",
        "Since the wet patch traces the gutter's line exactly, the gutter is the better fit.",
      ],
      explanation:
        "The reasoning weighs rival explanations against the details of the clue. Rain fails (clear sky); hosing fails (the patch follows the gutter). Choosing the hypothesis that fits the evidence best — and saying why the rivals fit worse — is abduction's whole method.",
    },
    {
      id: "ab-w2",
      title: "The missing marginalia",
      passage: [
        "The library's 1902 atlas has pencil notes in every chapter except the coastal maps.",
        "Those pages also lie flatter than the rest.",
        "The likeliest explanation is that the coastal pages are later replacements, bound in after the original owner's time.",
      ],
      explanation:
        "Two odd details — missing notes and flatter pages — are explained at a stroke by one hypothesis. A good abduction covers all the clues with the least strain; explaining both oddities with one cause is what makes this explanation best.",
    },
  ],
  guidedExamples: [
    {
      id: "ab-g1",
      passage: [
        "Flour dusts the kitchen counter, and the mixing bowl is still warm from the oven's heat.",
        "The most likely explanation is that someone was baking within the hour.",
      ],
      prompt: "What makes this abductive rather than inductive?",
      hint: "Is the reasoner projecting a pattern, or accounting for clues?",
      choices: [
        {
          id: "ab-g1-a",
          text: "It infers a hidden cause that would explain the observed traces.",
          isCorrect: true,
          feedback:
            "Yes. Nobody saw the baking; it's posited because it accounts for the flour and the warmth better than anything else would.",
        },
        {
          id: "ab-g1-b",
          text: "It projects a pattern of past baking onto today.",
          isCorrect: false,
          feedback:
            "No track record of baking days appears. The argument works backward from present clues to their best explanation.",
        },
        {
          id: "ab-g1-c",
          text: "A rule about kitchens guarantees someone baked.",
          isCorrect: false,
          feedback:
            "No rule could guarantee it — the flour might have spilled while cleaning. That's why the conclusion stays 'most likely', not certain.",
        },
      ],
    },
    {
      id: "ab-g2",
      passage: [
        "The beehives are quiet, though it's a warm afternoon in June.",
        "There's no smell of smoke, and the entrances aren't blocked.",
        "The keeper concludes the colony has likely swarmed.",
      ],
      prompt: "Why mention the smoke and the entrances at all?",
      hint: "What is the keeper doing to the other candidate explanations?",
      choices: [
        {
          id: "ab-g2-a",
          text: "Ruling out rival explanations, which strengthens the remaining one.",
          isCorrect: true,
          feedback:
            "Exactly. Abduction earns 'best explanation' by comparison. Eliminating smoke-calmed and trapped bees leaves swarming as the strongest fit.",
        },
        {
          id: "ab-g2-b",
          text: "Adding more examples of quiet hives.",
          isCorrect: false,
          feedback:
            "They aren't further cases of a pattern — they're checks against competing explanations for this one puzzling hive.",
        },
        {
          id: "ab-g2-c",
          text: "Applying the definition of a swarm.",
          isCorrect: false,
          feedback:
            "The definition of swarming isn't in play. What matters is which explanation survives the elimination of rivals.",
        },
      ],
    },
    {
      id: "ab-g3",
      passage: [
        "The violin's case came back with a cracked handle and a customs sticker from a country not on the tour.",
        "The likeliest explanation is that the airline rerouted the luggage through a different hub.",
      ],
      prompt: "What would most weaken this explanation?",
      hint: "Abductions stay open to better-fitting rivals.",
      choices: [
        {
          id: "ab-g3-a",
          text: "Learning the sticker was left over from a trip two years ago.",
          isCorrect: true,
          feedback:
            "Right. That removes the key clue the hypothesis was built to explain — and a rival story (old sticker, unrelated crack) may now fit better. Abductive conclusions are held provisionally for exactly this reason.",
        },
        {
          id: "ab-g3-b",
          text: "Learning that most luggage arrives undamaged.",
          isCorrect: false,
          feedback:
            "General statistics don't touch the specific clues here. The explanation answers this sticker and this crack, not luggage in general.",
        },
        {
          id: "ab-g3-c",
          text: "Learning the violinist dislikes flying.",
          isCorrect: false,
          feedback:
            "Feelings about flying explain none of the evidence. A weakening fact must change how well the hypothesis fits the clues.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "ab-m1",
      passage: [
        "The rowboat is on the wrong side of the lake, and the oars are stowed neatly.",
        "The best explanation is that the caretaker crossed this morning and walked back on the shore path.",
      ],
      options: ["abductive", "inductive", "deductive"],
      correctLabel: "abductive",
      explanation: "A hypothesis is inferred because it accounts for both clues — the boat's position and the stowed oars.",
    },
    {
      id: "ab-m2",
      passage: [
        "Every one of the caretaker's log entries this year is dated before 8 a.m.",
        "Tomorrow's entry will probably be dated before 8 a.m. too.",
      ],
      options: ["inductive", "abductive", "deductive"],
      correctLabel: "inductive",
      explanation: "This projects a pattern forward. Nothing is being explained — that's the line between induction and abduction.",
    },
    {
      id: "ab-m3",
      passage: [
        "Only staff hold keys to the seed vault.",
        "The vault was opened with a key last night.",
        "So a staff member opened it.",
      ],
      options: ["deductive", "abductive", "inductive"],
      correctLabel: "deductive",
      explanation:
        "Granting the premises, the conclusion is forced — key use plus staff-only keys leaves no alternative. No weighing of explanations happens.",
    },
    {
      id: "ab-m4",
      passage: [
        "The tomatoes on the east fence wilted overnight, while the rest of the garden is fine.",
        "The likeliest explanation is that the frost pooled along the fence line, where the ground dips.",
      ],
      options: ["abductive", "deductive", "claim-support"],
      correctLabel: "abductive",
      explanation:
        "A local, surprising difference is explained by a hypothesis that fits its exact shape — cold air settling in the dip.",
    },
    {
      id: "ab-m5",
      passage: [
        "The museum should extend Thursday hours.",
        "Evening visits doubled during the trial month, and the night staff have asked to keep the shift.",
      ],
      options: ["claim-support", "abductive", "inductive"],
      correctLabel: "claim-support",
      explanation:
        "Reasons are holding up a proposal. Nothing puzzling is being explained; no pattern is being projected.",
    },
  ],
  unlockChallenge: [
    {
      id: "ab-u1",
      passage: [
        "Mail has piled up for a week at the blue house, but the geraniums are freshly watered.",
        "The best explanation is that the owners are away and a neighbor is tending the plants.",
      ],
      options: ["abductive", "inductive", "deductive"],
      correctLabel: "abductive",
      explanation:
        "One hypothesis neatly covers two clues that pull in different directions — absence (the mail) and presence (the watering).",
    },
    {
      id: "ab-u2",
      passage: [
        "Whenever the mill's wheel jams, the pond rises by evening.",
        "The wheel jammed at noon, so the pond will probably rise by evening.",
      ],
      options: ["inductive", "abductive", "deductive"],
      correctLabel: "inductive",
      explanation: "A reliable pattern projected onto the current case. The pond's rise isn't a puzzle being explained — it's a prediction.",
    },
    {
      id: "ab-u3",
      passage: [
        "The choir's sheet music smells faintly of woodsmoke, and the folder edges are warped.",
        "The likeliest explanation is that the music was stored near the vestry stove over the winter.",
      ],
      options: ["abductive", "deductive", "claim-support"],
      correctLabel: "abductive",
      explanation: "Two odd traces, one storage hypothesis that explains both. Best-explanation reasoning, held provisionally.",
    },
  ],
};
