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
    ? "Reactivacion de Base de Datos para Negocios de Servicios"
    : "Database Reactivation for Service Businesses";
  const description = isEs
    ? "AI Peak Biz reactiva tu base de datos de clientes inactivos con contacto automatizado. Recupera clientes que ya conocen y confian en tu negocio."
    : "AI Peak Biz reactivates your dormant customer database with automated outreach. Win back past customers who already know and trust your business.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/database-reactivation"
    : "https://www.aipeakbiz.com/database-reactivation";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/database-reactivation"),
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
  name: "Database Reactivation for Service Businesses",
  description:
    "AI Peak Biz reactivates your dormant customer database with automated outreach. Win back past customers who already know and trust your business.",
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
  url: "https://www.aipeakbiz.com/database-reactivation",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Database Reactivation", url: "/database-reactivation" },
]);

const faqs = [
  {
    question: "How many past customers do I need for this to work?",
    answer: "We recommend at least 200 contacts in your database to run an effective campaign. Most service businesses that have been operating for 2 or more years have 500 to 2,000 past customers sitting in their CRM or old spreadsheets. Even a list of 300 contacts can generate significant revenue when 15 to 25 percent reactivate.",
  },
  {
    question: "What if my customer list is old or messy?",
    answer: "That is normal. Most service businesses have customer data scattered across old CRMs, spreadsheets, invoicing systems, and even paper files. We help you clean and consolidate the list before the campaign starts. We remove duplicates, verify phone numbers, and segment by service type and recency.",
  },
  {
    question: "Will customers be annoyed that I am contacting them?",
    answer: "No, because the messaging is personalized and relevant. These are people who already used your services and had a good experience. The outreach feels like a friendly check-in, not a cold sales message. We often see customers respond with things like 'I have been meaning to call you' or 'Perfect timing, my AC has been acting up.'",
  },
  {
    question: "What does the outreach look like?",
    answer: "A typical text might say: 'Hey [Name], this is [Your Business]. We noticed it has been a while since your last [service type]. Just checking in to see if there is anything we can help with. Reply YES to book a time or let us know if you have any questions.' Simple, personal, and direct. No hard sell.",
  },
  {
    question: "How is this different from just sending a mass email?",
    answer: "Mass emails have a 15 to 20 percent open rate on a good day. Text messages have a 98 percent open rate. Our campaigns use personalized text messages as the primary channel, with email as a secondary touchpoint. The messages are also staggered and personalized so they feel like individual outreach, not a mass blast.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Reactivating a past customer costs a fraction of acquiring a new one. There is no ad spend involved. A typical campaign reactivates 15 to 25 percent of contacted customers. If you have 500 dormant contacts and your average job is $600, that could mean 75 to 125 rebooked customers and $45,000 to $75,000 in recovered revenue from a single campaign.",
  },
];

const faqJsonLd = faqSchema(faqs);

