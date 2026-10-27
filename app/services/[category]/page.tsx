import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card } from '@/components/Card';
import { CtaBand } from '@/components/CtaBand';
import { PageHero } from '@/components/PageHero';
import { PageSection } from '@/components/PageSection';
import { SERVICES, getCategoryBySlug } from '@/lib/services-data';

export function generateStaticParams() {
  return SERVICES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.tagline,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <>
      <PageHero
        kicker={
          <Link href="/services" className="text-sm font-semibold text-brand-navy/70 hover:text-brand-navy">
            ← All Roles
          </Link>
        }
        title={cat.name}
      >
        <p className="mt-3 text-lg text-brand-navy/70">{cat.tagline}</p>
        <div className="mt-6 space-y-4">
          {cat.intro.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-brand-navy/70">
              {para}
            </p>
          ))}
        </div>
      </PageHero>

      {/* Roles grid */}
      <PageSection tone="grey" eyebrow="Roles we place">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cat.roles.map((role) => (
            <Card key={role.name}>
              <h3 className="text-lg font-bold text-brand-navy">{role.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{role.description}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <CtaBand
        title={`Ready to build your ${cat.name.toLowerCase()} team?`}
        body="Tell us the roles you need and the outcomes you're working toward. We'll help you find the right people and set up a simple operating model."
        secondary={{ label: 'Cost Calculator', href: '/resources/cost-calculator' }}
      />
    </>
  );
}
