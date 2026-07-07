import type { PracticeStory } from "@/domain/types";

/**
 * Applied-reasoning stories covering bayesian, authority, and practical
 * reasoning. These three labels unlock together in the applied block of the
 * curriculum; pairings are spread so each label appears in several stories.
 */

export const appliedStories: readonly PracticeStory[] = [
  {
    id: "story-harrow-letter",
    title: "The Harrow Letter",
    difficulty: "intermediate",
    includedLabels: ["bayesian"],
    sentences: [
      {
        id: "by-1",
        text: "The letter came to the archive in a biscuit tin, wrapped in a stocking, with a note claiming it for the poet Ellard Harrow's own hand.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "by-2",
        text: "Pell started where the register put her — eight lots in ten from the Harrow estate had proven genuine over the years, so she unfolded it more than half expecting to believe — but the watermark dated the paper a dozen years past the poet's death, the sort of thing forgeries carry far oftener than honest letters do, and her near-belief thinned to almost nothing.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "by-2-a",
        explanationOptions: [
          {
            id: "by-2-a",
            text: "An expectation set by the estate's track record is revised sharply once the watermark arrives — evidence far likelier under forgery than under a genuine letter, so the belief moves far.",
          },
          {
            id: "by-2-b",
            text: "It applies the archive's measured rate — eight genuine lots in ten — to this letter as a straight probability of its being real.",
          },
          {
            id: "by-2-c",
            text: "It settles on forgery as the best available explanation of the surprising watermark, without weighing how likely forgery was to begin with.",
          },
        ],
      },
      {
        id: "by-3",
        text: "The seller wrote twice that week, first patiently and then less so.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "by-4",
        text: "The ink analysis came back inconclusive, as such tests did with real and forged letters about equally often, and since the result told no more for one story than the other, Pell let her judgment rest exactly where the watermark had left it.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "by-4-b",
        explanationOptions: [
          {
            id: "by-4-a",
            text: "It accepts the chemist's verdict on the ink because analyzing documents is the chemist's own trade.",
          },
          {
            id: "by-4-b",
            text: "Evidence no likelier under forgery than under authenticity earns no shift at all — the belief is held where it stood, which is updating done in proportion.",
          },
          {
            id: "by-4-c",
            text: "It traces the mechanism by which old ink degrades until a test can no longer read it.",
          },
        ],
      },
      {
        id: "by-5",
        text: "She wrote her opinion in the measured language the archive kept for bad news.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "by-6",
        text: "The biscuit tin went back by the Thursday post, the stocking included.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-pilots-word",
    title: "The Pilot's Word",
    difficulty: "intermediate",
    includedLabels: ["authority"],
    sentences: [
      {
        id: "au-1",
        text: "The winter storms had done something to the bar at the river mouth; everyone agreed on that much and on nothing else.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "au-2",
        text: "Old Quill came up from the pilot boat to say the deep water now ran east of the beacon, and the harbormaster struck the old channel from her chart on his word alone — forty years of carrying ships over that bar, and not one of them set aground.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "au-2-b",
        explanationOptions: [
          {
            id: "au-2-a",
            text: "It settles on redrawing the chart as the surest available means to the harbormaster's goal of safe passages.",
          },
          {
            id: "au-2-b",
            text: "The claim about the channel is accepted because Quill vouches for it, and his credentials sit squarely in the right domain — forty years piloting this exact bar without a grounding.",
          },
          {
            id: "au-2-c",
            text: "It revises her earlier confidence in the old channel in proportion to fresh evidence about where the deep water runs.",
          },
        ],
      },
      {
        id: "au-3",
        text: "The chandler grumbled that charts were not scripture, and bought a second anchor anyway.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "au-4",
        text: "As for the depth over the new cut, she entered the survey crew's figure without rowing out to sound it herself: charting shoal water was the whole of their trade, and their last three surveys had held true to the inch.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "au-4-a",
        explanationOptions: [
          {
            id: "au-4-a",
            text: "A depth is taken on the surveyors' say-so, with their standing made explicit — sounding shoals is their trade, and their record runs true to the inch.",
          },
          {
            id: "au-4-b",
            text: "It converts the crew's three accurate surveys into a rate and applies it to the fourth as a probability.",
          },
          {
            id: "au-4-c",
            text: "It chooses not to re-sound the cut because saving the trip is the best means to getting the chart out quickly.",
          },
        ],
      },
      {
        id: "au-5",
        text: "The first coaster through the new channel cleared it with a fathom to spare.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "au-6",
        text: "Quill accepted a mug of something warm and no further congratulation, which was his custom.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wool-by-friday",
    title: "Wool by Friday",
    difficulty: "intermediate",
    includedLabels: ["practical"],
    sentences: [
      {
        id: "pr-1",
        text: "Rain had sat on the valley for nine days, and Widow Tarn's fleeces sat in the wet loft smelling like regret.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pr-2",
        text: "The buyer came Friday and would not come again till spring, so the wool had to be dry by Thursday night; of the loft, the hedges, and the malthouse floor, only the malthouse held steady heat in weather like this, and she carted the whole clip there before noon.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "pr-2-a",
        explanationOptions: [
          {
            id: "pr-2-a",
            text: "A fixed goal — dry wool by Thursday — meets a survey of the available means, and the one means equal to the weather is chosen; the reasoning runs from end to action.",
          },
          {
            id: "pr-2-b",
            text: "It reasons from mechanism: the kiln's steady heat drives damp out of fleece where hedge and loft cannot.",
          },
          {
            id: "pr-2-c",
            text: "It lowers her expectation of a dry Thursday a little further with each of the nine days of rain.",
          },
        ],
      },
      {
        id: "pr-3",
        text: "The maltster charged her his winter rate and had the grace not to smile while he did it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pr-4",
        text: "The fee would eat a tenth of the sale, and she paid it without haggling; what she wanted was next year's contract, not this week's price, and arriving with bright, dry wool was the straightest road she had to it.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "pr-4-a",
        explanationOptions: [
          {
            id: "pr-4-a",
            text: "The nearer cost is accepted because the governing goal is the contract, and dry wool is judged the surest available means to it — an action chosen for the end it serves.",
          },
          {
            id: "pr-4-b",
            text: "It raises her confidence in winning the contract in proportion to the evidence of a good clip.",
          },
          {
            id: "pr-4-c",
            text: "It claims the fee itself is what causes buyers to offer contracts, linking payment to outcome.",
          },
        ],
      },
      {
        id: "pr-5",
        text: "Thursday evening the fleeces came off the floor light as bread.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pr-6",
        text: "The buyer weighed them, said nothing for a long while, and then said 'spring' in a tone that meant yes.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-salt-well",
    title: "The Salt Well",
    difficulty: "intermediate",
    includedLabels: ["bayesian", "authority"],
    sentences: [
      {
        id: "ba-1",
        text: "The new well at Croftson's end came in brackish, which the diggers swore was only the newness of it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ba-2",
        text: "Marta had believed them at first, and reasonably — new wells in the parish had sweetened within a season more often than not — but by the third month the water ran as salt as ever, and each week it held moved her further from the diggers' story, since wells that mean to sweeten rarely wait so long.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "ba-2-c",
        explanationOptions: [
          {
            id: "ba-2-a",
            text: "It applies the parish rate of wells that sweeten within a season as the probability that this one will.",
          },
          {
            id: "ba-2-b",
            text: "It accepts the diggers' account because sinking wells is their trade and the parish has used them for years.",
          },
          {
            id: "ba-2-c",
            text: "A belief that began favorable to the diggers is worn down week by week — each month of salt counts against sweetening precisely because sweetening wells seldom stay salt so long, so confidence shifts by degrees.",
          },
        ],
      },
      {
        id: "ba-3",
        text: "She wrote to the county office, and for once the county office wrote back.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ba-4",
        text: "The surveyor they sent had mapped the water under three counties, and when he said the bore had struck a salt seam that no waiting would mend, the village took it as settled and capped the well within the week.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "ba-4-a",
        explanationOptions: [
          {
            id: "ba-4-a",
            text: "The verdict is adopted on the surveyor's authority, and his competence lies in the right field — groundwater mapped across three counties bears directly on what a bore has struck.",
          },
          {
            id: "ba-4-b",
            text: "It treats the surveyor's visit as one more month of evidence, nudging belief a proportionate step further against sweetening.",
          },
          {
            id: "ba-4-c",
            text: "It reasons from the village's goal of clean water to capping the well as the best available means.",
          },
        ],
      },
      {
        id: "ba-5",
        text: "The diggers offered to sink a second shaft at half price, higher up the lane.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ba-6",
        text: "The parish, feeling it had learned something about water and about promises, asked for the surveyor's opinion first this time.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-cracked-bell",
    title: "The Cracked Bell",
    difficulty: "intermediate",
    includedLabels: ["authority", "practical"],
    sentences: [
      {
        id: "ap-1",
        text: "The great bell had developed a note like a man clearing his throat, and the village pretended for a while not to hear it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ap-2",
        text: "A founder came out from the city — thirty years of casting and mending church bells — and when he ran his lamp along the sound-bow and said the crack would spread with every swing, the wardens stopped arguing about whether and started arguing about when.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "ap-2-b",
        explanationOptions: [
          {
            id: "ap-2-a",
            text: "It moves from the wardens' goal of a safe tower to silencing the bell as the surest available means.",
          },
          {
            id: "ap-2-b",
            text: "The claim that the crack will spread is accepted on the founder's word, and the word carries because his thirty years lie exactly in this trade — bells, their metal, and their mending.",
          },
          {
            id: "ap-2-c",
            text: "It traces the crack's growth to the strain of each swing, a mechanism argued from the metal itself rather than from anyone's word.",
          },
        ],
      },
      {
        id: "ap-3",
        text: "Recasting meant eight weeks at the foundry and a tower silent through the autumn.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ap-4",
        text: "What the parish wanted, above everything, was bells at midwinter; with the foundry needing its eight weeks and the roads at their worst in November, the only way to have them was to send the bell now, so the wagon was ordered for Monday.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "ap-4-c",
        explanationOptions: [
          {
            id: "ap-4-a",
            text: "It grows more confident that the bell will fail as the founder's evidence accumulates.",
          },
          {
            id: "ap-4-b",
            text: "It works from the rate at which autumn roads delay heavy freight to a probability of missing midwinter.",
          },
          {
            id: "ap-4-c",
            text: "A goal — bells at midwinter — is set against the calendar of means, and the single course that reaches it is taken; the wagon on Monday is the conclusion of the reasoning.",
          },
        ],
      },
      {
        id: "ap-5",
        text: "The bell came down through the trapdoors an inch at a time, like a tooth being talked out of a jaw.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ap-6",
        text: "In its absence the village kept time by the mill whistle and complained about it beautifully.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-lamp-oil",
    title: "The Lamp Oil",
    difficulty: "intermediate",
    includedLabels: ["practical", "bayesian"],
    sentences: [
      {
        id: "pb-1",
        text: "Keeper Ansel had heard the talk about the new pressing of lamp oil and put it down to the usual grumbling of men who missed the old supplier.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pb-2",
        text: "She had given the rumor of dirty-burning oil little credit — chandlers' gossip ran ahead of fact most years — but two fouled wicks inside a single week, where the old oil had fouled perhaps two in a winter, was not something gossip alone could produce, and her doubt turned most of the way to belief.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "pb-2-a",
        explanationOptions: [
          {
            id: "pb-2-a",
            text: "Skepticism held on a low starting credence gives ground as the fouled wicks arrive — evidence hard to get from gossip but easy to get from bad oil — and the belief moves as far as that evidence warrants.",
          },
          {
            id: "pb-2-b",
            text: "It compares two measured rates — two fouled wicks a week against two a winter — and concludes from the proportions alone.",
          },
          {
            id: "pb-2-c",
            text: "It comes round to the chandlers' claim because oil is the chandlers' business and their word carries in it.",
          },
        ],
      },
      {
        id: "pb-3",
        text: "The light, of course, did not care what anyone believed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pb-4",
        text: "Her charge was an unbroken light through the equinox gales, nothing less; with the old pressing still to be had at a hard price from the mainland, the sure means beat the cheap one, and she ordered the dear oil for the whole of the storm season.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "pb-4-b",
        explanationOptions: [
          {
            id: "pb-4-a",
            text: "It explains how impurities in the new pressing choke a wick until the flame starves.",
          },
          {
            id: "pb-4-b",
            text: "The governing end is the unbroken light, and among the means on offer the reliable oil is chosen because it serves that end best — cost yielding to goal.",
          },
          {
            id: "pb-4-c",
            text: "It updates her confidence in the new oil downward one further step before acting on the total.",
          },
        ],
      },
      {
        id: "pb-5",
        text: "The invoice made the harbor board sigh in three separate registers.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pb-6",
        text: "The gales came early that year and found the lamp indifferent to them.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wet-granary",
    title: "The Wet Granary",
    difficulty: "intermediate",
    includedLabels: ["bayesian", "authority", "practical"],
    sentences: [
      {
        id: "aa-1",
        text: "The tithe granary smelled wrong by the first of October — a green smell, in a building that should have smelled of dust.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "aa-2",
        text: "Reeve Odell blamed the wet week at first, as anyone would — damp weather made granaries musty far oftener than roofs failed — but sprouted kernels in three bins along the north wall were another matter, common under a leak and nearly unheard of from weather alone, and his money moved from the sky to the roof.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "aa-2-b",
        explanationOptions: [
          {
            id: "aa-2-a",
            text: "It lands on the leak as the best explanation of the sprouted kernels, never minding how likely a leak was to start with.",
          },
          {
            id: "aa-2-b",
            text: "The weather began as the likelier culprit and loses that standing in proportion to the evidence — sprouting that leaks produce readily and weather almost never does.",
          },
          {
            id: "aa-2-c",
            text: "It traces the mechanism by which standing water sprouts grain where damp air cannot.",
          },
        ],
      },
      {
        id: "aa-3",
        text: "He fetched Grist the millwright, who had kept the valley's roofs and hoppers tight since before Odell could read.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "aa-4",
        text: "Grist went up the ladder, came down whistling through his teeth, and said the lead of the north valley-gutter had split; Odell wrote 'gutter' in the granary book without climbing to look, forty years of the man's roofs standing dry behind the word.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "aa-4-a",
        explanationOptions: [
          {
            id: "aa-4-a",
            text: "The split gutter is accepted on Grist's say-so, and the say-so is weighed properly — four decades of keeping these very roofs tight is expertise in exactly the matter at hand.",
          },
          {
            id: "aa-4-b",
            text: "It skips the climb because staying off the ladder is the most efficient means to finishing the inspection.",
          },
          {
            id: "aa-4-c",
            text: "It shifts belief toward the gutter in proportion to what the whistle through Grist's teeth suggested.",
          },
        ],
      },
      {
        id: "aa-5",
        text: "Frost was due within the fortnight, and lead cannot be worked on frozen mornings.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "aa-6",
        text: "What mattered was grain sound enough to last the winter; moving the north bins to the dry loft could wait, the gutter could not, so Grist's boy was set to the lead that same afternoon and the shoveling put off to Saturday.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "aa-6-c",
        explanationOptions: [
          {
            id: "aa-6-a",
            text: "It raises the likelihood of ruined grain a little further with every day the lead stays split.",
          },
          {
            id: "aa-6-b",
            text: "It orders the work on Grist's instruction, deferring to his judgment about which task comes first.",
          },
          {
            id: "aa-6-c",
            text: "One end — grain that lasts the winter — ranks the available acts by what the frost allows, and gutter-before-shoveling follows from the goal, not from taste.",
          },
        ],
      },
      {
        id: "aa-7",
        text: "The frost came on the twelfth, polite enough to wait until the lead had set.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
