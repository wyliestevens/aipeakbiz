"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall, PhoneOutgoing, MessageSquare, Star, PhoneForwarded,
  Bell, CalendarCheck, UserPlus, LayoutDashboard, Globe, Settings,
} from "lucide-react";

const capabilities = [
  {
    icon: PhoneCall,
    title: "AI Voice Assistant",
    desc: "Answers every call 24/7",
    detail: "Your AI receptionist picks up every phone call, during business hours, after hours, weekends, and holidays. It knows your services, pricing, and scheduling. It books appointments directly into your calendar and transfers complex calls to your team with full context.",
  },
  {
    icon: PhoneOutgoing,
    title: "AI Outbound Calling",
    desc: "Books appointments on autopilot",
    detail: "Your AI agent calls leads, past customers, and no-shows on your behalf to book appointments. It sounds natural, handles objections, and schedules directly into your calendar. More booked appointments without your team picking up the phone.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    desc: "Books appointments from your website",
    detail: "A smart chatbot on your website that engages visitors in real time, answers questions about your services, and books appointments 24/7. Visitors who would have bounced now become booked customers, even at midnight.",
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
    detail: "When a call goes unanswered, your system sends a text within 60 seconds with a booking link. The customer can describe what they need and schedule an appointment instantly, before they call your competitor.",
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
    detail: "Every business is different. We build custom automation workflows tailored to your specific operations, from intake forms to follow-up sequences to internal notifications. If it can be automated, we build it.",
  },
];

function CapabilityCard({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative glassmorphism rounded-xl p-5 hover:border-accent-blue/30 transition-colors cursor-pointer"
      style={{ zIndex: hovered ? 100 : 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <cap.icon className="w-8 h-8 text-accent-blue mb-3" />
      <h3 className="text-sm font-semibold text-text-primary mb-1">
        {cap.title}
      </h3>
      <p className="text-xs text-text-secondary">{cap.desc}</p>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full mt-2 bg-[#1E1E22] border border-[#3A3A3E] rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
            style={{ zIndex: 100, minWidth: 280 }}
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              {cap.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SystemSection() {
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
