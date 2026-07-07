import type { PracticeStory } from "@/domain/types";

/**
 * Intermediate stories for the value-laden applied forms: moral, comparative,
 * and conductive reasoning. Targets are unsignposted; the reasoning lives in
 * natural phrasing, and neutral sentences vary in length so shape doesn't
 * leak the answer.
 */

export const valuesStories: readonly PracticeStory[] = [
  {
    id: "story-keepers-word",
    title: "The Keeper's Word",
    difficulty: "intermediate",
    includedLabels: ["moral"],
    sentences: [
      {
        id: "mo-1",
        text: "The light at Gannet Point had burned every night for forty-one years, through three keepers, two wars of paperwork with the board, and one memorable eel.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mo-2",
        text: "The board's letter cut the oil allowance by a third and suggested, delicately, a half-wick on clear nights; but Tam had given his word to the fishing fleet the day he took the post, and a promise made to men at sea does not shrink with the price of oil — the lamp would burn full.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "mo-2-a",
        explanationOptions: [
          {
            id: "mo-2-a",
            text: "The word given to the fleet stands as a duty, and the conclusion — the lamp burns full — follows from that obligation outweighing the price of oil.",
          },
          {
            id: "mo-2-b",
            text: "It ranks the full wick against the board's half-wick along shared criteria of brightness and cost, concluding the full wick the better setting.",
          },
          {
            id: "mo-2-c",
            text: "It settles on the full wick as the most effective available means to the keeper's goal of bringing the fleet safely round the point.",
          },
        ],
      },
      {
        id: "mo-3",
        text: "He wrote as much to the board, in a hand that had signed nothing longer than a delivery slip in years.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mo-4",
        text: "Their reply offered a bargain — the full allowance restored, if he would log which boats ran the point after dark, so the harbor office could chase its unpaid moorings — and Tam refused it, because a light kept to watch over sailors ought never be turned into a means of watching them.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "mo-4-c",
        explanationOptions: [
          {
            id: "mo-4-a",
            text: "It sets the restored oil against the burden of keeping the log, adds the fleet's likely resentment, and lets the balance of reasons carry the refusal.",
          },
          {
            id: "mo-4-b",
            text: "It rejects the bargain because logging boats at night would be a poor means to the harbor office's end of collecting its moorings.",
          },
          {
            id: "mo-4-c",
            text: "The refusal rests on a principle about what the light is for — protection, not surveillance — and derives what ought never be done from it, whatever the allowance is worth.",
          },
        ],
      },
      {
        id: "mo-5",
        text: "The allowance stayed cut, and the village, hearing of it, took to leaving oil cans at the foot of the tower stairs.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mo-6",
        text: "By spring the store shed held more oil than the board had ever sent.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-three-quays",
    title: "The Three Quays",
    difficulty: "intermediate",
    includedLabels: ["comparative"],
    sentences: [
      {
        id: "cq-1",
        text: "The herring came early that year, and the harbor board met above the net loft to decide which quay should take the winter landings.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cq-2",
        text: "Measured against the three things a landing quay must offer — depth at low tide, nearness to the ice house, shelter from the north swell — the East Quay beat the Old Quay on every count and gave up nothing in return.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "cq-2-a",
        explanationOptions: [
          {
            id: "cq-2-a",
            text: "Three named criteria — depth, nearness to the ice, shelter — are laid across both quays, and the conclusion is a ranking: East better than Old on every count.",
          },
          {
            id: "cq-2-b",
            text: "Independent reasons for and against each quay are gathered and weighed, no single one decisive, until their combined lean favors the East Quay.",
          },
          {
            id: "cq-2-c",
            text: "It argues the East Quay is owed the landings by long-standing right, deriving what the board ought to do from that claim.",
          },
        ],
      },
      {
        id: "cq-3",
        text: "That left the Chapel Quay, which everyone had been politely not mentioning.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cq-4",
        text: "On depth and shelter the Chapel Quay matched the East stone for stone; on the walk to the ice house it was worse by two hundred yards of cobbles, and fish do not improve with jostling — so, of the three, East stood first, Chapel second, and the Old Quay a distant third.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "cq-4-b",
        explanationOptions: [
          {
            id: "cq-4-a",
            text: "It piles up separate, unlike pros and cons for the Chapel Quay — depth, cobbles, jostled fish — and lets their combined weight, rather than any shared measure, settle a verdict.",
          },
          {
            id: "cq-4-b",
            text: "The same yardsticks are applied again — matched on depth and shelter, worse on the walk — and the sentence ends where comparison ends, in an ordering of the three.",
          },
          {
            id: "cq-4-c",
            text: "It picks the quay that best serves the goal of getting fish onto ice quickly, choosing an action as a means to that end.",
          },
        ],
      },
      {
        id: "cq-5",
        text: "The vote was brief; the arguing about it in the tavern afterward was not.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cq-6",
        text: "By November the East Quay smelled so richly of herring that even the gulls seemed impressed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-winter-road",
    title: "The Winter Road",
    difficulty: "intermediate",
    includedLabels: ["conductive"],
    sentences: [
      {
        id: "cu-1",
        text: "The high road over Crake Fell closed each winter, and each autumn the parish argued about whether it should.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cu-2",
        text: "Keeping it open would spare the carters the long valley detour and keep the fell farms in reach of the doctor; against that stood the wage of a snow gang, drifts that could bury a wall in a night, and the plain fact that hardly anyone crossed after Martinmas — none of it settled the matter alone, but set side by side the reasons leaned, all together, toward closing.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "cu-2-c",
        explanationOptions: [
          {
            id: "cu-2-c",
            text: "Carters' time, the doctor's reach, the snow gang's wage, the drifts, the empty road — independent reasons on both sides, none decisive, with the conclusion carried by how they lean together.",
          },
          {
            id: "cu-2-d",
            text: "It ranks the high road against the valley detour along shared criteria of cost and safety and concludes the valley road the better of the two.",
          },
          {
            id: "cu-2-e",
            text: "It derives the parish's duty to close the road from its obligation to keep the snow gang out of mortal danger.",
          },
        ],
      },
      {
        id: "cu-3",
        text: "Widow Askern, whose farm sat highest on the fell, asked what the doctor was to do in February.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cu-4",
        text: "A staked bridleway would cost little, could be walked when the road could not, and answered the doctor's case; it would still drift in the worst weeks, and someone must ride out after every storm to reset the poles — but the three reasons for it, taken with the two against, came down comfortably on its side.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "cu-4-a",
        explanationOptions: [
          {
            id: "cu-4-a",
            text: "Three considerations for the bridleway and two against are counted as separate weights, and the conclusion rests on their combined balance rather than on any one of them.",
          },
          {
            id: "cu-4-b",
            text: "It measures the bridleway against the full road on the shared criteria of cost and winter passability and ranks the bridleway higher.",
          },
          {
            id: "cu-4-c",
            text: "It concludes the parish ought to stake the way because it owes its highest farms the reach of a doctor, that obligation doing the work.",
          },
        ],
      },
      {
        id: "cu-5",
        text: "The vote carried with only the carters against, and they were outnumbered by everyone who had ever dug one out.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cu-6",
        text: "The first poles went in before the fair, painted a red the fell fog would learn to respect.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-gleaners-field",
    title: "The Gleaners' Field",
    difficulty: "intermediate",
    includedLabels: ["moral", "comparative"],
    sentences: [
      {
        id: "mk-1",
        text: "Harvest ended at Longbarrow the way it always did: the last wagon cheered off the field, and the stubble left glinting behind it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mk-2",
        text: "The new steward proposed folding the sheep onto the stubble at once, but gleaning had been the right of the parish poor since anyone's grandmother could remember, and a right of the poor is not the steward's to spend — the field ought to stand open a week, as it always had.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "mk-2-b",
        explanationOptions: [
          {
            id: "mk-2-a",
            text: "It weighs the estate's gain from early folding against the gleaners' loss and several smaller considerations, letting the balance fall to a week's delay.",
          },
          {
            id: "mk-2-b",
            text: "An old right of the parish poor supplies the premise, and the ought — the field stands open — follows from that right not being the steward's to spend, whatever the sheep might gain.",
          },
          {
            id: "mk-2-c",
            text: "It keeps the field open as the steward's most reliable means of staying on good terms with the parish.",
          },
        ],
      },
      {
        id: "mk-3",
        text: "The steward, to his credit, asked which fields the gleaners actually walked.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mk-4",
        text: "Of the two just cut, Longbarrow offered heavier leavings and level footing, while the Brook Field lay closer to the cottages but flooded at its margins and had been cut clean by the new reaper; on what mattered to a gleaner — leavings, footing, and the walk — Longbarrow came out better on two counts of three.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "mk-4-a",
        explanationOptions: [
          {
            id: "mk-4-a",
            text: "Three criteria a gleaner cares about are named — leavings, footing, the walk — and both fields are scored against them, ending in better and worse rather than in a decision.",
          },
          {
            id: "mk-4-b",
            text: "It argues the gleaners are owed the richer field as a matter of fairness, deriving the outcome from what is due to them.",
          },
          {
            id: "mk-4-c",
            text: "Separate, unlike reasons about each field — the flooding, the new reaper, the distance — are thrown into one scale, and the verdict is read off their combined weight.",
          },
        ],
      },
      {
        id: "mk-5",
        text: "So the sheep went to the Brook Field, and nobody's grandmother was troubled in her rest.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mk-6",
        text: "The week's gleaning filled aprons, and occasioned one small argument about a hen.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-harbor-clock",
    title: "The Harbor Clock",
    difficulty: "intermediate",
    includedLabels: ["comparative", "conductive"],
    sentences: [
      {
        id: "kq-1",
        text: "The clock above the harbor office had lost eleven minutes since Easter, which on a coast ruled by tides was not a joke.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "kq-2",
        text: "Two bids came in — Marsh the younger would clean and rebush the old works, Fenner would fit a new movement outright — and judged on price, on years bought, and on keeping the original bell, Marsh's stood better on the first and last and worse only on the second.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "kq-2-c",
        explanationOptions: [
          {
            id: "kq-2-a",
            text: "It assembles independent reasons favoring each clockmaker and lets their accumulated weight, rather than any common measure, tip toward Marsh.",
          },
          {
            id: "kq-2-b",
            text: "It reasons that the town ought to keep faith with the old works, an obligation to the bell deciding between the bids.",
          },
          {
            id: "kq-2-c",
            text: "The two bids are set against three named criteria — price, years bought, the original bell — and the sentence ends in a scoring of better and worse, not in a choice.",
          },
        ],
      },
      {
        id: "kq-3",
        text: "The harbormaster, who distrusted anything that arrived in a crate, said nothing and refilled his pipe.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "kq-4",
        text: "There were other things than the bids to reckon with: the town's affection for the old chime, the risk that a cleaned movement might stall again in a hard frost, the sailmaker's point that a stopped clock had already cost one missed tide, and the thinness of the repair fund — none conclusive by itself, but weighed together they came down, narrowly, on Marsh's side.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "kq-4-b",
        explanationOptions: [
          {
            id: "kq-4-a",
            text: "It re-ranks the two bids along the same shared criteria as before — price, years, and the bell — and finds Marsh still ahead on points.",
          },
          {
            id: "kq-4-b",
            text: "Affection for the chime, frost risk, the missed tide, the thin fund — considerations of different kinds, none decisive alone, weighed in one motion until the balance settles narrowly on Marsh.",
          },
          {
            id: "kq-4-c",
            text: "It selects Marsh's repair as the most effective means to the single goal of never missing another tide.",
          },
        ],
      },
      {
        id: "kq-5",
        text: "Marsh took the works away in a fish basket, promising them back by the spring tides.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "kq-6",
        text: "When the clock struck true again, half the town checked it against their watches, and the other half checked their watches against it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-unclaimed-letters",
    title: "The Unclaimed Letters",
    difficulty: "intermediate",
    includedLabels: ["conductive", "moral"],
    sentences: [
      {
        id: "um-1",
        text: "Behind the old sorting-office wall, the builders found a mail sack: ninety-odd letters, stamped and sealed, undelivered since the year of the great gale.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "um-2",
        text: "Delivering them now might reopen old griefs, and half the addresses had long since fallen to the sea; against that, some of the names still had grandchildren in the village, the letters were short walks rather than sea voyages to deliver, and curiosity, once loosed, would not be got back into the sack — taken all together, the reasons tipped toward trying.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "um-2-a",
        explanationOptions: [
          {
            id: "um-2-a",
            text: "Old griefs and lost addresses on one side; living grandchildren, easy delivery, unstoppable curiosity on the other — unlike reasons weighed together, the verdict carried by where the whole collection tips.",
          },
          {
            id: "um-2-b",
            text: "It concludes the letters ought to go out because a posted letter is owed its delivery, a duty that survives even the gale.",
          },
          {
            id: "um-2-c",
            text: "It ranks delivering against archiving along the shared criteria of cost and likely harm and finds delivery the better option.",
          },
        ],
      },
      {
        id: "um-3",
        text: "The question that stopped the room was what to do with letters whose lines had ended.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "um-4",
        text: "The archivist was firm on one point: a sealed letter belongs to the person it names, living or dead, and where no heir could be found the seal ought to stay unbroken, however much the parish history might profit by the reading.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "um-4-c",
        explanationOptions: [
          {
            id: "um-4-a",
            text: "It balances the history's gain from reading against the grief of broken seals and a handful of smaller reasons, finding the case against reading slightly heavier.",
          },
          {
            id: "um-4-b",
            text: "It keeps the seals whole as the archive's surest means of avoiding disputes with distant heirs.",
          },
          {
            id: "um-4-c",
            text: "A sealed letter's belonging to the person it names is asserted as a right, and the ought — seals unbroken — is derived from it even against the history's admitted profit.",
          },
        ],
      },
      {
        id: "um-5",
        text: "Thirty-one letters went out that autumn, some to houses only two doors from where they were first posted.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "um-6",
        text: "The rest sleep in the archive in their sack, addresses fading, seals intact.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-flood-fund",
    title: "The Flood Fund",
    difficulty: "intermediate",
    includedLabels: ["moral", "comparative", "conductive"],
    sentences: [
      {
        id: "vv-1",
        text: "The river took the footbridge and the school's lower floor in the same March night, and by April the flood fund stood at a sum nobody had dared hope for.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vv-2",
        text: "A councillor suggested the surplus might quietly seed the long-wished-for market hall; the treasurer replied that money given for flood relief is held in trust for that grief and no other, and spending it otherwise ought to be unthinkable, however good the hall.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "vv-2-a",
        explanationOptions: [
          {
            id: "vv-2-a",
            text: "The treasurer reasons from a trust — money given for one grief — to what ought not be done with it, the principle standing firm even against the hall's admitted good.",
          },
          {
            id: "vv-2-b",
            text: "It weighs the hall's benefits against the awkwardness of redirected funds and several smaller reasons, and the balance falls against the councillor.",
          },
          {
            id: "vv-2-c",
            text: "It ranks the market hall against flood repairs along shared criteria of benefit to the town and finds the repairs the better use of the surplus.",
          },
        ],
      },
      {
        id: "vv-3",
        text: "That still left the question of which repair the fund could not stretch to cover both of.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vv-4",
        text: "Set against each other on urgency, on the number served each day, and on what delay would cost, the school outranked the bridge: children could cross by the long lane either way, but lessons in a borrowed barn were failing by the week.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "vv-4-b",
        explanationOptions: [
          {
            id: "vv-4-a",
            text: "It argues the children are owed their schoolroom first, a duty to them deciding between the two projects.",
          },
          {
            id: "vv-4-b",
            text: "School and bridge are measured on the same three counts — urgency, daily use, the cost of delay — and the outcome is an ordering, the school ranked above the bridge.",
          },
          {
            id: "vv-4-c",
            text: "It gathers unlike reasons on each side — the long lane, the draughty barn — and lets their combined weight, not any shared measure, produce a verdict.",
          },
        ],
      },
      {
        id: "vv-5",
        text: "The bridge men took it well, on the whole, and only mentioned the barn's draughts twice.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vv-6",
        text: "When the bridge's turn came, the quarry's offer of stone at cost pulled one way; against it stood an extra year of carting, the mason's warning about winter mortar, and the village's plain hunger to cross its river again — while for it counted the hundred years a stone span would stand and the end, forever, of rot; no single reason carried the day, but the balance, argued over three long evenings, settled on stone.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "vv-6-c",
        explanationOptions: [
          {
            id: "vv-6-a",
            text: "It ranks stone against timber along the shared criteria of cost and lifespan and concludes stone the better bridge on both.",
          },
          {
            id: "vv-6-b",
            text: "It derives a duty to build in stone from what the village owes the generations who will cross after it.",
          },
          {
            id: "vv-6-c",
            text: "Cheap stone, a lost year, winter mortar, the village's impatience, a century's standing — considerations pulling both ways, and the passage says itself that no one reason carried it; the balance did.",
          },
        ],
      },
      {
        id: "vv-7",
        text: "The school opened first, smelling of new plaster; the bridge followed a year on, and the fund closed itself out with a supper for the whole parish.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
