import type { PracticeStory } from "@/domain/types";

/**
 * Causal-fallacy stories for the labels unlocked by the causal-fallacies
 * lesson: correlation implies causation, single-cause fallacy, and slippery
 * slope. Settings are modern and varied; the reasoning sounds like things
 * real people say with complete confidence.
 */

export const causalFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-clerks-chart",
    title: "The Thursday Rule",
    difficulty: "intermediate",
    includedLabels: ["correlation-causation"],
    sentences: [
      {
        id: "cc-1",
        text: "Priya had spent the whole winter convinced her podcast growth was hiding somewhere in the numbers, and she had the spreadsheet, the color-coding, and a premium analytics subscription to prove it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cc-2",
        text: "Her download spikes aligned perfectly with Thursday releases, so she moved the entire calendar to Thursdays and told her newsletter that Thursdays were clearly the engine of her growth.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cc-2-a",
        explanationOptions: [
          {
            id: "cc-2-a",
            text: "Download spikes and Thursdays go together in her data, but Thursdays are also her newsletter day, her clip day, and her preview day — the going-together is read as the release day's own power.",
          },
          {
            id: "cc-2-b",
            text: "Priya credits the growth to Thursday releases alone when the newsletter, the clips, and the preview links all contribute alongside them.",
          },
          {
            id: "cc-2-c",
            text: "Priya argues that missing a single Thursday will send her audience sliding away by inevitable stages.",
          },
        ],
      },
      {
        id: "cc-3",
        text: "Her producer pointed out, not for the first time, that Thursday was also when the newsletter dropped, the audio clips hit social, the episode transcript appeared on the website, and Priya herself was reliably in a good mood because the hard part was finished.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cc-4",
        text: "A second finding in the dashboard: listeners who had found the podcast through app-store search rated episodes higher on average than those who had arrived via social media, so she killed the social ad budget entirely and moved everything to app-store placement to lift her ratings.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cc-4-c",
        explanationOptions: [
          {
            id: "cc-4-b",
            text: "Priya warns that continuing to promote on social will cause her average rating to keep declining.",
          },
          {
            id: "cc-4-c",
            text: "App-store subscribers and high ratings travel together in her data, but dedicated app-store searchers are already committed podcast listeners who tend to rate generously everywhere — the correlation says nothing about which way the cause runs.",
          },
          {
            id: "cc-4-d",
            text: "Priya gives sole credit to the discovery channel when episode quality, host reliability, and audience loyalty all shape how listeners rate a show.",
          },
        ],
      },
      {
        id: "cc-5",
        text: "A friend who ran a media startup asked whether app-store listeners might simply be heavier consumers of audio in general, reviewing more and more favorably regardless of how they had first found a show.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cc-6",
        text: "The Thursday rule stayed, the social budget did not return, and the ratings moved in the patient, unimpressed way that dashboards always promise they won't.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-failed-harvest",
    title: "The Debrief",
    difficulty: "intermediate",
    includedLabels: ["single-cause"],
    sentences: [
      {
        id: "sg-1",
        text: "The team had lost twelve of seventeen games — the starting center tore a ligament in week three, the two road stretches landed during final-exam week, and the new coach's system took the full fall to install.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sg-2",
        text: "The head coach told every reporter who asked that it was the scheduling — the draw had done it, the draw alone, the way brutal schedules had sunk teams in every previous season he could name.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "sg-2-a",
        explanationOptions: [
          {
            id: "sg-2-a",
            text: "Three visible causes — the center's injury, the finals-week travel, and the new system's installation — are all on the table, and the coach elevates the schedule to 'the draw alone'.",
          },
          {
            id: "sg-2-b",
            text: "The coach reasons that because the losing streak followed the brutal draw, the schedule must have caused the losses.",
          },
          {
            id: "sg-2-c",
            text: "The coach warns that one bad schedule will lead, game by game, to the franchise's irreversible decline.",
          },
        ],
      },
      {
        id: "sg-3",
        text: "The assistant coach, who had spent the week reviewing film on the center's replacements, had a different set of numbers ready for anyone who asked.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sg-4",
        text: "The commentators on the team's fan forum settled the matter faster: it was the new system, the whole problem was the new system, and no talk of the injury or the exam-week travel needed to enter into it.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "sg-4-c",
        explanationOptions: [
          {
            id: "sg-4-b",
            text: "The commentators observe that teams installing new systems and teams with losing records tend to go together, and take the system to be the cause.",
          },
          {
            id: "sg-4-c",
            text: "A season with several named contributors — injury, travel, system — is pinned entirely on one, and the phrase 'no talk of the injury or the travel needed to enter into it' waves the others away by hand.",
          },
          {
            id: "sg-4-d",
            text: "The commentators warn that keeping the new system another season will lead by degrees to the end of a competitive roster.",
          },
        ],
      },
      {
        id: "sg-5",
        text: "A sports analytics firm the front office had quietly hired ranked four separate factors — schedule difficulty, injury depth, system transition, and exam-period fatigue — with none of them responsible for more than a third of the losses.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sg-6",
        text: "The report satisfied nobody, which the analysts took, quietly, as a sign of its accuracy.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-thin-end",
    title: "One Small Change",
    difficulty: "intermediate",
    includedLabels: ["slippery-slope"],
    sentences: [
      {
        id: "ss-1",
        text: "The proposal at Monday's all-hands was minor: let the engineering team flex their start time by an hour to avoid the worst of the commute.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ss-2",
        text: "Flex the engineers once, warned the head of operations, and next the sales team would want it, then every team would set its own hours, then no one would be reachable, and the whole coordination structure holding the company together would quietly dissolve — it always started this way.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "ss-2-a",
        explanationOptions: [
          {
            id: "ss-2-a",
            text: "A one-hour flex for one team is chained to the dissolution of the company's entire coordination structure, with every 'then' arriving by assertion and no link between them argued.",
          },
          {
            id: "ss-2-b",
            text: "The head of operations blames the company's scheduling difficulties on one cause — the flex request — when meeting loads, time zones, and management overhead all strain coordination too.",
          },
          {
            id: "ss-2-c",
            text: "The head of operations notes that companies with flexible start times report lower cohesion scores, and takes the schedule to be the cause of the gap.",
          },
        ],
      },
      {
        id: "ss-3",
        text: "An engineer pointed out that the design team had been allowed to set their own hours for two years without any of these consequences materializing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ss-4",
        text: "The office manager then raised the snack budget: add twenty dollars a week, she said, and soon the team would expect catered lunches, then a fully stocked kitchen, then a chef on retainer, and the burn rate would spiral until the company ran out of runway mid-Series B.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "ss-4-c",
        explanationOptions: [
          {
            id: "ss-4-b",
            text: "The office manager credits the entire burn-rate risk to the single line-item decision about snacks.",
          },
          {
            id: "ss-4-c",
            text: "The chain runs from twenty extra dollars a week to a Series B collapse with no link argued — no reason is given why granola bars must become catered lunches, or lunches a chef, or a chef a funding crisis.",
          },
          {
            id: "ss-4-d",
            text: "The office manager assumes that because snack budget expansions preceded financial trouble at other startups, the expansions caused the trouble.",
          },
        ],
      },
      {
        id: "ss-5",
        text: "The COO mentioned three portfolio companies that had expanded snack budgets two years earlier and were all still operating, with burn rates they reported cheerfully in their board decks.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ss-6",
        text: "Both measures passed, the flex hours became a quiet norm, and the snack budget now covered almonds and sparkling water, neither of which had yet endangered a funding round.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-healthy-village",
    title: "The Sano Paste",
    difficulty: "intermediate",
    includedLabels: ["correlation-causation", "single-cause"],
    sentences: [
      {
        id: "cn-1",
        text: "A health journalist flew to the island of Sano, where residents reached their nineties at twice the national rate, to find out why.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cn-2",
        text: "Every long-lived resident she interviewed started the morning with two tablespoons of fermented black garlic paste, and she filed her first dispatch concluding that the paste was the engine of their years — the paste was doing it.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cn-2-a",
        explanationOptions: [
          {
            id: "cn-2-a",
            text: "Everyone on Sano eats the paste, the long-lived and the recently arrived alike — the shared habit simply travels with the long lives, and the dispatch reads the traveling-together as the paste's own doing.",
          },
          {
            id: "cn-2-b",
            text: "The journalist warns that abandoning the paste would set the island's health on an irreversible downward slide.",
          },
          {
            id: "cn-2-c",
            text: "The journalist picks the paste as the sole explanation for a longevity that the island's own physician has shown to have several roots.",
          },
        ],
      },
      {
        id: "cn-3",
        text: "The island's physician mentioned the steep daily walk down to the harbor, the communal lunches that lasted two hours, the near-total absence of shift work, and a social life so dense it was basically a second immune system.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cn-4",
        text: "The book, when it appeared eight months later, was called The Sano Paste and devoted eleven chapters to fermented garlic, with the walks and the lunches and the social bonds gathered into a two-page afterword under the heading 'Other Factors.'",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "cn-4-c",
        explanationOptions: [
          {
            id: "cn-4-b",
            text: "The book treats paste-eating and longevity as correlated across island communities and reads the paste's power from the pattern.",
          },
          {
            id: "cn-4-c",
            text: "Where the physician counted four contributing factors, the book crowns one and buries the rest in an afterword — a complex outcome with several parents is handed a single explanation.",
          },
          {
            id: "cn-4-d",
            text: "The book claims that stopping the paste would trigger a step-by-step unraveling of the island's remarkable health.",
          },
        ],
      },
      {
        id: "cn-5",
        text: "Cases of the paste moved briskly online all spring, purchased mostly by buyers who continued eating at their desks, commuting forty minutes each way, and skipping lunch with colleagues they had never met.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cn-6",
        text: "The physician said their checkups, given sufficient time, would arrive with their own opinion on the matter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-empty-bench",
    title: "Three Years Down",
    difficulty: "intermediate",
    includedLabels: ["single-cause", "slippery-slope"],
    sentences: [
      {
        id: "sq-1",
        text: "The school's reading scores had dropped for three years running, and the fact anchored every PTA meeting agenda like a guest nobody had invited and nobody knew how to ask to leave.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-2",
        text: "Marcus stood at the microphone and laid it entirely on the tablets: every classroom had added devices in the past three years, and there was the whole of the matter.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "sq-2-a",
        explanationOptions: [
          {
            id: "sq-2-a",
            text: "A cut librarian position, doubled teacher turnover, a canceled after-school program, and a mid-year curriculum switch all share the same three-year window — and Marcus promotes the tablets to 'the whole of the matter'.",
          },
          {
            id: "sq-2-b",
            text: "Marcus argues that schools with more devices show lower reading scores across districts, and reads the devices as the cause of the pattern.",
          },
          {
            id: "sq-2-c",
            text: "Marcus warns that one unchecked device will set the school on an unstoppable road to complete academic failure.",
          },
        ],
      },
      {
        id: "sq-3",
        text: "The principal's report listed four other changes from the same period: the librarian position had been cut, teacher turnover had doubled, the after-school tutoring program had ended, and the district had swapped reading curricula halfway through the second year.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-4",
        text: "Then the board chair spoke: reduce screen time by one hour, she said, and next the school would cut tablets entirely, then the district's technology infrastructure would hollow out, then graduates would enter a workforce that had moved on without them — and the board would own that outcome.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "sq-4-c",
        explanationOptions: [
          {
            id: "sq-4-b",
            text: "The board chair credits the district's entire competitive disadvantage to the single decision about screen time.",
          },
          {
            id: "sq-4-c",
            text: "One hour of reduced screen time is marched to workforce-unprepared graduates through links — full cuts, hollow infrastructure, graduate disadvantage — that are announced rather than argued.",
          },
          {
            id: "sq-4-d",
            text: "The board chair observes that districts with tablet restrictions have lower graduation rates and takes the restrictions to be the cause of the gap.",
          },
        ],
      },
      {
        id: "sq-5",
        text: "A parent near the exit mentioned that Westfield Elementary had reduced tablet time two years ago and had posted its highest reading scores in a decade the following spring.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-6",
        text: "Westfield, it emerged, had also reinstated its librarian, stabilized its teaching staff, and kept the same reading curriculum for four consecutive years.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sq-7",
        text: "The meeting voted to audit all four factors before adjusting any policy, which some called prudence and others called delay, and on that particular evening it was both.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-harbor-fee",
    title: "Thread: Proposed Subscription",
    difficulty: "intermediate",
    includedLabels: ["slippery-slope", "correlation-causation"],
    sentences: [
      {
        id: "sr-1",
        text: "The platform's founding team proposed a six-dollar monthly subscription to cover server costs and remove the ads that had been landing on members' portfolio pages.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sr-2",
        text: "Six dollars now, predicted the most-upvoted reply, then twelve by spring, then a gated paywall for uploads, and inside three years no independent illustrator would be able to afford to call this platform home — it always started with one small fee.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "sr-2-a",
        explanationOptions: [
          {
            id: "sr-2-a",
            text: "Six dollars is escalated to the departure of every independent illustrator through a chain of 'thens' — twelve, then a paywall, then an exodus — none of which is given a reason to happen.",
          },
          {
            id: "sr-2-b",
            text: "The commenter blames the platform's troubles on the subscription fee alone, ignoring the ad experience, the server costs, and the moderation backlog.",
          },
          {
            id: "sr-2-c",
            text: "The commenter assumes that because fees preceded decline on other platforms, the fees caused the decline.",
          },
        ],
      },
      {
        id: "sr-3",
        text: "A community moderator replied with a detailed server-cost breakdown and a table showing what the ad-supported alternative actually looked like, written with the patience of someone who had read every comment in the thread twice.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sr-4",
        text: "In a follow-up post, the team noted that platforms with subscription models grew their active userbases faster than free ones, and concluded that a subscription would clearly accelerate their own community's growth.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "sr-4-c",
        explanationOptions: [
          {
            id: "sr-4-b",
            text: "The team warns that staying free will begin a slow drift toward irrelevance and an empty, abandoned platform.",
          },
          {
            id: "sr-4-c",
            text: "Subscription fees and large active communities go together across platforms, but communities large enough to charge are also large enough to attract members already — the going-together doesn't show which direction the cause runs.",
          },
          {
            id: "sr-4-d",
            text: "The team credits community growth to the subscription model alone, setting aside the content quality, the founding network, and the years the platform ran free.",
          },
        ],
      },
      {
        id: "sr-5",
        text: "A longtime member pointed out that the thriving subscription platforms in the team's data had all been large enough to attract paying members before they ever charged — the fee followed the growth, not the other way around.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sr-6",
        text: "The subscription passed at six dollars, with a publicly posted cost ledger and a two-year sunset clause, which gave both sides something concrete to argue about.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-improvement-society",
    title: "The Glass Room",
    difficulty: "intermediate",
    includedLabels: ["correlation-causation", "single-cause", "slippery-slope"],
    sentences: [
      {
        id: "cf-1",
        text: "The quarterly all-hands ran long, as it always did, in the glass-walled conference room that made everyone feel faintly observed by their future selves.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cf-2",
        text: "The growth lead opened with a slide: users who had push notifications enabled opened the app four times more often, so enabling notifications by default for all new signups would multiply engagement fourfold — she recommended flipping the switch before the next sprint.",
        labels: ["correlation-causation"],
        primaryLabel: "correlation-causation",
        isTarget: true,
        correctExplanationId: "cf-2-a",
        explanationOptions: [
          {
            id: "cf-2-a",
            text: "Notification-enabled users and high open rates keep company in her data, but engaged users both turn on notifications and open apps frequently — the lead reads the company-keeping as the notification's doing.",
          },
          {
            id: "cf-2-b",
            text: "The growth lead credits engagement to the notification setting alone, setting aside content quality, habit loops, and each user's underlying intent.",
          },
          {
            id: "cf-2-c",
            text: "The growth lead argues that failing to enable notifications by default will send engagement into an unrecoverable decline.",
          },
        ],
      },
      {
        id: "cf-3",
        text: "The room received the slide with the measured enthusiasm of people who suspected the chart was missing something important.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cf-4",
        text: "The CTO then walked through the retention data: the launch-day outage had done it, the outage alone, the UX debt and the confusing onboarding being, she said, contributing noise rather than signal.",
        labels: ["single-cause"],
        primaryLabel: "single-cause",
        isTarget: true,
        correctExplanationId: "cf-4-c",
        explanationOptions: [
          {
            id: "cf-4-b",
            text: "The CTO reasons that because the retention drop followed the launch-day outage, the outage must have caused it.",
          },
          {
            id: "cf-4-c",
            text: "UX debt and a confusing onboarding sit alongside the outage in the retention data — the CTO elects one and labels the others 'noise'.",
          },
          {
            id: "cf-4-d",
            text: "The CTO predicts that one unresolved deployment issue will cascade until every subsequent launch produces a similar crisis.",
          },
        ],
      },
      {
        id: "cf-5",
        text: "The head of product rose next with numbers on the referral program, moving to the whiteboard with the focused air of someone who had been holding this information since the pre-meeting coffee.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cf-6",
        text: "Lower the referral bonus by ten dollars, she warned, and users would feel cheated, then disengage, then stop referring anyone at all, and the one acquisition channel that cost less than paid ads would quietly hollow out — all from a single line-item cut.",
        labels: ["slippery-slope"],
        primaryLabel: "slippery-slope",
        isTarget: true,
        correctExplanationId: "cf-6-a",
        explanationOptions: [
          {
            id: "cf-6-a",
            text: "A ten-dollar bonus cut is rolled to a dead acquisition channel with no mechanism at any step — the chain from feeling cheated to disengaging to never referring again is invoked, not argued.",
          },
          {
            id: "cf-6-b",
            text: "The head of product observes that platforms with lower referral bonuses have smaller user bases, and takes the bonus level to be the cause of the difference.",
          },
          {
            id: "cf-6-c",
            text: "The head of product blames the referral program's struggles on the bonus cut alone, setting aside the product experience and the invite-flow design.",
          },
        ],
      },
      {
        id: "cf-7",
        text: "The team voted to A/B test the notification default, audit the onboarding separately, and run a three-month pilot on the adjusted bonus before treating any of the afternoon's predictions as verdicts.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
