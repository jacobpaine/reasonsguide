import type { PracticeStory } from "@/domain/types";

/**
 * Intermediate stories for the formal fallacies — affirming the consequent,
 * denying the antecedent, undistributed middle, contradictory premises —
 * plus the healthy parent form, deductive reasoning, shown working correctly
 * in the same rooms where it fails. The fallacious sentences should read as
 * confident everyday reasoning; neutral sentences quietly hold the other
 * road to B, the other member of the shared category, or the clash between
 * premises.
 */

export const formalFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-signal-lamp",
    title: "The Signal Lamp",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent"],
    sentences: [
      {
        id: "fm1-1",
        text: "The pilot's office kept one rule the whole harbor knew by heart: whenever the pilot boat went out past the mole, the lamp above the office door was lit.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm1-2",
        text: "So when Brakka the fish-buyer saw the lamp burning at dusk, she held her carts at the top of the quay, certain the boat was out and a catch coming in behind it.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm1-2-b",
        explanationOptions: [
          {
            id: "fm1-2-a",
            text: "The harbor's rule plus the lit lamp force her conclusion; given both, the boat must be out.",
          },
          {
            id: "fm1-2-b",
            text: "The lit lamp is the 'then' part of the harbor's rule, and Brakka walks it backward to the boat being out — though the lamp burns on occasions the rule never covered.",
          },
          {
            id: "fm1-2-c",
            text: "She joins the lamp to the pilot boat only through the class of evening harbor signals they share, and lets the category do the proving.",
          },
        ],
      },
      {
        id: "fm1-3",
        text: "The lamp, in truth, was also lit whenever the clerk stayed late over the ledgers, which in the herring season was most evenings.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm1-4",
        text: "The buyers waited an hour in the cold while their horses steamed and the tide went about its business.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm1-5",
        text: "The harbormaster, coming down to see about the crowd, found wet oilskins on the office pegs and settled it his own way: a crossing in any weather soaks the skins, the skins were soaked, so the crew had lately been out and back.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm1-5-a",
        explanationOptions: [
          {
            id: "fm1-5-a",
            text: "Soaked skins are the consequence in his rule, and he reasons from them back to a crossing — though skins hanging in an open porch have other ways of getting wet.",
          },
          {
            id: "fm1-5-b",
            text: "He reasons that since no crossing appears in the day's log, the skins ought to be dry, and treats their wetness as disproof of the log.",
          },
          {
            id: "fm1-5-c",
            text: "He holds both that the boat never left its mooring and that the crew crossed — premises that cannot stand together.",
          },
        ],
      },
      {
        id: "fm1-6",
        text: "It had drizzled since noon, and the pilot boat sat at its mooring the whole time, dry as the ledgers were long.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-low-road",
    title: "The Low Road",
    difficulty: "intermediate",
    includedLabels: ["denying-antecedent"],
    sentences: [
      {
        id: "fm2-1",
        text: "The carter Vell had a load of window glass for the manor and two roads to choose between, the high one long and the low one cheap.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-2",
        text: "A hard freeze on the river always put ice on the low road where the mist settled, and the river was running open past the ford, so — he worked it out as he harnessed — the low road would be clean.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm2-2-c",
        explanationOptions: [
          {
            id: "fm2-2-a",
            text: "Rule and observation together force his conclusion: given an open river, a clear road follows of necessity.",
          },
          {
            id: "fm2-2-b",
            text: "He reasons backward from a clear road to an open river, taking the consequence as proof of its usual cause.",
          },
          {
            id: "fm2-2-c",
            text: "He cancels the 'then' by cancelling the 'if': no freeze, so no ice — but the rule never made the river's freezing the only way ice gets onto that road.",
          },
        ],
      },
      {
        id: "fm2-3",
        text: "The spring under Hangman's Bank wept across the stones all winter, and on clear nights it glazed the low road whatever the river did.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-4",
        text: "He took the low road at a walk, the glass chiming softly behind him at every rut.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-5",
        text: "His boy, riding ahead, made the same shape of argument about the manor: the porter lit the gate lantern when guests were expected, no guests were expected tonight, and so there would be no light to steer by after the turn.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm2-5-a",
        explanationOptions: [
          {
            id: "fm2-5-a",
            text: "From 'no guests' he concludes 'no lantern', as if expected guests were the lantern's only occasion — the rule promises light when guests come, not darkness when they don't.",
          },
          {
            id: "fm2-5-b",
            text: "He sorts tonight into the class of guestless nights and transfers that class's darkness to the gate, linking the two only through the category they share.",
          },
          {
            id: "fm2-5-c",
            text: "The porter's rule, joined to a guestless evening, forces the dark gate as a valid conclusion.",
          },
        ],
      },
      {
        id: "fm2-6",
        text: "In fact the housekeeper lit the lantern for any cart on the ledger, and its glow was what showed them the seep-ice at the bank in time to slow.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm2-7",
        text: "They came through with the glass whole — wrong twice, lucky twice, and paid the same either way.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-unsigned-will",
    title: "A Will in Iron-Gall",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "contradictory-premises"],
    sentences: [
      {
        id: "fm3-1",
        text: "A will surfaced in the parish archive the week the Corring farm went to probate — unsigned, undated, and confident.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm3-2",
        text: "The younger brother pressed his case plainly: the notary Ellum wrote all his instruments in iron-gall ink on rag paper, this will was iron-gall on rag, and so it had come from Ellum's office and carried his authority.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "fm3-2-b",
        explanationOptions: [
          {
            id: "fm3-2-a",
            text: "Ellum's fixed habits, taken with the will's ink and paper, force the attribution; the conclusion follows from the rule.",
          },
          {
            id: "fm3-2-b",
            text: "The will and Ellum's instruments meet only in the materials they share — a middle category half the county's writing desks also occupied, which connects the two to each other not at all.",
          },
          {
            id: "fm3-2-c",
            text: "He maintains both that the will is unsigned and that its author can be read off it — claims that cannot stand together.",
          },
        ],
      },
      {
        id: "fm3-3",
        text: "The registrar observed, without looking up, that iron-gall on rag had been the habit of every desk in the county until the paper mill changed hands.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm3-4",
        text: "The elder brother rose next, a man who had waited years for an audience of exactly this size.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm3-5",
        text: "He argued differently but no better: their father trusted no one and had kept every paper he ever signed under his own floorboards, and the same father had lodged this very will with a notary for safekeeping — proof, he concluded, that it was genuine twice over.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "fm3-5-c",
        explanationOptions: [
          {
            id: "fm3-5-a",
            text: "Two established facts about the father, taken together as premises, force the conclusion that the will is genuine.",
          },
          {
            id: "fm3-5-b",
            text: "He connects the will to his father only through the shared category of trusted papers, which proves nothing about this paper in particular.",
          },
          {
            id: "fm3-5-c",
            text: "A father who kept every paper under his floor cannot also have lodged this one with a notary; the two supports unsay each other, and a conclusion drawn from warring premises stands on neither.",
          },
        ],
      },
      {
        id: "fm3-6",
        text: "The registrar wrote 'adjourned' in a thoroughly modern ink and let both brothers watch him do it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-bakers-window",
    title: "The Baker's Window",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent", "denying-antecedent"],
    sentences: [
      {
        id: "fm4-1",
        text: "In Sarn Lane it was held as settled knowledge that when the baker Odo began work early, his window glowed before the fifth bell.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-2",
        text: "Passing at four, the watchman saw the glow and entered in his book that Odo had begun early — festival loaves, he supposed — and moved on.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm4-2-a",
        explanationOptions: [
          {
            id: "fm4-2-a",
            text: "The glow is the 'then' of the lane's rule, and the watchman walks it backward to the early start — though a window has more than one way of being lit.",
          },
          {
            id: "fm4-2-b",
            text: "He argues that because Odo did not sleep in, the window could not be dark — cancelling the consequent by cancelling the antecedent.",
          },
          {
            id: "fm4-2-c",
            text: "The lane's rule plus the glowing window settle it; on those premises the early start follows of necessity.",
          },
        ],
      },
      {
        id: "fm4-3",
        text: "The light that morning was Odo's sister, sitting up over the quarter's accounts with the lamp turned high and her patience turned low.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-4",
        text: "Odo himself slept until six, having sworn off festivals the year one cost him an oven door.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-5",
        text: "Word went along the lane that Odo had not started early after all, and the chandler's wife did the arithmetic everyone does: no early start, therefore no warm loaves by seven, therefore no errand worth the cold.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm4-5-c",
        explanationOptions: [
          {
            id: "fm4-5-a",
            text: "From the rule and Odo's lie-in, the empty shelf follows of necessity; her inference is the valid one.",
          },
          {
            id: "fm4-5-b",
            text: "She holds both that the bakery stands idle and that the lane expects loaves — premises that cannot both be true at once.",
          },
          {
            id: "fm4-5-c",
            text: "Odo's early start guarantees warm loaves, but its absence guarantees nothing, since loaves can arrive by other hands; she closes one road to bread and calls every road closed.",
          },
        ],
      },
      {
        id: "fm4-6",
        text: "The apprentice, who had a key and ambitions, had the first batch out by half six.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm4-7",
        text: "By eight the queue reached the pump, with the chandler's wife at the end of it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-customs-scale",
    title: "The Customs Scale",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent", "undistributed-middle", "deductive"],
    sentences: [
      {
        id: "fm5-1",
        text: "Two salt casks came ashore light at the customs shed, and three opinions formed around the scale before the tide had turned.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm5-2",
        text: "The weigher had his rule from thirty years of casks — a leaking cask weighs in light — and since these weighed in light, he pronounced them leakers and went looking for the stain.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "fm5-2-b",
        explanationOptions: [
          {
            id: "fm5-2-a",
            text: "Thirty years of rule plus the scale's reading force the finding; given both, the leak follows.",
          },
          {
            id: "fm5-2-b",
            text: "Light weight is the 'then' of his rule, and he reads it backward to a leak — though casks come in light for reasons the rule never named, short filling and dry salt among them.",
          },
          {
            id: "fm5-2-c",
            text: "He puts these casks in the class of light casks and transfers that class's leaks to them by shared membership alone.",
          },
        ],
      },
      {
        id: "fm5-3",
        text: "The boards under the scale were dry as a sermon.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm5-4",
        text: "The tide-clerk had a darker thought, offered quietly, as men offer serious things: the short-weight houses down the coast all shipped in unbranded casks, these casks were unbranded, and so these were short-weight goods.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "fm5-4-a",
        explanationOptions: [
          {
            id: "fm5-4-a",
            text: "The short-weight houses and these casks are joined only through the unbranded middle — a category the honest coopers share too, and one that carries no cask from the first group into the second.",
          },
          {
            id: "fm5-4-b",
            text: "He reasons from an effect — the missing brand — back to smuggling as its one possible cause.",
          },
          {
            id: "fm5-4-c",
            text: "The coast's shipping habits, taken with the bare staves, force the conclusion as a matter of rule.",
          },
        ],
      },
      {
        id: "fm5-5",
        text: "Half the coopers upriver had never owned a brand-iron in their lives, and their salt arrived honest and unmarked in equal measure.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm5-6",
        text: "The collector read the bill of lading and settled the only question that was his to settle: the tariff schedule taxed salt by the hundredweight landed, not the hundredweight promised, and what had landed was what the scale said — so the duty was figured on the lighter weight, and there the arithmetic ended.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "fm5-6-c",
        explanationOptions: [
          {
            id: "fm5-6-a",
            text: "He reasons backward from the light reading to its cause, treating the scale as proof of what happened at sea.",
          },
          {
            id: "fm5-6-b",
            text: "He works from the weight promised and the weight landed at once — premises in open contradiction, from which any duty could follow.",
          },
          {
            id: "fm5-6-c",
            text: "A rule — duty is figured on weight landed — meets a fact, the scale's reading, and the conclusion is forced; he needs no account of why the casks are light, and offers none.",
          },
        ],
      },
      {
        id: "fm5-7",
        text: "As for the missing salt, the drought that summer had dried the whole warehouse lot, which no rule on the quay had thought to mention.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-marles-well",
    title: "The Vestry and the Well",
    difficulty: "intermediate",
    includedLabels: ["denying-antecedent", "contradictory-premises", "deductive"],
    sentences: [
      {
        id: "fm6-1",
        text: "The well in Marle's yard stood a foot lower at Candlemas than anyone could remember, and the vestry met about it in coats.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm6-2",
        text: "The miller had a rule of forty years — a dry autumn drops the well — and the autumn had been sodden, so the well, he told them, could not truly be dropping; the fault would be in the measuring.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "fm6-2-a",
        explanationOptions: [
          {
            id: "fm6-2-a",
            text: "Dry autumns drop the well, but a wet one doesn't hold it up; he denies the antecedent and cancels a consequence that can arrive by other roads entirely.",
          },
          {
            id: "fm6-2-b",
            text: "Rule plus wet autumn force his conclusion; given both, a steady well follows and the measurements must yield.",
          },
          {
            id: "fm6-2-c",
            text: "He maintains both a sodden autumn and a sinking well — premises that cannot be true together, whatever follows from them.",
          },
        ],
      },
      {
        id: "fm6-3",
        text: "Marle's own bucket, on its knotted rope, told a plainer story every morning.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm6-4",
        text: "The churchwarden went further: the wellhead had been locked since Michaelmas with no bucket down it, and the steady fall of the level showed constant drawing all winter — from which two certainties he concluded that the parish must post a watch.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "fm6-4-b",
        explanationOptions: [
          {
            id: "fm6-4-a",
            text: "Two observations converge as premises, and the watch follows from them of necessity.",
          },
          {
            id: "fm6-4-b",
            text: "A wellhead locked and untouched since Michaelmas cannot also have been drawn from all winter; his two certainties unsay each other, and the watch is posted on the strength of neither.",
          },
          {
            id: "fm6-4-c",
            text: "He argues that with no bucket gone down, the level cannot have fallen — denying the antecedent of the parish's rule about drawing.",
          },
        ],
      },
      {
        id: "fm6-5",
        text: "Nobody mentioned the tannery ditch, cut in November a stone's throw uphill, though everyone had watched it dug.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm6-6",
        text: "The schoolmistress, who kept the vestry's minutes and much of its sanity, pointed instead to the charter: any work that cut a watercourse within the glebe required the vestry's seal, the tannery ditch cut one and carried no seal, and so the ditch was unlawful — whatever it had or hadn't done to the well.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "fm6-6-a",
        explanationOptions: [
          {
            id: "fm6-6-a",
            text: "Charter rule, surveyed fact, missing seal: the premises admit one conclusion and she draws exactly that, claiming nothing about the well that the premises don't cover.",
          },
          {
            id: "fm6-6-b",
            text: "She reasons backward from the low well to the ditch as its cause, taking the effect as proof of what produced it.",
          },
          {
            id: "fm6-6-c",
            text: "She holds that the ditch both cut a watercourse and carried no seal — premises at odds with each other, from which nothing follows.",
          },
        ],
      },
      {
        id: "fm6-7",
        text: "The ditch was filled by Lady Day, and by Whitsun the well had crept back up, keeping its own counsel as to why.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-dyers-blue",
    title: "The Dyer's Blue",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "contradictory-premises"],
    sentences: [
      {
        id: "fm7-1",
        text: "A bolt of blue cloth came before the guild's table at the autumn staple, seller unknown, quality past argument.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm7-2",
        text: "Assessor Prin turned a corner of it to the light and gave her finding: the island workshops dyed with true woad, this bolt was dyed with true woad, and so the bolt was island work — the provenance, she felt, was in the thread itself.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "fm7-2-c",
        explanationOptions: [
          {
            id: "fm7-2-a",
            text: "Her premises about island dyeing, joined to the tested dye, force the attribution as a matter of rule.",
          },
          {
            id: "fm7-2-b",
            text: "She reasons from the dye back to the islands as its only source, mistaking a consequence for the one cause that could produce it.",
          },
          {
            id: "fm7-2-c",
            text: "Island work and this bolt meet only in the woad they share — a middle term half the coast could claim, which hands the provenance to no one.",
          },
        ],
      },
      {
        id: "fm7-3",
        text: "Woad grew in every second kitchen garden from the estuary to the hills, as any dyer's blue hands could testify.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm7-4",
        text: "The seller, found at last behind the wool-sacks, was a small man with a large manner.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "fm7-5",
        text: "His pitch ran on two rails at once: no cloth still so bright could be more than a season off the loom, and no cloth so soft could have seen fewer than twenty winters in a cedar chest — rare both ways, he said, and priced accordingly.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "fm7-5-b",
        explanationOptions: [
          {
            id: "fm7-5-a",
            text: "Brightness and softness, taken together as premises, jointly force the doubled price; the pitch is a plain deduction from two observations.",
          },
          {
            id: "fm7-5-b",
            text: "Cloth cannot be both a season off the loom and twenty winters in a chest; the price rests on premises that cancel each other, leaving it supported by neither.",
          },
          {
            id: "fm7-5-c",
            text: "He joins newness and age only through the shared category of rarity, letting the class carry an argument its members can't.",
          },
        ],
      },
      {
        id: "fm7-6",
        text: "The guild bought the bolt anyway, at a plain price, and entered it in the book as blue, origin disputed by everyone including its seller.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ferry-register",
    title: "The Ferry Register",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "contradictory-premises"],
    sentences: [
      {
        id: "ff8-1",
        text: "The ferry-keeper at Stoat's Landing maintained a crossing register in a water-stained leather book that showed two decades of tolls, disputes, and weather.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff8-2",
        text: "When a clinker-hulled cutter came in without papers, he searched back through his entries and settled the question to his satisfaction: every boat from Orwell's yard was clinker-hulled, this cutter was clinker-hulled, and so it had come from Orwell's yard and Orwell would answer for the arrears.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "ff8-2-b",
        explanationOptions: [
          {
            id: "ff8-2-a",
            text: "His rule plus the cutter's hull settle the attribution; since Orwell's yard builds this way and this boat is built this way, the conclusion follows of necessity.",
          },
          {
            id: "ff8-2-b",
            text: "Orwell's yard and this cutter meet only in the clinker-hulling they share — a method common enough that the register's own contents show the connection proves nothing.",
          },
          {
            id: "ff8-2-c",
            text: "He reasons from the clinker hull back to Orwell's yard as its origin, taking the construction style as proof of the one builder who usually produces it.",
          },
          {
            id: "ff8-2-d",
            text: "He holds both that the boat has no papers to identify it and that its hull identifies it — premises that cannot together settle an unregistered vessel.",
          },
        ],
      },
      {
        id: "ff8-3",
        text: "Clinker-hulling was the standard habit from the creek to the cliffs, which was why the register contained more clinker hulls than the keeper's memory held builders.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff8-4",
        text: "The harbourmaster arrived that afternoon and issued two pronouncements he considered equally certain: the cutter was unregistered, with no owner on any roll, and the cutter was liable to the impound schedule, which required a registered keeper to sign for the hull.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "ff8-4-a",
        explanationOptions: [
          {
            id: "ff8-4-a",
            text: "An unregistered boat with no owner on any roll cannot also require a registered keeper to sign for it; the two premises unsay each other, and the impound stands on neither.",
          },
          {
            id: "ff8-4-b",
            text: "He connects the cutter to impoundable vessels only through the class of unpapered hulls at the landing, which carries no boat from that class into the schedule.",
          },
          {
            id: "ff8-4-c",
            text: "He argues that because there is no registered owner, no impound procedure can properly apply — cancelling the obligation by cancelling the antecedent of the schedule.",
          },
          {
            id: "ff8-4-d",
            text: "He reasons from the missing papers back to liability as their one result, treating the absence as proof of a specific legal obligation.",
          },
        ],
      },
      {
        id: "ff8-5",
        text: "The impound form sat on the harbourmaster's table and asked for a name that, by his own account, did not exist.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff8-6",
        text: "The cutter's owner arrived three days later with papers from Yarmouth in better order than anyone's reasoning, and the register gained a new entry.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tithe-map",
    title: "The Tithe Map",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "deductive"],
    sentences: [
      {
        id: "ff9-1",
        text: "The boundary stone between Ketch's meadow and the church glebe went missing after the autumn ploughing, and the vestry opened its books and its mouths in equal measure.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-2",
        text: "The churchwarden had found an old estate map with charcoal-line borders, and since the rector's known glebe and Ketch's meadow were both charcoal-lined on it, he presented this as proof they had been drawn in the same hand and held under the same tenure.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "ff9-2-b",
        explanationOptions: [
          {
            id: "ff9-2-a",
            text: "The charcoal lines, applied to both parcels in the same drafting session, force the shared-tenure conclusion; where the same hand maps, the same tenure follows.",
          },
          {
            id: "ff9-2-b",
            text: "The rector's glebe and Ketch's meadow are joined only through the charcoal-line technique — a drafting habit covering every parcel on the sheet, which carries nothing from one holding's tenure to another.",
          },
          {
            id: "ff9-2-c",
            text: "He reasons from the charcoal lines back to a shared hand as their cause, taking the drafting feature as proof of the one circumstance that usually produces it.",
          },
          {
            id: "ff9-2-d",
            text: "He maintains both that the boundary stone is gone and that the map can establish the boundary — premises that cannot together settle a question the stone alone was meant to answer.",
          },
        ],
      },
      {
        id: "ff9-3",
        text: "Every parcel on that map — forty-three by the schoolmistress's count — wore charcoal lines, the draughtsman having preferred them to ink for large-scale work.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-4",
        text: "The schoolmistress asked to see the terrier instead, and fetched it from the shelf herself when nobody moved.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-5",
        text: "The terrier held that any land lying within ten chains of the church tower was glebe unless annotated otherwise; the meadow stood nine chains from the tower and carried no annotation; the meadow was therefore glebe, and the argument closed.",
        labels: ["deductive"],
        primaryLabel: "deductive",
        isTarget: true,
        correctExplanationId: "ff9-5-a",
        explanationOptions: [
          {
            id: "ff9-5-a",
            text: "A rule — land within ten chains is glebe unless noted — meets two measured facts, and the conclusion is forced; she needs nothing beyond the terrier and the chain.",
          },
          {
            id: "ff9-5-b",
            text: "She reasons from the meadow's nearness to the tower back to glebe status as its one cause, treating the distance as proof of what produced the legal designation.",
          },
          {
            id: "ff9-5-c",
            text: "She holds that the terrier covers all land within range and that no annotation can override it — a reading at odds with the rule's own exception clause.",
          },
          {
            id: "ff9-5-d",
            text: "She connects this meadow to other glebe parcels through the shared feature of church-adjacency, and lets the category carry the tenure without specifying what the terrier actually says.",
          },
        ],
      },
      {
        id: "ff9-6",
        text: "Ketch walked the chains himself the next morning and returned with nothing useful to say.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff9-7",
        text: "The stone was cut and set at the measured line before Easter, and the charcoal map returned to its drawer unmarked.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-cresset-inquiry",
    title: "The Cresset Inquiry",
    difficulty: "intermediate",
    includedLabels: ["affirming-consequent", "contradictory-premises"],
    sentences: [
      {
        id: "ff10-1",
        text: "The chandler's workshop on Wren Lane burned to the sill in February, and the guild sent two assessors to settle whether the loss fell to the insurer or to the owner's account.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff10-2",
        text: "The guild's manual held one rule the assessors both knew by heart: a fire beginning above the ceiling joists always spread outward before downward and left the lowest shelf-stock untouched.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff10-3",
        text: "The first assessor found the lowest shelves untouched and entered in his ledger that the fire had begun above the joists — which placed the origin in the chimney stack and the loss with the insurer.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "ff10-3-b",
        explanationOptions: [
          {
            id: "ff10-3-a",
            text: "The rule and the untouched shelves settle the finding; an above-joist origin is the only premise that makes those shelves survive, and so the conclusion follows.",
          },
          {
            id: "ff10-3-b",
            text: "Untouched shelves are the 'then' of the guild's rule, and he reads them back to an above-joist start — though other sources can leave those shelves standing just as well.",
          },
          {
            id: "ff10-3-c",
            text: "He groups this fire with above-joist fires through the shared feature of untouched shelves, and lets the category carry the attribution without confirming the actual origin.",
          },
          {
            id: "ff10-3-d",
            text: "He argues that since the shelves below were not scorched, no low-origin fire could have occurred — denying the antecedent of a different shelf-damage rule.",
          },
        ],
      },
      {
        id: "ff10-4",
        text: "Candles stored near an open grating, the second assessor observed, would leave the lowest shelves equally untouched, since such a fire burns upward before it spreads.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff10-5",
        text: "The first assessor, pressed, produced a further argument: the chimney had been cold for three full days before the fire, he was now certain, yet the fire must have started there all the same, since no other origin could account for the pattern he had already recorded.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "ff10-5-a",
        explanationOptions: [
          {
            id: "ff10-5-a",
            text: "A chimney cold for three days cannot also have started the fire; he leans on both at once, and they cannot both hold — so neither holds up the conclusion.",
          },
          {
            id: "ff10-5-b",
            text: "He reads the damage pattern backward to the chimney as its one possible cause, taking the spread as proof of where the fire began.",
          },
          {
            id: "ff10-5-c",
            text: "He connects this fire to chimney-origin fires through the shared pattern of outward spread, letting the category prove the origin without confirming it.",
          },
          {
            id: "ff10-5-d",
            text: "He argues that since no other origin matches the pattern, the chimney must be it — denying every alternative and leaving one antecedent standing.",
          },
        ],
      },
      {
        id: "ff10-6",
        text: "The guild examiner called it a draw, sent for the sweep's log, and had the answer in six lines.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wicker-trap",
    title: "The Wicker Trap",
    difficulty: "intermediate",
    includedLabels: ["undistributed-middle", "affirming-consequent"],
    sentences: [
      {
        id: "ff11-1",
        text: "A wicker eel-trap came up at Holbrook weir after the spring floods with no owner's mark on it, and two fishermen named it theirs before the weir-keeper had set it on his table.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff11-2",
        text: "Aldous pressed first: his traps were woven with a right-hand twist, this trap was right-hand twisted, and so it had come from his hands and no one else's — the weave, he said, was as good as a brand.",
        labels: ["undistributed-middle"],
        primaryLabel: "undistributed-middle",
        isTarget: true,
        correctExplanationId: "ff11-2-c",
        explanationOptions: [
          {
            id: "ff11-2-a",
            text: "He reasons from the right-hand twist back to his own hands as its origin, treating a characteristic of his traps as proof of the maker who produced this one.",
          },
          {
            id: "ff11-2-b",
            text: "He maintains both that the trap carries no mark and that the weave names the maker — premises that cannot together identify an unbranded piece.",
          },
          {
            id: "ff11-2-c",
            text: "Aldous's traps and this trap meet only in the right-hand twist they share — a habit common enough across the parish that the middle term connects the two to each other not at all.",
          },
          {
            id: "ff11-2-d",
            text: "Right-hand twist and Aldous's established practice, taken together, force the attribution; the weave narrows the maker to one.",
          },
        ],
      },
      {
        id: "ff11-3",
        text: "Half the basket-weavers in three parishes had been taught the same right-hand habit by the same travelling tutor, which the weir-keeper mentioned once and softly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff11-4",
        text: "Berwick's reasoning ran differently: when a trap was his, it came up from the river-floor with silt compacted in the base, and this trap had silt packed exactly there — proof enough, he said, of whose hands had woven it.",
        labels: ["affirming-consequent"],
        primaryLabel: "affirming-consequent",
        isTarget: true,
        correctExplanationId: "ff11-4-a",
        explanationOptions: [
          {
            id: "ff11-4-a",
            text: "Silt-packed bases are the 'then' of Berwick's rule, and he reads them back to his ownership — though any trap resting on a silty riverbed through a spring flood comes up the same way.",
          },
          {
            id: "ff11-4-b",
            text: "He connects this trap to his own through the shared class of silt-bearing traps, and lets the category prove ownership without distributing it to any particular fisherman.",
          },
          {
            id: "ff11-4-c",
            text: "He holds that the trap has no mark yet the silt marks it as his — premises that cannot both serve as proof of the same thing.",
          },
          {
            id: "ff11-4-d",
            text: "He argues that since Aldous's traps do not carry compacted silt, none of them could account for this one — denying Aldous's antecedent and claiming the field.",
          },
        ],
      },
      {
        id: "ff11-5",
        text: "The weir-keeper asked both men when they had last laid traps above the sluice, found the same week and the same reach in both answers, and settled the dispute with a coin.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff11-6",
        text: "The trap fished well for whoever carried it home, which seemed the best that could be said of reasoning that ends in a coin-flip.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-kelp-road",
    title: "The Kelp Road",
    difficulty: "intermediate",
    includedLabels: ["denying-antecedent", "contradictory-premises"],
    sentences: [
      {
        id: "ff12-1",
        text: "The cliff track above Stave Cove washed out a little further each autumn, and the parish council met in March to determine whose hands would repair it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff12-2",
        text: "The roadman read from the maintenance book: the parish was bound to repair any road where carts ran regularly; no cart had used the cliff track since the kelp trade closed three winters before; and so the track lay outside the parish's obligation.",
        labels: ["denying-antecedent"],
        primaryLabel: "denying-antecedent",
        isTarget: true,
        correctExplanationId: "ff12-2-c",
        explanationOptions: [
          {
            id: "ff12-2-a",
            text: "The maintenance rule and three winters without carts settle it; once the trade that generated the traffic ends, the obligation ends with it.",
          },
          {
            id: "ff12-2-b",
            text: "He reasons from the empty track back to the closed trade as its cause, treating the absence of carts as proof of the one event that produced it.",
          },
          {
            id: "ff12-2-c",
            text: "Cart-traffic is the 'if' of his rule, and he cancels the obligation by cancelling it — but the rule never made carts the only ground for upkeep, and pedestrians in number offer another.",
          },
          {
            id: "ff12-2-d",
            text: "He holds both that the track is a public road and that it carries no users — premises that cannot stand together in a working parish.",
          },
        ],
      },
      {
        id: "ff12-3",
        text: "The fishing families walked the track twice a day for their gear, and the autumn visitors arrived in a number the roadman had not thought to count.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff12-4",
        text: "Councillor Breach rose with the manner of a man who had prepared his remarks on the walk over.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ff12-5",
        text: "He argued, with equal confidence in both halves, that the fishing families had used the track in steady and unbroken daily use for forty years without pause, and that the track had seen no regular use since the trade ended three winters back — and on both of those grounds together he was satisfied the parish owed nothing.",
        labels: ["contradictory-premises"],
        primaryLabel: "contradictory-premises",
        isTarget: true,
        correctExplanationId: "ff12-5-a",
        explanationOptions: [
          {
            id: "ff12-5-a",
            text: "Forty years of unbroken daily use and three winters of no regular use cannot both hold; the argument rests on premises that directly unsay each other, and the council can take nothing from either.",
          },
          {
            id: "ff12-5-b",
            text: "He connects the track to unrepaired roads through the shared category of lapsed commercial routes, letting the class carry a legal conclusion its members cannot support.",
          },
          {
            id: "ff12-5-c",
            text: "He argues that because the trade ended, no further obligation can be claimed — denying the antecedent of a rule about continuous access.",
          },
          {
            id: "ff12-5-d",
            text: "He reasons from the track's disrepair back to disuse as its one cause, treating the condition of the road as proof of what produced it.",
          },
        ],
      },
      {
        id: "ff12-6",
        text: "The clerk read both assertions back to the room at the same measured pace, and the council adjourned without further argument.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
