export interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  pricing: {
    range: string;
    details: string[];
    gotchas: string[];
  };
  strengths: string[];
  weaknesses: string[];
  bestFor: string;
  features: {
    name: string;
    competitor: string | boolean;
    aipeakbiz: string | boolean;
  }[];
  faqs: { question: string; answer: string }[];
  verdict: string;
}

export const competitors: Record<string, Competitor> = {
  "ai-peak-biz-vs-podium": {
    slug: "ai-peak-biz-vs-podium",
    name: "Podium",
    tagline: "Enterprise messaging platform",
    metaTitle: "AI Peak Biz vs Podium: Honest Comparison for Contractors (2026)",
    metaDescription:
      "Comparing AI Peak Biz and Podium for service businesses. See pricing, features, and which platform actually recovers more revenue for contractors, roofers, and HVAC companies.",
    heroHeadline: "AI Peak Biz vs Podium",
    heroSubheadline:
      "Podium is built for enterprise. AI Peak Biz is built for contractors who want every call answered and every lead captured — without the enterprise price tag.",
    overview:
      "Podium is a well-known messaging and review platform used by thousands of businesses. It offers webchat, text messaging, payment processing, and review management. However, Podium was designed for mid-market and enterprise companies with dedicated marketing teams — not for a 5-person roofing crew that needs every phone call answered at 7 PM on a Tuesday. AI Peak Biz was built specifically for service businesses like roofers, HVAC companies, plumbers, and electricians who lose revenue every time a call goes to voicemail.",
    pricing: {
      range: "$399–$599+/month",
      details: [
        "Core plan starts at $399/month",
        "Pro plan runs $599/month",
        "Annual contracts typically required",
        "Setup fees vary — often $500+",
        "Per-location pricing for multi-location businesses",
      ],
      gotchas: [
        "12-month contracts are standard — difficult to cancel early",
        "Many features locked behind higher tiers",
        "Add-on costs for AI features, payments, and advanced automations",
        "Pricing not transparent — requires a sales call",
      ],
    },
    strengths: [
      "Strong brand recognition and large user base",
      "Excellent review management and Google review invites",
      "Robust webchat and text messaging",
      "Payment processing built in",
      "Good mobile app for team communication",
    ],
    weaknesses: [
      "Expensive — most contractors pay $500+/month",
      "12-month contracts with difficult cancellation",
      "No AI voice assistant to answer phone calls 24/7",
      "Designed for mid-market, not small service businesses",
      "Steep learning curve for non-technical users",
      "Per-location pricing gets expensive fast for multi-location businesses",
    ],
    bestFor:
      "Mid-size businesses with 20+ employees, a marketing team, and a budget for enterprise software. Not ideal for small contractor teams.",
    features: [
      { name: "24/7 AI Voice Assistant", competitor: false, aipeakbiz: true },
      { name: "Missed Call Text-Back", competitor: true, aipeakbiz: true },
      { name: "AI Chatbot", competitor: "Basic webchat", aipeakbiz: true },
      { name: "Review Management", competitor: true, aipeakbiz: true },
      {
        name: "Database Reactivation",
        competitor: false,
        aipeakbiz: true,
      },
      {
        name: "AI Appointment Booking",
        competitor: false,
        aipeakbiz: true,
      },
      { name: "Payment Processing", competitor: true, aipeakbiz: false },
      {
        name: "No Long-Term Contract",
        competitor: false,
        aipeakbiz: true,
      },
      {
        name: "Built for Contractors",
        competitor: "General",
        aipeakbiz: true,
      },
      {
        name: "Starting Price",
        competitor: "$399/mo",
        aipeakbiz: "$297/mo",
      },
    ],
    faqs: [
      {
        question: "Is Podium better than AI Peak Biz?",
        answer:
          "It depends on your business size and needs. Podium is a better fit for mid-market businesses with 20+ employees that need enterprise-level messaging and payment tools. AI Peak Biz is purpose-built for small service businesses (roofers, HVAC, plumbers) that need every call answered, leads captured automatically, and revenue recovered from their existing database — without a 12-month contract or a $500+/month bill.",
      },
      {
        question: "Does Podium have an AI voice assistant?",
        answer:
          "Podium offers AI-powered webchat and text responses, but does not provide a dedicated AI voice assistant that answers phone calls 24/7. AI Peak Biz includes a full AI voice assistant that answers calls, books appointments, and captures lead information around the clock.",
      },
      {
        question: "Why is Podium so expensive?",
        answer:
          "Podium is priced for mid-market businesses and includes features like payment processing, team messaging, and enterprise integrations that most small contractors don't need. You're paying for a broad platform when you may only need call answering and lead capture. AI Peak Biz focuses specifically on revenue recovery tools for service businesses at a lower price point.",
      },
      {
        question: "Can I cancel Podium anytime?",
        answer:
          "Podium typically requires a 12-month contract. Early cancellation can be difficult and may involve fees. AI Peak Biz has no long-term contract — you pay monthly and can cancel anytime.",
      },
      {
        question: "Does AI Peak Biz do everything Podium does?",
        answer:
          "No — and that's by design. Podium includes payment processing and team messaging features that AI Peak Biz doesn't offer. AI Peak Biz focuses on the revenue recovery tools that matter most to contractors: AI voice answering, missed call text-back, automated appointment booking, review management, and database reactivation. If you need a payment platform, Podium may be worth the premium. If you need to stop losing leads to voicemail, AI Peak Biz is the better fit.",
      },
      {
        question:
          "What do contractors say about switching from Podium to AI Peak Biz?",
        answer:
          "Contractors who switch typically cite three reasons: lower monthly cost, no long-term contract, and the AI voice assistant that Podium doesn't offer. The ability to have every call answered 24/7 — even at 9 PM or on weekends — is the feature that drives the most revenue recovery for trades businesses.",
      },
    ],
    verdict:
      "Podium is a solid platform if you're a mid-size business with the budget and team to use it fully. But if you're a contractor, roofer, or HVAC company that needs calls answered, leads captured, and revenue recovered — without a 12-month contract or a $500+/month bill — AI Peak Biz is built for you.",
  },

  "ai-peak-biz-vs-ruby": {
    slug: "ai-peak-biz-vs-ruby",
    name: "Ruby",
    tagline: "Virtual receptionist service",
    metaTitle:
      "AI Peak Biz vs Ruby Receptionists: Which Is Better for Contractors? (2026)",
    metaDescription:
      "AI Peak Biz vs Ruby virtual receptionists compared. See pricing, features, and why contractors are switching from per-minute receptionist billing to flat-rate AI voice assistants.",
    heroHeadline: "AI Peak Biz vs Ruby Receptionists",
    heroSubheadline:
      "Ruby charges by the minute. AI Peak Biz charges a flat monthly rate — with an AI that never calls in sick, never puts callers on hold, and never costs you overage fees.",
    overview:
      "Ruby is a well-regarded virtual receptionist service that provides live, US-based receptionists to answer your business calls. The service is professional and friendly — but it comes with per-minute billing that can get expensive fast, especially for contractors who get high call volumes during busy seasons. AI Peak Biz takes a different approach: instead of human receptionists billing by the minute, you get an AI voice assistant that answers every call 24/7 at a flat monthly rate — plus automated text-back, appointment booking, and database reactivation tools that Ruby doesn't offer.",
    pricing: {
      range: "$235–$1,640+/month",
      details: [
        "50 minutes/month: ~$235/month ($4.70/min)",
        "100 minutes/month: ~$375/month ($3.75/min)",
        "200 minutes/month: ~$680/month ($3.40/min)",
        "500 minutes/month: ~$1,640/month ($3.28/min)",
        "Overage charges apply beyond included minutes",
      ],
      gotchas: [
        "Per-minute billing means costs spike during busy seasons",
        "Overage charges of $4–5+ per minute beyond your plan",
        "Only covers phone answering — no automation, no AI, no lead recovery",
        "Business hours only unless you pay for after-hours coverage",
        "No text-back, no chatbot, no review management included",
      ],
    },
    strengths: [
      "Live, US-based human receptionists",
      "Professional, friendly call handling",
      "Good for businesses that need a personal touch",
      "Bilingual (English/Spanish) receptionists available",
      "Established reputation and years in business",
    ],
    weaknesses: [
      "Per-minute billing gets expensive — $680+/month for 200 minutes",
      "Overage charges punish you during busy seasons",
      "No AI voice assistant — just human receptionists during business hours",
      "No missed call text-back automation",
      "No database reactivation or lead recovery tools",
      "No appointment booking automation",
      "No review management",
      "After-hours coverage costs extra",
    ],
    bestFor:
      "Law firms, medical offices, and professional services that need a live human voice and have predictable, low call volumes. Not cost-effective for contractors with high or seasonal call volumes.",
    features: [
      { name: "24/7 Call Answering", competitor: "Extra cost", aipeakbiz: true },
      { name: "AI Voice Assistant", competitor: false, aipeakbiz: true },
      { name: "Missed Call Text-Back", competitor: false, aipeakbiz: true },
      { name: "AI Chatbot", competitor: false, aipeakbiz: true },
      { name: "Review Management", competitor: false, aipeakbiz: true },
      { name: "Database Reactivation", competitor: false, aipeakbiz: true },
      { name: "AI Appointment Booking", competitor: false, aipeakbiz: true },
      { name: "Live Human Receptionists", competitor: true, aipeakbiz: false },
      { name: "Flat Monthly Pricing", competitor: false, aipeakbiz: true },
      { name: "No Overage Charges", competitor: false, aipeakbiz: true },
      { name: "Starting Price", competitor: "$235/mo", aipeakbiz: "$297/mo" },
    ],
    faqs: [
      {
        question: "Is Ruby better than AI Peak Biz?",
        answer:
          "Ruby is better if you specifically need a live human answering your calls and you have low, predictable call volume. But for contractors with seasonal spikes, after-hours calls, and high volume, AI Peak Biz is more cost-effective. You get 24/7 coverage at a flat rate with no overage charges — plus automation tools (text-back, appointment booking, database reactivation) that Ruby doesn't include.",
      },
      {
        question: "How much does Ruby actually cost for a busy contractor?",
        answer:
          "A busy contractor taking 15-20 calls per day at 3-5 minutes each needs 225-500 minutes per month. At Ruby's rates, that's $680-$1,640+/month — and overages cost $4-5 per minute on top. AI Peak Biz covers unlimited calls at a flat monthly rate with no per-minute billing.",
      },
      {
        question: "Can AI really replace a human receptionist?",
        answer:
          "For most contractor calls — scheduling estimates, answering basic questions, capturing lead info — yes. Modern AI voice assistants sound natural, understand context, and can book appointments directly. Where Ruby excels is complex, emotionally sensitive calls (legal intake, medical offices). For trades businesses, AI handles 90%+ of calls as well or better than a human receptionist, at a fraction of the cost.",
      },
      {
        question: "Does Ruby work after hours?",
        answer:
          "Ruby offers after-hours coverage, but it costs extra and has limitations. AI Peak Biz's AI voice assistant works 24/7/365 with no additional charge — including nights, weekends, and holidays when contractors miss the most calls.",
      },
      {
        question: "What does AI Peak Biz do that Ruby doesn't?",
        answer:
          "AI Peak Biz includes missed call text-back (instantly texts callers you can't answer), AI chatbot for your website, automated appointment booking, review management, and database reactivation (re-engages old leads from your CRM). Ruby only handles phone answering.",
      },
      {
        question: "Can I use Ruby and AI Peak Biz together?",
        answer:
          "You could, but most contractors find it unnecessary. AI Peak Biz's voice assistant handles the same job at a fraction of the cost. If you want a human touch for VIP clients, you could route specific callers to Ruby and let AI Peak Biz handle everything else — but most businesses find the AI handles it all.",
      },
    ],
    verdict:
      "Ruby provides excellent human receptionists — but the per-minute billing model punishes busy contractors. If you're a law firm with 30 calls a month, Ruby makes sense. If you're a roofing company getting 15+ calls a day during storm season, AI Peak Biz gives you 24/7 coverage at a flat rate, plus lead recovery tools that Ruby doesn't offer.",
  },

  "ai-peak-biz-vs-smith-ai": {
    slug: "ai-peak-biz-vs-smith-ai",
    name: "Smith.ai",
    tagline: "AI + human receptionist service",
    metaTitle:
      "AI Peak Biz vs Smith.ai: Best AI Receptionist for Contractors (2026)",
    metaDescription:
      "AI Peak Biz vs Smith.ai compared for service businesses. See pricing, features, and which AI receptionist platform is better for roofers, HVAC, and contractors.",
    heroHeadline: "AI Peak Biz vs Smith.ai",
    heroSubheadline:
      "Smith.ai blends AI with human receptionists — and charges per call. AI Peak Biz gives contractors flat-rate AI voice answering plus the lead recovery tools that actually drive revenue.",
    overview:
      "Smith.ai is a hybrid receptionist service that combines AI technology with live human agents to answer business calls, respond to chats, and handle intake. They've positioned themselves as a modern alternative to traditional answering services, and they do a good job — but their per-call pricing model and focus on legal and professional services means contractors often pay more than they should for features they don't need. AI Peak Biz is built specifically for trades businesses: roofers, HVAC companies, plumbers, and electricians who need every call answered and every lead turned into a booked appointment.",
    pricing: {
      range: "$255–$1,200+/month",
      details: [
        "30 calls/month: ~$255/month ($8.50/call)",
        "60 calls/month: ~$480/month ($8.00/call)",
        "120 calls/month: ~$900/month ($7.50/call)",
        "Custom plans for higher volumes",
        "Chat services billed separately",
      ],
      gotchas: [
        "Per-call billing — costs rise with volume",
        "Overage charges of $7-9 per call beyond your plan",
        "Chat and phone are separate products with separate billing",
        "Many integrations require higher-tier plans",
        "Spam calls still count toward your total in some cases",
      ],
    },
    strengths: [
      "Hybrid AI + human model catches edge cases",
      "Strong legal industry integrations (Clio, MyCase)",
      "Quality call screening and intake",
      "Outbound calling capabilities",
      "Good CRM integrations",
    ],
    weaknesses: [
      "Per-call pricing gets expensive at volume — $900+/month for 120 calls",
      "Phone and chat billed separately",
      "Primarily designed for legal and professional services",
      "No missed call text-back automation included",
      "No database reactivation or lead recovery tools",
      "No review management",
      "Overage charges on busy months",
    ],
    bestFor:
      "Law firms and professional service businesses with moderate call volume that need intake and CRM integration. Not optimized for contractors or trades businesses.",
    features: [
      { name: "24/7 AI Voice Assistant", competitor: "Hybrid", aipeakbiz: true },
      { name: "Missed Call Text-Back", competitor: false, aipeakbiz: true },
      { name: "AI Chatbot", competitor: "Separate product", aipeakbiz: true },
      { name: "Review Management", competitor: false, aipeakbiz: true },
      { name: "Database Reactivation", competitor: false, aipeakbiz: true },
      { name: "AI Appointment Booking", competitor: "Basic", aipeakbiz: true },
      { name: "Outbound Calling", competitor: true, aipeakbiz: false },
      { name: "Legal Intake (Clio, MyCase)", competitor: true, aipeakbiz: false },
      { name: "Flat Monthly Pricing", competitor: false, aipeakbiz: true },
      { name: "No Per-Call Charges", competitor: false, aipeakbiz: true },
      { name: "Built for Contractors", competitor: "General", aipeakbiz: true },
      { name: "Starting Price", competitor: "$255/mo", aipeakbiz: "$297/mo" },
    ],
    faqs: [
      {
        question: "Is Smith.ai better than AI Peak Biz?",
        answer:
          "Smith.ai is better for law firms that need legal intake with Clio or MyCase integration. For contractors and service businesses, AI Peak Biz is the better choice — it costs less at volume, includes revenue recovery tools Smith.ai doesn't offer, and is purpose-built for trades businesses rather than legal professionals.",
      },
      {
        question: "How does Smith.ai's pricing compare to AI Peak Biz?",
        answer:
          "Smith.ai charges per call — roughly $7.50-8.50 per call depending on your plan. A contractor getting 20 calls a day would spend $3,000-5,000+/month with Smith.ai. AI Peak Biz charges a flat monthly rate regardless of call volume, making it dramatically cheaper for busy service businesses.",
      },
      {
        question: "Does Smith.ai use real AI or just humans?",
        answer:
          "Smith.ai uses a hybrid model — AI handles initial screening and simple tasks, then routes complex calls to human agents. AI Peak Biz uses a fully AI-powered voice assistant trained on your specific business. For contractor calls (scheduling, pricing questions, service inquiries), the AI handles 90%+ without needing a human.",
      },
      {
        question: "What does AI Peak Biz include that Smith.ai doesn't?",
        answer:
          "AI Peak Biz includes missed call text-back automation, database reactivation (re-engaging old leads for new revenue), review management, and AI-powered appointment booking — all included in the flat monthly rate. Smith.ai focuses on call answering and chat, with everything else billed separately or not available.",
      },
      {
        question: "Can Smith.ai handle contractor calls well?",
        answer:
          "Smith.ai can answer contractor calls, but their system is optimized for legal and professional services. They don't have contractor-specific training, industry knowledge, or the revenue recovery tools (database reactivation, review management) that trades businesses need. AI Peak Biz is trained specifically on roofing, HVAC, plumbing, and electrical business workflows.",
      },
      {
        question: "Should I choose Smith.ai or AI Peak Biz for my HVAC company?",
        answer:
          "AI Peak Biz. Smith.ai's per-call pricing would cost an HVAC company $1,500-3,000+/month during peak season. AI Peak Biz gives you flat-rate AI voice answering, plus missed call text-back and database reactivation that can recover $50K+ in revenue from your existing customer database. It's built for your industry.",
      },
    ],
    verdict:
      "Smith.ai is a quality hybrid service — but it's designed for lawyers, not contractors. The per-call pricing model punishes high-volume trades businesses, and it lacks the revenue recovery tools (database reactivation, review management, missed call text-back) that drive real ROI for service companies. AI Peak Biz costs less at volume and does more for contractors.",
  },
};

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors[slug];
}

export function getAllCompetitorSlugs(): string[] {
  return Object.keys(competitors);
}
