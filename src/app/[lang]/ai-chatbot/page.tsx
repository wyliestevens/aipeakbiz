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

const faqs = [
  {
    question: "Will the chatbot sound robotic or generic to my customers?",
    answer: "No. We train the chatbot on your specific business, including your services, pricing, service area, scheduling rules, and common customer questions. It responds the way a knowledgeable front desk person would. Customers frequently do not realize they are chatting with AI.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most chatbots are live within 5 to 7 business days. We handle the entire setup: training the AI on your business, integrating it with your calendar, testing it, and embedding it on your website. You review it before it goes live.",
  },
  {
    question: "Can the chatbot handle complex questions or just basic ones?",
    answer: "It handles the questions your front desk gets every day: pricing ranges, service availability, scheduling, service area, what to expect during an appointment, and more. For truly complex or unusual situations, the chatbot collects the customer's information and flags it for your team to follow up personally.",
  },
  {
    question: "What if I already have a contact form on my website?",
    answer: "Contact forms have an average conversion rate of 2 to 3 percent. Most visitors leave without filling them out because forms feel like work. A chatbot engages visitors in conversation, which feels easier and faster. Businesses that switch from forms to chatbots typically see 3 to 5 times more leads from the same traffic.",
  },
  {
    question: "Does it work with my existing calendar and CRM?",
    answer: "Yes. We integrate with Google Calendar, Outlook, Calendly, GoHighLevel, Jobber, ServiceTitan, Housecall Pro, and most other scheduling and CRM platforms. If your system has an API or accepts calendar invites, we can connect it.",
  },
  {
    question: "How much does an AI chatbot cost compared to hiring someone?",
    answer: "A full-time receptionist costs $30,000 to $45,000 per year in salary alone, plus benefits and training. An AI chatbot costs a fraction of that and works 24/7 without breaks, sick days, or turnover. Most clients see a positive ROI within the first month from booked appointments that would have otherwise been lost.",
  },
];

const faqJsonLd = faqSchema(faqs);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        problemSection={{
          headline: "The problem",
          paragraphs: [
            "Right now, your website is like a showroom with no one at the front desk. Visitors land on your site, look around for a few seconds, and leave. They had a question about your availability. They wanted to know if you service their area. They were ready to book but did not want to fill out a form and wait 24 hours for a callback. So they hit the back button and called your competitor instead.",
            "The data backs this up. The average service business website converts less than 3 percent of visitors into leads. That means for every 100 people who visit your site, 97 leave without doing anything. Most of those visitors were qualified prospects. They found you on Google. They were looking for exactly what you offer. They just needed someone to talk to, and no one was there.",
            "This is not a traffic problem. It is a conversion problem. You are paying for ads, SEO, and marketing to get people to your website, and then losing them at the finish line because there is no one available to engage them the moment they arrive. An AI chatbot fixes this by being available every second of every day, answering questions instantly, and guiding visitors straight to your calendar.",
          ],
        }}
        howItWorks={[
          { step: "1", title: "We learn your business", desc: "We interview you about your services, pricing, service area, scheduling rules, and the questions your customers ask most. This usually takes one 30-minute call." },
          { step: "2", title: "We build and train the chatbot", desc: "We configure the AI with everything it needs to represent your business accurately. It learns your tone, your services, your availability, and your policies." },
          { step: "3", title: "We connect your calendar and CRM", desc: "The chatbot gets direct access to your scheduling system so it can book real appointments in real time. Every conversation and lead is logged in your CRM automatically." },
          { step: "4", title: "You review and approve", desc: "Before anything goes live, you test the chatbot yourself. You ask it questions, try to trip it up, and give us feedback. We refine until you are satisfied." },
          { step: "5", title: "It goes live on your website", desc: "We embed the chatbot on your site. Within hours, it starts engaging visitors, answering questions, and booking appointments. You get notified of every new booking." },
        ]}
        industryExamples={[
          { trade: "Roofing Company", scenario: "A homeowner searches 'roof repair near me' at 9 PM after a storm. They land on your site, the chatbot asks what happened, confirms you service their zip code, and books an inspection for the next morning. Without the chatbot, that homeowner calls the first roofer who answers tomorrow and you never hear from them." },
          { trade: "HVAC Contractor", scenario: "A property manager visits your site looking for a commercial HVAC maintenance contract. The chatbot explains your maintenance plans, asks about the number of units, and books a walkthrough. Your competitor's website just has a contact form that the property manager ignores." },
          { trade: "Plumbing Company", scenario: "A customer with a leaking faucet finds your site on their phone at 7 AM. The chatbot confirms it is not an emergency, explains your diagnostic fee, and books a same-day appointment. The customer was about to call three other plumbers but booked with you because you answered first." },
        ]}
        faqs={faqs}
        relatedServices={[
          { title: "AI Voice Assistant", href: "/ai-voice-assistant", desc: "Answer every phone call 24/7 with an AI that sounds natural and books appointments." },
          { title: "Missed Call Text-Back", href: "/missed-call-text-back", desc: "Automatically text back missed calls with a booking link within 60 seconds." },
          { title: "Website Design", href: "/website-design", desc: "A website built to convert visitors into booked appointments, not just look pretty." },
        ]}
      />
    </>
  );
}
