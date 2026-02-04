import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-8">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-brand-navy/70">
                <span className="h-2 w-2 rounded-full bg-brand-teal" />
                Build offshore like it’s in-house
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                Better Talent Economics
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-navy/70">
                Add capability without adding complexity. We help you hire great offshore team members while
                providing a light-touch ops layer so delivery stays consistent as you grow.{" "}
                <span className="font-semibold text-brand-navy">More capacity. Lower costs.</span>
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                >
                  Contact Us
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-black/[0.03]"
                >
                  what we do
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-brand-teal/[0.06] to-white p-8 shadow-soft">
                <div className="text-sm font-semibold text-brand-navy">What we do</div>

                <ul className="mt-4 space-y-3 text-sm text-brand-navy/70">
  {[
    "Recruit exceptional team members to fill your roles",
    "Work with you to set them up as an extension of your team",
    "Handle contracts, payroll, onboarding and day-one readiness",
    "Provide lightweight support and consultation when and where needed",
  ].map((item) => (
    <li key={item} className="flex gap-2">
      <span aria-hidden="true" className="mt-[2px]">
        •
      </span>
      <span>{item}</span>
    </li>
  ))}
</ul>
<div className="mt-4 inline-block text-sm italic text-brand-teal/80">
  All at a fraction of the cost of local hiring.
</div>

                <div className="mt-6 rounded-2xl bg-white p-4">
                  <div className="text-xs font-semibold tracking-widest text-brand-teal uppercase">Next step</div>
                  <div className="mt-2 text-sm text-brand-navy/70">
                    Tell us your hiring needs and the outcomes you want—we’ll help shape the right offshore team and
                    a simple operating model.{" "}
                    <Link
                      href="/contact"
                      className="font-semibold text-brand-navy underline decoration-brand-teal/60 underline-offset-4"
                    >
                      Talk to us
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="Process" title="A simple operating model">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "Step 1",
              title: "Scope & success metrics",
              body: 'Define the role(s), outcomes and what “good” looks like.',
            },
            {
              step: "Step 2",
              title: "Recruit & shortlist",
              body: "We find the talent; you meet only the best candidates and decide.",
            },
            {
              step: "Step 3",
              title: "Go-live & operating cadence",
              body: "Contracts and payroll are set, access sorted, and the operating rhythm keeps delivery on track.",
            },
          ].map((c) => (
            <div key={c.step} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-xs font-semibold tracking-widest text-brand-teal uppercase">{c.step}</div>
              <div className="mt-2 text-lg font-semibold text-brand-navy">{c.title}</div>
              <p className="mt-2 text-sm text-brand-navy/70">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Resources" title="Practical playbooks">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <p className="text-sm text-brand-navy/70">
            Start with proven playbooks for role design, onboarding, and operating rhythm—so your team ramps quickly
            and stays consistent.
          </p>
          <div className="mt-4">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
            >
              Browse resources
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}