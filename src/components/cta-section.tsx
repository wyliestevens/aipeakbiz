"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/data/industries";

interface CTASectionProps {
  heading?: string;
  showFoundingNote?: boolean;
}

export function CTASection({
  heading = "Your competitors are answering the calls you are missing.",
  showFoundingNote = false,
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-violet/10 to-accent-pink/20" />
      <div className="absolute inset-0 bg-background/60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-custom relative text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display mb-6">
          {heading}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
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
        {showFoundingNote && (
          <p className="text-sm text-text-muted mt-6">
            The Founding System is open. 5 spots. Once filled, this offer closes permanently.
          </p>
        )}
      </motion.div>
    </section>
  );
}
