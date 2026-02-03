// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // keep this on Node (safe default for email SDKs)

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    // Read env *inside* handler to avoid dev-time module evaluation errors
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.redirect(new URL("/contact?error=1", req.url));
    }

    const resend = new Resend(apiKey);

    const form = await req.formData();

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phoneRaw = String(form.get("phone") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();


    // Honeypot spam trap (should remain empty)
    const company = String(form.get("company") ?? "").trim();
    if (company) {
      // Pretend success (don’t tip off bots)
      return NextResponse.redirect(new URL("/contact?sent=1", req.url));
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.redirect(new URL("/contact?error=1", req.url));
    }
    if (message.length > 5000) {
      return NextResponse.redirect(new URL("/contact?error=1", req.url));
    }

    //Phone validation goes here
    const phoneOk = phoneRaw === "" || /^[0-9()+\-.\s]{6,20}$/.test(phoneRaw);
    if (!phoneOk) {
        return NextResponse.redirect(new URL("/contact?error=1", req.url));
      }

    const to = process.env.CONTACT_TO ?? "enquiries@trustedops.team";
    const from =
      process.env.CONTACT_FROM ??
      "TrustedOps Enquiries <enquiries@trustedops.team>";

    const subject = `TrustedOps enquiry — ${name}`;

    const text = [
      "New website enquiry",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "(not provided)"}`,
      "",
      "What are you looking to hire?",
      message,
    ].join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2 style="margin: 0 0 12px;">New website enquiry</h2>
        <p style="margin: 0 0 6px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 6px;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p style="margin: 12px 0 6px;"><strong>What are you looking to hire?</strong></p>
        <div style="white-space: pre-wrap; padding: 12px; border: 1px solid #e2e8f0; border-radius: 12px;">
          ${escapeHtml(message)}
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      text,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.redirect(new URL("/contact?error=1", req.url));
    }

    return NextResponse.redirect(new URL("/contact?sent=1", req.url));
  } catch (e) {
    console.error("Contact route error:", e);
    return NextResponse.redirect(new URL("/contact?error=1", req.url));
  }
}