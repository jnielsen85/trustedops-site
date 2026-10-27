import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { CtaBand } from '@/components/CtaBand';
import { IconList } from '@/components/IconList';
import { PageHero } from '@/components/PageHero';
import { PageSection } from '@/components/PageSection';
import { SectionEyebrow } from '@/components/SectionEyebrow';

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

// Small uppercase label used inside pricing cards
const cardLabel = 'text-[11px] font-bold tracking-widest uppercase text-brand-navy/60';

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker={<SectionEyebrow>Pricing</SectionEyebrow>}
        title="Simple, transparent pricing"
        image={{
          src: '/brand/phladysolowroking.jpg',
          alt: 'Offshore team member working at a laptop',
        }}
      >
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          One flat fee covers employment contracts, payroll, HR admin and operational support. No hidden costs.
        </p>
      </PageHero>

      {/* ── Management fee ────────────────────────────────────────────────── */}
      <PageSection
        tone="grey"
        intro="Priced per team member, billed quarterly. Annual upfront available at a 10% discount."
      >
        {/* Featured tier: 1–2 staff */}
        <Card className="border-brand-teal p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="text-[11px] font-bold tracking-widest uppercase text-brand-teal">Standard</div>
                <span className="rounded-full bg-brand-teal px-3 py-0.5 text-[10px] font-bold tracking-wide uppercase text-white">
                  Most popular
                </span>
              </div>
              <div className="mt-1 text-xl font-bold text-brand-navy">1–2 staff</div>
              <div className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-brand-navy">$2,500</span>
                <span className="ml-2 text-sm text-brand-navy/60">/ quarter per person</span>
              </div>
              <div className="mt-1.5 text-xs text-brand-navy/60">~$833/mo · $10,000/yr per person</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-slate-50 px-5 py-4 text-sm">
              <div className={cardLabel}>Annual plan</div>
              <div className="mt-1 font-semibold text-brand-navy">
                $9,000/yr per person <span className="font-normal text-brand-navy/60">(save 10%)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-black/10 pt-6">
            <div className={cardLabel}>Included in all plans</div>
            <IconList items={included} marker="check" className="grid gap-x-6 space-y-0 gap-y-2 sm:grid-cols-2" />
          </div>
        </Card>
      </PageSection>

      {/* ── Scaling tiers ───────────────────────────────────────────────────── */}
      <PageSection eyebrow="Scaling quickly?" title="Multi-staff rates apply as your team grows">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Team: 3–4 */}
          <Card className="flex flex-col">
            <div className={cardLabel}>Team</div>
            <div className="mt-1 text-lg font-bold text-brand-navy">3–4 staff</div>
            <div className="mt-4">
              <span className="text-3xl font-bold tracking-tight text-brand-navy">$2,250</span>
              <span className="ml-1.5 text-sm text-brand-navy/60">/ quarter per person</span>
            </div>
            <div className="mt-1.5 text-xs text-brand-navy/60">~$750/mo · $9,000/yr per person</div>
            <div className="mt-1 text-[11px] font-semibold text-brand-teal">10% multi-staff discount</div>
            <div className="my-4 border-t border-black/10" />
            <div className={cardLabel}>Annual plan</div>
            <div className="mt-1 text-sm font-semibold text-brand-navy">
              $8,100/yr per person <span className="font-normal text-brand-navy/60">(save 10%)</span>
            </div>
          </Card>

          {/* Volume: 5+ */}
          <Card className="flex flex-col">
            <div className={cardLabel}>Volume</div>
            <div className="mt-1 text-lg font-bold text-brand-navy">5+ staff</div>
            <div className="mt-4 text-3xl font-bold tracking-tight text-brand-navy">Let&apos;s talk</div>
            <p className="mt-2 flex-1 text-sm text-brand-navy/70">Bundled pricing based on your team size and needs.</p>
            <div className="my-4 border-t border-black/10" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-2.5 text-sm font-semibold text-white hover:opacity-95"
            >
              Contact us
            </Link>
          </Card>
        </div>

        {/* Employment-only note */}
        <p className="mt-6 text-sm text-brand-navy/60">
          Already have someone in mind? We can take on employment only — covering contracts, payroll and compliance without
          the recruitment. Same fee structure applies.
        </p>
      </PageSection>

      {/* ── Recruitment ─────────────────────────────────────────────────────── */}
      <PageSection tone="grey" eyebrow="Recruitment" title="Finding the right person">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Talent Pool Access */}
          <Card className="flex flex-col">
            <span className="inline-flex w-fit rounded-full bg-brand-teal/10 px-3 py-1 text-[11px] font-semibold text-brand-navy">
              Included
            </span>
            <h3 className="mt-4 text-lg font-bold text-brand-navy">Standard roles</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/70">
              For roles across our six service categories — Accounting & Finance, Construction, Creative & Marketing,
              Admin & Back Office, Real Estate, and IT & Tech — we present up to 3 pre-vetted candidates within
              approximately 2 weeks, at no additional cost.
            </p>
            <div className="mt-5 border-t border-black/10 pt-4 text-xs leading-relaxed text-brand-navy/60">
              6-month replacement guarantee included. If the placement doesn&apos;t work out within 6 months, we
              re-recruit at no charge.
            </div>
          </Card>

          {/* Dedicated Search */}
          <Card className="flex flex-col">
            <span className="inline-flex w-fit rounded-full border border-black/10 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-brand-navy/70">
              12.5% of first-year salary
            </span>
            <h3 className="mt-4 text-lg font-bold text-brand-navy">Specialist roles</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/70">
              For roles outside our standard categories, niche or senior positions, or where no suitable match is
              found in our talent pool within the standard window, we run a dedicated search.
            </p>
            <div className="mt-5 space-y-2 border-t border-black/10 pt-4">
              <p className="text-xs leading-relaxed text-brand-navy/60">
                Fee split: 50% on offer accepted · 50% at 90-day retention milestone
              </p>
              <p className="text-xs leading-relaxed text-brand-navy/60">
                Multiple specialist searches?{' '}
                <Link href="/contact" className="font-semibold text-brand-teal hover:underline">
                  Contact us about bundled search pricing.
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </PageSection>

      <CtaBand secondary={{ label: 'Cost Calculator', href: '/resources/cost-calculator' }} />
    </>
  );
}
