import Image from "next/image";
import Link from "next/link";

export function FounderSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/founder/wylie-casual.jpeg"
                  alt="Wylie Stevens, Founder of AI Peak Biz"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="mt-4 text-base font-semibold text-text-primary">
                Wylie Stevens
              </p>
              <p className="text-sm text-text-muted">
                Founder, AI Peak Biz
              </p>
              <p className="text-sm text-text-muted">
                Kingman, Arizona
              </p>
            </div>

            {/* Story */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-display">
                I spent 20 years watching businesses lose customers to a ringing phone.
              </h2>

              <p className="text-text-secondary leading-relaxed">
                My name is Wylie. I spent two decades in healthcare, working in clinics, at front desks, in the day-to-day operations. I watched the same thing happen over and over: the phone rings, the staff is busy, the call goes to voicemail. That patient books with someone else. That revenue disappears.
              </p>

              <p className="text-text-secondary leading-relaxed">
                When I started looking beyond healthcare, I saw the same problem everywhere. Roofers on a job site. HVAC techs in an attic. Plumbers elbow-deep in a repair. The phone rings. Nobody answers. The lead calls the next name on Google.
              </p>

              <p className="text-text-secondary leading-relaxed">
                AI Peak Biz exists because I built the system I wished every business I worked with had. It answers every call, responds to every lead, books the appointment, and follows up. You run your business. We make sure every customer who reaches out actually gets through.
              </p>

              <p className="text-text-secondary leading-relaxed">
                This is not a software company asking you to figure it out yourself. We build your system, configure it for your business, and manage it for you. If something needs adjusting, we handle it. You focus on the work you are good at.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mt-2"
              >
                Read the full story
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
