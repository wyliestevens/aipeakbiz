import { Star } from "lucide-react";

const reviews = [
  {
    quote: "This AI receptionist has been a total game changer for our business. No more missed calls. No more overwhelmed staff. Every call is answered instantly and professionally, even after hours. It has streamlined our operations, improved client experience, and pays for itself with the number of leads we no longer lose.",
    name: "Danni Owens",
    title: "Health Clinic Owner",
  },
  {
    quote: "Very happy with the effort AI Peak Biz puts in. Wylie has been on top of design, testing new features, and paying attention to make sure everything works properly. Anytime I had an issue he would get on top of it and get it fixed very quickly. The bot holds conversations very well, asks clarifying questions I would not even think to ask and gathers helpful information before I ever have to talk to a customer.",
    name: "Bryan Johnson",
    title: "Roofer",
  },
  {
    quote: "Wylie is a true professional on all levels! His company helped our marketing efforts in ways originally hard to imagine! The services this company offers is vast and honest, no hard sell, just great guidance! And availability! So glad we found them!",
    name: "John Eastman",
    title: "Business Owner",
  },
  {
    quote: "Wylie does a great job on websites helps you with anything",
    name: "Brian Demaria",
    title: "Business Owner",
  },
  {
    quote: "Our church has benefited tremendously by using AI Peaks. Highly recommend it!",
    name: "Barb Eastman",
    title: "Church Administrator",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-warm text-warm" />
      ))}
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            Trusted by real business owners
          </h2>
          <p className="text-lg text-text-secondary">
            AI Peak Biz is built around long-term relationships, practical results, and honest support for growing businesses.
          </p>
        </div>

        {/* Top row: 3 detailed reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-7 border border-border"
            >
              <div className="flex items-center gap-2 mb-5">
                <Stars />
                <span className="text-xs text-text-muted">Google Review</span>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div>
                <p className="text-sm font-semibold text-text-primary">{review.name}</p>
                <p className="text-xs text-text-muted">{review.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 shorter reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {reviews.slice(3).map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-7 border border-border"
            >
              <div className="flex items-center gap-2 mb-5">
                <Stars />
                <span className="text-xs text-text-muted">Google Review</span>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div>
                <p className="text-sm font-semibold text-text-primary">{review.name}</p>
                <p className="text-xs text-text-muted">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
