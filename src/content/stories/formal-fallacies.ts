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
];
