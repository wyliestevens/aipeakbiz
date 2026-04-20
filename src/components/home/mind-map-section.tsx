"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { MindMap } from "@/components/mind-map";

export function MindMapSection() {
  return (
    <SectionWrapper id="industries">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display mb-4">
          Find your business. See your future.
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Click any industry to see how AI Peak Biz saves time, books
          appointments, and recovers revenue in your world.
        </p>
      </div>
      <MindMap />
    </SectionWrapper>
  );
}
