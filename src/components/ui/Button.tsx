"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "quiet";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:opacity-90 border border-transparent",
  secondary:
    "bg-raised text-ink border border-line hover:border-accent",
  quiet: "text-ink-soft hover:text-ink border border-transparent",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-md px-4 py-2 font-sans text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-45",
        styles[variant],
        className,
      )}
    />
  );
}
