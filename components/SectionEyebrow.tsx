import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-xs font-semibold tracking-widest text-brand-teal uppercase", className)}>
      {children}
    </div>
  );
}
