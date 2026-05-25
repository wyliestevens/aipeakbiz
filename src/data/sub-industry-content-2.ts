import { SubIndustryContent } from "./sub-industry-content";

/**
 * Sub-industry content for Professional Services, Legal, Financial, and Real Estate.
 * Keyed by "parentSlug/subSlug".
 */
export const subIndustryContent2: Record<string, SubIndustryContent> = {
  // ─── PROFESSIONAL SERVICES ─────────────────────────────────────────────────────
  "professional-services/accounting": {
    slug: "accounting",
    parentSlug: "professional-services",
    name: "Accounting",
    title: "AI Front Desk for Accounting Firms",
    metaDescription:
      "Stop losing clients to missed calls during tax season. AI Peak Biz builds AI front desk systems for accounting firms. Every call answered, every lead captured.",
    heroHeadline:
      "Envision a firm where every client call is answered, even during the January-to-April crush.",
    heroSubhead:
      "Tax season buries your team. Phones ring while your staff juggles filings, extensions, and walk-ins. AI Peak Biz builds an AI front desk that answers every call, books consultations, and captures new client inquiries 24/7. Your CPAs stay focused on billable work.",
    problems: [
      {
        title: "Missed Calls During Tax Season",
        description:
          "From January through April, your office gets triple the normal call volume. Staff is buried in returns and cannot answer every ring. New client inquiries go to voicemail. Those callers find another firm within minutes. You lose the client and their future annual revenue.",
        cost: "Typical loss: $4,000 to $15,000 per month in missed new clients",
      },
      {
        title: "Consultation No-Shows",
        description:
          "Prospective clients book free consultations and forget. Without reminders, no-show rates run 20 to 30 percent. Each empty slot is time your CPA could have spent on billable work or meeting another prospect. Over a month, that adds up fast.",
        cost: "Typical loss: $2,000 to $6,000 per month in wasted partner time",
      },
      {
        title: "Dormant Clients Never Rebook",
        description:
          "Clients who filed last April fully intend to come back. But without a reminder in November or December, they procrastinate, get poached by H&R Block ads, or simply forget. You already earned their trust. Now you have to re-acquire them.",
        cost: "Typical loss: $8,000 to $25,000 per year in client attrition",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI receptionist answers every call 24/7. It knows your service menu, pricing tiers, and availability. It books consultations, answers tax deadline questions, and routes urgent calls to the right partner.",
      },
      {
        title: "Automated Client Reactivation",
        description:
          "Starting in October, your system reaches out to prior-year clients with booking links for the upcoming season. Early birds get scheduled, your pipeline fills before January, and you stop scrambling for capacity.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "When a call goes unanswered, the prospect gets a text within 60 seconds with a link to book a consultation. They book themselves instead of calling your competitor.",
      },
    ],
    useCases: [
      {
        title: "The Solo CPA During Filing Season",
        description:
          "A solo practitioner handles 200 returns per season. During February and March, they get 15 calls a day but can only answer 5. The AI voice assistant handles the other 10, books 3 new consultations per day, and adds $9,000 per month in new revenue.",
      },
      {
        title: "The Mid-Size Firm Retaining Clients Year-Round",
        description:
          "A 4-partner firm loses 12 percent of clients annually to competitors who reach out first. Automated reactivation texts in November bring back 40 clients who would have drifted. At $1,200 average annual value, that is $48,000 retained.",
      },
      {
        title: "The Bookkeeping Add-On Upsell",
        description:
          "A tax firm offers monthly bookkeeping but never promotes it. The AI chatbot mentions bookkeeping services to every website visitor asking about business taxes. 8 new bookkeeping clients per quarter at $500/month equals $48,000 in recurring revenue.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle questions about tax deadlines and document requirements?",
        answer:
          "Yes. We train it on your specific services, deadlines, and document checklists. It answers common questions like extension deadlines, required documents for filing, and your turnaround times.",
      },
      {
        question: "Will it work with my scheduling software?",
        answer:
          "It integrates with most calendar and scheduling tools including Calendly, Acuity, and practice management systems. Appointments book directly into your existing workflow.",
      },
      {
        question: "What happens during off-season when call volume drops?",
        answer:
          "The system scales with you. During slower months, it handles routine inquiries and drives reactivation campaigns. You pay the same monthly rate year-round — the value shifts from call handling to proactive outreach.",
      },
      {
        question: "How quickly can this be set up before tax season?",
        answer:
          "Most accounting firms are fully deployed in 5 to 7 business days. If you start in December, you are live well before the January rush.",
      },
    ],
    reviewIndices: [],
  },

  "professional-services/bookkeeping": {
    slug: "bookkeeping",
    parentSlug: "professional-services",
    name: "Bookkeeping",
    title: "AI Front Desk for Bookkeeping Services",
    metaDescription:
      "Stop losing bookkeeping clients to missed calls. AI Peak Biz builds AI systems that answer every inquiry, book consultations, and keep your pipeline full year-round.",
    heroHeadline:
      "Envision a bookkeeping practice where new client inquiries never slip through the cracks.",
    heroSubhead:
      "You are heads-down in QuickBooks reconciling accounts when the phone rings. You cannot answer. That small business owner looking for monthly bookkeeping calls someone else. AI Peak Biz builds an AI front desk that captures every lead, books discovery calls, and follows up automatically.",
    problems: [
      {
        title: "Missed Inquiries While Working in Client Files",
        description:
          "Bookkeepers spend hours deep in client financials. Interrupting that focus to answer the phone costs productivity. But ignoring the phone costs new business. A typical solo bookkeeper misses 40 to 60 percent of inbound calls during working hours.",
        cost: "Typical loss: $2,000 to $8,000 per month in missed recurring clients",
      },
      {
        title: "Slow Response to New Leads",
        description:
          "A small business owner looking for a bookkeeper contacts 3 providers. The first one to respond wins 78 percent of the time. If you call back 4 hours later, they have already signed with someone else. Speed to lead is everything in recurring services.",
        cost: "Typical loss: $3,000 to $10,000 per month in lost recurring revenue",
      },
      {
        title: "Client Churn From Poor Communication",
        description:
          "Bookkeeping clients leave when they feel ignored. Unanswered emails, missed calls about their monthly reports, or slow turnaround on questions erode trust. You deliver great work but poor responsiveness costs you 15 to 20 percent annual churn.",
        cost: "Typical loss: $5,000 to $15,000 per year in preventable churn",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every call instantly. It explains your services, pricing structure, and onboarding process. It books discovery calls directly into your calendar. You never miss a lead while reconciling accounts.",
      },
      {
        title: "AI Chatbot for Your Website",
        description:
          "Website visitors asking about monthly bookkeeping, cleanup projects, or tax prep coordination get instant answers. The chatbot qualifies them and books a call before they bounce to another provider.",
      },
      {
        title: "Automated Follow-Up Sequences",
        description:
          "Prospects who inquire but do not book get a 5-touch follow-up sequence over 14 days. Each message adds value — a tip on expense tracking, a cash flow reminder. By touch 5, they are ready to sign.",
      },
    ],
    useCases: [
      {
        title: "The Solo Bookkeeper Scaling Past 20 Clients",
        description:
          "A solo bookkeeper at capacity wants to be selective about new clients. The AI qualifies inbound leads by revenue size, industry, and software used. Only qualified prospects get booked. 3 premium clients per month at $800/month equals $28,800 in annual recurring revenue added.",
      },
      {
        title: "The Bookkeeping Firm Handling Seasonal Spikes",
        description:
          "A 3-person bookkeeping firm gets flooded with year-end cleanup requests in January. The AI handles 30 calls per day, books 8 consultations, and captures the rest for follow-up. No temp receptionist needed.",
      },
      {
        title: "Reducing Client Churn With Proactive Check-Ins",
        description:
          "Automated monthly check-in texts go to every client asking if they have questions about their reports. Clients feel attended to. Churn drops from 18 percent to 8 percent annually.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain my different service packages?",
        answer:
          "Yes. We program it with your exact offerings — monthly bookkeeping, cleanup projects, payroll add-ons, tax prep coordination. It explains pricing and scopes accurately to every caller.",
      },
      {
        question: "Will it qualify leads based on my ideal client criteria?",
        answer:
          "Absolutely. We set up qualifying questions around revenue size, industry, accounting software, and transaction volume. Only prospects matching your criteria get booked on your calendar.",
      },
      {
        question: "I work from home. Will callers know it is AI?",
        answer:
          "The AI sounds professional and natural. Callers experience it as a knowledgeable receptionist. It projects the image of a larger operation regardless of your office setup.",
      },
      {
        question: "How does it handle existing client calls versus new inquiries?",
        answer:
          "It recognizes returning callers and routes them appropriately — to your voicemail for detailed questions or to a scheduling link for their next meeting. New inquiries get the full qualification flow.",
      },
    ],
    reviewIndices: [],
  },

  "professional-services/grant-writers": {
    slug: "grant-writers",
    parentSlug: "professional-services",
    name: "Grant Writers",
    title: "AI Front Desk for Grant Writers",
    metaDescription:
      "Stop losing grant writing clients to slow responses. AI Peak Biz captures every inquiry and books consultations while you focus on winning proposals.",
    heroHeadline:
      "Envision a grant writing practice where new client calls never interrupt a deadline.",
    heroSubhead:
      "You are deep in a federal grant narrative with a 48-hour deadline. The phone rings — a nonprofit needs help with a foundation proposal. You cannot answer. They move on. AI Peak Biz builds a system that captures every inquiry, qualifies the opportunity, and books a consultation on your terms.",
    problems: [
      {
        title: "Missed Calls During Grant Deadlines",
        description:
          "Grant writing requires deep focus. Deadlines are non-negotiable. When you are writing, you cannot answer the phone. But grant writing prospects have urgent timelines too — they need someone now. If you call back tomorrow, they have already hired someone else.",
        cost: "Typical loss: $3,000 to $12,000 per month in missed projects",
      },
      {
        title: "Feast-or-Famine Pipeline",
        description:
          "When you are busy delivering, you stop marketing. When projects end, your pipeline is empty. You scramble for the next client. This cycle keeps revenue unpredictable and stress levels high. Consistent lead capture solves this permanently.",
        cost: "Typical loss: $5,000 to $20,000 per quarter in revenue gaps",
      },
      {
        title: "Unqualified Prospects Waste Your Time",
        description:
          "Half the organizations that contact you have budgets too small, timelines too tight, or grant types outside your expertise. Without pre-qualification, you spend hours on discovery calls that go nowhere.",
        cost: "Typical loss: 8 to 12 hours per month in wasted consultation time",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every call and explains your grant writing specialties, typical timelines, and engagement structure. It qualifies callers on budget, deadline, and grant type before booking a consultation.",
      },
      {
        title: "Lead Qualification System",
        description:
          "Prospects answer key questions before reaching your calendar: What type of grant? What is your budget? When is the deadline? Only qualified opportunities get booked. The rest receive a polite referral.",
      },
      {
        title: "Pipeline Nurture Automation",
        description:
          "Prospects who are not ready today get added to a nurture sequence. When their next grant cycle approaches, they hear from you first. Your pipeline stays warm even when you are buried in deliverables.",
      },
    ],
    useCases: [
      {
        title: "The Solo Grant Writer at Capacity",
        description:
          "A grant writer juggling 4 active proposals gets 8 inquiry calls per week. The AI handles all 8, qualifies 3 as good fits, and books them for the following week. Revenue stays steady without deadline pressure.",
      },
      {
        title: "The Firm Specializing in Federal Grants",
        description:
          "A grant writing firm only takes federal grants over $250K. The AI filters out small foundation requests and state-level projects, saving partners 6 hours per week in unqualified discovery calls.",
      },
      {
        title: "Seasonal Grant Cycle Preparation",
        description:
          "The system sends outreach to past clients 60 days before major federal grant deadlines. 12 organizations re-engage for the new cycle. At $5,000 average project fee, that is $60,000 in predictable annual revenue.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain my specific grant writing specialties?",
        answer:
          "Yes. We train it on your focus areas — federal, state, foundation, specific sectors like education or healthcare. It explains your expertise and typical success rates to callers.",
      },
      {
        question: "How does it handle prospects with tight deadlines?",
        answer:
          "It checks your availability and current workload rules. If you cannot take rush projects, it communicates that clearly. If you can, it flags them as priority and books immediately.",
      },
      {
        question: "Will it work for a solo grant writer or only firms?",
        answer:
          "It works for both. Solo practitioners benefit the most because the AI acts as a full-time intake coordinator without the salary cost.",
      },
      {
        question: "Can it handle inquiries from both nonprofits and government agencies?",
        answer:
          "Yes. It adapts its conversation based on the caller type, asking different qualifying questions for nonprofit foundation grants versus government contracts.",
      },
    ],
    reviewIndices: [],
  },

  "professional-services/consultants": {
    slug: "consultants",
    parentSlug: "professional-services",
    name: "Consultants",
    title: "AI Front Desk for Consultants",
    metaDescription:
      "Stop losing consulting leads to voicemail. AI Peak Biz answers every call, qualifies prospects, and books discovery calls while you deliver client work.",
    heroHeadline:
      "Envision a consulting practice where every prospect gets a response in under 60 seconds.",
    heroSubhead:
      "You are in a client strategy session when a $50,000 engagement prospect calls. It goes to voicemail. They call the next consultant on their list. AI Peak Biz builds a system that answers instantly, qualifies the opportunity, and books a discovery call — so you never lose a deal to slow response.",
    problems: [
      {
        title: "Missed Calls During Client Engagements",
        description:
          "Consultants spend most of their day in meetings, workshops, or deep work. You cannot answer the phone during a client session. But high-value prospects expect immediate responsiveness. The first consultant to respond wins the engagement 70 percent of the time.",
        cost: "Typical loss: $10,000 to $50,000 per quarter in lost engagements",
      },
      {
        title: "Feast-or-Famine Revenue Cycles",
        description:
          "When you are delivering, you stop selling. When engagements end, your pipeline is empty. This is the number one revenue problem for independent consultants. Consistent lead capture and nurture eliminates the cycle.",
        cost: "Typical loss: $15,000 to $40,000 per quarter in revenue gaps",
      },
      {
        title: "Unqualified Discovery Calls",
        description:
          "Without pre-qualification, you take every discovery call. Half are prospects who cannot afford you, have mismatched expectations, or need something outside your expertise. Each wasted hour is an hour you could bill at $200 to $500.",
        cost: "Typical loss: $4,000 to $10,000 per month in wasted billable time",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every inbound call with the polish of a senior executive assistant. It explains your consulting focus, engagement types, and typical investment levels. Only qualified prospects reach your calendar.",
      },
      {
        title: "Prospect Qualification Engine",
        description:
          "Before booking a discovery call, prospects answer questions about their challenge, budget range, timeline, and decision-making authority. You walk into every call knowing it is worth your time.",
      },
      {
        title: "Reputation and Referral System",
        description:
          "After every successful engagement, your system requests a testimonial and referral. Satisfied clients become your sales force. Your Google reviews grow monthly without you lifting a finger.",
      },
    ],
    useCases: [
      {
        title: "The Strategy Consultant Eliminating Wasted Calls",
        description:
          "A management consultant taking $25K+ engagements gets 20 inquiries per month. The AI qualifies based on company size and budget. Only 6 make it to discovery calls. Close rate jumps from 20 percent to 50 percent because every call is qualified. Revenue increases by $75K per quarter.",
      },
      {
        title: "The IT Consultant Filling Pipeline Gaps",
        description:
          "An IT consultant finishes a 6-month engagement with an empty pipeline. The AI has been capturing and nurturing leads throughout. 4 qualified prospects are waiting for discovery calls on day one of availability.",
      },
      {
        title: "The Consulting Firm Scaling Intake",
        description:
          "A 3-partner consulting firm gets 50 inquiries per month across all partners. The AI routes based on specialty, qualifies on budget, and books discovery calls with the right partner. No admin coordinator needed.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle complex questions about my consulting methodology?",
        answer:
          "It handles overview-level questions well — your focus areas, engagement types, typical results. For deep methodology questions, it books a discovery call so you can have that conversation personally.",
      },
      {
        question: "Will prospects feel like they are talking to a bot?",
        answer:
          "The AI is conversational and professional. Most callers do not realize it is AI. It sounds like a polished executive assistant who knows your practice inside and out.",
      },
      {
        question: "How does it handle referrals differently from cold inquiries?",
        answer:
          "Referrals get priority treatment — acknowledged as coming from a trusted source, thanked, and fast-tracked to your calendar without heavy qualification gates.",
      },
      {
        question: "Can it integrate with my CRM?",
        answer:
          "Yes. It pushes lead data into your CRM automatically — HubSpot, Salesforce, Pipedrive, or whatever you use. Every interaction is logged and tagged.",
      },
    ],
    reviewIndices: [],
  },

  "professional-services/coaches": {
    slug: "coaches",
    parentSlug: "professional-services",
    name: "Coaches",
    title: "AI Front Desk for Coaches",
    metaDescription:
      "Stop losing coaching clients to slow follow-up. AI Peak Biz captures every lead, books discovery calls, and nurtures prospects while you coach your clients.",
    heroHeadline:
      "Envision a coaching practice where every interested prospect books a call — automatically.",
    heroSubhead:
      "You are mid-session with a client when three people visit your website looking for a coach. Without instant engagement, they bounce. AI Peak Biz builds a system that captures every visitor, answers their questions, and gets them on your calendar before they forget why they came.",
    problems: [
      {
        title: "Website Visitors Leave Without Booking",
        description:
          "Coaching prospects are motivated in the moment. They find your site at 10 PM after a bad day at work. Without someone to engage them instantly, they browse, think about it, and never come back. Your website gets traffic but your calendar stays empty.",
        cost: "Typical loss: $3,000 to $12,000 per month in lost coaching packages",
      },
      {
        title: "Discovery Call No-Shows",
        description:
          "Coaching prospects book discovery calls in a moment of motivation. By the time the call arrives, the urgency has faded. Without proper reminders and re-engagement, no-show rates for coaches run 30 to 40 percent.",
        cost: "Typical loss: $2,000 to $8,000 per month in wasted time and lost enrollments",
      },
      {
        title: "Manual Follow-Up Cannot Scale",
        description:
          "You know follow-up converts prospects into clients. But between sessions, content creation, and admin work, you do not have time to send 5 personalized follow-up messages to every lead. Prospects go cold after 48 hours.",
        cost: "Typical loss: $5,000 to $15,000 per month in unconverted leads",
      },
    ],
    solutions: [
      {
        title: "AI Chatbot on Your Website",
        description:
          "Your website becomes a 24/7 enrollment machine. The chatbot answers questions about your coaching programs, explains your approach, addresses objections, and books discovery calls — all while you sleep.",
      },
      {
        title: "Automated Nurture Sequences",
        description:
          "Every prospect who does not book immediately enters a value-driven nurture sequence. Helpful content, client success stories, and gentle invitations to book keep you top-of-mind until they are ready.",
      },
      {
        title: "No-Show Prevention System",
        description:
          "Prospects receive confirmation texts, 24-hour reminders, and day-of reminders with a personal touch. No-show rates drop from 35 percent to under 10 percent.",
      },
    ],
    useCases: [
      {
        title: "The Executive Coach Filling Group Programs",
        description:
          "An executive coach launching a group program needs 12 participants. The AI chatbot engages 200 website visitors over 3 weeks, books 40 discovery calls, and 14 enroll. The program fills without a single cold outreach message.",
      },
      {
        title: "The Life Coach Converting Instagram Traffic",
        description:
          "A life coach drives 500 visitors per month from Instagram to their website. Previously, 2 percent booked. With the AI chatbot, 8 percent book discovery calls. That is 40 calls per month instead of 10.",
      },
      {
        title: "The Business Coach Reducing No-Shows",
        description:
          "A business coach books 20 discovery calls per week but only 12 show up. Automated reminders with a brief pre-call questionnaire bring show rates to 18 out of 20. Close rate stays the same, but revenue jumps 50 percent.",
      },
    ],
    faq: [
      {
        question: "Can the AI communicate my coaching philosophy and approach?",
        answer:
          "Yes. We train it on your methodology, ideal client profile, and program structure. It speaks in your voice and represents your brand accurately to every prospect.",
      },
      {
        question: "Will it feel too salesy for my audience?",
        answer:
          "No. We calibrate the tone to match your brand — warm, inviting, and service-oriented. It feels like a helpful guide, not a pushy salesperson.",
      },
      {
        question: "Can it handle different programs and pricing tiers?",
        answer:
          "Absolutely. Whether you offer 1-on-1, group programs, courses, or VIP days, the AI explains each option and guides prospects toward the right fit.",
      },
      {
        question: "How does it handle prospects who are not ready to buy?",
        answer:
          "They enter a nurture sequence that keeps them engaged over weeks or months. When they are ready, you are the first coach they think of. No pressure, just consistent presence.",
      },
    ],
    reviewIndices: [],
  },

  "professional-services/marketing-agencies": {
    slug: "marketing-agencies",
    parentSlug: "professional-services",
    name: "Marketing Agencies",
    title: "AI Front Desk for Marketing Agencies",
    metaDescription:
      "Stop losing agency leads to slow response times. AI Peak Biz answers every inquiry, qualifies prospects by budget, and books strategy calls automatically.",
    heroHeadline:
      "Envision an agency where every inbound lead gets a response before your competitor even sees the email.",
    heroSubhead:
      "Your team is delivering campaigns for existing clients. A $5,000/month prospect fills out your contact form. Six hours later you respond. They have already had two calls with other agencies. AI Peak Biz ensures every lead gets instant engagement, qualification, and a booked call within minutes.",
    problems: [
      {
        title: "Slow Response to Inbound Leads",
        description:
          "Marketing agencies preach speed-to-lead to clients but fail at it themselves. Your team is busy on deliverables. New inquiries sit in an inbox for hours. The prospect who filled out your form also filled out two competitors. The first to call wins.",
        cost: "Typical loss: $8,000 to $30,000 per month in lost retainer revenue",
      },
      {
        title: "Unqualified Prospects Clog Your Pipeline",
        description:
          "Half the businesses that contact your agency have budgets of $500/month. Your minimum is $3,000. Without pre-qualification, your sales team wastes hours on prospects who will never close. That time could be spent on real opportunities.",
        cost: "Typical loss: $5,000 to $12,000 per month in wasted sales capacity",
      },
      {
        title: "Client Churn From Communication Gaps",
        description:
          "Agencies lose clients not because of bad results but because of perceived neglect. When clients feel ignored between meetings, they start shopping. Proactive communication reduces churn by 25 to 40 percent.",
        cost: "Typical loss: $10,000 to $40,000 per quarter in preventable churn",
      },
    ],
    solutions: [
      {
        title: "AI Lead Response System",
        description:
          "Every form submission, call, or chat gets an instant response. The AI explains your services, asks qualifying questions about budget, goals, and timeline, and books a strategy call if they fit your criteria.",
      },
      {
        title: "Budget-Based Qualification",
        description:
          "Prospects are qualified on budget, industry, and service needs before reaching your sales team. Only opportunities above your minimum retainer get booked. Everyone else receives a helpful resource or referral.",
      },
      {
        title: "Client Retention Automation",
        description:
          "Automated check-ins between meetings keep clients feeling attended to. Monthly progress summaries, quick win notifications, and satisfaction pulse checks reduce churn without adding to your team workload.",
      },
    ],
    useCases: [
      {
        title: "The SEO Agency Qualifying Leads by Budget",
        description:
          "An SEO agency with a $2,500/month minimum gets 60 inquiries per month. The AI qualifies on budget and filters out 35 low-budget prospects. The sales team focuses on 25 qualified leads, closes 8, and adds $20,000/month in new MRR.",
      },
      {
        title: "The PPC Agency Reducing Response Time",
        description:
          "A PPC agency reduces average response time from 4 hours to 2 minutes. Close rate on inbound leads jumps from 15 percent to 35 percent. Same lead volume, double the new clients.",
      },
      {
        title: "The Full-Service Agency Preventing Client Churn",
        description:
          "An agency losing 3 clients per quarter to perceived neglect implements automated monthly check-ins and progress updates. Churn drops to 1 per quarter. At $4,000/month average retainer, that saves $96,000 annually.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain our specific service offerings and case studies?",
        answer:
          "Yes. We train it on your service packages, pricing tiers, industry specialties, and even specific case study results. It sells your agency as well as your best salesperson.",
      },
      {
        question: "How does it handle prospects asking for services we do not offer?",
        answer:
          "It politely explains what you do and do not offer, and can suggest referral partners if configured. No prospect gets a dead-end experience.",
      },
      {
        question: "Will it conflict with our existing CRM and sales process?",
        answer:
          "No. It integrates with your CRM and follows your existing sales stages. Think of it as a layer on top of your process that handles the first 5 minutes of engagement.",
      },
      {
        question: "Can we customize the qualification criteria?",
        answer:
          "Completely. Budget minimums, required industries, service fit, timeline — all configurable. You define what makes a qualified lead and the AI enforces it.",
      },
    ],
    reviewIndices: [],
  },

  // ─── LEGAL ─────────────────────────────────────────────────────────────────────
  "legal/personal-injury": {
    slug: "personal-injury",
    parentSlug: "legal",
    name: "Personal Injury",
    title: "AI Front Desk for Personal Injury Firms",
    metaDescription:
      "Stop losing personal injury cases to missed intake calls. AI Peak Biz answers 24/7, captures case details, and books consultations before competitors respond.",
    heroHeadline:
      "Envision a firm where every accident victim reaches you on the first call, day or night.",
    heroSubhead:
      "Car accidents happen at 2 AM. Falls happen on weekends. When an injured person calls your firm and gets voicemail, they call the next number on Google. AI Peak Biz builds an AI intake system that answers every call, captures case details, and books a consultation — so you never lose a case to slow response.",
    problems: [
      {
        title: "Missed Intake Calls After Hours",
        description:
          "Personal injury cases are time-sensitive. An accident victim calls within hours of their incident. If your firm does not answer, they call the billboard lawyer down the street. 35 to 50 percent of PI intake calls happen outside business hours. Each missed call could be a six-figure case.",
        cost: "Typical loss: $20,000 to $100,000+ per month in lost case value",
      },
      {
        title: "Slow Follow-Up on Web Leads",
        description:
          "A car accident victim fills out your website form at midnight. Your intake coordinator sees it at 9 AM. By then, the prospect has spoken to two other firms. In personal injury, the first firm to make meaningful contact signs 60 percent of cases.",
        cost: "Typical loss: $15,000 to $50,000 per month in lost signed cases",
      },
      {
        title: "Referral Leakage",
        description:
          "Other attorneys and past clients refer cases to you. But when the referred prospect calls and gets voicemail, the goodwill evaporates. They Google another firm. Your referral sources stop sending cases because their people are not getting called back.",
        cost: "Typical loss: $10,000 to $40,000 per quarter in lost referral cases",
      },
    ],
    solutions: [
      {
        title: "24/7 AI Intake System",
        description:
          "Your AI answers every call at any hour. It captures accident type, injury details, insurance information, and statute of limitations timeline. Urgent cases get flagged for immediate attorney callback. Every other case gets a consultation booked for the next morning.",
      },
      {
        title: "Instant Web Lead Response",
        description:
          "Website form submissions trigger an immediate call or text from your AI. Within 90 seconds, the prospect is in a conversation. Case details are captured and a consultation is booked before they contact another firm.",
      },
      {
        title: "Referral Priority Handling",
        description:
          "When a caller mentions a referral source, the AI acknowledges it, provides priority treatment, and ensures the referring party gets a thank-you notification. Your referral pipeline stays healthy.",
      },
    ],
    useCases: [
      {
        title: "The Saturday Night Car Accident",
        description:
          "A driver is rear-ended at 10 PM Saturday. They Google 'personal injury lawyer near me' and call your firm. The AI answers, gathers accident details, confirms they have a viable case, and books a Monday morning consultation. Without AI, that $80,000 case goes to the firm with a live answering service.",
      },
      {
        title: "The High-Volume Firm Managing 200 Calls Per Day",
        description:
          "A PI firm spending $50K/month on advertising gets 200 calls per day. Human intake staff handles 150. The AI handles the other 50, signs 8 new cases per week that would have been lost. At $15,000 average case value, that is $120,000 per week recovered.",
      },
      {
        title: "The Solo Practitioner Competing With Billboard Firms",
        description:
          "A solo PI attorney cannot afford 24/7 intake staff. The AI gives them the same always-on availability as firms spending $100K/month on advertising. They sign 3 additional cases per month at zero staff cost increase.",
      },
    ],
    faq: [
      {
        question: "Can the AI determine if someone has a viable case?",
        answer:
          "It asks qualifying questions — accident type, injury severity, when it happened, insurance status. It flags viable cases for attorney review and politely declines cases outside your practice areas.",
      },
      {
        question: "Is it HIPAA compliant for medical information?",
        answer:
          "The system captures only basic injury descriptions needed for intake, not detailed medical records. All data is encrypted and stored securely per legal industry standards.",
      },
      {
        question: "How does it handle Spanish-speaking callers?",
        answer:
          "The AI can conduct full intake conversations in Spanish, capturing all case details and booking consultations. Bilingual capability is included at no extra cost.",
      },
      {
        question: "Will it work with my case management software?",
        answer:
          "Yes. It integrates with Clio, MyCase, PracticePanther, Filevine, and most other legal practice management tools. New intakes push directly into your system.",
      },
    ],
    reviewIndices: [],
  },

  "legal/family-law": {
    slug: "family-law",
    parentSlug: "legal",
    name: "Family Law",
    title: "AI Front Desk for Family Law Firms",
    metaDescription:
      "Stop losing family law clients to missed calls. AI Peak Biz answers with empathy, captures case details, and books consultations for divorce and custody matters.",
    heroHeadline:
      "Envision a practice where every person going through a difficult time reaches you on the first try.",
    heroSubhead:
      "Someone just found out their spouse filed for divorce. They are scared, emotional, and looking for help now — not tomorrow. If your firm does not answer, they will find someone who does. AI Peak Biz builds an empathetic AI intake system that provides comfort, captures their situation, and gets them on your calendar.",
    problems: [
      {
        title: "Emotionally Charged Calls Going to Voicemail",
        description:
          "Family law prospects call in moments of crisis — they just found divorce papers, discovered infidelity, or fear losing custody. If they hit voicemail, the emotional urgency drives them to call the next firm immediately. These are not prospects who leave messages and wait.",
        cost: "Typical loss: $8,000 to $25,000 per month in lost retainer fees",
      },
      {
        title: "Consultation No-Shows",
        description:
          "Family law consultations have high no-show rates because clients are emotionally overwhelmed and avoidant. Without warm reminders and re-engagement, 25 to 35 percent of booked consultations result in empty chairs.",
        cost: "Typical loss: $3,000 to $10,000 per month in attorney time and lost retainers",
      },
      {
        title: "Slow Intake Loses Cases to Aggressive Competitors",
        description:
          "Family law is competitive. Firms running Google Ads are paying $50 to $150 per click. When those expensive clicks turn into calls and your staff is at lunch, you are paying for leads your competitor signs.",
        cost: "Typical loss: $5,000 to $20,000 per month in wasted ad spend and lost cases",
      },
    ],
    solutions: [
      {
        title: "Empathetic AI Intake",
        description:
          "Your AI answers with warmth and professionalism. It acknowledges the caller's difficult situation, asks about their needs — divorce, custody, support — and captures essential details without feeling transactional.",
      },
      {
        title: "Warm Reminder System",
        description:
          "Consultation reminders are crafted for family law clients — reassuring, not pushy. They remind the prospect that taking this step is important and that your team is ready to help. No-show rates drop significantly.",
      },
      {
        title: "Conflict Check Automation",
        description:
          "The AI captures opposing party names during intake so your team can run conflict checks before the consultation. No wasted attorney time on cases you cannot take.",
      },
    ],
    useCases: [
      {
        title: "The Evening Divorce Discovery",
        description:
          "A spouse finds divorce papers in a desk drawer at 8 PM. They want to talk to a lawyer now. The AI answers, provides reassurance, captures their situation, and books a morning consultation. Without AI, they would have called 5 firms and hired whoever answered first.",
      },
      {
        title: "The Custody Emergency on a Weekend",
        description:
          "A parent learns their ex is planning to move out of state with their child. It is Saturday afternoon. The AI captures the urgency, gathers key details, and flags it for an emergency Monday callback. The client feels heard and waits for your call instead of hiring another firm.",
      },
      {
        title: "The High-Volume Family Law Practice",
        description:
          "A 5-attorney family law firm gets 40 calls per day. Staff handles 30. The AI handles the other 10 and books 4 consultations that would have been lost. At $3,500 average retainer, that is $14,000 per day in recovered revenue potential.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle emotionally distressed callers appropriately?",
        answer:
          "Yes. It is trained to be empathetic, patient, and reassuring. It acknowledges the difficulty of the situation and guides callers through intake questions gently. It never feels robotic or dismissive.",
      },
      {
        question: "How does it handle custody versus divorce versus support inquiries?",
        answer:
          "It asks what brings them in and routes the conversation accordingly. Different case types get different qualifying questions and are flagged for the appropriate attorney.",
      },
      {
        question: "Can it capture opposing party information for conflict checks?",
        answer:
          "Yes. It asks for the other party's name during intake so your team can run conflict checks before investing consultation time.",
      },
      {
        question: "Will it explain our fee structure?",
        answer:
          "It shares whatever information you authorize — consultation fees, retainer ranges, payment plan options. You control exactly how much pricing information is disclosed.",
      },
    ],
    reviewIndices: [],
  },

  "legal/estate-planning": {
    slug: "estate-planning",
    parentSlug: "legal",
    name: "Estate Planning",
    title: "AI Front Desk for Estate Planning Attorneys",
    metaDescription:
      "Stop losing estate planning clients to slow follow-up. AI Peak Biz answers every call, explains your services, and books consultations for wills, trusts, and probate.",
    heroHeadline:
      "Envision a practice where every person ready to protect their family actually books a meeting.",
    heroSubhead:
      "Most people think about estate planning for months before acting. When they finally call, they are ready. If your office does not answer, that motivation evaporates and they put it off another year. AI Peak Biz ensures you capture every ready prospect the moment they reach out.",
    problems: [
      {
        title: "Ready Prospects Lost to Voicemail",
        description:
          "Estate planning is a considered decision. People think about it for months before calling. When they finally act, they call one firm. If you do not answer, they do not leave a message — they procrastinate for another 6 months. You just lost a $3,000 trust package to inaction.",
        cost: "Typical loss: $5,000 to $15,000 per month in lost flat-fee engagements",
      },
      {
        title: "Low Conversion From Seminars and Workshops",
        description:
          "You host estate planning seminars that draw 30 to 50 attendees. But converting attendees to consultations requires follow-up within 48 hours. Your staff manages to call 20 percent. The rest cool off and never schedule.",
        cost: "Typical loss: $10,000 to $30,000 per event in unconverted attendees",
      },
      {
        title: "Existing Clients Never Update Their Plans",
        description:
          "Life changes — new grandchildren, divorces, asset changes — require estate plan updates. But clients never think to call. Without proactive outreach, you miss thousands in update fees from your existing client base every year.",
        cost: "Typical loss: $8,000 to $20,000 per year in update revenue",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every call and explains your estate planning services — wills, trusts, powers of attorney, probate. It answers common questions and books consultations without your staff being interrupted.",
      },
      {
        title: "Seminar Follow-Up Automation",
        description:
          "Every seminar attendee receives a personalized follow-up call or text within 24 hours. The AI answers questions that arose during the event and books consultations while motivation is high.",
      },
      {
        title: "Life Event Triggered Outreach",
        description:
          "Annual check-in messages to existing clients ask about life changes. Those who respond are booked for plan review consultations. Your existing client base becomes a reliable revenue stream.",
      },
    ],
    useCases: [
      {
        title: "The Seminar That Actually Converts",
        description:
          "An estate planning attorney hosts a monthly seminar with 40 attendees. Previously, 6 booked consultations. With AI follow-up within 24 hours, 18 book. At $2,500 average engagement, that is an additional $30,000 per seminar.",
      },
      {
        title: "The After-Hours Call From a New Parent",
        description:
          "A new father decides at 9 PM that he needs a will. He calls your firm. The AI answers, explains your services, and books a consultation for the next week. Without AI, he would have put it off indefinitely.",
      },
      {
        title: "Existing Client Plan Updates",
        description:
          "Annual outreach to 500 existing clients surfaces 40 who need plan updates. At $800 average update fee, that is $32,000 in revenue from clients who would never have called on their own.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain the difference between wills and trusts?",
        answer:
          "Yes. It provides clear, plain-language explanations of your service options — wills, revocable trusts, irrevocable trusts, powers of attorney. It educates without providing legal advice.",
      },
      {
        question: "How does it handle probate inquiries versus estate planning?",
        answer:
          "It distinguishes between someone planning ahead and someone dealing with a recent death. Each gets a different intake flow and appropriate empathy for their situation.",
      },
      {
        question: "Can it quote our flat-fee packages?",
        answer:
          "Yes. If you offer flat-fee packages for wills, trusts, or estate plans, the AI shares pricing and helps prospects understand what is included. Transparency builds trust and increases booking rates.",
      },
      {
        question: "Will it work for a solo estate planning attorney?",
        answer:
          "Absolutely. Solo practitioners benefit the most because the AI handles all intake and follow-up tasks that would otherwise require a full-time assistant.",
      },
    ],
    reviewIndices: [],
  },

  "legal/criminal-defense": {
    slug: "criminal-defense",
    parentSlug: "legal",
    name: "Criminal Defense",
    title: "AI Front Desk for Criminal Defense Attorneys",
    metaDescription:
      "Stop losing criminal defense cases to missed calls. AI Peak Biz provides 24/7 intake for DUI, drug, assault, and felony cases. Every call answered, every lead captured.",
    heroHeadline:
      "Envision a practice where every person facing charges reaches you the moment they need help.",
    heroSubhead:
      "Someone just got arrested at 2 AM. Their family is panicking, searching for a lawyer on their phone. If your firm does not answer, they call the next result on Google. AI Peak Biz builds a 24/7 intake system that captures every urgent call, qualifies the case, and gives families immediate reassurance.",
    problems: [
      {
        title: "Arrests Happen at All Hours",
        description:
          "Criminal cases start at 2 AM on a Saturday, not 9 AM on a Monday. When a family member searches for a defense attorney after an arrest, they call multiple firms. The first one to answer gets hired. If your intake is only available 40 hours per week, you miss 75 percent of these urgent calls.",
        cost: "Typical loss: $15,000 to $60,000 per month in lost retainer fees",
      },
      {
        title: "High Ad Costs With Low Conversion",
        description:
          "Criminal defense keywords cost $75 to $200 per click. If those clicks turn into calls that go to voicemail, you are burning money. A 30 percent miss rate on a $20,000/month ad budget means $6,000 wasted every month.",
        cost: "Typical loss: $6,000 to $15,000 per month in wasted ad spend",
      },
      {
        title: "Callers Hire the First Firm That Answers",
        description:
          "Criminal defense is the most time-sensitive practice area. Defendants and their families are scared and want immediate help. They do not shop around leisurely. Research shows 72 percent hire the first attorney they actually speak with.",
        cost: "Typical loss: $10,000 to $40,000 per month in cases signed by faster competitors",
      },
    ],
    solutions: [
      {
        title: "24/7 AI Intake With Urgency Detection",
        description:
          "Your AI answers every call at any hour. It identifies arrest situations, captures charge details, booking information, and court dates. Urgent cases trigger an immediate attorney notification. Families get reassurance that help is on the way.",
      },
      {
        title: "Instant Web Lead Follow-Up",
        description:
          "Website form fills get a call or text within 60 seconds. The AI gathers case details and books a consultation before the prospect contacts another firm. Your expensive ad spend converts at maximum efficiency.",
      },
      {
        title: "Family Communication System",
        description:
          "Family members calling about a loved one's case get professional updates and reassurance. They feel informed and connected to your firm, which prevents them from seeking a second opinion elsewhere.",
      },
    ],
    useCases: [
      {
        title: "The 3 AM DUI Arrest",
        description:
          "A man is arrested for DUI at 3 AM. His wife calls your firm at 3:30 AM. The AI answers, captures the arrest details, explains the next steps, and assures her that the attorney will call at 8 AM. She stops calling other firms. You sign a $5,000 retainer the next morning.",
      },
      {
        title: "The High-Volume DUI Practice",
        description:
          "A DUI-focused firm spending $30K/month on Google Ads gets 150 calls per week. Staff misses 40. The AI handles all 40, qualifies 25 as viable cases, and books consultations. At $4,000 average retainer, that is $100,000 per week in additional case potential.",
      },
      {
        title: "The Solo Criminal Defense Attorney",
        description:
          "A solo practitioner in court all day cannot answer calls until 5 PM. By then, morning callers have already hired someone. The AI answers during court hours, captures every case, and the attorney returns calls during breaks to sign retained clients.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle panicked family members calling about an arrest?",
        answer:
          "Yes. It is trained to be calm, reassuring, and informative. It explains typical next steps, what to expect, and assures them that the attorney will be in touch. Families feel immediate relief.",
      },
      {
        question: "Does it capture enough detail for the attorney to assess the case?",
        answer:
          "It gathers charge type, arrest circumstances, court date, bond status, and prior criminal history. The attorney has everything needed to evaluate the case before calling back.",
      },
      {
        question: "How does it handle cases outside our practice area?",
        answer:
          "If a caller needs civil representation or a practice area you do not handle, the AI explains that politely and can provide referral information if configured.",
      },
      {
        question: "Can it provide basic information about bond and court procedures?",
        answer:
          "Yes. It shares general information about how bond works, what to expect at arraignment, and typical timelines. It clarifies this is general information, not legal advice.",
      },
    ],
    reviewIndices: [],
  },

  "legal/business-law": {
    slug: "business-law",
    parentSlug: "legal",
    name: "Business Law",
    title: "AI Front Desk for Business Law Firms",
    metaDescription:
      "Stop losing business law clients to slow intake. AI Peak Biz answers every call, qualifies corporate needs, and books consultations for contracts, formations, and disputes.",
    heroHeadline:
      "Envision a practice where every business owner needing legal help connects with you instantly.",
    heroSubhead:
      "A business owner just received a demand letter. Another needs a partnership agreement reviewed before signing tomorrow. They call your firm during their lunch break — the only free time they have. If you do not answer, they call someone who will. AI Peak Biz ensures you capture every time-sensitive business law prospect.",
    problems: [
      {
        title: "Business Owners Call During Their Limited Free Time",
        description:
          "Business owners are busy running their companies. They carve out 5 minutes between meetings to call a lawyer. If your firm does not answer in that window, they move on. Unlike consumer clients, they will not call back — they will have their assistant find someone else.",
        cost: "Typical loss: $8,000 to $25,000 per month in lost engagements",
      },
      {
        title: "Slow Response Loses Transactional Work",
        description:
          "Business law is often transactional and time-sensitive — contracts need review before signing, entities need formation before a deal closes. If you respond 24 hours later, the client found someone faster. Speed signals competence to business clients.",
        cost: "Typical loss: $10,000 to $35,000 per month in lost transactional fees",
      },
      {
        title: "Existing Clients Do Not Know Your Full Service Range",
        description:
          "Your corporate client uses you for contracts but does not know you handle employment law, IP, or M&A. Without proactive communication about your capabilities, they hire other firms for work you could easily handle.",
        cost: "Typical loss: $15,000 to $50,000 per year in cross-sell revenue",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Business Callers",
        description:
          "Your AI answers with the professionalism business owners expect. It understands corporate needs — formations, contracts, disputes, compliance — and routes callers to the right practice group or books consultations directly.",
      },
      {
        title: "Urgency-Based Routing",
        description:
          "Time-sensitive matters like pending contract deadlines, demand letters, or litigation threats are flagged for immediate attorney callback. Routine matters get standard scheduling.",
      },
      {
        title: "Client Cross-Sell Automation",
        description:
          "Periodic outreach to existing clients highlights services they may not know about. A quarterly newsletter or check-in call surfaces needs they would have taken elsewhere.",
      },
    ],
    useCases: [
      {
        title: "The Demand Letter Response",
        description:
          "A small business owner receives a cease and desist letter on a Tuesday. They call your firm during lunch. The AI answers, captures the deadline and nature of the dispute, and books a same-day consultation. Without AI, they would have called 3 firms and hired whoever answered first.",
      },
      {
        title: "The Entity Formation Rush",
        description:
          "An entrepreneur closing a deal needs an LLC formed by Friday. They call Wednesday afternoon. The AI captures the details and flags it as time-sensitive. The attorney calls back within an hour and handles the formation. $2,500 in fees that would have gone to LegalZoom.",
      },
      {
        title: "Cross-Selling Employment Law to Corporate Clients",
        description:
          "A quarterly check-in to 100 corporate clients asks about upcoming employment changes, new hires, or compliance concerns. 8 clients surface needs for employment agreements or handbook updates. $40,000 in additional fees from existing relationships.",
      },
    ],
    faq: [
      {
        question: "Can the AI distinguish between different business law needs?",
        answer:
          "Yes. It asks about the nature of the matter — contracts, disputes, formations, compliance, employment — and routes accordingly. Each gets different intake questions tailored to that practice area.",
      },
      {
        question: "How does it handle existing client calls versus new prospects?",
        answer:
          "It identifies returning clients, acknowledges the existing relationship, and provides priority routing. New prospects go through qualification. Both get excellent service.",
      },
      {
        question: "Can it handle confidential or sensitive business matters?",
        answer:
          "It captures only what is needed for intake and routing. Sensitive details are discussed attorney-to-client. All captured data is encrypted and access-controlled.",
      },
      {
        question: "Will business owners feel comfortable talking to an AI?",
        answer:
          "The AI is professional and efficient — exactly what business owners prefer. It respects their time, gets to the point, and books them quickly. Most prefer it to hold music and transfers.",
      },
    ],
    reviewIndices: [],
  },

  "legal/immigration": {
    slug: "immigration",
    parentSlug: "legal",
    name: "Immigration",
    title: "AI Front Desk for Immigration Law Firms",
    metaDescription:
      "Stop losing immigration clients to language barriers and missed calls. AI Peak Biz provides bilingual 24/7 intake for visa, green card, and asylum cases.",
    heroHeadline:
      "Envision a practice where every immigrant seeking help connects with you — in their language, at any hour.",
    heroSubhead:
      "An H-1B worker just received an RFE with a 30-day deadline. A family needs help with a green card petition. They call after work at 7 PM because that is when they are free. If your office is closed, they ask their community for referrals instead. AI Peak Biz builds a bilingual AI intake system that serves your clients when they need you.",
    problems: [
      {
        title: "After-Hours Calls From Working Immigrants",
        description:
          "Immigration clients often work long hours and cannot call during business hours. They call at 7 PM, on weekends, or during lunch breaks. If your office only takes calls 9 to 5, you miss a huge segment of your market. These callers rarely leave voicemails — they ask friends for a referral instead.",
        cost: "Typical loss: $8,000 to $30,000 per month in lost case fees",
      },
      {
        title: "Language Barriers at Intake",
        description:
          "Your receptionist speaks English and maybe Spanish. But your clients speak Mandarin, Hindi, Vietnamese, Portuguese. When a potential client cannot communicate their needs at intake, they hang up frustrated and find a firm with bilingual staff.",
        cost: "Typical loss: $5,000 to $15,000 per month in language-blocked leads",
      },
      {
        title: "Deadline-Driven Cases Require Immediate Response",
        description:
          "RFEs, NOID notices, and filing deadlines create urgency. When a client receives a 30-day deadline notice, they need to reach their attorney today — not next week. Slow response leads to missed deadlines and malpractice risk.",
        cost: "Typical loss: $10,000 to $25,000 per month in cases lost to competitors",
      },
    ],
    solutions: [
      {
        title: "Bilingual AI Intake System",
        description:
          "Your AI conducts full intake conversations in English, Spanish, and other languages your clients speak. It captures visa type, current status, deadline information, and family details. Every caller is served in their preferred language.",
      },
      {
        title: "Deadline Detection and Priority Routing",
        description:
          "When a caller mentions an RFE, NOID, or approaching deadline, the AI flags it as urgent and ensures same-day attorney notification. Time-sensitive cases never sit in a queue.",
      },
      {
        title: "Community Referral Tracking",
        description:
          "When callers mention who referred them, the AI logs it. You see which community organizations, past clients, and partners are sending business. You can nurture those relationships strategically.",
      },
    ],
    useCases: [
      {
        title: "The Evening H-1B Emergency",
        description:
          "A software engineer receives an RFE on their H-1B petition at 6:30 PM. They call your firm. The AI answers, identifies the urgency, captures the deadline, and ensures an attorney calls back by 9 AM. Without AI, the engineer would have posted in an online forum asking for recommendations.",
      },
      {
        title: "The Spanish-Speaking Family Needing Green Card Help",
        description:
          "A family wants to petition for a relative's green card. They speak limited English. The AI conducts the entire intake in Spanish, captures family relationship details, and books a consultation. They feel welcomed and understood.",
      },
      {
        title: "The High-Volume Immigration Practice",
        description:
          "An immigration firm handling 300 active cases gets 60 calls per day. Staff handles 40 in English and Spanish. The AI handles the other 20 across multiple languages and books 8 new consultations per day. At $3,000 average case fee, that is $24,000 per day in new case potential.",
      },
    ],
    faq: [
      {
        question: "What languages does the AI support?",
        answer:
          "It supports English, Spanish, Mandarin, Hindi, Vietnamese, Portuguese, and others. We configure it for the languages your client base speaks most frequently.",
      },
      {
        question: "Can it explain different visa categories and processes?",
        answer:
          "It provides general information about visa types, green card processes, and asylum procedures. It explains what documentation is typically needed and what to expect. It does not provide legal advice.",
      },
      {
        question: "How does it handle asylum cases sensitively?",
        answer:
          "Asylum intake is handled with care and empathy. The AI acknowledges the difficulty of the caller's situation and captures only essential information without re-traumatizing them.",
      },
      {
        question: "Can it determine if someone qualifies for a specific visa?",
        answer:
          "It asks screening questions about education, employment, family relationships, and timeline. This helps the attorney assess eligibility before the consultation, but the AI does not make legal determinations.",
      },
    ],
    reviewIndices: [],
  },

  // ─── FINANCIAL ─────────────────────────────────────────────────────────────────
  "financial/financial-advisors": {
    slug: "financial-advisors",
    parentSlug: "financial",
    name: "Financial Advisors",
    title: "AI Front Desk for Financial Advisors",
    metaDescription:
      "Stop losing high-net-worth prospects to slow response. AI Peak Biz answers every call, qualifies by assets, and books meetings for financial advisors.",
    heroHeadline:
      "Envision a practice where every high-value prospect gets white-glove service from the first call.",
    heroSubhead:
      "A retiree with $2M in assets calls your office to discuss wealth management. Your team is in client meetings. The call goes to voicemail. That $20,000/year advisory fee walks across the street. AI Peak Biz builds an AI front desk that provides premium responsiveness to every prospect, qualifying by assets and booking meetings instantly.",
    problems: [
      {
        title: "High-Net-Worth Prospects Expect Immediate Service",
        description:
          "Affluent prospects judge your firm by the first interaction. If they get voicemail, they assume you are too small or too disorganized to manage their wealth. They expect the responsiveness of a private bank. Every missed call is potentially $15,000 to $50,000 in annual advisory fees lost.",
        cost: "Typical loss: $15,000 to $50,000 per missed high-net-worth prospect",
      },
      {
        title: "Referrals That Never Connect",
        description:
          "Your best clients refer friends and family. Those referred prospects call once. If they do not reach someone knowledgeable, they never call again. Your referral source is embarrassed. The referral pipeline dries up.",
        cost: "Typical loss: $20,000 to $80,000 per quarter in lost referral AUM",
      },
      {
        title: "Existing Clients Cannot Reach You During Volatility",
        description:
          "When markets drop 5 percent in a day, every client calls. Your team of 3 cannot handle 50 calls in 2 hours. Clients who cannot reach you panic and call another advisor. You lose assets under management during the moments that matter most.",
        cost: "Typical loss: $50,000 to $200,000 in AUM during market events",
      },
    ],
    solutions: [
      {
        title: "Premium AI Voice Assistant",
        description:
          "Your AI answers with the polish of a private wealth receptionist. It qualifies prospects by investable assets, retirement timeline, and financial goals. Only qualified prospects reach your calendar. Everyone gets a premium experience.",
      },
      {
        title: "Market Volatility Response System",
        description:
          "During market events, your AI handles the surge. It reassures existing clients with pre-approved messaging, schedules callback times with their advisor, and prevents panic-driven asset withdrawals.",
      },
      {
        title: "Referral Priority Handling",
        description:
          "When a caller mentions a referral, the AI provides VIP treatment — immediate acknowledgment, priority scheduling, and notification to the referring client that their friend is being taken care of.",
      },
    ],
    useCases: [
      {
        title: "The $3M Rollover Prospect",
        description:
          "A newly retired executive with a $3M 401(k) to roll over calls during your team meeting. The AI answers, qualifies the opportunity, and books a same-day callback. Without AI, the executive calls the wirehouse down the street. At 1% AUM fee, that is $30,000/year in recurring revenue saved.",
      },
      {
        title: "The Market Crash Day",
        description:
          "The S&P drops 4 percent. Your 200 clients all want reassurance. The AI handles 150 calls with pre-approved calming messages and books 30 callback slots. No client feels ignored. Zero assets leave the firm.",
      },
      {
        title: "The Client Appreciation Event Follow-Up",
        description:
          "After a client appreciation event, 15 guests express interest in your services. The AI follows up within 24 hours, qualifies each by assets, and books 8 introductory meetings. $4M in new AUM from a single event.",
      },
    ],
    faq: [
      {
        question: "Can the AI qualify prospects by investable assets?",
        answer:
          "Yes. It asks about investable assets, retirement timeline, and financial goals in a natural, non-intrusive way. Only prospects meeting your minimums get booked. Others receive helpful resources.",
      },
      {
        question: "Is it compliant with financial industry regulations?",
        answer:
          "The AI does not provide investment advice or make recommendations. It handles scheduling and qualification only. All scripts are reviewable for compliance with your firm's CCO.",
      },
      {
        question: "How does it handle existing client calls during market events?",
        answer:
          "It identifies existing clients, delivers pre-approved reassurance messaging, and schedules callback times. It reduces call volume on your team while keeping clients calm.",
      },
      {
        question: "Will high-net-worth prospects feel comfortable with AI?",
        answer:
          "The experience is polished and efficient. Affluent prospects value their time — they appreciate being qualified quickly and getting on the advisor's calendar without phone tag.",
      },
    ],
    reviewIndices: [],
  },

  "financial/insurance-agents": {
    slug: "insurance-agents",
    parentSlug: "financial",
    name: "Insurance Agents",
    title: "AI Front Desk for Insurance Agents",
    metaDescription:
      "Stop losing policy renewals and quote requests to missed calls. AI Peak Biz answers every insurance inquiry, captures details, and books appointments 24/7.",
    heroHeadline:
      "Envision an agency where every quote request and renewal call is handled — even when your office is closed.",
    heroSubhead:
      "A homeowner just bought a house and needs coverage before closing on Friday. They call at 6 PM. Your office closed at 5. They get a quote from an online carrier in 3 minutes. You never had a chance to compete. AI Peak Biz builds a system that captures every quote request, policy question, and renewal opportunity around the clock.",
    problems: [
      {
        title: "Quote Requests Lost to After-Hours Calls",
        description:
          "Insurance shopping happens after work hours. Homebuyers, car buyers, and business owners call when they have time — evenings and weekends. If your agency is closed, online carriers capture that business instantly. You cannot compete on convenience without 24/7 availability.",
        cost: "Typical loss: $5,000 to $20,000 per month in lost policy premiums",
      },
      {
        title: "Policy Renewals Falling Through the Cracks",
        description:
          "Clients whose policies are up for renewal need a touchpoint 30 to 60 days before expiration. Without automated outreach, some forget and let policies lapse. Others shop around without giving you a chance to retain them. Renewal retention drives agency profitability.",
        cost: "Typical loss: $8,000 to $25,000 per quarter in lost renewal commissions",
      },
      {
        title: "Claims Calls Overwhelming Your Staff",
        description:
          "When a storm hits, every client calls at once. Your staff cannot handle 100 claims calls in a day. Clients who cannot reach you feel abandoned during their worst moments. Some switch agencies after the claim is settled.",
        cost: "Typical loss: $10,000 to $30,000 per event in post-claim attrition",
      },
    ],
    solutions: [
      {
        title: "24/7 AI Quote Capture",
        description:
          "Your AI answers after-hours calls and captures all details needed to prepare a quote — property type, coverage needs, driving records, business details. Your team comes in the next morning with ready-to-quote leads instead of voicemails.",
      },
      {
        title: "Renewal Retention Automation",
        description:
          "60 days before each renewal, automated outreach contacts clients to review coverage, discuss changes, and lock in the renewal. Clients feel attended to and competitors never get a chance to undercut you.",
      },
      {
        title: "Storm and Event Response System",
        description:
          "During catastrophic events, the AI handles the surge. It captures claim details, provides filing instructions, and schedules adjuster callbacks. No client sits on hold for 45 minutes.",
      },
    ],
    useCases: [
      {
        title: "The Evening Home Purchase",
        description:
          "A first-time homebuyer needs homeowners insurance before closing Friday. They call your agency Tuesday at 7 PM. The AI captures property details, coverage needs, and mortgage requirements. Your team calls Wednesday morning with a quote. Without AI, they would have bought from an online carrier.",
      },
      {
        title: "The Renewal Retention Campaign",
        description:
          "An agency with 2,000 policies runs automated renewal outreach. Previously, 88 percent renewed. With proactive contact, 94 percent renew. On $1,200 average annual premium with 12 percent commission, those 120 saved policies equal $17,280 in retained annual commission.",
      },
      {
        title: "The Hailstorm Claims Surge",
        description:
          "A major hailstorm generates 80 claims calls in one day. The AI handles 60, captures damage details, starts the claims process, and schedules callbacks. No client waits more than 2 minutes. Post-event retention stays at 97 percent instead of dropping to 85 percent.",
      },
    ],
    faq: [
      {
        question: "Can the AI provide quotes?",
        answer:
          "It does not provide quotes directly, but it captures all information needed to prepare a quote — property details, driving records, coverage preferences. Your team can prepare quotes before calling the prospect back.",
      },
      {
        question: "How does it handle claims calls?",
        answer:
          "It captures claim details — what happened, when, damage description, photos needed. It provides next-step instructions and schedules a callback with your team. Clients feel supported immediately.",
      },
      {
        question: "Will it work with my agency management system?",
        answer:
          "Yes. It integrates with Applied Epic, Hawksoft, EZLynx, and most other agency management systems. Lead and claim data flows directly into your existing workflow.",
      },
      {
        question: "Can it handle commercial and personal lines?",
        answer:
          "Absolutely. It asks different qualifying questions based on whether the caller needs personal auto, homeowners, commercial property, workers comp, or other lines. Each gets a tailored intake flow.",
      },
    ],
    reviewIndices: [],
  },

  "financial/mortgage-brokers": {
    slug: "mortgage-brokers",
    parentSlug: "financial",
    name: "Mortgage Brokers",
    title: "AI Front Desk for Mortgage Brokers",
    metaDescription:
      "Stop losing mortgage leads to slow follow-up. AI Peak Biz captures every rate inquiry, pre-qualifies borrowers, and books consultations before competitors respond.",
    heroHeadline:
      "Envision a brokerage where every rate shopper connects with you before they call the next lender.",
    heroSubhead:
      "A homebuyer gets pre-approved by their bank at 4.5 percent and wants to see if you can beat it. They call after seeing your ad. If you do not answer, they call the next broker on Google. Within an hour, they have chosen someone else. AI Peak Biz ensures you capture every rate shopper the moment they reach out.",
    problems: [
      {
        title: "Rate Shoppers Move Fast",
        description:
          "Mortgage shoppers contact 3 to 5 lenders simultaneously. The first to respond with a compelling conversation wins the application 65 percent of the time. If your response takes more than 15 minutes, you have already lost. Borrowers do not wait.",
        cost: "Typical loss: $8,000 to $30,000 per month in lost origination fees",
      },
      {
        title: "After-Hours Calls From Motivated Buyers",
        description:
          "Homebuyers tour houses on weekends and call about mortgage options in the evening. If your office is closed, they apply with an online lender that same night. You never had a conversation. Those are your highest-intent leads going to Rocket Mortgage.",
        cost: "Typical loss: $10,000 to $25,000 per month in lost weekend/evening leads",
      },
      {
        title: "Realtor Referrals That Go Cold",
        description:
          "Realtors refer buyers to you expecting instant service. If their client calls and gets voicemail, the realtor hears about it. After 2 bad experiences, they stop referring. Your realtor pipeline — your best lead source — dries up because of intake failures.",
        cost: "Typical loss: $15,000 to $50,000 per quarter in lost referral volume",
      },
    ],
    solutions: [
      {
        title: "Instant AI Lead Response",
        description:
          "Every call and form submission gets an immediate response. The AI captures loan purpose, property type, credit range, and timeline. It pre-qualifies the borrower and books a consultation — all within 3 minutes of first contact.",
      },
      {
        title: "Realtor Relationship Management",
        description:
          "When a caller mentions a realtor referral, the AI provides priority treatment and notifies the referring agent that their client is being helped. Realtors see you as responsive and reliable. Referrals increase.",
      },
      {
        title: "Pipeline Nurture for Rate Watchers",
        description:
          "Prospects waiting for rates to drop enter a nurture sequence. When rates move in their favor, they get an alert and a booking link. You stay top-of-mind through the entire rate cycle.",
      },
    ],
    useCases: [
      {
        title: "The Saturday Open House Lead",
        description:
          "A buyer tours a house on Saturday, falls in love, and calls you at 4 PM for pre-approval. The AI answers, captures income and credit details, confirms likely qualification, and books a Monday morning call. Without AI, they would have applied with Quicken Loans that evening.",
      },
      {
        title: "The Realtor Referral That Converts Same-Day",
        description:
          "A top-producing realtor refers a buyer at 2 PM. The AI answers the buyer's call within 60 seconds, pre-qualifies them, and books a same-day phone consultation. The realtor gets a confirmation text that their client is being handled. Referral relationship strengthened.",
      },
      {
        title: "The Refinance Wave",
        description:
          "Rates drop half a point. Your pipeline of 200 rate watchers all get an automated alert. 40 respond and book consultations. At $4,000 average origination fee, that is $160,000 in potential revenue from a single rate movement.",
      },
    ],
    faq: [
      {
        question: "Can the AI discuss rates and loan products?",
        answer:
          "It provides general information about your loan products and current rate ranges. It does not quote specific rates — that happens during the advisor consultation. It focuses on qualifying the borrower and booking the meeting.",
      },
      {
        question: "How does it pre-qualify borrowers?",
        answer:
          "It asks about income range, credit score range, down payment amount, and property type. This gives you enough to assess viability before the consultation. Full qualification happens with you.",
      },
      {
        question: "Will it work with my LOS (Loan Origination System)?",
        answer:
          "Yes. It integrates with Encompass, Calyx, BytePro, and most other systems. Lead data flows directly into your pipeline without manual entry.",
      },
      {
        question: "Can it handle both purchase and refinance inquiries?",
        answer:
          "Yes. It asks different questions based on whether the caller is buying or refinancing. Purchase leads get urgency-based scheduling. Refinance leads get rate-watch nurturing if timing is not immediate.",
      },
    ],
    reviewIndices: [],
  },

  "financial/tax-preparers": {
    slug: "tax-preparers",
    parentSlug: "financial",
    name: "Tax Preparers",
    title: "AI Front Desk for Tax Preparers",
    metaDescription:
      "Stop losing tax clients to missed calls during filing season. AI Peak Biz answers every inquiry, books appointments, and keeps your schedule full January through April.",
    heroHeadline:
      "Envision a tax practice where every call is answered — even in the middle of the February rush.",
    heroSubhead:
      "It is February 15th. Your office is buried in W-2s and 1099s. The phone has rung 30 times today and you have answered 18. Those 12 missed callers? They are booking with the tax shop in the strip mall. AI Peak Biz builds a system that answers every call, books every appointment, and keeps your chair full all season.",
    problems: [
      {
        title: "Overwhelming Call Volume During Tax Season",
        description:
          "From January through April, a typical tax preparer gets 3 to 5 times normal call volume. You are heads-down in returns. The phone rings constantly. Every missed call is a client who walks into H&R Block instead. The seasonal window is short and unforgiving.",
        cost: "Typical loss: $5,000 to $20,000 per month during filing season",
      },
      {
        title: "Existing Clients Who Do Not Rebook",
        description:
          "Last year's clients fully intend to come back. But without a reminder in January, they procrastinate. By mid-February, their co-worker mentions a new preparer. Without proactive outreach, you lose 10 to 15 percent of your base annually to passive churn.",
        cost: "Typical loss: $8,000 to $20,000 per year in client attrition",
      },
      {
        title: "Year-Round Services Go Unpromoted",
        description:
          "You offer bookkeeping, tax planning, and quarterly estimates, but clients only think of you in April. Without year-round engagement, you miss thousands in additional revenue from your existing client base.",
        cost: "Typical loss: $10,000 to $30,000 per year in unrealized service revenue",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Tax Season",
        description:
          "Your AI handles every call during the rush. It books appointments, answers questions about required documents, and provides status updates on returns in progress. Your team stays focused on preparing returns.",
      },
      {
        title: "Automated Client Reactivation",
        description:
          "Starting in December, your system contacts prior-year clients with booking links. Early birds fill your January schedule. By February, you are already at capacity instead of scrambling.",
      },
      {
        title: "Year-Round Service Promotion",
        description:
          "Quarterly check-ins promote tax planning, estimated payments, and bookkeeping services. Clients engage with you 4 times per year instead of once.",
      },
    ],
    useCases: [
      {
        title: "The February Rush Management",
        description:
          "A solo tax preparer handles 300 returns per season. In February, they get 25 calls per day but can only answer 10. The AI handles the other 15, books 8 new appointments, and captures 4 document-related questions. No revenue is lost to missed calls.",
      },
      {
        title: "The December Reactivation Campaign",
        description:
          "A tax office contacts 400 prior-year clients in December. 280 book online immediately. 60 more book after AI follow-up calls. The January schedule is 85 percent full before the season even starts.",
      },
      {
        title: "The Year-Round Revenue Builder",
        description:
          "Quarterly outreach to 300 clients promotes tax planning consultations. 20 clients per quarter book planning sessions at $250 each. That is $20,000 in non-seasonal revenue.",
      },
    ],
    faq: [
      {
        question: "Can the AI answer questions about required documents?",
        answer:
          "Yes. It knows what documents are needed for different return types — W-2s, 1099s, mortgage interest, childcare receipts. It provides document checklists to callers so they come prepared.",
      },
      {
        question: "Can it provide return status updates?",
        answer:
          "If integrated with your system, it can provide basic status updates — received, in progress, ready for review, filed. Clients get answers without interrupting your work.",
      },
      {
        question: "How does it handle extension requests?",
        answer:
          "It explains the extension process, captures the client's information, and flags it for your team. Extensions get processed without a phone tag cycle.",
      },
      {
        question: "Will it work for a seasonal tax business?",
        answer:
          "Absolutely. You can scale usage up during tax season and down during summer. The system adapts to your business cycle without locking you into year-round costs you do not need.",
      },
    ],
    reviewIndices: [],
  },

  "financial/investment-firms": {
    slug: "investment-firms",
    parentSlug: "financial",
    name: "Investment Firms",
    title: "AI Front Desk for Investment Firms",
    metaDescription:
      "Stop losing accredited investor leads to slow intake. AI Peak Biz qualifies prospects by net worth, captures investment interests, and books meetings with your team.",
    heroHeadline:
      "Envision a firm where every accredited investor inquiry gets immediate, professional attention.",
    heroSubhead:
      "An accredited investor hears about your fund at a dinner party. They call the next day to learn more. Your team is in meetings. The call goes to voicemail. They invest with someone else. AI Peak Biz builds a system that provides immediate engagement, qualifies by accreditation, and gets prospects in front of your team fast.",
    problems: [
      {
        title: "Accredited Investor Inquiries Go Unanswered",
        description:
          "Investment firms live on relationships. When a qualified investor calls to learn about your fund or service, voicemail signals you are not serious or not large enough. They expect white-glove treatment from the first interaction. One missed call can cost a $500K investment.",
        cost: "Typical loss: $50,000 to $250,000 per missed accredited investor",
      },
      {
        title: "Event and Webinar Follow-Up Falls Behind",
        description:
          "You host investor dinners, webinars, and educational events. 40 attendees express interest. Your team calls 15 within 48 hours. The other 25 get called a week later — by then, they have moved on. Slow follow-up kills event ROI.",
        cost: "Typical loss: $100,000 to $500,000 per event in unconverted prospects",
      },
      {
        title: "Existing Investors Cannot Reach You During Market Stress",
        description:
          "When markets drop or a fund reports poor quarterly results, every investor wants to talk to someone. If they cannot reach your team within 24 hours, they start planning their exit. Communication during stress is the difference between retention and redemption.",
        cost: "Typical loss: $200,000 to $1M+ in AUM during market events",
      },
    ],
    solutions: [
      {
        title: "Premium AI Reception",
        description:
          "Your AI provides the polished, professional experience accredited investors expect. It qualifies by investment capacity, captures their interests, and books meetings with the appropriate team member — all with the discretion high-net-worth individuals demand.",
      },
      {
        title: "Event Follow-Up Automation",
        description:
          "Within 24 hours of any event, every attendee receives a personalized follow-up. The AI answers follow-up questions, provides additional materials, and books one-on-one meetings while interest is at its peak.",
      },
      {
        title: "Investor Communication System",
        description:
          "During market stress, your AI handles incoming calls with pre-approved messaging. It provides reassurance, schedules callback times, and ensures no investor feels ignored during critical moments.",
      },
    ],
    useCases: [
      {
        title: "The Post-Dinner Follow-Up",
        description:
          "An investor dinner generates 20 qualified prospects. The AI follows up with all 20 within 24 hours, books 12 one-on-one meetings. 4 invest a total of $2M. Without automation, the team would have reached 8, booked 5, and closed 2.",
      },
      {
        title: "The Referral From an Existing Investor",
        description:
          "An existing investor refers a colleague with $1M to deploy. The referral calls your office during lunch. The AI answers, provides VIP treatment, and books a same-week meeting. The referring investor gets a thank-you notification. The relationship deepens.",
      },
      {
        title: "The Quarterly Earnings Call Aftermath",
        description:
          "After a tough quarter, 50 investors call with concerns. The AI handles 35, provides scripted reassurance, and schedules 20 callback meetings over 3 days. Zero investors redeem. The team addresses concerns systematically instead of in panic mode.",
      },
    ],
    faq: [
      {
        question: "Can the AI verify accredited investor status?",
        answer:
          "It asks screening questions about net worth and income that indicate likely accreditation. Formal verification happens during the compliance process. The AI ensures only qualified prospects reach your team.",
      },
      {
        question: "Is it compliant with SEC regulations?",
        answer:
          "The AI does not make investment recommendations or discuss performance. It handles scheduling, qualification, and general firm information only. All scripts are reviewed by compliance before going live.",
      },
      {
        question: "How does it handle confidential inquiries?",
        answer:
          "All interactions are encrypted and access-controlled. The AI captures only what is needed for qualification and routing. Sensitive investment discussions happen person-to-person.",
      },
      {
        question: "Can it distinguish between different investment products?",
        answer:
          "Yes. Whether callers are asking about private equity, real estate funds, hedge funds, or managed accounts, the AI routes them to the right team member and captures relevant qualifying information.",
      },
    ],
    reviewIndices: [],
  },

  // ─── REAL ESTATE ───────────────────────────────────────────────────────────────
  "real-estate/realtors": {
    slug: "realtors",
    parentSlug: "real-estate",
    name: "Realtors",
    title: "AI Front Desk for Realtors",
    metaDescription:
      "Stop losing buyer and seller leads to slow follow-up. AI Peak Biz responds to every inquiry instantly, qualifies prospects, and books showings while you sell houses.",
    heroHeadline:
      "Envision a real estate business where every lead gets a response in under 2 minutes — while you are showing houses.",
    heroSubhead:
      "You are mid-showing with a buyer when a hot seller lead calls. It goes to voicemail. They call the next agent on Zillow. That $12,000 commission is gone. AI Peak Biz builds a system that responds to every lead instantly — calls, texts, web forms — and books appointments while you focus on closing deals.",
    problems: [
      {
        title: "Leads Go Cold in Minutes",
        description:
          "Real estate leads from Zillow, Realtor.com, and your website expect instant response. Studies show responding within 5 minutes makes you 21 times more likely to connect. But you are showing houses, in inspections, or at closings. By the time you call back, they are working with another agent.",
        cost: "Typical loss: $10,000 to $40,000 per month in lost commissions",
      },
      {
        title: "Open House Leads Never Get Followed Up",
        description:
          "You collect 20 sign-in sheets at an open house. Monday comes and you are buried in transactions. You call 8, text 5, and the other 7 never hear from you. Those 7 leads cost you $500 each in marketing and time. They buy with another agent 6 months later.",
        cost: "Typical loss: $5,000 to $15,000 per open house in unconverted leads",
      },
      {
        title: "Past Clients Forget About You",
        description:
          "The average homeowner moves every 7 years. Without consistent touchpoints, your past clients cannot remember your name when the time comes. They Google 'realtor near me' instead of calling you. Your sphere dries up over time.",
        cost: "Typical loss: $15,000 to $50,000 per year in lost repeat and referral business",
      },
    ],
    solutions: [
      {
        title: "Instant Lead Response System",
        description:
          "Every lead from any source — Zillow, your website, Google, sign calls — gets a response within 60 seconds. The AI engages in conversation, qualifies their timeline and budget, and books a showing or consultation.",
      },
      {
        title: "Open House Follow-Up Automation",
        description:
          "Every open house visitor receives a personalized follow-up within 2 hours. The AI asks what they thought of the home, if they have others to see, and if they are working with an agent. Warm leads get priority scheduling.",
      },
      {
        title: "Sphere of Influence Nurture",
        description:
          "Past clients and your sphere receive consistent value-driven touchpoints — market updates, home value estimates, and check-ins. When they are ready to buy or sell, or know someone who is, you are the first call.",
      },
    ],
    useCases: [
      {
        title: "The Zillow Lead That Converts",
        description:
          "A buyer submits an inquiry on Zillow at 9 PM. The AI responds via text in 45 seconds, asks about their timeline and budget, and books a Saturday showing. The agent's close rate on Zillow leads jumps from 2 percent to 8 percent. At $8,000 average commission, each converted lead is worth $8,000.",
      },
      {
        title: "The Open House That Produces Listings",
        description:
          "An open house draws 25 visitors. AI follow-up identifies 3 who are thinking of selling. The agent books listing appointments for all 3. Two list their homes. That is $24,000 in commission from a single open house.",
      },
      {
        title: "The Past Client Referral Machine",
        description:
          "Monthly touchpoints to 200 past clients generate 2 referrals per month on average. At $9,000 average commission, that is $216,000 per year in referral-based business — all from automated relationship maintenance.",
      },
    ],
    faq: [
      {
        question: "Can the AI schedule showings?",
        answer:
          "Yes. It accesses your calendar availability and books showing appointments. It captures the buyer's preferences, budget, and timeline so you walk into the showing prepared.",
      },
      {
        question: "How does it handle listing inquiries versus buyer inquiries?",
        answer:
          "It asks the right qualifying questions for each. Sellers get asked about timeline, motivation, and property details. Buyers get asked about budget, pre-approval status, and preferred areas.",
      },
      {
        question: "Will it work with my CRM?",
        answer:
          "Yes. It integrates with Follow Up Boss, kvCORE, BoomTown, LionDesk, and most real estate CRMs. Every interaction is logged and leads flow directly into your pipeline.",
      },
      {
        question: "Can it handle sign calls from yard signs?",
        answer:
          "Absolutely. Callers from sign riders get an immediate property details response, plus qualification questions. Even if they do not buy that house, you have captured a buyer lead.",
      },
    ],
    reviewIndices: [],
  },

  "real-estate/property-management": {
    slug: "property-management",
    parentSlug: "real-estate",
    name: "Property Management",
    title: "AI Front Desk for Property Management Companies",
    metaDescription:
      "Stop losing tenants and owners to unreturned calls. AI Peak Biz handles maintenance requests, leasing inquiries, and owner communications 24/7.",
    heroHeadline:
      "Envision a property management company where every tenant, owner, and prospect gets an immediate response.",
    heroSubhead:
      "A pipe bursts at 11 PM. A prospective tenant wants to schedule a showing at 7 PM. An owner wants a status update on a vacancy. Your office handles 200 calls a day and misses 50. AI Peak Biz builds a system that handles every interaction — maintenance emergencies, leasing inquiries, and owner updates — around the clock.",
    problems: [
      {
        title: "Maintenance Calls Overwhelm Your Team",
        description:
          "Property management companies get flooded with maintenance requests. Tenants call about dripping faucets, broken AC, and lockouts at all hours. Your team triages 80 percent during business hours but the other 20 percent go unhandled until morning. Tenants feel neglected. Owners hear complaints.",
        cost: "Typical loss: $5,000 to $15,000 per month in tenant turnover from poor response",
      },
      {
        title: "Leasing Inquiries Go Unanswered",
        description:
          "Prospective tenants browse listings after work and call in the evening. If no one answers, they tour the next available property. Every missed leasing call extends your vacancy. At $1,500/month rent, every week of vacancy costs the owner $375.",
        cost: "Typical loss: $8,000 to $25,000 per month in extended vacancies across portfolio",
      },
      {
        title: "Owner Communication Gaps Cause Attrition",
        description:
          "Property owners leave management companies not because of bad management but because of poor communication. When owners cannot get updates on vacancies, maintenance costs, or lease renewals, they feel neglected and self-manage or switch companies.",
        cost: "Typical loss: $15,000 to $50,000 per year in lost management fees from owner attrition",
      },
    ],
    solutions: [
      {
        title: "24/7 Maintenance Request System",
        description:
          "Your AI takes maintenance calls around the clock. It captures the issue, assesses urgency, dispatches emergency vendors for true emergencies, and queues routine requests for next-day handling. Tenants feel heard. Your team is not woken at 3 AM for a dripping faucet.",
      },
      {
        title: "AI Leasing Assistant",
        description:
          "Every leasing inquiry gets an immediate response. The AI provides property details, pricing, availability, and schedules showings. Vacancies fill faster because no prospect goes unengaged.",
      },
      {
        title: "Automated Owner Updates",
        description:
          "Monthly owner reports, maintenance notifications, and lease renewal updates go out automatically. Owners always know what is happening with their property. Communication becomes a competitive advantage.",
      },
    ],
    useCases: [
      {
        title: "The 11 PM Burst Pipe",
        description:
          "A tenant calls at 11 PM with water flooding their unit. The AI identifies it as an emergency, dispatches the on-call plumber, notifies the property manager, and texts the tenant confirmation that help is on the way. Response time: 3 minutes instead of the morning.",
      },
      {
        title: "The Vacancy That Fills in 5 Days",
        description:
          "A vacant unit gets 30 inquiry calls in a week. The AI answers all 30, provides details, and schedules 12 showings. The unit is leased in 5 days instead of 21. The owner saves $1,125 in vacancy cost.",
      },
      {
        title: "The Owner Retention Program",
        description:
          "A management company with 300 doors implements automated monthly owner reports. Owner attrition drops from 15 percent to 5 percent annually. At $150/month average management fee, retaining those 30 additional owners equals $54,000 in annual revenue.",
      },
    ],
    faq: [
      {
        question: "Can the AI determine if a maintenance request is an emergency?",
        answer:
          "Yes. It asks targeted questions to assess urgency — water flooding, gas smell, no heat in winter, security issues. True emergencies trigger immediate vendor dispatch. Non-emergencies are queued for business hours.",
      },
      {
        question: "How does it handle after-hours leasing calls?",
        answer:
          "It provides full property details, answers common questions about lease terms and pet policies, and schedules showings during your available times. Prospects get immediate engagement even at 10 PM.",
      },
      {
        question: "Can it communicate with tenants in Spanish?",
        answer:
          "Yes. Bilingual communication is included. Tenants can report maintenance issues and ask leasing questions in their preferred language.",
      },
      {
        question: "Will it integrate with our property management software?",
        answer:
          "Yes. It works with AppFolio, Buildium, Rent Manager, and most PM platforms. Maintenance requests and leasing inquiries flow directly into your existing system.",
      },
    ],
    reviewIndices: [],
  },

  "real-estate/real-estate-investors": {
    slug: "real-estate-investors",
    parentSlug: "real-estate",
    name: "Real Estate Investors",
    title: "AI Front Desk for Real Estate Investors",
    metaDescription:
      "Stop losing off-market deals to slow response. AI Peak Biz captures every motivated seller call, qualifies properties, and books appointments for real estate investors.",
    heroHeadline:
      "Envision an investment business where every motivated seller reaches you before your competition.",
    heroSubhead:
      "A distressed homeowner sees your 'We Buy Houses' sign and calls. You are at a closing. The call goes to voicemail. They call the next investor on their list and accept an offer by end of day. AI Peak Biz builds a system that answers every motivated seller call, qualifies the deal, and locks down appointments while you focus on acquisitions.",
    problems: [
      {
        title: "Motivated Sellers Call Once",
        description:
          "A homeowner facing foreclosure, divorce, or probate finally decides to sell. They call 3 to 5 'We Buy Houses' numbers. The first investor to have a real conversation wins the deal. If your call goes to voicemail, you are out. Motivated sellers do not leave messages and wait.",
        cost: "Typical loss: $10,000 to $50,000 per missed deal in potential profit",
      },
      {
        title: "Marketing Dollars Wasted on Missed Calls",
        description:
          "You spend $5,000 to $15,000 per month on direct mail, driving for dollars, and PPC ads. Every campaign generates calls. If 30 percent of those calls go unanswered, 30 percent of your marketing budget is wasted. Those leads cost $50 to $200 each.",
        cost: "Typical loss: $3,000 to $10,000 per month in wasted marketing spend",
      },
      {
        title: "Deal Pipeline Runs Hot and Cold",
        description:
          "When you are busy rehabbing or closing, you stop taking calls. Pipeline empties. When projects finish, you scramble for deals. This feast-or-famine cycle keeps investors stuck at 5 to 8 deals per year instead of scaling to 15 or 20.",
        cost: "Typical loss: $50,000 to $150,000 per year in unrealized deal volume",
      },
    ],
    solutions: [
      {
        title: "24/7 Motivated Seller Intake",
        description:
          "Your AI answers every seller call — day, night, and weekends. It asks about property condition, motivation for selling, timeline, asking price, and mortgage balance. You get a complete deal summary before calling them back.",
      },
      {
        title: "Deal Qualification Scoring",
        description:
          "Every lead is scored based on motivation level, equity estimate, and timeline urgency. Hot deals get immediate notification. Warm leads get nurtured. Cold leads get filtered out. You spend time only on deals that will close.",
      },
      {
        title: "Follow-Up Drip for Not-Ready Sellers",
        description:
          "Sellers who are not ready today enter a long-term drip. Monthly check-ins keep you top-of-mind. When they are finally ready — and 40 percent eventually are — you are the only investor they call.",
      },
    ],
    useCases: [
      {
        title: "The Probate Lead at 8 PM",
        description:
          "An heir who inherited a house calls your bandit sign number at 8 PM. They just want it gone. The AI answers, captures property address, condition, and motivation. It books a property visit for the next morning. You make an offer by noon. $35,000 profit that would have gone to the investor who answered first.",
      },
      {
        title: "The Direct Mail Campaign That Finally Converts",
        description:
          "A mailer goes out to 5,000 pre-foreclosure homeowners. 80 call. Previously, staff handled 50. Now the AI handles all 80, qualifies 25 as motivated, and books 15 property visits. Deal volume triples from the same marketing spend.",
      },
      {
        title: "The Long-Term Nurture Conversion",
        description:
          "A seller calls but is not ready to sell for 6 months. Monthly AI follow-up keeps the relationship warm. In month 5, they are ready. You buy the house with zero marketing cost on a lead you already paid for.",
      },
    ],
    faq: [
      {
        question: "Can the AI ask about property condition and motivation?",
        answer:
          "Yes. It asks about roof age, foundation issues, repairs needed, reason for selling, timeline, mortgage balance, and desired price. You get a full deal summary delivered to your phone.",
      },
      {
        question: "Will motivated sellers really talk to an AI?",
        answer:
          "Motivated sellers want to tell their story to someone who will listen. The AI asks questions and lets them talk. Most do not realize it is AI — and even if they do, they care more about getting an offer than who took the initial call.",
      },
      {
        question: "How does it handle tire kickers versus truly motivated sellers?",
        answer:
          "Motivation scoring based on timeline urgency, life situation (foreclosure, divorce, death, relocation), and pricing expectations separates hot leads from casual inquiries. You only call back the motivated ones.",
      },
      {
        question: "Can it handle Spanish-speaking sellers?",
        answer:
          "Yes. Bilingual intake is included. In markets with large Hispanic populations, this captures deals your English-only competitors miss entirely.",
      },
    ],
    reviewIndices: [],
  },

  "real-estate/title-companies": {
    slug: "title-companies",
    parentSlug: "real-estate",
    name: "Title Companies",
    title: "AI Front Desk for Title Companies",
    metaDescription:
      "Stop losing closings to communication gaps. AI Peak Biz handles status calls, scheduling, and realtor relationship management for title companies 24/7.",
    heroHeadline:
      "Envision a title company where every realtor, buyer, and lender gets instant status updates without calling your team.",
    heroSubhead:
      "Your closers are processing files. The phone rings 80 times a day — realtors checking status, buyers asking about wire instructions, lenders needing documents. Your team answers 60 and misses 20. Those 20 missed calls frustrate realtors who send business elsewhere. AI Peak Biz builds a system that handles every status inquiry, schedules closings, and keeps your referral sources happy.",
    problems: [
      {
        title: "Realtors Cannot Get Status Updates",
        description:
          "Realtors send you business based on service quality. When they call for a status update and get voicemail, frustration builds. After the third unreturned call, they try another title company on the next deal. Realtor relationships are your revenue. Lost relationships are lost volume.",
        cost: "Typical loss: $10,000 to $40,000 per quarter in lost realtor referral volume",
      },
      {
        title: "Closing Coordination Consumes All Bandwidth",
        description:
          "Scheduling closings requires coordinating buyers, sellers, realtors, and lenders. Phone tag burns hours of staff time per closing. With 40 closings per month, that is 80+ hours spent just on scheduling coordination.",
        cost: "Typical loss: $5,000 to $12,000 per month in wasted staff productivity",
      },
      {
        title: "Wire Fraud Prevention Communication",
        description:
          "Buyers need wire instructions communicated securely. They call with questions about wiring, amounts, and timing. If they cannot reach your team, they may follow fraudulent instructions from phishing emails. This is both a revenue risk and a liability issue.",
        cost: "Typical loss: catastrophic liability risk plus $5,000 to $15,000 in operational friction",
      },
    ],
    solutions: [
      {
        title: "AI Status Update System",
        description:
          "Realtors, buyers, and lenders get instant status updates by calling or texting. The AI knows exactly where each file stands — title search, lien resolution, closing scheduled, documents ready. No more phone tag for routine updates.",
      },
      {
        title: "Automated Closing Coordination",
        description:
          "The AI schedules closings by coordinating availability across all parties. It sends confirmations, reminders, and document checklists. Closings are confirmed without 6 rounds of phone tag.",
      },
      {
        title: "Secure Wire Communication",
        description:
          "Buyers receive proactive wire instruction communications through verified channels. When they call with questions, the AI guides them through the secure process and warns against any instructions received via email.",
      },
    ],
    useCases: [
      {
        title: "The Realtor Who Stays Loyal",
        description:
          "A top-producing realtor sends you 3 deals per month. They call for status updates twice per file. Previously, 30 percent of calls went unanswered. Now the AI provides instant updates every time. The realtor increases referrals to 5 per month. At $1,500 average title fee, that is $3,000/month in additional revenue.",
      },
      {
        title: "The Closing That Coordinates Itself",
        description:
          "A closing involves a buyer in another state, two realtors, and a lender. The AI contacts all parties, finds mutual availability, schedules the mobile notary, and sends document checklists. Zero staff time spent on coordination.",
      },
      {
        title: "The Wire Fraud Prevention Win",
        description:
          "A buyer calls confused about wire instructions they received via email. The AI identifies it as a potential fraud attempt, connects them with your team immediately, and prevents a $300,000 wire to a fraudulent account. Your reputation as a secure, responsive title company solidifies.",
      },
    ],
    faq: [
      {
        question: "Can the AI provide real-time file status updates?",
        answer:
          "Yes. When integrated with your title production software, it provides instant updates on title search status, lien clearance, document preparation, and closing scheduling.",
      },
      {
        question: "How does it handle wire instruction inquiries securely?",
        answer:
          "It provides general guidance about your wire process and directs callers to your secure portal for actual instructions. It explicitly warns against following emailed wire instructions and routes concerned callers to your team immediately.",
      },
      {
        question: "Will it integrate with our title production software?",
        answer:
          "Yes. It works with Qualia, SoftPro, RamQuest, ResWare, and other title platforms. File status data flows in real time so every answer is current.",
      },
      {
        question: "Can it schedule mobile notary closings?",
        answer:
          "Yes. It coordinates availability across all parties and schedules mobile closings. Confirmations and document checklists go out automatically to everyone involved.",
      },
    ],
    reviewIndices: [],
  },
};
