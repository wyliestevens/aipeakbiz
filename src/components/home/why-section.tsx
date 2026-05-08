import { Heart, Headphones, Settings, BarChart3, Users, Shield } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Built with integrity",
    description: "We do not oversell or make promises we cannot keep. If we are not a good fit for your business, we will tell you.",
  },
  {
    icon: Headphones,
    title: "Ongoing support, not a handoff",
    description: "This is a managed service. We do not build it and disappear. We monitor, optimize, and support your system every month.",
  },
  {
    icon: Settings,
    title: "Done for you, not DIY",
    description: "You will never log into a complicated dashboard or configure anything yourself. We handle everything.",
  },
  {
    icon: BarChart3,
    title: "Practical, not theoretical",
    description: "We built this from real experience in real businesses. Every feature exists because an actual business needed it.",
  },
  {
    icon: Users,
    title: "We understand service businesses",
    description: "Contractors, clinics, trades. We know your day does not happen behind a desk. Your system needs to work without you babysitting it.",
  },
  {
    icon: Shield,
    title: "Continuous optimization",
    description: "Every deployment includes hands-on optimization and refinement to ensure your AI system is functioning correctly for your workflow.",
  },
];

export function WhySection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            Why businesses trust AI Peak Biz
          </h2>
          <p className="text-lg text-text-secondary">
            We are not a tech company trying to sell you software. We are a revenue recovery partner that happens to use AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
