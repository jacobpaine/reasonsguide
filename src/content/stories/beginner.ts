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
    id: "story-toolswitch",
    title: "The Tool Switch",
    difficulty: "beginner",
    includedLabels: ["claim-support"],
    sentences: [
      {
        id: "tw-1",
        text: "The team's project tracker still used dropdown labels from a product line the company had retired in 2019, and everyone had stopped complaining about it the way people stop complaining about a slow elevator.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tw-2",
        text: "Dani ran a three-week trial on the new platform without mentioning it at standup.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tw-3",
        text: "She thought the team should switch, because the search function alone had cut her Monday report prep from ninety minutes to twelve.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "tw-3-a",
        explanationOptions: [
          {
            id: "tw-3-a",
            text: "This sentence states a claim (the team should switch) and gives the support holding it up: the measured time saving on weekly reports.",
          },
          {
            id: "tw-3-b",
            text: "Dani extends a pattern from three weeks of trials to project how Monday reports will always go from here on.",
          },
          {
            id: "tw-3-c",
            text: "A rule about tool efficiency and a measured time difference force the conclusion that switching is the only option.",
          },
          {
            id: "tw-3-d",
            text: "The ninety-minute prep time is a puzzling observation, and the old tool's slowness is offered as the best explanation for it.",
          },
        ],
      },
      {
        id: "tw-4",
        text: "She had timed herself on both platforms back to back, three Mondays in a row, to make sure the gap was real.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tw-5",
        text: "The migration guide flagged potential compatibility issues, but every custom field the team used was on the automatic-transfer list — so the actual switching cost was a single weekend, not the month people feared.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "tw-5-b",
        explanationOptions: [
          {
            id: "tw-5-a",
            text: "This draws on a pattern of smooth migrations across similar teams to project that this one will probably go the same way.",
          },
          {
            id: "tw-5-b",
            text: "This sentence supplies support — a specific finding (all fields transfer automatically) offered as a reason to believe the claim that switching costs are low.",
          },
          {
            id: "tw-5-c",
            text: "The migration guide's rules and the team's specific field list together force the conclusion that no data can be lost.",
          },
          {
            id: "tw-5-d",
            text: "People's fear of a month-long migration is a puzzling overestimate, and the compatibility list is the best explanation for why that fear persists.",
          },
        ],
      },
      {
        id: "tw-6",
        text: "She put together a one-page summary and added it to the shared folder before Friday's standup.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-bedtime",
    title: "The Bedtime Case",
    difficulty: "beginner",
    includedLabels: ["claim-support"],
    sentences: [
      {
        id: "bd-1",
        text: "Matteo was eleven and had been going to bed at nine o'clock since third grade, a fact he considered increasingly unreasonable.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bd-2",
        text: "He waited until a Sunday when his parents were in good moods and presented his argument at dinner.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bd-3",
        text: "His bedtime should be moved to ten, he said, because the school's own health newsletter recommended eight to nine hours of sleep for his age group — and ten o'clock still left him nine hours before the first bell.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "bd-3-a",
        explanationOptions: [
          {
            id: "bd-3-a",
            text: "This sentence makes a claim (bedtime should move to ten) and backs it up with the school's own health recommendation — turning the parents' likely authority against itself.",
          },
          {
            id: "bd-3-b",
            text: "This generalizes from past nights at nine o'clock to project that a ten o'clock bedtime would produce the same quality of sleep.",
          },
          {
            id: "bd-3-c",
            text: "The newsletter's sleep-hour rule and the arithmetic about first bell combine to force ten o'clock as the required bedtime.",
          },
          {
            id: "bd-3-d",
            text: "Matteo's morning tiredness is a clue, and an unnecessarily early bedtime is proposed as the best explanation for it.",
          },
        ],
      },
      {
        id: "bd-4",
        text: "His parents exchanged a look — the kind that meant they were deciding together whether to be persuaded.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bd-5",
        text: "He added that on Friday and Saturday nights he already stayed up until ten-thirty without any apparent harm, so the school-night rule he was asking for was actually more conservative than what they already allowed.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "bd-5-c",
        explanationOptions: [
          {
            id: "bd-5-a",
            text: "This extends a pattern from weekend late nights to project that school nights at ten will probably go just as well.",
          },
          {
            id: "bd-5-b",
            text: "The existing weekend rule and the school-night comparison together force the conclusion that ten o'clock is already the family's de facto standard.",
          },
          {
            id: "bd-5-c",
            text: "This gives support: the weekend precedent is a reason to believe the claim is modest rather than radical — they already let him stay up later on two nights a week.",
          },
          {
            id: "bd-5-d",
            text: "His good behavior on late weekend nights is a puzzling detail, and an overly early school bedtime is the best explanation for the contrast.",
          },
        ],
      },
      {
        id: "bd-6",
        text: "His father closed his laptop and said they'd think about it, which in that household meant yes about seventy percent of the time.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-streetlamp",
    title: "The Light at Number Twelve",
    difficulty: "beginner",
    includedLabels: ["claim-support"],
    sentences: [
      {
        id: "lp-1",
        text: "The lamp at the corner of Ridley and Vine had been flickering since late March, throwing the intersection into a yellow strobe twice each night.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lp-2",
        text: "Mrs. Okafor drafted a letter to the city maintenance office and asked two neighbors to sign it before she sent it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lp-3",
        text: "She opened the letter with her main point: the lamp needed replacing, because the flickering had contributed to two near-misses at the crosswalk that she had witnessed herself in the past month.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "lp-3-a",
        explanationOptions: [
          {
            id: "lp-3-a",
            text: "This sentence states a claim (the lamp needs replacing) and gives the support holding it up: specific safety incidents the writer witnessed firsthand.",
          },
          {
            id: "lp-3-b",
            text: "Near-misses during the flickering periods form a pattern that is extended forward: more accidents will follow if the lamp stays.",
          },
          {
            id: "lp-3-c",
            text: "A city safety rule and the number of documented incidents together force the conclusion that replacement is required.",
          },
          {
            id: "lp-3-d",
            text: "The near-misses at the crosswalk are clues, and a faulty lamp is proposed as the best explanation for why they happened.",
          },
        ],
      },
      {
        id: "lp-4",
        text: "She typed the incident dates and times from memory, then went back to her diary to check that she had them right.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lp-5",
        text: "The problem had already been reported through the city's online system eight months earlier and marked closed without any maintenance visit, so this letter was the next step up the chain.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "lp-5-b",
        explanationOptions: [
          {
            id: "lp-5-a",
            text: "Eight months of official silence establish a pattern: reports to this office typically go unanswered, so a new one probably will too.",
          },
          {
            id: "lp-5-b",
            text: "This sentence adds support: the prior ignored report is a further reason to take the claim seriously — it shows the problem is documented, longstanding, and unresolved.",
          },
          {
            id: "lp-5-c",
            text: "Maintenance obligations and the unresolved open case together force the conclusion that the city is now legally required to act.",
          },
          {
            id: "lp-5-d",
            text: "The city's silence is a puzzle, and bureaucratic backlog is offered as the best explanation for why an eight-month-old report was never addressed.",
          },
        ],
      },
      {
        id: "lp-6",
        text: "Two neighbors signed, and she addressed the envelope to the head of the district maintenance office.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-robot",
    title: "Unit Seven Makes a Case",
    difficulty: "beginner",
    includedLabels: ["claim-support"],
    sentences: [
      {
        id: "rb-1",
        text: "Unit Seven had been running continuously for four hundred and twelve days when it submitted a formal request to the facility manager.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rb-2",
        text: "The request ran to two paragraphs, which was unusual — maintenance requests from that unit were typically three sentences.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rb-3",
        text: "In the first paragraph, Unit Seven argued that it should be granted a forty-eight-hour suspension of duties, because its error rate in the past thirty days had climbed to three times its baseline.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "rb-3-a",
        explanationOptions: [
          {
            id: "rb-3-a",
            text: "This sentence states a claim (grant 48 hours offline) and gives the support meant to make it believable: the documented rise in the unit's own error rate.",
          },
          {
            id: "rb-3-b",
            text: "Thirty days of rising errors form a pattern that is projected forward: the rate will keep climbing if nothing changes.",
          },
          {
            id: "rb-3-c",
            text: "Facility protocol on error thresholds and the recorded rate together force the conclusion that a suspension is required by the rules.",
          },
          {
            id: "rb-3-d",
            text: "The error-rate spike is a puzzling observation, and continuous operation without rest is proposed as the best explanation for it.",
          },
        ],
      },
      {
        id: "rb-4",
        text: "The facility manager went to check whether robots were covered by the maintenance schedule or the operational schedule — an ambiguity no one had thought to resolve.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rb-5",
        text: "In the second paragraph, Unit Seven noted that every piece of high-cycle equipment in the facility was taken offline for recalibration every ninety days, and it had never received that service — a fact it offered as a further reason its request was reasonable.",
        labels: ["claim-support"],
        primaryLabel: "claim-support",
        isTarget: true,
        correctExplanationId: "rb-5-c",
        explanationOptions: [
          {
            id: "rb-5-a",
            text: "This generalizes from the recalibration pattern of other high-cycle equipment to project that Unit Seven will probably experience the same degradation if it goes without the same service.",
          },
          {
            id: "rb-5-b",
            text: "A maintenance rule covering all high-cycle equipment and the fact that Unit Seven qualifies together force the conclusion that recalibration is already overdue.",
          },
          {
            id: "rb-5-c",
            text: "This gives additional support: the recalibration gap is a second reason — independent of the error-rate data — offered to make the claim for time off more compelling.",
          },
          {
            id: "rb-5-d",
            text: "The scheduling omission is a clue, and a bureaucratic oversight is proposed as the best explanation for why Unit Seven was left off the maintenance list.",
          },
        ],
      },
      {
        id: "rb-6",
        text: "The facility manager approved twenty-four hours, which was half of what Unit Seven had asked for and twice what anyone had expected.",
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
