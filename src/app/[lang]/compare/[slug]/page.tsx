import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparisonContent } from "@/components/comparison-content";
import {
  getCompetitor,
  getAllCompetitorSlugs,
} from "@/data/competitors";
import { buildLangAlternates, faqSchema, breadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCompetitorSlugs();
  const params: { lang: string; slug: string }[] = [];
  for (const slug of slugs) {
    params.push({ lang: "en", slug });
    params.push({ lang: "es", slug });
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const data = getCompetitor(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: buildLangAlternates(lang, `/compare/${slug}`),
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url:
        lang === "es"
          ? `https://www.aipeakbiz.com/es/compare/${slug}`
          : `https://www.aipeakbiz.com/compare/${slug}`,
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const data = getCompetitor(slug);
  if (!data) notFound();

  const faqItems = data.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare", url: `/compare/${slug}` },
    { name: `vs ${data.name}`, url: `/compare/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ComparisonContent data={data} />
    </>
  );
}
