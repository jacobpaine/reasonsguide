import type { PracticeStory } from "@/domain/types";

/**
 * Structural-reasoning stories pairing part–whole and dialectical reasoning.
 * Part–whole targets show the healthy form — the reasoner checks that the
 * property actually survives the trip between parts and whole — and
 * dialectical targets show an objection stated fairly and answered.
 */

export const structureStories: readonly PracticeStory[] = [
  {
    id: "story-barge-marks",
    title: "The Barge at Her Marks",
    difficulty: "intermediate",
    includedLabels: ["part-whole"],
    sentences: [
      {
        id: "pw-1",
        text: "The grain barge Provident lay at the corn quay at first light, and Marta, the wharfinger's clerk, walked her length with a stick of chalk and an air of judgment.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pw-2",
        text: "Each sack of grist went a shade under a hundredweight on the warehouse beam, and weight is a property that sums without asking leave: eighty sacks would sit the Provident four inches past her marks, however innocent each sack looked on its own.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "pw-2-b",
        explanationOptions: [
          {
            id: "pw-2-a",
            text: "It applies the harbor's loading regulation, so the conclusion about the marks follows from the rule of necessity.",
          },
          {
            id: "pw-2-b",
            text: "It carries a property from parts to whole — each sack's hundredweight added into a total — after noting that weight is the kind of thing that genuinely accumulates, sack by sack, into the load.",
          },
          {
            id: "pw-2-c",
            text: "It meets the objection that each sack is light by conceding the point and revising the loading plan to answer it.",
          },
        ],
      },
      {
        id: "pw-3",
        text: "The shipper, a Mr. Cole, remarked that he had never yet drowned a cargo.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pw-4",
        text: "Marta split the consignment down the middle instead, forty sacks to the Provident and forty to her sister the Patience, reasoning that weight parcels out as faithfully as it gathers — each barge would ride a clear ton inside her marks, with the same beam scale vouching for every sack in both halves.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "pw-4-c",
        explanationOptions: [
          {
            id: "pw-4-a",
            text: "It concedes Mr. Cole's point about never drowning a cargo and amends the plan to satisfy him.",
          },
          {
            id: "pw-4-b",
            text: "It sorts the Provident and the Patience into the category of grain barges and draws the safe-loading conclusion from what is true of the category.",
          },
          {
            id: "pw-4-c",
            text: "It runs the inference from whole to parts — an even split of a known total — checking first that weight divides along with the cargo as cleanly as it summed.",
          },
        ],
      },
      {
        id: "pw-5",
        text: "Cole paid the second freight with the face of a man donating a tooth.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pw-6",
        text: "Both barges went down the reach low, steady, and dry, and the chalk never touched the water.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-organ-question",
    title: "The Organ Question",
    difficulty: "intermediate",
    includedLabels: ["dialectical"],
    sentences: [
      {
        id: "dl-1",
        text: "The vestry met on a wet Tuesday to decide whether the parish should buy the Ashcombe organ, lately orphaned by a church closure upriver.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dl-2",
        text: "Mrs. Hale wanted the instrument badly, but she took the sexton's objection whole — that the north wall wept from October to March and would swell the pipework shut — and came back with the gallery plan: mount it on the south loft, a full story above the damp line, where the sexton himself admitted no mold had ever climbed.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dl-2-a",
        explanationOptions: [
          {
            id: "dl-2-a",
            text: "A position is refined under pressure: the strongest objection is stated fairly and answered with an amendment — the gallery mounting — that even the objector accepts.",
          },
          {
            id: "dl-2-b",
            text: "It argues that because one wall of the building is damp, the church as a whole cannot house an organ — an inference from part to whole about the fabric.",
          },
          {
            id: "dl-2-c",
            text: "It gathers several independent considerations — damp, mold, the loft — and weighs them together toward a single verdict.",
          },
        ],
      },
      {
        id: "dl-3",
        text: "The treasurer cleared his throat, which in that room was a form of artillery.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dl-4",
        text: "To his harder question — whether a parish that could not keep rain out of its own porch had any business buying music — she gave ground honestly, moving that the porch roof be funded first and the organ purchased only when that account closed; the treasurer, finding no quarrel left in his hands, seconded her.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dl-4-c",
        explanationOptions: [
          {
            id: "dl-4-a",
            text: "It applies the standing rule that repairs precede purchases, so the porch-first conclusion follows as a matter of necessity.",
          },
          {
            id: "dl-4-b",
            text: "It infers that because the porch, one part of the church, is failing, the parish enterprise as a whole must be failing too.",
          },
          {
            id: "dl-4-c",
            text: "The objection is granted at full strength and the proposal revised to absorb it — porch before organ — which is how the view wins assent from its own critic.",
          },
        ],
      },
      {
        id: "dl-5",
        text: "The motion carried without a hand raised against it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dl-6",
        text: "The Ashcombe organ arrived the following spring, hauled up to the south loft by six men and a good deal of language.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-founders-ladle",
    title: "The Founder's Ladle",
    difficulty: "intermediate",
    includedLabels: ["part-whole"],
    sentences: [
      {
        id: "ph-1",
        text: "Edda Voss had cast bells for thirty years, and her yard smelled permanently of scorched clay and consequence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ph-2",
        text: "She stirred the crucible the full quarter hour the old books demanded before she would trust the ladle, because only in a melt stirred to sameness does the tin in one spoonful speak for the tin in the whole — the sample assayed at four parts in twenty, so the entire two tons stood at bell metal proper.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ph-2-c",
        explanationOptions: [
          {
            id: "ph-2-a",
            text: "It anticipates the objection that one spoonful proves nothing about two tons and rebuts it, sharpening her claim about the melt.",
          },
          {
            id: "ph-2-b",
            text: "It applies the old books' quarter-hour rule, from which the conclusion about the melt follows by the rule alone.",
          },
          {
            id: "ph-2-c",
            text: "It reads the whole from a part — one ladle's assay standing for the full melt — but only after the stirring has made the mixture uniform, so the property truly carries from sample to whole.",
          },
        ],
      },
      {
        id: "ph-3",
        text: "The new peal was bound for St. Osyth's tower, whose frame the carpenters swore by and whose floor they swore at.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ph-4",
        text: "The commission called for six bells, and she weighed each finished casting on the same beam, treble to tenor — thirty-one hundredweight between them — since the tower frame would bear their sum and nothing else about them, and thirty-one hundredweight sat well inside the frame's rated two tons.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ph-4-a",
        explanationOptions: [
          {
            id: "ph-4-a",
            text: "Each bell's weight is added into a property of the whole peal — the total load on the frame — with the explicit check that weight is what the frame answers to, and that it sums.",
          },
          {
            id: "ph-4-b",
            text: "It meets the carpenters' objection about the floor by conceding it and revising the commission to six lighter bells.",
          },
          {
            id: "ph-4-c",
            text: "It places the six castings in the category of tower bells and draws the frame's safety from what holds of that category.",
          },
        ],
      },
      {
        id: "ph-5",
        text: "Hanging day came in October, bright and windless.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ph-6",
        text: "When the tenor swung for the first time, the whole village found a reason to be out of doors.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-bridge-hearing",
    title: "The Bridge Hearing",
    difficulty: "intermediate",
    includedLabels: ["dialectical"],
    sentences: [
      {
        id: "dh-1",
        text: "The county surveyor came to the schoolroom on a Thursday evening to say that Fenn Bridge must close for the summer, and the room received this the way rooms do.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dh-2",
        text: "The strongest voice against him belonged to the carrier, whose whole living crossed that bridge on market days, and the surveyor did not talk around her: he granted the harm outright and redrew the scheme on the blackboard — carriageway shut, but the downstream footway propped and kept open, with a market-day barge for the heavy goods at the county's expense.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dh-2-b",
        explanationOptions: [
          {
            id: "dh-2-a",
            text: "It reasons that because one part of the bridge, the footway, remains sound, the bridge as a whole can safely stay in service.",
          },
          {
            id: "dh-2-b",
            text: "The proposal survives by changing: the sharpest objection is conceded as real and the plan amended — footway and barge — so the criticism is answered rather than waved off.",
          },
          {
            id: "dh-2-c",
            text: "It sets the independent reasons for closure beside the reasons against and lets the balance of the whole bundle decide.",
          },
        ],
      },
      {
        id: "dh-3",
        text: "An old man near the stove asked when the piers had last been sounded, and got a date that raised eyebrows.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dh-4",
        text: "That objection the surveyor also declined to wave away; he agreed that a nine-year-old sounding proved nothing about this spring's scour, promised divers at the second pier within the fortnight, and bound himself publicly to reopen the question if their figures came back sound — the old man grunted, which in that parish was ratification.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dh-4-c",
        explanationOptions: [
          {
            id: "dh-4-a",
            text: "It applies the county's inspection rule, from which the fortnight deadline follows as a matter of strict necessity.",
          },
          {
            id: "dh-4-b",
            text: "It infers the condition of the whole bridge from the condition of its second pier, carrying a property from part to whole.",
          },
          {
            id: "dh-4-c",
            text: "A challenge to his evidence is taken at full strength and answered with a commitment — fresh soundings, and revision if they disagree — holding the position open to correction instead of defending it flat.",
          },
        ],
      },
      {
        id: "dh-5",
        text: "The divers found the scour worse than the drawings had guessed, and the closure held.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dh-6",
        text: "The barge ran all summer, and the carrier, though she never said so, kept the surveyor's chalk sketch.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-harvest-anthem",
    title: "The Harvest Anthem",
    difficulty: "intermediate",
    includedLabels: ["part-whole", "dialectical"],
    sentences: [
      {
        id: "pd-1",
        text: "Choirmaster Brill had chosen a new anthem for the harvest service, which the choir regarded as a hostile act.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pd-2",
        text: "By the third rehearsal each section held its line alone, but Brill knew an anthem is lines and the fit between them, so he would not call the piece secure until he had drilled the joins — alto handing to tenor, tenor down to bass — and heard every seam carry as cleanly as the parts it stitched.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "pd-2-a",
        explanationOptions: [
          {
            id: "pd-2-a",
            text: "The whole's soundness is built from the parts' plus the connections between them — sections and seams both tested — which is what lets 'each line secure' become 'the anthem secure.'",
          },
          {
            id: "pd-2-b",
            text: "It concedes the choir's objection to the new piece and revises the rehearsal plan until the objectors are satisfied.",
          },
          {
            id: "pd-2-c",
            text: "It applies the rule that no anthem may be sung until every rehearsal is complete, and the conclusion follows from the rule.",
          },
        ],
      },
      {
        id: "pd-3",
        text: "The trebles, however, had begun to sound like a kettle left too long.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pd-4",
        text: "Their leader, a fierce child named Susan, put the objection squarely — the top line sat past their reach and cracked their voices by the second verse — and Brill, hearing that it was true rather than merely loud, dropped the whole piece a tone and gave the worst two bars to the altos, at which Susan declared herself satisfied on behalf of trebles everywhere.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "pd-4-b",
        explanationOptions: [
          {
            id: "pd-4-a",
            text: "It reasons from two cracked bars, a part of the piece, to the failure of the anthem as a whole.",
          },
          {
            id: "pd-4-b",
            text: "The complaint is treated as a serious objection, tested, and found true, and the position amended — transposed, re-voiced — until the objector herself signs off: refinement through answering, not overruling.",
          },
          {
            id: "pd-4-c",
            text: "It weighs the independent reasons for keeping the original key against the reasons for changing it and reads the verdict off the balance.",
          },
        ],
      },
      {
        id: "pd-5",
        text: "The harvest service came, wet as usual.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pd-6",
        text: "The anthem rose over the smell of damp coats and chrysanthemums, seamless, and nobody's voice cracked but the vicar's.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-slipway-question",
    title: "The Slipway Question",
    difficulty: "intermediate",
    includedLabels: ["dialectical", "part-whole"],
    sentences: [
      {
        id: "dp-1",
        text: "Old Garrick meant to plank the new pilot boat in larch, and said so in the yard, where everyone was free to disagree.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dp-2",
        text: "His journeyman, Tam, brought the one objection worth having — larch splits along the fastening lines when a boat works in a seaway — and Garrick, instead of pulling rank, redrew the scheme that evening: larch for the broad of the planking, but oak doubling pieces at every fastening line, so the splitting Tam feared had nowhere to start.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dp-2-c",
        explanationOptions: [
          {
            id: "dp-2-a",
            text: "It argues that because each larch plank is sound on its own, the hull built from them must be sound as a whole.",
          },
          {
            id: "dp-2-b",
            text: "It sorts larch into the category of splitting timbers and draws the boat's fate from what is true of that category.",
          },
          {
            id: "dp-2-c",
            text: "The design is improved by its critic: the journeyman's strongest point is admitted and the plan revised — oak at the fastenings — so the objection is answered in the timber itself.",
          },
        ],
      },
      {
        id: "dp-3",
        text: "The pricing fell, as pricing does, to whoever had complained most recently.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dp-4",
        text: "Tam costed the hull the only honest way, piece by piece — thirty larch strakes at the yard's rate, the oak doublings, the fastenings by the score — and since cost is a thing the whole simply inherits by addition, the sum told him the hull would come in nine shillings under the contract before he promised anyone anything.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "dp-4-a",
        explanationOptions: [
          {
            id: "dp-4-a",
            text: "Each piece's cost is summed into the whole's on the checked ground that cost is additive — the hull's price being exactly what its parts and their joining add up to.",
          },
          {
            id: "dp-4-b",
            text: "It meets the objection that the contract is too tight by conceding the point and renegotiating the terms.",
          },
          {
            id: "dp-4-c",
            text: "It applies the contract's terms as a rule from which the nine-shilling margin follows necessarily.",
          },
        ],
      },
      {
        id: "dp-5",
        text: "Garrick read the figures twice and allowed that arithmetic had its uses.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dp-6",
        text: "The boat went down the slipway in March and worked twenty years in the pilot service without opening a seam.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-strongroom",
    title: "The Strongroom Removal",
    difficulty: "intermediate",
    includedLabels: ["part-whole", "dialectical"],
    sentences: [
      {
        id: "px-1",
        text: "The parish records were moving at last, out of the vestry cupboard and into the new strongroom above the courthouse stair.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "px-2",
        text: "Miss Feyer weighed the record chests one at a time on the courthouse scale — eleven of them, none over two hundredweight — because the strongroom floor was rated to a ton and a half and would feel their sum, not their contents; the eleven together came to a ton and one hundredweight, and only then did she let the porters start.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "px-2-b",
        explanationOptions: [
          {
            id: "px-2-a",
            text: "It anticipates the porters' objection that the chests are too heavy and answers it with the courthouse scale.",
          },
          {
            id: "px-2-b",
            text: "The floor answers to the total, so each chest's weight is carried into the whole's by addition — and the check is made before the conclusion is trusted or anything is lifted.",
          },
          {
            id: "px-2-c",
            text: "It places the chests in the category of loads under two hundredweight and draws the floor's safety from the category.",
          },
        ],
      },
      {
        id: "px-3",
        text: "The rector arrived mid-morning to supervise, which is to say, to worry aloud.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "px-4",
        text: "His objection had teeth — split the registers between two rooms and you break a series that had run unbroken since 1653 — and Feyer, granting every word of it, redrew her shelf plan on the spot: the registers to stay whole on the long south wall, and only the tithe maps, which never ran in series, to take the overflow room; the rector inspected the new plan for flaws and, finding none, went home to lunch.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "px-4-c",
        explanationOptions: [
          {
            id: "px-4-a",
            text: "It reasons that because each register volume is intact, the series as a whole must be intact wherever it is shelved.",
          },
          {
            id: "px-4-b",
            text: "It weighs several independent shelving considerations for and against and lets the balance settle the plan.",
          },
          {
            id: "px-4-c",
            text: "A real objection is given its full weight and the plan amended to satisfy it — the series kept unbroken — so the position that emerges is the old one improved by its critic.",
          },
        ],
      },
      {
        id: "px-5",
        text: "The porters worked until the light went.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "px-6",
        text: "Completeness was the label the collection had to earn, and it is a property a whole borrows from its parts one at a time, so Feyer called the roll against the accession register — every volume answering, 1653 to the present — and only when the last tick landed did she write entire on the strongroom ledger.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "px-6-a",
        explanationOptions: [
          {
            id: "px-6-a",
            text: "The whole's property — being complete — is nothing over and above each volume's being present, so it is established the only way it can be: part by checked part.",
          },
          {
            id: "px-6-b",
            text: "It answers the rector's remaining doubt by conceding it and revising the wording on the ledger.",
          },
          {
            id: "px-6-c",
            text: "It applies the definition of a complete series and derives the ledger entry from the definition alone, as a rule.",
          },
        ],
      },
      {
        id: "px-7",
        text: "She locked the door twice, out of respect.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
