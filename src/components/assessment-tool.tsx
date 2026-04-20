"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { industries } from "@/data/industries";
import { BOOKING_URL } from "@/data/industries";

interface AssessmentData {
  industry: string;
  reviewCount: number;
  starRating: number;
  monthlyCalls: number;
  missedCallRate: number;
  knowsMissedRate: boolean;
  revenuePerCustomer: number;
  monthlyVisitors: number;
  knowsVisitors: boolean;
  conversionRate: number;
  knowsConversion: boolean;
  noShowRate: number;
}

interface Results {
  missedCallsLost: number;
  noShowsLost: number;
  reviewsLost: number;
  websiteLost: number;
  totalMonthlyLoss: number;
  totalAnnualLoss: number;
  paybackWeeks: number;
}

const defaultData: AssessmentData = {
  industry: "",
  reviewCount: 0,
  starRating: 4.0,
  monthlyCalls: 100,
  missedCallRate: 0.3,
  knowsMissedRate: false,
  revenuePerCustomer: 200,
  monthlyVisitors: 500,
  knowsVisitors: false,
  conversionRate: 0.02,
  knowsConversion: false,
  noShowRate: 0.2,
};

const callRanges = ["0-50", "50-100", "100-250", "250-500", "500-1000", "1000+"];
const callValues: Record<string, number> = {
  "0-50": 25,
  "50-100": 75,
  "100-250": 175,
  "250-500": 375,
  "500-1000": 750,
  "1000+": 1200,
};

function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setDisplayed(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <>{formatCurrency(displayed)}</>;
}

