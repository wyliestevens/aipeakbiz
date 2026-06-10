import { Metadata } from "next";
import { MissedCallCalculator } from "@/components/missed-call-calculator";
import { buildLangAlternates, faqSchema, breadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs
    ? "Calculadora de Ingresos por Llamadas Perdidas"
    : "Missed Call Revenue Calculator — How Much Are You Losing?";
  const description = isEs
    ? "Calcula cuántos ingresos pierde tu negocio de servicios cada mes por llamadas no contestadas. Datos reales por industria."
    : "Free calculator: find out exactly how much revenue your service business loses from missed phone calls every month. Real data by industry — roofing, HVAC, plumbing, electrical.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/tools/missed-call-calculator"
    : "https://www.aipeakbiz.com/tools/missed-call-calculator";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/tools/missed-call-calculator"),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
    },
  };
}

const calcFaqItems = [
  {
    question: "How accurate is this missed call calculator?",
    answer:
      "The calculator uses real industry data from BIA/Kelsey, Lead Response Management Study, HomeAdvisor, and ServiceTitan benchmarks. Results are estimates based on your inputs — actual revenue impact depends on your market, service area, and business operations. The calculator is designed to give you a realistic ballpark of what missed calls cost your business.",
  },
  {
    question: "Where does the 62% missed call statistic come from?",
    answer:
      "The 62% figure comes from BIA/Kelsey research on small business phone call patterns. Their study found that the majority of calls to small service businesses go unanswered, especially during peak hours, after business hours, and when crews are in the field.",
  },
  {
    question: "What is speed to lead and why does it matter?",
    answer:
      "Speed to lead measures how quickly you respond to an inbound inquiry. Research from InsideSales.com and Harvard Business Review shows that leads contacted within 5 minutes are 21x more likely to convert. After 30 minutes, your chances drop dramatically. For contractors, this means every missed call is a lead going to your competitor.",
  },
  {
    question: "How does AI Peak Biz recover missed call revenue?",
    answer:
      "AI Peak Biz uses an AI voice assistant that answers 100% of your calls 24/7 — no voicemail, no hold times. It captures caller information, answers common questions, and books appointments automatically. Combined with missed call text-back (instantly texts callers you can't answer), you recover leads that would otherwise call your competitor.",
  },
];

const calcBreadcrumb = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tools", url: "/tools/missed-call-calculator" },
  { name: "Missed Call Calculator", url: "/tools/missed-call-calculator" },
]);

export default function MissedCallCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(calcFaqItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calcBreadcrumb),
        }}
      />
      <MissedCallCalculator />
    </>
  );
}
