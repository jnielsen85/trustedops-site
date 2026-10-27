import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { RampPlanForm } from '@/components/RampPlanForm';
import { RampPlanGuide } from '@/components/RampPlanGuide';

export const metadata: Metadata = {
  // The root layout's title template appends "— TrustedOps"
  title: '30/60/90 Ramp Plan',
  description:
    'A structured plan for onboarding any role with clear outcomes, KPIs, and milestones at 30, 60, and 90 days.',
};

export default function RampPlanPage() {
  return (
    <>
      {/* Hide site chrome when printing so only the form renders */}
      <style>{`
        @media print {
          header, footer { display: none !important; }
          body { background: white !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div className="print:hidden">
        <PageHero
          kicker={
            <Link href="/resources" className="text-sm font-semibold text-brand-navy/70 hover:text-brand-navy">
              ← Back to resources
            </Link>
          }
          title="30/60/90 Ramp Plan"
        >
          <p className="mt-3 text-lg text-brand-navy/70">Fill in the plan, then print or save as PDF.</p>
        </PageHero>
      </div>

      {/* Same grey band as PageSection, flattened to plain white paper when printing */}
      <section className="border-y border-black/5 bg-slate-50 py-14 md:py-20 print:border-0 print:bg-white print:py-0">
        <Container className="print:max-w-none print:px-0">
          <RampPlanGuide />
          <div className="mt-5 print:mt-0">
            <RampPlanForm />
          </div>
        </Container>
      </section>
    </>
  );
}
