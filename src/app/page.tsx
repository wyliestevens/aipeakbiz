import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero";
import { MissedLeadsSection } from "@/components/home/missed-leads-section";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { FounderSection } from "@/components/home/founder-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { WhySection } from "@/components/home/why-section";
import { RevenueSystemsSection } from "@/components/revenue-systems-section";
import { DeploymentSection } from "@/components/home/deployment-section";
import { MindMap } from "@/components/mind-map";
import { HomeFAQSection } from "@/components/home/home-faq-section";
import { DemoSection } from "@/components/home/demo-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "AI Peak Biz | Revenue Recovery for Service Businesses",
  description:
    "AI Peak Biz helps service businesses recover missed revenue with instant lead response, 24/7 call answering, and automated appointment booking. Built for contractors, roofers, HVAC, and local businesses.",
  alternates: { canonical: "https://www.aipeakbiz.com" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Peak Biz",
  url: "https://www.aipeakbiz.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.aipeakbiz.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <MissedLeadsSection />
      <HowItWorksSection />
      <RevenueSystemsSection />
      <FounderSection />
      <WhySection />
      <DeploymentSection />
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-4">
              Built for real service businesses
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              The missed-call and slow-follow-up problem isn&apos;t unique to one industry.
              AI Peak Biz works across dozens of industries to recover lost revenue and book more appointments.
            </p>
          </div>
          <MindMap />
        </div>
      </section>
      <SocialProofSection />
      <DemoSection />
      <HomeFAQSection />
      <CTASection />
    </>
  );
}
