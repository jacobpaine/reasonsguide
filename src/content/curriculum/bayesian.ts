import type { Lesson } from "@/domain/types";

export const bayesianLesson: Lesson = {
  id: "bayesian",
  title: "Bayesian reasoning",
  status: "ready",
  labelIds: ["bayesian"],
  definition:
    "Bayesian reasoning updates how confident you should be in a belief as evidence arrives: start from how likely it was beforehand, then shift in proportion to how strongly the new evidence favors it over the alternatives. Neither the starting rate nor the new clue settles it alone — the skill is combining them.",
  memoryHook: "New evidence moves the needle — from wherever it already stood.",
  soundsLike: [
    "Given how rare that is to begin with…",
    "That changes the odds.",
    "I'd have said unlikely before; after seeing this, likelier — but still not likely.",
  ],
  workedExamples: [
    {
      id: "by-w1",
      title: "A rare blight and a common scorch",
      passage: [
        "Spots on the pear leaves could mean black blight, which strikes perhaps one orchard in a hundred each year.",
        "But the same spots appear with ordinary sun scorch, which touches half the orchards in any dry summer.",
        "The spots favor neither strongly, so the sensible view stays close to where it started: almost certainly scorch, blight not ruled out.",
      ],
      explanation:
        "The starting rates do the heavy lifting: blight is rare, scorch is everywhere, and the evidence — spots both produce — barely separates them. A Bayesian reasoner lets weak evidence move a confident prior only slightly. Jumping to 'blight!' on the spots alone would ignore how unlikely blight was before anyone looked.",
    },
    {
      id: "by-w2",
      title: "Fog on the channel",
      passage: [
        "On any given day, the ferry runs late about once in twenty.",
        "This morning fog sat on the channel, and the harbor log shows most late days were foggy ones — while most foggy days still saw her on time.",
        "Rana raised her estimate of a late boat from 'hardly' to 'perhaps one in three': higher for the fog, tempered by how rare lateness is at all.",
      ],
      explanation:
        "This is the full update in miniature. The prior (one in twenty) meets evidence (fog) that is much more common on late days than on ordinary ones, so the estimate rises — but because lateness was rare to begin with, it rises to 'one in three', not to 'certain'. The answer sits between the old rate and what the clue suggests, which is exactly where it should sit.",
    },
  ],
  guidedExamples: [
    {
      id: "by-g1",
      passage: [
        "A mark on the coin matched the rare harbor mint, which strikes maybe one coin in two hundred of its kind.",
        "But the appraiser knew forgers copy that very mark, and copies outnumber originals.",
        "She called the coin 'probably a copy, worth a closer look' rather than 'a rare find'.",
      ],
      prompt: "Why doesn't the matching mark settle it for the rare mint?",
      hint: "Ask what the mark's presence does to each hypothesis — and where the odds stood before the mark was seen.",
      choices: [
        {
          id: "by-g1-a",
          text: "The mark appears under both hypotheses, and rarity plus common forgeries kept the odds against an original.",
          isCorrect: true,
          feedback:
            "Yes. Evidence only moves belief insofar as it's more expected under one hypothesis than its rivals. A mark that forgers reliably copy separates the hypotheses barely at all, so the low prior for a genuine rarity mostly stands.",
        },
        {
          id: "by-g1-b",
          text: "Because appraisers should never trust physical marks.",
          isCorrect: false,
          feedback:
            "Marks are perfectly good evidence when rivals don't mimic them. The issue is this mark's poor power to discriminate, not physical evidence in general.",
        },
        {
          id: "by-g1-c",
          text: "Because one coin is too small a sample to generalize from.",
          isCorrect: false,
          feedback:
            "No generalization is being attempted — the question is about this one coin. What's being weighed is a prior rate against the evidential force of the mark.",
        },
      ],
    },
    {
      id: "by-g2",
      passage: [
        "Two clues could confirm that the cellar damp comes from the old well rather than the rain.",
        "A wet patch in August, when no rain falls, would almost never appear unless the well were the source.",
        "A wet patch in November could come from either.",
      ],
      prompt: "Which clue would move a careful reasoner's belief more, and why?",
      hint: "Compare how expected each clue is under the two rival explanations.",
      choices: [
        {
          id: "by-g2-a",
          text: "The August patch — it's likely if the well is the source and nearly impossible otherwise.",
          isCorrect: true,
          feedback:
            "Right. Evidence is strong in proportion to how differently the rivals predict it. The November patch fits both stories, so it barely moves the needle; the August patch splits them wide open.",
        },
        {
          id: "by-g2-b",
          text: "The November patch — November is wetter, so wet patches are more common then.",
          isCorrect: false,
          feedback:
            "More common, yes — under *both* hypotheses, which is exactly why it teaches so little. A clue both rivals expect can't tell them apart.",
        },
        {
          id: "by-g2-c",
          text: "Neither — belief should only change with many repeated observations.",
          isCorrect: false,
          feedback:
            "A single observation can be decisive when the rivals disagree sharply about it. Updating doesn't wait for a sample; it weighs how telling each clue is.",
        },
      ],
    },
    {
      id: "by-g3",
      passage: [
        "The registrar found the census page missing and suspected the archivist's careless apprentice.",
        "Then she learned the page had been signed out, properly, by a visiting scholar — and that pages signed out by scholars go missing far more often than pages the apprentice handles.",
        "She shifted her suspicion accordingly, without declaring the matter closed.",
      ],
      prompt: "What makes this Bayesian rather than simply choosing the best explanation?",
      hint: "Notice what happens to her confidence — and what doesn't happen to the losing hypothesis.",
      choices: [
        {
          id: "by-g3-a",
          text: "She adjusts degrees of confidence in both suspects as evidence arrives, rather than electing a single winner.",
          isCorrect: true,
          feedback:
            "Exactly. Abduction picks the best explanation of the clues; Bayesian reasoning keeps a running balance of confidence across all the candidates, nudged by each new fact. The apprentice isn't cleared — he's merely become less likely.",
        },
        {
          id: "by-g3-b",
          text: "She relies on the scholar's reputation to settle who took the page.",
          isCorrect: false,
          feedback:
            "No one's word is being trusted here. The sign-out record and the base rates of loss do the work — and nothing gets settled, only re-weighted.",
        },
        {
          id: "by-g3-c",
          text: "She generalizes from past missing pages to a rule about scholars.",
          isCorrect: false,
          feedback:
            "The past rates are inputs, not the conclusion. The move is using those rates to redistribute suspicion over this page's two candidate takers.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "by-m1",
      passage: [
        "Thefts from the drying lines are rare on this lane — one summer in ten sees any at all.",
        "This morning a shirt was gone, but the wind had blown hard all night, and shirts leave with the wind far more often than with thieves.",
        "Old Pesh lowered his talk of thieves to a mutter and went looking along the hedges.",
      ],
      options: ["bayesian", "statistical", "abductive"],
      correctLabel: "bayesian",
      explanation:
        "A low prior for theft meets evidence (a missing shirt) that the rival explanation predicts even better — so confidence in theft, already low, drops further. The updating of a degree of belief is the tell.",
    },
    {
      id: "by-m2",
      passage: [
        "Of the two hundred lanterns the chandler sold last year, six came back with cracked glass.",
        "A customer buying one lantern faces about a three-in-a-hundred chance of a cracked pane.",
      ],
      options: ["statistical", "bayesian", "inductive"],
      correctLabel: "statistical",
      explanation:
        "A measured rate applied straight to a new case, with no new evidence shifting it. Until a clue arrives to update on, this is plain statistical reasoning.",
    },
    {
      id: "by-m3",
      passage: [
        "The mill's flour has been coarse twice this month, and both times the miller had let his new hand dress the stones.",
        "Before, Serra would have bet the coarseness on worn stones, which happens to every mill eventually.",
        "Knowing the new hand dressed them both times, she now thinks poor dressing the likelier culprit — though worn stones aren't off the table.",
      ],
      options: ["bayesian", "causal", "abductive"],
      correctLabel: "bayesian",
      explanation:
        "Serra starts from a prior (worn stones — the usual culprit), meets evidence that fits the rival better, and shifts her confidence without closing the case. Re-weighting rivals as evidence arrives is Bayesian.",
    },
    {
      id: "by-m4",
      passage: [
        "The letter is unsigned, but it spells 'harbour' the old way, leans its letters left, and mentions the dry dock only workers use.",
        "The best explanation of all three together is that a shipwright of the old yard wrote it.",
      ],
      options: ["abductive", "bayesian", "statistical"],
      correctLabel: "abductive",
      explanation:
        "This assembles clues and crowns the hypothesis that explains them best — no prior rate, no proportional shift, just inference to the best explanation.",
    },
    {
      id: "by-m5",
      passage: [
        "One well in fifty in these hills runs brackish, so Imre assumed his new well was fine.",
        "Then his kettle began to fur within the week — something sweet wells rarely do so fast, and brackish ones nearly always do.",
        "He now rates his well probably brackish, and is pricing a filter while he waits on the assayer.",
      ],
      options: ["bayesian", "inductive", "causal"],
      correctLabel: "bayesian",
      explanation:
        "A strong prior for a sweet well is overturned because the evidence — fast furring — is common under 'brackish' and rare under 'sweet'. Strong evidence can flip even a confident prior; that arithmetic of belief is Bayesian.",
    },
  ],
  unlockChallenge: [
    {
      id: "by-u1",
      passage: [
        "Barn fires in the valley are almost always lightning, hardly ever lamps — that's what the old records say.",
        "But the night of the fire was cloudless, and a cloudless lightning strike is nearly unheard of, while lamps burn in every barn.",
        "The assessor moved the lamp from an afterthought to her leading suspicion.",
      ],
      options: ["bayesian", "abductive", "statistical"],
      correctLabel: "bayesian",
      explanation:
        "The prior favored lightning, but the cloudless sky is devastating evidence against it — nearly impossible under one hypothesis, unremarkable under the other. Confidence redistributes accordingly.",
    },
    {
      id: "by-u2",
      passage: [
        "In the guild's ledger, nine contracts in ten are completed on time.",
        "The mason's new contract, being of the same kind, has about a nine-in-ten chance of finishing on time.",
      ],
      options: ["statistical", "bayesian", "deductive"],
      correctLabel: "statistical",
      explanation:
        "A group rate transferred to a member of the group, with nothing yet learned about this contract in particular. Add a telling clue and updating could begin — but none has arrived.",
    },
    {
      id: "by-u3",
      passage: [
        "Marta guessed the beehive was queenless — it happens to maybe one hive in twelve by midsummer.",
        "Then she heard the low, even roar queenless hives make, a sound queenright hives almost never produce.",
        "'One in twelve no longer,' she said, and sent for a new queen.",
      ],
      options: ["bayesian", "inductive", "abductive"],
      correctLabel: "bayesian",
      explanation:
        "A modest prior meets evidence far more likely under 'queenless' than under the alternative, and her confidence rises in proportion. The named starting rate and the shift are the Bayesian signature.",
    },
  ],
};
