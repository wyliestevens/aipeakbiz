import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI Peak Biz blog. Insights on AI automation, front desk systems, and growing your service business.",
  alternates: { canonical: "https://www.aipeakbiz.com/blog" },
};

// TODO: Add blog posts as content is created. For now, show a coming-soon state.

export default function BlogPage() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-display mb-6">
          Blog
        </h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
          We are working on insights about AI automation, front desk systems, and growing your service business. Check back soon.
        </p>
        <Link href="/" className="btn-secondary text-sm">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
