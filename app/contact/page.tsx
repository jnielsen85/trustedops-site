// app/contact/page.tsx
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const metadata: Metadata = { title: "Contact Us" };

type SP = { sent?: string; error?: string };

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<SP>;
}) {
  const sp = (await searchParams) ?? {};
  const sent = sp.sent === "1";
  const error = sp.error === "1";

  return (
    <>
      <PageHero kicker={<SectionEyebrow>Contact</SectionEyebrow>} title="Contact Us">
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          Tell us about the roles you&apos;re looking to fill or the outcomes you need. We&apos;ll get back to you within
          one business day to understand your situation and explore how TrustedOps can help.
        </p>
      </PageHero>

      <PageSection tone="grey">
        {sent && (
          <div className="mb-8 rounded-2xl border border-brand-teal/30 bg-white p-4 text-sm text-brand-navy">
            Thanks — we got your message.
          </div>
        )}
        {error && (
          <div className="mb-8 rounded-2xl border border-red-200 bg-white p-4 text-sm text-brand-navy">
            Something went wrong — please try again.
          </div>
        )}

        <div className="grid items-start gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-lg font-bold text-brand-navy">Contact form</h2>
            <ContactForm />
          </Card>

          <Card>
            <h2 className="text-lg font-bold text-brand-navy">Want to chat with us?</h2>
            <a
              href="https://calendar.app.google/efdm6a8CSfFjEXSdA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-brand-teal px-6 py-3 text-sm font-semibold text-brand-teal hover:bg-brand-teal/5"
            >
              Book a 30-minute call
            </a>
          </Card>
        </div>
      </PageSection>
    </>
  );
}
