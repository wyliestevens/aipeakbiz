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
    ? "Respuesta Automatica por Texto a Llamadas Perdidas"
    : "Missed Call Text-Back for Service Businesses";
  const description = isEs
    ? "Nunca pierdas un cliente por una llamada perdida. AI Peak Biz configura respuestas automaticas por texto en 60 segundos con un enlace para agendar."
    : "Never lose a lead to a missed call again. AI Peak Biz sets up automated text-back that responds within 60 seconds with a booking link.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/missed-call-text-back"
    : "https://www.aipeakbiz.com/missed-call-text-back";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/missed-call-text-back"),
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
  name: "Missed Call Text-Back for Service Businesses",
  description:
    "Never lose a lead to a missed call again. AI Peak Biz sets up automated text-back that responds within 60 seconds with a booking link.",
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
  url: "https://www.aipeakbiz.com/missed-call-text-back",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Missed Call Text-Back", url: "/missed-call-text-back" },
]);

const faqs = [
  {
    question: "What does the text message say?",
    answer: "We customize the message to match your business. A typical message might say: 'Hey, this is [Your Business Name]. Sorry we missed your call. You can book an appointment right here: [booking link]. Or just reply to this text and we will get back to you.' The tone matches your brand, and the message includes a direct action the customer can take immediately.",
  },
  {
    question: "How fast does the text go out after a missed call?",
    answer: "Within 60 seconds. Speed matters because the customer is still thinking about their problem when they called. The longer you wait, the more likely they are to call someone else. A text within one minute keeps you top of mind while the need is fresh.",
  },
  {
    question: "What if the customer replies to the text?",
    answer: "Two-way texting is built in. If the customer replies with a question or wants more information, the conversation continues. Depending on your setup, replies can be handled by your team, by an AI text assistant, or both. Either way, the conversation is logged in your CRM.",
  },
  {
    question: "Does this work with my existing phone number?",
    answer: "Yes. We set up the text-back system on your current business phone number. Customers see texts coming from the same number they called. No new numbers, no confusion, no separate systems to manage.",
  },
  {
    question: "Can I turn it off during business hours when I am answering calls?",
    answer: "Absolutely. You can configure it to only trigger after hours, or only when calls go unanswered during the day. Most clients leave it on all the time because even during business hours, calls occasionally slip through when the team is on another call or on a job site.",
  },
  {
    question: "What kind of results should I expect?",
    answer: "On average, 30 percent or more of missed calls that receive a text-back end up booking an appointment. Compare that to voicemail, where 80 percent of callers never call back. If you miss even 5 calls per week and your average job is $800, recovering just 30 percent of those is an extra $62,400 per year in revenue.",
  },
];

const faqJsonLd = faqSchema(faqs);

