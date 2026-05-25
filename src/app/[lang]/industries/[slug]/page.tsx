import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industryContent } from "@/data/industry-content";
import { industries } from "@/data/industries";
import { CategoryPage } from "@/components/category-page";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = industries.map((ind) => ({ slug: ind.slug }));
  // Chiropractic has its own page but isn't in the industries array
  if (!slugs.some((s) => s.slug === "chiropractic")) {
    slugs.push({ slug: "chiropractic" });
  }
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;

  // Handle chiropractic separately
  if (slug === "chiropractic") {
    return {
      title: "AI Front Desk System for Chiropractors",
      description:
        "Stop losing patients to missed calls, no-shows, and weak reviews. AI Peak Biz builds and manages a complete AI front desk system for chiropractic clinics.",
      alternates: buildLangAlternates(lang, `/industries/chiropractic`),
      openGraph: {
        title: "AI Front Desk System for Chiropractors | AI Peak Biz",
        description:
          "Complete AI front desk system for chiropractic clinics. Every call answered. More patients booked.",
      },
    };
  }

  const content = industryContent[slug];
  if (!content) return {};

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: buildLangAlternates(lang, `/industries/${slug}`),
    openGraph: {
      title: `${content.title} | AI Peak Biz`,
      description: content.metaDescription,
    },
  };
}

const industryBreadcrumb = (slug: string, title: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aipeakbiz.com" },
    { "@type": "ListItem", position: 2, name: title, item: `https://www.aipeakbiz.com/industries/${slug}` },
  ],
});

const serviceSchema = (slug: string, title: string, description: string) => ({
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
  url: `https://www.aipeakbiz.com/industries/${slug}`,
});

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;

  // Chiropractic has its own page component
  if (slug === "chiropractic") {
    const { ChiropracticPage } = await import("@/components/chiropractic-page");
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              serviceSchema(
                "chiropractic",
                "AI Front Desk System for Chiropractors",
                "Complete AI front desk system built and managed for chiropractic clinics."
              )
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(industryBreadcrumb("chiropractic", "Chiropractors")),
          }}
        />
        <ChiropracticPage />
      </>
    );
  }

  const content = industryContent[slug];
  if (!content) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(slug, content.title, content.metaDescription)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industryBreadcrumb(slug, content.title)),
        }}
      />
      <CategoryPage content={content} />
    </>
  );
}
