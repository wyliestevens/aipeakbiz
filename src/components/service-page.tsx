"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle, AlertTriangle, Wrench, Building2 } from "lucide-react";
import { BOOKING_URL } from "@/data/industries";
import { ReviewCarousel } from "@/components/review-carousel";
import { CTASection } from "@/components/cta-section";

interface ServicePageProps {
  title: string;
  headline: string;
  description: string;
  features: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  problemSection: {
    headline: string;
    paragraphs: string[];
  };
  howItWorks: {
    step: string;
    title: string;
    desc: string;
  }[];
  industryExamples: {
    trade: string;
    scenario: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    href: string;
    desc: string;
  }[];
}

export function ServicePageContent({
  title,
  headline,
  description,
  features,
  stats,
  problemSection,
  howItWorks,
  industryExamples,
  faqs,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-4">
              {title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
              {headline}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/free-assessment" className="btn-primary text-base px-8 py-4">
                Take the Free Assessment
              </Link>
              <a href={BOOKING_URL} className="btn-secondary text-base px-8 py-4" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding pt-8 pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold font-mono text-brand">
                  {stat.value}
                </p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#C27C3E]/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#C27C3E]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
                {problemSection.headline}
              </h2>
            </div>
            <div className="space-y-4">
              {problemSection.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works (Step by Step) */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              How it works
            </h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              From setup to results, here is exactly what happens.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              What you get
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6 text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center mb-3 mx-auto">
                  <Check className="w-4 h-4 text-brand" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-brand" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
                Real examples by trade
              </h2>
            </div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Here is how this works for businesses like yours.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industryExamples.map((example, i) => (
              <motion.div
                key={example.trade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-[#C27C3E]" />
                  <h3 className="text-base font-semibold text-text-primary">
                    {example.trade}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {example.scenario}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-brand" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
                Frequently asked questions
              </h2>
            </div>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6"
              >
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding">
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
        </div>
        <ReviewCarousel />
      </section>

      {/* Related Services */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              Related services
            </h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Most of our clients combine multiple services for the best results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6 hover:border-brand/30 hover:shadow-md transition-all group"
                >
                  <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
