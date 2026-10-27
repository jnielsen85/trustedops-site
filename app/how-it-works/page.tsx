import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { HowItWorks } from "@/components/HowItWorks";
import { IconList } from "@/components/IconList";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Reduce the drag of hiring and scale capability with offshore team members backed by a managed operations backbone.",
};

const stats = [
  { value: "~40 days", label: "Average time to hire (AU benchmark)" },
  { value: "~$23.9k", label: "Reported cost to hire per worker (AU/NZ study)" },
  { value: "~100 hrs", label: "Total internal effort to reach an offer (best-case example)" },
  { value: "20%+", label: "Replacement cost as % of salary (mid-level estimate)" },
];

const ownership = [
  {
    title: "You lead the work",
    items: [
      "Choose who joins your team",
      "Set priorities and standards",
      "Direct day-to-day delivery",
      "Define success metrics",
    ],
  },
  {
    title: "We run the backbone",
    items: [
      "Talent acquisition + coordination",
      "Contracts, payroll & HR admin",
      "Equipment / access setup support",
      "Operational hygiene (process, tooling, reporting)",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker={<SectionEyebrow>What we do</SectionEyebrow>}
        title="Lower overhead. Increased capability."
        image={{
          src: "/brand/phonphone.jpg",
          alt: "Offshore team member on a call at their desk",
          position: "center 30%",
        }}
      >
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          Hiring eats leadership time, attention and budget well beyond base salary. TrustedOps reduces the drag: we
          recruit and stand up offshore team members in the Philippines, then put the operational foundation in place
          so work keeps moving, standards stay high and both parties are set up for success.
        </p>
      </PageHero>

      <PageSection tone="grey">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5">
              <div className="text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-brand-navy/70">{s.label}</div>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-xs text-brand-navy/60">Benchmarks vary by role, seniority, and market conditions.</p>
      </PageSection>

      <HowItWorks />

      <PageSection tone="grey">
        <div className="grid gap-5 md:grid-cols-2">
          {ownership.map((o) => (
            <Card key={o.title}>
              <h3 className="text-lg font-bold text-brand-navy">{o.title}</h3>
              <IconList items={o.items} marker="check" />
            </Card>
          ))}
        </div>
      </PageSection>

      <CtaBand secondary={{ label: "Cost Calculator", href: "/resources/cost-calculator" }} />
    </>
  );
}
