import { Metadata } from "next";
import { ConsultingPageContent } from "@/components/consulting-page";
import { buildLangAlternates, breadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs
    ? "Consultoria y Ensenanza de IA para Negocios"
    : "AI Consulting & Teaching for Businesses";
  const description = isEs
    ? "AI Peak Biz ofrece consultoria y ensenanza practica de IA. Investigamos tus operaciones, recomendamos las herramientas de IA adecuadas y capacitamos a tu equipo."
    : "AI Peak Biz provides hands-on AI consulting and teaching. We investigate your operations, recommend the right AI tools, and train your team to use them confidently.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/ai-consulting"
    : "https://www.aipeakbiz.com/ai-consulting";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/ai-consulting"),
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
  name: "AI Consulting & Teaching for Businesses",
  description:
    "AI Peak Biz provides hands-on AI consulting and teaching. We investigate your operations, recommend the right AI tools, and train your team to use them confidently.",
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
  url: "https://www.aipeakbiz.com/ai-consulting",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "AI Consulting & Teaching", url: "/ai-consulting" },
]);

export default function AIConsultingPage() {
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
      <ConsultingPageContent />
    </>
  );
}
