import { BOOKING_URL } from "@/data/industries";

interface CTASectionProps {
  heading?: string;
}

export function CTASection({
  heading = "Ready to stop losing revenue to missed calls?",
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-6">
            {heading}
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Let us walk you through exactly how the system works for your business. No pressure. No obligation. Just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              className="btn-primary text-base px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Strategy Call
            </a>
            <a
              href="#demo"
              className="btn-secondary text-base px-8 py-4"
            >
              Try the AI Demo First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
