"use client";

import { Heart, Headphones, Settings, BarChart3, Users, Shield } from "lucide-react";
import { useDict } from "@/i18n/context";

const reasonIcons = [Heart, Headphones, Settings, BarChart3, Users, Shield];

export function WhySection() {
  const dict = useDict();

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            {dict.why.heading}
          </h2>
          <p className="text-lg text-text-secondary">
            {dict.why.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dict.why.reasons.map((reason, i) => {
            const Icon = reasonIcons[i];
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
