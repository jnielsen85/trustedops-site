import { cn } from "@/lib/utils";

/**
 * A tight bullet list with an icon marker: "check" (teal) for positives,
 * "cross" (muted slate) for pain points.
 */
export function IconList({
  items,
  marker,
  onNavy = false,
  className,
}: {
  items: string[];
  marker: "check" | "cross";
  onNavy?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("mt-4 space-y-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn("flex gap-2.5 text-sm leading-snug", onNavy ? "text-white/80" : "text-brand-navy/70")}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 12 12"
            className={cn("mt-1 h-3 w-3 shrink-0", marker === "check" ? "text-brand-teal" : "text-slate-400")}
            fill="none"
            stroke="currentColor"
            strokeWidth={marker === "check" ? 2 : 1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={marker === "check" ? "M2 6.5l2.5 2.5L10 3.5" : "M3 3l6 6M9 3l-6 6"} />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}
