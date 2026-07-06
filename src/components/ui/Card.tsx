import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-lg border border-line bg-raised p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
        className,
      )}
    />
  );
}
