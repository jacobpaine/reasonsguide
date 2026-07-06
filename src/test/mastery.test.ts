import { describe, expect, it } from "vitest";
import { applyEvent, calculateMastery, emptyMastery, masteryTier } from "@/domain/mastery";

const NOW = "2026-07-06T00:00:00.000Z";

describe("applyEvent", () => {
  it("uses the first event's score directly", () => {
    const record = applyEvent(emptyMastery("deductive", NOW), { labelId: "deductive", score: 1 }, NOW);
    expect(record.mastery).toBe(1);
    expect(record.attempts).toBe(1);
  });

  it("moves gradually after the first attempt", () => {
    let record = applyEvent(emptyMastery("deductive", NOW), { labelId: "deductive", score: 1 }, NOW);
    record = applyEvent(record, { labelId: "deductive", score: 0 }, NOW);
    expect(record.mastery).toBeGreaterThan(0.5);
    expect(record.mastery).toBeLessThan(1);
    expect(record.attempts).toBe(2);
  });

  it("stays within [0, 1]", () => {
    let record = emptyMastery("causal", NOW);
    for (let i = 0; i < 20; i++) {
      record = applyEvent(record, { labelId: "causal", score: 1 }, NOW);
    }
    expect(record.mastery).toBeLessThanOrEqual(1);
    for (let i = 0; i < 20; i++) {
      record = applyEvent(record, { labelId: "causal", score: 0 }, NOW);
    }
    expect(record.mastery).toBeGreaterThanOrEqual(0);
  });
});

describe("calculateMastery", () => {
  it("folds events into a new map without mutating the old one", () => {
    const before = {};
    const after = calculateMastery(
      before,
      [
        { labelId: "deductive", score: 1 },
        { labelId: "inductive", score: 0.6 },
      ],
      NOW,
    );
    expect(Object.keys(before)).toHaveLength(0);
    expect(after.deductive?.mastery).toBe(1);
    expect(after.inductive?.mastery).toBe(0.6);
  });

  it("applies multiple events for the same label in order", () => {
    const after = calculateMastery(
      {},
      [
        { labelId: "deductive", score: 1 },
        { labelId: "deductive", score: 0 },
      ],
      NOW,
    );
    expect(after.deductive?.attempts).toBe(2);
    expect(after.deductive?.mastery).toBeCloseTo(0.7, 5);
  });
});

describe("masteryTier", () => {
  it("reports unpracticed for missing records", () => {
    expect(masteryTier(undefined)).toBe("unpracticed");
  });

  it("maps scores to tiers monotonically", () => {
    const at = (mastery: number) =>
      masteryTier({ labelId: "deductive", attempts: 5, mastery, lastPracticedAt: NOW });
    expect(at(0.1)).toBe("sprouting");
    expect(at(0.5)).toBe("developing");
    expect(at(0.7)).toBe("solid");
    expect(at(0.95)).toBe("fluent");
  });
});
