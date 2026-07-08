import type { PracticeStory } from "@/domain/types";

/**
 * Beginner stories for the first practice unlock: deduction, induction,
 * and abduction. Targets are clearly signposted; neutral sentences carry
 * scene-setting only. Authoring rules: .claude/skills/story-creation.
 */

export const beginnerStories: readonly PracticeStory[] = [
  {
    id: "story-greenhouse",
    title: "The Rebooted Server",
    difficulty: "beginner",
    includedLabels: ["deductive", "abductive"],
    sentences: [
      {
        id: "gh-1",
        text: "The lab was running on a skeleton crew that Saturday, and Min noticed the status light in the server room blinking red through the narrow window.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-2",
        text: "The maintenance log showed a manual reboot at 3 a.m., yet the server room required both a keycard scan and a PIN, and only two engineers held active credentials.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-3",
        text: "Only Dr. Sato and the site reliability engineer held valid access credentials, so whoever triggered that reboot had to be one of those two.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "gh-3-a",
        explanationOptions: [
          {
            id: "gh-3-a",
            text: "A rule about who holds valid credentials forces the conclusion — if the reboot happened inside that room, it had to be one of the two engineers.",
          },
          {
            id: "gh-3-b",
            text: "Past reboots have usually been triggered by the site reliability engineer, so this one was probably her too.",
          },
          {
            id: "gh-3-c",
            text: "The blinking red status light is the clue, and an unauthorized reboot is the best explanation for it.",
          },
        ],
      },
      {
        id: "gh-4",
        text: "Dr. Sato's keycard showed a baggage-claim scan at a distant airport at 2:58 a.m. — a time-stamped record that put her unambiguously elsewhere.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "gh-5",
        text: "The likeliest explanation was that the site reliability engineer had connected remotely using her admin override to stop a disk-filling process before it crashed the night's experiment.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "gh-5-b",
        explanationOptions: [
          {
            id: "gh-5-a",
            text: "The credential rules guarantee that it must have been the site reliability engineer — the conclusion follows necessarily.",
          },
          {
            id: "gh-5-b",
            text: "With Dr. Sato's alibi confirmed by the keycard log, the SRE's remote disk-cleanup is the hypothesis that accounts for both who had access and why the reboot happened at 3 a.m.",
          },
          {
            id: "gh-5-c",
            text: "The SRE has performed emergency cleanups before, so she probably ran one again.",
          },
        ],
      },
      {
        id: "gh-6",
        text: "A support ticket confirmed it: \"Emergency disk cleanup, 3:04 a.m., SRE override applied.\"",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-trains",
    title: "The Points Problem",
    difficulty: "beginner",
    includedLabels: ["inductive", "deductive"],
    sentences: [
      {
        id: "tr-1",
        text: "Zara had used the same coffee shop's loyalty app every weekday for seven months, scanning her phone at the register without fail.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-2",
        text: "In all that time, her reward points had appeared in the app within an hour of each visit — sometimes faster, never once later.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-3",
        text: "When her friend suggested the app might occasionally post points instantly, Zara said she'd be surprised — the one-hour lag had been the pattern every single time she'd checked.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "tr-3-a",
        explanationOptions: [
          {
            id: "tr-3-a",
            text: "Seven months of consistent one-hour postings form a pattern, and Zara projects that pattern onto today as a strong likelihood.",
          },
          {
            id: "tr-3-b",
            text: "The app's terms of service guarantee that points post within one hour of every visit.",
          },
          {
            id: "tr-3-c",
            text: "Her friend's urgency is a puzzle, and the delayed posting window is the best explanation for why instant redemption isn't available.",
          },
        ],
      },
      {
        id: "tr-4",
        text: "Her friend was racing to redeem a free drink before midnight, when the monthly tier reset and all her progress would vanish.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tr-5",
        text: "Free drinks could only be redeemed in whole-point increments, and her friend had accumulated 4.7 points, so the five-point reward was not yet redeemable.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "tr-5-c",
        explanationOptions: [
          {
            id: "tr-5-c",
            text: "Two rules — redemption requires whole points, and her friend holds 4.7 — combine to make the conclusion inescapable.",
          },
          {
            id: "tr-5-d",
            text: "People with fractional point balances have always had to wait before, so her friend would probably have to wait too.",
          },
          {
            id: "tr-5-e",
            text: "The midnight reset deadline is a clue, and the fractional balance is the best explanation for why the drink is currently out of reach.",
          },
        ],
      },
      {
        id: "tr-6",
        text: "They ordered two regular coffees and sat by the window to wait it out together.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ledger",
    title: "The Missing Mug",
    difficulty: "beginner",
    includedLabels: ["abductive", "inductive"],
    sentences: [
      {
        id: "lg-1",
        text: "The break room was quiet when Jess came in at noon, but her favorite mug — the wide one with the chipped handle — was gone from its usual hook.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-2",
        text: "A faint coffee ring marked the shelf where it normally sat, and next to the ring someone had left an energy drink she didn't recognize.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-3",
        text: "The best explanation Jess could come up with was that her office neighbor Cam had grabbed the mug by mistake, left his drink as an accidental placeholder, and hadn't noticed the swap yet.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "lg-3-a",
        explanationOptions: [
          {
            id: "lg-3-a",
            text: "A single hypothesis — Cam's accidental swap — accounts for both odd details at once: the missing mug and the unfamiliar energy drink in its place.",
          },
          {
            id: "lg-3-b",
            text: "The break room's unwritten rule is that mugs on personal hooks belong to individuals, so whoever took it had to have some claim on it.",
          },
          {
            id: "lg-3-c",
            text: "Cam has borrowed her mug before, so he probably borrowed it again.",
          },
        ],
      },
      {
        id: "lg-4",
        text: "She had lent Cam mugs twice before that year — once when his shattered in the microwave, and once when his team had an early client call.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lg-5",
        text: "Every time something of hers ended up on his desk, it came back by end of day, so she expected the mug to return before five.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "lg-5-b",
        explanationOptions: [
          {
            id: "lg-5-a",
            text: "Office etiquette requires borrowed items to be returned the same day, so the mug has to come back by five.",
          },
          {
            id: "lg-5-b",
            text: "Every previous time something of hers ended up on Cam's desk it came back by end of day — that consistent track record makes the same outcome likely now.",
          },
          {
            id: "lg-5-c",
            text: "The energy drink left in place is a clue whose best explanation is that Cam already plans to swap back today.",
          },
        ],
      },
      {
        id: "lg-6",
        text: "She poured her tea into a paper cup and went back to her desk to wait.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-weigh-house",
    title: "Science Fair Check-In",
    difficulty: "beginner",
    includedLabels: ["deductive"],
    sentences: [
      {
        id: "wh-1",
        text: "The school gym smelled of poster board and nervous energy, and Preet wheeled her project display to the check-in table near the entrance.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wh-2",
        text: "The posted rules stated that any display taller than five feet must go in the overflow row, and hers measured five and a half, so the overflow row it was.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "wh-2-a",
        explanationOptions: [
          {
            id: "wh-2-a",
            text: "A posted rule plus the measured height force the conclusion — given those two facts, no other row is possible.",
          },
          {
            id: "wh-2-b",
            text: "Taller displays have usually ended up in the overflow row at past fairs, so hers probably would too.",
          },
          {
            id: "wh-2-c",
            text: "The crowded main row is a clue best explained by taller displays being routed to the overflow area.",
          },
        ],
      },
      {
        id: "wh-3",
        text: "A judge in a lanyard walked the main aisles with a clipboard, noting things down with the deliberate energy of someone who had done this many times before.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wh-4",
        text: "Only projects submitted before the ten o'clock deadline were eligible for awards, and all three of Preet's teammates had uploaded their sections the night before, so their project qualified.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "wh-4-c",
        explanationOptions: [
          {
            id: "wh-4-b",
            text: "Projects from teams with multiple members have been cleared for awards in every past fair, so this one would likely qualify.",
          },
          {
            id: "wh-4-c",
            text: "The deadline rule and the confirmed upload time together make the outcome certain — there is no gap in the logic that leaves eligibility in doubt.",
          },
          {
            id: "wh-4-d",
            text: "The judge's deliberate approach to the main aisles is best explained by her already knowing which projects have qualified.",
          },
        ],
      },
      {
        id: "wh-5",
        text: "The gym grew louder as families arrived and set up folding chairs along the side wall.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wh-6",
        text: "Preet adjusted her title card, checked the circuit connections one more time, and settled in to wait for the judging to begin.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-swallows",
    title: "The Cat Who Kept Time",
    difficulty: "beginner",
    includedLabels: ["inductive"],
    sentences: [
      {
        id: "sw-1",
        text: "Cleo kept a rough diary of her cat Figaro's habits — less out of research interest than because Figaro was the most consistent creature she had ever lived with.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sw-2",
        text: "He had sat on the kitchen windowsill and meowed twice between 7:00 and 7:10 every single morning for three years, so she started the coffee before the first meow.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "sw-2-a",
        explanationOptions: [
          {
            id: "sw-2-a",
            text: "Three years of daily observations form a strong pattern, and Cleo carries it forward as a reliable expectation — not a guarantee, but dependable enough to act on.",
          },
          {
            id: "sw-2-b",
            text: "A rule about cats' circadian rhythms guarantees that Figaro will always meow at the same time each morning.",
          },
          {
            id: "sw-2-c",
            text: "The coffee already running is a clue, and Figaro's regular morning meow is the best explanation for why it gets started early.",
          },
        ],
      },
      {
        id: "sw-3",
        text: "She had stopped needing her phone alarm entirely, which felt like a small private victory over technology.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sw-4",
        text: "In all her diary entries, Figaro had never once asked for dinner before 5:45 p.m., so she left afternoon meetings without watching the clock, confident she had until at least quarter to six.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "sw-4-b",
        explanationOptions: [
          {
            id: "sw-4-b",
            text: "A diary with no exceptions grounds a probable conclusion about today — pattern-based, not certain, but reliable enough to leave meetings without checking the time.",
          },
          {
            id: "sw-4-c",
            text: "By definition, cats on a fixed routine cannot request meals outside that routine, so an early dinner request is simply impossible.",
          },
          {
            id: "sw-4-d",
            text: "Figaro's afternoon calm is a clue whose best explanation is that he responds to a biological hunger signal that only activates at 5:45.",
          },
        ],
      },
      {
        id: "sw-5",
        text: "Her colleague once asked if it worried her to trust a cat that much, and she said she trusted him more than most project timelines.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sw-6",
        text: "Figaro watched her leave each morning from his windowsill perch, as regular as a second hand.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-salt-letter",
    title: "The Wet Package",
    difficulty: "beginner",
    includedLabels: ["abductive"],
    sentences: [
      {
        id: "sl-1",
        text: "The package had been sitting on the front steps for two days before Mira noticed it, half-hidden behind a terra cotta planter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sl-2",
        text: "Its corners were swollen and the shipping label had faded to a gray blur — the best explanation was that it had sat through Thursday's rainstorm uncovered, rather than in the dry porch alcove where deliveries were supposed to go.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "sl-2-a",
        explanationOptions: [
          {
            id: "sl-2-a",
            text: "Swollen corners and a faded label are distinct traces, and an uncovered exposure to rain is the single explanation that accounts for both at once.",
          },
          {
            id: "sl-2-b",
            text: "Packages left outside in this neighborhood have always gotten rained on eventually, so this one naturally would be too.",
          },
          {
            id: "sl-2-c",
            text: "Delivery instructions require packages to be left in the dry alcove, so the courier must have broken that rule.",
          },
        ],
      },
      {
        id: "sl-3",
        text: "The return address was in her mother's handwriting, though the box itself was sealed with the gray packing tape her brother always bought in bulk.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sl-4",
        text: "The likeliest explanation, she decided, was that her mother had packed it but her brother had sealed and shipped it — which would account for the handwriting outside and the tape within.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "sl-4-c",
        explanationOptions: [
          {
            id: "sl-4-b",
            text: "Her brother has often shipped things her mother originally packed, so this was probably the same arrangement again.",
          },
          {
            id: "sl-4-c",
            text: "One hypothesis — her mother packed while her brother sealed and mailed — explains both the mother's handwriting on the return address and the brother's characteristic gray tape on the box.",
          },
          {
            id: "sl-4-d",
            text: "Since the person who ships a package normally prepares the label too, the handwriting outside must be her brother's after all.",
          },
        ],
      },
      {
        id: "sl-5",
        text: "The box turned out to contain three jars of homemade jam and a note that said \"no occasion, just because.\"",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sl-6",
        text: "Mira carried it inside, dried it off with a dish towel, and put the kettle on.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tollgate",
    title: "Night at the Study Rooms",
    difficulty: "beginner",
    includedLabels: ["deductive", "inductive", "abductive"],
    sentences: [
      {
        id: "tg-1",
        text: "The library's study rooms closed to new reservations at eleven, and Nadia sat at the sign-in desk with her clipboard and a thermos of tea.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tg-2",
        text: "The booking policy was unambiguous — rooms could only be reserved by current students carrying an active ID card, and this visitor had a staff badge, not a student card, so the reservation could not stand.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "tg-2-a",
        explanationOptions: [
          {
            id: "tg-2-a",
            text: "The booking policy plus the visitor's staff badge — not a student card — make the outcome inescapable; no version of the rules allows the reservation to stand.",
          },
          {
            id: "tg-2-b",
            text: "Staff members have had reservations declined here all semester, so this one probably would be too.",
          },
          {
            id: "tg-2-c",
            text: "The visitor's polite extended explanation is best explained by his already knowing the reservation wouldn't hold.",
          },
        ],
      },
      {
        id: "tg-3",
        text: "He explained the situation politely, then agreed to try the faculty lounge downstairs, as most staff members did once they understood the rule.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tg-4",
        text: "Students rushing to submit work before midnight had knocked on that door in clusters every finals week for the four years Nadia had worked here, so she expected the next group within a minute.",
        labels: ["inductive"],
        primaryLabel: "inductive",
        isTarget: true,
        correctExplanationId: "tg-4-b",
        explanationOptions: [
          {
            id: "tg-4-b",
            text: "Four years of finals-week clusters arriving within a minute of each other form a strong pattern, projected onto tonight as a likelihood.",
          },
          {
            id: "tg-4-c",
            text: "The midnight submission deadline obligates students to arrive before the rooms close, so more must be on their way.",
          },
          {
            id: "tg-4-d",
            text: "The quiet hallway right now is a clue whose best explanation is a large group arriving any second.",
          },
        ],
      },
      {
        id: "tg-5",
        text: "This student's bag was soaking wet and she had come from the east stairwell — the best explanation was that she had climbed in through a fire-exit window from the closed east wing, not arrived through the main lobby she claimed.",
        labels: ["abductive"],
        primaryLabel: "abductive",
        isTarget: true,
        correctExplanationId: "tg-5-a",
        explanationOptions: [
          {
            id: "tg-5-a",
            text: "A soaking wet bag and emergence from the east stairwell are traces the main lobby cannot account for; a fire-exit window from the closed east wing explains both at once.",
          },
          {
            id: "tg-5-b",
            text: "Most late arrivals during finals use the fire-exit windows when the east wing is closed, so her story was unlikely from the start.",
          },
          {
            id: "tg-5-c",
            text: "Since the east wing was locked to students after nine, anyone coming from that stairwell had to have bypassed the locks.",
          },
        ],
      },
      {
        id: "tg-6",
        text: "Nadia logged the wet bag and asked which window — for the facilities team, she said, not for herself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tg-7",
        text: "The next knock came thirty seconds later, right on schedule, and three more followed before midnight.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
