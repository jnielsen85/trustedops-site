import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SERVICES } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'Roles',
  description:
    'Explore the offshore teams and service lines TrustedOps can help you build and run.',
};

export default function ServicesPage() {
  return (
    <Container className="py-16">
      {/* Hero card */}
      <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-brand-teal/[0.06] to-white p-8 shadow-soft">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold text-brand-navy/60">Roles</div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-brand-navy">
              Add Teammates, Not Overhead
            </h1>
            <p className="mt-4 text-justify text-base text-brand-navy/70">
              TrustedOps helps Australian businesses build offshore teams in the Philippines —
              without the BPO feel. We recruit the right people, embed them into your way of
              working, and support them so delivery stays consistent as you grow.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Talk to us
          </Link>
        </div>
      </div>

      {/* Category grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/services/${cat.slug}`}
            className="group flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-soft transition hover:border-brand-teal/30 hover:shadow-md"
          >
            <div className="text-lg font-semibold text-brand-navy transition-colors group-hover:text-brand-teal">
              {cat.name}
            </div>
            <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-brand-navy/60">
              {cat.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cat.roles.map((role) => (
                <span
                  key={role.name}
                  className="rounded-full border border-black/8 bg-black/[0.02] px-2.5 py-0.5 text-[11px] font-medium text-brand-navy/55"
                >
                  {role.name}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm font-semibold text-brand-teal">View roles →</div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-8 shadow-soft">
        <div className="text-xl font-semibold text-brand-navy">Not sure where to start?</div>
        <p className="mt-2 max-w-2xl text-justify text-sm text-brand-navy/70">
          Tell us the roles you&apos;re trying to fill and the outcomes you need. We&apos;ll
          recommend an initial team shape and a simple operating model to get traction quickly.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Container>
  );
}
