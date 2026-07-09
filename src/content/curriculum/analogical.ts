import type { Lesson } from "@/domain/types";

export const analogicalLesson: Lesson = {
  id: "analogical",
  title: "Analogical reasoning",
  status: "ready",
  labelIds: ["analogical"],
  definition:
    "Analogical reasoning concludes that two things probably share a further property because they are alike in relevant, known ways. Its strength depends on whether the similarities actually matter to the conclusion — and on whether any difference breaks the comparison.",
  memoryHook: "Alike here, so probably alike there.",
  soundsLike: [
    "It's just like…",
    "By the same logic…",
    "If it worked there, it should work here.",
  ],
  workedExamples: [
    {
      id: "an-w1",
      title: "Two harbors",
      passage: [
        "Grayport dredged its harbor mouth and cut ferry delays in half.",
        "Our harbor silts up the same way, from the same river, at the same rate.",
        "Dredging here would probably cut our delays too.",
      ],
      explanation:
        "The argument lists the likenesses that matter — same cause of silting, same river dynamics — and projects Grayport's result onto a relevantly similar case. The named similarities are doing the work; that's what separates analogy from mere resemblance.",
    },
    {
      id: "an-w2",
      title: "An old remedy for a new problem",
      passage: [
        "When the archive's paper maps began to curl, storing them flat under linen weights stopped the damage.",
        "The new photograph collection is curling in the same room, from the same dry air.",
        "Flat storage under weights will probably help the photographs as well.",
      ],
      explanation:
        "The shared cause — dry air in the same room — makes the transfer plausible. A careful reader still checks the differences: photographs have emulsion layers that maps lack. Analogies are probabilistic precisely because differences can matter.",
    },
  ],
  guidedExamples: [
    {
      id: "an-g1",
      passage: [
        "Teaching a child to swim goes best with short, frequent lessons.",
        "Learning an instrument is also a physical skill built by habit.",
        "So short, frequent practice will probably beat long, rare sessions on the violin.",
      ],
      prompt: "What likeness carries this argument?",
      hint: "Which shared feature is supposed to make the transfer work?",
      choices: [
        {
          id: "an-g1-a",
          text: "Both are physical skills built through habit.",
          isCorrect: true,
          feedback:
            "Yes — that's the relevant similarity. If skill-building really works the same way in both domains, the conclusion inherits its plausibility.",
        },
        {
          id: "an-g1-b",
          text: "Both involve children.",
          isCorrect: false,
          feedback:
            "The argument never restricts itself to children — and being a child isn't the feature that would make short lessons effective.",
        },
        {
          id: "an-g1-c",
          text: "Both take place indoors.",
          isCorrect: false,
          feedback:
            "An accidental resemblance. Analogies live or die on similarities that are relevant to the conclusion, and location isn't one.",
        },
      ],
    },
    {
      id: "an-g2",
      passage: [
        "Our sister town's night market thrived once it moved beside the train station.",
        "Their town has late train service; ours ends at six.",
        "Moving our market to the station may not bring the same crowds.",
      ],
      prompt: "What is the speaker doing to the analogy?",
      hint: "Notice what the second sentence points out.",
      choices: [
        {
          id: "an-g2-a",
          text: "Testing it against a relevant difference between the two towns.",
          isCorrect: true,
          feedback:
            "Exactly. Late trains were plausibly what delivered the crowds. A difference in the very feature that did the work weakens the transfer.",
        },
        {
          id: "an-g2-b",
          text: "Rejecting all comparisons between towns.",
          isCorrect: false,
          feedback:
            "The speaker takes the comparison seriously — that's why the specific difference matters. Testing an analogy isn't discarding it.",
        },
        {
          id: "an-g2-c",
          text: "Adding a second example to strengthen the pattern.",
          isCorrect: false,
          feedback:
            "No new case is added. One comparison is being probed at its weakest joint: the difference in train service.",
        },
      ],
    },
    {
      id: "an-g3",
      passage: [
        "A city budget is like a household budget, so the city should never borrow.",
      ],
      prompt: "What question best tests this analogy?",
      hint: "Ask whether the two things are alike in the way that matters.",
      choices: [
        {
          id: "an-g3-a",
          text: "Do cities and households actually resemble each other in how borrowing works?",
          isCorrect: true,
          feedback:
            "Right. Cities differ from households in taxation, lifespan, and debt terms — differences aimed exactly at the conclusion. Whether the analogy survives depends on that check, and running the check is how analogies should be read.",
        },
        {
          id: "an-g3-b",
          text: "Is the speaker good with their own household budget?",
          isCorrect: false,
          feedback:
            "The speaker's finances are beside the point. Test the comparison, not the person making it.",
        },
        {
          id: "an-g3-c",
          text: "Do most people find the comparison persuasive?",
          isCorrect: false,
          feedback:
            "Popularity doesn't validate an analogy. What matters is whether the shared features are the ones that govern borrowing.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "an-m1",
      passage: [
        "The reading circle doubled attendance when it moved to Sunday mornings.",
        "The sketching club draws from the same neighborhood and meets in the same hall.",
        "A Sunday slot would probably help the sketching club too.",
      ],
      options: ["analogical", "inductive", "abductive"],
      correctLabel: "analogical",
      explanation:
        "One case is mapped onto another via named, relevant likenesses — same neighborhood, same venue. Classic analogy.",
    },
    {
      id: "an-m2",
      passage: [
        "Attendance at the sketching club has grown every month for a year.",
        "It will probably grow again next month.",
      ],
      options: ["inductive", "analogical", "deductive"],
      correctLabel: "inductive",
      explanation:
        "This projects one thing's own track record forward. No second, similar thing is doing any work — so it's induction, not analogy.",
    },
    {
      id: "an-m3",
      passage: [
        "The seedlings nearest the window are leggy and pale, while the rest are compact.",
        "The best explanation is that the window's old glass is filtering out the light they need.",
      ],
      options: ["abductive", "analogical", "inductive"],
      correctLabel: "abductive",
      explanation: "A puzzling difference is explained by a hypothesis fitted to the clues. Explanation-seeking, not comparison.",
    },
    {
      id: "an-m4",
      passage: [
        "Pruning the old pear tree hard in late winter brought it back to full fruit.",
        "The quince beside it is the same age, in the same soil, with the same overgrowth.",
        "A hard late-winter pruning would probably revive the quince as well.",
      ],
      options: ["analogical", "deductive", "claim-support"],
      correctLabel: "analogical",
      explanation:
        "Age, soil, and condition are the relevant shared features carrying the pear's result over to the quince.",
    },
    {
      id: "an-m5",
      passage: [
        "Any tree within two meters of the wall belongs to the parish.",
        "The quince is a meter from the wall.",
        "So the quince belongs to the parish.",
      ],
      options: ["deductive", "analogical", "inductive"],
      correctLabel: "deductive",
      explanation: "A rule plus a measurement force the conclusion — no likeness between cases is involved.",
    },
  ],
  unlockChallenge: [
    {
      id: "an-u1",
      passage: [
        "The harbor town saved its fishing fleet by forming a cooperative to share fuel costs.",
        "Our fleet faces the same rising fuel prices with the same small margins.",
        "A cooperative would probably help our fleet too.",
      ],
      options: ["analogical", "inductive", "abductive"],
      correctLabel: "analogical",
      explanation: "The named likenesses — same pressure, same margins — carry the other town's outcome across.",
    },
    {
      id: "an-u2",
      passage: [
        "Fuel prices have risen every quarter for two years.",
        "They will probably rise again next quarter.",
      ],
      options: ["inductive", "analogical", "deductive"],
      correctLabel: "inductive",
      explanation: "A single trend projected forward — no comparison case involved.",
    },
    {
      id: "an-u3",
      passage: [
        "Learning to read tide charts felt impossible until Amara practiced with real mornings at the dock.",
        "Reading star charts is the same kind of layered, symbolic map.",
        "Practicing under a real night sky will probably be what makes star charts click.",
      ],
      options: ["analogical", "abductive", "claim-support"],
      correctLabel: "analogical",
      explanation:
        "The relevant likeness — layered symbolic maps learned through real use — transfers the lesson from tides to stars.",
    },
    {
      id: "an-u4",
      passage: [
        "The downtown branch of a café chain added a dog-friendly patio and saw weekend revenue climb by thirty percent.",
        "Our branch has an unused side terrace with the same foot-traffic patterns and the same customer demographic.",
        "Making the terrace dog-friendly would probably lift our weekend revenue too.",
      ],
      options: ["analogical", "inductive", "abductive"],
      correctLabel: "analogical",
      explanation:
        "Named, relevant likenesses — matching foot traffic and customer base — carry the downtown branch's result across to this one. A second branch's track record is not the same thing as a pattern from the same place, which is what induction would need.",
    },
    {
      id: "an-u5",
      passage: [
        "Any item in the archive labelled 'restricted' requires a supervisor's signature to access.",
        "This folder is labelled 'restricted'.",
        "So this folder requires a supervisor's signature to access.",
      ],
      options: ["deductive", "analogical", "inductive"],
      correctLabel: "deductive",
      explanation:
        "A policy rule covers all restricted items; this folder falls under it; the conclusion follows necessarily. No similarity between comparable items is doing the work — only a rule and the fact that the folder satisfies its condition.",
    },
    {
      id: "an-u6",
      passage: [
        "The Westfield office cut meeting fatigue by switching their daily stand-up to a short walking loop around the building.",
        "Our team runs the same kind of brief check-in and has an accessible loop right outside the fire exit.",
        "A walking stand-up would probably help our team too.",
      ],
      options: ["analogical", "claim-support", "inductive"],
      correctLabel: "analogical",
      explanation:
        "The relevant likenesses — same meeting format, comparable walking route — justify transferring the Westfield result to this team. A key check: if the two offices differed on what made walking effective (say, floor count or climate), the analogy would weaken at exactly that point.",
    },
  ],
};
