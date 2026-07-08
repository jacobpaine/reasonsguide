import type { PracticeStory } from "@/domain/types";

/**
 * Intermediate stories mixing analogical, causal, and statistical reasoning.
 * Targets are less signposted than in beginner stories; sentence length is
 * varied so targets don't stand out by shape alone.
 */

export const intermediateStories: readonly PracticeStory[] = [
  {
    id: "story-mill",
    title: "The Grey Potions",
    difficulty: "intermediate",
    includedLabels: ["causal", "analogical"],
    sentences: [
      {
        id: "ml-1",
        text: "The apprentice's potions had come out grey for three sessions running, which would have been cause for concern if the master weren't the sort of man who considered grey a reasonable interim color.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ml-2",
        text: "The greyness had arrived the same week as a new shipment of moonmoss, and moonmoss was known to strip pigment compounds from a brew before they could bind — the moss was bleaching the color out before it could set.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "ml-2-a",
        explanationOptions: [
          {
            id: "ml-2-a",
            text: "It connects the grey to the new moonmoss through a mechanism — the moss binding pigment compounds before they could set — and the same-week timing fits that pathway exactly.",
          },
          {
            id: "ml-2-b",
            text: "It compares this apprentice's potions to other students' brews that went grey after similar ingredient changes.",
          },
          {
            id: "ml-2-c",
            text: "It generalizes from three grey sessions to a prediction about the next batch.",
          },
          {
            id: "ml-2-d",
            text: "It applies a known rate of discoloration across the conservatory's student potions.",
          },
        ],
      },
      {
        id: "ml-3",
        text: "The master suggested renaming the intended product Storm Elixir and charging accordingly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ml-4",
        text: "A student at the northern conservatory had fixed the exact same problem — same supplier, same grey result — by pre-soaking the moonmoss in brine for an hour before adding it, and her brew had come out deep blue the following day, so the same pre-soak would very likely work here.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "ml-4-b",
        explanationOptions: [
          {
            id: "ml-4-a",
            text: "It traces how brine disrupts moonmoss's pigment-stripping chemistry, explaining the mechanism.",
          },
          {
            id: "ml-4-b",
            text: "It transfers the northern student's result here on the strength of a relevant likeness — same supplier, same grey outcome — to predict the pre-soak will work.",
          },
          {
            id: "ml-4-c",
            text: "It projects the apprentice's own sessions forward, expecting grey unless something changes.",
          },
          {
            id: "ml-4-d",
            text: "It calculates how often the brine pre-soak succeeds across known cases of moonmoss greyness.",
          },
        ],
      },
      {
        id: "ml-5",
        text: "The apprentice tried it that evening.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ml-6",
        text: "The next morning's potion came out a confident purple, and the master said nothing, which was its own kind of praise.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-orchard-count",
    title: "The Growth Log",
    difficulty: "intermediate",
    includedLabels: ["statistical", "causal"],
    sentences: [
      {
        id: "oc-1",
        text: "Priya's lab notebook was three colors of pen and fully cross-referenced — she kept records the way other students kept secrets, which is to say comprehensively.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "oc-2",
        text: "In those records, seedlings grown under fourteen hours of daily light had reached at least ten centimeters by week four in nine out of ten trials — this trial's seedlings were already on fourteen hours, so she told her lab partner to expect full growth by the deadline, most likely.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "oc-2-c",
        explanationOptions: [
          {
            id: "oc-2-a",
            text: "It infers the best explanation for why this trial's seedlings are growing so well.",
          },
          {
            id: "oc-2-b",
            text: "It reasons that fourteen hours of light directly causes taller plants, tracing the biological pathway from light to growth.",
          },
          {
            id: "oc-2-c",
            text: "It applies a measured frequency — nine successes in ten high-light trials — to the current trial as a probability.",
          },
          {
            id: "oc-2-d",
            text: "It compares this trial to a similar seedling experiment run by another class with the same setup.",
          },
        ],
      },
      {
        id: "oc-3",
        text: "Her lab partner, the cautious type, asked about the tenth trial — the one that fell short.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "oc-4",
        text: "That was the trial where the grow lamp had failed for three days during week two, she said: the blackout had stalled the seedlings during a critical growth window, and they never made up the lost time.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "oc-4-a",
        explanationOptions: [
          {
            id: "oc-4-a",
            text: "It explains the failed trial through a mechanism — a three-day blackout stalling the seedlings during a critical growth window from which they never recovered.",
          },
          {
            id: "oc-4-b",
            text: "It updates the nine-in-ten rate downward to account for lamp-failure trials.",
          },
          {
            id: "oc-4-c",
            text: "It generalizes from one lamp failure to all trials with unstable lighting conditions.",
          },
          {
            id: "oc-4-d",
            text: "It argues the failed trial resembles the current one in the ways that matter most.",
          },
        ],
      },
      {
        id: "oc-5",
        text: "The current lamp was new, and had run without interruption.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "oc-6",
        text: "By week four the seedlings were eleven centimeters and still climbing, exactly as the notebook had suggested they would be.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-two-libraries",
    title: "Two Co-Working Spaces",
    difficulty: "intermediate",
    includedLabels: ["analogical", "statistical"],
    sentences: [
      {
        id: "tl-1",
        text: "The co-working space on Ardmore Street had the kind of lunchtime atmosphere that made people check their phones and leave early.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tl-2",
        text: "Membership had slipped three months in a row, and the plants near the south window were starting to look as dispirited as the sign-up numbers.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tl-3",
        text: "Petra argued that the Millfield hub — same price point, same freelance-heavy membership, same neighborhood energy — had reversed its midday slump by hosting a weekly skill-share lunch, so the same format would probably draw people in here as well.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "tl-3-b",
        explanationOptions: [
          {
            id: "tl-3-a",
            text: "It converts Millfield's membership turnaround into a probability for this space.",
          },
          {
            id: "tl-3-b",
            text: "It transfers Millfield's outcome here on the strength of named, relevant likenesses — price point, member mix, and neighborhood character.",
          },
          {
            id: "tl-3-c",
            text: "It explains the lunchtime slump by identifying its most likely cause.",
          },
          {
            id: "tl-3-d",
            text: "It applies the general principle that all co-working spaces benefit from programming events.",
          },
        ],
      },
      {
        id: "tl-4",
        text: "The manager countered with her own survey: of the eighty members who replied, only 12 percent said they'd attend a weekday lunchtime event, so fewer than one member in eight could realistically be expected through the door.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "tl-4-a",
        explanationOptions: [
          {
            id: "tl-4-a",
            text: "It draws its conclusion from a measured proportion of a sample — 12 percent of eighty respondents — applied to the membership as a whole.",
          },
          {
            id: "tl-4-b",
            text: "It reasons from what Millfield's members chose to do to what these members will do.",
          },
          {
            id: "tl-4-c",
            text: "It infers the best explanation for why members stopped coming at lunchtime.",
          },
          {
            id: "tl-4-d",
            text: "It traces the mechanism by which programming events attract new members over time.",
          },
        ],
      },
      {
        id: "tl-5",
        text: "Petra noted, not unkindly, that lapsed members and non-members answer no surveys at all.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tl-6",
        text: "They agreed on a six-week trial run, to be measured against the manager's own figures.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-two-bridges",
    title: "The Community Garden Repairs",
    difficulty: "intermediate",
    includedLabels: ["analogical"],
    sentences: [
      {
        id: "tb-1",
        text: "The raised beds at the east-end community garden had warped badly over winter, and the planning committee met in the potting shed to figure out what to do about it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tb-2",
        text: "The Riverside plot — same sun exposure, same coastal humidity, same basic timber-frame design — had been rebuilt with composite decking four years ago and hadn't warped since, so composite would likely hold here as well.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "tb-2-a",
        explanationOptions: [
          {
            id: "tb-2-a",
            text: "Riverside's result is carried over on named, relevant likenesses — same sun, humidity, and frame design — making comparison the engine of the prediction.",
          },
          {
            id: "tb-2-b",
            text: "It traces the mechanism by which composite decking resists warping better than untreated timber.",
          },
          {
            id: "tb-2-c",
            text: "It converts a measured rate of composite-decking failures into a probability for this garden.",
          },
        ],
      },
      {
        id: "tb-3",
        text: "The committee treasurer, who priced timber the way other people priced flights, found a supplier two blocks away who had it in stock.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tb-4",
        text: "As for the cost, the Rooftop Growers Collective had covered comparable repairs with a donation box and a painted sign, and their plot served the same mix of families and schools as this one — a donation box would probably raise enough here too.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "tb-4-c",
        explanationOptions: [
          {
            id: "tb-4-b",
            text: "It reasons that a donation box causes neighbors to feel a sense of community obligation, tracing the mechanism of voluntary giving.",
          },
          {
            id: "tb-4-c",
            text: "The Rooftop Growers' outcome transfers here because the plots are alike in the way that matters — the same mix of local families and schools using the space.",
          },
          {
            id: "tb-4-d",
            text: "It applies the general rule that community green spaces can always fund themselves through local donations.",
          },
        ],
      },
      {
        id: "tb-5",
        text: "Someone asked whether neighbors would donate for beds they'd never used, and someone else said they'd give for the neighbor who always left extra tomatoes at the gate.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tb-6",
        text: "The vote passed on a show of hands, and the treasurer left looking cautiously optimistic, which for her was equivalent to cheering.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-smoking-chimney",
    title: "The Recording Hum",
    difficulty: "intermediate",
    includedLabels: ["causal"],
    sentences: [
      {
        id: "sc-1",
        text: "The home studio had developed a low hum somewhere between a refrigerator and a mild regret, and it was showing up on every track.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sc-2",
        text: "The hum appeared only when the overhead fluorescent light was switched on, and only since the audio interface had been moved to the same wall outlet as the light — the fluorescent was cycling current into the outlet, and the interface was picking it up in the signal.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "sc-2-a",
        explanationOptions: [
          {
            id: "sc-2-a",
            text: "It connects the hum to the fluorescent light through a mechanism — current cycling from the light into the shared outlet, picked up by the audio interface — and the on-with-light-only pattern fits that pathway exactly.",
          },
          {
            id: "sc-2-b",
            text: "It compares this studio to other home setups that developed hums near fluorescent lighting.",
          },
          {
            id: "sc-2-c",
            text: "It applies the rate of audio interference complaints measured across similar home studio configurations.",
          },
        ],
      },
      {
        id: "sc-3",
        text: "The producer, who had spent three hours in internet forums, arrived at this theory approximately ninety seconds before finding the right page.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sc-4",
        text: "For two weeks after she moved the interface to a different outlet, the hum was gone; she plugged it back into the original outlet to satisfy a skeptical collaborator, and the hum returned within thirty seconds — the outlet, then, was what the hum needed.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "sc-4-c",
        explanationOptions: [
          {
            id: "sc-4-b",
            text: "It projects the two weeks of clean recordings forward as a pattern likely to continue indefinitely.",
          },
          {
            id: "sc-4-c",
            text: "Moving the interface away ended the hum, and plugging it back brought the hum back — the two-way test that ties cause to effect.",
          },
          {
            id: "sc-4-d",
            text: "It argues this studio resembles other setups where moving a device to a different outlet fixed the same kind of hum.",
          },
        ],
      },
      {
        id: "sc-5",
        text: "The collaborator was persuaded, and went home to check his own outlets.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sc-6",
        text: "The recordings came out clean after that, and the producer quietly deleted four hours of noise-reduction edits she would not be mentioning.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ferry-count",
    title: "The Food Truck Board",
    difficulty: "intermediate",
    includedLabels: ["statistical"],
    sentences: [
      {
        id: "fc-1",
        text: "The food truck's daily chalkboard had become the most closely read document on the block, which the owner thought was only fair.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fc-2",
        text: "Of the fifty-four lunch services logged that summer, six had sold out the special before noon — so a customer showing up at quarter-to-twelve faced something like a one-in-nine chance of leaving without it.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "fc-2-a",
        explanationOptions: [
          {
            id: "fc-2-a",
            text: "A measured frequency — six sell-outs in fifty-four services — becomes a probability for a single lunchtime visit.",
          },
          {
            id: "fc-2-b",
            text: "It explains why the special sells out early by tracing the demand that causes it.",
          },
          {
            id: "fc-2-c",
            text: "It reasons that this food truck resembles other trucks with similar sell-out patterns.",
          },
        ],
      },
      {
        id: "fc-3",
        text: "The owner, considering adding a second batch, had asked the regulars directly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fc-4",
        text: "A hundred and sixty customers replied over three weeks of varied days and serving hours, and seventy-one in a hundred said they'd pay a dollar more for a reserved portion — which suggested most of the regulars would, as a fair estimate.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "fc-4-c",
        explanationOptions: [
          {
            id: "fc-4-b",
            text: "It infers the best explanation for why regulars keep asking about a reserved option.",
          },
          {
            id: "fc-4-c",
            text: "A proportion from a sizeable, well-spread sample is extended to all regulars — the breadth of the survey doing the reassuring work.",
          },
          {
            id: "fc-4-d",
            text: "It carries over another food truck's experience with reserved items on the strength of their similarity.",
          },
        ],
      },
      {
        id: "fc-5",
        text: "The chalkboard gained a new line that week: Reserve before 10 a.m., guaranteed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fc-6",
        text: "The second batch sold out by 11:20 on its first day, and the owner updated the board by hand, looking quietly pleased.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-beekeeper",
    title: "The Training Log",
    difficulty: "intermediate",
    includedLabels: ["statistical", "causal", "analogical"],
    sentences: [
      {
        id: "bk-1",
        text: "Coach Nadia kept records for all thirty-two athletes in the program, and a whiteboard in the team room that tracked every missed training session.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bk-2",
        text: "Five of the thirty-two had missed at least a week due to knee strain over the season — a rate of roughly one in six — so, with the program unchanged, she budgeted for about that many again next year.",
        labels: ["statistical"],
        primaryLabel: "statistical",
        isTarget: true,
        correctExplanationId: "bk-2-a",
        explanationOptions: [
          {
            id: "bk-2-a",
            text: "A measured injury rate across her own thirty-two athletes is applied forward as an expected proportion.",
          },
          {
            id: "bk-2-b",
            text: "It explains the knee strains by identifying what caused those five athletes' injuries.",
          },
          {
            id: "bk-2-c",
            text: "It transfers the Harlow club's injury rate to hers because their programs are similar.",
          },
        ],
      },
      {
        id: "bk-3",
        text: "But the whiteboard showed something the rate alone did not: the missed weeks were not scattered evenly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bk-4",
        text: "Four of the five injured athletes had done their midweek long runs on the synthetic track, where the stiffer surface absorbed less impact on each stride and passed it to the knee instead — the track, not the mileage, was what was wearing them down.",
        labels: ["causal"],
        primaryLabel: "causal",
        isTarget: true,
        correctExplanationId: "bk-4-c",
        explanationOptions: [
          {
            id: "bk-4-b",
            text: "It refines the one-in-six rate by calculating a separate injury rate for synthetic-track athletes.",
          },
          {
            id: "bk-4-c",
            text: "It names a mechanism — the stiffer surface absorbing less impact and transferring it to the knee on each stride — and the failures' concentration among synthetic-track athletes matches that cause's reach.",
          },
          {
            id: "bk-4-d",
            text: "It compares her track to the Harlow club's, where athletes on the same surface suffered the same pattern of injuries.",
          },
        ],
      },
      {
        id: "bk-5",
        text: "The Harlow club, whose synthetic track was the same hardness rating, had cut knee-strain incidents nearly in half after switching their long runs to the grass loop, and the same kind of surface change would probably help here.",
        labels: ["analogical"],
        primaryLabel: "analogical",
        isTarget: true,
        correctExplanationId: "bk-5-a",
        explanationOptions: [
          {
            id: "bk-5-a",
            text: "Harlow's outcome is brought across on the strength of the relevant likeness — same surface hardness, same injury pattern — to predict the grass-loop switch will work here.",
          },
          {
            id: "bk-5-b",
            text: "It converts Harlow's near-halved injury rate into a precise probability for her own athletes.",
          },
          {
            id: "bk-5-c",
            text: "It traces how a softer grass surface absorbs the impact that the synthetic track passes to the knee.",
          },
        ],
      },
      {
        id: "bk-6",
        text: "Nadia updated the week's schedule before the team meeting ended.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bk-7",
        text: "The following season, three athletes had minor knee complaints, all from weeks when the grass loop was closed for maintenance.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
