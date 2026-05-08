"use client";

import { useState } from "react";

const industryCategories = [
  {
    name: "Home Services",
    industries: [
      "Roofers", "Plumbers", "Electricians", "HVAC", "Concrete",
      "Landscapers", "Pest Control", "Pool Service", "Garage Door", "Cleaning",
    ],
  },
  {
    name: "Construction",
    industries: [
      "General Contractors", "Remodelers", "Solar", "Outdoor Living",
      "Decking", "Fencing", "Flooring", "Painters",
    ],
  },
  {
    name: "Healthcare",
    industries: [
      "Chiropractors", "Dentists", "Medical Clinics", "Physical Therapy",
      "Optometrists", "Veterinarians", "Mental Health", "Med Spas", "Dermatologists",
    ],
  },
  {
    name: "Legal",
    industries: [
      "Personal Injury Lawyers", "Family Law", "Estate Planning",
      "Criminal Defense", "Business Lawyers", "Immigration Lawyers",
    ],
  },
  {
    name: "Financial",
    industries: [
      "Financial Advisors", "Insurance Agents", "Mortgage Brokers",
      "Tax Preparers", "Investment Firms",
    ],
  },
  {
    name: "Real Estate",
    industries: [
      "Realtors", "Property Management", "Real Estate Investors", "Title Companies",
    ],
  },
  {
    name: "Automotive",
    industries: ["Auto Repair", "Body Shops", "Detailing", "Tire Shops"],
  },
  {
    name: "Professional Services",
    industries: ["Accountants", "Bookkeepers", "Grant Writers", "Coaches"],
  },
  {
    name: "Fitness & Wellness",
    industries: [
      "Gyms", "Personal Trainers", "Yoga Studios", "Nutritionists", "Massage Therapy",
    ],
  },
  {
    name: "Beauty",
    industries: ["Hair Salons", "Nail Salons", "Barbers", "Lash Studios"],
  },
  {
    name: "Education",
    industries: ["Tutoring", "Music Lessons", "Driving Schools", "Trade Schools"],
  },
  {
    name: "Hospitality",
    industries: ["Restaurants", "Cafes", "Catering"],
  },
  {
    name: "Trades & Specialty",
    industries: ["Locksmiths", "Towing", "Movers", "Storage", "Security"],
  },
];

export function IndustriesSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
            Built for real service businesses
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            The missed-call and slow-follow-up problem isn&apos;t unique to one industry.
            AI Peak Biz helps businesses across dozens of industries recover lost revenue,
            automate follow-up, improve customer communication, and book more appointments automatically.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {industryCategories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.name ? null : category.name
                )
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.name
                  ? "bg-brand text-white shadow-sm"
                  : "bg-surface text-text-secondary border border-border hover:border-brand-100 hover:text-text-primary"
              }`}
            >
              {category.name}
              <span className="ml-1.5 text-xs opacity-70">
                {category.industries.length}
              </span>
            </button>
          ))}
        </div>

        {/* Industry grid */}
        <div className="max-w-5xl mx-auto">
          {activeCategory ? (
            // Expanded single category
            <div className="bg-surface rounded-xl border border-border p-8">
              <h3 className="text-lg font-semibold text-text-primary mb-5">
                {activeCategory}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {industryCategories
                  .find((c) => c.name === activeCategory)
                  ?.industries.map((industry) => (
                    <div
                      key={industry}
                      className="px-4 py-3 rounded-lg bg-brand-50 text-sm font-medium text-text-primary text-center"
                    >
                      {industry}
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            // All categories overview
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industryCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className="bg-surface rounded-xl border border-border p-5 text-left hover:border-brand-100 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                      {category.name}
                    </h3>
                    <span className="text-xs text-text-muted bg-background-alt px-2 py-0.5 rounded-full">
                      {category.industries.length}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {category.industries.slice(0, 4).join(", ")}
                    {category.industries.length > 4 && (
                      <span className="text-text-muted">
                        {" "}+{category.industries.length - 4} more
                      </span>
                    )}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom message */}
        <p className="text-center text-sm text-text-muted mt-10 max-w-xl mx-auto">
          Every service business loses revenue to missed calls and slow follow-up.
          The industry is different — the problem is the same.
        </p>
      </div>
    </section>
  );
}
