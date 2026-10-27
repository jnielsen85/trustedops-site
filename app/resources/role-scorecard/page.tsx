import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHero } from '@/components/PageHero';
import { RoleScorecardForm } from '@/components/RoleScorecardForm';
import { RoleScorecardGuide } from '@/components/RoleScorecardGuide';

export const metadata: Metadata = {
  // The root layout's title template appends "— TrustedOps"
  title: 'Role Scorecard',
  description:
    'Define outcomes, KPIs, scope, capabilities, and a 30/60/90 ramp plan for any role. Fill in and print.',
};

export default function RoleScorecardPage() {
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
          title="Role Scorecard"
        >
          <p className="mt-3 text-lg text-brand-navy/70">Fill in, then print or save as PDF.</p>
        </PageHero>
      </div>

      {/* Same grey band as PageSection, flattened to plain white paper when printing */}
      <section className="border-y border-black/5 bg-slate-50 py-14 md:py-20 print:border-0 print:bg-white print:py-0">
        <Container className="print:max-w-none print:px-0">
          <RoleScorecardGuide />
          <div className="mt-5 print:mt-0">
            <RoleScorecardForm />
          </div>
        </Container>
      </section>
    </>
  );
}
