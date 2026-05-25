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

const faqs = [
  {
    question: "Is it okay to ask customers for reviews?",
    answer: "Yes. Google explicitly allows businesses to ask customers for reviews. What Google prohibits is offering incentives for reviews, gating reviews based on sentiment, or posting fake reviews. Our system simply asks every customer for honest feedback after their service, which is exactly what Google recommends.",
  },
  {
    question: "What happens if a customer gives negative feedback?",
    answer: "Negative responses are routed privately to you instead of to Google. You get a notification with the customer's feedback so you can reach out personally to resolve the issue. This gives you a chance to make things right before they post publicly. Many negative situations turn into positive outcomes and even updated reviews when handled quickly.",
  },
  {
    question: "How many reviews per month should I expect?",
    answer: "Most service businesses using our system add 15 to 30 new Google reviews per month. The exact number depends on your volume of completed jobs and how many customers have a Google account. Even 10 new reviews per month puts you far ahead of competitors who rely on reviews happening organically.",
  },
  {
    question: "How does the system know when a job is done?",
    answer: "We integrate with your CRM or scheduling system so review requests are triggered automatically when a job is marked complete. If you use Jobber, ServiceTitan, Housecall Pro, GoHighLevel, or similar platforms, the integration is straightforward. If you mark jobs complete manually, we can also trigger based on appointment time plus a delay.",
  },
  {
    question: "Will this feel spammy to my customers?",
    answer: "No. Each customer receives one text message after their service asking about their experience. It is personalized with their name and your business name. There are no repeated messages or aggressive follow-ups. The tone is friendly and professional, and customers appreciate that you care about their feedback.",
  },
  {
    question: "Can I see all my reviews in one place?",
    answer: "Yes. Your dashboard shows all Google reviews, your average rating, review trends over time, and the status of every review request sent. You can see which customers left reviews, which have not yet, and respond to reviews directly from the dashboard without logging into Google.",
  },
];

const faqJsonLd = faqSchema(faqs);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
          { value: "0.5 star", label: "Gap costs 15-20% of potential customers" },
        ]}
        problemSection={{
          headline: "The problem",
          paragraphs: [
            "You do great work. Your customers tell you that to your face. But when a potential customer searches for your business on Google, they see a competitor with 200 reviews and a 4.8 rating sitting right next to you with 35 reviews and a 4.2 rating. Who do they call? The numbers make this decision for them. Eighty-eight percent of consumers trust online reviews as much as a personal recommendation from a friend.",
            "The problem is not that your customers are unhappy. The problem is that happy customers almost never leave a review on their own. Research shows that customers with a negative experience are two to three times more likely to leave a review than satisfied customers. Without a system that asks at the right time, your review profile skews negative and your rating suffers. Meanwhile, the competitor across town who systematically asks every customer for a review keeps climbing.",
            "A half-star difference on Google is not a vanity metric. It directly affects how many calls you get. Businesses with a 4.5 rating receive 15 to 20 percent fewer calls than businesses with a 5.0 rating. Over the course of a year, for a business that averages $500 per job and gets 20 calls per week, that half-star gap could cost $78,000 or more in lost revenue. The fix is not doing better work. You already do great work. The fix is asking every customer, systematically, at the right time.",
          ],
        }}
        howItWorks={[
          { step: "1", title: "A job is completed", desc: "Your technician marks a job as done in your CRM or scheduling system. The system detects the completed service and waits a configurable period, usually a few hours, to let the customer settle in." },
          { step: "2", title: "A review request is sent", desc: "The customer receives a personalized text: 'Hi [Name], thanks for choosing [Your Business]. How was your experience?' They can reply with a thumbs up, a star rating, or a short response." },
          { step: "3", title: "Happy customers go to Google", desc: "If the customer responds positively, they receive a direct link to your Google review page with a message like: 'We are glad to hear that. If you have a minute, a Google review helps other homeowners find us.' One tap and they are on your review page." },
          { step: "4", title: "Concerns come to you privately", desc: "If the response is negative or neutral, the feedback is sent directly to you or your manager. No Google review link is sent. You get a chance to reach out, resolve the issue, and potentially turn a negative into a positive before it goes public." },
          { step: "5", title: "Your reputation grows on autopilot", desc: "Over weeks and months, your review count and rating climb steadily. You can track everything in your dashboard: reviews received, rating trends, response rates, and how you compare to local competitors." },
        ]}
        industryExamples={[
          { trade: "Roofing Company", scenario: "You complete 40 roof repairs and replacements per month. Without a system, you might get 1 or 2 Google reviews organically. With automated review requests, 15 to 20 of those customers leave a review. Within 6 months, you go from 45 reviews to over 150. Your Google Maps listing jumps above competitors who have been in business twice as long, and your phone starts ringing more." },
          { trade: "HVAC Contractor", scenario: "An HVAC company runs 60 service calls per month. After turning on automated review requests, they average 22 new Google reviews per month. A customer who had a bad experience with a delayed appointment replies negatively to the text. The owner calls within the hour, offers to reschedule at no charge, and the customer updates their response. No public negative review. Problem solved privately." },
          { trade: "Plumbing Company", scenario: "A plumber with a 3.9 Google rating is losing calls to a competitor with a 4.7. After 4 months of automated review requests, their rating climbs to 4.6 with 80 new reviews. They notice a measurable increase in calls from Google Maps. The owner says he wishes he had started asking for reviews years ago instead of hoping customers would do it on their own." },
        ]}
        faqs={faqs}
        relatedServices={[
          { title: "Website Design", href: "/website-design", desc: "A professional website that turns your strong reputation into booked appointments." },
          { title: "AI Chatbot", href: "/ai-chatbot", desc: "Convert the increased traffic from your better reputation into booked jobs with an AI chatbot." },
          { title: "Database Reactivation", href: "/database-reactivation", desc: "Bring back past customers and give them a reason to leave a fresh review." },
        ]}
      />
    </>
  );
}
