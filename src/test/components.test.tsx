import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QuestionCard } from "@/components/lesson/QuestionCard";
import { StoryReader } from "@/components/practice/SessionView";
import { LabelChip } from "@/components/ui/LabelChip";
import { beginnerStories } from "@/content/stories/beginner";
import type { MixedQuestion } from "@/domain/types";

const question: MixedQuestion = {
  id: "q1",
  passage: ["All keys open the gate.", "This is a key.", "So it opens the gate."],
  options: ["deductive", "inductive"],
  correctLabel: "deductive",
  explanation: "The rule includes the case.",
};

describe("QuestionCard", () => {
  it("shows the passage and label options with definitions", () => {
    render(<QuestionCard question={question} onAnswered={() => {}} />);
    expect(screen.getByText("All keys open the gate.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Deductive reasoning/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Inductive reasoning/ })).toBeInTheDocument();
  });

  it("reports a correct first answer and shows the explanation", async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();
    render(<QuestionCard question={question} onAnswered={onAnswered} />);
    await user.click(screen.getByRole("button", { name: /Deductive reasoning/ }));
    expect(onAnswered).toHaveBeenCalledWith(true);
    expect(screen.getByRole("status")).toHaveTextContent("Correct");
    expect(screen.getByRole("status")).toHaveTextContent("The rule includes the case.");
  });

  it("reports a wrong answer and names the correct label", async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();
    render(<QuestionCard question={question} onAnswered={onAnswered} />);
    await user.click(screen.getByRole("button", { name: /Inductive reasoning/ }));
    expect(onAnswered).toHaveBeenCalledWith(false);
    expect(screen.getByRole("status")).toHaveTextContent(/deductive reasoning/i);
  });
});

describe("StoryReader", () => {
  const story = beginnerStories[0];
  const target = story.sentences.find((s) => s.isTarget)!;

  function renderReader(onSubmit = vi.fn()) {
    render(
      <StoryReader
        story={story}
        storyNumber={1}
        storyCount={3}
        selectableLabels={story.includedLabels}
        onSubmit={onSubmit}
      />,
    );
    return onSubmit;
  }

  it("renders every sentence as a focusable button", () => {
    renderReader();
    for (const sentence of story.sentences) {
      expect(
        screen.getByRole("button", { name: new RegExp(sentence.text.slice(0, 30)) }),
      ).toBeInTheDocument();
    }
  });

  it("walks the full annotate flow: sentence → label → explanation → mark", async () => {
    const user = userEvent.setup();
    renderReader();

    await user.click(screen.getByRole("button", { name: new RegExp(target.text.slice(0, 30)) }));
    expect(
      screen.getByText(/What form of reasoning does this sentence show/),
    ).toBeInTheDocument();

    const labelName =
      target.primaryLabel === "deductive" ? /Deductive reasoning/ : /Abductive reasoning/;
    await user.click(screen.getByRole("button", { name: labelName }));
    expect(screen.getByText(/Why is that the right reading/)).toBeInTheDocument();

    const correctOption = target.explanationOptions.find(
      (o) => o.id === target.correctExplanationId,
    )!;
    await user.click(
      screen.getByRole("button", { name: new RegExp(correctOption.text.slice(0, 30)) }),
    );

    expect(screen.getByText(/1 sentence marked/)).toBeInTheDocument();
    expect(screen.getByText(/Marked as/)).toBeInTheDocument();
  });

  it("submits the collected answers", async () => {
    const user = userEvent.setup();
    const onSubmit = renderReader();
    await user.click(screen.getByRole("button", { name: /Submit story/ }));
    expect(onSubmit).toHaveBeenCalledWith([]);
  });

  it("supports keyboard-only annotation", async () => {
    const user = userEvent.setup();
    renderReader();
    const sentenceButton = screen.getByRole("button", {
      name: new RegExp(target.text.slice(0, 30)),
    });
    sentenceButton.focus();
    await user.keyboard("{Enter}");
    expect(
      screen.getByText(/What form of reasoning does this sentence show/),
    ).toBeInTheDocument();
  });
});

describe("LabelChip", () => {
  it("shows the formal name, and the friendly name when asked", () => {
    render(<LabelChip labelId="deductive" showFriendly />);
    expect(screen.getByText("Deductive reasoning")).toBeInTheDocument();
    expect(screen.getByText(/Rule reasoning/)).toBeInTheDocument();
  });
});
