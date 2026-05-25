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
    ? "Agendador de Citas con IA para Negocios de Servicios"
    : "AI Appointment Setter for Service Businesses";
  const description = isEs
    ? "AI Peak Biz construye agendadores de citas con IA que llaman a nuevos clientes potenciales al instante. Sin demoras. Mas citas agendadas. Sin personal adicional."
    : "AI Peak Biz builds AI appointment setters that call new leads instantly after form submission. Zero delay. More booked appointments. No staff required.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/ai-appointment-setter"
    : "https://www.aipeakbiz.com/ai-appointment-setter";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/ai-appointment-setter"),
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
  name: "AI Appointment Setter for Service Businesses",
  description:
    "AI Peak Biz builds AI appointment setters that call new leads instantly after form submission. Zero delay. More booked appointments. No staff required.",
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
  url: "https://www.aipeakbiz.com/ai-appointment-setter",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "AI Appointment Setter", url: "/ai-appointment-setter" },
]);

export default function AIAppointmentSetterPage() {
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
      title="AI Appointment Setter"
      headline="New lead comes in. AI calls them. Appointment booked. No delay."
      description="When a prospect fills out a form on your website, your AI appointment setter calls them within seconds. It introduces your business, answers their questions, and books them directly into your calendar. No waiting. No manual follow-up. No lost leads."
      features={[
        { title: "Calls Within Seconds", desc: "The moment a lead submits a form, your AI agent picks up the phone and calls them. Speed to lead is everything, and this system eliminates the gap entirely." },
        { title: "Books in Real Time", desc: "The AI sees your live calendar availability and books the appointment during the call. The lead hangs up with a confirmed time on the books." },
        { title: "Sounds Natural", desc: "Modern AI voice technology delivers a professional, human-like conversation. Leads feel like they are talking to a real person on your team." },
        { title: "Handles Objections", desc: "Trained on your business, pricing, and common questions. The AI answers concerns and guides the conversation toward a booked appointment." },
        { title: "Works 24/7", desc: "Leads do not only come in during business hours. A form submitted at 10 PM gets a call at 10 PM. No lead sits overnight waiting for your team to follow up." },
        { title: "Frees Your Team", desc: "Your staff stops chasing leads and starts serving customers. The AI handles the outbound calls so your team can focus on the work that actually drives revenue." },
      ]}
      stats={[
        { value: "78%", label: "Of leads buy from the first responder" },
        { value: "<60s", label: "Average time from form to phone call" },
        { value: "5 min", label: "After 5 minutes, lead contact rates drop 10x" },
      ]}
    />
    </>
  );
}
