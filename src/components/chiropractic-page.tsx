"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, PhoneOff, CalendarX, Star, UserX, Headphones } from "lucide-react";
import { BOOKING_URL } from "@/data/industries";
import { ReviewGrid } from "@/components/review-carousel";
import { FAQ, FAQSchema } from "@/components/faq";
import { CTASection } from "@/components/cta-section";

const painPoints = [
  {
    icon: PhoneOff,
    number: "01",
    title: "Missed Calls During Adjustments",
    description:
      "You are with a patient. Your front desk is checking someone in. The phone rings and goes to voicemail. 80% of callers who reach voicemail never call back. At an average new patient value of $200 to $500, every missed call costs you real money. A busy practice misses 5 to 10 calls per week.",
    cost: "Avg. loss: $4,000-$10,000/month in missed new patients",
  },
  {
    icon: CalendarX,
    number: "02",
    title: "No-Shows Wreck Your Schedule",
    description:
      "Without automated reminders, no-show rates in chiropractic offices run 20 to 30%. That is one out of every four or five patients leaving a hole in your day. Each empty slot at $65 to $150 per visit adds up fast. 15 no-shows a month at $100 per visit is $1,500 gone.",
    cost: "Avg. loss: $1,500-$4,500/month in no-show revenue",
  },
  {
    icon: Star,
    number: "03",
    title: "Weak Google Reviews Cost You New Patients",
    description:
      "88% of consumers trust online reviews as much as personal recommendations. Your patients love you but never post a review because nobody asks at the right time. The new chiropractor in town has 200 reviews because they automated the process.",
    cost: "Avg. loss: $2,000-$6,000/month in lost new patients",
  },
  {
    icon: UserX,
    number: "04",
    title: "Inactive Patients Never Come Back",
    description:
      "Patients who completed their treatment plan 90 days ago are not coming back on their own. Without a reactivation system, that revenue sits on the table. You already paid to acquire them. You already built trust. But without a prompt, they forget.",
    cost: "Avg. loss: $3,000-$6,000/quarter",
  },
  {
    icon: Headphones,
    number: "05",
    title: "Your Front Desk Is Overwhelmed",
    description:
      "Your staff is answering phones, checking patients in, handling insurance questions, scheduling follow-ups, and trying to collect reviews all at once. Something always falls through. Calls go to voicemail. Follow-ups get delayed. Leads disappear.",
    cost: "Root cause of all the above",
  },
];

const solutions = [
  {
    title: "AI Voice Assistant: Your 24/7 Receptionist",
    description:
      "Your AI receptionist picks up every call when your team is busy, after hours, and on weekends. It sounds natural, knows your services, insurance policies, and scheduling rules. It books directly into your calendar.",
    features: [
      "Answers calls 24/7 including evenings and weekends",
      "Trained on your specific services, hours, and insurance accepted",
      "Books, confirms, and reschedules appointments on the spot",
      "Handles new patient inquiries and common questions",
      "Transfers complex calls to your team with full context",
    ],
    stat: "$36K+",
    statLabel: "Annual cost of a front desk receptionist. Your AI system works 24/7 for a fraction of the cost.",
  },
  {
    title: "AI Chatbot + Reputation Management",
    description:
      "Your website chatbot engages visitors instantly, answers questions about your services, and books appointments around the clock. After every visit, your reputation engine automatically requests reviews.",
    features: [
      "Website chatbot responds in under 5 seconds",
      "Trained on your services, conditions treated, and common questions",
      "Automated post-visit review requests via text",
      "Positive reviews routed to Google. Negative feedback sent privately to you.",
      "Builds your rating every month without your staff lifting a finger",
    ],
    stat: "88%",
    statLabel: "of consumers trust online reviews as much as personal recommendations.",
  },
  {
    title: "Missed Call Text-Back + No-Show Recovery",
    description:
      "When a call goes unanswered, your system sends a text within 60 seconds with a booking link. When a patient misses an appointment, the system sends a rebooking message within 15 minutes.",
    features: [
      "Missed call text-back within 60 seconds",
      "Appointment reminders 24 hours and 2 hours before",
      "No-show rebooking message within 15 minutes",
      "3-day follow-up sequence for missed appointments",
      "Reduces no-shows by 30 to 50%",
    ],
    stat: "30-50%",
    statLabel: "reduction in no-shows with automated reminders and rebooking.",
  },
];

