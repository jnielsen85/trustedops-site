import type { Metadata } from 'next';
import Link from 'next/link';
import { CostCalculatorGuide } from '@/components/CostCalculatorGuide';
import { CostCalculatorForm } from '@/components/CostCalculatorForm';
import { PageHero } from '@/components/PageHero';
import { PageSection } from '@/components/PageSection';

export const metadata: Metadata = {
  // The root layout's title template appends "— TrustedOps"
  title: 'Fully-Loaded Cost Calculator',
  description:
    'Compare the true fully-loaded cost of an Australian direct hire with a TrustedOps specialist — monthly cost, 12-month total, and savings vs local hire.',
};

export default function CostCalculatorPage() {
  return (
    <>
      <PageHero
        kicker={
          <Link href="/resources" className="text-sm font-semibold text-brand-navy/70 hover:text-brand-navy">
            ← Back to resources
          </Link>
        }
        title="Fully-Loaded Cost Calculator"
      >
        <p className="mt-3 text-lg text-brand-navy/70">
          Australian Direct Hire vs TrustedOps — true cost, not just base salary.
        </p>
      </PageHero>

      <PageSection tone="grey">
        <CostCalculatorGuide />
        <div className="mt-5">
          <CostCalculatorForm />
        </div>
      </PageSection>
    </>
  );
}
