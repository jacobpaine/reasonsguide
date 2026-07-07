import type { Lesson } from "@/domain/types";

export const evidenceFallaciesLesson: Lesson = {
  id: "evidence-fallacies",
  title: "When the sample lies: evidence fallacies",
  status: "ready",
  labelIds: ["cherry-picking", "biased-sample", "survivorship-bias"],
  definition:
    "These three fallacies corrupt statistical and inductive reasoning before the inference even begins. Cherry-picking keeps only the favorable facts; a biased sample asks the wrong slice of the group; survivorship bias studies only what made it through a filter. Each produces evidence that is true, piece by piece — and a picture that is false.",
  memoryHook: "Before trusting a sample, ask what never made it in.",
  soundsLike: [
    "Just look at these five glowing reviews. (cherry-picking)",
    "Everyone I asked at the harbor agrees. (biased sample)",
    "They built things to last in the old days — look at these old houses. (survivorship bias)",
  ],
  workedExamples: [
    {
      id: "ef-w1",
      title: "The innkeeper's wall",
      passage: [
        "Two inns, same road: the first posts every letter its guests send, the second frames only the six most flattering.",
        "A traveler reading the walls would find both inns beloved.",
        "The first wall is a sample; the second is a selection wearing a sample's clothes.",
        "Every framed letter at the second inn is genuine — the falseness lives entirely in what was left in the drawer.",
      ],
      explanation:
        "Cherry-picking is honest statistical reasoning's counterfeit: same format, same confident air, but the evidence was chosen *after* checking which way it points. That's why the cure isn't checking the cited facts — they're usually true — but asking what the full drawer holds.",
    },
    {
      id: "ef-w2",
      title: "The houses still standing",
      passage: [
        "The mason gestured at the three-hundred-year-old cottages by the church: 'They knew how to build back then.'",
        "But the parish once held ten cottages for every one that remains.",
        "The damp-ridden, ill-footed nine in ten fell centuries ago, unrecorded.",
        "The old cottages aren't evidence that old building was good — they're the winners of a very long tournament, judged after the losers left the field.",
      ],
      explanation:
        "Survivorship bias is a biased sample built by time itself: a filter (collapse, failure, death) removes cases before anyone counts, and the count flatters what remains. The tell is a conclusion drawn from survivors when the question is about the whole cohort — the fallen cottages are exactly the missing evidence.",
    },
  ],
  guidedExamples: [
    {
      id: "ef-g1",
      passage: [
        "The bridge committee polled opinion on the new toll by standing at the bridge and asking those who crossed.",
        "Nine in ten crossers called the toll fair, and the committee reported the town satisfied.",
      ],
      prompt: "What is wrong with the committee's sample?",
      hint: "Who, by construction, could never appear in it?",
      choices: [
        {
          id: "ef-g1-a",
          text: "People deterred by the toll don't cross, so the poll samples only those who find it acceptable — a biased sample.",
          isCorrect: true,
          feedback:
            "Yes. The sampling place filters the sampled people: anyone the toll priced off the bridge is invisible to a poll taken on it. The method guaranteed its own good news.",
        },
        {
          id: "ef-g1-b",
          text: "Nine in ten is too round a number to be real.",
          isCorrect: false,
          feedback:
            "Round numbers occur honestly all the time. The flaw isn't in the figure — it's in who was standing where the question was asked.",
        },
        {
          id: "ef-g1-c",
          text: "The committee framed only the favorable answers and discarded the rest.",
          isCorrect: false,
          feedback:
            "That would be cherry-picking, and nothing suggests it — they reported what they gathered. The corruption happened earlier, in *where* they gathered.",
        },
      ],
    },
    {
      id: "ef-g2",
      passage: [
        "Arguing the orchard's new rootstock was thriving, the steward brought the landlord three magnificent boughs.",
        "The orchard ledger, had anyone opened it, showed a third of the new grafts dead by June.",
      ],
      prompt: "Name the steward's move.",
      hint: "The boughs are real. What about the drawer?",
      choices: [
        {
          id: "ef-g2-a",
          text: "Cherry-picking — genuine evidence, selected after the fact to point one way.",
          isCorrect: true,
          feedback:
            "Exactly, and almost literally. Three true boughs against a suppressed ledger: each exhibit honest, the exhibition a lie. Ask for the denominator — three boughs out of how many grafts?",
        },
        {
          id: "ef-g2-b",
          text: "Survivorship bias — only the living boughs could be carried to the landlord.",
          isCorrect: false,
          feedback:
            "Close, but no filter forced his hand: the dead grafts were right there in the ledger to report. He *chose* the flattering subset — that agency is what makes it cherry-picking.",
        },
        {
          id: "ef-g2-c",
          text: "Hasty generalization — three boughs are too few to judge an orchard.",
          isCorrect: false,
          feedback:
            "Small evidence is part of it, but the essence is worse than haste: the three weren't a small honest sample, they were the three best. Selection, not size, is the sin.",
        },
      ],
    },
    {
      id: "ef-g3",
      passage: [
        "The retiring captain toured schools telling how he'd ignored the pilot charts as a young man and trusted his nose, and prospered.",
        "The harbormaster, asked to endorse the lecture, declined: 'The ones who trusted their noses and struck the bar aren't giving lectures.'",
      ],
      prompt: "What is the harbormaster pointing out?",
      hint: "Who gets to go on speaking tours?",
      choices: [
        {
          id: "ef-g3-a",
          text: "Survivorship bias — advice gathered only from those the risk didn't kill.",
          isCorrect: true,
          feedback:
            "Right. Lecture stages are filtered by survival: the drowned hold no assemblies. Counting the captain without counting the wrecks makes recklessness look like wisdom.",
        },
        {
          id: "ef-g3-b",
          text: "A biased sample — schoolchildren are the wrong audience to poll about seamanship.",
          isCorrect: false,
          feedback:
            "The audience isn't the evidence; the captain's life story is. The filter that matters ran over *storytellers* — only surviving ones tour.",
        },
        {
          id: "ef-g3-c",
          text: "Anecdotal evidence — one vivid career can't outweigh the charts.",
          isCorrect: false,
          feedback:
            "There's a family resemblance, but the harbormaster's point is sharper: it's not just one story against the data — it's that stories like it are *systematically* the ones left alive to tell.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "ef-m1",
      passage: [
        "Promoting its night market, the guild's pamphlet quoted takings from the three best stalls of the season.",
        "The season's ledger, unpublished, showed most stalls trading at a loss.",
      ],
      options: ["cherry-picking", "biased-sample", "survivorship-bias"],
      correctLabel: "cherry-picking",
      explanation:
        "The full ledger existed and was set aside in favor of the three friendliest figures — deliberate selection from known evidence.",
    },
    {
      id: "ef-m2",
      passage: [
        "To learn what the parish thought of earlier church bells, the rector asked the congregation as it filed out of the early service.",
        "Support was overwhelming, he reported.",
      ],
      options: ["biased-sample", "cherry-picking", "survivorship-bias"],
      correctLabel: "biased-sample",
      explanation:
        "Early-service attenders are exactly the people early bells suit. The gathering place did the distorting — no one had to select anything.",
    },
    {
      id: "ef-m3",
      passage: [
        "Reading the diaries of the great polar expeditions, Milo concluded that grit and improvisation reliably see a crew through.",
        "Expeditions that improvised and vanished left few diaries in the library.",
      ],
      options: ["survivorship-bias", "cherry-picking", "anecdotal-evidence"],
      correctLabel: "survivorship-bias",
      explanation:
        "The archive itself is filtered: returning crews write memoirs, lost ones don't. Milo's sample was drawn after the fatal filter had run.",
    },
    {
      id: "ef-m4",
      passage: [
        "The seed house tested its new oat on forty plots — wet ground and dry, clay and loam, north field and south.",
        "It outyielded the old variety on thirty-one of the forty, so they judged it the better oat for the county and said so with fair confidence.",
      ],
      options: ["statistical", "cherry-picking", "biased-sample"],
      correctLabel: "statistical",
      explanation:
        "This one is healthy: a varied, pre-planned sample, the full count reported, losses included. Not every confident number hides a fallacy — the method is the difference.",
    },
    {
      id: "ef-m5",
      passage: [
        "The first week the new scales arrived, a market woman was short-weighted at one stall.",
        "She has told the tale ever since as proof that the new scales cheat, all of them, the county over.",
      ],
      options: ["hasty-generalization", "biased-sample", "cherry-picking"],
      correctLabel: "hasty-generalization",
      explanation:
        "One incident inflated into a county-wide rule — the old fallacy from the first fallacies chapter, here among its cousins. Too few cases, not corrupted cases.",
    },
  ],
  unlockChallenge: [
    {
      id: "ef-u1",
      passage: [
        "Defending his tavern's reputation, the landlord read aloud four letters of praise, chosen from a box that also held the complaints.",
      ],
      options: ["cherry-picking", "biased-sample", "survivorship-bias"],
      correctLabel: "cherry-picking",
      explanation:
        "The box held both kinds; the reading held one. Selection from available evidence is the mark.",
    },
    {
      id: "ef-u2",
      passage: [
        "Asked whether the footpath should stay open in winter, the warden polled the walkers he met on it in January.",
        "Walkers unwilling to brave it in January were, naturally, elsewhere.",
      ],
      options: ["biased-sample", "survivorship-bias", "hasty-generalization"],
      correctLabel: "biased-sample",
      explanation:
        "The polling ground pre-selected winter enthusiasts. The distortion is in who could be asked, not in what was done with the answers.",
    },
    {
      id: "ef-u3",
      passage: [
        "Every business on the high street has weathered at least one recession, the alderman noted, so the town's businesses were plainly recession-proof.",
        "The businesses the recessions closed no longer stood on the high street to be counted.",
      ],
      options: ["survivorship-bias", "cherry-picking", "biased-sample"],
      correctLabel: "survivorship-bias",
      explanation:
        "The street only displays survivors — the failed shops were removed from the sample by the very recessions in question.",
    },
  ],
};
