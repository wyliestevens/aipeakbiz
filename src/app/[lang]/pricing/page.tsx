import { Metadata } from "next";
import { PricingContent } from "@/components/pricing-content";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs ? "Precios" : "Pricing";
  const description = isEs
    ? "Precios de implementacion de AI Peak Biz para sistemas de recuperacion de ingresos. Tres niveles con opciones de pago flexibles."
    : "AI Peak Biz deployment pricing for revenue recovery systems. Three tiers with flexible payment options. Every call answered. More appointments booked.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/pricing"
    : "https://www.aipeakbiz.com/pricing";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/pricing"),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
    },
  };
}

export default function PricingPage() {
  return <PricingContent />;
}
