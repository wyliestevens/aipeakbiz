import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs } from "@/data/blog-posts";
import { buildLangAlternates, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { BlogPostContent } from "@/components/blog-post";
import {
  getBabyLoveGrowthPost,
  getBabyLoveGrowthPosts,
  isBabyLoveGrowthPost,
  type BlogListPost,
} from "@/lib/babylovegrowth-blog";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export const revalidate = 3600;

async function getPost(slug: string): Promise<BlogListPost | null> {
  const localPost = getBlogPost(slug);
  if (localPost) return localPost;

  return getBabyLoveGrowthPost(slug);
}

export async function generateStaticParams() {
  const localParams = getAllBlogSlugs().map((slug) => ({ slug }));
  const babyLoveGrowthParams = (await getBabyLoveGrowthPosts()).map((post) => ({ slug: post.slug }));
  const seen = new Set<string>();

  return [...localParams, ...babyLoveGrowthParams].filter(({ slug }) => {
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = await getPost(slug);
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
      modifiedTime: isBabyLoveGrowthPost(post) ? post.updatedAt : post.date,
      authors: [post.author],
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AI Peak Biz`,
      description,
      images: post.heroImage ? [post.heroImage] : undefined,
    },
  };
}

const articleSchema = (post: BlogListPost, lang: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: lang === "es" && post.titleEs ? post.titleEs : post.title,
  description: post.metaDescription,
  datePublished: post.date,
  dateModified: isBabyLoveGrowthPost(post) ? post.updatedAt : post.date,
  image: post.heroImage || undefined,
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
  const post = await getPost(slug);
  if (!post) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);
  const schema = isBabyLoveGrowthPost(post) && post.jsonLd ? post.jsonLd : articleSchema(post, lang);
  const faqStructuredData = isBabyLoveGrowthPost(post) && post.faqJsonLd ? post.faqJsonLd : faqSchema(post.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {(post.faqs.length > 0 || (isBabyLoveGrowthPost(post) && post.faqJsonLd)) && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}
      <BlogPostContent post={post} lang={lang} />
    </>
  );
}
