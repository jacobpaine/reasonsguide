/**
 * Small deterministic PRNG (mulberry32). Domain functions accept an Rng so
 * story selection and option shuffling are testable and reproducible.
 */
export type Rng = () => number;

export function createRng(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Return a new shuffled copy of the array (Fisher–Yates, non-mutating). */
export function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick n distinct items from the array (or fewer if not enough). */
export function sample<T>(items: readonly T[], n: number, rng: Rng): T[] {
  return shuffle(items, rng).slice(0, n);
}
