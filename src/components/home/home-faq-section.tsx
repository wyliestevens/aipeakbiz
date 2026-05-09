"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useDict } from "@/i18n/context";

export function HomeFAQSection() {
  const dict = useDict();
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0, 1]));

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            {dict.faq.heading}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {dict.faq.items.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => {
                  const next = new Set(openIndices);
                  if (next.has(i)) next.delete(i); else next.add(i);
                  setOpenIndices(next);
                }}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndices.has(i)}
              >
                <span className="text-base font-medium text-text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                    openIndices.has(i) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndices.has(i) && (
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
