import Link from "next/link";
import { Container } from "@/components/Container";

type CtaLink = { label: string; href: string };

/** Navy closing band with a primary and optional secondary button. Defaults to the site's standard CTA copy. */
export function CtaBand({
  title = "Ready to get started?",
  body = "Tell us about the roles you need and the outcomes you're working toward. We'll help you find the right people and get them set up quickly.",
  primary = { label: "Talk to us", href: "/contact" },
  secondary,
}: {
  title?: string;
  body?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="bg-brand-navy py-14 md:py-20">
      <Container>
        <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h2>
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-white/80">{body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