const faqItems = [
  {
    question: "Will this replace my front desk staff?",
    answer:
      "No. This system works alongside your staff. It handles overflow calls, after-hours inquiries, appointment reminders, review requests, and follow-ups so your front desk team focuses on the patients standing in front of them.",
  },
  {
    question: "What if the AI says the wrong thing to a patient?",
    answer:
      "You approve every script, every response, and every workflow before the system goes live. The AI stays within boundaries you set. If a caller asks something outside scope, it transfers to your team with full context.",
  },
  {
    question: "Does this work with my current scheduling system?",
    answer:
      "Yes. We sync with most major scheduling platforms. If you use ChiroTouch, Jane, or similar chiropractic-specific EHRs, we build around them.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most clinics go live within 5 to 10 business days. We handle the heavy lifting. You review and approve. The timeline depends on how quickly you provide your clinic details.",
  },
  {
    question: "Is this worth it for a solo practitioner?",
    answer:
      "Solo practitioners often benefit the most. If you are adjusting patients all day and your front desk is one person trying to do everything, this system gives you the capacity of a much larger operation without the payroll.",
  },
  {
    question: "What is the Founding System?",
    answer:
      "Our first 5 chiropractic clients are founding partners. In exchange for being early, founding clinics get the full Growth System at a reduced management rate. $997 deployment plus $997 per month with a 12-month commitment. Once 5 spots are filled, this offer closes permanently.",
  },
  {
    question: "How does the review system work?",
    answer:
      "After every visit, the system sends the patient a message asking about their experience. Positive responses are guided to leave a Google review. Negative responses come to you privately. The result is a steady stream of new 5-star reviews every month.",
  },
  {
    question: "What happens if I cancel management?",
    answer:
      "The system is deactivated. You are not buying standalone software. You are getting a complete AI front desk system that is built, managed, and optimized by our team every month.",
  },
];

