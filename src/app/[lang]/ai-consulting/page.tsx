import { Metadata } from "next";
import { ConsultingPageContent } from "@/components/consulting-page";
import { buildLangAlternates, breadcrumbSchema, faqSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs
    ? "Consultoria y Ensenanza de IA para Negocios"
    : "AI Consulting & Teaching for Businesses";
  const description = isEs
    ? "AI Peak Biz ofrece consultoria y ensenanza practica de IA. Investigamos tus operaciones, recomendamos las herramientas de IA adecuadas y capacitamos a tu equipo."
    : "AI Peak Biz provides hands-on AI consulting and teaching. We investigate your operations, recommend the right AI tools, and train your team to use them confidently.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/ai-consulting"
    : "https://www.aipeakbiz.com/ai-consulting";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/ai-consulting"),
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
  name: "AI Consulting & Teaching for Businesses",
  description:
    "AI Peak Biz provides hands-on AI consulting and teaching. We investigate your operations, recommend the right AI tools, and train your team to use them confidently.",
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
  url: "https://www.aipeakbiz.com/ai-consulting",
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "AI Consulting & Teaching", url: "/ai-consulting" },
]);

const faqs = [
  {
    question: "Do I need to know anything about AI before we start?",
    answer: "No. Most of our consulting clients know AI matters but have no idea where to start. That is exactly the point. We meet you where you are, explain everything in plain English, and build a plan that makes sense for your specific business. No technical background required.",
  },
  {
    question: "How is this different from hiring an AI agency?",
    answer: "An AI agency builds things for you and charges monthly to maintain them. We teach your team to understand and use AI tools themselves. You walk away with knowledge and a roadmap, not a dependency. If you want done-for-you implementation, we offer that separately through our AI deployment services.",
  },
  {
    question: "What kind of AI tools do you recommend?",
    answer: "It depends entirely on your business. We are vendor-neutral and recommend what is best for you, not what pays us a commission. Common recommendations include AI chatbots, voice assistants, workflow automation, content creation tools, and CRM AI features. Every recommendation is specific to the problems we find in your operations.",
  },
  {
    question: "How long does a consulting engagement take?",
    answer: "A typical engagement is 2 to 6 weeks depending on the complexity of your business. We start with a discovery call, deliver an AI readiness assessment, provide hands-on training, and leave you with a prioritized implementation roadmap. You can engage us for ongoing support or take the roadmap and run with it yourself.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. There are no long-term contracts or retainers required. You engage us for as long as you need help. When you no longer need us, you simply tell us. You keep everything we built together, including all documentation, training materials, and recommendations.",
  },
  {
    question: "Can you train my entire team or just the owner?",
    answer: "We train whoever needs to learn. For some businesses that means the owner and one office manager. For others it means a team of 10. Training sessions are practical and hands-on, not lecture-style. We use real examples from your business so the lessons stick.",
  },
];

const faqJsonLd = faqSchema(faqs);

export default function AIConsultingPage() {
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
      <ConsultingPageContent />
    </>
  );
}
