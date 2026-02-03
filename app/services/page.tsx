import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Services" };

const teams = [
  { name: "Operations & Admin", services: ["EA", "Office admin", "Scheduling"] },
  { name: "Finance", services: ["Bookkeeping", "AP/AR", "Payroll support"] },
  { name: "Customer Support", services: ["Tier 1 support", "QA", "Knowledge base"] },
  { name: "Marketing Ops", services: ["Design support", "Content ops", "Campaign admin"] },
  { name: "Data & Reporting", services: ["Dashboards", "ETL support", "Analytics"] },
  { name: "Tech", services: ["QA", "Front-end support", "Automation"] },
];

export default function servicesPage() {
  return (
    <Container className="py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">services & teams</h1>
          <p className="mt-4 max-w-2xl text-base text-brand-navy/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
        >
          Talk to us
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {teams.map((t) => (
          <div key={t.name} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <div className="text-lg font-semibold">{t.name}</div>
            <ul className="mt-3 space-y-2 text-sm text-brand-navy/70">
              {t.services.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
