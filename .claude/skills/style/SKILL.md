---
name: style
description: Maintain the reasoning-journal visual style — text-first, literary, calm, accessible. Use before writing or changing any UI, component, or Tailwind styling.
---

# The reasoning-journal style

The app is a personal notebook for the shapes of argument. Every screen
should feel like a well-set book page, not a dashboard.

## Palette and tokens

All colors come from CSS variables in `src/app/globals.css`, exposed as
Tailwind colors: `paper`, `raised`, `ink`, `ink-soft`, `line`, `accent`,
`accent-ink`, `accent-soft`, `mark` (the sentence highlighter).
**Never hardcode hex values in components.** Dark mode is a designed palette
(deep ink-blue paper, candlelit text), not an inversion — if you add a color,
design both modes and check contrast in each (4.5:1 minimum for text).

## Typography

- Body and headings: Literata (serif) — reading text is the interface.
- UI labels, buttons, metadata: Inter (`font-sans`), small sizes.
- Reading measure: content lives in `max-w-3xl` shell; prose blocks use
  `max-w-prose`. Line-height stays ≥ 1.6 for body text.
- Text size is user-controlled via `html[data-text-size]` — always use
  rem-based sizing (Tailwind defaults), never `px` font sizes.

## Voice

Literary, calm, slightly wry; written for curious adults. Section names may
be tasteful ("Chapters", "New entry", "The entry, reviewed") but must stay
self-explanatory. No gamer-speak, no exclamation-point cheer, no SaaS
marketing tone ("Unlock your potential!").

## Composition rules

- Cards (`Card` component) group content but should never nest.
- Whitespace over borders; borders over shadows; shadows barely.
- One accent color used sparingly — mostly for the current action.
- Animations: transitions only, subtle, and already globally disabled under
  `prefers-reduced-motion`. No entrance animations, no confetti.
- Feedback must combine symbol + word (+ optional tint) — never color alone.

## Anti-patterns (reject on sight)

Gradient hero sections, emoji-heavy headings, stat dashboards with big
number tiles, progress rings, toast notifications, skeleton shimmer,
uppercase-everything buttons, more than two font weights per screen.
