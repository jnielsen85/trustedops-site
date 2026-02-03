import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-brand-navy/70">
                <span className="h-2 w-2 rounded-full bg-brand-teal" />
                MVP marketing site (lorem for now)
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                Better Talent Economics
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-navy/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                >
                  Book a call
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-black/[0.03]"
                >
                  How it works
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-8 shadow-soft">
                <div className="text-sm font-semibold text-brand-navy">What we do</div>
                <ul className="mt-4 space-y-3 text-sm text-brand-navy/70">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Consectetur adipiscing elit</li>
                  <li>• Sed do eiusmod tempor</li>
                  <li>• Ut enim ad minim veniam</li>
                </ul>
                <div className="mt-6 rounded-2xl bg-white p-4">
                  <div className="text-xs font-semibold tracking-widest text-brand-teal uppercase">CTA</div>
                  <div className="mt-2 text-sm text-brand-navy/70">
                    Lorem ipsum dolor sit amet —{" "}
                    <Link href="/contact" className="font-semibold text-brand-navy underline decoration-brand-teal/60 underline-offset-4">
                      talk to us
                    </Link>.
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
            { title: "Step 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { title: "Step 2", body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Step 3", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-xs font-semibold tracking-widest text-brand-teal uppercase">{c.title}</div>
              <div className="mt-2 text-lg font-semibold text-brand-navy">{c.title} title</div>
              <p className="mt-2 text-sm text-brand-navy/70">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trust" title="Security & operations built in">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <div className="text-sm font-semibold text-brand-navy">Controls</div>
            <p className="mt-2 text-sm text-brand-navy/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
            <div className="text-sm font-semibold text-brand-navy">Governance</div>
            <p className="mt-2 text-sm text-brand-navy/70">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/security"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-black/[0.03]"
          >
            View security & ops
          </Link>
        </div>
      </Section>

      <Section eyebrow="Resources" title="Practical playbooks (MDX-powered)">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <p className="text-sm text-brand-navy/70">
            Lorem ipsum dolor sit amet. See the Resources section for an example MDX article.
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
