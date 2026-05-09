"use client";

import { Zap, MessageSquare, CalendarCheck, Wrench } from "lucide-react";
import { useDict } from "@/i18n/context";

const stepIcons = [Zap, MessageSquare, CalendarCheck, Wrench];

export function HowItWorksSection() {
  const dict = useDict();

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            {dict.howItWorks.heading}
          </h2>
          <p className="text-lg text-text-secondary">
            {dict.howItWorks.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {dict.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <div className="text-xs font-bold text-brand uppercase tracking-wider mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
