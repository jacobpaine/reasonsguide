import type { PracticeStory } from "@/domain/types";

/**
 * Structural-reasoning stories pairing part–whole and dialectical reasoning.
 * Part–whole targets show the healthy form — the reasoner checks that the
 * property actually survives the trip between parts and whole — and
 * dialectical targets show an objection stated fairly and answered.
 */

export const structureStories: readonly PracticeStory[] = [
  {
    id: "story-barge-marks",
    title: "The Weight Check",
    difficulty: "intermediate",
    includedLabels: ["part-whole"],
    sentences: [
      {
        id: "pw-1",
        text: "Dani ran props for a touring production and had one standing rule about freight elevators: check the weight before you load anything, because the elevator does not care about your deadline.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pw-2",
        text: "Each road case came in just under thirty pounds on her gear scale, but load is a property that accumulates part by part without exception — sixteen cases would push the freight deck to four hundred and eighty pounds, past the four-hundred-pound rated limit, however manageable each one had felt when she moved it alone.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "pw-2-b",
        explanationOptions: [
          {
            id: "pw-2-a",
            text: "It applies the freight elevator's manufacturer rating as a rule, from which the conclusion about exceeding the limit follows of necessity.",
          },
          {
            id: "pw-2-b",
            text: "It carries a property from parts to whole — each case's weight accumulating into the total load — after noting that load is the kind of thing that actually adds up, however light each piece feels on its own.",
          },
          {
            id: "pw-2-c",
            text: "It meets Garrett's objection that posted limits are guidelines rather than engineering facts and rebuts it with the gear scale's numbers.",
          },
        ],
      },
      {
        id: "pw-3",
        text: "Garrett, the production manager, had run dozens of tours without a single incident and held the view that weight limit placards were a form of institutional pessimism.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pw-4",
        text: "Dani split the load across two elevator runs instead — eight cases on the first trip and eight on the second — reasoning that load divides as faithfully as it accumulates: each run would land at two hundred and forty pounds, well inside the rated limit, with the gear scale confirming every case before either call.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "pw-4-c",
        explanationOptions: [
          {
            id: "pw-4-a",
            text: "It weighs the inconvenience of a second elevator run against the risk of overloading the deck and arrives at the split as the better balance of the two concerns.",
          },
          {
            id: "pw-4-b",
            text: "It places the two half-loads in the category of under-limit deliveries and draws their deck safety from what holds of that category.",
          },
          {
            id: "pw-4-c",
            text: "It runs the inference from whole to parts — an even split of a known total — checking first that load divides along with the cargo as reliably as it accumulated, and confirming each run lands inside the limit.",
          },
        ],
      },
      {
        id: "pw-5",
        text: "Garrett noted that this would cost them twelve minutes of load-in time and raised the concern at a volume audible from the stage.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pw-6",
        text: "Both runs arrived clean, every case landed undamaged, and the freight elevator did not develop an opinion about Garrett.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-organ-question",
    title: "The Format Proposal",
    difficulty: "intermediate",
    includedLabels: ["dialectical"],
    sentences: [
      {
        id: "dl-1",
        text: "The Millbrook comedy collective met the first Tuesday of every month in a bar whose back room had become, over four years, somewhat too small for the attendance it was generating.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dl-2",
        text: "Marcus wanted to pitch a quarterly showcase at a proper venue, but he took the coordinator's objection in full — that a venue with a door charge would undercut the 'free and casual' reputation the collective had spent years building — and revised the proposal before the room had settled into opposition: the open mic would stay free in the back room, while a quarterly showcase ran separately at five dollars a door in the larger space, a structure the coordinator herself conceded wouldn't alienate the regulars.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dl-2-a",
        explanationOptions: [
          {
            id: "dl-2-a",
            text: "A position is refined under pressure: the strongest objection is stated fully and answered with an amendment — the hybrid model — that even the objector accepts.",
          },
          {
            id: "dl-2-b",
            text: "It reasons that because a single quarterly showcase is manageable as a standalone event, a whole series of them must be manageable for the collective — an inference from one instance to all.",
          },
          {
            id: "dl-2-c",
            text: "It gathers several independent considerations — the door fee, the collective's reputation, the larger venue — and weighs them together toward a single conclusion.",
          },
        ],
      },
      {
        id: "dl-3",
        text: "The treasurer clicked her pen, which in that room was a recognized form of artillery.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dl-4",
        text: "To the harder question — whether a collective that couldn't reliably fill its current room had any business planning for a larger one — Marcus gave ground honestly, moving that a three-month attendance benchmark be hit first, with the showcase budgeted only after that threshold closed; the treasurer, finding no complaint remaining in her hands, seconded the motion.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dl-4-c",
        explanationOptions: [
          {
            id: "dl-4-a",
            text: "It applies the collective's standing rule that attendance must precede expansion, from which the benchmark-first conclusion follows as a matter of necessity.",
          },
          {
            id: "dl-4-b",
            text: "It infers that because the current room, one part of the collective's operation, isn't consistently full, the whole organization is not ready for larger commitments.",
          },
          {
            id: "dl-4-c",
            text: "The objection is granted at full strength and the proposal revised to absorb it — showcase only after the benchmark closes — which is how the position wins assent from its own critic.",
          },
        ],
      },
      {
        id: "dl-5",
        text: "The motion passed without a hand raised against it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dl-6",
        text: "The benchmark closed in eleven weeks, and the showcase sold out its first two nights.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-founders-ladle",
    title: "The Batch Check",
    difficulty: "intermediate",
    includedLabels: ["part-whole"],
    sentences: [
      {
        id: "ph-1",
        text: "Tomás had won the Riverdale Chili Championship twice and treated both victories as evidence-based conclusions rather than strokes of luck.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ph-2",
        text: "He stirred the whole pot for a full three minutes before pulling any sample, because only a thoroughly circulated batch allows one spoonful to speak for the other twelve quarts — the tasting spoon came back with exactly the right heat and depth, so every bowl at the cookoff would too, that single taste representing the pot completely.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ph-2-c",
        explanationOptions: [
          {
            id: "ph-2-a",
            text: "It anticipates the objection that one spoonful proves nothing about twelve quarts and rebuts it, strengthening the claim about the whole pot.",
          },
          {
            id: "ph-2-b",
            text: "It applies the three-minute stirring protocol, from which the conclusion about flavor uniformity follows as a matter of procedure.",
          },
          {
            id: "ph-2-c",
            text: "It reads the whole from a part — one spoon's reading standing for twelve quarts — but only after stirring has made the batch uniform, so the tasting genuinely carries from the sample to every bowl.",
          },
        ],
      },
      {
        id: "ph-3",
        text: "His neighbors had begun staking out spots near the serving table an hour before judging opened, which Tomás found both gratifying and slightly threatening.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ph-4",
        text: "He packed the chili into four sealed containers and loaded them onto the handcart by weight — lightest to heaviest — sixty-two pounds combined, since the foldable cart's frame answers to total load and nothing else about the containers, and sixty-two sat well inside its ninety-pound rated capacity.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "ph-4-a",
        explanationOptions: [
          {
            id: "ph-4-a",
            text: "Each container's weight is added into a property of the whole load — the total on the cart frame — with the explicit check that weight is what the frame answers to and that it sums.",
          },
          {
            id: "ph-4-b",
            text: "It answers a neighbor's concern about overloading the cart by conceding the worry and reducing the number of containers.",
          },
          {
            id: "ph-4-c",
            text: "It places the four containers in the category of under-limit loads and draws the cart's safety from what holds of that category.",
          },
        ],
      },
      {
        id: "ph-5",
        text: "Getting the loaded handcart down the front steps required a plan and a neighbor.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ph-6",
        text: "The chili was still hot when judging opened, and the third trophy found a home on the shelf next to the other two.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-bridge-hearing",
    title: "The Pool Meeting",
    difficulty: "intermediate",
    includedLabels: ["dialectical"],
    sentences: [
      {
        id: "dh-1",
        text: "The Pinehurst HOA called an emergency maintenance meeting for a Wednesday evening, which is when people arrive already annoyed, and the facilities manager came with a slideshow and what she hoped was a better plan.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dh-2",
        text: "The loudest objection came from the swim instructor whose summer camp used the pool every weekday morning, and the facilities manager didn't try to talk around it: she conceded the lost sessions outright and sketched a revised plan before the room had time to commit to outrage — the pool closed for the pipe work, but the outdoor wading area would open early and the HOA would subsidize a shuttle to Lakeview's public pool, an arrangement the swim instructor reluctantly admitted gave her camp more pool time than she currently had.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dh-2-b",
        explanationOptions: [
          {
            id: "dh-2-a",
            text: "It argues that because one section of the community's water facilities, the wading area, remains open, the full aquatics program can continue through the repair period.",
          },
          {
            id: "dh-2-b",
            text: "The proposal survives by changing: the sharpest objection is conceded as real and the plan amended — shuttle, early wading area access, subsidized sessions — so the criticism is answered rather than dismissed.",
          },
          {
            id: "dh-2-c",
            text: "It lays the independent reasons for closing the pool alongside the reasons for keeping it accessible and lets the balance of the bundle settle the outcome.",
          },
        ],
      },
      {
        id: "dh-3",
        text: "A man near the back asked when the wading area had last passed its own safety inspection, and got a date that produced a small silence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dh-4",
        text: "That challenge she also declined to dismiss; she agreed the wading area was overdue for its annual check, promised to have the inspector out before the shuttle arrangement began, and committed publicly to delay the whole plan if anything failed — the man gave a short nod, which in that room counted as a formal endorsement.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dh-4-c",
        explanationOptions: [
          {
            id: "dh-4-a",
            text: "It applies the HOA's standard re-inspection protocol, from which the pre-launch check follows as a matter of procedural necessity.",
          },
          {
            id: "dh-4-b",
            text: "It infers the condition of the full aquatics facility from the state of the wading area, carrying a safety judgment from one section to the whole.",
          },
          {
            id: "dh-4-c",
            text: "A challenge to her evidence is taken at full strength and answered with a commitment — inspection first, delay if it fails — holding the position open to correction rather than defending it flat.",
          },
        ],
      },
      {
        id: "dh-5",
        text: "The inspection cleared the wading area and noted one cracked tile near the steps.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dh-6",
        text: "The swim camp ran all summer on the revised schedule, and the shuttle riders were so reliably on time that Lakeview pool management sent a note asking what the HOA was doing right.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-harvest-anthem",
    title: "The Party Debrief",
    difficulty: "intermediate",
    includedLabels: ["part-whole", "dialectical"],
    sentences: [
      {
        id: "pd-1",
        text: "After the Thornwood dungeon went sideways at exactly the moment a dungeon going sideways is most costly, the party convened at the nearest tavern to conduct what they were generously calling a post-session debrief.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pd-2",
        text: "Renn had everyone's individual record logged — the fighter's timing, the mage's targeting, the rogue's positioning, all excellent — but she wouldn't call the formation ready until she had drilled every handoff: fighter covering the mage's repositioning, rogue picking up the healer's flank gap, mage coordinating the retreat signal — because a party is its members and the connections between them, and three excellent individuals with shaky transitions make a formation that fails exactly when it cannot afford to.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "pd-2-a",
        explanationOptions: [
          {
            id: "pd-2-a",
            text: "The whole's soundness is built from the parts plus the connections between them — each member's skills AND the handoffs both tested — which is what allows 'each individual excellent' to become 'the formation solid.'",
          },
          {
            id: "pd-2-b",
            text: "It addresses the party's objections to the formation review and revises the practice plan until everyone agrees.",
          },
          {
            id: "pd-2-c",
            text: "It applies the rule that no formation is ready until every transition has been drilled, from which the conclusion about the party follows as a matter of procedure.",
          },
        ],
      },
      {
        id: "pd-3",
        text: "The rogue suggested, not unkindly, that this analysis would have been more useful before Thornwood.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pd-4",
        text: "The healer put the complaint plainly — the current rotation asked her to cover the mage's rear and the fighter's recovery window in the same three-second gap, which was not physically possible without cloning, a skill she had not yet unlocked — and Renn, hearing it as a real constraint and not just a loud one, rewrote the rotation so the rogue held the mage's flank while the healer did the one job the plan actually needed her for, at which the healer declared herself satisfied on behalf of healers everywhere.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "pd-4-b",
        explanationOptions: [
          {
            id: "pd-4-a",
            text: "It reasons from two overlapping assignments, a small part of the formation, to the failure of the whole rotation.",
          },
          {
            id: "pd-4-b",
            text: "The objection is treated as a genuine constraint, confirmed as real, and the formation revised — redistributed roles — until the objector herself approves: the plan is improved by answering its critic.",
          },
          {
            id: "pd-4-c",
            text: "It weighs the independent reasons for keeping the original rotation against the reasons for changing it and reads the decision off their balance.",
          },
        ],
      },
      {
        id: "pd-5",
        text: "The next dungeon was scheduled for the following week, which everyone described as 'plenty of time' in the tone of voice that generally precedes not having enough time.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "pd-6",
        text: "It went considerably better, and the only thing that cracked was the dungeon master's carefully maintained air of menace.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-slipway-question",
    title: "The Architecture Review",
    difficulty: "intermediate",
    includedLabels: ["dialectical", "part-whole"],
    sentences: [
      {
        id: "dp-1",
        text: "Maya had proposed building the new analytics module as a monorepo, which in a team architecture review is the kind of suggestion that produces a very particular kind of silence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dp-2",
        text: "Eli brought the one objection worth raising — a shared build context would produce circular dependency errors whenever any team rebuilt a single package — and Maya, instead of pulling rank, revised the proposal that evening: a monorepo for shared utilities, isolated pipeline configurations per package, so the circular imports Eli had flagged had nowhere to form, and the architecture that emerged from the objection was better than the one she had walked in with.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "dp-2-c",
        explanationOptions: [
          {
            id: "dp-2-a",
            text: "It argues that because each individual package in the repo compiles cleanly on its own, the monorepo build as a whole must be free of circular dependency errors.",
          },
          {
            id: "dp-2-b",
            text: "It places the monorepo in the category of tightly coupled architectures and draws the circular dependency risk from what is generally true of that category.",
          },
          {
            id: "dp-2-c",
            text: "The design is improved by its critic: the sharpest technical objection is accepted and the proposal revised — isolated pipelines — so the problem Eli raised is answered in the architecture itself.",
          },
        ],
      },
      {
        id: "dp-3",
        text: "Sprint planning fell, as it always does, to whoever had complained about sprint planning most recently.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dp-4",
        text: "Eli scoped the build ticket by ticket — twelve UI components at two story points each, the shared utility modules, the pipeline scripts counted line by line — and since story points accumulate like any other tally, the total had to be confirmed before he promised anyone a date; forty-one points, inside the team's forty-five-point sprint capacity, and only then did he write it somewhere official.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "dp-4-a",
        explanationOptions: [
          {
            id: "dp-4-a",
            text: "Each ticket's story points are added into a property of the whole sprint — the total count — with the explicit check that points accumulate like any tally, and the sum confirmed before any commitment is made.",
          },
          {
            id: "dp-4-b",
            text: "It addresses Maya's concern about missing the deadline by conceding the risk and proposing to renegotiate the sprint scope.",
          },
          {
            id: "dp-4-c",
            text: "It applies the team's sprint capacity rule, from which the forty-one-point conclusion follows as a matter of procedural necessity.",
          },
        ],
      },
      {
        id: "dp-5",
        text: "Maya reviewed the estimate twice, revised nothing, and wrote 'LGTM,' which was as warm as she got.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "dp-6",
        text: "The dashboard shipped at the end of the second sprint with no circular imports and no post-mortem.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-strongroom",
    title: "The Archive Transfer",
    difficulty: "intermediate",
    includedLabels: ["part-whole", "dialectical"],
    sentences: [
      {
        id: "px-1",
        text: "The Northfield Podcast Network had been meaning to migrate off their aging shared server for three years, and the new hosting plan was finally live and no one had any excuses left.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "px-2",
        text: "Jess measured each show's folder in the file manager — nine of them, the largest at ninety gigabytes — because the hosting plan was allocated eight hundred gigabytes in total and would count their sum, not their individual sizes; the nine folders together came to five hundred and eighty gigabytes, and only then did she queue the transfer.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "px-2-b",
        explanationOptions: [
          {
            id: "px-2-a",
            text: "It anticipates the upload team's concern about exceeding the plan limit and answers it with the file manager's numbers.",
          },
          {
            id: "px-2-b",
            text: "The hosting plan answers to the total, so each folder's size carries into the whole by addition — and the sum is confirmed before a single file transfers.",
          },
          {
            id: "px-2-c",
            text: "It places the folders in the category of sub-limit assets and draws the plan's safety from what holds of that category.",
          },
        ],
      },
      {
        id: "px-3",
        text: "The network's founder arrived mid-morning to observe, which mostly meant refreshing the dashboard and asking 'how's it going' at intervals calibrated to be more disruptive than helpful.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "px-4",
        text: "His objection had standing — split the back-catalog episodes from the current season and you separate a continuous run that subscribers navigate as a single feed — and Jess, granting every word of it, reorganized the folder structure on the spot: the full episode catalog to stay together in a single dedicated directory, and only the production assets and outtakes, which no subscriber ever browses by date, to take the overflow folder; the founder looked at the new structure, found nothing to argue with, and went back to watching the progress bar.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "px-4-c",
        explanationOptions: [
          {
            id: "px-4-a",
            text: "It reasons that because each episode file is individually intact, the feed as a whole will remain navigable regardless of how the folders are divided.",
          },
          {
            id: "px-4-b",
            text: "It weighs several independent storage considerations on both sides and lets the balance of the whole bundle settle the folder structure.",
          },
          {
            id: "px-4-c",
            text: "A real objection is given its full weight and the plan revised to satisfy it — the catalog kept together in one directory — so what emerges is the original plan made better by its critic.",
          },
        ],
      },
      {
        id: "px-5",
        text: "The transfer ran overnight.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "px-6",
        text: "Completeness was the status the catalog had to earn, and it is a property the whole borrows from its parts one file at a time, so Jess ran her manifest check against the original server — every episode answering, pilot to the most recent release — and only when the last checksum matched did she flip the DNS records.",
        labels: ["part-whole"],
        primaryLabel: "part-whole",
        isTarget: true,
        correctExplanationId: "px-6-a",
        explanationOptions: [
          {
            id: "px-6-a",
            text: "The whole's property — being complete — is nothing beyond each file being present and matched, so it can only be established the one way available: episode by checked episode.",
          },
          {
            id: "px-6-b",
            text: "It answers the founder's remaining concern by conceding the point and running a verification before flipping the DNS records.",
          },
          {
            id: "px-6-c",
            text: "It applies the definition of a complete podcast archive and derives the transfer status from that definition alone, as a rule.",
          },
        ],
      },
      {
        id: "px-7",
        text: "She locked the old server's permissions and let the founder know the job was done before he could refresh the dashboard again.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
