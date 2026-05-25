import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import {
  getAllSubIndustrySlugs,
  getSubIndustryContent,
  getSubIndustryName,
} from "@/data/sub-industry-content";
import { CategoryPage } from "@/components/category-page";
import { buildLangAlternates, breadcrumbSchema, faqSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string; slug: string; subSlug: string }>;
}

export async function generateStaticParams() {
  return getAllSubIndustrySlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug, subSlug } = await params;

  const content = getSubIndustryContent(slug, subSlug);
  const subName = getSubIndustryName(slug, subSlug);
  const parent = industries.find((i) => i.slug === slug);

  if (!subName || !parent) return {};

  const title = content?.title ?? `AI Front Desk for ${subName}`;
  const description =
    content?.metaDescription ??
    `AI Peak Biz builds AI front desk systems for ${subName.toLowerCase()} businesses. Every call answered. More revenue recovered.`;

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, `/industries/${slug}/${subSlug}`),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
    },
  };
}

const serviceSchema = (
  slug: string,
  subSlug: string,
  title: string,
  description: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  provider: {
    "@type": "ProfessionalService",
    name: "AI Peak Biz",
    telephone: "+1-928-628-6080",
    email: "wylie@aipeakbiz.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kingman",
      addressRegion: "AZ",
      postalCode: "86401",
      addressCountry: "US",
    },
  },
  description,
  areaServed: "US",
  url: `https://www.aipeakbiz.com/industries/${slug}/${subSlug}`,
});

export default async function SubIndustryPage({ params }: Props) {
  const { slug, subSlug } = await params;

  const subName = getSubIndustryName(slug, subSlug);
  const parent = industries.find((i) => i.slug === slug);
  if (!subName || !parent) notFound();

  const content = getSubIndustryContent(slug, subSlug);
  if (!content) notFound();

  const title = content.title;
  const description = content.metaDescription;

  const crumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: parent.name, url: `/industries/${slug}` },
    { name: subName, url: `/industries/${slug}/${subSlug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(slug, subSlug, title, description)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      {content.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(content.faq)),
          }}
        />
      )}
      <CategoryPage content={content} parentSlug={slug} />
    </>
  );
}
