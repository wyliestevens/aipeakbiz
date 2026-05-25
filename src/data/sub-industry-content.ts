import { industries } from "./industries";
import { IndustryContent } from "./industry-content";

export interface SubIndustryContent extends IndustryContent {
  parentSlug: string;
  name: string;
}

/**
 * Sub-industry content keyed by "parentSlug/subSlug".
 * Content will be added incrementally per sub-industry.
 */
export const subIndustryContent: Record<string, SubIndustryContent> = {};

/** Convert a sub-industry display name to a URL slug. */
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Get content for a specific sub-industry.
 * Returns undefined if content has not been written yet.
 */
export function getSubIndustryContent(
  parentSlug: string,
  subSlug: string
): SubIndustryContent | undefined {
  return subIndustryContent[`${parentSlug}/${subSlug}`];
}

/**
 * Return all { slug, subSlug } pairs derived from the industries array.
 * Used by generateStaticParams to build every sub-industry route.
 */
export function getAllSubIndustrySlugs(): { slug: string; subSlug: string }[] {
  const pairs: { slug: string; subSlug: string }[] = [];
  for (const industry of industries) {
    for (const sub of industry.subIndustries) {
      pairs.push({ slug: industry.slug, subSlug: slugify(sub) });
    }
  }
  return pairs;
}

/**
 * Look up the display name for a sub-industry given its parent slug and sub slug.
 */
export function getSubIndustryName(
  parentSlug: string,
  subSlug: string
): string | undefined {
  const industry = industries.find((i) => i.slug === parentSlug);
  if (!industry) return undefined;
  return industry.subIndustries.find((s) => slugify(s) === subSlug);
}

export { slugify as slugifySubIndustry };
