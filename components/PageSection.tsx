import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export type SectionTone = "white" | "grey" | "navy";

const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",
  grey: "border-y border-black/5 bg-slate-50",
  navy: "bg-brand-navy",
};

/** A full-width background band with the standard padding, container and heading styles. */
export function PageSection({
  id,
  tone = "white",
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const onNavy = tone === "navy";
  const hasHeader = Boolean(eyebrow || title || intro);

  return (
    <section id={id} className={cn("py-14 md:py-20", toneClasses[tone])}>
      <Container>
        {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
        {title ? (
          <h2
            className={cn(
              "mt-2 max-w-3xl text-2xl font-bold tracking-tight md:text-3xl",
              onNavy ? "text-white" : "text-brand-navy"
            )}
          >
            {title}
          </h2>
        ) : null}
        {intro ? (
          <p
            className={cn(
              "mt-4 max-w-[65ch] text-base leading-relaxed",
              onNavy ? "text-white/80" : "text-brand-navy/70"
            )}
          >
            {intro}
          </p>
        ) : null}
        {children ? <div className={hasHeader ? "mt-8" : undefined}>{children}</div> : null}
      </Container>
    </section>
  );
}
