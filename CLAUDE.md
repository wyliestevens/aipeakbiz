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
- Added 3 new service pages: Website Design, Missed Call Text-Back, Database Reactivation (2026-04-23)
- Updated navbar services dropdown to list all 8 services including AI Teaching & Training (2026-04-23)
- Added Voice Bot Demo section on homepage (between How It Works and Pricing) with phone input + GHL webhook (2026-04-23)
- Created /api/voice-demo endpoint that sends phone + "voice-bot-demo" tag to GHL (2026-04-23)
- Added AI Teaching & Training to services nav (links to consulting page #teaching) (2026-04-23)
- Rewrote AI Consulting page hero to lead with teaching, added prominent 4-card AI Teaching section (2026-04-23)
- Updated homepage consulting teaser to emphasize AI teaching (2026-04-23)

## What's Next
- GHL workflow setup: create webhook trigger for voice-bot-demo tag, configure AI voice agent, set up outbound call action
- Voice bot prompt engineering in GHL
