"use client";

import { useState } from "react";
import { BOOKING_URL } from "@/data/industries";
import { CheckCircle, Loader2 } from "lucide-react";
import { useDict } from "@/i18n/context";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/8G7oorGsCPDIlU76HPkb/webhook-trigger/b6c36035-51b7-4f92-b3ba-b9e01fcbe4c9";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function HeroSection() {
  const dict = useDict();
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
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
      setPhoneError(dict.demo.phoneError);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          phone: `+1${digits}`,
          consent: true,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setSubmitError(dict.demo.errorMessage);
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-white border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-colors text-sm";

  return (
    <section id="demo" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-wide text-brand uppercase mb-4">
            {dict.hero.eyebrow}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
            {dict.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.hero.subheadline}
          </p>
        </div>

        {/* Embedded demo form */}
        <div className="max-w-md mx-auto">
          {status === "success" ? (
            <div className="bg-success-light rounded-xl p-8 flex flex-col items-center gap-4 text-center border border-success/20">
              <CheckCircle className="w-12 h-12 text-success" />
              <p className="text-xl font-semibold text-text-primary">{dict.demo.successTitle}</p>
              <p className="text-text-secondary leading-relaxed">
                {dict.demo.successMessage}
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-border p-6">
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="first_name"
                  placeholder={dict.demo.firstName}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className={inputClasses}
                />

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={dict.demo.phone}
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
                    {dict.demo.consent}
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
                      {dict.demo.submitting}
                    </>
                  ) : (
                    dict.demo.submit
                  )}
                </button>

                {submitError && (
                  <p className="text-xs text-red-600 text-center">{submitError}</p>
                )}
              </form>
            </div>
          )}

          <p className="text-sm text-text-muted text-center mt-4">
            {dict.hero.formBelow}
          </p>

          <p className="text-sm text-text-secondary text-center mt-6">
            {dict.hero.preferToTalk}{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              {dict.hero.bookCall}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
