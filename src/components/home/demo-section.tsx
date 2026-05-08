"use client";

import { useState } from "react";
import { Phone, CheckCircle, Loader2 } from "lucide-react";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/8G7oorGsCPDIlU76HPkb/webhook-trigger/b6c36035-51b7-4f92-b3ba-b9e01fcbe4c9";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function DemoSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [phoneError, setPhoneError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");
    setSubmitError("");

    if (honeypot) {
      setStatus("success");
      return;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      setPhoneError("Please enter a valid 10-digit US phone number.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: `+1${digits}`,
          business_name: businessName,
          consent: true,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email us at wylie@aipeakbiz.com."
      );
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-colors text-sm";

  return (
    <section id="demo" className="section-padding">
      <div className="container-custom">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
              Try the AI yourself
            </h2>
            <p className="text-lg text-text-secondary">
              Fill out the form below and our AI voice assistant will call you within 60 seconds. Experience exactly what your customers would hear.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-success-light rounded-xl p-8 flex flex-col items-center gap-4 text-center border border-success/20">
              <CheckCircle className="w-12 h-12 text-success" />
              <p className="text-xl font-semibold text-text-primary">Got it!</p>
              <p className="text-text-secondary leading-relaxed">
                Our AI voice assistant will be calling you in about 60 seconds. Make sure your phone is nearby.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-border p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-semibold text-text-primary">
                  Live AI Demo Call
                </h3>
              </div>
              <p className="text-sm text-text-muted mb-5">
                No obligation. No sales pitch. Just hear the AI in action.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className={inputClasses}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputClasses}
                />

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => {
                      setPhone(formatPhone(e.target.value));
                      if (phoneError) setPhoneError("");
                    }}
                    required
                    className={inputClasses}
                  />
                  {phoneError && (
                    <p className="text-xs text-red-600 mt-1">{phoneError}</p>
                  )}
                </div>

                <input
                  type="text"
                  name="business_name"
                  placeholder="Business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                  className={inputClasses}
                />

                {/* Honeypot */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 accent-brand"
                  />
                  <span className="text-xs text-text-muted leading-relaxed">
                    I agree to receive an automated demo call at the number provided from AI Peak Biz. Message and data rates may apply. I understand this consent is not a condition of purchase.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full text-sm px-6 py-3.5 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Calling you...
                    </>
                  ) : (
                    "Get Your Live Demo Call"
                  )}
                </button>

                {submitError && (
                  <p className="text-xs text-red-600 text-center">{submitError}</p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
