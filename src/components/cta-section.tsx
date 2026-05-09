"use client";

import { BOOKING_URL, PHONE_TEL } from "@/data/industries";
import { useDict } from "@/i18n/context";

export function CTASection({ heading }: { heading?: string } = {}) {
  const dict = useDict();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-6">
            {heading || dict.cta.heading}
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            {dict.cta.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              className="btn-primary text-base px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.cta.bookCall}
            </a>
            <a
              href="#demo"
              className="btn-secondary text-base px-8 py-4"
            >
              {dict.cta.tryDemo}
            </a>
          </div>
          <p className="text-sm text-text-muted mt-6">
            {dict.cta.callDirect}
          </p>
        </div>
      </div>
    </section>
  );
}
