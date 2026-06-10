"use client";

import Link from "next/link";
import { Competitor } from "@/data/competitors";

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function FeatureCell({ value }: { value: string | boolean }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <XIcon />;
  return <span className="text-sm text-[#1B2A4A]/70">{value}</span>;
}

export function ComparisonContent({ data }: { data: Competitor }) {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C27C3E] font-medium mb-4 tracking-wide uppercase text-sm">
            Honest Comparison
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-6">
            {data.heroHeadline}
          </h1>
          <p className="text-lg text-[#1B2A4A]/70 max-w-2xl mx-auto">
            {data.heroSubheadline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-4">
            What Is {data.name}?
          </h2>
          <p className="text-[#1B2A4A]/80 leading-relaxed">{data.overview}</p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1B2A4A]/10">
                  <th className="text-left py-4 px-4 text-[#1B2A4A] font-semibold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-[#1B2A4A]/60 font-semibold">
                    {data.name}
                  </th>
                  <th className="text-center py-4 px-4 text-[#2B5BA8] font-semibold">
                    AI Peak Biz
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.features.map((feature, i) => (
                  <tr
                    key={feature.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}
                  >
                    <td className="py-3 px-4 text-[#1B2A4A] font-medium text-sm">
                      {feature.name}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        <FeatureCell value={feature.competitor} />
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        <FeatureCell value={feature.aipeakbiz} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-8 text-center">
            Pricing Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Competitor Pricing */}
            <div className="bg-white rounded-xl p-6 border border-[#1B2A4A]/10">
              <h3 className="text-lg font-bold text-[#1B2A4A] mb-2">
                {data.name}
              </h3>
              <p className="text-2xl font-bold text-[#1B2A4A]/60 mb-4">
                {data.pricing.range}
              </p>
              <ul className="space-y-2 mb-6">
                {data.pricing.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm text-[#1B2A4A]/70 flex items-start gap-2"
                  >
                    <span className="text-[#1B2A4A]/30 mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#1B2A4A]/10 pt-4">
                <p className="text-sm font-semibold text-red-600 mb-2">
                  Watch Out For:
                </p>
                <ul className="space-y-1">
                  {data.pricing.gotchas.map((gotcha) => (
                    <li
                      key={gotcha}
                      className="text-sm text-[#1B2A4A]/60 flex items-start gap-2"
                    >
                      <span className="text-red-400 mt-0.5">⚠</span>
                      {gotcha}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Peak Biz Pricing */}
            <div className="bg-white rounded-xl p-6 border-2 border-[#2B5BA8]">
              <h3 className="text-lg font-bold text-[#2B5BA8] mb-2">
                AI Peak Biz
              </h3>
              <p className="text-2xl font-bold text-[#1B2A4A] mb-4">
                $297–$997/month
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-[#1B2A4A]/70 flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">
                    <CheckIcon />
                  </span>
                  AI Front Desk: $297/month — calls answered + text-back
                </li>
                <li className="text-sm text-[#1B2A4A]/70 flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">
                    <CheckIcon />
                  </span>
                  Revenue Recovery: $497/month — adds reviews + reactivation
                </li>
                <li className="text-sm text-[#1B2A4A]/70 flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">
                    <CheckIcon />
                  </span>
                  Full AI Deployment: $997/month — complete system
                </li>
              </ul>
              <div className="border-t border-[#2B5BA8]/20 pt-4">
                <ul className="space-y-1">
                  <li className="text-sm text-green-700 flex items-start gap-2">
                    <CheckIcon /> No long-term contracts
                  </li>
                  <li className="text-sm text-green-700 flex items-start gap-2">
                    <CheckIcon /> No per-minute or per-call charges
                  </li>
                  <li className="text-sm text-green-700 flex items-start gap-2">
                    <CheckIcon /> No overage fees
                  </li>
                  <li className="text-sm text-green-700 flex items-start gap-2">
                    <CheckIcon /> Cancel anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths & Weaknesses */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-8 text-center">
            {data.name}: Strengths & Weaknesses
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-[#1B2A4A]/10">
              <h3 className="text-lg font-semibold text-green-700 mb-4">
                Where {data.name} Excels
              </h3>
              <ul className="space-y-3">
                {data.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-[#1B2A4A]/80">
                    <span className="mt-0.5"><CheckIcon /></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#1B2A4A]/10">
              <h3 className="text-lg font-semibold text-red-600 mb-4">
                Where {data.name} Falls Short
              </h3>
              <ul className="space-y-3">
                {data.weaknesses.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-[#1B2A4A]/80">
                    <span className="mt-0.5"><XIcon /></span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#1B2A4A]/5 rounded-xl p-6">
            <p className="text-sm text-[#1B2A4A]/70">
              <strong className="text-[#1B2A4A]">{data.name} is best for:</strong>{" "}
              {data.bestFor}
            </p>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1B2A4A] rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
            <p className="text-white/80 leading-relaxed mb-6">{data.verdict}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-assessment"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C27C3E] text-white font-semibold rounded-lg hover:bg-[#A8662F] transition-colors"
              >
                Get Your Free Assessment
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-xl border border-[#1B2A4A]/10 overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer text-[#1B2A4A] font-medium hover:bg-[#1B2A4A]/5 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-[#1B2A4A]/40 group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#1B2A4A]/70 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Comparisons */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1B2A4A] mb-6">
            Other Comparisons
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.slug !== "ai-peak-biz-vs-podium" && (
              <Link
                href="/compare/ai-peak-biz-vs-podium"
                className="text-[#2B5BA8] hover:underline text-sm font-medium"
              >
                AI Peak Biz vs Podium
              </Link>
            )}
            {data.slug !== "ai-peak-biz-vs-ruby" && (
              <Link
                href="/compare/ai-peak-biz-vs-ruby"
                className="text-[#2B5BA8] hover:underline text-sm font-medium"
              >
                AI Peak Biz vs Ruby
              </Link>
            )}
            {data.slug !== "ai-peak-biz-vs-smith-ai" && (
              <Link
                href="/compare/ai-peak-biz-vs-smith-ai"
                className="text-[#2B5BA8] hover:underline text-sm font-medium"
              >
                AI Peak Biz vs Smith.ai
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
