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
  {
    id: "story-te-override",
    title: "The Override Clause",
    difficulty: "intermediate",
    includedLabels: ["thought-experiment"],
    sentences: [
      {
        id: "teo-1",
        text: "The AI Safety Council had spent three meetings on a single proposed clause: certified operators could suspend the audit trail for up to ninety seconds during routine maintenance, a window the drafting team described as minimal and which nobody had tested against the size of the operator pool.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "teo-2",
        text: "One council member proposed a scenario not as a prediction but as a diagnostic: suppose each of the fourteen hundred certified operators used the window at the same moment, every one acting within the clause's stated terms — did a record that could be suspended by all of its custodians simultaneously still qualify as a record in any meaningful sense?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "teo-2-a",
        explanationOptions: [
          {
            id: "teo-2-a",
            text: "A hypothetical is constructed — all fourteen hundred operators suspending the log at once, each acting within the clause's own terms — and the member reasons inside it to test whether a record that all its custodians can pause simultaneously still qualifies as a record; the scenario is a diagnostic of the clause's logic, not a forecast.",
          },
          {
            id: "teo-2-b",
            text: "It applies the council's continuity requirement to the proposed clause and derives the audit log's failure as a logical consequence — the clause violates an existing rule, and the violation is the conclusion.",
          },
          {
            id: "teo-2-c",
            text: "It identifies simultaneous suspension as the likeliest explanation for the audit coverage gaps the council has observed in comparable compliance frameworks.",
          },
        ],
      },
      {
        id: "teo-3",
        text: "Legal counsel noted that 'simultaneously' was not language the clause contained, which the member accepted and then asked her to identify a condition under which fourteen hundred independently managed maintenance schedules were guaranteed not to overlap.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "teo-4",
        text: "Nobody arrived at one.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "teo-5",
        text: "She refined the scenario to settle the underlying question: imagine a single certified operator, compliant on every count, using all ninety seconds on every permitted day — reasoning forward from that case, what would be present in the logs at the end of a year, and did the word 'audit' apply to it?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "teo-5-a",
        explanationOptions: [
          {
            id: "teo-5-a",
            text: "The hypothetical is narrowed to one fully compliant operator using the window daily and extended a year forward; reasoning inside that scenario asks what the logs would contain, and what they contain tells you whether 'audit' still applies — the imagined case is the instrument, the clause's coherence is the subject.",
          },
          {
            id: "teo-5-b",
            text: "It applies the council's definition of 'audit' to the one-operator scenario and derives whether the resulting log qualifies from that definition used as a rule.",
          },
          {
            id: "teo-5-c",
            text: "It infers that daily ninety-second suspension is the most likely pattern of compliant use, and takes that inference as an explanation of what an annual log would probably contain.",
          },
        ],
      },
      {
        id: "teo-6",
        text: "The clause went to a working group charged with recommending a definition of 'routine maintenance,' which the council treated as a form of progress.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-te-spell",
    title: "The Consent Clause",
    difficulty: "intermediate",
    includedLabels: ["thought-experiment"],
    sentences: [
      {
        id: "tes-1",
        text: "The Spell Standards Subcommittee had been reviewing the Voluntary Truth Protocol for five months, and the wizard who had written the original exemption clause was no longer returning the convener's messages.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tes-2",
        text: "The exemption allowed practitioners to waive witnessed consent for truth spells cast on participants who had agreed verbally, a provision that read as reasonable until anyone tried applying it to a case.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tes-3",
        text: "A committee member tested the exemption by constructing a scenario: suppose a practitioner used the waiver daily, a different participant each time, all agreeing verbally with no third party present — was 'willing' doing enough work to protect anyone, or did the exemption only appear sound because no one had yet imagined extending it?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "tes-3-a",
        explanationOptions: [
          {
            id: "tes-3-a",
            text: "A hypothetical is constructed — daily unwitnessed use, a new participant each time — and the committee reasons inside it to test whether 'willing' can bear the exemption's weight when the clause is extended; the scenario is not a prediction but a probe of the rule's own logic.",
          },
          {
            id: "tes-3-b",
            text: "It compares the Voluntary Truth Protocol to similar consent-waiver provisions in neighbouring jurisdictions to see whether the exemption has held under comparable conditions.",
          },
          {
            id: "tes-3-c",
            text: "It applies the subcommittee's consent standard to the described use pattern and derives the exemption's failure as a logical consequence of that standard.",
          },
        ],
      },
      {
        id: "tes-4",
        text: "The original drafter, reached finally by letter, replied that the scenario was unrealistic, which the committee noted without altering their direction.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tes-5",
        text: "The senior examiner stripped the case to its minimum: one practitioner, one participant, consent genuine in fact but unverifiable afterward — for the exemption to do what it claimed, what would the word 'willing' need to mean, and who, at the moment that mattered, would have access to that meaning?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "tes-5-a",
        explanationOptions: [
          {
            id: "tes-5-a",
            text: "The hypothetical is reduced to its essentials — one practitioner, genuine but unverifiable consent — and reasoning inside it locates what 'willing' must mean for the exemption to function; the scenario produces a finding about the word's requirements, not a judgment about any actual conduct.",
          },
          {
            id: "tes-5-b",
            text: "It applies the Protocol's definition of valid consent to the minimal scenario and derives whether the exemption holds from that definition used as a rule.",
          },
          {
            id: "tes-5-c",
            text: "It draws on the consent structure of comparable one-to-one protocols in other jurisdictions to determine what 'willing' has meant in analogous cases.",
          },
        ],
      },
      {
        id: "tes-6",
        text: "The Protocol returned to drafting with a new witnessed-acknowledgment requirement, which the subcommittee called a clarification and the original drafter called a substantial revision, and both assessments were accurate.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-te-cancel",
    title: "The Notice Requirement",
    difficulty: "intermediate",
    includedLabels: ["thought-experiment"],
    sentences: [
      {
        id: "tec-1",
        text: "The Department of Temporal Operations had spent two fiscal years drafting what its director called a simple rule: all excursion cancellations must be filed forty-eight hours before departure.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tec-2",
        text: "Nobody in the first three drafts had noted the obvious problem, which the junior analyst later attributed either to collective oversight or to a shared instinct not to open that particular door.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tec-3",
        text: "She put it in writing: suppose a traveler cancelled by returning to forty-nine hours before their departure and filing from that point — was the requirement satisfied, or had the rule assumed a fixed relationship between filing time and departure time that the travelers it regulated did not have?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "tec-3-a",
        explanationOptions: [
          {
            id: "tec-3-a",
            text: "A hypothetical is constructed — a traveler who returns to the past and files from there — and the analyst reasons inside it to test whether the rule presupposes a fixed arrow of time that temporal travelers by definition lack; the scenario probes the notice requirement's coherence, not any actual traveler's plans.",
          },
          {
            id: "tec-3-b",
            text: "It applies the department's forty-eight-hour rule to the time-shifted filing and derives a contradiction from the sequence as a matter of logical necessity, using the hypothetical as an illustration of a rule already in force.",
          },
          {
            id: "tec-3-c",
            text: "It compares the notice requirement to equivalent advance-filing rules in standard transport regulation to see how those rules have handled retroactive itinerary changes.",
          },
        ],
      },
      {
        id: "tec-4",
        text: "Her supervisor called it exactly the kind of issue they were there to resolve, in a tone that suggested he was newly uncertain about that.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "tec-5",
        text: "She constructed a tighter version: a departure set for Tuesday at noon, a filing submitted Monday at eleven, and the Tuesday trip taken to Sunday — reasoning forward from within those facts, how many hours before departure was the filing, and what did the requirement mean if the answer depended on which trip was being counted?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "tec-5-a",
        explanationOptions: [
          {
            id: "tec-5-a",
            text: "A specific hypothetical — Tuesday departure, Sunday landing, Monday filing — is constructed and the analyst reasons inside it; the question of how many hours before departure the filing sits cannot be answered without deciding which trip is the reference point, and that is what the scenario was built to show the rule had not specified.",
          },
          {
            id: "tec-5-b",
            text: "It applies the forty-eight-hour requirement to the itinerary's facts and derives a contradiction from the filing sequence as a straightforward logical consequence of the rule.",
          },
          {
            id: "tec-5-c",
            text: "It infers that the Tuesday-to-Sunday itinerary is the most plausible explanation for the anomalous filing timestamps the department has been logging.",
          },
        ],
      },
      {
        id: "tec-6",
        text: "The requirement was revised to apply to travelers 'prior to their first departure of record,' a phrase whose further implications the department agreed to examine next quarter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-te-resource",
    title: "The Cutoff",
    difficulty: "intermediate",
    includedLabels: ["thought-experiment"],
    sentences: [
      {
        id: "ter-1",
        text: "The community endowment board had eighteen applications, a fixed sum, and six weeks to design a process that everyone on the receiving end would find fair.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ter-2",
        text: "The most popular proposal was to rank applicants by demonstrated need and fund from the top until the money ran out, a method nobody objected to in principle and everyone had a different opinion about in practice.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ter-3",
        text: "A member put a test to the room: suppose each person at the table didn't know, before voting, whether they would end up as an applicant or as an allocator — would the same ranking hold, and if it wouldn't, what did that say about whether the principle was grounded in fairness or in position?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "ter-3-a",
        explanationOptions: [
          {
            id: "ter-3-a",
            text: "A hypothetical is constructed — board members vote without knowing their role — and the question is whether the ranking holds inside it; if the rule shifts with the voter's position, the scenario has shown that what drives it is perspective rather than principle, which is the finding the hypothetical was built to produce.",
          },
          {
            id: "ter-3-b",
            text: "It applies the board's stated fairness standard to the ranking and derives whether the allocation process qualifies as fair from that standard used as a rule.",
          },
          {
            id: "ter-3-c",
            text: "It compares this board's ranking to the allocation methods of similar community funds to see whether position-tracking has shaped those outcomes in analogous cases.",
          },
        ],
      },
      {
        id: "ter-4",
        text: "Someone noted that they did know their roles, which the member acknowledged was exactly the point.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ter-5",
        text: "She ran the test from the other end: suppose the applicant ranked lowest on the need scale were instead the one who administered the fund — would the committee feel moved to revisit the cutoff, and if they would, was it a matter of principle or a matter of whose interests happened to fall on the other side of the line?",
        labels: ["thought-experiment"],
        primaryLabel: "thought-experiment",
        isTarget: true,
        correctExplanationId: "ter-5-a",
        explanationOptions: [
          {
            id: "ter-5-a",
            text: "A hypothetical is constructed — the lowest-ranked applicant is now the fund administrator — and the question is whether the committee would revise the cutoff inside it; if the answer is yes, the scenario has revealed that the cutoff tracks the administrator's position rather than the principle it claims to embody.",
          },
          {
            id: "ter-5-b",
            text: "It identifies the administrators' own positions as the best explanation for why the cutoff was placed where it was — a diagnosis of actual motivation drawn from observable evidence.",
          },
          {
            id: "ter-5-c",
            text: "It applies the board's definition of principled allocation to the administrator-as-applicant scenario and derives whether the cutoff qualifies as principled from that definition as a rule.",
          },
        ],
      },
      {
        id: "ter-6",
        text: "The final process included two blind reviews and a randomized tiebreaker, which the board called a principled compromise and which was, under the circumstances, the best available description.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Reductio ad absurdum stories
  // ---------------------------------------------------------------------------
  {
    id: "story-noise-ordinance",
    title: "The Noise Ordinance",
    difficulty: "intermediate",
    includedLabels: ["reductio"],
    sentences: [
      {
        id: "ra-1",
        text: "The revised noise ordinance had been sent back to committee twice already — once for being too vague and once for being, a subcommittee member suggested, audibly aggressive in tone.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ra-2",
        text: "The text now read 'at all hours without exception,' and Councilmember Vance's objection was not about the hours but about what followed from them: if no exception existed, then the siren used to announce code enforcement deployments was itself a violation — a self-criminalizing act that made every enforcement run illegal before it began — and a rule whose enforcement is prohibited by the rule is not a rule at all, so the phrase needed implicit limits that the drafters had simply not written in.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "ra-2-b",
        explanationOptions: [
          {
            id: "ra-2-a",
            text: "It applies the 'no exception' clause as a binding rule and derives that enforcement sirens fall within it as a necessary consequence.",
          },
          {
            id: "ra-2-b",
            text: "The literal reading is followed to its conclusion — no exception means enforcement itself becomes criminal — which is impossible, so the reading cannot stand.",
          },
          {
            id: "ra-2-c",
            text: "It imagines a hypothetical enforcement run under the literal reading to test what a 'no exception' noise rule actually requires in practice.",
          },
        ],
      },
      {
        id: "ra-3",
        text: "The enforcement director thanked Vance for the observation and did not say anything else for several minutes.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ra-4",
        text: "An amendment offered blanket exemption for all official government vehicles, but the same pressure applied: if all government-linked noise were outside the ordinance, then a contractor under city contract qualified, then any firm that could obtain a municipal permit, then effectively anyone — a rule with no outer boundary cannot constrain anyone, which contradicts the point of having a rule, so the exemption had to be defined by activity and duration rather than by whose name was on the permit.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "ra-4-c",
        explanationOptions: [
          {
            id: "ra-4-a",
            text: "It applies the 'official government vehicle' definition and traces which operators qualify under the proposed exemption by category.",
          },
          {
            id: "ra-4-b",
            text: "It takes the amendment's concern about disrupting enforcement operations seriously and proposes activity-and-duration limits as a revised position both sides can accept.",
          },
          {
            id: "ra-4-c",
            text: "Assume the exemption is categorical — follow it: contractors qualify, permit-holders qualify, effectively anyone qualifies; the ordinance has no reach; a rule with no reach is not a rule; so the exemption must be bounded.",
          },
        ],
      },
      {
        id: "ra-5",
        text: "The amendment was pulled before the vote and replaced with three pages of definitional language, which the city attorney described as adequate and which the enforcement director described as a start.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ra-6",
        text: "The ordinance passed on the fourth draft and was immediately described by the local paper as a compromise nobody liked, which the council took as confirmation they had done something right.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-pass-desk",
    title: "The Archive Admission",
    difficulty: "intermediate",
    includedLabels: ["reductio"],
    sentences: [
      {
        id: "rc-1",
        text: "The Archive of Consequential Reasoning had operated without interruption for three centuries and had, in that time, developed a visitor policy that was genuinely unique in the sense of being unlike anything that could be made to work.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rc-2",
        text: "The policy required a signed visitor pass to enter the main hall, and the pass-signing desk was inside the main hall — which meant a first-time visitor needed a pass to reach the place where passes were issued, and since the policy named no other source for a first pass, the arrangement admitted no new visitors at all; a venue that admits no new visitors has no visitors, and the archive plainly had them, so the rule as written could not have meant what it said.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "rc-2-a",
        explanationOptions: [
          {
            id: "rc-2-a",
            text: "The rule is followed to its conclusion for a first-time visitor — pass required, desk inside, no other source — which yields a venue with no visitors, contradicting observable fact; so the rule cannot mean what it says.",
          },
          {
            id: "rc-2-b",
            text: "It applies the entry requirement as a binding rule and traces the steps a visitor must complete — obtaining a pass before arrival — as a matter of procedural necessity.",
          },
          {
            id: "rc-2-c",
            text: "It imagines a first-time visitor approaching the hall to explore what the pass-before-entry policy requires in an edge case the rule does not anticipate.",
          },
        ],
      },
      {
        id: "rc-3",
        text: "Master Aldric had been explaining the workaround to new arrivals for twelve years and had developed a very particular way of ending the explanation that discouraged follow-up questions.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rc-4",
        text: "The board proposed that any pass bearing a legible seal could be re-used indefinitely; but an indefinitely transferable pass grants entry to whoever finds one, which is to say it grants entry to anyone, which is to say there is no restriction — and a policy that restricts no one cannot have aimed to be a policy, so re-use had to be tied to the original holder or revoked on transfer.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "rc-4-b",
        explanationOptions: [
          {
            id: "rc-4-a",
            text: "It applies the 'legible seal equals valid pass' definition and derives who qualifies for entry under that criterion as a matter of rule.",
          },
          {
            id: "rc-4-b",
            text: "Assume indefinite transferability — any found pass grants entry, so anyone may enter, so there is no restriction; a restriction that restricts no one cannot be the policy's aim; so transfers must be bounded or barred.",
          },
          {
            id: "rc-4-c",
            text: "It takes the board's concern about unauthorized copying and proposes tying re-use to the original holder as a revised position that absorbs that objection.",
          },
        ],
      },
      {
        id: "rc-5",
        text: "The board studied the problem for three weeks and produced a memo it described as preliminary, which Master Aldric filed alongside the eleven previous preliminary memos.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rc-6",
        text: "He had been issuing workaround passes from a window in the east corridor the entire time and had, by his own count, resolved the policy's central contradiction roughly four thousand times.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-arbitration-clause",
    title: "Clause Fourteen",
    difficulty: "intermediate",
    includedLabels: ["reductio"],
    sentences: [
      {
        id: "rd-1",
        text: "The contract had been drafted in twenty minutes at the end of a fundraising sprint and had been in place for three years before anyone read it carefully enough to find clause fourteen.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rd-2",
        text: "Clause fourteen said that any dispute about the contract — including any dispute about whether clause fourteen applied — would be resolved by binding arbitration; but to invoke arbitration on a question about the clause's own scope, you had to presume it already applied, which was precisely what was in question — a procedure that can only begin by assuming its own authority has no authority — and so the clause could not govern disputes about its own reach.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "rd-2-c",
        explanationOptions: [
          {
            id: "rd-2-a",
            text: "It imagines a hypothetical dispute about the clause's applicability to explore what self-referential arbitration language requires in practice.",
          },
          {
            id: "rd-2-b",
            text: "It applies the clause's self-inclusion language — 'all disputes including disputes about this clause' — and derives by rule that the scope question falls within the arbitration requirement.",
          },
          {
            id: "rd-2-c",
            text: "Assume clause fourteen covers itself — invoking it requires presuming it applies, but that is the open question; a process that must assume its own authority in order to establish its authority has none; so the clause cannot govern disputes about its own scope.",
          },
        ],
      },
      {
        id: "rd-3",
        text: "The company's outside counsel described the clause as ambitious, in the same tone she used for quarterly projections she did not believe.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rd-4",
        text: "The contractor's position — that if arbitration didn't apply, neither did the agreement — was a different problem, and nobody wanted to open it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "rd-5",
        text: "Clause twenty said the agreement was governed by the laws of the state in which the company was incorporated, and the company had reincorporated in a different state the previous spring; read as fixed to the original state, the clause pointed to a jurisdiction neither party operated in; read as automatically updating, it rewrote itself without any party's signature — either reading dissolved the provision, so neither could be right, and the contract needed an amendment before anyone signed anything.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "rd-5-a",
        explanationOptions: [
          {
            id: "rd-5-a",
            text: "Both readings are followed through: the original-state reading produces no usable governing law; the automatic-update reading means the clause rewrites itself without a signature — each assumption yields an incoherent contract, so neither can be right and an amendment is required.",
          },
          {
            id: "rd-5-b",
            text: "It applies the standard governing-law clause interpretation and derives which state's law controls the agreement as a matter of contract construction.",
          },
          {
            id: "rd-5-c",
            text: "It takes the contractor's preferred reading as an objection and proposes an amendment as a revised position that satisfies both parties.",
          },
        ],
      },
      {
        id: "rd-6",
        text: "The revised agreement ran to forty-one clauses, which everyone signed without reading past page seven, which was at least consistent with how the original had been drafted.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-journal-policy",
    title: "The Desk Rejection",
    difficulty: "intermediate",
    includedLabels: ["reductio"],
    sentences: [
      {
        id: "re-1",
        text: "The journal had operated for eighteen years under a submission policy that nobody had thought to question, which turned out to be a reasonable description of the problem.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "re-2",
        text: "One standing rule held that submissions whose central argument critiqued the journal's own editorial policies would be desk-rejected without peer review; a paper arrived arguing that this very rule violated the journal's stated commitment to open inquiry — and if the rule applied to it, the claim that the rule was flawed could never receive a hearing, which meant the journal's policies could be scrutinized everywhere except in the venue most concerned with scrutinizing them; a standard that exempts itself from scrutiny while claiming to uphold it cannot be said to uphold it, so either the rule did not reach critiques of itself or it had to be abandoned.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "re-2-b",
        explanationOptions: [
          {
            id: "re-2-a",
            text: "It applies the desk-rejection rule to the submission — a critique of editorial policy fits the named criterion — and derives that the paper is rejected as a matter of procedure.",
          },
          {
            id: "re-2-b",
            text: "Assume the rule applies to critiques of itself — then no critique can receive review — so the policy cannot be scrutinized in the journal claiming to uphold scrutiny; that contradiction shows the rule either does not reach itself or must be abandoned.",
          },
          {
            id: "re-2-c",
            text: "It imagines the submission receiving full peer review to test what the journal's stated commitment to open inquiry would require of a self-referential editorial rule.",
          },
        ],
      },
      {
        id: "re-3",
        text: "The editor in chief had been at the journal for eleven years, read both the submission and the rule in the same afternoon, and sent a reply that took four drafts to shorten to one sentence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "re-4",
        text: "The editorial board met the following Thursday, which the minutes described as an emergency session and several members' calendars described as their lunch hour.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "re-5",
        text: "A board member argued the rule was defensible because allowing meta-critique would open the journal to unlimited challenges to its practices; but if protecting any rule from challenge because challenges might be unlimited were a sound defense, every rule could be insulated the same way — the reasoning would protect any policy equally, including ones the journal would plainly reject — and an argument that defends everything in particular defends nothing in particular, so the justification could not stand.",
        labels: ["reductio"],
        primaryLabel: "reductio",
        isTarget: true,
        correctExplanationId: "re-5-c",
        explanationOptions: [
          {
            id: "re-5-a",
            text: "It imagines applying the 'unlimited challenges' justification to an obviously bad policy to test whether the argument holds when extended beyond the current case.",
          },
          {
            id: "re-5-b",
            text: "It applies the principle that open-ended challenges undermine institutional stability and derives the desk-rejection rule as a necessary constraint on submissions.",
          },
          {
            id: "re-5-c",
            text: "Assume the 'unlimited challenges' logic is sound — it then protects every policy equally, including ones the journal would plainly reject; an argument that defends everything defends nothing in particular; so the justification fails.",
          },
        ],
      },
      {
        id: "re-6",
        text: "The rule was revised, the submission received a full review, and the author was rejected on the merits, which everyone agreed was more satisfying than being desk-rejected for asking the question.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
