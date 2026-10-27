const PANELS = [
  {
    pill: 'Australian Direct Hire',
    body: "Salary is just the starting point. You also pay 11.5% superannuation, workers compensation, leave entitlements (annual, sick, LSL accruals), plus payroll processing and equipment. The real cost is typically 20–25% above base.",
  },
  {
    pill: 'TrustedOps',
    body: "Your team member's offshore salary plus a flat quarterly EoR fee — that's it. TrustedOps handles all Philippine payroll, compliance, and statutory obligations. No super. No workers comp. No leave loadings on your books.",
  },
  {
    pill: 'How to use it',
    body: "Select a role to auto-fill benchmark salaries from our AU vs Philippines salary data. Adjust any inputs to match your actual situation. Use the results for directional planning and internal business cases.",
  },
];

const PITFALLS = [
  'Comparing base salary to base salary — this ignores 18–25% in Australian employer on-costs (super, workers comp, leave).',
  'Overlooking the time cost of hiring — AHRI puts the average cost to hire in Australia at A$23,860 per candidate, with 40 days average time-to-hire.',
  'Assuming offshore = lower quality — when properly recruited and managed, offshore team members perform at equivalent levels.',
];

const sectionLabel = 'mb-2 text-[11px] font-bold tracking-widest text-brand-navy/70 uppercase';

/** Collapsible "how to use" panel, closed by default so the calculator is never blocked. */
export function CostCalculatorGuide() {
  return (
    <details className="group rounded-3xl border border-black/10 bg-white print:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
        <div>
          <h2 className="text-lg font-bold text-brand-navy">How to use the Cost Calculator</h2>
          <p className="mt-1 text-sm text-brand-navy/70">
            Compare true fully-loaded cost: Australian hire vs TrustedOps.
          </p>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-5 w-5 shrink-0 text-brand-teal transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </summary>

      <div className="border-t border-black/10 px-6 pb-6 pt-5">
        <h3 className={sectionLabel}>What this tool does</h3>
        <p className="max-w-prose text-[15px] leading-relaxed text-brand-navy/70">
          Most hiring comparisons use base salary. This calculator shows the full picture — superannuation,
          workers compensation, leave entitlements, equipment, and admin — so you can see the real
          difference between hiring locally in Australia and building your team through TrustedOps.
        </p>

        {/* Three panels */}
        <div className="mt-5 grid gap-3.5 md:grid-cols-3">
          {PANELS.map(({ pill, body }) => (
            <div key={pill} className="rounded-2xl border border-black/10 p-4">
              <div className="mb-2.5 inline-flex items-center rounded-full border border-brand-teal/25 bg-brand-teal/5 px-2.5 py-1 text-[11px] font-bold tracking-wide text-brand-navy uppercase">
                {pill}
              </div>
              <p className="text-sm leading-relaxed text-brand-navy/70">{body}</p>
            </div>
          ))}
        </div>

        {/* Pitfalls */}
        <div className="mt-5 border-t border-black/10 pt-5">
          <h3 className={sectionLabel}>Common calculation mistakes</h3>
          <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-brand-navy/70">
            {PITFALLS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}
