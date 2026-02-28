import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllResources } from "@/lib/mdx";

export const metadata: Metadata = { title: "Resources" };

export default async function ResourcesPage() {
  const resources = await getAllResources();

  return (
    <Container className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Resources</h1>
      <p className="mt-4 max-w-2xl text-justify text-base text-brand-navy/70">
        Guides, templates, and tools for building high-performance remote teams.
      </p>

      <div className="mt-10 grid gap-6">
        {/* Pinned tool: Cost Calculator */}
        <Link
          href="/resources/cost-calculator"
          className="group rounded-3xl border border-brand-teal/20 bg-brand-teal/5 p-6 shadow-soft transition hover:-translate-y-0.5"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center rounded-full border border-brand-teal/30 px-2 py-0.5 text-[11px] font-bold tracking-widest text-brand-teal uppercase">
                Tool
              </div>
              <div className="text-lg font-semibold text-brand-navy group-hover:underline decoration-brand-teal/60 underline-offset-4">
                Fully-Loaded Cost Calculator
              </div>
              <div className="mt-1 text-justify text-sm text-brand-navy/70">
                Compare Direct Hire vs EoR vs BPO — monthly cost, 12-month total, and savings vs local hire. Make "Better Talent Economics" tangible.
              </div>
            </div>
            <div className="shrink-0 text-xs font-semibold tracking-widest text-brand-teal uppercase">
              Open →
            </div>
          </div>
        </Link>

        {/* Pinned tool: Role Scorecard */}
        <Link
          href="/resources/role-scorecard"
          className="group rounded-3xl border border-brand-teal/20 bg-brand-teal/5 p-6 shadow-soft transition hover:-translate-y-0.5"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center rounded-full border border-brand-teal/30 px-2 py-0.5 text-[11px] font-bold tracking-widest text-brand-teal uppercase">
                Tool
              </div>
              <div className="text-lg font-semibold text-brand-navy group-hover:underline decoration-brand-teal/60 underline-offset-4">
                Role Scorecard
              </div>
              <div className="mt-1 text-justify text-sm text-brand-navy/70">
                Define outcomes, KPIs, scope, capabilities, and a 30/60/90 ramp plan for any role. Fill in and print.
              </div>
            </div>
            <div className="shrink-0 text-xs font-semibold tracking-widest text-brand-teal uppercase">
              Open →
            </div>
          </div>
        </Link>

        {/* Pinned tool: 30/60/90 Ramp Plan */}
        <Link
          href="/resources/ramp-plan"
          className="group rounded-3xl border border-brand-teal/20 bg-brand-teal/5 p-6 shadow-soft transition hover:-translate-y-0.5"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center rounded-full border border-brand-teal/30 px-2 py-0.5 text-[11px] font-bold tracking-widest text-brand-teal uppercase">
                Tool
              </div>
              <div className="text-lg font-semibold text-brand-navy group-hover:underline decoration-brand-teal/60 underline-offset-4">
                30/60/90 Ramp Plan
              </div>
              <div className="mt-1 text-justify text-sm text-brand-navy/70">
                Structure onboarding with clear learning goals, deliverables, and ownership milestones at 30, 60, and 90 days.
              </div>
            </div>
            <div className="shrink-0 text-xs font-semibold tracking-widest text-brand-teal uppercase">
              Open →
            </div>
          </div>
        </Link>

        {/* MDX articles */}
        {resources.map((r) => (
          <Link
            key={r.slug}
            href={`/resources/${r.slug}`}
            className="group rounded-3xl border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-0.5"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-brand-navy group-hover:underline decoration-brand-teal/60 underline-offset-4">
                  {r.frontmatter.title}
                </div>
                <div className="mt-1 text-justify text-sm text-brand-navy/70">{r.frontmatter.description}</div>
              </div>
              <div className="text-xs font-semibold tracking-widest text-brand-teal uppercase">
                {new Date(r.frontmatter.date).toLocaleDateString("en-AU", { year: "numeric", month: "short", day: "2-digit" })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
