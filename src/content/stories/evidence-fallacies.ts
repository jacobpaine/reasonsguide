import type { PracticeStory } from "@/domain/types";

/**
 * Evidence-fallacy stories: cherry-picking, biased-sample, survivorship-bias.
 * Settings range from startup all-hands to gym walls to gaming subreddits.
 * At intermediate difficulty the reasoning is embedded in natural speech —
 * no signposts, and neutral sentences vary in length so targets don't stand
 * out by shape alone.
 */

export const evidenceFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-harbormaster-year",
    title: "The All-Hands Deck",
    difficulty: "intermediate",
    includedLabels: ["cherry-picking"],
    sentences: [
      {
        id: "cp-1",
        text: "The company met in the largest conference room, which had glass walls and a projector that had cost more than anyone's starting salary.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cp-2",
        text: "Nadia, the head of growth, clicked through the Q3 highlights — three record weeks in August, the product's best NPS score ever, a chart of new signups with a slope that made the room nod — and then closed the deck before October's numbers appeared.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "cp-2-b",
        explanationOptions: [
          {
            id: "cp-2-a",
            text: "Three record weeks is too small a stretch of data from which to judge a whole quarter's performance.",
          },
          {
            id: "cp-2-b",
            text: "The three record weeks are real, and so are October's numbers — on the same dashboard, not presented; the case is made by what Nadia stops reading before, not by anything false in what she shows.",
          },
          {
            id: "cp-2-c",
            text: "The record weeks coincided with a discount campaign, so Nadia's figures come from an unusual period that doesn't represent normal performance.",
          },
        ],
      },
      {
        id: "cp-3",
        text: "The full dashboard, accessible to anyone with a login, showed that those three weeks had run on a discount campaign, and that churn had outpaced acquisition for the rest of the quarter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cp-4",
        text: "Marcus from finance, who wanted the campaign killed, cited the refund rate from the worst cohort and the acquisition cost from the priciest channel, and never mentioned the cohorts in between that had performed adequately.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "cp-4-a",
        explanationOptions: [
          {
            id: "cp-4-a",
            text: "The worst cohort and the priciest channel are presented as the story while the middle-performing cohorts stay offscreen — the evidence exists, is known, and is not shown.",
          },
          {
            id: "cp-4-b",
            text: "The cohorts Marcus cites skew toward customers who were likely to churn regardless, so his sample over-represents the unhappy end of a wider distribution.",
          },
          {
            id: "cp-4-c",
            text: "One worst cohort is too thin a basis from which to conclude anything about the campaign overall.",
          },
        ],
      },
      {
        id: "cp-5",
        text: "The CEO thanked them both and asked for a complete picture before the board meeting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cp-6",
        text: "No one sent it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-parish-poll",
    title: "The Late-Start Survey",
    difficulty: "intermediate",
    includedLabels: ["biased-sample"],
    sentences: [
      {
        id: "bs-1",
        text: "The student council wanted to know whether the school's late-start day should move from Monday to Friday.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bs-2",
        text: "Priya collected her data at after-school robotics on a Tuesday and came back with near-unanimous support for keeping Mondays free — every student she had asked had already demonstrated, by showing up voluntarily at four-thirty on a weekday, that the current schedule was no hardship.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "bs-2-c",
        explanationOptions: [
          {
            id: "bs-2-a",
            text: "Priya may have set aside the few answers that didn't favor Monday, making her results look more unanimous than they actually were.",
          },
          {
            id: "bs-2-b",
            text: "Students who have stayed in robotics club long enough to be surveyed are those the schedule has never driven away — the ones it cost something are no longer in the room.",
          },
          {
            id: "bs-2-c",
            text: "Every student in that room was there by choice on a Tuesday afternoon — the precise group least likely to have a problem with the existing schedule; the students a Monday start disadvantaged most were never at robotics to be asked.",
          },
        ],
      },
      {
        id: "bs-3",
        text: "Students who caught the bus straight home after the final bell, who held afternoon jobs, or who had never joined a club of any kind were not in the room to answer.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bs-4",
        text: "Dev ran his own poll in the school's competitive-gaming Discord server and found near-unanimous support for Friday — which tracked, since the server's members spent weekends coordinating tournament brackets and found Fridays inconvenient for specific logistical reasons.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "bs-4-a",
        explanationOptions: [
          {
            id: "bs-4-a",
            text: "The gaming server self-selects for members with a particular weekend routine that makes Fridays a scheduling headache; students with no strong preference or a different schedule were never on the server to answer.",
          },
          {
            id: "bs-4-b",
            text: "Dev may have counted only the responses that favored Friday and dropped the minority who were indifferent, shaping the result before he reported it.",
          },
          {
            id: "bs-4-c",
            text: "One Discord poll run over a single afternoon is too small a sample from which to draw conclusions about the whole school.",
          },
        ],
      },
      {
        id: "bs-5",
        text: "The two reports arrived at the council table contradicting each other completely, each delivered with equal confidence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bs-6",
        text: "The council ran a school-wide online poll instead, which forty-three people answered.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tarred-hulls",
    title: "The Gym Wall",
    difficulty: "intermediate",
    includedLabels: ["survivorship-bias"],
    sentences: [
      {
        id: "sv-1",
        text: "The gym had replaced its carpet with rubber mats, added a smoothie bar, and covered the entrance wall in framed before-and-after photographs.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sv-2",
        text: "The manager told prospective members that these thirty-six photos were simply what happened when people committed fully to the program — treating the wall, which showed only members whose results were worth framing, as proof that the program worked for everyone who tried it.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "sv-2-b",
        explanationOptions: [
          {
            id: "sv-2-a",
            text: "The manager is showing only the most dramatic transformations and leaving the more modest outcomes off the wall, selecting the evidence that flatters the program.",
          },
          {
            id: "sv-2-b",
            text: "The wall only holds members whose results were good enough to display; everyone who quit, plateaued, or left with an injury never made it onto the wall, and their absence is the gap in the proof.",
          },
          {
            id: "sv-2-c",
            text: "Members willing to have their photo on a public wall are self-selected for motivation and confidence — not a representative sample of people who try the program.",
          },
        ],
      },
      {
        id: "sv-3",
        text: "Members whose results were modest, who had quit after six weeks, or who had developed a knee problem and stopped coming found their experiences on no wall anywhere.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sv-4",
        text: "Head trainer Gordie, twenty years in, said he had never had a client fail to improve under his method — his long-term clients being, by that point, definitionally the ones who had not quit.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "sv-4-c",
        explanationOptions: [
          {
            id: "sv-4-a",
            text: "Gordie's long-term clients are a tight personal circle likely to report favorably on their trainer's methods regardless of the actual outcomes.",
          },
          {
            id: "sv-4-b",
            text: "Twenty years of personal observation is a vivid story, but a single trainer's memory is too narrow a base from which to make a claim about a method's success rate.",
          },
          {
            id: "sv-4-c",
            text: "A long-term client is one who has not yet quit — anyone Gordie's method failed or frustrated enough to leave is no longer a long-term client and so no longer counts as evidence.",
          },
        ],
      },
      {
        id: "sv-5",
        text: "A member-retention report, buried in a spreadsheet that had never been projected on the smoothie-bar television, showed that fifty-four percent of new memberships lapsed within ninety days.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "sv-6",
        text: "A new before-and-after photo went up on Friday, bringing the total to thirty-seven.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-rootstock-trial",
    title: "The Feature Review",
    difficulty: "intermediate",
    includedLabels: ["cherry-picking", "biased-sample"],
    sentences: [
      {
        id: "cb-1",
        text: "The product team met to decide whether to roll the new recommendation algorithm out to all users.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cb-2",
        text: "The PM's slides featured the six power users whose daily engagement had doubled, each one shown in a rising line — but the deck ended there, skipping the fourteen users in the same test cohort who had emailed support asking how to turn it off.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "cb-2-a",
        explanationOptions: [
          {
            id: "cb-2-a",
            text: "The six positive cases and the fourteen negative ones are both from the same cohort; the slides show one half and end before the other — the selection decides the story, not the results.",
          },
          {
            id: "cb-2-b",
            text: "The power users in the cohort were already the most engaged before the trial, so the sample can't show what the algorithm does for a typical user.",
          },
          {
            id: "cb-2-c",
            text: "Six users is far too small a group from which to conclude anything about how the algorithm will perform across the full product.",
          },
        ],
      },
      {
        id: "cb-3",
        text: "Lena, who ran the data team, had the full cohort breakdown open in another tab and said nothing while the room admired the chart.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cb-4",
        text: "For a broader read, the researcher had surveyed attendees at the company's annual user conference and found nine out of ten in favor — the kind of result you might expect from a crowd that had paid to fly across the country to spend a weekend talking about the product.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "cb-4-c",
        explanationOptions: [
          {
            id: "cb-4-a",
            text: "The researcher may have set aside negative responses from the conference before presenting, leaving only the favorable answers to reach the room.",
          },
          {
            id: "cb-4-b",
            text: "Conference attendees who are still active fans of the product are those it hasn't already lost — earlier unhappy users stopped engaging long before the conference mailing list was built.",
          },
          {
            id: "cb-4-c",
            text: "Conference attendees self-select by enthusiasm — they are already among the most committed users; the skeptics and the indifferent, who never registered for the event, were never put the question.",
          },
        ],
      },
      {
        id: "cb-5",
        text: "The support queue, full of tickets from users who had never been near a conference and had strong opinions about the algorithm, held a different distribution.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cb-6",
        text: "The algorithm shipped to twenty percent of users, and the A/B results were due in six weeks.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-high-hut",
    title: "The Wellness Thread",
    difficulty: "intermediate",
    includedLabels: ["biased-sample", "survivorship-bias"],
    sentences: [
      {
        id: "bv-1",
        text: "A nutritionist with a large following posted a question to her audience: was the sixteen-hour fasting protocol actually manageable for working parents?",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bv-2",
        text: "The thread filled quickly with enthusiastic replies, and she took this as confirmation that the protocol was broadly workable — though everyone responding was there because they already found her content compelling enough to follow, which was not a random draw from the population of working parents.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "bv-2-b",
        explanationOptions: [
          {
            id: "bv-2-a",
            text: "She may have highlighted the most enthusiastic replies when framing her conclusions, overlooking the more cautious responses further down.",
          },
          {
            id: "bv-2-b",
            text: "Her followers are there because they already found her approach worth subscribing to — a community pre-selected for alignment with her methods before the question was even asked; working parents who had tried fasting and given up on her account were no longer in the thread.",
          },
          {
            id: "bv-2-c",
            text: "A comment thread with hundreds of replies is still a small and self-selected slice of all the working parents who might try this protocol — too few cases to conclude it would be manageable broadly.",
          },
        ],
      },
      {
        id: "bv-3",
        text: "Working parents who had spent several weeks attempting the protocol, found it incompatible with shift patterns and school pick-ups, and eventually stopped following her account had no thread to comment on.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bv-4",
        text: "Her long-term clients, she added — twelve people still working with her after three years, all thriving on the protocol — would have been more useful evidence if long-term clients weren't, by definition, the ones who hadn't quit.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "bv-4-a",
        explanationOptions: [
          {
            id: "bv-4-a",
            text: "A long-term client is someone who has not yet stopped — anyone the protocol didn't suit left the practice and ceased to be a long-term client, so the twelve are the survivors of the method, not a test of it.",
          },
          {
            id: "bv-4-b",
            text: "Twelve people working closely with the same practitioner over years are a circle too narrow and too personally invested to speak for working parents generally.",
          },
          {
            id: "bv-4-c",
            text: "Twelve clients is too small a group from which to draw conclusions about whether the protocol works for working parents as a category.",
          },
        ],
      },
      {
        id: "bv-5",
        text: "The thread reached four hundred comments before the day was out, nearly all of them positive.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "bv-6",
        text: "She pinned it to her profile as a resource.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-old-quarter",
    title: "The Investor's Lunch",
    difficulty: "intermediate",
    includedLabels: ["survivorship-bias", "cherry-picking"],
    sentences: [
      {
        id: "vc-1",
        text: "The question of joining a seed-stage investment fund came up at a lunch that had been scheduled for something else entirely.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vc-2",
        text: "Roland, the fund's most prominent backer, said the founders he had backed had all become excellent operators — and for evidence he gestured at the three sitting at the table, the founders whose companies had failed not being, on the whole, at the lunch.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "vc-2-c",
        explanationOptions: [
          {
            id: "vc-2-a",
            text: "Roland is pointing to only the three founders present and not mentioning other portfolio companies — showing the successes and keeping the rest offscreen.",
          },
          {
            id: "vc-2-b",
            text: "The three founders at the table all came from the same sector and the same cohort year, too narrow a group to speak for all the different kinds of founders Roland has backed.",
          },
          {
            id: "vc-2-c",
            text: "The founders Roland is gesturing at are the ones whose companies survived; the founders whose companies failed are not at this lunch, and their trajectories would say something different about what his backing produces.",
          },
        ],
      },
      {
        id: "vc-3",
        text: "A fund performance summary Roland had not circulated would have shown that fewer than a third of his investments had returned more than the original capital.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vc-4",
        text: "His co-presenter laid out the data: the three portfolio companies with the best return multiples, each detailed across two slides, while the spreadsheet in the folder — twenty-six further entries — sat between them, unread.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "vc-4-b",
        explanationOptions: [
          {
            id: "vc-4-a",
            text: "The three top performers likely had advantages before the fund invested, so citing them is drawing on an unrepresentative corner of the portfolio.",
          },
          {
            id: "vc-4-b",
            text: "The three best returns are on the slides and the other twenty-six entries are in the folder on the table — the full picture is present; the presentation of it is not.",
          },
          {
            id: "vc-4-c",
            text: "Three successes is too few cases from which to conclude anything about the fund's overall performance.",
          },
        ],
      },
      {
        id: "vc-5",
        text: "Nobody asked about the folder.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "vc-6",
        text: "Two people at the table agreed to invest before the coffee arrived.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-crossing-question",
    title: "The Difficulty Setting",
    difficulty: "intermediate",
    includedLabels: ["cherry-picking", "biased-sample", "survivorship-bias"],
    sentences: [
      {
        id: "ev-1",
        text: "When the studio announced it was considering an optional easy mode for its cult-hit combat game, the internet organized its opinions quickly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ev-2",
        text: "The community manager posted a round-up of press quotes — five lines praising the game's punishing design — and stopped there, just before the paragraph in the largest review that called the difficulty a meaningful accessibility barrier.",
        labels: ["cherry-picking"],
        primaryLabel: "cherry-picking",
        isTarget: true,
        correctExplanationId: "ev-2-a",
        explanationOptions: [
          {
            id: "ev-2-a",
            text: "The five favorable lines and the critical paragraph are from the same coverage; the post ends where it needs to, and what it stops reading before is doing the arguing.",
          },
          {
            id: "ev-2-b",
            text: "Press outlets that review this genre over-represent enthusiast journalists, so the quotes can't speak for the broader player base that might want an easy mode.",
          },
          {
            id: "ev-2-c",
            text: "Five quotes from a handful of outlets are too few data points from which to conclude that praise for the difficulty is the dominant critical view.",
          },
        ],
      },
      {
        id: "ev-3",
        text: "That paragraph had been widely circulated when the review first published and had prompted the accessibility discussion the studio was now navigating.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ev-4",
        text: "A poll pinned to the game's official subreddit found seventy-two percent of voters opposed to adding an easy mode — a result from a community that had self-selected, by building a subreddit around a notoriously hard game, for exactly the kind of player most likely to want things to stay hard.",
        labels: ["biased-sample"],
        primaryLabel: "biased-sample",
        isTarget: true,
        correctExplanationId: "ev-4-c",
        explanationOptions: [
          {
            id: "ev-4-a",
            text: "The subreddit's moderators may have removed dissenting comments before the poll closed, shaping the visible result before it was cited.",
          },
          {
            id: "ev-4-b",
            text: "Seventy-two percent is a strong majority, but one subreddit poll is a small sample — far too few voters to represent everyone who plays or might play the game.",
          },
          {
            id: "ev-4-c",
            text: "The subreddit exists because dedicated fans of this specific hard game built it — players who found the difficulty off-putting bought the game, bounced, and never subscribed; the poll captures exactly the group most motivated to preserve the current design.",
          },
        ],
      },
      {
        id: "ev-5",
        text: "Players who had bought the game, spent an hour with it, and never returned to post about it were not subscribed to the subreddit and cast no votes.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ev-6",
        text: "Veteran players in the thread were certain the difficulty was the whole point, because everyone they knew who still played regularly had come to love it — the phrase \"everyone they knew who still played\" being, of course, a description of the players the difficulty had not driven away.",
        labels: ["survivorship-bias"],
        primaryLabel: "survivorship-bias",
        isTarget: true,
        correctExplanationId: "ev-6-b",
        explanationOptions: [
          {
            id: "ev-6-a",
            text: "The veterans are reasoning from years of personal experience with one game, setting a vivid personal story against the studio's broader player data.",
          },
          {
            id: "ev-6-b",
            text: "The players veterans \"know who still play\" are precisely those the difficulty didn't push out; anyone it drove away stopped playing and is no longer part of that social circle, so their evidence has been filtered clean before they consult it.",
          },
          {
            id: "ev-6-c",
            text: "Veteran players in any fan community self-select for attachment to the product, so their satisfaction with the design can't speak for the wider audience the easy mode would reach.",
          },
        ],
      },
      {
        id: "ev-7",
        text: "The studio shipped the easy mode three months later, noted it was optional, and moved on to the next patch.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
