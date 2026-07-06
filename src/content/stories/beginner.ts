import type { PracticeStory } from "@/domain/types";

/**
 * Beginner stories for the first practice unlock: deduction, induction,
 * and abduction. Targets are clearly signposted; neutral sentences carry
 * scene-setting only. Authoring rules: .claude/skills/story-creation.
 */

export const beginnerStories: readonly PracticeStory[] = [
  {
    id: "story-greenhouse",
    title: "The Locked Greenhouse",
    difficulty: "beginner",
    includedLabels: ["deductive", "abductive"],
    sentences: [
      {
        id: "gh-1",
        text: "Frost had come early to the hill gardens, and Alba walked the rows with her coat buttoned to the chin.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-2",
        text: "The greenhouse door stood locked, yet inside, a watering can sat in the middle of the aisle where no one would leave it overnight.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-3",
        text: "Only the head gardener and the caretaker hold keys, so whoever moved that can must be one of those two.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "gh-3-a",
        explanationOptions: [
          {
            id: "gh-3-a",
            text: "A rule about who holds keys forces the conclusion: if the door was used, it must have been one of the two key-holders.",
          },
          {
            id: "gh-3-b",
            text: "Past experience shows gardeners usually forget watering cans, so this was probably a gardener.",
          },
          {
            id: "gh-3-c",
            text: "The watering can is the surprising clue, and a gardener's visit is the best explanation for it.",
          },
        ],
      },
      {
        id: "gh-4",
        text: "Alba tried the caretaker's cottage first, but his boots were dry and the path from his door was unswept snow.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-5",
        text: "The likeliest explanation, then, was that the head gardener had come before dawn to move the tender seedlings away from the glass.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "gh-5-b",
        explanationOptions: [
          {
            id: "gh-5-a",
            text: "A rule about greenhouse keys guarantees that the head gardener was the one who entered.",
          },
          {
            id: "gh-5-b",
            text: "With the caretaker ruled out by the unswept snow, the gardener's pre-dawn visit is the explanation that best fits all the clues.",
          },
          {
            id: "gh-5-c",
            text: "The gardener has come before dawn every frost this year, so she probably did again.",
          },
        ],
      },
      {
        id: "gh-6",
        text: "Sure enough, the seedling trays had been shifted to the stone bench along the warm north wall.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-trains",
    title: "Morning Trains",
    difficulty: "beginner",
    includedLabels: ["inductive", "deductive"],
    sentences: [
      {
        id: "tr-1",
        text: "Jonas had taken the 7:12 from Elm Junction every working day since the spring timetable began.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-2",
        text: "In all those months, the 7:12 had never once arrived ahead of the slower 7:04 local.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-3",
        text: "So when a stranger on the platform asked which train reached the city first, Jonas said the 7:04 would almost certainly win again today.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "tr-3-a",
        explanationOptions: [
          {
            id: "tr-3-a",
            text: "Months of observed arrivals form a pattern, which Jonas projects onto today as a strong likelihood.",
          },
          {
            id: "tr-3-b",
            text: "The timetable's rules make it logically necessary that the 7:04 arrives first.",
          },
          {
            id: "tr-3-c",
            text: "The stranger's question is puzzling, and the 7:04's speed is the best explanation for it.",
          },
        ],
      },
      {
        id: "tr-4",
        text: "The stranger frowned at his ticket, a paper monthly pass stamped in red.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-5",
        text: "Monthly passes are valid only on local services, and the 7:12 is an express, so his pass would not carry him aboard it in any case.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "tr-5-c",
        explanationOptions: [
          {
            id: "tr-5-c",
            text: "Two rules — passes valid only on locals, the 7:12 being an express — together make the conclusion inescapable.",
          },
          {
            id: "tr-5-d",
            text: "Conductors have turned away pass-holders before, so this one would probably be turned away too.",
          },
          {
            id: "tr-5-e",
            text: "The red stamp is a clue, and rejection at the express is the best explanation for the stranger's frown.",
          },
        ],
      },
      {
        id: "tr-6",
        text: "Jonas pointed him down the platform, and the local sighed into the station right on time.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ledger",
    title: "The Missing Ledger",
    difficulty: "beginner",
    includedLabels: ["abductive", "inductive"],
    sentences: [
      {
        id: "lg-1",
        text: "The harbormaster's office smelled of tar and old paper, and the shelf where the tide ledger lived stood empty.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-2",
        text: "A ring of dust marked where the ledger had sat, and beside it lay a pair of reading glasses that belonged to no one in the office.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-3",
        text: "The best explanation, Rhea decided, was that the retired harbormaster had wandered in for his old ledger and left his glasses in trade.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "lg-3-a",
        explanationOptions: [
          {
            id: "lg-3-a",
            text: "A single hypothesis — the retired harbormaster's visit — accounts for both odd clues: the missing ledger and the strange glasses.",
          },
          {
            id: "lg-3-b",
            text: "Office rules say only harbormasters may touch the ledger, so it must have been him.",
          },
          {
            id: "lg-3-c",
            text: "He has borrowed the ledger many times before, so he probably borrowed it again.",
          },
        ],
      },
      {
        id: "lg-4",
        text: "Rhea had crossed the square to his cottage twice that month already, once about charts and once about a kettle he'd left boiling.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-5",
        text: "Every one of his borrowings, going back years, had ended with the ledger returned by Friday, so she expected this one back by week's end too.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "lg-5-b",
        explanationOptions: [
          {
            id: "lg-5-a",
            text: "The harbor code requires borrowed ledgers to be returned by Friday, so it must come back.",
          },
          {
            id: "lg-5-b",
            text: "Years of past borrowings all ended the same way, and that pattern makes the same outcome likely this time.",
          },
          {
            id: "lg-5-c",
            text: "The returned-by-Friday habit is the best explanation for the ring of dust on the shelf.",
          },
        ],
      },
      {
        id: "lg-6",
        text: "She set the glasses in her drawer for safekeeping and pencilled a note into the margin of the day's log.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
