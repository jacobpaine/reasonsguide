import type { Lesson } from "@/domain/types";

export const relevanceFallaciesLesson: Lesson = {
  id: "relevance-fallacies",
  title: "When debate breaks: relevance fallacies",
  status: "ready",
  labelIds: ["ad-hominem", "straw-man", "red-herring", "tu-quoque", "appeal-to-emotion"],
  definition:
    "Relevance fallacies are dialectical reasoning with the engagement removed: instead of meeting an argument, they change what is being met. Ad hominem attacks the arguer; the straw man rebuts a weakened copy of the position; the red herring changes the subject; tu quoque answers a criticism with 'you too'; the appeal to emotion offers feeling where evidence was owed. Each leaves the original argument standing, untouched, behind the noise.",
  memoryHook: "The argument is still standing behind the noise.",
  soundsLike: [
    "Consider who's saying it. (ad hominem)",
    "So you'd have us tear the whole thing down? (straw man)",
    "The real question is the harbor budget. (red herring)",
    "You've done the very same. (tu quoque)",
    "Think of how the founders would weep. (appeal to emotion)",
  ],
  workedExamples: [
    {
      id: "rl-w1",
      title: "Five ways to miss a point",
      passage: [
        "The surveyor told the meeting the bridge needed a weight limit, and showed her load tables.",
        "One speaker answered that she was new to the county; another, that she wanted the bridge closed forever, which no one could support.",
        "A third asked why the harbor dredging was over budget; a fourth reminded her the surveyors' own carts crossed heavy; a fifth described his grandmother crossing that bridge to her wedding, to considerable effect.",
        "When the meeting ended, the load tables lay on the table, unexamined — five answers, and not one to the argument.",
      ],
      explanation:
        "One passage, all five fallacies: the arguer attacked (new to the county), the position distorted (closed forever), the subject changed (dredging), the critic accused in turn (your carts too), and feeling summoned in evidence's place (the wedding). The tell they share is at the end: the actual argument — the tables — was never touched.",
    },
    {
      id: "rl-w2",
      title: "The copy that's easier to beat",
      passage: [
        "The schoolmistress proposed that the youngest children start an hour later in winter, citing the dark lane they walked.",
        "The board's chairman rose against 'the proposal that our school abandon standards and let children attend as they please'.",
        "That proposal he defeated handily — it just wasn't hers, which sat unanswered beside its beaten effigy.",
      ],
      explanation:
        "The straw man works by substitution: restate the position weaker or wilder, win against the restatement, and let the victory glow transfer. The defense is the dialectical discipline you already know — restate the view to its holder's satisfaction *before* answering. The chairman's version would have failed that check in five words.",
    },
  ],
  guidedExamples: [
    {
      id: "rl-g1",
      passage: [
        "The apothecary's report found the well water unsafe after the flood.",
        "The alderman replied that the apothecary had arrived from the city only two winters back, and still kept city manners.",
      ],
      prompt: "What is wrong with the alderman's reply as an answer to the report?",
      hint: "What would change about the water if the apothecary were city-mannered?",
      choices: [
        {
          id: "rl-g1-a",
          text: "It attacks the reporter and leaves the report untouched — the water is safe or not regardless of anyone's manners.",
          isCorrect: true,
          feedback:
            "Yes: ad hominem. The test is substitution — put the same report in a lifelong villager's hands and nothing about the samples changes. (Source *credibility* can matter to authority reasoning; manners and origins aren't credibility.)",
        },
        {
          id: "rl-g1-b",
          text: "It answers a weakened version of the report instead of the real one.",
          isCorrect: false,
          feedback:
            "The report isn't restated at all, weakly or otherwise — the *reporter* is the target. Distortion of the position would be the straw man; this is the arguer attacked.",
        },
        {
          id: "rl-g1-c",
          text: "It deflects by pointing out the alderman's critics do the same.",
          isCorrect: false,
          feedback:
            "No 'you too' appears — no fault of the apothecary's own conduct is alleged as matching. The move is simpler: discredit the person, skip the argument.",
        },
      ],
    },
    {
      id: "rl-g2",
      passage: [
        "Asked at the hearing why the granary accounts showed a gap, the factor spoke movingly for ten minutes on the harvest's hardships, the loyal men he employed, and the cruelty of suspicion in a small parish.",
        "Several listeners were in tears; the gap in the accounts was the same size when he sat down.",
      ],
      prompt: "What marks the factor's speech as an appeal to emotion rather than a defense?",
      hint: "What question was on the table, and what would answer it?",
      choices: [
        {
          id: "rl-g2-a",
          text: "The feelings raised, however real, bear nothing on where the money went — sentiment was offered where an accounting was owed.",
          isCorrect: true,
          feedback:
            "Right. Emotion isn't forbidden — good arguments often move people. The fallacy is substitution: the tears do the work the missing ledger entries should have done. The unchanged gap is the tell.",
        },
        {
          id: "rl-g2-b",
          text: "The hardships he described were probably invented.",
          isCorrect: false,
          feedback:
            "Grant every hardship as true — the speech still doesn't touch the question. The flaw is relevance, not honesty.",
        },
        {
          id: "rl-g2-c",
          text: "He attacked the auditors instead of answering them.",
          isCorrect: false,
          feedback:
            "He attacked no one — 'the cruelty of suspicion' comes close, but the engine of the speech is pathos, not discredit. Feeling in place of figures is the appeal to emotion.",
        },
      ],
    },
    {
      id: "rl-g3",
      passage: [
        "The pilot criticized the ferry company for running past the sandbar at low water.",
        "The company's letter replied that the pilot's own cutter had grounded on that bar not two years past.",
        "True, the pilot wrote back — which is how I know.",
      ],
      prompt: "Why doesn't the company's reply answer the criticism?",
      hint: "Suppose the pilot is the worst hypocrite on the coast. Where may the ferry safely run?",
      choices: [
        {
          id: "rl-g3-a",
          text: "The critic's own grounding doesn't make the channel safer — hypocrisy, even proven, is not refutation.",
          isCorrect: true,
          feedback:
            "Yes: tu quoque. 'You too' can convict the critic of inconsistency, never the criticism of falsehood. The pilot's reply is the perfect counter — his failure is *evidence for* the danger, not against the warning.",
        },
        {
          id: "rl-g3-b",
          text: "The company should have questioned the pilot's qualifications instead.",
          isCorrect: false,
          feedback:
            "That would trade one relevance fallacy for another — arguer attacked rather than argument met. The channel's safety is settled by soundings, not by anyone's record.",
        },
        {
          id: "rl-g3-c",
          text: "The reply changes the subject from the sandbar to the pilot's cutter.",
          isCorrect: false,
          feedback:
            "Close — the subject does shift to the pilot. But the specific move is the charge of same-fault, which is tu quoque's signature; a red herring would wander somewhere unrelated entirely.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "rl-m1",
      passage: [
        "The almshouse warden argued the coal ration was short-weighted, and brought the scale readings.",
        "The merchant's answer was that the warden had been dismissed from his last post, as everyone knew.",
      ],
      options: ["ad-hominem", "tu-quoque", "red-herring"],
      correctLabel: "ad-hominem",
      explanation:
        "The scale readings are answered with the warden's history — the man attacked, the measurements never mentioned.",
    },
    {
      id: "rl-m2",
      passage: [
        "The curate suggested the bell-ringers practice an hour earlier on winter evenings.",
        "The tower captain denounced, at length, the plan to silence the bells of the parish altogether — a plan existing chiefly in his denunciation of it.",
      ],
      options: ["straw-man", "appeal-to-emotion", "ad-hominem"],
      correctLabel: "straw-man",
      explanation:
        "An hour's shift becomes 'silence the bells altogether' — the position replaced with a wilder copy, and the copy defeated.",
    },
    {
      id: "rl-m3",
      passage: [
        "Pressed on why the market scales hadn't been certified this year, the clerk observed that the real scandal was the state of the market roof, which he described shingle by shingle until the session closed.",
      ],
      options: ["red-herring", "straw-man", "moving-goalposts"],
      correctLabel: "red-herring",
      explanation:
        "The roof is a genuine issue and an irrelevant one — the scent is dragged across the trail, and the scales question dies of neglect, undistorted and unanswered.",
    },
    {
      id: "rl-m4",
      passage: [
        "The reeve criticized the mill for drawing the sluice on Sundays against the bylaw.",
        "The miller's whole defense was that the reeve's own fishpond was filled from that sluice on a Sunday in living memory.",
      ],
      options: ["tu-quoque", "ad-hominem", "special-pleading"],
      correctLabel: "tu-quoque",
      explanation:
        "The criticism is met with the critic's matching sin. The reeve may be a hypocrite and the bylaw still broken — 'you too' answers nothing.",
    },
    {
      id: "rl-m5",
      passage: [
        "The objection to the new slipway was that it would silt the east moorings.",
        "The harbormaster restated it — 'your claim is the tide will carry our spoil east, correct?' — got the objectors' nod, and answered with the dredging survey showing the set of the current ran west.",
      ],
      options: ["dialectical", "straw-man", "red-herring"],
      correctLabel: "dialectical",
      explanation:
        "The healthy contrast: the objection restated to its holders' satisfaction, then met with evidence on its own terms. This is what the five fallacies are failures of.",
    },
  ],
  unlockChallenge: [
    {
      id: "rl-u1",
      passage: [
        "The auditor questioned the fair committee's ticket count.",
        "The chairman replied that the auditor, a man who had never run so much as a bake stall, could hardly lecture those who built the fair from nothing.",
      ],
      options: ["ad-hominem", "appeal-to-emotion", "tu-quoque"],
      correctLabel: "ad-hominem",
      explanation:
        "The count is defended by attacking the counter's résumé. The arithmetic is right or wrong whoever checks it.",
    },
    {
      id: "rl-u2",
      passage: [
        "The proposal was to move the war memorial six feet for the road widening.",
        "Its opponent asked the meeting to picture the fallen looking down as their memory was carted off like rubble — and the vote was lost in the sound of weeping.",
      ],
      options: ["appeal-to-emotion", "straw-man", "slippery-slope"],
      correctLabel: "appeal-to-emotion",
      explanation:
        "Six feet becomes desecration by feeling alone — grief summoned to stand where an argument about the actual proposal should have stood. (The distortion is carried by the image, not by a restated position; the engine is the weeping.)",
    },
    {
      id: "rl-u3",
      passage: [
        "Asked whether the ferry had sailed overloaded on fair day, the owner spoke warmly of his family's four generations of service, then wondered aloud why no one asked about the rail company's fares, and sat down to applause.",
        "The manifest stayed in his coat.",
      ],
      options: ["red-herring", "tu-quoque", "ad-hominem"],
      correctLabel: "red-herring",
      explanation:
        "Family service, then the rail company — two changes of subject and no answer; the manifest in the coat is the argument still standing behind the noise.",
    },
    {
      id: "rl-u4",
      passage: [
        "The comms team objected that cutting the staff newsletter would leave shift workers without any internal news channel.",
        "The manager asked them to show readership data for that group specifically.",
        "They produced circulation figures; the manager reviewed them, accepted that shift-worker reach was real, and revised the plan to keep a monthly edition for shift workers while ending the weekly email to desk staff.",
      ],
      options: ["dialectical", "ad-hominem", "straw-man"],
      correctLabel: "dialectical",
      explanation:
        "The objection was taken at its actual strength, tested with evidence the objectors themselves supplied, and the position adjusted where the evidence held — the healthy form these five fallacies are failures of.",
    },
    {
      id: "rl-u5",
      passage: [
        "The budget proposal called for a five-percent reduction in the events line.",
        "The events coordinator told the all-staff meeting that the office was planning to eliminate all community programming and retreat from its founding mission.",
      ],
      options: ["straw-man", "tu-quoque", "appeal-to-emotion"],
      correctLabel: "straw-man",
      explanation:
        "A five-percent trim becomes total elimination — the position replaced with a more alarming version that is easier to oppose and was never on the table.",
    },
  ],
};
