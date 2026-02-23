'use client';

import Image from 'next/image';

const STEPS = [
  {
    title: 'Step 1: Confirm the role definition',
    duration: '5 min',
    items: [
      <span key="a">Write the <strong className="text-brand-navy/80">role mission</strong> in 1–2 sentences.</span>,
      <span key="b">List <strong className="text-brand-navy/80">5–7 responsibilities</strong> that define the role (avoid long task lists).</span>,
      <span key="c">State <strong className="text-brand-navy/80">in scope</strong> and <strong className="text-brand-navy/80">out of scope</strong> explicitly.</span>,
    ],
  },
  {
    title: 'Step 2: Define success measures',
    duration: '10 min',
    items: [
      <span key="a">Choose <strong className="text-brand-navy/80">3–6 KPIs</strong> tied to the role outcomes.</span>,
      <span key="b">For each KPI, define the <strong className="text-brand-navy/80">source of truth</strong> (system/report) and the <strong className="text-brand-navy/80">cadence</strong>.</span>,
      <span key="c">If you don&apos;t know the baseline, write &quot;TBD&quot; and set a date to establish it.</span>,
    ],
  },
  {
    title: 'Step 3: Write 30/60/90 as outcomes',
    duration: '15 min',
    items: [
      <span key="a"><strong className="text-brand-navy/80">Learning goals</strong>: what they must understand to operate safely and independently.</span>,
      <span key="b"><strong className="text-brand-navy/80">Deliverables</strong>: concrete outputs (shipped, implemented, documented, reduced, improved).</span>,
      <span key="c"><strong className="text-brand-navy/80">Ownership milestones</strong>: what they own end-to-end by the end of the phase.</span>,
      <span key="d"><strong className="text-brand-navy/80">Dependencies / risks</strong>: access, training, stakeholder time, data availability.</span>,
    ],
  },
  {
    title: 'Step 4: Set the operating cadence',
    duration: '5 min',
    items: [
      'Schedule a weekly check-in and use the same agenda each week.',
      <span key="a">Review <strong className="text-brand-navy/80">evidence</strong> (dashboards, tickets, artefacts) rather than opinions.</span>,
    ],
  },
];

const QUALITY = [
  <span key="a">Anyone reading the plan should be able to answer: <em>&quot;What will be true by Day 30/60/90?&quot;</em></span>,
  "If a statement can't be observed or evidenced, rewrite it.",
  'Prefer fewer, clearer commitments over long lists.',
];

export function RampPlanGuide({ onClose }: { onClose: () => void }) {
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
              How to complete the 30/60/90 Ramp Plan
            </h2>
            <p className="mt-0.5 text-[13px] text-brand-navy/50">
              Designed to produce a plan you review weekly, not a document you file away.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="max-w-prose text-[15px] leading-relaxed text-brand-navy/70">
            Keep it outcome-based and measurable. A good ramp plan answers{' '}
            <em>&quot;What will be true by Day 30/60/90?&quot;</em> for anyone who reads it.
          </p>

          {/* Steps */}
          <div className="mt-5 space-y-3">
            {STEPS.map((step) => (
              <div key={step.title} className="rounded-xl border border-gray-200 p-4">
                <div className="mb-2 flex flex-wrap items-baseline gap-2">
                  <h3 className="text-sm font-semibold text-brand-navy">{step.title}</h3>
                  <span className="inline-flex items-center rounded-full border border-brand-teal/25 bg-brand-teal/5 px-2 py-0.5 text-[11px] font-bold tracking-wide text-brand-teal uppercase">
                    {step.duration}
                  </span>
                </div>
                <ul className="list-disc space-y-1 pl-4 text-[13px] leading-relaxed text-brand-navy/60">
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quality bar */}
          <div className="mt-5 border-t border-slate-100 pt-5">
            <h3 className="mb-2 text-[11px] font-bold tracking-widest text-brand-navy/40 uppercase">
              Quality bar
            </h3>
            <ul className="list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-brand-navy/60">
              {QUALITY.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tip */}
          <div className="mt-4 rounded-xl border border-brand-teal/20 bg-brand-teal/5 px-4 py-3 text-[13px] leading-relaxed text-brand-navy/70">
            <strong className="text-brand-navy">Tip:</strong> After the first two weeks, adjust the
            plan based on reality — access delays, scope changes, new priorities. The plan should
            evolve.
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] text-brand-navy/40">
              <span className="font-semibold text-brand-navy/60">TrustedOps</span>
              {' '}– Better Talent Economics&nbsp;&nbsp;·&nbsp;&nbsp;30/60/90 Ramp Plan Guide v1.0
            </p>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 cursor-pointer rounded-xl bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Start the plan →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
