"use client";

import { motion } from "framer-motion";
import {
  PhoneCall, MessageSquare, Star, PhoneForwarded,
  Bell, CalendarCheck, UserPlus, LayoutDashboard,
} from "lucide-react";

const capabilities = [
  { icon: PhoneCall, title: "AI Voice Assistant", desc: "Answers every call 24/7" },
  { icon: MessageSquare, title: "AI Chatbot", desc: "Books appointments from your website" },
  { icon: Star, title: "Reputation Management Engine", desc: "Automated 5-star review requests" },
  { icon: PhoneForwarded, title: "Missed Call Text-Back", desc: "60-second response" },
  { icon: Bell, title: "Appointment Reminders", desc: "24-hour and 2-hour texts" },
  { icon: CalendarCheck, title: "No-Show Recovery", desc: "Automated rebooking" },
  { icon: UserPlus, title: "Dormant Customer Reactivation", desc: "Win back past customers" },
  { icon: LayoutDashboard, title: "Full CRM with Lead Pipeline", desc: "Track every lead to close" },
];

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
            One system. Every tool your front desk needs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glassmorphism rounded-xl p-5 hover:border-accent-blue/30 transition-colors"
            >
              <cap.icon className="w-8 h-8 text-accent-blue mb-3" />
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {cap.title}
              </h3>
              <p className="text-xs text-text-secondary">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
