import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

export function Section({
  title,
  eyebrow,
  children,
  className,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-widest text-brand-teal uppercase">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
