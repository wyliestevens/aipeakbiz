"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Will my customers hate talking to an AI?",
    answer: "Most customers do not even realize they are talking to an AI. The voice sounds natural, answers their questions, and books them quickly. What customers actually hate is getting sent to voicemail or waiting hours for a callback. Fast, helpful responses win every time.",
  },
  {
    question: "How much does this cost?",
    answer: "Deployments start at $4,997 with monthly management starting at $997/mo. We offer flexible payment options so you can pay the deployment cost in full or spread it over monthly installments. The system typically pays for itself within the first few weeks from recovered revenue alone.",
  },
  {
    question: "Does this replace my staff?",
    answer: "No. This replaces the calls your staff cannot get to. It covers after-hours, weekends, hold times, and overflow. Your team stays focused on the customers in front of them. The AI handles the ones trying to reach you.",
  },
  {
    question: "How difficult is the setup?",
    answer: "For you, there is no setup. This is a done-for-you service. We handle everything: AI configuration, voice training, calendar integration, CRM setup, and testing. Most businesses are live within 5 to 10 business days.",
  },
  {
    question: "What industries does this work for?",
    answer: "Any service business that books appointments or takes calls from customers. We work with roofers, HVAC companies, plumbers, electricians, clinics, dental offices, law firms, salons, auto shops, and dozens of other industries.",
  },
  {
    question: "What support is included?",
    answer: "Every deployment includes hands-on optimization and refinement to ensure your AI system is functioning correctly for your workflow. Monthly management covers ongoing monitoring, adjustments, and support. If something needs to change, we handle it.",
  },
];

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            Common questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-medium text-text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
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
  );
}
