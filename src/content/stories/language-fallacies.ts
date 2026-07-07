import type { PracticeStory } from "@/domain/types";

/**
 * Language-fallacy stories: equivocation, ambiguity, composition, division —
 * with the healthy parents (definitional and part–whole reasoning) appearing
 * inside three of them as the contrast.
 */

export const languageFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-free-ferry",
    title: "The Free Ferry",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "ambiguity"],
    sentences: [
      {
        id: "ln1-1",
        text: "The notice went up on the quay in April: the council's new ferry would be a free service on the harbor crossing.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln1-2",
        text: "The chandler argued there could be no objection to the ferry undercutting the watermen, since a free service is by nature free of regulation — free is free, he said, whichever way you take it.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln1-2-a",
        explanationOptions: [
          {
            id: "ln1-2-a",
            text: "'Free' shifts from unpriced to unregulated mid-argument, and the conclusion rides on the switch — 'free is free' is the switch waving as it passes.",
          },
          {
            id: "ln1-2-b",
            text: "The chandler's sentence can be parsed two ways, and he borrows whichever parsing helps.",
          },
          {
            id: "ln1-2-c",
            text: "The chandler assumes each waterman is undercut because the fleet as a whole is.",
          },
        ],
      },
      {
        id: "ln1-3",
        text: "The watermen's counsel had troubles of his own with the council's minute book.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln1-4",
        text: "The minute read that the council had approved 'the plan to compensate watermen displaced by the ferry in the autumn' — and the council now held that only autumn displacements were covered, though the watermen had voted for autumn payment of all of them.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln1-4-c",
        explanationOptions: [
          {
            id: "ln1-4-b",
            text: "The word 'compensate' changes meaning between the vote and the payment.",
          },
          {
            id: "ln1-4-c",
            text: "'In the autumn' can attach to the displacing or to the compensating — the sentence bears both readings, and each side leans on its own.",
          },
          {
            id: "ln1-4-d",
            text: "The council reasons that since the fleet was compensated, each waterman must have been.",
          },
        ],
      },
      {
        id: "ln1-5",
        text: "A magistrate eventually ruled that a sentence facing two ways binds in neither, and made the council write a new one.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln1-6",
        text: "The new minute ran to three clauses and admitted, everyone agreed, of exactly one reading.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-light-cargo",
    title: "A Light Cargo",
    difficulty: "intermediate",
    includedLabels: ["composition", "division", "part-whole"],
    sentences: [
      {
        id: "ln2-1",
        text: "The Curlew took on eight hundred crates of lamp glass, and her mate walked the manifest with the shipper's clerk.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln2-2",
        text: "Every crate is light enough for one porter, the clerk offered cheerfully, so the cargo is a light one — the Curlew would hardly feel it.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln2-2-a",
        explanationOptions: [
          {
            id: "ln2-2-a",
            text: "Lightness doesn't add up — eight hundred one-porter crates make a hold-straining mass, and the trip from light parts to a light whole is exactly the trip the property can't survive.",
          },
          {
            id: "ln2-2-b",
            text: "The clerk reasons that since the cargo is fragile as a whole, each crate must be fragile.",
          },
          {
            id: "ln2-2-c",
            text: "The clerk's word 'light' shifts between pale-colored glass and low weight.",
          },
        ],
      },
      {
        id: "ln2-3",
        text: "The mate did the honest arithmetic instead: eight hundred crates at ninety pounds is thirty-six tons, weight being a thing that sums whatever the clerk's porters feel.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ln2-3-c",
        explanationOptions: [
          {
            id: "ln2-3-b",
            text: "The mate assumes the whole cargo is heavy because one crate felt heavy to him.",
          },
          {
            id: "ln2-3-c",
            text: "Weight is additive, so the whole's burden is computed from the parts — the transfer is made *and licensed*, which is the healthy form of the clerk's broken move.",
          },
          {
            id: "ln2-3-d",
            text: "The mate settles the dispute by making the word 'light' precise.",
          },
        ],
      },
      {
        id: "ln2-4",
        text: "The clerk, regrouping, tried the other direction: the consignment was insured as first-class freight, so each crate, he reasoned, was first-class and could ride on deck uncovered.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln2-4-a",
        explanationOptions: [
          {
            id: "ln2-4-a",
            text: "A rating of the whole consignment is handed down to every crate — but classifications of wholes don't distribute, and the policy's own schedule rated deck stowage separately.",
          },
          {
            id: "ln2-4-b",
            text: "The clerk argues the consignment is first-class because every crate in it is.",
          },
          {
            id: "ln2-4-c",
            text: "The phrase 'first-class freight' can modify the insurance or the crates, and the clerk picks his reading.",
          },
        ],
      },
      {
        id: "ln2-5",
        text: "The mate stowed the glass below, signed for thirty-six tons, and gave the clerk a receipt light enough for one porter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-working-man",
    title: "The Working Man's Bench",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "definitional"],
    sentences: [
      {
        id: "ln3-1",
        text: "The reading room's oldest bylaw reserved the window bench for 'working men', and the retired pilot Corbett had sat there thirty years.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln3-2",
        text: "Young Prell claimed the bench with an argument he thought unanswerable: Corbett no longer works, a working man is a man who works, and words, after all, must mean what they say.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln3-2-a",
        explanationOptions: [
          {
            id: "ln3-2-a",
            text: "'Working' slides from a class of men — those who lived by their labor — to the present act of laboring, and Prell's conclusion is bought entirely by the slide.",
          },
          {
            id: "ln3-2-b",
            text: "Prell reasons that since the reading room serves workers, each bench in it must.",
          },
          {
            id: "ln3-2-c",
            text: "Prell's sentence about the bench admits two grammatical readings and he trades on the difference.",
          },
        ],
      },
      {
        id: "ln3-3",
        text: "The librarian took down the minute book from 1861, where the bylaw's authors had been kind enough to say what they meant.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln3-4",
        text: "The founders' own gloss defined a working man as one who earns or has earned his bread by labor — a definition Corbett met at sea forty years before Prell met his first ledger.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "ln3-4-c",
        explanationOptions: [
          {
            id: "ln3-4-b",
            text: "The librarian shows that Prell's word 'works' changed meaning between his premises.",
          },
          {
            id: "ln3-4-c",
            text: "The dispute is settled by pinning the term to its written definition and testing the case against it — the word made precise, the question closed.",
          },
          {
            id: "ln3-4-d",
            text: "The librarian classifies Corbett among pilots and lets the category decide.",
          },
        ],
      },
      {
        id: "ln3-5",
        text: "Prell took the second-best bench, which caught, as it happened, the better afternoon light.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-quiet-street",
    title: "The Quiet Street Petition",
    difficulty: "intermediate",
    includedLabels: ["ambiguity", "division"],
    sentences: [
      {
        id: "ln4-1",
        text: "The petition asked the council to calm the traffic on Fossett Lane, and gathered signatures at a rate that surprised both sides.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln4-2",
        text: "Its first line promised that residents 'oppose carts passing on market days over five tons' — and the carriers read it as sparing all lighter carts, while the residents meant no passing at all on the days the market ran over five tons of trade.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln4-2-a",
        explanationOptions: [
          {
            id: "ln4-2-a",
            text: "'Over five tons' can attach to the carts or to the market days — the line carries both readings, and each party signed the one it preferred.",
          },
          {
            id: "ln4-2-b",
            text: "The word 'oppose' means protest in the first clause and prohibit in the second.",
          },
          {
            id: "ln4-2-c",
            text: "The petition assumes each cart is noisy because the lane's traffic is noisy in sum.",
          },
        ],
      },
      {
        id: "ln4-3",
        text: "The council's traffic count found the lane, taken as a whole, among the town's noisiest.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln4-4",
        text: "Armed with that finding, a councillor moved to cite every carter who used the lane, since each was, by the count's authority, among the town's noisiest traffic.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln4-4-c",
        explanationOptions: [
          {
            id: "ln4-4-b",
            text: "The councillor's phrase 'noisiest traffic' shifts between the lane's sum and the carts' character.",
          },
          {
            id: "ln4-4-c",
            text: "A property of the total — the lane's aggregate noise — is dealt out to every cart in it, though a hundred quiet carts make a loud lane between them.",
          },
          {
            id: "ln4-4-d",
            text: "The councillor offers the lane only two futures: citations for all, or noise forever.",
          },
        ],
      },
      {
        id: "ln4-5",
        text: "The clerk of works suggested counting axles instead of blaming them, and the lane got its flagstones the following spring.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln4-6",
        text: "The petition, redrafted by the magistrate's own clerk, said what it meant in one reading and passed in one sitting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-champion-crew",
    title: "The Champion Crew",
    difficulty: "intermediate",
    includedLabels: ["composition", "equivocation"],
    sentences: [
      {
        id: "ln5-1",
        text: "The regatta committee assembled a crew for the county eight from the best oarsman of each village club.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln5-2",
        text: "Eight best oarsmen make the best eight, the chairman announced, and had the cup half-engraved before the boat first touched water.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln5-2-a",
        explanationOptions: [
          {
            id: "ln5-2-a",
            text: "Crew quality lives partly in the blend — timing, swing, temper — so 'best' fails to travel from each seat to the boat; the chairman sums what doesn't sum.",
          },
          {
            id: "ln5-2-b",
            text: "The chairman hands the crew's collective fame down to each individual rower.",
          },
          {
            id: "ln5-2-c",
            text: "The chairman's 'best' shifts from strongest at the oar to most decorated on land.",
          },
        ],
      },
      {
        id: "ln5-3",
        text: "The eight, in the event, rowed like eight ones, and the ferry crew from Aldermoor beat them by a length of clear water.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln5-4",
        text: "Defending the result, the chairman explained that his crew remained the fastest, since every man in it had the fastest time trial in his club — fastest is fastest, whether over water or on paper.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln5-4-c",
        explanationOptions: [
          {
            id: "ln5-4-b",
            text: "The chairman derives each man's speed from the crew's reputation as a whole.",
          },
          {
            id: "ln5-4-c",
            text: "'Fastest' means one thing for a solo trial and another for a raced eight, and 'fastest is fastest' fuses the two senses to escape the scoreboard.",
          },
          {
            id: "ln5-4-d",
            text: "The chairman's sentence can be read as praising the crew or the clubs, at his convenience.",
          },
        ],
      },
      {
        id: "ln5-5",
        text: "Aldermoor's stroke, asked for the secret, said their eight had trained as one boat since Easter, which was no secret at all.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-honest-inn",
    title: "The Honest Inn",
    difficulty: "intermediate",
    includedLabels: ["ambiguity", "composition"],
    sentences: [
      {
        id: "ln6-1",
        text: "The Swan changed hands at midsummer, and the new landlord papered the taproom with his predecessor's testimonials.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln6-2",
        text: "The framed centerpiece read 'Guests say there is no better-kept inn on the coast road' — which the old guests had written of the old keeping, and the new landlord hung as a verdict on his own.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln6-2-a",
        explanationOptions: [
          {
            id: "ln6-2-a",
            text: "'The inn' reads as the house or as its current keeping — the testimonial is true of one and displayed as true of the other, and the frame trades on the double reading.",
          },
          {
            id: "ln6-2-b",
            text: "The landlord's word 'kept' shifts from maintained to inherited between the sign and the door.",
          },
          {
            id: "ln6-2-c",
            text: "The landlord reasons that a praised inn must have praiseworthy rooms, every one.",
          },
        ],
      },
      {
        id: "ln6-3",
        text: "The larder, in fairness, was above reproach, the cellar honest, and the linen bright.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln6-4",
        text: "Every room clean, every cask sound, every account square, the landlord reasoned — so the Swan itself must be a well-run house, and he ordered a sign painted saying so.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln6-4-c",
        explanationOptions: [
          {
            id: "ln6-4-b",
            text: "The landlord deals the Swan's old reputation out to each of its rooms and casks.",
          },
          {
            id: "ln6-4-c",
            text: "A well-run house is parts *plus* their working together — bookings, kitchen timing, the meeting of stage and supper — and sound parts alone don't carry the property up to the whole.",
          },
          {
            id: "ln6-4-d",
            text: "The landlord's sign can be read as describing the building or the business.",
          },
        ],
      },
      {
        id: "ln6-5",
        text: "That autumn the coach twice arrived to cold kitchens — each room clean, each cask sound, and supper nowhere — and the sign-painter was asked to wait a season.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln6-6",
        text: "By spring the Swan ran as one house rather than forty sound parts, and the sign went up unargued.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-wealthy-guild",
    title: "The Wealthy Guild",
    difficulty: "intermediate",
    includedLabels: ["division", "part-whole"],
    sentences: [
      {
        id: "ln7-1",
        text: "The coopers' guild, taken all together, was the richest body in town — hall, plate, and funded charities to prove it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln7-2",
        text: "On that ground the new assessor raised the rate on every cooper in the rolls, each member of a wealthy guild being, he reasoned, a wealthy man.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln7-2-a",
        explanationOptions: [
          {
            id: "ln7-2-a",
            text: "The guild's collective wealth is handed down to each member — but a rich whole can be made of thin purses pooled, and the property doesn't survive the trip to the parts.",
          },
          {
            id: "ln7-2-b",
            text: "The assessor argues the guild is rich because every cooper in it is rich.",
          },
          {
            id: "ln7-2-c",
            text: "The assessor's phrase 'wealthy guild' can describe the members or the treasury, as suits him.",
          },
        ],
      },
      {
        id: "ln7-3",
        text: "Three journeymen coopers appealed the rate with their account books under their arms, which told a plainer story than the guild plate did.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln7-4",
        text: "The appeals judge did the sound arithmetic the assessor had skipped: the hall and plate belonged to the guild as a body, while a member's means were his subscription and his trade — and the subscription, divided out, came to a shilling a quarter, which is what wholes actually tell you about parts.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ln7-4-c",
        explanationOptions: [
          {
            id: "ln7-4-b",
            text: "The judge rules the guild poor because its newest members are poor.",
          },
          {
            id: "ln7-4-c",
            text: "The judge traces which properties genuinely pass between whole and part — collective assets stay with the body; only the divided subscription reaches a member — the licensed trip the assessor's inference skipped.",
          },
          {
            id: "ln7-4-d",
            text: "The judge settles the case by defining the word 'wealthy' precisely.",
          },
        ],
      },
      {
        id: "ln7-5",
        text: "The rate was rewritten against trade and not against plate, and the guild's charity that year quietly paid the three journeymen's subscriptions.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
