export interface IndustryContent {
  slug: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  problems: {
    title: string;
    description: string;
    cost: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  reviewIndices: number[];
}

export const industryContent: Record<string, IndustryContent> = {
  healthcare: {
    slug: "healthcare",
    title: "AI Front Desk for Healthcare Practices",
    metaDescription:
      "Stop losing patients to missed calls and no-shows. AI Peak Biz builds AI front desk systems for healthcare practices. Every call answered. More patients booked.",
    heroHeadline:
      "Envision a practice where every patient call is answered, even during your busiest hour.",
    heroSubhead:
      "Your medical office is packed. Phones are ringing. Staff is overwhelmed. AI Peak Biz builds an AI front desk system that picks up every call, books every appointment, and gets you more 5-star reviews. Your team focuses on patient care.",
    problems: [
      {
        title: "Missed Calls During Peak Hours",
        description:
          "Your front desk is checking in patients, handling insurance questions, and answering the phone all at once. When the fourth line rings, it goes to voicemail. The caller hangs up and books with the practice across town. A typical medical practice misses 20 to 30 percent of inbound calls during busy hours.",
        cost: "Typical loss: $3,000 to $12,000 per month in missed new patients",
      },
      {
        title: "No-Shows Wreck Your Schedule",
        description:
          "Without automated reminders, no-show rates in healthcare run 18 to 25 percent. An empty exam room at $150 to $400 per visit adds up fast. 20 no-shows per month at $200 average is $4,000 in revenue you already earned but never collected.",
        cost: "Typical loss: $2,500 to $8,000 per month",
      },
      {
        title: "Stale Online Reputation",
        description:
          "Your patients are happy, but your Google profile has 47 reviews while the newer practice down the street has 300. Patients search online first. A half-star difference in rating drives 15 to 20 percent of prospective patients to your competitor before they ever call.",
        cost: "Typical loss: $2,000 to $8,000 per month in lost new patients",
      },
      {
        title: "Dormant Patients Never Return",
        description:
          "Patients who finished their treatment plan 90 days ago have every intention of coming back. But without a prompt, life gets in the way. They forget. You already spent the money to acquire them. That lifetime value walks out the door.",
        cost: "Typical loss: $5,000 to $15,000 per quarter",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI receptionist answers every call 24/7. It knows your providers, accepted insurance, appointment types, and scheduling rules. It books directly into your calendar system. Patients get professional service at 11 PM on a Tuesday the same as 10 AM on a Monday.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website visitors get instant answers about your services, accepted insurance, and appointment availability. The chatbot books appointments in real time without your staff touching anything.",
      },
      {
        title: "Reputation Management Engine",
        description:
          "After every visit, your system automatically sends a review request. Happy patients are guided to Google. Concerns are routed privately to your office. Your rating climbs every month without any staff effort.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "When a call goes unanswered, a text goes out within 60 seconds with a booking link. The patient books themselves. You never even knew the call was missed.",
      },
      {
        title: "No-Show Recovery",
        description:
          "Automated reminders go out 24 hours and 2 hours before every appointment. If a patient misses anyway, the system sends a rebooking text within 15 minutes and follows up 3 days later.",
      },
    ],
    useCases: [
      {
        title: "The Dental Office at Full Capacity",
        description:
          "A dental office running 6 hygienists and 2 dentists gets 80 calls a day. The front desk handles 60. The other 20 go to voicemail. With the AI voice assistant, every call is answered. 5 of those 20 previously missed callers book appointments. At $300 average per new patient, that is $1,500 per day recovered.",
      },
      {
        title: "The Physical Therapy Clinic After Hours",
        description:
          "A physical therapy patient tweaks their back at 8 PM. They want to book a next-day appointment. Without AI, that call goes to voicemail and the patient books with whoever answers in the morning. With AI, the call is answered, the appointment is booked, and the patient shows up.",
      },
      {
        title: "The Mental Health Practice Scaling Up",
        description:
          "A growing mental health practice adds two new therapists. Inquiries double overnight. The front desk cannot keep up. The AI chatbot handles initial inquiries, collects patient information, and books intake appointments. The practice scales without hiring another receptionist.",
      },
      {
        title: "The Med Spa Building Reviews",
        description:
          "A med spa with 3.8 stars on Google loses every head-to-head comparison with the 4.7-star competitor. After 90 days with the reputation engine, they are at 4.5 stars with 80 new reviews. New patient inquiries increase 35 percent.",
      },
    ],
    faq: [
      {
        question: "Does this work with my EHR system?",
        answer:
          "We integrate with most major EHR and practice management systems. During the strategy call, we map exactly how the system connects to your current workflow. If you use Epic, Athena, DrChrono, or similar platforms, we build around them.",
      },
      {
        question: "Is the AI HIPAA-compliant?",
        answer:
          "Our system is built on GoHighLevel, which offers HIPAA compliance with a Business Associate Agreement. All patient data is handled within HIPAA guidelines. We configure the system to collect only the information necessary for scheduling.",
      },
      {
        question: "Will patients know they are talking to AI?",
        answer:
          "The AI voice assistant sounds natural and professional. Most patients cannot tell the difference. If a patient specifically asks, the system discloses that it is an AI assistant. For complex questions, it transfers to your human team with full context.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most healthcare practices are live within 7 to 10 business days. We handle the configuration. You review and approve scripts, scheduling rules, and workflows. The timeline depends on how quickly you provide your practice details.",
      },
      {
        question: "What happens if the AI cannot answer a question?",
        answer:
          "The system transfers the call to your team with a full summary of the conversation so far. The patient never has to repeat themselves. You stay in control of what the AI can and cannot handle.",
      },
    ],
    reviewIndices: [0, 1, 2],
  },

  "home-services": {
    slug: "home-services",
    title: "AI Front Desk for Home Service Companies",
    metaDescription:
      "Stop losing jobs to missed calls. AI Peak Biz builds AI front desk systems for plumbers, electricians, HVAC, roofers, and every home service business.",
    heroHeadline:
      "Envision your service business with a dispatcher that never sleeps.",
    heroSubhead:
      "A homeowner calls at 6 AM with a burst pipe. Your phone rings 4 times and hits voicemail. They call the next plumber on Google. AI Peak Biz makes sure that call gets answered, the job gets booked, and you never lose revenue to a missed ring.",
    problems: [
      {
        title: "Missed Emergency Calls",
        description:
          "Home service calls come at all hours. A burst pipe at midnight. An AC unit failing on a 115-degree afternoon. A power outage at 5 AM. If nobody picks up, the homeowner calls the next name on the list. You lose a $500 to $5,000 job because your phone rang at the wrong time.",
        cost: "Typical loss: $4,000 to $15,000 per month",
      },
      {
        title: "Techs in the Field, Nobody in the Office",
        description:
          "Your crew is on a job site. You are in a crawl space. The office phone is forwarding to your cell but you cannot pick up mid-repair. Every unanswered call is a job your competitor books instead. In home services, speed to answer is everything.",
        cost: "Typical loss: $3,000 to $10,000 per month",
      },
      {
        title: "Weak Reviews Against Bigger Competitors",
        description:
          "The franchise down the road has 800 Google reviews and a 4.7 rating. You do better work but you have 45 reviews. The homeowner picks the company with more social proof every time. Reviews are the new word of mouth and you are losing that game.",
        cost: "Typical loss: $2,000 to $8,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI dispatcher answers every call 24/7. It knows your service area, your services, your pricing for common jobs, and your availability. It books appointments into your schedule. The homeowner gets a professional response at 2 AM the same as 2 PM.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "If a call slips through, a text fires within 60 seconds with a link to book or describe the issue. The homeowner engages instantly instead of moving to the next name on their search results.",
      },
      {
        title: "Reputation Management Engine",
        description:
          "After every completed job, the system automatically asks for a Google review. Happy customers are guided to leave 5 stars. Unhappy customers are routed privately to you first. Your review count climbs every week.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website chatbot answers questions about your services, service area, and availability. It captures the lead and books the appointment while the homeowner is still on your site, not comparing competitors.",
      },
    ],
    useCases: [
      {
        title: "The Plumber Who Never Misses a Midnight Call",
        description:
          "A homeowner discovers a slab leak at 11 PM. Panic. They Google plumbers and start calling. The first two go to voicemail. The third picks up. That is your AI voice assistant. It gathers the details, confirms the address is in your service area, and books a morning appointment. That is a $2,500 job you would have lost.",
      },
      {
        title: "The HVAC Company on a 110-Degree Phoenix Afternoon",
        description:
          "Every AC company in the valley is slammed. Your phones ring non-stop. Your office manager is booking as fast as she can, but calls are stacking up. The AI handles overflow, booking appointments, taking messages, and texting back callers who could not get through. You book 15 extra service calls that week.",
      },
      {
        title: "The Roofer After a Hailstorm",
        description:
          "Storm season hits and your phone explodes. 200 calls in 3 days. Your 2-person office cannot keep up. The AI voice assistant and text-back system handle the surge, qualifying each caller, booking inspections, and keeping every lead organized in the CRM. You close 40 extra jobs that month.",
      },
      {
        title: "The Landscaper Building a Reputation",
        description:
          "You do great work but have 22 Google reviews. Your competitor has 180. After 90 days with the reputation engine, you have 95 reviews at 4.9 stars. Your inbound calls increase 30 percent. You raise your prices. You are still booked out 3 weeks.",
      },
      {
        title: "The Pest Control Company Scaling to a New City",
        description:
          "You expand to a second market. You do not have a local office or receptionist yet. The AI handles every call, knows your service area, and books appointments in your calendar. You operate in a new city without hiring an office manager.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle emergency vs. routine calls?",
        answer:
          "Yes. We configure the system to triage calls. Emergency calls can be flagged and routed immediately to your on-call tech. Routine calls are booked into your standard scheduling slots.",
      },
      {
        question: "Does it work with my existing scheduling software?",
        answer:
          "We integrate with most scheduling platforms used in home services including ServiceTitan, Housecall Pro, Jobber, and others. During the strategy call, we map the exact integration for your tech stack.",
      },
      {
        question: "What if a customer has a question the AI cannot answer?",
        answer:
          "The AI transfers the call to your team or takes a message with full context. Complex estimates, custom jobs, and unusual requests get routed to a human. The AI handles the routine calls that eat up 80 percent of your phone time.",
      },
      {
        question: "How fast is setup?",
        answer:
          "Most home service companies are live within 5 to 10 business days. We do the heavy lifting. You review the scripts, confirm your service area and pricing, and approve the system before it goes live.",
      },
      {
        question: "Can it handle multiple service areas?",
        answer:
          "Yes. The system can be configured to know exactly which zip codes you serve, route calls accordingly, and book into the correct technician schedule based on location.",
      },
    ],
    reviewIndices: [0, 2, 4],
  },

  construction: {
    slug: "construction",
    title: "AI Front Desk for Construction Companies",
    metaDescription:
      "Stop losing bids to missed calls. AI Peak Biz builds AI front desk systems for general contractors, remodelers, and construction companies.",
    heroHeadline:
      "Envision landing every bid because you answered every call.",
    heroSubhead:
      "You are on a job site. Your phone buzzes. A homeowner wants a $40,000 kitchen remodel. You cannot pick up. By the time you call back at 5 PM, they already scheduled estimates with two other contractors. AI Peak Biz makes sure that never happens again.",
    problems: [
      {
        title: "Job Site Hours Means Missed Office Calls",
        description:
          "General contractors and remodelers spend their days on site, not at a desk. When a potential client calls, it hits voicemail. In construction, 60 percent of homeowners do not leave a voicemail. They move to the next contractor on Google. Big ticket jobs disappear before you even know they existed.",
        cost: "Typical loss: $10,000 to $40,000 per month in lost project revenue",
      },
      {
        title: "Long Sales Cycles With No Follow-Up System",
        description:
          "A homeowner requests an estimate. You deliver it in person. Then life gets busy. You forget to follow up on day three. Day five. Day ten. The homeowner signed with a competitor on day four. Without a CRM and automated follow-up, you are leaking revenue on every estimate you give.",
        cost: "Typical loss: $5,000 to $20,000 per quarter in unbid follow-ups",
      },
      {
        title: "Fewer Reviews Than the Franchise Operations",
        description:
          "Homeowners hiring contractors check reviews obsessively. The franchise with 500 reviews at 4.6 stars looks safer than your 30 reviews at 4.8 stars. Volume wins. Without an automated review process, you are fighting uphill against companies with dedicated marketing teams.",
        cost: "Typical loss: $3,000 to $12,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every call even when you are on the roof. It knows your services, your service area, and your availability. It captures the project details and books the estimate appointment.",
      },
      {
        title: "Full CRM with Lead Pipeline",
        description:
          "Every lead, estimate, and follow-up is tracked. Automated follow-up sequences keep your name in front of the prospect. No more sticky notes. No more forgotten callbacks.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "If a call goes unanswered, a text fires within 60 seconds. The homeowner describes their project and gets a booking link. You capture the lead while they are still thinking about their remodel.",
      },
      {
        title: "Reputation Management",
        description:
          "After every completed project, the system requests a Google review. Your review count grows every month. Homeowners choose you because they see the social proof.",
      },
    ],
    useCases: [
      {
        title: "The General Contractor on a Build Day",
        description:
          "You are framing a house. Your phone rings 8 times that day. You catch 3 of those calls at lunch. The other 5 went to voicemail. Two left messages. Three did not. With the AI, all 8 calls are answered. The callers describe their project, the AI books estimate appointments, and you show up prepared.",
      },
      {
        title: "The Solar Company After a Rate Hike Announcement",
        description:
          "The utility company announces a rate increase. Your phone blows up. Without AI, your office manager is drowning. With AI, every call is answered, qualified, and booked. You install 20 extra systems that quarter because you did not miss a single lead.",
      },
      {
        title: "The Remodeler Building Trust",
        description:
          "A homeowner is choosing between you and a competitor for a $60,000 bathroom remodel. Your work is better. But the competitor has 200 reviews to your 35. After 6 months with the reputation engine, you have 120 reviews and your close rate on big projects increases 25 percent.",
      },
    ],
    faq: [
      {
        question: "My projects are complex. Can the AI handle detailed inquiries?",
        answer:
          "The AI handles initial qualification — project type, timeline, budget range, location. Complex technical questions are transferred to you or your estimator with full context. The AI replaces the front desk, not the project manager.",
      },
      {
        question: "I do not have a front desk. Is this still worth it?",
        answer:
          "Especially worth it. Solo contractors and small crews lose the most revenue to missed calls because there is literally nobody to answer. This system gives you a professional front desk presence without the $36,000 per year salary.",
      },
      {
        question: "How does it handle estimate scheduling?",
        answer:
          "The AI books estimate appointments directly into your calendar based on your availability and service area. It can ask qualifying questions like project type, address, and timeline before booking.",
      },
      {
        question: "What if I work with subcontractors?",
        answer:
          "The system can route different project types to different team members or subcontractors. If a call is about electrical work, it routes one way. If it is about a general remodel, it routes another.",
      },
    ],
    reviewIndices: [1, 2, 3],
  },

  "professional-services": {
    slug: "professional-services",
    title: "AI Front Desk for Professional Service Firms",
    metaDescription:
      "Stop losing clients to unanswered calls. AI Peak Biz builds AI front desk systems for accountants, consultants, coaches, and professional service firms.",
    heroHeadline:
      "Envision a firm that never loses a client because nobody picked up the phone.",
    heroSubhead:
      "You are in a client meeting. A prospect calls your office. It rings five times and goes to voicemail. That prospect just hired the firm that answered first. AI Peak Biz builds the system that answers every time.",
    problems: [
      {
        title: "Client Meetings Block New Business Calls",
        description:
          "Professional service firms live in meetings. Consultations, planning sessions, tax reviews, coaching calls. While you are serving existing clients, your phone rings and nobody answers. In professional services, the first firm to respond wins the client 78 percent of the time.",
        cost: "Typical loss: $2,000 to $10,000 per month in lost engagements",
      },
      {
        title: "No Automated Client Intake",
        description:
          "A prospect calls, leaves a voicemail, and waits. You call back 4 hours later. They already had a consultation with another firm. Without automated intake and instant response, your pipeline leaks at the top.",
        cost: "Typical loss: $3,000 to $12,000 per quarter",
      },
      {
        title: "Referrals Fall Through the Cracks",
        description:
          "A current client refers a friend. That friend calls and gets voicemail. No follow-up. No text-back. The referral books with someone else. You lost a client you did not even pay to acquire. The referring client feels embarrassed.",
        cost: "Typical loss: $2,000 to $5,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI receptionist answers every call with your firm name and a professional tone. It knows your services, your team members, and your scheduling availability. Prospects get an immediate, polished response 24/7.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website chatbot handles inquiries about your services, availability, and process. It collects the prospect's information and books a consultation while they are still browsing your site.",
      },
      {
        title: "Full CRM with Lead Pipeline",
        description:
          "Every prospect, referral, and follow-up is tracked from first contact to signed engagement. Automated nurture sequences keep you top of mind. Nothing falls through the cracks.",
      },
      {
        title: "Appointment Reminders",
        description:
          "Automated reminders reduce no-shows for consultations and client meetings. Your schedule stays full. Clients feel professionally managed.",
      },
    ],
    useCases: [
      {
        title: "The Accounting Firm During Tax Season",
        description:
          "January through April, your phones ring constantly. Your team is heads-down in returns. The AI handles overflow calls, qualifies new prospects, books consultations, and texts back missed callers. You onboard 30 extra clients that season because every call was answered.",
      },
      {
        title: "The Business Coach After a Webinar",
        description:
          "You run a webinar. 200 attendees. 30 of them want to talk. They start calling and emailing. Without AI, you spend 3 days playing phone tag. With AI, the chatbot and voice assistant book discovery calls while you are still sending the replay email.",
      },
      {
        title: "The Marketing Agency Scaling Past 20 Clients",
        description:
          "You outgrew your one-person front desk. Hiring another admin costs $45,000 a year. The AI system handles inbound calls, routes client requests, books new business calls, and costs a fraction of that salary. You scale without the overhead.",
      },
    ],
    faq: [
      {
        question: "Can the AI represent my firm professionally?",
        answer:
          "Absolutely. The AI is trained on your firm name, your service offerings, your team members, and your preferred tone. Callers experience the same professionalism they would with a dedicated receptionist.",
      },
      {
        question: "What about confidential client information?",
        answer:
          "The AI collects only scheduling and basic contact information. Sensitive client data stays in your existing systems. We configure the AI to avoid collecting anything beyond what is necessary for booking.",
      },
      {
        question: "Does it integrate with my calendar?",
        answer:
          "Yes. Google Calendar, Outlook, Calendly, and most scheduling platforms. The AI sees your real-time availability and books directly.",
      },
      {
        question: "How quickly can I get set up?",
        answer:
          "Most professional service firms are live within 5 to 7 business days. We configure everything. You review the scripts and approve before going live.",
      },
    ],
    reviewIndices: [1, 2, 4],
  },

  legal: {
    slug: "legal",
    title: "AI Front Desk for Law Firms",
    metaDescription:
      "Stop losing cases to missed calls. AI Peak Biz builds AI front desk systems for law firms. Every call answered. Every lead captured. More consultations booked.",
    heroHeadline:
      "Envision a law firm that captures every qualified lead, even at midnight.",
    heroSubhead:
      "A car accident victim calls your office at 9 PM from the hospital. Your phones are off. They call the next attorney on Google. That case was worth $30,000 in fees. AI Peak Biz builds the system that answers that call.",
    problems: [
      {
        title: "After-Hours Calls Go to Competitors",
        description:
          "Legal emergencies do not happen during business hours. DUI arrests at 2 AM. Car accidents on Saturday afternoons. Domestic situations at midnight. The first attorney who answers gets the case. If your phone goes to voicemail, you lose cases you never even knew about.",
        cost: "Typical loss: $5,000 to $30,000 per month depending on practice area",
      },
      {
        title: "Intake Bottleneck",
        description:
          "Your paralegal is drafting a motion. Your receptionist is on another call. A third line rings. The potential client hears voicemail and calls the firm whose ad was right below yours. In personal injury and family law, intake speed determines who wins the client.",
        cost: "Typical loss: $4,000 to $15,000 per month",
      },
      {
        title: "Review Deficit Against Established Firms",
        description:
          "The established firm on Main Street has 400 Google reviews. You have 25. Potential clients assume they are better. They are not. But perception drives decisions. Without automated review collection, you will never close that gap.",
        cost: "Typical loss: $3,000 to $10,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI intake specialist answers every call 24/7. It asks qualifying questions, collects case details, and books consultations. For urgent matters, it routes to your on-call attorney with full context.",
      },
      {
        title: "AI Chatbot",
        description:
          "Website visitors describe their situation and the chatbot qualifies the lead, collects contact information, and books a consultation. It operates 24/7 and captures leads from your SEO investment while your office is closed.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "When a call goes unanswered, the system texts within 60 seconds. The potential client receives a link to describe their case and book a consultation. Speed to response is everything in legal intake.",
      },
      {
        title: "Full CRM with Lead Pipeline",
        description:
          "Every lead is tracked from first contact through signed retainer. Follow-up sequences keep your firm in front of potential clients who are not ready to retain today but will be in 30 days.",
      },
    ],
    useCases: [
      {
        title: "The Personal Injury Firm After a Major Accident",
        description:
          "A multi-car pileup makes the local news. Victims and families start calling attorneys. Your phones ring 50 times in 2 hours. Without AI, your 2-person intake team captures 20. With AI, all 50 calls are answered and qualified. You sign 8 additional cases worth $240,000 in fees.",
      },
      {
        title: "The Family Law Attorney at Trial",
        description:
          "You are in court all day. Your receptionist calls in sick. Every call goes to voicemail. A woman leaving a domestic violence situation calls 3 attorneys. You are the fourth. But your AI answers on the first ring. She books a same-day consultation. That retainer pays for the system for 6 months.",
      },
      {
        title: "The Estate Planning Firm Building Trust",
        description:
          "Estate planning is trust-driven. Clients research extensively before calling. When they finally call and reach voicemail, they move on. Your AI answers warmly, asks about their planning needs, and books a consultation. First impressions are everything in estate planning.",
      },
      {
        title: "The Criminal Defense Attorney at 2 AM",
        description:
          "A college student gets arrested for DUI. Their parent Googles criminal defense attorneys and starts calling. The first attorney who answers gets retained. Your AI picks up, gathers the basics, and patches the call to your on-call line. Case signed by morning.",
      },
    ],
    faq: [
      {
        question: "Is the system appropriate for legal intake?",
        answer:
          "Yes. The AI is configured to ask qualifying questions specific to your practice area, collect necessary contact and case information, and book consultations. It does not provide legal advice — it handles intake and scheduling.",
      },
      {
        question: "Can it handle sensitive situations appropriately?",
        answer:
          "The AI is trained to be empathetic and professional. For sensitive matters like domestic violence or criminal defense, we configure the tone and routing to be appropriate. Emergency situations are flagged and routed immediately.",
      },
      {
        question: "Does it work with legal CRM systems?",
        answer:
          "We integrate with most CRM and practice management platforms used by law firms, including Clio, MyCase, and PracticePanther. We configure the integration during setup.",
      },
      {
        question: "What about attorney-client privilege?",
        answer:
          "The AI collects only basic qualifying information for intake — name, contact info, brief case description, and appointment scheduling. No privileged information is requested or stored in the AI system.",
      },
      {
        question: "How fast is the setup?",
        answer:
          "Most law firms are live within 7 to 10 business days. We handle configuration and train the AI on your practice areas, qualifying questions, and scheduling preferences. You review everything before going live.",
      },
    ],
    reviewIndices: [0, 1, 2],
  },

  financial: {
    slug: "financial",
    title: "AI Front Desk for Financial Service Firms",
    metaDescription:
      "Stop losing clients to unanswered calls. AI Peak Biz builds AI front desk systems for financial advisors, insurance agents, mortgage brokers, and tax preparers.",
    heroHeadline:
      "Envision a practice where every prospect gets an immediate, professional response.",
    heroSubhead:
      "A prospect calls to ask about your financial planning services. They are ready to move their portfolio. Your office is closed. They call the advisor whose Google ad was next. AI Peak Biz makes sure your phone always answers.",
    problems: [
      {
        title: "Missed Calls During Client Meetings",
        description:
          "Financial advisors spend 60 percent of their day in client appointments. Insurance agents are on sales calls. Mortgage brokers are processing applications. When a new prospect calls, nobody is available. The prospect calls the next firm on the list. In financial services, the first firm to respond gets the meeting 80 percent of the time.",
        cost: "Typical loss: $3,000 to $15,000 per month in lost client acquisition",
      },
      {
        title: "Seasonal Surge Overwhelms Staff",
        description:
          "Tax season for preparers. Open enrollment for insurance agents. Rate drops for mortgage brokers. When demand surges, your phones become unmanageable. Leads stack up. Response times climb. Conversion rates drop. Your busiest season becomes your leakiest.",
        cost: "Typical loss: $5,000 to $20,000 during peak seasons",
      },
      {
        title: "Trust Gap in Online Reputation",
        description:
          "People trust financial professionals who have strong Google reviews. If your competitor has 200 five-star reviews and you have 15, the prospect assumes they are more trustworthy. Perception is reality in financial services.",
        cost: "Typical loss: $2,000 to $8,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI receptionist answers every call with your firm name and a professional, reassuring tone. It knows your services, your team, and your availability. Prospects get an immediate response even when your entire team is in meetings.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website chatbot answers questions about your services, fee structure, and process. It qualifies the prospect and books a consultation while they are still on your site.",
      },
      {
        title: "Reputation Management",
        description:
          "After every successful engagement, the system requests a Google review. Your review count and rating climb consistently. Trust is built before the prospect ever picks up the phone.",
      },
      {
        title: "Appointment Reminders and No-Show Recovery",
        description:
          "Automated reminders ensure prospects show up for consultations. If they miss, the system reboks automatically. Your calendar stays productive.",
      },
    ],
    useCases: [
      {
        title: "The Financial Advisor During Market Volatility",
        description:
          "The market drops 5 percent. Clients and prospects start calling. Your phone rings 40 times in a day. You are in back-to-back meetings calming existing clients. The AI handles prospect calls, qualifies their situation, and books appointments for the following week. You onboard 3 new clients from the volatility.",
      },
      {
        title: "The Insurance Agent During Open Enrollment",
        description:
          "November hits and your phone does not stop. The AI answers overflow calls, explains plan options at a high level, and books enrollment appointments. You handle 50 percent more enrollments that season without hiring temp staff.",
      },
      {
        title: "The Mortgage Broker When Rates Drop",
        description:
          "Rates drop half a point and refinance inquiries triple overnight. The AI qualifies callers, gathers basic financial information, and books applications. You close 15 extra refinances that month because you captured every lead.",
      },
    ],
    faq: [
      {
        question: "Can the AI discuss financial products?",
        answer:
          "The AI provides general information about your services and process. It does not give financial advice, recommend products, or discuss specific strategies. It handles intake and scheduling. Compliance-sensitive conversations stay with your licensed team.",
      },
      {
        question: "Is client data secure?",
        answer:
          "The AI collects only basic contact and scheduling information. No financial data, account numbers, or sensitive personal information is collected through the AI system. Your existing secure systems handle client data.",
      },
      {
        question: "How does this work for a solo practitioner?",
        answer:
          "Solo practitioners benefit the most. When you are the only advisor, every call you miss is a lost prospect. The AI gives you the front desk presence of a larger firm at a fraction of the cost of hiring an assistant.",
      },
      {
        question: "What about compliance requirements?",
        answer:
          "We configure the AI to stay within appropriate boundaries for financial services. It does not make product recommendations or give advice. We work with you during setup to ensure the scripts meet your compliance requirements.",
      },
    ],
    reviewIndices: [0, 2, 3],
  },

  "real-estate": {
    slug: "real-estate",
    title: "AI Front Desk for Real Estate Professionals",
    metaDescription:
      "Stop losing leads to slow response times. AI Peak Biz builds AI front desk systems for realtors, property managers, and real estate investors.",
    heroHeadline:
      "Envision capturing every lead the moment they inquire, not hours later.",
    heroSubhead:
      "A buyer finds their dream home at 10 PM and calls your number. Voicemail. They call the listing agent instead. That commission walks. AI Peak Biz builds the system that answers in 2 seconds, qualifies the buyer, and books the showing.",
    problems: [
      {
        title: "Speed to Lead Determines Who Gets Paid",
        description:
          "In real estate, the agent who responds first wins the client 78 percent of the time. Not the best agent. Not the most experienced. The fastest. If you are at a showing and a new lead calls, that 4-hour callback time just cost you a $12,000 commission.",
        cost: "Typical loss: $5,000 to $20,000 per month in lost commissions",
      },
      {
        title: "Property Managers Drowning in Maintenance Calls",
        description:
          "Managing 100 units means constant calls. Maintenance requests, lockouts, lease questions, prospective tenant inquiries. Your small team cannot handle the volume. Response times slip. Tenants get frustrated. Prospective tenants go elsewhere.",
        cost: "Typical loss: $3,000 to $8,000 per month in vacancy and turnover costs",
      },
      {
        title: "Open House Leads That Vanish",
        description:
          "You collect 15 leads at an open house. You intend to follow up Monday. Monday turns into Wednesday. By Wednesday, 10 of those leads are already working with another agent. Without instant automated follow-up, open house leads are just names on a clipboard.",
        cost: "Typical loss: $2,000 to $10,000 per open house",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every call instantly. It qualifies buyers and sellers, captures their requirements, and books showings or consultations. You respond in seconds, not hours.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website chatbot engages visitors browsing listings, qualifies their needs, and captures contact information. For property managers, it handles tenant inquiries and maintenance requests around the clock.",
      },
      {
        title: "Full CRM with Lead Pipeline",
        description:
          "Every lead is tracked and nurtured automatically. Open house leads get instant follow-up. Dormant leads get reactivation sequences. Your pipeline stays warm without manual effort.",
      },
      {
        title: "Reputation Management",
        description:
          "After every closing or move-in, the system requests a Google review. Your agent profile or property management company builds credibility month after month.",
      },
    ],
    useCases: [
      {
        title: "The Realtor at a Showing",
        description:
          "You are walking a buyer through a house. A seller calls about listing their property. Without AI, that call goes to voicemail and the seller calls the next agent. With AI, the call is answered immediately, the seller's property details are captured, and a listing appointment is booked for tomorrow. That listing is worth $15,000 in commission.",
      },
      {
        title: "The Property Manager at Scale",
        description:
          "You manage 200 units across 5 properties. Maintenance calls, lease questions, and prospective tenant inquiries come in all day. The AI handles initial triage — maintenance requests are logged and routed, prospective tenants get availability information and tour scheduling, and lease questions get basic answers or escalation.",
      },
      {
        title: "The Investor Fielding Motivated Seller Calls",
        description:
          "Your direct mail campaign generates 50 calls this week. You are at your day job. The AI qualifies each seller — property type, condition, motivation, timeline, and asking price. Qualified leads are booked for phone appointments. You review the CRM after work and call the 8 strongest leads first.",
      },
    ],
    faq: [
      {
        question: "Can the AI schedule property showings?",
        answer:
          "Yes. The AI knows your availability and can book showings directly into your calendar. For team setups, it routes to the correct agent based on area or property type.",
      },
      {
        question: "Does it work for property management?",
        answer:
          "Absolutely. The AI handles maintenance request intake, prospective tenant inquiries, tour scheduling, and basic lease questions. It reduces the call volume your team has to handle manually by 60 to 80 percent.",
      },
      {
        question: "Can it qualify leads?",
        answer:
          "Yes. We configure qualifying questions specific to your business — buyer vs. seller, price range, timeline, pre-approval status, property type, and more. Only qualified leads get booked on your calendar.",
      },
      {
        question: "How fast is setup?",
        answer:
          "Most real estate professionals are live within 5 to 7 business days. Solo agents are even faster. We handle configuration and training. You approve before going live.",
      },
    ],
    reviewIndices: [1, 2, 3],
  },

  automotive: {
    slug: "automotive",
    title: "AI Front Desk for Automotive Businesses",
    metaDescription:
      "Stop losing repair orders to missed calls. AI Peak Biz builds AI front desk systems for auto repair shops, body shops, detailing, tire shops, and dealerships.",
    heroHeadline:
      "Envision a shop where every call turns into a booked appointment.",
    heroSubhead:
      "Your service advisors are writing up tickets. Your technicians are under hoods. The phone rings and nobody can grab it. The driver calls the shop down the road. AI Peak Biz builds the system that catches every call and fills every bay.",
    problems: [
      {
        title: "Phones Ring During the Morning Rush",
        description:
          "Between 7 and 9 AM, your shop is chaos. Drop-offs, callbacks on yesterday's diagnostics, and new callers all at once. Your service advisor has a customer at the counter and two lines ringing. Half the callers hang up. Each one was a potential $300 to $1,500 repair order.",
        cost: "Typical loss: $3,000 to $10,000 per month",
      },
      {
        title: "Appointment No-Shows Leave Bays Empty",
        description:
          "A customer books a brake job for Thursday. Thursday comes and they do not show. Your tech has a two-hour hole in their day. Without automated reminders, no-show rates in automotive run 15 to 25 percent. Empty bays cost you money every hour.",
        cost: "Typical loss: $2,000 to $6,000 per month",
      },
      {
        title: "Losing Reviews to Chain Shops",
        description:
          "The national chain down the street has 600 reviews. You have 40. Your work is better. Your prices are fair. But the driver who just moved to town picks the shop with more reviews. They do not know the difference between your craftsmanship and their corporate process. They see numbers.",
        cost: "Typical loss: $2,000 to $8,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI service advisor answers every call. It knows your services, pricing for common repairs, estimated wait times, and scheduling availability. Customers get a professional response whether they call at 7 AM or 7 PM.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "When a call slips through during the morning rush, a text goes out within 60 seconds with a booking link. The customer schedules their repair without calling back.",
      },
      {
        title: "Appointment Reminders and No-Show Recovery",
        description:
          "Automated reminders go out 24 hours and 2 hours before every appointment. If a customer no-shows, the system sends a rebooking message. Your bays stay full.",
      },
      {
        title: "Reputation Management",
        description:
          "After every completed repair, the system requests a Google review. Happy customers leave 5 stars. Complaints come to you privately. Your review count climbs past the chains.",
      },
    ],
    useCases: [
      {
        title: "The Auto Repair Shop During Morning Rush",
        description:
          "It is 7:30 AM. Three customers are at the counter. Two lines are ringing. Your service advisor is juggling everything. The AI handles the phone calls — answering questions about oil change pricing, scheduling a brake inspection for tomorrow, and texting back a missed caller. Three repair orders that would have gone to the competitor are now in your system.",
      },
      {
        title: "The Body Shop After a Storm",
        description:
          "Hail hits town. Your phone rings 100 times in 2 days. Your estimator is booked for 3 weeks. The AI handles every call, explains your process, and books estimate appointments into available slots. You capture every lead and manage the surge professionally.",
      },
      {
        title: "The Detailing Business Building Premium Clients",
        description:
          "You offer a $300 ceramic coating package. Your website chatbot engages visitors, explains the benefits, and books appointments. Customers who would have bounced after 10 seconds now book a detail worth three times your average ticket.",
      },
    ],
    faq: [
      {
        question: "Can the AI give repair estimates?",
        answer:
          "The AI can provide standard pricing for common services you define — oil changes, brake pads, tire rotations. For complex diagnostics, it books an inspection appointment and lets the customer know an estimate will follow the diagnosis.",
      },
      {
        question: "Does it work with my shop management software?",
        answer:
          "We integrate with most shop management systems including Tekmetric, Shop-Ware, and Mitchell. We configure the integration during your setup.",
      },
      {
        question: "Can it handle warranty and recall questions?",
        answer:
          "The AI can provide basic information you configure — warranty policies, recall procedures, and service intervals. Detailed technical questions are routed to your service advisor with full context.",
      },
      {
        question: "How quickly can I get started?",
        answer:
          "Most automotive businesses are live within 5 to 7 business days. We handle everything. You review the scripts and scheduling rules before going live.",
      },
    ],
    reviewIndices: [0, 1, 3],
  },

  "fitness-wellness": {
    slug: "fitness-wellness",
    title: "AI Front Desk for Fitness & Wellness Businesses",
    metaDescription:
      "Stop losing members to missed calls and no-shows. AI Peak Biz builds AI front desk systems for gyms, personal trainers, yoga studios, and wellness businesses.",
    heroHeadline:
      "Envision a studio that books new members while you are teaching class.",
    heroSubhead:
      "You are leading a class. A prospect calls about membership. Your front desk is checking someone in. The call goes to voicemail. That prospect just signed up at the gym down the street. AI Peak Biz makes sure your business answers every time.",
    problems: [
      {
        title: "Calls During Class Times",
        description:
          "Your busiest call times are exactly when you are busiest in person. Morning classes, lunch sessions, evening rush — the phone rings and nobody can answer. The prospect was ready to sign up. They called three gyms. The one that answered got the member.",
        cost: "Typical loss: $1,500 to $5,000 per month in lost memberships",
      },
      {
        title: "Class No-Shows Waste Capacity",
        description:
          "You cap your class at 20. You book 24 expecting 4 no-shows. Some days 6 do not show. Other days all 24 show and it is overcrowded. Without automated reminders and waitlist management, your capacity planning is a guess.",
        cost: "Typical loss: $1,000 to $4,000 per month",
      },
      {
        title: "Members Churn Silently",
        description:
          "A member stops coming after month 3. You do not notice until they cancel 2 months later. Without automated reactivation, you lose members who just needed a nudge. Acquiring a new member costs 5 to 10 times more than retaining one.",
        cost: "Typical loss: $2,000 to $6,000 per quarter in churn",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every call and knows your class schedule, membership options, pricing, and trainer availability. Prospects get answers and book trial classes or consultations instantly.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website chatbot converts visitors into booked trial classes. It answers questions about your programs, pricing, and schedule. Visitors book while they are motivated, not when your front desk reopens.",
      },
      {
        title: "Appointment Reminders",
        description:
          "Class and session reminders go out automatically. Cancellations open spots for waitlisted members. Your capacity stays optimized.",
      },
      {
        title: "Dormant Member Reactivation",
        description:
          "Members who have not visited in 30, 60, or 90 days receive automated check-ins and offers. Re-engaging 5 dormant members per month is easier and cheaper than acquiring 5 new ones.",
      },
    ],
    useCases: [
      {
        title: "The Yoga Studio During Morning Flow",
        description:
          "Your 6 AM class is full. A prospect calls at 6:15 to ask about membership. Your one staff member is checking people in. Without AI, that call goes to voicemail and the prospect signs up at the studio that answered. With AI, the call is answered, questions are handled, and a trial class is booked for tomorrow morning.",
      },
      {
        title: "The Personal Trainer Growing a Client Base",
        description:
          "You train clients back-to-back from 5 AM to 2 PM. You cannot answer the phone mid-session. The AI handles every call, explains your training programs, and books free consultations into your open slots. You add 4 new clients this month without spending a minute on the phone.",
      },
      {
        title: "The Gym Reducing January Churn",
        description:
          "January brings 200 new members. By March, 60 have stopped coming. The reactivation system catches them at the 3-week mark with a friendly check-in. 25 of those 60 reengage. At $50 per month, that is $15,000 in annual retained revenue.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle class scheduling?",
        answer:
          "Yes. The AI knows your class schedule, availability, and capacity. It can book trial classes, regular sessions, and personal training consultations. It can also manage waitlists when classes are full.",
      },
      {
        question: "Does it work for a solo personal trainer?",
        answer:
          "Especially well. Solo trainers cannot answer the phone during sessions. The AI gives you a professional front desk presence for a fraction of the cost of hiring help.",
      },
      {
        question: "Can it handle membership questions?",
        answer:
          "The AI is trained on your membership tiers, pricing, and policies. It answers common questions and directs prospects toward the right option. Complex billing or contract questions are routed to you.",
      },
      {
        question: "How does the reactivation work?",
        answer:
          "The system identifies members who have not visited in a defined period and sends automated messages — texts, emails, or both. The message content is customized to your brand and can include special offers or simple check-ins.",
      },
    ],
    reviewIndices: [0, 1, 4],
  },

  beauty: {
    slug: "beauty",
    title: "AI Front Desk for Beauty & Grooming Businesses",
    metaDescription:
      "Stop losing clients to no-shows and missed calls. AI Peak Biz builds AI front desk systems for salons, barber shops, nail salons, lash studios, and tattoo shops.",
    heroHeadline:
      "Envision a salon that books itself while you are behind the chair.",
    heroSubhead:
      "You are mid-color on a client. Your phone rings. It is a new client wanting to book a balayage. You cannot answer. She books with the salon that picks up. AI Peak Biz builds the system that fills your chair without you lifting a finger.",
    problems: [
      {
        title: "Cannot Answer While Servicing Clients",
        description:
          "You are a stylist, not a receptionist. Your hands are full — literally. Every call that goes to voicemail is a client who books elsewhere. In beauty, the appointment is the sale. If you cannot book it in the moment, you lost it.",
        cost: "Typical loss: $1,500 to $6,000 per month",
      },
      {
        title: "No-Shows Kill Your Income",
        description:
          "A client books a 2-hour color appointment and does not show. That is $150 to $300 you cannot recover. Without automated reminders and a cancellation policy enforced by technology, no-shows eat 10 to 20 percent of your revenue.",
        cost: "Typical loss: $1,000 to $4,000 per month",
      },
      {
        title: "Clients Drift to the New Spot",
        description:
          "A trendy new salon opens 2 blocks away. They have 150 Google reviews from their previous location. You have 28 reviews despite 5 years of amazing work. Clients compare. Reviews win. Without automated review collection, you are losing the visibility game.",
        cost: "Typical loss: $1,000 to $5,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI receptionist answers every call and knows your services, pricing, stylists, and availability. Clients book appointments by phone 24/7 without interrupting your work.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website and social media chatbot books appointments, answers service questions, and captures new client information. Clients who find you on Instagram at midnight can book a Monday appointment right then.",
      },
      {
        title: "Appointment Reminders and No-Show Recovery",
        description:
          "Automated reminders 24 hours and 2 hours before every appointment reduce no-shows by 30 to 50 percent. Cancellations trigger waitlist notifications. Your chair stays full.",
      },
      {
        title: "Reputation Management",
        description:
          "After every appointment, the system texts a review request. Happy clients leave 5-star reviews. Unhappy clients tell you privately. Your Google rating climbs and drives new bookings.",
      },
    ],
    useCases: [
      {
        title: "The Salon Owner Behind the Chair",
        description:
          "You are a solo stylist. You have no receptionist. You work 9 to 6, chair-to-chair. Every call between appointments gets answered by the AI. It books a blowout for Saturday, a color appointment for next Tuesday, and sends a reminder to tomorrow's 10 AM. You added $800 in bookings this week without touching your phone.",
      },
      {
        title: "The Barber Shop Building Loyalty",
        description:
          "Your 4-chair shop is walk-in and appointment. The AI handles phone bookings while your barbers focus on cuts. After each visit, the reputation engine texts a review request. In 90 days, your reviews go from 35 to 110. Walk-in traffic increases because of visibility.",
      },
      {
        title: "The Lash Studio Reducing No-Shows",
        description:
          "Lash appointments are 2 hours. A no-show destroys your afternoon. After implementing automated reminders, your no-show rate drops from 18 percent to 6 percent. That is 3 extra appointments per week you are actually servicing. At $200 per set, that is $2,400 per month recovered.",
      },
    ],
    faq: [
      {
        question: "Can the AI book specific stylists or services?",
        answer:
          "Yes. The AI knows each stylist's availability, services offered, and pricing. Clients can request a specific stylist or let the system recommend based on availability and service type.",
      },
      {
        question: "Does it work for walk-in shops?",
        answer:
          "Yes. The AI handles phone bookings while your team handles walk-ins. It can also provide estimated wait times to callers based on your current schedule.",
      },
      {
        question: "Can it send appointment reminders via text?",
        answer:
          "Yes. Automated text reminders go out 24 hours and 2 hours before every appointment. Clients can confirm, reschedule, or cancel directly from the text.",
      },
      {
        question: "How quickly can I start?",
        answer:
          "Most beauty businesses are live within 5 to 7 business days. We configure the AI on your services, pricing, and availability. You approve everything before it goes live.",
      },
    ],
    reviewIndices: [0, 2, 4],
  },

  education: {
    slug: "education",
    title: "AI Front Desk for Education Businesses",
    metaDescription:
      "Stop losing students to slow responses. AI Peak Biz builds AI front desk systems for tutoring centers, music schools, driving schools, and trade schools.",
    heroHeadline:
      "Envision a school that enrolls students while you are teaching.",
    heroSubhead:
      "A parent calls about piano lessons for their child. You are teaching a student. The parent calls the next music school. AI Peak Biz builds the system that answers that call, captures the enrollment, and books the first lesson.",
    problems: [
      {
        title: "Teaching Hours Block Enrollment Calls",
        description:
          "Education businesses have a fundamental conflict: your teaching hours are exactly when parents and students call. You cannot answer the phone mid-lesson. By the time you call back, they enrolled somewhere else. Speed of response determines who gets the student.",
        cost: "Typical loss: $1,500 to $6,000 per month in lost enrollments",
      },
      {
        title: "Lesson No-Shows and Late Cancellations",
        description:
          "A student cancels 30 minutes before their lesson. You cannot fill the slot. That is lost income. Without automated reminders and a structured cancellation system, no-shows and late cancellations eat into your schedule and your revenue.",
        cost: "Typical loss: $800 to $3,000 per month",
      },
      {
        title: "Seasonal Enrollment Surges",
        description:
          "Back to school, New Year resolutions, summer programs. Enrollment inquiries spike and your small team cannot handle the volume. Leads sit unresponded for days. Families enroll elsewhere because you were too busy to call back.",
        cost: "Typical loss: $3,000 to $10,000 per enrollment cycle",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI answers every call and knows your programs, scheduling, pricing, and availability. Parents get immediate answers about your offerings and can enroll or book a trial lesson on the spot.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website chatbot handles inquiries from parents researching programs at 11 PM. It answers questions about age requirements, pricing, and schedule. It captures contact information and books enrollment consultations.",
      },
      {
        title: "Appointment Reminders",
        description:
          "Lesson and class reminders go out automatically. Parents and students are reminded 24 hours before. Late cancellations decrease. Your schedule stays productive.",
      },
      {
        title: "Dormant Student Reactivation",
        description:
          "Students who have not attended in 30 to 60 days receive automated check-in messages. Many just need a nudge to re-enroll. Reactivating existing students is far cheaper than acquiring new ones.",
      },
    ],
    useCases: [
      {
        title: "The Tutoring Center During Back-to-School",
        description:
          "August hits and your phone rings off the hook. Parents want assessment appointments. Your 2-person staff is already teaching. The AI handles every call, explains your assessment process, and books appointments. You enroll 25 extra students that month because none fell through the cracks.",
      },
      {
        title: "The Music School Growing Enrollment",
        description:
          "You teach guitar lessons from 3 to 8 PM. Those are also the hours parents call. The AI answers every call, explains your lesson packages, and books trial lessons. You add 6 new students this month without a single phone interruption during lessons.",
      },
      {
        title: "The Driving School Managing Cancellations",
        description:
          "A student cancels their driving lesson 2 hours before. The automated system immediately notifies waitlisted students. The slot is filled within 30 minutes. Your instructor stays productive and you keep the revenue.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle questions from parents?",
        answer:
          "Yes. The AI is trained on your programs, pricing, scheduling, age requirements, and policies. It provides the same answers your front desk would, with the same level of detail.",
      },
      {
        question: "Does it work for different program types?",
        answer:
          "Yes. Whether you offer one-on-one lessons, group classes, or self-paced programs, we configure the AI to handle each type with appropriate scheduling and information.",
      },
      {
        question: "Can it handle enrollment and payment?",
        answer:
          "The AI handles enrollment inquiries and scheduling. Payment processing stays with your existing system. The AI captures the lead and books the enrollment step. You or your staff handle payment collection.",
      },
      {
        question: "How fast is setup?",
        answer:
          "Most education businesses are live within 5 to 7 business days. We configure everything. You review and approve before going live.",
      },
    ],
    reviewIndices: [2, 3, 4],
  },

  hospitality: {
    slug: "hospitality",
    title: "AI Front Desk for Hospitality Businesses",
    metaDescription:
      "Stop losing reservations and event bookings to missed calls. AI Peak Biz builds AI front desk systems for restaurants, cafes, catering, event venues, and hotels.",
    heroHeadline:
      "Envision a restaurant where every reservation request is captured, even during the dinner rush.",
    heroSubhead:
      "It is 7 PM on Friday. Every table is full. Your host is seating guests. The phone rings. And rings. A party of 8 wants to book Saturday. They call the restaurant across town instead. AI Peak Biz captures that reservation before they hang up.",
    problems: [
      {
        title: "Peak Hours Mean Missed Reservations",
        description:
          "Your busiest hours for calls are exactly when your team is busiest serving guests. Lunch rush, dinner rush, weekend brunch — the phone rings and nobody can answer. Each missed call could be a party of 4 to 12 that books somewhere else.",
        cost: "Typical loss: $2,000 to $10,000 per month in lost reservations",
      },
      {
        title: "Event Inquiries Slip Through",
        description:
          "A bride calls about a rehearsal dinner for 40 guests. Nobody picks up. She leaves a message. You call back the next day. She already booked with the venue that answered on the first ring. That was a $4,000 to $15,000 event.",
        cost: "Typical loss: $5,000 to $20,000 per quarter in lost events",
      },
      {
        title: "Reservation No-Shows Waste Prep and Staff",
        description:
          "A table of 6 does not show. You prepped food, staffed an extra server, and turned away a walk-in party. Without automated confirmation and reminders, no-show rates for restaurants run 10 to 20 percent.",
        cost: "Typical loss: $1,500 to $5,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI host answers every call during and after hours. It knows your hours, menu highlights, private dining options, and reservation availability. Guests book tables and event inquiries are captured 24/7.",
      },
      {
        title: "AI Chatbot",
        description:
          "Your website chatbot handles reservation requests, catering inquiries, and event bookings. Guests browsing your menu at midnight can book a Saturday dinner table or inquire about a holiday party.",
      },
      {
        title: "Reservation Reminders",
        description:
          "Automated reminders and confirmation requests reduce no-shows. Guests confirm or cancel via text. Canceled tables are released for walk-ins or other bookings.",
      },
      {
        title: "Reputation Management",
        description:
          "After every dining experience, the system requests a review. Your Google rating climbs. Tourists and newcomers choose you over competitors because of visible social proof.",
      },
    ],
    useCases: [
      {
        title: "The Restaurant During Friday Night Rush",
        description:
          "It is 7:30 PM. Every staff member is serving guests. The phone rings 12 times between 7 and 9 PM. Without AI, 8 of those calls go unanswered. With AI, all 12 are handled — 4 reservations booked, 3 questions answered, 5 callers told about wait times. You fill tables you would have left empty.",
      },
      {
        title: "The Catering Company During Wedding Season",
        description:
          "May through October, your phone rings constantly with inquiries. Your 3-person team is prepping, cooking, and serving. The AI handles initial inquiries, captures event details, and books tasting appointments. You land 8 extra events that season worth $60,000.",
      },
      {
        title: "The Event Venue After a Bridal Expo",
        description:
          "You attend a bridal expo and collect 80 leads. The AI chatbot follows up with each one, provides venue information, and books tour appointments. You convert 15 bookings from leads that would have gone cold in a manual follow-up process.",
      },
    ],
    faq: [
      {
        question: "Can the AI take reservations?",
        answer:
          "Yes. The AI knows your hours, table availability, and capacity. It books reservations directly and can handle special requests like high chairs, dietary accommodations, and private dining inquiries.",
      },
      {
        question: "Does it work for catering and events?",
        answer:
          "Absolutely. The AI captures event inquiries with details like date, guest count, budget, and menu preferences. Complex events are flagged for your event coordinator to follow up personally.",
      },
      {
        question: "Can it answer menu questions?",
        answer:
          "Yes. The AI is trained on your menu, specials, allergen information, and dietary options. It provides accurate answers so guests feel confident booking.",
      },
      {
        question: "How fast is setup?",
        answer:
          "Most hospitality businesses are live within 5 to 7 business days. We configure everything around your menu, hours, reservation system, and policies.",
      },
    ],
    reviewIndices: [0, 2, 4],
  },

  "trades-specialty": {
    slug: "trades-specialty",
    title: "AI Front Desk for Trades & Specialty Service Businesses",
    metaDescription:
      "Stop losing jobs to missed calls. AI Peak Biz builds AI front desk systems for locksmiths, movers, storage facilities, and security companies.",
    heroHeadline:
      "Envision capturing every emergency call, even when you are on a job.",
    heroSubhead:
      "A homeowner is locked out at 11 PM. They call 3 locksmiths. The first two go to voicemail. You are the third. Your AI answers, confirms you are mobile, and dispatches the job. You earn $250 because you answered.",
    problems: [
      {
        title: "Emergency Calls Cannot Wait",
        description:
          "Lockouts, security alarms, urgent moves — your clients need immediate response. Not a callback in 4 hours. Not a voicemail. Right now. If you do not answer, they call the next listing. In trades and specialty services, the first responder gets the job.",
        cost: "Typical loss: $2,000 to $8,000 per month",
      },
      {
        title: "Solo Operators Cannot Be Everywhere",
        description:
          "You are a one-person operation or a small crew. You are on a job. You cannot answer the phone. But every missed call is a missed job. You need a dispatcher but cannot afford one full-time.",
        cost: "Typical loss: $1,500 to $5,000 per month",
      },
      {
        title: "Competing Against National Brands",
        description:
          "National chains have call centers, marketing budgets, and thousands of reviews. You are local, faster, and better. But the homeowner searching at midnight does not know that. They see the chain's 4.5 stars and 1,200 reviews. You have 20.",
        cost: "Typical loss: $1,000 to $5,000 per month",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI dispatcher answers every call 24/7. It knows your service area, availability, and pricing for common services. Emergency calls are dispatched immediately. Routine calls are scheduled.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "If a call slips through, a text goes out in 60 seconds. The customer describes their situation and gets a response. You capture the job even if you could not pick up the phone.",
      },
      {
        title: "Reputation Management",
        description:
          "After every completed job, the system requests a Google review. Your review count grows weekly. Local customers start choosing you over the national chain because your reviews are real and recent.",
      },
      {
        title: "Full CRM",
        description:
          "Every call, job, and follow-up is tracked. Repeat customers are identified. Seasonal customers get automated check-ins. Your pipeline stays organized without spreadsheets or sticky notes.",
      },
    ],
    useCases: [
      {
        title: "The Locksmith at 2 AM",
        description:
          "A family is locked out of their house after a late flight. They search for locksmiths. The first two go to voicemail. Your AI answers on the second ring, confirms you cover their zip code, and dispatches the job. You earn $200 for a 20-minute job. Multiply that by 10 late-night calls per month. That is $2,000 you would have lost to voicemail.",
      },
      {
        title: "The Moving Company During Summer",
        description:
          "June through August is peak season. Inquiries triple. Your office cannot keep up. The AI handles initial inquiries, captures move details — origin, destination, date, inventory — and books in-home estimates. You book 15 extra moves that summer.",
      },
      {
        title: "The Storage Facility Filling Empty Units",
        description:
          "You have 20 empty units. The AI answers every inquiry about unit sizes, pricing, and availability. It books tours and reserves units. Your occupancy rate increases from 75 to 92 percent in 90 days without hiring a sales person.",
      },
      {
        title: "The Security Company After a Break-In Spike",
        description:
          "Local news reports a string of break-ins. Concerned homeowners start calling security companies. Your phone rings 30 times in 2 days. The AI qualifies each caller, captures their property details, and books security assessments. You sign 8 new monitoring contracts.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle emergency dispatch?",
        answer:
          "Yes. We configure the system to identify emergency calls and route them immediately — to your phone, your on-call tech, or your dispatch system. Non-emergency calls are scheduled normally.",
      },
      {
        question: "I am a one-person operation. Is this for me?",
        answer:
          "You are exactly who this is for. Solo operators lose the most to missed calls because there is nobody to answer when you are on a job. This system gives you a professional dispatch presence 24/7.",
      },
      {
        question: "Does it work for seasonal businesses?",
        answer:
          "Yes. The system scales with your demand. During peak season, it handles the surge. During slow months, it captures every lead so your pipeline stays healthy.",
      },
      {
        question: "How fast can I get set up?",
        answer:
          "Most trades and specialty businesses are live within 5 to 7 business days. We handle everything. You review and approve before going live.",
      },
    ],
    reviewIndices: [0, 1, 3],
  },
};
