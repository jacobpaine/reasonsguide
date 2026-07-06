---
name: testing
description: Add and maintain unit tests with Vitest and React Testing Library. Use when writing tests, when domain logic or content changes, or when coverage gaps appear.
---

# Testing this project

Stack: Vitest + React Testing Library + jsdom. Config in `vitest.config.ts`;
setup (jest-dom matchers, cleanup, localStorage clearing) in
`src/test/setup.ts`. Run with `npm test` (or `npm run test:watch`).

## What to test, in priority order

1. **Domain logic** (`src/domain/`) — pure functions, so test them as data
   in / data out: story selection coverage, scoring verdicts, unlock
   ordering, mastery math, validators.
2. **Content contracts** (`src/test/content.test.ts`) — invariants every
   lesson and story must satisfy. When new content logic appears (new
   difficulty rules, multi-label sentences), extend this suite first.
3. **User-visible component behavior** — render, interact via
   `userEvent`, assert on roles and accessible names
   (`getByRole("button", { name: … })`), including at least one
   keyboard-only path for any new interaction.

## House rules

- Test behavior, not implementation: no asserting on class names, internal
  state, or call counts of internal helpers. If a refactor that preserves
  behavior breaks a test, the test was wrong.
- Domain functions take `Rng`/timestamps as parameters — pass `createRng(seed)`
  and fixed ISO strings; never mock `Math.random` or `Date`.
- localStorage: jsdom provides a real one, cleared after each test in setup.
  Write malformed data with `window.localStorage.setItem` directly to test
  fallback paths.
- Every new pure function in `src/domain` ships with tests in the same PR.
  Every new story/lesson must pass the existing contract suite without
  edits — if the contract must change, change it deliberately and say so.
- Keep tests deterministic: fixed seeds, fixed dates, no timers.
