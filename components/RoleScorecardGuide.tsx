'use client';

import Image from 'next/image';
import { useState } from 'react';

const PANELS = [
  {
    pill: 'Start with outcomes',
    body: 'Define what must be true at 30, 60, 90 days. Outcomes are observable: shipped, implemented, reduced, improved. Avoid tasks — focus on results.',
  },
  {
    pill: 'Make success measurable',
    body: 'Choose 3–6 KPIs tied to outcomes. Define how each KPI is measured (source of truth). Set a cadence: weekly, monthly, or quarterly.',
  },
  {
    pill: 'Clarify scope & interfaces',
    body: 'List what the role owns and what it does not own. Name key stakeholders and handoffs. Write down decision rights to avoid confusion.',
  },
];

const PITFALLS = [
  'Using generic language like "support the team" without stating outcomes.',
  'Listing every task instead of the 5–7 responsibilities that truly define the role.',
  'KPIs without a defined measurement method — different people interpret them differently.',
  'Not stating key interfaces, which creates handoff ambiguity and escalations.',
];

export function RoleScorecardGuide() {
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
              How to use the Role Scorecard
            </h2>
            <p className="mt-0.5 text-[13px] text-brand-navy/50">
              A short guide to keep roles clear and hiring consistent.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">

          {/* What it's for */}
          <h3 className="mb-2 text-[11px] font-bold tracking-widest text-brand-navy/40 uppercase">
            What this document is for
          </h3>
          <p className="max-w-prose text-[15px] leading-relaxed text-brand-navy/70">
            A role scorecard is a single source of truth for a role. It clarifies outcomes, scope, and
            success metrics so hiring, onboarding, and performance management are aligned.
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
              Common pitfalls to avoid
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
              {' '}– Better Talent Economics&nbsp;&nbsp;·&nbsp;&nbsp;Role Scorecard Guide v1.0
            </p>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="shrink-0 cursor-pointer rounded-xl bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Start the Scorecard →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