export function ChiropracticPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-brand-50/50 to-transparent" />
        <div className="container-custom relative pt-28 pb-16 md:pt-36 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand text-sm font-semibold mb-6">
              Built for Chiropractic Clinics
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
              Your Front Desk Is Losing You Patients Right Now
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4">
              You are adjusting a patient. The phone rings. Nobody picks up. That caller books with the chiropractor down the street.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              AI Peak Biz builds and manages a complete AI front desk system that answers every call, books every appointment, and gets you more 5-star reviews. Live in 7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/free-assessment" className="btn-primary text-base px-8 py-4">
                Take the Free Assessment
              </Link>
              <a href={BOOKING_URL} className="btn-secondary text-base px-8 py-4" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-center">
              <div>
                <p className="text-2xl font-bold font-mono text-text-primary">80%</p>
                <p className="text-xs text-text-muted">of callers who hit voicemail never call back</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-text-primary">$4K-$10K</p>
                <p className="text-xs text-text-muted">lost monthly from missed calls alone</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-text-primary">7 days</p>
                <p className="text-xs text-text-muted">from strategy call to live system</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
              The Numbers Do Not Lie
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              What Is Costing Your Chiropractic Practice Money Right Now
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="text-xs font-mono text-brand mb-2">
                  {point.number}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {point.description}
                </p>
                <p className="text-sm font-semibold text-brand">
                  {point.cost}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
              The System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              How Your AI Front Desk System Works for Chiropractic
            </h2>
          </motion.div>
          <div className="space-y-16">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={BOOKING_URL} className="btn-primary text-sm" target="_blank" rel="noopener noreferrer">
                    See It in Action &rarr;
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-8 text-center">
                    <p className="text-4xl md:text-5xl font-bold font-mono text-brand mb-2">
                      {solution.stat}
                    </p>
                    <p className="text-sm text-text-secondary max-w-xs">
                      {solution.statLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-brand uppercase mb-3">
              The ROI
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              The System Pays for Itself in the First Month
            </h2>
          </motion.div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto mb-16">
            <p className="text-5xl md:text-6xl font-bold font-mono text-brand mb-4">
              $2,400/month
            </p>
            <p className="text-text-secondary leading-relaxed">
              3 extra patients per week at $200 per visit = $2,400 per month in recovered revenue. That is $28,800 per year from patients who would have called your competitor, bounced off your website, or no-showed. The system build pays for itself in 60 days.
            </p>
          </div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-display">
              Running in Days. Not Months.
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Strategy Call", desc: "We learn your practice, your services, your insurance policies, and where you lose patients." },
              { step: "2", title: "We Build It", desc: "Our team configures your AI voice assistant, chatbot, reputation engine, reminders, CRM, and automations." },
              { step: "3", title: "Live in 7 Days", desc: "You review and approve. We flip the switch. Your AI front desk starts answering calls immediately." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{s.step}</span>
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-2">{s.title}</h4>
                <p className="text-sm text-text-secondary">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding System */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-brand-dark/15 to-brand-dark/10" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <p className="text-sm font-semibold tracking-widest text-white/80 uppercase mb-3">
                Limited Opportunity
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-display">
                The Founding System: Full AI Front Desk at a Reduced Rate
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We are building AI Peak Biz into the go-to provider of AI front desk systems for chiropractic clinics. Our first 5 clients are founding partners. We need real clinics running real calls to refine the system, build case studies, and create the proof that scales this company.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  In exchange for being early, founding clinics get the full Growth System at a reduced management rate.
                </p>
                <p className="text-white font-semibold mb-6">
                  This is not a discount. This is a partnership.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-lg px-4 py-3">
                    <span className="text-sm text-text-secondary">System Build</span>
                    <span className="font-bold font-mono text-text-primary">$997 <span className="text-xs text-text-muted">one-time</span></span>
                  </div>
                  <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-lg px-4 py-3">
                    <span className="text-sm text-text-secondary">Management</span>
                    <span className="font-bold font-mono text-text-primary">$997<span className="text-xs text-text-muted">/month</span></span>
                  </div>
                  <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-lg px-4 py-3">
                    <span className="text-sm text-text-secondary">Commitment</span>
                    <span className="font-bold font-mono text-text-primary">12 months</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Everything in the Growth System included:</h3>
                <ul className="space-y-2">
                  {[
                    "AI Voice Assistant answering all calls 24/7",
                    "AI Chatbot on your website booking in real time",
                    "Reputation Management Engine with automated Google review requests",
                    "Full CRM with lead pipeline",
                    "Booking automation synced to your calendar",
                    "Missed call text-back within 60 seconds",
                    "Appointment reminder system (24-hour and 2-hour texts)",
                    "No-show recovery with automated rebooking",
                    "Monthly system optimization and performance reporting",
                    "All tools connected as one integrated system",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-10">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold text-brand bg-white hover:bg-white/90 transition-all text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo to Claim Your Founding Spot &rarr;
              </a>
              <p className="text-sm text-white/60 mt-4">
                Only available for the first 5 clinics. Once filled, this offer closes permanently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              Built by Someone Who Understands Healthcare
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "20 Years of Healthcare Experience", desc: "AI Peak Biz was founded by someone with two decades of healthcare experience. We understand clinic workflows, patient communication, and operational pressure." },
              { title: "Proven at Volume", desc: "One of our medical clinic implementations handles over 400 phone calls per day. The system performs at real-world volume." },
              { title: "Done for You. Not DIY.", desc: "You are not learning software. We build, train, connect, and manage the system. If something breaks, we fix it." },
              { title: "5-Star Reviews on Google", desc: "Every client review is a verified Google review. We do not fabricate testimonials." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
              What Our Clients Say
            </h2>
          </motion.div>
          <ReviewGrid subset={[0, 1, 2]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display">
              Straight Answers for Chiropractors
            </h2>
          </motion.div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        heading="See Exactly How Much Revenue Your Clinic Is Leaving on the Table"
      />
    </>
  );
}
