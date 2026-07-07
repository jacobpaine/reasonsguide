import type { Lesson } from "@/domain/types";

export const conceptualLesson: Lesson = {
  id: "conceptual",
  title: "Conceptual reasoning",
  status: "ready",
  labelIds: ["conceptual"],
  definition:
    "Conceptual reasoning works out what follows from the structure of an idea itself — what promising entails, what forgiveness excludes, what a gift must be free of. Where definitional reasoning pins a word's usage, conceptual reasoning unfolds the idea behind the word, and its conclusions hold in any vocabulary.",
  memoryHook: "Unfold what the idea already contains.",
  soundsLike: [
    "That's just what a promise is.",
    "You can't sell what you're giving — then it isn't a gift.",
    "Forgiving him while keeping the grudge isn't forgiving at all.",
  ],
  workedExamples: [
    {
      id: "cw-w1",
      title: "What a gift contains",
      passage: [
        "The squire announced a 'gift' of the meadow to the parish — rent to be paid to him annually, and the meadow returned should the parish displease him.",
        "The clerk observed that a gift is a transfer without price and without string; what carries rent and a leash is a lease.",
        "Nothing about the meadow needed inspecting — the arrangement failed to be a gift by its own structure.",
      ],
      explanation:
        "The clerk consults no dictionary and no statute; he unfolds the concept. A gift *as such* excludes payment and recall — take those exclusions away and the idea itself dissolves into something else. Conceptual conclusions have this signature: they hold however the parties label the arrangement.",
    },
    {
      id: "cw-w2",
      title: "What an apology requires",
      passage: [
        "The miller's note read: 'I apologize that your cart was where my barrels rolled.'",
        "The carter returned it, observing that an apology owns a wrong as the apologizer's — and this one placed the wrong in the cart's location.",
        "Whatever the note was, the concept of apology had no room for it.",
      ],
      explanation:
        "The carter reasons from apology's internal structure: owning fault is not a nicety of the word but a load-bearing part of the idea — remove it and what remains is an expression of regret about geography. Unfolding what a concept requires, and testing a case against the unfolding, is the whole method.",
    },
  ],
  guidedExamples: [
    {
      id: "cw-g1",
      passage: [
        "Rilla promised to keep the letters secret, then read them aloud — changing only the names — and held she'd kept her promise.",
        "Her brother disagreed: secrecy is about the matter told, not the labels on it; a secret retold with new names is told all the same.",
      ],
      prompt: "What kind of work is the brother's objection doing?",
      hint: "He isn't citing a rulebook. What is he unpacking?",
      choices: [
        {
          id: "cw-g1-a",
          text: "Unfolding what keeping-a-secret consists in, and showing Rilla's act falls outside it.",
          isCorrect: true,
          feedback:
            "Yes. The brother analyzes the concept: secrecy's object is the content, so name-swapping doesn't touch it. No dictionary or bylaw is consulted — the idea's own structure does the arguing.",
        },
        {
          id: "cw-g1-b",
          text: "Applying the household's written definition of 'secret'.",
          isCorrect: false,
          feedback:
            "No written definition exists or is cited — that's what would make it definitional. The brother reasons from what secrecy *is*, which would hold in any household and any language.",
        },
        {
          id: "cw-g1-c",
          text: "Predicting from past cases that the names will be guessed.",
          isCorrect: false,
          feedback:
            "Whether listeners guess is beside his point: even if no one guessed, the secret was told. The argument runs on the concept, not on likelihoods.",
        },
      ],
    },
    {
      id: "cw-g2",
      passage: [
        "The magistrate offered to 'pardon' the poacher on condition he first prove his innocence.",
        "The poacher's advocate rose: a pardon forgives guilt — to the provably innocent, there is nothing a pardon could do.",
        "The offer, he said, contradicted itself in four words.",
      ],
      prompt: "Where exactly does the contradiction live?",
      hint: "Set 'pardon' and 'prove innocence' side by side and look at what each assumes.",
      choices: [
        {
          id: "cw-g2-a",
          text: "Pardoning presupposes guilt; the condition presupposes innocence — the concept can't take the condition.",
          isCorrect: true,
          feedback:
            "Exactly. This is conceptual reasoning at its sharpest: the incoherence is internal to the idea, discoverable from the armchair, and no evidence about the poacher could repair it.",
        },
        {
          id: "cw-g2-b",
          text: "In the facts — the poacher probably wasn't innocent.",
          isCorrect: false,
          feedback:
            "The facts never enter. The offer would be incoherent for any poacher, guilty or not; the fault line runs through the concept, not the case.",
        },
        {
          id: "cw-g2-c",
          text: "In the magistrate's lack of authority to pardon.",
          isCorrect: false,
          feedback:
            "His authority is unchallenged. Even a king's pardon can't forgive the innocent — the limit belongs to what pardoning *is*.",
        },
      ],
    },
    {
      id: "cw-g3",
      passage: [
        "Is the lighthouse keeper's log a 'diary'?",
        "The bookseller shrugged at the word but pressed on the idea: a diary is kept for its keeper, answerable to no reader; the log is kept for the Board, answerable to inspection.",
        "Same nightly writing, opposite center of gravity — whatever we call it, it isn't the same kind of thing.",
      ],
      prompt: "Why does the bookseller say 'whatever we call it'?",
      hint: "What survives even if everyone agreed to use the word 'diary' for the log?",
      choices: [
        {
          id: "cw-g3-a",
          text: "Because the conceptual difference — private-facing versus inspection-facing — remains under any labeling.",
          isCorrect: true,
          feedback:
            "Right, and that phrase is the cleanest test for conceptual reasoning: a definitional dispute ends when the word is settled; a conceptual distinction persists in any vocabulary. Rename the log a diary and it is still answerable to the Board.",
        },
        {
          id: "cw-g3-b",
          text: "Because word choices never matter to reasoning.",
          isCorrect: false,
          feedback:
            "They matter enormously — the previous chapter was about exactly that. The point is narrower: *this* distinction outlives any word choice, which is what marks it conceptual.",
        },
        {
          id: "cw-g3-c",
          text: "Because the bookseller couldn't find the dictionary.",
          isCorrect: false,
          feedback:
            "The shrug at the word was deliberate: no dictionary would settle what the analysis settles. The idea's structure, not the entry, does the work.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "cw-m1",
      passage: [
        "The captain 'lent' the chronometer to the owner's son, both knowing it would never come back and neither expecting return.",
        "A loan without expected return isn't a loan at all, the mate noted — it's a gift wearing a loan's clothes, whatever the manifest says.",
      ],
      options: ["conceptual", "definitional", "classification"],
      correctLabel: "conceptual",
      explanation:
        "The mate unfolds lending's structure — expected return is load-bearing — and the conclusion holds 'whatever the manifest says'. Surviving relabeling is the conceptual mark.",
    },
    {
      id: "cw-m2",
      passage: [
        "The customs schedule defines 'spirits' as any drink above a stated strength, and the cider tested two degrees over.",
        "So the cider pays the spirits duty.",
      ],
      options: ["definitional", "conceptual", "deductive"],
      correctLabel: "definitional",
      explanation:
        "The question is settled by a stipulated definition tested against a measurement. No unfolding of what spirit-hood deeply is — the schedule's word governs, which is definitional reasoning's home ground.",
    },
    {
      id: "cw-m3",
      passage: [
        "The council 'consulted' the fishermen by announcing the decision and collecting their signatures after.",
        "Consultation, the pilot objected, means views heard while the matter is open — hear them after, and whatever happened, no consulting did.",
      ],
      options: ["conceptual", "moral", "dialectical"],
      correctLabel: "conceptual",
      explanation:
        "The pilot's argument runs on consultation's internal structure: openness of the question is part of the idea. It isn't (yet) a claim about what the council owed anyone — that would be the moral argument next door.",
    },
    {
      id: "cw-m4",
      passage: [
        "Trust once broken should be rebuilt slowly, the elder argued, and rebuilt trust ought to be tested before it is leaned on.",
        "Those who were wronged deserve that much caution from us.",
      ],
      options: ["moral", "conceptual", "practical"],
      correctLabel: "moral",
      explanation:
        "The 'ought' flows from what the wronged *deserve* — a value premise. An analysis of what trust consists in would be conceptual; a duty of caution toward the wronged is moral.",
    },
    {
      id: "cw-m5",
      passage: [
        "Can one volunteer be 'ordered' to volunteer for the night watch?",
        "The sergeant thought hard and gave it up: volunteering contains the choosing — order it, and obedience arrives, but the volunteering never does.",
      ],
      options: ["conceptual", "definitional", "practical"],
      correctLabel: "conceptual",
      explanation:
        "The impossibility is internal to the concept: choice is a constituent of volunteering, so commanded volunteering is a contradiction — in any regiment, under any regulation's wording.",
    },
  ],
  unlockChallenge: [
    {
      id: "cw-u1",
      passage: [
        "The innkeeper advertised a 'guarantee' that reserved rooms would be held — unless someone else took them first.",
        "A guarantee that yields to the first comer guarantees nothing, a guest observed; the exception doesn't weaken the idea, it evacuates it.",
      ],
      options: ["conceptual", "definitional", "claim-support"],
      correctLabel: "conceptual",
      explanation:
        "The guest unfolds what guaranteeing is — an assurance that binds — and shows the exception removes the binding itself. No wording of the advertisement could save it.",
    },
    {
      id: "cw-u2",
      passage: [
        "The regatta's rules define a 'finisher' as any boat crossing the line under its own sail before dark.",
        "The Petrel crossed at dusk under tow.",
        "The Petrel is no finisher within the rules.",
      ],
      options: ["definitional", "conceptual", "deductive"],
      correctLabel: "definitional",
      explanation:
        "A stipulated term, its requirements, a case that fails them. The rules' wording governs — change the wording and the answer could change, which is why this is definitional rather than conceptual.",
    },
    {
      id: "cw-u3",
      passage: [
        "The mayor proposed a 'surprise' festival for the returning crew, to be announced a month ahead so all could prepare.",
        "The clerk minuted, gently, that a surprise announced is a surprise spent — anticipation and surprise cannot share the same event.",
      ],
      options: ["conceptual", "practical", "causal"],
      correctLabel: "conceptual",
      explanation:
        "The clerk's point is structural: unexpectedness is what surprise *is*, so advance announcement doesn't reduce the surprise but abolishes it. The idea's own contents settle the matter.",
    },
  ],
};
