import type { PracticeStory } from "@/domain/types";

/**
 * Relevance-fallacy stories: ad hominem, straw man, red herring, tu quoque,
 * and appeal to emotion — with healthy dialectical engagement in the mix, so
 * the learner practices telling a derailment from a genuine answer.
 * Settings are modern, everyday, or lightly fantastical. The fallacious lines
 * should sound like real argument rhetoric — persuasive, even sympathetic —
 * never cartoon mistakes.
 */

export const relevanceFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-vestry-roof",
    title: "The Tool Trial",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "straw-man", "red-herring"],
    sentences: [
      {
        id: "rv1-1",
        text: "Maya, who had been on the team for eight months, asked only that they run a two-week trial of the new project tool before anyone signed a year's contract.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv1-2",
        text: "Dan pointed out that Maya had never shipped a full product cycle with this team, coming as she did from a company that ran five-person sprints, and wondered what someone with that background really understood about their tooling needs.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv1-2-b",
        explanationOptions: [
          {
            id: "rv1-2-a",
            text: "Dan reframes Maya's request for a trial as a proposal to abandon every process the team has built, then argues against that grander disruption.",
          },
          {
            id: "rv1-2-b",
            text: "The trial proposal is never examined on its merits; Maya's short tenure and her previous company's smaller scale are offered as the reason to discount her — the person answered in place of the idea.",
          },
          {
            id: "rv1-2-c",
            text: "Dan steers the group from the tool trial to the question of how team experience should be weighted, a fresh subject under which the proposal quietly disappears.",
          },
        ],
      },
      {
        id: "rv1-3",
        text: "The trial proposal sat in the shared doc, undefended and unchallenged on its merits.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv1-4",
        text: "Priya said she wasn't about to watch them throw out every process they'd spent two years building just because one person was restless with the setup — if they wanted to start from scratch every quarter, she wasn't going to pretend that was a reasonable way to work.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv1-4-a",
        explanationOptions: [
          {
            id: "rv1-4-a",
            text: "Maya asked for a two-week trial; Priya argues against overhauling every process every quarter — a far more disruptive proposal that nobody made, defeated in its invented form while the modest suggestion goes unanswered.",
          },
          {
            id: "rv1-4-b",
            text: "Priya attacks Maya's character — restless, unwilling to commit — rather than saying anything about what a trial would or wouldn't show.",
          },
          {
            id: "rv1-4-c",
            text: "Priya summons the effort that went into two years of process-building — a feeling of potential loss — in place of any evidence that the trial would actually damage what they've made.",
          },
        ],
      },
      {
        id: "rv1-5",
        text: "Then Joel brought up the Slack notification settings, which had been misfiring since the platform update three weeks ago and were, in his view, the real drain on the team's time, and the next twenty minutes went entirely there.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv1-5-c",
        explanationOptions: [
          {
            id: "rv1-5-a",
            text: "Joel restates the tool trial as a plan to overhaul all the team's tooling at once, then objects to the cost and disruption of that larger project.",
          },
          {
            id: "rv1-5-b",
            text: "Joel replaces the trial question with frustration over missed notifications — accumulated irritation doing the work of engaging the proposal.",
          },
          {
            id: "rv1-5-c",
            text: "Nobody's position is distorted and nobody is attacked; the notification settings are simply a livelier grievance, drawn across the trail, and the meeting follows it away from the trial question.",
          },
        ],
      },
      {
        id: "rv1-6",
        text: "The trial was moved to the product backlog, the doc was closed, and the current tool went on misfiring in the ways it always had.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-dredging-question",
    title: "The Pool Association",
    difficulty: "intermediate",
    includedLabels: ["tu-quoque", "appeal-to-emotion", "dialectical"],
    sentences: [
      {
        id: "rv2-1",
        text: "The pool inspector's report was clear: the liner had developed twelve delaminations over the winter, and the longer the patch work was deferred, the more expensive the full replacement would become.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv2-2",
        text: "Resident Marcus said plainly that the board had put off the liner repair three summers in a row, and that the deferral itself had become the most expensive decision they'd made.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv2-3",
        text: "The board treasurer replied that Marcus's own fence still didn't meet the community's property standards — he'd been sent two notices — and that maybe someone with an out-of-code fence shouldn't be lecturing the board about maintenance.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv2-3-a",
        explanationOptions: [
          {
            id: "rv2-3-a",
            text: "The deferred repairs are never defended; Marcus's own out-of-code fence — the same kind of maintenance failure he is charging the board with — is raised as if a critic's hypocrisy could answer his criticism.",
          },
          {
            id: "rv2-3-b",
            text: "The treasurer attacks Marcus's general reliability as a neighbor — the notices, his track record — rather than specifically turning one parallel fault back on him.",
          },
          {
            id: "rv2-3-c",
            text: "The treasurer changes the subject from the pool liner to property standards across the whole community, so the three deferred summers are never examined.",
          },
        ],
      },
      {
        id: "rv2-4",
        text: "Mrs. Chen rose to say that this pool had been here when she moved in thirty years ago, that her children had learned to swim in it, and that any board willing to sit here and debate costs while the liner rotted had lost sight of what this neighborhood was supposed to be.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv2-4-c",
        explanationOptions: [
          {
            id: "rv2-4-a",
            text: "Chen attacks the board personally — lost sight of what a neighborhood means — rather than weighing anything in the inspector's repair figures.",
          },
          {
            id: "rv2-4-b",
            text: "Chen leads the meeting from this summer's patch work into a thirty-year history of the pool, a different subject under which the costs are quietly set aside.",
          },
          {
            id: "rv2-4-c",
            text: "Sentiment does the arguing: thirty years of childhood summers are offered where timelines and cost projections belong, feeling standing in for evidence about what the liner actually needs now.",
          },
        ],
      },
      {
        id: "rv2-5",
        text: "The association chair restated Marcus's point at full strength — every summer of delay compounded the eventual cost — conceded it as accurate, and proposed that the outer pool deck be patched that fall with the full liner replacement built into the spring budget.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "rv2-5-b",
        explanationOptions: [
          {
            id: "rv2-5-a",
            text: "The chair softens Marcus's complaint into a vague worry about the pace of decisions, a milder version she can grant more cheaply than what he actually said.",
          },
          {
            id: "rv2-5-b",
            text: "The objection is taken up whole, at full strength, conceded where it's true, and the board's plan is adjusted to answer it — the criticism built into the decision rather than turned aside.",
          },
          {
            id: "rv2-5-c",
            text: "She moves from Marcus's concern about deferral to the outer deck, a different part of the project, and so escapes the question about the liner.",
          },
        ],
      },
      {
        id: "rv2-6",
        text: "The motion passed, the minutes recorded it, and Marcus drove home past his fence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-guild-audit",
    title: "The Expense Report",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "tu-quoque"],
    sentences: [
      {
        id: "rv3-1",
        text: "The finance team's report, shared on the team channel the night before, found the department's discretionary spending over budget by just over four hundred dollars across the last two quarters.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv3-2",
        text: "The department manager noted that the auditor, Dan Fisk, had applied for the finance lead position twice and been passed over both times, and asked, with a half-smile, whether a disappointed man's spreadsheet deserved to be called an audit.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv3-2-c",
        explanationOptions: [
          {
            id: "rv3-2-a",
            text: "The manager turns Fisk's own record against him — as though his failed applications committed the same fault as the one the audit alleges.",
          },
          {
            id: "rv3-2-b",
            text: "The manager steers the meeting from the expense figures to the history of the finance lead selection, a livelier topic under which the spreadsheet is never answered.",
          },
          {
            id: "rv3-2-c",
            text: "The four hundred dollars goes entirely unexplained; Fisk's disappointed career ambitions are offered as the reason to dismiss his findings — the arguer's motives set in place of his arithmetic.",
          },
        ],
      },
      {
        id: "rv3-3",
        text: "The spreadsheet remained in the shared drive, its columns as long as before.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv3-4",
        text: "When junior analyst Hoppe pressed to see the itemized receipts, the manager pointed out that Hoppe had expensed a sixty-dollar team lunch in March that the receipts showed was for one person, and suggested that people who padded their own expenses might think twice before calling others into question.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv3-4-b",
        explanationOptions: [
          {
            id: "rv3-4-a",
            text: "The manager attacks Hoppe's character wholesale — someone who pads expenses, not fit to question others — rather than returning one specific parallel act back to him.",
          },
          {
            id: "rv3-4-b",
            text: "Hoppe's request to see the receipts is met with his own past expense claim turned back on him; the same kind of fault is offered as though it settled whether the department's itemized figures were accurate.",
          },
          {
            id: "rv3-4-c",
            text: "The manager shifts the discussion from the department's discretionary spending to the personal expense category, a different account, so the itemized receipts are never produced.",
          },
        ],
      },
      {
        id: "rv3-5",
        text: "Hoppe reimbursed the sixty dollars that afternoon, which did nothing to close the four-hundred-dollar gap.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv3-6",
        text: "The audit was referred to a review committee of three, two of them members of the department.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-schoolhouse-flue",
    title: "The Mold Report",
    difficulty: "intermediate",
    includedLabels: ["straw-man", "appeal-to-emotion"],
    sentences: [
      {
        id: "rv4-1",
        text: "The HVAC contractor's report found active mold growth behind the walls of two second-floor classrooms, and Principal Torres asked that lessons move to the library wing for one semester while the remediation was completed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv4-2",
        text: "Board member Strode said he would not sit quietly while the building this community had raised over fifty years was condemned as uninhabitable and marked for shutdown, not on the word of a single contractor without so much as a second opinion.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv4-2-a",
        explanationOptions: [
          {
            id: "rv4-2-a",
            text: "Torres asked to move two classes for one semester while the walls were treated; Strode argues against a condemnation and permanent shutdown that nobody proposed — the modest request rebuilt into an extreme one and rebutted in that invented form.",
          },
          {
            id: "rv4-2-b",
            text: "Strode attacks the contractor himself — a single tradesman, not credentialed enough to be trusted — rather than saying anything about what the mold report actually found.",
          },
          {
            id: "rv4-2-c",
            text: "Strode invokes the community's fifty-year investment in the building — civic pride and attachment — as feeling offered in place of any evidence that the walls are sound.",
          },
        ],
      },
      {
        id: "rv4-3",
        text: "The library wing could accommodate both classes with space to spare, at no additional cost to the district.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv4-4",
        text: "Mrs. Vane said she had learned to read in that building, that her children had sat in those same rooms, and that anyone who could sit here and call it a health hazard had clearly not spent a day in it the way she had.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv4-4-c",
        explanationOptions: [
          {
            id: "rv4-4-a",
            text: "Vane reframes Torres's request as an accusation that everyone who studied there was harmed, then argues against that insult rather than the remediation plan.",
          },
          {
            id: "rv4-4-b",
            text: "Vane draws the board away from the mold report and into her own history with the school, a change of subject that leaves the contractor's findings where they were.",
          },
          {
            id: "rv4-4-c",
            text: "The warmth of remembered classrooms is placed where the mold report's findings belong — fondness offered as evidence about the walls' condition, as though a feeling could assess an air sample.",
          },
        ],
      },
      {
        id: "rv4-5",
        text: "The contractor, asked to clarify, said that mold did not particularly care where anyone had learned to read.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv4-6",
        text: "The classes moved to the library that autumn, and the building got its remediation and, the following spring, its students back.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-common-stint",
    title: "The Parking Log",
    difficulty: "intermediate",
    includedLabels: ["red-herring", "tu-quoque"],
    sentences: [
      {
        id: "rv5-1",
        text: "The parking coordinator's log, verified at the start and end of each day, put the Dunmore household at three vehicles over their allotment for the full six weeks of July.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv5-2",
        text: "Dunmore stood and spoke, with real feeling, about the food delivery drivers who blocked the main entrance every evening and left the visitor gate swinging open, and by the time he sat down the association was arguing about gate codes.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv5-2-b",
        explanationOptions: [
          {
            id: "rv5-2-a",
            text: "Dunmore turns the parking complaint back on the delivery drivers, charging his accusers with the same kind of violation laid at his own household's door.",
          },
          {
            id: "rv5-2-b",
            text: "The count of three over-allotment is never disputed or addressed; a separate grievance — nightly delivery trucks and an open gate — is placed across the trail, and the meeting follows it away from the parking question.",
          },
          {
            id: "rv5-2-c",
            text: "Dunmore reframes the coordinator's complaint as an accusation against every resident who ever had a guest park without logging in, then argues against that broader charge.",
          },
        ],
      },
      {
        id: "rv5-3",
        text: "The chair recovered the thread and asked Dunmore directly whether the parking log was wrong.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv5-4",
        text: "Dunmore reminded the room instead that the coordinator herself had parked a personal trailer in a guest space for the entire long weekend in May, and asked how someone who did that could stand up there reading numbers at him.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv5-4-a",
        explanationOptions: [
          {
            id: "rv5-4-a",
            text: "The coordinator's own trailer — the same kind of rule violation turned back on herself — is offered as if a critic's hypocrisy unmade her count; whether the three extra vehicles were parked remains answered by nobody.",
          },
          {
            id: "rv5-4-b",
            text: "Dunmore attacks the coordinator's character as an enforcer — capricious, not to be trusted with authority — rather than returning one specific comparable act to her.",
          },
          {
            id: "rv5-4-c",
            text: "Dunmore shifts the meeting to the May holiday weekend, a different incident, so the six weeks of July are never actually discussed.",
          },
        ],
      },
      {
        id: "rv5-5",
        text: "Nobody in the room had yet said the number three was incorrect.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv5-6",
        text: "The parking question was carried over to the next meeting, and the extra vehicles went on fitting just fine in the meantime.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-almshouse-orchard",
    title: "The Council of the Grove",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "appeal-to-emotion", "dialectical"],
    sentences: [
      {
        id: "rv6-1",
        text: "The Arcane Council had one item before it: whether to sell the Verdant Grove, which the founder had bequeathed it in perpetuity, and spend the proceeds on repairs to the crumbling East Tower.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv6-2",
        text: "Master Archivist Pellam, who had measured the cracks in the tower stones himself, argued against the sale: a grove could be sold once, he noted, while towers would go on requiring repair, and the council would do better to draw from the treasury reserve and keep the grove's yearly tribute in crystals.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv6-3",
        text: "Magister Gorse replied that Pellam lived in borrowed quarters, had never held a charter of land in his own name in forty years of service, and that the council need not receive instruction on endowments from a man who owned nothing of his own.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv6-3-b",
        explanationOptions: [
          {
            id: "rv6-3-a",
            text: "Gorse charges Pellam with the very improvidence he warns against — living on borrowed space while advising the council about its assets — as though Pellam's personal situation committed the same fault he named.",
          },
          {
            id: "rv6-3-b",
            text: "Pellam's reasoning about a one-time sale versus recurring repair costs is never examined; his borrowed quarters and lack of a land title are placed in its place — the man's circumstances offered as though they answered his argument.",
          },
          {
            id: "rv6-3-c",
            text: "Gorse steers the council from the sale question to the matter of who among them holds property of their own, a fresh subject under which the tower estimates disappear.",
          },
        ],
      },
      {
        id: "rv6-4",
        text: "Elder Alder said the founder had planted the grove's first trees with her own hands, that she wept every time she walked there at dawn, and that any council with the proper feeling for this institution would surely find the tower could be paid for some other way.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv6-4-a",
        explanationOptions: [
          {
            id: "rv6-4-a",
            text: "Her grief at dawn in the grove is offered as grounds for a claim about the council's finances — the feeling is real and the attachment genuine, but it is placed where figures and alternatives belong, as though weeping could locate another source of funds.",
          },
          {
            id: "rv6-4-b",
            text: "Alder reframes the proposed sale as a deliberate betrayal of the founder's trust, then argues against that darker version of the motion rather than the practical one on the table.",
          },
          {
            id: "rv6-4-c",
            text: "Alder leads the council from the tower repair accounts out into the grove's founding history, a different subject under which the estimate is never weighed.",
          },
        ],
      },
      {
        id: "rv6-5",
        text: "The Archon took up Pellam's objection and gave it back whole — a sold grove can be sold only once, while towers go on needing repair — conceded it fully, and moved that the council sell the outer quarter of the grove alone and meet the remaining cost from two years of the grove's tribute.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "rv6-5-c",
        explanationOptions: [
          {
            id: "rv6-5-a",
            text: "The Archon softens Pellam's warning into a general caution about timing, a much milder version she can accommodate without addressing the point about a one-time sale.",
          },
          {
            id: "rv6-5-b",
            text: "The Archon pivots from the full-grove sale to partial acreage and tribute schedules, a different set of questions, so the original motion is never properly examined.",
          },
          {
            id: "rv6-5-c",
            text: "The objection is repeated at its full force, not weakened, and the proposal is amended until it accounts for what Pellam said — the criticism built into the plan rather than brushed past.",
          },
        ],
      },
      {
        id: "rv6-6",
        text: "The amended motion carried by a single vote, Gorse abstaining.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv6-7",
        text: "Most of the grove stayed in the council's hands, and the East Tower shed no rain that winter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-cart-lanterns",
    title: "Porch Lights",
    difficulty: "intermediate",
    includedLabels: ["straw-man", "red-herring"],
    sentences: [
      {
        id: "rv7-1",
        text: "The neighborhood safety committee convened on one item — a rule requiring every residence to keep its porch light on between dusk and dawn — following two burglaries on the same block in under twelve months.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv7-2",
        text: "The committee secretary read the clause aloud, it being eleven words long.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv7-3",
        text: "Resident Quinn said she would not stand quietly while they required every house on the street to burn lights all night like a hotel lobby, at each homeowner's electricity expense, for the comfort of passersby who didn't even live there.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv7-3-b",
        explanationOptions: [
          {
            id: "rv7-3-a",
            text: "Quinn channels homeowners' resentment at bearing electricity costs for others' benefit — that feeling standing in for any evidence about whether the clause would reduce break-ins.",
          },
          {
            id: "rv7-3-b",
            text: "The clause asked for a porch light after dusk; Quinn argues against a scheme of all-night illumination at ruinous cost to every resident — a far more burdensome requirement that nobody proposed, defeated in its invented form.",
          },
          {
            id: "rv7-3-c",
            text: "Quinn steers the committee from the break-ins to the question of electricity costs, a side subject under which the clause is never actually brought to a vote.",
          },
        ],
      },
      {
        id: "rv7-4",
        text: "A committee member asked whether a porch light would have made any difference in either of the actual break-ins.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv7-5",
        text: "Then Mr. Setter asked when the committee planned to address the broken streetlight at the corner of Maple and Third, which had been dark since March and which he considered the real safety issue on this block, and the porch-light clause was not mentioned again that evening.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv7-5-a",
        explanationOptions: [
          {
            id: "rv7-5-a",
            text: "Nobody's position is distorted and nobody is attacked; the broken streetlight is simply a more pressing grievance, drawn across the trail, and the meeting follows it away from the porch-light question.",
          },
          {
            id: "rv7-5-b",
            text: "Setter reframes the porch-light clause as a claim that homeowners alone can solve the neighborhood's safety problem, then points to the city's broken streetlight as evidence that claim is false.",
          },
          {
            id: "rv7-5-c",
            text: "Setter answers the committee's concern about residents' lighting by charging the city with neglecting the public lights — the accusers' own parallel failure returned as a refutation.",
          },
        ],
      },
      {
        id: "rv7-6",
        text: "The clause was tabled until the next meeting, and the block kept its dark.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-price-card-ordinance",
    title: "The Price List",
    difficulty: "intermediate",
    includedLabels: ["straw-man", "red-herring"],
    sentences: [
      {
        id: "rv8-1",
        text: "The food truck lot coordinator put one clause to the group: that every licensed truck must display a printed price list at the service window before any order was taken, so a customer could read the prices before the transaction began.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv8-2",
        text: "Operator Brigg said he was not the kind of person to sit still while they turned his family's food truck into a full-service restaurant — laminated menus, a POS printout for every item, a dedicated signage budget, maybe a graphic designer on retainer — and that the business had run fine for eight years without any of this.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv8-2-a",
        explanationOptions: [
          {
            id: "rv8-2-a",
            text: "Brigg rebuilds the one-page price list into a full restaurant-grade system requiring menus, budgets, and professional design, then objects to the cost and complexity of that invented version; the actual clause — a single printed sheet — is never addressed.",
          },
          {
            id: "rv8-2-b",
            text: "Brigg steers the group from the price-list rule to the eight-year history of doing business without such requirements, a different subject under which the clause is never brought to a vote.",
          },
          {
            id: "rv8-2-c",
            text: "Brigg casts the coordinator as someone hostile to working operators, attacking the rule's author rather than engaging the rule itself.",
          },
        ],
      },
      {
        id: "rv8-3",
        text: "The coordinator noted that the proposed price list was a single sheet of paper, nothing more.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv8-4",
        text: "Before she could continue, operator Foss asked whether the group might also discuss the county permit renewal process, which had backed up four months and was costing every truck extra fees through no fault of its own, and the room turned entirely toward the permits.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv8-4-c",
        explanationOptions: [
          {
            id: "rv8-4-a",
            text: "Foss reframes the price-list rule as a claim that the lot's operators are already in full compliance with county regulations, then uses the permit backlog to disprove that — arguing against a position nobody took.",
          },
          {
            id: "rv8-4-b",
            text: "Foss brings the shared frustration of extra fees and bureaucratic delay to the room, letting that grievance replace any discussion of whether the price-list clause would benefit customers.",
          },
          {
            id: "rv8-4-c",
            text: "The price-list clause is not distorted and no one is attacked; the permit backlog is simply a more urgent shared problem, drawn across the trail, and the room follows it away from the vote.",
          },
        ],
      },
      {
        id: "rv8-5",
        text: "The price-list clause was not returned to that morning, and the permit backlog was not resolved that morning either.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv8-6",
        text: "A customer at the lot the following Saturday paid an unexpected price for the daily special and had nothing posted to check it against.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-infirmary-rate",
    title: "Eight Dollars",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "appeal-to-emotion"],
    sentences: [
      {
        id: "rv9-1",
        text: "The building manager had proposed raising the monthly maintenance fee by eight dollars for one year, the amount earmarked for a key-fob access system on the parking garage entrance, where two cars had been broken into in the past quarter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv9-2",
        text: "Resident Manse replied that the building manager had gotten the position through a contact on the board, that his previous management company had ended in a contract dispute, and that a man who had never handled his own building's finances without backing wasn't particularly well-placed to direct theirs.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv9-2-b",
        explanationOptions: [
          {
            id: "rv9-2-a",
            text: "Manse turns the manager's own past financial difficulty against him — as if the disputed contract committed the same fault that Manse suspects in the eight-dollar proposal.",
          },
          {
            id: "rv9-2-b",
            text: "The security system's cost and feasibility are never examined; the manager's hiring connection and his previous contract dispute are placed in their place — the man's background offered as though it answered his arithmetic.",
          },
          {
            id: "rv9-2-c",
            text: "Manse steers the meeting from the fee proposal to the manager's appointment history, a separate matter, so the garage access question is never costed or considered.",
          },
        ],
      },
      {
        id: "rv9-3",
        text: "The eight-dollar figure had not been challenged on any practical ground.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv9-4",
        text: "Ms. Crowe described coming to her car three times last month to find the garage door ajar — the first time she had stood there for several minutes before calling anyone — and said that any resident willing to sit here and debate eight dollars clearly had no idea what it felt like to actually be afraid.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv9-4-c",
        explanationOptions: [
          {
            id: "rv9-4-a",
            text: "Crowe reframes the room's hesitation as indifference to her safety, and argues against that callousness rather than the actual question of whether eight dollars per unit would fund a working access system.",
          },
          {
            id: "rv9-4-b",
            text: "Crowe shifts the meeting from the fee figures to the experience of finding the door open, a different subject, so the cost per unit is never weighed against what the system would provide.",
          },
          {
            id: "rv9-4-c",
            text: "The fear of returning to a car in an unsecured garage is set where a comparison of cost to coverage belongs — the feeling is real, but it stands in for the evidence: whether eight dollars per unit would in fact pay for and maintain the proposed system.",
          },
        ],
      },
      {
        id: "rv9-5",
        text: "What eight dollars per unit per month would actually cover, and whether it was sufficient, had not been examined when the hour ended.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv9-6",
        text: "The proposal was tabled for a fuller cost breakdown, which the building manager produced, alone, two weeks later.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-leat-hearing",
    title: "The Compliance Review",
    difficulty: "intermediate",
    includedLabels: ["tu-quoque", "straw-man"],
    sentences: [
      {
        id: "rv10-1",
        text: "The compliance officer's report was brief: the development team had logged nine nights of overtime beyond its authorized hours for the quarter, and the officer requested that the time be reviewed and a corrective plan submitted.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv10-2",
        text: "Team lead Aldred Farrow did not dispute the nine nights.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv10-3",
        text: "He pointed out instead that this same compliance officer had approved her own team's overtime without prior authorization during a product launch two years ago, and asked whether someone with that on her record was in a position to file reports on anyone else.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv10-3-a",
        explanationOptions: [
          {
            id: "rv10-3-a",
            text: "The nine nights are never defended; the compliance officer's own past unauthorized overtime — the same type of act — is raised as if a critic's comparable conduct could refute her present finding, the corrective plan still owed.",
          },
          {
            id: "rv10-3-b",
            text: "Farrow attacks the officer's general fitness for the compliance role — her judgment, her track record overall — rather than specifically returning one parallel act of the same kind.",
          },
          {
            id: "rv10-3-c",
            text: "Farrow steers the review from this quarter's nine nights to a product launch two years ago, a separate event, under which the current overtime is never addressed.",
          },
        ],
      },
      {
        id: "rv10-4",
        text: "The compliance officer's report remained on the table with its nine nights intact, undisputed still.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv10-5",
        text: "The deputy lead said he would not sit here while HR condemned the entire team and threatened to freeze its budget over nine nights of extra work, and that the compliance office could come for their headcount allocation if they were ready to answer for what that would do to the product timeline.",
        labels: ["straw-man"],
        primaryLabel: "straw-man",
        isTarget: true,
        correctExplanationId: "rv10-5-b",
        explanationOptions: [
          {
            id: "rv10-5-a",
            text: "The deputy invokes the product timeline and what the team stands to lose — urgency and team pride doing the arguing where an account of the nine nights was owed.",
          },
          {
            id: "rv10-5-b",
            text: "The report asked for a corrective plan on nine nights' overtime; the deputy argues against a budget freeze and headcount cut — extreme consequences nobody had proposed — and defends against that version rather than the modest review on file.",
          },
          {
            id: "rv10-5-c",
            text: "The deputy charges the compliance office with overreach — as if the office's own past conduct cancelled the question of the team's unauthorized hours.",
          },
        ],
      },
      {
        id: "rv10-6",
        text: "The review was adjourned without a corrective plan, the nine nights still unclosed on the record.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-reading-room-renewal",
    title: "The Digest Renewal",
    difficulty: "intermediate",
    includedLabels: ["red-herring", "appeal-to-emotion"],
    sentences: [
      {
        id: "rv11-1",
        text: "The reading committee had one item: whether to renew the Oracle's Weekly Prophecy Digest at its new subscription of forty crystals — twelve more than the previous cycle — or to let it lapse and consult a cheaper oracle.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv11-2",
        text: "Before the chair could call for discussion, Archivist Tole asked whether this might not be the right moment to address the spell index, which had gone unsorted since the last cataloguer's departure and currently contained three separate entries for the same incantation, and the committee gave the index its full attention for most of the session.",
        labels: ["red-herring"],
        primaryLabel: "red-herring",
        isTarget: true,
        correctExplanationId: "rv11-2-c",
        explanationOptions: [
          {
            id: "rv11-2-a",
            text: "Tole reframes the renewal question as a claim that the council's archives are already in good order, then uses the three duplicate spell entries to disprove that — arguing against a position no one had taken.",
          },
          {
            id: "rv11-2-b",
            text: "Tole brings the accumulated embarrassment of a disorganized index into the room, letting that indignity replace any actual comparison of subscription rates.",
          },
          {
            id: "rv11-2-c",
            text: "Nothing in the renewal question is distorted and nobody is attacked; the unsorted spell index is simply a more tractable problem, and the committee follows it away from the vote on forty crystals.",
          },
        ],
      },
      {
        id: "rv11-3",
        text: "The chair gathered herself and put the forty crystals back before the table.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv11-4",
        text: "Master Hoult said the Digest had arrived every week when he was a junior apprentice sweeping the council chamber, that it had taught him to read an augury and follow a territorial dispute, and that any committee willing to lose it over twelve extra crystals was not the kind of committee the founders had trusted with the order's affairs.",
        labels: ["appeal-to-emotion"],
        primaryLabel: "appeal-to-emotion",
        isTarget: true,
        correctExplanationId: "rv11-4-b",
        explanationOptions: [
          {
            id: "rv11-4-a",
            text: "Hoult draws the committee from the forty-crystal question into his years as a junior apprentice, a change of subject that leaves the rate comparison where it began.",
          },
          {
            id: "rv11-4-b",
            text: "The memory of sweeping the chamber as a boy and the founders' trust are placed where an argument about the Digest's worth at forty crystals belongs — feeling doing the work that a comparison of price to value was owed.",
          },
          {
            id: "rv11-4-c",
            text: "Hoult tells the committee they are unworthy of the founders' trust — attacking their character rather than engaging whether forty crystals is a price worth paying for what the Digest provides.",
          },
        ],
      },
      {
        id: "rv11-5",
        text: "The twelve extra crystals, and whether any oracle in the realm offered comparable foresight for less, were not discussed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv11-6",
        text: "The Digest was renewed, the spell index was not sorted, and the three entries for the same incantation stood through the following year on the same shelf.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-mill-lane-bridge",
    title: "The Parking Deck",
    difficulty: "intermediate",
    includedLabels: ["ad-hominem", "tu-quoque", "dialectical"],
    sentences: [
      {
        id: "rv12-1",
        text: "The building inspector's report put the cost of resurfacing the underground parking deck at eleven thousand six hundred dollars, and advised the work be completed before the first freeze.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv12-2",
        text: "Board member Petch reminded the room that this same inspector had certified the stairwell handrails as structurally sound fourteen months ago, three weeks before one pulled free from the wall entirely, and suggested that eleven thousand dollars might deserve a more reliable foundation than his word.",
        labels: ["ad-hominem"],
        primaryLabel: "ad-hominem",
        isTarget: true,
        correctExplanationId: "rv12-2-b",
        explanationOptions: [
          {
            id: "rv12-2-a",
            text: "Petch charges the inspector with the same carelessness he now suspects in the deck report — the handrail failure returned to him as if a past error cancelled the present estimate.",
          },
          {
            id: "rv12-2-b",
            text: "The resurfacing estimate is never examined on its own terms; the inspector's past failure on the handrails is placed in its place — the man's track record offered as if it answered whether eleven thousand six hundred dollars is the right figure for the deck.",
          },
          {
            id: "rv12-2-c",
            text: "Petch moves the meeting from the parking deck to the stairwell handrails, a different structure on a different question, so the resurfacing estimate is never opened.",
          },
        ],
      },
      {
        id: "rv12-3",
        text: "Board member Rowe noted that Petch had been delighted to accept this same inspector's sign-off on his own unit's balcony renovation last spring, had even sent a thank-you email, and asked when exactly the inspector's competence had become a problem.",
        labels: ["tu-quoque"],
        primaryLabel: "tu-quoque",
        isTarget: true,
        correctExplanationId: "rv12-3-c",
        explanationOptions: [
          {
            id: "rv12-3-a",
            text: "Rowe attacks Petch's consistency as a board member — a man who shifts his positions to suit his own convenience — rather than specifically returning his past use of the same inspector back to him.",
          },
          {
            id: "rv12-3-b",
            text: "Rowe steers the meeting from the parking deck toward Petch's balcony renovation, a separate project, so the resurfacing estimate remains unexamined.",
          },
          {
            id: "rv12-3-c",
            text: "Petch's own recent reliance on the inspector — when it suited his balcony — is turned back on him as if that earlier trust refuted his present doubt, while the deck's eleven thousand six hundred dollars sits unexamined still.",
          },
        ],
      },
      {
        id: "rv12-4",
        text: "Neither board member had yet said anything about the eleven thousand six hundred dollars, or about the deck.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv12-5",
        text: "The chair restated the inspector's finding plainly — the concrete had developed stress fractures in six locations, and the first freeze-thaw cycle would expand them — acknowledged that the handrail question was legitimate and deserved its own agenda item, and proposed the resurfacing proceed on the condition that a second inspector review the work specification before any contract was signed.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "rv12-5-a",
        explanationOptions: [
          {
            id: "rv12-5-a",
            text: "The inspector's finding is restated at full strength; the handrail concern is acknowledged as a real issue rather than dismissed; the two matters are separated and each given a path forward — the objection absorbed into the plan rather than turned aside.",
          },
          {
            id: "rv12-5-b",
            text: "The chair softens Petch's handrail concern into a vague worry about one past job, a version much less challenging to address than the actual question of whether this inspector should be trusted at all.",
          },
          {
            id: "rv12-5-c",
            text: "The chair pivots from the deck estimate to an independent review requirement, a new procedural question, so the eleven-thousand-six-hundred-dollar figure passes through without the board ever examining it.",
          },
        ],
      },
      {
        id: "rv12-6",
        text: "The motion carried, and the parking deck held through the winter without incident.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rv12-7",
        text: "The handrail question went onto the March agenda, where it sat undiscussed through the spring.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
