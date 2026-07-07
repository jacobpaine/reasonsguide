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
  {
    id: "story-signed-charter",
    title: "The Signed Charter",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "ambiguity"],
    sentences: [
      {
        id: "ln8-1",
        text: "The dyers' charter of the third year of the reign, renewed without amendment twice since, was a close-written document that gave the guild the sole right to set the colour price within the county and had so served forty years without recorded dispute.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln8-2",
        text: "When a Flemish merchant began listing his rates below the guild's floor, the master dyer rode to the assizes with the charter.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln8-3",
        text: "The merchant's advocate answered that a sole right is freely held — free being the nature of right as such — and therefore freely priced: the charter itself, he concluded, forbade the guild from imposing any floor on prices, including the one the guild had set.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln8-3-a",
        explanationOptions: [
          {
            id: "ln8-3-a",
            text: "'Free' begins as a description of the grant's character — uncontested, rightfully held — and ends as a description of price — unconstrained from below; the advocate uses the word's first sense to establish the second, and the two senses are not the same office.",
          },
          {
            id: "ln8-3-b",
            text: "The phrase 'freely priced' can describe the guild's right or the merchant's entitlement, and the advocate borrows whichever reading he needs.",
          },
          {
            id: "ln8-3-c",
            text: "The advocate reasons that since each individual dyer holds the right freely, the guild as a collective body must price freely too.",
          },
        ],
      },
      {
        id: "ln8-4",
        text: "The charter gave the guild 'the right to settle all disputes touching cloth priced below the guild standard at fair' — a phrase the dyers read as fixing where disputes were to be settled, and the merchants as fixing which disputes qualified, the same few words carrying both readings without strain.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln8-4-a",
        explanationOptions: [
          {
            id: "ln8-4-a",
            text: "'At fair' attaches grammatically to either the settling or the pricing: disputes must be settled at fair, or disputes are those arising from cloth priced below standard at fair — the sentence runs both ways and the charter chose neither.",
          },
          {
            id: "ln8-4-b",
            text: "'Guild standard' shifts between a price floor and a quality grade in the merchant's reading of the charter.",
          },
          {
            id: "ln8-4-c",
            text: "The guild assumes that because each transaction at fair is regulated, all cloth sold anywhere by guild members is covered by the same right.",
          },
        ],
      },
      {
        id: "ln8-5",
        text: "A recorder read the parchment twice, found it to carry two meanings and therefore none enforceable, and advised the guild to redraft before the next fair.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-parish-ledger",
    title: "The Parish Ledger",
    difficulty: "intermediate",
    includedLabels: ["composition", "division", "part-whole"],
    sentences: [
      {
        id: "ln9-1",
        text: "The vestry of St. Audrey's commissioned a survey after a wet winter brought three buckets into the nave.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln9-2",
        text: "The surveyor examined each bay with lantern and rod: every pillar was plumb, every arch held true at its crown, every window sealed at the sill, and no course of stonework had opened since the last recording.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln9-3",
        text: "On that verdict the churchwarden closed the survey and wound up the fabric fund, reasoning that a church whose every part was whole must itself be whole and require no reserve.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln9-3-a",
        explanationOptions: [
          {
            id: "ln9-3-a",
            text: "A fabric's condition depends on how its parts meet — whether foundations drain together, joints seal at their meeting, arches distribute load across the build — and no sum of individually sound elements settles those questions; the warden's conclusion travels a route the survey had not walked.",
          },
          {
            id: "ln9-3-b",
            text: "The warden distributes the fabric fund's surplus back to each bay and arch as though the fund's health were each component's entitlement.",
          },
          {
            id: "ln9-3-c",
            text: "'Perfect repair' can mean requiring no work now or requiring no work for a decade, and the warden has taken the longer reading without stating it.",
          },
        ],
      },
      {
        id: "ln9-4",
        text: "The wet winter had not finished with the matter, and by Easter a corbel had shifted and a run of lead had lifted.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln9-5",
        text: "At a special vestry the curate proposed dividing the repair bill equally among all parishioners, the church being in debt for one hundred and four pounds and every member of a debtor body being, in his reasoning, a debtor to the same amount.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln9-5-a",
        explanationOptions: [
          {
            id: "ln9-5-a",
            text: "A congregation's collective deficit belongs to the body, not replicated in full in each member; the curate has handed the same hundred and four pounds to forty-two people separately, multiplying what was owed rather than apportioning it.",
          },
          {
            id: "ln9-5-b",
            text: "The curate is summing each parishioner's private means to arrive at the church's total capacity for repair.",
          },
          {
            id: "ln9-5-c",
            text: "'Debtor to the same amount' shifts from an equal share of a collective debt to the full debt owed personally by each member.",
          },
        ],
      },
      {
        id: "ln9-6",
        text: "The treasurer proposed a share levy instead: one hundred and four pounds divided by forty-two shares came to two pounds nine and eightpence each, the whole's burden carried to each part in strict proportion to the hold each part had in the body.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ln9-6-a",
        explanationOptions: [
          {
            id: "ln9-6-a",
            text: "A subscription share is a defined fraction of the whole, so each part's assessment follows from the whole's cost by valid division — the denominator is named, the arithmetic is exact, and the trip from whole to part is the licensed form of the move the curate had made without a license.",
          },
          {
            id: "ln9-6-b",
            text: "The treasurer assumes that because each parishioner's share is small, the church as a whole can afford the repair without diocesan assistance.",
          },
          {
            id: "ln9-6-c",
            text: "The treasurer distributes the church's full debt to each parishioner at face value, as the curate had proposed, rather than each member's fractional share.",
          },
        ],
      },
      {
        id: "ln9-7",
        text: "The levy was set and collected, the lead replaced, and the fund reconstituted at a lower figure with a clause requiring survey every five years.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-common-pasture",
    title: "The Common Pasture",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "division"],
    sentences: [
      {
        id: "ln10-1",
        text: "The manor court of Alderton held its Michaelmas session with one matter on the roll: the common had been overstocked in August and someone was to answer.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln10-2",
        text: "The manorial steward proposed fining every beast on the common, since the herd as a whole had been adjudged in breach, and a herd in breach must be composed of beasts in breach.",
        labels: ["division"],
        primaryLabel: "division",
        isTarget: true,
        correctExplanationId: "ln10-2-a",
        explanationOptions: [
          {
            id: "ln10-2-a",
            text: "Overstock is a property of a count, not of individual beasts — it arises when the total exceeds the stint, and no single animal is in breach merely by being part of a herd whose sum tipped the limit; the steward distributes a collective verdict to each component.",
          },
          {
            id: "ln10-2-b",
            text: "'Breach' slides from violation of the stinting rule to individual trespass liability in the steward's proposal.",
          },
          {
            id: "ln10-2-c",
            text: "'Herd in breach' can describe the demesne's animals alone or every beast present that day, and the steward reads it as covering all.",
          },
        ],
      },
      {
        id: "ln10-3",
        text: "Eleanor Alcock, freeholder of three roods, said she had no objection to arithmetic but a firm one to the logic.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln10-4",
        text: "The steward pressed a further point: the pasture was stinted, he noted — stinted in the register meaning a fixed-number right — and a stinted right was a limited one, and limited rights could be curtailed, and what could be curtailed could be revoked, so the freeholders' title to graze was revocable at the lord's pleasure.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln10-4-a",
        explanationOptions: [
          {
            id: "ln10-4-a",
            text: "'Stinted' names a specific form of common right — number-fixed by agreement — and carries no suggestion that the right may be revoked; the steward walks the word from its technical sense to a general sense of 'limited' and from there to 'revocable,' a journey the word cannot make without changing passengers.",
          },
          {
            id: "ln10-4-b",
            text: "The steward distributes the lord's authority over the common as a whole to each freeholder's individual share of the pasture.",
          },
          {
            id: "ln10-4-c",
            text: "'Fixed-number right' can describe a seasonal limitation or a permanent curtailment, and the steward borrows the second reading.",
          },
        ],
      },
      {
        id: "ln10-5",
        text: "Alcock cited the court roll back three reigns and the steward's case was dismissed without costs.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-tanners-bond",
    title: "The Tanners' Bond",
    difficulty: "intermediate",
    includedLabels: ["ambiguity", "composition"],
    sentences: [
      {
        id: "ln11-1",
        text: "The tanners' bond, written in the guild hall in the year of the great frost and witnessed by the city recorder, required every master to hold the price of dressed leather at no less than sixpence the pound throughout fair time and to register his prices with the warden before opening his stall.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln11-2",
        text: "For two generations this had settled quietly: no undercutting at the summer and winter fairs, the floor held, the trade content.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln11-3",
        text: "When a cloth merchant demanded the floor be honored at an auction held the Wednesday before the summer fair opened, the warden argued that the auction fell within fair time, while the merchant's factor held that fair time did not begin until the stalls were formally opened and the oaths sworn.",
        labels: ["ambiguity"],
        primaryLabel: "ambiguity",
        isTarget: true,
        correctExplanationId: "ln11-3-a",
        explanationOptions: [
          {
            id: "ln11-3-a",
            text: "'During fair time' can span the fair's full commercial season — preparation, opening, and trade together — or it can name exactly the days between the formal oaths; the bond bears both readings without straining a word, and no clause in it settles the question.",
          },
          {
            id: "ln11-3-b",
            text: "'Fair time' shifts between a customary commercial season and a formal legal interval measured from oath to oath.",
          },
          {
            id: "ln11-3-c",
            text: "The warden distributes the fair's regulatory regime to each individual transaction in the week before the formal opening.",
          },
        ],
      },
      {
        id: "ln11-4",
        text: "A guild recorder recalled that the bond's drafters had resolved their disagreement about the Wednesday in question but could not produce the minutes that would have shown how.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln11-5",
        text: "The factor added a second argument: every master in the guild was individually solvent, every workshop in good standing, every ledger current — and therefore the trade as a whole was sound enough to honor its obligations without enforcement, making the bond's penalty clauses unnecessary.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln11-5-a",
        explanationOptions: [
          {
            id: "ln11-5-a",
            text: "Collective reliability — the capacity to hold a floor when individual interests run against it — is more than the sum of solvent members; penalty clauses exist precisely because sound parts do not guarantee a sound whole under pressure, and the factor erases the gap the bond was written to bridge.",
          },
          {
            id: "ln11-5-b",
            text: "The factor distributes the guild's collective good standing to each individual transaction, treating institutional reliability as a property of single sales.",
          },
          {
            id: "ln11-5-c",
            text: "'Sound enough to honor its obligations' can describe financial capacity or willingness to comply, and the factor moves between them.",
          },
        ],
      },
      {
        id: "ln11-6",
        text: "The bond was rewritten that autumn to name both fairs and the three preceding days, and the penalty clauses were doubled.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-bridge-survey",
    title: "The Bridge Survey",
    difficulty: "intermediate",
    includedLabels: ["equivocation", "composition", "definitional"],
    sentences: [
      {
        id: "ln12-1",
        text: "The county surveyor arrived at Tollerton bridge in November with his measuring rod and his clerk.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln12-2",
        text: "His first notation entered the bridge as 'ancient' — the word used in the county register for any structure predating the previous survey by more than a decade.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln12-3",
        text: "The bridge warden objected that if the bridge was ancient it was old, and old structures were held immune from the new repair schedule under a standing order of 1704; the surveyor replied that the register defined 'ancient' as a filing category, not an age claim, and that filing age conferred no immunity the standing order had granted.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "ln12-3-a",
        explanationOptions: [
          {
            id: "ln12-3-a",
            text: "The surveyor pins 'ancient' to its defined technical sense — a classification in the register's scheme — and shows the warden's immunity claim requires a popular sense of age the definition excludes; the question is closed by specifying which meaning of the word governs in this document.",
          },
          {
            id: "ln12-3-b",
            text: "'Ancient' slides between a filing category and a temporal quality and back in the argument, shifting with whoever is speaking rather than being fixed to one meaning.",
          },
          {
            id: "ln12-3-c",
            text: "'Predating the previous survey' can describe predating its date or predating its findings, and the two parties have each read the phrase to suit themselves.",
          },
        ],
      },
      {
        id: "ln12-4",
        text: "The warden accepted the notation but declared the bridge sound: the spans were sound, he said, and a sound structure is by definition fit for public use, and a structure fit for public use requires no examination — sound was sound, whatever a surveyor's rod might add.",
        labels: ["equivocation"],
        primaryLabel: "equivocation",
        isTarget: true,
        correctExplanationId: "ln12-4-a",
        explanationOptions: [
          {
            id: "ln12-4-a",
            text: "'Sound' begins as an engineering assessment — structurally intact — and ends as a regulatory conclusion — beyond the need for inspection; the warden borrows the authority of the engineer's judgment to establish an administrative immunity, and the two senses are not the same word doing the same job.",
          },
          {
            id: "ln12-4-b",
            text: "The warden reasons from each span being sound in isolation to the bridge's load-bearing behavior as an assembled whole.",
          },
          {
            id: "ln12-4-c",
            text: "'Fit for public use' can describe a condition of safety or a legal certification, and the warden passes between the two without naming the move.",
          },
        ],
      },
      {
        id: "ln12-5",
        text: "The clerk wrote 'sound' twice in the margin of his notebook, with a small arrow between the two entries.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ln12-6",
        text: "Against the surveyor's intention to probe the pier footings, the warden objected that every stone had been laid by guild masons, every arch turned by a certified craftsman, every joint pointed the previous decade — a bridge built thus needing, in his reasoning, no further account of its foundations.",
        labels: ["composition"],
        primaryLabel: "composition",
        isTarget: true,
        correctExplanationId: "ln12-6-a",
        explanationOptions: [
          {
            id: "ln12-6-a",
            text: "Individual components — stones, arches, joints — do not decide whether they bear load well in combination, whether footings have settled evenly, whether the mill-race has worked on the base of the pier; no enumeration of certified parts closes the question of their assembly, which is what the survey existed to discover.",
          },
          {
            id: "ln12-6-b",
            text: "The warden distributes the bridge's official 'ancient' classification to each stone and joint, treating registry approval of the whole structure as approval of each element.",
          },
          {
            id: "ln12-6-c",
            text: "'Guild mason' shifts from a craftsman who belongs to the guild to one whose work is legally warranted by the guild in the warden's argument.",
          },
        ],
      },
      {
        id: "ln12-7",
        text: "The surveyor examined the pier footings regardless and found one undercut by the mill-race; the warden's objection was recorded in the file and marked withdrawn.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
