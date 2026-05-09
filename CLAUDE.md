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

## What's Next
- Translate remaining service pages and industry pages to Spanish
- Redesign the go.aipeakbiz.com landing pages (aipeakbiz-roofers repo) to match new brand
- Service pages may need light-theme updates (still using old dark theme components)
- GHL workflow setup: webhook trigger for voice-bot-demo, AI voice agent config
