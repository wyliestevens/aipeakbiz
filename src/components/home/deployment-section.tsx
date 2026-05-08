import { Check } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL } from "@/data/industries";

const deployments = [
  {
    name: "AI Front Desk Deployment",
    deployment: "$4,997",
    monthly: "$997/mo",
    description: "Core revenue recovery for businesses ready to stop missing calls.",
    highlights: [
      "AI Voice Assistant (24/7)",
      "Missed Call Text-Back",
      "Appointment Booking & Reminders",
      "Basic CRM",
    ],
  },
  {
    name: "Revenue Recovery Deployment",
    deployment: "$7,997",
    monthly: "$1,497/mo",
    popular: true,
    description: "The complete system for businesses serious about capturing every dollar of revenue.",
    highlights: [
      "Everything in AI Front Desk",
      "AI Chatbot",
      "AI Outbound Appointment Setter",
      "Reputation Management",
      "No-Show Recovery",
    ],
  },
  {
    name: "AI Revenue Deployment",
    deployment: "$14,997",
    monthly: "$2,497/mo",
    description: "A strategic growth partner with full business intelligence and ongoing optimization.",
    highlights: [
      "Everything in Revenue Recovery",
      "Dormant Customer Reactivation",
      "Monthly Performance Reports",
      "Quarterly Strategy Reviews",
      "Multi-Location Support",
    ],
  },
];

export function DeploymentSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            Flexible deployment options
          </h2>
          <p className="text-lg text-text-secondary">
            Every deployment includes full system build, AI configuration, ongoing management, and support. Flexible payment options available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deployments.map((tier) => (
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
              <h3 className="text-lg font-bold text-text-primary mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-text-secondary mb-5">{tier.description}</p>
              <div className="mb-1">
                <span className="text-3xl font-bold text-text-primary">
                  {tier.deployment}
                </span>
                <span className="text-sm text-text-muted ml-1">deployment</span>
              </div>
              <div className="mb-5">
                <span className="text-xl font-bold text-text-primary">
                  {tier.monthly}
                </span>
                <span className="text-sm text-text-muted ml-1">management</span>
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
                  tier.popular
                    ? "bg-brand text-white hover:bg-brand-dark"
                    : "border border-border text-text-primary hover:bg-background-alt"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Strategy Call
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-text-muted">
            Flexible payment options available. Pay in full or spread the deployment cost over monthly installments.
          </p>
          <p className="text-xs text-text-muted">
            AI Voice and Outbound Calls carry additional per-minute usage costs. Details covered during your strategy call.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mt-2"
          >
            View full pricing details
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
