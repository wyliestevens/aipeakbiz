import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "AI Appointment Setter for Service Businesses",
    description:
      "AI Peak Biz builds AI appointment setters that call new leads instantly after form submission. Zero delay. More booked appointments. No staff required.",
    alternates: buildLangAlternates(lang, "/ai-appointment-setter"),
  };
}

export default function AIAppointmentSetterPage() {
  return (
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
  );
}
