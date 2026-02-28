import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for TrustedOps offshore team management. One flat fee covers employment contracts, payroll, HR admin and operational support. No hidden costs.',
};

const included = [
  'Employment contracts & compliance',
  'Philippine payroll processing',
  'HR administration',
  'Day-one readiness & onboarding support',
  'Ongoing operational support',
  '6-month replacement guarantee on pool placements',
];

export default function PricingPage() {
  return (
    <Container className="py-16">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-brand-teal/[0.06] to-white p-8 shadow-soft">
        <div className="text-sm font-semibold text-brand-navy/60">Pricing</div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-brand-navy">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 max-w-2xl text-justify text-base text-brand-navy/70">
          One flat fee covers employment contracts, payroll, HR admin and operational support. No hidden costs.
        </p>
      </div>

      {/* ── EOR / Management Fee ────────────────────────────────────────────── */}
      <div className="mt-10">
        <p className="text-sm text-brand-navy/60">
          Priced per team member, billed quarterly. Annual upfront available at a 10% discount.
        </p>

        {/* Featured tier: 1–2 staff */}
        <div className="mt-6 rounded-3xl border border-brand-teal bg-white p-8 shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="text-[11px] font-bold tracking-widest uppercase text-brand-teal">
                  Standard
                </div>
                <span className="rounded-full bg-brand-teal px-3 py-0.5 text-[10px] font-bold tracking-wide uppercase text-white">
                  Most popular
                </span>
              </div>
              <div className="mt-1 text-xl font-semibold text-brand-navy">1–2 staff</div>
              <div className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-brand-navy">$2,500</span>
                <span className="ml-2 text-sm text-brand-navy/50">/ quarter per person</span>
              </div>
              <div className="mt-1.5 text-xs text-brand-navy/50">~$833/mo · $10,000/yr per person</div>
            </div>
            <div className="rounded-2xl border border-black/8 bg-black/[0.02] px-5 py-4 text-sm">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/40">
                Annual plan
              </div>
              <div className="mt-1 font-semibold text-brand-navy">
                $9,000/yr per person{' '}
                <span className="font-normal text-brand-navy/50">(save 10%)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-black/8 pt-6">
            <div className="text-[11px] font-bold tracking-widest uppercase text-brand-navy/40">
              Included in all plans
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-navy/70">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scaling tiers */}
        <div className="mt-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-brand-navy/40">
            Scaling quickly?
          </div>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-brand-navy">
            Multi-staff rates apply as your team grows
          </h2>

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            {/* Team: 3–4 */}
            <div className="flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-[11px] font-bold tracking-widest uppercase text-brand-navy/40">
                Team
              </div>
              <div className="mt-1 text-lg font-semibold text-brand-navy">3–4 staff</div>
              <div className="mt-4">
                <span className="text-3xl font-bold tracking-tight text-brand-navy">$2,250</span>
                <span className="ml-1.5 text-sm text-brand-navy/50">/ quarter per person</span>
              </div>
              <div className="mt-1.5 text-xs text-brand-navy/50">~$750/mo · $9,000/yr per person</div>
              <div className="mt-1 text-[11px] font-semibold text-brand-teal">10% multi-staff discount</div>
              <div className="my-4 border-t border-black/8" />
              <div className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/40">
                Annual plan
              </div>
              <div className="mt-1 text-sm font-semibold text-brand-navy">
                $8,100/yr per person{' '}
                <span className="font-normal text-brand-navy/50">(save 10%)</span>
              </div>
            </div>

            {/* Volume: 5+ */}
            <div className="flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-[11px] font-bold tracking-widest uppercase text-brand-navy/40">
                Volume
              </div>
              <div className="mt-1 text-lg font-semibold text-brand-navy">5+ staff</div>
              <div className="mt-4 text-3xl font-bold tracking-tight text-brand-navy">
                Let&apos;s talk
              </div>
              <p className="mt-2 flex-1 text-sm text-brand-navy/60">
                Bundled pricing based on your team size and needs.
              </p>
              <div className="my-4 border-t border-black/8" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* EOR standalone note */}
        <p className="mt-6 text-xs text-brand-navy/50">
          Already have someone in mind? We can act as EOR only — covering contracts, payroll and
          compliance without the recruitment. Same fee structure applies.
        </p>
      </div>

      {/* ── Recruitment ─────────────────────────────────────────────────────── */}
      <div className="mt-16">
        <div className="text-xs font-semibold tracking-widest uppercase text-brand-teal">
          Recruitment
        </div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">
          Finding the right person
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Talent Pool Access */}
          <div className="flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <span className="inline-flex w-fit rounded-full bg-brand-teal/10 px-3 py-1 text-[11px] font-semibold text-brand-teal">
              Included
            </span>
            <div className="mt-4 text-lg font-semibold text-brand-navy">Standard roles</div>
            <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-brand-navy/70">
              For roles across our six service categories — Accounting & Finance, Construction,
              Creative & Marketing, Admin & Back Office, Real Estate, and IT & Tech — we present up
              to 3 pre-vetted candidates within approximately 2 weeks, at no additional cost.
            </p>
            <div className="mt-5 border-t border-black/8 pt-4 text-xs leading-relaxed text-brand-navy/50">
              6-month replacement guarantee included. If the placement doesn&apos;t work out within
              6 months, we re-recruit at no charge.
            </div>
          </div>

          {/* Dedicated Search */}
          <div className="flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <span className="inline-flex w-fit rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[11px] font-semibold text-brand-navy/60">
              12.5% of first-year salary
            </span>
            <div className="mt-4 text-lg font-semibold text-brand-navy">Specialist roles</div>
            <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-brand-navy/70">
              For roles outside our standard categories, niche or senior positions, or where no
              suitable match is found in our talent pool within the standard window, we run a
              dedicated search.
            </p>
            <div className="mt-5 border-t border-black/8 pt-4 space-y-2">
              <p className="text-xs leading-relaxed text-brand-navy/50">
                Fee split: 50% on offer accepted · 50% at 90-day retention milestone
              </p>
              <p className="text-xs leading-relaxed text-brand-navy/50">
                Multiple specialist searches?{' '}
                <Link href="/contact" className="font-semibold text-brand-teal hover:underline">
                  Contact us about bundled search pricing.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <div className="mt-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-8 shadow-soft">
        <div className="text-xl font-semibold text-brand-navy">Ready to get started?</div>
        <p className="mt-2 max-w-xl text-justify text-sm text-brand-navy/70">
          Tell us about the roles you need and the outcomes you&apos;re working toward. We&apos;ll
          help you find the right people and get them set up quickly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Talk to us
          </Link>
          <Link
            href="/resources/cost-calculator"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-soft hover:bg-black/[0.02]"
          >
            Cost Calculator
          </Link>
        </div>
      </div>

    </Container>
  );
}
