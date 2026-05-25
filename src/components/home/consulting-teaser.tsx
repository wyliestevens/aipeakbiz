"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ConsultingTeaser() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-brand-50" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-4">
            AI Consulting & Teaching
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-6">
            We teach businesses how to use AI. Yours could be next.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Not sure where AI fits? We come alongside your team, investigate
            your operations, and train your people on the AI tools that will
            save them time and money. Hands-on teaching, not slide decks.
          </p>
          <Link
            href="/ai-consulting"
            className="text-brand hover:text-brand-dark transition-colors font-medium"
          >
            Learn about our consulting and teaching services &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
