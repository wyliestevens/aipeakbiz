import { SubIndustryContent } from "./sub-industry-content";

export const subIndustryContent3: Record<string, SubIndustryContent> = {
  // ═══════════════════════════════════════════════════════════════
  // AUTOMOTIVE
  // ═══════════════════════════════════════════════════════════════
  "automotive/auto-repair": {
    slug: "auto-repair",
    parentSlug: "automotive",
    name: "Auto Repair",
    title: "AI Front Desk for Auto Repair Shops",
    metaDescription:
      "Stop losing repair jobs to missed calls. AI Peak Biz answers every call, books appointments, and follows up on estimates for auto repair shops.",
    heroHeadline:
      "Envision a shop where every repair inquiry gets answered, even when your bays are full and your phone is buried under the counter.",
    heroSubhead:
      "Your techs are under cars. Your service writer is swamped. The phone rings and nobody picks up. The customer calls the shop down the road instead. AI Peak Biz builds an AI front desk that answers every call, books service appointments, and follows up on pending estimates so jobs never slip away.",
    problems: [
      {
        title: "Missed Calls During Peak Morning Hours",
        description:
          "Between 7 and 9 AM, customers are calling to schedule drop-offs, check on their vehicles, and ask about estimates. Your service writer can only handle one call at a time. The rest go to voicemail. Most callers hang up and try the next shop on Google.",
        cost: "Typical loss: $4,000 to $9,000 per month in missed repair orders",
      },
      {
        title: "Estimates That Never Convert",
        description:
          "You spend time diagnosing vehicles, writing up estimates, and calling customers with the numbers. Half never call back. Without systematic follow-up, approved work sits in limbo. Those are jobs you already spent labor diagnosing.",
        cost: "Typical loss: $3,000 to $7,000 per month in unconverted estimates",
      },
      {
        title: "No Maintenance Recall System",
        description:
          "Customers who came in for an oil change 5,000 miles ago have no idea they are due. You already earned their trust. But without a reminder, they go wherever is convenient. Your repeat business drops and customer lifetime value plummets.",
        cost: "Typical loss: $2,000 to $6,000 per month in lost repeat visits",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Your AI receptionist answers every call 24/7. It knows your service menu, hours, pricing ranges, and appointment slots. It books drop-offs, provides status updates on vehicles in progress, and routes urgent calls to your service writer.",
      },
      {
        title: "Estimate Follow-Up Automation",
        description:
          "When an estimate goes unanswered for 48 hours, your system automatically follows up via text. Customers can approve work with a single reply. No more chasing people down by phone between jobs.",
      },
      {
        title: "Maintenance Reminder Engine",
        description:
          "Based on mileage intervals and service history, your system sends timely reminders for oil changes, tire rotations, and brake inspections. Customers book directly from the text message without calling.",
      },
    ],
    useCases: [
      {
        title: "Saturday Morning Rush",
        description:
          "A customer calls at 7:15 AM to ask if you can fit in a brake job today. Your AI answers, checks availability, confirms the appointment, and sends a confirmation text. The customer shows up at 8 AM. No staff interaction needed.",
      },
      {
        title: "After-Hours Breakdown",
        description:
          "A customer's check engine light comes on at 9 PM. They call your shop. The AI answers, collects vehicle info and symptoms, and books the first available diagnostic slot for tomorrow morning. You start the day with a job already on the board.",
      },
      {
        title: "Estimate Approval Recovery",
        description:
          "A customer was quoted $1,200 for timing belt replacement three days ago and never responded. The system sends a follow-up text. The customer replies 'approved' and the job gets scheduled for next week.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle technical questions about repairs?",
        answer:
          "The AI is trained on your service menu, common repair explanations, and pricing ranges. For complex diagnostic questions, it routes the call to your service writer or takes a message with vehicle details so you can call back prepared.",
      },
      {
        question: "How does it integrate with my shop management software?",
        answer:
          "We integrate with major shop management systems including Mitchell, ShopWare, and Tekmetric. Appointments booked by the AI appear directly in your scheduling system.",
      },
      {
        question: "Will customers know they are talking to AI?",
        answer:
          "The AI introduces itself naturally and handles conversations professionally. Most customers simply appreciate getting an immediate answer instead of waiting on hold or leaving a voicemail that never gets returned.",
      },
      {
        question: "How quickly can this be set up for my shop?",
        answer:
          "Most auto repair shops are fully operational within 5 to 7 business days. We configure your services, pricing, hours, and scheduling rules during onboarding.",
      },
    ],
    reviewIndices: [],
  },

  "automotive/body-shops": {
    slug: "body-shops",
    parentSlug: "automotive",
    name: "Body Shops",
    title: "AI Front Desk for Body Shops",
    metaDescription:
      "Stop losing collision repair jobs to unanswered calls. AI Peak Biz answers every inquiry, schedules estimates, and follows up with insurance customers.",
    heroHeadline:
      "Envision a body shop where every collision inquiry gets answered, even when your estimator is in the back writing a supplement.",
    heroSubhead:
      "Collision customers are stressed and shopping fast. If you do not answer on the first ring, they call the next DRP shop on their insurance list. AI Peak Biz builds an AI system that answers every call, schedules estimate appointments, and keeps insurance customers informed throughout the repair process.",
    problems: [
      {
        title: "Insurance Customers Shopping Multiple Shops",
        description:
          "A customer just got rear-ended and their insurance company gave them three shop options. They call all three. The first shop that answers and sounds competent wins the job. If your estimator is busy writing a teardown, that $4,000 repair goes to someone else.",
        cost: "Typical loss: $6,000 to $15,000 per month in lost collision jobs",
      },
      {
        title: "Status Update Calls Overwhelming Staff",
        description:
          "Customers waiting on their vehicle call daily asking 'Is my car ready yet?' Each call pulls your front desk away from scheduling new work, processing supplements, and coordinating with adjusters. A single repair generates 4 to 6 status calls.",
        cost: "Typical loss: 15 to 20 hours per month of staff time on status calls",
      },
      {
        title: "Supplement Delays and Communication Gaps",
        description:
          "When additional damage is found, your team writes a supplement and waits for adjuster approval. Customers are not informed proactively. They get frustrated, leave negative reviews, and never refer friends. Your reputation takes the hit.",
        cost: "Typical loss: $2,000 to $5,000 per month in reputation damage and lost referrals",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant",
        description:
          "Every call is answered immediately. The AI collects vehicle info, damage description, insurance details, and schedules estimate appointments. Stressed collision customers get professional service the moment they call, not a voicemail.",
      },
      {
        title: "Automated Repair Status Updates",
        description:
          "Your system sends proactive text updates at each stage: vehicle received, teardown complete, parts ordered, in paint, reassembly, quality check, ready for pickup. Customers stop calling because they already know.",
      },
      {
        title: "Review Collection After Delivery",
        description:
          "24 hours after vehicle delivery, your system sends a satisfaction check. Happy customers are guided to Google. Concerns are flagged for your manager before they become public complaints.",
      },
    ],
    useCases: [
      {
        title: "First Call After an Accident",
        description:
          "A driver gets hit at 6 PM and calls your shop from the scene. The AI answers, confirms you handle their insurance, collects vehicle and damage info, and books an estimate appointment for the next morning. You have the job before competitors even know it exists.",
      },
      {
        title: "Daily Status Elimination",
        description:
          "A customer whose car has been in your shop for 8 days gets an automated text: 'Your 2021 Accord is in paint today. Expected ready date: Thursday.' They do not call. Your front desk handles new business instead.",
      },
      {
        title: "Insurance DRP Lead Capture",
        description:
          "An insurance company sends a referral to your shop after hours. The AI calls the customer within minutes, confirms appointment scheduling, and books them in. The customer feels taken care of before they even had to think about it.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle insurance-specific questions?",
        answer:
          "Yes. We train the system on DRP processes, common insurance terminology, deductible explanations, and rental car coordination. It handles 80 percent of insurance questions without needing human help.",
      },
      {
        question: "How do status updates work with my management system?",
        answer:
          "We integrate with CCC ONE, Mitchell Cloud, and other body shop management systems. When your team updates repair status internally, customer notifications go out automatically.",
      },
      {
        question: "What about customers who want to speak to a person?",
        answer:
          "The AI can transfer to your estimator or manager at any point. It is designed to handle routine inquiries and scheduling. Complex claims discussions get routed to your team with full context.",
      },
      {
        question: "Will this work if I am not on a DRP program?",
        answer:
          "Absolutely. Non-DRP shops often benefit even more because they rely heavily on inbound calls and referrals. Answering every call and following up promptly is how you compete with DRP shops that get insurance referrals automatically.",
      },
    ],
    reviewIndices: [],
  },

  "automotive/detailing": {
    slug: "detailing",
    parentSlug: "automotive",
    name: "Detailing",
    title: "AI Front Desk for Detailing Businesses",
    metaDescription:
      "Stop losing detailing jobs to missed calls and no-shows. AI Peak Biz books appointments, sends reminders, and fills your schedule automatically.",
    heroHeadline:
      "Envision a detailing business where your schedule is full every week without you chasing leads between jobs.",
    heroSubhead:
      "You are elbow-deep in a ceramic coating when the phone rings. You cannot answer. That customer books with a mobile detailer on Instagram instead. AI Peak Biz builds an AI system that answers inquiries, books jobs, sends reminders, and keeps your calendar packed.",
    problems: [
      {
        title: "Missed Calls While Detailing",
        description:
          "A full detail takes 4 to 8 hours. You cannot stop mid-polish to answer the phone. Calls go to voicemail. By the time you call back at 6 PM, the customer already booked someone else. Solo detailers miss 40 to 60 percent of inbound calls.",
        cost: "Typical loss: $2,500 to $6,000 per month in missed bookings",
      },
      {
        title: "No-Shows on Premium Services",
        description:
          "A customer books a $500 ceramic coating for Saturday. They forget or something comes up. No reminder was sent. You blocked out an entire day for nothing. No-shows on high-ticket detailing services are devastating to weekly revenue.",
        cost: "Typical loss: $1,500 to $4,000 per month in no-show revenue",
      },
      {
        title: "Seasonal Dips Without Reactivation",
        description:
          "Winter hits and your phone stops ringing. You have 200 past customers who would book interior details or paint protection if reminded. But you are too busy during peak season to build a follow-up system, and too slow during off-season to afford marketing.",
        cost: "Typical loss: $3,000 to $8,000 per quarter in dormant customer revenue",
      },
    ],
    solutions: [
      {
        title: "AI Voice & Text Booking",
        description:
          "Every call and text inquiry is handled instantly. The AI knows your service packages, pricing, availability, and can book appointments directly. Customers get confirmation and prep instructions automatically.",
      },
      {
        title: "Appointment Reminders & No-Show Prevention",
        description:
          "48-hour and 2-hour reminders go out automatically via text. Customers can confirm, reschedule, or cancel with a reply. Your calendar stays accurate and your days stay full.",
      },
      {
        title: "Seasonal Reactivation Campaigns",
        description:
          "Your system automatically reaches out to past customers based on their last service date. Winter interior detail specials, spring pollen season reminders, and annual ceramic coating maintenance alerts keep your pipeline full year-round.",
      },
    ],
    useCases: [
      {
        title: "Mid-Detail Inquiry",
        description:
          "You are applying a ceramic coating when a customer texts asking about prices for a full interior detail on their SUV. The AI responds within 30 seconds with package options and available dates. The customer books a $350 job while you never stop working.",
      },
      {
        title: "Weekend No-Show Prevention",
        description:
          "A customer booked a paint correction for Saturday at $600. Thursday evening they get a reminder text. They realize they have a conflict and reschedule to the following weekend. You fill Saturday's slot with another customer from your waitlist.",
      },
      {
        title: "Winter Revenue Recovery",
        description:
          "In January, your system texts 150 past customers: 'Your last detail was 4 months ago. Book a winter interior deep-clean this week and save $50.' Twelve customers book. That is $3,600 in a typically dead week.",
      },
    ],
    faq: [
      {
        question: "I am a solo detailer. Is this worth it for a one-person operation?",
        answer:
          "Solo detailers benefit the most. You physically cannot answer the phone while working. Every missed call is a lost job. The AI ensures you never miss a booking opportunity regardless of how busy you are.",
      },
      {
        question: "Can the AI explain my different packages and pricing?",
        answer:
          "Yes. We program your full service menu including package names, what is included, pricing tiers by vehicle size, and add-on options. Customers get accurate quotes without you stopping work.",
      },
      {
        question: "How does it handle mobile detailing vs. shop appointments?",
        answer:
          "The AI is configured for your business model. For mobile detailers, it collects the customer's address, vehicle location, and access details. For shop-based operations, it books time slots at your location.",
      },
      {
        question: "What if a customer has a complex request like a full restoration?",
        answer:
          "For complex or custom jobs, the AI collects vehicle details, photos if texting, and the customer's goals, then schedules a consultation call with you at a time you choose. You handle the custom quote personally.",
      },
    ],
    reviewIndices: [],
  },

  "automotive/tire-shops": {
    slug: "tire-shops",
    parentSlug: "automotive",
    name: "Tire Shops",
    title: "AI Front Desk for Tire Shops",
    metaDescription:
      "Stop losing tire sales to unanswered calls. AI Peak Biz answers every inquiry, quotes tire prices, and books installations for tire shops.",
    heroHeadline:
      "Envision a tire shop where every customer gets an instant quote, even when your bays are backed up and your counter staff is slammed.",
    heroSubhead:
      "A customer blows a tire and needs replacements today. They call three shops. The first one that answers with availability and a price wins the sale. AI Peak Biz ensures you are always that shop. Every call answered. Every tire quoted. Every installation booked.",
    problems: [
      {
        title: "Price Shopping Calls You Cannot Answer Fast Enough",
        description:
          "Tire buyers call 2 to 4 shops comparing prices. If your counter is busy with a customer in front of them, that call goes unanswered. The caller gets a quote from your competitor first and books there. Tire sales are won by speed, not price.",
        cost: "Typical loss: $5,000 to $12,000 per month in lost tire sales",
      },
      {
        title: "Emergency Calls After Hours",
        description:
          "Customers blow tires at 7 PM, 10 PM, on weekends. They search for tire shops and call. You are closed. They find a shop open Sunday or remember to call a competitor Monday morning. You lose the urgent buyer who would have paid full price.",
        cost: "Typical loss: $2,000 to $5,000 per month in after-hours lost sales",
      },
      {
        title: "Seasonal Tire Changeover Chaos",
        description:
          "When the first snowfall hits or spring arrives, everyone calls the same week for winter or all-season swaps. Your phone rings off the hook. Staff books some, misses many. Customers who cannot get through go elsewhere and may not come back.",
        cost: "Typical loss: $8,000 to $20,000 per seasonal rush in overflow customers",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant with Tire Quoting",
        description:
          "Your AI answers every call instantly. It asks for vehicle year, make, model, and tire size, then provides pricing from your current inventory. It books the installation appointment on the spot. Customers get the speed they demand.",
      },
      {
        title: "After-Hours Booking System",
        description:
          "When customers call after close, the AI takes their vehicle info, recommends tire options, and books them for the next available slot. They wake up with a confirmation text. You start the morning with pre-booked revenue.",
      },
      {
        title: "Seasonal Rush Overflow Handling",
        description:
          "During seasonal peaks, the AI handles unlimited simultaneous calls. No busy signals. No hold times. Every customer gets quoted and booked. Your bays stay full for weeks without staff burnout.",
      },
    ],
    useCases: [
      {
        title: "Flat Tire Emergency",
        description:
          "A customer gets a flat at 5:30 PM, 30 minutes before close. They call your shop. The AI answers, confirms you have their tire size in stock, and books them for a 6 PM emergency install. You make a $200 sale that would have gone to a competitor.",
      },
      {
        title: "Price Comparison Winner",
        description:
          "A customer calls three shops for pricing on a set of all-seasons. Your AI answers on the first ring, quotes $680 installed for their specific vehicle. The other shops are busy. You win the sale on speed alone.",
      },
      {
        title: "Winter Tire Season Surge",
        description:
          "First frost warning hits. Your phone gets 80 calls in one day. The AI handles them all simultaneously, booking installations across the next two weeks. Your schedule fills without a single customer hearing a busy signal.",
      },
    ],
    faq: [
      {
        question: "Can the AI actually quote tire prices accurately?",
        answer:
          "Yes. We load your current inventory and pricing into the system. The AI matches tires by vehicle specifications and provides accurate installed pricing. When inventory changes, you update the system and quotes adjust immediately.",
      },
      {
        question: "What if a customer needs a tire size I do not stock?",
        answer:
          "The AI informs the customer that special ordering is available, provides an estimated timeline, and offers to schedule the installation once the tires arrive. It can also suggest in-stock alternatives that fit their vehicle.",
      },
      {
        question: "How does this handle fleet accounts or commercial customers?",
        answer:
          "Fleet customers are identified by account number or company name. The AI applies their negotiated pricing, notes PO numbers, and schedules multiple vehicles efficiently. Your commercial accounts get VIP service 24/7.",
      },
      {
        question: "Does it integrate with my point-of-sale system?",
        answer:
          "We integrate with major tire shop POS systems and can push appointment data directly into your workflow. At minimum, appointments sync to your scheduling calendar so your team knows what is coming each morning.",
      },
    ],
    reviewIndices: [],
  },

  "automotive/dealerships": {
    slug: "dealerships",
    parentSlug: "automotive",
    name: "Dealerships",
    title: "AI Front Desk for Dealerships",
    metaDescription:
      "Stop losing car buyers and service customers to unanswered calls. AI Peak Biz handles sales inquiries, service scheduling, and lead follow-up for dealerships.",
    heroHeadline:
      "Envision a dealership where every sales inquiry and service call gets a professional response within seconds, day or night.",
    heroSubhead:
      "Your BDC team goes home at 6 PM. Internet leads keep coming in. Phone calls go to a generic voicemail. By morning, those buyers have already submitted leads to three other dealerships. AI Peak Biz ensures every lead gets immediate engagement and every service customer gets booked.",
    problems: [
      {
        title: "Internet Leads Going Cold",
        description:
          "A buyer submits a lead on your website at 9 PM. Your BDC responds at 8:30 AM the next morning. By then the customer has submitted leads to four other dealerships. Studies show response time under 5 minutes increases close rates by 400 percent. Most dealerships respond in 45 minutes or more.",
        cost: "Typical loss: $15,000 to $40,000 per month in lost unit sales",
      },
      {
        title: "Service Department Phone Overflow",
        description:
          "Your service advisors are writing up customers at the counter. The phones ring constantly. Calls go to the receptionist who cannot answer service questions. Customers hang up, skip their maintenance, and eventually buy their next car from a dealer with better service experience.",
        cost: "Typical loss: $8,000 to $20,000 per month in missed service revenue",
      },
      {
        title: "Orphaned Customers After Salesperson Turnover",
        description:
          "Your sales staff turns over 60 to 70 percent annually. When a salesperson leaves, their customer relationships disappear. Service reminders stop. Trade-in follow-ups die. Customers who would buy again in 3 years never hear from you.",
        cost: "Typical loss: $10,000 to $30,000 per quarter in lost repeat and referral business",
      },
    ],
    solutions: [
      {
        title: "AI Lead Response (Under 60 Seconds)",
        description:
          "Every internet lead gets an immediate personalized response. The AI confirms vehicle availability, answers initial questions, and schedules a test drive or phone appointment with your sales team. Leads never go cold.",
      },
      {
        title: "AI Service Scheduling",
        description:
          "Your AI handles service calls 24/7. It books oil changes, tire rotations, recalls, and warranty work directly into your DMS scheduling system. Customers get confirmation texts with appointment details and shuttle options.",
      },
      {
        title: "Customer Lifecycle Automation",
        description:
          "Your system tracks every customer regardless of which salesperson sold them. Service reminders, lease maturity alerts, trade-in value updates, and anniversary messages go out automatically. No customer falls through the cracks when staff turns over.",
      },
    ],
    useCases: [
      {
        title: "Late-Night Lead Capture",
        description:
          "A buyer submits a lead on a used truck at 10:45 PM. Within 30 seconds, the AI texts them confirming the truck is available, answers their trade-in question, and books a test drive for tomorrow at noon. The customer shows up. Your competitors respond the next morning to an already-sold buyer.",
      },
      {
        title: "Service Overflow During Monday Rush",
        description:
          "Monday morning your service phones ring 40 times before 9 AM. The AI handles every call simultaneously, booking oil changes, confirming recall appointments, and answering warranty questions. Your advisors focus on customers standing in front of them.",
      },
      {
        title: "Lease Maturity Mining",
        description:
          "A customer's lease matures in 90 days. Your system sends a personalized message about new model options, current incentives, and offers to schedule an upgrade appointment. The customer comes back to your store instead of shopping competitors.",
      },
    ],
    faq: [
      {
        question: "Can the AI check real-time vehicle inventory?",
        answer:
          "Yes. We integrate with your DMS and inventory management system. The AI provides accurate availability, pricing, and basic vehicle details. It can filter by color, trim, features, and price range based on customer preferences.",
      },
      {
        question: "How does this work alongside my existing BDC team?",
        answer:
          "The AI handles initial response speed and after-hours coverage. During business hours, it qualifies leads and routes hot buyers to your BDC for personal follow-up. Your team handles negotiations and relationship building. The AI handles the speed game.",
      },
      {
        question: "Does it work for both sales and service departments?",
        answer:
          "Yes. The system is configured for both. Sales inquiries route to sales workflows. Service calls route to service scheduling. The AI knows which department to engage based on the customer's question.",
      },
      {
        question: "What about compliance with advertising regulations?",
        answer:
          "The AI is trained on your approved pricing, disclaimers, and compliance requirements. It does not make promises outside your configured parameters. All conversations are logged for compliance review.",
      },
    ],
    reviewIndices: [],
  },

  // ═══════════════════════════════════════════════════════════════
  // FITNESS & WELLNESS
  // ═══════════════════════════════════════════════════════════════
  "fitness-wellness/gyms": {
    slug: "gyms",
    parentSlug: "fitness-wellness",
    name: "Gyms",
    title: "AI Front Desk for Gyms",
    metaDescription:
      "Stop losing memberships to unanswered calls and tour no-shows. AI Peak Biz answers inquiries, books tours, and reactivates cancelled members for gyms.",
    heroHeadline:
      "Envision a gym where every membership inquiry turns into a booked tour, and cancelled members come back without your staff chasing them.",
    heroSubhead:
      "Someone drives by your gym, gets motivated, and calls to ask about membership. The front desk is helping a member with a billing issue. The call goes unanswered. That prospect joins Planet Fitness instead. AI Peak Biz ensures every inquiry becomes a tour, every tour becomes a member.",
    problems: [
      {
        title: "Tour No-Shows Kill Membership Sales",
        description:
          "A prospect books a tour for Saturday at 10 AM. No reminder is sent. They sleep in or forget. Your membership consultant waits around for nothing. Tour no-show rates at gyms run 40 to 50 percent without automated reminders.",
        cost: "Typical loss: $3,000 to $8,000 per month in lost new memberships",
      },
      {
        title: "Cancelled Members Never Hear From You Again",
        description:
          "A member cancels because they are 'too busy.' Three months later they want to come back but inertia keeps them away. Without outreach, you lose their $50 to $150 per month forever. Most gyms lose 30 to 50 percent of members annually and never attempt reactivation.",
        cost: "Typical loss: $5,000 to $15,000 per month in lapsed member revenue",
      },
      {
        title: "Front Desk Overwhelmed During Peak Hours",
        description:
          "Between 5 and 7 PM your front desk is checking members in, handling towel service, answering billing questions, and selling protein shakes. The phone rings. It does not get answered. Prospects with questions about classes, hours, or pricing never call back.",
        cost: "Typical loss: $2,000 to $5,000 per month in missed prospect calls",
      },
    ],
    solutions: [
      {
        title: "AI Voice & Text for Membership Inquiries",
        description:
          "Every call and text about membership gets an immediate professional response. The AI answers questions about pricing, classes, amenities, and hours. It books tours at specific times with specific staff. Prospects feel welcomed before they walk in the door.",
      },
      {
        title: "Tour Reminder & Follow-Up System",
        description:
          "Booked tours get a confirmation text, a 24-hour reminder, and a 2-hour reminder. No-show rates drop by 60 percent. If someone misses their tour, the system follows up to reschedule rather than letting them disappear.",
      },
      {
        title: "Cancelled Member Reactivation",
        description:
          "30, 60, and 90 days after cancellation, your system reaches out with personalized messages. New class offerings, limited-time return rates, and 'we miss you' campaigns bring members back at a fraction of new acquisition cost.",
      },
    ],
    useCases: [
      {
        title: "New Year Resolution Surge",
        description:
          "January 2nd, your phone rings 60 times. The AI handles every call, books tours throughout the week, and sends prep emails about what to bring. Your sales team has a packed tour schedule without being on the phone all day.",
      },
      {
        title: "Evening Peak Hour Inquiry",
        description:
          "A prospect calls at 5:45 PM during the busiest hour. The AI answers, describes your membership tiers and class schedule, and books a tour for the next morning. The prospect shows up. Without the AI, they would have gotten voicemail and never called back.",
      },
      {
        title: "Win-Back Campaign",
        description:
          "A member cancelled 45 days ago. Your system texts them about a new HIIT class that just launched. They reply asking about pricing. The AI handles the conversation and books a return visit. You win back $100 per month in recurring revenue without staff effort.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle different membership tier questions?",
        answer:
          "Yes. We configure all your membership options including pricing, inclusions, contract terms, and promotional rates. The AI presents options clearly and can explain differences between tiers based on the prospect's goals.",
      },
      {
        question: "How does it work with my gym management software?",
        answer:
          "We integrate with major platforms including Mindbody, Club OS, ABC Fitness, and others. Tour bookings, membership inquiries, and reactivation data sync directly to your system.",
      },
      {
        question: "Will this replace my membership sales team?",
        answer:
          "No. The AI handles the speed and availability problem. It answers calls, books tours, and warms up prospects. Your sales team handles the in-person tour, relationship building, and closing. They spend less time on the phone and more time selling face-to-face.",
      },
      {
        question: "Can it handle class schedule questions?",
        answer:
          "Absolutely. The AI knows your full class schedule, instructor names, class descriptions, and capacity. It can recommend classes based on the prospect's fitness goals and even add them to a class waitlist.",
      },
    ],
    reviewIndices: [],
  },

  "fitness-wellness/personal-trainers": {
    slug: "personal-trainers",
    parentSlug: "fitness-wellness",
    name: "Personal Trainers",
    title: "AI Front Desk for Personal Trainers",
    metaDescription:
      "Stop losing clients to slow responses. AI Peak Biz handles inquiries, books consultations, and reduces cancellations for personal trainers.",
    heroHeadline:
      "Envision a training business where new client inquiries get answered instantly, even when you are mid-session with a current client.",
    heroSubhead:
      "You are spotting a client on bench press when your phone buzzes. A new lead from Instagram is asking about pricing. By the time your session ends and you respond two hours later, they have already booked with another trainer. AI Peak Biz handles inquiries in real time so you never lose a lead while training.",
    problems: [
      {
        title: "Cannot Respond While Training Clients",
        description:
          "You train clients 6 to 8 hours per day. During those hours, you cannot check DMs, return calls, or respond to texts. New leads expect a response within minutes. By the time you are free, they have moved on. Personal trainers report losing 3 to 5 leads per week to slow responses.",
        cost: "Typical loss: $2,000 to $6,000 per month in lost new clients",
      },
      {
        title: "Last-Minute Cancellations",
        description:
          "A client texts at 5 AM that they cannot make their 6 AM session. Your 24-hour cancellation policy exists but you do not enforce it. The slot goes unfilled. At $75 to $150 per session, 3 to 4 cancellations per week drain your income.",
        cost: "Typical loss: $1,200 to $3,000 per month in cancelled sessions",
      },
      {
        title: "Package Expirations Without Rebooking",
        description:
          "A client finishes their 12-session package. You mean to follow up but get busy. They do not rebook because nobody asked. Two weeks become two months. They find a new trainer closer to work. Your retention suffers from simple neglect.",
        cost: "Typical loss: $1,500 to $4,000 per month in lost renewals",
      },
    ],
    solutions: [
      {
        title: "AI Inquiry Response",
        description:
          "Every DM, text, and call gets an immediate response. The AI answers questions about your training style, specialties, pricing, and availability. It books free consultations or intro sessions directly into your calendar while you focus on the client in front of you.",
      },
      {
        title: "Cancellation Policy Enforcement",
        description:
          "Automated reminders go out 24 hours and 2 hours before sessions. When clients cancel inside the policy window, the system handles communication about the cancellation fee. You maintain boundaries without awkward conversations.",
      },
      {
        title: "Package Renewal Automation",
        description:
          "When a client is two sessions from finishing their package, your system sends a renewal prompt with rebooking options. Clients can renew and schedule their next block of sessions without waiting for you to bring it up.",
      },
    ],
    useCases: [
      {
        title: "Instagram Lead While Training",
        description:
          "A prospect DMs you at 3 PM asking about your rates and availability. You are mid-session. The AI responds within a minute, shares your training packages, and books a free consultation for tomorrow at the client's preferred time. You gain a new $400/month client without interrupting your current session.",
      },
      {
        title: "Early Morning Cancellation Fill",
        description:
          "A client cancels their 7 AM slot at 6 AM. Your system automatically texts your waitlist of clients who want extra sessions. Someone grabs the slot within 20 minutes. Your revenue stays intact.",
      },
      {
        title: "Package Expiry Save",
        description:
          "A client has one session remaining. Your system texts them: 'You have 1 session left in your package. Ready to renew? Here are your options.' The client purchases another 12-session package that evening. No awkward sales conversation needed.",
      },
    ],
    faq: [
      {
        question: "I train at a big box gym. Does this still work?",
        answer:
          "Yes. Whether you train at a commercial gym, private studio, or clients' homes, the AI handles your booking and client communication. It works around your existing schedule regardless of location.",
      },
      {
        question: "Can the AI answer questions about my training philosophy?",
        answer:
          "We configure the AI with your specialties, certifications, training approach, and ideal client profile. It represents you accurately. For detailed program questions, it schedules a consultation so you can discuss personally.",
      },
      {
        question: "How does it handle different session types and pricing?",
        answer:
          "The AI knows all your offerings: one-on-one sessions, partner training, small group, online coaching, and package pricing. It presents the right options based on what the prospect is looking for.",
      },
      {
        question: "What if a client wants to reschedule, not cancel?",
        answer:
          "The system handles rescheduling smoothly. Clients can move sessions to available slots via text. You see the updated calendar without any back-and-forth text chains.",
      },
    ],
    reviewIndices: [],
  },

  "fitness-wellness/yoga-studios": {
    slug: "yoga-studios",
    parentSlug: "fitness-wellness",
    name: "Yoga Studios",
    title: "AI Front Desk for Yoga Studios",
    metaDescription:
      "Stop losing students to missed calls and class no-shows. AI Peak Biz answers inquiries, manages class bookings, and fills your mat space for yoga studios.",
    heroHeadline:
      "Envision a studio where every class is full, new students feel welcomed before they arrive, and no-shows become rare.",
    heroSubhead:
      "A newcomer works up the courage to try yoga. They call your studio to ask about beginner classes. Nobody answers because your instructor is teaching. They lose their nerve and never call back. AI Peak Biz ensures every curious student gets a warm, informative response that brings them through your door.",
    problems: [
      {
        title: "New Student Inquiries Go Unanswered",
        description:
          "Your studio may not have a dedicated receptionist. When classes are in session, nobody is at the front desk. New students calling with questions about what to wear, which class to start with, or pricing hear a voicemail. For nervous beginners, that is enough friction to give up entirely.",
        cost: "Typical loss: $2,000 to $5,000 per month in lost new memberships",
      },
      {
        title: "Class No-Shows Leave Empty Mats",
        description:
          "Students sign up for a 6 PM vinyasa class but do not show. Meanwhile, 3 people on the waitlist would have taken those spots. Without reminders and waitlist automation, your classes run at 70 percent capacity instead of 100 percent.",
        cost: "Typical loss: $1,500 to $4,000 per month in underutilized class capacity",
      },
      {
        title: "Membership Churn After Intro Offers",
        description:
          "You offer a $49 intro month to get students in the door. When it expires, 60 percent do not convert to full memberships. Without nurture communication during that first month, students never build the habit. Your acquisition cost is wasted.",
        cost: "Typical loss: $2,000 to $6,000 per month in failed intro conversions",
      },
    ],
    solutions: [
      {
        title: "AI Welcome System for New Students",
        description:
          "Every inquiry gets an immediate, warm response. The AI answers questions about class styles, what to bring, difficulty levels, and scheduling. It recommends the right starter class and books their first visit. New students arrive feeling prepared and welcomed.",
      },
      {
        title: "Class Reminder & Waitlist Automation",
        description:
          "Students get reminders before class. If they cancel, the next person on the waitlist is automatically notified and booked. Your mats stay full. No manual waitlist management needed.",
      },
      {
        title: "Intro-to-Member Conversion Nurture",
        description:
          "During intro periods, students receive check-in messages, class recommendations based on what they have tried, and milestone celebrations. When their intro expires, the transition to full membership feels natural because they already have a routine.",
      },
    ],
    useCases: [
      {
        title: "Nervous Beginner Inquiry",
        description:
          "Someone texts your studio at 8 PM: 'I have never done yoga. Is that embarrassing? What class should I try?' The AI responds warmly, recommends your Gentle Yoga class, explains what to expect, and books them for Saturday morning. A brand new student walks in confident.",
      },
      {
        title: "Waitlist Fill on Popular Class",
        description:
          "Your 5:30 PM Power Vinyasa is full with a 4-person waitlist. Two hours before class, a student cancels. The system texts the first waitlister. They confirm within 10 minutes. Class runs at full capacity.",
      },
      {
        title: "Intro Month Conversion",
        description:
          "A student is in week 3 of their intro month and has attended 6 classes. Your system sends: 'You are building a beautiful practice. Your intro ends next week. Here is how to continue without interruption.' They convert to a monthly membership before the intro expires.",
      },
    ],
    faq: [
      {
        question: "Can the AI describe different class styles appropriately?",
        answer:
          "Yes. We configure descriptions for every class on your schedule including intensity level, what to expect, who it is best for, and instructor style. The AI matches students to the right class based on their experience and goals.",
      },
      {
        question: "How does it handle workshop and special event registration?",
        answer:
          "Workshops, teacher trainings, and special events are configured separately with their own pricing, prerequisites, and capacity. The AI handles registration, collects payment info if needed, and sends event details.",
      },
      {
        question: "Will it work with Mindbody or my booking software?",
        answer:
          "Yes. We integrate with Mindbody, Momence, Wellness Living, and other studio management platforms. Class bookings, waitlists, and membership changes sync directly.",
      },
      {
        question: "Can it handle teacher substitute notifications?",
        answer:
          "When you update a class with a substitute teacher, the system can notify registered students about the change and give them the option to keep their spot or cancel without penalty.",
      },
    ],
    reviewIndices: [],
  },

  "fitness-wellness/nutritionists": {
    slug: "nutritionists",
    parentSlug: "fitness-wellness",
    name: "Nutritionists",
    title: "AI Front Desk for Nutritionists",
    metaDescription:
      "Stop losing nutrition clients to slow follow-up. AI Peak Biz books consultations, sends appointment reminders, and reactivates past clients for nutritionists.",
    heroHeadline:
      "Envision a nutrition practice where consultations are always booked, clients show up prepared, and past clients return when they need you again.",
    heroSubhead:
      "A potential client decides Sunday night they are ready to get serious about their diet. They call Monday morning. You are in a client session. They lose momentum and never call back. AI Peak Biz captures that motivation the moment it happens and turns it into a booked consultation.",
    problems: [
      {
        title: "Motivation-Dependent Leads Go Cold",
        description:
          "People decide to see a nutritionist in moments of motivation. They call or message with energy. If they do not get a response within hours, the motivation fades and they do not follow through. Unlike emergency services, nutrition is optional. Every hour of delay costs conversions.",
        cost: "Typical loss: $1,500 to $4,000 per month in lost new clients",
      },
      {
        title: "Consultation No-Shows",
        description:
          "New clients book a discovery call or initial consultation. Without reminders and confirmation, 30 to 40 percent no-show. You blocked time, prepared their intake form, and have nothing to show for it. Your hourly earning potential drops significantly.",
        cost: "Typical loss: $800 to $2,500 per month in no-show revenue",
      },
      {
        title: "Clients Disappear After Initial Plan",
        description:
          "You create a beautiful nutrition plan for a new client. They follow it for 3 weeks, then life gets busy and they stop. Without check-in prompts, they drift away. The ongoing coaching revenue disappears. Reacquisition would cost 5x retention.",
        cost: "Typical loss: $2,000 to $5,000 per month in lost ongoing coaching revenue",
      },
    ],
    solutions: [
      {
        title: "Instant Inquiry Response",
        description:
          "When a potential client reaches out, they get an immediate response. The AI answers questions about your approach, specialties, insurance acceptance, and availability. It books discovery calls or initial consultations within minutes of inquiry.",
      },
      {
        title: "Consultation Prep & Reminders",
        description:
          "Booked clients receive preparation instructions (food diary, goals worksheet, what to bring). Reminders go out 24 hours and 2 hours before. No-show rates drop by half. Clients arrive prepared, making sessions more productive.",
      },
      {
        title: "Client Retention Check-Ins",
        description:
          "Between appointments, your system sends periodic check-ins. Quick accountability prompts, meal prep reminders, and progress celebrations keep clients engaged. When they need support, rebooking a session is one text reply away.",
      },
    ],
    useCases: [
      {
        title: "Sunday Night Motivation Capture",
        description:
          "A person has a bad weekend of eating and decides Sunday at 9 PM to finally see a nutritionist. They text your practice. The AI responds immediately, validates their decision, answers questions about your approach, and books a consultation for Tuesday. By Tuesday they show up ready to commit.",
      },
      {
        title: "No-Show Prevention",
        description:
          "A new client booked a consultation 5 days ago. The day before, they get a reminder with parking directions and a note to bring their food diary. The morning of, another reminder. They show up prepared. Without this, they would have forgotten.",
      },
      {
        title: "Lapsed Client Recovery",
        description:
          "A client has not booked in 6 weeks. Your system reaches out: 'Hi Sarah, just checking in. How is the meal prep going? Would you like to schedule a follow-up to adjust your plan for summer?' Sarah books a session. Ongoing coaching revenue resumes.",
      },
    ],
    faq: [
      {
        question: "Can the AI answer questions about my specialties and approach?",
        answer:
          "Yes. We configure the AI with your credentials, specialties (sports nutrition, gut health, weight management, etc.), methodology, and frequently asked questions. It represents your practice accurately to potential clients.",
      },
      {
        question: "How does it handle insurance and payment questions?",
        answer:
          "The AI knows which insurance plans you accept, your self-pay rates, and package pricing. It can explain coverage basics and direct clients to verify their specific benefits before the first appointment.",
      },
      {
        question: "Will it work with my telehealth platform?",
        answer:
          "Yes. Whether you see clients in person, via Zoom, or through a telehealth platform, the AI books appointments and sends the appropriate meeting link or location details.",
      },
      {
        question: "Can it send intake forms before the first appointment?",
        answer:
          "Absolutely. After booking, the system automatically sends your intake form, food diary template, and any prep materials. Clients complete them before arriving so your first session is productive from minute one.",
      },
    ],
    reviewIndices: [],
  },

  "fitness-wellness/massage-therapy": {
    slug: "massage-therapy",
    parentSlug: "fitness-wellness",
    name: "Massage Therapy",
    title: "AI Front Desk for Massage Therapists",
    metaDescription:
      "Stop losing massage clients to unanswered calls. AI Peak Biz books appointments, fills cancellations, and keeps your table full for massage therapists.",
    heroHeadline:
      "Envision a massage practice where your table is booked solid, cancellations get filled instantly, and you never interrupt a session to answer the phone.",
    heroSubhead:
      "Your hands are on a client. Your phone buzzes with a new booking request. You cannot answer. By the time the session ends, the caller booked with someone available right now. AI Peak Biz keeps your schedule full without you ever stopping a session to answer the phone.",
    problems: [
      {
        title: "Cannot Answer During Sessions",
        description:
          "A 60-minute massage means 60 minutes of zero phone availability. Back-to-back sessions mean 4 to 6 hours of missed calls. Massage seekers in pain or stress want immediate relief. If you do not answer, they call the next therapist. Solo practitioners miss 50 percent or more of calls.",
        cost: "Typical loss: $2,000 to $5,000 per month in missed bookings",
      },
      {
        title: "Last-Minute Cancellations Leave Empty Slots",
        description:
          "A client cancels their 2 PM appointment at noon. That is a $100 to $150 slot you cannot fill manually in 2 hours. Over a month, 4 to 6 last-minute cancellations represent a significant revenue hole that is hard to recover from.",
        cost: "Typical loss: $600 to $1,500 per month in unfilled cancellation slots",
      },
      {
        title: "Inconsistent Rebooking After Sessions",
        description:
          "After a great massage, clients intend to rebook. But you are resetting the room for the next client and forget to prompt them. They leave without scheduling. Weeks pass. The urgency fades. Monthly recurring revenue never develops.",
        cost: "Typical loss: $1,500 to $4,000 per month in lost recurring appointments",
      },
    ],
    solutions: [
      {
        title: "AI Booking Assistant",
        description:
          "Every call and text gets an immediate response. The AI knows your service menu, durations, pricing, and real-time availability. Clients book instantly. You see new appointments between sessions without making a single phone call.",
      },
      {
        title: "Cancellation Fill System",
        description:
          "When a client cancels, your system automatically texts clients who have expressed interest in earlier appointments or last-minute openings. The slot often fills within 30 minutes without any effort from you.",
      },
      {
        title: "Post-Session Rebooking Prompt",
        description:
          "One hour after each session, your system texts the client: 'How are you feeling? Ready to book your next session?' with a direct booking link. Clients rebook while the positive experience is fresh. Recurring revenue builds automatically.",
      },
    ],
    useCases: [
      {
        title: "Pain-Driven Urgent Booking",
        description:
          "A new client wakes up with a stiff neck and calls three massage therapists at 8 AM. Your AI answers first, confirms availability at 11 AM, and books the $120 session. The client is on your table by lunch. The other two therapists call back at noon to a number that no longer needs them.",
      },
      {
        title: "Same-Day Cancellation Recovery",
        description:
          "A regular cancels their 3 PM slot at 1 PM. Your system texts 8 clients who prefer afternoon appointments. Two respond. The first to confirm gets the slot. Your revenue stays intact.",
      },
      {
        title: "Membership Rebooking Cycle",
        description:
          "A client with a monthly massage membership gets a text after their session offering to book next month's appointment at their preferred time. They lock in their usual Thursday 4 PM slot. Your calendar fills a month in advance.",
      },
    ],
    faq: [
      {
        question: "Can the AI ask about pressure preferences and health conditions?",
        answer:
          "Yes. The AI collects relevant intake information for new clients including pressure preference, areas of concern, and basic health questions. This information is available to you before the session starts so you can prepare appropriately.",
      },
      {
        question: "How does it handle couples massage bookings?",
        answer:
          "If you offer couples massage, the AI knows to check availability for two therapists simultaneously, confirm the room, and collect information for both clients. It handles the complexity that makes couples bookings difficult by phone.",
      },
      {
        question: "What if I work at multiple locations?",
        answer:
          "The AI manages scheduling across all your locations. It asks clients their preferred location, shows availability specific to that site, and ensures you are never double-booked across locations.",
      },
      {
        question: "Can clients choose their session length?",
        answer:
          "Absolutely. The AI presents your available session lengths (30, 60, 90, 120 minutes), explains what each allows, and books the appropriate time block. It can also recommend a duration based on the client's stated concerns.",
      },
    ],
    reviewIndices: [],
  },

  // ═══════════════════════════════════════════════════════════════
  // BEAUTY
  // ═══════════════════════════════════════════════════════════════
  "beauty/hair": {
    slug: "hair",
    parentSlug: "beauty",
    name: "Hair",
    title: "AI Front Desk for Hair Salons",
    metaDescription:
      "Stop losing salon clients to missed calls and no-shows. AI Peak Biz books appointments, fills cancellations, and keeps your chairs full for hair salons.",
    heroHeadline:
      "Envision a salon where every chair is booked, walk-ins are managed seamlessly, and no-shows become rare.",
    heroSubhead:
      "A potential client calls to book a balayage appointment. Your stylists are all with clients. The receptionist is checking someone out. The call goes unanswered and the client books with the salon next door. AI Peak Biz answers every call, books every service, and keeps your stylists producing revenue.",
    problems: [
      {
        title: "Phone Overload During Busy Hours",
        description:
          "Your reception handles check-ins, checkouts, product sales, and phone calls simultaneously. During peak hours, 3 to 5 calls per hour go unanswered. Those are not just single appointments. A new color client represents $200 to $400 per visit, 6 to 8 times per year.",
        cost: "Typical loss: $4,000 to $10,000 per month in missed bookings",
      },
      {
        title: "No-Shows on Color Appointments",
        description:
          "A color and cut appointment blocks 2 to 3 hours of chair time. When a client no-shows, that is $200 to $500 in revenue gone and no way to fill a 3-hour block last minute. Without reminders, salons see 15 to 20 percent no-show rates on longer services.",
        cost: "Typical loss: $2,000 to $6,000 per month in no-show revenue",
      },
      {
        title: "Rebooking Falls Through the Cracks",
        description:
          "A client leaves after a beautiful cut and color. The stylist is already greeting their next client. Nobody prompts a rebook. The client intends to come back in 6 weeks but forgets until week 10. That gap costs you 2 visits per year per client.",
        cost: "Typical loss: $3,000 to $8,000 per month in extended rebooking intervals",
      },
    ],
    solutions: [
      {
        title: "AI Booking & Inquiry System",
        description:
          "Every call and text is answered instantly. The AI knows your service menu, pricing, stylist availability, and booking requirements. It matches clients with the right stylist based on service type and handles new client consultations appropriately.",
      },
      {
        title: "Smart Reminders & Waitlist Fill",
        description:
          "Appointment reminders go out 48 hours and day-of. Cancellations trigger automatic waitlist notifications. Long appointments that no-show are flagged immediately so your team can attempt a same-day fill.",
      },
      {
        title: "Automated Rebooking System",
        description:
          "Based on service type, your system prompts rebooking at the appropriate interval. Color clients get prompted at 5 weeks. Cut-only clients at 4 weeks. Clients book their next appointment via text without calling.",
      },
    ],
    useCases: [
      {
        title: "New Client Color Booking",
        description:
          "A client calls to book a balayage. The AI confirms the service takes 3 hours, asks about hair length and history, assigns an available colorist, and books the appointment. The client gets a confirmation text with a consultation note. Your front desk never picks up the phone.",
      },
      {
        title: "Saturday Cancellation Fill",
        description:
          "A 10 AM color appointment cancels Friday night. Your system texts clients on the waitlist who want Saturday spots. By 8 AM Saturday, the slot is filled. Your top-producing chair stays booked.",
      },
      {
        title: "Rebooking at Perfect Interval",
        description:
          "A client had a root touch-up 4 weeks ago. Your system texts: 'Hi Jessica, your roots are probably starting to show. Want to book your next touch-up? Here is your stylist's availability for next week.' Jessica books in 30 seconds.",
      },
    ],
    faq: [
      {
        question: "Can the AI book with a specific stylist?",
        answer:
          "Yes. Clients can request their preferred stylist. The AI checks that stylist's availability and only offers times when they are free. For new clients, it can recommend a stylist based on the service requested and specialization.",
      },
      {
        question: "How does it handle complex color services?",
        answer:
          "For services like balayage, corrections, or extensions, the AI collects photos and hair history, then books a consultation or longer appointment block as configured. Your colorists get the information they need before the client arrives.",
      },
      {
        question: "Will it work with my salon software?",
        answer:
          "We integrate with major salon platforms including Boulevard, Vagaro, Square Appointments, Fresha, and others. Bookings sync directly to your existing system.",
      },
      {
        question: "Can it handle deposit requirements for long appointments?",
        answer:
          "Yes. For services that require deposits (color corrections, extensions, bridal), the AI collects payment information or sends a deposit link. Bookings are only confirmed once the deposit is received.",
      },
    ],
    reviewIndices: [],
  },

  "beauty/nails": {
    slug: "nails",
    parentSlug: "beauty",
    name: "Nails",
    title: "AI Front Desk for Nail Salons",
    metaDescription:
      "Stop losing nail clients to busy signals and walk-in chaos. AI Peak Biz books appointments, manages walk-in wait times, and fills your chairs for nail salons.",
    heroHeadline:
      "Envision a nail salon where appointments are booked solid, walk-in wait times are communicated instantly, and every tech stays busy all day.",
    heroSubhead:
      "A client calls to book a gel set for Saturday. Your staff is doing nails and the phone rings 4 times before someone runs over with wet hands. The caller already hung up. AI Peak Biz answers every call, books every service, and manages your walk-in flow so no revenue walks out the door.",
    problems: [
      {
        title: "Phone Calls Go Unanswered Because Staff Is Doing Nails",
        description:
          "Your techs cannot stop mid-service to answer phones. If you do not have a dedicated receptionist, calls go unanswered during busy periods. Callers book elsewhere or walk into a competitor. Nail salons without AI report missing 30 to 50 percent of incoming calls.",
        cost: "Typical loss: $2,500 to $6,000 per month in missed bookings",
      },
      {
        title: "Walk-In Wait Time Confusion",
        description:
          "Walk-in clients ask 'How long is the wait?' Staff guesses. If the answer is too long, they leave. If you underestimate, they get frustrated and leave a bad review. Inaccurate wait times lose clients and damage your reputation.",
        cost: "Typical loss: $1,000 to $3,000 per month in walked-out clients",
      },
      {
        title: "Seasonal Demand Spikes Overwhelm Capacity",
        description:
          "Before prom, holidays, and wedding season, your phone explodes. Staff cannot keep up with booking requests. Some get lost on scraps of paper. Double-bookings happen. Frustrated clients post negative reviews during your busiest, most profitable weeks.",
        cost: "Typical loss: $3,000 to $8,000 per peak season in mismanaged demand",
      },
    ],
    solutions: [
      {
        title: "AI Phone & Text Booking",
        description:
          "Every call and text is answered instantly. The AI knows your services, pricing, tech availability, and duration requirements. Clients book specific techs or the first available slot. No phone goes unanswered regardless of how busy the salon is.",
      },
      {
        title: "Walk-In Wait Time Management",
        description:
          "The AI provides accurate wait time estimates based on current appointments and service durations. Walk-in clients can join a virtual queue via text and get notified when their turn approaches. They shop nearby instead of standing in your lobby getting impatient.",
      },
      {
        title: "Peak Season Overflow Handling",
        description:
          "During holiday rushes, the AI handles unlimited simultaneous booking requests. It fills your calendar optimally, avoids double-bookings, and maintains a waitlist for fully booked days. Every potential booking is captured even when demand exceeds capacity.",
      },
    ],
    useCases: [
      {
        title: "Saturday Morning Rush",
        description:
          "Your salon opens at 9 AM. Between 8 and 9, you receive 12 calls and texts from people booking weekend appointments. The AI handles all 12 simultaneously, filling your Saturday schedule before you even open the door. Your techs arrive to a full book.",
      },
      {
        title: "Walk-In Virtual Queue",
        description:
          "A walk-in client asks about wait time. Staff says 'about 45 minutes.' The AI texts the client a precise estimate and updates them as their turn approaches. They grab coffee next door instead of staring at the clock in your waiting area.",
      },
      {
        title: "Prom Season Surge",
        description:
          "Three weeks before prom, 50 teens want nail appointments for the same Friday and Saturday. The AI books optimally across all techs, maintains a waitlist for full days, and suggests Thursday evening alternatives for overflow. Every possible booking is captured.",
      },
    ],
    faq: [
      {
        question: "Can clients book with their preferred nail tech?",
        answer:
          "Yes. The AI tracks tech preferences and shows availability for the requested technician. If their preferred tech is booked, it offers alternatives or waitlist options for the next available slot with that tech.",
      },
      {
        question: "How does it handle add-on services?",
        answer:
          "The AI offers relevant add-ons during booking. If someone books a manicure, it can suggest gel upgrade, nail art, or a pedicure combo. This increases average ticket value without staff needing to upsell on the phone.",
      },
      {
        question: "Does it work with walk-in and appointment hybrid models?",
        answer:
          "Absolutely. Most nail salons mix walk-ins and appointments. The AI manages both, keeping buffer time for walk-ins during off-peak hours while filling the schedule with appointments during peak demand.",
      },
      {
        question: "Can it communicate in multiple languages?",
        answer:
          "Yes. We can configure the AI to communicate in English, Spanish, Vietnamese, and other languages common in nail salon communities. Clients interact in their preferred language.",
      },
    ],
    reviewIndices: [],
  },

  "beauty/barber": {
    slug: "barber",
    parentSlug: "beauty",
    name: "Barber",
    title: "AI Front Desk for Barbershops",
    metaDescription:
      "Stop losing walk-ins to long waits and missed calls. AI Peak Biz manages your waitlist, books appointments, and keeps your chairs full for barbershops.",
    heroHeadline:
      "Envision a barbershop where your waitlist is managed automatically, walk-ins know exactly when their turn is, and your barbers never have a dead chair.",
    heroSubhead:
      "A guy walks in, sees four people waiting, and walks out. He goes to the shop across the street. Meanwhile, two of those people were waiting for a specific barber and your chair was actually open. AI Peak Biz manages walk-in flow, books appointments, and fills every chair optimally.",
    problems: [
      {
        title: "Walk-Ins Leave Due to Perceived Wait Times",
        description:
          "A potential client sees a full lobby and assumes a long wait. They leave without asking. In reality, half those people are waiting for one popular barber while other chairs open in 10 minutes. Without a waitlist system, perceived wait times cost you clients who would have stayed.",
        cost: "Typical loss: $1,500 to $4,000 per month in walked-out clients",
      },
      {
        title: "Popular Barbers Overloaded While Others Sit Empty",
        description:
          "Your best barber has a 2-hour wait. Your newer barber has an empty chair. Without active queue management, revenue concentrates on one chair while others sit idle. Total shop revenue suffers because clients refuse to wait but also refuse alternatives.",
        cost: "Typical loss: $2,000 to $5,000 per month in underutilized chairs",
      },
      {
        title: "No System for Recurring Appointments",
        description:
          "Clients who love their barber want to come every 2 to 3 weeks. But without a booking system, they just show up whenever and hope the wait is short. Some weeks they cannot wait and leave. You lose a reliable recurring client to inconsistency.",
        cost: "Typical loss: $1,000 to $3,000 per month in irregular rebooking patterns",
      },
    ],
    solutions: [
      {
        title: "Virtual Waitlist Management",
        description:
          "Walk-in clients check in via text and receive accurate wait estimates per barber. They can wait in their car, grab food, or run errands. They get a text when their barber is ready. Your lobby stays manageable and clients stop leaving due to perceived overcrowding.",
      },
      {
        title: "Appointment Booking by Barber",
        description:
          "Clients book with their preferred barber at specific times. Popular barbers fill their books a week out. Newer barbers get discoverable through the AI's recommendations when preferred barbers are booked. Every chair stays productive.",
      },
      {
        title: "Recurring Appointment System",
        description:
          "Regular clients can set standing appointments every 2, 3, or 4 weeks with their barber. The system holds their slot and sends reminders. Your barbers build loyal client bases with predictable income.",
      },
    ],
    useCases: [
      {
        title: "Lunchtime Walk-In",
        description:
          "A professional walks in at noon for a quick cut. Lobby looks full. The AI texts them: 'Chair 3 is available in 8 minutes for a standard cut. Check in here.' They check in, wait briefly in their car, and get a text when it is their turn. Sale saved.",
      },
      {
        title: "New Barber Discovery",
        description:
          "A client's usual barber is booked for 90 minutes. The AI suggests: 'Marcus has no wait and specializes in fades. Would you like to try him today?' The client agrees. Marcus gets a new regular. Both chairs produce revenue.",
      },
      {
        title: "Standing Wednesday Appointment",
        description:
          "A loyal client sets up a standing 5:30 PM Wednesday appointment every 2 weeks. The system holds the slot, sends Tuesday reminders, and his barber always has him on the book. No more showing up and hoping.",
      },
    ],
    faq: [
      {
        question: "Do most barbershops use appointments or walk-ins?",
        answer:
          "Most use a hybrid. The AI manages both models simultaneously. Walk-ins are queued intelligently. Appointments are honored with priority. The system balances both to maximize chair utilization throughout the day.",
      },
      {
        question: "Can the AI handle different pricing for different barbers?",
        answer:
          "Yes. Senior barbers, master barbers, and apprentices can have different pricing. The AI communicates pricing clearly based on which barber the client selects or is assigned to.",
      },
      {
        question: "How does it work if I have multiple shop locations?",
        answer:
          "Each location is configured independently with its own barbers, hours, and waitlist. Clients choose their location. If their usual shop is full, the AI can suggest the other location if available.",
      },
      {
        question: "Will my barbers see their schedule and waitlist?",
        answer:
          "Yes. Each barber can view their queue, upcoming appointments, and daily schedule. This helps them plan their day and know what is coming next without constantly checking a paper list.",
      },
    ],
    reviewIndices: [],
  },

  "beauty/lashes": {
    slug: "lashes",
    parentSlug: "beauty",
    name: "Lashes",
    title: "AI Front Desk for Lash Studios",
    metaDescription:
      "Stop losing lash clients to missed calls and late cancellations. AI Peak Biz books fills, manages retention schedules, and keeps your bed full for lash techs.",
    heroHeadline:
      "Envision a lash studio where your fill schedule is booked 3 weeks out, no-shows are rare, and clients rebook before they even leave.",
    heroSubhead:
      "A potential client messages you on Instagram at 9 PM asking about volume lash pricing. You are relaxing after a 10-hour day of lashing. By morning, she booked with someone who responded instantly. AI Peak Biz handles every inquiry in real time so you never lose a client to a delayed DM reply.",
    problems: [
      {
        title: "DM and Call Response Delays",
        description:
          "Lash clients shop primarily through Instagram and text. They message 3 to 4 techs and book with the first one who responds with availability. If you are with a client for 2 to 3 hours, every incoming inquiry waits. First responder gets the booking.",
        cost: "Typical loss: $1,500 to $4,000 per month in lost new clients",
      },
      {
        title: "Fill Appointments Lapsing",
        description:
          "Lash fills are needed every 2 to 3 weeks. When clients go past 4 weeks, they need a full set again (double the time and price for you, but many just let them fall out instead). Without proactive rebooking, 20 to 30 percent of clients lapse each quarter.",
        cost: "Typical loss: $1,000 to $3,000 per month in lapsed fill clients",
      },
      {
        title: "No-Shows on Long Appointments",
        description:
          "A full set takes 2 to 3 hours. A no-show on a full set is $150 to $300 gone with no way to fill that block last minute. Lash artists report 2 to 4 no-shows per month. That is money you already counted on, evaporated.",
        cost: "Typical loss: $300 to $1,200 per month in no-show revenue",
      },
    ],
    solutions: [
      {
        title: "Instant DM & Text Response",
        description:
          "Every inquiry across Instagram, text, and phone gets an immediate professional response. The AI shares your service menu, pricing, availability, and before/after photos. New clients book without waiting for you to finish a set.",
      },
      {
        title: "Fill Schedule Automation",
        description:
          "Based on each client's lash type, your system sends a fill reminder at the optimal interval (2 weeks for volume, 2.5 for classic). Clients book their next fill before their current set starts to look sparse. Retention climbs.",
      },
      {
        title: "No-Show Prevention & Deposit System",
        description:
          "New clients pay a deposit to book. All clients receive 24-hour and 2-hour reminders. No-show rates drop dramatically. If someone does cancel last-minute, your waitlist is notified automatically to fill the gap.",
      },
    ],
    useCases: [
      {
        title: "Late Night Instagram Inquiry",
        description:
          "A bride-to-be messages at 10 PM asking about bridal lash packages. The AI responds with package details, pricing, and trial appointment availability. She books a trial for next week. You wake up with a $400+ bridal booking confirmed.",
      },
      {
        title: "2-Week Fill Reminder",
        description:
          "A volume lash client got her fill 12 days ago. Your system texts: 'Your lashes are at the 2-week mark. Book your fill this week to keep them looking full.' She books for Thursday. Without the prompt, she would have waited 4 weeks and lost half her lashes.",
      },
      {
        title: "Same-Day Cancellation Fill",
        description:
          "A full set appointment cancels 3 hours before. Your system texts 5 clients who have fills coming up this week: 'A 2 PM opening just became available today. Want to move your fill up?' Someone grabs it. Your afternoon stays productive.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain different lash styles?",
        answer:
          "Yes. We configure the AI with your full service menu including classic, hybrid, volume, mega volume, and specialty styles. It explains the differences, recommends options based on the client's natural lashes and desired look, and shows relevant portfolio images.",
      },
      {
        question: "How does it handle aftercare questions?",
        answer:
          "The AI provides standard aftercare instructions after booking and can answer common questions about cleaning, sleeping positions, and product restrictions. For unusual concerns, it directs the client to message you directly.",
      },
      {
        question: "Will it work with my booking platform?",
        answer:
          "We integrate with GlossGenius, Acuity, Square Appointments, and other platforms popular with lash artists. Bookings sync directly so you have one unified schedule.",
      },
      {
        question: "Can it manage my deposit and cancellation policy?",
        answer:
          "Absolutely. The AI communicates your deposit requirement, processes deposit payments via your payment link, and explains your cancellation policy clearly. No more uncomfortable policy conversations.",
      },
    ],
    reviewIndices: [],
  },

  // ═══════════════════════════════════════════════════════════════
  // EDUCATION
  // ═══════════════════════════════════════════════════════════════
  "education/tutoring": {
    slug: "tutoring",
    parentSlug: "education",
    name: "Tutoring",
    title: "AI Front Desk for Tutoring Services",
    metaDescription:
      "Stop losing tutoring clients to slow responses. AI Peak Biz books sessions, matches students with tutors, and manages schedules for tutoring businesses.",
    heroHeadline:
      "Envision a tutoring business where every parent inquiry gets answered immediately, sessions are always booked, and your tutors stay fully scheduled.",
    heroSubhead:
      "A parent is watching their child struggle with homework at 8 PM. They search for tutors, find your website, and call. You are in a session. They try the next result on Google. AI Peak Biz answers that call, matches their child with the right tutor, and books the first session before the parent's frustration turns into inaction.",
    problems: [
      {
        title: "Parent Inquiries During Active Tutoring Hours",
        description:
          "Your busiest call times (after school, 3 to 7 PM) are also when you and your tutors are in sessions. Parents calling to discuss their child's needs hear voicemail. Motivated parents cool off quickly. A child who needed help today does not get it because nobody answered.",
        cost: "Typical loss: $2,000 to $5,000 per month in lost new students",
      },
      {
        title: "Scheduling Complexity Across Multiple Tutors",
        description:
          "You offer math, reading, test prep, and writing. Each tutor has different availability. Matching a student's needs, grade level, schedule, and location to the right tutor takes time. Manual scheduling means delayed responses and lost bookings.",
        cost: "Typical loss: $1,500 to $3,500 per month in scheduling friction",
      },
      {
        title: "Session Cancellations Without Recovery",
        description:
          "A student cancels their Wednesday session. The tutor has a gap. No other student fills it. Over a month, each tutor has 3 to 5 unfilled cancellation gaps. That is revenue lost because you had no system to fill slots quickly.",
        cost: "Typical loss: $800 to $2,500 per month in unfilled session gaps",
      },
    ],
    solutions: [
      {
        title: "AI Inquiry & Matching System",
        description:
          "Parent calls and messages are answered immediately. The AI asks about the student's grade level, subject needs, schedule preferences, and learning goals. It matches them with an appropriate tutor and books an intro session, all without human intervention.",
      },
      {
        title: "Multi-Tutor Schedule Management",
        description:
          "The AI manages availability across all your tutors, subjects, and locations. It prevents double-bookings, respects travel time between locations, and optimizes tutor schedules so gaps are minimized.",
      },
      {
        title: "Cancellation Fill & Waitlist",
        description:
          "When a session cancels, students on the waitlist or those needing extra sessions get notified automatically. Tutors stay busy and students get additional help when they need it.",
      },
    ],
    useCases: [
      {
        title: "Homework Panic Call",
        description:
          "A parent calls at 7 PM in frustration. Their 8th grader cannot understand algebra and has a test Friday. The AI collects the details and books an emergency session with your math tutor for tomorrow afternoon. The parent feels relief immediately.",
      },
      {
        title: "SAT Prep Season Surge",
        description:
          "Spring hits and 20 families call about SAT prep within a week. The AI handles every inquiry, explains your program, checks tutor availability, and books assessment sessions. Your prep courses fill without you spending hours on the phone.",
      },
      {
        title: "Tutor Gap Fill",
        description:
          "A regular Tuesday student cancels. Your system texts three students who expressed interest in extra sessions: 'A 4 PM Tuesday slot just opened with your math tutor. Would you like it?' A student grabs it. Your tutor stays booked.",
      },
    ],
    faq: [
      {
        question: "Can the AI match students to the right tutor?",
        answer:
          "Yes. We configure tutor profiles with their subjects, grade levels, teaching style, certifications, and availability. The AI matches based on the student's specific needs, schedule, and location preferences.",
      },
      {
        question: "How does it handle different subjects and grade levels?",
        answer:
          "Each tutor's expertise is mapped by subject and grade range. The AI only recommends tutors qualified for the student's specific need. A 3rd grader needing reading help gets a different recommendation than an 11th grader needing AP Chemistry.",
      },
      {
        question: "Can parents communicate through the system?",
        answer:
          "Parents receive session confirmations, reminders, and progress updates through the system. For detailed academic discussions, the AI schedules a parent-tutor conference at a mutually convenient time.",
      },
      {
        question: "Does it work for both in-person and online tutoring?",
        answer:
          "Yes. The AI handles both modalities. For in-person, it manages location logistics. For online, it sends meeting links and platform instructions. Families choose their preference during booking.",
      },
    ],
    reviewIndices: [],
  },

  "education/music-lessons": {
    slug: "music-lessons",
    parentSlug: "education",
    name: "Music Lessons",
    title: "AI Front Desk for Music Lesson Studios",
    metaDescription:
      "Stop losing music students to missed calls. AI Peak Biz books trial lessons, sends reminders, and manages instructor schedules for music schools.",
    heroHeadline:
      "Envision a music school where trial lessons are always booked, recital registration is seamless, and your instructors' schedules stay full year-round.",
    heroSubhead:
      "A parent wants to enroll their kid in piano lessons. They call your studio during the after-school rush when every instructor is teaching. The call goes to voicemail. By the time you call back, they enrolled at the studio down the street. AI Peak Biz ensures every inquiry turns into a trial lesson.",
    problems: [
      {
        title: "Calls During Lesson Hours Go Unanswered",
        description:
          "Your prime teaching hours (3 to 8 PM) are exactly when parents call. Instructors are teaching. If you do not have front desk staff during these hours, every call goes to voicemail. Parents with a motivated child lose momentum when you call back the next day.",
        cost: "Typical loss: $2,000 to $5,000 per month in lost new students",
      },
      {
        title: "Summer and Holiday Enrollment Drops",
        description:
          "Families go on vacation and pause lessons. Some never restart. Without proactive fall re-enrollment campaigns, you lose 20 to 30 percent of students during summer transitions. Rebuilding your roster takes months.",
        cost: "Typical loss: $3,000 to $8,000 per seasonal transition",
      },
      {
        title: "Instructor Schedule Gaps After Cancellations",
        description:
          "A student cancels their weekly slot. That becomes a permanent gap in the instructor's schedule until someone new enrolls for that time. Weekly gaps at $30 to $60 per lesson add up to significant monthly losses per instructor.",
        cost: "Typical loss: $500 to $2,000 per month per instructor in schedule gaps",
      },
    ],
    solutions: [
      {
        title: "AI Enrollment & Trial Booking",
        description:
          "Every inquiry gets an immediate response. The AI asks about the student's age, instrument interest, experience level, and schedule. It books a trial lesson with an appropriate instructor and sends preparation details. Parents feel the process is effortless.",
      },
      {
        title: "Seasonal Re-Enrollment Automation",
        description:
          "Before each semester transition, your system contacts current students to confirm their continuation and available time slots. Paused students get outreach with return incentives. You start each season knowing exactly who is coming back.",
      },
      {
        title: "Waitlist & Gap Fill System",
        description:
          "When schedule gaps open, students on a waitlist for that instrument, time, or instructor get notified. New students seeking exactly that slot are matched immediately. Instructors maintain full schedules without manual coordination.",
      },
    ],
    useCases: [
      {
        title: "After-School Enrollment Call",
        description:
          "A parent calls at 4 PM while their kid is excitedly talking about wanting to play guitar. Your guitar teacher is mid-lesson. The AI answers, asks about the child's age and experience, and books a 30-minute trial for Saturday. The child's excitement becomes a paying enrollment.",
      },
      {
        title: "Fall Re-Enrollment Campaign",
        description:
          "Three weeks before fall semester, your system texts all current students: 'Fall lessons begin September 8. Reply YES to keep your current slot, or let us know if you need a schedule change.' 85 percent confirm within 48 hours. You know your roster before school starts.",
      },
      {
        title: "Recital Registration",
        description:
          "Your spring recital needs participants registered by a deadline. The system texts all active students with details, song selection forms, and RSVP. Registration fills without your instructors spending lesson time on logistics.",
      },
    ],
    faq: [
      {
        question: "Can the AI match students with the right instructor?",
        answer:
          "Yes. We configure each instructor's instruments, teaching levels (beginner through advanced), age groups, and teaching style. The AI recommends an appropriate match based on the student's needs and schedule.",
      },
      {
        question: "How does it handle different lesson lengths and pricing?",
        answer:
          "The AI presents your available lesson formats (30-minute, 45-minute, 60-minute) with pricing for each. It can recommend a duration based on the student's age and experience level.",
      },
      {
        question: "Can it manage group classes in addition to private lessons?",
        answer:
          "Yes. Group classes like band, ensemble, and theory are handled alongside private lessons. The AI manages registration, capacity limits, and prerequisites for group offerings.",
      },
      {
        question: "What about instrument rental coordination?",
        answer:
          "If you offer instrument rentals or partner with a music store, the AI can provide rental information, pricing, and coordinate pickup details for new students who need instruments.",
      },
    ],
    reviewIndices: [],
  },

  "education/driving-schools": {
    slug: "driving-schools",
    parentSlug: "education",
    name: "Driving Schools",
    title: "AI Front Desk for Driving Schools",
    metaDescription:
      "Stop losing driving students to competitors who answer first. AI Peak Biz books lessons, manages instructor schedules, and fills your cars for driving schools.",
    heroHeadline:
      "Envision a driving school where every teen and parent inquiry becomes a booked lesson, instructors stay fully scheduled, and test-date deadlines never get missed.",
    heroSubhead:
      "A teen turns 15 and their parent calls three driving schools. The first one that answers clearly, explains the process, and books a start date wins the enrollment. AI Peak Biz ensures you are always that school. Every call answered. Every question handled. Every student enrolled.",
    problems: [
      {
        title: "Parents Calling Multiple Schools Simultaneously",
        description:
          "When a teen is ready for driving lessons, parents typically call 2 to 3 schools and book with whichever answers and sounds organized first. If your office is handling an in-person student and the phone goes to voicemail, you lose a $500 to $1,000 enrollment to a competitor who picked up.",
        cost: "Typical loss: $4,000 to $10,000 per month in lost enrollments",
      },
      {
        title: "Instructor Schedule Complexity",
        description:
          "You have 3 to 5 instructors, multiple cars, classroom sessions, behind-the-wheel hours, and test-date coordination. Scheduling manually leads to gaps, double-bookings, and student frustration when their preferred times are not available.",
        cost: "Typical loss: $2,000 to $4,000 per month in scheduling inefficiency",
      },
      {
        title: "Test Date Coordination Failures",
        description:
          "Students need specific hours completed before their DMV test date. Without automated tracking, some students show up to their test unprepared or with insufficient hours. Failures reflect poorly on your school and generate complaints.",
        cost: "Typical loss: $1,000 to $3,000 per month in reputation damage and refund requests",
      },
    ],
    solutions: [
      {
        title: "AI Enrollment System",
        description:
          "Every call gets answered with clear, professional information about your program, pricing, requirements, and start dates. The AI handles enrollment paperwork, collects parent consent, and books the first lesson. Parents feel confident in your organization from the first interaction.",
      },
      {
        title: "Smart Instructor & Vehicle Scheduling",
        description:
          "The AI manages instructor availability, vehicle assignments, and student progress simultaneously. It schedules behind-the-wheel hours, classroom sessions, and observation time to keep all instructors utilized and students progressing on schedule.",
      },
      {
        title: "Test Readiness Tracking",
        description:
          "Your system tracks each student's completed hours and automatically schedules remaining sessions to meet their target test date. Parents receive progress updates. Nobody arrives at the DMV unprepared.",
      },
    ],
    useCases: [
      {
        title: "First-Call Enrollment Win",
        description:
          "A parent calls at 5:30 PM after work. Your office closed at 5. The AI answers, explains your 30-hour program, discusses pricing and payment plans, and enrolls their teen starting next Monday. A competitor would have gotten a voicemail message they never return fast enough.",
      },
      {
        title: "Behind-the-Wheel Scheduling",
        description:
          "A student needs 6 more hours before their test in 3 weeks. The system checks instructor availability and automatically offers optimal lesson times. The student books 3 two-hour sessions across the next two weeks. They arrive at their test fully prepared.",
      },
      {
        title: "Parent Progress Update",
        description:
          "A parent texts asking how many hours their teen has completed. The AI responds with the exact count, remaining requirements, and next scheduled session. The parent feels informed and confident in your school without staff looking up records.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain state-specific driving requirements?",
        answer:
          "Yes. We configure the AI with your state's specific hour requirements, age restrictions, permit rules, and testing procedures. It provides accurate information tailored to your location's DMV requirements.",
      },
      {
        question: "How does it handle payment plans for multi-lesson packages?",
        answer:
          "The AI presents your package options and payment plans. It can collect initial payments, set up installment schedules, and send payment reminders. Parents choose the option that works for their budget.",
      },
      {
        question: "Can it coordinate classroom and behind-the-wheel components?",
        answer:
          "Yes. The system understands program prerequisites. Students are scheduled for classroom first (where required), then behind-the-wheel hours in proper sequence. The AI prevents scheduling conflicts between components.",
      },
      {
        question: "What about students with special needs or anxiety?",
        answer:
          "The AI collects relevant information during enrollment about student needs, anxiety levels, or accommodations required. This information is shared with the assigned instructor before the first lesson so they can prepare appropriately.",
      },
    ],
    reviewIndices: [],
  },

  "education/trade-schools": {
    slug: "trade-schools",
    parentSlug: "education",
    name: "Trade Schools",
    title: "AI Front Desk for Trade Schools",
    metaDescription:
      "Stop losing trade school enrollments to slow follow-up. AI Peak Biz handles inquiries, books campus tours, and nurtures applicants for trade schools.",
    heroHeadline:
      "Envision a trade school where every inquiry becomes an enrollment conversation, campus tours are always booked, and applicants never fall through the cracks.",
    heroSubhead:
      "A 22-year-old decides at midnight they are done with dead-end jobs and want to learn a trade. They find your school and submit an inquiry. If nobody responds until Monday, their motivation evaporates by Tuesday. AI Peak Biz engages that student within seconds, answers their questions, and books a campus tour before doubt creeps in.",
    problems: [
      {
        title: "Motivation-Dependent Leads Go Cold Fast",
        description:
          "Trade school prospects often inquire during moments of career frustration. At midnight after a bad shift. On a Sunday when bills are due. If your admissions team does not respond until business hours, 40 to 60 percent of leads go cold. These are life-changing decisions that lose urgency with every passing hour.",
        cost: "Typical loss: $10,000 to $30,000 per month in lost enrollments",
      },
      {
        title: "Long Enrollment Funnel With No Nurture",
        description:
          "From initial inquiry to enrollment, trade school prospects take 2 to 6 weeks to decide. During that time, they need reassurance, financial aid information, and schedule options. Without systematic follow-up, 50 percent or more drop off before enrollment.",
        cost: "Typical loss: $15,000 to $40,000 per quarter in funnel abandonment",
      },
      {
        title: "Financial Aid Questions Overwhelming Staff",
        description:
          "Every prospect asks the same questions about tuition costs, payment plans, grants, and loans. Your admissions team spends 70 percent of their time answering repetitive financial questions instead of closing enrollments.",
        cost: "Typical loss: 20+ hours per week in repetitive Q&A that could be automated",
      },
    ],
    solutions: [
      {
        title: "Instant Lead Response (24/7)",
        description:
          "Every inquiry gets a response within 60 seconds. At midnight. On weekends. On holidays. The AI provides program information, answers initial questions about schedule and prerequisites, and books a campus tour or virtual info session. Motivation is captured while it is fresh.",
      },
      {
        title: "Enrollment Nurture Sequence",
        description:
          "From first inquiry through enrollment, prospects receive timed communications: program details, student success stories, financial aid overviews, deadline reminders, and tour confirmations. The system keeps your school top-of-mind during the decision period.",
      },
      {
        title: "Financial Aid FAQ Automation",
        description:
          "The AI handles common financial questions: tuition costs, payment plan options, Pell Grant eligibility, VA benefits, and employer reimbursement. Complex financial aid situations are routed to your financial aid office with context already collected.",
      },
    ],
    useCases: [
      {
        title: "Midnight Career Decision",
        description:
          "A warehouse worker researches HVAC training at 11:30 PM. They submit an inquiry on your website. Within 30 seconds, the AI texts them with program highlights, earning potential, and offers a campus tour for Saturday. By morning, they have a confirmed tour. Your competitor responds Monday to someone who has already committed to visiting your campus.",
      },
      {
        title: "Financial Aid Pre-Qualification",
        description:
          "A prospect texts 'Can I afford this?' The AI asks a few qualifying questions about their employment, prior education, and veteran status. It provides a realistic overview of aid options and connects them with your financial aid office for a detailed review. The prospect feels this is achievable.",
      },
      {
        title: "Tour No-Show Recovery",
        description:
          "A prospect misses their campus tour. Instead of losing them, the system follows up within an hour: 'We missed you today. Life happens. Want to reschedule for this week, or would a virtual tour work better?' 40 percent reschedule and eventually enroll.",
      },
    ],
    faq: [
      {
        question: "Can the AI answer program-specific questions accurately?",
        answer:
          "Yes. We configure the AI with your complete program catalog including durations, prerequisites, schedules, certification outcomes, and career paths. Each program gets detailed information so prospects get accurate answers for their specific interest.",
      },
      {
        question: "How does it handle prospects interested in multiple programs?",
        answer:
          "The AI guides undecided prospects through a brief assessment of their interests, skills, and career goals. It recommends relevant programs and can book exploratory appointments with admissions advisors for personalized guidance.",
      },
      {
        question: "Can it manage the application process?",
        answer:
          "The AI guides prospects through application steps, sends document checklists, deadline reminders, and status updates. It reduces the friction that causes applicants to abandon the process mid-way through.",
      },
      {
        question: "Does it work with my student information system?",
        answer:
          "We integrate with major SIS platforms and CRMs used in vocational education. Prospect data, tour bookings, and enrollment status sync automatically so your admissions team has current information.",
      },
    ],
    reviewIndices: [],
  },

  // ═══════════════════════════════════════════════════════════════
  // HOSPITALITY
  // ═══════════════════════════════════════════════════════════════
  "hospitality/restaurants": {
    slug: "restaurants",
    parentSlug: "hospitality",
    name: "Restaurants",
    title: "AI Front Desk for Restaurants",
    metaDescription:
      "Stop losing reservations to busy signals during dinner rush. AI Peak Biz handles reservations, takeout orders, and event inquiries for restaurants 24/7.",
    heroHeadline:
      "Envision a restaurant where every reservation is captured, takeout orders flow in without tying up your host, and private event inquiries never get lost.",
    heroSubhead:
      "It is 6:30 PM on a Friday. Your host is seating a party of 8. The phone rings with a reservation request for next weekend. Then again for a takeout order. Then again asking about private events. Nobody can answer. Those three calls represent $500 to $2,000 in revenue walking to competitors. AI Peak Biz answers them all simultaneously.",
    problems: [
      {
        title: "Phone Overload During Service",
        description:
          "Friday and Saturday nights between 5 and 9 PM, your phone rings 40 to 60 times. Your host cannot seat guests, manage the waitlist, AND answer the phone. Most restaurants miss 30 to 40 percent of calls during peak service hours.",
        cost: "Typical loss: $3,000 to $8,000 per month in missed reservations and orders",
      },
      {
        title: "Large Party and Event Inquiries Lost",
        description:
          "A corporate admin calls to book a holiday dinner for 30 people. Your manager is running the floor. The voicemail goes unchecked until Monday. The admin already booked elsewhere. Large group events are your highest-margin business and the hardest to recover when missed.",
        cost: "Typical loss: $5,000 to $15,000 per month in lost private event revenue",
      },
      {
        title: "No-Shows on Prime Time Reservations",
        description:
          "A 4-top books your best booth for 7:30 PM Saturday and never shows. That table sat empty during peak hour. You turned away walk-ins who would have filled it. Without confirmation systems, restaurants see 15 to 20 percent no-show rates on weekend reservations.",
        cost: "Typical loss: $2,000 to $6,000 per month in no-show lost revenue",
      },
    ],
    solutions: [
      {
        title: "AI Reservation & Waitlist Management",
        description:
          "Every call is answered instantly. The AI books reservations, provides wait time estimates for walk-ins, and manages your table inventory. It knows your layout, capacity, and pacing preferences. Your host focuses on the guests in front of them.",
      },
      {
        title: "Event Inquiry Capture & Follow-Up",
        description:
          "Private dining and event inquiries are captured with full details: date, party size, budget, dietary needs, and occasion. Your events manager gets a complete brief and can follow up personally with a warm lead instead of a cold callback.",
      },
      {
        title: "Reservation Confirmation System",
        description:
          "24-hour and 2-hour confirmations go to every reservation. Unconfirmed reservations are flagged. Your host knows which tables might open up and can seat from the waitlist. No-show rates drop by 60 percent.",
      },
    ],
    useCases: [
      {
        title: "Friday Night Phone Flood",
        description:
          "Between 5 and 9 PM Friday, 45 people call your restaurant. The AI handles every call: 20 reservations for the weekend, 10 takeout orders, 5 event inquiries, and 10 general questions about hours and menu. Your staff never touches the phone.",
      },
      {
        title: "Corporate Holiday Party Capture",
        description:
          "An executive assistant calls at 4:30 PM on a Tuesday to book a holiday dinner for 25 people. Your manager is in a pre-service meeting. The AI captures the full event brief, confirms tentative date availability, and sends details to your events email. You respond the next morning with a custom proposal.",
      },
      {
        title: "No-Show Table Recovery",
        description:
          "A 6-top does not confirm their 7 PM Saturday reservation. At 6:45, the system flags the likely no-show. Your host seats the next party on the waitlist at 7:15. Zero revenue lost.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle dietary restriction and allergy questions?",
        answer:
          "Yes. We configure your menu with allergy information, dietary accommodations, and common modifications. The AI can confirm whether dishes are gluten-free, nut-free, vegan, etc., and note special requests on reservations.",
      },
      {
        question: "How does it work with my existing reservation system?",
        answer:
          "We integrate with OpenTable, Resy, Yelp Reservations, and direct booking systems. Reservations made by the AI appear in your existing system. Your host sees one unified view.",
      },
      {
        question: "Can it handle takeout orders?",
        answer:
          "Yes. The AI can take phone orders, confirm items, suggest popular add-ons, provide prep time estimates, and send order confirmations. For complex menus, it can direct callers to your online ordering system.",
      },
      {
        question: "What about calls in languages other than English?",
        answer:
          "The AI can communicate in multiple languages including Spanish. For communities with diverse language needs, we configure the system to detect and respond in the caller's preferred language.",
      },
    ],
    reviewIndices: [],
  },

  "hospitality/cafes": {
    slug: "cafes",
    parentSlug: "hospitality",
    name: "Cafes",
    title: "AI Front Desk for Cafes",
    metaDescription:
      "Stop losing catering orders and event bookings to missed calls. AI Peak Biz handles large orders, event inquiries, and loyalty for cafes and coffee shops.",
    heroHeadline:
      "Envision a cafe where catering orders come in automatically, your loyalty regulars never drift away, and large event orders never get lost.",
    heroSubhead:
      "Your baristas are pulling shots during the morning rush. The phone rings. An office manager wants to order 30 pastries and a coffee service for tomorrow's meeting. Nobody can answer. They order from the bakery app instead. AI Peak Biz captures every catering lead and large order without pulling your team off the bar.",
    problems: [
      {
        title: "Catering Orders Lost During Rush Hours",
        description:
          "Your busiest counter hours are exactly when offices call to place catering orders. Nobody can take a 5-minute order call when there are 12 people in line. Those catering orders are $200 to $1,000 each, often recurring weekly. One lost call could be thousands in annual revenue.",
        cost: "Typical loss: $2,000 to $6,000 per month in missed catering orders",
      },
      {
        title: "Regular Customers Drift to Competitors",
        description:
          "Your daily regulars spend $5 to $10 per day. If they miss a few days because of a new cafe that opened closer to their office, you lose them. Without loyalty prompts and engagement, customers drift without drama. You do not even notice until revenue drops.",
        cost: "Typical loss: $1,500 to $4,000 per month in lost regular customer revenue",
      },
      {
        title: "Event and Meeting Space Inquiries Missed",
        description:
          "If your cafe offers meeting space or event hosting, inquiries come in sporadically and always at bad times. A missed inquiry for a weekly book club or corporate breakfast meeting is recurring revenue you never capture.",
        cost: "Typical loss: $1,000 to $3,000 per month in lost event bookings",
      },
    ],
    solutions: [
      {
        title: "AI Catering Order System",
        description:
          "Large orders and catering requests are handled by AI via phone and text. The system knows your menu, lead times, minimum orders, and delivery options. Office managers place orders without waiting for your barista to get off the espresso machine.",
      },
      {
        title: "Customer Loyalty Engagement",
        description:
          "Your regulars get personalized engagement: birthday offers, new menu previews, and 'we miss you' messages if they have not visited in a while. The small touches that keep customers choosing your cafe over the new place that opened up.",
      },
      {
        title: "Event Space Booking",
        description:
          "Meeting room and event inquiries are captured with full details. The AI checks availability, provides pricing, and books the space. Your team gets a complete event brief without playing phone tag with the organizer.",
      },
    ],
    useCases: [
      {
        title: "Morning Rush Catering Call",
        description:
          "An office manager calls at 7:45 AM to order 20 coffees and 30 pastries for a 10 AM meeting tomorrow. Your team is making drinks. The AI takes the order, confirms items and quantities, provides the total, and schedules pickup or delivery. $350 order captured without interrupting service.",
      },
      {
        title: "Lapsed Regular Win-Back",
        description:
          "A customer who visited daily has not been in for 2 weeks. Your system texts: 'Hey Mark, we have a new seasonal cold brew you would love. Stop by today and the first one is on us.' Mark comes back. Daily visits resume.",
      },
      {
        title: "Weekly Meeting Room Booking",
        description:
          "A startup founder inquires about using your back room for weekly team meetings. The AI provides availability, pricing, and what is included. They book every Tuesday 2 to 4 PM for the next quarter. That is $400/month in predictable revenue from unused space.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle complex catering menus with customization?",
        answer:
          "Yes. We configure your full catering menu with options, sizes, dietary labels, and pricing. The AI handles item selection, quantities, and special requests. For highly custom events, it collects requirements and routes to your manager.",
      },
      {
        question: "How does the loyalty system work without an app?",
        answer:
          "Everything runs through text messaging. No app download required. Customers opt in with their phone number. They receive personalized offers based on visit frequency and preferences. Simple for customers, effective for your business.",
      },
      {
        question: "Can it handle advance orders for same-day pickup?",
        answer:
          "Yes. Customers can order via text for same-day pickup with your specified lead time. They get a confirmation with pickup time. Your kitchen sees the order in advance and has it ready without rush-hour pressure.",
      },
      {
        question: "Does it work for cafes without catering?",
        answer:
          "Absolutely. Even without catering, the AI handles loyalty engagement, event bookings, large group orders, and answers common questions about menu items, hours, and allergens. It reduces staff interruptions during busy service.",
      },
    ],
    reviewIndices: [],
  },

  "hospitality/catering": {
    slug: "catering",
    parentSlug: "hospitality",
    name: "Catering",
    title: "AI Front Desk for Catering Companies",
    metaDescription:
      "Stop losing catering leads to slow responses. AI Peak Biz captures event details, follows up on proposals, and books catering jobs while you are in the kitchen.",
    heroHeadline:
      "Envision a catering business where every event inquiry becomes a booked job, proposals get followed up automatically, and your kitchen stays busy year-round.",
    heroSubhead:
      "You are prepping for a 200-person wedding on Saturday. Your phone rings with a corporate inquiry for next month. You cannot stop dicing onions to take notes on a tasting menu request. By Monday, they hired someone else. AI Peak Biz captures every lead in real time and follows up on proposals so you never lose business while cooking.",
    problems: [
      {
        title: "Leads Come In While You Are Producing Events",
        description:
          "Catering is production-heavy. When you are executing an event, you cannot take sales calls. But leads do not wait. Corporate planners and brides call 2 to 3 caterers and hire the first one who responds professionally. A missed call can mean a $5,000 to $50,000 lost contract.",
        cost: "Typical loss: $10,000 to $30,000 per month in missed event leads",
      },
      {
        title: "Proposals Sent But Never Followed Up",
        description:
          "You send a beautiful proposal for a corporate gala. The client goes quiet. You mean to follow up but get buried in next weekend's prep. Two weeks later you call and learn they booked someone who followed up sooner. Proposals without follow-up convert at half the rate.",
        cost: "Typical loss: $5,000 to $15,000 per month in unconverted proposals",
      },
      {
        title: "Seasonal Revenue Gaps",
        description:
          "January through March can be dead for caterers. Without proactive outreach to past clients and corporate prospects, you rely on inbound leads that barely trickle in during the off-season. Your kitchen staff sits idle.",
        cost: "Typical loss: $10,000 to $25,000 per quarter in seasonal revenue gaps",
      },
    ],
    solutions: [
      {
        title: "AI Lead Capture & Qualification",
        description:
          "Every call and inquiry is answered immediately. The AI collects event date, guest count, budget range, dietary requirements, and occasion type. You receive a complete event brief ready for proposal writing. No detail gets lost in a voicemail.",
      },
      {
        title: "Proposal Follow-Up Automation",
        description:
          "After you send a proposal, your system follows up at 3, 7, and 14 days. It checks if the client has questions, addresses common objections, and offers tasting appointments. Conversion rates increase when follow-up is consistent and timely.",
      },
      {
        title: "Off-Season Business Development",
        description:
          "Your system proactively reaches out to past clients and corporate contacts during slow periods. New year corporate event planning reminders, spring wedding outreach, and repeat client campaigns keep your pipeline active year-round.",
      },
    ],
    useCases: [
      {
        title: "Wedding Lead While On-Site",
        description:
          "You are plating appetizers at a 150-person event. A bride calls to discuss her September wedding. The AI answers, collects all event details (venue, guest count, budget, style preferences), and books a tasting for next week. You review the brief Sunday morning and prepare a custom proposal.",
      },
      {
        title: "Proposal Recovery",
        description:
          "A corporate client received your $8,000 proposal 5 days ago. Your system texts: 'Hi Jennifer, just checking in on the holiday party proposal. Any questions about the menu options? Happy to adjust anything.' She responds with a question about vegetarian options. You answer. She signs the contract that week.",
      },
      {
        title: "January Pipeline Building",
        description:
          "In early January, your system contacts 50 corporate clients from last year: 'Planning any events this quarter? We would love to work with you again. Here are our new spring menus.' Eight respond with interest. Your Q1 goes from dead to busy.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle complex dietary requirements?",
        answer:
          "Yes. The AI asks about allergies, dietary restrictions (vegan, kosher, halal, gluten-free), and special requests during the inquiry stage. All requirements are documented and included in the event brief you receive for proposal preparation.",
      },
      {
        question: "How does it manage multiple events on the same weekend?",
        answer:
          "The AI knows your capacity limits. It checks your event calendar before confirming availability. If a date is full, it offers alternative dates or adds the client to a waitlist in case of cancellations.",
      },
      {
        question: "Can it handle tasting appointment scheduling?",
        answer:
          "Yes. The AI schedules tasting appointments based on your availability, sends preparation details to the client, and confirms attendance. It can manage multiple tastings per week during peak booking season.",
      },
      {
        question: "What about last-minute event requests?",
        answer:
          "The AI is configured with your minimum lead times. For requests within your rush window, it communicates any additional fees, confirms your ability to accommodate, and fast-tracks the booking process.",
      },
    ],
    reviewIndices: [],
  },

  "hospitality/event-venues": {
    slug: "event-venues",
    parentSlug: "hospitality",
    name: "Event Venues",
    title: "AI Front Desk for Event Venues",
    metaDescription:
      "Stop losing venue bookings to slow tour scheduling. AI Peak Biz books tours, answers capacity questions, and follows up with prospects for event venues.",
    heroHeadline:
      "Envision a venue where every inquiry becomes a booked tour, your calendar fills months in advance, and no date sits empty because a lead fell through the cracks.",
    heroSubhead:
      "A bride finds your venue on The Knot at 10 PM and calls to ask about her date. Your sales manager left at 5. She checks 4 more venues tonight and the one that responds first gets her $15,000 rental. AI Peak Biz responds instantly, confirms date availability, and books a tour before she moves on.",
    problems: [
      {
        title: "After-Hours Inquiries From Brides and Planners",
        description:
          "Venue shopping happens evenings and weekends. Brides browse Instagram, Pinterest, and vendor directories after work. When they inquire, they expect quick responses. The venue that engages within an hour has a 7x higher chance of booking the tour.",
        cost: "Typical loss: $10,000 to $40,000 per month in lost venue bookings",
      },
      {
        title: "Tour No-Shows Waste Sales Time",
        description:
          "Your sales manager blocks 90 minutes for a venue tour. The couple does not show up. No reminder was sent. That is time your manager could have spent with serious prospects. Tour no-show rates without confirmation systems run 25 to 35 percent.",
        cost: "Typical loss: $5,000 to $15,000 per month in wasted sales capacity",
      },
      {
        title: "Slow Follow-Up After Tours",
        description:
          "A couple tours your venue and loves it. Your manager means to send the proposal Monday. Monday becomes Wednesday. By then, another venue sent theirs Sunday night. The couple books the venue that showed more urgency. Speed signals professionalism.",
        cost: "Typical loss: $8,000 to $25,000 per month in post-tour lost bookings",
      },
    ],
    solutions: [
      {
        title: "Instant Inquiry Response & Date Check",
        description:
          "Every inquiry gets a response within minutes, any time of day. The AI confirms date availability, provides basic pricing, answers capacity questions, and books a venue tour. Prospects feel prioritized from the first interaction.",
      },
      {
        title: "Tour Confirmation & Preparation",
        description:
          "Booked tours receive confirmation, parking details, and what to expect. 48-hour and morning-of reminders ensure attendance. Couples arrive prepared with the right questions. No-show rates drop dramatically.",
      },
      {
        title: "Post-Tour Follow-Up Sequence",
        description:
          "After every tour, your system sends a personalized thank-you, then follows up at strategic intervals with additional details, testimonials, and gentle deadline reminders. Proposals feel timely rather than pushy.",
      },
    ],
    useCases: [
      {
        title: "Sunday Night Bride Inquiry",
        description:
          "A bride inquires about her October date at 9:30 PM Sunday. The AI confirms the date is available, shares venue highlights, and books a tour for Wednesday evening. She cancels her other venue tours because she already feels connected to yours.",
      },
      {
        title: "Tour Prep That Closes",
        description:
          "A couple has a tour at 2 PM Saturday. Friday they receive a personalized preview: venue photos, past event examples matching their style, and a list of preferred vendors. They arrive already imagining their event. The tour becomes a formality. They sign that day.",
      },
      {
        title: "Post-Tour Proposal Urgency",
        description:
          "After a great tour, your system sends a proposal within 2 hours with a note: 'Your October 14th date is currently available. We are holding it for 7 days while you decide.' The artificial scarcity (which is real) motivates a quick decision.",
      },
    ],
    faq: [
      {
        question: "Can the AI check real-time date availability?",
        answer:
          "Yes. The AI connects to your event calendar and provides accurate date availability. It can also inform prospects about nearby available dates if their first choice is booked, preventing them from leaving empty-handed.",
      },
      {
        question: "How does it handle different event types and pricing?",
        answer:
          "We configure pricing for weddings, corporate events, social gatherings, and other event types separately. The AI presents relevant pricing based on the event type, guest count, and day of week.",
      },
      {
        question: "Can it provide virtual tour options?",
        answer:
          "Yes. For out-of-town prospects or initial screening, the AI can send virtual tour links, video walkthroughs, and photo galleries. It still encourages an in-person tour for serious prospects while accommodating those who cannot visit immediately.",
      },
      {
        question: "What about venue holds and deposits?",
        answer:
          "The AI communicates your hold policy, deposit requirements, and booking deadlines clearly. It can send deposit links and track payment status. You maintain control over which dates get held and for how long.",
      },
    ],
    reviewIndices: [],
  },

  "hospitality/hotels": {
    slug: "hotels",
    parentSlug: "hospitality",
    name: "Hotels",
    title: "AI Front Desk for Hotels",
    metaDescription:
      "Stop losing direct bookings to OTAs. AI Peak Biz handles reservation inquiries, upsells room upgrades, and manages guest communication for hotels.",
    heroHeadline:
      "Envision a hotel where direct bookings increase, guest inquiries are handled instantly, and your front desk team focuses on the guests standing in front of them.",
    heroSubhead:
      "A guest calls to ask about room availability for next weekend. Your front desk is checking in a tour bus of 40 people. The call goes to hold. The caller books on Expedia instead, costing you 15 to 25 percent in OTA commission on a $200 room. AI Peak Biz captures every direct booking opportunity and saves you from commission fees.",
    problems: [
      {
        title: "Direct Booking Calls Lost to OTAs",
        description:
          "Guests who call your hotel directly want to book direct. But if they wait on hold for more than 30 seconds, they hang up and book on Booking.com or Expedia. Each OTA booking costs you 15 to 25 percent commission. A $200 room nets you $150 through an OTA versus $200 direct.",
        cost: "Typical loss: $5,000 to $20,000 per month in unnecessary OTA commissions",
      },
      {
        title: "Guest Inquiries During Peak Check-In",
        description:
          "Between 3 and 6 PM, your front desk handles a flood of check-ins. The phone rings with questions about amenities, parking, late checkout, and booking modifications. Staff cannot juggle in-person guests and phone calls. Callers get frustrated.",
        cost: "Typical loss: $2,000 to $5,000 per month in guest satisfaction and lost bookings",
      },
      {
        title: "No Systematic Upselling",
        description:
          "Room upgrades, spa packages, late checkout, and dining reservations represent significant incremental revenue. But your front desk is too busy to upsell consistently. Most guests never hear about available upgrades or add-ons.",
        cost: "Typical loss: $3,000 to $10,000 per month in missed upsell revenue",
      },
    ],
    solutions: [
      {
        title: "AI Reservation Assistant",
        description:
          "Every call is answered instantly with professional, branded service. The AI checks real-time availability, quotes direct rates (matched or better than OTAs), and completes bookings. Guests who want to book direct can actually book direct without waiting.",
      },
      {
        title: "Guest Communication Hub",
        description:
          "Pre-arrival, the AI sends check-in details, parking instructions, and amenity information. During stays, guests text for requests (extra towels, restaurant recommendations, checkout times). Post-stay, the system collects reviews. Your front desk handles fewer routine calls.",
      },
      {
        title: "Pre-Arrival Upsell Engine",
        description:
          "48 hours before arrival, guests receive personalized upgrade offers: room upgrades at discounted rates, spa appointment availability, dining reservations, and late checkout options. Guests appreciate the convenience. You capture incremental revenue without front desk effort.",
      },
    ],
    useCases: [
      {
        title: "Direct Booking Save",
        description:
          "A guest calls to book a room for a weekend trip. Your front desk is processing a group check-in. The AI answers, confirms availability, quotes the best direct rate ($189 versus $210 on Expedia), and completes the booking. You save the OTA commission and the guest saves money. Everyone wins.",
      },
      {
        title: "Pre-Arrival Upgrade",
        description:
          "A guest booked a standard room for their anniversary. 48 hours before arrival, the system texts: 'Would you like to upgrade to our suite with a city view for just $50 more per night? Perfect for a celebration.' They upgrade. You earn $100 in incremental revenue without lifting a finger.",
      },
      {
        title: "Mid-Stay Guest Request",
        description:
          "A guest texts at 11 PM: 'Can we get extra pillows and a late checkout tomorrow?' The AI confirms both, notifies housekeeping about the pillows, and updates the checkout time. The guest feels cared for without calling a potentially unstaffed overnight desk.",
      },
    ],
    faq: [
      {
        question: "Can the AI match OTA pricing to encourage direct bookings?",
        answer:
          "Yes. We configure the AI with your best available direct rates. It can communicate the value of booking direct (no cancellation fees, loyalty points, best rate guarantee) to convert callers who might otherwise use an OTA.",
      },
      {
        question: "How does it integrate with my property management system?",
        answer:
          "We integrate with major PMS platforms including Opera, Cloudbeds, Mews, and others. Room availability, pricing, and bookings sync in real time. Reservations made by the AI appear in your system immediately.",
      },
      {
        question: "Can it handle group and conference bookings?",
        answer:
          "For group inquiries, the AI collects event details (dates, room blocks, meeting space needs, catering requirements) and routes the complete brief to your sales team. Complex group negotiations are handled personally with full context.",
      },
      {
        question: "What about multilingual guest communication?",
        answer:
          "The AI communicates in multiple languages. For international properties or markets with diverse guest populations, it detects and responds in the guest's preferred language automatically.",
      },
    ],
    reviewIndices: [],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRADES & SPECIALTY
  // ═══════════════════════════════════════════════════════════════
  "trades-specialty/locksmiths": {
    slug: "locksmiths",
    parentSlug: "trades-specialty",
    name: "Locksmiths",
    title: "AI Front Desk for Locksmiths",
    metaDescription:
      "Stop losing lockout calls to competitors. AI Peak Biz answers every emergency call, dispatches jobs, and provides ETAs for locksmith businesses 24/7.",
    heroHeadline:
      "Envision a locksmith business where every emergency lockout call is answered instantly, day or night, and no panicked customer ever hears voicemail.",
    heroSubhead:
      "A person is locked out of their car at 11 PM in a parking lot. They call three locksmiths. The first one who answers and gives an ETA wins the job. AI Peak Biz ensures that is always you. Every call answered. Every emergency dispatched. Every customer served before competitors even call back.",
    problems: [
      {
        title: "After-Hours Emergency Calls Going to Voicemail",
        description:
          "60 percent of lockout calls happen outside business hours. Evenings, weekends, and holidays. If your phone goes to voicemail, the panicked customer calls the next locksmith immediately. They do not leave a message. They do not wait. Emergency customers pay premium rates and you are losing them to competitors who simply answer.",
        cost: "Typical loss: $4,000 to $12,000 per month in missed emergency calls",
      },
      {
        title: "Multiple Simultaneous Emergency Calls",
        description:
          "Friday night, three lockout calls come in within 15 minutes. You are on your way to the first one and cannot answer the other two. Those are $150 to $300 jobs each that call the next locksmith on Google before you even finish your current job.",
        cost: "Typical loss: $2,000 to $6,000 per month in overflow lost calls",
      },
      {
        title: "Low-Urgency Work Buried by Emergencies",
        description:
          "Rekey jobs, lock installations, and security assessments are scheduled work that pays well. But when you are constantly fielding emergency calls, you never have time to follow up on estimate requests or schedule these higher-margin jobs.",
        cost: "Typical loss: $1,500 to $4,000 per month in unscheduled commercial work",
      },
    ],
    solutions: [
      {
        title: "24/7 Emergency Call Answering",
        description:
          "Every call is answered instantly, regardless of time. The AI collects location, lockout type (car, home, business), and urgency. It provides an ETA based on your location and dispatches you immediately. Panicked customers get professional help within seconds of calling.",
      },
      {
        title: "Multi-Call Overflow Management",
        description:
          "When multiple calls come in simultaneously, the AI handles them all. It can dispatch additional techs if you have them, queue non-emergency calls for callback, or provide honest ETAs when you are already on a job. No call goes unanswered.",
      },
      {
        title: "Commercial Work Scheduling",
        description:
          "Non-emergency work like rekeys, lock changes, and security installations get scheduled properly. The AI books appointments during your preferred time blocks, sends reminders, and follows up on estimates. Your commercial revenue grows alongside emergency work.",
      },
    ],
    useCases: [
      {
        title: "11 PM Car Lockout",
        description:
          "A woman is locked out in a dark parking lot at 11 PM. She calls three locksmiths. Your AI answers on the first ring: 'I can have a technician to you in approximately 20 minutes. Can you confirm your location?' She confirms. You dispatch. The other two locksmiths call back to a customer who already has help on the way.",
      },
      {
        title: "Friday Night Triple Call",
        description:
          "Three lockout calls arrive between 8 and 8:15 PM. The AI dispatches you to the nearest one, provides 30-minute ETAs to the other two (or dispatches a second tech), and keeps all three customers informed. You complete $600 in emergency work in 2 hours.",
      },
      {
        title: "Commercial Rekey Follow-Up",
        description:
          "A property manager requested a quote for rekeying 12 units last week. Your system follows up: 'Hi David, just following up on the 12-unit rekey estimate. Would you like to schedule the work?' He confirms. You book a $1,800 job that would have been forgotten.",
      },
    ],
    faq: [
      {
        question: "Can the AI provide accurate pricing over the phone?",
        answer:
          "Yes. We configure standard pricing for common services (car lockout, house lockout, rekey, lock change). The AI provides pricing ranges based on the service type. For unusual requests, it provides an estimate and notes that final pricing is confirmed on-site.",
      },
      {
        question: "How does the dispatch notification work?",
        answer:
          "When the AI accepts a job, you receive an immediate notification with the customer's location, service type, and contact info. You confirm acceptance and the customer receives your ETA. Everything happens within seconds of the initial call.",
      },
      {
        question: "What if I am already on a job and cannot take another?",
        answer:
          "The AI provides an honest ETA based on your current job's estimated completion time. Customers can decide to wait or try elsewhere. For businesses with multiple techs, the system dispatches the nearest available locksmith.",
      },
      {
        question: "Can it differentiate between emergency and non-emergency calls?",
        answer:
          "Yes. The AI determines urgency from the caller's situation. Lockouts and break-in repairs are treated as emergencies with immediate dispatch. Rekeys, new installations, and security assessments are scheduled during business hours.",
      },
    ],
    reviewIndices: [],
  },

  "trades-specialty/towing": {
    slug: "towing",
    parentSlug: "trades-specialty",
    name: "Towing",
    title: "AI Front Desk for Towing Companies",
    metaDescription:
      "Stop losing towing calls to competitors. AI Peak Biz dispatches roadside assistance, provides ETAs, and manages insurance coordination for towing companies.",
    heroHeadline:
      "Envision a towing company where every roadside call is answered instantly, trucks are dispatched efficiently, and no stranded driver ever hears a busy signal.",
    heroSubhead:
      "A driver breaks down on the highway at 2 AM. They call three towing companies. The first one who answers and provides a clear ETA wins the $200 tow. Your dispatcher is on another call. Your competitor answers. AI Peak Biz ensures every breakdown call is answered immediately, dispatched efficiently, and no revenue drives away.",
    problems: [
      {
        title: "After-Hours Calls When Dispatch Is Asleep",
        description:
          "Breakdowns happen 24/7 but dispatch coverage is expensive overnight. If your phone goes to voicemail at 2 AM, stranded drivers call the next company. They are not leaving messages. They need immediate help. After-hours calls often represent your highest-margin work.",
        cost: "Typical loss: $5,000 to $15,000 per month in missed after-hours tows",
      },
      {
        title: "Multiple Calls During Peak Breakdown Times",
        description:
          "Rush hour fender benders, bad weather days, and holiday weekends generate call spikes. Your single dispatcher cannot handle 5 calls in 10 minutes. The ones that go to hold call someone else. Multiple trucks sitting idle while calls are missed is expensive.",
        cost: "Typical loss: $3,000 to $8,000 per month in peak-time overflow",
      },
      {
        title: "Insurance and Motor Club Coordination Delays",
        description:
          "Insurance tows and motor club dispatches require specific paperwork and confirmation processes. Manual coordination slows everything down. Drivers wait longer. Insurance companies track response times and may remove slow companies from their rotation.",
        cost: "Typical loss: $2,000 to $6,000 per month in insurance rotation penalties and delays",
      },
    ],
    solutions: [
      {
        title: "24/7 Call Answering & Dispatch",
        description:
          "Every call is answered within seconds, any time of day. The AI collects vehicle type, location, breakdown type, and destination preference. It dispatches the nearest available truck and provides the driver with a real ETA. Stranded customers get immediate professional response.",
      },
      {
        title: "Multi-Call Surge Handling",
        description:
          "During bad weather or rush hour, the AI handles unlimited simultaneous calls. Each caller gets immediate attention, accurate wait times, and dispatch confirmation. No busy signals. No hold times. Every tow opportunity is captured.",
      },
      {
        title: "Insurance & Motor Club Integration",
        description:
          "For insurance and motor club tows, the AI collects required information (policy number, membership ID, authorization codes) upfront. Dispatch includes all necessary paperwork details. Your drivers arrive with everything they need to complete the job and get paid.",
      },
    ],
    useCases: [
      {
        title: "2 AM Highway Breakdown",
        description:
          "A driver's engine dies on the interstate at 2 AM. They call your number. The AI answers immediately, collects their exact location via GPS sharing, vehicle info, and desired destination. It dispatches your overnight driver with a 25-minute ETA. The driver feels safe knowing help is confirmed and on the way.",
      },
      {
        title: "Rainy Rush Hour Surge",
        description:
          "A rainstorm causes 8 fender benders during evening rush hour. Your phone gets 12 calls in 20 minutes. The AI handles each one, dispatching trucks in priority order based on proximity and urgency. Every caller gets served. Your competitors are too overwhelmed to answer half their calls.",
      },
      {
        title: "Insurance Tow Coordination",
        description:
          "A driver's insurance company authorizes a tow. They call your company. The AI collects the authorization number, confirms the covered distance, and dispatches. When the driver arrives, all paperwork matches. The claim processes smoothly and you stay on the insurance company's preferred list.",
      },
    ],
    faq: [
      {
        question: "Can the AI determine the right truck type for the job?",
        answer:
          "Yes. Based on vehicle type (motorcycle, sedan, SUV, truck, RV), situation (flat tire, won't start, accident, ditch), the AI determines whether a flatbed, wheel-lift, or heavy-duty truck is needed and dispatches accordingly.",
      },
      {
        question: "How does GPS-based dispatch work?",
        answer:
          "The AI can receive location via GPS pin sharing or cross-street description. It matches the breakdown location with your nearest available truck's position and provides accurate ETAs based on real distances.",
      },
      {
        question: "Can it handle police rotation and impound tows?",
        answer:
          "Yes. Police rotation calls are prioritized and dispatched immediately with relevant lot information. The AI collects incident numbers, vehicle details, and hold information for impound processing.",
      },
      {
        question: "What about customers who need roadside assistance instead of a tow?",
        answer:
          "The AI determines whether the situation needs a tow or roadside service (jump start, tire change, fuel delivery, lockout). It dispatches the appropriate service and communicates pricing for non-tow assistance.",
      },
    ],
    reviewIndices: [],
  },

  "trades-specialty/movers": {
    slug: "movers",
    parentSlug: "trades-specialty",
    name: "Movers",
    title: "AI Front Desk for Moving Companies",
    metaDescription:
      "Stop losing moving leads to slow quotes. AI Peak Biz captures move details, schedules estimates, and follows up on quotes for moving companies.",
    heroHeadline:
      "Envision a moving company where every lead gets an instant response, estimates are scheduled same-day, and no quote goes unfollowed.",
    heroSubhead:
      "A family decides to move and calls 3 to 5 moving companies for quotes. The first company that responds professionally, asks the right questions, and schedules an estimate wins the job. AI Peak Biz ensures you are always the first to respond and the most organized in their evaluation.",
    problems: [
      {
        title: "Quote Requests Come In While Crews Are on Jobs",
        description:
          "Moving is a hands-on business. When your crew is loading a truck at 10 AM, nobody is answering the phone. A family needing to move in two weeks calls, gets voicemail, and immediately calls the next company. Moving leads shop 3 to 5 companies. Speed wins.",
        cost: "Typical loss: $5,000 to $15,000 per month in missed moving leads",
      },
      {
        title: "Estimates Sent But Never Closed",
        description:
          "You do an in-home estimate, send a quote, and wait. The family is comparing 3 quotes. Without follow-up, they go with whoever reaches back first or cheapest. Your quote sits in their email unopened while a competitor calls to answer questions.",
        cost: "Typical loss: $4,000 to $10,000 per month in unconverted estimates",
      },
      {
        title: "Seasonal Demand Spikes Overwhelm Your Office",
        description:
          "Summer moving season generates 3x the normal call volume. Your office phone rings constantly. Some calls get answered. Many do not. You are turning away business because you cannot physically handle the inquiry volume, even though your trucks have capacity.",
        cost: "Typical loss: $8,000 to $20,000 per peak month in overflow leads",
      },
    ],
    solutions: [
      {
        title: "AI Lead Capture & Pre-Qualification",
        description:
          "Every call and form submission gets an immediate response. The AI collects move date, origin and destination, home size, special items (piano, pool table, antiques), and access issues (stairs, elevator, long carry). You receive a complete move profile ready for quoting.",
      },
      {
        title: "Estimate Follow-Up Automation",
        description:
          "After sending a quote, your system follows up at 2, 5, and 10 days. It addresses common concerns (insurance, packing services, timeline), answers questions, and creates urgency around booking. Conversion rates climb when follow-up is consistent.",
      },
      {
        title: "Summer Surge Capacity",
        description:
          "During peak season, the AI handles unlimited simultaneous inquiries. Every lead is captured, qualified, and scheduled for an estimate. Your calendar fills efficiently without overwhelm. No revenue walks away due to phone capacity.",
      },
    ],
    useCases: [
      {
        title: "Weekend Move Research",
        description:
          "A family spends Saturday afternoon calling movers. They call 4 companies at 1 PM. Your crews are on jobs. The AI answers, collects their 3-bedroom move details, and books an in-home estimate for Monday evening. Two competitors call back Sunday night. You already have the appointment.",
      },
      {
        title: "Quote Follow-Up Close",
        description:
          "A family received your $3,200 quote 4 days ago. Your system texts: 'Hi Johnson family, just checking in on your upcoming move. Any questions about the quote? We have openings on your preferred date but they are filling up.' They call back with one question, then book.",
      },
      {
        title: "June Surge Management",
        description:
          "First week of June, you receive 40 move inquiries. The AI handles them all, pre-qualifies each one, and schedules estimates across the week. Your estimator has a full calendar of qualified leads instead of a voicemail box of unreturned calls.",
      },
    ],
    faq: [
      {
        question: "Can the AI provide ballpark pricing?",
        answer:
          "Yes. Based on home size, distance, and move type, the AI provides pricing ranges so customers have expectations before the formal estimate. Exact pricing is always confirmed after the in-home or virtual walkthrough.",
      },
      {
        question: "How does it handle local vs. long-distance moves?",
        answer:
          "The AI determines move type from origin and destination, then asks relevant follow-up questions. Local moves get hourly rate information. Long-distance moves get weight-based pricing discussions and timeline expectations.",
      },
      {
        question: "Can it schedule virtual estimates?",
        answer:
          "Yes. For customers who prefer convenience, the AI can schedule video call estimates. It sends instructions on how to walk through their home via phone camera so your estimator can provide an accurate quote remotely.",
      },
      {
        question: "What about packing services and add-ons?",
        answer:
          "The AI asks about packing needs, special item handling, storage requirements, and other add-ons during the initial inquiry. This information is included in the estimate brief so your quote is comprehensive from the start.",
      },
    ],
    reviewIndices: [],
  },

  "trades-specialty/storage-facilities": {
    slug: "storage-facilities",
    parentSlug: "trades-specialty",
    name: "Storage Facilities",
    title: "AI Front Desk for Storage Facilities",
    metaDescription:
      "Stop losing storage rentals to unanswered calls. AI Peak Biz answers unit inquiries, books rentals, and reduces move-out rates for storage facilities.",
    heroHeadline:
      "Envision a storage facility where every inquiry becomes a rental, units fill at optimal rates, and long-term tenants never leave without a retention conversation.",
    heroSubhead:
      "A customer drives by your facility on a Saturday, sees your sign, and calls to ask about 10x10 unit pricing. Your office is closed or the manager is showing a unit. They call the facility down the road. That is $150+ per month in recurring revenue gone because nobody answered. AI Peak Biz answers every call and rents units 24/7.",
    problems: [
      {
        title: "Calls When Office Is Unstaffed or Busy",
        description:
          "Storage facilities often have one person managing the office, conducting tours, handling move-ins, and answering phones. When they are busy or the office is closed, calls go unanswered. Storage renters are shopping on convenience. The first facility that answers and has their size gets the rental.",
        cost: "Typical loss: $3,000 to $8,000 per month in lost unit rentals",
      },
      {
        title: "Vacancy Gaps Between Tenants",
        description:
          "When a tenant moves out, the unit sits vacant until someone calls needing that exact size. Without proactive marketing to your waitlist or nearby prospects, units can sit empty for weeks or months. Every empty day is lost recurring revenue.",
        cost: "Typical loss: $2,000 to $6,000 per month in vacancy losses",
      },
      {
        title: "Long-Term Tenants Leaving Without Warning",
        description:
          "A tenant who has been paying $175 per month for 2 years gives 30-day notice. You had no indication they were considering leaving. If you had offered a small rate lock or incentive, they might have stayed. Retention is always cheaper than acquisition.",
        cost: "Typical loss: $1,500 to $4,000 per month in preventable move-outs",
      },
    ],
    solutions: [
      {
        title: "24/7 Unit Inquiry & Rental",
        description:
          "Every call is answered immediately. The AI knows current unit availability, sizes, pricing, and features (climate control, drive-up, indoor). It can complete the rental process including lease details, move-in scheduling, and access information. Units rent at 10 PM on a Sunday.",
      },
      {
        title: "Vacancy Fill System",
        description:
          "When units open up, your waitlist and recent inquirers are notified automatically. Nearby residents searching for storage get targeted outreach. Units fill faster with less vacancy time between tenants.",
      },
      {
        title: "Tenant Retention Automation",
        description:
          "Long-term tenants receive periodic check-ins, rate-lock offers before increases, and appreciation messages. When a tenant gives notice, the system offers retention incentives based on their tenure and unit demand. More tenants stay.",
      },
    ],
    useCases: [
      {
        title: "Saturday Drive-By Inquiry",
        description:
          "A person driving by calls at 11 AM Saturday. Your manager is doing a move-in. The AI answers, confirms a 10x10 climate-controlled unit is available at $159/month, explains access hours and security features, and books their move-in for Tuesday. Unit rented without staff interaction.",
      },
      {
        title: "Unit Turnover Speed",
        description:
          "A tenant moves out of a popular 5x10 unit on March 1st. Your system immediately texts 3 people who inquired about 5x10 units in the past 30 days. One rents it March 3rd. Two days of vacancy instead of two weeks.",
      },
      {
        title: "Rate Increase Retention",
        description:
          "Before a scheduled rate increase, your system contacts affected tenants: 'Your rate will increase to $185 on April 1st. As a valued 18-month tenant, we are offering you a 12-month rate lock at $175 if you confirm by March 15th.' Most take the lock and stay.",
      },
    ],
    faq: [
      {
        question: "Can the AI show real-time unit availability by size?",
        answer:
          "Yes. The AI connects to your management system and shows current availability by unit size, type, and floor. Customers get accurate information about what is actually available right now, not outdated listings.",
      },
      {
        question: "How does it handle the move-in process?",
        answer:
          "The AI walks customers through lease terms, collects required identification information, processes payment for the first month, and schedules their move-in date. Gate codes and access instructions are sent after payment is confirmed.",
      },
      {
        question: "Can it manage autopay and payment reminders?",
        answer:
          "Yes. The system sends payment reminders before due dates, late payment notifications, and autopay enrollment prompts. It reduces delinquency rates by keeping payment top-of-mind for tenants.",
      },
      {
        question: "What about climate control and specialty unit questions?",
        answer:
          "The AI is configured with details about all your unit types including temperature ranges for climate control, ceiling heights, door sizes, electrical outlets, and vehicle storage specifications. Customers get accurate information for their specific storage needs.",
      },
    ],
    reviewIndices: [],
  },

  "trades-specialty/security-companies": {
    slug: "security-companies",
    parentSlug: "trades-specialty",
    name: "Security Companies",
    title: "AI Front Desk for Security Companies",
    metaDescription:
      "Stop losing security contracts to slow responses. AI Peak Biz handles alarm inquiries, schedules assessments, and follows up on proposals for security companies.",
    heroHeadline:
      "Envision a security company where every home and business inquiry becomes a booked assessment, proposals convert faster, and monitoring accounts grow steadily.",
    heroSubhead:
      "A homeowner's neighbor just got burglarized. They call three security companies while the fear is fresh. The first one that answers professionally and schedules a home assessment wins a $40 to $60 per month monitoring contract for 3 to 5 years. AI Peak Biz ensures you capture every fear-motivated lead while urgency is high.",
    problems: [
      {
        title: "Fear-Motivated Calls Have Short Windows",
        description:
          "After a neighborhood break-in or news story, homeowners call security companies urgently. But within 48 hours, the fear subsides and they procrastinate. If you do not answer immediately and book an assessment, the motivation disappears. These leads are time-sensitive in ways other industries are not.",
        cost: "Typical loss: $5,000 to $15,000 per month in lost monitoring contracts (LTV: $2,000 to $3,600 each)",
      },
      {
        title: "Proposals Stall Without Follow-Up",
        description:
          "You do a thorough security assessment and send a proposal for a $3,000 system with $49/month monitoring. The homeowner means to sign but gets busy. Without systematic follow-up, 40 percent of proposals expire. Each lost proposal is thousands in installation revenue plus years of recurring monitoring fees.",
        cost: "Typical loss: $8,000 to $20,000 per month in stalled proposals",
      },
      {
        title: "Commercial Leads Require Fast Professional Response",
        description:
          "Property managers and business owners evaluating security providers judge you on response time. If they leave a message and wait 24 hours for a callback, they assume your monitoring response would be equally slow. First impressions in security are everything.",
        cost: "Typical loss: $10,000 to $25,000 per month in lost commercial contracts",
      },
    ],
    solutions: [
      {
        title: "Instant Security Inquiry Response",
        description:
          "Every call is answered immediately with professional authority. The AI collects property details, security concerns, current system status, and urgency level. It books a security assessment at the homeowner's convenience while their motivation is highest.",
      },
      {
        title: "Proposal Follow-Up & Close Automation",
        description:
          "After you submit a proposal, the system follows up at strategic intervals. It addresses common security concerns, shares crime statistics for their area, and creates appropriate urgency. Conversion rates improve when follow-up is persistent but professional.",
      },
      {
        title: "Commercial Account Development",
        description:
          "Commercial inquiries receive enterprise-grade responses. The AI qualifies the opportunity (property size, number of locations, current provider, contract expiration), and schedules assessments with your commercial sales team. Business decision-makers feel your professionalism from first contact.",
      },
    ],
    useCases: [
      {
        title: "Post-Burglary Neighborhood Surge",
        description:
          "A home gets burglarized on a Wednesday. Thursday morning, 6 neighbors call security companies. Your AI answers all 6 immediately, expresses understanding of their concern, and books security assessments for that week. You sign 4 new monitoring contracts totaling $2,400 in annual recurring revenue.",
      },
      {
        title: "Proposal Revival",
        description:
          "A homeowner received your $4,200 system proposal 10 days ago. Your system sends a message referencing a recent local break-in: 'With recent activity in your area, now is a great time to get your system installed. Any questions about the proposal?' They sign that afternoon.",
      },
      {
        title: "Commercial Property Manager Lead",
        description:
          "A property management company calls at 5:30 PM asking about security for a 12-building apartment complex. Your office closed at 5. The AI answers, qualifies the opportunity (200 units, current contract expires in 60 days), and books a meeting with your commercial team for Thursday. A $50,000+ annual contract starts with one answered call.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain different system types and monitoring options?",
        answer:
          "Yes. We configure the AI with your full product line including basic alarm systems, smart home integration, camera systems, and monitoring tiers. It provides appropriate recommendations based on the customer's property type and budget.",
      },
      {
        question: "How does it handle existing system takeover questions?",
        answer:
          "The AI asks about current equipment brands and ages, determines compatibility with your monitoring, and explains takeover vs. upgrade options. Customers with existing systems get specific guidance on how switching works.",
      },
      {
        question: "Can it differentiate residential from commercial inquiries?",
        answer:
          "Yes. The AI determines the inquiry type from initial questions and routes accordingly. Residential leads get assessment bookings. Commercial leads go through a qualification process and are connected with your commercial sales team.",
      },
      {
        question: "What about emergency alarm response questions?",
        answer:
          "The AI clearly explains your monitoring center's response protocols, average response times, police/fire dispatch procedures, and false alarm policies. This builds confidence in your monitoring service and differentiates you from DIY options.",
      },
    ],
    reviewIndices: [],
  },
};
