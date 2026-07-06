import type { LabelId } from "@/domain/types";
import { getLabel } from "@/domain/labels";
import { cn } from "@/lib/cn";

/**
 * A small chip naming a reasoning type or fallacy. Fallacies get a dotted
 * underline as a non-color distinction from reasoning types.
 */
export function LabelChip({
  labelId,
  showFriendly = false,
  className,
}: {
  labelId: LabelId;
  showFriendly?: boolean;
  className?: string;
}) {
  const label = getLabel(labelId);
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 rounded-full border border-line bg-accent-soft px-2.5 py-0.5 font-sans text-xs text-ink",
        label.kind === "fallacy" && "underline decoration-dotted underline-offset-2",
        className,
      )}
    >
      {label.name}
      {showFriendly && label.friendlyName ? (
        <span className="text-ink-soft italic">({label.friendlyName})</span>
      ) : null}
    </span>
  );
}
