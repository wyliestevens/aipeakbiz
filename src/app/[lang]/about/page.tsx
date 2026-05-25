import { Metadata } from "next";
import { AboutContent } from "@/components/about-content";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs ? "Nosotros" : "About";
  const description = isEs
    ? "AI Peak Biz fue fundada por Wylie Stevens despues de 20 anos en el sector salud. Construimos y gestionamos sistemas de recepcion con IA para negocios de servicios desde Kingman, Arizona."
    : "AI Peak Biz was founded by Wylie Stevens after 20 years in healthcare. We build and manage AI front desk systems for service businesses from Kingman, Arizona.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/about"
    : "https://www.aipeakbiz.com/about";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/about"),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
