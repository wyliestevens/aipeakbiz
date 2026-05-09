import { Metadata } from "next";
import { PricingContent } from "@/components/pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AI Peak Biz deployment pricing for revenue recovery systems. Three tiers with flexible payment options. Every call answered. More appointments booked.",
  alternates: { canonical: "https://www.aipeakbiz.com/pricing" },
};

export default function PricingPage() {
  return <PricingContent />;
}
