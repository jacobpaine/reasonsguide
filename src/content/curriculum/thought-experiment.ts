import type { Lesson } from "@/domain/types";

export const thoughtExperimentLesson: Lesson = {
  id: "thought-experiment",
  title: "Thought experiments",
  status: "ready",
  labelIds: ["thought-experiment"],
  definition:
    "A thought experiment constructs a hypothetical scenario — a deliberate 'what if' — to test whether a principle holds, reveal its implications, or expose its limits. The scenario makes no claim about the real world: you build it, reason inside it consistently, and read what the outcome tells you about the principle under test. The hypothetical is the instrument; the principle is the subject.",
  memoryHook: "Build the fake world to learn about the real principle.",
  soundsLike: [
    "Suppose everyone did this — what would follow?",
    "Imagine a world where X is true. Where does that lead?",
    "For the sake of argument, let's grant the principle and see what it entails.",
    "If we ran the rule forward from this moment, what would we find at the end?",
  ],
  workedExamples: [
    {
      id: "te-w1",
      title: "The permission that couldn't survive itself",
      passage: [
        "The committee was debating whether members could skip the formal request process when a task was small and the member was already on site.",
        "The chair paused: 'Suppose we grant this permission. Now suppose every member applies the same reasoning on every visit they judge small enough — what does that look like?'",
        "Nobody was predicting that everyone would in fact do this; the hypothetical was a test of the permission's logic, not a forecast of behavior.",
        "A permission that collapsed under its own universalization was not a sound permission.",
      ],
      explanation:
        "The chair is not predicting behavior, explaining a past problem, or comparing this committee to a similar one. She constructs a hypothetical world — everyone applies the permission — and reasons inside it to see whether the permission survives its own logic. The imaginary scenario is the instrument; the principle is what gets tested. That is the distinctive move of thought experiment.",
    },
    {
      id: "te-w2",
      title: "The pier that wasn't built yet",
      passage: [
        "The harbor board wanted to know whether the proposed pier design could withstand a fifty-year storm.",
        "No such storm had arrived in living memory, and none was forecast.",
        "The engineer said: 'Suppose one arrives at high tide tonight,' and ran the scenario on paper — tide gauge at this height, wave period at this interval, forces at the base of each support.",
        "The foundation gave way in the model at hour six; the design was revised before a stone was placed.",
      ],
      explanation:
        "The engineer did not observe a storm, explain a past one, or compare this pier to another pier in another harbor. She constructed a hypothetical event — precise conditions, consistent physics — and reasoned inside it to discover what the design would do. No existing mechanism was traced, no two real cases compared. The imagined storm was the controlled environment for testing a real design against a real principle.",
    },
  ],
  guidedExamples: [
    {
      id: "te-g1",
      passage: [
        "A manager asked her team whether it was acceptable to take home a minor office supply now and then.",
        "Several said yes; it was small and barely noticed.",
        "She asked them to try a different question: 'Suppose everyone in the company made the same judgment, as often as they liked. What would the supply room look like in six months?'",
        "The room, they all agreed, would be empty.",
        "'Not to predict what will happen,' she said, 'but to test whether the permission makes sense at all.'",
      ],
      prompt: "What work does the imagined 'everyone' scenario do here?",
      hint: "Notice what the manager says the exercise is not for.",
      choices: [
        {
          id: "te-g1-a",
          text: "It tests whether the permission survives being applied by everyone who would be covered by it.",
          isCorrect: true,
          feedback:
            "Right. The manager isn't forecasting behavior — she says so directly. She builds a hypothetical world where the permission is universally applied and reasons inside it: if the permission can't survive that scenario, it isn't really sound. The imagined empty supply room is the outcome of reasoning within the hypothetical, not a prediction.",
        },
        {
          id: "te-g1-b",
          text: "It proves that most employees would take supplies if they could.",
          isCorrect: false,
          feedback:
            "No evidence about what employees actually do is gathered, and the manager explicitly sets aside the question of what will happen. Inductive reasoning generalizes from real cases; this argument doesn't rest on any. The scenario is constructed to test a principle, not observed to estimate a rate.",
        },
        {
          id: "te-g1-c",
          text: "It compares this workplace to other companies where supply theft has been a problem.",
          isCorrect: false,
          feedback:
            "No other workplace appears in the reasoning. Analogical reasoning maps a real case onto another real case; thought experiments construct a scenario that doesn't exist and reason within it. The empty supply room isn't somewhere the manager has seen — it's a hypothetical built to test the logic of the permission.",
        },
      ],
    },
    {
      id: "te-g2",
      passage: [
        "The merchant had always said he gave generously because generosity was simply right.",
        "A philosopher at his table asked him to try a thought experiment: 'Suppose you could give the same amount, but your name was never attached — no record, no thanks, not even a rumor.'",
        "'Would the amount change?' she asked.",
        "The merchant was quiet longer than he expected to be.",
      ],
      prompt: "What is the philosopher's hypothetical designed to reveal?",
      hint: "What single variable changes between the real case and the imagined one?",
      choices: [
        {
          id: "te-g2-a",
          text: "Whether the merchant's generosity depends on recognition, or holds when recognition is removed.",
          isCorrect: true,
          feedback:
            "Exactly. The hypothetical removes one variable — others knowing — while holding everything else constant. If the amount changes under those conditions, then the merchant's stated principle has an unacknowledged condition. The imagined anonymity is the instrument; what motivates the giving is what's being tested.",
        },
        {
          id: "te-g2-b",
          text: "What the correct amount to give actually is.",
          isCorrect: false,
          feedback:
            "No standard for the right amount is invoked — the amount is held fixed between the real case and the hypothetical. The question is about the basis for giving, not the size. Moral reasoning that derived the right amount would invoke a duty or principle and apply it; this argument builds a scenario to isolate motivation.",
        },
        {
          id: "te-g2-c",
          text: "Whether giving produces good outcomes for the recipient.",
          isCorrect: false,
          feedback:
            "The gift's effects on the recipient are the same whether or not anyone knows its source. The thought experiment holds the gift constant and alters the visibility — to test the giver's motivation, not to evaluate the gift. Tracing outcomes would be causal or consequential reasoning; constructing a scenario to isolate a variable is the thought experiment's move.",
        },
      ],
    },
    {
      id: "te-g3",
      passage: [
        "The library board proposed removing any book borrowed fewer than eight times in five years.",
        "Before the vote, the librarian asked the board to try this: 'Imagine the rule had been in force for the past thirty years. Walk through which titles would be gone.'",
        "The board named several; a dozen were now considered essential — available in those years to the readers who'd eventually found them.",
        "The rule survived the vote, but only with an exemption for any volume more than fifty years old.",
      ],
      prompt: "Why does the librarian ask the board to run the rule backward through time?",
      hint: "Is she comparing this library to another, or reasoning within a hypothetical?",
      choices: [
        {
          id: "te-g3-a",
          text: "She constructs a hypothetical to test whether the rule produces acceptable results when applied consistently.",
          isCorrect: true,
          feedback:
            "Right. No books have actually been removed under this rule — it hasn't existed yet. The librarian builds a fictional scenario (thirty years under the rule) and asks the board to reason inside it. What they find — titles that would have been lost and later became essential — is evidence about the rule drawn from the hypothetical, not from any real removal record.",
        },
        {
          id: "te-g3-b",
          text: "She generalizes from past removal decisions to predict what this rule will do.",
          isCorrect: false,
          feedback:
            "No actual removals under this rule have occurred; it is being proposed now. Inductive reasoning would need real cases to generalize from — a track record of the rule in operation. The librarian's scenario is invented, not observed, which is what makes it a thought experiment rather than an induction.",
        },
        {
          id: "te-g3-c",
          text: "She compares this library's collection to another library's experience with a similar rule.",
          isCorrect: false,
          feedback:
            "No other library appears. Analogical reasoning maps the experience of a real institution onto this one. The librarian instead builds a fictional past for this very library — a controlled scenario — and asks what it would reveal. The anchor is imagined, not real; reasoning inside it, not from it, is the thought experiment's move.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "te-m1",
      passage: [
        "To test whether his pricing principle was sound, the merchant asked himself: 'Suppose a second seller appeared with the same goods at half the price. Would my customers have been wrong to go to her?'",
        "No such competitor existed; the question was a test of whether his pricing could be justified on principle, not merely on habit.",
      ],
      options: ["thought-experiment", "abductive", "practical"],
      correctLabel: "thought-experiment",
      explanation:
        "The merchant is not inferring the cause of any observation (abductive) or selecting a means to a goal he holds (practical). He builds a hypothetical — a competitor who doesn't exist — and reasons inside it to test whether his pricing principle can survive scrutiny. The imagined rival is the instrument; the principle is the subject.",
    },
    {
      id: "te-m2",
      passage: [
        "The new children's clinic was designed after the one in Drenham — the same room layout, the same appointment flow, the same staffing ratios.",
        "Drenham's waiting times dropped by a third within a year; the planners expected similar results here.",
      ],
      options: ["analogical", "thought-experiment", "inductive"],
      correctLabel: "analogical",
      explanation:
        "Two real institutions are compared — Drenham (known, operating) and this clinic (new). The shared features carry Drenham's result across to the new case. No hypothetical is constructed; the anchor is a real past case. Analogy maps real onto real; thought experiment constructs a scenario that doesn't exist.",
    },
    {
      id: "te-m3",
      passage: [
        "'Before we adopt this exception to the scheduling rule,' the coordinator said, 'suppose the exception exists and we're a year from now. Which meeting times have slipped, and which teams have been affected?'",
        "Nobody was claiming to predict the future; the scenario was a test of whether the exception was as harmless as it appeared.",
      ],
      options: ["thought-experiment", "causal", "dialectical"],
      correctLabel: "thought-experiment",
      explanation:
        "The coordinator is not tracing an existing mechanism (causal) and is not raising and answering a specific objection (dialectical). She constructs a hypothetical future — the exception in force for a year — and asks the team to reason inside it. The imagined year is the controlled environment; whether the exception survives inspection is the finding.",
    },
    {
      id: "te-m4",
      passage: [
        "The policy states that any document marked 'confidential' must be stored in the locked cabinet.",
        "This memo is marked 'confidential.'",
        "So this memo must go in the locked cabinet.",
      ],
      options: ["deductive", "thought-experiment", "classification"],
      correctLabel: "deductive",
      explanation:
        "A rule covers all 'confidential' documents; the memo satisfies the rule's condition; the conclusion follows necessarily. No hypothetical is constructed, and no principle is being tested — the rule already exists and this case already falls under it. Deduction applies a known rule; thought experiment tests whether a proposed principle would hold.",
    },
    {
      id: "te-m5",
      passage: [
        "To examine his own commitment to fairness, the judge imagined swapping positions with the claimant: same facts, same courtroom, but he was the one making the claim instead of deciding it.",
        "His ruling, he found, looked different from that angle.",
        "He revised it before it was written.",
      ],
      options: ["thought-experiment", "moral", "comparative"],
      correctLabel: "thought-experiment",
      explanation:
        "The judge is not applying a moral principle to evaluate conduct (moral), and is not ranking two real options against each other (comparative). He constructs a hypothetical — himself in the claimant's position — and reasons inside it to test whether his ruling survives a change in viewpoint. The imagined swap is the instrument; the principle (his commitment to fairness) is what gets tested.",
    },
  ],
  unlockChallenge: [
    {
      id: "te-u1",
      passage: [
        "A council member proposed allowing residents to park briefly on the pavement outside their own homes.",
        "A colleague said: 'Suppose the exception passes. Now suppose every resident who is 'just running in' applies it at the same moment during the school run. Walk me through the street.'",
        "The pavements were impassable in the scenario; the exception failed the test.",
      ],
      options: ["thought-experiment", "causal", "practical"],
      correctLabel: "thought-experiment",
      explanation:
        "No actual traffic event is being analyzed (causal), and no means-to-goal choice is being made (practical). The colleague builds a hypothetical world — everyone applies the exception simultaneously — and reasons inside it to see what the principle produces. The imagined street is the instrument; the exception's logic is what gets tested.",
    },
    {
      id: "te-u2",
      passage: [
        "The city's composting scheme had been modeled on the one running in Fenbridge for three years.",
        "Fenbridge shared the same household density, the same collection schedule, and the same contractor.",
        "The city expected contamination rates to settle near Fenbridge's, which had held below five percent.",
      ],
      options: ["analogical", "thought-experiment", "inductive"],
      correctLabel: "analogical",
      explanation:
        "The city is not building a hypothetical and reasoning inside it — it is mapping a real, operating case (Fenbridge) onto its own situation. The shared features carry Fenbridge's performance across. Analogy maps real onto real; thought experiment constructs a scenario that doesn't yet exist and reasons within it to test a principle.",
    },
    {
      id: "te-u3",
      passage: [
        "A philosopher asked her students to design inheritance law, with one condition: they would not be told, before voting, whether they would end up as heirs or not under the law they designed.",
        "Several who had argued for unlimited inheritance revised their positions.",
      ],
      options: ["thought-experiment", "moral", "dialectical"],
      correctLabel: "thought-experiment",
      explanation:
        "No moral principle is being applied to evaluate conduct (moral), and no objection is being raised and answered (dialectical). The philosopher constructs a hypothetical condition — ignorance of one's position — and asks what principles survive it. The constructed ignorance is the instrument; the students' positions on inheritance are what get tested.",
    },
    {
      id: "te-u4",
      passage: [
        "The engineer wanted to know whether the building's evacuation plan would hold if one stairwell were blocked.",
        "No emergency had occurred; the test was purely hypothetical.",
        "She ran the scenario: stairwell B closed, occupancy at full, alarms triggered at the three-minute mark.",
        "Evacuation time exceeded the safe limit; the plan was revised.",
      ],
      options: ["thought-experiment", "causal", "abductive"],
      correctLabel: "thought-experiment",
      explanation:
        "The engineer is not tracing the mechanism of an actual event (causal) or inferring the best explanation for an observed fact (abductive). She constructs a hypothetical — specific blockage, specific parameters — and reasons inside it to discover what the existing plan would produce. The scenario hasn't occurred; it is a controlled environment for testing the plan against a known standard.",
    },
  ],
};
