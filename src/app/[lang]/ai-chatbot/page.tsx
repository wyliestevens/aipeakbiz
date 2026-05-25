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
    ? "Chatbot con IA para Negocios de Servicios"
    : "AI Chatbot for Service Businesses";
  const description = isEs
    ? "AI Peak Biz construye y gestiona chatbots con IA que agendan citas desde tu sitio web las 24 horas. Respuestas instantaneas. Mas reservas. Sin tiempo de personal."
    : "AI Peak Biz builds and manages AI chatbots that book appointments from your website 24/7. Instant responses. More bookings. Zero staff time.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/ai-chatbot"
    : "https://www.aipeakbiz.com/ai-chatbot";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/ai-chatbot"),
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
  name: "AI Chatbot for Service Businesses",
  description:
    "AI Peak Biz builds and manages AI chatbots that book appointments from your website 24/7. Instant responses. More bookings. Zero staff time.",
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
  url: "https://www.aipeakbiz.com/ai-chatbot",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "AI Chatbot", url: "/ai-chatbot" },
]);

export default function AIChatbotPage() {
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
      title="AI Chatbot"
      headline="Turn website visitors into booked appointments. Automatically."
      description="Your website gets traffic. Most visitors leave without taking action. Your AI chatbot engages every visitor instantly, answers their questions, and books appointments 24/7. No forms. No wait. No lost leads."
      features={[
        { title: "Instant Response", desc: "Engages visitors within 5 seconds of landing on your site. No waiting. No bounce." },
        { title: "Trained on Your Business", desc: "Knows your services, pricing, scheduling, and policies. Answers like a knowledgeable member of your team." },
        { title: "Books Appointments in Real Time", desc: "Sees your calendar availability and books directly. The visitor goes from browsing to booked in under 60 seconds." },
        { title: "Captures Lead Information", desc: "Collects name, contact info, service needed, and any qualifying details. Every lead is logged in your CRM." },
        { title: "Works After Hours", desc: "Your website gets traffic at 10 PM. Without a chatbot, those visitors leave. With one, they book." },
        { title: "Mobile Optimized", desc: "Works perfectly on mobile devices. Most of your website traffic is mobile. The chatbot meets them there." },
      ]}
      stats={[
        { value: "5 sec", label: "Average response time" },
        { value: "3-5x", label: "Increase in website conversions" },
        { value: "24/7", label: "Always available" },
      ]}
    />
    </>
  );
}
