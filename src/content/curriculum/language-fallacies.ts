import type { Lesson } from "@/domain/types";

export const languageFallaciesLesson: Lesson = {
  id: "language-fallacies",
  title: "When words break: language fallacies",
  status: "ready",
  labelIds: ["equivocation", "ambiguity", "composition", "division"],
  definition:
    "Language fallacies are failures of the word-and-structure reasoning you've learned. Equivocation shifts a key word's meaning mid-argument; ambiguity trades on a sentence that reads two ways; composition carries a property from parts to whole when it doesn't survive the trip; division carries one from whole to parts when it doesn't either. The definitional and part–whole disciplines — pin the word, license the transfer — are exactly what these four skip.",
  memoryHook: "Same word, same reading, licensed trip — or no argument.",
  soundsLike: [
    "Free is free, whichever way you take it. (equivocation)",
    "That's not how we read that clause. (ambiguity)",
    "Every part is excellent, so the whole must be. (composition)",
    "It's a wealthy guild, so its members must be wealthy. (division)",
  ],
  workedExamples: [
    {
      id: "lf-w1",
      title: "One word, two prices",
      passage: [
        "The notice promised that mooring at the new quay was free.",
        "When the harbor office billed for water and watchman, it explained that the mooring itself — the tying of the rope — had cost nothing, as promised.",
        "The fishermen had read 'free mooring' as a free berth; the office had sold them a free knot.",
      ],
      explanation:
        "Equivocation lives on words with a broad sense and a narrow one, promised in the broad and delivered in the narrow. The repair is definitional reasoning: pin the term before relying on it. Ask the office to define 'mooring' in the notice's own line, and the trick has nowhere to stand.",
    },
    {
      id: "lf-w2",
      title: "The trip the property didn't survive",
      passage: [
        "Every man in the watch could be spared for an hour, the captain reckoned — each had a quiet stretch in his round.",
        "So the whole watch could be spared for an hour, and he called them in to the harvest supper.",
        "The quiet stretches, of course, came at different hours; the town spent sixty minutes unguarded that no single man's absence would have cost it.",
      ],
      explanation:
        "Composition at its cleanest: 'sparable' is true of each part separately but not of the parts together, because the property depends on the *others being on duty*. This is exactly the check part–whole reasoning taught — ask whether the property survives the trip, and this one dissolves at the first door.",
    },
  ],
  guidedExamples: [
    {
      id: "lf-g1",
      passage: [
        "The will left 'my books to my sister and the bookcases in the study to my nephew'.",
        "The nephew claimed the study's books came with the cases; the sister claimed every book in the house.",
        "The words bore both households' readings, which is why the matter reached the assizes.",
      ],
      prompt: "What kind of failure has stalled the will?",
      hint: "Neither party has changed any word's meaning.",
      choices: [
        {
          id: "lf-g1-a",
          text: "Ambiguity — the sentence's structure permits two readings, and each side takes its own.",
          isCorrect: true,
          feedback:
            "Yes. No term shifts sense; the *grammar* underdetermines what attaches to what. That's ambiguity's mark, distinct from equivocation — and the cure is a sentence that survives one reading only, as any decent clerk redrafts.",
        },
        {
          id: "lf-g1-b",
          text: "Equivocation — 'books' means different things to the two claimants.",
          isCorrect: false,
          feedback:
            "Both parties mean the same thing by 'books' — bound volumes. What splits them is which phrase governs which items: structure, not word-sense. That's ambiguity.",
        },
        {
          id: "lf-g1-c",
          text: "Division — the estate's property is being handed down to its parts.",
          isCorrect: false,
          feedback:
            "No property of a whole is being transferred to parts — an inheritance is being parsed. The trouble is entirely in the sentence's double reading.",
        },
      ],
    },
    {
      id: "lf-g2",
      passage: [
        "The choral society's advertisement was strictly true: 'every singer an award-winner'.",
        "The society itself had never won anything, the awards having been gathered in other choirs, other years, other counties.",
        "Subscribers who bought 'an award-winning choir' discovered the difference by the second hymn.",
      ],
      prompt: "What inference did the advertisement invite, and why is it fallacious?",
      hint: "What did the subscribers move from, and to?",
      choices: [
        {
          id: "lf-g2-a",
          text: "From decorated parts to a decorated whole — composition, since choir quality lives in the blend the awards never measured.",
          isCorrect: true,
          feedback:
            "Right. You met this in part–whole reasoning as the choirmaster's caution: blend is emergent. The advertisement counts on the reader doing the invalid trip themselves — every singer's shelf of medals composes nothing about the choir.",
        },
        {
          id: "lf-g2-b",
          text: "From a decorated whole to decorated parts — division.",
          isCorrect: false,
          feedback:
            "Mind the direction: the parts (singers) hold the awards, and the whole (choir) borrows the glow. Parts-to-whole is composition; division runs the other way.",
        },
        {
          id: "lf-g2-c",
          text: "The word 'award-winner' changes meaning between singer and choir.",
          isCorrect: false,
          feedback:
            "It means the same thing of each — 'has won awards'. The failure isn't in the word but in the transfer of the property up a level it doesn't climb.",
        },
      ],
    },
    {
      id: "lf-g3",
      passage: [
        "The committee praised the almanac as the most reliable publication in the county.",
        "A farmer therefore treated its long-range August forecast as the most reliable sentence in print, and mowed accordingly.",
        "The almanac's reliability, the editor later explained gently, lived in its tide tables and saints' days — the whole earns its name from its steadiest parts.",
      ],
      prompt: "What mistake did the farmer make?",
      hint: "Where does 'reliable' truly attach — and where did the farmer attach it?",
      choices: [
        {
          id: "lf-g3-a",
          text: "Division — the whole volume's reliability was dealt out to each page, including the one page that never earned it.",
          isCorrect: true,
          feedback:
            "Yes. A whole's property is often an average or an aggregate, so no single part is guaranteed to carry it. 'Most reliable publication' and 'unreliable long-range forecast' live comfortably in one binding.",
        },
        {
          id: "lf-g3-b",
          text: "Composition — trusting the whole almanac because the tide tables are sound.",
          isCorrect: false,
          feedback:
            "That would be the committee's error if it were one. The farmer's move runs downward — from praised whole to trusted page — which is division.",
        },
        {
          id: "lf-g3-c",
          text: "Equivocation — 'reliable' means something different for forecasts than for tide tables.",
          isCorrect: false,
          feedback:
            "'Reliable' keeps one sense throughout: tends to be right. The slip is in which *thing* the property belongs to, not in what the word means.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "lf-m1",
      passage: [
        "Only man is rational, ran the schoolroom proof, and no woman is a man.",
        "The conclusion drawn was as confident as it was unwelcome, and turned entirely on which 'man' each line meant.",
      ],
      options: ["equivocation", "ambiguity", "undistributed-middle"],
      correctLabel: "equivocation",
      explanation:
        "'Man' means humankind in the first premise and males in the second — the classic shift. Hold either sense through both lines and the proof dies at once.",
    },
    {
      id: "lf-m2",
      passage: [
        "The order to the yard read: 'paint the boats in the shed by Friday'.",
        "The painters painted the boats that were in the shed; the owner had meant painting done inside the shed, his new skiffs on the hard left bare to the weather.",
      ],
      options: ["ambiguity", "equivocation", "division"],
      correctLabel: "ambiguity",
      explanation:
        "'In the shed' can modify the boats or the painting — pure structural double-reading, with every word keeping its ordinary sense.",
    },
    {
      id: "lf-m3",
      passage: [
        "Each timber of the old bridge, tested alone, would bear a loaded wagon.",
        "So the bridge will bear a loaded wagon on every span at once, the carter concluded, and sent the whole train across together.",
      ],
      options: ["composition", "division", "part-whole"],
      correctLabel: "composition",
      explanation:
        "Each-alone capacity doesn't sum to all-at-once capacity — the shared footings carry every span's load together. The healthy check (how does this property compose?) was skipped.",
    },
    {
      id: "lf-m4",
      passage: [
        "The consignment's papers rated the whole shipment 'fragile — top stowage'.",
        "The mate read the rating as the shippers wrote it: an instruction about the whole, telling nothing about which crates inside could bear weight — so he asked for the packing list rather than divide the label among the boxes.",
      ],
      options: ["part-whole", "division", "ambiguity"],
      correctLabel: "part-whole",
      explanation:
        "The healthy contrast: the mate refuses the illegitimate whole-to-part trip and goes looking for part-level facts. Knowing what a whole's label can and can't tell you about parts is part–whole reasoning doing its job.",
    },
    {
      id: "lf-m5",
      passage: [
        "The town's oldest charter granted 'liberty to fish the free waters'.",
        "The new wharf company argued the waters were no longer free, having been priced — and therefore no longer covered; the fishermen argued 'free' had meant open to all, which no invoice could repeal.",
        "The judge sided with the fishermen after reading the charter's other uses of the word, where 'free' kept company with 'open' and 'common' in every line.",
      ],
      options: ["definitional", "equivocation", "ambiguity"],
      correctLabel: "definitional",
      explanation:
        "The healthy contrast: the dispute is settled by pinning what the charter's word meant, using the document's own usage as evidence. The company attempted an equivocation; definitional reasoning is the antidote applied.",
    },
  ],
  unlockChallenge: [
    {
      id: "lf-u1",
      passage: [
        "The apprentice's indenture promised instruction in 'the art of the smith'.",
        "Set to pumping bellows for a year, he complained; the master explained that bellows-work was, after all, part of the art of the smith — and instruction in a part is instruction in the art.",
      ],
      options: ["equivocation", "composition", "special-pleading"],
      correctLabel: "equivocation",
      explanation:
        "'The art' means the whole craft in the indenture and any-fragment-of-it in the defense. The master's last clause trades one sense for the other in eight words.",
    },
    {
      id: "lf-u2",
      passage: [
        "'The society thanks the members who assisted the wardens with their lanterns' — and to this day no one can say whose lanterns they were.",
        "Both readings were true of somebody, which is how the sentence survived three editions of the minutes.",
      ],
      options: ["ambiguity", "equivocation", "division"],
      correctLabel: "ambiguity",
      explanation:
        "'Their' can reach back to members or wardens — a structural fork, with every word keeping its sense. Minute-books are where such sentences go to live long lives.",
    },
    {
      id: "lf-u3",
      passage: [
        "The town band took the county medal, and the cornet player wore the ribbon to every market day after.",
        "Asked about his solo playing, he'd tap the ribbon: a medal band, sir, and I am the band's cornet.",
      ],
      options: ["division", "composition", "equivocation"],
      correctLabel: "division",
      explanation:
        "The band's medal is worn down onto one chair — the whole's honor dealt to a part. Ensembles win as wholes; the ribbon says nothing about any single horn.",
    },
  ],
};
