"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";

export function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <form method="post" action="/api/contact" className="mt-4 space-y-4">
      {/* Honeypot spam trap */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">Name</label>
        <input name="name" required className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm" />
      </div>

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">Email</label>
        <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm" />
      </div>

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">Phone</label>
        <div className="mt-1 rounded-xl border border-black/10 px-3 py-2">
          <PhoneInput
            defaultCountry="au"
            value={phone}
            onChange={setPhone}
            inputClassName="!border-0 !shadow-none !outline-none !p-0 text-sm w-full"
          />
        </div>
        {/* Ensure it submits with the form */}
        <input type="hidden" name="phone" value={phone} />
      </div>

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">What are you looking to hire?</label>
        <textarea name="message" required rows={4} className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm" />
      </div>

      <button type="submit" className="w-full rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95">
        Send
      </button>
    </form>
  );
}