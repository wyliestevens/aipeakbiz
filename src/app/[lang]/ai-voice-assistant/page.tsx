import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { buildLangAlternates, breadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "AI Voice Assistant for Service Businesses",
    description:
      "AI Peak Biz builds and manages AI voice assistants that answer every phone call 24/7. No missed calls. More booked appointments. No new payroll.",
    alternates: buildLangAlternates(lang, "/ai-voice-assistant"),
  };
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Voice Assistant for Service Businesses",
  description:
    "AI Peak Biz builds and manages AI voice assistants that answer every phone call 24/7. No missed calls. More booked appointments. No new payroll.",
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
  url: "https://www.aipeakbiz.com/ai-voice-assistant",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "AI Voice Assistant", url: "/ai-voice-assistant" },
]);

export default function AIVoiceAssistantPage() {
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
      title="AI Voice Assistant"
      headline="Every call answered. Every time. Even at 2 AM."
      description="Your AI voice assistant picks up every phone call your team cannot. It sounds natural, knows your business, and books appointments directly into your calendar. Evenings. Weekends. Holidays. No missed calls. No new payroll."
      features={[
        { title: "Answers 24/7", desc: "Evenings, weekends, holidays, lunch breaks, and when every line is busy. Every call is answered on the first ring." },
        { title: "Sounds Natural", desc: "Modern AI voice technology delivers natural, professional conversations. Most callers cannot tell the difference." },
        { title: "Trained on Your Business", desc: "Knows your services, pricing, hours, scheduling rules, and common questions. Responds like a member of your team." },
        { title: "Books Appointments", desc: "Sees your real-time calendar availability and books directly. Confirms the appointment with the caller before hanging up." },
        { title: "Transfers When Needed", desc: "Complex questions or urgent situations are transferred to your human team with full context. The caller never has to repeat themselves." },
        { title: "Handles Call Volume", desc: "One of our implementations handles over 400 calls per day. The system scales with your business." },
      ]}
      stats={[
        { value: "400+", label: "Calls per day capacity" },
        { value: "80%", label: "Of callers who hit voicemail never call back" },
        { value: "$36K", label: "Average annual receptionist salary replaced" },
      ]}
    />
    </>
  );
}
