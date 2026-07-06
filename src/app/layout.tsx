import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/components/layout/SettingsProvider";
import { AppShell } from "@/components/layout/AppShell";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Reasoning Journal",
    template: "%s — The Reasoning Journal",
  },
  description:
    "A quiet game for learning to see the shape of arguments: reasoning types, fallacies, and the stories they hide in.",
};

/**
 * Applies saved theme and text size before first paint so a dark-mode
 * user never sees a light flash. Reads the same versioned key the
 * settings screen writes. Must stay resilient to malformed storage.
 */
const themeInitScript = `(function () {
  try {
    var raw = localStorage.getItem("reasonsguide:settings");
    var data = raw ? JSON.parse(raw).data : null;
    var mode = data && data.theme && data.theme.mode;
    var dark = mode === "dark" || ((!mode || mode === "system") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.documentElement.classList.add("dark");
    var size = data && data.textSize && data.textSize.size;
    if (size === "small" || size === "large") document.documentElement.setAttribute("data-text-size", size);
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${literata.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <SettingsProvider>
          <AppShell>{children}</AppShell>
        </SettingsProvider>
      </body>
    </html>
  );
}
