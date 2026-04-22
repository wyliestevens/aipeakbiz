"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/data/industries";
import { Rocket } from "lucide-react";

const stats = [
  { icon: Rocket, label: "5-10 day launch" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 25%, #EC4899 50%, #8B5CF6 75%, #3B82F6 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 8s ease infinite",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 bg-background/80" />

      <div className="container-custom relative pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-6"
          >
            AI Automation for Every Service Business
          </motion.p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
            Envision a business that never misses a call, a lead, or a review.
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            AI Peak Biz builds and manages complete AI automation systems
            for service businesses. Every call answered. Every inquiry captured.
            More appointments booked. More 5-star reviews. No new payroll.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/free-assessment"
              className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
            >
              Take the Free Assessment
            </Link>
            <a
              href={BOOKING_URL}
              className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </a>
          </div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glassmorphism text-sm"
              >
                <stat.icon className="w-4 h-4 text-accent-blue" />
                <span className="text-text-primary font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
