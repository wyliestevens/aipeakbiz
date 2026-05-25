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
    ? "Asistente de Voz con IA para Negocios de Servicios"
    : "AI Voice Assistant for Service Businesses";
  const description = isEs
    ? "AI Peak Biz construye y gestiona asistentes de voz con IA que contestan cada llamada las 24 horas. Sin llamadas perdidas. Mas citas agendadas. Sin nomina adicional."
    : "AI Peak Biz builds and manages AI voice assistants that answer every phone call 24/7. No missed calls. More booked appointments. No new payroll.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/ai-voice-assistant"
    : "https://www.aipeakbiz.com/ai-voice-assistant";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/ai-voice-assistant"),
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

const faqs = [
  {
    question: "Will callers know they are talking to AI?",
    answer: "Most callers do not realize it. Modern AI voice technology sounds natural and conversational. The assistant uses your business name, knows your services, and responds to questions fluidly. We have had callers thank 'the receptionist' for being so helpful.",
  },
  {
    question: "What happens if the caller has a complex question the AI cannot handle?",
    answer: "The AI is trained to recognize when a question is outside its scope. In those cases, it collects the caller's information, explains that a team member will follow up shortly, and sends the details to your team with full context. For urgent situations, it can transfer the call directly to a designated phone number.",
  },
  {
    question: "Can it handle multiple calls at the same time?",
    answer: "Yes. Unlike a human receptionist who can only take one call at a time, the AI voice assistant handles unlimited simultaneous calls. During busy periods when all your lines would normally be tied up, every caller still gets answered on the first ring.",
  },
  {
    question: "How does the AI know my availability to book appointments?",
    answer: "We integrate directly with your calendar system, whether that is Google Calendar, Outlook, Jobber, ServiceTitan, Housecall Pro, or GoHighLevel. The AI checks real-time availability before offering time slots to callers, so it never double-books.",
  },
  {
    question: "What does setup look like and how long does it take?",
    answer: "Setup takes 5 to 10 business days. We start with a 30-minute call to learn your business, then we build and train the voice assistant, connect it to your phone system and calendar, and test it thoroughly. You approve the final version before it goes live. We handle everything technical.",
  },
  {
    question: "How much does this cost compared to a full-time receptionist?",
    answer: "The average receptionist salary is $36,000 per year, and that only covers 40 hours a week with no holidays or sick days. An AI voice assistant costs a fraction of that and works 24/7/365. It never calls in sick, never takes a lunch break, and never puts a caller on hold because it is already on the phone.",
  },
];

const faqJsonLd = faqSchema(faqs);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        problemSection={{
          headline: "The problem",
          paragraphs: [
            "Every missed call is a lost customer. That is not an exaggeration. Research shows that 80 percent of callers who reach voicemail will not leave a message and will not call back. They hang up and call the next company on the list. If you are a service business that relies on phone calls for new jobs, every unanswered ring is money walking out the door.",
            "The math is brutal. If your average job is worth $1,500 and you miss just 3 calls per week, that is $234,000 in potential revenue lost per year. And that does not even count the calls you miss during lunch, after hours, on weekends, or when your team is on a job site. For many contractors, the phone rings the most when they are least available to answer it.",
            "Hiring a receptionist helps, but only during business hours. A full-time receptionist costs $36,000 or more per year and can only answer one call at a time. She cannot work evenings, weekends, or holidays without overtime. And when she is sick or on vacation, you are right back where you started. An AI voice assistant eliminates this problem entirely. It answers every call, every time, on the first ring.",
          ],
        }}
        howItWorks={[
          { step: "1", title: "We learn your business", desc: "We spend 30 minutes on a call learning your services, pricing, scheduling rules, FAQs, and how you want calls handled. We also identify which situations should be transferred to your human team." },
          { step: "2", title: "We build and train the voice assistant", desc: "We configure the AI with your business knowledge, choose a natural-sounding voice, and program the conversation flows for booking, answering questions, and handling edge cases." },
          { step: "3", title: "We connect it to your phone system", desc: "The AI integrates with your existing business phone number. No new numbers needed. Calls can be forwarded to the AI when your team is unavailable, or it can answer all calls as the first point of contact." },
          { step: "4", title: "You test and approve", desc: "You call the number yourself and test every scenario. Ask it tricky questions. Try to book an appointment. See how it handles requests outside your services. We refine until you are confident." },
          { step: "5", title: "It goes live and starts booking", desc: "The AI starts answering calls immediately. You get notifications for every booked appointment and can review call transcripts in your dashboard. We monitor performance and optimize over the first 30 days." },
        ]}
        industryExamples={[
          { trade: "Roofing Company", scenario: "It is Tuesday at 6:30 PM after a hailstorm. Your office closed at 5. Your phone rings 14 times between 6 PM and 9 PM. Without the AI, all 14 go to voicemail. With the AI, each caller gets answered, their address is collected, damage is described, and an inspection is booked for the next available morning slot. That is potentially $70,000 or more in roofing jobs saved in one evening." },
          { trade: "HVAC Contractor", scenario: "A homeowner's AC goes out on Saturday afternoon in July. They call three HVAC companies. Two go to voicemail. Your AI answers on the first ring, confirms you do emergency service, collects the details, and books a same-day visit. You get the job because you answered. The other two companies never even know the call happened." },
          { trade: "Plumbing Company", scenario: "Your two-person office is handling a busy Monday morning. Four calls come in within 10 minutes. Your receptionist can take one. The AI handles the other three simultaneously, booking two appointments and collecting details for the third. None of those callers heard a busy signal or waited on hold." },
        ]}
        faqs={faqs}
        relatedServices={[
          { title: "AI Chatbot", href: "/ai-chatbot", desc: "Engage website visitors and book appointments through text-based AI conversation." },
          { title: "Missed Call Text-Back", href: "/missed-call-text-back", desc: "Pair voice AI with automatic text responses for callers who prefer texting." },
          { title: "AI Appointment Setter", href: "/ai-appointment-setter", desc: "AI calls new leads within seconds of form submission to book appointments instantly." },
        ]}
      />
    </>
  );
}
