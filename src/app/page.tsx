import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero";
import { MindMapSection } from "@/components/home/mind-map-section";
import { PainPointsSection } from "@/components/home/pain-points";
import { SystemSection } from "@/components/home/system-section";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { PricingPreview } from "@/components/home/pricing-preview";
import { ReviewsSection } from "@/components/home/reviews-section";
import { AboutTeaser } from "@/components/home/about-teaser";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "AI Peak Biz | AI Automation for Service Businesses",
  description:
    "AI Peak Biz builds and manages AI automation systems for service businesses. Every call answered. Every lead captured. More appointments booked. More 5-star reviews.",
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
      <MindMapSection />
      <PainPointsSection />
      <SystemSection />
      <HowItWorksSection />
      <PricingPreview />
      <ReviewsSection />
      <AboutTeaser />
      <CTASection />
    </>
  );
}
