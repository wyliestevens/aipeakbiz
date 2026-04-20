"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutTeaser() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-6">
            Built by someone who understands service business.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            AI Peak Biz was founded by Wylie Stevens in Kingman, Arizona after
            20 years in healthcare. We understand the operational pressure your
            front desk faces every day. This is not a tech company guessing at
            your problems. We have lived them.
          </p>
          <Link
            href="/about"
            className="text-accent-blue hover:text-accent-violet transition-colors font-medium"
          >
            Read our story &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
