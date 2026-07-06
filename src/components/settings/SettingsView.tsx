"use client";

import { useState } from "react";
import type { TextSize, ThemeMode } from "@/domain/types";
import { useSettings } from "@/components/layout/SettingsProvider";
import { useProgress } from "@/components/layout/useProgress";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const THEME_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "Match system" },
];

const SIZE_OPTIONS: { value: TextSize; label: string }[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

function OptionRow<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="font-sans text-sm font-semibold">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={legend}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={value === option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-md border px-4 py-2 font-sans text-sm transition-colors",
              value === option.value
                ? "border-accent bg-accent-soft font-medium"
                : "border-line bg-raised hover:border-accent",
            )}
          >
            {value === option.value ? "● " : "○ "}
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function SettingsView() {
  const { settings, setThemeMode, setTextSize } = useSettings();
  const { progress, reset } = useProgress();
  const [confirmingReset, setConfirmingReset] = useState(false);

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
      </header>

      <Card className="space-y-6">
        <OptionRow
          legend="Theme"
          options={THEME_OPTIONS}
          value={settings.theme.mode}
          onChange={setThemeMode}
        />
        <OptionRow
          legend="Text size"
          options={SIZE_OPTIONS}
          value={settings.textSize.size}
          onChange={setTextSize}
        />
      </Card>

      <Card>
        <h2 className="font-sans text-sm font-semibold">Progress</h2>
        <p className="mt-2 text-sm text-ink-soft">
          {progress.completedLessons.length} chapters completed ·{" "}
          {progress.unlockedLabels.length} forms unlocked ·{" "}
          {progress.practiceHistory.length} practice entries. Everything is
          stored in this browser only.
        </p>
        {!confirmingReset ? (
          <Button
            variant="secondary"
            className="mt-4"
            onClick={() => setConfirmingReset(true)}
          >
            Reset progress…
          </Button>
        ) : (
          <div className="mt-4 space-y-2" role="alertdialog" aria-label="Confirm reset">
            <p className="text-sm font-medium">
              Erase all lessons, unlocks, and mastery? This cannot be undone.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  reset();
                  setConfirmingReset(false);
                }}
              >
                Yes, erase everything
              </Button>
              <Button variant="secondary" onClick={() => setConfirmingReset(false)}>
                Keep my progress
              </Button>
            </div>
          </div>
        )}
      </Card>

      <Card>
        <h2 className="font-sans text-sm font-semibold">Accessibility notes</h2>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-soft">
          <li>Every interaction works by keyboard; sentences are real buttons, not text selection.</li>
          <li>Focus outlines are always visible; feedback uses symbols and words, never color alone.</li>
          <li>Text size above adjusts the whole app; line length stays at a comfortable measure.</li>
          <li>Animations respect your system&apos;s reduced-motion preference.</li>
          <li>Status updates (feedback, unlocks) are announced to screen readers via live regions.</li>
        </ul>
      </Card>
    </article>
  );
}
