import { Metadata } from "next";
import { PricingContent } from "@/components/pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AI Peak Biz pricing for AI front desk systems. Three tiers starting at $4,997 build + $997/mo. Every call answered. More appointments booked.",
  alternates: { canonical: "https://www.aipeakbiz.com/pricing" },
};

export default function PricingPage() {
  return <PricingContent />;
}
