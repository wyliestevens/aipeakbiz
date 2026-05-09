"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL } from "@/data/industries";
import { useDict, useLang } from "@/i18n/context";

const deploymentPricing = [
  { fullPay: "$4,997", installmentMonthly: "$1,829", monthly: "$997/mo" },
  { fullPay: "$7,997", installmentMonthly: "$2,829", monthly: "$1,497/mo", popular: true },
  { fullPay: "$14,997", installmentMonthly: "$4,996", monthly: "$2,497/mo" },
];

export function DeploymentSection() {
  const dict = useDict();
  const lang = useLang();
  const prefix = lang === "es" ? "/es" : "";
  const [paymentType, setPaymentType] = useState<"full" | "installment">("full");

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            {dict.deployment.heading}
          </h2>
          <p className="text-lg text-text-secondary">
            {dict.deployment.subheading}
          </p>
        </div>

        {/* Payment toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 bg-background-alt rounded-lg p-1 border border-border">
            <button
              onClick={() => setPaymentType("full")}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                paymentType === "full"
                  ? "bg-white text-text-primary shadow-sm"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {dict.deployment.payInFull}
            </button>
            <button
              onClick={() => setPaymentType("installment")}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                paymentType === "installment"
                  ? "bg-white text-text-primary shadow-sm"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {dict.deployment.installmentPlan}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dict.deployment.tiers.map((tier, i) => {
            const pricing = deploymentPricing[i];
            return (
              <div
                key={i}
                className={`rounded-xl p-7 border ${
                  pricing.popular
                    ? "border-brand bg-white ring-1 ring-brand/20 relative"
                    : "border-border bg-white"
                }`}
              >
                {pricing.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-brand text-white rounded-full">
                    {dict.deployment.mostPopular}
                  </span>
                )}
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-text-secondary mb-5">{tier.description}</p>

                <div className="mb-5 pb-5 border-b border-border-light">
                  {paymentType === "full" ? (
                    <>
                      <div>
                        <span className="text-3xl font-bold text-text-primary">
                          {pricing.fullPay}
                        </span>
                        <span className="text-sm text-text-muted ml-1">{dict.deployment.deploymentLabel}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-xl font-bold text-text-primary">
                          {pricing.monthly}
                        </span>
                        <span className="text-sm text-text-muted ml-1">{dict.deployment.managementLabel}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <span className="text-3xl font-bold text-text-primary">
                          {pricing.installmentMonthly}
                        </span>
                        <span className="text-sm text-text-muted ml-1">{dict.deployment.perMonthFor6}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-lg font-bold text-text-primary">
                          then {pricing.monthly}
                        </span>
                        <span className="text-sm text-text-muted ml-1">{dict.deployment.thenOngoing}</span>
                      </div>
                    </>
                  )}
                </div>

                <ul className="space-y-2.5 mb-6">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{h}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                    pricing.popular
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "border border-border text-text-primary hover:bg-background-alt"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.deployment.bookCall}
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-xs text-text-muted">
            {dict.deployment.usageCost}
          </p>
          <Link
            href={`${prefix}/pricing`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mt-2"
          >
            {dict.deployment.viewPricing}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
