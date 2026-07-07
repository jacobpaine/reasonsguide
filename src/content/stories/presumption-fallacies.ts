import type { PracticeStory } from "@/domain/types";

/**
 * Presumption-fallacy stories: begging the question, loaded question,
 * false dilemma, special pleading, moving the goalposts — with healthy
 * dialectical engagement appearing inside two of them as the contrast.
 */

export const presumptionFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-guild-admission",
    title: "The Guild Admission",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "loaded-question", "false-dilemma"],
    sentences: [
      {
        id: "ps1-1",
        text: "Tolla's application to the weavers' guild came up third on the evening's docket, her sample cloth folded on the table.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps1-2",
        text: "Master Hobb opposed it plainly: outsiders' work isn't guild quality, he said, and hers can't be — because it's an outsider's.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps1-2-a",
        explanationOptions: [
          {
            id: "ps1-2-a",
            text: "The premise — outsiders' work isn't guild quality — simply restates the conclusion it's meant to prove; the cloth on the table never gets examined.",
          },
          {
            id: "ps1-2-b",
            text: "Hobb offers Tolla only two paths when a third plainly exists.",
          },
          {
            id: "ps1-2-c",
            text: "Hobb raises the admission standard after Tolla has already met it.",
          },
        ],
      },
      {
        id: "ps1-3",
        text: "The sample itself, the recording clerk noted, had passed the thread-count test at first inspection.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps1-4",
        text: "Then Master Reya leaned forward with her only question: 'Tell the hall — do you still pass off town-loom cloth as your own handwork?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps1-4-c",
        explanationOptions: [
          {
            id: "ps1-4-b",
            text: "Reya's question assumes its own conclusion as a premise and argues in a circle.",
          },
          {
            id: "ps1-4-c",
            text: "The question smuggles in the unproven charge of passing-off — 'still' makes any direct answer, yes or no, a confession.",
          },
          {
            id: "ps1-4-d",
            text: "Reya exempts her own past applications from the standard she applies to Tolla's.",
          },
        ],
      },
      {
        id: "ps1-5",
        text: "The chairman moved to settle it briskly: admit her tonight without conditions, or bar her from the trade for good — those being, he said, the choices before the hall.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps1-5-a",
        explanationOptions: [
          {
            id: "ps1-5-a",
            text: "Two options are presented as the only ones while the guild's own customs — probation, apprenticeship, resubmission — stand in plain sight.",
          },
          {
            id: "ps1-5-b",
            text: "The chairman's proposal quietly assumes Tolla unworthy, which was the very question.",
          },
          {
            id: "ps1-5-c",
            text: "The chairman shifts the requirement upward now that the thread-count test is passed.",
          },
        ],
      },
      {
        id: "ps1-6",
        text: "An older weaver reminded the hall, dryly, that half its masters had entered by the probationary bench the chairman had just abolished.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-prize-marrow",
    title: "The Prize Marrow",
    difficulty: "intermediate",
    includedLabels: ["special-pleading", "moving-goalposts", "dialectical"],
    sentences: [
      {
        id: "ps2-1",
        text: "The vegetable show's rules were short and old: entries grown in the parish, by the entrant, weighed at the table.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps2-2",
        text: "When Judge Ambrose's own marrow was found to have grown in his sister's parish, he ruled the rule inapplicable to judges, whose produce, he explained, was entered in a different spirit.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps2-2-a",
        explanationOptions: [
          {
            id: "ps2-2-a",
            text: "The parish rule he applies to every other entrant is waived for his own case, with 'a different spirit' standing in for any relevant difference.",
          },
          {
            id: "ps2-2-b",
            text: "Ambrose raises the bar for the other entries after they have already been weighed.",
          },
          {
            id: "ps2-2-c",
            text: "Ambrose assumes judges' produce is superior, which is the point in dispute.",
          },
        ],
      },
      {
        id: "ps2-3",
        text: "Widow Crane's marrow, meanwhile, out-weighed the field by half a stone on the show's own scale.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps2-4",
        text: "Weight, Ambrose then announced, was never the true test — girth was wanted; and when her marrow won the tape as well, he found that what the show truly honored was symmetry.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps2-4-c",
        explanationOptions: [
          {
            id: "ps2-4-b",
            text: "Ambrose offers the hall a choice between two tests when many exist.",
          },
          {
            id: "ps2-4-c",
            text: "Each standard is abandoned the moment it is met — weight, then girth, then symmetry — so no marrow of hers can ever count as enough.",
          },
          {
            id: "ps2-4-d",
            text: "Ambrose exempts his own marrow from the weighing he requires of others.",
          },
        ],
      },
      {
        id: "ps2-5",
        text: "The show's secretary took the objection Ambrose kept implying — that scale-weight alone rewards watering — stated it better than he had, and answered it: the rulebook already deducted for split skins and hollow flesh, which is what watering produces.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "ps2-5-a",
        explanationOptions: [
          {
            id: "ps2-5-a",
            text: "The objection is given its strongest form and then answered from the rulebook — engagement that meets the point instead of dodging it.",
          },
          {
            id: "ps2-5-b",
            text: "The secretary raises a new standard of evidence now that the old one is satisfied.",
          },
          {
            id: "ps2-5-c",
            text: "The secretary assumes the rulebook's fairness, which was the very matter in question.",
          },
        ],
      },
      {
        id: "ps2-6",
        text: "The cup went to Widow Crane, and Ambrose went home with his marrow and his spirit, both unweighed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ferry-tithe",
    title: "The Ferry Tithe",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "special-pleading"],
    sentences: [
      {
        id: "ps3-1",
        text: "The question before the harbor board was whether the ferry tithe was still lawful, the charter being older than anyone's grandfather.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps3-2",
        text: "The collector's case ran in a small circle: the tithe is lawful because it is rightfully collected — and it is rightfully collected, he said, because it is lawful.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps3-2-a",
        explanationOptions: [
          {
            id: "ps3-2-a",
            text: "Each half of the argument rests on the other — 'rightfully collected' is 'lawful' in different clothes, and the charter question is never touched.",
          },
          {
            id: "ps3-2-b",
            text: "The collector applies the tithe to everyone but waives it for his own crossings.",
          },
          {
            id: "ps3-2-c",
            text: "The collector demands ever-older documents each time one is produced.",
          },
        ],
      },
      {
        id: "ps3-3",
        text: "The clerk fetched the charter itself, which proved to say less than either side had promised it would.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps3-4",
        text: "It also emerged that the collector's own goods had crossed tithe-free for years — a courtesy of office, he called it, though the charter named no such courtesy.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps3-4-c",
        explanationOptions: [
          {
            id: "ps3-4-b",
            text: "The collector's defense of the tithe assumes the tithe's validity from the start.",
          },
          {
            id: "ps3-4-c",
            text: "The rule pressed on every crossing is suspended for his own, with 'courtesy of office' naming no difference the charter recognizes.",
          },
          {
            id: "ps3-4-d",
            text: "The collector confines the board to two readings of the charter when it bears several.",
          },
        ],
      },
      {
        id: "ps3-5",
        text: "The board suspended the tithe pending counsel, and the collector's goods, by unanimous vote, paid double until then.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-lantern-inquest",
    title: "The Lantern Inquest",
    difficulty: "intermediate",
    includedLabels: ["loaded-question", "moving-goalposts"],
    sentences: [
      {
        id: "ps4-1",
        text: "After the hayloft fire, the inquest turned its attention to the carter, whose lantern had hung in the barn that night among a dozen others.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps4-2",
        text: "The foreman opened with what he called a simple question: 'When did you stop leaving your lantern lit among dry hay?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps4-2-a",
        explanationOptions: [
          {
            id: "ps4-2-a",
            text: "The question presumes the lantern was left lit — a charge no one had proven — so 'never' sounds like denial and any date sounds like guilt.",
          },
          {
            id: "ps4-2-b",
            text: "The foreman's question assumes the carter's guilt as a premise and concludes it from itself.",
          },
          {
            id: "ps4-2-c",
            text: "The foreman raises the standard of proof each time the carter meets it.",
          },
        ],
      },
      {
        id: "ps4-3",
        text: "The carter, to his credit, answered the question underneath the question: his lantern, he said, had been out and cold on its hook by supper.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps4-4",
        text: "Two witnesses confirmed the cold lantern; the foreman then wanted the hook itself examined, and when the hook proved sound, declared that only testimony from someone awake at midnight could settle anything.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps4-4-c",
        explanationOptions: [
          {
            id: "ps4-4-b",
            text: "The foreman offers the inquest a false pair: convict the carter or close the case unsolved.",
          },
          {
            id: "ps4-4-c",
            text: "Each demand is satisfied and immediately replaced by a steeper one — witnesses, then the hook, then a midnight observer — so no evidence can ever clear him.",
          },
          {
            id: "ps4-4-d",
            text: "The foreman excuses his own drowsing that night while condemning the carter's.",
          },
        ],
      },
      {
        id: "ps4-5",
        text: "The smith observed from the back that by that standard no fire in the county's history had ever been explained.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps4-6",
        text: "The inquest found for accident, and the foreman found, in time, other uses for his simplicity.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-mill-lease",
    title: "The Mill Lease",
    difficulty: "intermediate",
    includedLabels: ["false-dilemma", "special-pleading"],
    sentences: [
      {
        id: "ps5-1",
        text: "The mill lease came up for renewal in a wet spring, with the miller and the manor at the same long table as their grandfathers.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps5-2",
        text: "The steward put the manor's position with great finality: accept the doubled rent, or see the mill closed by Michaelmas — there was no third road.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps5-2-a",
        explanationOptions: [
          {
            id: "ps5-2-a",
            text: "Two outcomes are offered as exhaustive while the customary third roads — arbitration, a stepped rent, a shorter term — sit unmentioned in the very lease being renewed.",
          },
          {
            id: "ps5-2-b",
            text: "The steward assumes the doubled rent is fair, which is precisely what the table is meeting to decide.",
          },
          {
            id: "ps5-2-c",
            text: "The steward exempts the manor's own arrears from the strictness he demands of the miller.",
          },
        ],
      },
      {
        id: "ps5-3",
        text: "The miller's daughter read aloud the arbitration clause, article nine, in the steward's own fair copperplate.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps5-4",
        text: "Pressed on the manor's unpaid repairs to the weir — owed under the same lease — the steward explained that obligations ran differently upward than downward, the manor being the manor.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps5-4-c",
        explanationOptions: [
          {
            id: "ps5-4-b",
            text: "The steward narrows the miller's remedies to two when the lease provides several.",
          },
          {
            id: "ps5-4-c",
            text: "One document binds both parties, but its duties are enforced on the miller and waived for the manor, with 'being the manor' offered as the entire difference.",
          },
          {
            id: "ps5-4-d",
            text: "The steward demands new proof of the weir damage each time the old proof is accepted.",
          },
        ],
      },
      {
        id: "ps5-5",
        text: "The arbitrator, when article nine produced one, read obligations in both directions, as ink generally runs.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps5-6",
        text: "The rent rose by a quarter, the weir was mended by June, and the steward's copperplate grew, if anything, fairer.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-comet-club",
    title: "The Comet Club",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "false-dilemma"],
    sentences: [
      {
        id: "ps6-1",
        text: "The astronomy club met above the bakery, and the question that spring was whether to admit the self-taught.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps6-2",
        text: "Dr. Fenn's argument had a pleasing roundness: only the properly trained can judge the sky, and the proof that the self-taught judge it badly is that they lack proper training.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps6-2-a",
        explanationOptions: [
          {
            id: "ps6-2-a",
            text: "The evidence offered for the conclusion is the conclusion — lacking training proves bad judgment only if training is what judgment requires, which was the question.",
          },
          {
            id: "ps6-2-b",
            text: "Fenn poses a question that convicts whoever answers it directly.",
          },
          {
            id: "ps6-2-c",
            text: "Fenn allows the club only two futures when others are available.",
          },
        ],
      },
      {
        id: "ps6-3",
        text: "It was gently recalled that the club's founding comet had been found by a customs officer with a shop-window telescope.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps6-4",
        text: "Very well, said Fenn: then let the club choose tonight between remaining a serious body or becoming a public amusement — for those were the alternatives.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps6-4-c",
        explanationOptions: [
          {
            id: "ps6-4-b",
            text: "Fenn's alternatives each assume the self-taught are unserious, the matter under debate.",
          },
          {
            id: "ps6-4-c",
            text: "Serious body or public amusement — as if an examination, a probationary year, or a sponsored membership were not third, fourth, and fifth doors standing open.",
          },
          {
            id: "ps6-4-d",
            text: "Fenn holds candidates to a credential he himself was never asked to produce.",
          },
        ],
      },
      {
        id: "ps6-5",
        text: "The club adopted the examination, which Dr. Fenn helped write, and which the baker's apprentice passed at the first sitting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-boundary-oak",
    title: "The Boundary Oak",
    difficulty: "intermediate",
    includedLabels: ["loaded-question", "moving-goalposts", "dialectical"],
    sentences: [
      {
        id: "ps7-1",
        text: "The boundary oak had stood between the two farms longer than the deeds, which made its fallen state a legal event.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps7-2",
        text: "Old Garrow's opening at the hearing was a question for his neighbor: 'Will you at least tell the assessor why you had the oak felled in the dark?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps7-2-a",
        explanationOptions: [
          {
            id: "ps7-2-a",
            text: "That the neighbor felled it, and by night, are smuggled into the question as settled — answering 'why' concedes both before any evidence is heard.",
          },
          {
            id: "ps7-2-b",
            text: "Garrow reasons in a circle: the felling was wrongful because it was a wrongful felling.",
          },
          {
            id: "ps7-2-c",
            text: "Garrow raises what would count as proof of innocence each time it's supplied.",
          },
        ],
      },
      {
        id: "ps7-3",
        text: "The assessor set the question aside and asked instead what the storm ledger showed for that week, which was a gale from the northwest.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps7-4",
        text: "Shown the gale record, Garrow wanted the stump examined for saw marks; shown the stump's clean tear, he allowed that only a witness to the fall itself would move him — the county having, he knew, no such witness.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps7-4-c",
        explanationOptions: [
          {
            id: "ps7-4-b",
            text: "Garrow puts to the hearing a pair of choices — sabotage or negligence — that leaves out the storm.",
          },
          {
            id: "ps7-4-c",
            text: "Ledger, then stump, then an impossible eyewitness: the required proof climbs each time it is met, arriving finally at what cannot exist.",
          },
          {
            id: "ps7-4-d",
            text: "Garrow's question to the neighbor assumes the very act it asks about.",
          },
        ],
      },
      {
        id: "ps7-5",
        text: "The neighbor then did what no one expected: he stated Garrow's real grievance better than Garrow had — that the fallen oak erased the only mark of a line Garrow's family had defended for a century — and offered to bear half the cost of a surveyed stone in its place.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "ps7-5-a",
        explanationOptions: [
          {
            id: "ps7-5-a",
            text: "The opposing concern is restated at full strength and answered with an amendment that meets it — the stone — turning a quarrel into a settled line.",
          },
          {
            id: "ps7-5-b",
            text: "The neighbor concedes guilt by proposing to pay for the marker.",
          },
          {
            id: "ps7-5-c",
            text: "The neighbor limits Garrow to accepting the stone or losing the line entirely.",
          },
        ],
      },
      {
        id: "ps7-6",
        text: "The stone was set at midsummer with both families present, and the oak's timber, by agreement, roofed the school.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
