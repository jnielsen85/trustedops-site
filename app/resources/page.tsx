import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { getAllResources } from "@/lib/mdx";

export const metadata: Metadata = { title: "Resources" };

const tools = [
  {
    href: "/resources/cost-calculator",
    title: "Fully-Loaded Cost Calculator",
    description:
      'Compare an Australian direct hire with TrustedOps — monthly cost, 12-month total, and savings vs local hire. Make "Better Talent Economics" tangible.',
  },
  {
    href: "/resources/role-scorecard",
    title: "Role Scorecard",
    description:
      "Define outcomes, KPIs, scope, capabilities, and a 30/60/90 ramp plan for any role. Fill in and print.",
  },
  {
    href: "/resources/ramp-plan",
    title: "30/60/90 Ramp Plan",
    description:
      "Structure onboarding with clear learning goals, deliverables, and ownership milestones at 30, 60, and 90 days.",
  },
];

/** A full-width clickable row card: title and description on the left, a teal label on the right. */
function LinkRow({
  href,
  title,
  description,
  aside,
  badge,
}: {
  href: string;
  title: string;
  description: string;
  aside: string;
  badge?: string;
}) {
  return (
    <Link href={href} className="group block">
      <Card className="flex flex-col gap-2 transition-colors group-hover:border-brand-teal/50 md:flex-row md:items-center md:justify-between">
        <div>
          {badge ? (
            <div className="mb-2 inline-flex items-center rounded-full border border-brand-teal/30 px-2 py-0.5 text-[11px] font-bold tracking-widest text-brand-teal uppercase">
              {badge}
            </div>
          ) : null}
          <h3 className="text-lg font-bold text-brand-navy transition-colors group-hover:text-brand-teal">{title}</h3>
          <p className="mt-1 text-sm text-brand-navy/70">{description}</p>
        </div>
        <div className="shrink-0 text-xs font-semibold tracking-widest text-brand-teal uppercase">{aside}</div>
      </Card>
    </Link>
  );
}

export default async function ResourcesPage() {
  const resources = await getAllResources();

  return (
    <>
      <PageHero title="Resources">
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          Guides, templates, and tools for building high-performance remote teams.
        </p>
      </PageHero>

      <PageSection tone="grey" eyebrow="Tools" title="Interactive tools & templates">
        <div className="grid gap-5">
          {tools.map((t) => (
            <LinkRow key={t.href} href={t.href} title={t.title} description={t.description} badge="Tool" aside="Open →" />
          ))}
        </div>
      </PageSection>

      {resources.length > 0 && (
        <PageSection eyebrow="Articles" title="Guides & insights">
          <div className="grid gap-5">
            {resources.map((r) => (
              <LinkRow
                key={r.slug}
                href={`/resources/${r.slug}`}
                title={r.frontmatter.title}
                description={r.frontmatter.description}
                aside={new Date(r.frontmatter.date).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              />
            ))}
          </div>
        </PageSection>
      )}

      <CtaBand />
    </>
  );
}
