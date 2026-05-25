import type { Metadata } from "next";

const BASE_URL = "https://www.aipeakbiz.com";

/**
 * Build language-aware alternates (canonical + hreflang) for a given path.
 * English canonical has no prefix; Spanish uses /es/.
 */
export function buildAlternates(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const enUrl = `${BASE_URL}${clean}`;
  const esUrl = `${BASE_URL}/es${clean}`;

  return {
    canonical: enUrl,
    languages: {
      en: enUrl,
      es: esUrl,
      "x-default": enUrl,
    },
  };
}

/**
 * Build language-aware alternates using the current lang param.
 * Sets the canonical to the current language version.
 */
export function buildLangAlternates(lang: string, path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const enUrl = `${BASE_URL}${clean}`;
  const esUrl = `${BASE_URL}/es${clean}`;

  return {
    canonical: lang === "es" ? esUrl : enUrl,
    languages: {
      en: enUrl,
      es: esUrl,
      "x-default": enUrl,
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage JSON-LD schema.
 */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
