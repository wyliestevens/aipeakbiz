import { Metadata } from "next";
import { AssessmentTool } from "@/components/assessment-tool";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs
    ? "Evaluacion Gratuita de Perdida de Ingresos"
    : "Free Revenue Loss Assessment";
  const description = isEs
    ? "Descubre cuanto dinero esta dejando tu negocio sobre la mesa. Esta evaluacion de 2 minutos calcula tu perdida mensual de ingresos en 4 areas clave. Gratis. Sin correo requerido."
    : "Find out how much money your business is leaving on the table. This 2-minute assessment calculates your monthly revenue loss across 4 key areas. Free. No email required.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/free-assessment"
    : "https://www.aipeakbiz.com/free-assessment";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/free-assessment"),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
    },
  };
}

export default function FreeAssessmentPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 md:pt-32">
      <div className="container-custom">
        <AssessmentTool />
      </div>
    </section>
  );
}
