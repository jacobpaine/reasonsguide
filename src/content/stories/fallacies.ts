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
  {
    id: "story-first-impressions",
    title: "First Impressions at the Fair",
    difficulty: "beginner",
    includedLabels: ["hasty-generalization"],
    sentences: [
      {
        id: "ff-1",
        text: "The autumn fair opened under a sky that couldn't make up its mind, and the Harlow sisters went in at the first bell.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff-2",
        text: "At the ring, one juggler dropped a club in his opening pass, and Edith declared the whole troupe slapdash and not worth the seats.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "ff-2-a",
        explanationOptions: [
          {
            id: "ff-2-a",
            text: "One dropped club by one performer becomes a verdict on the entire troupe — a generalization built on a single case.",
          },
          {
            id: "ff-2-b",
            text: "Edith blames the drop on the morning's damp air merely because the damp came first.",
          },
          {
            id: "ff-2-c",
            text: "Edith lets one vivid story about a juggler outweigh the troupe's printed notices.",
          },
        ],
      },
      {
        id: "ff-3",
        text: "Her sister May pointed out that the same man caught the next forty throws, some of them behind his back.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff-4",
        text: "At the refreshment row, the first stall's cider was sour, and Edith announced that the fair's food and drink, all of it, was not to be trusted.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "ff-4-c",
        explanationOptions: [
          {
            id: "ff-4-b",
            text: "Edith reasons that the sour cider caused her sour mood for the rest of the day.",
          },
          {
            id: "ff-4-c",
            text: "A single cup from a single stall stands in for every kitchen at the fair — far too small a sample for so wide a conclusion.",
          },
          {
            id: "ff-4-d",
            text: "Edith treats her one bad cup as weightier than the fair's food prizes and inspections.",
          },
        ],
      },
      {
        id: "ff-5",
        text: "May, working through a plate of honey cakes from the second stall, offered no rebuttal but the empty plate.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff-6",
        text: "They stayed till the lanterns came out, Edith complaining, May collecting evidence of a different kind.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-weathervane",
    title: "The Weathervane",
    difficulty: "beginner",
    includedLabels: ["post-hoc"],
    sentences: [
      {
        id: "wv-1",
        text: "The new copper weathervane went up on the guildhall on a Tuesday, gleaming like a coin over the square.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wv-2",
        text: "That same week a line of storms came through, and by Sunday half the square agreed the new vane had somehow drawn the weather down on the town.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "wv-2-a",
        explanationOptions: [
          {
            id: "wv-2-a",
            text: "The storms merely followed the vane in time; the sequence is made to carry the whole causal claim, with the season's usual weather ignored.",
          },
          {
            id: "wv-2-b",
            text: "The town concludes from one stormy week that every week under the vane will storm.",
          },
          {
            id: "wv-2-c",
            text: "One neighbor's dramatic account of the lightning outweighs the almanac's records.",
          },
        ],
      },
      {
        id: "wv-3",
        text: "The almanac-keeper observed, to anyone who would listen, that the same week last year had brought worse, under the old vane.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wv-4",
        text: "When the rains eased the following month, the glazier — who had petitioned loudest for the vane's removal and been refused — let it be known that the town's luck had turned because the council finally oiled the church clock, which had happened the Monday before.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "wv-4-c",
        explanationOptions: [
          {
            id: "wv-4-b",
            text: "The glazier generalizes from one dry month to a whole year of fair weather.",
          },
          {
            id: "wv-4-c",
            text: "Again the calendar does all the work: the clock was oiled, then the rains eased, and 'then' is dressed up as 'because'.",
          },
          {
            id: "wv-4-d",
            text: "The glazier trusts his own single memory of the dry spell over the almanac-keeper's measurements.",
          },
        ],
      },
      {
        id: "wv-5",
        text: "The vane, for its part, kept pointing wherever the wind actually came from, which satisfied nobody.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wv-6",
        text: "It is still up there, accused of everything and guilty, at most, of glinting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-silvas-cure",
    title: "Cousin Silva's Cure",
    difficulty: "beginner",
    includedLabels: ["anecdotal-evidence"],
    sentences: [
      {
        id: "cs-1",
        text: "When the coughing season came to the valley, remedies traveled faster than the cough itself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cs-2",
        text: "The pharmacist kept a printed sheet on the counter — trials, numbers, the honest limits of what the syrups could do — but what moved the bottles was the tale of Cousin Silva, who had gargled vinegar and honey and sung at a wedding two days later, and against that one shining recovery the printed sheet never stood a chance.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "cs-2-a",
        explanationOptions: [
          {
            id: "cs-2-a",
            text: "A single vivid recovery outweighs the trial data on the counter — one story given the authority of many measured cases.",
          },
          {
            id: "cs-2-b",
            text: "The valley assumes the vinegar caused the recovery simply because the gargling came first.",
          },
          {
            id: "cs-2-c",
            text: "The valley concludes from Silva's case that every cough in the region is mild.",
          },
        ],
      },
      {
        id: "cs-3",
        text: "The doctor's rounds told a plainer arithmetic: most coughs mended in a fortnight whatever was gargled, and a few did not, whatever was gargled.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cs-4",
        text: "But old Berta had once waited three hours at the district clinic, years ago, and her telling of that afternoon — the hard bench, the sighing clerk — kept half the lane from the clinic's door long after its record had become the best in the county.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "cs-4-c",
        explanationOptions: [
          {
            id: "cs-4-b",
            text: "Berta reasons that the hard bench caused her long wait, mistaking sequence for cause.",
          },
          {
            id: "cs-4-c",
            text: "One well-told afternoon from years ago outweighs the clinic's current measured record — vividness standing in for evidence.",
          },
          {
            id: "cs-4-d",
            text: "Berta concludes from one bad visit that all clinics everywhere keep patients waiting.",
          },
        ],
      },
      {
        id: "cs-5",
        text: "The pharmacist, a patient man, moved the printed sheet nearer the vinegar and said nothing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cs-6",
        text: "The coughing season passed, as it mostly does, taking the credit arguments with it until next year.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-council-debate",
    title: "The Council Debate",
    difficulty: "beginner",
    includedLabels: ["hasty-generalization", "post-hoc", "anecdotal-evidence"],
    sentences: [
      {
        id: "cd-1",
        text: "The question before the council was streetlamps: whether the new pattern should go up in the lower town as it had in the high street.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cd-2",
        text: "Councilman Prewitt had walked the high street once since the change, seen two lamps flicker near the corn exchange, and now assured the chamber that the new pattern was faulty through and through.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "cd-2-a",
        explanationOptions: [
          {
            id: "cd-2-a",
            text: "Two flickering lamps on one evening's walk become a verdict on the whole pattern — a sweeping conclusion from a couple of cases.",
          },
          {
            id: "cd-2-b",
            text: "Prewitt credits the flickering to the evening fog because the fog rolled in first.",
          },
          {
            id: "cd-2-c",
            text: "Prewitt sets his single stroll against the lamplighters' maintenance logs and lets the stroll win.",
          },
        ],
      },
      {
        id: "cd-3",
        text: "The town surveyor's figures said the new lamps burned brighter for less oil, with fewer outages per mile than the old.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cd-4",
        text: "Councilwoman Mott countered that pilfering on the high street had fallen the very month the lamps went in — proof, she said, that the lamps had done it — though the same month the watch had doubled its patrols.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "cd-4-c",
        explanationOptions: [
          {
            id: "cd-4-b",
            text: "Mott generalizes from one month of figures to a permanent fall in pilfering.",
          },
          {
            id: "cd-4-c",
            text: "The drop followed the lamps, so the lamps get the credit — while the doubled patrols, an obvious rival cause, go unexamined.",
          },
          {
            id: "cd-4-d",
            text: "Mott lets one shopkeeper's story about a foiled thief outweigh the watch reports.",
          },
        ],
      },
      {
        id: "cd-5",
        text: "Then a resident of the lower town rose to tell, at length and beautifully, of the night his lane went dark and he put his boot through a bakehouse window, and the chamber, quite moved, weighed his tale above the surveyor's columns.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "cd-5-a",
        explanationOptions: [
          {
            id: "cd-5-a",
            text: "One memorable misadventure, well told, is allowed to outweigh the surveyor's systematic outage figures — the story beating the data.",
          },
          {
            id: "cd-5-b",
            text: "The resident concludes that dark lanes always lead to broken windows everywhere.",
          },
          {
            id: "cd-5-c",
            text: "The resident blames the bakehouse window on the darkness merely because the dark came first.",
          },
        ],
      },
      {
        id: "cd-6",
        text: "The clerk recorded that the debate had generated more heat than any lamp under discussion.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cd-7",
        text: "The vote was postponed to the spring session, by which time, the mayor hoped aloud, someone might have read the figures.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
