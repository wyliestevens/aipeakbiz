import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { buildLangAlternates, breadcrumbSchema, faqSchema } from "@/lib/seo";

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

const faqs = [
  {
    question: "How fast does the AI actually call after a form is submitted?",
    answer: "Within 30 to 60 seconds. The trigger fires the moment the form submission is received, and the AI places the call immediately. This is not a queue or a batch process. Every lead gets called individually within a minute of expressing interest.",
  },
  {
    question: "What does the AI say on the call?",
    answer: "The AI introduces itself as calling from your business, references the form they just submitted, confirms their interest, answers common questions about your services, and books an appointment if they are ready. The script is custom-built for your business and sounds natural, not robotic.",
  },
  {
    question: "What if the lead does not answer the call?",
    answer: "The system leaves a voicemail and follows up with a text message that includes a booking link. If the lead does not respond within a set period, the AI can attempt a second call or hand off to your team. The goal is persistence without being aggressive.",
  },
  {
    question: "Can the AI handle objections or pricing questions?",
    answer: "Yes. We train the AI on your common objections, pricing ranges, and FAQ responses. It can handle questions like 'How much does this cost?', 'Do you service my area?', and 'What is included?' with accurate, business-specific answers. For complex negotiations or unusual situations, it collects details and hands off to your team.",
  },
  {
    question: "Does this replace my sales team?",
    answer: "It replaces the speed-to-lead gap, not your sales team. The AI handles the initial outreach and appointment booking so your team does not have to chase leads. Your salespeople or estimators still show up for the appointment and close the deal. The AI just makes sure more leads actually make it to that appointment.",
  },
  {
    question: "What kind of conversion rates should I expect?",
    answer: "Leads that are called within 60 seconds of form submission convert at 3 to 5 times the rate of leads that wait hours or days for a callback. If your current lead-to-appointment rate is 20 percent, expect it to jump to 40 to 60 percent with instant AI follow-up. The exact numbers depend on your industry and lead quality.",
  },
];

const faqJsonLd = faqSchema(faqs);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        problemSection={{
          headline: "The problem",
          paragraphs: [
            "A prospect fills out a form on your website. They are interested. They want to talk. They are ready to book. What happens next? In most service businesses, that lead sits in a CRM or email inbox for hours. Sometimes days. Your office manager gets to it when she can. Maybe she calls back that afternoon. Maybe the next morning. By then, it is too late.",
            "Research from MIT and InsideSales shows that leads contacted within 5 minutes are 21 times more likely to convert than leads contacted after 30 minutes. After 5 minutes, the odds of making contact drop by 10 times. After an hour, the lead is essentially cold. They have moved on, called a competitor, or lost the urgency that made them fill out the form in the first place. Seventy-eight percent of customers buy from the first company that responds.",
            "This is not a follow-up problem. It is a speed problem. Your team is busy doing actual work. They cannot stop in the middle of a job to call a new lead the second it comes in. But that is exactly what needs to happen to win the deal. An AI appointment setter solves this by calling every lead within 60 seconds of form submission, 24 hours a day, 7 days a week. It does not wait for a convenient time. It calls now, while the prospect is still interested and still on your website.",
          ],
        }}
        howItWorks={[
          { step: "1", title: "A lead submits a form", desc: "A prospect fills out a form on your website, landing page, Google Ad, or any lead source you use. The form data, including their name, phone number, and what they need, is captured instantly." },
          { step: "2", title: "The AI calls within 60 seconds", desc: "The system triggers an outbound call to the lead immediately. The AI introduces itself as calling from your business, references what the lead requested, and begins the conversation." },
          { step: "3", title: "Questions are answered, objections handled", desc: "The AI is trained on your services, pricing, service area, availability, and common questions. It provides accurate answers and guides the conversation toward booking an appointment." },
          { step: "4", title: "The appointment is booked", desc: "The AI checks your live calendar availability and offers time slots. Once the lead picks a time, the appointment is confirmed, and both parties receive a confirmation. The lead hangs up with a time on the books." },
          { step: "5", title: "Your team shows up and closes", desc: "Your estimator, technician, or salesperson arrives at the booked appointment. The AI has already qualified the lead, answered their questions, and set expectations. Your team just needs to show up and do their job." },
        ]}
        industryExamples={[
          { trade: "Roofing Company", scenario: "A homeowner sees your Google Ad for storm damage repair and fills out the form at 7:15 PM. Your office closed at 5. With a traditional process, your office manager calls back at 9 AM the next morning. The homeowner already booked with someone else who called at 7:30 PM. With the AI appointment setter, the homeowner gets a call at 7:16 PM, answers three questions, and books an inspection for the next day. You got the lead because you were first." },
          { trade: "HVAC Contractor", scenario: "You run Google Ads for AC installation leads. Ten form submissions come in over the weekend. Monday morning, your team starts making calls. Three of those leads already booked with competitors. Four do not answer because it has been two days. With AI calling each lead within a minute of submission, all 10 get contacted instantly. Seven book appointments. Your close rate on Saturday and Sunday leads jumps from 30 percent to 70 percent." },
          { trade: "Electrician", scenario: "A property management company fills out your form at 4:55 PM on Friday requesting a quote for panel upgrades across 8 units. Without instant follow-up, this sits until Monday and they may get three other quotes over the weekend. The AI calls at 4:56 PM, confirms the scope, and books an on-site walkthrough for Monday at 10 AM. You are first in the door and first to present a quote." },
        ]}
        faqs={faqs}
        relatedServices={[
          { title: "AI Voice Assistant", href: "/ai-voice-assistant", desc: "Answer inbound calls 24/7 with an AI that books appointments and handles questions." },
          { title: "Missed Call Text-Back", href: "/missed-call-text-back", desc: "Catch leads who call but do not fill out forms with automatic text responses." },
          { title: "AI Chatbot", href: "/ai-chatbot", desc: "Engage website visitors before they even fill out a form with an AI chatbot that books." },
        ]}
      />
    </>
  );
}
