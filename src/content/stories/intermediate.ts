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
  {
    id: "story-two-bridges",
    title: "Two Bridges",
    difficulty: "intermediate",
    includedLabels: ["analogical"],
    sentences: [
      {
        id: "tb-1",
        text: "The chapel footbridge had gone soft underfoot again, and the vestry meeting turned, as it did each autumn, to the question of planks.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tb-2",
        text: "The Weir Lane bridge — same span, same builder, same river damp rising off the same water — had been re-decked in larch six years ago and hadn't rotted since, so larch would likely hold here as well.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "tb-2-a",
        explanationOptions: [
          {
            id: "tb-2-a",
            text: "Weir Lane's result is carried over on named, relevant likenesses — same span, builder, and damp — which is comparison doing the work.",
          },
          {
            id: "tb-2-b",
            text: "It traces the mechanism by which larch resists rot in wet conditions.",
          },
          {
            id: "tb-2-c",
            text: "It converts a measured rate of larch failures into a probability for this bridge.",
          },
        ],
      },
      {
        id: "tb-3",
        text: "The sexton, who priced timber the way other men priced horses, allowed that larch could be had from the yard at Croft's.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tb-4",
        text: "As for paying for it, the ferry commons had covered their own repairs with a halfpenny box and a painted sign, and their crossing carried the same farm traffic as ours — a halfpenny box would probably serve the chapel bridge too.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "tb-4-c",
        explanationOptions: [
          {
            id: "tb-4-b",
            text: "It reasons that the halfpenny box causes travelers to feel obliged, tracing the mechanism of the payment.",
          },
          {
            id: "tb-4-c",
            text: "The ferry commons' outcome transfers here because the crossings are alike in the way that matters: the same kind and volume of traffic.",
          },
          {
            id: "tb-4-d",
            text: "It applies the parish rule that all bridges must fund their own upkeep.",
          },
        ],
      },
      {
        id: "tb-5",
        text: "Someone asked whether chapel-goers would grudge the halfpenny, and someone else observed that they grudged the wet feet more.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tb-6",
        text: "The motion carried on a show of hands, and the sexton went out into the rain looking almost pleased.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-smoking-chimney",
    title: "The Smoking Chimney",
    difficulty: "intermediate",
    includedLabels: ["causal"],
    sentences: [
      {
        id: "sc-1",
        text: "The schoolhouse chimney had taken to coughing smoke back into the room, and the children had taken to theatrical dying.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sc-2",
        text: "The smoke came only on east winds, and only since the grain elevator went up across the lane — the tall building was turning the east wind down onto the chimney's mouth, stalling the draw.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "sc-2-a",
        explanationOptions: [
          {
            id: "sc-2-a",
            text: "It connects elevator to smoke through a mechanism — deflected wind stalling the draw — and the east-wind-only pattern fits that pathway exactly.",
          },
          {
            id: "sc-2-b",
            text: "It compares this chimney to other chimneys near tall buildings that smoked the same way.",
          },
          {
            id: "sc-2-c",
            text: "It applies the rate of smoking chimneys measured across the district to this one.",
          },
        ],
      },
      {
        id: "sc-3",
        text: "The mason came with a cowl for the chimney pot, muttered at the elevator, and charged the parish accordingly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sc-4",
        text: "For a week after the cowl went on, east winds blew and the room stayed clear; the mason took the cowl off for a day to satisfy a doubter, and the smoke came back — the cowl, then, was what had cured it.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "sc-4-c",
        explanationOptions: [
          {
            id: "sc-4-b",
            text: "It projects the week's clear days forward as a pattern likely to continue.",
          },
          {
            id: "sc-4-c",
            text: "Removing the suspected cause brought the effect back, and restoring it cleared the room again — the two-way test that ties cause to effect.",
          },
          {
            id: "sc-4-d",
            text: "It argues the schoolhouse resembles other buildings whose cowls cured their chimneys.",
          },
        ],
      },
      {
        id: "sc-5",
        text: "The doubter, a churchwarden of long standing, paid for the cowl himself by way of apology.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sc-6",
        text: "The children, deprived of their smoke, went back to dying of arithmetic instead.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ferry-count",
    title: "The Ferry Count",
    difficulty: "intermediate",
    includedLabels: ["statistical"],
    sentences: [
      {
        id: "fc-1",
        text: "The harbormaster's tally-board hung where everyone could see it, which was rather the point.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fc-2",
        text: "Of the forty spring crossings chalked up so far, three had been canceled for weather, so a traveler booking the dawn boat faced something like a one-in-thirteen chance of standing on the quay with her luggage.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "fc-2-a",
        explanationOptions: [
          {
            id: "fc-2-a",
            text: "A measured frequency — three cancellations in forty crossings — becomes a probability for a single booking.",
          },
          {
            id: "fc-2-b",
            text: "It explains why spring crossings get canceled by tracing the weather that causes them.",
          },
          {
            id: "fc-2-c",
            text: "It reasons that this ferry line resembles other lines with similar cancellation troubles.",
          },
        ],
      },
      {
        id: "fc-3",
        text: "The ferry company, wanting to add an earlier boat, had gone so far as to ask the passengers themselves.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fc-4",
        text: "Two hundred and fifty riders answered, gathered across a month of sailings and every hour of the day, and sixty-two in a hundred favored the earlier boat — most of the ferry's riders, in all likelihood, wanted it.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "fc-4-c",
        explanationOptions: [
          {
            id: "fc-4-b",
            text: "It infers the best explanation for why riders keep asking about an earlier boat.",
          },
          {
            id: "fc-4-c",
            text: "A proportion from a sizeable, well-spread sample is extended to the riders as a whole — sample to population, with the method doing the reassuring.",
          },
          {
            id: "fc-4-d",
            text: "It carries over another harbor's experience with early boats on the strength of their similarity.",
          },
        ],
      },
      {
        id: "fc-5",
        text: "The company posted the figures beside the tally-board, where they drew more argument than the weather ever had.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fc-6",
        text: "The dawn boat gained a sister at first light the following month, and the quay learned a new kind of quiet.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-beekeeper",
    title: "The Beekeeper's Ledger",
    difficulty: "intermediate",
    includedLabels: ["statistical", "causal", "analogical"],
    sentences: [
      {
        id: "bk-1",
        text: "Wren kept sixty hives strung along the valley, and a ledger that knew each of them by name.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bk-2",
        text: "Nine of the sixty had failed over winter — a rate of about one in seven — so, with her stock and sites unchanged, she budgeted for roughly that share of losses again next year.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "bk-2-a",
        explanationOptions: [
          {
            id: "bk-2-a",
            text: "A measured loss rate across her own sixty hives is applied forward as an expected proportion.",
          },
          {
            id: "bk-2-b",
            text: "It explains the winter losses by identifying what killed those nine colonies.",
          },
          {
            id: "bk-2-c",
            text: "It transfers another valley's loss rate to hers because the valleys are alike.",
          },
        ],
      },
      {
        id: "bk-3",
        text: "But the ledger showed something the rate alone did not: the failures were not scattered.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bk-4",
        text: "Eight of the nine dead hives stood along the wet hollow, where the mist pooled until noon — damp chills a wintering cluster faster than any frost, and these clusters had been chilled where they stood.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "bk-4-c",
        explanationOptions: [
          {
            id: "bk-4-b",
            text: "It refines the one-in-seven rate by calculating a separate rate for the hollow.",
          },
          {
            id: "bk-4-c",
            text: "It names a mechanism — damp chilling the cluster — and the failures' tight footprint along the hollow matches that cause's reach.",
          },
          {
            id: "bk-4-d",
            text: "It compares her hollow to Aldermoor's wet ground, where hives fail the same way.",
          },
        ],
      },
      {
        id: "bk-5",
        text: "The Aldermoor beekeepers, whose ground was every bit as wet as hers, had halved their winter losses by raising each hive a hand's width on stands — the same remedy would probably answer in her hollow.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "bk-5-a",
        explanationOptions: [
          {
            id: "bk-5-a",
            text: "Aldermoor's outcome is brought across on the strength of the relevant likeness — equally wet ground — to predict the stands will work here.",
          },
          {
            id: "bk-5-b",
            text: "It converts Aldermoor's halved losses into a precise probability for her own hives.",
          },
          {
            id: "bk-5-c",
            text: "It traces how a hand's width of air stops damp from reaching the cluster.",
          },
        ],
      },
      {
        id: "bk-6",
        text: "She ordered the timber before the ink of the ledger entry was dry.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bk-7",
        text: "The following spring, the hollow hummed as loudly as the hilltops, and the ledger recorded two losses, both old queens.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
