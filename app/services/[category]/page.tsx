import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
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
    <Container className="py-16">
      {/* Back */}
      <Link
        href="/services"
        className="text-sm font-semibold text-brand-navy/60 hover:text-brand-navy"
      >
        ← All Roles
      </Link>

      {/* Header card */}
      <div className="mt-6 rounded-3xl border border-black/10 bg-gradient-to-br from-brand-teal/[0.06] to-white p-8 shadow-soft">
        <div className="text-[11px] font-bold tracking-widest text-brand-teal uppercase">
          TrustedOps
        </div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-brand-navy">
          {cat.name}
        </h1>
        <p className="mt-2 text-justify text-lg text-brand-navy/60">{cat.tagline}</p>
        <div className="mt-6 max-w-5xl space-y-4">
          {cat.intro.map((para, i) => (
            <p key={i} className="text-justify text-base leading-relaxed text-brand-navy/70">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Roles grid */}
      <div className="mt-10">
        <h2 className="mb-4 text-[11px] font-bold tracking-widest text-brand-navy/40 uppercase">
          Roles we place
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cat.roles.map((role) => (
            <div
              key={role.name}
              className="rounded-2xl border border-black/8 bg-white p-5 shadow-soft"
            >
              <div className="text-base font-semibold text-brand-navy">{role.name}</div>
              <p className="mt-2 text-justify text-sm leading-relaxed text-brand-navy/60">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-8 shadow-soft">
        <div className="text-xl font-semibold text-brand-navy">
          Ready to build your {cat.name.toLowerCase()} team?
        </div>
        <p className="mt-2 max-w-xl text-justify text-sm text-brand-navy/70">
          Tell us the roles you need and the outcomes you&apos;re working toward. We&apos;ll help
          you find the right people and set up a simple operating model.
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
