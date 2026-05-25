import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero";
import { MissedLeadsSection } from "@/components/home/missed-leads-section";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { FounderSection } from "@/components/home/founder-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { WhySection } from "@/components/home/why-section";
import { RevenueSystemsSection } from "@/components/revenue-systems-section";
import { DeploymentSection } from "@/components/home/deployment-section";
import { IndustriesWrapper } from "@/components/home/industries-wrapper";
import { HomeFAQSection } from "@/components/home/home-faq-section";
import { CTASection } from "@/components/cta-section";
import { buildLangAlternates, faqSchema } from "@/lib/seo";
import en from "@/i18n/dictionaries/en";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs
    ? "Recuperacion de Ingresos para Negocios de Servicios"
    : "Revenue Recovery for Service Businesses";
  const description = isEs
    ? "AI Peak Biz ayuda a negocios de servicios a recuperar ingresos perdidos con respuesta instantanea, atencion de llamadas 24/7 y agendamiento automatico de citas."
    : "AI Peak Biz helps service businesses recover missed revenue with instant lead response, 24/7 call answering, and automated appointment booking. Built for contractors, roofers, HVAC, and local businesses.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/"
    : "https://www.aipeakbiz.com/";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/"),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
    },
  };
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Peak Biz",
  url: "https://www.aipeakbiz.com",
};

const faqJsonLd = faqSchema(en.faq.items);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <MissedLeadsSection />
      <HowItWorksSection />
      <RevenueSystemsSection />
      <FounderSection />
      <WhySection />
      <DeploymentSection />
      <IndustriesWrapper />
      <SocialProofSection />
      <HomeFAQSection />
      <CTASection />
    </>
  );
}
