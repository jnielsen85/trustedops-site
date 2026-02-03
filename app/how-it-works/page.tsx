import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorksPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">How it works</h1>
      <p className="mt-4 max-w-2xl text-base text-brand-navy/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          "Intake & scoping",
          "Recruiting & shortlisting",
          "Onboarding & operating cadence",
        ].map((t) => (
          <div key={t} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <div className="text-sm font-semibold">{t}</div>
            <p className="mt-2 text-sm text-brand-navy/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