export default function DatabaseReactivationPage() {
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
        title="Database Reactivation"
        headline="Your past customers are your cheapest source of new revenue."
        description="Most service businesses are sitting on a goldmine of past customers who just need a nudge. We build automated reactivation campaigns that reach out to dormant contacts with the right message at the right time, bringing them back without you spending a dollar on ads."
        features={[
          { title: "Automated Outreach", desc: "Customers who have not visited in 30, 60, or 90 days receive personalized check-in messages. Many just need a reminder that you exist." },
          { title: "Multi-Channel Campaigns", desc: "Reach past customers through text, email, or both. The system follows up multiple times so one missed message does not mean a lost customer." },
          { title: "Personalized Messaging", desc: "Messages reference the customer by name and can mention their last service. It feels personal, not like a mass blast." },
          { title: "Special Offers and Incentives", desc: "We help you craft the right offer to bring people back, whether that is a discount, a free consultation, or just a friendly check-in." },
          { title: "Booking Built In", desc: "Every message includes a direct link to schedule. Customers go from 'I should call them' to 'I just booked' in one tap." },
          { title: "ROI You Can Measure", desc: "Track exactly how many past customers rebooked, how much revenue was recovered, and your cost per reactivation. No guessing." },
        ]}
        stats={[
          { value: "5x", label: "Cheaper than acquiring new customers" },
          { value: "15-25%", label: "Typical reactivation rate" },
          { value: "$0", label: "Ad spend required" },
        ]}
        problemSection={{
          headline: "The problem",
          paragraphs: [
            "You have hundreds, maybe thousands, of past customers sitting in your CRM or old spreadsheets. These people already know you. They already trust you. They already paid you once. But you have not contacted them in months or years, and they have simply forgotten you exist. They are not unhappy. They just moved on with their lives. When they need your service again, they will Google it and might end up calling someone else because your name is no longer top of mind.",
            "Meanwhile, you are spending $2,000, $5,000, maybe $10,000 per month on ads to find brand new customers who have never heard of you. You are paying to build trust from scratch with strangers while ignoring the goldmine of people who already trust you sitting in your database. It costs 5 to 7 times more to acquire a new customer than to retain or reactivate an existing one. That is not a marketing theory. That is math.",
            "The solution is embarrassingly simple. Reach out to your past customers with a friendly, personalized message. Not a generic newsletter. Not a spammy coupon blast. A simple check-in that says 'Hey, it has been a while. We are here if you need us.' When you do this systematically across your entire dormant database, 15 to 25 percent of those customers book again. That is thousands, sometimes tens of thousands of dollars in revenue recovered with zero ad spend.",
          ],
        }}
        howItWorks={[
          { step: "1", title: "We collect and clean your customer data", desc: "We pull your past customer list from your CRM, invoicing system, spreadsheets, or wherever it lives. We clean duplicates, verify phone numbers, and segment the list by service type, last visit date, and customer value." },
          { step: "2", title: "We build the campaign", desc: "We craft personalized outreach messages tailored to your business and your customers. The messaging is friendly, direct, and includes a clear next step. We set up the sequence with 2 to 3 touchpoints over a 10 to 14 day period." },
          { step: "3", title: "The campaign goes out in waves", desc: "Messages are sent in staggered batches so responses can be managed. This prevents your team from being overwhelmed and ensures every reply gets a timely response. The system handles booking links, follow-ups, and conversation tracking." },
          { step: "4", title: "Customers reply and rebook", desc: "Past customers respond, ask questions, and book appointments. Some book through the link immediately. Others reply with questions that the system or your team answers. Either way, they are back." },
          { step: "5", title: "We measure and report results", desc: "You get a clear report showing exactly how many customers were contacted, how many responded, how many rebooked, and the total revenue recovered. Typical ROI is 5 to 15 times the cost of the campaign." },
        ]}
        industryExamples={[
          { trade: "Roofing Company", scenario: "A roofing company has 800 past customers from the last 5 years. They run a reactivation campaign offering free roof inspections for past clients. Within 3 weeks, 142 customers respond. 47 book inspections. 12 of those turn into full reroofs averaging $9,500 each. That is $114,000 in revenue from a single campaign with zero ad spend. Many of these homeowners were due for a new roof but had not thought about it until the text arrived." },
          { trade: "HVAC Contractor", scenario: "An HVAC company contacts 600 past customers who have not booked a maintenance visit in over a year. The message is simple: 'Summer is coming. Want us to check your AC before it gets hot?' 23 percent respond. 89 customers rebook maintenance. 14 of those need repairs that average $800. The campaign generated over $64,000 in revenue in 4 weeks and filled the schedule during what was previously a slow period." },
          { trade: "Plumbing Company", scenario: "A plumbing company reaches out to 400 past customers with a check-in message. No discount, no special offer, just a friendly 'It has been a while, is there anything we can help with?' 18 percent respond. 31 customers book services ranging from water heater flushes to repiping projects. Total recovered revenue: $41,000. The owner said the best part was that these were all warm leads who already trusted them." },
        ]}
        faqs={faqs}
        relatedServices={[
          { title: "Reputation Management", href: "/reputation-management", desc: "Turn those reactivated customers into fresh Google reviews after you serve them again." },
          { title: "Missed Call Text-Back", href: "/missed-call-text-back", desc: "Make sure none of the inbound calls from reactivated customers go unanswered." },
          { title: "AI Appointment Setter", href: "/ai-appointment-setter", desc: "Have AI call reactivated leads who respond but do not book, to close them over the phone." },
        ]}
      />
    </>
  );
}
