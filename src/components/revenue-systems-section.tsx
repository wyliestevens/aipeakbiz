"use client";

import { Phone, Star, RefreshCw, MessageCircle } from "lucide-react";
import { useDict } from "@/i18n/context";

const systemIcons = [Phone, Star, RefreshCw, MessageCircle];

export function RevenueSystemsSection() {
  const dict = useDict();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-bold tracking-widest text-brand uppercase mb-3">
            {dict.revenueSystems.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-5">
            {dict.revenueSystems.heading}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {dict.revenueSystems.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {dict.revenueSystems.systems.map((system, i) => {
            const Icon = systemIcons[i];
            return (
              <div
                key={i}
                className="relative bg-surface rounded-2xl border border-border p-8 md:p-10 hover:border-brand-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {system.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {system.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-text-muted mt-10 max-w-2xl mx-auto">
          {dict.revenueSystems.footer}
        </p>
      </div>
    </section>
  );
}
