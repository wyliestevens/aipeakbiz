"use client";

import { motion } from "framer-motion";
import { PhoneOff, CalendarX, Star, UserX, HeadphonesIcon } from "lucide-react";

const painPoints = [
  {
    icon: PhoneOff,
    title: "Missed Calls",
    description:
      "When a prospect calls and nobody picks up, they call your competitor. One missed call during a busy day is one customer your competitor just won.",
    cost: "Typical loss: $1,200 to $6,000 per month",
  },
  {
    icon: CalendarX,
    title: "No-Shows",
    description:
      "Without automated reminders, your no-show rate climbs above 20 percent. Empty slots, lost revenue, scrambling staff.",
    cost: "Typical loss: $2,000 to $8,000 per month",
  },
  {
    icon: Star,
    title: "Weak Reviews",
    description:
      "Prospects check your Google rating before they call. A half-star gap from the competitor down the street costs you real booked business.",
    cost: "Typical loss: $2,000 to $10,000 per month",
  },
  {
    icon: UserX,
    title: "Dormant Customers",
    description:
      "Customers who stopped coming 90 days ago are not coming back on their own. That revenue sits on the table. You already paid to acquire them.",
    cost: "Typical loss: $3,000 to $10,000 per quarter",
  },
  {
    icon: HeadphonesIcon,
    title: "Overwhelmed Front Desk",
    description:
      "Your staff is answering phones, taking payments, scheduling, following up, and asking for reviews all at once. Something slips. Leads fall through.",
    cost: "The root cause of every problem above",
  },
];

export function PainPointsSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display mb-4">
            Every service business has these five problems.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glassmorphism rounded-xl p-6 lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-accent-blue" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                {point.description}
              </p>
              <p className="text-sm font-semibold text-accent-violet">
                {point.cost}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
