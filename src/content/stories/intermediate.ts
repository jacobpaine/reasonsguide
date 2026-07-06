import type { PracticeStory } from "@/domain/types";

/**
 * Intermediate stories mixing analogical, causal, and statistical reasoning.
 * Targets are less signposted than in beginner stories, but each sentence
 * still carries one primary label.
 */

export const intermediateStories: readonly PracticeStory[] = [
  {
    id: "story-mill",
    title: "The Mill Pond",
    difficulty: "intermediate",
    includedLabels: ["causal", "analogical"],
    sentences: [
      {
        id: "ml-1",
        text: "The mill pond had grown a green skin of algae by midsummer, thick enough to hold a dropped glove.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ml-2",
        text: "The trouble had started the same season the dairy upstream doubled its herd, and the runoff channels from its pasture fed straight into the millstream.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "ml-2-a",
        explanationOptions: [
          {
            id: "ml-2-a",
            text: "It links the algae to the herd through a traceable pathway — runoff carrying nutrients down the channels into the pond.",
          },
          {
            id: "ml-2-b",
            text: "It compares this pond to other ponds that recovered after similar troubles.",
          },
          {
            id: "ml-2-c",
            text: "It generalizes from several summers of algae to a prediction about this one.",
          },
          {
            id: "ml-2-d",
            text: "It applies a rate of algal blooms measured across the county's ponds.",
          },
        ],
      },
      {
        id: "ml-3",
        text: "The miller's daughter wrote to the county office and waited three weeks for a reply that never came.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ml-4",
        text: "Harwick's mill pond, fed by the same kind of pasture runoff, had cleared within two summers once the farmers planted a reed bed at the inflow — so a reed bed would likely clear this pond as well.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "ml-4-b",
        explanationOptions: [
          {
            id: "ml-4-a",
            text: "It identifies the mechanism by which reeds strip nutrients from inflowing water.",
          },
          {
            id: "ml-4-b",
            text: "It transfers Harwick's result to this pond on the strength of a relevant likeness: the same kind of runoff causing the same kind of bloom.",
          },
          {
            id: "ml-4-c",
            text: "It projects this pond's own history of clearing forward to next summer.",
          },
          {
            id: "ml-4-d",
            text: "It converts a measured proportion of recovered ponds into a probability.",
          },
        ],
      },
      {
        id: "ml-5",
        text: "The dairy farmer, when she finally called on him, turned out to have been reading about reed beds himself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ml-6",
        text: "They agreed to split the cost of the planting before the autumn rains.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-orchard-count",
    title: "A Count of Blossoms",
    difficulty: "intermediate",
    includedLabels: ["statistical", "causal"],
    sentences: [
      {
        id: "oc-1",
        text: "Old Fen kept records the way other people kept grudges: thoroughly, and going back decades.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "oc-2",
        text: "In her ledgers, years when April blossom counts topped ten thousand had brought a full cider pressing nine times out of ten — and this April's count had topped it, so she told the cooper to expect a full pressing, likely as not.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "oc-2-c",
        explanationOptions: [
          {
            id: "oc-2-a",
            text: "It infers the best explanation for this spring's unusual abundance of blossoms.",
          },
          {
            id: "oc-2-b",
            text: "It reasons that blossoms cause fruit, tracing the mechanism from flower to press.",
          },
          {
            id: "oc-2-c",
            text: "It applies a measured frequency — nine full pressings in ten high-blossom years — to the current year as a probability.",
          },
          {
            id: "oc-2-d",
            text: "It compares this orchard to a neighboring orchard with similar trees.",
          },
        ],
      },
      {
        id: "oc-3",
        text: "The cooper, a cautious man, asked about the tenth year — the one that failed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "oc-4",
        text: "That was the year a late frost struck during bloom, Fen said: the cold killed the open flowers outright, and the fruit never set.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "oc-4-a",
        explanationOptions: [
          {
            id: "oc-4-a",
            text: "It explains the failed year by a mechanism — frost killing open blossoms so fruit could not set.",
          },
          {
            id: "oc-4-b",
            text: "It updates the nine-in-ten rate downward to account for frost years.",
          },
          {
            id: "oc-4-c",
            text: "It generalizes from one frost year to all cold springs.",
          },
          {
            id: "oc-4-d",
            text: "It argues the failed year resembles this year in the ways that matter.",
          },
        ],
      },
      {
        id: "oc-5",
        text: "The forecast held no frost, and the cooper went home to count his staves.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "oc-6",
        text: "By September the presses ran sweet and late into the evenings, just as the ledgers had promised.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-two-libraries",
    title: "The Two Libraries",
    difficulty: "intermediate",
    includedLabels: ["analogical", "statistical"],
    sentences: [
      {
        id: "tl-1",
        text: "The town's library board met above the fish market, which lent every budget debate a certain urgency.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tl-2",
        text: "Membership had sagged for three years, and the shelves smelled increasingly of the neighbors downstairs.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tl-3",
        text: "Councillor Ames argued that Saltmarsh — a town of the same size, with the same fishing economy and the same aging readers — had doubled its membership by opening on Sunday mornings, so Sunday hours would likely lift membership here as well.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "tl-3-b",
        explanationOptions: [
          {
            id: "tl-3-a",
            text: "It converts Saltmarsh's doubled membership into a probability for this town.",
          },
          {
            id: "tl-3-b",
            text: "It transfers Saltmarsh's outcome here on the strength of named, relevant likenesses: size, economy, and readership.",
          },
          {
            id: "tl-3-c",
            text: "It explains the membership sag by identifying its most likely cause.",
          },
          {
            id: "tl-3-d",
            text: "It applies the rule that all libraries must serve weekend readers.",
          },
        ],
      },
      {
        id: "tl-4",
        text: "The treasurer countered with her survey: of the two hundred members who answered, only 14 percent said they would visit on a Sunday, so fewer than one member in six could be expected through the door.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "tl-4-a",
        explanationOptions: [
          {
            id: "tl-4-a",
            text: "It draws its conclusion from a measured proportion of a sample — 14 percent of two hundred respondents.",
          },
          {
            id: "tl-4-b",
            text: "It reasons from what Saltmarsh's members did to what these members will do.",
          },
          {
            id: "tl-4-c",
            text: "It infers the best explanation for why members stopped coming.",
          },
          {
            id: "tl-4-d",
            text: "It traces the mechanism by which Sunday hours produce new members.",
          },
        ],
      },
      {
        id: "tl-5",
        text: "Ames noted, not unkindly, that lapsed members and new readers answer no surveys at all.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tl-6",
        text: "The board voted for a three-month Sunday trial, to be measured against the treasurer's own numbers.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
