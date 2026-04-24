# AI Peak Biz Website — Project Status

## Stack
- Next.js 15 + TypeScript + Tailwind CSS
- Deployed on Vercel (auto-deploys from `main`)
- GoHighLevel webhook integration for lead capture
- Resend for assessment emails

## What's Been Built
- Homepage with hero, mind map, pain points, system section, how it works, pricing preview, reviews, consulting teaser, about teaser, CTA
- Service pages: AI Chatbot, AI Voice Assistant, Missed Call Text-Back, Reputation Management, Website Design, Database Reactivation, AI Consulting & Teaching
- Industry pages (dynamic): Healthcare, Home Services, Construction, Legal, Real Estate, etc.
- Free Assessment tool with GHL webhook + Resend email
- Pricing page (3 tiers)
- About, Blog, Privacy Policy, Terms, Disclaimer pages
- Chat widget

## Last Change
- Added full demo request form to hero section (right column) that POSTs to GHL webhook, triggers Retell AI outbound call (2026-04-24)
- Hero converted from centered single-column to two-column layout (headline left, form right) (2026-04-24)
- Form fields: first name, last name, email, phone (E.164 formatted), business name, consent checkbox, honeypot
- GHL webhook: https://services.leadconnectorhq.com/hooks/8G7oorGsCPDIlU76HPkb/webhook-trigger/b6c36035-51b7-4f92-b3ba-b9e01fcbe4c9
- Previous changes: service pages, voice demo section, AI teaching, in-person training (2026-04-23)

## What's Next
- GHL workflow setup: create webhook trigger for voice-bot-demo tag, configure AI voice agent, set up outbound call action
- Voice bot prompt engineering in GHL
