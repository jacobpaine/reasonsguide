import type { PracticeStory } from "@/domain/types";

/**
 * Causal-fallacy stories for the labels unlocked by the causal-fallacies
 * lesson: correlation implies causation, single-cause fallacy, and slippery
 * slope. The fallacious sentences sound like things sensible people say;
 * the neutral sentences quietly hold the rival causes and the missing links.
 */

export const causalFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-clerks-chart",
    title: "The Clerk's Chart",
    difficulty: "intermediate",
    includedLabels: ["correlation-causation"],
    sentences: [
      {
        id: "cc-1",
        text: "The town clerk had discovered charts that winter, and the council chamber wall bloomed with inked curves.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cc-2",
        text: "Streets with more lime trees suffered fewer break-ins, his first chart showed, and he proposed planting limes down every lane to drive the burglars out.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cc-2-a",
        explanationOptions: [
          {
            id: "cc-2-a",
            text: "Trees and safety move together across streets, and the movement alone is read as the trees causing the safety — when prosperous streets may simply have both.",
          },
          {
            id: "cc-2-b",
            text: "The clerk blames every break-in on a single cause when several contribute.",
          },
          {
            id: "cc-2-c",
            text: "The clerk argues that one planting will lead, step by inevitable step, to a crime-free town.",
          },
        ],
      },
      {
        id: "cc-3",
        text: "The constable observed, mildly, that the lime-shaded streets were also the ones with gates, lamps, and households that could afford locks.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cc-4",
        text: "Undeterred, the clerk unveiled a second chart: children whose families kept a lamp burning after supper scored better at the winter examinations, so the parish should issue lamps and watch the marks rise.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cc-4-c",
        explanationOptions: [
          {
            id: "cc-4-b",
            text: "The clerk warns that skipping the lamps will send the school sliding toward ruin.",
          },
          {
            id: "cc-4-c",
            text: "Lamps and marks rise together, and the rise is treated as the lamp's doing — though families with oil to spare may differ in many ways that matter to examinations.",
          },
          {
            id: "cc-4-d",
            text: "The clerk credits the marks to lamps alone when teaching and appetite surely contribute.",
          },
        ],
      },
      {
        id: "cc-5",
        text: "The schoolmistress asked, to general discomfort, whether the parish meant to issue the spare hours and quiet kitchens as well.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cc-6",
        text: "The charts stayed on the wall through spring, admired by visitors and trusted by fewer of them each week.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-failed-harvest",
    title: "The Failed Harvest",
    difficulty: "intermediate",
    includedLabels: ["single-cause"],
    sentences: [
      {
        id: "sg-1",
        text: "The barley came in thin that year — a dry June, a rust blight in July, and half the fields sown three weeks late after the flooded spring.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sg-2",
        text: "At the granary door, old Vasso told anyone with ears that the drought had done it, the drought and nothing else, as droughts had done in his father's day.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "sg-2-a",
        explanationOptions: [
          {
            id: "sg-2-a",
            text: "Three contributing causes stand in plain view — drought, blight, late sowing — and Vasso crowns one of them the whole story.",
          },
          {
            id: "sg-2-b",
            text: "Vasso reasons that because the thin harvest followed the dry June, the dryness must have caused it.",
          },
          {
            id: "sg-2-c",
            text: "Vasso predicts that one dry summer will lead by degrees to famine and the village's end.",
          },
        ],
      },
      {
        id: "sg-3",
        text: "The seed merchant, who had sold the village its barley since autumn, had a different accounting to fear.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sg-4",
        text: "It was the new seed stock, a rival merchant assured the tavern — bad seed, plain and simple, and no talk of weather or rust need enter into it.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "sg-4-c",
        explanationOptions: [
          {
            id: "sg-4-b",
            text: "The rival treats seed sales and thin harvests as moving together across villages and reads causation into the pattern.",
          },
          {
            id: "sg-4-c",
            text: "A failure with several visible parents is pinned entirely on one — and the phrase 'no talk of weather or rust need enter into it' waves the other causes away by hand.",
          },
          {
            id: "sg-4-d",
            text: "The rival argues that buying seed from his competitor once will end with the village owning nothing at all.",
          },
        ],
      },
      {
        id: "sg-5",
        text: "The agent from the agricultural society walked the fields, weighed the rust against the rain gauge, and wrote a report with three causes and no villains.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sg-6",
        text: "It satisfied nobody, which the agent privately took as a sign of its accuracy.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-thin-end",
    title: "The Thin End",
    difficulty: "intermediate",
    includedLabels: ["slippery-slope"],
    sentences: [
      {
        id: "ss-1",
        text: "The proposal before the vestry was small: trim the reading room's Thursday hours by one, to spare the sexton's knees and the candle budget.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ss-2",
        text: "Trim an hour Thursday, warned Deacon Amos, and by Michaelmas it would be an hour every day, then whole days, then the reading room shuttered and the books sold for the roof fund — it always went this way.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "ss-2-a",
        explanationOptions: [
          {
            id: "ss-2-a",
            text: "A one-hour trim is chained to the room's abolition without a single link argued — each 'then' is asserted, none defended.",
          },
          {
            id: "ss-2-b",
            text: "Amos blames the room's troubles entirely on the candle budget when several pressures share the blame.",
          },
          {
            id: "ss-2-c",
            text: "Amos notes that shorter hours and shuttered rooms go together across parishes and takes the hours to be the cause.",
          },
        ],
      },
      {
        id: "ss-3",
        text: "The sexton pointed out that the same vestry had trimmed the vestry-garden budget four years running without abolishing the garden.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ss-4",
        text: "Mrs. Quill rose next: allow the schoolchildren to borrow books unsupervised, as was also proposed, and soon it would be dog-eared pages, then missing volumes, then no library worth the name and a generation lost to idleness besides.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "ss-4-c",
        explanationOptions: [
          {
            id: "ss-4-b",
            text: "Mrs. Quill credits the whole decline of reading to a single cause, the unsupervised borrowing.",
          },
          {
            id: "ss-4-c",
            text: "The chain runs from lending to a lost generation with every link missing — no reason is given why dog-ears must become disappearances, or disappearances idleness.",
          },
          {
            id: "ss-4-d",
            text: "Mrs. Quill assumes that because idleness follows school holidays, the holidays cause the idleness.",
          },
        ],
      },
      {
        id: "ss-5",
        text: "The records clerk noted that the neighboring parish had lent to children for a decade, losing on average one volume a year, usually to a dog.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ss-6",
        text: "Both motions carried, and the reading room survived the autumn in the usual way of things predicted to perish.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-healthy-village",
    title: "The Healthy Village",
    difficulty: "intermediate",
    includedLabels: ["correlation-causation", "single-cause"],
    sentences: [
      {
        id: "cn-1",
        text: "A traveling writer came up the switchbacks to Aldenrue, where an uncommon number of residents kept their own teeth past eighty.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cn-2",
        text: "The long-lived here all drink from the iron spring, he wrote in his first dispatch, and there is the engine of their years: the spring water does it.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cn-2-a",
        explanationOptions: [
          {
            id: "cn-2-a",
            text: "Everyone in the village drinks the spring, the long-lived included — the shared habit merely travels with the long lives, and the dispatch reads the traveling-together as causing.",
          },
          {
            id: "cn-2-b",
            text: "The writer warns that abandoning the spring would begin the village's slow slide into sickness.",
          },
          {
            id: "cn-2-c",
            text: "The writer picks the water as the sole cause of a longevity that plainly has several.",
          },
        ],
      },
      {
        id: "cn-3",
        text: "The village doctor, when consulted, mentioned the steep daily walking, the garden diet, the clean high air, and the habit of retiring with the sun.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cn-4",
        text: "The book, when it appeared, was titled The Water of Aldenrue, and gave the spring sole credit in eleven chapters, the walking and the gardens and the air appearing nowhere in it.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "cn-4-c",
        explanationOptions: [
          {
            id: "cn-4-b",
            text: "The book treats spring-drinking and long life as correlated across villages and infers the water's power from the correlation.",
          },
          {
            id: "cn-4-c",
            text: "Where the doctor counted four contributing causes, the book crowns one and omits the rest — a complex outcome given a single parent.",
          },
          {
            id: "cn-4-d",
            text: "The book claims that bottling the spring will lead, step by step, to the ruin of Aldenrue's way of life.",
          },
        ],
      },
      {
        id: "cn-5",
        text: "Crates of bottled iron water went down the switchbacks all summer, to buyers who kept their carriages and their suppers just as before.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cn-6",
        text: "Their teeth, the doctor predicted, would be along presently to testify.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-empty-bench",
    title: "The Empty School Bench",
    difficulty: "intermediate",
    includedLabels: ["single-cause", "slippery-slope"],
    sentences: [
      {
        id: "sq-1",
        text: "The school had lost eleven pupils in three years, and the fact sat at the head of the town meeting's agenda like a guest nobody had invited.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-2",
        text: "The mayor laid it all at the new mill's gate: the mill drew the families to the valley towns, he said, and there was the whole of the matter.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "sq-2-a",
        explanationOptions: [
          {
            id: "sq-2-a",
            text: "Lean birth years, the closed quarry, and the new valley road all shed pupils too — the mill is one cause promoted to 'the whole of the matter'.",
          },
          {
            id: "sq-2-b",
            text: "The mayor argues that pupil numbers and mill wages move together and takes the wages to be the cause.",
          },
          {
            id: "sq-2-c",
            text: "The mayor warns that one lost pupil sets the school on an unstoppable road to closure.",
          },
        ],
      },
      {
        id: "sq-3",
        text: "The registrar's ledger told a plainer tale — the thin birth years of the last decade, the quarry closure, the new road that made the valley schools an easy drive.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-4",
        text: "Then the schoolmaster spoke: close one classroom now, and next it would be the second classroom, then the school itself, then the young families gone for good and the town a place old people write letters from.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "sq-4-c",
        explanationOptions: [
          {
            id: "sq-4-b",
            text: "The schoolmaster blames the town's whole decline on the single decision about the classroom.",
          },
          {
            id: "sq-4-c",
            text: "One classroom's closure is marched to the death of the town through links — second closure, school's end, exodus — that are announced rather than argued.",
          },
          {
            id: "sq-4-d",
            text: "The schoolmaster observes that towns with fewer classrooms have fewer families, and reads the classrooms as the cause.",
          },
        ],
      },
      {
        id: "sq-5",
        text: "A farmer at the back asked what had actually happened in Merrow, which had closed a classroom five years back.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-6",
        text: "Merrow, it emerged, still had its school, its second classroom, and a waiting list for the infant bench.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-7",
        text: "The meeting resolved to count the actual children before closing anything, which passed for wisdom and, that evening, was.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-harbor-fee",
    title: "The Harbor Fee",
    difficulty: "intermediate",
    includedLabels: ["slippery-slope", "correlation-causation"],
    sentences: [
      {
        id: "sr-1",
        text: "The harbor board proposed a mooring fee of two coppers a night, earmarked for dredging the silted north channel.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sr-2",
        text: "Two coppers tonight, said the eldest of the fishermen, then five by spring, then a licensing office with a brass plate, and inside ten years no boat under sail would afford to call this harbor home.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "sr-2-a",
        explanationOptions: [
          {
            id: "sr-2-a",
            text: "The two-copper fee is escalated to the fleet's extinction through a chain of 'thens' — none of which is given a reason to happen.",
          },
          {
            id: "sr-2-b",
            text: "The fisherman blames the harbor's troubles on the fee alone, ignoring the silt and the weather.",
          },
          {
            id: "sr-2-c",
            text: "The fisherman assumes that because fees arrived before hard times elsewhere, the fees caused them.",
          },
        ],
      },
      {
        id: "sr-3",
        text: "The board's clerk countered with figures from along the coast, read out with the confidence of a man holding paper.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sr-4",
        text: "Every harbor that charges a mooring fee has a larger fleet than ours, the clerk announced, so the fee itself plainly grows a fleet, and ours would grow accordingly.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "sr-4-c",
        explanationOptions: [
          {
            id: "sr-4-b",
            text: "The clerk warns that declining the fee will start the harbor down a road that ends in an empty quay.",
          },
          {
            id: "sr-4-c",
            text: "Fees and fleet size go together across harbors, but big, busy harbors both need fees and attract boats — the clerk reads the going-together as the fee causing the fleet.",
          },
          {
            id: "sr-4-d",
            text: "The clerk credits fleet size to fees alone, setting aside the fish, the rail line, and the sheltered water.",
          },
        ],
      },
      {
        id: "sr-5",
        text: "An old pilot remarked that deep water gathered boats and fees alike, and that nobody dredged a channel with rhetoric.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sr-6",
        text: "The fee passed, sized to the dredging and sunsetted in three years, which gave both prophets something to watch.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-improvement-society",
    title: "Minutes of the Improvement Society",
    difficulty: "intermediate",
    includedLabels: ["correlation-causation", "single-cause", "slippery-slope"],
    sentences: [
      {
        id: "cf-1",
        text: "The Improvement Society met above the saddlery, seven members strong, minutes kept in a marbled book.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cf-2",
        text: "Miss Fairweather opened with her survey: households owning a pianoforte produced the parish's best young readers, and therefore a subscription instrument in the schoolroom would lift the reading of the whole parish.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cf-2-a",
        explanationOptions: [
          {
            id: "cf-2-a",
            text: "Pianos and strong readers keep company in the same households — ones with books, tutors, and quiet evenings — and the keeping-company is mistaken for the piano's doing.",
          },
          {
            id: "cf-2-b",
            text: "Miss Fairweather credits the children's reading to a single cause when many contribute.",
          },
          {
            id: "cf-2-c",
            text: "Miss Fairweather argues that without a piano the parish's reading will decay by inevitable stages.",
          },
        ],
      },
      {
        id: "cf-3",
        text: "The minutes record polite applause, and one abstention on grounds of having heard the schoolroom sing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cf-4",
        text: "Colonel Brace then addressed the spring flood: the beaver dam had done it, the dam entire and alone, and he moved that its removal be minuted as the flood's remedy — the record rainfall and the silted channel being, he said, distractions.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "cf-4-c",
        explanationOptions: [
          {
            id: "cf-4-b",
            text: "The Colonel reasons that since flooding followed the beavers' arrival, the beavers caused the flood.",
          },
          {
            id: "cf-4-c",
            text: "The flood had three parents in plain sight — dam, record rain, silted channel — and the Colonel elects one, dismissing the others by name.",
          },
          {
            id: "cf-4-d",
            text: "The Colonel predicts that tolerating one dam will surrender the whole river, meadow by meadow, to the beavers.",
          },
        ],
      },
      {
        id: "cf-5",
        text: "Last came the matter of the pie-cart that wished to stand Tuesdays in the square, and Mr. Owlish rose with the weight of a man saving civilization.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cf-6",
        text: "License one cart, he said, and next came two, then a row of them, then a fairground where the square had been, and the shops dark behind it — the pie-cart was the first pebble of an avalanche.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "cf-6-a",
        explanationOptions: [
          {
            id: "cf-6-a",
            text: "One licensed cart is rolled downhill to darkened shops with no force but repetition — the avalanche is invoked, the pebble-to-avalanche mechanics never shown.",
          },
          {
            id: "cf-6-b",
            text: "Mr. Owlish observes that squares with carts have fewer shops and takes the carts to be the cause.",
          },
          {
            id: "cf-6-c",
            text: "Mr. Owlish blames the high street's struggles on the pie-cart alone, forgetting the new valley road.",
          },
        ],
      },
      {
        id: "cf-7",
        text: "The Society licensed the cart, tabled the piano, and referred the beavers to a committee, where they remain.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
