"use client";

import { motion } from "framer-motion";
import { Phone, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Strategy Call",
    desc: "We learn your business, your services, your bottlenecks.",
  },
  {
    icon: Wrench,
    number: "2",
    title: "We Build It",
    desc: "Our team configures everything. Done for you.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "You Go Live",
    desc: "Most businesses are running in 5 to 10 business days.",
  },
];

export function HowItWorksSection() {
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
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display">
            Running in days. Not months.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-mono text-accent-blue mb-2">
                Step {step.number}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
