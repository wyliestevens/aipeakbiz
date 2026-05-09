"use client";

import Image from "next/image";
import Link from "next/link";
import { useDict, useLang } from "@/i18n/context";

export function FounderSection() {
  const dict = useDict();
  const lang = useLang();
  const prefix = lang === "es" ? "/es" : "";

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/founder/wylie-casual.jpeg"
                  alt="Wylie Stevens, Founder of AI Peak Biz"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="mt-4 text-base font-semibold text-text-primary">
                {dict.founder.name}
              </p>
              <p className="text-sm text-text-muted">
                {dict.founder.role}
              </p>
              <p className="text-sm text-text-muted">
                {dict.founder.location}
              </p>
            </div>

            {/* Story */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-display">
                {dict.founder.headline}
              </h2>

              {dict.founder.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <Link
                href={`${prefix}/about`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mt-2"
              >
                {dict.founder.readMore}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
