<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# The Reasoning Journal — project instructions

A static-export Next.js game that teaches reasoning types and fallacies
through sentence-labeling in short stories. Hosted from S3; all state in
localStorage. No backend, ever.

## Hard constraints

- **Static export only.** `next.config.ts` sets `output: "export"`. Never add
  API routes, server actions, middleware, dynamic rendering, or anything that
  needs a server at runtime. New dynamic routes need `generateStaticParams`.
- **localStorage is the only persistence.** All reads/writes go through
  `src/lib/localStorage.ts` (versioned, validated) — never touch
  `window.localStorage` directly in components, and never at module scope or
  during render (breaks static export).
- **Domain logic stays out of React.** Pure functions in `src/domain/`,
  content in `src/content/`, side effects only at hook boundaries
  (`useProgress`, `SettingsProvider`).

## Pedagogy (do not violate)

Learners identify *what kind* of reasoning is happening before judging
whether it is good or bad. Fallacies are taught as **failure modes of
reasoning forms the learner already knows**, never first. The curriculum
order in `src/content/curriculum/index.ts` encodes this.

## Commands

- `npm run dev` — local dev server
- `npm test` — Vitest (all domain logic and key components)
- `npm run build` — static export to `out/`
- `npx eslint src` — lint

## Layout

- `src/domain/` — types, label registry, pure logic (selection, scoring, mastery, unlocks)
- `src/content/curriculum/` — one file per full lesson; `drafts.ts` for scaffolds
- `src/content/stories/` — practice stories with sentence-level answer metadata
- `src/components/` — React by feature; `src/app/` — thin route wrappers
- `src/test/` — Vitest suites, including content contract tests

## Working rules

- Content changes must keep `src/test/content.test.ts` green — those tests
  are the contract (5–7 sentences, 2–3 targets, 3–5 explanation options, one
  correct, includedLabels ≡ target labels).
- Voice: literary, calm, for curious adults. The app is a reasoning journal,
  not a quiz app. See `.claude/skills/style/SKILL.md` before touching UI.
- Run `npm test` and `npm run build` before declaring any change done.

## Skills and agents

Skills in `.claude/skills/`: `style`, `story-creation`, `testing`,
`curriculum`, `accessibility` — consult the matching skill before working in
its area. Agents in `.claude/agents/` are focused reviewers/helpers
(curriculum-designer, story-smith, test-engineer, accessibility-reviewer,
frontend-polish); use them for review passes, not as extra architecture.
