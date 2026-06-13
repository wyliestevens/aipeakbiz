import { BlogClient, readingTimeMinutes, type BlogArticle, type BlogArticleSummary } from "babylovegrowth-next-js-blog";
import type { BlogPost } from "@/data/blog-posts";

export const babyLoveGrowthBlog = new BlogClient({
  apiKey: process.env.BABYLOVEGROWTH_BLOG_API_KEY,
  revalidate: process.env.NODE_ENV === "development" ? 10 : 3600,
});

export type BabyLoveGrowthPost = BlogPost & {
  source: "babylovegrowth";
  remoteId: number;
  updatedAt: string;
  jsonLd: Record<string, unknown> | null;
  faqJsonLd: Record<string, unknown> | null;
};

export type BlogListPost = BlogPost | BabyLoveGrowthPost;

const FALLBACK_AUTHOR = "Wylie Stevens";
const FALLBACK_CATEGORY = "AI Growth";

export function isBabyLoveGrowthPost(post: BlogListPost): post is BabyLoveGrowthPost {
  return "source" in post && post.source === "babylovegrowth";
}

function normalizeDate(value: string | null | undefined): string {
  if (!value) return new Date().toISOString();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function summaryToBlogPost(article: BlogArticleSummary): BabyLoveGrowthPost {
  const excerpt = article.excerpt || article.meta_description || "";

  return {
    source: "babylovegrowth",
    remoteId: article.id,
    updatedAt: normalizeDate(article.updated_at),
    slug: article.slug,
    title: article.title,
    excerpt,
    metaDescription: article.meta_description || excerpt,
    date: normalizeDate(article.created_at),
    author: FALLBACK_AUTHOR,
    readTime: "5 min read",
    category: article.seedKeyword || FALLBACK_CATEGORY,
    keywords: article.keywords || [],
    heroImage: article.hero_image_url || "",
    heroImageAlt: article.title,
    content: "",
    faqs: [],
    jsonLd: null,
    faqJsonLd: null,
  };
}

export function articleToBlogPost(article: BlogArticle): BabyLoveGrowthPost {
  return {
    ...summaryToBlogPost(article),
    readTime: `${readingTimeMinutes(article.content_markdown || article.content_html || article.excerpt || "")} min read`,
    content: article.content_html || "",
    jsonLd: article.jsonLd,
    faqJsonLd: article.faqJsonLd,
  };
}

export async function getBabyLoveGrowthPosts(): Promise<BabyLoveGrowthPost[]> {
  if (!process.env.BABYLOVEGROWTH_BLOG_API_KEY) return [];

  try {
    const articles = await babyLoveGrowthBlog.getAllArticles({ publishedOnly: false });
    return articles.map(summaryToBlogPost);
  } catch (error) {
    console.error("BabyLoveGrowth blog list fetch failed", error);
    return [];
  }
}

async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetries<T>(operation: () => Promise<T>, attempts = 3): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await sleep(1500 * attempt);
    }
  }

  throw lastError;
}

export async function getBabyLoveGrowthPost(slug: string): Promise<BabyLoveGrowthPost | null> {
  if (!process.env.BABYLOVEGROWTH_BLOG_API_KEY) return null;

  try {
    const article = await withRetries(() => babyLoveGrowthBlog.getArticleBySlug(slug));
    return article ? articleToBlogPost(article) : null;
  } catch (error) {
    console.error(`BabyLoveGrowth article fetch failed for ${slug}; trying list fallback`, error);
  }

  try {
    const summary = (await getBabyLoveGrowthPosts()).find((post) => post.slug === slug);
    if (!summary) return null;

    try {
      const article = await withRetries(() => babyLoveGrowthBlog.getArticleById(summary.remoteId));
      return article ? articleToBlogPost(article) : summary;
    } catch (error) {
      console.error(`BabyLoveGrowth article ID fallback failed for ${slug}; using summary fallback`, error);
      return {
        ...summary,
        content: `<p>${summary.excerpt || summary.metaDescription}</p>`,
      };
    }
  } catch (error) {
    console.error(`BabyLoveGrowth article fallback failed for ${slug}`, error);
    return null;
  }
}

export async function getBabyLoveGrowthSitemapEntries() {
  if (!process.env.BABYLOVEGROWTH_BLOG_API_KEY) return [];

  try {
    return await babyLoveGrowthBlog.getSitemapEntries();
  } catch (error) {
    console.error("BabyLoveGrowth sitemap fetch failed", error);
    return [];
  }
}
