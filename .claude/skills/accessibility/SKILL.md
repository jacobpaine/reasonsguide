---
name: accessibility
description: Review and preserve accessibility — keyboard, screen reader, contrast, text sizing, focus, reduced motion. Use before completing any UI change and during accessibility audits.
---

# Accessibility review

Run this checklist over any changed screen. The app's core promise: fully
usable by keyboard and screen reader, at any of the three text sizes, in
both themes.

## Keyboard

- Every interaction is a real `<button>`, link, or form control — sentence
  "highlighting" is buttons styled as text, never raw text-selection.
- Tab order follows reading order; no positive `tabindex`.
- No keyboard traps; panels opened inline (annotation, confirmations) are
  reachable in sequence and dismissible.

## Focus

- Never remove the global `:focus-visible` outline (globals.css); don't
  override it locally with `outline-none` unless replacing it with an
  equally visible style in both themes.

## Screen readers

- Toggle-style buttons carry `aria-pressed`; grouped choices use `fieldset`
  + `legend` or `role="radiogroup"` with labels.
- Dynamic feedback (verdicts, unlock notices, status lines) lives in
  `role="status"` so it's announced.
- Icons/symbols (✓ ✕ ○ △) are always paired with words.

## Not color alone

Verdicts, chip kinds (fallacy = dotted underline), and states must each have
a non-color cue: symbol, word, weight, or underline. Check the feedback
screen especially.

## Contrast and text

- 4.5:1 minimum for text against its actual background, in light AND dark.
  Palette tokens live in `src/app/globals.css`; check `ink-soft` on `mark`
  and `accent-soft` combinations when adding tinted surfaces.
- rem-based sizes only, so `html[data-text-size]` scaling works. Verify
  layouts at the "large" setting — nothing may truncate or overlap.
- Body line-height ≥ 1.6; reading width capped (`max-w-prose` / `max-w-3xl`).

## Motion

Global reduced-motion kill-switch exists in globals.css. Any new animation
must be a subtle transition, purposeful, and must not convey information
that exists nowhere else.
