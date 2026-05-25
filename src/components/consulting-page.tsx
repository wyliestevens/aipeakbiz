"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Map, GraduationCap, Handshake, Check, BookOpen, Users, Lightbulb, Presentation } from "lucide-react";
import { BOOKING_URL } from "@/data/industries";
import { ReviewCarousel } from "@/components/review-carousel";
import { CTASection } from "@/components/cta-section";

const steps = [
  {
    icon: Search,
    title: "We Investigate",
    desc: "We dig into your day-to-day operations. Your workflows, your bottlenecks, where time and money leak. No generic audits. We learn how your specific business actually runs.",
  },
  {
    icon: Map,
    title: "We Recommend",
    desc: "Based on what we find, we build a clear, prioritized roadmap of AI tools and automations that will move the needle for your business. No fluff. No unnecessary technology. Only what makes sense for you.",
  },
  {
    icon: GraduationCap,
    title: "We Teach",
    desc: "We don't just hand you a report and disappear. We walk your team through every recommendation, show them how to implement it, and make sure they're confident using it on their own.",
  },
  {
    icon: Handshake,
    title: "We Step Away",
    desc: "Once you no longer need us, you simply tell us. No long-term contracts. No lock-in. We thank you for your time and move on to the next business that needs help. You keep everything we built together.",
  },
];

const benefits = [
  "Personalized AI strategy built around your actual operations",
  "Hands-on training for your team, not just a slide deck",
  "Vendor-neutral recommendations. We suggest what's best for you, not what pays us a commission",
  "No long-term contracts or retainers required",
  "Ongoing support for as long as you need it, and not a day longer",
  "Clear, plain-English explanations. No jargon, no hype",
];

export function ConsultingPageContent() {
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
              AI Consulting & Teaching
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
              We don&apos;t just build AI systems. We teach you how to use them.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8">
              AI is changing how businesses operate, and most teams are behind.
              We come alongside your business, identify where AI makes the
              biggest impact, and train your people to use it confidently.
              Consulting, teaching, and hands-on training, all in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BOOKING_URL}
                className="btn-primary text-base px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </a>
              <Link
                href="/free-assessment"
                className="btn-secondary text-base px-8 py-4"
              >
                Take the Free Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Teaching */}
      <section id="teaching" className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm text-sm mb-6">
              <GraduationCap className="w-4 h-4 text-brand" />
              <span className="text-text-primary font-medium">AI Teaching & Training</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display mb-4">
              Learn how to use AI in your business.
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Most businesses know AI matters but have no idea where to start.
              We teach your team how to actually use AI tools to save time,
              reduce costs, and work smarter, in language anyone can understand.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "AI Fundamentals",
                desc: "We start with the basics. What AI can and cannot do, which tools matter for your industry, and how to think about AI as a business tool, not a buzzword.",
              },
              {
                icon: Presentation,
                title: "Hands-On Training",
                desc: "No slide decks. No theory. We sit with your team and walk them through real AI tools using real examples from your business until they are comfortable.",
              },
              {
                icon: Lightbulb,
                title: "Use Case Discovery",
                desc: "We identify the specific places in your operations where AI will save you the most time and money. Every business is different, so every plan is custom.",
              },
              {
                icon: Users,
                title: "Team Enablement",
                desc: "Your team walks away knowing how to use AI tools independently. No dependency on us. No ongoing contracts required. You own the knowledge.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href={BOOKING_URL}
              className="btn-primary text-base px-8 py-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Training Session
            </a>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              How our consulting works
            </h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Simple, straightforward, and built around your timeline, not ours.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display text-center mb-10">
              What you get
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand" />
                  </div>
                  <span className="text-lg text-text-secondary">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-6">
              Who this is for
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Our consulting is for business owners or managers who know AI
              matters but aren&apos;t sure where to start.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              If you already know exactly what you need, check out our{" "}
              <Link
                href="/pricing"
                className="text-brand hover:text-brand transition-colors font-medium"
              >
                done-for-you AI systems
              </Link>
              . If you&apos;re not sure yet, that&apos;s exactly why this
              service exists.
            </p>
          </motion.div>
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

      <CTASection heading="Ready to find out where AI fits in your business?" />
    </>
  );
}
