import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CostCalculatorGuide } from '@/components/CostCalculatorGuide';
import { CostCalculatorForm } from '@/components/CostCalculatorForm';

export const metadata: Metadata = {
  title: 'Fully-Loaded Cost Calculator | TrustedOps Resources',
  description:
    'Compare the true fully-loaded cost of Direct Hire vs Employer of Record (EoR) vs BPO — monthly cost, 12-month total, and savings vs local hire.',
};

export default function CostCalculatorPage() {
  return (
    <>
      <CostCalculatorGuide />
      <Container className="py-10">
        <Link
          href="/resources"
          className="text-sm font-semibold text-brand-navy/70 hover:text-brand-navy"
        >
          ← Back to resources
        </Link>
        <div className="mt-6">
          <CostCalculatorForm />
        </div>
      </Container>
    </>
  );
}
