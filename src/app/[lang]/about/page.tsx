import { Metadata } from "next";
import { AboutContent } from "@/components/about-content";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "About",
    description:
      "AI Peak Biz was founded by Wylie Stevens after 20 years in healthcare. We build and manage AI front desk systems for service businesses from Kingman, Arizona.",
    alternates: buildLangAlternates(lang, "/about"),
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
