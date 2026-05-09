"use client";

import { MindMap } from "@/components/mind-map";
import { useDict } from "@/i18n/context";

export function IndustriesWrapper() {
  const dict = useDict();

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            {dict.industries.heading}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {dict.industries.subheading}
          </p>
        </div>
        <MindMap />
      </div>
    </section>
  );
}
