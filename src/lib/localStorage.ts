/**
 * Safe, versioned localStorage helpers.
 *
 * All persistence in the app flows through these functions so that:
 * - server rendering / static export never touches `window`
 * - corrupt or stale data falls back to a default instead of crashing
 * - the save schema is versioned for future migrations
 */

export function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

/** A validator narrows unknown parsed JSON to T, or rejects it. */
export type Validator<T> = (value: unknown) => value is T;

export function readJson<T>(key: string, validate: Validator<T>, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return validate(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(key: string, value: T): boolean {
  if (!isBrowser()) return false;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false; // quota exceeded or storage disabled; the app keeps working in-memory
  }
}

export function removeKey(key: string): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

/**
 * A versioned envelope. If the stored version does not match, `migrate` is
 * given a chance to upgrade the data; otherwise the fallback is used.
 */
export type Versioned<T> = { version: number; data: T };

export function readVersioned<T>(
  key: string,
  version: number,
  validate: Validator<T>,
  fallback: T,
  migrate?: (stored: unknown, storedVersion: number) => T | null,
): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return fallback;
    const envelope = parsed as { version?: unknown; data?: unknown };
    if (envelope.version === version && validate(envelope.data)) {
      return envelope.data;
    }
    if (typeof envelope.version === "number" && migrate) {
      const migrated = migrate(envelope.data, envelope.version);
      if (migrated !== null && validate(migrated)) return migrated;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

export function writeVersioned<T>(key: string, version: number, data: T): boolean {
  return writeJson<Versioned<T>>(key, { version, data });
}
