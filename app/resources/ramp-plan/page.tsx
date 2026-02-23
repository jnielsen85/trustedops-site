import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { RampPlanForm } from '@/components/RampPlanForm';

export const metadata: Metadata = {
  title: '30/60/90 Ramp Plan | TrustedOps Resources',
  description:
    'A structured plan for onboarding any role with clear outcomes, KPIs, and milestones at 30, 60, and 90 days.',
};

export default function RampPlanPage() {
  return (
    <>
      <style>{`
        @media print {
          header, footer { display: none !important; }
          body { background: white !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
      <Container className="py-10 print:max-w-none print:px-0 print:py-0">
        <Link
          href="/resources"
          className="text-sm font-semibold text-brand-navy/70 hover:text-brand-navy print:hidden"
        >
          ← Back to resources
        </Link>
        <div className="mt-6 print:mt-0">
          <RampPlanForm />
        </div>
      </Container>
    </>
  );
}
