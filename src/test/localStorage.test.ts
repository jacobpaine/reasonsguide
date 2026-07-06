import { describe, expect, it } from "vitest";
import {
  isBrowser,
  readJson,
  readVersioned,
  writeJson,
  writeVersioned,
} from "@/lib/localStorage";
import {
  isUserProgress,
  loadProgress,
  persistProgress,
  resetProgress,
  EMPTY_PROGRESS,
  PROGRESS_KEY,
} from "@/domain/progress";

const isNumber = (v: unknown): v is number => typeof v === "number";

describe("readJson / writeJson", () => {
  it("round-trips a value", () => {
    expect(writeJson("k", 42)).toBe(true);
    expect(readJson("k", isNumber, 0)).toBe(42);
  });

  it("falls back on missing keys", () => {
    expect(readJson("missing", isNumber, 7)).toBe(7);
  });

  it("falls back on corrupt JSON", () => {
    window.localStorage.setItem("bad", "{not json");
    expect(readJson("bad", isNumber, 7)).toBe(7);
  });

  it("falls back when validation rejects the parsed value", () => {
    window.localStorage.setItem("wrong-shape", JSON.stringify("a string"));
    expect(readJson("wrong-shape", isNumber, 7)).toBe(7);
  });
});

describe("readVersioned / writeVersioned", () => {
  it("round-trips through the version envelope", () => {
    writeVersioned("v", 1, 10);
    expect(readVersioned("v", 1, isNumber, 0)).toBe(10);
  });

  it("rejects mismatched versions without a migration", () => {
    writeVersioned("v", 1, 10);
    expect(readVersioned("v", 2, isNumber, 0)).toBe(0);
  });

  it("uses the migration function for old versions", () => {
    writeVersioned("v", 1, 10);
    const migrated = readVersioned("v", 2, isNumber, 0, (stored, version) =>
      version === 1 && typeof stored === "number" ? stored * 2 : null,
    );
    expect(migrated).toBe(20);
  });
});

describe("progress persistence", () => {
  it("loads empty progress when nothing is stored", () => {
    expect(loadProgress()).toEqual(EMPTY_PROGRESS);
  });

  it("round-trips progress", () => {
    const progress = {
      ...EMPTY_PROGRESS,
      completedLessons: ["claim-support"],
      unlockedLabels: ["claim-support" as const],
    };
    expect(persistProgress(progress)).toBe(true);
    expect(loadProgress()).toEqual(progress);
  });

  it("rejects progress containing unknown label ids", () => {
    window.localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({
        version: 1,
        data: {
          completedLessons: [],
          unlockedLabels: ["made-up-label"],
          mastery: {},
          practiceHistory: [],
        },
      }),
    );
    expect(loadProgress()).toEqual(EMPTY_PROGRESS);
  });

  it("resetProgress clears the stored keys", () => {
    persistProgress({ ...EMPTY_PROGRESS, completedLessons: ["claim-support"] });
    resetProgress();
    expect(loadProgress()).toEqual(EMPTY_PROGRESS);
  });
});

describe("validators", () => {
  it("isUserProgress accepts the empty shape and rejects junk", () => {
    expect(isUserProgress(EMPTY_PROGRESS)).toBe(true);
    expect(isUserProgress(null)).toBe(false);
    expect(isUserProgress({ completedLessons: "nope" })).toBe(false);
  });

  it("isBrowser is true under jsdom", () => {
    expect(isBrowser()).toBe(true);
  });
});
