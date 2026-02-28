// app/contact/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

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
    <Container className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-justify text-base text-brand-navy/70">
        Tell us about the roles you're looking to fill or the outcomes you need. We'll get back to you within one business day to understand your situation and explore how TrustedOps can help.
      </p>

      {sent && (
        <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-4 text-sm">
          Thanks — we got your message.
        </div>
      )}
      {error && (
        <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-4 text-sm">
          Something went wrong — please try again.
        </div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
          <div className="text-sm font-semibold">Contact form</div>
          <ContactForm />
        </div>

        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-black/[0.04] p-6 shadow-soft">
          <div className="text-sm font-semibold">Want to chat with us?</div>
          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-6 text-sm text-brand-navy/70">
          <a
  href="https://calendar.app.google/efdm6a8CSfFjEXSdA"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-semibold text-brand-teal hover:underline"
>
  Book a 30-minute call
</a>
          </div>
        </div>
      </div>
    </Container>
  );
}