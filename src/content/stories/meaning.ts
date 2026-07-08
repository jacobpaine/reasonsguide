import type { PracticeStory } from "@/domain/types";

/**
 * Intermediate stories for the structural "meaning" labels: definitional,
 * conceptual, and classification reasoning. Definitional targets settle a
 * question by making a word precise; conceptual targets unfold what an idea
 * contains; classification targets place a case in a category and inherit
 * its traits. Distractors misapply the neighboring labels of this set.
 */

export const meaningStories: readonly PracticeStory[] = [
  {
    id: "story-barrow-question",
    title: "What Counts as a Sandwich",
    difficulty: "intermediate",
    includedLabels: ["definitional"],
    sentences: [
      {
        id: "df-1",
        text: "The argument had been running in the group chat for three days before someone posted a link to the official rulebook of the Food Fact-Check League, a competitive trivia organization whose entire stated purpose was settling exactly this kind of thing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "df-2",
        text: "The rulebook's own glossary defined 'sandwich' as filling held between two distinct and separate pieces of bread; a hot dog bun folds from a single connected piece, not two, and so a hot dog fell outside that definition regardless of how it looked on a plate.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "df-2-b",
        explanationOptions: [
          {
            id: "df-2-a",
            text: "It unfolds what the idea of a sandwich contains in itself — filling, bread, the meeting of opposing surfaces — quite apart from what the rulebook happens to say.",
          },
          {
            id: "df-2-b",
            text: "It settles the hot dog question by making the rulebook's term 'sandwich' precise — filling between two distinct and separate pieces of bread — and testing the hot dog bun against that requirement, which it fails.",
          },
          {
            id: "df-2-c",
            text: "It sorts the hot dog into the broader category of handheld foods and reads its eligibility off from what that class has traditionally included.",
          },
        ],
      },
      {
        id: "df-3",
        text: "Mei said this was exactly the kind of thing wrong with rulebooks.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "df-4",
        text: "The gyro raised a harder case, since its pita was also one continuous piece of bread — same structural argument as the hot dog bun — but felt obviously different.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "df-5",
        text: "'Enclosure,' as the same glossary defined it, meant filling surrounded on at least three sides by bread; a gyro wrapped firmly on all sides met that standard, and so it was in.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "df-5-a",
        explanationOptions: [
          {
            id: "df-5-a",
            text: "It resolves the gyro question by fixing what the glossary's word 'enclosure' requires — filling surrounded on at least three sides — and finding that a tightly wrapped gyro satisfies it.",
          },
          {
            id: "df-5-b",
            text: "It works out what the idea of enclosure contains in itself — surrounding, containment, fullness — without leaning on the glossary's wording at all.",
          },
          {
            id: "df-5-c",
            text: "It files the gyro among flatbread wraps, a group the League has historically treated generously, and reads its inclusion off from that category.",
          },
        ],
      },
      {
        id: "df-6",
        text: "Mei, having lost on hot dogs, accepted the gyro ruling with something approaching grace and immediately opened a second thread about tacos.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-borrowed-dinghy",
    title: "The Borrowed Console",
    difficulty: "intermediate",
    includedLabels: ["conceptual"],
    sentences: [
      {
        id: "cw-1",
        text: "Priya lent her gaming console to Dev for the summer tournament season, the same arrangement as the year before, with the only understanding being that it would come back in the state she'd handed it over.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-2",
        text: "It came back in September with a custom operating system installed, the home screen reskinned in Dev's preferred colors, and a folder labeled 'Dev's Saves' sitting where Priya's profile had been.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-3",
        text: "A loan is use with ownership left behind; the right to modify a thing travels with owning it, not with borrowing it, and Dev had only ever borrowed.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "cw-3-c",
        explanationOptions: [
          {
            id: "cw-3-a",
            text: "It settles the matter by making the word 'loan' precise in its legal sense and asking whether months of use still satisfies the clause.",
          },
          {
            id: "cw-3-b",
            text: "It places the console among borrowed goods and lets it inherit the constraints that class of property is known to carry.",
          },
          {
            id: "cw-3-c",
            text: "It works out what the concept of lending contains — use transfers, ownership and the rights attached to it stay behind — and draws the verdict on the custom OS from that structure.",
          },
        ],
      },
      {
        id: "cw-4",
        text: "Dev, reached by text, said he was sorry Priya felt that way about the interface.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-5",
        text: "But sorrow at another person's feelings is not apology; an apology owns a fault, and this message had been built to own nothing at all.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "cw-5-a",
        explanationOptions: [
          {
            id: "cw-5-a",
            text: "It unfolds what the concept of apology requires — acknowledging a fault of one's own — and shows that Dev's text, directed at Priya's feelings rather than his own actions, lacks that element.",
          },
          {
            id: "cw-5-b",
            text: "It looks up the strict meaning of the word 'sorry' and finds that Dev's usage falls outside it on the wording alone.",
          },
          {
            id: "cw-5-c",
            text: "It sorts Dev's message into the familiar category of non-apology apologies and reads its emptiness off from what that type of remark is like.",
          },
        ],
      },
      {
        id: "cw-6",
        text: "The custom OS was, everyone quietly agreed, actually pretty good.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-7",
        text: "By spring they were on the same competitive team again; Priya kept her console at home during away events, and nobody mentioned the interface.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-curates-cabinet",
    title: "The Field Stream",
    difficulty: "intermediate",
    includedLabels: ["classification"],
    sentences: [
      {
        id: "cx-1",
        text: "Ravi ran a nature-ID livestream on Saturday mornings, and this week's had drawn four thousand viewers and a chat scrolling faster than he could read it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cx-2",
        text: "The plant from the park had a square stem and leaves arranged in opposite pairs, which placed it among the mints — a family that carries its oils in the leaf and has no defensive sting anywhere — so Ravi let the chat know they could stop warning him about nettles.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "cx-2-a",
        explanationOptions: [
          {
            id: "cx-2-a",
            text: "The square stem and opposite leaves place the plant in the mint family, and the reassurance about stings is inherited from what that family is known to be like.",
          },
          {
            id: "cx-2-b",
            text: "It fixes the strict meaning of 'mint' and rules the specimen in on the definition alone, stem shape or not.",
          },
          {
            id: "cx-2-c",
            text: "It unfolds what a defensive sting involves — evolutionary cost, deterrence, biological purpose — and reasons from that idea that this plant would have no use for one.",
          },
        ],
      },
      {
        id: "cx-3",
        text: "Chat remained unconvinced about the nettles for several more minutes.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cx-4",
        text: "Next he held up a compact pellet he'd found under a dead tree at the edge of the meadow, and the chat immediately split between 'owl' and 'fox.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cx-5",
        text: "The tiny skulls inside had the rootless, ever-growing incisors of voles; voles are animals of open grassland, which meant the hawk he'd been filming all morning was hunting the meadow on purpose and the pigeons near the parking lot had nothing to worry about.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "cx-5-b",
        explanationOptions: [
          {
            id: "cx-5-a",
            text: "It works out what predation entails for any raptor — territory, energy cost, prey density — and derives the hawk's hunting ground from those principles alone.",
          },
          {
            id: "cx-5-b",
            text: "The incisor structure places the skulls among the voles, and where the hawk hunts follows from what that category is: animals of open grassland.",
          },
          {
            id: "cx-5-c",
            text: "It makes the word 'raptor' precise enough to decide which birds in the area are obligate hunters and what constraints that term implies.",
          },
        ],
      },
      {
        id: "cx-6",
        text: "Ravi pinned both findings in the stream description and noted that owl pellets were more reliable nature records than most apps he'd tried.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-green-track",
    title: "What Counts as Thinking",
    difficulty: "intermediate",
    includedLabels: ["definitional", "conceptual"],
    sentences: [
      {
        id: "dw-1",
        text: "The argument over whether the classroom AI counted as thinking had been running for three weeks before Professor Reyes finally made it the subject of a graded discussion.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-2",
        text: "The course textbook defined 'thinking' as the manipulation of representations toward a goal; the AI maintained internal states, adjusted its outputs based on prior inputs, and produced goal-directed responses — all three criteria met — which placed it squarely inside the definition.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "dw-2-c",
        explanationOptions: [
          {
            id: "dw-2-a",
            text: "The AI is sorted into the category of goal-directed systems and inherits the cognitive properties that class is generally credited with.",
          },
          {
            id: "dw-2-b",
            text: "It unfolds what thinking involves in itself — attention, intention, self-correction — quite apart from what the textbook's definition requires.",
          },
          {
            id: "dw-2-c",
            text: "It settles the question by making the textbook's term 'thinking' precise — manipulation of representations toward a goal — and showing that the AI meets every part of it.",
          },
        ],
      },
      {
        id: "dw-3",
        text: "Priya, satisfied with this, stopped raising her hand on the thinking question.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-4",
        text: "Marcus had a second argument, older than the textbook and independent of its definitions.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-5",
        text: "Understanding, unlike processing, isn't a matter of satisfying criteria in a clause — the concept carries with it an actual grasp of what the symbols mean, not just the correct shuffling of them, and a system that moves symbols without knowing what they stand for isn't understanding anything regardless of what any definition says.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "dw-5-a",
        explanationOptions: [
          {
            id: "dw-5-a",
            text: "It reasons from what the concept of understanding contains in itself: genuine comprehension requires an actual grasp of meaning, not just criterion-matching, and that distinction comes from the idea itself rather than from any clause.",
          },
          {
            id: "dw-5-b",
            text: "It wins the point by making the textbook's term 'understanding' precise enough to exclude the AI and drawing the conclusion from that definition.",
          },
          {
            id: "dw-5-c",
            text: "It files the AI among symbol-manipulating systems and reads the limitations of that class onto it.",
          },
        ],
      },
      {
        id: "dw-6",
        text: "Professor Reyes wrote both positions on the board in the same neat handwriting and offered no visible opinion.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-7",
        text: "The classroom AI, asked to weigh in, produced a thoughtful four-paragraph response that settled nothing and was generally agreed to be well-organized.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-journeymans-chair",
    title: "The Licensing Exam",
    difficulty: "intermediate",
    includedLabels: ["conceptual", "classification"],
    sentences: [
      {
        id: "wx-1",
        text: "The Licensing Board's examiners arranged themselves around the testing circle with the careful neutrality of people who had argued over spells before and expected to do so again.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wx-2",
        text: "The first spell Mirela cast was spoken aloud, required no physical components, and completed in under three seconds — which placed it in the Minor Enchantments category, with its own grading rubric and a separate pass threshold that the head examiner now turned to.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "wx-2-b",
        explanationOptions: [
          {
            id: "wx-2-a",
            text: "The case turns on making the Board's term 'Minor Enchantments' precise enough to include or exclude spoken-only spells.",
          },
          {
            id: "wx-2-b",
            text: "The spell's properties — spoken, component-free, under three seconds — place it in the Minor Enchantments category, and the rubric and pass threshold that apply are inherited from what that category requires.",
          },
          {
            id: "wx-2-c",
            text: "It unfolds what spellcraft itself entails — precision, intention, controlled release — quite apart from how the Board happens to sort spells.",
          },
        ],
      },
      {
        id: "wx-3",
        text: "Mirela had applied in Minor Enchantments, so the examiners moved to the question that actually interested them.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wx-4",
        text: "Mastery was the question, and mastery in spellcraft is more than a clean cast; the concept carries judgment inside it — reading conditions, knowing which variant to use, understanding why a spell fails before it does — and a perfect exam score achieved by rote alone would not amount to it.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "wx-4-c",
        explanationOptions: [
          {
            id: "wx-4-a",
            text: "It sorts Mirela into the class of master spellcasters and credits her with the traits that members of that class are expected to hold.",
          },
          {
            id: "wx-4-b",
            text: "It settles the matter by making the Board's term 'mastery commendation' precise and asking whether Mirela's performance meets the written standard.",
          },
          {
            id: "wx-4-c",
            text: "It works out what the concept of mastery contains — judgment alongside technique — and draws from that structure why a rote-perfect performance would still fall short of it.",
          },
        ],
      },
      {
        id: "wx-5",
        text: "So they described a scenario they had not prepared her for and asked what she would cast.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wx-6",
        text: "Mirela left with the Minor Enchantments license and the mastery commendation both, and covered the cost of the examiners' refreshments, which appeared to be what mastery also required.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-inner-mooring",
    title: "Waypoint Eleven",
    difficulty: "intermediate",
    includedLabels: ["classification", "definitional"],
    sentences: [
      {
        id: "xd-1",
        text: "The docking coordinator at Waypoint Eleven processed vessels in order of arrival, which that shift meant a battered freighter with hand-painted registration numbers and a pilot who looked like she hadn't slept since the outer belt.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "xd-2",
        text: "The cargo hold sat forward of the thrust array and the drive nacelles were mounted aft — which classified the vessel as a rear-drive heavy, a type responsive under hard deceleration but slow to rotate on axis — and rear-drive heavies took the straight-approach inner bay as standard practice.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "xd-2-a",
        explanationOptions: [
          {
            id: "xd-2-a",
            text: "The forward hold and aft nacelles place the freighter in the rear-drive heavy category, and the bay assignment follows from what that category is known for — strong deceleration response, poor axial rotation.",
          },
          {
            id: "xd-2-b",
            text: "It settles the bay assignment by making the docking schedule's word 'standard' precise and testing the inner bay against what the clause requires.",
          },
          {
            id: "xd-2-c",
            text: "It reasons from what the idea of docking safety itself includes — approach angle, clearance, deceleration time — without relying on how vessels are classified.",
          },
        ],
      },
      {
        id: "xd-3",
        text: "The pilot said nothing about the bay; she objected to the levy notice that appeared on her console eleven minutes after docking.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "xd-4",
        text: "The station's levy schedule applied to all vessels conducting commerce within jurisdiction, and the notice cited that clause without further comment.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "xd-5",
        text: "Commerce, as the schedule itself defined it, meant exchanging goods for credit or landing cargo for sale; the pilot was carrying her own ore samples to her own registered assay unit on the station, with no transaction on the manifest, and stood entirely outside the term.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "xd-5-b",
        explanationOptions: [
          {
            id: "xd-5-a",
            text: "The freighter is sorted among working vessels, and the liabilities that class of craft generally carries are read across onto her.",
          },
          {
            id: "xd-5-b",
            text: "The levy question is settled by making the schedule's term 'commerce' precise — exchanging goods for credit or landing cargo for sale — and showing that carrying one's own ore to one's own assay unit does not meet it.",
          },
          {
            id: "xd-5-c",
            text: "It unfolds what trade involves in itself — exchange, mutual benefit, accepted risk — and derives the pilot's exemption from that idea, with no reference to the schedule's wording.",
          },
        ],
      },
      {
        id: "xd-6",
        text: "The coordinator cleared the charge from the log with the sigh of someone watching a fee almost stick, and pulled up the next arrival.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-autumn-show",
    title: "The Block Party Contest",
    difficulty: "intermediate",
    includedLabels: ["definitional", "classification", "conceptual"],
    sentences: [
      {
        id: "dd-1",
        text: "The neighborhood baking contest had been running on folding tables and old scores for eleven years, and this year's entry form included a new clause the organizing committee was hoping nobody would ask about.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dd-2",
        text: "The clause defined 'home-baked' as prepared entirely in the entrant's own kitchen; Omar's sourdough had spent its final proof at his aunt's house three blocks away, which placed it outside that definition before anyone had tasted a crumb.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "dd-2-c",
        explanationOptions: [
          {
            id: "dd-2-a",
            text: "It places Omar's sourdough among scratch-baked entries and inherits the eligibility that class of entry normally carries.",
          },
          {
            id: "dd-2-b",
            text: "It unfolds what truly making something involves — care, time, the baker's own hands throughout — quite apart from what the sign-up form's clause says.",
          },
          {
            id: "dd-2-c",
            text: "Eligibility is settled by making the form's term 'home-baked' precise — prepared entirely in the entrant's own kitchen — and finding that a final proof at another kitchen falls short of it.",
          },
        ],
      },
      {
        id: "dd-3",
        text: "Omar accepted this with the composure of someone who intended to win the following year.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dd-4",
        text: "Sofia's dark loaf raised a category question until the head judge cut a slice: the crumb was dense, the fruit was soaked through, and the crust stood firm without a pan — which placed it among fruitcakes, and fruitcakes competed in the preserved-goods division, two tables down.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "dd-4-a",
        explanationOptions: [
          {
            id: "dd-4-a",
            text: "The dense crumb, soaked fruit, and self-supporting crust place the loaf among fruitcakes, and the division assignment is inherited from where that category competes.",
          },
          {
            id: "dd-4-b",
            text: "It fixes the precise meaning of the schedule's term 'fruitcake' and places the entry in the preserved-goods division on that definition alone.",
          },
          {
            id: "dd-4-c",
            text: "It works out what the notion of preservation requires and derives the entry's proper division from that idea, without sorting the loaf into any named category.",
          },
        ],
      },
      {
        id: "dd-5",
        text: "Two tables down, the competition turned out to be considerably thinner.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dd-6",
        text: "The entries were judged under numbers, not names, because fairness is not goodwill toward every person at the table — it is one standard applied without knowing whose name is attached, and a standard that knows the baker has already stopped being that.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "dd-6-b",
        explanationOptions: [
          {
            id: "dd-6-a",
            text: "It settles the procedure by making the schedule's term 'judge' precise and reading the requirement for numbered plates out of that clause.",
          },
          {
            id: "dd-6-b",
            text: "It unfolds what the concept of fairness requires — one standard, blind to identity — and derives the practice of numbered plates from that structure rather than from any written rule.",
          },
          {
            id: "dd-6-c",
            text: "It sorts the competition into the class of blind tastings and borrows the practices common to that kind of evaluation.",
          },
        ],
      },
      {
        id: "dd-7",
        text: "Sofia collected the preserved-goods ribbon with quiet satisfaction; Omar, unplaced and apparently fine with it, cut into his disqualified sourdough where the judges could see him.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
