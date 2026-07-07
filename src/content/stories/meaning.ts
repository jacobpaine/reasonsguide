import type { PracticeStory } from "@/domain/types";

/**
 * Intermediate stories for the structural "meaning" labels: definitional,
 * conceptual, and classification reasoning. Definitional targets settle a
 * question by making a word precise; conceptual targets unfold what an idea
 * contains; classification targets place a case in a category and inherit
 * its traits. Distractors misapply the neighboring labels of this set.
 */

export const meaningStories: readonly PracticeStory[] = [
  {
    id: "story-barrow-question",
    title: "The Barrow Question",
    difficulty: "intermediate",
    includedLabels: ["definitional"],
    sentences: [
      {
        id: "df-1",
        text: "The market clerk came round on quarter-day with the stall ledger under his arm and the bylaw of 1861 in his head.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "df-2",
        text: "The bylaw taxed 'standing stalls,' and a standing stall, by its own third clause, was one left in place overnight; Meg's pie barrow wheeled home behind her every evening, so the tax could not touch it.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "df-2-b",
        explanationOptions: [
          {
            id: "df-2-a",
            text: "It unfolds what the very idea of a stall contains — shelter, wares, a seller waiting — quite apart from anything the bylaw happens to say.",
          },
          {
            id: "df-2-b",
            text: "It settles the tax question by making the bylaw's term precise — 'standing' means left in place overnight — and testing the barrow against that requirement, which it fails.",
          },
          {
            id: "df-2-c",
            text: "It sorts the barrow into the category of wheeled carts and lets it inherit the exemptions that carts as a class have always enjoyed.",
          },
        ],
      },
      {
        id: "df-3",
        text: "The clerk chalked a note, and Meg sold him a pie at the friendly price, which was the same as the other price.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "df-4",
        text: "Her awning was another matter, having been nailed to Wetherby's wall since spring.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "df-5",
        text: "But 'structure,' where the bylaw used it, meant work fixed to the market ground itself — the fourth clause said as much — and a canvas hooked to a private wall stood on no market ground at all.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "df-5-a",
        explanationOptions: [
          {
            id: "df-5-a",
            text: "It resolves the awning question by pinning down what the bylaw's word 'structure' requires — fixed to market ground — and finding the canvas outside that meaning.",
          },
          {
            id: "df-5-b",
            text: "It works out what the idea of a structure includes in itself — permanence, enclosure, shelter — with no reliance on the fourth clause's wording.",
          },
          {
            id: "df-5-c",
            text: "It files the awning among canvas goods, a class the market has always treated leniently, and reads the lenience off from the class.",
          },
        ],
      },
      {
        id: "df-6",
        text: "Wetherby, who had never been asked about his wall, began charging Meg a shilling a month for the honor.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-borrowed-dinghy",
    title: "The Borrowed Dinghy",
    difficulty: "intermediate",
    includedLabels: ["conceptual"],
    sentences: [
      {
        id: "cw-1",
        text: "Aldous lent his dinghy to Pryce for the herring weeks, as he had done for nine autumns without ceremony.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-2",
        text: "It came back in November painted a proud municipal green, with new letters on the transom spelling somebody else's idea of her name.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-3",
        text: "A loan, whatever its length, is use with ownership left at home; the right to alter a thing travels with owning it, not with borrowing it, and Pryce had borrowed.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "cw-3-c",
        explanationOptions: [
          {
            id: "cw-3-a",
            text: "It settles the matter by making the word 'loan' precise in the dictionary's sense and asking whether nine autumns of borrowing still meets the entry.",
          },
          {
            id: "cw-3-b",
            text: "It places the dinghy among borrowed goods generally and lets her inherit the traits that class of things is known to carry.",
          },
          {
            id: "cw-3-c",
            text: "It works out what the idea of lending contains — use passes across, ownership and the rights that ride on it stay behind — and draws the verdict on the paint from the concept itself.",
          },
        ],
      },
      {
        id: "cw-4",
        text: "Pryce, confronted on the quay, said he was sorry Aldous felt that way about the green.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-5",
        text: "But sorrow at another man's feelings is not apology; an apology owns a fault, and this one had been built to own nothing.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "cw-5-a",
        explanationOptions: [
          {
            id: "cw-5-a",
            text: "It unfolds what the concept of apology requires — acknowledging a fault of one's own — and shows that Pryce's remark, aimed only at Aldous's feelings, lacks that element.",
          },
          {
            id: "cw-5-b",
            text: "It looks up the strict sense of the word 'sorry' and rules Pryce's usage out on the wording alone.",
          },
          {
            id: "cw-5-c",
            text: "It sorts the remark into the familiar category of quayside excuses and reads its insincerity off from what that category is like.",
          },
        ],
      },
      {
        id: "cw-6",
        text: "The paint, everyone agreed, was at least good paint.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cw-7",
        text: "By spring the two men were mending the same net again, though the dinghy kept her green and nobody said her new name aloud.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-curates-cabinet",
    title: "The Curate's Cabinet",
    difficulty: "intermediate",
    includedLabels: ["classification"],
    sentences: [
      {
        id: "cx-1",
        text: "The curate kept his natural history in a glazed cabinet and his sermons, the parish suspected, somewhere less orderly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cx-2",
        text: "The plant the sexton brought him had a square stem and leaves set in facing pairs, which put it among the mints — and the mints carry their scent in the leaf and no sting anywhere, so the sexton could stop holding it like a wasp.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "cx-2-a",
        explanationOptions: [
          {
            id: "cx-2-a",
            text: "The square stem and paired leaves place the plant in the mint family, and the reassurance about stings is inherited from what mints as a group are like.",
          },
          {
            id: "cx-2-b",
            text: "It fixes what the word 'mint' strictly requires and rules the specimen in on the definition alone, stem or no stem.",
          },
          {
            id: "cx-2-c",
            text: "It unfolds what the idea of a sting involves — defense, cost, deterrence — and reasons that this plant would have no need of one.",
          },
        ],
      },
      {
        id: "cx-3",
        text: "The sexton, unconvinced, held it like a wasp anyway.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cx-4",
        text: "Next came a matted pellet from beneath the church tower, which the curate teased apart on a sheet of Tuesday's newspaper.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "cx-5",
        text: "The little skulls inside had the rootless, ever-growing teeth of voles; voles are beasts of the open grass, so the owl above the belfry was hunting the glebe meadow and leaving the granary mice to their comfortable sins.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "cx-5-b",
        explanationOptions: [
          {
            id: "cx-5-a",
            text: "It works out what the concept of hunting entails for any owl — territory, effort, return — and derives the meadow from that structure alone.",
          },
          {
            id: "cx-5-b",
            text: "The teeth place the skulls among the voles, and the owl's hunting ground follows from what that category is known to be — dwellers of open grass.",
          },
          {
            id: "cx-5-c",
            text: "It settles the question by making the word 'vermin' precise enough to decide which of the tower's mice fall under it.",
          },
        ],
      },
      {
        id: "cx-6",
        text: "He labeled the card in his small hand and thought, not for the first time, that the tower kept better accounts than the vestry.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-green-track",
    title: "The Green Track",
    difficulty: "intermediate",
    includedLabels: ["definitional", "conceptual"],
    sentences: [
      {
        id: "dw-1",
        text: "The dispute over the green track came to the archive the way weather comes to a harbor, and Miss Voss fetched down the deed of 1834.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-2",
        text: "The deed granted passage 'by the lane,' and a lane, in the deed's own recital, was a way joining highway to highway; the green track died in a sheep fold, joined nothing to nothing, and so lay outside the grant.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "dw-2-c",
        explanationOptions: [
          {
            id: "dw-2-a",
            text: "The track is sorted with the county's other green ways and inherits the customary privileges that class of ways enjoys.",
          },
          {
            id: "dw-2-b",
            text: "It unfolds what the bare idea of passage involves — movement, direction, arrival — without leaning on the deed's wording at all.",
          },
          {
            id: "dw-2-c",
            text: "The grant's reach is settled by making the deed's word 'lane' precise — a way joining highway to highway — and showing that a track ending in a sheep fold fails the test.",
          },
        ],
      },
      {
        id: "dw-3",
        text: "Havers, who farmed the fold, looked pleased for the first time since haytime.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-4",
        text: "But the walkers' society had a second string, older than the deed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-5",
        text: "A custom, unlike a grant, is not given and so cannot be ungiven; what arises from long usage carries its own title, and no deed of 1834 could withdraw what no deed had ever conferred.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "dw-5-a",
        explanationOptions: [
          {
            id: "dw-5-a",
            text: "It reasons from the structure of the concept itself: a custom's authority comes from usage, not from any grant, so a deed that never created the right cannot revoke it.",
          },
          {
            id: "dw-5-b",
            text: "It wins the point by making the deed's word 'grant' precise and testing forty years of walking against the clause.",
          },
          {
            id: "dw-5-c",
            text: "It files the track among customary ways and simply reads off the privileges that class is known to carry.",
          },
        ],
      },
      {
        id: "dw-6",
        text: "Miss Voss copied both arguments into the register in the same gray ink, showing no favorites.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dw-7",
        text: "The magistrates, when it reached them, walked the track themselves and were seen to picnic.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-journeymans-chair",
    title: "The Journeyman's Chair",
    difficulty: "intermediate",
    includedLabels: ["conceptual", "classification"],
    sentences: [
      {
        id: "wx-1",
        text: "Tam's chair stood before the guild wardens on a trestle, smelling of beeswax and ambition.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wx-2",
        text: "The wardens turned it over first for the sorting: its joints were cut and pegged, nothing steamed or turned, which made it joiner's work — and joiner's work answered to the carpenters' charter, four years bound and a fifth on wages.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "wx-2-b",
        explanationOptions: [
          {
            id: "wx-2-a",
            text: "The case turns on making the charter's word 'chair' precise and asking whether this object satisfies the clause.",
          },
          {
            id: "wx-2-b",
            text: "The cut-and-pegged joints place the chair in the category of joinery, and the terms that follow — whose charter, what years of service — are inherited from that category.",
          },
          {
            id: "wx-2-c",
            text: "It unfolds what the idea of craftsmanship itself entails — patience, method, care — apart from any guild's way of sorting work.",
          },
        ],
      },
      {
        id: "wx-3",
        text: "Tam had served his four years and the fifth besides, so the wardens moved on to the harder question.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wx-4",
        text: "Mastery was that question, and mastery is more than the sum of clean joints; the idea holds judgment inside it — knowing when to stop, what the wood will forgive — so a flawless chair made by luck would not amount to it.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "wx-4-c",
        explanationOptions: [
          {
            id: "wx-4-a",
            text: "It sorts Tam into the class of masters and credits him with the traits that masters as a group are known for.",
          },
          {
            id: "wx-4-b",
            text: "It settles the matter by making the guild-book's term 'masterpiece' precise and measuring the chair against the written clause.",
          },
          {
            id: "wx-4-c",
            text: "It works out what the concept of mastery contains — judgment as well as execution — and draws from that structure why a flawless chair made by luck would still fall short.",
          },
        ],
      },
      {
        id: "wx-5",
        text: "So they questioned him an hour on timber he had not used and mistakes he had not made.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "wx-6",
        text: "The chair went to the guild hall, and Tam went to supper a master, paying for everyone, as the idea of mastery apparently also required.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-inner-mooring",
    title: "The Inner Mooring",
    difficulty: "intermediate",
    includedLabels: ["classification", "definitional"],
    sentences: [
      {
        id: "xd-1",
        text: "The harbormaster settled arguments in the order the tide allowed, which that morning meant the stranger's boat first.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "xd-2",
        text: "Her mizzenmast stood forward of the rudder post, which made her a ketch, and ketches — handy under shortened sail, slow to pay off in a crosswind — take the inner mooring as a matter of course.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "xd-2-a",
        explanationOptions: [
          {
            id: "xd-2-a",
            text: "The mast's position places the boat in the ketch category, and the berth follows from the traits ketches share — handiness under shortened sail in a crosswind.",
          },
          {
            id: "xd-2-b",
            text: "It settles the berth by making the harbor ordinance's word 'mooring' precise and testing the inner berth against the clause.",
          },
          {
            id: "xd-2-c",
            text: "It reasons from what the idea of seaworthiness itself includes — balance, handiness, forgiveness — apart from any classing of rigs.",
          },
        ],
      },
      {
        id: "xd-3",
        text: "Her skipper, a Yarrow oysterman, objected less to the berth than to the bill that came with it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "xd-4",
        text: "Dues, the notice board said plainly enough, fell on all vessels trading within the harbor.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "xd-5",
        text: "Trading, though, as the ordinance used the word, meant selling over the side or landing goods for sale; the oysterman was carrying his own catch to his own beds, no coin crossing the quay, and so stood outside the word entirely.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "xd-5-b",
        explanationOptions: [
          {
            id: "xd-5-a",
            text: "The boat is sorted among working vessels, and the liabilities that class of craft always carries are read off onto her.",
          },
          {
            id: "xd-5-b",
            text: "The dues question is settled by making the ordinance's term 'trading' precise — sale over the side or at the quay — and showing that carrying one's own catch to one's own beds does not meet it.",
          },
          {
            id: "xd-5-c",
            text: "It unfolds what the bare idea of trade involves — exchange, gain, risk taken for return — with no reference to the ordinance's wording.",
          },
        ],
      },
      {
        id: "xd-6",
        text: "The harbormaster scratched the charge from his book with the particular sigh he kept for lost revenue.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-autumn-show",
    title: "The Autumn Show",
    difficulty: "intermediate",
    includedLabels: ["definitional", "classification", "conceptual"],
    sentences: [
      {
        id: "dd-1",
        text: "The autumn show ran on trestle tables and grievances, both set up the night before.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dd-2",
        text: "The schedule admitted only 'homegrown' fruit, and homegrown, by the committee's printed note, meant raised from first bud on the exhibitor's own ground; Pardoe's quinces had spent June in his sister's orchard, and that settled their entry before a judge ever saw them.",
        labels: ["definitional"],
        primaryLabel: "definitional",
        isTarget: true,
        correctExplanationId: "dd-2-c",
        explanationOptions: [
          {
            id: "dd-2-a",
            text: "The quinces are sorted into the orchard-fruit class and take on the standards that class of entries is known to meet.",
          },
          {
            id: "dd-2-b",
            text: "It unfolds what the idea of growing something truly involves — care, attention, a whole season's keeping — quite apart from the printed note.",
          },
          {
            id: "dd-2-c",
            text: "Eligibility is settled by making the schedule's word 'homegrown' precise — first bud onward, on the exhibitor's own ground — and finding the quinces' June abroad puts them short of it.",
          },
        ],
      },
      {
        id: "dd-3",
        text: "Pardoe took it as well as he took most things, which was audibly.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dd-4",
        text: "Mrs. Hale's dark fruit raised a different question until the judge cut one open: the stone clung to the flesh and the skin wore a gray bloom, which made them damsons, and damsons show with the hedge fruit, two tables down.",
        labels: ["classification"],
        primaryLabel: "classification",
        isTarget: true,
        correctExplanationId: "dd-4-a",
        explanationOptions: [
          {
            id: "dd-4-a",
            text: "The clinging stone and bloomed skin place the fruit among damsons, and the table assignment is inherited from where that category shows.",
          },
          {
            id: "dd-4-b",
            text: "It fixes the precise meaning of the schedule's word 'plum' and rules Mrs. Hale's fruit out on the wording alone.",
          },
          {
            id: "dd-4-c",
            text: "It works out what the notion of a hedge itself includes and derives the fruit's proper table from that idea.",
          },
        ],
      },
      {
        id: "dd-5",
        text: "Two tables down, as it happened, the competition was thinner.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dd-6",
        text: "The judging itself went on behind numbered cards, since fairness is not a warm feeling toward all comers but the same test blind to every name — and a test that knows whose jam it tastes has already stopped being one.",
        labels: ["conceptual"],
        primaryLabel: "conceptual",
        isTarget: true,
        correctExplanationId: "dd-6-b",
        explanationOptions: [
          {
            id: "dd-6-a",
            text: "It settles the procedure by making the schedule's term 'judge' precise and reading the numbered cards out of the clause.",
          },
          {
            id: "dd-6-b",
            text: "It unfolds what the concept of fairness requires — one test, blind to identity — and derives the numbered cards from that structure.",
          },
          {
            id: "dd-6-c",
            text: "It sorts the show into the class of blind competitions and borrows the practices common to that class.",
          },
        ],
      },
      {
        id: "dd-7",
        text: "Mrs. Hale took the hedge-fruit rosette, and Pardoe, unentered and unbowed, ate a prizewinning quince where the committee could see him.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
