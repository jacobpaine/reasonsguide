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
    id: "story-patch-window",
    title: "The Patch Window",
    difficulty: "intermediate",
    includedLabels: ["expected-value"],
    sentences: [
      {
        id: "nv-1",
        text: "The station's navigation module had been throwing a seven-millisecond lag for three weeks, and Dr. Chen had stopped pretending it wasn't going to become a problem when they reached the asteroid corridor.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nv-2",
        text: "Two patches had been written: one tested and validated across twelve simulations, one faster to deploy but never run against live hardware.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nv-3",
        text: "The untested patch had about a one-in-five chance of clearing the lag without incident and roughly the same chance of disabling attitude control entirely — one outcome saved a few hours, the other ended the mission — so she took it off the table.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "nv-3-a",
        explanationOptions: [
          {
            id: "nv-3-a",
            text: "She sets the untested patch's one-in-five chance of a clean fix against its equal chance of disabling attitude control — one outcome saves hours, the other ends the mission — and the magnitude asymmetry makes the gamble not worth taking.",
          },
          {
            id: "nv-3-b",
            text: "It cites the one-in-five probability as a frequency measured across comparable patches and applies that rate to this one.",
          },
          {
            id: "nv-3-c",
            text: "It updates her confidence in the untested patch based on the absence of validation data, and rests at that revised belief.",
          },
          {
            id: "nv-3-d",
            text: "It identifies not deploying as the practical means to avoid disabling attitude control, without comparing the probability-weighted cost of each outcome.",
          },
        ],
      },
      {
        id: "nv-4",
        text: "The tested patch reduced the lag to three milliseconds — not zero, but within the corridor's published tolerance margins.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nv-5",
        text: "Leaving even the residual three-millisecond lag in place carried a four-percent misalignment risk at approach speed, and misalignment at approach speed was not survivable; she found that a small probability of total loss was still too heavy to carry when a working patch was in hand.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "nv-5-b",
        explanationOptions: [
          {
            id: "nv-5-a",
            text: "It measures the four-percent misalignment rate across prior corridor approaches and projects that frequency onto this one.",
          },
          {
            id: "nv-5-b",
            text: "A four-percent chance of total, unrecoverable loss is weighed against the minor cost of residual lag — the probability-times-magnitude comparison makes deploying the tested patch the clear choice.",
          },
          {
            id: "nv-5-c",
            text: "It revises her estimate of misalignment likelihood given the three-millisecond residual lag, and holds that updated probability.",
          },
          {
            id: "nv-5-d",
            text: "It identifies deploying the patch as the practical means to reduce misalignment risk, without engaging how the four-percent probability and the unrecoverable outcome together justify the cost.",
          },
        ],
      },
      {
        id: "nv-6",
        text: "She deployed the tested patch at 0400 and logged the decision in the mission record, as the charter required.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nv-7",
        text: "The lag held at three milliseconds through the corridor, and nobody mentioned it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-backup-burner",
    title: "The Backup Burner",
    difficulty: "intermediate",
    includedLabels: ["expected-value"],
    sentences: [
      {
        id: "bp-1",
        text: "Margot had run the catering company for eleven years and had learned that the only real surprise at a formal event is that there's always one.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bp-2",
        text: "The wedding had a hundred and sixty guests, an open bar, and a kitchen she'd never worked in before.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bp-3",
        text: "A backup staff member would cost three hundred dollars; her main sous-chef went home sick roughly one time in eight over a season, and one-eighth of a ten-thousand-dollar booking refund came to more than three hundred dollars without very much arithmetic, so she made the call.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "bp-3-b",
        explanationOptions: [
          {
            id: "bp-3-a",
            text: "It identifies booking a backup as the practical means to cover a potential staffing gap, without engaging the one-in-eight probability or comparing it against the cost of a refund.",
          },
          {
            id: "bp-3-b",
            text: "A one-in-eight illness probability is multiplied against a ten-thousand-dollar refund risk and compared to the three-hundred-dollar backup cost — the probability-weighted exposure exceeds the preventive cost, and that arithmetic drives the decision.",
          },
          {
            id: "bp-3-c",
            text: "It applies the one-in-eight rate as a measured frequency from her own records and projects it onto this booking without deciding whether to act.",
          },
          {
            id: "bp-3-d",
            text: "It compares this booking to similar large events where a backup staff member proved useful, inferring the same will hold here.",
          },
        ],
      },
      {
        id: "bp-4",
        text: "She booked the backup on Tuesday, requested someone with cold-station experience, and said nothing about it to the bride.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bp-5",
        text: "The sous-chef arrived healthy, the backup helped with plating, and the kitchen ran four minutes ahead of schedule.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bp-6",
        text: "She'd also chosen to bring a portable burner in case the venue's range failed — the probability was low, but a failed range at a seated dinner for a hundred and sixty meant no hot food, and no hot food at a formal dinner meant a refund she couldn't absorb, so the burner came with her.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "bp-6-c",
        explanationOptions: [
          {
            id: "bp-6-a",
            text: "It updates her belief about venue range failure rates based on working in an unfamiliar kitchen, and holds that revised estimate.",
          },
          {
            id: "bp-6-b",
            text: "It generalizes from prior venue failures she has seen to expect some non-trivial probability of failure at this one.",
          },
          {
            id: "bp-6-c",
            text: "A low probability of range failure is weighed against the full magnitude of the consequence — no hot food, a total refund — and that probability-times-stakes comparison justifies carrying the burner.",
          },
          {
            id: "bp-6-d",
            text: "It identifies carrying the burner as the practical means to ensure food delivery if the range fails, without weighing how likely that failure is against the cost of the outcome.",
          },
        ],
      },
      {
        id: "bp-7",
        text: "The range did not fail, and the burner rode home in the van unused, which Margot considered the best possible outcome for something you hope never to need.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-coverage-desk",
    title: "The Coverage Desk",
    difficulty: "intermediate",
    includedLabels: ["expected-value"],
    sentences: [
      {
        id: "cv-1",
        text: "The insurance desk at the Mages' Guild occupied a corner of the hall that smelled faintly of old parchment and cautious decisions.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cv-2",
        text: "Reva was planning an expedition into the Quarried Ruins, where the ambient curse density was rated moderate-to-high by the last survey team.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cv-3",
        text: "A moderate-to-high rating meant roughly a thirty-percent chance of incurring a binding affliction; the affliction could run anywhere from a week's inconvenience to five years of mandatory silence, and at five years of lost work the forty-gold premium looked modest even at thirty percent.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "cv-3-a",
        explanationOptions: [
          {
            id: "cv-3-a",
            text: "A thirty-percent affliction probability is weighed against a range of possible magnitudes — up to five years of lost work — and the forty-gold premium is found reasonable when set against that probability-weighted cost.",
          },
          {
            id: "cv-3-b",
            text: "It updates Reva's belief about how likely she is to pick up an affliction in moderate-to-high rated ruins, and holds that revised belief without deciding whether to buy coverage.",
          },
          {
            id: "cv-3-c",
            text: "It reports the thirty-percent curse-density rating as a measured frequency from the survey team, without using it as input to a purchase decision.",
          },
          {
            id: "cv-3-d",
            text: "It identifies buying the policy as the practical means to obtain compensation if cursed, without multiplying the thirty-percent probability against the five-year magnitude to justify the price.",
          },
        ],
      },
      {
        id: "cv-4",
        text: "The clerk wrote the policy in the guild's standard parchment and explained the three-day claim window.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cv-5",
        text: "Reva paid and tucked the policy into her inner robe pocket, next to the antidote vials.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cv-6",
        text: "She'd considered skipping coverage for the outer chambers, where the curse density dropped to eight percent, but eight percent of a five-year binding was still a number she couldn't comfortably absorb, so she kept the outer rooms in the policy.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "cv-6-b",
        explanationOptions: [
          {
            id: "cv-6-a",
            text: "It compares the outer chambers to the inner ones and, finding the construction similar enough, infers the risk is comparable.",
          },
          {
            id: "cv-6-b",
            text: "Eight percent of a five-year binding still represents a significant weighted cost — the magnitude holds even as the probability drops — and that remaining probability-times-stakes figure justifies keeping the coverage.",
          },
          {
            id: "cv-6-c",
            text: "It notes that the outer-chamber curse density is lower than the inner chambers and reports that rate as a fact.",
          },
          {
            id: "cv-6-d",
            text: "It identifies keeping outer-room coverage as the practical means to ensure compensation for any outer-chamber afflictions, without engaging how the eight-percent probability and five-year magnitude together weigh the cost.",
          },
        ],
      },
      {
        id: "cv-7",
        text: "She emerged from the ruins eleven days later, affliction-free and slightly smug about it, which the clerk noted without comment when she came to close the policy.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-challenge-sheet",
    title: "The Challenge Sheet",
    difficulty: "intermediate",
    includedLabels: ["expected-value"],
    sentences: [
      {
        id: "eq-1",
        text: "The exam packet had a stapled extra sheet at the back — five challenge questions, double points for correct answers, double deduction for wrong ones, which the proctor mentioned once and did not elaborate on.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "eq-2",
        text: "Yusuf had twenty minutes left and felt uncertain about two of the five.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "eq-3",
        text: "On the three questions he felt confident about, a wrong answer would cost him six points each, but he put his probability of error at less than one in ten — an expected loss under a point per question against an expected gain near six — so he wrote them.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "eq-3-b",
        explanationOptions: [
          {
            id: "eq-3-a",
            text: "It counts the three confident questions as a proportion of the five available and uses that ratio to decide how many to attempt.",
          },
          {
            id: "eq-3-b",
            text: "For each confident question, a less-than-one-in-ten error probability is set against a six-point deduction and compared to the near-certain six-point gain — the expected loss is under a point, the expected gain is close to six, so the attempt is clearly worth it.",
          },
          {
            id: "eq-3-c",
            text: "It identifies attempting the confident questions as the practical means to earn bonus points, without specifying how the error probability and point magnitudes together justify the decision.",
          },
          {
            id: "eq-3-d",
            text: "It updates Yusuf's confidence level based on his recall, and holds that updated belief without using it to weigh probability against points.",
          },
        ],
      },
      {
        id: "eq-4",
        text: "The remaining two were harder: one he could reconstruct from logic he mostly trusted and one he genuinely could not.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "eq-5",
        text: "The question he couldn't reconstruct offered no better than coin-flip odds on a six-point swing either way, which worked out to roughly zero in expected value — not enough to justify four minutes he could spend reviewing his earlier work.",
        labels: ["expected-value"],
        primaryLabel: "expected-value",
        isTarget: true,
        correctExplanationId: "eq-5-a",
        explanationOptions: [
          {
            id: "eq-5-a",
            text: "A fifty-fifty probability on a six-point gain cancels against a fifty-fifty probability on a six-point loss — the expected value is near zero — so the question offers no return worth trading four minutes for.",
          },
          {
            id: "eq-5-b",
            text: "It generalizes from Yusuf's past performance on questions he can't reconstruct to estimate how often he gets them right.",
          },
          {
            id: "eq-5-c",
            text: "It infers that guessing is the most likely explanation for how students lose points on challenge sections.",
          },
          {
            id: "eq-5-d",
            text: "It compares the guesswork question to the logic-reconstructible one and identifies their differences as the reason to handle them differently.",
          },
        ],
      },
      {
        id: "eq-6",
        text: "He skipped it, spent the four minutes on the calculation section, and caught a sign error that would otherwise have cost him.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "eq-7",
        text: "He got two of the three challenge answers right, which he told his study group later was well within the range of outcomes he'd considered acceptable.",
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
  {
    id: "story-off-cycle-raise",
    title: "The Off-Cycle Window",
    difficulty: "intermediate",
    includedLabels: ["precedent"],
    sentences: [
      {
        id: "pv-1",
        text: "Rafael had been at the company for three years before the competing offer arrived, and the entire office reacted with the polished surprise of people who had been quietly expecting it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pv-2",
        text: "Two years earlier, when a senior developer had left for a competitor, the VP had approved an off-cycle raise immediately — that decision had set the practice — and Rafael's position was the same in every relevant way: a competing offer, a role that was hard to backfill, a person the team couldn't afford to lose.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "pv-2-a",
        explanationOptions: [
          {
            id: "pv-2-a",
            text: "It names the VP's prior approval as the established decision, identifies the matching criteria — competing offer, hard-to-backfill role — and extends the same approval to Rafael because those factors are present here too.",
          },
          {
            id: "pv-2-b",
            text: "It compares Rafael's situation to the prior developer's on shared structural features — same kind of offer, same kind of role — and uses that resemblance to predict the same outcome.",
          },
          {
            id: "pv-2-c",
            text: "It defers to the VP's authority and experience in compensation decisions as the basis for approving the raise.",
          },
          {
            id: "pv-2-d",
            text: "It treats the single prior case as evidence of a general company pattern: employees with competing offers in hard-to-fill roles tend to receive off-cycle raises.",
          },
        ],
      },
      {
        id: "pv-3",
        text: "The VP said she would look into it, which her team had learned to translate as a yes that would require several forms before anything moved.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pv-4",
        text: "The HR director pulled the original approval from the records and noted that it had been accompanied by a one-year commitment agreement — the company had structured the exception that way from the start — so Rafael's offer would carry the same term.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "pv-4-c",
        explanationOptions: [
          {
            id: "pv-4-a",
            text: "It compares the two off-cycle situations and concludes that a one-year commitment is structurally appropriate given their resemblance.",
          },
          {
            id: "pv-4-b",
            text: "It relies on the HR director's professional expertise in employment contracts to determine what conditions a retention raise should include.",
          },
          {
            id: "pv-4-c",
            text: "The original approval established a one-year commitment as part of the exception, and that condition follows into Rafael's case because the company set it that way when the practice was created.",
          },
          {
            id: "pv-4-d",
            text: "It projects from the prior case that off-cycle approvals at this company generally include commitment agreements, as a pattern.",
          },
        ],
      },
      {
        id: "pv-5",
        text: "Rafael had already decided he was staying, so the commitment agreement was, as he put it, purely administrative.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pv-6",
        text: "The paperwork was signed on a Thursday, and nobody mentioned the competing offer again.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-test-accommodation",
    title: "The Accommodation Request",
    difficulty: "intermediate",
    includedLabels: ["precedent"],
    sentences: [
      {
        id: "pm-1",
        text: "The form had arrived in the second week of October, technically past the start-of-semester deadline but within the late window the committee kept open for documented submissions.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pm-2",
        text: "The student's packet included a licensed psychologist's assessment, an ADHD diagnosis, and enrollment confirmation from the campus support program — the standard documentation set.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pm-3",
        text: "Three semesters earlier, a request with exactly this documentation — same diagnosis, same program enrollment, same assessment format — had come before the committee and been approved without reservation; nothing in the current file differed in any relevant way, so the outcome should be the same.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "pm-3-b",
        explanationOptions: [
          {
            id: "pm-3-a",
            text: "It compares the two students' profiles on shared diagnostic and enrollment features, using structural resemblance to predict the same result.",
          },
          {
            id: "pm-3-b",
            text: "It cites the prior committee approval as the governing decision, establishes that the current request matches it on every relevant factor, and extends the same outcome on that basis.",
          },
          {
            id: "pm-3-c",
            text: "It treats the prior approval as part of a broader committee pattern: ADHD requests with complete documentation tend to succeed.",
          },
          {
            id: "pm-3-d",
            text: "It defers to the psychologist's professional assessment as the expert basis for the accommodation grant.",
          },
        ],
      },
      {
        id: "pm-4",
        text: "The chair asked whether anyone had objections, in a tone that did not particularly invite them.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pm-5",
        text: "That earlier approval had included a private testing room alongside extended time — the committee had packaged them together when it set the accommodation — and the current grant carried both, for the same reason.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "pm-5-a",
        explanationOptions: [
          {
            id: "pm-5-a",
            text: "The prior approval established the full package — extended time plus private room — as the complete accommodation, and the current case receives both because that is how the committee set the practice.",
          },
          {
            id: "pm-5-b",
            text: "It argues that the structural nature of ADHD testing needs makes a private room as appropriate here as it was for the earlier student.",
          },
          {
            id: "pm-5-c",
            text: "It treats the earlier inclusion of a private room as evidence that the committee routinely bundles rooms with extended-time grants.",
          },
          {
            id: "pm-5-d",
            text: "It relies on the chair's expertise in accommodation law to determine what the full package should include.",
          },
        ],
      },
      {
        id: "pm-6",
        text: "The confirmation email reached the student before her afternoon seminar, which she attended and did not mention.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-guild-waiver",
    title: "The Feronath Standard",
    difficulty: "intermediate",
    includedLabels: ["precedent"],
    sentences: [
      {
        id: "wg-1",
        text: "The tribunal had been convened on a Tuesday, which several members considered inauspicious and which the guild secretary recorded simply as 'scheduled.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wg-2",
        text: "Senna had diverted a flash flood through the lower market using three unauthorized containment spells, and the twelve protocol violations she had accumulated were, her advocate noted, the entire reason the lower market still existed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wg-3",
        text: "Fourteen years ago, Master Feronath had broken containment protocols to stop the Riverside fire, and the tribunal had preserved his license because the emergency justified the breach; Senna's case shared every criterion that had driven that ruling — unauthorized action, immediate threat, measurable harm prevented — and nothing before the tribunal distinguished it from Feronath's.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "wg-3-a",
        explanationOptions: [
          {
            id: "wg-3-a",
            text: "It cites the specific Feronath ruling as the established decision, shows that Senna's case matches the criteria that drove it — unauthorized action, immediate threat, harm prevented — and extends the same outcome because nothing distinguishes the two cases.",
          },
          {
            id: "wg-3-b",
            text: "It draws a structural parallel between Senna's actions and Feronath's — both unauthorized, both emergency-triggered, both harm-preventing — and reasons from that resemblance that the same result applies.",
          },
          {
            id: "wg-3-c",
            text: "It treats the Feronath case as one data point in a broader pattern of guild rulings that tend to protect emergency action.",
          },
          {
            id: "wg-3-d",
            text: "It defers to Master Feronath's personal expertise as the practitioner who established the relevant standard.",
          },
        ],
      },
      {
        id: "wg-4",
        text: "Master Feronath, who was on the tribunal, said nothing during this portion of the deliberation, which was considered appropriate and which he appeared to find deeply uncomfortable.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wg-5",
        text: "Feronath's original waiver had required a full incident log within thirty days — that condition had been part of how the guild established the emergency-use exception — and Senna's waiver carried the same requirement, on the same terms.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "wg-5-c",
        explanationOptions: [
          {
            id: "wg-5-a",
            text: "It uses the structural similarity between the two mages' situations to argue that the same accountability conditions are proportionately fair.",
          },
          {
            id: "wg-5-b",
            text: "It infers from the single prior case that emergency-use waivers in the guild generally come with incident-reporting requirements.",
          },
          {
            id: "wg-5-c",
            text: "The incident-log requirement was attached to Feronath's waiver when the guild established the emergency-use exception, and Senna's case carries the same term because that is how the practice was set.",
          },
          {
            id: "wg-5-d",
            text: "It relies on the tribunal's expertise in guild governance to determine what accountability measures are appropriate for unauthorized spellwork.",
          },
        ],
      },
      {
        id: "wg-6",
        text: "Senna submitted her incident log in twelve days and included a footnote suggesting the emergency protocols could use updating, which the tribunal filed under 'noted' and the administration filed under a different heading entirely.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-lakeview-roof",
    title: "The Kowalski Exception",
    difficulty: "intermediate",
    includedLabels: ["precedent"],
    sentences: [
      {
        id: "hv-1",
        text: "The Lakeview Commons board met on the first Monday of each month, and the treasurer had begun tracking variance requests in a spreadsheet she called 'the exceptions,' which had eleven rows by autumn.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "hv-2",
        text: "The Okafor family wanted to replace their shingle roof with standing-seam metal after a contractor found that the decking beneath was too degraded to support a new shingle layer safely.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "hv-3",
        text: "Two years earlier the board had approved the same variance for the Kowalski property, where the decking had the identical defect and the same documentation had been submitted, and the approval had rested on the finding that requiring unsafe roofing to preserve aesthetics was not a standard anyone wanted to defend; the Okafor request was the same in every material respect, and the same approval followed.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "hv-3-b",
        explanationOptions: [
          {
            id: "hv-3-a",
            text: "It compares the two properties on shared structural features — degraded decking, identical documentation — and uses that resemblance to predict the same outcome.",
          },
          {
            id: "hv-3-b",
            text: "It cites the Kowalski approval as the established decision, establishes that the Okafor case matches it on the factors that drove it — same defect, same documentation, same safety rationale — and extends the same approval on that basis.",
          },
          {
            id: "hv-3-c",
            text: "It treats the Kowalski approval as evidence that the board generally prioritizes safety over aesthetic standards when the two conflict.",
          },
          {
            id: "hv-3-d",
            text: "It defers to the contractor's professional assessment of the decking damage as the expert basis for the board's decision.",
          },
        ],
      },
      {
        id: "hv-4",
        text: "One board member asked about color options, and the chair said she was about to get to that.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "hv-5",
        text: "The Kowalski variance had required the metal roof to fall within the existing approved color palette — the board had attached that condition when it created the exception, to keep the exemption from swallowing the standard — and the Okafor approval included the same restriction, unchanged.",
        labels: ["precedent"],
        primaryLabel: "precedent",
        isTarget: true,
        correctExplanationId: "hv-5-d",
        explanationOptions: [
          {
            id: "hv-5-a",
            text: "It argues that the structural logic of the exception — overriding uniformity for safety — makes a color restriction appropriate for any such approval.",
          },
          {
            id: "hv-5-b",
            text: "It defers to the board chair's expertise in HOA governance to determine what conditions variance approvals should carry.",
          },
          {
            id: "hv-5-c",
            text: "It treats the Kowalski condition as evidence that the board routinely attaches palette restrictions to metal-roof variances.",
          },
          {
            id: "hv-5-d",
            text: "The color restriction was part of how the board established the metal-roof exception in the Kowalski case, and the Okafor approval carries it unchanged because that is the practice as set.",
          },
        ],
      },
      {
        id: "hv-6",
        text: "The Okafors chose Slate Grey, which was within the palette and had been their first choice all along.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
