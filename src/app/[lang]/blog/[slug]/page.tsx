import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs } from "@/data/blog-posts";
import { buildLangAlternates, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { BlogPostContent } from "@/components/blog-post";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const isEs = lang === "es";
  const title = isEs && post.titleEs ? post.titleEs : post.title;
  const description = isEs && post.metaDescriptionEs
    ? post.metaDescriptionEs
    : post.metaDescription;
  const url = isEs
    ? `https://www.aipeakbiz.com/es/blog/${slug}`
    : `https://www.aipeakbiz.com/blog/${slug}`;

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, `/blog/${slug}`),
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AI Peak Biz`,
      description,
    },
  };
}

const articleSchema = (post: NonNullable<ReturnType<typeof getBlogPost>>, lang: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: lang === "es" && post.titleEs ? post.titleEs : post.title,
  description: post.metaDescription,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    "@type": "Person",
    name: post.author,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "AI Peak Biz",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "AI Peak Biz",
    logo: {
      "@type": "ImageObject",
      url: "https://www.aipeakbiz.com/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.aipeakbiz.com/blog/${post.slug}`,
  },
  keywords: post.keywords.join(", "),
});

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post, lang)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      )}
      <BlogPostContent post={post} lang={lang} />
    </>
  );
}
