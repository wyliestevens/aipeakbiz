"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { BOOKING_URL } from "@/data/industries";
import { CTASection } from "@/components/cta-section";
import { FAQ, FAQSchema } from "@/components/faq";

const tiers = [
  {
    name: "Essentials",
    build: "$4,997",
    monthly: "$997",
    description: "Core AI front desk tools for businesses ready to stop missing calls.",
    features: [
      { name: "AI Voice Assistant (24/7)", included: true },
      { name: "Missed Call Text-Back", included: true },
      { name: "Appointment Reminders (24h + 2h)", included: true },
      { name: "Basic CRM", included: true },
      { name: "Booking Automation", included: true },
      { name: "AI Chatbot", included: false },
      { name: "Reputation Management Engine", included: false },
      { name: "No-Show Recovery", included: false },
      { name: "Dormant Customer Reactivation", included: false },
      { name: "Advanced Automations", included: false },
      { name: "Priority Support", included: false },
      { name: "Monthly Optimization Reports", included: false },
    ],
  },
  {
    name: "Growth",
    build: "$7,997",
    monthly: "$1,497",
    popular: true,
    description: "The complete system for businesses serious about growth. Our most popular tier.",
    features: [
      { name: "AI Voice Assistant (24/7)", included: true },
      { name: "Missed Call Text-Back", included: true },
      { name: "Appointment Reminders (24h + 2h)", included: true },
      { name: "Full CRM with Lead Pipeline", included: true },
      { name: "Booking Automation", included: true },
      { name: "AI Chatbot", included: true },
      { name: "Reputation Management Engine", included: true },
      { name: "No-Show Recovery", included: true },
      { name: "Dormant Customer Reactivation", included: false },
      { name: "Advanced Automations", included: false },
      { name: "Priority Support", included: false },
      { name: "Monthly Optimization Reports", included: false },
    ],
  },
  {
    name: "Peak: Full Business Intelligence System",
    build: "$14,997",
    monthly: "$2,497",
    description: "Not just automation. A strategic growth partner for businesses that want to dominate their market.",
    features: [
      { name: "Everything in Growth", included: true },
      { name: "Dormant Customer Reactivation Campaigns", included: true },
      { name: "Custom Automation Workflows", included: true },
      { name: "Monthly Performance Reports (revenue recovered, calls, reviews, no-show reduction)", included: true },
      { name: "Quarterly Strategy Reviews (live call to review data and plan next moves)", included: true },
      { name: "Predictive Revenue Forecasting (project next quarter based on trends)", included: true },
      { name: "Priority Support (same-day response, direct line)", included: true },
      { name: "Multi-Location Support", included: true },
      { name: "Competitor Review Monitoring", included: true },
    ],
  },
];

const pricingFAQ = [
  {
    question: "What is included in the system build?",
    answer:
      "The build includes complete configuration of your AI voice assistant, chatbot, CRM, automations, review system, and all integrations with your existing tools. We train the AI on your business, test everything, and hand it to you ready to go.",
  },
  {
    question: "Can I upgrade tiers later?",
    answer:
      "Yes. You can upgrade at any time. You pay the difference in the build fee plus the new monthly rate. Downgrades require a conversation with our team to adjust the system.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Monthly management is billed monthly. There is no long-term contract required on Essentials or Growth. The Founding System for chiropractic clinics requires a 12-month commitment.",
  },
  {
    question: "What if I cancel?",
    answer:
      "You can cancel monthly management at any time. The system is deactivated. You are not buying standalone software. You are getting a managed service that includes ongoing optimization, support, and updates.",
  },
  {
    question: "Do you offer refunds on the build?",
    answer:
      "The system build is custom work. It is non-refundable once configuration begins. We encourage a strategy call before committing so both sides are confident in the fit.",
  },
  {
    question: "How fast does the system pay for itself?",
    answer:
      "Most businesses recover the monthly management cost within the first 2 weeks of operation. The build cost typically pays for itself within 60 to 90 days based on recovered revenue from missed calls, no-shows, and new reviews alone.",
  },
];

export function PricingContent() {
  return (
    <>
      <FAQSchema items={pricingFAQ} />

      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display mb-6">
              Simple pricing. Real ROI.
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every tier includes a one-time system build plus monthly management. No hidden fees. No per-call charges. No surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-8 ${
                  tier.popular
                    ? "gradient-border bg-background ring-2 ring-accent-blue/30 relative"
                    : "glassmorphism"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-accent-blue text-white rounded-full">
                    Most Popular
                  </span>
                )}
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  {tier.name}
                </h2>
                <p className="text-sm text-text-secondary mb-6">{tier.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-mono text-text-primary">
                      {tier.build}
                    </span>
                    <span className="text-text-muted text-sm">one-time build</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold font-mono text-text-primary">
                      {tier.monthly}
                    </span>
                    <span className="text-text-muted text-sm">/month management</span>
                  </div>
                </div>
                <a
                  href={BOOKING_URL}
                  className={`${tier.popular ? "btn-primary" : "btn-secondary"} w-full text-center mb-6`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.name} className="flex items-center gap-2 text-sm">
                      {f.included ? (
                        <Check className="w-4 h-4 text-success shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-text-muted shrink-0" />
                      )}
                      <span className={f.included ? "text-text-secondary" : "text-text-muted"}>
                        {f.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              Pricing FAQ
            </h2>
          </motion.div>
          <FAQ items={pricingFAQ} />
        </div>
      </section>

      <CTASection heading="Ready to stop leaving money on the table?" />
    </>
  );
}
