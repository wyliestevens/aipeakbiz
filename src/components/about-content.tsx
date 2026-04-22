"use client";

import { motion } from "framer-motion";
import { ReviewCarousel } from "@/components/review-carousel";
import { CTASection } from "@/components/cta-section";

export function AboutContent() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display mb-6">
              Built by someone who gets it.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              AI Peak Biz was not born in a tech incubator. It was born from watching front desks drown.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                20 years watching phones ring unanswered
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                My name is Wylie Stevens. I spent 20 years in healthcare — in clinics, at the front desk, in the trenches. I watched receptionist after receptionist try to check patients in, handle insurance calls, schedule follow-ups, and answer the ringing phone all at the same time. Something always slipped. Usually the phone.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every missed call was a patient who booked with someone else. Every no-show was an empty room that still cost money to keep open. Every unrequested review was a missed chance to build the reputation the practice deserved.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I saw it happen in healthcare first. Then I saw the same pattern in every service business I looked at. Plumbers. Attorneys. Salons. Contractors. Auto shops. The front desk is the bottleneck. It always has been.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                The system that should have existed
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                AI Peak Biz builds the system I wished existed for every practice and business I worked with. A single, integrated AI front desk that answers every call, books every appointment, follows up on every no-show, requests every review, and reactivates every dormant customer. All running 24/7. All managed for you.
              </p>
              <p className="text-text-secondary leading-relaxed">
                This is not software you log into and figure out. This is a done-for-you system. We build it. We configure it. We train the AI on your business. We manage it every month. If something breaks, we fix it. You run your business. We run your front desk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Based in Kingman, Arizona. Serving businesses nationwide.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                AI Peak Biz is headquartered in Kingman, Arizona. We work with service businesses across the United States. The system is cloud-based. Your location does not matter. If you have a phone number and customers who call to book, we can help.
              </p>
              <p className="text-text-secondary leading-relaxed">
                One of our medical clinic implementations handles over 400 phone calls per day. This is not a theoretical product. It is running right now, at real volume, in real businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                What we believe
              </h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold mt-0.5">01</span>
                  <span>Every phone call from a potential customer deserves to be answered.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold mt-0.5">02</span>
                  <span>Technology should work for the business owner, not the other way around.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold mt-0.5">03</span>
                  <span>Done for you beats DIY every time for busy service businesses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue font-bold mt-0.5">04</span>
                  <span>The best marketing system in the world is answering the phone.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-surface">
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
