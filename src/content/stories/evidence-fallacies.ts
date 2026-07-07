import type { PracticeStory } from "@/domain/types";

/**
 * Evidence-fallacy stories for the labels unlocked by the evidence lessons:
 * cherry-picking, biased sample, and survivorship bias. Intermediate
 * difficulty: the fallacious sentences read the way people actually argue,
 * and the neutral sentences quietly hold the fuller evidence — the lean
 * months, the unasked villagers, the boats that never came back.
 */

export const evidenceFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-harbormaster-year",
    title: "The Harbormaster's Year",
    difficulty: "intermediate",
    includedLabels: ["cherry-picking"],
    sentences: [
      {
        id: "cp-1",
        text: "The harbormaster's annual report ran to forty pages, and the reading of it emptied the meeting room by tradition rather than by accident.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cp-2",
        text: "Arguing for a grander quay, the chandler read aloud the three record months — April, May, and the astonishing June — and let the ledger fall shut on the other nine.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "cp-2-b",
        explanationOptions: [
          {
            id: "cp-2-a",
            text: "Three months is too small a stretch of the year from which to judge the harbor's trade at all.",
          },
          {
            id: "cp-2-b",
            text: "The record months are real, but the nine lean months sitting in the same ledger are deliberately left unread — the selection, not the figures, does the arguing.",
          },
          {
            id: "cp-2-c",
            text: "The chandler's figures come only from merchants who already use the quay, so his sample cannot speak for the harbor as a whole.",
          },
        ],
      },
      {
        id: "cp-3",
        text: "Read whole, the columns told a flatter story: nine lean months, wages paid out of savings, a dredger hired and idle.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cp-4",
        text: "Old Vane, who wanted no quay at all, was no better; he recited the two groundings on the bar as though they were the year entire, and never came to the eleven hundred safe passages recorded on the facing page.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "cp-4-a",
        explanationOptions: [
          {
            id: "cp-4-a",
            text: "The two groundings are cited and the eleven hundred safe passages on the facing page are withheld — evidence picked to fit a conclusion Vane held before he opened the report.",
          },
          {
            id: "cp-4-b",
            text: "Vane reasons only from vessels that made it into the harbor record, ignoring the ships that never attempted the bar at all.",
          },
          {
            id: "cp-4-c",
            text: "Two mishaps become a verdict on a whole year of traffic — far too few cases to carry so sweeping a conclusion.",
          },
        ],
      },
      {
        id: "cp-5",
        text: "The harbormaster, who had written every page, said nothing while the room quoted at itself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cp-6",
        text: "The vote went, as votes there often did, to whoever had read least and recited loudest.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-parish-poll",
    title: "The Parish Poll",
    difficulty: "intermediate",
    includedLabels: ["biased-sample"],
    sentences: [
      {
        id: "bs-1",
        text: "The parish council wanted the village's opinion on moving market day to Wednesday, and appointed two canvassers to go and gather it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bs-2",
        text: "Tolliver did his asking at the Saturday market itself, stall to stall through a busy morning, and returned with a tidy unanimity: nobody he met saw the least reason for a change.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "bs-2-c",
        explanationOptions: [
          {
            id: "bs-2-a",
            text: "Tolliver keeps only the answers that favored Saturday and quietly drops the handful that did not, so his unanimity is edited rather than found.",
          },
          {
            id: "bs-2-b",
            text: "He counts only the stallholders whose trade has survived years of Saturdays, the ones Saturdays already failed having long since left the market.",
          },
          {
            id: "bs-2-c",
            text: "Everyone at a Saturday market is there because Saturday suits them; the people a Wednesday would serve were never standing at a stall to be asked.",
          },
        ],
      },
      {
        id: "bs-3",
        text: "The farms upriver, whose carts could not spare a Saturday in harvest, went unvisited, being nowhere near a stall.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bs-4",
        text: "Prue, meanwhile, gathered her numbers outside the chapel after the early service, and pronounced the village firmly for quiet Saturdays on the strength of a congregation that had been for quiet Saturdays since before she was born.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "bs-4-a",
        explanationOptions: [
          {
            id: "bs-4-a",
            text: "The early congregation is one settled corner of the village, over-represented by the choice of where to stand; the villagers who spend their Saturdays otherwise were never in her count.",
          },
          {
            id: "bs-4-b",
            text: "One morning's conversation outside the chapel is too few people, asked too briefly, to support any conclusion about the village.",
          },
          {
            id: "bs-4-c",
            text: "Prue reads out only the answers that matched her own preference for quiet Saturdays and leaves the rest off her sheet.",
          },
        ],
      },
      {
        id: "bs-5",
        text: "The two reports arrived at the council table flatly contradicting each other, each perfectly certain.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bs-6",
        text: "The clerk suggested, gently, that next time the doors knocked on might be chosen by something other than convenience.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tarred-hulls",
    title: "The Tarred Hulls",
    difficulty: "intermediate",
    includedLabels: ["survivorship-bias"],
    sentences: [
      {
        id: "sv-1",
        text: "After the equinox gale, the boats came back into the harbor one and two at a time, and the whole village turned out on the wall to look them over.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sv-2",
        text: "Every hull that came home had been tarred at Marek's yard, and by evening it was settled along the quay that Marek's tar was what had brought them through.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "sv-2-b",
        explanationOptions: [
          {
            id: "sv-2-a",
            text: "The quay cites only the facts that flatter Marek's yard and passes over the work of the rival yards down the coast.",
          },
          {
            id: "sv-2-b",
            text: "The verdict is drawn only from the boats that returned; the boats that didn't come back never enter the reckoning, though they would test the tar's reputation hardest.",
          },
          {
            id: "sv-2-c",
            text: "The quay polls only harbor-side opinion, a crowd already loyal to Marek, so the conclusion was decided by who was standing on the wall.",
          },
        ],
      },
      {
        id: "sv-3",
        text: "The Dorcas and the Little Owl, which did not come back, had been tarred in the same yard in the same week, though no one on the quay stood up to say so.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sv-4",
        text: "Old Aldous took the occasion to say what he always said, that the sea had been safer in his youth, and for proof he offered himself and his three messmates, hale at eighty.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "sv-4-c",
        explanationOptions: [
          {
            id: "sv-4-a",
            text: "Aldous samples only fishermen of his own acquaintance, a circle far too narrow and too fond of him to represent the old fleet fairly.",
          },
          {
            id: "sv-4-b",
            text: "Four old men are simply too few cases from which to conclude anything about a whole generation of seafaring.",
          },
          {
            id: "sv-4-c",
            text: "His proof consists entirely of the men still alive to be offered as proof; the crews of his youth who would testify otherwise did not live to be counted.",
          },
        ],
      },
      {
        id: "sv-5",
        text: "The parish register, which kept its own accounts, listed nineteen men lost in the decade Aldous called safe.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sv-6",
        text: "Marek, to his credit, raised his prices not at all, and tarred whatever came to him.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-rootstock-trial",
    title: "The Rootstock Trial",
    difficulty: "intermediate",
    includedLabels: ["cherry-picking", "biased-sample"],
    sentences: [
      {
        id: "cb-1",
        text: "The growers' cooperative met in the long barn to decide whether the spring plantings should go onto the new rootstock.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cb-2",
        text: "The nurseryman's circular was persuasive: it pictured the six trial rows that had flourished, row upon glossy row, and found no space in four pages for the five rows that had failed on the same clay.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "cb-2-a",
        explanationOptions: [
          {
            id: "cb-2-a",
            text: "The flourishing rows are shown and the failed rows from the very same trial are left out of the four pages — each picture true, and the whole picture false.",
          },
          {
            id: "cb-2-b",
            text: "The trial was run only on the nursery's own well-tended ground, so its rows cannot represent what the rootstock would do in ordinary orchards.",
          },
          {
            id: "cb-2-c",
            text: "Six rows of trees is too small a planting from which to conclude anything about how the rootstock will fare at scale.",
          },
        ],
      },
      {
        id: "cb-3",
        text: "Hodge, who had walked the trial ground himself in March, remembered mud to the ankle and rather more gaps than the pictures showed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cb-4",
        text: "For local opinion, Wetherall had canvassed the growers at the nursery's own open day and reported sentiment running nine to one in favor — as it might, among people who chose to take their Saturday at the nursery.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "cb-4-c",
        explanationOptions: [
          {
            id: "cb-4-a",
            text: "Wetherall reports the nine and discards the dissenting tenth, trimming his returns until they say what the nursery would like.",
          },
          {
            id: "cb-4-b",
            text: "He counts only growers whose orchards are still in business, and the rootstock's real record lies with the orchards that have already gone under.",
          },
          {
            id: "cb-4-c",
            text: "An open-day crowd is the nursery's admirers by self-selection; the growers who never attend — the very ones to be persuaded — were never put the question.",
          },
        ],
      },
      {
        id: "cb-5",
        text: "The cooperative's own trial plot, planted three winters back, had figures nobody had thought to read out.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cb-6",
        text: "They tabled the grafting until someone had, and the barn emptied into the wet evening.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-high-hut",
    title: "The Hut on the Col",
    difficulty: "intermediate",
    includedLabels: ["biased-sample", "survivorship-bias"],
    sentences: [
      {
        id: "bv-1",
        text: "The wardens' association asked the hut-keeper on the col to report whether the new zigzag path was too hard for ordinary walkers.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bv-2",
        text: "He sent the question down with the mule post to the climbing club's newsletter, and the replies came back warmly in favor, club members being on the whole the kind of walkers who wish every path steeper.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "bv-2-b",
        explanationOptions: [
          {
            id: "bv-2-a",
            text: "The hut-keeper forwards only the warmest replies to the association and leaves the doubtful letters in the hut drawer.",
          },
          {
            id: "bv-2-b",
            text: "Polling the climbing club over-represents the keen by the very method of asking; the ordinary walkers the question was actually about were never on the newsletter's list.",
          },
          {
            id: "bv-2-c",
            text: "Only members still climbing answer a climbing newsletter, and the ones the mountains have used hardest are no longer subscribers to say so.",
          },
        ],
      },
      {
        id: "bv-3",
        text: "The village postmistress could have told him about the day-trippers who came down early, asking after the old mule track.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bv-4",
        text: "As for the old unrailed traverse, he judged it by his regulars — thirty years of them, and never a bone broken — and wrote that the crossing was a good deal safer than the association's fretting suggested.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "bv-4-a",
        explanationOptions: [
          {
            id: "bv-4-a",
            text: "The regulars are the walkers the traverse never hurt or frightened off; anyone it did is no longer a regular, so the evidence has been filtered clean before he consults it.",
          },
          {
            id: "bv-4-b",
            text: "He asks only guests under his own roof, a sample flattered by soup and shelter into agreeing with their host.",
          },
          {
            id: "bv-4-c",
            text: "He rests the whole judgment on his own thirty vivid years at the hut, one man's story set against the association's wider records.",
          },
        ],
      },
      {
        id: "bv-5",
        text: "The valley ledger told it differently, its accident entries mostly first-timers who had tried the traverse once and never come back to become regulars.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bv-6",
        text: "He posted his report with the down-mule and went back to his soup, well pleased with the mountain's opinion of itself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-old-quarter",
    title: "The Old Quarter",
    difficulty: "intermediate",
    includedLabels: ["survivorship-bias", "cherry-picking"],
    sentences: [
      {
        id: "vc-1",
        text: "The question of whether to let the mason rebuild Chandler's Row in the old manner filled the vestry twice over.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vc-2",
        text: "They built to last in those days, the mason said, and for evidence he had only to gesture at the old quarter, where every house standing was two centuries old and straight as a mast.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "vc-2-c",
        explanationOptions: [
          {
            id: "vc-2-a",
            text: "The mason points only at the handsomest houses in the quarter and keeps the crooked ones out of his gesture.",
          },
          {
            id: "vc-2-b",
            text: "A single quarter of one town is too narrow a district from which to judge the building of a whole age.",
          },
          {
            id: "vc-2-c",
            text: "The standing houses are the ones that lasted; the period's shoddy work fell, burned, or was pulled down long ago, and cannot be gestured at.",
          },
        ],
      },
      {
        id: "vc-3",
        text: "The parish maps in the archive showed the quarter twice its present size in its day, the missing half having subsided, burned, or been condemned by prudent grandfathers.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vc-4",
        text: "The antiquarian pressed the case with documents, reading out the three surveyors' reports that praised the old lime mortar and leaving in the box, unread, the thicker bundle of repair bills filed alongside them.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "vc-4-b",
        explanationOptions: [
          {
            id: "vc-4-a",
            text: "The antiquarian reads only such documents as happened to survive the centuries, and the archive's losses decide his case for him.",
          },
          {
            id: "vc-4-b",
            text: "The favorable reports are read out while the repair bills filed in the same box stay in the box — the evidence is complete, and the presentation of it is not.",
          },
          {
            id: "vc-4-c",
            text: "The three reports were commissioned by owners proud of their houses, so the antiquarian's documents speak only for the satisfied.",
          },
        ],
      },
      {
        id: "vc-5",
        text: "Nobody thought to ask the roofers, who worked in the old quarter oftenest and priced it accordingly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vc-6",
        text: "The vestry approved the old manner, with a modern damp course nobody mentioned aloud.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-crossing-question",
    title: "The Crossing Question",
    difficulty: "intermediate",
    includedLabels: ["cherry-picking", "biased-sample", "survivorship-bias"],
    sentences: [
      {
        id: "ev-1",
        text: "Whether to keep the ferry or petition for a bridge was the only question that could fill the reading room on a fine evening.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ev-2",
        text: "The treasurer, a ferry man to his boots, read out the receipts from the fair-weather quarter and stopped there, June through August glittering on the page while November stayed in his coat pocket.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "ev-2-a",
        explanationOptions: [
          {
            id: "ev-2-a",
            text: "The summer receipts are genuine and the winter figures exist in his very pocket — the case is made by what he chooses to stop reading before.",
          },
          {
            id: "ev-2-b",
            text: "Receipts count only the crossings that were made, and say nothing of the travelers the ferry's timetable turned away.",
          },
          {
            id: "ev-2-c",
            text: "One quarter is too short a season of trade from which to judge the ferry's whole year.",
          },
        ],
      },
      {
        id: "ev-3",
        text: "The full accounts, plain to anyone who asked, showed the ferry eating its summer profits by January.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ev-4",
        text: "A petition to save the crossing gathered four hundred names in a week, every one of them collected on the ferry's own deck, midstream between the banks.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "ev-4-c",
        explanationOptions: [
          {
            id: "ev-4-a",
            text: "The petitioners kept the four hundred names in favor and tore off the sheet of those who declined to sign.",
          },
          {
            id: "ev-4-b",
            text: "Four hundred signatures is too few, in a district of thousands, to establish what the villages on either bank truly want.",
          },
          {
            id: "ev-4-c",
            text: "A paper passed around the ferry's deck can only ever reach the ferry's riders; the villagers who avoid the crossing, or cannot use it, never had it put before them.",
          },
        ],
      },
      {
        id: "ev-5",
        text: "The carters, who took the long road round with anything heavy, signed nothing, being seldom aboard.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ev-6",
        text: "As for the bridge men's talk of danger, old Sefton settled it to his own satisfaction: he had crossed twice a day for fifty years and come to no harm, and so had every regular he could name.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "ev-6-b",
        explanationOptions: [
          {
            id: "ev-6-a",
            text: "Sefton sets one man's fifty vivid years against the district's records, and lets the better story win.",
          },
          {
            id: "ev-6-b",
            text: "The regulars Sefton can name are precisely those the crossing never harmed; anyone it hurt or frightened off stopped being a regular, and so slipped out of his evidence.",
          },
          {
            id: "ev-6-c",
            text: "Sefton consults only riders like himself, a circle chosen by friendship rather than any fair method of asking.",
          },
        ],
      },
      {
        id: "ev-7",
        text: "The reading room voted for the ferry, warmly, and the river went on being a river.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
