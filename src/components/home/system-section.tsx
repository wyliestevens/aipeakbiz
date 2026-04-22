"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  PhoneCall, MessageSquare, Star, PhoneForwarded,
  Bell, CalendarCheck, UserPlus, LayoutDashboard, Globe, Settings,
} from "lucide-react";

const capabilities = [
  {
    icon: PhoneCall,
    title: "AI Voice Assistant",
    desc: "Answers every call 24/7",
    detail: "Your AI receptionist picks up every phone call — during business hours, after hours, weekends, and holidays. It knows your services, pricing, and scheduling. It books appointments directly into your calendar and transfers complex calls to your team with full context.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    desc: "Books appointments from your website",
    detail: "A smart chatbot on your website that engages visitors in real time, answers questions about your services, and books appointments 24/7. Visitors who would have bounced now become booked customers — even at midnight.",
  },
  {
    icon: Star,
    title: "Reputation Management Engine",
    desc: "Automated 5-star review requests",
    detail: "After every appointment or completed service, the system automatically texts your customer a review request. Happy customers are guided to leave a Google review. Unhappy customers are routed privately to you so you can address concerns before they go public.",
  },
  {
    icon: PhoneForwarded,
    title: "Missed Call Text-Back",
    desc: "60-second response",
    detail: "When a call goes unanswered, your system sends a text within 60 seconds with a booking link. The customer can describe what they need and schedule an appointment instantly — before they call your competitor.",
  },
  {
    icon: Bell,
    title: "Appointment Reminders",
    desc: "24-hour and 2-hour texts",
    detail: "Automated text reminders go out 24 hours and 2 hours before every appointment. Customers can confirm, reschedule, or cancel directly from the text. This alone reduces no-shows by 30 to 50 percent.",
  },
  {
    icon: CalendarCheck,
    title: "No-Show Recovery",
    desc: "Automated rebooking",
    detail: "When a customer misses an appointment, the system sends a rebooking message within 15 minutes and follows up again 3 days later. Revenue that would have disappeared gets recovered automatically without your staff chasing anyone down.",
  },
  {
    icon: UserPlus,
    title: "Dormant Customer Reactivation",
    desc: "Win back past customers",
    detail: "Customers who have not visited in 30, 60, or 90 days receive automated check-in messages. Many just need a nudge. Re-engaging past customers costs a fraction of acquiring new ones and recovers revenue you already paid to earn.",
  },
  {
    icon: LayoutDashboard,
    title: "CRM (Customer Relationship Management)",
    desc: "Track every lead from first call to close",
    detail: "One dashboard where every lead, customer, conversation, and deal is tracked. See who called, who booked, who no-showed, and who needs follow-up. No more sticky notes, spreadsheets, or leads falling through the cracks.",
  },
  {
    icon: Globe,
    title: "Website Design & Build",
    desc: "Sites built to convert visitors into appointments",
    detail: "Professional, mobile-optimized websites designed specifically for service businesses. Built to convert visitors into booked appointments with clear calls to action, fast load times, and SEO best practices baked in.",
  },
  {
    icon: Settings,
    title: "Custom Automation Services",
    desc: "Tailored workflows for your business",
    detail: "Every business is different. We build custom automation workflows tailored to your specific operations — from intake forms to follow-up sequences to internal notifications. If it can be automated, we build it.",
  },
];

export function SystemSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeCap = activeIndex !== null ? capabilities[activeIndex] : null;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display mb-4">
            One system. Every tool your business needs.
          </h2>
          <p className="text-sm text-text-muted">Tap any card to learn more</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glassmorphism rounded-xl p-5 hover:border-accent-blue/30 transition-colors cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <cap.icon className="w-8 h-8 text-accent-blue mb-3" />
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {cap.title}
              </h3>
              <p className="text-xs text-text-secondary">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detail panel — renders below the grid, fully opaque, no overlap */}
        <AnimatePresence mode="wait">
          {activeCap && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-6 bg-[#2A2A2E] border border-[#3A3A3E] rounded-xl p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close detail"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-3">
                <activeCap.icon className="w-6 h-6 text-accent-blue" />
                <h3 className="text-lg font-semibold text-text-primary">
                  {activeCap.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                {activeCap.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
