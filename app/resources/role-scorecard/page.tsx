import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { RoleScorecardForm } from '@/components/RoleScorecardForm';

export const metadata: Metadata = {
  title: 'Role Scorecard | TrustedOps Resources',
  description:
    'Define outcomes, KPIs, scope, capabilities, and a 30/60/90 ramp plan for any role. Fill in and print.',
};

export default function RoleScorecardPage() {
  return (
    <>
      {/* Hide site chrome when printing so only the card renders */}
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
          <RoleScorecardForm />
        </div>
      </Container>
    </>
  );
}