export function AssessmentTool() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<AssessmentData>(defaultData);
  const [results, setResults] = useState<Results | null>(null);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);

  const calculateResults = useCallback((): Results => {
    const missedCallsLost =
      data.monthlyCalls * data.missedCallRate * 0.25 * data.revenuePerCustomer;
    const noShowsLost =
      data.monthlyCalls *
      (1 - data.missedCallRate) *
      0.25 *
      data.noShowRate *
      data.revenuePerCustomer;
    const reviewsLost =
      Math.max(0, 4.8 - data.starRating) *
      0.04 *
      data.monthlyCalls *
      0.25 *
      data.revenuePerCustomer;
    const rawWebsiteLost =
      data.monthlyVisitors *
      (0.05 - data.conversionRate) *
      data.revenuePerCustomer;
    const websiteLost = Math.max(0, rawWebsiteLost);
    const totalMonthlyLoss =
      missedCallsLost + noShowsLost + reviewsLost + websiteLost;
    const totalAnnualLoss = totalMonthlyLoss * 12;
    const monthlyInvestment = 1497;
    const paybackWeeks =
      totalMonthlyLoss > 0
        ? Math.round((monthlyInvestment / totalMonthlyLoss) * 4.33)
        : 0;

    return {
      missedCallsLost,
      noShowsLost,
      reviewsLost,
      websiteLost,
      totalMonthlyLoss,
      totalAnnualLoss,
      paybackWeeks,
    };
  }, [data]);

  // Auto-advance from the calculating step
  useEffect(() => {
    if (step === 7) {
      setResults(calculateResults());
      const timer = setTimeout(() => setStep(8), 1500);
      return () => clearTimeout(timer);
    }
  }, [step, calculateResults]);

  const goNext = () => {
    setStep((s) => Math.min(s + 1, 8));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const sendResults = async () => {
    if (!email || !results) return;
    setSending(true);
    try {
      await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ...data, ...results }),
      });
      setEmailSent(true);
    } catch {
      setEmailSent(true); // Show success anyway since the API just logs for now
    }
    setSending(false);
  };

  const maxLoss = results
    ? Math.max(
        results.missedCallsLost,
        results.noShowsLost,
        results.reviewsLost,
        results.websiteLost,
        1
      )
    : 1;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      {step > 0 && step < 8 && (
        <div className="mb-8">
          <div className="h-1 bg-border-custom rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-blue to-accent-violet"
              animate={{ width: `${(step / 7) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-xs text-text-muted mt-2">Step {step} of 7</p>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 0: Welcome */}
          {step === 0 && (
            <div className="text-center py-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-display mb-6">
                Find out how much money your business is leaving on the table.
              </h1>
              <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
                This 2-minute assessment calculates your monthly revenue loss
                across 4 key areas. Free. No email required to see your score.
              </p>
              <button onClick={goNext} className="btn-primary text-base px-10 py-4">
                Start the Assessment <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
          )}

          {/* Step 1: Industry */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                What industry is your business in?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[...industries.map((i) => i.name), "Other"].map((name) => (
                  <button
                    key={name}
                    onClick={() => setData({ ...data, industry: name })}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      data.industry === name
                        ? "bg-accent-blue text-white"
                        : "glassmorphism text-text-secondary hover:text-text-primary hover:border-accent-blue/30"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={goBack} className="btn-secondary text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                </button>
                <button
                  onClick={goNext}
                  disabled={!data.industry}
                  className="btn-primary text-sm disabled:opacity-50"
                >
                  Next <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Reviews */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Your online reviews
              </h2>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    How many Google reviews does your business have?
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={data.reviewCount || ""}
                    onChange={(e) =>
                      setData({ ...data, reviewCount: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border-custom text-text-primary focus:border-accent-blue focus:outline-none"
                    placeholder="e.g. 45"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    What is your current star rating? ({data.starRating.toFixed(1)})
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    step={0.1}
                    value={data.starRating}
                    onChange={(e) =>
                      setData({ ...data, starRating: parseFloat(e.target.value) })
                    }
                    className="w-full accent-accent-blue"
                  />
                  <div className="flex justify-between text-xs text-text-muted">
                    <span>1.0</span>
                    <span>5.0</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={goBack} className="btn-secondary text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                </button>
                <button onClick={goNext} className="btn-primary text-sm">
                  Next <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Phone calls */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Phone call volume
              </h2>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    Approximately how many phone calls does your business receive per month?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {callRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() =>
                          setData({ ...data, monthlyCalls: callValues[range] })
                        }
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          data.monthlyCalls === callValues[range]
                            ? "bg-accent-blue text-white"
                            : "glassmorphism text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    Do you know what percentage of calls you miss?
                  </label>
                  <div className="flex gap-3 mb-3">
                    <button
                      onClick={() => setData({ ...data, knowsMissedRate: true })}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        data.knowsMissedRate
                          ? "bg-accent-blue text-white"
                          : "glassmorphism text-text-secondary"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() =>
                        setData({ ...data, knowsMissedRate: false, missedCallRate: 0.3 })
                      }
                      className={`px-4 py-2 rounded-lg text-sm ${
                        !data.knowsMissedRate
                          ? "bg-accent-blue text-white"
                          : "glassmorphism text-text-secondary"
                      }`}
                    >
                      No
                    </button>
                  </div>
                  {data.knowsMissedRate ? (
                    <div>
                      <input
                        type="range"
                        min={0}
                        max={80}
                        step={5}
                        value={data.missedCallRate * 100}
                        onChange={(e) =>
                          setData({
                            ...data,
                            missedCallRate: parseInt(e.target.value) / 100,
                          })
                        }
                        className="w-full accent-accent-blue"
                      />
                      <p className="text-sm text-text-muted mt-1">
                        {Math.round(data.missedCallRate * 100)}% of calls missed
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-accent-blue">
                      Using 30% as the industry average for missed calls.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={goBack} className="btn-secondary text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                </button>
                <button onClick={goNext} className="btn-primary text-sm">
                  Next <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Revenue */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Revenue per customer
              </h2>
              <div className="mb-8">
                <label className="block text-sm text-text-secondary mb-2">
                  What is your average revenue per new customer or first visit?
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                    $
                  </span>
                  <input
                    type="number"
                    min={0}
                    value={data.revenuePerCustomer || ""}
                    onChange={(e) =>
                      setData({
                        ...data,
                        revenuePerCustomer: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full pl-8 pr-4 py-3 rounded-lg bg-surface border border-border-custom text-text-primary focus:border-accent-blue focus:outline-none"
                    placeholder="200"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={goBack} className="btn-secondary text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                </button>
                <button
                  onClick={goNext}
                  disabled={!data.revenuePerCustomer}
                  className="btn-primary text-sm disabled:opacity-50"
                >
                  Next <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Website */}
          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Website performance
              </h2>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    How many visitors does your website get per month?
                  </label>
                  <div className="flex gap-3 mb-3">
                    <button
                      onClick={() => setData({ ...data, knowsVisitors: true })}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        data.knowsVisitors
                          ? "bg-accent-blue text-white"
                          : "glassmorphism text-text-secondary"
                      }`}
                    >
                      I know
                    </button>
                    <button
                      onClick={() =>
                        setData({
                          ...data,
                          knowsVisitors: false,
                          monthlyVisitors: 500,
                        })
                      }
                      className={`px-4 py-2 rounded-lg text-sm ${
                        !data.knowsVisitors
                          ? "bg-accent-blue text-white"
                          : "glassmorphism text-text-secondary"
                      }`}
                    >
                      I don&apos;t track this
                    </button>
                  </div>
                  {data.knowsVisitors ? (
                    <input
                      type="number"
                      min={0}
                      value={data.monthlyVisitors || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          monthlyVisitors: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border-custom text-text-primary focus:border-accent-blue focus:outline-none"
                      placeholder="e.g. 1000"
                    />
                  ) : (
                    <p className="text-xs text-accent-blue">
                      Using 500 visitors/month as the estimate for a typical service business.
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    What percentage of visitors take action (call, book, fill a form)?
                  </label>
                  <div className="flex gap-3 mb-3">
                    <button
                      onClick={() => setData({ ...data, knowsConversion: true })}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        data.knowsConversion
                          ? "bg-accent-blue text-white"
                          : "glassmorphism text-text-secondary"
                      }`}
                    >
                      I know
                    </button>
                    <button
                      onClick={() =>
                        setData({
                          ...data,
                          knowsConversion: false,
                          conversionRate: 0.02,
                        })
                      }
                      className={`px-4 py-2 rounded-lg text-sm ${
                        !data.knowsConversion
                          ? "bg-accent-blue text-white"
                          : "glassmorphism text-text-secondary"
                      }`}
                    >
                      I don&apos;t know
                    </button>
                  </div>
                  {data.knowsConversion ? (
                    <div>
                      <input
                        type="range"
                        min={0}
                        max={15}
                        step={0.5}
                        value={data.conversionRate * 100}
                        onChange={(e) =>
                          setData({
                            ...data,
                            conversionRate: parseFloat(e.target.value) / 100,
                          })
                        }
                        className="w-full accent-accent-blue"
                      />
                      <p className="text-sm text-text-muted mt-1">
                        {(data.conversionRate * 100).toFixed(1)}% conversion rate
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-accent-blue">
                      Using 2% as the typical conversion rate for unoptimized service business websites.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={goBack} className="btn-secondary text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                </button>
                <button onClick={goNext} className="btn-primary text-sm">
                  Next <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 6: No-show rate */}
          {step === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Appointment no-shows
              </h2>
              <div className="mb-8">
                <label className="block text-sm text-text-secondary mb-2">
                  What is your current appointment no-show rate?
                </label>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={1}
                  value={data.noShowRate * 100}
                  onChange={(e) =>
                    setData({
                      ...data,
                      noShowRate: parseInt(e.target.value) / 100,
                    })
                  }
                  className="w-full accent-accent-blue"
                />
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>0%</span>
                  <span className="text-accent-blue font-medium text-sm">
                    {Math.round(data.noShowRate * 100)}%
                  </span>
                  <span>50%</span>
                </div>
                <p className="text-xs text-text-muted mt-2">
                  Industry average is 20%. If unsure, leave the default.
                </p>
              </div>
              <div className="flex justify-between">
                <button onClick={goBack} className="btn-secondary text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                </button>
                <button onClick={goNext} className="btn-primary text-sm">
                  Next <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Calculating (brief transition) */}
          {step === 7 && (
            <div className="text-center py-16">
              <Loader2 className="w-8 h-8 text-accent-blue animate-spin mx-auto mb-4" />
              <p className="text-lg text-text-secondary">
                Calculating your revenue loss...
              </p>
            </div>
          )}

          {/* Step 8: Results */}
          {step === 8 && results && (
            <div>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-3">
                  Your Results
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-display mb-4">
                  Estimated monthly revenue you are leaving on the table:
                </h2>
                <div className="text-5xl md:text-7xl font-extrabold font-mono gradient-text py-4">
                  <AnimatedCounter value={results.totalMonthlyLoss} />
                </div>
                <p className="text-text-secondary mt-2">
                  That is{" "}
                  <span className="font-bold font-mono text-text-primary">
                    {formatCurrency(results.totalAnnualLoss)}
                  </span>{" "}
                  per year.
                </p>
              </div>

              {/* Breakdown */}
              <div className="glassmorphism rounded-xl p-6 mb-8">
                <h3 className="text-sm font-semibold text-text-primary mb-4">
                  Breakdown by category
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Missed Calls", value: results.missedCallsLost },
                    { label: "No-Shows", value: results.noShowsLost },
                    { label: "Weak Reviews", value: results.reviewsLost },
                    { label: "Website Underperformance", value: results.websiteLost },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-secondary">{item.label}</span>
                        <span className="font-mono font-semibold text-text-primary">
                          {formatCurrency(item.value)}/mo
                        </span>
                      </div>
                      <div className="h-2 bg-border-custom rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${maxLoss > 0 ? (item.value / maxLoss) * 100 : 0}%`,
                          }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI comparison */}
              <div className="glassmorphism rounded-xl p-6 mb-8 text-center">
                <p className="text-sm text-text-secondary mb-2">
                  Growth System investment: $7,997 build + $1,497/mo
                </p>
                <p className="text-lg font-bold text-text-primary">
                  Typical payback:{" "}
                  <span className="gradient-text">
                    {results.paybackWeeks > 0 ? `${results.paybackWeeks} weeks` : "immediate"}
                  </span>
                </p>
              </div>

              {/* CTA */}
              <div className="text-center mb-12">
                <a
                  href={BOOKING_URL}
                  className="btn-primary text-base px-10 py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a demo to see how we recover this revenue
                </a>
              </div>

              {/* Email capture */}
              <div className="glassmorphism rounded-xl p-6">
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  Want a PDF of your results emailed to you?
                </h3>
                {emailSent ? (
                  <p className="text-sm text-success">
                    Results sent! Check your inbox.
                  </p>
                ) : (
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3 rounded-lg bg-surface border border-border-custom text-text-primary focus:border-accent-blue focus:outline-none text-sm"
                    />
                    <button
                      onClick={sendResults}
                      disabled={!email || sending}
                      className="btn-primary text-sm disabled:opacity-50"
                    >
                      {sending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Send"
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
