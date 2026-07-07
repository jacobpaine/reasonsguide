import type { PracticeStory } from "@/domain/types";

/**
 * Beginner stories for the first practice unlock: deduction, induction,
 * and abduction. Targets are clearly signposted; neutral sentences carry
 * scene-setting only. Authoring rules: .claude/skills/story-creation.
 */

export const beginnerStories: readonly PracticeStory[] = [
  {
    id: "story-greenhouse",
    title: "The Locked Greenhouse",
    difficulty: "beginner",
    includedLabels: ["deductive", "abductive"],
    sentences: [
      {
        id: "gh-1",
        text: "Frost had come early to the hill gardens, and Alba walked the rows with her coat buttoned to the chin.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-2",
        text: "The greenhouse door stood locked, yet inside, a watering can sat in the middle of the aisle where no one would leave it overnight.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-3",
        text: "Only the head gardener and the caretaker hold keys, so whoever moved that can must be one of those two.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "gh-3-a",
        explanationOptions: [
          {
            id: "gh-3-a",
            text: "A rule about who holds keys forces the conclusion: if the door was used, it must have been one of the two key-holders.",
          },
          {
            id: "gh-3-b",
            text: "Past experience shows gardeners usually forget watering cans, so this was probably a gardener.",
          },
          {
            id: "gh-3-c",
            text: "The watering can is the surprising clue, and a gardener's visit is the best explanation for it.",
          },
        ],
      },
      {
        id: "gh-4",
        text: "Alba tried the caretaker's cottage first, but his boots were dry and the path from his door was unswept snow.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-5",
        text: "The likeliest explanation, then, was that the head gardener had come before dawn to move the tender seedlings away from the glass.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "gh-5-b",
        explanationOptions: [
          {
            id: "gh-5-a",
            text: "A rule about greenhouse keys guarantees that the head gardener was the one who entered.",
          },
          {
            id: "gh-5-b",
            text: "With the caretaker ruled out by the unswept snow, the gardener's pre-dawn visit is the explanation that best fits all the clues.",
          },
          {
            id: "gh-5-c",
            text: "The gardener has come before dawn every frost this year, so she probably did again.",
          },
        ],
      },
      {
        id: "gh-6",
        text: "Sure enough, the seedling trays had been shifted to the stone bench along the warm north wall.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-trains",
    title: "Morning Trains",
    difficulty: "beginner",
    includedLabels: ["inductive", "deductive"],
    sentences: [
      {
        id: "tr-1",
        text: "Jonas had taken the 7:12 from Elm Junction every working day since the spring timetable began.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-2",
        text: "In all those months, the 7:12 had never once arrived ahead of the slower 7:04 local.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-3",
        text: "So when a stranger on the platform asked which train reached the city first, Jonas said the 7:04 would almost certainly win again today.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "tr-3-a",
        explanationOptions: [
          {
            id: "tr-3-a",
            text: "Months of observed arrivals form a pattern, which Jonas projects onto today as a strong likelihood.",
          },
          {
            id: "tr-3-b",
            text: "The timetable's rules make it logically necessary that the 7:04 arrives first.",
          },
          {
            id: "tr-3-c",
            text: "The stranger's question is puzzling, and the 7:04's speed is the best explanation for it.",
          },
        ],
      },
      {
        id: "tr-4",
        text: "The stranger frowned at his ticket, a paper monthly pass stamped in red.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-5",
        text: "Monthly passes are valid only on local services, and the 7:12 is an express, so his pass would not carry him aboard it in any case.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "tr-5-c",
        explanationOptions: [
          {
            id: "tr-5-c",
            text: "Two rules — passes valid only on locals, the 7:12 being an express — together make the conclusion inescapable.",
          },
          {
            id: "tr-5-d",
            text: "Conductors have turned away pass-holders before, so this one would probably be turned away too.",
          },
          {
            id: "tr-5-e",
            text: "The red stamp is a clue, and rejection at the express is the best explanation for the stranger's frown.",
          },
        ],
      },
      {
        id: "tr-6",
        text: "Jonas pointed him down the platform, and the local sighed into the station right on time.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ledger",
    title: "The Missing Ledger",
    difficulty: "beginner",
    includedLabels: ["abductive", "inductive"],
    sentences: [
      {
        id: "lg-1",
        text: "The harbormaster's office smelled of tar and old paper, and the shelf where the tide ledger lived stood empty.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-2",
        text: "A ring of dust marked where the ledger had sat, and beside it lay a pair of reading glasses that belonged to no one in the office.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-3",
        text: "The best explanation, Rhea decided, was that the retired harbormaster had wandered in for his old ledger and left his glasses in trade.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "lg-3-a",
        explanationOptions: [
          {
            id: "lg-3-a",
            text: "A single hypothesis — the retired harbormaster's visit — accounts for both odd clues: the missing ledger and the strange glasses.",
          },
          {
            id: "lg-3-b",
            text: "Office rules say only harbormasters may touch the ledger, so it must have been him.",
          },
          {
            id: "lg-3-c",
            text: "He has borrowed the ledger many times before, so he probably borrowed it again.",
          },
        ],
      },
      {
        id: "lg-4",
        text: "Rhea had crossed the square to his cottage twice that month already, once about charts and once about a kettle he'd left boiling.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-5",
        text: "Every one of his borrowings, going back years, had ended with the ledger returned by Friday, so she expected this one back by week's end too.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "lg-5-b",
        explanationOptions: [
          {
            id: "lg-5-a",
            text: "The harbor code requires borrowed ledgers to be returned by Friday, so it must come back.",
          },
          {
            id: "lg-5-b",
            text: "Years of past borrowings all ended the same way, and that pattern makes the same outcome likely this time.",
          },
          {
            id: "lg-5-c",
            text: "The returned-by-Friday habit is the best explanation for the ring of dust on the shelf.",
          },
        ],
      },
      {
        id: "lg-6",
        text: "She set the glasses in her drawer for safekeeping and pencilled a note into the margin of the day's log.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-weigh-house",
    title: "The Weigh-House Rule",
    difficulty: "beginner",
    includedLabels: ["deductive"],
    sentences: [
      {
        id: "wh-1",
        text: "Market mornings began at the weigh-house, where Maren queued behind a line of carts breathing steam into the cold.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wh-2",
        text: "The notice above the scale was plain — carts over two tons must cross by the stone bridge — and hers had weighed in at two and a half, so the stone bridge it would have to be.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "wh-2-a",
        explanationOptions: [
          {
            id: "wh-2-a",
            text: "A posted rule plus the cart's measured weight force the conclusion — no room is left for the wooden bridge.",
          },
          {
            id: "wh-2-b",
            text: "Heavy carts have usually taken the stone bridge in the past, so hers probably would too.",
          },
          {
            id: "wh-2-c",
            text: "The queue at the weigh-house is a clue best explained by the stone bridge being the required route.",
          },
        ],
      },
      {
        id: "wh-3",
        text: "At the customs bench, an inspector in fingerless gloves walked the length of her load, tapping each sack.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wh-4",
        text: "Only sealed sacks may pass the bench, and every sack on her cart still carried its lead seal, so the load was cleared to pass.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "wh-4-c",
        explanationOptions: [
          {
            id: "wh-4-b",
            text: "The inspector has cleared sealed loads all season, so this one was likely to be cleared as well.",
          },
          {
            id: "wh-4-c",
            text: "The customs rule and the intact seals together settle it — nothing about the clearance is left to chance.",
          },
          {
            id: "wh-4-d",
            text: "The tapping of each sack is best explained by the inspector checking for broken seals.",
          },
        ],
      },
      {
        id: "wh-5",
        text: "By the time she reached the stone bridge, the frost on its parapets had gone to glitter in the sun.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wh-6",
        text: "She let the horses take the crossing at their own pace, the way her mother always had.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-swallows",
    title: "Swallows over the Chimney",
    difficulty: "beginner",
    includedLabels: ["inductive"],
    sentences: [
      {
        id: "sw-1",
        text: "Nan kept her almanac on the windowsill, its pages soft with a decade of thumbing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sw-2",
        text: "The swallows had come back to her chimney in the first week of April every spring for ten years, so she expected them again within the week.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "sw-2-a",
        explanationOptions: [
          {
            id: "sw-2-a",
            text: "Ten springs of arrivals make a pattern, and the pattern is carried forward to this year as a likelihood.",
          },
          {
            id: "sw-2-b",
            text: "A rule of the almanac guarantees that swallows return in the first week of April.",
          },
          {
            id: "sw-2-c",
            text: "The empty chimney is a puzzle, and the swallows' return is the explanation that best fits it.",
          },
        ],
      },
      {
        id: "sw-3",
        text: "She swept the grate and left off lighting fires, out of courtesy to the tenants to come.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sw-4",
        text: "In all her notebooks, the last frost had never come later than a fortnight after the swallows, so she reckoned it safe to set the beans out by month's end.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "sw-4-b",
        explanationOptions: [
          {
            id: "sw-4-b",
            text: "A long record with no exceptions grounds a probable conclusion about this year's frost — pattern, not guarantee.",
          },
          {
            id: "sw-4-c",
            text: "By definition, the frost season ends when the swallows arrive, so the beans must be safe.",
          },
          {
            id: "sw-4-d",
            text: "The softness of the soil is a clue whose best explanation is that the frosts have finished.",
          },
        ],
      },
      {
        id: "sw-5",
        text: "The seed packets waited in a biscuit tin, sorted by the color of their promised flowers.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sw-6",
        text: "On the fourth of April, a shadow crossed the sill, and Nan put the kettle on as if greeting family.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-salt-letter",
    title: "The Salt-Stained Letter",
    difficulty: "beginner",
    includedLabels: ["abductive"],
    sentences: [
      {
        id: "sl-1",
        text: "The letter waited a week in the rack before Odile came down from the high pasture to claim it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sl-2",
        text: "Its corners were stiff with salt and the ink of the postmark had run to a blue ghost — the best explanation was that it had crossed on the deck of a ship, not in a mailbag under cover.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "sl-2-a",
        explanationOptions: [
          {
            id: "sl-2-a",
            text: "Salt stiffening and run ink are traces, and an open sea crossing is the explanation that accounts for both at once.",
          },
          {
            id: "sl-2-b",
            text: "Letters from the coast have always arrived salt-stained, so this one naturally would be too.",
          },
          {
            id: "sl-2-c",
            text: "Postal regulations require deck transport for overseas mail, so it must have traveled on deck.",
          },
        ],
      },
      {
        id: "sl-3",
        text: "The hand on the envelope was cramped and unfamiliar, though the letter inside ran on in her brother's easy loops.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sl-4",
        text: "The likeliest explanation, she decided, was that he had finished the letter at sea and passed it to a shipmate to address and post from the first port.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "sl-4-c",
        explanationOptions: [
          {
            id: "sl-4-b",
            text: "Her brother's letters have often arrived addressed by strangers, so this one probably was as well.",
          },
          {
            id: "sl-4-c",
            text: "One hypothesis — a shipmate addressing it in port — explains the strange hand outside and the familiar hand within.",
          },
          {
            id: "sl-4-d",
            text: "Since only the sender may address an envelope, the writing outside must be her brother's after all.",
          },
        ],
      },
      {
        id: "sl-5",
        text: "The letter itself was all weather and wages and a promise to be home when the fleet turned south.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sl-6",
        text: "Odile read it twice on the walk back up, and once more by lamplight for good measure.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tollgate",
    title: "Night at the Tollgate",
    difficulty: "beginner",
    includedLabels: ["deductive", "inductive", "abductive"],
    sentences: [
      {
        id: "tg-1",
        text: "The tollgate lantern burned low, and Tam sat with his boots to the brazier, listening for wheels.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tg-2",
        text: "The ledger rule was plain — no cart passes after midnight without a magistrate's stamp — and this driver carried no stamp, so the gate stayed down.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "tg-2-a",
        explanationOptions: [
          {
            id: "tg-2-a",
            text: "The rule plus the missing stamp force the outcome; nothing about the night is left to judgment.",
          },
          {
            id: "tg-2-b",
            text: "Drivers without stamps have been turned back all winter, so this one probably would be too.",
          },
          {
            id: "tg-2-c",
            text: "The driver's late arrival is a puzzle best explained by his lacking the proper papers.",
          },
        ],
      },
      {
        id: "tg-3",
        text: "The man argued a while, then settled onto his box seat to wait for morning, as they mostly did.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tg-4",
        text: "Carters bound for the fish market had rolled through before dawn every Friday for years, so Tam expected more wheels within the hour.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "tg-4-b",
        explanationOptions: [
          {
            id: "tg-4-b",
            text: "Years of Friday traffic form a pattern, projected onto this Friday as a likelihood.",
          },
          {
            id: "tg-4-c",
            text: "The market charter obliges carters to arrive before dawn, so more must be coming.",
          },
          {
            id: "tg-4-d",
            text: "The waiting driver is a clue whose best explanation is a market day ahead.",
          },
        ],
      },
      {
        id: "tg-5",
        text: "This cart, though, smelled of pitch, and the driver's boots were white to the ankle with lime — the best explanation was that he'd come down the kiln road, not the coast road he claimed.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "tg-5-a",
        explanationOptions: [
          {
            id: "tg-5-a",
            text: "Pitch smell and lime dust are traces the coast road can't account for; the kiln road explains both.",
          },
          {
            id: "tg-5-b",
            text: "Most late carts come down the kiln road, so his story was unlikely from the start.",
          },
          {
            id: "tg-5-c",
            text: "Since the coast road was closed by order, he could not have come that way.",
          },
        ],
      },
      {
        id: "tg-6",
        text: "Tam noted the lime in the margin of the ledger, for the magistrate's eyes and not his own.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tg-7",
        text: "Toward four the frost deepened, and the first fish carts came through singing on their axles, right on time.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
