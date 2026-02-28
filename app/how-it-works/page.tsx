import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "what we do",
  description:
    "Reduce the drag of hiring and scale capability with offshore team members backed by a managed operations backbone.",
};

const stats = [
  { value: "~40 days", label: "Average time to hire (AU benchmark)" },
  { value: "~$23.9k", label: "Reported cost to hire per worker (AU/NZ study)" },
  { value: "~100 hrs", label: "Total internal effort to reach an offer (best-case example)" },
  { value: "20%+", label: "Replacement cost as % of salary (mid-level estimate)" },
];

const steps = [
  {
    title: "Intake & scoping",
    body:
      "We define the roles, outcomes, working hours, tooling, and how success will be measured. You’ll leave with a clear team shape and a practical 30/60/90-day plan.",
  },
  {
    title: "Recruiting & shortlisting",
    body:
      "We run a focused search in the Philippines against your requirements. You meet the best candidates and make the final call—no handoffs, no mystery staffing.",
  },
  {
    title: "Contracts, payroll & day-one readiness",
    body:
      "Once you’ve chosen the candidate, we handle the employment setup (contracts, payroll and HR admin) and get them ready to deliver from day one—accounts, access, runbooks and a simple operating rhythm that keeps work moving.",
  },
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
    <Container className="py-16">
      <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-brand-teal/[0.06] to-white p-8 shadow-soft">
      {/* Header */}
      <div>
        <div className="text-sm font-semibold text-brand-navy/60">what we do</div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Lower overhead. Increased capability.
        </h1>

        <p className="mt-4 max-w-[66rem] text-justify text-base text-brand-navy/70">
          Hiring eats leadership time, attention and budget well beyond base salary. TrustedOps reduces the drag: we
          recruit and stand up offshore team members in the Philippines, then put the operational
          foundation in place so work keeps moving, standards stay high and both parties are setup for success.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-black/10 bg-white p-4 shadow-soft">
            
            <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
            <div className="mt-1 text-xs font-semibold text-brand-navy/70">{s.label}</div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-brand-navy/60">
        Benchmarks vary by role, seniority, and market conditions.
      </p>
      </div>
      {/* Steps */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start gap-3">
  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-teal" />
  <div className="text-sm font-semibold text-brand-navy">{s.title}</div>
</div>
            <p className="mt-2 text-justify text-sm text-brand-navy/70">{s.body}</p>
          </div>
        ))}
      </div>

      {/* Ownership split */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {ownership.map((o) => (
          <div
            key={o.title}
            className="rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-6 shadow-soft"
          >
            <div className="text-lg font-semibold">{o.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-brand-navy/70">
              {o.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}