export default function MissedCallTextBackPage() {
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
        title="Missed Call Text-Back"
        headline="Miss a call? Your system texts them back in 60 seconds."
        description="When your team cannot answer the phone, your system sends an instant text with a booking link. The customer describes what they need and schedules an appointment before they even think about calling your competitor."
        features={[
          { title: "60-Second Response", desc: "The moment a call goes unanswered, a text goes out automatically. No delays, no manual follow-up, no leads slipping through the cracks." },
          { title: "Booking Link Included", desc: "Every text includes a direct link to your calendar. The customer can book an appointment right from the text message without waiting for a callback." },
          { title: "Custom Messaging", desc: "The text sounds like it came from your front desk, not a robot. We customize the message to match your business tone and include the right next step." },
          { title: "After-Hours Coverage", desc: "Missed calls at 8 PM on a Saturday still get a response. Your system works around the clock so no lead goes cold overnight." },
          { title: "Two-Way Texting", desc: "Customers can reply to the text and have a real conversation. Questions get answered, details get captured, and appointments get booked." },
          { title: "Lead Tracking", desc: "Every missed call and text-back is logged in your CRM. You can see exactly how many leads were saved and how many booked." },
        ]}
        stats={[
          { value: "60s", label: "Average response time" },
          { value: "80%", label: "Of callers who hit voicemail never call back" },
          { value: "30%+", label: "Of missed calls converted to bookings" },
        ]}
        problemSection={{
          headline: "The problem",
          paragraphs: [
            "Here is what happens when a customer calls your business and nobody answers. They hear the voicemail greeting, hang up, and call the next company on Google. They do not leave a message. They do not call back later. They are gone. Research shows 80 percent of callers who hit voicemail never try again. Your voicemail is not a safety net. It is a dead end.",
            "For a service business, missed calls are not a minor inconvenience. They are your most expensive leak. Every missed call is a customer who was ready to spend money with you. They had a problem. They picked up their phone. They found your number. They were one answered ring away from becoming a paying customer. And you lost them to silence.",
            "The worst part is you probably do not even know how many calls you are missing. Most businesses miss 20 to 40 percent of incoming calls, especially during peak hours, lunch breaks, and after 5 PM. If your average job is worth $800 and you miss just 5 calls per week, that is over $200,000 per year in potential revenue you never see. A missed call text-back system catches those leads before they disappear, responding instantly with a way to book even though nobody picked up the phone.",
          ],
        }}
        howItWorks={[
          { step: "1", title: "A call comes in and goes unanswered", desc: "Your team is on another call, on a job site, at lunch, or it is after hours. The caller hears your voicemail or the phone rings out. The system detects the missed call instantly." },
          { step: "2", title: "An automatic text is sent within 60 seconds", desc: "The caller receives a personalized text message from your business number. It acknowledges the missed call, includes a direct booking link, and invites them to reply with what they need." },
          { step: "3", title: "The customer books or replies", desc: "Most customers either click the booking link and schedule an appointment immediately, or reply to the text with details about their situation. Either way, the conversation has started." },
          { step: "4", title: "Your team gets notified", desc: "Every missed call, text response, and booking is logged in your CRM and sent as a notification to your team. You see exactly what was missed and what was recovered." },
          { step: "5", title: "Follow-up continues automatically", desc: "If the customer does not book right away, the system can send a follow-up text the next day. Gentle, non-pushy reminders that keep your business top of mind until the customer is ready." },
        ]}
        industryExamples={[
          { trade: "Roofing Company", scenario: "Your crew is on a tear-off and the office is slammed. Eight calls come in during a two-hour window and three go to voicemail. Within 60 seconds, each missed caller gets a text: 'Hey, sorry we missed your call. Book your free roof inspection here.' Two of those three book inspections. One turns into a $12,000 reroof. Without the text-back, all three callers would have called another roofer." },
          { trade: "HVAC Contractor", scenario: "It is the first hot week of summer and your phones are ringing nonstop. Your two-person office cannot keep up. The text-back system catches every overflow call. A homeowner whose AC died at 3 PM gets a text within a minute, books a same-day diagnostic, and you have a new customer before your competitor even gets the chance to answer." },
          { trade: "Electrician", scenario: "A property manager calls at 6:45 PM about a panel issue in one of their rental units. Your office closed at 5. Instead of voicemail, they get a text with your booking link. They schedule a next-day appointment and reply with the property address and gate code. Your team shows up the next morning with all the context they need. That property manager has 15 other units they will call you for." },
        ]}
        faqs={faqs}
        relatedServices={[
          { title: "AI Voice Assistant", href: "/ai-voice-assistant", desc: "Go beyond text-back and actually answer every call with an AI that books appointments." },
          { title: "AI Chatbot", href: "/ai-chatbot", desc: "Catch website visitors the same way text-back catches missed callers." },
          { title: "Database Reactivation", href: "/database-reactivation", desc: "Re-engage past customers who have gone quiet with automated outreach campaigns." },
        ]}
      />
    </>
  );
}
