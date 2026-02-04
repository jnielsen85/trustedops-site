import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the offshore teams and service lines TrustedOps can help you build and run.",
};

const teams = [
  {
    name: "Accounting & Finance",
    services: [
      "Accountants",
      "Bookkeeping support",
      "AP/AR",
      "Payroll support",
      "Financial Analysis",
    ],
  },
  {
    name: "Construction Services",
    services: [
      "Draftsman",
      "Estimators",
      "AutoCAD/CAD Designers",
      "Construction Surveyor",
      "Architects",
      "Engineers",
    ],
  },
  {
    name: "Creative and Marketing",
    services: [
      "Graphic design",
      "Video editing",
      "Social media coordination",
      "PPC / paid media support",
      "Web development",
    ],
  },
  {
    name: "Admin / Back Office Support",
    services: [
      "Executive assistant (EA)",
      "Administrative assistant / office admin",
      "Customer support representative",
      "Data entry / CRM administration",
      "Scheduling & inbox coordination",
    ],
  },
  {
    name: "Real Estate",
    services: [
      "Listings & marketing admin",
      "CRM / database management",
      "Leasing support (applications, screening packs)",
      "Maarket Research",
      "Document prep (contracts, forms, inspections)",
    ],
  },
  {
    name: "IT / Tech",
    services: [
      "QA tester",
      "Front-end web developer",
      "Automation / scripting support",
      "IT support / helpdesk (Tier 1)",
      "Sysadmin / network support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-16">
     <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-brand-teal/[0.06] to-white p-8 shadow-soft">
      {/* Top bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-semibold text-brand-navy/60">
            Services
          </div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            Add Teammates, Not Overhead
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-navy/70">
            TrustedOps helps Australian businesses find and build offshore
            teams in the Philippines, without the BPO feel. We recruit the
            right people for your roles, embed them into your way of working,
            and support them with light-touch ops (onboarding, process, tooling
            and reporting) so delivery stays consistent as you grow.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-soft hover:bg-black/[0.02]"
          >
            Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Talk to us
          </Link>
        </div>
      </div>
     </div>
      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {teams.map((t) => (
          <div
            key={t.name}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft"
          >
            <div className="text-lg font-semibold">{t.name}</div>
            <ul className="mt-3 space-y-2 text-sm text-brand-navy/70">
              {t.services.map((r) => (
                <li key={r} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-8 shadow-soft">
        <div className="text-xl font-semibold">Not sure where to start?</div>
        <p className="mt-2 max-w-2xl text-sm text-brand-navy/70">
          Tell us the roles you’re trying to fill and the outcomes you need.
          We’ll recommend an initial team shape and a simple operating model to
          get traction quickly.
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