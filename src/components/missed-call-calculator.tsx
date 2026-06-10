"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const INDUSTRIES = [
  { name: "Roofing", avgJobValue: 8500, closeRate: 0.35 },
  { name: "HVAC", avgJobValue: 4200, closeRate: 0.4 },
  { name: "Plumbing", avgJobValue: 2800, closeRate: 0.45 },
  { name: "Electrical", avgJobValue: 3200, closeRate: 0.4 },
  { name: "Landscaping", avgJobValue: 2200, closeRate: 0.45 },
  { name: "General Contracting", avgJobValue: 12000, closeRate: 0.3 },
  { name: "Painting", avgJobValue: 3500, closeRate: 0.4 },
  { name: "Pest Control", avgJobValue: 350, closeRate: 0.55 },
  { name: "Cleaning Services", avgJobValue: 250, closeRate: 0.5 },
  { name: "Auto Repair", avgJobValue: 800, closeRate: 0.5 },
  { name: "Other", avgJobValue: 3000, closeRate: 0.35 },
] as const;

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function MissedCallCalculator() {
  const [industry, setIndustry] = useState(0);
  const [callsPerDay, setCallsPerDay] = useState(15);
  const [missedPercent, setMissedPercent] = useState(35);
  const [customJobValue, setCustomJobValue] = useState<number | null>(null);
  const [customCloseRate, setCustomCloseRate] = useState<number | null>(null);

  const selected = INDUSTRIES[industry];
  const jobValue = customJobValue ?? selected.avgJobValue;
  const closeRate = customCloseRate !== null ? customCloseRate / 100 : selected.closeRate;

  const results = useMemo(() => {
    const missedPerDay = Math.round(callsPerDay * (missedPercent / 100));
    const missedPerMonth = missedPerDay * 22; // business days
    const missedPerYear = missedPerDay * 260;
    const lostLeadsPerMonth = missedPerMonth;
    const lostLeadsPerYear = missedPerYear;
    const lostJobsPerMonth = Math.round(lostLeadsPerMonth * closeRate);
    const lostJobsPerYear = Math.round(lostLeadsPerYear * closeRate);
    const lostRevenuePerMonth = lostJobsPerMonth * jobValue;
    const lostRevenuePerYear = lostJobsPerYear * jobValue;

    // Recovery scenario: AI answers 95% of missed calls
    const recoveredCalls = Math.round(missedPerMonth * 0.95);
    const recoveredJobs = Math.round(recoveredCalls * closeRate);
    const recoveredRevenue = recoveredJobs * jobValue;
    const aiCost = 297; // starting price
    const netRecovery = recoveredRevenue - aiCost;
    const roi = aiCost > 0 ? Math.round((netRecovery / aiCost) * 100) : 0;

    return {
      missedPerDay,
      missedPerMonth,
      missedPerYear,
      lostLeadsPerMonth,
      lostLeadsPerYear,
      lostJobsPerMonth,
      lostJobsPerYear,
      lostRevenuePerMonth,
      lostRevenuePerYear,
      recoveredCalls,
      recoveredJobs,
      recoveredRevenue,
      aiCost,
      netRecovery,
      roi,
    };
  }, [callsPerDay, missedPercent, jobValue, closeRate]);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C27C3E] font-medium mb-4 tracking-wide uppercase text-sm">
            Free Tool
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-6">
            Missed Call Revenue Calculator
          </h1>
          <p className="text-lg text-[#1B2A4A]/70 max-w-2xl mx-auto">
            Find out exactly how much revenue your business loses every month
            from unanswered phone calls. Based on real industry data.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#1B2A4A]/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#1B2A4A] mb-6">
                Your Business Details
              </h2>

              {/* Industry */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1B2A4A] mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => {
                    setIndustry(Number(e.target.value));
                    setCustomJobValue(null);
                    setCustomCloseRate(null);
                  }}
                  className="w-full border border-[#1B2A4A]/20 rounded-lg px-4 py-3 text-[#1B2A4A] bg-white focus:ring-2 focus:ring-[#2B5BA8] focus:border-transparent outline-none"
                >
                  {INDUSTRIES.map((ind, i) => (
                    <option key={ind.name} value={i}>
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Calls per day */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1B2A4A] mb-2">
                  Phone calls per day:{" "}
                  <span className="text-[#2B5BA8] font-bold">{callsPerDay}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={callsPerDay}
                  onChange={(e) => setCallsPerDay(Number(e.target.value))}
                  className="w-full accent-[#2B5BA8]"
                />
                <div className="flex justify-between text-xs text-[#1B2A4A]/40 mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Missed percent */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1B2A4A] mb-2">
                  Estimated % of calls missed:{" "}
                  <span className="text-[#C27C3E] font-bold">{missedPercent}%</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={80}
                  value={missedPercent}
                  onChange={(e) => setMissedPercent(Number(e.target.value))}
                  className="w-full accent-[#C27C3E]"
                />
                <div className="flex justify-between text-xs text-[#1B2A4A]/40 mt-1">
                  <span>5%</span>
                  <span>80%</span>
                </div>
                <p className="text-xs text-[#1B2A4A]/50 mt-1">
                  Industry average: 62% of service business calls go unanswered
                  (BIA/Kelsey)
                </p>
              </div>

              {/* Average job value */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1B2A4A] mb-2">
                  Average job value
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-[#1B2A4A]/40">$</span>
                  <input
                    type="number"
                    value={customJobValue ?? selected.avgJobValue}
                    onChange={(e) =>
                      setCustomJobValue(
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                    className="w-full border border-[#1B2A4A]/20 rounded-lg pl-8 pr-4 py-3 text-[#1B2A4A] bg-white focus:ring-2 focus:ring-[#2B5BA8] focus:border-transparent outline-none"
                  />
                </div>
                <p className="text-xs text-[#1B2A4A]/50 mt-1">
                  {selected.name} industry average: {formatCurrency(selected.avgJobValue)}
                </p>
              </div>

              {/* Close rate */}
              <div className="mb-2">
                <label className="block text-sm font-medium text-[#1B2A4A] mb-2">
                  Lead-to-job close rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={
                      customCloseRate !== null
                        ? customCloseRate
                        : Math.round(selected.closeRate * 100)
                    }
                    onChange={(e) =>
                      setCustomCloseRate(
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                    className="w-full border border-[#1B2A4A]/20 rounded-lg px-4 py-3 text-[#1B2A4A] bg-white focus:ring-2 focus:ring-[#2B5BA8] focus:border-transparent outline-none"
                  />
                  <span className="absolute right-4 top-3 text-[#1B2A4A]/40">
                    %
                  </span>
                </div>
                <p className="text-xs text-[#1B2A4A]/50 mt-1">
                  {selected.name} industry average: {Math.round(selected.closeRate * 100)}%
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Loss Summary */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-red-200 shadow-sm">
                <h2 className="text-lg font-bold text-red-700 mb-4">
                  What You&apos;re Losing
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#1B2A4A]/60">Missed calls/day</p>
                    <p className="text-2xl font-bold text-[#1B2A4A]">
                      {results.missedPerDay}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1B2A4A]/60">
                      Missed calls/month
                    </p>
                    <p className="text-2xl font-bold text-[#1B2A4A]">
                      {results.missedPerMonth}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1B2A4A]/60">Lost jobs/month</p>
                    <p className="text-2xl font-bold text-[#C27C3E]">
                      {results.lostJobsPerMonth}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1B2A4A]/60">Lost jobs/year</p>
                    <p className="text-2xl font-bold text-[#C27C3E]">
                      {results.lostJobsPerYear}
                    </p>
                  </div>
                </div>
                <div className="border-t border-red-100 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#1B2A4A]/60">
                      Revenue lost/month
                    </span>
                    <span className="text-xl font-bold text-red-600">
                      {formatCurrency(results.lostRevenuePerMonth)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#1B2A4A]/60">
                      Revenue lost/year
                    </span>
                    <span className="text-3xl font-bold text-red-600">
                      {formatCurrency(results.lostRevenuePerYear)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recovery */}
              <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-green-300 shadow-sm">
                <h2 className="text-lg font-bold text-green-700 mb-4">
                  What AI Peak Biz Recovers
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#1B2A4A]/60">
                      Calls recovered/mo
                    </p>
                    <p className="text-2xl font-bold text-green-700">
                      {results.recoveredCalls}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1B2A4A]/60">
                      Jobs recovered/mo
                    </p>
                    <p className="text-2xl font-bold text-green-700">
                      {results.recoveredJobs}
                    </p>
                  </div>
                </div>
                <div className="border-t border-green-200 pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#1B2A4A]/60">
                      Revenue recovered/mo
                    </span>
                    <span className="text-xl font-bold text-green-700">
                      {formatCurrency(results.recoveredRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#1B2A4A]/60">
                      AI Peak Biz cost
                    </span>
                    <span className="text-sm text-[#1B2A4A]/60">
                      -{formatCurrency(results.aiCost)}/mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-green-200 pt-2">
                    <span className="text-sm font-semibold text-[#1B2A4A]">
                      Net revenue recovered
                    </span>
                    <span className="text-2xl font-bold text-green-700">
                      {formatCurrency(results.netRecovery)}/mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#1B2A4A]/60">ROI</span>
                    <span className="text-lg font-bold text-[#2B5BA8]">
                      {results.roi}%
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1B2A4A] rounded-xl p-6 text-center">
                <p className="text-white/80 text-sm mb-4">
                  Stop leaving {formatCurrency(results.lostRevenuePerYear)}/year on
                  the table.
                </p>
                <Link
                  href="/free-assessment"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#C27C3E] text-white font-semibold rounded-lg hover:bg-[#A8662F] transition-colors w-full"
                >
                  Get Your Free Revenue Assessment
                </Link>
                <p className="text-white/50 text-xs mt-3">
                  No commitment. We&apos;ll show you exactly where you&apos;re
                  leaking revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / Credibility */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-[#1B2A4A]/10">
            <h2 className="text-lg font-bold text-[#1B2A4A] mb-4">
              How We Calculate This
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-[#1B2A4A]/70">
              <div>
                <p className="font-semibold text-[#1B2A4A] mb-2">Sources</p>
                <ul className="space-y-1">
                  <li>
                    &bull; 62% missed call rate — BIA/Kelsey research on small
                    business phone calls
                  </li>
                  <li>
                    &bull; 85% of callers who can&apos;t reach you won&apos;t
                    call back — Lead Response Management Study
                  </li>
                  <li>
                    &bull; Industry job values based on HomeAdvisor, Angi, and
                    contractor survey data
                  </li>
                  <li>
                    &bull; Close rates based on ServiceTitan industry benchmarks
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#1B2A4A] mb-2">Assumptions</p>
                <ul className="space-y-1">
                  <li>&bull; 22 business days per month</li>
                  <li>&bull; AI answers 95% of previously missed calls</li>
                  <li>
                    &bull; Recovery estimate uses your industry&apos;s close rate
                  </li>
                  <li>
                    &bull; Cost shown is AI Front Desk tier ($297/mo) — actual
                    plan may vary
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section for SEO / Linkability */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2A4A] mb-8 text-center">
            Missed Call Statistics Every Contractor Should Know
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stat: "62%",
                desc: "of phone calls to small service businesses go unanswered",
                source: "BIA/Kelsey",
              },
              {
                stat: "85%",
                desc: "of callers who can't reach you will NOT call back",
                source: "Lead Response Management Study",
              },
              {
                stat: "78%",
                desc: "of customers buy from the company that responds first",
                source: "Lead Response Management Study",
              },
              {
                stat: "$120K+",
                desc: "average annual revenue lost by a roofing company from missed calls alone",
                source: "AI Peak Biz industry analysis",
              },
              {
                stat: "5 min",
                desc: "is the maximum response time before lead conversion drops by 80%",
                source: "InsideSales.com / Harvard Business Review",
              },
              {
                stat: "391%",
                desc: "higher conversion rate when leads are contacted within 1 minute",
                source: "Velocify / Lead Response Management",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white rounded-xl p-6 border border-[#1B2A4A]/10"
              >
                <p className="text-3xl font-bold text-[#2B5BA8] mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-[#1B2A4A]/80 mb-2">{item.desc}</p>
                <p className="text-xs text-[#1B2A4A]/40">Source: {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
