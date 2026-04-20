"use client";

import { motion } from "framer-motion";
import { ReviewCarousel } from "@/components/review-carousel";

export function ReviewsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-3">
            5-Star Google Reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display">
            What our clients say
          </h2>
        </motion.div>
      </div>
      <ReviewCarousel />
    </section>
  );
}
