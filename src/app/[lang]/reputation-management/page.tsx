import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { buildLangAlternates, breadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs
    ? "Gestion de Reputacion para Negocios de Servicios"
    : "Reputation Management for Service Businesses";
  const description = isEs
    ? "AI Peak Biz construye sistemas automatizados de gestion de reputacion. Obtiene mas resenas de 5 estrellas en Google. Dirige comentarios negativos de forma privada."
    : "AI Peak Biz builds automated reputation management systems. Get more 5-star Google reviews. Route negative feedback privately. Build trust that drives bookings.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/reputation-management"
    : "https://www.aipeakbiz.com/reputation-management";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/reputation-management"),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
    },
  };
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reputation Management for Service Businesses",
  description:
    "AI Peak Biz builds automated reputation management systems. Get more 5-star Google reviews. Route negative feedback privately. Build trust that drives bookings.",
  provider: {
    "@type": "LocalBusiness",
    name: "AI Peak Biz",
    telephone: "+1-928-628-6080",
    email: "wylie@aipeakbiz.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kingman",
      addressRegion: "AZ",
      addressCountry: "US",
    },
  },
  areaServed: "US",
  url: "https://www.aipeakbiz.com/reputation-management",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Reputation Management", url: "/reputation-management" },
]);

export default function ReputationManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicePageContent
      title="Reputation Management"
      headline="More 5-star reviews. Every month. Without asking."
      description="Your happy customers leave without posting a review because nobody asks at the right time. Your AI reputation engine sends a review request after every visit. Happy customers are guided to Google. Concerns are routed to you privately. Your rating climbs every month."
      features={[
        { title: "Automated Review Requests", desc: "After every appointment or completed service, the system sends a text asking about their experience. No staff effort required." },
        { title: "Smart Routing", desc: "Positive responses are guided to leave a Google review with a direct link. Negative responses are sent privately to you so you can address them before they go public." },
        { title: "Consistent Growth", desc: "Most businesses add 15 to 30 new Google reviews per month. Your rating and review count climb steadily without any manual effort." },
        { title: "Competitive Advantage", desc: "A half-star difference in Google rating drives 15 to 20 percent of prospective customers to your competitor. Closing that gap means more inbound calls." },
        { title: "Review Monitoring", desc: "Track your Google reviews in one dashboard. See trends, respond to reviews, and understand your online reputation at a glance." },
        { title: "No Fake Reviews", desc: "Every review request goes to a real customer. We do not fabricate, incentivize, or manipulate reviews. Just systematic asking at the right time." },
      ]}
      stats={[
        { value: "15-30", label: "New reviews per month typical" },
        { value: "88%", label: "Trust online reviews like personal referrals" },
        { value: "0.5★", label: "Gap costs 15-20% of potential customers" },
      ]}
    />
    </>
  );
}
