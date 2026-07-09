import type { Lesson } from "@/domain/types";

export const practicalLesson: Lesson = {
  id: "practical",
  title: "Practical reasoning",
  status: "ready",
  labelIds: ["practical"],
  definition:
    "Practical reasoning moves from a goal and beliefs about means to a decision to act: I want G; doing A is the best available way to get G; so I should do A. Judging it means checking all three joints — is the goal worth having, does the means really deliver it, and at what cost compared to the alternatives.",
  memoryHook: "Goal plus best means points to the act.",
  soundsLike: [
    "If we want to make the tide, we should leave by noon.",
    "The surest way to save the roof is to fix it before the snows.",
    "Given what we're after, the cart road is the choice.",
  ],
  workedExamples: [
    {
      id: "pr-w1",
      title: "Making the tide",
      passage: [
        "The grain had to reach the island mill before the water fell too low for the causeway barge.",
        "The barge could cross only within two hours of high tide, and high tide came at four.",
        "So the carts needed to be loaded and at the slip by two — and Odd had them loading by ten.",
      ],
      explanation:
        "A goal (grain at the mill), a constraint on the means (the barge's tide window), and a decision that follows from putting them together. Notice the conclusion is an action, not a fact — that's what makes reasoning practical. The facts about tides merely serve the deciding.",
    },
    {
      id: "pr-w2",
      title: "Choosing among means",
      passage: [
        "Ista wanted the orchard cleared of wasps before the pickers came.",
        "Smoking the nests was fastest but risked the dry grass; moving the nests needed a steady hand she could hire; waiting for the cold would work but not in time.",
        "She hired the steady hand: slower than smoke, safer than smoke, and done before the picking — the best of the available ways.",
      ],
      explanation:
        "Practical reasoning at full stretch is comparative: not just 'this means works' but 'this means beats the alternatives once costs and risks are counted'. Ista's conclusion is strong because the rival means are named and weighed, not ignored.",
    },
  ],
  guidedExamples: [
    {
      id: "pr-g1",
      passage: [
        "The choir wants to sing the winter concert in the stone chapel.",
        "The chapel is only granted to groups on the parish register, and registration closes Friday.",
        "So the choir should register before Friday.",
      ],
      prompt: "What makes this practical reasoning rather than a plain deduction from the rules?",
      hint: "Look at what kind of thing the conclusion is.",
      choices: [
        {
          id: "pr-g1-a",
          text: "The conclusion is an action chosen to serve the choir's goal — the rule only shapes which action serves it.",
          isCorrect: true,
          feedback:
            "Yes. Deduction ends in a fact that must be true; practical reasoning ends in something to *do*. The registration rule enters as a constraint on the means, but the engine is the goal: no desire to sing, no reason to register.",
        },
        {
          id: "pr-g1-b",
          text: "The parish rule guarantees the conclusion the way a definition would.",
          isCorrect: false,
          feedback:
            "The rule guarantees only that unregistered groups don't get the chapel. 'Should register' follows from wanting the chapel — drop the want and the 'should' evaporates, which no deduction's conclusion would do.",
        },
        {
          id: "pr-g1-c",
          text: "It projects the choir's past registrations forward as a pattern.",
          isCorrect: false,
          feedback:
            "No past cases appear at all. The inference runs from goal and constraint to action — means-end reasoning, not pattern reasoning.",
        },
      ],
    },
    {
      id: "pr-g2",
      passage: [
        "To keep the lane passable in winter, the neighbors agreed someone must clear the leaves before the first frost seals them down.",
        "Burning them was quickest, but the smoke drifted into the almshouse windows.",
        "They raked and carted instead, taking the extra afternoon.",
      ],
      prompt: "Why is choosing the slower means still good practical reasoning?",
      hint: "What did the quick means cost that the slow one didn't?",
      choices: [
        {
          id: "pr-g2-a",
          text: "Because 'best means' weighs costs and side effects, not just speed — the smoke was a cost the afternoon wasn't.",
          isCorrect: true,
          feedback:
            "Right. A means that achieves the goal while harming something else you care about isn't the best means. Practical reasoning done well counts the whole price of each option, not just its efficiency.",
        },
        {
          id: "pr-g2-b",
          text: "It isn't — the fastest means is by definition the best.",
          isCorrect: false,
          feedback:
            "Speed is one virtue among several. If fastest were always best, no one would ever choose the safe road over the icy shortcut — and people rightly do.",
        },
        {
          id: "pr-g2-c",
          text: "Because slower work builds neighborly character.",
          isCorrect: false,
          feedback:
            "Perhaps, but that's not the argument given. The stated reason is the smoke in the almshouse windows — a concrete cost of the rejected means.",
        },
      ],
    },
    {
      id: "pr-g3",
      passage: [
        "Wren argued the village should buy the old forge: 'We want a meeting hall, and the forge is the only building for sale.'",
        "Sana asked two questions: is a hall worth the price, and is buying truly the only way — could the school host meetings on winter evenings instead?",
      ],
      prompt: "Which joints of Wren's practical argument is Sana testing?",
      hint: "A practical argument has a goal, a means, and a claim that the means is best.",
      choices: [
        {
          id: "pr-g3-a",
          text: "Whether the goal justifies its cost, and whether the proposed means is really the best available.",
          isCorrect: true,
          feedback:
            "Exactly — those are the two pressure points of any practical argument. The school-evenings question is especially telling: 'only building for sale' isn't 'only way to get a meeting place'.",
        },
        {
          id: "pr-g3-b",
          text: "Whether Wren truly wants a meeting hall.",
          isCorrect: false,
          feedback:
            "Sana grants the goal's sincerity. Her questions probe its worth and its means — the argument's joints, not the arguer's heart.",
        },
        {
          id: "pr-g3-c",
          text: "Whether the forge caused the village's lack of a hall.",
          isCorrect: false,
          feedback:
            "No causal history is in dispute. The questions are forward-looking — what to do — which is practical reasoning's home ground.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "pr-m1",
      passage: [
        "The beacon must be lit by dusk to bring the boats home through the fog.",
        "The cliff path takes an hour and the shore path two, and dusk is ninety minutes off.",
        "So Edda took the cliff path.",
      ],
      options: ["practical", "deductive", "causal"],
      correctLabel: "practical",
      explanation:
        "Goal (beacon lit by dusk), constraint (the paths' timings), action chosen to fit. The conclusion is a doing, selected as the means that serves the end.",
    },
    {
      id: "pr-m2",
      passage: [
        "The fog thickens over the point whenever the warm current meets the ebb tide.",
        "The two met an hour ago, which is why the channel is blind tonight.",
      ],
      options: ["causal", "practical", "inductive"],
      correctLabel: "causal",
      explanation:
        "This explains why something happens — mechanism, cause, effect. Nothing is being decided; the fog would thicken whatever anyone wanted.",
    },
    {
      id: "pr-m3",
      passage: [
        "To have cider at the wedding, the pressing must happen this week while the apples hold.",
        "The press can be hired now or owned never — the cooperage wants a year's notice for a new one.",
        "They hired the press for Thursday.",
      ],
      options: ["practical", "claim-support", "deductive"],
      correctLabel: "practical",
      explanation:
        "The goal (wedding cider) plus the window (apples, press availability) select the act. Means-end reasoning, concluded in a booking.",
    },
    {
      id: "pr-m4",
      passage: [
        "All hired presses must be returned scrubbed, by the cooperage's standing terms.",
        "Ours is a hired press.",
        "So ours must be returned scrubbed.",
      ],
      options: ["deductive", "practical", "authority"],
      correctLabel: "deductive",
      explanation:
        "A rule covering all hired presses covers this one — the conclusion is forced, and it's a fact about obligation under the terms, not a chosen means to anyone's goal.",
    },
    {
      id: "pr-m5",
      passage: [
        "Keeping the bees alive through winter is the whole of the goal.",
        "Feeding syrup is cheap but risks robbing; moving hives to the barn is labor but sure.",
        "With only six hives, the labor is small — so into the barn they go.",
      ],
      options: ["practical", "claim-support", "causal"],
      correctLabel: "practical",
      explanation:
        "Two means are weighed against the goal and one is enacted. The weighing may look like mere pro-and-con support, but the conclusion — an action in service of an end — marks it as practical reasoning.",
    },
  ],
  unlockChallenge: [
    {
      id: "pr-u1",
      passage: [
        "The manuscripts must be out of the tower before the roofers strip the leads next month.",
        "The crypt is dry, close, and empty since the new vestry was built.",
        "So the manuscripts should go to the crypt this week.",
      ],
      options: ["practical", "deductive", "abductive"],
      correctLabel: "practical",
      explanation:
        "A deadline-shaped goal, a fitting means, an action concluded. The crypt's dryness matters only because of what the archivist is trying to achieve.",
    },
    {
      id: "pr-u2",
      passage: [
        "The tower damp rises worst in the spring thaw, when meltwater stands against the north footing.",
        "That standing water is what has been spotting the lower shelves.",
      ],
      options: ["causal", "practical", "statistical"],
      correctLabel: "causal",
      explanation:
        "Cause traced to effect through a mechanism — no goal, no decision. It might *inform* a practical argument later, but by itself it explains rather than directs.",
    },
    {
      id: "pr-u3",
      passage: [
        "If the village wants the doctor to stay, it must offer her the empty glebe house.",
        "Lodging is the one thing her letters name as wanting, and no other house in the parish stands empty.",
        "The council voted to offer the glebe house that evening.",
      ],
      options: ["practical", "claim-support", "authority"],
      correctLabel: "practical",
      explanation:
        "Goal (keep the doctor), evidence about the effective means (her own letters), a decision enacted. The vote is the conclusion — practical reasoning ends in acts.",
    },
    {
      id: "pr-u4",
      passage: [
        "Milo needs to submit his grant application by Friday, and the portal requires two-factor authentication before it will accept a submission.",
        "Setting up two-factor takes ten minutes and must be done in advance.",
        "He set it up Wednesday morning.",
      ],
      options: ["practical", "deductive", "causal"],
      correctLabel: "practical",
      explanation:
        "A goal (submit by Friday) plus a prerequisite revealed by the constraint (authentication first) yields an action taken to clear the way — means-end reasoning concluded in a step.",
    },
    {
      id: "pr-u5",
      passage: [
        "All café staff must complete a food-safety refresher each calendar year — that's the franchise rule.",
        "Bex joined the café staff in January.",
        "Bex must complete the refresher before the year is out.",
      ],
      options: ["deductive", "practical", "authority"],
      correctLabel: "deductive",
      explanation:
        "A rule covering all staff covers Bex — the conclusion is forced once the rule and her membership are granted. No goal or chosen means is in play; the obligation follows necessarily from the premises.",
    },
    {
      id: "pr-u6",
      passage: [
        "The climbing wall has been quieter on Thursday evenings than on any other weekday, every week since it opened last spring.",
        "It will probably be quieter there again this Thursday evening.",
      ],
      options: ["inductive", "practical", "causal"],
      correctLabel: "inductive",
      explanation:
        "A recurring pattern across many past evenings is projected forward — no goal is stated, no action recommended, and no cause proposed. Extending an observed regularity one more instance is induction.",
    },
  ],
};
