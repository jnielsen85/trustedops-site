"use client";

import { useState, FormEvent } from "react";
import { PhoneInput } from "react-international-phone";

interface FormErrors {
  email?: string;
  phone?: string;
}

export function ContactForm() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ email?: boolean; phone?: boolean }>({});

  // Email validation function
  const validateEmail = (email: string): boolean => {
    if (!email.trim()) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation function
  const validatePhone = (phone: string): boolean => {
    if (!phone.trim()) return false;
    // Basic validation: phone should have at least 10 digits
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 10;
  };

  // Validate individual field
  const validateField = (name: string, value: string): string | undefined => {
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!validateEmail(value)) return "Please enter a valid email address";
    }
    if (name === "phone") {
      if (!value.trim()) return "Phone number is required";
      if (!validatePhone(value)) return "Please enter a valid phone number";
    }
    return undefined;
  };

  // Handle field blur
  const handleBlur = (field: "email" | "phone") => {
    setTouched({ ...touched, [field]: true });
    const value = field === "email" ? email : phone;
    const error = validateField(field, value);
    setErrors({ ...errors, [field]: error });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const newErrors: FormErrors = {};
    
    // Validate email
    const emailError = validateField("email", email);
    if (emailError) newErrors.email = emailError;

    // Validate phone
    const phoneError = validateField("phone", phone);
    if (phoneError) newErrors.phone = phoneError;

    // If there are errors, prevent submission
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      setTouched({ email: true, phone: true });
      return;
    }

    // If no errors, allow form to submit normally
    setErrors({});
  };

  return (
    <form method="post" action="/api/contact" onSubmit={handleSubmit} className="mt-4 space-y-4">
      {/* Honeypot spam trap */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">Name</label>
        <input 
          name="name" 
          required 
          className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20" 
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">Email</label>
        <input 
          type="email" 
          name="email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (touched.email) {
              const error = validateField("email", e.target.value);
              setErrors({ ...errors, email: error });
            }
          }}
          onBlur={() => handleBlur("email")}
          className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
            errors.email && touched.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-black/10 focus:border-brand-teal focus:ring-brand-teal/20"
          }`}
        />
        {errors.email && touched.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">Phone</label>
        <div className={`mt-1 rounded-xl border px-3 py-2 ${
          errors.phone && touched.phone ? "border-red-500" : "border-black/10"
        }`}>
          <PhoneInput
            defaultCountry="au"
            value={phone}
            onChange={(value) => {
              setPhone(value);
              if (touched.phone) {
                const error = validateField("phone", value);
                setErrors({ ...errors, phone: error });
              }
            }}
            onBlur={() => handleBlur("phone")}
            inputClassName="!border-0 !shadow-none !outline-none !p-0 text-sm w-full"
          />
        </div>
        {errors.phone && touched.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
        )}
        {/* Ensure it submits with the form */}
        <input type="hidden" name="phone" value={phone} />
      </div>

      <div>
        <label className="text-xs font-semibold text-brand-navy/70">What are you looking to hire?</label>
        <textarea 
          name="message" 
          required 
          rows={4} 
          className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20" 
        />
      </div>

      <button 
        type="submit" 
        className="w-full rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95 transition-opacity"
      >
        Send
      </button>
    </form>
  );
}