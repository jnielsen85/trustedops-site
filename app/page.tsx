import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[620px] overflow-hidden flex items-center">

        {/* Full-bleed photo */}
        <div className="absolute inset-0">
          {/* Image starts at 22% from left — more zoom-out, right edge may clip */}
          <div className="absolute top-0 bottom-0 left-[22%] right-0">
            <Image
              src="/brand/twophworking.jpg"
              alt="Two people working together at a desk"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 8%' }}
              priority
            />
          </div>
          {/* Gradient: solid white on left, fading to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white from-[30%] via-white/70 via-[52%] to-transparent" />
        </div>

        {/* Content sits over the gradient */}
        <Container className="relative py-20">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-brand-navy/70">
              <span className="h-2 w-2 rounded-full bg-brand-teal" />
              Build offshore like it&apos;s in-house
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
              Better Talent Economics
            </h1>

            <p className="mt-5 text-justify text-base leading-relaxed text-brand-navy/70">
              Add capability without adding complexity. We help you hire great offshore team members
              while providing a light-touch ops layer so delivery stays consistent as you grow.{" "}
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
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-white"
              >
                What we do
              </Link>
            </div>
          </div>
        </Container>

      </section>

      {/* ── Operating model ───────────────────────────────────────────────────── */}
      <Section title="A simple operating model">

        {/* Process steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "Step 1",
              title: "Scope",
              body: "Tell us the role, the tasks, and the tools you use. We'll help you scope it.",
            },
            {
              step: "Step 2",
              title: "Recruit",
              body: "We present pre-vetted candidates for you to interview and choose.",
            },
            {
              step: "Step 3",
              title: "Go Live",
              body: "We handle contracts, payroll setup, and day-one readiness. You lead induction — they work for you daily while we run HR and compliance in the background.",
            },
          ].map((c) => (
            <div key={c.step} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-xs font-semibold tracking-widest uppercase text-brand-teal">{c.step}</div>
              <div className="mt-2 text-lg font-semibold text-brand-navy">{c.title}</div>
              <p className="mt-2 text-justify text-sm text-brand-navy/70">{c.body}</p>
            </div>
          ))}
        </div>

      </Section>
    </>
  );
}
