import type { PracticeStory } from "@/domain/types";

/**
 * Language-fallacy stories: equivocation, ambiguity, composition, division —
 * with the healthy parents (definitional and part–whole reasoning) appearing
 * inside three of them as the contrast.
 *
 * Settings are modern, everyday, or lightly fantastical — ToS disputes,
 * sports rosters, startup postmortems, coworking drama, wizard tournaments.
 */

export const languageFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-free-ferry",
    title: "The Free Account",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "ambiguity"],
    sentences: [
      {
        id: "ln1-1",
        text: "Priya signed up for the app on a Thursday night, drawn in by the word FREE in enormous letters and a button promising no credit card required.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln1-2",
        text: "When her third video triggered a paywall, she emailed support: the account is free, and free things don't come with caps — 'free is free,' she wrote, 'in every sense of the word.'",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln1-2-a",
        explanationOptions: [
          {
            id: "ln1-2-a",
            text: "'Free' enters as a pricing word — no cost — and exits as a liberty word — no restrictions; Priya's argument only works if both senses mean the same thing, which they don't, and 'free is free in every sense' is exactly the move that papers over the switch.",
          },
          {
            id: "ln1-2-b",
            text: "'Free things cannot impose limits' can be read as a claim about prices or a claim about permissions, and Priya reaches for whichever reading fits her conclusion.",
          },
          {
            id: "ln1-2-c",
            text: "Priya assumes the account must be unlimited because each individual feature in the free tier is itself unmetered.",
          },
        ],
      },
      {
        id: "ln1-3",
        text: "Support replied in four hours with a FAQ link and the word 'unfortunately.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln1-4",
        text: "The terms promised that 'users who downgrade their account during the introductory period will not be billed for the following month' — Priya read this as protection for any trial-period downgrade, while the company treated 'during the introductory period' as timing only the billing exemption, leaving all other downgrades fully chargeable.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln1-4-c",
        explanationOptions: [
          {
            id: "ln1-4-b",
            text: "'Downgrade' shifts from a neutral account action to something closer to a contract breach between Priya's reading and the company's.",
          },
          {
            id: "ln1-4-c",
            text: "'During the introductory period' can attach to the downgrade or to the billing exemption — both structures fit the sentence without strain, and each side pulled it toward the reading that helped them.",
          },
          {
            id: "ln1-4-d",
            text: "The company applies a general platform policy as though it settles each individual user's billing outcome.",
          },
        ],
      },
      {
        id: "ln1-5",
        text: "A consumer lawyer Priya found by searching 'free account not actually free' confirmed the clause ran genuinely both ways and mentioned the company had been quietly settling similar disputes.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln1-6",
        text: "The cap stayed; the banner, as it turned out, was addressed in the terms and perfectly unambiguous.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-light-cargo",
    title: "The All-Star Squad",
    difficulty: "intermediate",
    includedLabels: ["composition", "division", "part-whole"],
    sentences: [
      {
        id: "ln2-1",
        text: "The regional gaming tournament committee assembled a five-person team from the top-ranked solo player on each of five division leaderboards.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln2-2",
        text: "Five number-ones make a number-one team, the committee chair announced, and entered them in the championship bracket without a single practice session.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln2-2-a",
        explanationOptions: [
          {
            id: "ln2-2-a",
            text: "Team performance depends on coordination, role fit, and timing — things no individual ranking captures; the chair stacked five solo peaks without asking whether peaks stack, and in team play, they don't by default.",
          },
          {
            id: "ln2-2-b",
            text: "The chair distributes the championship bracket's prestige to each player individually before the first match is played.",
          },
          {
            id: "ln2-2-c",
            text: "'Number-one' shifts from the highest solo rank to the best team rating between the premise and the conclusion.",
          },
        ],
      },
      {
        id: "ln2-3",
        text: "The analyst did the math honestly: each player's damage output per round was on record, damage totals across a team are additive, and the team's ceiling could therefore be computed directly from five individual ceilings — a transfer the property actually licenses.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ln2-3-c",
        explanationOptions: [
          {
            id: "ln2-3-b",
            text: "The analyst assumes each player is individually limited because the team's estimated output ceiling is limited.",
          },
          {
            id: "ln2-3-c",
            text: "Damage output is additive — each player's contribution accumulates in the team total — so computing the ceiling from individual figures is a transfer the math licenses; this is the sound move the chair's composition error tried to make without justification.",
          },
          {
            id: "ln2-3-d",
            text: "The analyst resolves the dispute by redefining what 'rank' means for a five-person team versus a solo competitor.",
          },
        ],
      },
      {
        id: "ln2-4",
        text: "When the squad fell in the semifinals, the chair reversed course: the team's aggregate rank score was the highest in the field, therefore each player was individually the highest-ranked competitor, which meant the loss was probably a glitch.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln2-4-a",
        explanationOptions: [
          {
            id: "ln2-4-a",
            text: "A team's aggregate score is a collective property — it describes the sum, not each member separately; handing 'highest-ranked competitor' to each player from the team's combined figure is exactly what aggregate properties can't do.",
          },
          {
            id: "ln2-4-b",
            text: "The chair reasons that because each player was individually great, the team must have had the highest aggregate score — and the loss is therefore a fluke.",
          },
          {
            id: "ln2-4-c",
            text: "'Highest-ranked' can modify the team's combined score or each player's solo standing, and the chair slides between both readings without naming the switch.",
          },
        ],
      },
      {
        id: "ln2-5",
        text: "The analyst's post-match report noted that aggregate scores sum individual ranks rather than proving individual supremacy, that damage output didn't translate without communication, and that proving the loss was a glitch would require showing the losing clips had been faked in real time.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-working-man",
    title: "The Responsible Clause",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "definitional"],
    sentences: [
      {
        id: "ln3-1",
        text: "The school's honor code reserved the first-floor study carrels for 'responsible seniors,' a rule that had governed the library quietly for years.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln3-2",
        text: "A junior named Cole argued the restriction didn't apply to him: a responsible person is someone who can be held accountable, accountable means enrolled and dues-paying, and he paid his activity fee — 'responsible is responsible,' he announced, 'however you come at it.'",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln3-2-a",
        explanationOptions: [
          {
            id: "ln3-2-a",
            text: "'Responsible' opens as a character quality — mature, trustworthy — and closes as a formal status — enrolled, dues-paying; Cole walks the word through near-synonyms until it means something the original never contained, and the chain only holds if 'responsible' does the same work at every step.",
          },
          {
            id: "ln3-2-b",
            text: "Cole reasons that because the library as a whole serves responsible students, each individual carrel must be available to anyone who can demonstrate personal accountability.",
          },
          {
            id: "ln3-2-c",
            text: "'Held accountable' can describe a moral character or a membership status, and Cole borrows whichever reading advances his argument.",
          },
        ],
      },
      {
        id: "ln3-3",
        text: "The librarian went looking for the actual policy document and found it stapled to the back of the honor code rather than printed in it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln3-4",
        text: "The policy defined 'responsible senior' as a student in year twelve with no outstanding discipline citations — a definition that answered Cole's claim by specifying exactly which meaning governed and testing his situation against it.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "ln3-4-c",
        explanationOptions: [
          {
            id: "ln3-4-b",
            text: "The librarian shows that Cole's word 'responsible' slides between trustworthy and dues-paying in his chain of synonyms.",
          },
          {
            id: "ln3-4-c",
            text: "The policy's own written definition pins 'responsible senior' to specific criteria — year twelve, clean record — and applies those criteria to Cole's case; the word made precise, the question closed.",
          },
          {
            id: "ln3-4-d",
            text: "The librarian groups Cole with other juniors and lets his year-group category decide the outcome without reading the policy's text.",
          },
        ],
      },
      {
        id: "ln3-5",
        text: "Cole had an outstanding citation from November and found a perfectly good carrel on the second floor, which caught, as it happened, better afternoon light.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-quiet-street",
    title: "The Open-Door Policy",
    difficulty: "intermediate",
    includedLabels: ["ambiguity", "division"],
    sentences: [
      {
        id: "ln4-1",
        text: "The updated employee handbook promised that managers would maintain an open-door policy for 'all concerns raised by staff in person during regular hours.'",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln4-2",
        text: "A night-shift worker was turned away after emailing a concern at 2 a.m. — because 'in person during regular hours' could mean the concern must be delivered face-to-face, delivered within office hours, or both at once, and only one of those readings covered a 2 a.m. email.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln4-2-a",
        explanationOptions: [
          {
            id: "ln4-2-a",
            text: "'In person during regular hours' can constrain the channel — concerns must be delivered face-to-face within office hours — or identify who is covered — concerns from in-person staff rather than remote workers; both structures fit the phrase, and each side read the version that suited them.",
          },
          {
            id: "ln4-2-b",
            text: "'Raise a concern' shifts from casually mentioning an issue to formally filing a complaint between the worker's understanding and HR's.",
          },
          {
            id: "ln4-2-c",
            text: "HR assumes that because each department head individually honors the policy, the organization as a whole provides open-door access for all shift types.",
          },
        ],
      },
      {
        id: "ln4-3",
        text: "HR acknowledged that the sentence had been copied from the old handbook without editing and that no one had flagged it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln4-4",
        text: "When a department survey ranked the night-shift team last in engagement, the director moved to put every individual on an improvement plan, reasoning that a bottom-ranked team is made of bottom-ranked members and each employee should have a file to show for it.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln4-4-c",
        explanationOptions: [
          {
            id: "ln4-4-b",
            text: "'Bottom-ranked' shifts from the team's collective survey position to each employee's individual standing, with the director treating both as the same measurement.",
          },
          {
            id: "ln4-4-c",
            text: "A department's aggregate engagement score belongs to the group — it can be low while individual members vary widely; the director distributed the bottom ranking to each person as though a team's collective score were everyone's personal grade.",
          },
          {
            id: "ln4-4-d",
            text: "The director defines 'bottom-ranked team' as one whose members all individually rank last, applying a group label as a criterion each person must independently satisfy.",
          },
        ],
      },
      {
        id: "ln4-5",
        text: "A labor consultant pointed out that aggregate survey scores belong to the group, not to each person in it, and that the director's logic would imply every team member independently scored last — which, she noted, was arithmetically impossible.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln4-6",
        text: "The handbook was rewritten, the policy clarified, and the night-shift worker received a retroactive response and a brief apology.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-champion-crew",
    title: "The Enchanter's Party",
    difficulty: "intermediate",
    includedLabels: ["composition", "equivocation"],
    sentences: [
      {
        id: "ln5-1",
        text: "The Guild of Enchanters drafted six wizards for the annual defense tournament — each the finest in their specialty, each holding at least one regional championship medallion.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln5-2",
        text: "Six individual champions make the champion party, the guild-master announced, and commissioned a victory banner before the first round was scheduled.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln5-2-a",
        explanationOptions: [
          {
            id: "ln5-2-a",
            text: "Party performance depends on things no individual medallion measures — spell timing, shared resource management, trust under pressure — so 'champion' can't travel from each seat to the whole group; the guild-master added up what doesn't add up.",
          },
          {
            id: "ln5-2-b",
            text: "The guild-master distributes the tournament's overall competitive reputation to each wizard's expected performance before the first round.",
          },
          {
            id: "ln5-2-c",
            text: "The guild-master's 'finest' shifts from excellent within one school of magic to broadly superior across all combat styles between the premise and conclusion.",
          },
        ],
      },
      {
        id: "ln5-3",
        text: "The assembled wizards counterspelled each other's attacks, cast simultaneously into the same enemy, and finished fourth in a field of six.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln5-4",
        text: "Pressed for comment, the guild-master held that the party remained strongest — each member had posted the highest single-spell damage in their discipline, and strongest is strongest however the scoreboard counts it, meaning the results simply had an unfortunate way of recording things.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln5-4-c",
        explanationOptions: [
          {
            id: "ln5-4-b",
            text: "The guild-master derives each wizard's individual claim to strength from the team's collective status as the guild's chosen party.",
          },
          {
            id: "ln5-4-c",
            text: "'Strongest' names peak individual output in the first clause and overall competitive performance in the second; 'strongest is strongest however the scoreboard counts it' fuses the two readings so that no result can ever touch the claim, but peak solo damage and tournament wins are not the same measurement.",
          },
          {
            id: "ln5-4-d",
            text: "'Highest single-spell damage' can describe output in a controlled trial or in live combat, and the guild-master borrows both to escape the scoreboard.",
          },
        ],
      },
      {
        id: "ln5-5",
        text: "The previous year's runner-up, whose party had practiced together every weekend since the winter solstice, said nothing, which was its own kind of statement.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-honest-inn",
    title: "Five Stars",
    difficulty: "intermediate",
    includedLabels: ["ambiguity", "composition"],
    sentences: [
      {
        id: "ln6-1",
        text: "A bistro on Clement Street changed ownership in March and reopened with new menus, a full remodel, and the previous owners' framed review quotes still arranged in the front window.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln6-2",
        text: "The centerpiece quote read 'This restaurant has earned its reputation' — words the original critics wrote about the prior kitchen team's decade of work, now displayed by the new owner as though they described a reputation she had personally built.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln6-2-a",
        explanationOptions: [
          {
            id: "ln6-2-a",
            text: "'This restaurant' can name the physical address or the current business operating there — the old quote was true of the prior enterprise and is displayed as true of the new one, with the frame doing the work of erasing the difference.",
          },
          {
            id: "ln6-2-b",
            text: "'Earned' shifts from deserved through years of consistent work to merely inherited through purchase, between the original review and its new context.",
          },
          {
            id: "ln6-2-c",
            text: "The owner reasons that since the restaurant's collective reputation is five-star, each individual component — wine, pasta, service — must be five-star on its own.",
          },
        ],
      },
      {
        id: "ln6-3",
        text: "The wine list was genuine, the pasta housemade, and the coffee reliably good.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln6-4",
        text: "Every dish properly sourced, every course timed correctly, every server attentive — the owner reasoned the evening as a whole must be excellent, and printed that conclusion on table cards before the first weekend of service.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln6-4-c",
        explanationOptions: [
          {
            id: "ln6-4-b",
            text: "The owner distributes the restaurant's old five-star reputation to each current dish and server as though reputation can be divided by menu item.",
          },
          {
            id: "ln6-4-c",
            text: "A dining experience depends on the parts fitting together — course timing, kitchen-to-floor coordination, requests handled before they need repeating — and individually correct components don't guarantee that fit; the owner checked the ingredients and printed the conclusion.",
          },
          {
            id: "ln6-4-d",
            text: "'Excellent evening' can describe the food quality or the complete experience end-to-end, and the table cards use the phrase without specifying which.",
          },
        ],
      },
      {
        id: "ln6-5",
        text: "The first weekend's reviews praised the food and the servers and noted one slight problem: the new point-of-sale system kept crashing between the entrée and dessert, leaving tables stranded in an increasingly awkward silence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln6-6",
        text: "By summer the system was replaced, the cards updated to say 'excellent ingredients,' and one review eventually raised its star count without being asked.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wealthy-guild",
    title: "The Valuation Email",
    difficulty: "intermediate",
    includedLabels: ["division", "part-whole"],
    sentences: [
      {
        id: "ln7-1",
        text: "The startup's latest funding round valued the company at four hundred million dollars, a number that appeared in a press release, a CEO blog post, and an all-hands email with an exclamation point in the subject line.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln7-2",
        text: "The HR coordinator followed up by bumping every employee's benefits tier, explaining that staff at a four-hundred-million-dollar company are premium earners by definition and their benefits should reflect that.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln7-2-a",
        explanationOptions: [
          {
            id: "ln7-2-a",
            text: "A company valuation is a property of the entity — it doesn't transfer to individual employees any more than a building's address lives in each brick; the coordinator applied a company-level number as though it were a personal-income fact for everyone inside it.",
          },
          {
            id: "ln7-2-b",
            text: "The coordinator argues the company is worth four hundred million because each employee's combined contribution adds up to that figure.",
          },
          {
            id: "ln7-2-c",
            text: "'Premium-tier earner' can describe a salary band or a lifestyle category, and the email borrows both meanings without specifying which one runs the benefits calculation.",
          },
        ],
      },
      {
        id: "ln7-3",
        text: "Three junior engineers replied the same afternoon asking what premium-tier meant for their salaries, which were unchanged.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln7-4",
        text: "The CFO sent a clarifying note: the valuation was a claim about the company as a legal entity — shares outstanding multiplied by the round's per-share price — and each employee's actual stake was their equity divided by shares outstanding, a figure both knowable and nowhere near four hundred million; the whole's valuation was not a pool already divided among them.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ln7-4-c",
        explanationOptions: [
          {
            id: "ln7-4-b",
            text: "The CFO concludes that because the company is well-funded, each junior engineer must individually be overcompensated.",
          },
          {
            id: "ln7-4-c",
            text: "The CFO identifies which quantities actually transfer between whole and part: per-share value reaches each employee through their equity stake, calculated by exact division; the company's headline number doesn't — this is the licensed move the HR email performed without a license.",
          },
          {
            id: "ln7-4-d",
            text: "The CFO settles the dispute by redefining 'valuation' for individual benefits purposes, replacing one imprecise term with another.",
          },
        ],
      },
      {
        id: "ln7-5",
        text: "HR revised the communication, the benefits tier was restored to its previous calculation, and the CEO's blog post, exclamation point intact, remained up.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-signed-charter",
    title: "The Club Constitution",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "ambiguity"],
    sentences: [
      {
        id: "ln8-1",
        text: "The drama club's constitution had been on file since the previous decade, ratified by a general vote before anyone currently enrolled had joined.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln8-2",
        text: "A dispute arose in October when the new director announced a revised audition format.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln8-3",
        text: "A student argued the director had no authority: the constitution gave members 'an open right to audition,' open rights are free of restrictions by nature, and free-of-restrictions meant the format rules were void — 'a right is an open right, and open means open,' she said.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln8-3-a",
        explanationOptions: [
          {
            id: "ln8-3-a",
            text: "'Open' starts as an access word — the audition isn't closed to any member — and becomes a claim of total procedural freedom — no format rules allowed; the student uses the first sense to argue for the second, but an open-access right can still specify a format, and the two senses aren't the same word doing the same job.",
          },
          {
            id: "ln8-3-b",
            text: "'Open right to audition' can mean a right to audition without barriers or a right to audition in an unstructured setting, and the student borrows whichever reading blocks the director's new policy.",
          },
          {
            id: "ln8-3-c",
            text: "The student reasons that because each individual audition slot is open to any member, the club's audition process as a whole must be permanently free of all procedural constraints.",
          },
        ],
      },
      {
        id: "ln8-4",
        text: "The constitution stated that 'members who have fulfilled their participation hours may audition for principal roles at the director's discretion in the spring production' — the student read 'at the director's discretion' as governing casting only; the director read it as governing both auditions and casting.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln8-4-a",
        explanationOptions: [
          {
            id: "ln8-4-a",
            text: "'At the director's discretion' can modify the audition itself — who gets to try out — or only the casting — who gets the role; both structures fit the sentence without straining a word, and the student and director each read the version that helped them.",
          },
          {
            id: "ln8-4-b",
            text: "'Principal roles' shifts between the most significant characters in the show and a formal claim of artistic authority in the director's reading of her own power.",
          },
          {
            id: "ln8-4-c",
            text: "The director treats a general discretion claim over the production as though it individually governs each qualifying member's audition request.",
          },
        ],
      },
      {
        id: "ln8-5",
        text: "The student activities advisor read the clause twice, confirmed it ran both ways, suggested a comma would fix it in the next revision, and tabled the October dispute until spring.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-parish-ledger",
    title: "The App Launch",
    difficulty: "intermediate",
    includedLabels: ["composition", "division", "part-whole"],
    sentences: [
      {
        id: "ln9-1",
        text: "The project manager closed the final pre-launch checklist on a Friday afternoon with forty-five minutes to spare.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln9-2",
        text: "Every API endpoint returned correctly, every UI component rendered on three device sizes, every payment flow passed in staging, and no test had failed in eleven days.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln9-3",
        text: "On those grounds the PM canceled the load test and shipped, reasoning that a product whose every part worked must itself work under any conditions and needed no further evidence.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln9-3-a",
        explanationOptions: [
          {
            id: "ln9-3-a",
            text: "A product's behavior under load depends on how its parts interact simultaneously — how services contend for shared resources, how a failure in one cascades to others — and no inventory of individually passing tests settles those questions; the PM's conclusion traveled a route the checklist hadn't walked.",
          },
          {
            id: "ln9-3-b",
            text: "The PM distributes the passing test suite's status to each endpoint, treating a clean overall result as proof that every component will behave correctly in every isolated context.",
          },
          {
            id: "ln9-3-c",
            text: "'Working product' can mean passing all unit tests or functioning correctly under real production load, and the PM took the broader claim without naming the move.",
          },
        ],
      },
      {
        id: "ln9-4",
        text: "Under production load, the authentication service and the payment processor made simultaneous calls to the same rate-limited third-party API — something that had never happened in staging, because nothing had ever run both at once.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln9-5",
        text: "The outage cost sixty thousand dollars, and at the emergency board meeting the CEO proposed billing each of the thirty-two employees for their equal share, on the theory that a company with a sixty-thousand-dollar liability is composed of employees who each carry that liability.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln9-5-a",
        explanationOptions: [
          {
            id: "ln9-5-a",
            text: "A company's liability belongs to the corporate entity — it isn't duplicated in full in each employee separately; the CEO handed the same sixty thousand dollars to thirty-two people as individual debts, which would multiply what was owed rather than distribute it.",
          },
          {
            id: "ln9-5-b",
            text: "The CEO is totaling each employee's individual contribution to the outage to arrive at the company's sixty-thousand-dollar figure.",
          },
          {
            id: "ln9-5-c",
            text: "'Liability' slides from corporate financial exposure to personal legal responsibility in the CEO's proposal.",
          },
        ],
      },
      {
        id: "ln9-6",
        text: "The CFO proposed instead dividing the sixty-thousand-dollar loss by outstanding shares to get the per-share impact, then calculating each shareholder's actual exposure from their stake — the whole's loss carried to each part in proportion to what that part held in the whole.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ln9-6-a",
        explanationOptions: [
          {
            id: "ln9-6-a",
            text: "A shareholder's stake is a defined fraction of the whole, so the whole's loss reaches each part by exact division — the denominator is named, the proportion is fixed, and the transfer is licensed in a way the CEO's equal-billing plan was not.",
          },
          {
            id: "ln9-6-b",
            text: "The CFO assumes that because each shareholder's per-share loss is small, the company as a whole can absorb the sixty-thousand-dollar outage without outside help.",
          },
          {
            id: "ln9-6-c",
            text: "The CFO replicates the full sixty-thousand-dollar loss in each shareholder's account and then divides again, double-distributing what was already a collective figure.",
          },
        ],
      },
      {
        id: "ln9-7",
        text: "The board accepted the CFO's method, declined the CEO's, and added a load test to the launch checklist with a calendar invite set to recur monthly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-common-pasture",
    title: "The Reserved Desk",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "division"],
    sentences: [
      {
        id: "ln10-1",
        text: "The coworking space's August incident report found the shared floor had been overcrowded on three consecutive Fridays, and the operations manager called a meeting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln10-2",
        text: "The manager proposed warning every person who had used the shared floor on those Fridays — the floor was overcrowded, overcrowded floors are made of people who overcrowd them, and every desk-user deserved a flag in their file.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln10-2-a",
        explanationOptions: [
          {
            id: "ln10-2-a",
            text: "Overcrowding is a property of a count exceeding a threshold — not a property of each person counted; the floor became overcrowded when the total tipped over capacity, but no individual occupant was in breach simply for being present when the aggregate crossed the line; the manager distributed a collective finding to each component.",
          },
          {
            id: "ln10-2-b",
            text: "'Overcrowded' shifts from a building-occupancy determination to a personal-conduct violation in the manager's proposal.",
          },
          {
            id: "ln10-2-c",
            text: "'Used the floor on those Fridays' can describe regular desk-holders or drop-in visitors, and the warning treats both groups as equally culpable without reading the policy.",
          },
        ],
      },
      {
        id: "ln10-3",
        text: "Renata, who held a reserved desk on the floor and had worked there alone two of the three Fridays, asked whose arithmetic had produced this conclusion.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln10-4",
        text: "The manager pressed on: reserved desks were listed in the contract as 'limited-access,' limited access is by definition a constrained right, constrained rights can be adjusted, and what can be adjusted can be revoked — 'a limited right is a limited right,' he added, 'in every sense.'",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln10-4-a",
        explanationOptions: [
          {
            id: "ln10-4-a",
            text: "'Limited-access' names a specific configuration — access restricted to the named holder only — and carries no suggestion that the right itself is revisable; the manager walks the word through 'constrained' to 'revocable,' a journey each synonym would have to make together, which they don't.",
          },
          {
            id: "ln10-4-b",
            text: "The manager distributes the building's general authority over the shared floor to each reserved desk, using a policy about communal spaces as grounds for revoking individual named contracts.",
          },
          {
            id: "ln10-4-c",
            text: "'Limited-access' can describe a physical configuration or a legal status, and the manager's argument borrows whichever reading gets him to revocation.",
          },
        ],
      },
      {
        id: "ln10-5",
        text: "Renata produced her contract, which defined 'limited-access' as access restricted to the named holder only, and the manager's memo was revised to name three people rather than forty-seven.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tanners-bond",
    title: "The Gym Agreement",
    difficulty: "intermediate",
    includedLabels: ["ambiguity", "composition"],
    sentences: [
      {
        id: "ln11-1",
        text: "The gym's membership agreement required every member to maintain 'an active subscription in good standing throughout the calendar year to remain eligible for the annual rate freeze,' a clause in place since the program launched.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln11-2",
        text: "For two years the clause was uncontroversial — the frozen rate was popular, members renewed without much reading, and no one had yet needed to pause.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln11-3",
        text: "When Joel paused his subscription for six weeks after surgery and then asked to keep his frozen rate, the gym said he had broken 'continuous active membership,' while Joel argued 'throughout the calendar year' meant any year in which he was a member, not a year with zero gaps — and the phrase, he noted, supported both readings.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln11-3-a",
        explanationOptions: [
          {
            id: "ln11-3-a",
            text: "'Throughout the calendar year' can mean without interruption for twelve months or simply during the course of a membership year — both readings fit the phrase without strain, and the gym and Joel each took the version that served them.",
          },
          {
            id: "ln11-3-b",
            text: "'Active membership' shifts between a billing status and a physical participation requirement between Joel's reading and the gym's.",
          },
          {
            id: "ln11-3-c",
            text: "The gym applies a policy designed for the membership pool as a whole as though it settles each individual member's eligibility without regard to circumstances.",
          },
        ],
      },
      {
        id: "ln11-4",
        text: "The gym manager recalled that someone had raised exactly this question at the last two contract renewals but could not find a record of how it had been resolved.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln11-5",
        text: "The gym's lawyer added a second argument: every member in good standing was individually reliable, every payment from each member was individually current, and therefore the membership pool as a whole was stable enough to honor the rate freeze without enforcement — making the penalty clause unnecessary.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln11-5-a",
        explanationOptions: [
          {
            id: "ln11-5-a",
            text: "A pool's collective reliability under price pressure is more than the sum of individually current payments — penalty clauses exist precisely because individual good standing doesn't prevent collective defection when rates rise; the lawyer erases the gap between 'each member is reliable' and 'the pool holds' that the clause was written to bridge.",
          },
          {
            id: "ln11-5-b",
            text: "The lawyer distributes the membership pool's collective financial health to each individual account, treating institutional stability as a property of single transactions.",
          },
          {
            id: "ln11-5-c",
            text: "'Financially stable enough to honor its obligations' can mean having the cash or being collectively willing to comply, and the lawyer slides between the two meanings.",
          },
        ],
      },
      {
        id: "ln11-6",
        text: "The agreement was rewritten to define 'continuous' by calendar days, the penalty clause was kept, and Joel received the frozen rate for the year as a goodwill exception that set no precedent, in writing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-bridge-survey",
    title: "The Code Inspection",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "composition", "definitional"],
    sentences: [
      {
        id: "ln12-1",
        text: "The building inspector arrived at the new development on a Tuesday with a clipboard, a tablet, and the municipal code booklet tucked under his arm.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln12-2",
        text: "His first notation marked the structure as 'legacy-filing' — the code's term for any building permitted under a prior version of the municipal standards.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln12-3",
        text: "The developer objected that 'legacy' meant old, and old structures were exempt from new accessibility requirements under a standing variance; the inspector replied that 'legacy-filing' was a registration category, not an age claim, and that the variance applied only to structures built before the adoption year — not to every building whose permit predated the current filing cycle.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "ln12-3-a",
        explanationOptions: [
          {
            id: "ln12-3-a",
            text: "The inspector pins 'legacy-filing' to its defined technical meaning — a classification for permits from a prior cycle — and shows the developer's exemption claim requires an ordinary sense of 'old' that definition doesn't include; the question is settled by specifying which meaning governs in this document.",
          },
          {
            id: "ln12-3-b",
            text: "'Legacy' slides between a filing classification and a description of the building's actual age, shifting with whoever is speaking rather than being fixed to a single definition.",
          },
          {
            id: "ln12-3-c",
            text: "'Permitted under a prior version' can mean permitted before a certain date or permitted using prior-cycle standards, and each party read the phrase to suit their position.",
          },
        ],
      },
      {
        id: "ln12-4",
        text: "The developer accepted the notation but declared the structure code-compliant: each framing element had passed its individual inspection, compliant structures meet all their obligations, and a structure meeting its obligations needs no further review — 'compliant is compliant,' he said, 'and the code is the code.'",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln12-4-a",
        explanationOptions: [
          {
            id: "ln12-4-a",
            text: "'Code-compliant' opens as an engineering outcome — specific elements passed specific tests — and closes as a regulatory conclusion — the structure needs no further review; passing individual inspections doesn't mean the whole building has cleared all applicable requirements, and the two senses are not the same word doing the same work.",
          },
          {
            id: "ln12-4-b",
            text: "The developer reasons from each framing element having passed its own test to the building as a whole being clear of all remaining inspection requirements.",
          },
          {
            id: "ln12-4-c",
            text: "'Meeting its safety obligations' can describe structural integrity or full regulatory compliance, and the developer moves between those senses without naming the transition.",
          },
        ],
      },
      {
        id: "ln12-5",
        text: "The inspector wrote 'compliant' twice in the margin of his tablet with a small arrow between the two entries.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln12-6",
        text: "The developer continued: every stairwell met width requirements, every exit door opened the right way, every hallway was lit to spec — a building whose every element is compliant is a compliant building, and the exterior accessibility ramp could wait.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln12-6-a",
        explanationOptions: [
          {
            id: "ln12-6-a",
            text: "Building compliance is partly about what the whole provides end-to-end — whether all required features exist, whether accessible paths run from entry to destination — and no list of individually passing stairwells and exit doors answers those questions; the developer's enumeration hadn't walked the route the inspection was there to cover.",
          },
          {
            id: "ln12-6-b",
            text: "The developer distributes the 'legacy-filing' classification to each individual stairwell and exit door, treating a registration label as approval of each internal element.",
          },
          {
            id: "ln12-6-c",
            text: "'Compliant element' shifts from an element that passed its own test to one that contributes to the building's overall regulatory clearance.",
          },
        ],
      },
      {
        id: "ln12-7",
        text: "The inspector checked the ramp regardless and found it had no handrail on the uphill side — a fact the compliant stairwells hadn't addressed and the developer's list hadn't reached.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
