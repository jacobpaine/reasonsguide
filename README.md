# The Reasoning Journal

A quiet, text-focused game for learning to see the shape of arguments.

Lessons teach **22 forms of reasoning** — deduction, induction, abduction, analogy, causal, statistical, Bayesian, expected-value, precedent, thought experiment, reductio ad absurdum, and more — followed by **27 fallacies**, each introduced as a failure mode of a form you already know. Practice sessions present short stories in which you mark the sentences where reasoning happens, name the form, and pick the best explanation. Mastery is tracked across sessions with an EWMA model; a Progress page shows every form you've unlocked and how fluent you've become.

Fully static — built with Next.js static export, hostable from S3 or any static file host. All progress lives in the browser's `localStorage`. There is no backend, database, or user account.

## Quick start

```bash
npm install     # install dependencies
npm run dev     # local dev server at http://localhost:3000
npm test        # run the test suite (Vitest, 501 tests)
npm run build   # static export → out/
```

Requires Node 20+.

## Hosting from AWS S3

`npm run build` writes a complete static site to `out/`.

```bash
# one-time bucket setup
aws s3 mb s3://your-bucket-name
aws s3 website s3://your-bucket-name --index-document index.html --error-document 404.html

# deploy
aws s3 sync out/ s3://your-bucket-name --delete
```

Serve via the S3 website endpoint (public bucket policy) or put CloudFront in front with an Origin Access Control. The config uses `trailingSlash: true`, so every route is a real `route/index.html` object — no redirect rules needed. Static assets under `_next/` are content-hashed and safe to cache forever; give HTML files a short TTL.

## How it works

### Curriculum

49 labels total: 22 reasoning forms across three categories (core inference, reasoning in use, reasoning about concepts and structure) and 27 fallacies across six categories (formal, evidence, causal, relevance, presumption, language).

Each lesson has:
- A plain-language definition and memory hook
- 2 worked examples with explanations
- 3 guided examples with choice feedback
- 5 mixed questions (some with previously-learned labels as the correct answer, so it isn't predictable)
- An unlock challenge of 3–6 questions drawn randomly, so retakes present genuinely different questions

Fallacies always come after the reasoning forms they corrupt. The curriculum order is a suggested path, not a gate — all lessons are open.

### Practice

Select one or more unlocked forms, then read three short stories and mark the sentences where your chosen forms appear. Stories are eligible when they contain at least one target label from your selection; targets for forms you didn't select are treated as neutral (no penalty for missing them). Sessions mostly include one story per selected form, but not always.

Scoring: correct label + correct explanation → full credit; correct label + wrong explanation → partial; missed target or over-labeled neutral → 0.

### Mastery

Each label has an EWMA mastery score. Tiers: unpracticed → sprouting → developing → solid → fluent. The Progress page shows all 49 labels with their current tier, or a link to the lesson that unlocks them.

## Project structure

```
src/
  app/                  # routes (thin wrappers; all interactivity in client components)
    learn/              # curriculum overview with reasoning / fallacies tabs
    lesson/[id]/        # one page per lesson (generateStaticParams)
    practice/           # session setup — choose which forms to hunt for
    practice/session/   # the sentence-marking game
    feedback/           # post-session review with per-sentence verdicts
    progress/           # mastery overview for all 49 labels
    settings/           # theme, text size, reset
  components/           # React by feature
  content/
    curriculum/         # one .ts file per lesson
    stories/            # practice stories with sentence-level answer metadata
  domain/               # pure logic: labels, selection, scoring, mastery, progress
  lib/                  # localStorage helpers, seeded RNG, ids, cn
  test/                 # Vitest suites (domain, content contracts, components)
```

Design rules: domain logic is pure functions outside React; components stay declarative; all persistence goes through the versioned helpers in `src/lib/localStorage.ts`; content is data, separate from rendering.

## Adding content

### A new reasoning type or fallacy label

1. Add the id to `ReasoningLabelId` / `FallacyLabelId` in `src/domain/types.ts`.
2. Register it in `src/domain/labels.ts` (name, friendlyName, category, shortDefinition; for fallacies, add `failureOf` naming its parent forms).
3. Update the expected counts in `src/test/labels.test.ts` and `src/test/content.test.ts`.

### A new lesson

1. Create `src/content/curriculum/<id>.ts` exporting a `Lesson` with `status: "ready"` and the full structure: definition, memoryHook, soundsLike (2–4), workedExamples (2), guidedExamples (3), mixedQuestions (5), unlockChallenge (3–6).
2. Import it in `src/content/curriculum/index.ts` at the right position — fallacy lessons must follow their parent reasoning forms.
3. `npm test` — the content contract suite enforces structure and pedagogy order.

The authoring guide is `.claude/skills/curriculum/SKILL.md`.

### A new practice story

1. Add a `PracticeStory` to a file in `src/content/stories/`. Contract: 5–7 sentences; 2–3 targets with `primaryLabel`, 3–5 explanation options, one `correctExplanationId`; neutral sentences carry no metadata; `includedLabels` equals the set of target primary labels.
2. A story is eligible for a session when at least one of its target labels is in the user's selection — so a story can safely mix a new label with any already-taught label.
3. `npm test` validates everything automatically.

The craft guide is `.claude/skills/story-creation/SKILL.md`.

## Claude Code harness

The repo carries instructions, skills, and agents for development with Claude Code:

- `CLAUDE.md` / `AGENTS.md` — project instructions (hard constraints, pedagogy rules, commands)
- `.claude/skills/` — domain guides loaded on demand: `style`, `story-creation`, `curriculum`, `testing`, `accessibility`
- `.claude/agents/` — focused agents: `curriculum-designer`, `story-smith`, `test-engineer`, `accessibility-reviewer`, `frontend-polish`

## Accessibility

Keyboard-first (sentence selection is real buttons), visible focus everywhere, semantic controls with labels, verdicts conveyed by symbol + word rather than color alone, user-controlled text size, dark mode, reduced-motion kill-switch. Review checklist: `.claude/skills/accessibility/SKILL.md`.

## Testing

Vitest + React Testing Library. The suite covers story selection, scoring, unlock progression, mastery math, localStorage safety (including corrupt data), label grouping, explanation-option construction, content contracts for every lesson and story, and component interaction including a keyboard-only path.
