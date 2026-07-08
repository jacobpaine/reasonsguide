import type { PracticeStory } from "@/domain/types";

/**
 * Intermediate stories for the formal fallacies — affirming the consequent,
 * denying the antecedent, undistributed middle, contradictory premises —
 * plus the healthy parent form, deductive reasoning, shown working correctly
 * in the same rooms where it fails. Settings are modern, everyday, or
 * fantastical; the fallacious sentences should read as confident, sympathetic
 * reasoning that just happens to be wrong.
 */

export const formalFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-signal-lamp",
    title: "After Hours",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent"],
    sentences: [
      {
        id: "fm1-1",
        text: "Detective Rook had one ironclad rule about the after-hours keycard log: whenever a witness had been inside the building during the incident window, the scanner showed an entry timed after six p.m.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm1-2",
        text: "The scanner showed a six-forty entry for Yolanda Marsh, and Rook wrote her name at the top of his list — she had been in the building, the card said so, and that was that.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm1-2-b",
        explanationOptions: [
          {
            id: "fm1-2-a",
            text: "The keycard rule plus the logged entry settle it; given both, her presence in the building at six-forty follows of necessity.",
          },
          {
            id: "fm1-2-b",
            text: "A logged entry is the 'then' of Rook's keycard rule, and he walks it backward to Yolanda being present — though keycards log entries when borrowed, left on a shared desk, or triggered remotely during a sync glitch.",
          },
          {
            id: "fm1-2-c",
            text: "He places Yolanda into the class of after-six entrants and transfers that class's presence to her, connecting the two only through the category they share.",
          },
        ],
      },
      {
        id: "fm1-3",
        text: "Keycards could be loaned, picked up from a shared drawer, or triggered remotely during a sync glitch, as the IT department had explained at three separate all-staff meetings that year.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm1-4",
        text: "Yolanda had left at five, could prove it with a parking receipt and six witnesses at trivia night, and had not been inside the building at six-forty under any circumstances.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm1-5",
        text: "The sergeant, covering for Rook while he ran down the Yolanda lead, found a full carafe in the break-room coffee maker and added Dispatch Officer Fenwick to the board — Fenwick was the only one who ever made coffee that late, so Fenwick had been there.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm1-5-a",
        explanationOptions: [
          {
            id: "fm1-5-a",
            text: "A full late-night carafe is the consequence of her rule about Fenwick, and she reads it backward to his presence — though the carafe had been set on a twelve-hour delay by Officer Chen, who distrusted mornings.",
          },
          {
            id: "fm1-5-b",
            text: "She holds both that Fenwick never works unscheduled shifts and that he must have been there last night — premises that cannot stand together.",
          },
          {
            id: "fm1-5-c",
            text: "Her rule about Fenwick, joined to the full carafe, forces her conclusion; given both, his having been there follows of necessity.",
          },
        ],
      },
      {
        id: "fm1-6",
        text: "Fenwick had been in another city since Wednesday, which Rook learned when he got back from interviewing Yolanda, who had not appreciated the experience.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-low-road",
    title: "No Test Tomorrow",
    difficulty: "intermediate",
    includedLabels: ["denying-antecedent"],
    sentences: [
      {
        id: "fm2-1",
        text: "The Ortega family's rule had been on the refrigerator for three years, printed in her mother's handwriting: if Maya had a test the next morning, she had to be home by nine.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-2",
        text: "Maya texted at eight-forty to report no test tomorrow, and her mother, reading this on the couch, concluded there was no curfew tonight and told her to come home whenever she was ready.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm2-2-c",
        explanationOptions: [
          {
            id: "fm2-2-a",
            text: "Rule and report together force her conclusion: given no test, a relaxed evening follows of necessity.",
          },
          {
            id: "fm2-2-b",
            text: "She reasons backward from a relaxed curfew to no test as its cause, treating the consequence as proof of its usual occasion.",
          },
          {
            id: "fm2-2-c",
            text: "She cancels the nine-o'clock deadline by cancelling the morning test — but the rule never made a test the only reason for a curfew, and a school night with a seven-thirty first period offers another.",
          },
        ],
      },
      {
        id: "fm2-3",
        text: "Tomorrow was a school day with a seven-thirty first period, a detail neither the refrigerator rule nor Maya's text had thought to mention.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-4",
        text: "Maya arrived home at eleven-thirty in a great mood and slept through three alarms.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-5",
        text: "Her younger brother Caleb applied the same shape of argument the following week: their father only grounded him when he failed a quiz, no quiz had been failed, and so there was clearly no reason he couldn't sleep over at Jordan's on a Tuesday.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm2-5-a",
        explanationOptions: [
          {
            id: "fm2-5-a",
            text: "From 'no failed quiz' he concludes 'no grounding,' as if a failed quiz were the only thing that could bring consequences — the rule promises a penalty when he fails, not freedom when he doesn't.",
          },
          {
            id: "fm2-5-b",
            text: "He connects Tuesday sleepovers to quiz-free weeks through the shared category of consequence-free evenings, and lets the class do the arguing.",
          },
          {
            id: "fm2-5-c",
            text: "His father's rule and the clean quiz record settle it; on those premises the sleepover follows of necessity.",
          },
        ],
      },
      {
        id: "fm2-6",
        text: "Three missed homework submissions had been forwarded to his father by email at two that afternoon, which Caleb had not foreseen and which did not require a failed quiz.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-7",
        text: "He was grounded before dinner, which he described as unfair, and both parents described as obvious, and none of this resolved anything.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-unsigned-will",
    title: "The Violet Ink",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "contradictory-premises"],
    sentences: [
      {
        id: "fm3-1",
        text: "The headmistress of Thornwick Academy found an anonymous spell on her desk one morning — written in violet ink on enchanted parchment, unsigned, undated, and entirely confident in its conclusions.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm3-2",
        text: "Cadet Brenn was quick to name the author: every senior apprentice in the tower worked in violet-ink charms, this spell was written in violet ink, and so it had come from a tower apprentice — the ink, he announced, was as good as a signature.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "fm3-2-b",
        explanationOptions: [
          {
            id: "fm3-2-a",
            text: "The tower apprentices' known habits, joined to the tested ink, force the attribution; if they all use violet and this spell is violet, the sender must be one of them.",
          },
          {
            id: "fm3-2-b",
            text: "Tower apprentices and this spell meet only in the violet ink they share — a supply stocked in every classroom on every floor, which connects the spell to no particular group.",
          },
          {
            id: "fm3-2-c",
            text: "He argues both that the spell is anonymous and that its author is identifiable — premises that cannot both hold for an untraceable charm.",
          },
        ],
      },
      {
        id: "fm3-3",
        text: "The academy's violet ink was distributed freely to all three years and the grounds-keeping staff, which the headmistress noted without looking up from the parchment.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm3-4",
        text: "Cadet Voss, who had been waiting her turn with visible patience, stood and offered a counterargument.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm3-5",
        text: "She presented two certainties simultaneously: the spell used a seventh-year binding technique that no cadet below seventh year could perform, and the same binding technique was simple enough that any first-year could have managed it with ten minutes of practice — both facts, she insisted, confirmed it was a seventh-year's work.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "fm3-5-c",
        explanationOptions: [
          {
            id: "fm3-5-a",
            text: "Two observations about the technique, taken together as premises, support the seventh-year attribution; from both findings together the conclusion follows.",
          },
          {
            id: "fm3-5-b",
            text: "She connects the spell to seventh-year students only through the shared category of advanced-technique users, which tells us nothing specific about this particular spell.",
          },
          {
            id: "fm3-5-c",
            text: "A technique too advanced for anyone below seventh year cannot also be simple enough for a first-year; her two supports directly contradict each other, leaving the conclusion standing on nothing.",
          },
        ],
      },
      {
        id: "fm3-6",
        text: "The headmistress marked the parchment 'origin indeterminate' in a thoroughly ordinary black ink and sent both cadets to breakfast.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-bakers-window",
    title: "The String Lights",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent", "denying-antecedent"],
    sentences: [
      {
        id: "fm4-1",
        text: "Everyone on Brenner Street understood one thing about the coffee shop: whenever the owner, Niki, started her early prep shift, the string lights in the front window came on.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-2",
        text: "Passing at five-thirty, the morning jogger saw the string lights glowing and posted to the neighborhood app that Niki was already in, prepping for the festival weekend.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm4-2-a",
        explanationOptions: [
          {
            id: "fm4-2-a",
            text: "The string lights are the 'then' of the street's rule, and the jogger reads them backward to Niki's early shift — though window lights have more ways to be on than one person's prep schedule.",
          },
          {
            id: "fm4-2-b",
            text: "She cancels any alternative by cancelling the rule's stated occasion for the lights — if Niki alone lights them for prep, only prep lights them, and lights here mean prep.",
          },
          {
            id: "fm4-2-c",
            text: "The street's rule plus the glowing lights settle it; on those premises the early shift follows of necessity.",
          },
        ],
      },
      {
        id: "fm4-3",
        text: "The lights were on a timer Niki had set six months ago and completely forgotten about, and Niki herself was asleep with her phone on do-not-disturb.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-4",
        text: "The festival order had gone to the bakery two streets over, which had started at three.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-5",
        text: "Word spread that Niki was definitely not in early, and the teacher from number twelve did the arithmetic: no early prep meant no fresh croissants by seven, which meant no point making the trip before school.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm4-5-c",
        explanationOptions: [
          {
            id: "fm4-5-a",
            text: "From the rule and Niki's lie-in, the empty pastry case follows of necessity; her inference is the valid one.",
          },
          {
            id: "fm4-5-b",
            text: "She holds both that the shop is unstaffed and that the street expects croissants — premises that cannot both be true of the same morning.",
          },
          {
            id: "fm4-5-c",
            text: "Niki's early prep guarantees fresh croissants, but its absence guarantees nothing — Niki's business partner had a key and ambitions, and closing one road to bread is not the same as closing all roads.",
          },
        ],
      },
      {
        id: "fm4-6",
        text: "The croissants that morning came from Niki's business partner, who had started before six and felt quietly excellent about it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-7",
        text: "By seven the queue stretched past the dry-cleaner's, with the teacher near the end of it, briefcase in hand.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-customs-scale",
    title: "Three Opinions",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent", "undistributed-middle", "deductive"],
    sentences: [
      {
        id: "fm5-1",
        text: "When the production server crashed at two on a Tuesday afternoon, three engineers arrived at the monitoring dashboard at the same time and formed three separate opinions before anyone had opened the error log.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm5-2",
        text: "Tamsin had a rule from two years of incident response — a database overload always spiked the memory graph before it failed — and since the graph showed a spike, she typed 'database overload' into the ticket and escalated to the database team.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm5-2-b",
        explanationOptions: [
          {
            id: "fm5-2-a",
            text: "Two years of observation plus the spiked graph settle it; given both, the database overload follows of necessity.",
          },
          {
            id: "fm5-2-b",
            text: "The memory spike is the 'then' of her incident rule, and she reads it backward to a database overload — though memory spikes for reasons her two years never named, a runaway scheduled job among them.",
          },
          {
            id: "fm5-2-c",
            text: "She groups this crash with database crashes through the shared feature of memory spikes and lets the category carry the attribution without confirming the actual cause.",
          },
        ],
      },
      {
        id: "fm5-3",
        text: "The spike was from a log-rotation job that had been running unthrottled since Thursday, which had nothing to do with the database.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm5-4",
        text: "Raj had a different read: suspicious traffic always came from unverified IP addresses, this traffic came from an unverified IP address, and so the crash was an attack and someone should call the security team.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "fm5-4-a",
        explanationOptions: [
          {
            id: "fm5-4-a",
            text: "Suspicious traffic and this request share only the unverified IP — a flag common enough that the company's own dev laptops triggered it daily, which connects the request to no specific threat.",
          },
          {
            id: "fm5-4-b",
            text: "He reasons from the unverified IP back to an attack as its one cause, treating the flag as proof of the threat that usually produces it.",
          },
          {
            id: "fm5-4-c",
            text: "The security team's known patterns, taken with the IP flag, force the attack conclusion; on those premises it follows of necessity.",
          },
        ],
      },
      {
        id: "fm5-5",
        text: "Dev laptops, VPN exits, and a school district in Ohio shared the same unverified IP range, which appeared in the logs more often than anyone found comfortable to think about.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm5-6",
        text: "The lead engineer pulled the error log, found four lines that answered everything, and closed the ticket: the server's memory hard limit was eight gigabytes, the process had allocated nine, and anything over the limit triggered an automatic shutdown — the server had shut down, the arithmetic said why, and she needed nothing else.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "fm5-6-c",
        explanationOptions: [
          {
            id: "fm5-6-a",
            text: "She reasons backward from the shutdown to its cause, treating the crash as proof of what must have happened at the hardware level.",
          },
          {
            id: "fm5-6-b",
            text: "She holds the memory limit and the allocated total as contradictory premises — a system can't exceed its own limit — and draws the conclusion from their clash.",
          },
          {
            id: "fm5-6-c",
            text: "A rule — anything over the memory limit triggers shutdown — meets a measured fact, nine gigabytes allocated, and the conclusion is forced; she needs no account of what filled that memory, and offers none.",
          },
        ],
      },
      {
        id: "fm5-7",
        text: "It was the log-rotation job, as the memory graph had been suggesting all along, and the fix took four minutes once someone set a memory limit.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-marles-well",
    title: "The Garden Committee",
    difficulty: "intermediate",
    includedLabels: ["denying-antecedent", "contradictory-premises", "deductive"],
    sentences: [
      {
        id: "fm6-1",
        text: "The community garden's irrigation pressure had been dropping for three weeks, and by Thursday the committee had agreed on nothing except that a meeting was necessary.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm6-2",
        text: "Owen had a rule from the building's maintenance history — a break in the main supply line always caused pressure drops — and since last month's inspection found no break, he told the committee the pressure couldn't truly be dropping and the gauges must be off.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm6-2-a",
        explanationOptions: [
          {
            id: "fm6-2-a",
            text: "A broken supply line causes pressure drops, but an intact one doesn't hold pressure steady; he denies the antecedent and cancels a consequence that can arrive by a leaking valve, a clogged filter, or several other routes entirely.",
          },
          {
            id: "fm6-2-b",
            text: "A clean inspection report plus an intact line settle it; given both, steady pressure follows and the gauges must yield.",
          },
          {
            id: "fm6-2-c",
            text: "He maintains both an intact supply line and a sinking pressure reading — premises that cannot be true together, whatever follows from them.",
          },
        ],
      },
      {
        id: "fm6-3",
        text: "The gauges had been calibrated the previous month and agreed with every hose end in the garden, which no one had mentioned yet.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm6-4",
        text: "The committee chair pushed further: the main water valve had been padlocked since winter with nobody touching it, and yet the pressure had been falling steadily for three weeks — and from both of these certainties together she concluded they needed to call the water company at once.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "fm6-4-b",
        explanationOptions: [
          {
            id: "fm6-4-a",
            text: "Two independent observations converge as premises, and calling the water company follows from them of necessity.",
          },
          {
            id: "fm6-4-b",
            text: "A valve padlocked and untouched since winter cannot also be the cause of three weeks of falling pressure; her two certainties cancel each other, and the water company call rests on neither.",
          },
          {
            id: "fm6-4-c",
            text: "She argues that since the valve hasn't been touched, no pressure drop from within the system can have occurred — denying the antecedent of the committee's rule about valve adjustments.",
          },
        ],
      },
      {
        id: "fm6-5",
        text: "A cracked irrigation elbow under plot seven had been weeping quietly since the first hard frost, which the plot's tenant had noticed and not mentioned.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm6-6",
        text: "The secretary, who had been reading the garden lease throughout, found her answer without needing the water company: any repair to shared infrastructure within the garden boundary required a licensed plumber and committee approval, the irrigation pipe under plot seven was shared infrastructure, and no repair appeared on any record — so the work was unauthorized, whatever had caused the crack.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "fm6-6-a",
        explanationOptions: [
          {
            id: "fm6-6-a",
            text: "Lease rule, verified fact, missing record: the premises allow one conclusion and she draws exactly that, claiming nothing about the water company that the lease doesn't cover.",
          },
          {
            id: "fm6-6-b",
            text: "She reasons backward from the pressure drop to the cracked elbow as its cause, treating the symptom as proof of what produced it.",
          },
          {
            id: "fm6-6-c",
            text: "She holds that the pipe is shared infrastructure and that no committee approval was needed — a reading at odds with the lease's own terms.",
          },
        ],
      },
      {
        id: "fm6-7",
        text: "The tenant on plot seven paid for the repair, the water company was not called, and the committee updated its maintenance log with a note about frost protection that was three months overdue.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-dyers-blue",
    title: "The Unmarked Blade",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "contradictory-premises"],
    sentences: [
      {
        id: "fm7-1",
        text: "A masterwork sword turned up at the guild's assessment table without a maker's mark, and two members had opinions before the assessor had put on her gloves.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm7-2",
        text: "Master Lenn leaned across the table and gave his finding: the northern forges always worked with a cold-quench finish, this blade had a cold-quench finish, and so it came from the north and carried that tradition's authority.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "fm7-2-c",
        explanationOptions: [
          {
            id: "fm7-2-a",
            text: "His knowledge of northern technique, joined to the tested finish, forces the attribution; the north always cold-quenches, this blade is cold-quenched, the conclusion follows.",
          },
          {
            id: "fm7-2-b",
            text: "He reasons from the finish back to the northern forges as its origin, treating a technique as proof of the one region that usually practices it.",
          },
          {
            id: "fm7-2-c",
            text: "Northern forges and this blade meet only in the cold-quench they share — a technique spread across the continent by a widely copied manual thirty years ago, which assigns the blade to no shop in particular.",
          },
        ],
      },
      {
        id: "fm7-3",
        text: "Cold-quench had been the guild's own recommended standard for independent smiths since before Lenn had his master's pin, which the assessor pointed out while examining the fuller.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm7-4",
        text: "The blade's actual maker arrived presently, having heard about the assessment and walked over from two streets away.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm7-5",
        text: "His pitch ran on two rails at once: the steel was so freshly forged it still held warmth from its first week off the anvil, and the steel had been aging undisturbed in his workshop for no fewer than twelve years to reach its current temper — rare on both counts, he said, and priced accordingly.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "fm7-5-b",
        explanationOptions: [
          {
            id: "fm7-5-a",
            text: "Residual warmth and twelve years of aging, taken as premises, jointly force the doubled price; the pitch is a plain deduction from two observations.",
          },
          {
            id: "fm7-5-b",
            text: "Steel cannot be both fresh off the anvil this week and aging for twelve years in a workshop; the price rests on premises that rule each other out, leaving it supported by neither.",
          },
          {
            id: "fm7-5-c",
            text: "He connects new steel and aged steel through the shared category of premium metalwork, letting the class carry an argument its members can't.",
          },
        ],
      },
      {
        id: "fm7-6",
        text: "The guild bought the blade at a plain price, logged it as 'origin confirmed, story disputed,' and the smith left with his receipt and his explanations intact.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ferry-register",
    title: "The Untagged Scooter",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "contradictory-premises"],
    sentences: [
      {
        id: "ff8-1",
        text: "The building manager at Kessler House kept a meticulous log of bike-room registrations, which made it all the more frustrating when an untagged electric scooter appeared there on a Monday morning.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff8-2",
        text: "He scrolled through his log, found his answer, and buzzed apartment 4B: every scooter registered in the building was a brushed-chrome Volta model, this scooter was a brushed-chrome Volta, and so it belonged to a resident and whoever in 4B had let them in was responsible for the missing tag.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "ff8-2-b",
        explanationOptions: [
          {
            id: "ff8-2-a",
            text: "His registration log plus the scooter's model settle the attribution; since the building's scooters are all Volta and this one is a Volta, the conclusion follows.",
          },
          {
            id: "ff8-2-b",
            text: "The building's registered scooters and this one share only the model — the city's best-selling mid-range scooter for three years running, which traces the machine to no building and no resident.",
          },
          {
            id: "ff8-2-c",
            text: "He reasons from the Volta model back to the building's registry as its origin, treating a product feature as proof of the one population that usually owns it.",
          },
          {
            id: "ff8-2-d",
            text: "He holds both that the scooter has no ID tag and that its model identifies the owner — premises that cannot together track an untagged vehicle.",
          },
        ],
      },
      {
        id: "ff8-3",
        text: "The Volta was the city's best-selling mid-range scooter for the third consecutive year, a fact visible from the manager's own window on any given morning.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff8-4",
        text: "The building's rules officer arrived that afternoon and issued two findings with equal confidence: the scooter was unregistered with no owner in any system, and the scooter was subject to the building's impound protocol, which required a registered resident to sign the release form.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "ff8-4-a",
        explanationOptions: [
          {
            id: "ff8-4-a",
            text: "A scooter with no registered owner in any system cannot also require a registered resident to sign for it; the two premises unsay each other, and the impound stands on neither.",
          },
          {
            id: "ff8-4-b",
            text: "She connects the scooter to impoundable property only through the class of untagged items in the building, which carries no item from that class into the release protocol.",
          },
          {
            id: "ff8-4-c",
            text: "She argues that because there is no registered owner, no proper release procedure can apply — cancelling the obligation by cancelling the antecedent of the protocol.",
          },
          {
            id: "ff8-4-d",
            text: "She reasons from the missing tag back to impound liability as its one result, treating the absence of registration as proof of a specific legal obligation.",
          },
        ],
      },
      {
        id: "ff8-5",
        text: "The release form sat on the rules officer's desk and asked for a name that, by her own account, did not exist in any system.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff8-6",
        text: "The scooter's owner arrived two days later with a purchase receipt, a photo ID, and considerably more paperwork than the situation required.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tithe-map",
    title: "The Yellow Highlight",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "deductive"],
    sentences: [
      {
        id: "ff9-1",
        text: "The only soundproofed practice room in the music building had been double-booked for Saturday, and the department administrator opened the scheduling spreadsheet with the air of someone who had been expecting this.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-2",
        text: "The first claimant, a trombonist named Pell, produced a screenshot where both his slot and the guitar ensemble's slot appeared with a yellow highlight, and since confirmed bookings were always shown in yellow, he declared both blocks confirmed and himself the rightful holder of the earlier one.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "ff9-2-b",
        explanationOptions: [
          {
            id: "ff9-2-a",
            text: "The confirmed-booking rule plus the yellow highlighting settle it; where the system marks yellow, confirmation follows as a matter of practice.",
          },
          {
            id: "ff9-2-b",
            text: "Pell's booking and the guitar slot meet only in the yellow highlight they share — a default color applied to every row in the template, which marks nothing as confirmed.",
          },
          {
            id: "ff9-2-c",
            text: "He reasons from the yellow highlight back to a confirmed booking as its cause, treating the color as proof of the one action that usually produces it.",
          },
          {
            id: "ff9-2-d",
            text: "He maintains both that his booking was unconfirmed and that the yellow highlight confirms it — premises that cannot stand together.",
          },
        ],
      },
      {
        id: "ff9-3",
        text: "Every row in the scheduling spreadsheet was yellow by default; it was the template, and the actual confirmed-booking column was a small checkbox three columns to the right that Pell had not scrolled to.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-4",
        text: "The administrator pulled up the room-access policy instead and started from the beginning.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-5",
        text: "The policy stated that any ensemble booking with more than three performers took priority over a solo slot of equal duration; the guitar ensemble had five members; Pell's booking was a solo session — so the ensemble got the room, and the administrator had nothing left to decide.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "ff9-5-a",
        explanationOptions: [
          {
            id: "ff9-5-a",
            text: "A rule — ensemble of four or more beats a solo — meets two confirmed facts, and the conclusion is forced; the administrator needs nothing beyond the policy and the headcount.",
          },
          {
            id: "ff9-5-b",
            text: "She reasons from the ensemble's larger headcount back to its priority status as the one cause that produced the booking conflict.",
          },
          {
            id: "ff9-5-c",
            text: "She holds that the policy covers all bookings and that no overlap can override it — a reading that contradicts the policy's own exception clause for pre-approved recitals.",
          },
          {
            id: "ff9-5-d",
            text: "She connects the guitar ensemble to other high-priority bookings through the shared feature of multiple performers, and lets the category carry the precedence without specifying what the policy actually says.",
          },
        ],
      },
      {
        id: "ff9-6",
        text: "Pell walked to the second-best room, which had no soundproofing and a ventilation duct that rattled in the key of G.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-7",
        text: "The guitar ensemble finished at three and left the room in better order than they found it, which the administrator noted in the log and which changed nothing for Pell.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-cresset-inquiry",
    title: "The Dry Upper Shelf",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent", "contradictory-premises"],
    sentences: [
      {
        id: "ff10-1",
        text: "The apartment on the third floor had flooded over a long weekend, and the building's insurance company sent two adjusters who arrived with two clipboards and formed two separate theories before either had spoken to the other.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff10-2",
        text: "The adjusters' manual held a rule they both knew by heart: a burst pipe above the unit always flooded from the ceiling outward before reaching the walls, leaving the upper shelves dry.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff10-3",
        text: "The first adjuster found the upper shelves dry and entered in her report that the pipe above the unit had burst — which placed the fault with building maintenance and the loss with the building's insurer.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "ff10-3-b",
        explanationOptions: [
          {
            id: "ff10-3-a",
            text: "The manual's rule plus the dry upper shelves settle it; a burst overhead pipe is the only premise that produces that pattern, so the conclusion follows.",
          },
          {
            id: "ff10-3-b",
            text: "Dry upper shelves are the 'then' of the manual's rule, and she reads them backward to a burst overhead pipe — though an overflowing bathtub upstairs, or a slow wall seep, can leave the same shelves equally dry.",
          },
          {
            id: "ff10-3-c",
            text: "She groups this flood with burst-pipe floods through the shared feature of dry upper shelves, letting the category carry the origin assessment without confirming it.",
          },
          {
            id: "ff10-3-d",
            text: "She argues that since the lower shelves were damaged, no low-origin flood could have been responsible — denying the antecedent of a different rule about ground-level leaks.",
          },
        ],
      },
      {
        id: "ff10-4",
        text: "An overflowing bathtub two floors up, the second adjuster noted, would also leave the upper shelves dry, since the water travels down the walls rather than across the ceiling.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff10-5",
        text: "The first adjuster, pressed, produced a further argument: the overhead pipe had been certified fully intact when maintenance checked it six days before the flood, and yet the burst pipe above the unit must have been the source, since no other explanation matched the pattern she had already recorded.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "ff10-5-a",
        explanationOptions: [
          {
            id: "ff10-5-a",
            text: "A pipe certified fully intact six days earlier cannot also have burst as the flood's source; she holds both at once, and they cannot both hold — so neither supports the conclusion.",
          },
          {
            id: "ff10-5-b",
            text: "She reads the water pattern backward to the overhead pipe as its one possible cause, treating the spread as proof of where the flood began.",
          },
          {
            id: "ff10-5-c",
            text: "She connects this flood to burst-pipe floods through the shared feature of ceiling-outward spread, letting the category prove the source without confirming it.",
          },
          {
            id: "ff10-5-d",
            text: "She argues that since no other explanation matches the pattern, the burst pipe must be it — eliminating every alternative and leaving one antecedent standing.",
          },
        ],
      },
      {
        id: "ff10-6",
        text: "The maintenance log, requested on day two, showed a bathtub on the fifth floor, an unlatched drain stopper, and a weekend with no one home to notice.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wicker-trap",
    title: "The Lost Keyboard",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "affirming-consequent"],
    sentences: [
      {
        id: "ff11-1",
        text: "A wireless keyboard turned up in the lost-and-found box at the co-working space, and before the front desk had posted a notice, two members appeared to claim it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff11-2",
        text: "Dara went first: her keyboards all had a matte-black finish with rounded corner keys, this keyboard had a matte-black finish with rounded corner keys, and so it had come from her setup and no one else was getting it.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "ff11-2-c",
        explanationOptions: [
          {
            id: "ff11-2-a",
            text: "She reasons from the finish and key shape back to her setup as the origin, treating her keyboard's features as proof of the maker who produced this one.",
          },
          {
            id: "ff11-2-b",
            text: "She holds both that the keyboard has no identifying mark and that the finish and keys identify it — premises that cannot together establish an unmarked piece of equipment.",
          },
          {
            id: "ff11-2-c",
            text: "Dara's keyboards and this one meet only in the matte-black-with-rounded-keys they share — a configuration sold in roughly eleven million units last quarter, which connects the keyboard to no particular owner.",
          },
          {
            id: "ff11-2-d",
            text: "A matte finish and rounded keys, joined to Dara's known preferences, force the attribution; the design narrows the owner to one.",
          },
        ],
      },
      {
        id: "ff11-3",
        text: "Matte-black with rounded corners was the default configuration for the model, which was why the front desk's own keyboard was the same, sitting two feet away.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff11-4",
        text: "Marcus had a different argument: when one of his keyboards went missing it always turned up with a worn spacebar where his thumb dragged, and this keyboard had exactly that wear — proof enough, he said, that it had been his.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "ff11-4-a",
        explanationOptions: [
          {
            id: "ff11-4-a",
            text: "A worn spacebar is the 'then' of Marcus's rule about his missing keyboards, and he reads it backward to ownership — though any keyboard used daily for a year develops the same wear, regardless of whose thumb did it.",
          },
          {
            id: "ff11-4-b",
            text: "He connects this keyboard to his own through the class of worn-spacebar keyboards and lets the category prove ownership without distributing it to any particular person.",
          },
          {
            id: "ff11-4-c",
            text: "He holds that the keyboard has no identifying mark yet the spacebar marks it as his — premises that cannot both serve as proof of the same thing.",
          },
          {
            id: "ff11-4-d",
            text: "He argues that since Dara's keyboards don't show this kind of wear, none of them could account for this one — denying Dara's antecedent and claiming the keyboard.",
          },
        ],
      },
      {
        id: "ff11-5",
        text: "The front desk asked both members when they had last used a keyboard in the open-plan room, got the same month and the same row of desks from each of them, and reached for a coin.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff11-6",
        text: "The keyboard worked well for whoever carried it home, which seemed the appropriate conclusion to a dispute settled by a quarter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-kelp-road",
    title: "The Gravel Path",
    difficulty: "intermediate",
    includedLabels: ["denying-antecedent", "contradictory-premises"],
    sentences: [
      {
        id: "ff12-1",
        text: "The gravel path connecting the neighborhood park to the apartment complex had been crumbling since October, and the residents' association met in March to determine who was responsible for the repair.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff12-2",
        text: "The treasurer read from the maintenance charter: the association was bound to maintain any path that received regular bike traffic; no bicycle had used the gravel path since the cut-through closed in the fall; and so the path lay outside the association's obligation.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "ff12-2-c",
        explanationOptions: [
          {
            id: "ff12-2-a",
            text: "The charter rule and three months without bikes settle it; once the traffic that generates the cycling ends, the obligation ends with it.",
          },
          {
            id: "ff12-2-b",
            text: "She reasons from the empty path back to the closed cut-through as its cause, treating the absence of bikes as proof of the one event that produced it.",
          },
          {
            id: "ff12-2-c",
            text: "Bike traffic is the 'if' of her rule, and she cancels the obligation by cancelling it — but the charter never made bikes the only ground for upkeep, and the pedestrians who use the path twice daily offer another.",
          },
          {
            id: "ff12-2-d",
            text: "She holds both that the path is a shared access route and that it carries no users — premises that cannot stand together in a functioning neighborhood.",
          },
        ],
      },
      {
        id: "ff12-3",
        text: "Residents of three buildings walked the path to the nearest bus stop twice a day, and the number had increased since the cut-through closed because there was now no other way through.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff12-4",
        text: "The association chair rose with the manner of a man who had prepared his remarks during the walk over.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff12-5",
        text: "He offered two facts he considered equally certain: residents had used the gravel path in continuous, unbroken daily use for eleven years without a single gap, and the path had seen no meaningful foot traffic since the cut-through closed last fall — and from both of these together he was satisfied the association owed nothing for repairs.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "ff12-5-a",
        explanationOptions: [
          {
            id: "ff12-5-a",
            text: "Eleven years of continuous daily use and no meaningful foot traffic since last fall cannot both hold; the argument rests on premises that directly unsay each other, and the association can take nothing from either.",
          },
          {
            id: "ff12-5-b",
            text: "He connects the path to unmaintained routes through the shared category of lapsed-traffic infrastructure, letting the class carry a legal conclusion its members cannot support.",
          },
          {
            id: "ff12-5-c",
            text: "He argues that because the cut-through closed, no further foot-traffic obligation can be claimed — denying the antecedent of a rule about continuous community access.",
          },
          {
            id: "ff12-5-d",
            text: "He reasons from the path's disrepair back to disuse as its one cause, treating the crumbling gravel as proof of what produced it.",
          },
        ],
      },
      {
        id: "ff12-6",
        text: "The property lawyer's letter arrived on Friday, cited the same eleven years the chair had just used, and was addressed to the association's registered office.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
