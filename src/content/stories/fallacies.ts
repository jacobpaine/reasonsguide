import type { PracticeStory } from "@/domain/types";

/**
 * Early-fallacy stories for labels unlocked by the "When reasoning breaks"
 * lesson: hasty generalization, post hoc, and anecdotal evidence.
 * The fallacious sentences should read naturally — the way people actually
 * talk — rather than as cartoon mistakes.
 */

export const fallacyStories: readonly PracticeStory[] = [
  {
    id: "story-new-doctor",
    title: "Conference Season",
    difficulty: "beginner",
    includedLabels: ["hasty-generalization", "post-hoc"],
    sentences: [
      {
        id: "nd-1",
        text: "The spring parent-teacher conferences ran fifteen minutes per slot and produced, among other outcomes, a reliable cross-section of parental opinions.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nd-2",
        text: "Renata sat through one meeting with a math teacher who stumbled over the grading rubric, and by the parking lot she had decided that none of the teachers at the school had any business standing in front of children.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "nd-2-a",
        explanationOptions: [
          {
            id: "nd-2-a",
            text: "One stumbling meeting with one teacher becomes a verdict on the entire staff — a generalization built on a single case.",
          },
          {
            id: "nd-2-b",
            text: "Renata blames the confused rubric on the new conference format because the format changed this year.",
          },
          {
            id: "nd-2-c",
            text: "Renata lets her one evening's impression outweigh the principal's satisfaction survey of hundreds of parents.",
          },
        ],
      },
      {
        id: "nd-3",
        text: "Her daughter's other teachers had sent detailed weekly updates all term, and the district's parent-satisfaction scores put the school in the ninety-second percentile.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "nd-4",
        text: "Her neighbor Leo had noticed that his son grew quieter the same week the school launched a new phone-free policy, and Leo told every carpool that the phone ban had done it — though the same week the boy had also been cut from the soccer team.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "nd-4-b",
        explanationOptions: [
          {
            id: "nd-4-b",
            text: "The quietness followed the phone ban in time; the roster cut — arriving the same week and a more obvious cause — goes entirely unexamined.",
          },
          {
            id: "nd-4-c",
            text: "Leo concludes from one son's withdrawn week that phone bans harm every student's wellbeing.",
          },
          {
            id: "nd-4-d",
            text: "Leo trusts his son's single week of behavior over the counselor's term-long notes.",
          },
        ],
      },
      {
        id: "nd-5",
        text: "The school counselor's notes from that month pointed to the roster cut; Leo's timeline pointed to the policy; the two explanations never really competed, because only one got told at pickup.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-lucky-boots",
    title: "The Cold Plunge Episode",
    difficulty: "beginner",
    includedLabels: ["post-hoc", "anecdotal-evidence"],
    sentences: [
      {
        id: "lb-1",
        text: "The wellness podcast had nine thousand subscribers and a host who never met a theory he couldn't road-test on himself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lb-2",
        text: "Marcus launched his month of daily cold plunges on a Monday, threw his back out on Wednesday, and told his listeners in Thursday's episode that the plunges had seized his spine — the cold water was the cause and that was that.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "lb-2-a",
        explanationOptions: [
          {
            id: "lb-2-a",
            text: "The back strain came after the cold plunges began, and that sequence alone is made to carry the whole causal claim — with the sofa Marcus had moved alone on Tuesday evening entirely ignored.",
          },
          {
            id: "lb-2-b",
            text: "Marcus generalizes from one bad week to a conclusion about cold plunges for everyone who tries them.",
          },
          {
            id: "lb-2-c",
            text: "Marcus lets his own dramatic story of injury override the sports medicine literature on cold immersion.",
          },
        ],
      },
      {
        id: "lb-3",
        text: "His physiotherapist noted that Marcus had also moved a sectional sofa on Tuesday evening, mostly by himself, mostly by bending wrong.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lb-4",
        text: "Three separate reviews of sports medicine literature found no mechanism by which cold-water immersion at his duration and temperature could produce a lumbar strain.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "lb-5",
        text: "But Priya had heard Marcus describe the Wednesday morning in genuine detail over four episodes, and against the physiotherapist's explanation and the literature, the story was what she filed away.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "lb-5-b",
        explanationOptions: [
          {
            id: "lb-5-a",
            text: "Priya assumes that whatever harmed Marcus must harm every listener who takes cold plunges.",
          },
          {
            id: "lb-5-b",
            text: "One vividly told episode of pain outweighs both expert explanation and published literature in Priya's judgment — the story's vividness standing in for evidence.",
          },
          {
            id: "lb-5-c",
            text: "Priya reasons that the cold plunges caused Marcus's injury because the plunges came before the injury.",
          },
        ],
      },
      {
        id: "lb-6",
        text: "She quit the plunges, threw her own back out moving boxes, and left a five-star review on the episode anyway.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-market-stall",
    title: "Four Hundred and Thirty Reviews",
    difficulty: "beginner",
    includedLabels: ["anecdotal-evidence", "hasty-generalization"],
    sentences: [
      {
        id: "ms-1",
        text: "The restaurant had been open eight years, had four hundred and thirty reviews, and held a steady four-point-six average.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ms-2",
        text: "On a Saturday night, one diner posted a thread about cold soup and an inattentive server; by Sunday morning it had more engagement than anything the restaurant had ever shared itself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ms-3",
        text: "Regular customers who had eaten there dozens of times kept scrolling past the ratings summary, but one stranger's bad Saturday stopped them — that single evening carrying more weight than four hundred measured visits.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "ms-3-a",
        explanationOptions: [
          {
            id: "ms-3-a",
            text: "One memorable bad Saturday is given more weight than four hundred measured visits — a single story beating the data.",
          },
          {
            id: "ms-3-b",
            text: "The thread assumes the cold soup caused the inattentive service, treating one problem as the cause of the other.",
          },
          {
            id: "ms-3-c",
            text: "The regulars conclude from one bad thread that every visit to the restaurant will be disappointing.",
          },
        ],
      },
      {
        id: "ms-4",
        text: "A food blogger who had never visited read the thread, found two commenters mentioning slow service, and published a piece naming the restaurant a symptom of everything broken in neighborhood dining across the city.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "ms-4-c",
        explanationOptions: [
          {
            id: "ms-4-b",
            text: "The blogger lets two commenters' vivid complaints outweigh the restaurant's four-hundred-review average.",
          },
          {
            id: "ms-4-c",
            text: "Two comments in a single thread become a verdict on neighborhood dining across an entire city — a generalization wildly outrunning its evidence.",
          },
          {
            id: "ms-4-d",
            text: "The blogger reasons that the cold soup caused the slow service, treating one as the cause of the other.",
          },
        ],
      },
      {
        id: "ms-5",
        text: "The owner posted a note explaining that the server had called in sick that evening and a first-time fill-in had covered the shift.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ms-6",
        text: "The blogger issued no correction; the original commenter went back, had a fine meal, and quietly updated the post to four stars.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-first-impressions",
    title: "Patch Day",
    difficulty: "beginner",
    includedLabels: ["hasty-generalization"],
    sentences: [
      {
        id: "ff-1",
        text: "Patch 2.4 dropped on a Tuesday with a lengthy change log and a developer note promising balance fixes, and the forum threads opened before the servers even came back up.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff-2",
        text: "Osei had played two ranked matches since the update, lost both, and was already typing that the patch had ruined every competitive mode in the game and made skill-based matchmaking completely unplayable.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "ff-2-a",
        explanationOptions: [
          {
            id: "ff-2-a",
            text: "Two losses in two matches become a verdict on every competitive mode in the game — a sweeping conclusion from a pair of cases.",
          },
          {
            id: "ff-2-b",
            text: "Osei blames the losses on the patch because the patch arrived before the losses, mistaking sequence for cause.",
          },
          {
            id: "ff-2-c",
            text: "Osei lets his own two-match experience outweigh the win-rate data across thousands of ranked games.",
          },
        ],
      },
      {
        id: "ff-3",
        text: "His teammate Dani had also played two matches since the patch, won both, and was in a different thread describing how smooth the updated hitbox detection felt.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff-4",
        text: "A streamer with a large following found three bugs in two hours of play and announced live that the QA team had clearly tested nothing, the entire pipeline was broken, and the studio could not be trusted to ship another update.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "ff-4-c",
        explanationOptions: [
          {
            id: "ff-4-b",
            text: "The streamer concludes that the patch release itself caused the bugs to appear, mistaking timing for causation.",
          },
          {
            id: "ff-4-c",
            text: "Three bugs in two hours become a verdict on the studio's entire QA pipeline — a generalization from a small and unlucky sample.",
          },
          {
            id: "ff-4-d",
            text: "The streamer treats a single session's bugs as more reliable evidence than the studio's internal testing logs.",
          },
        ],
      },
      {
        id: "ff-5",
        text: "The studio's patch notes listed forty-seven issues caught in internal testing, and the three visible bugs had already been logged and queued for a hotfix.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff-6",
        text: "The hotfix landed Thursday; the streamer played it for six hours and said nothing further about the QA team.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-weathervane",
    title: "The Apprentice's Log",
    difficulty: "beginner",
    includedLabels: ["post-hoc"],
    sentences: [
      {
        id: "wv-1",
        text: "The apprentice had been keeping a spell log for three months and was beginning to form theories, not all of them sound.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wv-2",
        text: "She burned a sprig of dried rosemary before one afternoon's casting, the spell went cleanly on the first try, and she wrote in the log that the rosemary had been responsible — though she had also, for the first time, used the master's properly calibrated mixing bowl instead of her own chipped one.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "wv-2-a",
        explanationOptions: [
          {
            id: "wv-2-a",
            text: "The clean spell followed the rosemary in time; the sequence alone carries the causal claim, with the new calibrated bowl — a far more plausible explanation — entirely ignored.",
          },
          {
            id: "wv-2-b",
            text: "The apprentice generalizes from one successful spell to a rule that rosemary always ensures success.",
          },
          {
            id: "wv-2-c",
            text: "The apprentice lets her single logged observation outweigh the master's full records of the same session.",
          },
        ],
      },
      {
        id: "wv-3",
        text: "The master reviewed the log and added a marginal note: 'also: new bowl. also: fourth attempt this week, muscle memory improving.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wv-4",
        text: "The following month the apprentice started waking before sunrise to meditate, and when her accuracy with directional spells improved noticeably she marked 'sunrise meditation: confirmed cause' — though that same month she had also finished the third workbook, which addressed directional casting specifically.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "wv-4-c",
        explanationOptions: [
          {
            id: "wv-4-b",
            text: "The apprentice generalizes from one month of improvement to a permanent rule about sunrise meditation.",
          },
          {
            id: "wv-4-c",
            text: "Again the timeline does all the work: meditation began, accuracy improved, and 'then' is dressed up as 'because' — the completed workbook, which targeted exactly this skill, goes unexamined.",
          },
          {
            id: "wv-4-d",
            text: "The apprentice trusts her own single month of observation over the master's longer record of her skill development.",
          },
        ],
      },
      {
        id: "wv-5",
        text: "The master's second marginal note read: 'workbook three. also: you are simply getting better.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wv-6",
        text: "The apprentice kept the rosemary anyway, because it smelled quite nice and superstition, unlike the log, cost nothing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-silvas-cure",
    title: "Dev from Accounting",
    difficulty: "beginner",
    includedLabels: ["anecdotal-evidence"],
    sentences: [
      {
        id: "cs-1",
        text: "When the flu swept through the open-plan office in January, remedies spread faster than the virus itself.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cs-2",
        text: "The pharmacist had left a stack of information sheets by the register — trial numbers, confidence intervals, the honest limits of what the supplements could do — but what moved the inventory was the story of Dev from accounting, who had started zinc-and-ginger shots on a Monday and been back at his desk by Thursday, and against that one gleaming recovery the printed sheets never stood a chance.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "cs-2-a",
        explanationOptions: [
          {
            id: "cs-2-a",
            text: "A single vivid recovery outweighs the trial data on the counter — one story given the authority of many measured cases.",
          },
          {
            id: "cs-2-b",
            text: "The office assumes the zinc shot caused the recovery simply because Dev started drinking it before he got better.",
          },
          {
            id: "cs-2-c",
            text: "The office concludes from Dev's case that every flu in the building will resolve in four days with the shot.",
          },
        ],
      },
      {
        id: "cs-3",
        text: "The doctor's notes from that season told a plainer arithmetic: most flu cases resolved in five to seven days regardless of supplementation, and a few ran to ten days regardless as well.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cs-4",
        text: "But Margot had once spent four hours in the urgent care waiting room, two years ago, and her account of those plastic chairs and the flickering fluorescent light kept half the floor from seeking medical care long after the clinic had installed a new triage system and cut wait times to under forty minutes.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "cs-4-c",
        explanationOptions: [
          {
            id: "cs-4-b",
            text: "Margot reasons that the plastic chairs caused her long wait, mistaking co-presence for causation.",
          },
          {
            id: "cs-4-c",
            text: "One vivid four-hour afternoon from two years ago outweighs the clinic's current measured wait times — vividness standing in for evidence.",
          },
          {
            id: "cs-4-d",
            text: "Margot concludes from one bad visit that every urgent care everywhere keeps patients waiting four hours.",
          },
        ],
      },
      {
        id: "cs-5",
        text: "The pharmacist moved the information sheets next to the zinc shots and said nothing, having learned not to compete with a good story.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cs-6",
        text: "The flu passed, as flu does, taking the credit arguments with it until next January.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-council-debate",
    title: "The Platform Migration",
    difficulty: "beginner",
    includedLabels: ["hasty-generalization", "post-hoc", "anecdotal-evidence"],
    sentences: [
      {
        id: "cd-1",
        text: "The question before the product team was whether to migrate their weekly all-hands from the current video platform to the new one the rest of the company had already adopted.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cd-2",
        text: "Dev had joined two calls on the new platform, experienced audio lag on both, and now assured the room that the system was technically deficient across the board and would never work reliably for a team their size.",
        labels: ["hasty-generalization"],
        primaryLabel: "hasty-generalization",
        isTarget: true,
        correctExplanationId: "cd-2-a",
        explanationOptions: [
          {
            id: "cd-2-a",
            text: "Two laggy calls on two mornings become a verdict on the system's performance across the board — a sweeping conclusion from a couple of cases.",
          },
          {
            id: "cd-2-b",
            text: "Dev credits the audio lag to the migration itself because the migration happened before the calls.",
          },
          {
            id: "cd-2-c",
            text: "Dev sets his two calls against the IT department's three-month usage data and lets his own experience win.",
          },
        ],
      },
      {
        id: "cd-3",
        text: "The IT department's three-month usage data showed the new platform had outperformed the old one in call quality for ninety-two percent of sessions across every other team.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cd-4",
        text: "The project manager noted that meeting satisfaction scores had jumped the month after they switched to standing agendas, and called it proof that structured agendas were responsible — though the same month they had also cut the all-hands from ninety minutes to forty-five.",
        labels: ["post-hoc"],
        primaryLabel: "post-hoc",
        isTarget: true,
        correctExplanationId: "cd-4-c",
        explanationOptions: [
          {
            id: "cd-4-b",
            text: "The project manager generalizes from one month's satisfaction jump to a permanent improvement in meeting quality.",
          },
          {
            id: "cd-4-c",
            text: "The satisfaction jump followed the structured agendas, so the agendas get the credit — while the meeting-length cut, an obvious rival cause from the same month, goes unexamined.",
          },
          {
            id: "cd-4-d",
            text: "The project manager lets one team member's story about a good agenda outweigh the broader satisfaction figures.",
          },
        ],
      },
      {
        id: "cd-5",
        text: "Then a senior engineer described, at length and with feeling, a catastrophic demo on an earlier version of the platform three years ago — the screen share had frozen mid-presentation — and the room, quite moved, weighed this single episode against three months of performance data and found the data wanting.",
        labels: ["anecdotal-evidence"],
        primaryLabel: "anecdotal-evidence",
        isTarget: true,
        correctExplanationId: "cd-5-a",
        explanationOptions: [
          {
            id: "cd-5-a",
            text: "One well-told catastrophic demo from three years ago is allowed to outweigh three months of systematic performance data — the story beating the numbers.",
          },
          {
            id: "cd-5-b",
            text: "The engineer concludes that frozen screen shares always happen on this platform and always will.",
          },
          {
            id: "cd-5-c",
            text: "The engineer blames the screen freeze on the presentation itself because the share started right before the freeze.",
          },
        ],
      },
      {
        id: "cd-6",
        text: "The IT lead mentioned, quietly, that the platform had been rebuilt entirely since then and shared nothing but a name with the version from three years ago.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cd-7",
        text: "The team voted to pilot the new platform for a month — except for the senior engineer, who dialed in by phone, just in case.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
