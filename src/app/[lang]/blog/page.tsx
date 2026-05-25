import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { buildLangAlternates, breadcrumbSchema } from "@/lib/seo";
import { blogPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const title = isEs ? "Blog" : "Blog";
  const description = isEs
    ? "Ideas sobre recuperacion de ingresos, automatizacion con IA y como hacer crecer tu negocio de servicios."
    : "Insights on revenue recovery, AI automation, and growing your service business. Written for contractors, roofers, HVAC, and local businesses.";
  const url = isEs
    ? "https://www.aipeakbiz.com/es/blog"
    : "https://www.aipeakbiz.com/blog";

  return {
    title,
    description,
    alternates: buildLangAlternates(lang, "/blog"),
    robots: blogPosts.length === 0 ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${title} | AI Peak Biz`,
      description,
      url,
    },
  };
}

const blogBreadcrumb = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
]);

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;
  const prefix = lang === "es" ? "/es" : "";

  // Sort posts by date, newest first
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumb) }}
      />
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-display mb-6">
              Blog
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              {lang === "es"
                ? "Ideas practicas sobre recuperacion de ingresos y automatizacion con IA para negocios de servicios."
                : "Practical insights on revenue recovery and AI automation for service businesses."}
            </p>
          </div>

          {sorted.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-text-secondary mb-8">
                We are working on insights about AI automation and growing your
                service business. Check back soon.
              </p>
              <Link href={`${prefix}/`} className="btn-secondary text-sm">
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8">
              {sorted.map((post) => (
                <Link
                  key={post.slug}
                  href={`${prefix}/blog/${post.slug}`}
                  className="block bg-surface rounded-2xl border border-border overflow-hidden hover:border-brand-100 hover:shadow-md transition-all duration-300 group"
                >
                  {post.heroImage && (
                    <img
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      className="w-full h-48 md:h-56 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-8">
                  <span className="inline-block text-xs font-bold tracking-widest text-brand uppercase mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-brand transition-colors">
                    {lang === "es" && post.titleEs ? post.titleEs : post.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {lang === "es" && post.excerptEs
                      ? post.excerptEs
                      : post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span className="ml-auto text-brand font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
