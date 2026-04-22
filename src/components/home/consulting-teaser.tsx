"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ConsultingTeaser() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 via-transparent to-accent-blue/10" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-violet uppercase mb-4">
            AI Consulting
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-6">
            Not sure what your business needs to thrive in the AI era?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            You don&apos;t need to figure it out alone. We come alongside your
            team, investigate your operations, and build a clear roadmap for
            AI adoption that fits your business — not someone else&apos;s.
          </p>
          <Link
            href="/ai-consulting"
            className="text-accent-violet hover:text-accent-blue transition-colors font-medium"
          >
            Learn about our consulting services &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
