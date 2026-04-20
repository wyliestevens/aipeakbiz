"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/data/industries";
import { ReviewCarousel } from "@/components/review-carousel";
import { CTASection } from "@/components/cta-section";

interface ServicePageProps {
  title: string;
  headline: string;
  description: string;
  features: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
}

export function ServicePageContent({
  title,
  headline,
  description,
  features,
  stats,
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
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-4">
              {title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
              {headline}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                <p className="text-3xl md:text-4xl font-bold font-mono gradient-text">
                  {stat.value}
                </p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
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
              How it works
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
                className="glassmorphism rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-accent-blue" />
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

      <CTASection />
    </>
  );
}
