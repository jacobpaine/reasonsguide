---
name: story-creation
description: Create or revise practice stories with sentence-level answer metadata. Use whenever adding stories to src/content/stories/ or changing story structure.
---

# Writing practice stories

Stories are the practice material: short narrative passages where some
sentences perform a labeled form of reasoning and the rest are scene. The
learner marks sentences, names the form, and picks the explanation.

## Hard contract (enforced by `src/test/content.test.ts`)

- 5–7 sentences per story; each sentence is one `PracticeSentence`.
- Exactly 2–3 target sentences (`isTarget: true`), each with:
  - `primaryLabel` (a valid label id from `src/domain/labels.ts`)
  - `labels` containing at least the primary label
  - 3–5 `explanationOptions` with unique ids, exactly one matching
    `correctExplanationId`
- Neutral sentences: `labels: []`, no `primaryLabel`, `explanationOptions: []`.
- `includedLabels` must equal the set of target primary labels.
- Unique ids: prefix sentence ids with a story short-code (`gh-1`, `tr-3`).

## Eligibility rule (why label choice matters)

`selectPracticeStories` only offers a story when **every** target label is in
the user's selection. Design stories around 2–3 labels that are unlocked
together (see curriculum order), and spread pairings across a set so each
label appears in ≥ 2 stories — that's what lets sessions cover every
selected label.

## Craft rules

- Voice: clear, concrete, lightly wry. Settings should be varied and
  approachable: everyday modern life, workplace situations, school, families,
  social media, fantastical scenarios (wizards, robots, magic, sci-fi), or
  humor. Avoid defaulting to formal English historical settings (18th-century
  guilds, quays, harbors, chandlers). The reasoning must be clear regardless
  of setting. No brands, no topical politics.
- Beginner: signpost the reasoning ("The best explanation…", "so", rules
  stated outright). One form per sentence, whole-sentence selection.
- Intermediate/advanced: bury the signposts; let the reasoning live in
  natural phrasing. Targets should not be the only long sentences —
  vary neutral sentence length so length doesn't leak the answer.
- Fallacy targets must read the way people actually talk — plausible,
  even sympathetic — never cartoon mistakes.
- Explanation distractors: describe *other labels the learner is likely
  practicing at that point*, applied wrongly to this sentence. Plausible,
  not silly. The correct explanation should cite specifics from the
  sentence, and so should at least one distractor (or correctness becomes
  guessable by specificity).

## Where things go

- Add stories to the difficulty-appropriate file in `src/content/stories/`
  (or a new themed file exported through `src/content/stories/index.ts`).
- Run `npm test` — the content contract suite must pass unchanged.
