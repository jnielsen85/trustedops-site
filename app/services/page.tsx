import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { PageSection } from '@/components/PageSection';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { SERVICES } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'Roles',
  description:
    'Explore the offshore teams and service lines TrustedOps can help you build and run.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker={<SectionEyebrow>Roles</SectionEyebrow>}
        title="Add Teammates, Not Overhead"
        image={{
          src: '/brand/phmanhomework.jpg',
          alt: 'Offshore team member working at a desk',
          position: 'left center',
        }}
      >
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          TrustedOps helps Australian businesses build offshore teams in the Philippines — without the BPO feel. We
          recruit the right people, embed them into your way of working, and support them so delivery stays consistent
          as you grow.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
        >
          Talk to us
        </Link>
      </PageHero>

      {/* Category grid */}
      <PageSection tone="grey">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((cat) => (
            <Link key={cat.slug} href={`/services/${cat.slug}`} className="group flex">
              <Card className="flex flex-1 flex-col transition-colors group-hover:border-brand-teal/50">
                <h2 className="text-lg font-bold text-brand-navy transition-colors group-hover:text-brand-teal">
                  {cat.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/70">{cat.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.roles.map((role) => (
                    <span
                      key={role.name}
                      className="rounded-full border border-black/10 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-brand-navy/70"
                    >
                      {role.name}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm font-semibold text-brand-teal">View roles →</div>
              </Card>
            </Link>
          ))}
        </div>
      </PageSection>

      <CtaBand
        title="Not sure where to start?"
        body="Tell us the roles you're trying to fill and the outcomes you need. We'll recommend an initial team shape and a simple operating model to get traction quickly."
        primary={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
