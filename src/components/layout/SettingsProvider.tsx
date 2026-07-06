"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Settings, TextSize, ThemeMode } from "@/domain/types";
import { DEFAULT_SETTINGS, loadSettings, persistSettings } from "@/domain/progress";

type SettingsContextValue = {
  settings: Settings;
  setThemeMode: (mode: ThemeMode) => void;
  setTextSize: (size: TextSize) => void;
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

function applyToDocument(settings: Settings) {
  const root = document.documentElement;
  const wantsDark =
    settings.theme.mode === "dark" ||
    (settings.theme.mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  root.classList.toggle("dark", wantsDark);
  if (settings.textSize.size === "medium") {
    root.removeAttribute("data-text-size");
  } else {
    root.setAttribute("data-text-size", settings.textSize.size);
  }
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  // Load once on the client; the inline head script has already applied the
  // saved values, so this only syncs React state with them.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSettings(loadSettings());
  }, []);

  const update = useCallback((next: Settings) => {
    setSettings(next);
    persistSettings(next);
    applyToDocument(next);
  }, []);

  const setThemeMode = useCallback(
    (mode: ThemeMode) => update({ ...settings, theme: { mode } }),
    [settings, update],
  );

  const setTextSize = useCallback(
    (size: TextSize) => update({ ...settings, textSize: { size } }),
    [settings, update],
  );

  return (
    <SettingsContext.Provider value={{ settings, setThemeMode, setTextSize }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
