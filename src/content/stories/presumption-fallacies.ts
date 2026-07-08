import type { PracticeStory } from "@/domain/types";

/**
 * Presumption-fallacy stories: begging the question, loaded question,
 * false dilemma, special pleading, moving the goalposts — with healthy
 * dialectical engagement appearing inside two of them as the contrast.
 */

export const presumptionFallacyStories: readonly PracticeStory[] = [
  {
    id: "story-guild-admission",
    title: "The Tryout",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "loaded-question", "false-dilemma"],
    sentences: [
      {
        id: "ps1-1",
        text: "Lena's tryout for the city trivia league happened in a corner booth with the team captain and two veterans, a printed set of sample questions folded between them.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps1-2",
        text: "The captain said she wasn't quite the right fit — outside players never had the right instincts, he explained, and the proof was that her instincts hadn't been forged inside a league team.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps1-2-a",
        explanationOptions: [
          {
            id: "ps1-2-a",
            text: "The premise — outside players lack the right instincts — simply restates the conclusion it's meant to prove; her sample-question scores are never actually examined.",
          },
          {
            id: "ps1-2-b",
            text: "He offers Lena only two paths when a third plainly exists.",
          },
          {
            id: "ps1-2-c",
            text: "He raises the standard after she has already met the sample-question requirement.",
          },
        ],
      },
      {
        id: "ps1-3",
        text: "One of the veterans mentioned, quietly, that Lena had won a regional science category three years running at an open tournament.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps1-4",
        text: "The other veteran leaned forward with a friendly tone: 'Can you walk us through when you realized competitive pressure wasn't really your thing?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps1-4-c",
        explanationOptions: [
          {
            id: "ps1-4-b",
            text: "The veteran's question assumes its own conclusion as a premise and argues in a circle.",
          },
          {
            id: "ps1-4-c",
            text: "The question smuggles in 'realized competitive pressure wasn't your thing' as already settled — any direct answer, including a denial, accepts that the realization happened.",
          },
          {
            id: "ps1-4-d",
            text: "The veteran exempts the team's own high-pressure environment from the scrutiny he applies to Lena's track record.",
          },
        ],
      },
      {
        id: "ps1-5",
        text: "The captain wrapped it up cleanly: she could take the alternate-round reserve slot starting next month, or they'd have to pass — those were the options, and the spot wouldn't stay open.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps1-5-a",
        explanationOptions: [
          {
            id: "ps1-5-a",
            text: "Two options are presented as the only ones while a full roster spot, a trial season, or a follow-up match are plain alternatives that go unmentioned.",
          },
          {
            id: "ps1-5-b",
            text: "The captain's offer quietly assumes she was already not good enough, which was the very question the tryout was meant to settle.",
          },
          {
            id: "ps1-5-c",
            text: "He shifts the requirement from trivia scores to competitive instincts, now that the first has been addressed.",
          },
        ],
      },
      {
        id: "ps1-6",
        text: "She joined a different league, and her team beat the captain's squad by eighteen points at the district finals five months later.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-prize-marrow",
    title: "The Cook-Off",
    difficulty: "intermediate",
    includedLabels: ["special-pleading", "moving-goalposts", "dialectical"],
    sentences: [
      {
        id: "ps2-1",
        text: "The office chili cook-off had one rule: scratch-made, no commercial bases, judged blind — except that the team lead had always competed and also helped run the judging, a tension the sign-up sheet had never quite resolved.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps2-2",
        text: "When someone mentioned that a seasoning packet was still sitting in the recycling bin next to the team lead's entry, he clarified that the scratch rule applied to employee submissions — his own participation was managerial in nature and ran on a different track.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps2-2-a",
        explanationOptions: [
          {
            id: "ps2-2-a",
            text: "The scratch rule applied to every other entry is quietly waived for his own, with 'managerial in nature' standing in for any exception the rules actually name.",
          },
          {
            id: "ps2-2-b",
            text: "He raises the bar for the other entries after they have already been scored.",
          },
          {
            id: "ps2-2-c",
            text: "He assumes management entries are by definition superior, which is the point in dispute.",
          },
        ],
      },
      {
        id: "ps2-3",
        text: "The intern's chili, entered as number four, took first place in the blind tasting by eleven points and produced a brief, respectful silence in the room.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps2-4",
        text: "Taste, the team lead explained, had never been the real criterion — presentation was what set a serious entry apart; and when the intern's presentation score came back highest as well, he decided the cook-off had always fundamentally been about recipe originality.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps2-4-c",
        explanationOptions: [
          {
            id: "ps2-4-b",
            text: "He offers the panel only two criteria to weigh when several are available.",
          },
          {
            id: "ps2-4-c",
            text: "Each standard is abandoned the moment it's met — taste, then presentation, then recipe originality — so no score she produces can ever be enough.",
          },
          {
            id: "ps2-4-d",
            text: "He exempts his own entry from the blind tasting requirement he applies to everyone else.",
          },
        ],
      },
      {
        id: "ps2-5",
        text: "The office manager took the implicit objection — that blind tastings reward shortcuts over craft — stated it more charitably than the team lead had, and answered it: the scratch rule was already designed to rule out shortcuts, which is exactly what a seasoning packet is.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "ps2-5-a",
        explanationOptions: [
          {
            id: "ps2-5-a",
            text: "The objection is given its strongest form and then answered with the actual rule — engagement that meets the point rather than dismissing it.",
          },
          {
            id: "ps2-5-b",
            text: "The office manager raises a new standard of evidence now that the original criterion has been satisfied.",
          },
          {
            id: "ps2-5-c",
            text: "The office manager assumes the scratch rule's fairness, which was the very matter in question.",
          },
        ],
      },
      {
        id: "ps2-6",
        text: "The intern kept the trophy on her desk for the rest of the year, and the team lead kept saying he'd been robbed, which everyone agreed was at least consistent.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-ferry-tithe",
    title: "The Rota",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "special-pleading"],
    sentences: [
      {
        id: "ps3-1",
        text: "The flatmate meeting had been called because the kitchen rota had reached what the group chat described as 'Code Red,' and Oliver kept appearing in the evidence.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps3-2",
        text: "Oliver's defense ran in a tidy circle: the weekday rule didn't apply to him because he'd never been held to it before, and the proof it had never applied was that he'd never followed it.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps3-2-a",
        explanationOptions: [
          {
            id: "ps3-2-a",
            text: "Each half of the argument rests on the other — the rule doesn't apply because he's never followed it, and he's never followed it because it doesn't apply; the actual flatmate agreement is never examined.",
          },
          {
            id: "ps3-2-b",
            text: "Oliver applies the kitchen rule to all flatmates but quietly suspends it for himself without an exception the agreement recognizes.",
          },
          {
            id: "ps3-2-c",
            text: "Oliver demands ever-older documentation of the rule each time the flatmates produce any evidence of it.",
          },
        ],
      },
      {
        id: "ps3-3",
        text: "The flatmate agreement, dug out from a shared folder no one had opened since move-in, turned out to be rather less ambiguous than Oliver had been hoping.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps3-4",
        text: "It also emerged that Oliver's girlfriend had been using the kitchen and generating dishes for three weeks straight without being added to the cleaning rota — a house-guest arrangement, he called it, though the agreement named no such category.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps3-4-c",
        explanationOptions: [
          {
            id: "ps3-4-b",
            text: "Oliver's defense of the arrangement assumes the arrangement is already valid, which was the question the flatmates were trying to settle.",
          },
          {
            id: "ps3-4-c",
            text: "The rota obligation applied to every other household member is suspended for his own guest, with 'house-guest arrangement' naming no category the flatmate agreement actually recognizes.",
          },
          {
            id: "ps3-4-d",
            text: "Oliver limits the flatmates to two readings of the agreement when it plainly bears several interpretations.",
          },
        ],
      },
      {
        id: "ps3-5",
        text: "The agreement was updated that evening, Oliver's girlfriend was added to the Tuesday rota, and she turned out to be considerably more thorough about it than Oliver had ever been.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-lantern-inquest",
    title: "The Group Chat",
    difficulty: "intermediate",
    includedLabels: ["loaded-question", "moving-goalposts"],
    sentences: [
      {
        id: "ps4-1",
        text: "The family debrief had been ninety messages deep in the group chat before anyone suggested a video call, which happened on a Sunday evening with four of the five trip participants and an open agenda.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps4-2",
        text: "Dad opened with what he called a simple clarifying question: 'Can someone explain to me at what point they stopped checking the campsite's cancellation policy?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps4-2-a",
        explanationOptions: [
          {
            id: "ps4-2-a",
            text: "The question assumes the policy wasn't checked — a claim no one had yet established — so 'never' sounds like a confession and any date sounds like a belated excuse.",
          },
          {
            id: "ps4-2-b",
            text: "Dad's question assumes the family's negligence as a premise and concludes it from itself.",
          },
          {
            id: "ps4-2-c",
            text: "Dad raises the standard of proof each time someone produces the evidence he's asked for.",
          },
        ],
      },
      {
        id: "ps4-3",
        text: "The oldest sibling found the booking confirmation in her inbox, timestamped three weeks before the trip, with the cancellation policy highlighted in yellow.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps4-4",
        text: "Dad wanted the original campsite website screenshot as confirmation; when that arrived, he asked whether anyone had also phoned to verify; and when the call log appeared with a reference number, he concluded that only a written confirmation from the site manager could truly settle whether the booking had been properly secured.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps4-4-c",
        explanationOptions: [
          {
            id: "ps4-4-b",
            text: "Dad offers the family a false choice — blame someone or leave the question open — when the evidence already closes it.",
          },
          {
            id: "ps4-4-c",
            text: "Confirmation email, then website screenshot, then a phone log, then a written letter from the site manager — each bar is cleared and immediately replaced, arriving at something no one bothers to produce.",
          },
          {
            id: "ps4-4-d",
            text: "Dad exempts his own failure to read the confirmation from the scrutiny he applies to everyone else's booking process.",
          },
        ],
      },
      {
        id: "ps4-5",
        text: "The middle sibling observed, mildly, that by that standard no family trip since 2009 could be said to have been properly confirmed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps4-6",
        text: "The call shifted to trip photos not long afterward, most of which were quite nice, and the cancellation policy was not mentioned again.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-mill-lease",
    title: "The Cancellation",
    difficulty: "intermediate",
    includedLabels: ["false-dilemma", "special-pleading"],
    sentences: [
      {
        id: "ps5-1",
        text: "The gym membership cancellation call started with eleven minutes of hold music and ended with a representative whose warmth had the texture of something rehearsed.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps5-2",
        text: "He explained the situation with practiced patience: she could upgrade to the annual plan at the new rate starting immediately, or she'd need to complete the full thirty-day cancellation notice — those were, he said, the only realistic options.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps5-2-a",
        explanationOptions: [
          {
            id: "ps5-2-a",
            text: "Upgrade or wait thirty days are offered as exhaustive, while a month-to-month continuation, a membership freeze, and a prorated exit all sat in the contract she was holding.",
          },
          {
            id: "ps5-2-b",
            text: "The rep assumes the new annual rate is fair, which is precisely what she had called to dispute.",
          },
          {
            id: "ps5-2-c",
            text: "The rep exempts the gym's own equipment delays from the strictness he applies to her membership obligations.",
          },
        ],
      },
      {
        id: "ps5-3",
        text: "She read paragraph seven aloud, which described a membership freeze option at four dollars a month that required no cancellation notice at all.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps5-4",
        text: "When she raised the six-week weights-room closure she had been paying through, the rep explained that equipment downtime was handled under a separate service framework on the operations side, with its own timelines — though the contract drew no such distinction for either party.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps5-4-c",
        explanationOptions: [
          {
            id: "ps5-4-b",
            text: "The rep narrows her options to upgrade or wait when the contract provides several paths.",
          },
          {
            id: "ps5-4-c",
            text: "One contract governs both parties, but its obligations are enforced on her and waived for the gym, with 'operations framework' offered as the entire difference.",
          },
          {
            id: "ps5-4-d",
            text: "The rep asks for a new record of the closure each time the previous one is accepted.",
          },
        ],
      },
      {
        id: "ps5-5",
        text: "The freeze was processed in about ninety seconds, the equipment closure was noted on the account, and the hold music never played again.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps5-6",
        text: "She rejoined six months later during a promotion, and the weights room had new equipment that worked on the first try.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-comet-club",
    title: "The Book Club",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "false-dilemma"],
    sentences: [
      {
        id: "ps6-1",
        text: "The book club met on alternating Fridays, and the item on the table was whether to let Marcus join — he mostly read thrillers, and the founding members mostly preferred not to.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps6-2",
        text: "Priya's objection had a pleasing circularity: only readers with genuine literary taste could contribute meaningfully to discussions, and the evidence that thriller readers lacked genuine literary taste was that they read thrillers.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps6-2-a",
        explanationOptions: [
          {
            id: "ps6-2-a",
            text: "The evidence offered for the conclusion is the conclusion — reading thrillers proves lack of literary taste only if literary taste is what thriller readers are missing, which was the question.",
          },
          {
            id: "ps6-2-b",
            text: "Priya poses a question that traps whoever tries to answer it directly.",
          },
          {
            id: "ps6-2-c",
            text: "Priya allows the group only two futures when others are plainly available.",
          },
        ],
      },
      {
        id: "ps6-3",
        text: "It was noted, mildly, that their most insightful member had a shelf full of genre fiction at home and had never made a secret of it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps6-4",
        text: "Fine, said Priya: they could decide that evening whether to remain a serious literary community or become a casual anything-goes reading club — those, she said, were the real options.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps6-4-c",
        explanationOptions: [
          {
            id: "ps6-4-b",
            text: "Priya's alternatives each assume that thriller readers are unserious, which was still the matter under debate.",
          },
          {
            id: "ps6-4-c",
            text: "Serious literary community or casual anything-goes club — as if a guest session, a two-book trial, or a mentored membership were not third, fourth, and fifth options.",
          },
          {
            id: "ps6-4-d",
            text: "Priya holds new applicants to a taste credential she herself was never required to demonstrate.",
          },
        ],
      },
      {
        id: "ps6-5",
        text: "The club adopted a two-book trial, which Priya helped design, and Marcus passed it when his notes on the shortlisted novel were the most detailed anyone had brought in months.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  // ── Stories 8–12 ─────────────────────────────────────────────────────────
  {
    id: "story-tide-wall",
    title: "The Router",
    difficulty: "intermediate",
    includedLabels: ["false-dilemma", "moving-goalposts"],
    sentences: [
      {
        id: "ps8-1",
        text: "The flat-share had been arguing about the router for two weeks, the group chat had hit a hundred and twelve messages, and Dan — who paid slightly more rent for having signed the lease first — had called a house meeting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps8-2",
        text: "Dan opened with what he called operational clarity: either they binned the router and ordered a new one this week, or they accepted the outages indefinitely — there was, he said, no workable middle option.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps8-2-a",
        explanationOptions: [
          {
            id: "ps8-2-a",
            text: "Full replacement or permanent outage are offered as the only choices, while Priya's firmware-update plan — already downloaded and ready to run — sits on the table unaddressed.",
          },
          {
            id: "ps8-2-b",
            text: "Dan treats the router's unfixability as self-evident without examining the error logs, reasoning from a conclusion he has already reached.",
          },
          {
            id: "ps8-2-c",
            text: "Dan raises the evidentiary bar for the firmware fix each time new evidence is submitted.",
          },
          {
            id: "ps8-2-d",
            text: "Dan exempts the replacement proposal from the cost scrutiny he applies to the firmware plan.",
          },
        ],
      },
      {
        id: "ps8-3",
        text: "Priya walked through the fix: a firmware update and a channel reset would resolve nearly every drop, cost nothing, and take about twenty minutes if someone put the kettle on.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps8-4",
        text: "Dan wanted a speed test first to confirm the drops were real; when the test showed exactly the pattern he'd described, he asked that the ISP be called to verify; when the ISP confirmed the firmware was out of date, he decided they'd need to run the fix for a full month before they could know if it had worked — at which point, he noted, they might as well just buy a new one.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps8-4-c",
        explanationOptions: [
          {
            id: "ps8-4-a",
            text: "Dan offers the flat two options — buy new or do nothing — when the firmware plan already names a third.",
          },
          {
            id: "ps8-4-b",
            text: "Dan assumes the router is unrepairable, then uses that assumption to question any evidence that it can be fixed.",
          },
          {
            id: "ps8-4-c",
            text: "Speed test, ISP call, and a month of live data — each bar is cleared and immediately replaced by a steeper one, so no finding can ever be enough to avoid the purchase.",
          },
          {
            id: "ps8-4-d",
            text: "Dan waives the performance-data requirement for the replacement proposal while applying it strictly to the firmware fix.",
          },
        ],
      },
      {
        id: "ps8-5",
        text: "Priya ran the update at nine forty-five that evening and the router had not dropped a connection since.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps8-6",
        text: "Dan suggested they'd probably want a new one by summer anyway, and no one disagreed, just to keep things moving.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-missing-folio",
    title: "The Leftovers",
    difficulty: "intermediate",
    includedLabels: ["begging-the-question", "loaded-question"],
    sentences: [
      {
        id: "ps9-1",
        text: "The leftovers situation came up in the kitchen at eight in the morning, which was not the best time, but it was the time Jake had chosen.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps9-2",
        text: "His question to Maya was measured and pointed: 'Can you explain what made you decide to throw out my pasta rather than just move it to make room?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps9-2-b",
        explanationOptions: [
          {
            id: "ps9-2-a",
            text: "Jake assumes his conclusion — that Maya disposed of the pasta — in order to establish that Maya disposed of the pasta.",
          },
          {
            id: "ps9-2-b",
            text: "'Decided to throw out' and 'rather than just move it' both presume guilt before any evidence is heard; even 'I didn't throw it out' still accepts the frame of a deliberate choice between options.",
          },
          {
            id: "ps9-2-c",
            text: "Jake holds Maya to a higher standard of fridge management than the other flatmates who also use the top shelf.",
          },
          {
            id: "ps9-2-d",
            text: "Jake limits the explanation to two options — she threw it out or she moved it — when a third, that someone else did, goes unexamined.",
          },
        ],
      },
      {
        id: "ps9-3",
        text: "Maya pointed at the pasta, which was on the middle shelf where she'd moved it the previous night to make room for a grocery delivery.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps9-4",
        text: "Jake studied the pasta and said he couldn't take it at face value — she'd clearly moved it back when she heard him coming, and if she'd moved it back when she heard him coming, that was precisely what someone who had disposed of it would do to cover their tracks.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps9-4-a",
        explanationOptions: [
          {
            id: "ps9-4-a",
            text: "The pasta being there is dismissed because she moved it back, and she moved it back because the pasta being there would otherwise clear her — the circle needs no new evidence and admits none.",
          },
          {
            id: "ps9-4-b",
            text: "Jake's opening question presupposed the disposal, and his dismissal of the pasta reinforces that presupposition without any new argument.",
          },
          {
            id: "ps9-4-c",
            text: "Jake raises the required level of proof one step each time the previous step is satisfied: location of the pasta, then a witness, then a fridge timestamp.",
          },
          {
            id: "ps9-4-d",
            text: "Jake waives the documentation requirement for his own fridge usage while insisting on it for Maya's.",
          },
        ],
      },
      {
        id: "ps9-5",
        text: "The pasta was still warm from the microwave Maya had been using when Jake walked in, a detail the timer confirmed without being asked.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-net-toll",
    title: "The Entry Fee",
    difficulty: "intermediate",
    includedLabels: ["special-pleading", "false-dilemma"],
    sentences: [
      {
        id: "ps10-1",
        text: "The running club charged a ten-dollar entry fee for every race to cover timing chips and water stations, and every member paid it without particular complaint.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps10-2",
        text: "The race director's brother-in-law had run in every event for two years without paying, logged each time as 'volunteer support' in the race register — though no volunteer duties had ever been recorded against him.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps10-2-c",
        explanationOptions: [
          {
            id: "ps10-2-a",
            text: "The race director limits the committee to two options — accept the exemption or challenge it — while a simple registration amendment is readily available.",
          },
          {
            id: "ps10-2-b",
            text: "The race director's claim that the visits serve a volunteer function assumes what it needs to prove — that a relevant exception exists.",
          },
          {
            id: "ps10-2-c",
            text: "The fee applied to every other participant is suspended for a personal connection, with 'volunteer support' offered as justification that the race register contradicts and the club rules don't mention.",
          },
          {
            id: "ps10-2-d",
            text: "The race director shifts his justification for the exemption each time a different race entry is queried.",
          },
        ],
      },
      {
        id: "ps10-3",
        text: "The treasurer raised it at the quarterly committee meeting.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps10-4",
        text: "The race director laid out the choice: either the committee formally recognized volunteer participation as an established category, or they risked damaging club morale by retroactively billing a longstanding participant — those, he said, were the realistic paths forward.",
        labels: ["false-dilemma"],
        primaryLabel: "false-dilemma",
        isTarget: true,
        correctExplanationId: "ps10-4-b",
        explanationOptions: [
          {
            id: "ps10-4-a",
            text: "The race director assumes volunteer participation is already an established category, which was precisely what the committee had gathered to decide.",
          },
          {
            id: "ps10-4-b",
            text: "Formal recognition or damaging morale are presented as the only options while a registration amendment, a policy note, and a small invoice go unmentioned — all named by the treasurer in under two minutes.",
          },
          {
            id: "ps10-4-c",
            text: "The race director applies the risk of morale damage to the committee's position while waiving any comparable risk from the original exemption.",
          },
          {
            id: "ps10-4-d",
            text: "The race director shifts his defense from custom to operational necessity each time the previous justification is questioned.",
          },
        ],
      },
      {
        id: "ps10-5",
        text: "The treasurer said a registration amendment and a small invoice would take about fifteen minutes, and asked whether anyone wanted tea while she drafted it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps10-6",
        text: "The brother-in-law paid his back entry fees with reasonable grace, and the 'volunteer support' category was quietly removed from the register.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-chart-proof",
    title: "The Hamster",
    difficulty: "intermediate",
    includedLabels: ["moving-goalposts", "begging-the-question"],
    sentences: [
      {
        id: "ps11-1",
        text: "Sam had been trying to convince his dad to let him get a hamster for the better part of six weeks, fixing each objection that came up in the previous conversation.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps11-2",
        text: "The cage was too small, so Sam researched and ordered a larger one; it was too noisy for the bedroom, so he moved it to his desk; the desk spot lacked ventilation, so he added a small fan — and then his dad raised a concern about allergens he had not mentioned before.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps11-2-d",
        explanationOptions: [
          {
            id: "ps11-2-a",
            text: "Sam's dad confines him to passing or failing when a trial period represents a path neither of them had considered.",
          },
          {
            id: "ps11-2-b",
            text: "Sam's dad assumes unapproved pets are inherently problematic, using that assumption to justify the approval process that keeps producing it.",
          },
          {
            id: "ps11-2-c",
            text: "Sam's dad holds Sam to a standard he never applied to their previous family cat.",
          },
          {
            id: "ps11-2-d",
            text: "Cage size, bedroom noise, desk ventilation, and then an undisclosed allergen concern — each requirement is met and at once replaced, so the fourth week is no closer to a yes than the first.",
          },
        ],
      },
      {
        id: "ps11-3",
        text: "Sam arranged an allergy test, which came back negative for rodents, and presented his case again.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps11-4",
        text: "His dad explained his caution to Sam's mum: if Sam hadn't satisfied every concern yet, the pet clearly wasn't ready to be approved; and the fact that it kept not being approved showed that the concerns were real — which confirmed, he said, that his caution was entirely sensible.",
        labels: ["begging-the-question"],
        primaryLabel: "begging-the-question",
        isTarget: true,
        correctExplanationId: "ps11-4-b",
        explanationOptions: [
          {
            id: "ps11-4-a",
            text: "Sam's dad raises the standard for what counts as ready each time Sam satisfies the previous requirement.",
          },
          {
            id: "ps11-4-b",
            text: "'Not yet approved' and 'concerns are real' circle each other without touching whether the concerns themselves are reasonable — any pet that keeps being rejected is, by definition, proof that the caution is justified.",
          },
          {
            id: "ps11-4-c",
            text: "Sam's dad limits the conclusion to approved or not approved when readiness admits of degrees.",
          },
          {
            id: "ps11-4-d",
            text: "Sam's dad assumes the review standard is beyond question, which was precisely what Sam's mum had been asked to assess.",
          },
        ],
      },
      {
        id: "ps11-5",
        text: "Sam's mum looked at the test result, the cage setup, and the ventilation fan, and said yes in about thirty seconds.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps11-6",
        text: "The hamster arrived on a Thursday, caused no allergic reactions, and was named Theorem by popular vote.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-vestry-bond",
    title: "The Van Fund",
    difficulty: "intermediate",
    includedLabels: ["loaded-question", "special-pleading", "dialectical"],
    sentences: [
      {
        id: "ps12-1",
        text: "The friend group's shared camping fund meeting happened over a video call on a Sunday, and the item on the table was whether to use the pooled equipment budget to repair the shared van, which had failed its annual check.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps12-2",
        text: "Rhiannon opened by asking whether anyone was prepared to explain to the group why they had spent four years sitting on a van fund while the vehicle quietly fell apart around them.",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps12-2-a",
        explanationOptions: [
          {
            id: "ps12-2-a",
            text: "'Sitting on a van fund' and 'quietly fell apart around them' both plant blame before the meeting has begun — any direct answer, including a correction, accepts the frame that someone chose to neglect it.",
          },
          {
            id: "ps12-2-b",
            text: "Rhiannon assumes the group was negligent in order to argue that the group was negligent; the question is its own evidence.",
          },
          {
            id: "ps12-2-c",
            text: "Rhiannon limits the group to two responses — accept blame or face external criticism — while a plain timeline would show the van only recently started failing.",
          },
          {
            id: "ps12-2-d",
            text: "Rhiannon exempts her own missed fund contribution from the four-year account she demands of the rest of the group.",
          },
        ],
      },
      {
        id: "ps12-3",
        text: "The treasurer pointed out that the van had passed its last two annual checks without issue, the current fault had been flagged within a week of appearing, and 'quietly falling apart for four years' wasn't quite what had happened.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps12-4",
        text: "Rhiannon voted enthusiastically for the repair — but when the treasurer proposed a full equipment audit, including the tent Rhiannon had been using privately since August, Rhiannon said personal-use arrangements were a separate matter and outside the fund's scope to review.",
        labels: ["special-pleading"],
        primaryLabel: "special-pleading",
        isTarget: true,
        correctExplanationId: "ps12-4-c",
        explanationOptions: [
          {
            id: "ps12-4-a",
            text: "Rhiannon's support for the repair assumes her own arrangement is already settled, which the treasurer's motion would address.",
          },
          {
            id: "ps12-4-b",
            text: "Rhiannon assumes the fund lacks scope to review personal use, and uses that assumption to establish that the fund lacks scope.",
          },
          {
            id: "ps12-4-c",
            text: "Shared group equipment is subject to full audit; Rhiannon's private use of shared equipment is not — with 'separate matter' standing in for any distinction the fund's own rules actually draw.",
          },
          {
            id: "ps12-4-d",
            text: "Rhiannon shifts her objection from scope to precedent to procedure each time a group member pushes back.",
          },
        ],
      },
      {
        id: "ps12-5",
        text: "Two people on the call exchanged a look, which is the video-call equivalent of saying something without saying it.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps12-6",
        text: "The van mechanic in the group set the blame question aside and laid out what she took to be the actual situation: the repair estimate was six hundred and forty pounds, the fund held four hundred and twenty, the gap was real, and she offered these numbers to the group as a case to be answered rather than a point to be conceded.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "ps12-6-b",
        explanationOptions: [
          {
            id: "ps12-6-a",
            text: "The mechanic frames the repair and the fund as the only variables, without considering a crowdfund or a payment plan.",
          },
          {
            id: "ps12-6-b",
            text: "Rhiannon's loaded framing is set aside; the actual case for the repair is laid out as an argument with specific numbers, and the group is invited to answer it on its own terms — a shift from accusation to genuine reasoning.",
          },
          {
            id: "ps12-6-c",
            text: "The mechanic assumes the van must be repaired without arguing for that premise, which some members hadn't conceded.",
          },
          {
            id: "ps12-6-d",
            text: "The mechanic introduces a new constraint — the funding gap — after the earlier question of blame has been set aside.",
          },
        ],
      },
      {
        id: "ps12-7",
        text: "The group voted to repair the van and run the equipment audit, and Rhiannon's tent became, at the treasurer's suggestion, the first item on the list.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
  {
    id: "story-boundary-oak",
    title: "The Borrowed Amp",
    difficulty: "intermediate",
    includedLabels: ["loaded-question", "moving-goalposts", "dialectical"],
    sentences: [
      {
        id: "ps7-1",
        text: "The shared bass amp had been on a borrowing rotation between the two bands for three years, until it came back from the last gig with a blown speaker and no explanation left in the case.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps7-2",
        text: "Dominic's opening message to his bandmate Joel was brief: 'Can you at least tell me why you pushed the amp to full volume when you knew it was already running hot?'",
        labels: ["loaded-question"],
        primaryLabel: "loaded-question",
        isTarget: true,
        correctExplanationId: "ps7-2-a",
        explanationOptions: [
          {
            id: "ps7-2-a",
            text: "That Joel pushed the amp to full volume and that he knew it was running hot are both smuggled in as settled — answering 'why' concedes both before any evidence has been produced.",
          },
          {
            id: "ps7-2-b",
            text: "Dominic reasons in a circle: the damage was Joel's fault because Joel caused it.",
          },
          {
            id: "ps7-2-c",
            text: "Dominic raises what would count as proof of innocence each time it is supplied.",
          },
        ],
      },
      {
        id: "ps7-3",
        text: "The sound engineer who had worked the gig confirmed that the amp had been running through a fault-protection limiter all night and was within normal range until the final set.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
      {
        id: "ps7-4",
        text: "Dominic wanted the mixing desk logs reviewed; shown logs placing the amp in the normal range all evening, he asked for written statements from the crew; when three crew members confirmed the same thing, he said that only a signed report from the sound engineer would fully settle it — and the engineer was no longer available.",
        labels: ["moving-goalposts"],
        primaryLabel: "moving-goalposts",
        isTarget: true,
        correctExplanationId: "ps7-4-c",
        explanationOptions: [
          {
            id: "ps7-4-b",
            text: "Dominic presents only two explanations — deliberate misuse or negligence — leaving out equipment age and manufacturing fault entirely.",
          },
          {
            id: "ps7-4-c",
            text: "Engineer's confirmation, then mixing desk logs, then crew statements, then a signed report from someone no longer available — the required proof climbs each time it is met, arriving at something impossible to produce.",
          },
          {
            id: "ps7-4-d",
            text: "Dominic's opening message assumed the very act it was questioning.",
          },
        ],
      },
      {
        id: "ps7-5",
        text: "Joel then did something Dominic hadn't expected: he named Dominic's real concern more clearly than Dominic had — that he'd trusted Joel with an expensive piece of kit and felt let down regardless of cause — and proposed they split the repair cost evenly and get the amp professionally serviced before the next booking.",
        labels: ["dialectical"],
        primaryLabel: "dialectical",
        isTarget: true,
        correctExplanationId: "ps7-5-a",
        explanationOptions: [
          {
            id: "ps7-5-a",
            text: "The underlying concern is restated at full strength — the trust, the cost, the feeling of being let down — and answered with a concrete proposal that meets it, turning a blame dispute into a workable resolution.",
          },
          {
            id: "ps7-5-b",
            text: "Joel concedes fault by offering to split the repair cost.",
          },
          {
            id: "ps7-5-c",
            text: "Joel limits Dominic to accepting the cost split or losing any claim to recompense.",
          },
        ],
      },
      {
        id: "ps7-6",
        text: "The amp was repaired and serviced, both names went on the care log, and the borrowing schedule held without a gap.",
        labels: [],
        explanationOptions: [],
        isTarget: false,
      },
    ],
  },
];
