# AI Peak Biz Website -- Project Status

## Stack
- Next.js 15 + TypeScript + Tailwind CSS
- Deployed on Vercel (auto-deploys from `main`)
- GoHighLevel webhook integration for lead capture
- Resend for assessment emails

## Brand Positioning (Updated 2026-05-08)
- AI Peak Biz is NOT an AI automation agency
- It is a revenue recovery and customer communication company for service businesses
- AI is the mechanism. Revenue recovery is the product.
- Target audience: roofers, HVAC, contractors, service businesses
- Tone: trustworthy, calm, premium, human, practical, integrity-driven

## Design System (Updated 2026-05-08)
- Light theme: warm white (#FAFAF8) background, navy (#1B2A4A) text
- Brand color: warm navy blue (#2B5BA8)
- Warm accent: #C27C3E for trust signals
- No dark mode, no glassmorphism, no gradient animations
- Style: "blue-collar premium" meets "high-end consulting"

## What's Been Built
- **Homepage (redesigned 2026-05-08):** Hero with "Choose Your Experience" CTA grid, Missed Leads cost section, How It Works (4 steps), Founder section with photo, Social Proof, Why AI Peak Biz, Deployment Options (3 tiers), AI Demo form, FAQ, CTA
- **Pricing page (redesigned 2026-05-08):** Pay-in-full vs installment toggle, deployment language (not "setup fee"), 3 tiers: AI Front Desk / Revenue Recovery / AI Revenue Deployment
- **About page:** Updated for light theme with founder photos
- **Navbar:** Simplified -- How It Works, About, Pricing, phone, Book a Strategy Call
- **Footer:** Navy dark footer with simplified link structure
- Service pages: AI Chatbot, AI Voice Assistant, Missed Call Text-Back, Reputation Management, Website Design, Database Reactivation, AI Consulting & Teaching, AI Appointment Setter
- Industry pages (dynamic): Healthcare, Home Services, Construction, Legal, Real Estate, etc.
- Free Assessment tool with GHL webhook + Resend email
- Blog, Privacy Policy, Terms, Disclaimer pages
- Chat widget
- Video modal for promo overview and AI demo call recordings

## Founder Photos (in public/images/founder/)
- wylie-casual.jpeg -- primary headshot (used in homepage founder section)
- wylie-professional.jpeg -- suit photo (used on about page)
- wylie-speaking.jpeg -- speaking at event (used on about page)
- wylie-suit.jpeg -- alternate professional shot

## Videos (in public/videos/)
- promo-overview.mp4 -- 2-minute company overview (from Canva)
- ai-demo.mp4 -- real AI phone call demo

## GHL Webhook
- https://services.leadconnectorhq.com/hooks/8G7oorGsCPDIlU76HPkb/webhook-trigger/b6c36035-51b7-4f92-b3ba-b9e01fcbe4c9

## Related Projects
- aipeakbiz-roofers (at /Users/wylie/aipeakbiz-roofers/) -- 71 industry-specific Google Ads landing pages at go.aipeakbiz.com
- aipeakbiz-command-center (at /Users/wylie/aipeakbiz-command-center/)

## i18n / Spanish Support (Added 2026-05-09)
- Full Spanish translation at /es/ routes (e.g., aipeakbiz.com/es/, aipeakbiz.com/es/pricing)
- English stays at root URLs (no /en/ prefix) via middleware rewrite
- Translation dictionaries: src/i18n/dictionaries/en.ts and es.ts
- Language context: src/i18n/context.tsx (useDict, useLang hooks)
- Middleware: middleware.ts handles routing
- All pages live under src/app/[lang]/ segment
- Language switcher (globe icon) in navbar, desktop and mobile
- Homepage fully translated; service/industry pages serve but use English text (translate incrementally)
- Industry wheel (mind map) restored on homepage (2026-05-09)

## SEO (Major overhaul 2026-05-25)
- FIXED: Root layout alternates block removed — page-level canonicals/hreflang now work
- FIXED: next.config.mjs has explicit rewrites for all English pages (was broken on Vercel)
- FIXED: html lang attribute now dynamic via HtmlLang client component
- FIXED: Homepage title no longer duplicates brand name
- FIXED: Broken SearchAction schema removed from homepage
- Merged Organization + LocalBusiness into single ProfessionalService schema with founder, hours, priceRange
- FAQPage JSON-LD on homepage AND pricing page
- BreadcrumbList + Service JSON-LD on industry pages and all 8 service pages
- Security headers added (X-Frame-Options, Referrer-Policy, Permissions-Policy, X-Content-Type-Options)
- Portfolio links in footer now have rel="nofollow"
- Founder photos resized from 10.6 MB to ~248 KB total, EXIF stripped (GPS data removed)
- Proper 1200x630 branded og-image.png created
- Logo resized from 109 KB to 12 KB
- llms.txt created for AI search engines
- robots.txt updated with explicit AI bot rules (GPTBot, ClaudeBot, PerplexityBot, etc.)
- Sitemap priorities differentiated: homepage 1.0, services 0.9, industries 0.8, legal 0.3
- Chiropractic added to generateStaticParams (was missing from sitemap)
- Image sizes props added to all Next.js Image components
- Internal cross-links added from Revenue Leak section to service pages
- Industry breadcrumb schema fixed (removed broken "Industries" middle item)
- 78% stat attributed to Lead Response Management study
- Empty blog page set to noindex
- SEO helper utility: src/lib/seo.ts (buildLangAlternates, faqSchema, breadcrumbSchema)
- Sitemap: 60 URLs (30 EN + 30 ES), English at root, Spanish at /es/
- Google site verification configured
- claude-seo skill installed at ~/.claude/skills/claude-seo

## SEO Content Plans (Generated 2026-05-25)
- cluster-plan.md — 22 blog posts across 6 topic clusters
- cluster-plan.json — machine-readable plan with link adjacency
- cluster-map.html — interactive visualization (open in browser)
- 6 detailed content briefs ready to write

## Service Pages Expansion (Completed 2026-05-25)
- All 8 service pages expanded from ~300 words to 1,500+ words
- ServicePageContent component redesigned with new sections: Problem (2-3 paragraphs), How It Works (5 steps), Industry Examples (3 trades), FAQ (6 questions), Related Services (3 cross-links)
- Consulting page (separate component) also expanded with Problem, Industry Examples, FAQ, and Related Services sections
- FAQPage JSON-LD schema added to all 8 service pages via faqSchema()
- Internal cross-linking between related services on every page
- All content written for blue-collar service business owners (roofers, HVAC, plumbers, electricians)

## Sub-Industry Page Infrastructure (Added 2026-05-25)
- Routes: /industries/[slug]/[subSlug] (91 sub-industry pages)
- Data layer: src/data/sub-industry-content.ts (SubIndustryContent interface, empty content record, helpers)
- Page: src/app/[lang]/industries/[slug]/[subSlug]/page.tsx (static params, metadata, JSON-LD schemas)
- Internal linking: CategoryPage now shows "Sub-Industries We Serve" grid on parent industry pages
- Rewrite: next.config.mjs maps /industries/:slug/:subSlug to /en/industries/:slug/:subSlug
- Content data is empty — pages will 404 until SubIndustryContent entries are populated
- Helper functions: getSubIndustryContent(), getAllSubIndustrySlugs(), getSubIndustryName(), slugifySubIndustry()

## Competitor Comparison Pages (Added 2026-06-10)
- Route: /compare/[slug] with 3 pages: vs-podium, vs-ruby, vs-smith-ai
- Data: src/data/competitors.ts (Competitor interface, feature tables, pricing, FAQs)
- Component: src/components/comparison-content.tsx
- Page: src/app/[lang]/compare/[slug]/page.tsx (static params, metadata, FAQ + breadcrumb schema)
- Each page has: hero, overview, feature comparison table, pricing comparison, strengths/weaknesses, verdict CTA, FAQ accordion, cross-links to other comparisons
- Internal links from footer Resources section

## Missed Call Revenue Calculator (Added 2026-06-10)
- Route: /tools/missed-call-calculator
- Component: src/components/missed-call-calculator.tsx (interactive, client-side)
- 11 industries with real avg job values and close rates
- Sliders for calls/day, missed %, custom job value, close rate
- Shows: lost revenue/month + year, AI recovery projection, ROI calculation
- Stats section with sourced data (BIA/Kelsey, Lead Response Management, InsideSales)
- Designed as a linkable asset for backlink acquisition

## www Redirect (Added 2026-06-10)
- vercel.json now redirects aipeakbiz.com → www.aipeakbiz.com (301 permanent)
- Consolidates domain authority to single canonical domain

## Directory Submission List (Added 2026-06-10)
- File: directory-submission-list.md (in project root)
- 5 tiers of directories prioritized by impact
- Includes exact URLs, business info needed, and submission checklist
- Tier 1: GBP, Bing Places, Apple Business, BBB, Yelp
- Tier 2: Clutch, G2, Capterra, Product Hunt, AlternativeTo
- Tier 3: Local directories (Kingman Chamber, YP, Manta)
- Tier 5: HARO/Connectively, podcast appearances, guest posts

## What's Next
- Submit directories from directory-submission-list.md (start with Tier 1 — GBP is critical)
- Populate sub-industry content (fill subIndustryContent record in sub-industry-content.ts)
- Translate remaining service pages and industry pages to Spanish
- Write first blog posts from content briefs
- Populate sameAs array once social profiles are created
- GHL workflow setup: webhook trigger for voice-bot-demo, AI voice agent config

## Related: Landing Pages Rebuild (COMPLETED 2026-05-11)
- aipeakbiz-roofers repo fully rebuilt: 142 landing pages (71 EN + 71 ES) + 142 thank-you pages
- New conversion-focused architecture: dollar-quantified H1s, tel: CTA, 4-field lead form, 11-section layout
- See /Users/wylie/aipeakbiz-roofers/CLAUDE.md for full details
