import type { PracticeStory } from "@/domain/types";

/**
 * Early-fallacy stories for labels unlocked by the "When reasoning breaks"
 * lesson: hasty generalization, post hoc, and anecdotal evidence.
 * The fallacious sentences should read naturally — the way people actually
 * talk — rather than as cartoon mistakes.
 */

export const fallacyStories: readonly PracticeStory[] = [
  {
    id: "story-new-doctor",
    title: "The New Doctor",
    difficulty: "beginner",
    includedLabels: ["hasty-generalization", "post-hoc"],
    sentences: [
      {
        id: "nd-1",
        text: "When Dr. Passeri took over the village practice, opinions formed faster than appointments.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nd-2",
        text: "Her first patient waited forty minutes, and by evening half the square had heard that the new doctor keeps everyone waiting.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "nd-2-a",
        explanationOptions: [
          {
            id: "nd-2-a",
            text: "A single wait, on a first morning, is generalized into a standing habit — far too few cases to support the claim.",
          },
          {
            id: "nd-2-b",
            text: "The wait happened after she arrived, so her arrival is wrongly blamed for causing it.",
          },
          {
            id: "nd-2-c",
            text: "One villager's vivid story is allowed to outweigh the practice's actual records.",
          },
        ],
      },
      {
        id: "nd-3",
        text: "The pharmacist, who kept better track, noted that the next nine patients were seen on the dot.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nd-4",
        text: "Old Marc, meanwhile, had developed a cough the very week she arrived, and told the café that the new doctor's coming had somehow brought illness with her.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "nd-4-b",
        explanationOptions: [
          {
            id: "nd-4-b",
            text: "The cough merely followed her arrival in time; nothing connects the two, and autumn coughs have causes of their own.",
          },
          {
            id: "nd-4-c",
            text: "Marc concludes from one cough that the whole village will fall ill.",
          },
          {
            id: "nd-4-d",
            text: "Marc trusts his own single story over the village's health records.",
          },
        ],
      },
      {
        id: "nd-5",
        text: "By the solstice, the waiting room had a jar of her plum jam on the table and no one remembered the rumors.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-lucky-boots",
    title: "The Lucky Boots",
    difficulty: "beginner",
    includedLabels: ["post-hoc", "anecdotal-evidence"],
    sentences: [
      {
        id: "lb-1",
        text: "The angling club's spring contest drew every rod in the county to the reservoir.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lb-2",
        text: "Emil wore his grandfather's boots that morning and landed the biggest pike of the day, and from then on he swore the boots were what caught the fish.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "lb-2-a",
        explanationOptions: [
          {
            id: "lb-2-a",
            text: "The catch came after he wore the boots, and that sequence alone is made to carry the whole causal claim.",
          },
          {
            id: "lb-2-b",
            text: "Emil generalizes from one contest to all future contests.",
          },
          {
            id: "lb-2-c",
            text: "Emil lets one dramatic story override the club's long records.",
          },
        ],
      },
      {
        id: "lb-3",
        text: "The club secretary pointed out that Emil had also fished the deepest hole on the reservoir, at dawn, in perfect weather.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lb-4",
        text: "Club records across twenty years showed the deep hole produced the winning fish in fourteen contests, whatever anyone wore.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lb-5",
        text: "But young Pia had heard Emil tell the story of the boots three times, and against all the secretary's ledgers, the story was what she believed.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "lb-5-b",
        explanationOptions: [
          {
            id: "lb-5-a",
            text: "Pia assumes that whatever worked for Emil must work for every angler.",
          },
          {
            id: "lb-5-b",
            text: "One vivid, thrice-told story outweighs twenty years of records in Pia's judgment — vividness standing in for evidence.",
          },
          {
            id: "lb-5-c",
            text: "Pia believes the boots caused the catch because the catch came after them.",
          },
        ],
      },
      {
        id: "lb-6",
        text: "Next spring she fished the shallow bank in borrowed boots, and caught, as the records would have predicted, nothing at all.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-market-stall",
    title: "Rain on Market Day",
    difficulty: "beginner",
    includedLabels: ["anecdotal-evidence", "hasty-generalization"],
    sentences: [
      {
        id: "ms-1",
        text: "The weavers' cooperative met to decide whether to keep their stall at the new riverside market.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ms-2",
        text: "Sales figures from the first season showed the riverside stall out-earning their old square pitch by a third.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ms-3",
        text: "But Dorrit told again the story of the Saturday it rained sideways and she sold a single scarf, and the story hung over the table heavier than the season's figures.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "ms-3-a",
        explanationOptions: [
          {
            id: "ms-3-a",
            text: "One memorable bad Saturday is given more weight than a full season of sales figures — a single story beating the data.",
          },
          {
            id: "ms-3-b",
            text: "Dorrit assumes the rain caused the poor sales because it came first.",
          },
          {
            id: "ms-3-c",
            text: "Dorrit concludes from one Saturday that every market day will be rainy.",
          },
        ],
      },
      {
        id: "ms-4",
        text: "Then Hale, who had visited the riverside twice and been jostled both times, declared the riverside crowd was simply rougher than market crowds anywhere else in the county.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "ms-4-c",
        explanationOptions: [
          {
            id: "ms-4-b",
            text: "Hale lets one vivid jostling story outweigh the constables' crowd reports.",
          },
          {
            id: "ms-4-c",
            text: "Two visits become a verdict on a whole market's crowds, across the whole county — a generalization far outrunning its cases.",
          },
          {
            id: "ms-4-d",
            text: "Hale reasons that the jostling caused the stall's poor sales.",
          },
        ],
      },
      {
        id: "ms-5",
        text: "The treasurer slid the season's ledger to the middle of the table and let the column totals speak.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ms-6",
        text: "The cooperative voted to keep the riverside stall, and to buy, by way of compromise, a much better awning.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
