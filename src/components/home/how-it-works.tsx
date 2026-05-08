import { Zap, MessageSquare, CalendarCheck, Wrench } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Zap,
    title: "A lead comes in",
    description: "A customer fills out your website form, clicks a Google ad, or calls your business number.",
  },
  {
    number: "2",
    icon: MessageSquare,
    title: "AI responds instantly",
    description: "Your AI assistant answers the call or texts back within seconds. It sounds natural, answers questions, and qualifies the lead.",
  },
  {
    number: "3",
    icon: CalendarCheck,
    title: "Appointment gets booked",
    description: "The qualified lead is booked directly on your calendar. You get a notification with all the details.",
  },
  {
    number: "4",
    icon: Wrench,
    title: "You focus on the work",
    description: "You show up to the job. We handle every lead, follow-up, and reminder before that.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            How it works
          </h2>
          <p className="text-lg text-text-secondary">
            Simple. No jargon. No complicated setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-brand" />
              </div>
              <div className="text-xs font-bold text-brand uppercase tracking-wider mb-2">
                Step {step.number}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
