"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/", label: "Journal" },
  { href: "/learn/", label: "Learn" },
  { href: "/practice/", label: "Practice" },
  { href: "/settings/", label: "Settings" },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-4 sm:px-6">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-raised focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          The Reasoning Journal
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-5 font-sans text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "py-1 transition-colors hover:text-accent",
                    isActive(pathname, item.href)
                      ? "border-b-2 border-accent text-ink"
                      : "text-ink-soft",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main" className="flex-1 py-8">
        {children}
      </main>
      <footer className="border-t border-line py-4 font-sans text-xs text-ink-soft">
        A field notebook for the shapes of argument. Progress lives in this
        browser only.
      </footer>
    </div>
  );
}
