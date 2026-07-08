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
    title: "The Garden List",
    difficulty: "intermediate",
    includedLabels: ["moral"],
    sentences: [
      {
        id: "mo-1",
        text: "The Riverside Community Garden had been running for eight years — through three volunteer coordinators, two contentious HOA votes, and one memorable composting incident.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mo-2",
        text: "The city's letter cut the plot allotment by a third and suggested, quietly, letting some families on the waitlist lapse over winter; but Nora had given her word to every family the day she took over, and a promise made to people who'd waited two seasons does not shrink with the city's budget — the plots would be held.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "mo-2-a",
        explanationOptions: [
          {
            id: "mo-2-a",
            text: "The word given to the families stands as a duty, and the conclusion — plots held — follows from that obligation outweighing the budget pressure.",
          },
          {
            id: "mo-2-b",
            text: "It ranks the full allotment against the reduced number along shared criteria of fairness and cost, concluding the full number the better arrangement.",
          },
          {
            id: "mo-2-c",
            text: "It holds the plots open as Nora's most effective means of keeping the families engaged through winter.",
          },
        ],
      },
      {
        id: "mo-3",
        text: "She emailed the parks department in the careful tone of someone who had attended too many neighborhood meetings to be surprised by much.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mo-4",
        text: "The department's reply offered a deal — full restoration of all thirty plots if she would flag which families hadn't visited since spring, so they could clear spots for more active households — and she refused it, because a waitlist kept in trust for the community cannot be turned into a tool for deciding who belongs there.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "mo-4-c",
        explanationOptions: [
          {
            id: "mo-4-a",
            text: "It weighs the plot restoration against the burden of flagging families, adds the community's likely resentment, and lets the balance of reasons carry the refusal.",
          },
          {
            id: "mo-4-b",
            text: "It rejects the deal because flagging inactive families would be a poor means to the department's goal of filling plots efficiently.",
          },
          {
            id: "mo-4-c",
            text: "The refusal rests on a principle about what the waitlist is for — serving community trust, not sorting households — and derives what ought never be done from it, whatever the restored plots are worth.",
          },
        ],
      },
      {
        id: "mo-5",
        text: "The plot count stayed cut, and the neighborhood, hearing what had happened, organized a plot-sharing arrangement without being asked.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mo-6",
        text: "By October the garden had more volunteers than plots, which created its own small problems.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-three-quays",
    title: "The Third Option",
    difficulty: "intermediate",
    includedLabels: ["comparative"],
    sentences: [
      {
        id: "cq-1",
        text: "The regional qualifier came up fast, and the robotics club met in the computer lab to decide which room to reserve for their practice scrimmage.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cq-2",
        text: "Measured against what a scrimmage venue needs — table space for three bots, proximity to the equipment closet, and reliable wifi — the gymnasium beat the cafeteria on every count and gave up nothing in return.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "cq-2-a",
        explanationOptions: [
          {
            id: "cq-2-a",
            text: "Three named criteria — table space, equipment access, wifi — are laid across both rooms, and the conclusion is a ranking: gym better than cafeteria on every count.",
          },
          {
            id: "cq-2-b",
            text: "Independent reasons for and against each room are gathered and weighed, no single one decisive, until their combined lean favors the gymnasium.",
          },
          {
            id: "cq-2-c",
            text: "It argues the gymnasium is owed the scrimmage by tradition, deriving what the club ought to do from that claim.",
          },
        ],
      },
      {
        id: "cq-3",
        text: "That left the library annex, which everyone had been politely not suggesting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cq-4",
        text: "On space and wifi the library annex matched the gym table for table; on the walk to the equipment closet it was worse by two hallways and a locked stairwell, and bots do not improve when carried at speed — so of the three, the gym stood first, the annex second, and the cafeteria a distant third.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "cq-4-b",
        explanationOptions: [
          {
            id: "cq-4-a",
            text: "It piles up separate, unlike pros and cons for the library annex — space, the stairwell, bot handling — and lets their combined weight, rather than any shared measure, settle a verdict.",
          },
          {
            id: "cq-4-b",
            text: "The same yardsticks are applied again — matched on space and wifi, worse on the equipment walk — and the sentence ends where comparison ends, in an ordering of the three.",
          },
          {
            id: "cq-4-c",
            text: "It picks the gym as the option that best serves the goal of keeping the bots intact, choosing an action as a means to that end.",
          },
        ],
      },
      {
        id: "cq-5",
        text: "The vote took two minutes; the argument about who forgot to book it in advance took considerably longer.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cq-6",
        text: "By Saturday the gym smelled richly of solder fumes and nervous ambition.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-winter-road",
    title: "The Last Session",
    difficulty: "intermediate",
    includedLabels: ["conductive"],
    sentences: [
      {
        id: "cu-1",
        text: "The Tuesday game group had been meeting for three years, and each spring someone suggested they might be close to wrapping up the campaign.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cu-2",
        text: "Running one more arc would let the players who'd invested the most see their characters' storylines land; against that stood the fact that the winning condition had technically passed, attendance had dropped from eight to five, and nobody had updated the shared notes document in two months — none of it settled the matter alone, but weighed together the reasons leaned, quietly, toward ending it.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "cu-2-c",
        explanationOptions: [
          {
            id: "cu-2-c",
            text: "Unfinished storylines, the passed winning condition, falling attendance, neglected notes — independent reasons on both sides, none decisive, with the conclusion carried by how they lean together.",
          },
          {
            id: "cu-2-d",
            text: "It ranks continuing against ending along the shared criteria of player investment and attendance and concludes ending the better course.",
          },
          {
            id: "cu-2-e",
            text: "It derives the group's obligation to end the campaign from its duty to respect the rules they agreed to at the start.",
          },
        ],
      },
      {
        id: "cu-3",
        text: "Janelle, who had been playing the group's cleric since the very first session and owned more dice than anyone, asked what was supposed to happen to the unfinished subplot about the missing heir.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cu-4",
        text: "A single wrap-up session would cost them one Tuesday evening, could land the missing-heir storyline with whatever dignity remained, and answered Janelle's concern; it would still leave two other subplots unresolved, and someone would have to write a summary for the player who'd moved to Denver — but the three reasons for it, taken with the two against, came down clearly enough on its side.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "cu-4-a",
        explanationOptions: [
          {
            id: "cu-4-a",
            text: "Three considerations for the wrap-up session and two against are counted as separate weights, and the conclusion rests on their combined balance rather than on any one of them.",
          },
          {
            id: "cu-4-b",
            text: "It measures the wrap-up session against running more arcs along the shared criteria of time cost and storyline completion, and ranks the wrap-up higher.",
          },
          {
            id: "cu-4-c",
            text: "It concludes the group ought to wrap up because it owes Janelle the resolution of her subplot, that obligation doing the work.",
          },
        ],
      },
      {
        id: "cu-5",
        text: "The vote carried with only the DM against, and he was outnumbered by everyone who had ever cared about what happened to the missing heir.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cu-6",
        text: "They met the following Tuesday, finished in two hours, and spent the third arguing about what they would play next.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-gleaners-field",
    title: "The Maker Space",
    difficulty: "intermediate",
    includedLabels: ["moral", "comparative"],
    sentences: [
      {
        id: "mk-1",
        text: "Every school year ended at Westbrook the same way: the last bell, the hallways cleared, and Mr. Osei's unofficial maker space still humming with half-finished projects.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mk-2",
        text: "The new vice-principal proposed reclaiming the room for storage at the start of next term, but students had been using that space for independent work for five years running, and a resource a school has implicitly offered its students for that long doesn't become the administration's to reassign without notice — the room ought to stay open through the year, as it always had.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "mk-2-b",
        explanationOptions: [
          {
            id: "mk-2-a",
            text: "It weighs the school's gain from having storage against the students' loss of the maker space and several smaller considerations, letting the balance fall to keeping it open.",
          },
          {
            id: "mk-2-b",
            text: "A five-year pattern of implicit use supplies the premise, and the ought — the room stays open — follows from that resource not being the vice-principal's to reassign without notice, whatever the storage situation.",
          },
          {
            id: "mk-2-c",
            text: "It keeps the maker space open as the vice-principal's most reliable means of maintaining student goodwill at the start of term.",
          },
        ],
      },
      {
        id: "mk-3",
        text: "The vice-principal, to her credit, actually visited during a session and counted twelve students working on six different projects.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mk-4",
        text: "Of the two rooms that might serve as storage instead, the old computer lab offered power outlets along every wall and enough bench space for everything that needed storing, while the converted supply closet was closer to the main office but lacked ventilation and could barely fit one cart; on what mattered to a storage room — capacity, access, and air — the computer lab came out better on two counts of three.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "mk-4-a",
        explanationOptions: [
          {
            id: "mk-4-a",
            text: "Three criteria any storage room needs are named — capacity, access, air — and both rooms are scored against them, ending in better and worse rather than in a decision.",
          },
          {
            id: "mk-4-b",
            text: "It argues the students are owed the better room as a matter of fairness, deriving the outcome from what they've been implicitly promised.",
          },
          {
            id: "mk-4-c",
            text: "Separate, unlike reasons about each room — the ventilation problem, the crowding, the distance — are thrown into one scale, and the verdict is read off their combined weight.",
          },
        ],
      },
      {
        id: "mk-5",
        text: "So the storage went to the computer lab, and nobody's half-finished drone was disturbed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "mk-6",
        text: "The following year, the maker space got a proper sign on the door and a budget line, which at Westbrook counted as an official endorsement.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-harbor-clock",
    title: "The Sound System",
    difficulty: "intermediate",
    includedLabels: ["comparative", "conductive"],
    sentences: [
      {
        id: "kq-1",
        text: "The park amphitheater's sound system had been cutting out since the spring concert, which for a neighborhood that took its outdoor music festival seriously was not a minor complaint.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "kq-2",
        text: "Two proposals came in — the local shop would rewire and recalibrate the existing board, and a regional vendor would swap in a new system entirely — and judged on price, on years of service expected, and on keeping the original speaker setup, the local shop's bid stood better on the first and last and worse only on the second.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "kq-2-c",
        explanationOptions: [
          {
            id: "kq-2-a",
            text: "It assembles independent reasons favoring each vendor and lets their accumulated weight, rather than any common measure, tip toward the local shop.",
          },
          {
            id: "kq-2-b",
            text: "It reasons that the neighborhood ought to support local businesses as a matter of community obligation, that duty deciding between the bids.",
          },
          {
            id: "kq-2-c",
            text: "The two bids are set against three named criteria — price, years of service, the original speakers — and the sentence ends in a scoring of better and worse, not in a choice.",
          },
        ],
      },
      {
        id: "kq-3",
        text: "The committee chair, who distrusted anything that arrived on a pallet with instructions in three languages, said nothing and checked her phone.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "kq-4",
        text: "There were other things besides the bids worth considering: the neighborhood's attachment to the old speaker tone, the risk that a recalibrated board might cut out again at the summer festival, the guitarist who pointed out that one bad show had already cost two sponsors, and the thinness of the parks budget — none conclusive by itself, but weighed together they tipped, narrowly, toward the local shop.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "kq-4-b",
        explanationOptions: [
          {
            id: "kq-4-a",
            text: "It re-ranks the two bids along the same shared criteria as before — price, years, and the speakers — and finds the local shop still ahead on points.",
          },
          {
            id: "kq-4-b",
            text: "Attachment to the old tone, festival risk, the lost sponsors, the thin budget — considerations of different kinds, none decisive alone, weighed in one motion until the balance settles narrowly on the local shop.",
          },
          {
            id: "kq-4-c",
            text: "It selects the local shop's repair as the most effective means to the single goal of never missing another summer festival.",
          },
        ],
      },
      {
        id: "kq-5",
        text: "The shop sent two technicians, who worked the whole of a Saturday and left behind a laminated maintenance card that nobody touched.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "kq-6",
        text: "When the sound came up clean at the test run, half the committee checked it against the vendor's specs, and the other half just applauded.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-unclaimed-letters",
    title: "The Unread Queue",
    difficulty: "intermediate",
    includedLabels: ["conductive", "moral"],
    sentences: [
      {
        id: "um-1",
        text: "Behind the old backup server, the studio's migration team found a folder: eight hundred feedback emails, tagged and queued, unread since the year of the big relaunch.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "um-2",
        text: "Responding now might reopen complaints players had long since moved past, and half the accounts had been deleted; against that, some of the usernames still had active players in the community, the messages were easy to route and answer, and the goodwill of finally hearing back, once expected, would not quietly disappear — taken all together, the reasons tipped toward trying.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "um-2-a",
        explanationOptions: [
          {
            id: "um-2-a",
            text: "Old complaints and deleted accounts on one side; active players, easy routing, and unfulfilled goodwill on the other — unlike reasons weighed together, the verdict carried by where the whole collection tips.",
          },
          {
            id: "um-2-b",
            text: "It concludes the messages ought to go out because a sent message is owed its response, a duty that survives even a server migration.",
          },
          {
            id: "um-2-c",
            text: "It ranks responding against archiving along the shared criteria of cost and likely harm and finds responding the better option.",
          },
        ],
      },
      {
        id: "um-3",
        text: "The question that stopped the room was what to do with messages from accounts that had closed completely.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "um-4",
        text: "The community manager was firm: a message sent in trust belongs to the person who sent it, active account or not, and where no account remained the content ought to stay unread, however useful it might be as user research.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "um-4-c",
        explanationOptions: [
          {
            id: "um-4-a",
            text: "It balances the research value of reading against the oddness of reading private feedback and a handful of smaller reasons, finding the case against reading slightly heavier.",
          },
          {
            id: "um-4-b",
            text: "It keeps the messages unread as the studio's surest means of avoiding disputes with former players.",
          },
          {
            id: "um-4-c",
            text: "A sent message's belonging to the person who sent it is asserted as a right, and the ought — messages unread — is derived from it even against the admitted research value.",
          },
        ],
      },
      {
        id: "um-5",
        text: "Four hundred messages went out that month, some to players still on the same username they'd registered with during the original beta.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "um-6",
        text: "The rest live in a folder marked \"unread, as sent,\" which someone has since organized alphabetically for reasons no one can fully explain.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-flood-fund",
    title: "The Surplus",
    difficulty: "intermediate",
    includedLabels: ["moral", "comparative", "conductive"],
    sentences: [
      {
        id: "vv-1",
        text: "The fire took the rec center's gym floor and its sound system in the same October night, and by December the repair fund stood at a figure nobody had expected to reach.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vv-2",
        text: "A board member suggested the surplus might quietly seed the long-planned sensory garden; the treasurer replied that money raised for fire damage is held in trust for that loss and no other, and spending it otherwise ought to be off the table, however good the garden.",
        labels: ["moral"],
        primaryLabel: "moral",
        isTarget: true,
        correctExplanationId: "vv-2-a",
        explanationOptions: [
          {
            id: "vv-2-a",
            text: "The treasurer reasons from a trust — money raised for one specific loss — to what ought not be done with it, the principle holding firm even against the garden's admitted good.",
          },
          {
            id: "vv-2-b",
            text: "It weighs the garden's benefits against the awkwardness of redirected funds and several smaller reasons, and the balance falls against the board member.",
          },
          {
            id: "vv-2-c",
            text: "It ranks the sensory garden against the fire repairs along shared criteria of community benefit and finds the repairs the better use of the surplus.",
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
        text: "Set against each other on urgency, on how many people used them each week, and on what delay would cost, the gym floor outranked the sound system: programs could run in silence if needed, but classes in a borrowed space were losing attendance by the week.",
        labels: ["comparative"],
        primaryLabel: "comparative",
        isTarget: true,
        correctExplanationId: "vv-4-b",
        explanationOptions: [
          {
            id: "vv-4-a",
            text: "It argues the regular attendees are owed their gym first, a duty to them deciding between the two projects.",
          },
          {
            id: "vv-4-b",
            text: "Gym floor and sound system are measured on the same three counts — urgency, weekly use, the cost of delay — and the outcome is an ordering, the gym floor ranked above the sound system.",
          },
          {
            id: "vv-4-c",
            text: "It gathers unlike reasons on each side — the borrowed space, the silence — and lets their combined weight, not any shared measure, produce a verdict.",
          },
        ],
      },
      {
        id: "vv-5",
        text: "The sound team took it reasonably well and only brought up the borrowed space twice.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vv-6",
        text: "When the sound system's turn came, the supplier's trade-in offer pulled one way; against it stood another month of borrowed speakers, the director's warning about the aging wiring, and the community's impatience to just have working sound again — while for it counted the five-year warranty and the end, permanently, of static; no single factor carried the day, but the balance, argued through two long evenings, settled on the trade-in.",
        labels: ["conductive"],
        primaryLabel: "conductive",
        isTarget: true,
        correctExplanationId: "vv-6-c",
        explanationOptions: [
          {
            id: "vv-6-a",
            text: "It ranks the trade-in against buying new along the shared criteria of cost and durability and concludes the trade-in the better option on both.",
          },
          {
            id: "vv-6-b",
            text: "It derives a duty to install proper equipment from what the community was promised when the fundraiser launched.",
          },
          {
            id: "vv-6-c",
            text: "Trade-in deal, borrowed speakers, aging wiring, community impatience, a five-year warranty — considerations pulling both ways, and the passage says itself that no one factor carried it; the balance did.",
          },
        ],
      },
      {
        id: "vv-7",
        text: "The gym opened first to a full Tuesday lineup; the sound system followed six weeks later, and the fund closed with a pizza party that the treasurer logged as a community relations expense.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
