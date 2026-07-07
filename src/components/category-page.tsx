"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { IndustryContent } from "@/data/industry-content";
import { BOOKING_URL, industries } from "@/data/industries";
import { slugifySubIndustry } from "@/data/sub-industry-content";
import { ReviewGrid } from "@/components/review-carousel";
import { RevenueSystemsSection } from "@/components/revenue-systems-section";
import { FAQ, FAQSchema } from "@/components/faq";
import { CTASection } from "@/components/cta-section";

interface CategoryPageProps {
  content: IndustryContent;
  /** When set, this is a sub-industry page — skip the sub-industries section. */
  parentSlug?: string;
}

export function CategoryPage({ content, parentSlug }: CategoryPageProps) {
  // Find the parent industry for this page (only for parent-level pages)
  const parentIndustry = !parentSlug
    ? industries.find((i) => i.slug === content.slug)
    : undefined;
  return (
    <>
      <FAQSchema items={content.faq} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-brand-50/50 to-transparent" />
        <div className="container-custom relative pt-28 pb-16 md:pt-36 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
              {content.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              {content.heroSubhead}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/free-assessment" className="btn-primary text-base px-8 py-4">
                Take the Free Assessment
              </Link>
              <a
                href={BOOKING_URL}
                className="btn-secondary text-base px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              What is costing your business money right now
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6"
              >
                <div className="text-xs font-mono text-brand mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {problem.description}
                </p>
                <p className="text-sm font-semibold text-brand">
                  {problem.cost}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Recovery Systems */}
      <RevenueSystemsSection />

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
              The Solution
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              How the AI front desk system works for your business
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
              Real Scenarios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              See the system in action
            </h2>
          </motion.div>
          <div className="space-y-6">
            {content.useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6 md:p-8 text-center"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-6">
              Systems that pay for themselves
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-sm text-text-muted mb-1">Starting at</p>
                <p className="text-3xl font-bold font-mono text-text-primary">$997</p>
                <p className="text-sm text-text-muted">deployment + $997/mo</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <p className="text-sm text-text-muted mb-1">Most popular</p>
                <p className="text-3xl font-bold font-mono text-text-primary">$1,597</p>
                <p className="text-sm text-text-muted">deployment + $1,497/mo</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <p className="text-sm text-text-muted mb-1">Full system</p>
                <p className="text-3xl font-bold font-mono text-text-primary">$1,997</p>
                <p className="text-sm text-text-muted">deployment + $2,497/mo</p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="text-brand hover:text-brand transition-colors text-sm font-medium"
            >
              View full pricing details &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              What our clients say
            </h2>
          </motion.div>
          <ReviewGrid subset={content.reviewIndices} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              Frequently asked questions
            </h2>
          </motion.div>
          <FAQ items={content.faq} />
        </div>
      </section>

      {/* Sub-Industries We Serve (only on parent industry pages) */}
      {parentIndustry && parentIndustry.subIndustries.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
                Specializations
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
                {parentIndustry.name} sub-industries we serve
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {parentIndustry.subIndustries.map((sub, i) => (
                <motion.div
                  key={sub}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/industries/${parentIndustry.slug}/${slugifySubIndustry(sub)}`}
                    className="flex items-center justify-between bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-5 hover:border-brand/40 hover:shadow-md transition-all group"
                  >
                    <span className="text-base font-medium text-text-primary group-hover:text-brand transition-colors">
                      {sub}
                    </span>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-brand transition-colors flex-shrink-0 ml-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
