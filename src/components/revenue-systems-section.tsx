import { Phone, Star, RefreshCw, MessageCircle } from "lucide-react";

const systems = [
  {
    icon: Phone,
    title: "AI Voice Assistant",
    description:
      "Answer every call instantly, qualify leads automatically, respond after hours, and book more appointments without missed opportunities.",
  },
  {
    icon: Star,
    title: "Google Review Automation",
    description:
      "Automatically request more 5-star Google reviews after completed jobs. Improve trust, strengthen local rankings, and help future customers choose your business faster.",
  },
  {
    icon: RefreshCw,
    title: "Database Reactivation",
    description:
      "Most businesses already have untapped revenue sitting in old leads and past customers. AI Peak Biz reactivates dormant contacts with automated follow-up campaigns designed to generate new appointments.",
  },
  {
    icon: MessageCircle,
    title: "AI Website Chatbot",
    description:
      "Turn website visitors into real conversations instantly. Your AI chatbot answers questions, captures leads, qualifies prospects, and helps book appointments even after hours.",
  },
];

export function RevenueSystemsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-bold tracking-widest text-brand uppercase mb-3">
            The Revenue Recovery System
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-5">
            Recover more revenue from every lead
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            AI Peak Biz helps service businesses answer every lead, automate
            follow-up, reactivate old customers, improve online reputation, and
            turn more conversations into booked appointments automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {systems.map((system) => (
            <div
              key={system.title}
              className="relative bg-surface rounded-2xl border border-border p-8 md:p-10 hover:border-brand-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors duration-300">
                <system.icon className="w-7 h-7 text-brand" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {system.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {system.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-text-muted mt-10 max-w-2xl mx-auto">
          These four systems work together to make sure no lead, no customer, and
          no revenue opportunity falls through the cracks.
        </p>
      </div>
    </section>
  );
}
