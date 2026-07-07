import type { PracticeStory } from "@/domain/types";

/**
 * Relevance-fallacy stories: ad hominem, straw man, red herring, tu quoque,
 * and appeal to emotion — with healthy dialectical engagement placed in the
 * same rooms, so the learner practices telling a derailment from a genuine
 * answer. Debate settings throughout: vestries, boards, guild halls, courts.
 * The fallacious lines should sound like real meeting rhetoric — persuasive,
 * even sympathetic — never cartoon mistakes.
 */

export const relevanceFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-vestry-roof",
    title: "The Vestry and the Roof",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "straw-man", "red-herring"],
    sentences: [
      {
        id: "rv1-1",
        text: "The vestry met on the mason's estimate for releading the church roof, and Churchwarden Ames asked only that a second mason price the work before the parish signed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv1-2",
        text: "Mr. Corliss observed that Ames had come to the parish scarcely nine years ago, from a lowland town where every roof was thatch, and wondered what such a man could have to tell them about lead.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv1-2-b",
        explanationOptions: [
          {
            id: "rv1-2-a",
            text: "Corliss recasts the request for a second estimate as a grander scheme — distrusting every roof in the parish — and argues against that version instead.",
          },
          {
            id: "rv1-2-b",
            text: "Nothing in the estimate is weighed at all; Ames's short residence and lowland upbringing are offered as the reason to discount him — the man answered in place of his proposal.",
          },
          {
            id: "rv1-2-c",
            text: "Corliss steers the vestry from the estimate to the parish's history with newcomers, a fresh subject under which the vote quietly disappears.",
          },
        ],
      },
      {
        id: "rv1-3",
        text: "The mason's figure sat on the table between them, neither defended nor disputed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv1-4",
        text: "Mrs. Held replied that if Ames meant the congregation to sit under open rafters through another winter sooner than trust an honest tradesman, then she, for one, could never vote with him.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv1-4-a",
        explanationOptions: [
          {
            id: "rv1-4-a",
            text: "Ames asked for a second estimate before signing; Held answers a far more reckless proposal — a winter under open rafters — and defeats the version she built rather than the one he made.",
          },
          {
            id: "rv1-4-b",
            text: "Held attacks Ames's character, painting him as a man who distrusts honest tradesmen, instead of engaging his suggestion.",
          },
          {
            id: "rv1-4-c",
            text: "Held summons the misery of a roofless winter — cold pews, dripping rafters — as feeling offered in place of any evidence about the estimate itself.",
          },
        ],
      },
      {
        id: "rv1-5",
        text: "Then old Tapping wondered aloud whether the vestry oughtn't first settle the matter of the churchyard gate, which had hung crooked since Lady Day, and for a quarter of an hour the roof was not mentioned again.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv1-5-c",
        explanationOptions: [
          {
            id: "rv1-5-a",
            text: "Tapping restates the roof proposal as a plan to repair everything in the parish at once, then objects to the expense of that larger scheme.",
          },
          {
            id: "rv1-5-b",
            text: "Tapping trades the estimate's figures for sentiment about the churchyard where the parish dead lie, letting feeling settle the question.",
          },
          {
            id: "rv1-5-c",
            text: "No one's position is distorted and no one is attacked; the question is simply abandoned — the crooked gate is a fresh scent, and the vestry follows it away from the vote.",
          },
        ],
      },
      {
        id: "rv1-6",
        text: "The estimate was carried over to Michaelmas, unsigned, and the lead went on thinning at its own pace.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-dredging-question",
    title: "The Dredging Question",
    difficulty: "intermediate",
    includedLabels: ["tu-quoque", "appeal-to-emotion", "dialectical"],
    sentences: [
      {
        id: "rv2-1",
        text: "The harbor board met on the engineer's report: the inner channel was losing a hand's depth to silt each winter, and the dredger's price rose with every season the work was put off.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv2-2",
        text: "Pilot Voss said plainly that the board had postponed the dredging three years running, and that the postponing had become the expensive part.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv2-3",
        text: "The treasurer answered that Voss's own boat had not been careened in three seasons, by his reckoning, and that a man with weed on his hull might spare the board his lectures on upkeep.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv2-3-a",
        explanationOptions: [
          {
            id: "rv2-3-a",
            text: "The postponements are never defended; Voss's own neglected hull — the same fault he charges the board with — is offered as if a critic's hypocrisy could refute his criticism.",
          },
          {
            id: "rv2-3-b",
            text: "The treasurer attacks Voss's competence as a pilot generally, his character and standing, rather than the substance of what he said.",
          },
          {
            id: "rv2-3-c",
            text: "The treasurer changes the subject from the harbor's channel to boats in general, so that the three postponed years are never examined.",
          },
        ],
      },
      {
        id: "rv2-4",
        text: "Old Callum rose to say that his grandfather had brought ships up that channel when it ran a fathom clear, and that any board that could hear this and still haggle over an engineer's figures had no salt in its blood.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv2-4-c",
        explanationOptions: [
          {
            id: "rv2-4-a",
            text: "Callum attacks the board members themselves — bloodless, unsalted — in place of engaging anything in the engineer's report.",
          },
          {
            id: "rv2-4-b",
            text: "Callum steers the meeting away from this year's dredging and into his family's history, a new subject under which the figures are quietly lost.",
          },
          {
            id: "rv2-4-c",
            text: "Pride and shame do the arguing: the grandfather's fathom of clear water is offered where soundings and costs belong, feeling standing in for evidence about what the channel needs now.",
          },
        ],
      },
      {
        id: "rv2-5",
        text: "The chairwoman put Voss's objection back to the room in its strongest form — that every postponed season raised the price of the next — granted it outright, and moved that the outer bar be dredged that autumn with the inner channel bound into the spring estimates.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "rv2-5-b",
        explanationOptions: [
          {
            id: "rv2-5-a",
            text: "The chairwoman rewrites Voss's complaint into a softer version — a worry about prices — that she can grant more cheaply than what he actually said.",
          },
          {
            id: "rv2-5-b",
            text: "The objection is restated whole, at full strength, conceded where it is true, and the board's plan is amended to answer it — the criticism taken into the reasoning rather than turned aside.",
          },
          {
            id: "rv2-5-c",
            text: "She slides from Voss's criticism to the outer bar, a different stretch of water entirely, and so escapes the question about the inner channel.",
          },
        ],
      },
      {
        id: "rv2-6",
        text: "The motion carried, the minutes recorded it, and Voss went out to look at his hull.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-guild-audit",
    title: "The Guild Audit",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "tu-quoque"],
    sentences: [
      {
        id: "rv3-1",
        text: "The auditor's letter, read aloud in the guild hall, found the wardens' ledger short by the price of forty hides over two years.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv3-2",
        text: "Warden Crail reminded the hall that Mr. Fenn, who wrote it, had twice been passed over for guild office, and asked, to some laughter, whether a disappointed man's letter deserved the name of an audit.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv3-2-c",
        explanationOptions: [
          {
            id: "rv3-2-a",
            text: "Crail deflects the audit by accusing Fenn of the very shortfall it alleges, answering the charge of missing money with a matching charge.",
          },
          {
            id: "rv3-2-b",
            text: "Crail turns the hall from the ledger to the history of guild elections, a livelier subject under which the letter is never answered.",
          },
          {
            id: "rv3-2-c",
            text: "The forty hides go entirely unexplained; Fenn's disappointed ambitions are offered as the reason to dismiss his findings — the arguer's motives attacked in place of his arithmetic.",
          },
        ],
      },
      {
        id: "rv3-3",
        text: "The letter lay on the lectern where the clerk had left it, its columns as long as before.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv3-4",
        text: "When the journeyman Hobbe pressed for the missing entries to be read out, Crail observed that Hobbe's own dues stood two quarters in arrears, and that men who owed the box might be slower to talk of what was owed from it.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv3-4-b",
        explanationOptions: [
          {
            id: "rv3-4-a",
            text: "Crail attacks Hobbe's character — a debtor, not fit to be heard — in place of the request, discrediting the man rather than his question.",
          },
          {
            id: "rv3-4-b",
            text: "Hobbe's question is met by turning his own conduct back on him: his unpaid dues, the same kind of fault, offered as though his standing to ask settled whether the entries were missing.",
          },
          {
            id: "rv3-4-c",
            text: "Crail moves the talk from the wardens' ledger to the dues-box, a different account entirely, so the missing entries are never read.",
          },
        ],
      },
      {
        id: "rv3-5",
        text: "Hobbe paid his two quarters at the door that evening, which changed the price of forty hides not at all.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv3-6",
        text: "The audit was referred to a committee of three, two of them wardens.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-schoolhouse-flue",
    title: "The Schoolhouse Flue",
    difficulty: "intermediate",
    includedLabels: ["straw-man", "appeal-to-emotion"],
    sentences: [
      {
        id: "rv4-1",
        text: "The sweep's report found the schoolhouse flue cracked in two places above the second floor, and Mistress Pryce asked that lessons move to the granary hall for one winter while it was rebuilt.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv4-2",
        text: "Alderman Strood said he would not sit quiet while the building their grandfathers had raised was condemned as a death-trap and marked for pulling down, and on the word of one sweep at that.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv4-2-a",
        explanationOptions: [
          {
            id: "rv4-2-a",
            text: "Pryce asked for a winter's remove while a flue was mended; Strood answers a demolition nobody proposed — the modest request rebuilt into an extreme one and rebutted in that easier form.",
          },
          {
            id: "rv4-2-b",
            text: "Strood attacks the sweep himself — one tradesman, not to be trusted — rather than saying anything about the two cracks in the flue.",
          },
          {
            id: "rv4-2-c",
            text: "Strood offers the grandfathers' labor as pure sentiment, warmth of ancestry standing in for any evidence that the flue is sound.",
          },
        ],
      },
      {
        id: "rv4-3",
        text: "The granary hall could be had for a peppercorn rent, the maltster having no winter use for it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv4-4",
        text: "Mrs. Vane rose to say she had learned her letters beside that stove, as had half the room, and that anyone who remembered its warmth on a snow morning knew in their heart the chimney was sound.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv4-4-c",
        explanationOptions: [
          {
            id: "rv4-4-a",
            text: "Vane recasts Pryce's request as an insult to everyone schooled in the building, then argues against the insult rather than the plan.",
          },
          {
            id: "rv4-4-b",
            text: "Vane draws the meeting away from the flue and into her school days, a new subject under which the sweep's report is never weighed.",
          },
          {
            id: "rv4-4-c",
            text: "The warmth of remembered snow mornings is offered as evidence about the flue itself — fondness set where the sweep's findings belong, as though a feeling could inspect a chimney.",
          },
        ],
      },
      {
        id: "rv4-5",
        text: "The sweep, asked to repeat himself, said only that cracks did not care where anyone had learned their letters.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv4-6",
        text: "The children wintered in the granary hall, and the schoolhouse got its new flue and, in the spring, its children back.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-common-stint",
    title: "The Common Stint",
    difficulty: "intermediate",
    includedLabels: ["red-herring", "tu-quoque"],
    sentences: [
      {
        id: "rv5-1",
        text: "The hayward's count, taken at first light and again at dusk, put Dunmore's flock at sixty head over his stint on the common.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv5-2",
        text: "Dunmore rose and spoke, with real force, about the ramblers who came over the stile each Sunday and left the top gates swinging, and by the time he sat down the meeting was arguing about latches.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv5-2-b",
        explanationOptions: [
          {
            id: "rv5-2-a",
            text: "Dunmore turns the accusation back on the ramblers, charging his accusers with the very fault laid at his own door.",
          },
          {
            id: "rv5-2-b",
            text: "The count of sixty is never disputed or even mentioned; a fresh grievance — gates and Sunday ramblers — is laid across the trail, and the meeting follows it away from the stint.",
          },
          {
            id: "rv5-2-c",
            text: "Dunmore recasts the hayward's complaint as an attack on everyone who uses the common, then argues against that broader charge.",
          },
        ],
      },
      {
        id: "rv5-3",
        text: "The chairman, recovering the thread, asked Dunmore directly whether the count was wrong.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv5-4",
        text: "Dunmore reminded the hall instead that the hayward himself had wintered a dozen ewes on the common the year the counts ran short, and asked how the man who did that could stand there reading numbers at him.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv5-4-a",
        explanationOptions: [
          {
            id: "rv5-4-a",
            text: "The hayward's own past grazing — the same fault in the critic — is offered as if it unmade his count; a charge of hypocrisy stands where an answer about the sixty head should.",
          },
          {
            id: "rv5-4-b",
            text: "Dunmore attacks the hayward's character wholesale — grasping, not to be trusted with office — rather than the count he carried out.",
          },
          {
            id: "rv5-4-c",
            text: "Dunmore shifts the meeting to a bygone winter, an older story under which the present count is never discussed at all.",
          },
        ],
      },
      {
        id: "rv5-5",
        text: "Nobody in the hall, it was noticed, had yet said the number sixty was false.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv5-6",
        text: "The stint question was carried over to the next court, and the flock went on eating in the meantime.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-almshouse-orchard",
    title: "The Almshouse Orchard",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "appeal-to-emotion", "dialectical"],
    sentences: [
      {
        id: "rv6-1",
        text: "The almshouse trust met on a single question: whether to sell the orchard the founder had left it and spend the price on the west wing's failing roof.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv6-2",
        text: "Surveyor Pellam, who had measured the rafters, argued against the sale: an orchard could be sold once, he said, while roofs would go on failing, and the trust would do better to repair from reserve and keep the orchard's yearly rent.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv6-3",
        text: "Trustee Gorse replied that Pellam rented his own lodgings, had never held a rood of land in his life, and that the trust need not take instruction on property from a man who owned none.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv6-3-b",
        explanationOptions: [
          {
            id: "rv6-3-a",
            text: "Gorse charges Pellam with the very improvidence Pellam warns the trust against, meeting the criticism with a matching accusation of the same fault.",
          },
          {
            id: "rv6-3-b",
            text: "Pellam's point about capital and recurring costs is never touched; his rented lodgings are — the man's circumstances offered as if they answered his reasoning.",
          },
          {
            id: "rv6-3-c",
            text: "Gorse turns the meeting from the roof to the question of who owns what in the parish, and the repair figures slip quietly out of view.",
          },
        ],
      },
      {
        id: "rv6-4",
        text: "Mrs. Alder said the founder had set those trees with his own hands, that she could not walk the rows in blossom-time without weeping, and that a heart which felt this rightly would know the roof could be paid for some other way.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv6-4-a",
        explanationOptions: [
          {
            id: "rv6-4-a",
            text: "Her tears in blossom-time are given as grounds for a claim about the trust's finances — the feeling is real, but it is set where figures belong, as though grief could locate another source of funds.",
          },
          {
            id: "rv6-4-b",
            text: "Alder recasts the proposed sale as a deliberate attack on the founder's memory, then argues against that darker version of the plan.",
          },
          {
            id: "rv6-4-c",
            text: "Alder leads the trustees away from the roof accounts and out into the orchard rows, a change of subject under which the estimate is never weighed.",
          },
        ],
      },
      {
        id: "rv6-5",
        text: "The chair took up Pellam's objection and gave it back whole — a sold orchard could be sold once, while roofs would go on failing — then proposed selling the outer acre alone and meeting the rest of the repairs from two years of the orchard's rent.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "rv6-5-c",
        explanationOptions: [
          {
            id: "rv6-5-a",
            text: "The chair rewrites Pellam's warning into a milder doubt about timing, a version far easier to accommodate than what he actually argued.",
          },
          {
            id: "rv6-5-b",
            text: "The chair slides from the sale question to rents and acreage, a different subject that lets the real vote go unmade.",
          },
          {
            id: "rv6-5-c",
            text: "The objection is repeated at its full strength, not softened, and the proposal is amended until it answers the objection — the criticism built into the plan rather than brushed off it.",
          },
        ],
      },
      {
        id: "rv6-6",
        text: "The amended motion carried by one vote, Gorse abstaining.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv6-7",
        text: "The founder's trees kept most of their rows, and the west wing kept out that winter's rain.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-cart-lanterns",
    title: "Lanterns on the Toll Road",
    difficulty: "intermediate",
    includedLabels: ["straw-man", "red-herring"],
    sentences: [
      {
        id: "rv7-1",
        text: "The turnpike trust met on a single clause — that carts on the toll road carry a lit lantern from dusk until dawn — after two collisions at the mile bridge inside a year.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv7-2",
        text: "The clerk read the clause twice, it being short.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv7-3",
        text: "Farmer Quill answered that if the trust meant every hay-cart in the district to be rigged and burning like a pleasure barge from breakfast onward, oil bought at the farmer's cost for the townsman's comfort, then the trust had lost its senses and he was against it.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv7-3-b",
        explanationOptions: [
          {
            id: "rv7-3-a",
            text: "Quill offers the farmer's burden as raw feeling — resentment of the townsman's comfort — in place of any evidence bearing on the collisions.",
          },
          {
            id: "rv7-3-b",
            text: "The clause asked for one lantern after dusk; Quill argues against a grander scheme — lights burning all day at ruinous cost — and finds that invented version far easier to defeat.",
          },
          {
            id: "rv7-3-c",
            text: "Quill diverts the trust from the mile bridge to the price of lamp oil, a side subject under which the clause is never brought to a vote.",
          },
        ],
      },
      {
        id: "rv7-4",
        text: "A trustee tried to return to the plain question of whether a lantern would have prevented either collision at the bridge.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv7-5",
        text: "Then Mr. Setter, of the lower tollhouse, asked when the trust proposed to do something about the potholes past the nine-mile stone, one of which had swallowed a wheel whole in March, and the lantern clause was not seen again that evening.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv7-5-a",
        explanationOptions: [
          {
            id: "rv7-5-a",
            text: "Nothing in the clause is distorted and no one is attacked; the potholes are simply a stronger scent, and the meeting is drawn off along it with the bridge question left unanswered.",
          },
          {
            id: "rv7-5-b",
            text: "Setter recasts the lantern clause as a claim that light alone will mend the road, then shows how plainly false that claim is.",
          },
          {
            id: "rv7-5-c",
            text: "Setter answers criticism of the road's carters by charging the trust with neglecting the road itself — the accusers' own fault returned to them as a refutation.",
          },
        ],
      },
      {
        id: "rv7-6",
        text: "The clause was tabled to the spring meeting, and the mile bridge kept its dark.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-price-card-ordinance",
    title: "The Price-Card Ordinance",
    difficulty: "intermediate",
    includedLabels: ["straw-man", "red-herring"],
    sentences: [
      {
        id: "rv8-1",
        text: "The market master put a single clause to the hall: that every licensed stall selling goods by weight must display a written price card at the front of its board, so a buyer could read the rate before the scale was touched.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv8-2",
        text: "Chandler Brigg said he was not the sort of man to sit quiet while they turned his wife's Tuesday stall into a counting-house, with forms to fill, a ledger to keep, and a clerk perhaps to be hired and paid, and that the town had done well enough without all this for two hundred years.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv8-2-a",
        explanationOptions: [
          {
            id: "rv8-2-a",
            text: "Brigg rebuilds the ordinance — a single posted card — into a counting-house demanding forms, a ledger, and paid staff, then defeats that invented scale of burden; the actual clause, three lines long, is left completely untouched.",
          },
          {
            id: "rv8-2-b",
            text: "Brigg shifts the hall from the card rule to the town's two-hundred-year market history, a different subject under which the ordinance is never brought to a vote.",
          },
          {
            id: "rv8-2-c",
            text: "Brigg casts the clause's drafter as a bureaucrat hostile to working traders, attacking whoever designed the rule rather than engaging the rule itself.",
          },
        ],
      },
      {
        id: "rv8-3",
        text: "The market master noted that the proposed card was three lines long and required no ledger of any kind.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv8-4",
        text: "Before he could say more, Mrs. Foss asked whether the hall might also attend to the municipal scale at the south gate, which had been running three grains light since Candlemas, a matter she considered more pressing than any card, and the hall turned as one toward the scale.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv8-4-c",
        explanationOptions: [
          {
            id: "rv8-4-a",
            text: "Foss recasts the price-card clause as a claim that the market's weights and measures are already fair, then produces the short-weight scale as evidence against that claim — arguing against a position no one had taken.",
          },
          {
            id: "rv8-4-b",
            text: "Foss summons the grievance of buyers short-changed since Candlemas as a feeling that stands in for any reasoning about whether the card clause would help.",
          },
          {
            id: "rv8-4-c",
            text: "Nothing in the ordinance is distorted and no one is attacked; the scale at the south gate is simply a livelier grievance, drawn across the trail, and the hall follows it away from the price-card vote.",
          },
        ],
      },
      {
        id: "rv8-5",
        text: "The price-card clause was not resumed that morning, and the south-gate scale was not weighed that morning either.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv8-6",
        text: "A buyer on Bridge Row paid the wrong rate for a quarter of beeswax the following Tuesday, and had nothing posted to check against.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-infirmary-rate",
    title: "The Infirmary Rate",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "appeal-to-emotion"],
    sentences: [
      {
        id: "rv9-1",
        text: "The overseer of the poor had proposed raising the parish rate by one halfpenny in the pound for a single year, the sum earmarked for a second room at the infirmary where women could lie apart from men.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv9-2",
        text: "Councillor Manse replied that the overseer had come to the post through his cousin's influence, that his father's drapery had ended in the county court, and that a man who had never managed his own affairs without a relative's hand was a singular choice to direct the parish's.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv9-2-b",
        explanationOptions: [
          {
            id: "rv9-2-a",
            text: "Manse turns the overseer's own past difficulty — the failed drapery, the cousin's favour — back at him as if his family's history committed the same fault as the one Manse suspects in the rate proposal.",
          },
          {
            id: "rv9-2-b",
            text: "The halfpenny proposal is never examined; the overseer's family connections and his father's debts are set in their place — the man's circumstances offered as if they answered his arithmetic.",
          },
          {
            id: "rv9-2-c",
            text: "Manse steers the council from the rate question to the overseer's appointment, a separate matter, so the infirmary room is never costed or considered.",
          },
        ],
      },
      {
        id: "rv9-3",
        text: "The halfpenny in question had not been disputed on any arithmetical ground.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv9-4",
        text: "Mrs. Crowe spoke of the women she had visited in the fever ward — three to a pallet in December, the candles gone before midnight, the smell such that she had wept on the way home — and said that anyone who could sit in this room and query a halfpenny had no Christian feeling left in him.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv9-4-c",
        explanationOptions: [
          {
            id: "rv9-4-a",
            text: "Crowe recasts the council's hesitation as indifference to suffering — and argues against that cruelty rather than the actual question of whether a halfpenny sum would fund a separate room.",
          },
          {
            id: "rv9-4-b",
            text: "Crowe draws the meeting away from the rate figures and into the fever ward's conditions, a change of subject under which the halfpenny is never weighed.",
          },
          {
            id: "rv9-4-c",
            text: "The anguish of three women to a pallet is placed where a reckoning of cost belongs — the feeling is real, but it stands in for the evidence: whether a halfpenny rise would in fact fund and staff a second room.",
          },
        ],
      },
      {
        id: "rv9-5",
        text: "What a halfpenny in the pound would actually buy, and whether it was enough, remained unexamined when the hour ended.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv9-6",
        text: "The motion was deferred for better figures, which the overseer produced, alone, three weeks later.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-leat-hearing",
    title: "The Leat Hearing",
    difficulty: "intermediate",
    includedLabels: ["tu-quoque", "straw-man"],
    sentences: [
      {
        id: "rv10-1",
        text: "The water inspector's report was brief: Farrow's Mill had drawn from the leat on nine nights in July beyond its licensed hours, and the inspector asked that the lost flow be reckoned and a price set.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv10-2",
        text: "Aldred Farrow, the mill's owner, did not dispute the nine nights.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv10-3",
        text: "He observed instead that this same inspector had run the north leat dry in a drought summer twelve years past, without leave from anyone, and asked whether a man with that on his record was in a position to price anyone else's water.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv10-3-a",
        explanationOptions: [
          {
            id: "rv10-3-a",
            text: "The nine nights are never answered; the inspector's own dry-summer diversion — the same kind of act — is held up as if a critic's past fault could refute his present finding, the reckoning still owed.",
          },
          {
            id: "rv10-3-b",
            text: "Farrow attacks the inspector's general character and fitness for office rather than returning one specific act of the same kind to him.",
          },
          {
            id: "rv10-3-c",
            text: "Farrow steers the hearing from this July's nine nights to a drought twelve years past, a separate event, under which the present excess is never examined.",
          },
        ],
      },
      {
        id: "rv10-4",
        text: "The inspector's report lay before the board with its nine nights intact, undisputed still.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv10-5",
        text: "Young Farrow, Aldred's son, rose to say he would not sit still while they condemned his grandfather's mill and stripped the family of its licence over a trifle, and that the inspectorate could come for the wheel itself when they were ready to answer for what that would do to the village.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv10-5-b",
        explanationOptions: [
          {
            id: "rv10-5-a",
            text: "Young Farrow summons the grandfather's mill and the village's dependence on it — inheritance and local feeling doing the arguing where an account of the nine nights was owed.",
          },
          {
            id: "rv10-5-b",
            text: "The report asked for a price for nine nights' excess; young Farrow answers a confiscation — licence stripped, the wheel itself taken — and defends against that extreme rather than the modest reckoning the inspector filed.",
          },
          {
            id: "rv10-5-c",
            text: "Young Farrow turns the inspector's finding back on the inspectorate, charging them with overreach as if their excess cancelled the question of his father's.",
          },
        ],
      },
      {
        id: "rv10-6",
        text: "The board adjourned without setting a price, and the nine nights remained on the record, unclosed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-reading-room-renewal",
    title: "The Reading Room Renewal",
    difficulty: "intermediate",
    includedLabels: ["red-herring", "appeal-to-emotion"],
    sentences: [
      {
        id: "rv11-1",
        text: "The reading room committee had a single item: whether to renew the London Illustrated at its new subscription of fourteen shillings — four more than the year before — or to let the subscription lapse and find a cheaper paper for the shelf.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv11-2",
        text: "Before the chair could invite discussion, Mr. Tole asked whether this might not be the moment to address the fiction catalogue, which had gone un-weeded since the previous secretary's time and currently listed three entries for the same novel, and the room gave the catalogue its full attention for the better part of an hour.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv11-2-c",
        explanationOptions: [
          {
            id: "rv11-2-a",
            text: "Tole recasts the renewal question as a claim that the reading room's administration is in good order, then uses the catalogue's three duplicate entries to disprove that claim — arguing against a position no one had taken.",
          },
          {
            id: "rv11-2-b",
            text: "Tole offers the committee's neglect of the catalogue as an indignity — accumulated carelessness doing the work of engaging the fourteen-shilling question — feeling in place of a price comparison.",
          },
          {
            id: "rv11-2-c",
            text: "Nothing in the renewal question is distorted and no one is attacked; the catalogue's three copies of the same novel is simply a more engrossing problem, and the committee follows it away from the vote on fourteen shillings.",
          },
        ],
      },
      {
        id: "rv11-3",
        text: "The chair recovered her thread and put the fourteen shillings back before the table.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv11-4",
        text: "Mr. Hoult said that the London Illustrated had arrived every week when he was a boy sweeping the room's floor for pennies, that it had taught him to read a map and follow a parliamentary debate, and that a committee willing to lose it for four shillings was not the kind of committee his parents had trusted with their dues.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv11-4-b",
        explanationOptions: [
          {
            id: "rv11-4-a",
            text: "Hoult leads the committee away from the fourteen-shilling question and into his childhood with the room, a change of subject that leaves the price comparison where it began.",
          },
          {
            id: "rv11-4-b",
            text: "Hoult's memories of the sweeping boy and his parents' trust are placed where an argument about the paper's value at fourteen shillings belongs — feeling doing the work that a comparison of price to benefit was owed.",
          },
          {
            id: "rv11-4-c",
            text: "Hoult calls the committee unworthy of the trust placed in them, attacking their character rather than engaging the question of whether fourteen shillings is a price worth paying.",
          },
        ],
      },
      {
        id: "rv11-5",
        text: "The four extra shillings, and whether any paper in England offered comparable reading at a lower price, were not discussed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv11-6",
        text: "The Illustrated was renewed, the catalogue was not weeded, and the three copies of the same novel stood through the following year on the same shelf.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-mill-lane-bridge",
    title: "The Mill Lane Bridge",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "tu-quoque", "dialectical"],
    sentences: [
      {
        id: "rv12-1",
        text: "The borough surveyor's report put the cost of repiling the Mill Lane footbridge at eleven pounds twelve, and advised the work be done before the autumn floods.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv12-2",
        text: "Councillor Petch reminded the room that this same surveyor had declared the south vestry wall sound eighteen months before it shed a course of stone into the churchyard, and suggested the eleven pounds might deserve a firmer foundation than his word.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv12-2-b",
        explanationOptions: [
          {
            id: "rv12-2-a",
            text: "Petch charges the surveyor with the very carelessness he suspects in the piling report, returning the vestry wall failure to him as if a past fault cancelled the present estimate.",
          },
          {
            id: "rv12-2-b",
            text: "The piling estimate is never examined on its own terms; the surveyor's record on the vestry wall is set in its place — the man's past error offered as if it answered whether eleven pounds twelve is the right price for the footbridge.",
          },
          {
            id: "rv12-2-c",
            text: "Petch moves the meeting from the footbridge to the vestry wall, a different structure on a different question, so the piling figures are never opened.",
          },
        ],
      },
      {
        id: "rv12-3",
        text: "Alderman Rowe observed that Petch had been more than willing to accept that same surveyor's certificate on his own barn extension last spring, had written to thank him for it, and asked when exactly the incompetence had been discovered.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv12-3-c",
        explanationOptions: [
          {
            id: "rv12-3-a",
            text: "Rowe attacks Petch's general reliability as a councillor — a man who shifts his opinions for convenience — rather than specifically turning Petch's use of the vestry wall back on him.",
          },
          {
            id: "rv12-3-b",
            text: "Rowe steers the meeting from the footbridge toward Petch's barn, a separate building, so the piling estimate remains unopened throughout.",
          },
          {
            id: "rv12-3-c",
            text: "Petch's past trust in the surveyor — when that trust served his own barn — is turned back on him, as though his earlier reliance refuted his present doubt, the footbridge's piles still unexamined.",
          },
        ],
      },
      {
        id: "rv12-4",
        text: "Neither man had yet said anything about the eleven pounds twelve, or about the piles.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv12-5",
        text: "The chair stated the surveyor's concern plainly — the piles were six inches short of specification after six winters, and the first heavy flood would find that margin — acknowledged that the vestry wall question was a fair one for another meeting, and proposed the repair proceed on the condition that the county surveyor review the work independently before any sum was released.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "rv12-5-a",
        explanationOptions: [
          {
            id: "rv12-5-a",
            text: "The surveyor's finding is restated at full strength; the vestry wall concern is acknowledged as legitimate rather than dismissed; the two matters are separated and both answered — the objection taken into the plan rather than turned aside.",
          },
          {
            id: "rv12-5-b",
            text: "The chair rewrites Petch's vestry wall concern as a minor quibble about one past job and grants it cheaply, sidestepping the real challenge to the surveyor's reliability rather than meeting it.",
          },
          {
            id: "rv12-5-c",
            text: "The chair pivots from the bridge estimate to the county surveyor review, a new subject, so the eleven-pounds figure passes through without the room ever examining it.",
          },
        ],
      },
      {
        id: "rv12-6",
        text: "The motion carried, and the footbridge stood through the winter without event.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv12-7",
        text: "The vestry wall question went onto the agenda for March, where it sat through the spring undiscussed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
