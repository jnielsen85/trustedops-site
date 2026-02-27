'use client';

import Image from 'next/image';
import { useState } from 'react';

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

export function CostCalculatorGuide() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/50 p-4 backdrop-blur-sm print:hidden">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(11,27,58,0.18)]">

        {/* Header */}
        <div className="flex flex-wrap items-center gap-4 border-b-4 border-brand-teal px-6 py-5">
          <Image
            src="/brand/trustedops_logo_horizontal_lockup_color.svg"
            alt="TrustedOps"
            width={176}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <div>
            <div className="text-[11px] font-bold tracking-widest text-brand-teal uppercase">
              TrustedOps
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-brand-navy">
              How to use the Cost Calculator
            </h2>
            <p className="mt-0.5 text-[13px] text-brand-navy/50">
              Compare true fully-loaded cost: Australian hire vs TrustedOps.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">

          <h3 className="mb-2 text-[11px] font-bold tracking-widest text-brand-navy/40 uppercase">
            What this tool does
          </h3>
          <p className="max-w-prose text-[15px] leading-relaxed text-brand-navy/70">
            Most hiring comparisons use base salary. This calculator shows the full picture — superannuation,
            workers compensation, leave entitlements, equipment, and admin — so you can see the real
            difference between hiring locally in Australia and building your team through TrustedOps.
          </p>

          {/* Three panels */}
          <div className="mt-5 grid gap-3.5 md:grid-cols-3">
            {PANELS.map(({ pill, body }) => (
              <div key={pill} className="rounded-xl border border-gray-200 p-4">
                <div className="mb-2.5 inline-flex items-center rounded-full border border-brand-teal/25 bg-brand-teal/5 px-2.5 py-1 text-[11px] font-bold tracking-wide text-brand-navy uppercase">
                  {pill}
                </div>
                <p className="text-[13px] leading-relaxed text-brand-navy/60">{body}</p>
              </div>
            ))}
          </div>

          {/* Pitfalls */}
          <div className="mt-5 border-t border-slate-100 pt-5">
            <h3 className="mb-2 text-[11px] font-bold tracking-widest text-brand-navy/40 uppercase">
              Common calculation mistakes
            </h3>
            <ul className="list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-brand-navy/60">
              {PITFALLS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Footer / CTA */}
          <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] text-brand-navy/40">
              <span className="font-semibold text-brand-navy/60">TrustedOps</span>
              {' '}– Better Talent Economics&nbsp;&nbsp;·&nbsp;&nbsp;Cost Calculator v2.0
            </p>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="shrink-0 cursor-pointer rounded-xl bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Open the Calculator →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
