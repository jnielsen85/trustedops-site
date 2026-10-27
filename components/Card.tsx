import { cn } from "@/lib/utils";

/** The flat card used across the site. Use onNavy inside a navy PageSection. */
export function Card({
  onNavy = false,
  className,
  children,
}: {
  onNavy?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-6",
        onNavy ? "border-white/10 bg-white/5" : "border-black/10 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
