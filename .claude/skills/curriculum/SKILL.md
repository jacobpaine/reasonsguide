---
name: curriculum
description: Add or revise reasoning and fallacy lessons. Use when writing lesson content, promoting drafts to ready, or reordering the curriculum path.
---

# Curriculum authoring

## Progression principle (non-negotiable)

Recognition before evaluation: learners first learn to *name* the kind of
reasoning, then to judge its strength, and only then meet fallacies — always
framed as failure modes of forms they already know ("hasty generalization is
induction with too few cases"). Never introduce a fallacy whose parent
reasoning form isn't already a ready lesson earlier in `LESSONS`.

## Lesson structure (enforced by `src/test/content.test.ts` for ready lessons)

1. `definition` — plain language, accurate, 1–3 sentences.
2. `memoryHook` — one line, aphorism-like ("Deduction = rule-based certainty").
3. `soundsLike` — 2–4 signal phrases heard in the wild.
4. `workedExamples` — exactly 2, each passage + a "Why" explanation that
   names what makes it this form and not a neighbor.
5. `guidedExamples` — exactly 3, each with one correct choice and feedback
   on *every* choice (wrong-choice feedback teaches, never just "no").
6. `mixedQuestions` — exactly 5, options drawn from this label plus
   *previously learned* labels; 1–2 questions should correctly be a
   previously learned label so the set isn't predictable.
7. `unlockChallenge` — exactly 3 questions, same format; all three correct
   on first attempt unlocks.

## Voice and pitch

Curious-adult register: precise but unstuffy, low-key literary examples
(ferries, orchards, archives). Friendly labels (from `src/domain/labels.ts`,
e.g. "Rule reasoning") appear alongside formal names via the UI — don't
repeat them in prose constantly.

## Promoting a draft

1. Move the lesson from `drafts.ts` into its own file with full structure.
2. Import it in `src/content/curriculum/index.ts` at the pedagogically right
   position (its parent forms must come earlier).
3. Add at least 2 practice stories using the new label (see story-creation
   skill) so the unlock leads somewhere.
4. `npm test` must pass — lesson structure and label-coverage tests will
   catch most mistakes.
