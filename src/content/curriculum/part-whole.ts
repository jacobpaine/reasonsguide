import type { Lesson } from "@/domain/types";

export const partWholeLesson: Lesson = {
  id: "part-whole",
  title: "Part–whole reasoning",
  status: "ready",
  labelIds: ["part-whole"],
  definition:
    "Part–whole reasoning moves between properties of parts and properties of the whole — from sound timbers to a sound hull, or from a heavy cargo to heavy crates. Some properties survive the trip in one direction or both; some do not survive it at all. The reasoning is only as good as the check that this property, this trip, travels.",
  memoryHook: "Check whether the property survives the trip between part and whole.",
  soundsLike: [
    "Every plank is sound, and the joints besides — the hull is sound.",
    "The whole shipment weighs a ton, so no crate can weigh more.",
    "Each voice is quiet, but forty of them will carry.",
  ],
  workedExamples: [
    {
      id: "pw-w1",
      title: "A property that adds up",
      passage: [
        "The bridge toll is charged on total cart weight, and the carter did the sum from the parts: eight sacks at fifty pounds, the crate at two hundred, the cart itself at three.",
        "Weight is a property that simply adds — the whole weighs what its parts together weigh.",
        "So the load came to nine hundred pounds, and the lower toll, with no need to wrestle the cart onto a scale.",
      ],
      explanation:
        "The inference from parts to whole is airtight here because weight is additive — it survives the trip by arithmetic. Part–whole reasoning done well always knows *why* the property transfers: some add (weight, cost), some don't (lightness, quality), and the reason is the argument.",
    },
    {
      id: "pw-w2",
      title: "A property that needs the joints",
      passage: [
        "Every timber in the footbridge tested sound, and the surveyor did not stop there.",
        "A bridge is timbers plus their meetings: she tested the pegs, the seats of the beams, the bearing at each bank.",
        "Sound parts and sound joints together — only then did she certify a sound bridge.",
      ],
      explanation:
        "Soundness doesn't automatically climb from parts to whole; wholes have arrangement, and arrangement can fail where no part does. The surveyor's extra step — checking the meetings, not just the members — is exactly what separates healthy part–whole reasoning from wishful adding-up.",
    },
  ],
  guidedExamples: [
    {
      id: "pw-g1",
      passage: [
        "The chandler priced the ship's flag by its parts: so many yards of red wool, so many of white, thread and toil reckoned in.",
        "The price of the whole, he said, is the price of the parts plus the making — and itemized it so the captain could check each line.",
      ],
      prompt: "Why is the chandler's parts-to-whole move sound?",
      hint: "What kind of property is cost?",
      choices: [
        {
          id: "pw-g1-a",
          text: "Cost is additive — the whole's cost is the parts' costs plus assembly, so the sum genuinely transfers.",
          isCorrect: true,
          feedback:
            "Yes. The move is licensed by the property's nature: costs compose by addition, and the chandler even names the assembly term. For additive properties, parts-to-whole is arithmetic, not hope.",
        },
        {
          id: "pw-g1-b",
          text: "Because the chandler is the expert on flags, and his word settles prices.",
          isCorrect: false,
          feedback:
            "The itemized bill invites checking — the opposite of take-my-word. The inference stands on cost's additivity, which any purchaser can verify line by line.",
        },
        {
          id: "pw-g1-c",
          text: "It isn't sound — no property of parts ever fixes a property of the whole.",
          isCorrect: false,
          feedback:
            "Too strong by half. Weight, cost, and count transfer perfectly; the craft is knowing which properties do and which — like beauty or strength — need more than a sum.",
        },
      ],
    },
    {
      id: "pw-g2",
      passage: [
        "The choirmaster auditioned each voice alone and found every one true.",
        "Still she withheld judgment on the choir until she'd heard them together — tuning is a property of voices, she said, but blend belongs to the room and the mix.",
        "Together they were better than their parts on the low notes, and worse on the high — facts no audition of one could have shown.",
      ],
      prompt: "What distinction is the choirmaster honoring?",
      hint: "Which of her two properties lives in the parts, and which in the arrangement?",
      choices: [
        {
          id: "pw-g2-a",
          text: "Some properties belong to parts alone, while others emerge from their combination and must be tested at the whole.",
          isCorrect: true,
          feedback:
            "Exactly. Blend is emergent — it exists only where the voices meet, so no inventory of parts can settle it. Healthy part–whole reasoning knows where a property lives before reasoning about where it goes.",
        },
        {
          id: "pw-g2-b",
          text: "That choirs should never be judged at all, only singers.",
          isCorrect: false,
          feedback:
            "She judges the choir — by listening to the choir. The point isn't refusing whole-level judgments but making them at the level where the property lives.",
        },
        {
          id: "pw-g2-c",
          text: "That the best single voice determines the whole choir's quality.",
          isCorrect: false,
          feedback:
            "Her low-notes/high-notes finding contradicts this directly: the whole outran its parts one way and underran them the other. No single part fixes an emergent property.",
        },
      ],
    },
    {
      id: "pw-g3",
      passage: [
        "The manifest gave the whole consignment as forty hundredweight in eight crates.",
        "The stevedore reasoned downward: no single crate, then, could top forty hundredweight — and if evenly packed, each ran near five.",
        "The first claim he'd stake his back on; the second, he said, only if 'evenly packed' were more than the shipper's habit of hope.",
      ],
      prompt: "Why does the stevedore trust his two downward inferences differently?",
      hint: "Which one needs an extra assumption?",
      choices: [
        {
          id: "pw-g3-a",
          text: "The ceiling follows from arithmetic alone; the per-crate estimate leans on an assumption of even packing that may fail.",
          isCorrect: true,
          feedback:
            "Right. Whole-to-part reasoning has grades: 'no part exceeds the whole' is guaranteed for additive properties, while 'each part is the average' needs uniformity — an assumption about arrangement that deserves its own evidence.",
        },
        {
          id: "pw-g3-b",
          text: "He distrusts the manifest's total but trusts its crate count.",
          isCorrect: false,
          feedback:
            "He takes the manifest whole; his caution divides between two *inferences* from it. The difference is in what each inference silently assumes.",
        },
        {
          id: "pw-g3-c",
          text: "Downward reasoning is always safe; his hesitation is mere temperament.",
          isCorrect: false,
          feedback:
            "His hesitation is the reasoning. Wholes constrain their parts loosely — a total bounds each part but fixes none of them without a uniformity premise.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "pw-m1",
      passage: [
        "Each volume of the parish register was accounted for — births, marriages, burials, every year unbroken.",
        "The archivist checked the set's own claim too: the volumes' years met with no gap between them.",
        "Parts complete and seams complete, she certified the record whole.",
      ],
      options: ["part-whole", "classification", "deductive"],
      correctLabel: "part-whole",
      explanation:
        "Completeness of the whole is argued from complete parts *plus checked seams* — the arrangement test that makes parts-to-whole reasoning trustworthy.",
    },
    {
      id: "pw-m2",
      passage: [
        "The nut's shell was ridged and the kernel came in two folded halves: a walnut by every mark.",
        "Walnuts keep a year in the shell, so the sack would see them through to spring.",
      ],
      options: ["classification", "part-whole", "inductive"],
      correctLabel: "classification",
      explanation:
        "Marks, then kind, then the kind's keeping habit — sort-and-inherit, not a trip between part and whole.",
    },
    {
      id: "pw-m3",
      passage: [
        "The full cask of nails weighed in at three hundred pounds, cask included at twenty.",
        "So the nails themselves came to two hundred eighty, and no scoop from the cask could weigh more.",
      ],
      options: ["part-whole", "statistical", "deductive"],
      correctLabel: "part-whole",
      explanation:
        "Whole-to-part by subtraction and bounding — weight's additivity licenses both moves. The reasoning travels between the cask's total and its contents.",
    },
    {
      id: "pw-m4",
      passage: [
        "Every strand of the mooring rope bore fifty pounds in the test rig.",
        "But rope strength lives partly in the lay, so the roper tested the finished rope whole — and it bore not the sum of its strands, but a stout share of it.",
        "She rated the rope by the whole-test, not the strand-count.",
      ],
      options: ["part-whole", "causal", "comparative"],
      correctLabel: "part-whole",
      explanation:
        "The roper reasons about which property survives the parts-to-whole trip — strength partly doesn't, because of the lay — and lets the whole-level test govern. That vigilance *is* part–whole reasoning.",
    },
    {
      id: "pw-m5",
      passage: [
        "The bell's poor tone was traced to the clapper, recast last year in softer bronze than the bell itself.",
        "Struck by softer metal, the bell spoke dully — match the metals and the tone would return.",
      ],
      options: ["causal", "part-whole", "abductive"],
      correctLabel: "causal",
      explanation:
        "This traces a mechanism from a component's property to an effect — cause and remedy. A part figures in it, but the reasoning is about what the softness *does*, not about a property transferring between part and whole.",
    },
  ],
  unlockChallenge: [
    {
      id: "pw-u1",
      passage: [
        "The quilt needed to cover the bed with a hand's width to spare on each side.",
        "Its panels being uniform squares, nine by seven of them at a span each, the quilter had the whole's measure from the parts before a stitch was sewn.",
      ],
      options: ["part-whole", "deductive", "practical"],
      correctLabel: "part-whole",
      explanation:
        "Dimensions compose by arithmetic when parts are uniform — the whole's size is read off the parts, with the uniformity stated, not assumed.",
    },
    {
      id: "pw-u2",
      passage: [
        "Every clause of the agreement was fair on its own reading, said the notary, and still she read on.",
        "Fairness of the whole lives also in how clauses combine — and clauses four and nine, each fair alone, together let the buyer set the price after the sale.",
        "She struck the pair and certified the rest.",
      ],
      options: ["part-whole", "conductive", "definitional"],
      correctLabel: "part-whole",
      explanation:
        "Fair parts needn't make a fair whole — combination can smuggle in what no clause contains. The notary tests the property at the whole, exactly where it might fail to arrive.",
    },
    {
      id: "pw-u3",
      passage: [
        "For the beacon chain to warn the coast, every beacon must be lit — one dark link and the message dies where it stands.",
        "So the chain's readiness was reckoned strictly from its weakest member, and the inspection went hill by hill.",
      ],
      options: ["part-whole", "causal", "classification"],
      correctLabel: "part-whole",
      explanation:
        "Here the whole's property is fixed not by summing parts but by the minimum — a chain composes readiness by its weakest link, and the reasoning names that composition rule before trusting it.",
    },
  ],
};
