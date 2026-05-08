import { DollarSign, Clock, TrendingDown, PhoneOff } from "lucide-react";

const painPoints = [
  {
    icon: DollarSign,
    title: "Leads cost $50 to $300 each",
    description: "Between Google Ads, LSA, Angi, and referrals, every lead has a real cost. When nobody picks up, that money is gone.",
  },
  {
    icon: Clock,
    title: "The first responder wins 78% of the time",
    description: "The business that calls back first almost always gets the job. Not the cheapest. Not the most experienced. The fastest.",
  },
  {
    icon: PhoneOff,
    title: "Your crew is working, not answering phones",
    description: "Leads come in during the workday. By the time you check voicemails at dinner, the customer already hired someone else.",
  },
  {
    icon: TrendingDown,
    title: "Revenue leaks quietly, every single day",
    description: "Most business owners do not know how much they are losing. It does not show up on a report. It just never becomes revenue in the first place.",
  },
];

export function MissedLeadsSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            The real cost of missed leads
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            You are probably losing more revenue to slow follow-up than you realize. Here is what we see with every service business we work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
