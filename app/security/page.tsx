import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Security & operations" };

export default function SecurityPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Security & operations</h1>
      <p className="mt-4 max-w-2xl text-base text-brand-navy/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. This page is intentionally structured like a credibility anchor.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          { title: "Access controls", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { title: "Device & workspace", body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
          { title: "Data handling", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
          { title: "Continuity & escalation", body: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <div className="text-sm font-semibold text-brand-navy">{c.title}</div>
            <p className="mt-2 text-sm text-brand-navy/70">{c.body}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
