import type { Lesson } from "@/domain/types";

export const precedentLesson: Lesson = {
  id: "precedent",
  title: "Precedent reasoning",
  status: "ready",
  labelIds: ["precedent"],
  definition:
    "Precedent reasoning applies the treatment established in a past decision to a sufficiently similar current case. Three moves are required: identify what was decided before, establish that the current situation is relevantly similar, and extend the prior treatment. Its force comes from continuity and settled practice — not merely from structural resemblance between the two cases.",
  memoryHook: "Same situation, same treatment — because we said so last time.",
  soundsLike: [
    "We handled exactly this in March, so…",
    "There's already a precedent for this.",
    "We set the policy when the same thing happened to…",
    "By the standard we applied last time, this should…",
  ],
  workedExamples: [
    {
      id: "pr-w1",
      title: "The supplier waiver",
      passage: [
        "When spring floods delayed deliveries, the warehouse waived late fees for all affected suppliers — the decision was recorded in the operations manual.",
        "An autumn port strike has now put the same suppliers behind schedule again, through no fault of their own.",
        "The operations manager waived the fees, citing the flood ruling.",
      ],
      explanation:
        "All three moves are here. (1) The prior decision: the flood waiver, formally recorded. (2) The relevant similarity: same type of external disruption, same suppliers, same absence of fault. (3) The extension: same treatment. What gives the argument its force isn't just that the situations resemble each other — the company already decided how to handle this kind of case, and consistency with that decision is now the operative standard. If the manager had said only 'strikes are like floods,' the argument would be analogical. The citation of the prior ruling is what makes it precedent.",
    },
    {
      id: "pr-w2",
      title: "The Archivist's Guild",
      passage: [
        "The Archivist's Guild had once granted Mira a research extension when her primary source was sealed by a succession dispute.",
        "Now Bram's primary source has been placed under a preservation injunction — equally inaccessible, equally beyond his control.",
        "The Guild extended Bram's deadline on the same grounds.",
      ],
      explanation:
        "Notice what the Guild is not doing. It isn't arguing that preservation injunctions structurally resemble succession disputes (that would be analogy). It isn't deferring to an expert's judgment about deadlines (that would be authority). It is pointing to its own prior ruling as the operative guide. The past decision carries normative weight: having treated Mira's situation one way, the Guild is now obligated to treat a relevantly similar situation the same way. Relevant similarity is always the critical step — if Bram's injunction had been self-imposed rather than external, the Guild might rightly distinguish his case from Mira's.",
    },
  ],
  guidedExamples: [
    {
      id: "pr-g1",
      passage: [
        "Last summer the community garden association allowed a barbecue in the east plot after the south plaza was under repair and unavailable.",
        "This year the south plaza is fully open, but a member wants to hold a barbecue in the east plot again.",
        "She argues that since barbecues were allowed there last year, they should be allowed this year.",
      ],
      prompt: "What is wrong with this extension of the precedent?",
      hint: "Ask why the exception was granted last year, and whether that reason still applies.",
      choices: [
        {
          id: "pr-g1-a",
          text: "The original exception was granted because the south plaza was unavailable — that condition no longer holds, so the prior treatment does not follow.",
          isCorrect: true,
          feedback:
            "Exactly. Precedent carries its conditions with it. The ruling last year was implicitly 'east plot permitted when the south plaza is unusable,' not 'east plot permitted.' A precedent can only be extended when the relevant features that justified the original decision are still present.",
        },
        {
          id: "pr-g1-b",
          text: "Community associations cannot set binding precedents, so the argument has no force regardless.",
          isCorrect: false,
          feedback:
            "Precedents do not require formal legal authority. A community norm, a family rule, or a workplace habit all carry precedential force — the question is whether the prior treatment actually applies, not whether the body was officially empowered to set precedents.",
        },
        {
          id: "pr-g1-c",
          text: "One year is too short a history to establish a precedent.",
          isCorrect: false,
          feedback:
            "A single clear decision can establish a precedent. Repetition strengthens the force of a precedent over time, but the first instance is what creates it. The problem here isn't the age of the ruling — it's that the ruling was conditional on something that no longer holds.",
        },
      ],
    },
    {
      id: "pr-g2",
      passage: [
        "The school had always allowed students who missed finals due to documented illness to take a makeup exam the following week.",
        "Doria missed the chemistry final when her connecting flight was cancelled during a family emergency — documentation provided.",
        "The department chair approved a makeup, citing the illness policy.",
      ],
      prompt: "Why is this precedent reasoning rather than analogical reasoning?",
      hint: "Both involve comparing two situations. What does precedent add that analogy alone does not?",
      choices: [
        {
          id: "pr-g2-a",
          text: "Because the school's illness policy is an established ruling — the chair is not just noting that flight cancellations resemble illness, but applying a decision the institution already made.",
          isCorrect: true,
          feedback:
            "That is the distinction. Analogy argues from structural similarity: 'A resembles B, so B probably shares A's property.' Precedent argues from settled practice: 'A was handled this way; B is similar enough to fall under the same ruling.' The source of force is the prior decision, not the resemblance itself — even though establishing resemblance is the necessary second move.",
        },
        {
          id: "pr-g2-b",
          text: "Because flight cancellations and illness genuinely are similar situations.",
          isCorrect: false,
          feedback:
            "Noticing genuine similarity is analogy's move. Analogy would say: flight cancellations are like illness in the relevant respects, so the makeup policy should apply. Precedent adds something — the institution already decided how to handle this class of situation, and Doria's case is being brought under that ruling. The similarity is necessary but not sufficient for precedent.",
        },
        {
          id: "pr-g2-c",
          text: "Because the documentation proves Doria's case is stronger than a mere comparison.",
          isCorrect: false,
          feedback:
            "Documentation supports the similarity claim — it shows the emergency was real and external — but documentation is not what determines the reasoning type. What makes this precedent is that the chair cites an existing institutional ruling as binding, rather than arguing fresh from how the two cases resemble each other.",
        },
      ],
    },
    {
      id: "pr-g3",
      passage: [
        "When the robot maintenance team first handled a firmware conflict in Unit 7, they resolved it by rolling back to the previous build and documenting the procedure — there was no formal protocol at the time.",
        "Unit 12 is now showing the same firmware conflict.",
        "The junior technician applies the rollback procedure without consulting a senior engineer, citing the Unit 7 resolution.",
      ],
      prompt: "Why is this precedent reasoning rather than authority reasoning?",
      hint: "No expert's current judgment is being cited. What is doing the work instead?",
      choices: [
        {
          id: "pr-g3-a",
          text: "Because the technician is following a treatment established in a prior case, not deferring to someone's expertise or present-day judgment.",
          isCorrect: true,
          feedback:
            "Authority reasoning accepts a claim because a credible source vouches for it now. Here, no senior engineer is being consulted — the technician is treating the Unit 7 resolution as a settled decision that governs sufficiently similar future cases. Precedent can be set by anyone who made the original call, expert or not; what matters is that a decision was made and is being applied forward.",
        },
        {
          id: "pr-g3-b",
          text: "Because the junior technician lacks the authority to consult a senior engineer.",
          isCorrect: false,
          feedback:
            "The technician's seniority is irrelevant to the reasoning type. Authority reasoning would mean citing an expert's present-day verdict on Unit 12. The technician is instead treating the Unit 7 resolution as a precedent — a prior handling that covers this case. Even an expert who reasoned this way would be using precedent, not authority.",
        },
        {
          id: "pr-g3-c",
          text: "Because the firmware conflict is identical in both units.",
          isCorrect: false,
          feedback:
            "Establishing that the conflicts are identical is the second move of precedent reasoning — the relevant similarity step. But identifying similarity does not by itself make the reasoning precedential. The third move is what matters: the technician is extending the specific treatment from Unit 7 to Unit 12, because that treatment was established practice, not merely because the situations look the same.",
        },
      ],
    },
  ],
  mixedQuestions: [
    {
      id: "pr-m1",
      passage: [
        "When the Barcelona office submitted its quarterly report two days late due to a server migration, headquarters accepted it without penalty.",
        "The Nairobi office's report is now two days late because the same server migration has rolled out there.",
        "Headquarters accepted the Nairobi report on the same terms.",
      ],
      options: ["precedent", "inductive", "analogical"],
      correctLabel: "precedent",
      explanation:
        "Headquarters is not drawing a general pattern from many late reports (inductive), nor arguing that Nairobi's situation merely resembles Barcelona's (analogical). They are extending the specific treatment given to Barcelona — a prior decision — to Nairobi because the circumstances are equivalent. The Barcelona ruling is doing the work.",
    },
    {
      id: "pr-m2",
      passage: [
        "When their eldest took a gap year before university, the Mancinis agreed to cover rent for the first six months.",
        "Now their youngest is planning a gap year.",
        "The youngest argues that the same arrangement should apply to her.",
      ],
      options: ["precedent", "authority", "claim-support"],
      correctLabel: "precedent",
      explanation:
        "The youngest is not merely noting that her situation resembles her sibling's — she is invoking the prior family decision as the standard that now applies. The source of force is the earlier ruling, not an expert's word or a list of independent reasons. Claim-support would name any kind of evidence for a conclusion; here the evidence is specifically a prior decision being extended forward.",
    },
    {
      id: "pr-m3",
      passage: [
        "A bridge built in similar soil conditions with a similar span length has held for sixty years.",
        "This new bridge, closely matching those conditions, should be similarly durable.",
      ],
      options: ["analogical", "precedent", "inductive"],
      correctLabel: "analogical",
      explanation:
        "This is structural comparison: because the two bridges share known, relevant features, the new one is expected to share the outcome. No prior decision about how to treat bridges is being extended here — the argument works entirely through resemblance between the cases. Precedent would require pointing to an earlier ruling about bridges, not just noting their likeness.",
    },
    {
      id: "pr-m4",
      passage: [
        "The homeowners' association had granted a six-month dues deferral to the Okafor family when they were displaced by a kitchen fire.",
        "The Reinhardts have now been displaced by a burst pipe.",
        "Several neighbors argue the same deferral should apply.",
      ],
      options: ["precedent", "causal", "analogical"],
      correctLabel: "precedent",
      explanation:
        "A prior HOA decision is being applied to a new case based on relevant similarity — displacement from an uninhabitable home due to an unexpected domestic incident. The argument is not about causes or structural resemblance in isolation; it is about what the association already decided to do in this kind of situation, and whether that decision governs the current one.",
    },
    {
      id: "pr-m5",
      passage: [
        "Every time the planning council has put a new zoning proposal to a vote, it has failed in the first session and passed with amendments in the second.",
        "The proposed cycling-lane ordinance will probably follow the same path.",
      ],
      options: ["inductive", "precedent", "statistical"],
      correctLabel: "inductive",
      explanation:
        "The conclusion follows from a pattern observed across multiple past votes, not from the application of any one prior decision to the current case. Precedent would require pointing to a specific ruling — a decision made and being extended. Generalizing from a recurring pattern across several instances is induction.",
    },
  ],
  unlockChallenge: [
    {
      id: "pr-u1",
      passage: [
        "The Mage Council had once allowed Seren to present her thesis late when the Library of Echoes was closed for the Solstice ceremonies.",
        "Aldric's thesis is due during the Autumn Reckoning, when the same library will again be closed.",
        "He petitions the Council under Seren's case.",
      ],
      options: ["precedent", "analogical", "authority"],
      correctLabel: "precedent",
      explanation:
        "Aldric is not just pointing out that his situation resembles Seren's — he is invoking an actual Council ruling as the governing basis for his own case. The force is institutional: the Council decided something, and he is asking to receive the same treatment under the same conditions. Authority would mean deferring to an expert's present judgment; analogy would mean arguing from structural similarity alone.",
    },
    {
      id: "pr-u2",
      passage: [
        "The ferry has been late on every foggy morning this month.",
        "It is foggy this morning, so it will probably be late.",
      ],
      options: ["inductive", "precedent", "causal"],
      correctLabel: "inductive",
      explanation:
        "The conclusion is drawn from a pattern of observed instances, not from any formal decision about how to handle foggy mornings. Precedent would require pointing to a ruling — a decision made and applied. Extrapolating a repeated pattern forward is induction. (Causal reasoning would explain why fog causes delays; this passage skips the mechanism and goes straight from pattern to prediction.)",
    },
    {
      id: "pr-u3",
      passage: [
        "When the delivery drone exceeded its weight limit during a trial run, the operations team grounded it for forty-eight hours — there was no formal protocol at the time.",
        "A second drone has now exceeded its weight limit on an actual delivery.",
        "Citing the trial-run handling, the team applies the same forty-eight-hour grounding.",
      ],
      options: ["precedent", "deductive", "inductive"],
      correctLabel: "precedent",
      explanation:
        "The team is not applying a written rule that logically entails the grounding (deductive), nor generalizing from many past incidents (inductive). They are extending the specific treatment established in the trial-run case to a new, sufficiently similar case. Because there was no formal rule at the time, the original handling itself became the precedent.",
    },
    {
      id: "pr-u4",
      passage: [
        "Three years ago, the faculty senate voted to waive the enrollment deposit for any student whose financial-aid award arrived after the deadline through no fault of the student.",
        "A prospective student's award has just arrived late because of a processing error in the financial-aid office.",
        "The admissions coordinator applied the waiver.",
      ],
      options: ["precedent", "statistical", "bayesian"],
      correctLabel: "precedent",
      explanation:
        "The coordinator is applying a specific past ruling — the senate's vote — to a new case that falls within the conditions the ruling was designed to cover. No pattern across many applicants is being counted (statistical), and no probability estimate is being updated (bayesian). An institutional decision is being extended to a case that fits its terms.",
    },
  ],
};
