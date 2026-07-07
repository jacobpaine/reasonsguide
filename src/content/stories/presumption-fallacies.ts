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
  // ── Stories 8–12 ─────────────────────────────────────────────────────────
  {
    id: "story-tide-wall",
    title: "The Tide Wall",
    difficulty: "intermediate",
    includedLabels: ["false-dilemma", "moving-goalposts"],
    sentences: [
      {
        id: "ps8-1",
        text: "The tide-wall commission sat in the harbor house on a grey Wednesday, the crack in the sea wall wide enough to see from the south window.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps8-2",
        text: "Commissioner Pryce opened with what he called practical clarity: the wall must either come down to the sill and be rebuilt entirely, or stand as it is — the sea, he said, left no room between those two positions.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps8-2-a",
        explanationOptions: [
          {
            id: "ps8-2-a",
            text: "Full demolition or doing nothing are offered as the only choices, while the harbor engineer's buttress repair — already drafted and costed — sits unmentioned on the same table.",
          },
          {
            id: "ps8-2-b",
            text: "Pryce treats the wall's condition as self-evident without letting the survey speak, arguing from the conclusion he has already reached.",
          },
          {
            id: "ps8-2-c",
            text: "Pryce raises the evidentiary standard for the repair plan each time a new piece of evidence is brought forward.",
          },
          {
            id: "ps8-2-d",
            text: "Pryce exempts the rebuild proposal from the cost scrutiny he applies to the repair plan.",
          },
        ],
      },
      {
        id: "ps8-3",
        text: "The harbor engineer spread her survey drawings across the table and traced the crack, explaining that a buttress line at the toe of the wall would seal it at a sixth of the rebuild cost.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps8-4",
        text: "Pryce required core samples before accepting that finding; when the cores came back sound, he wanted an admiralty endorsement; when the endorsement arrived by Friday and agreed with the survey, he concluded that only a decade of tidal readings could confirm whether the lime had been weakened by salt.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps8-4-c",
        explanationOptions: [
          {
            id: "ps8-4-a",
            text: "Pryce offers the commission a pair of options — demolition or inaction — when the survey already names a third.",
          },
          {
            id: "ps8-4-b",
            text: "Pryce assumes the wall is unsound, and then uses that assumption to question any evidence that the wall is sound.",
          },
          {
            id: "ps8-4-c",
            text: "Cores, then admiralty endorsement, then ten years of tidal readings — each standard is satisfied and immediately traded for a steeper one, so no survey can ever be enough.",
          },
          {
            id: "ps8-4-d",
            text: "Pryce waives the tidal-reading requirement for the rebuild proposal while applying it strictly to the repair.",
          },
        ],
      },
      {
        id: "ps8-5",
        text: "The tidal ledgers, fifty-three years of them in bound volumes, were on the shelf behind the commissioner's chair.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps8-6",
        text: "The commission voted three to one for the buttress repair, and the ledgers were returned, unread, to the shelf.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-missing-folio",
    title: "The Missing Folio",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "loaded-question"],
    sentences: [
      {
        id: "ps9-1",
        text: "Folio 39 of the county register had been missing for three weeks when the head archivist raised it at the board of trustees, without, it emerged, telling his assistant in advance.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps9-2",
        text: "His opening question to her was brief: 'Can you tell the board at what point you decided to conceal the loss rather than report it?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps9-2-b",
        explanationOptions: [
          {
            id: "ps9-2-a",
            text: "The archivist assumes his conclusion — that she concealed the loss — in order to establish the conclusion that she concealed the loss.",
          },
          {
            id: "ps9-2-b",
            text: "'Decided to conceal' and 'rather than report' both presume guilt before any evidence is heard; saying 'I did not conceal it' still accepts the frame of a deliberate decision.",
          },
          {
            id: "ps9-2-c",
            text: "The archivist demands a higher standard of proof from his assistant than from other staff who handled the register that month.",
          },
          {
            id: "ps9-2-d",
            text: "The archivist limits the board to two readings — concealment or negligence — while a third possibility, that the folio was misfiled by someone else, goes unmentioned.",
          },
        ],
      },
      {
        id: "ps9-3",
        text: "The assistant asked the board to check the incident ledger, where she had logged the gap the same afternoon she noticed it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps9-4",
        text: "The archivist set the ledger aside without reading it: a record kept by someone dishonest must be read with suspicion, and dishonesty, he explained, was self-evident in a person who hid what went missing.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps9-4-a",
        explanationOptions: [
          {
            id: "ps9-4-a",
            text: "The ledger is disqualified because she is dishonest, and she is dishonest because the ledger would otherwise clear her — the circle needs no evidence and admits none.",
          },
          {
            id: "ps9-4-b",
            text: "The archivist's question to her presupposes concealment, and his dismissal of the ledger reinforces that presupposition without new argument.",
          },
          {
            id: "ps9-4-c",
            text: "The archivist raises the required proof one step each time the previous step is satisfied: report, then ledger, then a witness to the shelving.",
          },
          {
            id: "ps9-4-d",
            text: "The archivist waives the ledger requirement for his own incident reports while insisting on it for hers.",
          },
        ],
      },
      {
        id: "ps9-5",
        text: "The board opened the ledger and found the entry in the assistant's hand, dated three weeks prior, with the archivist's own counter-signature immediately below it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-net-toll",
    title: "The Net Toll",
    difficulty: "intermediate",
    includedLabels: ["special-pleading", "false-dilemma"],
    sentences: [
      {
        id: "ps10-1",
        text: "The harbor toll had stood at sixpence a catch since the charter, and the thirty working boats that came through the channel bar paid it without argument.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps10-2",
        text: "The harbor master's brother kept a sloop, and that sloop had crossed the bar weekly for four years without paying, described each time in the port log as transit on harbor business — though the log recorded no business done.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps10-2-c",
        explanationOptions: [
          {
            id: "ps10-2-a",
            text: "The harbor master limits the fishers' association to two options — accept the exemption or challenge it — while the charter provides a third.",
          },
          {
            id: "ps10-2-b",
            text: "The harbor master's argument that the sloop serves harbor business assumes what it needs to prove — that a relevant exception exists.",
          },
          {
            id: "ps10-2-c",
            text: "The toll pressed on every other vessel is suspended for a family member's, with 'harbor business' offered as a justification the log contradicts and the charter does not mention.",
          },
          {
            id: "ps10-2-d",
            text: "The harbor master shifts his justification for the exemption each time a new crossing is queried.",
          },
        ],
      },
      {
        id: "ps10-3",
        text: "The fishers' association brought the matter before the harbor board at the autumn sitting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps10-4",
        text: "The harbor master framed the board's choices plainly: either confirm, on the record, that the exemption was valid by long custom, or expose the harbor to litigation by overturning a practice that had run for years — those, he told the board, were its only options.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps10-4-b",
        explanationOptions: [
          {
            id: "ps10-4-a",
            text: "The harbor master assumes the exemption is already customary, which was the point the board was assembled to determine.",
          },
          {
            id: "ps10-4-b",
            text: "Legal confirmation or costly litigation are presented as exhaustive, while amendment, enforcement, and a simple board resolution go unmentioned — avenues the board's solicitor named in under a minute.",
          },
          {
            id: "ps10-4-c",
            text: "The harbor master applies the risk of litigation to the association's position while waiving any similar risk from his own family's practice.",
          },
          {
            id: "ps10-4-d",
            text: "The harbor master shifts his defence from custom to necessity each time the board presses the previous justification.",
          },
        ],
      },
      {
        id: "ps10-5",
        text: "The board's solicitor observed that a vote to amend the collection register was both available and free, and moved to schedule it for the following week.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps10-6",
        text: "The sloop began paying sixpence a catch at the next crossing, and the port log found other ways to be interesting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-chart-proof",
    title: "The Chart Proof",
    difficulty: "intermediate",
    includedLabels: ["moving-goalposts", "begging-the-question"],
    sentences: [
      {
        id: "ps11-1",
        text: "The surveyor's apprentice had redrawn the northern commons chart three times at the certifier's direction, each version correcting the fault he had named in the last.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps11-2",
        text: "The first draft lacked a sealed instrument, so she obtained one; the second lacked a licensed co-signature, so she secured one; the third was returned for an insufficient scale, and when she submitted the fourth — with the seal, the signature, and the larger scale — he found it wanting in a common-land notation he had not previously mentioned.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps11-2-d",
        explanationOptions: [
          {
            id: "ps11-2-a",
            text: "The certifier confines the apprentice to passing or failing, when the guild examiner represents a third path she had not been told to take.",
          },
          {
            id: "ps11-2-b",
            text: "The certifier assumes that uncertified charts are inadequate, and uses that assumption to justify the certification process that produces the assumption.",
          },
          {
            id: "ps11-2-c",
            text: "The certifier holds the apprentice's charts to a standard he exempts from licensed surveyors who submit through the same office.",
          },
          {
            id: "ps11-2-d",
            text: "Seal, co-signature, scale, and finally an undisclosed notation — each requirement is satisfied and at once replaced, so the fourth draft is no closer to acceptance than the first.",
          },
        ],
      },
      {
        id: "ps11-3",
        text: "She added the notation, submitted the chart a fifth time, and waited.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps11-4",
        text: "The certifier explained his thoroughness to a colleague: charts that failed certification were by definition inadequate, and inadequate charts were exactly why a certification process existed — which showed, he said, that the process was doing its job.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps11-4-b",
        explanationOptions: [
          {
            id: "ps11-4-a",
            text: "The certifier raises the standard for what counts as adequate each time the apprentice satisfies the previous requirement.",
          },
          {
            id: "ps11-4-b",
            text: "'Failed charts are inadequate' and 'inadequate charts need certification' circle each other without touching the question of whether the process itself is well-designed — any chart it rejects is, by definition, proof that the process is necessary.",
          },
          {
            id: "ps11-4-c",
            text: "The certifier limits the apprentice to two conclusions — the chart is adequate or it is not — rather than allowing that adequacy admits of degrees.",
          },
          {
            id: "ps11-4-d",
            text: "The certifier's defense embeds the assumption that the certification standard is beyond challenge, which was precisely what the guild examiner had been asked to review.",
          },
        ],
      },
      {
        id: "ps11-5",
        text: "The guild examiner arrived for an unrelated inspection, looked at the fifth draft for ninety seconds, and stamped it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps11-6",
        text: "The certifier found, in the weeks that followed, other apprentices and other charts requiring his particular attention.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-vestry-bond",
    title: "The Vestry Bond",
    difficulty: "intermediate",
    includedLabels: ["loaded-question", "special-pleading", "dialectical"],
    sentences: [
      {
        id: "ps12-1",
        text: "The vestry committee met after evensong to decide whether to sell the lower meadow — left in a Victorian bequest — and use the proceeds to settle the bell-tower debt.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps12-2",
        text: "The rector opened by asking whether the committee was prepared to explain to the parish why it had let the tower fall into disrepair while sitting on a valuable asset for thirty years.",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps12-2-a",
        explanationOptions: [
          {
            id: "ps12-2-a",
            text: "'Let the tower fall' and 'sitting on a valuable asset' both plant blame before the meeting has begun — any direct answer, including a denial, accepts that a decision to neglect was made.",
          },
          {
            id: "ps12-2-b",
            text: "The rector assumes the committee was negligent in order to argue that the committee was negligent; the question is its own evidence.",
          },
          {
            id: "ps12-2-c",
            text: "The rector limits the committee to selling or facing criticism, while a fundraising campaign or a grant application are unmentioned alternatives.",
          },
          {
            id: "ps12-2-d",
            text: "The rector exempts his own tenure from the thirty-year account he demands of the committee.",
          },
        ],
      },
      {
        id: "ps12-3",
        text: "The clerk noted that the bequest had carried spending restrictions until the present year, so 'sitting on' the meadow had not, until recently, been a choice the committee was permitted to forgo.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps12-4",
        text: "The treasurer, whose family ran cattle on the meadow under a private grazing arrangement, supported the sale warmly — but when the clerk proposed that the grazing arrangement should also come before the committee, he explained that personal tenure was a wholly separate matter, not within the vestry's jurisdiction to review.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps12-4-c",
        explanationOptions: [
          {
            id: "ps12-4-a",
            text: "The treasurer's support for the sale embeds the assumption that his own arrangement is already settled, which the clerk's motion would decide.",
          },
          {
            id: "ps12-4-b",
            text: "The treasurer assumes the vestry lacks jurisdiction, and uses that assumption to establish that the vestry lacks jurisdiction.",
          },
          {
            id: "ps12-4-c",
            text: "The parish asset under review is subject to full committee scrutiny; the treasurer's private use of the same asset is not — with 'separate matter' standing in for any distinction the vestry's own rules actually draw.",
          },
          {
            id: "ps12-4-d",
            text: "The treasurer shifts his objection from jurisdiction to procedure to precedent each time a committee member pushes back.",
          },
        ],
      },
      {
        id: "ps12-5",
        text: "Three committee members exchanged a look, but the agenda moved on.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps12-6",
        text: "The school governor set the question of culpability aside and laid out what she took to be the actual case: the tower needed eighty thousand pounds by March, the endowment earned less than four thousand a year, and no other parish asset was available — an argument she believed was sufficient, and which she invited the room to rebut on its own terms rather than avoid.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "ps12-6-b",
        explanationOptions: [
          {
            id: "ps12-6-a",
            text: "The governor presents debt and meadow as the only two items in the equation, when a grant application or a loan are options she does not address.",
          },
          {
            id: "ps12-6-b",
            text: "The loaded frame of the rector's opening question is set aside, the real case for selling is stated as a proper argument with specific figures, and the room is invited to answer it — a move from accusation to genuine contestation.",
          },
          {
            id: "ps12-6-c",
            text: "The governor assumes the tower must be repaired without arguing for that premise, which some members had not conceded.",
          },
          {
            id: "ps12-6-d",
            text: "The governor raises a new standard — eighty thousand by March — after the earlier question of culpability has been set aside.",
          },
        ],
      },
      {
        id: "ps12-7",
        text: "The committee voted to sell, and the treasurer's grazing arrangement became, by the clerk's motion, the first item on the next meeting's agenda.",
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
