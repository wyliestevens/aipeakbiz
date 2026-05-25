import { Metadata } from "next";
import { PricingContent } from "@/components/pricing-content";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Pricing",
    description:
      "AI Peak Biz deployment pricing for revenue recovery systems. Three tiers with flexible payment options. Every call answered. More appointments booked.",
    alternates: buildLangAlternates(lang, "/pricing"),
  };
}

export default function PricingPage() {
  return <PricingContent />;
}
