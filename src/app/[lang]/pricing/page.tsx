import { Metadata } from "next";
import { PricingContent } from "@/components/pricing-content";
import { buildLangAlternates, faqSchema, breadcrumbSchema } from "@/lib/seo";

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

const pricingFaqItems = [
  {
    question: "What is included in the deployment?",
    answer:
      "The deployment includes complete configuration of your AI voice assistant, chatbot, CRM, automations, review system, and all integrations with your existing tools. We train the AI on your business, test everything, and hand it to you ready to go.",
  },
  {
    question: "What are the payment options?",
    answer:
      "You can pay the deployment cost in full upfront, or choose our 6-month installment plan. With the installment plan, you pay a flat monthly rate for 6 months that covers the deployment, then transition to your ongoing monthly management rate.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. You can upgrade at any time. You pay the difference in the deployment fee plus the new monthly rate.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Monthly management is billed monthly. There is no long-term contract required.",
  },
  {
    question: "What if I cancel?",
    answer:
      "You can cancel monthly management at any time. The system is deactivated. You are getting a managed service that includes ongoing optimization, support, and updates.",
  },
  {
    question: "How fast does the system pay for itself?",
    answer:
      "Most businesses recover the monthly management cost within the first 2 weeks of operation. The deployment cost typically pays for itself within 60 to 90 days based on recovered revenue from missed calls, no-shows, and new reviews alone.",
  },
];

const pricingBreadcrumb = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Pricing", url: "/pricing" },
]);

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pricingFaqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingBreadcrumb) }}
      />
      <PricingContent />
    </>
  );
}
