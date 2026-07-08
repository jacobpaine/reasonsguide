import type { PracticeStory } from "@/domain/types";

/**
 * Applied-reasoning stories covering bayesian, authority, and practical
 * reasoning. These three labels unlock together in the applied block of the
 * curriculum; pairings are spread so each label appears in several stories.
 */

export const appliedStories: readonly PracticeStory[] = [
  {
    id: "story-harrow-letter",
    title: "The Deploy",
    difficulty: "intermediate",
    includedLabels: ["bayesian"],
    sentences: [
      {
        id: "by-1",
        text: "The bug report came in at 2 AM with three screenshots and the subject line 'everything is broken,' which Priya, who had been on-call for six weeks straight, translated as 'something is broken.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "by-2",
        text: "Three clean deploys that week had set her expectation toward user misconfiguration — but the error trace showed a database timeout of the kind that follows a bad deploy far more reliably than it follows anything a user can do, and the comfortable expectation gave most of its ground.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "by-2-a",
        explanationOptions: [
          {
            id: "by-2-a",
            text: "A starting expectation built on three clean deploys is revised sharply by the database timeout — an error far more likely to follow a bad deploy than a user misconfiguration, so the belief shifts far.",
          },
          {
            id: "by-2-b",
            text: "It applies the three-clean-deploys track record as a straight probability estimate of whether this deploy succeeded.",
          },
          {
            id: "by-2-c",
            text: "It identifies the deploy as the best available explanation for the database timeout without asking how likely a deploy failure was to begin with.",
          },
        ],
      },
      {
        id: "by-3",
        text: "She messaged the on-call lead, who responded with a thumbs-up emoji, which the team's incident protocol described as an official acknowledgment and which could otherwise mean anything at all.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "by-4",
        text: "Server CPU and memory came back normal — neither elevated nor suppressed — a profile equally common after a good deploy and a bad one, and since the metrics separated the two stories no better than chance, she left her assessment exactly where the timeout had placed it.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "by-4-b",
        explanationOptions: [
          {
            id: "by-4-a",
            text: "It accepts the server metrics as reliable because the infrastructure team compiled them, and monitoring is their domain.",
          },
          {
            id: "by-4-b",
            text: "Evidence equally common after a good deploy and a bad one earns no update at all — the belief stays where the timeout left it, which is updating in proportion.",
          },
          {
            id: "by-4-c",
            text: "It traces how a bad deploy propagates connection errors through the database layer.",
          },
        ],
      },
      {
        id: "by-5",
        text: "She rolled back the deploy at 2:47 AM and watched the error rate drop to zero.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "by-6",
        text: "The incident report listed the root cause as 'deploy regression' and the action item as 'write more tests,' which was accurate in one case and optimistic in the other.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-pilots-word",
    title: "The Pothole Hearing",
    difficulty: "intermediate",
    includedLabels: ["authority"],
    sentences: [
      {
        id: "au-1",
        text: "The corner of Maple and Fifth had been a problem since spring, and the city council had spent four meetings describing it to each other without deciding anything.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "au-2",
        text: "The traffic engineer stood up — twelve years managing the city's arterial grid, the manual in her back pocket — and said the subbase had failed beyond patch repair; the council voted to repave within the hour, on the strength of that assessment.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "au-2-b",
        explanationOptions: [
          {
            id: "au-2-a",
            text: "It moves from the council's goal of safe streets to repaving as the surest available means.",
          },
          {
            id: "au-2-b",
            text: "The subbase claim is accepted on the engineer's word, and her twelve years managing this city's arterial grid put her squarely in the right domain.",
          },
          {
            id: "au-2-c",
            text: "It revises the council's confidence in the road's condition in proportion to the engineer's history of accurate assessments.",
          },
        ],
      },
      {
        id: "au-3",
        text: "The contractor in the back row made a note in the margin of his agenda and did not say anything, which was unusual.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "au-4",
        text: "For the cost estimate, the council used the number from the state DOT's regional pricing database — compiled by engineers whose only work was tracking pavement costs across the district — without commissioning their own study.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "au-4-a",
        explanationOptions: [
          {
            id: "au-4-a",
            text: "The estimate is accepted on the DOT database's authority; it is compiled by engineers whose sole job is tracking regional pavement costs — competence matched precisely to the question.",
          },
          {
            id: "au-4-b",
            text: "It converts the DOT's past accuracy into a rate and applies it to estimate the probability that this cost figure is correct.",
          },
          {
            id: "au-4-c",
            text: "It reasons from the goal of obtaining a cost figure to skipping the independent study as the fastest available means.",
          },
        ],
      },
      {
        id: "au-5",
        text: "The repaving began in September and finished two weeks ahead of schedule, which the contractor mentioned at every subsequent council meeting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "au-6",
        text: "The council moved on to a forty-five-minute discussion about the new parking meter color.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wool-by-friday",
    title: "Demo Day",
    difficulty: "intermediate",
    includedLabels: ["practical"],
    sentences: [
      {
        id: "pr-1",
        text: "Demo day was Friday; the prototype was still broken on Tuesday afternoon, and the team had stopped pretending otherwise.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pr-2",
        text: "What they needed was working software by Thursday night; the database migration, the UI overhaul, and the new payment flow were all half-done, but only the database was load-bearing for the demo, so they cut the other two and built nothing but that.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "pr-2-a",
        explanationOptions: [
          {
            id: "pr-2-a",
            text: "A fixed goal — working demo by Thursday — meets a survey of available tasks, and the only load-bearing one is chosen; the reasoning runs from what the demo requires to what to build.",
          },
          {
            id: "pr-2-b",
            text: "It explains how a broken database causes the UI and payment flow to fail, since both components depend on it.",
          },
          {
            id: "pr-2-c",
            text: "It revises down the probability of shipping all three features as the days remaining shrink.",
          },
        ],
      },
      {
        id: "pr-3",
        text: "The lead engineer ate a granola bar for dinner and did not tell anyone how she felt about it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pr-4",
        text: "The demo environment would cost three hundred dollars in cloud hosting for the week — money they did not really have — but the investors were the goal, not the invoice, and a flawless live demo was the shortest path between Tuesday and a term sheet, so they paid it.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "pr-4-a",
        explanationOptions: [
          {
            id: "pr-4-a",
            text: "The hosting cost is paid because the investor meeting is the governing end, and a flawless live demo is the best available means to it — the nearer expense yields to the larger goal.",
          },
          {
            id: "pr-4-b",
            text: "It raises the probability of getting a term sheet in proportion to each improvement made to the demo environment.",
          },
          {
            id: "pr-4-c",
            text: "It reasons that paying for reliable cloud hosting is what causes investors to offer term sheets.",
          },
        ],
      },
      {
        id: "pr-5",
        text: "Thursday at midnight the demo ran clean three times in a row and nobody spoke for a moment.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pr-6",
        text: "Friday's presentation lasted eleven minutes, and the follow-up email arrived before they had made it back to the parking garage.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-salt-well",
    title: "The Slowdown",
    difficulty: "intermediate",
    includedLabels: ["bayesian", "authority"],
    sentences: [
      {
        id: "ba-1",
        text: "API response times had been creeping upward for two weeks, which the product lead attributed to more users, which the backend engineer found suspiciously convenient.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ba-2",
        text: "She had started with the generous read — more users did slow things down, more often than not — but degradation spreading to endpoints the new user cohort never touched was the kind of pattern traffic load explained badly and a runaway database query explained well, and her initial generosity shrank by degrees.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "ba-2-c",
        explanationOptions: [
          {
            id: "ba-2-a",
            text: "It applies the known rate of slowdowns caused by user growth as a probability that growth explains this one.",
          },
          {
            id: "ba-2-b",
            text: "It accepts the product lead's growth theory because understanding user behavior is the product team's domain.",
          },
          {
            id: "ba-2-c",
            text: "A belief that started favorable to the growth theory loses ground in proportion to the evidence — slowdown patterns that a query problem produces readily but traffic rarely does — so confidence shifts by degrees.",
          },
        ],
      },
      {
        id: "ba-3",
        text: "She opened twelve browser tabs and drafted an email she did not send.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ba-4",
        text: "The database consultant they brought in had spent nine years optimizing query plans for systems at this scale, and when she pulled up the slow query log and named the missing index in under four minutes, the team marked the ticket resolved.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "ba-4-a",
        explanationOptions: [
          {
            id: "ba-4-a",
            text: "The diagnosis is accepted on the consultant's authority, and her credentials match precisely — nine years optimizing query plans at this scale is expertise in exactly the matter at hand.",
          },
          {
            id: "ba-4-b",
            text: "It treats the consultant's four-minute diagnosis as one more data point, nudging belief proportionately further toward the query theory.",
          },
          {
            id: "ba-4-c",
            text: "It reasons from the team's goal of faster response times to accepting the consultant's diagnosis as the best available next step.",
          },
        ],
      },
      {
        id: "ba-5",
        text: "The product lead acknowledged that maybe it hadn't been the users after all, which counted, by the team's estimate, as a meaningful concession.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ba-6",
        text: "The missing index was added on a Thursday morning and the response times fell that afternoon, completing what everyone agreed had been the longest postmortem cycle in recent memory.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-cracked-bell",
    title: "The Monitor",
    difficulty: "intermediate",
    includedLabels: ["authority", "practical"],
    sentences: [
      {
        id: "ap-1",
        text: "The cardiac monitor in Room 4 had been throwing false alarms for two weeks, and the nursing staff had developed a practiced skill for determining which ones to take seriously.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ap-2",
        text: "The biomedical engineer came up — eight years certifying hospital equipment — looked at the waveform log, and said the sensor lead was degrading and would fail completely within the week; the unit supervisor pulled the device from rotation on his assessment.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "ap-2-b",
        explanationOptions: [
          {
            id: "ap-2-a",
            text: "It moves from the supervisor's goal of patient safety to pulling the monitor as the surest available means.",
          },
          {
            id: "ap-2-b",
            text: "The lead degradation claim is accepted on the engineer's word, and his word carries because eight years certifying hospital equipment puts him squarely in the right domain.",
          },
          {
            id: "ap-2-c",
            text: "It traces the mechanism by which degraded leads produce false waveform readings, reasoning from the hardware itself rather than from the engineer's assessment.",
          },
        ],
      },
      {
        id: "ap-3",
        text: "Getting a replacement authorized through procurement would take its usual amount of time, which was not a small amount.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ap-4",
        text: "What the unit needed was a working monitor before the night shift started in four hours; a rental from the medical equipment company down the street could arrive in two, and the loaner from the surgical floor was already occupied, so the supervisor called the rental company.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "ap-4-c",
        explanationOptions: [
          {
            id: "ap-4-a",
            text: "It grows more confident that the monitor will fail completely as the engineer's one-week timeline draws nearer.",
          },
          {
            id: "ap-4-b",
            text: "It uses the biomedical engineer's diagnosis to estimate a probability of failure and acts only once that probability passes a threshold.",
          },
          {
            id: "ap-4-c",
            text: "A goal — working monitor before the night shift — is held against the available options, and the one option that arrives in time is chosen; the call to the rental company is the conclusion of the reasoning.",
          },
        ],
      },
      {
        id: "ap-5",
        text: "The rental arrived with forty minutes to spare and a cable that was, everyone agreed, impressively long.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ap-6",
        text: "The supervisor filed the procurement request anyway, knowing it would take three weeks and arrive in excellent condition.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-lamp-oil",
    title: "The Model Switch",
    difficulty: "intermediate",
    includedLabels: ["practical", "bayesian"],
    sentences: [
      {
        id: "pb-1",
        text: "The engineering team had switched to the new AI coding assistant three weeks ago, and there had been complaints about the suggestions, which the team lead had filed under 'learning curve.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pb-2",
        text: "She had given the reports little initial credit — new tools always attracted blame for existing frustrations — but seventeen cases of the model suggesting deprecated syntax in a single week, where the old model had managed perhaps two in a month, was not something adaptation noise could generate, and her skepticism ceded most of its ground.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "pb-2-a",
        explanationOptions: [
          {
            id: "pb-2-a",
            text: "Skepticism resting on a low starting credence gives way as the deprecated-syntax incidents arrive — evidence hard to produce from a learning curve but easy to produce from a genuinely worse model — and the belief moves as far as that evidence warrants.",
          },
          {
            id: "pb-2-b",
            text: "It compares two measured rates — seventeen incidents per week against two per month — and concludes from the proportions alone.",
          },
          {
            id: "pb-2-c",
            text: "It defers to the developers who filed the reports, since they are the ones actively using the model and their word carries in it.",
          },
        ],
      },
      {
        id: "pb-3",
        text: "The vendor had excellent customer service and an NPS score they mentioned in every email.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pb-4",
        text: "The team's goal was shipping code that worked; with the old model still available on the legacy tier, the reliable option beat the cheap one, and the lead switched them back and billed the difference to the vendor evaluation budget.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "pb-4-b",
        explanationOptions: [
          {
            id: "pb-4-a",
            text: "It explains how deprecated syntax suggestions propagate into failed builds and wasted review cycles.",
          },
          {
            id: "pb-4-b",
            text: "The governing end is working shipped code, and between the available options the reliable model is chosen because it best serves that end — the cost difference yields to the goal.",
          },
          {
            id: "pb-4-c",
            text: "It updates confidence in the new model one final step downward before acting on the accumulated total.",
          },
        ],
      },
      {
        id: "pb-5",
        text: "The vendor sent a follow-up survey with eleven questions, all of which assumed the experience had been positive.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pb-6",
        text: "The code suggestions improved immediately, which the team lead wrote up in a note nobody read but everyone agreed was worth writing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wet-granary",
    title: "The Outage",
    difficulty: "intermediate",
    includedLabels: ["bayesian", "authority", "practical"],
    sentences: [
      {
        id: "aa-1",
        text: "The platform went down at 11:48 PM on a Thursday, which the on-call team discovered at 11:49 via the kind of Slack notification nobody wants to receive on a Thursday night.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "aa-2",
        text: "The on-call lead's first guess was the scheduled cache flush — most late-night outages started there, not at the database — but the error logs showed connection pool exhaustion spreading across every service simultaneously, the kind of pattern a database failure produces readily and a cache flush almost never does, and the cache theory quietly lost its lead.",
        labels: ["bayesian"],
        primaryLabel: "bayesian",
        isTarget: true,
        correctExplanationId: "aa-2-b",
        explanationOptions: [
          {
            id: "aa-2-a",
            text: "It identifies database failure as the best explanation of the error logs, without weighing how likely a database problem was before the logs came in.",
          },
          {
            id: "aa-2-b",
            text: "The caching layer began as the more probable culprit and loses that standing as the evidence arrives — connection pool exhaustion that database failures produce readily but cache flushes almost never do.",
          },
          {
            id: "aa-2-c",
            text: "It traces the mechanism by which connection pool exhaustion propagates across all services once a database connection drops.",
          },
        ],
      },
      {
        id: "aa-3",
        text: "Seventeen people joined the incident bridge within five minutes, most of them offering the same idea.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "aa-4",
        text: "The database reliability engineer — four years managing the company's Postgres clusters — checked the replication lag in thirty seconds and said the primary had promoted a lagging replica; the on-call lead updated the incident to 'identified' on her word.",
        labels: ["authority"],
        primaryLabel: "authority",
        isTarget: true,
        correctExplanationId: "aa-4-a",
        explanationOptions: [
          {
            id: "aa-4-a",
            text: "The diagnosis is accepted on the engineer's authority, and her credentials match exactly — four years managing these specific Postgres clusters makes replication lag her domain entirely.",
          },
          {
            id: "aa-4-b",
            text: "It skips running the checks independently because accepting her read without delay is the fastest path to resolution.",
          },
          {
            id: "aa-4-c",
            text: "It shifts confidence toward the replica theory in proportion to how quickly she identified the lag — a fast diagnosis being evidence of a clear answer.",
          },
        ],
      },
      {
        id: "aa-5",
        text: "Failing back to the original primary would take ten minutes; the cache warm-up afterward would take another thirty.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "aa-6",
        text: "What mattered was service restored before the morning rush at 7 AM; the failback could happen on the weekend without anyone noticing, but a cold cache at 7 AM meant another outage, so the warm-up went first and the failback got scheduled for Saturday.",
        labels: ["practical"],
        primaryLabel: "practical",
        isTarget: true,
        correctExplanationId: "aa-6-c",
        explanationOptions: [
          {
            id: "aa-6-a",
            text: "It grows more confident that the cache will be cold at 7 AM with every minute the warm-up is delayed.",
          },
          {
            id: "aa-6-b",
            text: "It runs the warm-up first on the reliability engineer's instruction, deferring to her judgment about the recovery sequence.",
          },
          {
            id: "aa-6-c",
            text: "One end — service ready before 7 AM — ranks the available actions by what the deadline allows, and warm-up-before-failback follows from the goal, not from preference.",
          },
        ],
      },
      {
        id: "aa-7",
        text: "The warm-up finished at 4:23 AM, the incident was closed, and everyone agreed the postmortem could wait until after coffee.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
