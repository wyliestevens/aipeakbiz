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
    ? "Diseno Web para Negocios de Servicios"
    : "Website Design for Service Businesses";
  const description = isEs
    ? "AI Peak Biz disena y construye sitios web profesionales para negocios de servicios. Rapidos, optimizados para movil y disenados para convertir visitantes en citas."
    : "AI Peak Biz designs and builds professional websites for service businesses. Fast, mobile-optimized, and built to convert visitors into booked appointments.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/website-design"
    : "https://www.aipeakbiz.com/website-design";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/website-design"),
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
  name: "Website Design for Service Businesses",
  description:
    "AI Peak Biz designs and builds professional websites for service businesses. Fast, mobile-optimized, and built to convert visitors into booked appointments.",
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
  url: "https://www.aipeakbiz.com/website-design",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Website Design", url: "/website-design" },
]);

const faqs = [
  {
    question: "How long does it take to build a new website?",
    answer: "Most service business websites are designed, built, and live within 2 to 3 weeks. We handle the copywriting, design, development, and launch. You provide your logo, photos if you have them, and a 30-minute conversation about your business. We do the rest.",
  },
  {
    question: "What if I already have a website?",
    answer: "If your current site is not converting visitors into appointments, we can rebuild it. Many of our clients had websites built by a generic freelancer or a friend years ago that look outdated and lack booking functionality. We redesign from scratch with conversion as the primary goal.",
  },
  {
    question: "Do I own the website?",
    answer: "Yes. You own the domain, the content, and the design. If you ever decide to leave, you take everything with you. There is no lock-in and no proprietary platform that holds your site hostage.",
  },
  {
    question: "Will my website work with my CRM and scheduling system?",
    answer: "Yes. We integrate with Google Calendar, Calendly, Jobber, ServiceTitan, Housecall Pro, GoHighLevel, and most other scheduling and CRM platforms. Online booking is built directly into your site so visitors can schedule without leaving the page.",
  },
  {
    question: "What about SEO? Will my site show up on Google?",
    answer: "Every site we build includes proper SEO foundations: fast load times, mobile optimization, proper heading structure, meta tags, local business schema, and Google Business Profile optimization. We do not guarantee rankings because no one honestly can, but we build the technical foundation that Google needs to rank you well.",
  },
  {
    question: "Can I make changes to the site after it launches?",
    answer: "Yes. Ongoing updates are included in your plan. Need to add a new service, change your hours, update pricing, or add photos from a recent job? Just let us know and we handle it. You never have to touch code or figure out a website builder.",
  },
];

const faqJsonLd = faqSchema(faqs);

export default function WebsiteDesignPage() {
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
        title="Website Design"
        headline="A website built to book appointments, not just look pretty."
        description="Your website is the first impression most customers get. We build fast, mobile-optimized sites designed specifically for service businesses. Clear calls to action, online booking, and SEO best practices built in from day one."
        features={[
          { title: "Built to Convert", desc: "Every page is designed with one goal: turning visitors into booked appointments. Clear calls to action, booking buttons, and click-to-call on every page." },
          { title: "Mobile-First Design", desc: "Over 70% of your visitors are on their phone. Your site loads fast, looks sharp, and works perfectly on every device." },
          { title: "SEO Built In", desc: "Proper page structure, meta tags, fast load times, and local SEO setup so your business shows up when customers search for your services." },
          { title: "Online Booking Integration", desc: "Visitors can book appointments directly from your website. No phone tag. No contact forms that go unanswered. Straight into your calendar." },
          { title: "Professional and On-Brand", desc: "Clean, modern design that reflects your business. We handle the copywriting, imagery, and layout so you get a site you are proud to send people to." },
          { title: "Ongoing Updates Included", desc: "Need to change your hours, add a service, or update pricing? We handle it. Your site stays current without you lifting a finger." },
        ]}
        stats={[
          { value: "70%+", label: "Of visitors browse on mobile" },
          { value: "3 sec", label: "Max load time for conversions" },
          { value: "2x", label: "More bookings vs generic sites" },
        ]}
        problemSection={{
          headline: "The problem",
          paragraphs: [
            "Most service business websites are digital brochures. They have your phone number, a list of services, maybe a stock photo of a wrench, and a contact form that feeds into an inbox nobody checks. These sites exist, but they do not work. They do not convert visitors into paying customers because they were never designed to.",
            "Here is what happens. A homeowner searches 'AC repair near me' and clicks on your website. They land on a page that loads slowly on their phone, has no clear next step, and no way to book an appointment without calling. It is 8 PM. They are not going to call. So they hit the back button and click on your competitor's site, which loads in 2 seconds and has a 'Book Now' button front and center. That competitor gets the job. You never even know it happened.",
            "The average service business website converts 2 to 3 percent of visitors. That means 97 out of every 100 people who find you online leave without taking action. If you are spending money on Google Ads or SEO to drive traffic, you are pouring water into a bucket with a hole in the bottom. A website built specifically for service businesses, with speed, mobile optimization, and clear booking functionality, doubles or triples that conversion rate. Same traffic, more jobs.",
          ],
        }}
        howItWorks={[
          { step: "1", title: "Discovery call", desc: "We spend 30 minutes learning about your business, your services, your ideal customer, and what makes you different from competitors. This is the only meeting required from you." },
          { step: "2", title: "We design and build", desc: "Our team handles the copywriting, design, development, and integrations. We create a site specifically designed for your trade with your branding, your services, and your booking system built in." },
          { step: "3", title: "You review and give feedback", desc: "We send you a preview link. You review the site, share it with your team, and give us any feedback. We make revisions until you are happy with it." },
          { step: "4", title: "Launch day", desc: "We connect your domain, set up analytics and tracking, submit your site to Google, and go live. The whole process typically takes 2 to 3 weeks from that first call." },
          { step: "5", title: "Ongoing support", desc: "After launch, we handle all updates, changes, and maintenance. Need to add a new service area? Change your hours for the holidays? Add photos from a recent project? Just send us a message and it is done." },
        ]}
        industryExamples={[
          { trade: "Roofing Company", scenario: "A roofing company was getting 800 visitors per month from Google Ads but only 12 leads. Their site was slow, cluttered, and had no online booking. We rebuilt it with a clear hero section, a 'Get Free Inspection' button above the fold, click-to-call on mobile, and a 3-question booking form. Same ad spend, same traffic. Leads jumped to 38 per month. Their cost per lead dropped by 68 percent." },
          { trade: "HVAC Contractor", scenario: "An HVAC company had a 5-year-old WordPress site that took 7 seconds to load on mobile and was not showing up in local searches. We rebuilt it with fast hosting, proper local SEO structure, service area pages for each city they cover, and integrated online booking. Within 60 days, they were ranking on page one for three new keywords and getting organic leads they had never seen before." },
          { trade: "Plumbing Company", scenario: "A plumber was using a free Wix site with no booking capability. Every lead had to call during business hours or fill out a generic contact form. We built a professional site with after-hours booking, service descriptions that match what homeowners actually search for, and a click-to-call button that follows you as you scroll on mobile. Their after-hours bookings now account for 30 percent of all new customers." },
        ]}
        faqs={faqs}
        relatedServices={[
          { title: "AI Chatbot", href: "/ai-chatbot", desc: "Add an AI chatbot to your new website that engages visitors and books appointments 24/7." },
          { title: "Reputation Management", href: "/reputation-management", desc: "Drive more traffic to your site by building a strong Google review profile." },
          { title: "Missed Call Text-Back", href: "/missed-call-text-back", desc: "Capture leads who call from your website but reach voicemail." },
        ]}
      />
    </>
  );
}
