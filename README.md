# The Reasoning Journal

A quiet, text-focused game for learning to see the shape of arguments.
Lessons teach forms of reasoning (deduction, induction, abduction, analogy,
causal, statistical, …); practice sessions present short literary stories in
which you mark the sentences where reasoning happens, name the form, and
explain why. Fallacies arrive later, as failure modes of forms you already
know.

Fully static — built with Next.js static export, hostable from an S3 bucket
(or any static file host). All progress lives in the browser's
`localStorage`; there is no backend, database, or account.

## Quick start

```bash
npm install     # install dependencies
npm run dev     # local dev server at http://localhost:3000
npm test        # run the unit test suite (Vitest)
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

Then either serve via the S3 website endpoint (make objects public via a
bucket policy) or, preferably, put CloudFront in front of the bucket with an
Origin Access Control. The config uses `trailingSlash: true`, so every route
is a real `route/index.html` object — no redirect rules or URL-rewriting
functions are needed. Static assets under `_next/` are content-hashed and
safe to cache forever; give the HTML files a short TTL.

## Project structure

```
src/
  app/                  # routes (thin wrappers; all interactivity is client components)
    learn/              # curriculum overview
    lesson/[id]/        # one page per lesson (generateStaticParams)
    practice/           # session setup
    practice/session/   # the sentence-marking game
    feedback/           # post-session review
    settings/           # theme, text size, reset
  components/           # React by feature (layout, curriculum, lesson, practice, feedback, settings, ui)
  content/
    curriculum/         # one file per full lesson + drafts.ts scaffolds
    stories/            # practice stories with sentence-level answer metadata
  domain/               # pure logic: labels, curriculum rules, selection, scoring, mastery, progress
  lib/                  # localStorage helpers, seeded rng, ids, cn
  test/                 # Vitest suites (domain, content contracts, components)
```

Design rules: domain logic is pure functions outside React; components stay
declarative; all persistence goes through the versioned, validated helpers
in `src/lib/localStorage.ts`; content is data, separate from rendering.

## Adding content

### A new reasoning type or fallacy label

1. Add the id to `ReasoningLabelId` / `FallacyLabelId` in `src/domain/types.ts`.
2. Register it in `src/domain/labels.ts` (name, category, short definition;
   for fallacies, `failureOf` naming its parent reasoning forms).
3. Add at least a draft lesson for it (below). The label tests in
   `src/test/labels.test.ts` count labels — update the expected counts.

### A new lesson (or promoting a draft)

1. Create `src/content/curriculum/<id>.ts` exporting a `Lesson` with the full
   structure: definition, memory hook, sounds-like phrases, 2 worked
   examples, 3 guided examples, 5 mixed questions, 3 unlock-challenge
   questions.
2. Import it in `src/content/curriculum/index.ts` at the right position in
   the path — a fallacy lesson must come after its parent reasoning forms.
3. Remove the corresponding draft from `drafts.ts` if promoting.
4. `npm test` — the content contract suite enforces the structure.

The authoring guide lives in `.claude/skills/curriculum/SKILL.md`.

### A new practice story

1. Add a `PracticeStory` to a file in `src/content/stories/` (export through
   `index.ts`). Contract: 5–7 sentences; 2–3 targets, each with a
   `primaryLabel`, 3–5 explanation options, and one correct option; neutral
   sentences carry no metadata; `includedLabels` equals the target labels.
2. Choose target labels that unlock together, or the story will never be
   eligible for a session (selection only offers stories whose every target
   label was selected by the player).
3. `npm test` validates all of this automatically.

The full craft guide is `.claude/skills/story-creation/SKILL.md`.

## The Claude harness

The repo carries instructions, skills, and agents for working on it with
Claude Code:

- `CLAUDE.md` / `AGENTS.md` — project instructions loaded automatically
  (hard constraints, pedagogy rules, commands).
- `.claude/skills/` — consult the matching guide before working in an area;
  Claude loads them on demand:
  `style` (visual language), `story-creation`, `curriculum`, `testing`,
  `accessibility`.
- `.claude/agents/` — focused helpers/reviewers you can invoke by name in a
  session (e.g. "use the story-smith agent to add three advanced stories"):
  `curriculum-designer`, `story-smith`, `test-engineer`,
  `accessibility-reviewer`, `frontend-polish`.

They are deliberately small: reviewers and authoring guides, not machinery.

## Accessibility

Keyboard-first (sentence selection is real buttons, not text selection),
visible focus everywhere, semantic controls with labels, verdicts conveyed
by symbol + word rather than color alone, user-controlled text size, designed
dark mode, and a global reduced-motion kill-switch. Details and review
checklist: `.claude/skills/accessibility/SKILL.md`.

## Testing

Vitest + React Testing Library. The suite covers story selection, scoring,
unlock progression, mastery math, localStorage safety (including corrupt
data), label grouping, explanation-option construction, content contracts
for every lesson and story, and component interaction including a
keyboard-only path.
