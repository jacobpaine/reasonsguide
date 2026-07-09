import type { Lesson } from "@/domain/types";

export const causalLesson: Lesson = {
  id: "causal",
  title: "Causal reasoning",
  status: "ready",
  labelIds: ["causal"],
  definition:
    "Causal reasoning is about what makes what happen: identifying causes, tracing effects, and proposing mechanisms. Good causal claims rest on more than sequence or coincidence — they point to a process that connects cause to effect, and they survive checks against rival causes.",
  memoryHook: "Cause = a connection you can trace, not just a sequence you noticed.",
  soundsLike: [
    "…which is what caused…",
    "Because of the…, the… happened.",
    "If we remove X, Y should stop.",
  ],
  workedExamples: [
    {
      id: "ca-w1",
      title: "A mechanism, not just a sequence",
      passage: [
        "The basement floods only after long rains, and only since the maple's roots cracked the drain tile.",
        "Water that once ran to the street now seeps through the crack into the foundation.",
        "The cracked tile is causing the flooding.",
      ],
      explanation:
        "This does more than notice that flooding followed the crack. It traces the mechanism — where the water used to go, where it goes now. Naming the pathway from cause to effect is what turns a suspicion into a causal argument.",
    },
    {
      id: "ca-w2",
      title: "Testing a cause by removing it",
      passage: [
        "The hens stopped laying in the week the new floodlight was installed.",
        "The farmer covered the light for five nights, and laying resumed.",
        "She uncovered it, and laying dropped again.",
        "The floodlight is disrupting the hens' laying.",
      ],
      explanation:
        "The strongest everyday causal evidence: remove the suspected cause and the effect stops; restore it and the effect returns. The two-way check rules out coincidence far better than the initial timing alone could.",
    },
  ],
  guidedExamples: [
    {
      id: "ca-g1",
      passage: [
        "The bakery's sourdough turned sour-sharp the same week the city changed the water supply.",
        "The baker mixed one batch with bottled spring water, and the old flavor returned.",
        "The new water supply is changing the bread.",
      ],
      prompt: "What makes this causal claim stronger than a mere hunch?",
      hint: "What did the baker actually do?",
      choices: [
        {
          id: "ca-g1-a",
          text: "The baker tested the cause by swapping it out and watching the effect change.",
          isCorrect: true,
          feedback:
            "Yes. Changing only the water and seeing the flavor follow is a small experiment — the heart of careful causal reasoning.",
        },
        {
          id: "ca-g1-b",
          text: "The timing matched: the flavor changed when the water changed.",
          isCorrect: false,
          feedback:
            "Timing raised the suspicion, but timing alone can mislead. The bottled-water test is what carries the argument.",
        },
        {
          id: "ca-g1-c",
          text: "Bakers are experts on bread.",
          isCorrect: false,
          feedback:
            "Expertise isn't the engine here. The swap test would be convincing from anyone — that's its virtue.",
        },
      ],
    },
    {
      id: "ca-g2",
      passage: [
        "Ice cream sales and drownings both rise in July.",
        "No one thinks the ice cream is pulling swimmers under.",
        "Summer heat drives both: more swimming, more dessert.",
      ],
      prompt: "What causal idea does this illustrate?",
      hint: "Two effects can share a parent.",
      choices: [
        {
          id: "ca-g2-a",
          text: "A common cause can make two unrelated things move together.",
          isCorrect: true,
          feedback:
            "Exactly. Heat causes both. When two things track each other, always ask whether a third thing drives them both.",
        },
        {
          id: "ca-g2-b",
          text: "Whichever rises first causes the other.",
          isCorrect: false,
          feedback:
            "Order alone proves nothing — that assumption is a famous trap you'll formally meet in the fallacies chapter.",
        },
        {
          id: "ca-g2-c",
          text: "Strong correlations are always causal.",
          isCorrect: false,
          feedback:
            "This example exists to show the opposite: a strong seasonal correlation with no causal link between the pair at all.",
        },
      ],
    },
    {
      id: "ca-g3",
      passage: [
        "After the orchard installed beehives, fruit yields rose by a third.",
        "The same spring, the county banned a common pesticide.",
        "The grower credits the bees for the whole increase.",
      ],
      prompt: "What should give us pause about the grower's conclusion?",
      hint: "How many things changed that spring?",
      choices: [
        {
          id: "ca-g3-a",
          text: "Two causes changed at once, so the credit can't all go to one.",
          isCorrect: true,
          feedback:
            "Right. The pesticide ban is a rival (or partner) cause. Careful causal reasoning holds back until the candidates can be separated.",
        },
        {
          id: "ca-g3-b",
          text: "A one-third increase is too small to need a cause.",
          isCorrect: false,
          feedback:
            "The size of the effect isn't the issue — the entanglement of two simultaneous causes is.",
        },
        {
          id: "ca-g3-c",
          text: "Bees can't affect fruit yields.",
          isCorrect: false,
          feedback:
            "They certainly can — pollination is a real mechanism. The problem is attribution, not possibility.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "ca-m1",
      passage: [
        "Since the streetlamp outside the shop burned out, evening break-ins on the block have tripled.",
        "Darkness gives cover, and the three break-ins all happened in the unlit stretch.",
        "The dead lamp is likely contributing to the break-ins.",
      ],
      options: ["causal", "inductive", "analogical"],
      correctLabel: "causal",
      explanation:
        "A mechanism (cover of darkness) and location evidence connect cause to effect — more than mere sequence.",
    },
    {
      id: "ca-m2",
      passage: [
        "Break-ins on the block have risen every October for five years.",
        "They will probably rise again this October.",
      ],
      options: ["inductive", "causal", "abductive"],
      correctLabel: "inductive",
      explanation: "A seasonal pattern projected forward, with no cause proposed. Prediction from pattern is induction.",
    },
    {
      id: "ca-m3",
      passage: [
        "The shop's window box wilted within days, while the identical box across the street thrives.",
        "The best explanation is that the shop's box sits over the bakery vent, which bakes its soil dry.",
      ],
      options: ["abductive", "causal", "inductive"],
      correctLabel: "abductive",
      explanation:
        "A puzzling difference gets a best-fit explanation. (The explanation is causal in content, but the move — inferring a hypothesis from clues — is abduction.)",
    },
    {
      id: "ca-m4",
      passage: [
        "Watering the ferns with rain barrels stopped the leaf-tip browning within a month.",
        "Switching back to tap water browned the new fronds again.",
        "The tap water's minerals are causing the browning.",
      ],
      options: ["causal", "analogical", "deductive"],
      correctLabel: "causal",
      explanation: "Remove the cause, effect stops; restore it, effect returns. The two-way test is causal reasoning at its most persuasive.",
    },
    {
      id: "ca-m5",
      passage: [
        "Repainting the pier railings before winter halved corrosion repairs in Grayport.",
        "Our pier faces the same salt spray on the same coast.",
        "A pre-winter repaint would probably cut our repairs too.",
      ],
      options: ["analogical", "causal", "claim-support"],
      correctLabel: "analogical",
      explanation:
        "The engine is a comparison between relevantly similar piers. Causal facts appear, but the inference transfers a result across cases.",
    },
  ],
  unlockChallenge: [
    {
      id: "ca-u1",
      passage: [
        "The choir's hoarseness began the week the heating system started running dry air through the hall.",
        "On the two rehearsal nights the humidifier ran, no one went hoarse.",
        "The dry air is causing the hoarseness.",
      ],
      options: ["causal", "inductive", "abductive"],
      correctLabel: "causal",
      explanation: "Timing plus an on/off check against the suspected cause — the effect follows the humidity, not the calendar.",
    },
    {
      id: "ca-u2",
      passage: [
        "Every rehearsal this term has ended by nine.",
        "Tonight's rehearsal will probably end by nine.",
      ],
      options: ["inductive", "causal", "deductive"],
      correctLabel: "inductive",
      explanation: "A pattern projected forward; nothing about what causes rehearsals to end.",
    },
    {
      id: "ca-u3",
      passage: [
        "The seed potatoes stored above the stove sprouted a month early; those in the cellar didn't.",
        "Warmth triggers sprouting, and the stove shelf runs ten degrees warmer.",
        "The stove's heat caused the early sprouting.",
      ],
      options: ["causal", "analogical", "claim-support"],
      correctLabel: "causal",
      explanation:
        "A comparison group (the cellar potatoes), a mechanism (warmth triggers sprouting), and a measured difference connect cause to effect.",
    },
    {
      id: "ca-u4",
      passage: [
        "The office air-conditioning started cycling on and off irregularly the same week facilities swapped in a new thermostat.",
        "When they replaced the new thermostat with the old model, the cycling stopped immediately.",
        "The new thermostat was causing the irregular cycling.",
      ],
      options: ["causal", "inductive", "deductive"],
      correctLabel: "causal",
      explanation:
        "The suspected cause is removed and the effect stops — the two-way check that separates a genuine causal connection from mere coincidence.",
    },
    {
      id: "ca-u5",
      passage: [
        "Switching from fluorescent to LED lighting stopped daily headaches among the data-entry team within a week.",
        "The design studio next door has the same complaint and the same fluorescent setup.",
        "LED lights would probably stop the studio team's headaches too.",
      ],
      options: ["analogical", "causal", "inductive"],
      correctLabel: "analogical",
      explanation:
        "The conclusion moves from one team's result to another because they share the relevant conditions — a comparison between cases, not a tracing of mechanism.",
    },
    {
      id: "ca-u6",
      passage: [
        "Jaya's sourdough starter smells unpleasantly cheesy rather than tangy today, though she hasn't changed her routine.",
        "She left the jar open on the counter near a bowl of overripe fruit last night.",
        "The best explanation is that wild yeast from the fruit found its way in and shifted the culture.",
      ],
      options: ["abductive", "causal", "inductive"],
      correctLabel: "abductive",
      explanation:
        "An unexpected change prompts the hypothesis that best accounts for it — no toggle test was run and no mechanism independently confirmed. Inferring a best-fit explanation from a clue is abduction, not causal reasoning.",
    },
  ],
};
