"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, ArrowLeft, ChevronDown } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";

interface Props {
  post: BlogPost;
  lang: string;
}

export function BlogPostContent({ post, lang }: Props) {
  const prefix = lang === "es" ? "/es" : "";
  const content = lang === "es" && post.contentEs ? post.contentEs : post.content;

  return (
    <article className="section-padding pt-32 md:pt-40">
      <div className="container-custom max-w-3xl">
        {/* Back link */}
        <Link
          href={`${prefix}/blog`}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest text-brand uppercase mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-display mb-6 leading-tight">
            {lang === "es" && post.titleEs ? post.titleEs : post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span className="font-medium text-text-secondary">{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:text-text-primary prose-headings:font-bold prose-headings:tracking-display
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-text-secondary prose-p:leading-relaxed
            prose-li:text-text-secondary
            prose-strong:text-text-primary
            prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-brand prose-blockquote:text-text-secondary
            prose-table:text-sm
            prose-th:bg-surface prose-th:text-text-primary prose-th:font-semibold prose-th:p-3
            prose-td:p-3 prose-td:border-border"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* FAQ Section */}
        {post.faqs.length > 0 && (
          <section className="mt-16 border-t border-border pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-display mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 bg-surface rounded-2xl border border-border p-8 md:p-10 text-center">
          <h3 className="text-xl font-bold text-text-primary mb-3">
            Want to see what your business is losing?
          </h3>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Take our free revenue assessment and find out how much missed calls, slow follow-up, and dormant leads are costing you every month.
          </p>
          <Link
            href={`${prefix}/free-assessment`}
            className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors"
          >
            Take the Free Assessment
          </Link>
        </section>
      </div>
    </article>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-text-primary pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-text-secondary leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
