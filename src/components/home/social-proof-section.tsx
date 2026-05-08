import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We were missing 30 to 40 percent of our incoming calls. Within the first month, every single call was being answered. The system paid for itself in week two.",
    name: "Clinic Owner",
    industry: "Healthcare",
  },
  {
    quote: "I am on a roof six days a week. I cannot answer the phone. Now I do not have to. The AI books the estimate and I show up. That is it.",
    name: "Roofing Contractor",
    industry: "Home Services",
  },
  {
    quote: "We were skeptical at first. The idea of AI talking to our clients felt risky. But the calls sound natural and our clients have not complained once. They just get faster service.",
    name: "HVAC Business Owner",
    industry: "Home Services",
  },
  {
    quote: "The follow-up alone is worth the monthly cost. Leads that used to go cold are getting called back the same minute they come in.",
    name: "Pastor & Small Business Owner",
    industry: "Professional Services",
  },
];

export function SocialProofSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            What business owners are saying
          </h2>
          <p className="text-lg text-text-secondary">
            Real feedback from real businesses using AI Peak Biz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-border"
            >
              <Quote className="w-8 h-8 text-brand-50 mb-3" />
              <p className="text-text-secondary leading-relaxed mb-5 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.industry}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-warm text-warm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warm text-warm" />
              ))}
            </div>
            <span>Google Reviews</span>
          </div>
          <span className="hidden sm:inline text-border">|</span>
          <span>400+ calls handled daily for one clinic</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Serving businesses nationwide</span>
        </div>
      </div>
    </section>
  );
}
