import { describe, expect, it } from "vitest";
import {
  ALL_LABELS,
  FALLACY_LABELS,
  REASONING_LABELS,
  getLabel,
  groupLabelsByCategory,
  isReasoningLabel,
} from "@/domain/labels";

describe("label registry", () => {
  it("contains all 18 reasoning types and 27 fallacies", () => {
    expect(REASONING_LABELS).toHaveLength(18);
    expect(FALLACY_LABELS).toHaveLength(27);
  });

  it("has unique ids", () => {
    const ids = ALL_LABELS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every label has a name and a short definition", () => {
    for (const label of ALL_LABELS) {
      expect(label.name.length).toBeGreaterThan(0);
      expect(label.shortDefinition.length).toBeGreaterThan(10);
    }
  });

  it("every fallacy names the reasoning it is a failure of", () => {
    for (const fallacy of FALLACY_LABELS) {
      expect(fallacy.failureOf && fallacy.failureOf.length).toBeTruthy();
    }
  });

  it("getLabel throws on unknown ids", () => {
    // @ts-expect-error deliberately invalid
    expect(() => getLabel("nonsense")).toThrow();
  });

  it("isReasoningLabel distinguishes kinds", () => {
    expect(isReasoningLabel("deductive")).toBe(true);
    expect(isReasoningLabel("post-hoc")).toBe(false);
  });
});

describe("groupLabelsByCategory", () => {
  it("groups mixed selections by kind and category, preserving registry order", () => {
    const groups = groupLabelsByCategory(["post-hoc", "deductive", "hasty-generalization", "inductive"]);
    expect(groups.map((g) => g.category)).toEqual(["core", "evidence", "causal"]);
    const core = groups.find((g) => g.category === "core");
    expect(core?.labels.map((l) => l.id)).toEqual(["deductive", "inductive"]);
  });

  it("returns an empty array for no labels", () => {
    expect(groupLabelsByCategory([])).toEqual([]);
  });

  it("gives every group a human-readable name", () => {
    const groups = groupLabelsByCategory(ALL_LABELS.map((l) => l.id));
    for (const group of groups) {
      expect(group.categoryName.length).toBeGreaterThan(3);
    }
  });
});
