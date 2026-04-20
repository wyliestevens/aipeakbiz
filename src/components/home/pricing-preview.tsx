"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/data/industries";

const tiers = [
  {
    name: "Essentials",
    build: "$4,997",
    monthly: "$997/mo",
    features: ["AI Voice Assistant", "Missed Call Text-Back", "Appointment Reminders", "Basic CRM"],
  },
  {
    name: "Growth",
    build: "$7,997",
    monthly: "$1,497/mo",
    popular: true,
    features: ["Everything in Essentials", "AI Chatbot", "Reputation Management", "No-Show Recovery", "Full CRM Pipeline"],
  },
  {
    name: "Peak",
    build: "$14,997",
    monthly: "$2,497/mo",
    features: ["Everything in Growth", "Dormant Customer Reactivation", "Advanced Automations", "Priority Support", "Monthly Optimization"],
  },
];

export function PricingPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display mb-4">
            Three tiers. One mission.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl p-6 ${
                tier.popular
                  ? "gradient-border bg-background ring-1 ring-accent-blue/30"
                  : "glassmorphism"
              }`}
            >
              {tier.popular && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent-blue/10 text-accent-blue rounded-full mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-text-primary">{tier.name}</h3>
              <div className="mt-3 mb-4">
                <span className="text-2xl font-bold font-mono text-text-primary">
                  {tier.build}
                </span>
                <span className="text-text-muted text-sm"> build</span>
                <span className="text-text-muted text-sm"> + </span>
                <span className="text-lg font-bold font-mono text-text-primary">
                  {tier.monthly}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                className={tier.popular ? "btn-primary w-full text-center text-sm" : "btn-secondary w-full text-center text-sm"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center">
          <Link
            href="/pricing"
            className="text-accent-blue hover:text-accent-violet transition-colors text-sm font-medium"
          >
            Full details on Pricing page &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
