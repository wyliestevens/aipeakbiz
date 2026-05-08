"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { BOOKING_URL } from "@/data/industries";
import { CTASection } from "@/components/cta-section";

const tiers = [
  {
    name: "AI Front Desk Deployment",
    fullPay: "$4,997",
    installmentDown: "$1,997",
    installmentMonthly: "$850/mo x 4",
    monthly: "$997",
    description: "Core revenue recovery for businesses ready to stop missing calls and losing leads.",
    features: [
      { name: "AI Voice Assistant (24/7)*", included: true },
      { name: "Missed Call Text-Back", included: true },
      { name: "Appointment Reminders (24h + 2h)", included: true },
      { name: "Basic CRM", included: true },
      { name: "Booking Automation", included: true },
      { name: "AI Chatbot", included: false },
      { name: "AI Outbound Appointment Setter*", included: false },
      { name: "Reputation Management", included: false },
      { name: "No-Show Recovery", included: false },
      { name: "Dormant Customer Reactivation", included: false },
      { name: "Monthly Performance Reports", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Revenue Recovery Deployment",
    fullPay: "$7,997",
    installmentDown: "$2,997",
    installmentMonthly: "$1,400/mo x 4",
    monthly: "$1,497",
    popular: true,
    description: "The complete system for businesses serious about capturing every dollar of revenue. Our most popular deployment.",
    features: [
      { name: "AI Voice Assistant (24/7)*", included: true },
      { name: "Missed Call Text-Back", included: true },
      { name: "Appointment Reminders (24h + 2h)", included: true },
      { name: "Full CRM with Lead Pipeline", included: true },
      { name: "Booking Automation", included: true },
      { name: "AI Chatbot", included: true },
      { name: "AI Outbound Appointment Setter*", included: true },
      { name: "Reputation Management", included: true },
      { name: "No-Show Recovery", included: true },
      { name: "Dormant Customer Reactivation", included: false },
      { name: "Monthly Performance Reports", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "AI Revenue Deployment",
    fullPay: "$14,997",
    installmentDown: "$4,997",
    installmentMonthly: "$2,800/mo x 4",
    monthly: "$2,497",
    description: "A strategic growth partner with full business intelligence, ongoing optimization, and quarterly strategy reviews.",
    features: [
      { name: "Everything in Revenue Recovery", included: true },
      { name: "Dormant Customer Reactivation Campaigns", included: true },
      { name: "Custom Automation Workflows", included: true },
      { name: "Monthly Performance Reports", included: true },
      { name: "Quarterly Strategy Reviews (live call)", included: true },
      { name: "Predictive Revenue Forecasting", included: true },
      { name: "Priority Support (same-day response)", included: true },
      { name: "Multi-Location Support", included: true },
      { name: "Competitor Review Monitoring", included: true },
    ],
  },
];

const pricingFAQ = [
  {
    question: "What is included in the deployment?",
    answer:
      "The deployment includes complete configuration of your AI voice assistant, chatbot, CRM, automations, review system, and all integrations with your existing tools. We train the AI on your business, test everything, and hand it to you ready to go.",
  },
  {
    question: "What are the payment options?",
    answer:
      "You can pay the deployment cost in full upfront, or put a portion down today and spread the balance over monthly installments. Monthly management is billed separately each month. We will walk you through the options during your strategy call.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. You can upgrade at any time. You pay the difference in the deployment fee plus the new monthly rate. Downgrades require a conversation with our team to adjust the system.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Monthly management is billed monthly. There is no long-term contract required.",
  },
  {
    question: "What if I cancel?",
    answer:
      "You can cancel monthly management at any time. The system is deactivated. You are not buying standalone software. You are getting a managed service that includes ongoing optimization, support, and updates.",
  },
  {
    question: "How fast does the system pay for itself?",
    answer:
      "Most businesses recover the monthly management cost within the first 2 weeks of operation. The deployment cost typically pays for itself within 60 to 90 days based on recovered revenue from missed calls, no-shows, and new reviews alone.",
  },
];

export function PricingContent() {
  const [paymentType, setPaymentType] = useState<"full" | "installment">("full");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display mb-6">
            Transparent pricing. Real ROI.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Every deployment includes full system build, AI configuration, ongoing management, and support. Choose the option that fits your business.
          </p>

          {/* Payment toggle */}
          <div className="inline-flex items-center gap-1 bg-background-alt rounded-lg p-1 border border-border">
            <button
              onClick={() => setPaymentType("full")}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                paymentType === "full"
                  ? "bg-white text-text-primary shadow-sm"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              Pay in Full
            </button>
            <button
              onClick={() => setPaymentType("installment")}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                paymentType === "installment"
                  ? "bg-white text-text-primary shadow-sm"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              Installment Plan
            </button>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-7 border ${
                  tier.popular
                    ? "border-brand bg-white ring-1 ring-brand/20 relative"
                    : "border-border bg-white"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-brand text-white rounded-full">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-bold text-text-primary mb-2">
                  {tier.name}
                </h2>
                <p className="text-sm text-text-secondary mb-6">{tier.description}</p>

                {/* Pricing display */}
                <div className="mb-6 pb-6 border-b border-border-light">
                  {paymentType === "full" ? (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-text-primary">
                          {tier.fullPay}
                        </span>
                        <span className="text-sm text-text-muted">deployment</span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-bold text-text-primary">
                          {tier.monthly}
                        </span>
                        <span className="text-sm text-text-muted">/mo management</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-text-primary">
                          {tier.installmentDown}
                        </span>
                        <span className="text-sm text-text-muted">today</span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-lg font-bold text-text-primary">
                          {tier.installmentMonthly}
                        </span>
                        <span className="text-sm text-text-muted">remaining</span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-lg font-bold text-text-primary">
                          + {tier.monthly}
                        </span>
                        <span className="text-sm text-text-muted">/mo management</span>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href={BOOKING_URL}
                  className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all mb-6 ${
                    tier.popular
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "border border-border text-text-primary hover:bg-background-alt"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Strategy Call
                </a>

                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f.name} className="flex items-center gap-2 text-sm">
                      {f.included ? (
                        <Check className="w-4 h-4 text-success shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-text-muted/40 shrink-0" />
                      )}
                      <span className={f.included ? "text-text-secondary" : "text-text-muted"}>
                        {f.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-6 text-center max-w-2xl mx-auto">
            *AI Voice Assistant and AI Outbound Calls carry additional per-minute usage costs beyond the monthly subscription. Exact pricing depends on call volume and will be covered during your strategy call.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              Pricing FAQ
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {pricingFAQ.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openFAQ === i}
                >
                  <span className="text-base font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to recover the revenue you have been missing?" />
    </>
  );
}
