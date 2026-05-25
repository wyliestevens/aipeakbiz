import { industries } from "./industries";
import { IndustryContent } from "./industry-content";
import { subIndustryContent2 } from "./sub-industry-content-2";
import { subIndustryContent3 } from "./sub-industry-content-3";

export interface SubIndustryContent extends IndustryContent {
  parentSlug: string;
  name: string;
}

/**
 * Sub-industry content keyed by "parentSlug/subSlug".
 * Content will be added incrementally per sub-industry.
 */
export const subIndustryContent: Record<string, SubIndustryContent> = {
  // ─── HEALTHCARE SUB-INDUSTRIES ─────────────────────────────────────────────

  "healthcare/dental": {
    slug: "dental",
    parentSlug: "healthcare",
    name: "Dental",
    title: "AI Front Desk for Dental Practices",
    metaDescription:
      "Stop losing dental patients to missed calls and no-shows. AI answers every call, books hygiene appointments, and gets you more 5-star Google reviews.",
    heroHeadline:
      "Envision a dental practice where every patient call is answered — even during cleanings.",
    heroSubhead:
      "Your hygienists are booked solid. The front desk is checking in a family of four. Line three rings. Nobody picks up. That caller books a cleaning across town. AI Peak Biz makes sure your chairs stay full and your phones never go unanswered.",
    problems: [
      {
        title: "Missed Calls During Hygiene Blocks",
        description:
          "When your hygienists are running back-to-back cleanings, your front desk is buried in insurance verifications and patient check-ins. Calls stack up. A typical dental office misses 25 to 35 percent of inbound calls during peak hours. Each missed new patient call is worth $800 to $1,200 in first-year treatment value.",
        cost: "Typical loss: $4,000 to $14,000 per month in missed new patients",
      },
      {
        title: "Hygiene No-Shows Leave Empty Chairs",
        description:
          "A hygiene appointment no-show costs you $150 to $250 in lost production. With no-show rates running 15 to 20 percent in dental, a 10-hygienist-hour-per-day practice loses 2 hours of production daily. That is $300 to $500 per day walking out the door.",
        cost: "Typical loss: $6,000 to $10,000 per month",
      },
      {
        title: "Recare Patients Never Get Rescheduled",
        description:
          "Patients who are due for their 6-month cleaning fall off the schedule. Your front desk means to call them but has 40 other tasks. After 90 days without contact, those patients find a new dentist. You already spent $200 to $400 acquiring each one.",
        cost: "Typical loss: $8,000 to $20,000 per quarter in lost patient lifetime value",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Dental Scheduling",
        description:
          "Your AI receptionist answers every call 24/7. It knows your providers, appointment types, insurance accepted, and scheduling rules. It books hygiene, exams, and emergency slots directly into your practice management system.",
      },
      {
        title: "Automated Recare Outreach",
        description:
          "The system texts and calls patients who are overdue for cleanings. It offers available appointment slots and books them without your front desk lifting a finger. Your recare rate climbs from 60 percent to 85 percent.",
      },
      {
        title: "Reputation Engine for Dental",
        description:
          "After every cleaning or procedure, patients receive a review request. Happy patients are guided to Google. Concerns come to you privately. Your review count grows every week.",
      },
    ],
    useCases: [
      {
        title: "The Multi-Provider Practice at Capacity",
        description:
          "A 4-dentist practice with 8 hygienists gets 120 calls per day. The front desk handles 80. The AI voice assistant catches the other 40, booking 12 new patient appointments per week that would have gone to voicemail. At $900 average first-year value, that is $10,800 per week recovered.",
      },
      {
        title: "The Solo Dentist After Hours",
        description:
          "A patient chips a tooth at 9 PM eating popcorn. They want a next-morning appointment. The AI answers, confirms the emergency slot availability, and books them in. Without it, that patient calls three offices in the morning and picks whoever answers first.",
      },
      {
        title: "The Practice Rebuilding After a Slow Year",
        description:
          "A dental office lost patients during a staff turnover. The recare list has 400 overdue patients. The automated outreach system contacts all 400 over two weeks, books 85 back into hygiene chairs, and recovers $12,750 in production the first month.",
      },
    ],
    faq: [
      {
        question: "Does it integrate with Dentrix, Eaglesoft, or Open Dental?",
        answer:
          "We integrate with all major dental practice management systems. During setup, we map the connection to your specific software so appointments flow directly into your schedule.",
      },
      {
        question: "Can the AI handle insurance questions?",
        answer:
          "The AI can confirm which insurance plans you accept and collect insurance details from new patients. For complex benefits questions, it routes the call to your front desk with full context.",
      },
      {
        question: "How does it handle dental emergencies?",
        answer:
          "We configure emergency protocols specific to your practice. True emergencies can be flagged and routed to your on-call number immediately. Non-urgent issues are booked into the next available slot.",
      },
      {
        question: "Will it hurt the personal touch we have with patients?",
        answer:
          "The AI is professional and warm. It handles routine scheduling so your front desk team can give more personal attention to the patients standing in front of them. Most practices report that in-office patient experience improves.",
      },
    ],
    reviewIndices: [],
  },

  "healthcare/medical-clinics": {
    slug: "medical-clinics",
    parentSlug: "healthcare",
    name: "Medical Clinics",
    title: "AI Front Desk for Medical Clinics",
    metaDescription:
      "Stop losing patients to hold times and voicemail. AI Peak Biz builds AI front desk systems for medical clinics — every call answered, every appointment booked.",
    heroHeadline:
      "Envision a clinic where no patient ever hears hold music again.",
    heroSubhead:
      "Your waiting room is full. Three lines are ringing. A new patient is on hold for four minutes and hangs up. They call the urgent care down the street instead. AI Peak Biz makes sure every caller gets a live answer in under 3 rings.",
    problems: [
      {
        title: "Hold Times Drive Patients Away",
        description:
          "Medical clinics average 2 to 4 minutes of hold time during peak hours. Studies show 34 percent of callers hang up after 1 minute on hold. For a primary care clinic seeing 30 patients per day, that is 3 to 5 lost new patients per week just from hold abandonment.",
        cost: "Typical loss: $5,000 to $15,000 per month in new patient revenue",
      },
      {
        title: "Staff Turnover Disrupts Phone Coverage",
        description:
          "Medical office staff turnover runs 20 to 30 percent annually. Every time a receptionist quits, you lose weeks of productivity, phones get answered inconsistently, and patients notice. Training a replacement takes 4 to 6 weeks. Patients leave during the gap.",
        cost: "Typical loss: $8,000 to $20,000 per turnover event",
      },
      {
        title: "After-Hours Calls Go to Answering Services",
        description:
          "Traditional answering services cost $1 to $3 per call, cannot book appointments, and often frustrate patients with scripted responses. Patients calling after 5 PM want to schedule, not leave a message. They Google another clinic that has online booking.",
        cost: "Typical loss: $3,000 to $8,000 per month in after-hours patients",
      },
    ],
    solutions: [
      {
        title: "AI Voice Receptionist",
        description:
          "Your AI receptionist answers every call instantly — no hold time, no voicemail. It handles scheduling, prescription refill requests, appointment confirmations, and routes urgent matters to your clinical team.",
      },
      {
        title: "Automated Appointment Reminders",
        description:
          "The system sends text and voice reminders 48 hours, 24 hours, and 2 hours before appointments. No-show rates drop from 20 percent to under 8 percent. Empty slots get filled automatically from your waitlist.",
      },
      {
        title: "Patient Reactivation Campaigns",
        description:
          "Patients who have not been seen in 6 to 12 months receive personalized outreach reminding them to schedule their annual physical, follow-up, or preventive screening. Your active patient panel grows without advertising.",
      },
    ],
    useCases: [
      {
        title: "The Primary Care Clinic With 3 Providers",
        description:
          "A family medicine clinic gets 90 calls per day with 2 front desk staff. During lunch breaks and sick days, phones go to voicemail. The AI handles 100 percent of overflow, booking 8 additional appointments per day. At $180 average visit value, that is $1,440 per day in recovered revenue.",
      },
      {
        title: "The Urgent Care Competing With Walk-In Clinics",
        description:
          "Patients calling urgent care expect immediate answers. If they hear hold music, they drive to the nearest walk-in clinic instead. The AI answers every call in under 2 rings, confirms wait times, and pre-registers patients before they arrive.",
      },
      {
        title: "The Multi-Location Practice Standardizing Service",
        description:
          "A 3-location medical group has inconsistent phone experiences across offices. The AI provides the same professional response at every location, every time. Patient satisfaction scores increase 22 percent across all sites within 60 days.",
      },
    ],
    faq: [
      {
        question: "Can it handle prescription refill requests?",
        answer:
          "Yes. The AI collects the patient name, date of birth, medication name, and pharmacy preference, then routes the request to your clinical team for review. Patients get confirmation that the request was received.",
      },
      {
        question: "Does it work with our EHR scheduling module?",
        answer:
          "We integrate with most major EHR systems including Epic, Athena, eClinicalWorks, and NextGen. Appointments booked by the AI flow directly into your existing scheduling system.",
      },
      {
        question: "How does it handle urgent medical calls?",
        answer:
          "We configure clinical triage rules with your team. Calls mentioning chest pain, difficulty breathing, or other emergencies are immediately routed to your triage nurse or instructed to call 911. You define the rules.",
      },
      {
        question: "What about patient privacy?",
        answer:
          "The system is HIPAA-compliant with a Business Associate Agreement in place. It collects only scheduling-relevant information and all data is encrypted in transit and at rest.",
      },
    ],
    reviewIndices: [],
  },

  "healthcare/physical-therapy": {
    slug: "physical-therapy",
    parentSlug: "healthcare",
    name: "Physical Therapy",
    title: "AI Front Desk for Physical Therapy Clinics",
    metaDescription:
      "Stop losing PT patients to missed calls and dropped plans of care. AI answers every call, books follow-ups, and keeps patients on track.",
    heroHeadline:
      "Envision a PT clinic where every patient completes their plan of care.",
    heroSubhead:
      "Your therapists are with patients. The front desk is handling co-pays and authorizations. A new referral calls and gets voicemail. They book with the PT clinic that picks up. AI Peak Biz makes sure every referral becomes a patient.",
    problems: [
      {
        title: "Referrals Lost to Voicemail",
        description:
          "When an orthopedic surgeon sends a referral, that patient calls within 24 hours. If you do not pick up, they call the next PT clinic on their insurance list. A single PT patient averages 12 to 20 visits at $100 to $200 per visit. That is $1,200 to $4,000 in revenue per missed referral.",
        cost: "Typical loss: $6,000 to $20,000 per month in lost referrals",
      },
      {
        title: "Patients Drop Off Mid-Plan of Care",
        description:
          "The average PT patient completes only 60 to 70 percent of their prescribed visits. Without proactive rebooking and reminders, patients drift away after visit 6 of a 12-visit plan. That is 6 visits of lost revenue per patient, times 10 to 20 dropoffs per month.",
        cost: "Typical loss: $5,000 to $12,000 per month in incomplete plans",
      },
      {
        title: "Authorization Delays Block Scheduling",
        description:
          "Your front desk spends 2 to 3 hours per day chasing insurance authorizations instead of answering phones. While they are on hold with Blue Cross, new patient calls go unanswered and existing patients cannot get rescheduled.",
        cost: "Typical loss: $3,000 to $8,000 per month in scheduling gaps",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for PT Scheduling",
        description:
          "Your AI answers every call and books initial evaluations, follow-up visits, and cancellation reschedules. It knows your therapists, specialties, and availability. New referrals get booked before they call your competitor.",
      },
      {
        title: "Plan of Care Adherence System",
        description:
          "The system automatically schedules the next 3 to 4 visits after each appointment. Patients receive reminders and rebooking prompts if they miss. Completion rates climb from 65 percent to 85 percent.",
      },
      {
        title: "Referral Source Nurturing",
        description:
          "Automated updates go back to referring physicians confirming patient progress. Doctors who see their patients are being well-served send more referrals your way.",
      },
    ],
    useCases: [
      {
        title: "The Outpatient Clinic Drowning in Referrals",
        description:
          "An orthopedic group sends 30 referrals per month to your clinic. Your front desk converts 20 into evaluations because 10 calls go to voicemail. With the AI answering every call, conversion jumps to 28 out of 30. At $2,400 average plan value, that is $19,200 per month in recovered revenue.",
      },
      {
        title: "The Clinic With High Dropout Rates",
        description:
          "A sports PT clinic sees patients drop off after 4 to 5 visits. The automated adherence system texts patients the night before, reschedules cancellations within 24 hours, and nudges patients who miss. Dropout rate falls from 35 percent to 15 percent.",
      },
      {
        title: "The Multi-Specialty PT Practice",
        description:
          "A clinic with pelvic floor, sports, and neuro PT specialties needs calls routed to the right therapist schedule. The AI identifies the referral type, matches it to the correct specialist, and books into the right calendar without front desk intervention.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle different appointment types for different specialties?",
        answer:
          "Yes. We configure it to recognize referral types and route to the appropriate therapist calendar. Sports rehab, post-surgical, neurological — each gets its own scheduling logic.",
      },
      {
        question: "Does it work with WebPT, Clinicient, or other PT-specific EMRs?",
        answer:
          "We integrate with major PT practice management systems including WebPT, Clinicient, and TheraOffice. Appointments flow directly into your existing system.",
      },
      {
        question: "Can it help with patient intake paperwork?",
        answer:
          "The AI can text new patients a link to complete intake forms before their first visit. This saves 15 to 20 minutes per new patient eval and keeps your schedule running on time.",
      },
      {
        question: "How does it handle insurance authorization questions?",
        answer:
          "The AI collects authorization numbers from patients and confirms visit counts remaining. Complex authorization issues are flagged for your billing team with full context.",
      },
    ],
    reviewIndices: [],
  },

  "healthcare/optometry": {
    slug: "optometry",
    parentSlug: "healthcare",
    name: "Optometry",
    title: "AI Front Desk for Optometry Practices",
    metaDescription:
      "Stop losing eye care patients to missed calls. AI Peak Biz builds AI front desk systems for optometrists — every call answered, more glasses sold.",
    heroHeadline:
      "Envision an optometry practice where every call becomes an exam on the books.",
    heroSubhead:
      "A patient needs an updated prescription for contacts. They call during lunch. Your staff is helping someone pick frames. Voicemail. That patient orders online instead. AI Peak Biz makes sure every call is answered and every exam is booked.",
    problems: [
      {
        title: "Missed Calls Mean Lost Optical Revenue",
        description:
          "Every annual eye exam is a gateway to $300 to $800 in optical sales — frames, lenses, contacts. When a scheduling call goes to voicemail, you lose the exam AND the optical sale. A busy optometry practice missing 10 calls per week loses $3,000 to $8,000 in combined exam and optical revenue.",
        cost: "Typical loss: $12,000 to $32,000 per month in combined exam and optical revenue",
      },
      {
        title: "Annual Recall Patients Disappear",
        description:
          "Patients due for their annual exam forget to schedule. Without proactive outreach, 30 to 40 percent of your patient base skips their annual visit. Each lost recall is $200 in exam revenue plus $400 in average optical spend.",
        cost: "Typical loss: $8,000 to $18,000 per month in lapsed annual patients",
      },
      {
        title: "Contact Lens Reorders Go to Online Retailers",
        description:
          "Patients reordering contacts default to 1-800-Contacts or online retailers because it is easier than calling your office. Every box sold online is revenue that should stay in your practice. A 500-patient contact lens base losing 40 percent to online is significant.",
        cost: "Typical loss: $3,000 to $7,000 per month in lost contact lens sales",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Optical",
        description:
          "Your AI answers every call and books comprehensive exams, contact lens fittings, and follow-ups. It knows your providers, insurance panels, and frame brands. Patients get booked before they think about going elsewhere.",
      },
      {
        title: "Annual Recall Automation",
        description:
          "The system contacts patients due for annual exams via text and phone. It offers convenient time slots and books them directly. Your recall rate increases from 60 percent to 85 percent without staff effort.",
      },
      {
        title: "Contact Lens Reorder System",
        description:
          "Patients receive automated reminders when their contact lens supply is running low, with a simple text-back option to reorder through your practice. Revenue stays in-house instead of going to online retailers.",
      },
    ],
    useCases: [
      {
        title: "The Busy OD Practice Missing Calls",
        description:
          "A 2-doctor optometry practice gets 60 calls per day. Staff handles 45. The AI catches the other 15, booking 6 additional exams per day. At $550 average combined exam and optical value, that is $3,300 per day in recovered revenue.",
      },
      {
        title: "The Practice Losing Contact Lens Revenue",
        description:
          "An office with 600 contact lens patients loses 250 annual reorders to online retailers. The automated reorder system recaptures 100 of those patients in the first quarter. At $200 average annual supply cost, that is $20,000 recovered per quarter.",
      },
      {
        title: "The New Optometrist Building a Patient Base",
        description:
          "A recently opened practice needs every lead converted. The AI ensures no inquiry goes unanswered, books every interested caller, and requests reviews after every positive experience. The practice reaches 200 Google reviews in 6 months.",
      },
    ],
    faq: [
      {
        question: "Can it handle questions about frame brands and lens options?",
        answer:
          "The AI can share general information about your frame brands and lens options. For detailed fitting questions or specific style recommendations, it books a consultation with your optician.",
      },
      {
        question: "Does it work with my optical POS and EHR system?",
        answer:
          "We integrate with common optometry platforms including Crystal PM, RevolutionEHR, and Eyefinity. Appointments booked by the AI flow into your existing system.",
      },
      {
        question: "Can it process contact lens reorders?",
        answer:
          "The AI collects reorder requests and routes them to your staff for fulfillment. It confirms the patient prescription is current and flags patients who need an updated exam before reordering.",
      },
      {
        question: "How does it handle vision insurance vs. medical insurance questions?",
        answer:
          "We configure the AI to know which vision plans (VSP, EyeMed, etc.) and medical insurance you accept. It can guide patients on whether their visit is vision or medical and book accordingly.",
      },
    ],
    reviewIndices: [],
  },

  "healthcare/veterinary": {
    slug: "veterinary",
    parentSlug: "healthcare",
    name: "Veterinary",
    title: "AI Front Desk for Veterinary Clinics",
    metaDescription:
      "Stop losing pet owners to missed calls. AI Peak Biz builds AI front desk systems for vet clinics — every call answered, more appointments booked.",
    heroHeadline:
      "Envision a vet clinic where every worried pet owner gets an answer immediately.",
    heroSubhead:
      "A dog owner notices their pet limping at 7 PM. They call your clinic. It rings to voicemail. They rush to the emergency vet and pay $800. You lost a $200 next-morning appointment. AI Peak Biz makes sure pet owners always reach you.",
    problems: [
      {
        title: "Panicked Pet Owners Call After Hours",
        description:
          "40 percent of pet health concerns happen outside business hours. Pet owners calling at 7 PM or 6 AM want reassurance and a next-morning appointment. Without an answer, they go to emergency vet clinics. You lose the appointment and often lose the client permanently to the ER vet's follow-up system.",
        cost: "Typical loss: $4,000 to $12,000 per month in after-hours lost appointments",
      },
      {
        title: "Wellness Visits Fall Off the Schedule",
        description:
          "Annual wellness exams and vaccine boosters are the backbone of vet clinic revenue. Without reminders, 35 to 45 percent of pets miss their annual visit. Each wellness visit averages $250 to $400 with diagnostics and vaccines included.",
        cost: "Typical loss: $6,000 to $15,000 per month in skipped wellness visits",
      },
      {
        title: "Phone Volume Overwhelms Small Teams",
        description:
          "A typical vet clinic has 1 to 2 receptionists handling check-ins, pharmacy calls, lab result inquiries, and new patient scheduling simultaneously. During morning rush, calls stack up. Every missed call is a pet owner who may not call back.",
        cost: "Typical loss: $3,000 to $9,000 per month in overflow calls",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Veterinary",
        description:
          "Your AI answers every call around the clock. It books wellness exams, sick visits, and surgery follow-ups. For after-hours emergencies, it triages — providing next-morning booking for non-urgent issues and directing true emergencies to the nearest ER vet.",
      },
      {
        title: "Wellness Recall Automation",
        description:
          "The system sends reminders when pets are due for vaccines, dentals, or annual exams. Pet owners can book with a single text reply. Your wellness visit compliance rate jumps without any staff phone time.",
      },
      {
        title: "Reputation Builder for Vet Clinics",
        description:
          "After every visit, pet owners receive a review request. Happy clients gush about their vet online. Your Google profile builds trust with new pet owners in the area searching for a vet they can trust with their family member.",
      },
    ],
    useCases: [
      {
        title: "The 3-Vet Practice Drowning in Calls",
        description:
          "A multi-doctor vet clinic gets 100 calls per day with 2 front desk staff. During surgery hours, 25 calls go to voicemail. The AI catches every one, booking 10 additional appointments per day. At $275 average visit value, that is $2,750 per day recovered.",
      },
      {
        title: "The Clinic Losing Wellness Revenue",
        description:
          "A practice with 3,000 active patients has 40 percent overdue for annuals. The automated recall system contacts 1,200 pet owners over 4 weeks, books 350 back in for wellness visits. That is $87,500 in recovered production at $250 per visit.",
      },
      {
        title: "The New Vet Competing With Corporate Clinics",
        description:
          "A solo vet opening a new practice competes against Banfield and VCA. The AI gives her the phone presence of a large clinic — every call answered professionally, reviews requested automatically, and online booking available 24/7. She reaches 150 Google reviews in 4 months.",
      },
    ],
    faq: [
      {
        question: "Can it triage emergency vs. next-day appointments?",
        answer:
          "Yes. We configure triage protocols with your team. Symptoms like seizures, bloat, or trauma are flagged as emergencies and directed to the nearest ER. Less urgent concerns are booked for the next available slot.",
      },
      {
        question: "Does it work with veterinary practice management software?",
        answer:
          "We integrate with common vet PMS platforms including AVImark, Cornerstone, eVetPractice, and Shepherd. Appointments flow directly into your schedule.",
      },
      {
        question: "Can it handle multi-pet households?",
        answer:
          "The AI can identify returning clients by phone number and manage appointments for multiple pets in the same household. It keeps track of which pet needs which service.",
      },
      {
        question: "What about pharmacy refill calls?",
        answer:
          "The AI collects pet name, medication, and owner details, then routes the refill request to your pharmacy team. The pet owner gets confirmation without waiting on hold.",
      },
    ],
    reviewIndices: [],
  },

  "healthcare/mental-health": {
    slug: "mental-health",
    parentSlug: "healthcare",
    name: "Mental Health",
    title: "AI Front Desk for Mental Health Practices",
    metaDescription:
      "Stop losing therapy clients to missed calls. AI Peak Biz builds AI front desk systems for therapists and counselors — every inquiry answered with care.",
    heroHeadline:
      "Envision a practice where every person reaching out for help gets a response.",
    heroSubhead:
      "Someone finally works up the courage to call a therapist. It takes them weeks to make that call. Your phone goes to voicemail. They do not call back. AI Peak Biz makes sure that moment of courage turns into a booked intake.",
    problems: [
      {
        title: "Courage Calls Go to Voicemail",
        description:
          "Mental health clients often call once and only once. If they reach voicemail, 50 to 70 percent never call back. That first call is the hardest one they will ever make. A missed intake call at $150 to $250 per session, with an average 12-session treatment, is $1,800 to $3,000 in lifetime value gone.",
        cost: "Typical loss: $5,000 to $18,000 per month in clients who never call back",
      },
      {
        title: "Therapists Cannot Answer Phones During Sessions",
        description:
          "You are in session 6 to 8 hours per day. You cannot pick up the phone. Solo practitioners and small group practices without dedicated admin staff lose clients every day because the phone rings during the 50-minute hour.",
        cost: "Typical loss: $3,000 to $10,000 per month in missed new client inquiries",
      },
      {
        title: "High Cancellation Rates Impact Income",
        description:
          "Mental health practices see cancellation rates of 20 to 30 percent. Clients cancel due to anxiety about sessions, scheduling conflicts, or simply forgetting. Without automated reminders and easy rescheduling, those slots go unfilled and income drops.",
        cost: "Typical loss: $4,000 to $12,000 per month in last-minute cancellations",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant With Empathetic Tone",
        description:
          "Your AI answers every call with warmth and professionalism. It collects basic information, explains your practice approach, and books intake appointments. Callers feel heard from the first interaction.",
      },
      {
        title: "Automated Appointment Reminders",
        description:
          "Gentle reminders go out 24 hours and 2 hours before each session. Clients can confirm, reschedule, or cancel with a text reply. Your no-show rate drops from 25 percent to under 10 percent.",
      },
      {
        title: "Waitlist Management",
        description:
          "When your caseload is full, the AI adds callers to a waitlist and automatically reaches out when a slot opens. No more lost leads when you are at capacity. You fill new openings within hours instead of weeks.",
      },
    ],
    useCases: [
      {
        title: "The Solo Therapist In Session All Day",
        description:
          "A licensed therapist sees 25 clients per week. She is in session from 9 AM to 6 PM. Every call during those hours goes to voicemail. The AI answers 15 new inquiry calls per week, converting 8 into booked intakes. At $2,400 average client lifetime value, that is $19,200 per week in potential revenue captured.",
      },
      {
        title: "The Group Practice Adding Clinicians",
        description:
          "A growing practice adds 3 new therapists and needs to fill their caseloads quickly. The AI handles increased call volume, matches clients to the right therapist based on specialty and insurance, and books intakes. All 3 therapists reach full caseload in 6 weeks instead of 4 months.",
      },
      {
        title: "The Practice Reducing No-Shows",
        description:
          "A counseling center averaging 8 no-shows per week implements automated reminders. No-shows drop to 2 per week. At $175 per session, that is $1,050 per week in recovered revenue — $4,200 per month from reminders alone.",
      },
    ],
    faq: [
      {
        question: "Is it appropriate for mental health callers to speak with AI?",
        answer:
          "The AI handles scheduling and logistics only. It does not provide clinical advice or crisis intervention. For callers expressing suicidal ideation or crisis, the system immediately provides the 988 Suicide and Crisis Lifeline number and can alert your team.",
      },
      {
        question: "Can it match clients to the right therapist?",
        answer:
          "Yes. We configure the AI with your therapists' specialties, insurance panels, and availability. It asks callers about their needs and books with the appropriate clinician.",
      },
      {
        question: "How does it handle sensitive information?",
        answer:
          "The system is HIPAA-compliant and collects only scheduling-relevant information. It does not ask about diagnoses or clinical details. All data is encrypted and protected under our Business Associate Agreement.",
      },
      {
        question: "Can clients book online instead of calling?",
        answer:
          "Yes. The system includes an AI chatbot on your website that handles the same intake booking process. Clients who prefer not to call can schedule online with the same personalized matching experience.",
      },
    ],
    reviewIndices: [],
  },

  "healthcare/med-spa": {
    slug: "med-spa",
    parentSlug: "healthcare",
    name: "Med Spa",
    title: "AI Front Desk for Med Spas",
    metaDescription:
      "Stop losing med spa clients to slow follow-up. AI Peak Biz builds AI front desk systems for med spas — every inquiry answered, more treatments booked.",
    heroHeadline:
      "Envision a med spa where every inquiry becomes a booked treatment.",
    heroSubhead:
      "A potential client sees your Botox ad on Instagram at 10 PM. They message your page. Nobody responds until morning. By then they booked with the med spa that replied in 2 minutes. AI Peak Biz makes sure you are always the fastest to respond.",
    problems: [
      {
        title: "Social Media Leads Go Cold Overnight",
        description:
          "Med spa clients are impulse-driven. They see a before-and-after photo, feel motivated, and reach out. If you do not respond within 5 minutes, they move on. 60 percent of med spa leads come after business hours via Instagram and Facebook. By morning, the moment has passed.",
        cost: "Typical loss: $6,000 to $20,000 per month in cold social media leads",
      },
      {
        title: "One-Time Clients Never Rebook",
        description:
          "A client comes in for Botox. The results are great. But without a rebooking prompt at 10 to 12 weeks, they forget or try a competitor. Client retention in med spas averages 40 to 50 percent without active rebooking systems. A retained Botox client is worth $2,400 to $4,000 per year.",
        cost: "Typical loss: $8,000 to $25,000 per month in lapsed repeat clients",
      },
      {
        title: "Price Shoppers Clog Your Phone Lines",
        description:
          "Many callers want to know prices for Botox, filler, laser treatments. Your front desk spends 20 minutes per call explaining packages when a quick text with pricing would suffice. Meanwhile, serious buyers cannot get through.",
        cost: "Typical loss: $3,000 to $8,000 per month in missed high-value bookings",
      },
    ],
    solutions: [
      {
        title: "AI Instant Response for Social Leads",
        description:
          "When a prospect messages on Instagram, Facebook, or your website at any hour, the AI responds within 60 seconds. It answers questions about treatments, pricing, and availability, then books a consultation. The lead never goes cold.",
      },
      {
        title: "Automated Rebooking System",
        description:
          "The system tracks treatment intervals and sends rebooking reminders at the optimal time — 10 weeks for Botox, 6 months for filler, etc. Clients book their next appointment with a single text reply.",
      },
      {
        title: "Membership and Package Upsell",
        description:
          "After a client's first treatment, the system introduces your membership or package options via text. Clients who join memberships have 3x higher lifetime value and visit more consistently.",
      },
    ],
    useCases: [
      {
        title: "The Med Spa Losing Instagram Leads",
        description:
          "A med spa spends $5,000 per month on Instagram ads generating 150 inquiries. Staff responds to 80 within an hour. The other 70 go cold. The AI responds to all 150 within 60 seconds and books 35 consultations that would have been lost. At $600 average treatment value, that is $21,000 per month recovered.",
      },
      {
        title: "The Practice Boosting Retention",
        description:
          "A Botox-focused med spa sees 200 clients per month but only 80 rebook. The automated rebooking system nudges clients at 10 weeks. Rebooking rate jumps from 40 percent to 70 percent. That is 60 additional treatments per month at $400 each — $24,000 in monthly revenue.",
      },
      {
        title: "The New Med Spa Building Reputation",
        description:
          "A newly opened med spa has 12 Google reviews. The reputation engine requests reviews after every treatment. Within 90 days, they reach 120 reviews at 4.9 stars. Organic inquiries double as they dominate local search results.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain treatment options and pricing?",
        answer:
          "Yes. We configure the AI with your full service menu, pricing, and package options. It can explain what Botox, filler, laser, and other treatments involve and quote pricing. For clinical questions, it books a consultation.",
      },
      {
        question: "Does it integrate with my booking software?",
        answer:
          "We integrate with common med spa platforms including Boulevard, Vagaro, Aesthetic Record, and others. Appointments booked by the AI flow directly into your schedule.",
      },
      {
        question: "Can it handle consultation follow-ups for people who did not book?",
        answer:
          "Yes. The system follows up with prospects who inquired but did not book — at 1 day, 3 days, and 7 days. Many clients need a second nudge before committing to a treatment.",
      },
      {
        question: "How does it handle before-and-after photo requests?",
        answer:
          "The AI can send links to your before-and-after gallery for specific treatments. Seeing real results is often the final push a prospect needs to book.",
      },
    ],
    reviewIndices: [],
  },

  "healthcare/dermatology": {
    slug: "dermatology",
    parentSlug: "healthcare",
    name: "Dermatology",
    title: "AI Front Desk for Dermatology Practices",
    metaDescription:
      "Stop losing derm patients to long wait times for appointments. AI Peak Biz builds AI systems for dermatology — every call answered, schedules optimized.",
    heroHeadline:
      "Envision a dermatology practice where patients get booked fast and show up.",
    heroSubhead:
      "A patient finds a suspicious mole on a Saturday. They call your office Monday morning along with 30 other people. Half get voicemail. They book with the derm that picks up. AI Peak Biz makes sure you answer every one of those Monday morning calls.",
    problems: [
      {
        title: "Monday Morning Call Floods",
        description:
          "Dermatology practices see massive call volume Monday mornings as patients who noticed skin concerns over the weekend all call at once. A 2-provider practice may get 50 to 70 calls before noon Monday. Front desk staff can handle 30 to 40. The rest go to voicemail or get abandoned.",
        cost: "Typical loss: $5,000 to $15,000 per month in Monday overflow lost patients",
      },
      {
        title: "Long Wait Times Push Patients to Competitors",
        description:
          "Many dermatology practices book 4 to 8 weeks out for new patients. When patients call and hear a 6-week wait, they call competitors. Without a waitlist system that fills cancellations, you lose new patients to practices with shorter perceived wait times.",
        cost: "Typical loss: $4,000 to $12,000 per month in patients who refuse to wait",
      },
      {
        title: "Cosmetic Consultations Lost to Slow Response",
        description:
          "Cosmetic dermatology patients — laser, chemical peels, injectables — are impulse-driven like med spa clients. They want answers now. If your office takes 24 hours to return a call about laser resurfacing, they booked somewhere else by hour 3.",
        cost: "Typical loss: $6,000 to $18,000 per month in lost cosmetic revenue",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Dermatology",
        description:
          "Your AI handles the Monday flood and every other peak period. It books medical and cosmetic appointments, collects referral information, and manages your waitlist. Every caller gets an answer in under 3 rings.",
      },
      {
        title: "Smart Waitlist Management",
        description:
          "When cancellations happen, the system automatically contacts waitlisted patients and fills the slot within hours. Your schedule stays full even when patients cancel. No more revenue lost to empty slots.",
      },
      {
        title: "Cosmetic Lead Fast-Response",
        description:
          "Inquiries about cosmetic services get instant responses via text, chat, or phone. Pricing, before-and-after galleries, and consultation booking happen in real time. You capture the client while they are motivated.",
      },
    ],
    useCases: [
      {
        title: "The Practice Handling Monday Floods",
        description:
          "A 3-provider derm practice gets 65 calls Monday morning with 2 receptionists. They miss 25 calls. The AI answers all overflow, booking 12 additional patients. At $300 average visit value, that is $3,600 in recovered Monday revenue alone — $14,400 per month.",
      },
      {
        title: "The Cosmetic Derm Competing With Med Spas",
        description:
          "A dermatologist offering laser and injectables loses cosmetic clients to med spas with faster response times. The AI responds to every cosmetic inquiry within 60 seconds, books consultations instantly, and follows up with undecided leads. Cosmetic bookings increase 40 percent.",
      },
      {
        title: "The Practice Filling Cancellation Gaps",
        description:
          "A busy practice averages 4 cancellations per day. Previously, those slots stayed empty. The smart waitlist fills 3 of 4 cancellation slots automatically. At $275 per visit, that is $825 per day — over $16,000 per month in recovered revenue.",
      },
    ],
    faq: [
      {
        question: "Can it differentiate between medical and cosmetic dermatology calls?",
        answer:
          "Yes. The AI asks about the reason for the visit and routes medical concerns to your medical schedule and cosmetic inquiries to your cosmetic calendar. Each has its own availability and booking rules.",
      },
      {
        question: "How does it handle urgent skin concerns?",
        answer:
          "We configure urgency protocols — rapidly changing moles, signs of infection, or severe reactions can be flagged for same-day or next-day slots. Non-urgent concerns are booked into standard availability.",
      },
      {
        question: "Does it work with dermatology-specific EHR systems?",
        answer:
          "We integrate with systems commonly used in dermatology including Modernizing Medicine, EMA, Nextech, and others. Appointments flow directly into your existing scheduling workflow.",
      },
      {
        question: "Can it handle insurance verification for new patients?",
        answer:
          "The AI collects insurance information from new patients at the time of booking. Your billing team can verify eligibility before the appointment so there are no surprises at check-in.",
      },
    ],
    reviewIndices: [],
  },

  // ─── HOME SERVICES SUB-INDUSTRIES ─────────────────────────────────────────────

  "home-services/plumbing": {
    slug: "plumbing",
    parentSlug: "home-services",
    name: "Plumbing",
    title: "AI Front Desk for Plumbing Companies",
    metaDescription:
      "Stop losing plumbing jobs to missed calls. AI Peak Biz answers every call 24/7, books emergency and routine jobs, and gets you more 5-star reviews.",
    heroHeadline:
      "Envision a plumbing business where every emergency call gets answered — even at 2 AM.",
    heroSubhead:
      "A homeowner has water gushing from a burst pipe at midnight. They call three plumbers. Two go to voicemail. You answer. You get the $2,500 job. AI Peak Biz makes sure you are always the one who picks up.",
    problems: [
      {
        title: "Emergency Calls at All Hours",
        description:
          "Plumbing emergencies do not wait for business hours. Burst pipes, sewer backups, and water heater failures happen at midnight, on weekends, and on holidays. A plumber who does not answer loses $500 to $5,000 jobs to whoever picks up first. Speed to answer is everything in emergency plumbing.",
        cost: "Typical loss: $6,000 to $20,000 per month in missed emergency jobs",
      },
      {
        title: "Techs on Jobs Cannot Answer the Office Phone",
        description:
          "Your crew is under a house fixing a slab leak. Nobody is in the office. The phone rings 5 times and hits voicemail. That homeowner needed a water heater replacement — a $1,800 job. By the time you call back at 5 PM, they already hired someone else.",
        cost: "Typical loss: $4,000 to $12,000 per month in daytime missed calls",
      },
      {
        title: "No Review System Against Franchise Competition",
        description:
          "Roto-Rooter and Mr. Rooter have hundreds of reviews. You do better work at better prices but have 35 reviews. Homeowners searching for a plumber pick the company with more social proof. Without a review engine, you are fighting with one hand tied behind your back.",
        cost: "Typical loss: $3,000 to $10,000 per month in lost trust-based leads",
      },
    ],
    solutions: [
      {
        title: "24/7 AI Dispatcher",
        description:
          "Your AI dispatcher answers every call day and night. It knows your service area, services, and availability. For emergencies, it collects the details and dispatches immediately. For routine work, it books the next available slot.",
      },
      {
        title: "Missed Call Text-Back",
        description:
          "If a rare call slips through, a text fires within 60 seconds. The homeowner describes their issue and gets a booking link or callback confirmation. You capture the lead before they move to the next plumber.",
      },
      {
        title: "Automated Review Requests",
        description:
          "After every completed job, the system texts the homeowner a review link. Happy customers leave 5 stars on Google. Concerns come to you privately first. Your review count climbs every week without lifting a finger.",
      },
    ],
    useCases: [
      {
        title: "The Midnight Sewer Backup",
        description:
          "A homeowner discovers sewage backing up into their basement at 11 PM. They call 4 plumbers. Three go to voicemail. Your AI answers, confirms the address is in your service area, gathers details, and dispatches your on-call tech. That is a $3,500 emergency job you would have missed.",
      },
      {
        title: "The Solo Plumber Scaling Up",
        description:
          "A one-truck operation is too busy on jobs to answer the phone. He misses 8 to 10 calls per day. The AI answers every one, books 4 additional jobs daily. Revenue increases 40 percent in the first month without hiring office staff.",
      },
      {
        title: "The Plumbing Company After a Cold Snap",
        description:
          "Temperatures drop below freezing and burst pipe calls flood in — 80 calls in one day. Your 1-person office cannot keep up. The AI handles overflow, triages emergencies, and books routine repairs for the following week. You capture every lead from the surge.",
      },
    ],
    faq: [
      {
        question: "Can the AI dispatch my on-call technician for emergencies?",
        answer:
          "Yes. We configure emergency protocols that immediately notify your on-call tech via text and phone with job details. The homeowner gets confirmation that help is on the way.",
      },
      {
        question: "Does it know my service area and pricing?",
        answer:
          "We program your exact service area by zip code and your pricing for common services like drain cleaning, water heater install, and leak repair. The AI quotes accurately.",
      },
      {
        question: "What if the job needs an in-person estimate?",
        answer:
          "The AI books an estimate appointment and lets the homeowner know a technician will assess the job on-site before any work begins. It sets proper expectations upfront.",
      },
      {
        question: "How does it handle after-hours emergency fees?",
        answer:
          "The AI informs callers about after-hours rates before booking. If the homeowner agrees, the job is dispatched. No surprises, no angry reviews about unexpected charges.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/electrical": {
    slug: "electrical",
    parentSlug: "home-services",
    name: "Electrical",
    title: "AI Front Desk for Electrical Contractors",
    metaDescription:
      "Stop losing electrical jobs to missed calls. AI Peak Biz answers 24/7, books service calls and panel upgrades, and builds your Google reviews.",
    heroHeadline:
      "Envision an electrical business where every call gets answered — even when you are on a ladder.",
    heroSubhead:
      "A homeowner smells burning from an outlet. They call an electrician immediately. If you do not answer, they call the next one. That is a $400 service call and a potential $3,000 panel upgrade gone. AI Peak Biz makes sure you always pick up.",
    problems: [
      {
        title: "Cannot Answer While On the Job",
        description:
          "Electricians work with their hands — in panels, on ladders, in attics. You cannot answer the phone mid-wire. A typical electrical contractor misses 30 to 50 percent of inbound calls during work hours. Each missed call could be a $300 to $5,000 job.",
        cost: "Typical loss: $5,000 to $15,000 per month in missed service calls",
      },
      {
        title: "Seasonal Surges Overwhelm You",
        description:
          "Storm season brings power outage calls. Summer brings AC-related electrical work. Generator season hits every fall. During surges, call volume doubles or triples. Without overflow capacity, you lose the surge revenue to competitors who answer.",
        cost: "Typical loss: $8,000 to $25,000 per surge event",
      },
      {
        title: "Big Jobs Lost to Slow Follow-Up",
        description:
          "A homeowner wants a $12,000 whole-home rewire. They call three electricians for estimates. You call back 6 hours later. They already scheduled two estimates and do not need a third. Speed to first response wins in high-ticket electrical work.",
        cost: "Typical loss: $5,000 to $20,000 per month in lost big-ticket projects",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Electrical",
        description:
          "Your AI answers every call immediately. It identifies the issue — outlet problem, panel upgrade, new construction wiring — and books the appropriate appointment type. Emergency electrical issues get flagged and dispatched.",
      },
      {
        title: "Surge Overflow Management",
        description:
          "During storm season or high-demand periods, the AI handles unlimited simultaneous calls. No busy signals, no voicemail. Every caller gets professional service and a booked appointment.",
      },
      {
        title: "Estimate Follow-Up Automation",
        description:
          "After you deliver an estimate, the system follows up at 2 days, 5 days, and 10 days. Homeowners who go quiet get a friendly nudge. Your close rate on estimates increases 20 to 30 percent.",
      },
    ],
    useCases: [
      {
        title: "The Electrician in the Attic",
        description:
          "You are running wire through an attic in July. Your phone buzzes 4 times in an hour. You cannot stop. The AI answers all 4 calls, books 2 service calls and captures 2 estimate requests. That is $2,800 in same-week revenue you would have lost.",
      },
      {
        title: "The Storm Season Surge",
        description:
          "A major storm knocks out power across the county. Your phone rings 60 times in one day. You can handle 15 yourself. The AI books the other 45 into your schedule over the next 2 weeks. At $450 average service call, that is $20,250 in storm revenue captured.",
      },
      {
        title: "The Contractor Closing More Panel Upgrades",
        description:
          "An electrician gives 20 panel upgrade estimates per month at $3,500 average. He closes 8. After implementing automated follow-up, he closes 12. That is 4 additional jobs at $3,500 — $14,000 per month in revenue from follow-up alone.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle emergency electrical calls?",
        answer:
          "Yes. We configure the system to identify electrical emergencies — burning smells, sparking outlets, downed lines — and immediately alert your on-call electrician while advising the caller on safety.",
      },
      {
        question: "Does it know the difference between residential and commercial work?",
        answer:
          "We configure the AI with your service types. It asks the right questions to route residential vs. commercial calls to the correct schedule and quote the appropriate rates.",
      },
      {
        question: "Can it handle permit questions?",
        answer:
          "The AI can explain that certain jobs require permits and that you handle the permitting process. For specific permit questions, it routes the call to you or takes a message.",
      },
      {
        question: "How does it handle requests for work you do not do?",
        answer:
          "We configure your service list. If a caller needs something outside your scope — like HVAC or plumbing — the AI politely explains and can suggest they search for the appropriate trade.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/hvac": {
    slug: "hvac",
    parentSlug: "home-services",
    name: "HVAC",
    title: "AI Front Desk for HVAC Companies",
    metaDescription:
      "Stop losing HVAC jobs to missed calls on hot days. AI Peak Biz answers every call 24/7, books AC repairs and installs, and builds your reviews.",
    heroHeadline:
      "Envision your HVAC company answering every call — even on the hottest day of summer.",
    heroSubhead:
      "It is 112 degrees. Every AC unit in the city is working overtime. Half of them fail. Your phone rings off the hook. You miss 30 calls. Your competitor books them all. AI Peak Biz makes sure you never lose another summer surge.",
    problems: [
      {
        title: "Summer Surges Overwhelm Your Team",
        description:
          "When temperatures hit triple digits, HVAC call volume spikes 300 to 500 percent. Your office staff cannot keep up. Calls go to voicemail. Homeowners without AC call every company on Google until someone picks up. The first to answer wins the $300 to $800 service call — or the $8,000 to $15,000 system replacement.",
        cost: "Typical loss: $15,000 to $50,000 per month during peak season",
      },
      {
        title: "After-Hours Breakdowns Go to Competitors",
        description:
          "AC and heating failures happen at 10 PM when the house hits 85 degrees inside. Homeowners with kids and elderly family members need help now. If your after-hours line goes to voicemail, they call a 24-hour competitor. You lose a $400 to $1,200 emergency repair.",
        cost: "Typical loss: $4,000 to $12,000 per month in after-hours lost jobs",
      },
      {
        title: "Maintenance Agreement Customers Lapse",
        description:
          "You sell maintenance agreements but 40 percent of customers do not renew. Without automated renewal reminders and scheduling, those recurring revenue customers drift away. A maintenance customer is worth $300 to $500 per year in guaranteed revenue plus $2,000 to $5,000 in repair and replacement referrals.",
        cost: "Typical loss: $5,000 to $15,000 per quarter in lapsed agreements",
      },
    ],
    solutions: [
      {
        title: "AI Dispatcher for HVAC",
        description:
          "Your AI answers every call 24/7/365. It triages — emergency no-heat or no-cool calls get dispatched immediately. Routine maintenance and estimates are booked into available slots. No call goes unanswered, even on the busiest summer day.",
      },
      {
        title: "Maintenance Agreement Automation",
        description:
          "The system tracks agreement renewal dates and seasonal tune-up schedules. Customers receive automated reminders and booking prompts. Renewal rates jump from 60 percent to 85 percent.",
      },
      {
        title: "Seasonal Demand Capacity",
        description:
          "During peak season, the AI handles unlimited simultaneous calls. No busy signals. No hold music. Every caller gets booked or added to your priority waitlist with a specific callback window.",
      },
    ],
    useCases: [
      {
        title: "The Phoenix HVAC Company on a 115-Degree Day",
        description:
          "Temperature hits 115. Call volume spikes from 40 to 180 calls per day. Your 2-person office handles 50. The AI catches the other 130, booking 45 additional service calls and 8 system replacement estimates. At $500 average service call and $10,000 average install, that is $102,500 in captured revenue from one heat wave.",
      },
      {
        title: "The Company Retaining Maintenance Customers",
        description:
          "An HVAC company with 800 maintenance agreements sees 320 lapse annually. Automated renewal outreach cuts that to 120 lapses. 200 retained customers at $400 average agreement value is $80,000 in preserved annual recurring revenue.",
      },
      {
        title: "The HVAC Company Booking Winter Tune-Ups",
        description:
          "Fall is slow season. The system proactively contacts your customer database offering heating tune-ups before winter. 150 customers book seasonal maintenance in October. At $150 per tune-up, that is $22,500 in revenue during your slowest month.",
      },
    ],
    faq: [
      {
        question: "Can it handle the massive call spikes during extreme weather?",
        answer:
          "Yes. The AI handles unlimited simultaneous calls. Whether you get 50 calls or 500 calls in one day, every caller gets a professional response and a booked appointment or waitlist position.",
      },
      {
        question: "Does it integrate with ServiceTitan or Housecall Pro?",
        answer:
          "We integrate with major HVAC field service platforms including ServiceTitan, Housecall Pro, and FieldEdge. Appointments booked by the AI flow directly into your dispatch board.",
      },
      {
        question: "Can it sell maintenance agreements?",
        answer:
          "The AI can explain your maintenance agreement benefits and pricing, then book a signup or transfer to your sales team. After service calls, it can also mention your agreement options as an upsell.",
      },
      {
        question: "How does it prioritize emergency vs. routine calls?",
        answer:
          "We configure triage rules — no heat with elderly residents, no AC with infants, gas smells are flagged as immediate dispatch. Routine maintenance and estimates are booked into your standard schedule.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/roofing": {
    slug: "roofing",
    parentSlug: "home-services",
    name: "Roofing",
    title: "AI Front Desk for Roofing Companies",
    metaDescription:
      "Stop losing roofing jobs to missed calls after storms. AI Peak Biz answers every call, books inspections, and helps you dominate storm season.",
    heroHeadline:
      "Envision your roofing company capturing every lead after a hailstorm.",
    heroSubhead:
      "Hail hits your market. 500 homeowners need roof inspections. Your phone explodes. You book 40. Your competitor with better phone systems books 200. AI Peak Biz makes sure you capture every storm lead that calls.",
    problems: [
      {
        title: "Storm Surge Floods Your Phones",
        description:
          "After a major hailstorm, roofing companies see call volume spike 500 to 1000 percent in 48 hours. Your 2-person office cannot handle 200 calls in a day. Most go to voicemail. Those homeowners call the next roofer on Google. Storm leads are worth $8,000 to $15,000 per roof and they call once.",
        cost: "Typical loss: $50,000 to $200,000 per storm event in missed leads",
      },
      {
        title: "Estimates Delivered But Never Followed Up",
        description:
          "You climb on 30 roofs per month and deliver estimates. But between jobs, you forget to follow up. By day 5, the homeowner signed with the roofer who called them back on day 2. Roofing has a long sales cycle and follow-up is where deals close.",
        cost: "Typical loss: $20,000 to $60,000 per month in unworked estimates",
      },
      {
        title: "Insurance Claim Process Confuses Homeowners",
        description:
          "Homeowners do not understand the insurance claim process. They call with questions you cannot answer from a roof. Without guidance, they give up on the claim and do not get the roof replaced. That is a $12,000 to $20,000 job that evaporates from confusion.",
        cost: "Typical loss: $10,000 to $30,000 per month in abandoned claims",
      },
    ],
    solutions: [
      {
        title: "AI Storm Response System",
        description:
          "When a storm hits, your AI handles unlimited simultaneous calls. It books roof inspections, collects property details, and schedules your crews. You capture every lead without hiring temporary staff.",
      },
      {
        title: "Estimate Follow-Up Automation",
        description:
          "After delivering an estimate, the system follows up at 2, 5, 7, and 14 days. It answers common questions, reminds homeowners of the deadline to file with insurance, and keeps your company top of mind until they sign.",
      },
      {
        title: "Insurance Guidance Automation",
        description:
          "The AI texts homeowners step-by-step instructions for filing their insurance claim. It reminds them of deadlines and answers common questions about the process. More claims get filed, more roofs get replaced.",
      },
    ],
    useCases: [
      {
        title: "The Roofer After a Hailstorm",
        description:
          "A major hailstorm hits and 300 homeowners call in 3 days. Your office books 50. The AI captures the other 250, books 180 inspections over 3 weeks. At $12,000 average roof replacement and 40 percent close rate, that is $864,000 in pipeline from one storm you would have mostly missed.",
      },
      {
        title: "The Company Closing More Estimates",
        description:
          "A roofer delivers 40 estimates per month and closes 14. After implementing automated follow-up, close rate improves to 22 out of 40. That is 8 additional jobs at $10,000 average — $80,000 per month in revenue from follow-up alone.",
      },
      {
        title: "The Roofer Building Off-Season Revenue",
        description:
          "Between storms, the AI proactively contacts homeowners in your database who had inspections but never moved forward. It re-engages 30 cold leads per month, converting 5 to 8 into jobs. Off-season revenue stays consistent.",
      },
    ],
    faq: [
      {
        question: "Can it handle the volume after a major storm?",
        answer:
          "Yes. The AI handles unlimited simultaneous calls. Whether 50 or 500 people call in one day, every caller gets a professional response and a booked inspection. No busy signals, no voicemail.",
      },
      {
        question: "Does it know how to explain the insurance claim process?",
        answer:
          "We configure the AI with your standard insurance guidance — how to file a claim, what to expect from the adjuster, and what documentation to gather. It guides homeowners without giving legal advice.",
      },
      {
        question: "Can it schedule inspections by area to keep crews efficient?",
        answer:
          "Yes. We configure geographic zones so the AI books inspections in the same neighborhood on the same day. Your crews spend less time driving and more time inspecting.",
      },
      {
        question: "How does it handle commercial roofing inquiries?",
        answer:
          "The AI differentiates residential from commercial calls based on the caller's description. Commercial leads are flagged as high-priority and routed to your commercial sales team with full property details.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/concrete": {
    slug: "concrete",
    parentSlug: "home-services",
    name: "Concrete",
    title: "AI Front Desk for Concrete Contractors",
    metaDescription:
      "Stop losing concrete jobs to missed calls. AI Peak Biz answers every call, books estimates for driveways, patios, and foundations, and builds your reviews.",
    heroHeadline:
      "Envision a concrete business where every estimate request gets answered — even from the job site.",
    heroSubhead:
      "You are pouring a driveway. Your phone rings three times. You cannot stop mid-pour. Those three callers wanted patio estimates worth $4,000 to $8,000 each. They called your competitor. AI Peak Biz makes sure the phone is always covered.",
    problems: [
      {
        title: "Cannot Answer While Pouring",
        description:
          "Concrete work requires continuous attention. You cannot stop a pour to answer the phone. Finishing, forming, and pouring are all-hands-on-deck activities. A concrete contractor misses 40 to 60 percent of calls during active pours. Each missed call could be a $3,000 to $15,000 project.",
        cost: "Typical loss: $8,000 to $25,000 per month in missed project inquiries",
      },
      {
        title: "Seasonal Demand Peaks in Spring",
        description:
          "Spring is when every homeowner wants a new driveway, patio, or walkway. Call volume doubles from March to June. Without extra phone capacity, you lose the surge to competitors who pick up faster.",
        cost: "Typical loss: $15,000 to $40,000 during spring season",
      },
      {
        title: "Estimates Given But Not Followed Up",
        description:
          "You drive to 15 homes per month for estimates. You hand them the proposal. Then you are back on the job site and forget to follow up. Half of those homeowners went with whoever called back first. Concrete jobs are big-ticket and require nurturing.",
        cost: "Typical loss: $10,000 to $30,000 per month in lost estimate conversions",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Concrete",
        description:
          "Your AI answers every call while you are on the job site. It collects project details — driveway, patio, foundation, sidewalk — along with dimensions and timeline, then books the estimate appointment.",
      },
      {
        title: "Estimate Follow-Up System",
        description:
          "After delivering an estimate, the system follows up at 2, 5, and 10 days. It answers questions about the process, reminds the homeowner about seasonal scheduling, and keeps your name top of mind.",
      },
      {
        title: "Seasonal Outreach Campaigns",
        description:
          "In early spring, the system contacts your past customers and leads from last year who did not move forward. It re-engages cold leads and fills your spring schedule before the season starts.",
      },
    ],
    useCases: [
      {
        title: "The Contractor on a Full-Day Pour",
        description:
          "Your crew is pouring a commercial parking pad all day. 8 calls come in. The AI answers every one, collecting project details and booking 4 estimate appointments for later in the week. At $6,000 average project value, that is $24,000 in pipeline captured during one day on the job.",
      },
      {
        title: "The Company Filling the Spring Schedule",
        description:
          "In February, the system reaches out to 200 past inquiries who never moved forward. 35 respond with interest. You book 15 spring projects before your competition even starts advertising. That is $90,000 in revenue booked before the season begins.",
      },
      {
        title: "The Concrete Contractor Closing Estimates",
        description:
          "You deliver 12 estimates per month and close 5. After implementing follow-up automation, you close 8. Three additional jobs at $7,000 average is $21,000 per month in revenue from better follow-through.",
      },
    ],
    faq: [
      {
        question: "Can the AI give rough pricing for common jobs?",
        answer:
          "We configure the AI with your pricing ranges for standard work — driveways per square foot, standard patio sizes, sidewalks. It gives ballpark ranges and explains that a final quote requires an on-site estimate.",
      },
      {
        question: "Does it understand different concrete services?",
        answer:
          "Yes. The AI is configured with your full service list — stamped, colored, exposed aggregate, broom finish, foundations, retaining walls. It asks the right questions based on what the caller needs.",
      },
      {
        question: "How does it handle timing questions about weather?",
        answer:
          "The AI can explain your seasonal scheduling — that concrete work requires certain temperature ranges and dry conditions. It books estimates and sets expectations about timeline.",
      },
      {
        question: "Can it collect photos or measurements from homeowners?",
        answer:
          "After the initial call, the system texts the homeowner a link to upload photos of the area and provide approximate measurements. This helps you prepare a more accurate estimate before the site visit.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/landscaping": {
    slug: "landscaping",
    parentSlug: "home-services",
    name: "Landscaping",
    title: "AI Front Desk for Landscaping Companies",
    metaDescription:
      "Stop losing landscaping clients to missed calls. AI Peak Biz answers every call, books estimates, and keeps your crews booked solid year-round.",
    heroHeadline:
      "Envision a landscaping business booked solid — every call answered, every lead captured.",
    heroSubhead:
      "You are on a mower. Your foreman is running a crew. The office is empty. A homeowner wants a $5,000 landscape design. They call. Voicemail. They call the next company. AI Peak Biz makes sure that never happens.",
    problems: [
      {
        title: "Entire Team Is in the Field",
        description:
          "Landscaping companies have everyone outdoors. Owner, foreman, crews — all in the field 8 to 10 hours per day. There is nobody to answer the phone. Calls go to voicemail or a spouse who is doing it as a favor. Professional phone presence is non-existent for most landscapers.",
        cost: "Typical loss: $5,000 to $18,000 per month in missed inquiries",
      },
      {
        title: "Seasonal Revenue Swings",
        description:
          "Landscapers are slammed from April to October and slow from November to March. Without proactive outreach during slow months — snow removal, hardscaping, spring cleanup pre-booking — revenue drops 50 to 70 percent. That cash flow gap sinks many companies.",
        cost: "Typical loss: $10,000 to $30,000 per off-season in preventable revenue loss",
      },
      {
        title: "One-Time Clients Never Become Recurring",
        description:
          "A homeowner pays you $4,000 for a landscape install. Great work. But without follow-up, they hire whoever shows up first for weekly maintenance. That is $200 per month in recurring revenue — $2,400 per year — that walks away because you did not ask.",
        cost: "Typical loss: $5,000 to $15,000 per quarter in lost recurring contracts",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Landscaping",
        description:
          "Your AI answers every call while your team is in the field. It books estimates for landscape design, hardscaping, and maintenance. It knows your service area, services, and seasonal availability.",
      },
      {
        title: "Recurring Service Conversion",
        description:
          "After completing a one-time project, the system follows up offering weekly or bi-weekly maintenance. It converts project clients into recurring revenue without your sales effort.",
      },
      {
        title: "Off-Season Revenue Builder",
        description:
          "During slow months, the system contacts your customer base about seasonal services — fall cleanups, snow removal, spring prep, hardscaping projects. It keeps revenue flowing when mowing stops.",
      },
    ],
    useCases: [
      {
        title: "The Landscaper Who Never Answers the Phone",
        description:
          "A 3-crew landscaping company has zero office staff. The owner answers when he can — maybe 40 percent of calls. The AI picks up the other 60 percent, booking 8 additional estimates per week. At $3,500 average project value, that is $28,000 per week in captured pipeline.",
      },
      {
        title: "The Company Converting to Recurring",
        description:
          "After every landscape install, the system offers maintenance packages. Of 20 installs per month, 8 sign up for weekly service at $200 per month. That is $1,600 per month in new recurring revenue — $19,200 annualized from one month of installs.",
      },
      {
        title: "The Landscaper Filling Winter Months",
        description:
          "In October, the system contacts 400 customers about fall cleanup and snow removal packages. 80 sign up. At $150 per cleanup and $400 monthly snow removal, that is $12,000 in fall cleanup plus $32,000 in winter revenue from one outreach campaign.",
      },
    ],
    faq: [
      {
        question: "Can the AI differentiate between maintenance and project inquiries?",
        answer:
          "Yes. The AI asks what the caller needs — weekly mowing, a new patio, a landscape redesign — and routes each to the appropriate estimate or service schedule.",
      },
      {
        question: "Does it work with lawn care scheduling software?",
        answer:
          "We integrate with common field service platforms including Jobber, Service Autopilot, and LMN. Appointments and estimates flow into your existing system.",
      },
      {
        question: "Can it handle commercial property management calls?",
        answer:
          "Yes. The AI identifies commercial vs. residential callers and routes commercial leads to your commercial sales process. It collects property details and schedules site visits.",
      },
      {
        question: "How does it handle seasonal service transitions?",
        answer:
          "We update the AI seasonally — spring cleanup offers in March, mowing in April, leaf cleanup in October, snow in November. It always promotes the right service for the season.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/pest-control": {
    slug: "pest-control",
    parentSlug: "home-services",
    name: "Pest Control",
    title: "AI Front Desk for Pest Control Companies",
    metaDescription:
      "Stop losing pest control jobs to missed calls. AI Peak Biz answers every call, books treatments, and keeps your recurring revenue growing.",
    heroHeadline:
      "Envision a pest control business where every panicked caller becomes a booked customer.",
    heroSubhead:
      "A homeowner finds termites in their garage. They are panicking. They call three pest control companies. Two go to voicemail. You answer. You get the $1,500 treatment plus the $50/month prevention plan. AI Peak Biz makes sure you always answer first.",
    problems: [
      {
        title: "Panic Calls Happen at Bad Times",
        description:
          "Homeowners find roaches at midnight, termites on weekends, and bed bugs at 6 AM. They want help NOW. If you do not pick up, they call the next company. Pest control is urgency-driven — the first company to answer wins 80 percent of the time.",
        cost: "Typical loss: $4,000 to $12,000 per month in missed panic calls",
      },
      {
        title: "Recurring Customers Cancel Without Warning",
        description:
          "Quarterly pest control customers cancel at a rate of 3 to 5 percent per month. They do not see bugs so they assume they do not need the service. Without proactive retention outreach, your recurring revenue base slowly erodes. Each lost customer is $200 to $600 per year gone.",
        cost: "Typical loss: $3,000 to $8,000 per month in canceled recurring services",
      },
      {
        title: "Seasonal Spikes Overwhelm Your Office",
        description:
          "Ant season, mosquito season, termite swarm season — each brings call spikes of 200 to 400 percent. Your 1-person office cannot handle triple the calls. Overflow goes to voicemail. Those callers find someone else.",
        cost: "Typical loss: $6,000 to $20,000 per seasonal spike",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Pest Control",
        description:
          "Your AI answers every call 24/7. It identifies the pest type, assesses urgency, and books the appropriate service — same-day for emergencies, next-available for routine. Panicked homeowners get immediate reassurance and a booked appointment.",
      },
      {
        title: "Recurring Service Retention System",
        description:
          "Before each quarterly service, the system sends reminders confirming the appointment and explaining the value. Cancellation requests trigger a save sequence. Retention rates improve from 85 percent to 95 percent annually.",
      },
      {
        title: "Seasonal Upsell Campaigns",
        description:
          "Before mosquito season, the system contacts your database about mosquito treatment add-ons. Before termite season, it offers inspection specials. Each season becomes a revenue event instead of just a call spike.",
      },
    ],
    useCases: [
      {
        title: "The Termite Panic Call at 7 AM",
        description:
          "A homeowner finds termite swarmers before work. They call 4 companies. Three go to voicemail at 7 AM. Your AI answers, calmly explains that swarmers indicate an active colony, and books a same-day inspection. That is a $1,500 to $3,000 treatment you captured because you answered first.",
      },
      {
        title: "The Company Retaining Quarterly Customers",
        description:
          "A pest control company with 600 quarterly accounts loses 25 per month. After implementing the retention system, losses drop to 10 per month. 15 saved accounts at $400 annual value is $6,000 per month in preserved recurring revenue.",
      },
      {
        title: "The Mosquito Season Revenue Boost",
        description:
          "In April, the system texts 800 existing customers about mosquito treatment add-ons at $75 per month. 120 sign up for the May-to-September season. That is $45,000 in seasonal revenue from one text campaign.",
      },
    ],
    faq: [
      {
        question: "Can the AI identify different pest types from caller descriptions?",
        answer:
          "Yes. We configure the AI with common pest descriptions and seasonal patterns for your area. It asks targeted questions to identify the likely pest and book the right service type.",
      },
      {
        question: "Does it work with PestRoutes or other pest control software?",
        answer:
          "We integrate with common pest control platforms including PestRoutes, FieldRoutes, and PestPac. Appointments booked by the AI flow directly into your routing and scheduling system.",
      },
      {
        question: "Can it handle same-day emergency booking?",
        answer:
          "Yes. For urgent pest situations — active infestations, stinging insects near children, termite swarms — the AI checks same-day availability and books immediately.",
      },
      {
        question: "How does it handle commercial pest control inquiries?",
        answer:
          "The AI identifies commercial callers — restaurants, hotels, property managers — and routes them to your commercial service process with appropriate scheduling and pricing.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/pool-service": {
    slug: "pool-service",
    parentSlug: "home-services",
    name: "Pool Service",
    title: "AI Front Desk for Pool Service Companies",
    metaDescription:
      "Stop losing pool service clients to missed calls. AI Peak Biz answers every call, books cleanings and repairs, and grows your recurring route.",
    heroHeadline:
      "Envision a pool service business with a full route and zero missed calls.",
    heroSubhead:
      "A homeowner's pool turns green before a party this weekend. They call 3 pool companies. Two are on their routes and cannot answer. You pick up. You get the $350 green-to-clean and a new weekly customer. AI Peak Biz makes sure you always answer.",
    problems: [
      {
        title: "On the Route All Day, Cannot Answer",
        description:
          "Pool techs spend 6 to 8 hours driving between pools and servicing them. You cannot answer the phone with chemicals in your hands or while testing water. A pool service company with 3 techs on routes misses 50 to 70 percent of daytime calls.",
        cost: "Typical loss: $3,000 to $10,000 per month in missed new customer calls",
      },
      {
        title: "Seasonal Customer Churn",
        description:
          "Pool customers cancel after summer ends or when they do not see visible results. Annual churn in pool service runs 20 to 30 percent. Each weekly customer is worth $4,800 to $7,200 per year. Losing 10 customers per month is devastating.",
        cost: "Typical loss: $5,000 to $12,000 per month in churned route customers",
      },
      {
        title: "Equipment Repair Calls Go to Competitors",
        description:
          "When a pump fails or a heater breaks, homeowners want immediate response. Pool equipment repairs run $300 to $2,000. If you do not answer, the homeowner calls the pool store or another service company. You lose the repair AND sometimes the weekly account.",
        cost: "Typical loss: $2,000 to $8,000 per month in lost repair revenue",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Pool Service",
        description:
          "Your AI answers every call while your techs are on their routes. It books new weekly accounts, schedules repairs, and handles green pool emergency requests. Callers get professional service whether they call at 8 AM or 8 PM.",
      },
      {
        title: "Route Retention System",
        description:
          "Before each season transition, the system reinforces the value of year-round service. When a customer hints at canceling, a save sequence triggers with seasonal pool care education and special pricing.",
      },
      {
        title: "Seasonal Upsell for Pool Owners",
        description:
          "In spring, the system offers pool opening services. In fall, closing and winterization. Year-round, it promotes equipment upgrades and energy-efficient options. Each season adds revenue to your existing route.",
      },
    ],
    useCases: [
      {
        title: "The Pool Company Missing Route Calls",
        description:
          "A 4-tech pool service company gets 20 calls per day. Techs answer 6. The AI catches the other 14, booking 5 new route customers per week. At $500 per month per customer, that is $2,500 per month in new recurring revenue — $30,000 annualized per week of new signups.",
      },
      {
        title: "The Green Pool Emergency",
        description:
          "A homeowner has a party Saturday. It is Wednesday. Their pool is green. They call 3 companies. Your AI answers, quotes the green-to-clean service, and books the tech for Thursday morning. That is a $350 to $500 service plus a likely new weekly customer.",
      },
      {
        title: "The Company Reducing Winter Cancellations",
        description:
          "A pool service company in the Southwest loses 40 accounts every November. The retention system educates customers about year-round care, offers a discounted winter rate, and saves 25 accounts. That is 25 customers at $400 per month average — $10,000 per month in preserved revenue.",
      },
    ],
    faq: [
      {
        question: "Can the AI book different service types — weekly, green pool, repair?",
        answer:
          "Yes. The AI asks what the caller needs and routes to the right service type. Weekly service goes to route scheduling. Repairs get prioritized. Green pool emergencies are booked for the next available opening.",
      },
      {
        question: "Does it integrate with pool service software?",
        answer:
          "We integrate with common pool service platforms including Skimmer, Pool Brain, and Service Autopilot. Route appointments flow directly into your scheduling system.",
      },
      {
        question: "Can it handle equipment questions?",
        answer:
          "The AI can answer basic equipment questions and schedule a tech visit for diagnosis. For complex equipment failures, it collects the symptoms and routes the information to your repair team.",
      },
      {
        question: "How does it handle service area questions?",
        answer:
          "We configure your service area by zip code. The AI confirms whether a caller's address is on your route map and either books the service or politely explains they are outside your area.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/garage-door": {
    slug: "garage-door",
    parentSlug: "home-services",
    name: "Garage Door",
    title: "AI Front Desk for Garage Door Companies",
    metaDescription:
      "Stop losing garage door jobs to missed calls. AI Peak Biz answers every call 24/7, books repairs and installs, and captures emergency revenue.",
    heroHeadline:
      "Envision a garage door business where every stuck-door emergency call gets answered instantly.",
    heroSubhead:
      "A homeowner's garage door will not open at 6:30 AM. They cannot get their car out for work. They call 3 garage door companies. Two are still asleep. You answer. You get the $400 spring replacement. AI Peak Biz makes sure you are always first to respond.",
    problems: [
      {
        title: "Early Morning and Weekend Emergencies",
        description:
          "Garage door emergencies peak at 6 to 8 AM when people need to leave for work and 5 to 7 PM when they come home. Weekends are high-volume too. If you do not answer during these windows, the homeowner calls the next company. A spring replacement is $300 to $500. A new opener is $400 to $800.",
        cost: "Typical loss: $4,000 to $12,000 per month in missed emergency calls",
      },
      {
        title: "Small Team Cannot Cover Phones and Jobs",
        description:
          "Most garage door companies run 2 to 5 techs. There is no dedicated office person. The owner or a tech answers when they can. During installations that take 3 to 4 hours, all calls go to voicemail.",
        cost: "Typical loss: $3,000 to $10,000 per month in calls missed during installs",
      },
      {
        title: "New Door Sales Lost to Slow Quotes",
        description:
          "A homeowner wants a new garage door — a $2,000 to $5,000 project. They call 3 companies for quotes. The first one to show up and present usually wins. If you take 2 days to call back, you are too late.",
        cost: "Typical loss: $6,000 to $15,000 per month in lost new door sales",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Garage Door",
        description:
          "Your AI answers every call 24/7. It identifies the issue — broken spring, off-track door, opener failure, new door request — and books the right appointment. Emergencies get same-day scheduling.",
      },
      {
        title: "Speed-to-Quote System",
        description:
          "For new door inquiries, the AI collects door dimensions, style preferences, and budget range, then books the estimate within 24 hours. You get there before competitors who take 3 days to call back.",
      },
      {
        title: "Reputation Builder",
        description:
          "After every repair or install, the system texts a review request. Your Google reviews grow weekly. Homeowners searching for garage door repair pick the company with the most positive reviews.",
      },
    ],
    useCases: [
      {
        title: "The 6 AM Spring Break Emergency",
        description:
          "A homeowner hears a loud bang at 6 AM — broken spring. They need to get to work. They call 3 companies. Your AI answers on ring 2, confirms same-day service, and books the 9 AM slot. That is a $450 repair captured before your competitors even check voicemail.",
      },
      {
        title: "The New Door Sale Won by Speed",
        description:
          "A homeowner wants to replace their 20-year-old garage door. They call 4 companies on Saturday. Your AI books a Monday morning estimate. Competitor A calls back Tuesday. Competitor B on Wednesday. You present first and close the $3,500 sale.",
      },
      {
        title: "The Company Growing Reviews",
        description:
          "A garage door company with 28 Google reviews competes against a franchise with 400. After 6 months with the reputation engine, they reach 150 reviews at 4.9 stars. Inbound calls increase 45 percent as they climb local search rankings.",
      },
    ],
    faq: [
      {
        question: "Can the AI diagnose the problem over the phone?",
        answer:
          "The AI asks targeted questions — Did you hear a loud bang? Is the door off track? Is the opener clicking but not moving? This helps identify the likely issue and book the right repair appointment with the right parts on the truck.",
      },
      {
        question: "Does it handle both residential and commercial?",
        answer:
          "Yes. The AI identifies whether the caller is residential or commercial and routes accordingly. Commercial calls — warehouses, loading docks, fire stations — go to your commercial team.",
      },
      {
        question: "Can it quote spring and opener repairs?",
        answer:
          "We configure the AI with your standard pricing for common repairs. It can quote spring replacements, opener installs, and basic repairs. Custom or unusual situations are booked as diagnostics.",
      },
      {
        question: "How fast is setup?",
        answer:
          "Most garage door companies are live within 5 to 7 business days. We configure your services, pricing, service area, and scheduling, then you review and approve before going live.",
      },
    ],
    reviewIndices: [],
  },

  "home-services/cleaning-services": {
    slug: "cleaning-services",
    parentSlug: "home-services",
    name: "Cleaning Services",
    title: "AI Front Desk for Cleaning Companies",
    metaDescription:
      "Stop losing cleaning clients to missed calls. AI Peak Biz answers every inquiry, books cleanings, and converts one-time clients to recurring accounts.",
    heroHeadline:
      "Envision a cleaning business with a full schedule and zero missed calls.",
    heroSubhead:
      "A homeowner needs a deep clean before in-laws arrive Friday. They call 4 cleaning companies. Three are out cleaning and cannot answer. You pick up. You get the $300 deep clean and a new biweekly customer. AI Peak Biz makes sure you always answer.",
    problems: [
      {
        title: "Cleaners Cannot Answer While Cleaning",
        description:
          "Your team is at a client's home scrubbing bathrooms. The phone rings. Nobody picks up. That is a homeowner who needs a deep clean, a move-out clean, or recurring service. They call the next company. Cleaning companies with no office staff miss 50 to 70 percent of calls.",
        cost: "Typical loss: $3,000 to $10,000 per month in missed booking calls",
      },
      {
        title: "One-Time Clients Never Convert to Recurring",
        description:
          "You do a great deep clean. The homeowner is thrilled. But without follow-up, they forget to book the biweekly service. A recurring cleaning client is worth $5,000 to $10,000 per year. Every deep clean you do without converting to recurring is a missed opportunity.",
        cost: "Typical loss: $4,000 to $12,000 per month in lost recurring revenue",
      },
      {
        title: "Last-Minute Cancellations Leave Gaps",
        description:
          "Cleaning clients cancel same-day at a rate of 10 to 15 percent. A 2-hour cleaning slot at $150 to $250 sits empty. Without a waitlist system, that revenue is gone. Over a month, same-day cancellations add up fast.",
        cost: "Typical loss: $2,000 to $6,000 per month in unfilled cancellation gaps",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Cleaning Services",
        description:
          "Your AI answers every call while your team is cleaning. It books deep cleans, recurring services, and move-out cleanings. It knows your pricing, availability, and service area. Professional phone presence without office staff.",
      },
      {
        title: "Recurring Service Conversion",
        description:
          "After every one-time cleaning, the system follows up offering biweekly or monthly service at a discounted rate. It explains the benefits of consistency and books the first recurring appointment.",
      },
      {
        title: "Cancellation Backfill System",
        description:
          "When a client cancels same-day, the system immediately contacts waitlisted clients offering the open slot. Gaps get filled within hours instead of staying empty.",
      },
    ],
    useCases: [
      {
        title: "The Cleaning Company Out on Jobs All Day",
        description:
          "A 5-person cleaning company has no office. All 5 are cleaning homes 8 hours per day. The AI answers 15 calls per day, booking 6 new cleanings per week. At $200 average clean and 40 percent converting to recurring, that is $4,800 per month in recurring revenue from one week of new signups.",
      },
      {
        title: "The Move-Out Season Rush",
        description:
          "June and July bring a flood of move-out cleaning requests. Call volume triples. The AI handles the surge, booking 25 additional move-out cleans per month at $350 average. That is $8,750 in move-out season revenue captured.",
      },
      {
        title: "The Company Filling Cancellation Gaps",
        description:
          "A cleaning company averages 8 same-day cancellations per month. The backfill system fills 6 of those slots from the waitlist. At $175 per cleaning, that is $1,050 per month in recovered revenue that previously disappeared.",
      },
    ],
    faq: [
      {
        question: "Can the AI quote cleaning prices?",
        answer:
          "Yes. We configure pricing based on your rates — by square footage, number of bedrooms and bathrooms, or flat rate for standard services. The AI provides accurate quotes for most common cleaning types.",
      },
      {
        question: "Does it handle both residential and commercial cleaning?",
        answer:
          "Yes. The AI differentiates between home cleaning and office/commercial cleaning inquiries, routing each to the appropriate service and pricing structure.",
      },
      {
        question: "Can it manage recurring schedule changes?",
        answer:
          "The AI handles rescheduling, skipping a week, and adding services to existing recurring appointments. Clients can text to make changes without calling during business hours.",
      },
      {
        question: "How does it handle special requests — pets, allergies, green products?",
        answer:
          "We configure the AI to ask about special needs — pets in the home, allergies, product preferences. These notes are attached to the booking so your team arrives prepared.",
      },
    ],
    reviewIndices: [],
  },

  // ─── CONSTRUCTION SUB-INDUSTRIES ──────────────────────────────────────────────

  "construction/general-contractors": {
    slug: "general-contractors",
    parentSlug: "construction",
    name: "General Contractors",
    title: "AI Front Desk for General Contractors",
    metaDescription:
      "Stop losing GC jobs to missed calls from the job site. AI Peak Biz answers every call, captures project leads, and follows up on estimates automatically.",
    heroHeadline:
      "Envision a contracting business where every project inquiry gets answered — even from the job site.",
    heroSubhead:
      "You are managing a crew on a $200,000 build. Your phone rings. A homeowner wants a $50,000 addition. You cannot step away to take the call. They hire the GC who answered. AI Peak Biz makes sure you never lose a big project to a missed call.",
    problems: [
      {
        title: "On-Site All Day, Missing High-Value Leads",
        description:
          "General contractors spend 8 to 10 hours per day on job sites managing subcontractors, inspections, and builds. Calls from potential clients — kitchen remodels, additions, new builds — go to voicemail. A single GC project averages $25,000 to $150,000. Missing one call could cost you a career-defining job.",
        cost: "Typical loss: $20,000 to $75,000 per month in missed project inquiries",
      },
      {
        title: "Bids Delivered But Not Followed Up",
        description:
          "You spend 4 hours putting together a detailed bid for a $60,000 project. You deliver it. Then you are back on a job site and do not follow up for a week. The homeowner signed with the contractor who called on day 3. Without follow-up automation, you lose 30 to 40 percent of bids.",
        cost: "Typical loss: $30,000 to $100,000 per quarter in lost bids",
      },
      {
        title: "Subcontractor and Vendor Calls Mixed With Client Calls",
        description:
          "Your phone rings 30 times a day — subs, inspectors, suppliers, and potential clients all on the same line. You cannot tell which call is a $80,000 lead and which is a tile supplier confirming delivery. Important leads get lost in the noise.",
        cost: "Typical loss: $10,000 to $30,000 per month in leads buried by call volume",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for General Contractors",
        description:
          "Your AI answers every client call professionally. It collects project details — scope, timeline, budget range — and books estimate appointments. Sub and vendor calls are routed separately. Client leads never get lost in the shuffle.",
      },
      {
        title: "Bid Follow-Up Automation",
        description:
          "After you deliver a bid, the system follows up at 3, 7, and 14 days. It answers common questions, reinforces your qualifications, and keeps you top of mind. Your close rate on bids increases 25 to 35 percent.",
      },
      {
        title: "Project Pipeline CRM",
        description:
          "Every lead, estimate, and bid is tracked from first call to signed contract. You see exactly where every opportunity stands. Nothing falls through the cracks between job site days.",
      },
    ],
    useCases: [
      {
        title: "The GC Missing a $100K Addition",
        description:
          "A homeowner wants a 2-story addition. They call 3 contractors on a Tuesday afternoon. You are managing a framing crew and miss the call. Your AI answers, collects project details, and books an estimate for Thursday. You show up, present well, and land the $120,000 job.",
      },
      {
        title: "The Contractor Closing More Bids",
        description:
          "A GC delivers 8 bids per month averaging $45,000 each. He closes 3. After implementing automated follow-up, he closes 5. Two additional projects at $45,000 is $90,000 per month in revenue from better follow-through.",
      },
      {
        title: "The Growing GC Separating Client Calls",
        description:
          "A busy GC gets 40 calls per day — 10 are potential clients, 30 are subs and suppliers. The AI answers client calls professionally and routes sub/vendor calls to voicemail for batch callbacks. Client leads get immediate attention instead of getting lost.",
      },
    ],
    faq: [
      {
        question: "Can the AI handle complex project inquiries?",
        answer:
          "The AI collects key details — project type, scope, timeline, budget range — and books an in-person estimate. It does not try to quote complex projects over the phone. It captures the lead and gets you face-to-face with the client.",
      },
      {
        question: "Does it integrate with construction management software?",
        answer:
          "We integrate with common platforms including Buildertrend, CoConstruct, and Procore. Leads and appointments flow into your existing project management workflow.",
      },
      {
        question: "Can it tell the difference between a client call and a subcontractor call?",
        answer:
          "Yes. The AI identifies whether the caller is a potential client, existing client, subcontractor, or vendor and routes accordingly. New client leads get priority treatment.",
      },
      {
        question: "How does it handle referrals from architects or designers?",
        answer:
          "The AI recognizes referral calls, captures the referring party's information, and flags these leads as high-priority. Referral leads typically close at a higher rate and deserve immediate attention.",
      },
    ],
    reviewIndices: [],
  },

  "construction/remodeling": {
    slug: "remodeling",
    parentSlug: "construction",
    name: "Remodeling",
    title: "AI Front Desk for Remodeling Companies",
    metaDescription:
      "Stop losing remodeling projects to missed calls. AI Peak Biz answers every inquiry, books consultations, and follows up on proposals automatically.",
    heroHeadline:
      "Envision a remodeling business where every kitchen and bath inquiry becomes a booked consultation.",
    heroSubhead:
      "A homeowner has been saving for 2 years for their dream kitchen remodel. They finally call. You are tearing out a bathroom on another job. Voicemail. They call the remodeler who picks up. AI Peak Biz makes sure their dream project becomes your next build.",
    problems: [
      {
        title: "High-Value Calls During Active Demolition",
        description:
          "Remodelers are hands-on during demo and construction. A $40,000 kitchen remodel call comes in at 10 AM while you are pulling cabinets. By the time you call back at 6 PM, the homeowner already has two consultations scheduled with competitors.",
        cost: "Typical loss: $15,000 to $50,000 per month in missed remodel inquiries",
      },
      {
        title: "Long Decision Cycles Without Nurturing",
        description:
          "Homeowners think about remodeling for 3 to 6 months before committing. They call early in their research phase. Without a follow-up system that nurtures them over weeks, they forget about you when they are finally ready to sign.",
        cost: "Typical loss: $20,000 to $60,000 per quarter in leads gone cold",
      },
      {
        title: "Design Meetings Booked But Homeowners No-Show",
        description:
          "You block 2 hours for an in-home design consultation. The homeowner forgets or gets cold feet. No-show rates for remodeling consultations run 15 to 25 percent. That is 2 hours of your time plus the gas and prep gone.",
        cost: "Typical loss: $3,000 to $8,000 per month in wasted consultation time",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Remodeling",
        description:
          "Your AI answers every call and captures project vision — kitchen, bath, basement, whole-home. It qualifies budget range and timeline, then books in-home consultations. High-value leads never hit voicemail.",
      },
      {
        title: "Long-Cycle Lead Nurturing",
        description:
          "For homeowners in research mode, the system stays in touch — sharing design inspiration, project timelines, and financing options over weeks. When they are ready to commit, you are the remodeler they remember.",
      },
      {
        title: "Consultation Confirmation System",
        description:
          "The system confirms consultations 48 hours, 24 hours, and 2 hours before. It provides directions, parking info, and what to prepare. No-show rates drop from 20 percent to under 5 percent.",
      },
    ],
    useCases: [
      {
        title: "The Kitchen Remodel Lead Captured Mid-Demo",
        description:
          "You are mid-demolition on a bathroom remodel. A homeowner calls about a $55,000 kitchen renovation. Your AI answers, captures their vision and timeline, and books a Saturday consultation. You win the project because you responded professionally while your competitors were also on job sites.",
      },
      {
        title: "The Remodeler Nurturing Summer Leads for Fall",
        description:
          "30 homeowners call in May asking about remodels. 10 are ready now. 20 are researching. The nurturing system stays in touch with those 20 over summer. By September, 8 of them sign. At $35,000 average project, that is $280,000 in fall revenue from leads you would have lost.",
      },
      {
        title: "The Company Eliminating No-Shows",
        description:
          "A remodeler schedules 16 consultations per month. 4 no-show. After implementing the confirmation system, no-shows drop to 1 per month. 3 saved consultations convert to $105,000 in signed contracts over the quarter.",
      },
    ],
    faq: [
      {
        question: "Can the AI discuss design options with homeowners?",
        answer:
          "The AI captures design preferences and wish lists but does not provide design advice. It books the in-home consultation where your design expertise shines. It asks about style preferences, must-haves, and budget to prepare you for the meeting.",
      },
      {
        question: "How does it handle budget-sensitive conversations?",
        answer:
          "The AI gently qualifies budget range — asking about investment level rather than demanding a number. This helps you prioritize leads and prepare appropriate design options before the consultation.",
      },
      {
        question: "Does it work with design/build software?",
        answer:
          "We integrate with platforms used in remodeling including Buildertrend, Houzz Pro, and CoConstruct. Leads and appointments flow into your project pipeline.",
      },
      {
        question: "Can it handle both big remodels and small updates?",
        answer:
          "Yes. The AI categorizes projects by scope — full renovations, single-room updates, or small repairs — and routes each to the appropriate estimate process and timeline.",
      },
    ],
    reviewIndices: [],
  },

  "construction/solar": {
    slug: "solar",
    parentSlug: "construction",
    name: "Solar",
    title: "AI Front Desk for Solar Installation Companies",
    metaDescription:
      "Stop losing solar leads to slow response. AI Peak Biz answers every inquiry instantly, qualifies homeowners, and books consultations before competitors.",
    heroHeadline:
      "Envision a solar company where every inquiry becomes a booked site assessment.",
    heroSubhead:
      "A homeowner gets their $400 electric bill and finally decides to go solar. They submit inquiries to 5 companies. The first to call back wins. Your sales team calls back in 3 hours. Three competitors called in 5 minutes. AI Peak Biz makes you the first to respond — every time.",
    problems: [
      {
        title: "Speed to Lead Determines Everything",
        description:
          "In solar sales, the first company to respond to an inquiry wins 60 to 70 percent of the time. Homeowners submit forms to multiple companies simultaneously. If your response time is 2 hours while competitors respond in 5 minutes, you are losing before the conversation starts. A solar install averages $20,000 to $40,000.",
        cost: "Typical loss: $30,000 to $80,000 per month in leads won by faster competitors",
      },
      {
        title: "High Lead Volume, Low Qualification",
        description:
          "Solar companies buy leads from multiple sources. 40 to 60 percent are unqualified — renters, shaded roofs, credit issues, HOA restrictions. Your sales team wastes hours calling unqualified leads while qualified homeowners wait.",
        cost: "Typical loss: $10,000 to $25,000 per month in sales team time wasted on bad leads",
      },
      {
        title: "Long Sales Cycles Without Follow-Up",
        description:
          "Solar is a considered purchase. Homeowners take 2 to 8 weeks to decide. Without automated follow-up — answering questions, addressing objections, reinforcing ROI — they go dark or sign with a competitor who stayed in touch.",
        cost: "Typical loss: $20,000 to $60,000 per month in deals lost to poor nurturing",
      },
    ],
    solutions: [
      {
        title: "Instant AI Response",
        description:
          "When a lead comes in from any source — web form, phone call, social media — the AI responds within 60 seconds. It confirms interest, qualifies the homeowner, and books the site assessment. You are always first.",
      },
      {
        title: "AI Lead Qualification",
        description:
          "The AI asks qualifying questions — homeowner vs. renter, roof age, shade, electric bill amount, credit comfort level. Only qualified leads reach your sales team. Unqualified leads get polite disqualification.",
      },
      {
        title: "Solar Sales Nurturing Sequence",
        description:
          "After the initial conversation, the system follows up with ROI calculators, incentive information, financing options, and neighbor testimonials. It addresses common objections automatically over 2 to 6 weeks.",
      },
    ],
    useCases: [
      {
        title: "The Solar Company Winning Speed to Lead",
        description:
          "A solar installer gets 200 leads per month. Previously, average response time was 2.5 hours. With AI instant response, it drops to 45 seconds. Close rate increases from 8 percent to 14 percent. At $25,000 average install, that is 12 additional deals — $300,000 per month in revenue.",
      },
      {
        title: "The Company Qualifying Out Bad Leads",
        description:
          "A solar company's sales team spends 60 percent of their time on unqualified leads. The AI pre-qualifies all inbound, passing only homeowners with suitable roofs, reasonable electric bills, and ownership confirmed. Sales team productivity doubles. Same team, twice the closes.",
      },
      {
        title: "The Installer Nurturing Long-Cycle Deals",
        description:
          "50 homeowners per month express interest but are not ready to commit. The nurturing sequence stays in touch. After 6 weeks, 15 of those 50 re-engage and book site assessments. At $30,000 average install and 30 percent close rate, that is $135,000 in revenue from leads that would have gone cold.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain solar incentives and tax credits?",
        answer:
          "Yes. We configure the AI with current federal and state incentives, tax credit information, and financing options for your market. It provides accurate ROI estimates based on the homeowner's electric bill.",
      },
      {
        question: "Does it integrate with solar CRMs like Enerflo or Solar Rabbit?",
        answer:
          "We integrate with common solar CRMs and proposal tools. Qualified leads flow directly into your pipeline with full qualification details attached.",
      },
      {
        question: "Can it handle both residential and commercial solar?",
        answer:
          "Yes. The AI identifies residential vs. commercial inquiries and routes them to the appropriate sales process. Commercial projects get flagged as high-priority with different qualification criteria.",
      },
      {
        question: "How does it handle objections about cost?",
        answer:
          "The AI addresses cost concerns by reframing solar as a monthly payment that is lower than the current electric bill. It shares financing options and ROI timelines. Stubborn objections are routed to your sales team.",
      },
    ],
    reviewIndices: [],
  },

  "construction/outdoor-living": {
    slug: "outdoor-living",
    parentSlug: "construction",
    name: "Outdoor Living",
    title: "AI Front Desk for Outdoor Living Builders",
    metaDescription:
      "Stop losing outdoor living projects to missed calls. AI Peak Biz answers every inquiry about patios, pergolas, and outdoor kitchens — books consultations fast.",
    heroHeadline:
      "Envision an outdoor living business where every dream backyard project starts with your call being answered.",
    heroSubhead:
      "A homeowner just watched a backyard makeover show. They are ready to build a $30,000 outdoor kitchen. They call three builders. Two are on job sites. You answer. You get the consultation. AI Peak Biz makes sure inspiration becomes your next project.",
    problems: [
      {
        title: "Inspiration-Driven Calls at Random Times",
        description:
          "Outdoor living leads are impulse-driven — triggered by TV shows, Pinterest boards, neighbor's new patio, or a weekend barbecue in a boring backyard. These calls come at odd hours and on weekends. If you miss the call, the inspiration fades and they do not call back.",
        cost: "Typical loss: $10,000 to $35,000 per month in lost impulse inquiries",
      },
      {
        title: "Long Design Process Loses Clients",
        description:
          "Outdoor living projects involve design consultations, material selections, and permitting. The process takes 4 to 8 weeks from first call to signed contract. Without consistent follow-up, homeowners lose momentum or find a builder who communicates better.",
        cost: "Typical loss: $15,000 to $40,000 per quarter in stalled projects",
      },
      {
        title: "Seasonal Demand Creates Feast or Famine",
        description:
          "Spring and early summer are when homeowners want to build. If you do not capture and book leads in February and March, your spring schedule has gaps. By the time May leads call, you are booked into September.",
        cost: "Typical loss: $20,000 to $50,000 in seasonal scheduling gaps",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Outdoor Living",
        description:
          "Your AI answers every call — evenings, weekends, anytime inspiration strikes. It captures the homeowner's vision, project scope, and timeline, then books the design consultation before their excitement fades.",
      },
      {
        title: "Design Process Nurturing",
        description:
          "From first call through signed contract, the system keeps homeowners engaged — sending material options, design inspiration, project timelines, and next-step reminders. Projects stay on track instead of stalling.",
      },
      {
        title: "Pre-Season Outreach",
        description:
          "In January and February, the system contacts past inquiries and website visitors about spring build schedules. It creates urgency around booking early for spring completion.",
      },
    ],
    useCases: [
      {
        title: "The Sunday Night Inspiration Call",
        description:
          "A couple watches a backyard renovation show Sunday at 9 PM. They call your company Monday at 7 AM before work. Your AI answers, captures their vision for a $25,000 pergola and outdoor kitchen, and books a design consultation for Wednesday. Without AI, that call goes to voicemail and they forget by Wednesday.",
      },
      {
        title: "The Builder Booking Spring From February",
        description:
          "In February, the system contacts 150 past inquiries who did not move forward. 25 respond with renewed interest. You book 10 spring projects at $20,000 average — $200,000 in revenue locked in before competition even starts advertising.",
      },
      {
        title: "The Company Keeping Projects Moving",
        description:
          "A builder has 12 signed consultations in various design stages. 4 have gone quiet. The nurturing system re-engages those 4 with material selection reminders and timeline updates. 3 resume the process and sign contracts worth $75,000 combined.",
      },
    ],
    faq: [
      {
        question: "Can the AI discuss different outdoor living options?",
        answer:
          "The AI can explain your services — patios, pergolas, outdoor kitchens, fire features, pools, etc. — and capture the homeowner's wish list. Detailed design discussions happen during the in-person consultation.",
      },
      {
        question: "How does it handle budget conversations for luxury projects?",
        answer:
          "The AI qualifies budget range by asking about investment level and priorities. It sets expectations about typical project costs without scaring off clients who have not researched pricing yet.",
      },
      {
        question: "Does it work with design software or project management tools?",
        answer:
          "We integrate with platforms used in outdoor living construction including Buildertrend, CoConstruct, and general CRM systems. Leads flow into your existing pipeline.",
      },
      {
        question: "Can it handle HOA-related questions?",
        answer:
          "The AI can explain that you handle HOA approval processes and permitting as part of your service. It notes any HOA concerns from the homeowner so you can address them during the consultation.",
      },
    ],
    reviewIndices: [],
  },

  "construction/decking": {
    slug: "decking",
    parentSlug: "construction",
    name: "Decking",
    title: "AI Front Desk for Deck Builders",
    metaDescription:
      "Stop losing deck projects to missed calls. AI Peak Biz answers every inquiry, books estimates for new builds and repairs, and follows up on quotes.",
    heroHeadline:
      "Envision a deck building business where every call becomes a booked estimate.",
    heroSubhead:
      "A homeowner's deck is rotting. They want a new composite deck before summer. They call three builders. Two are on jobs. You answer, book the estimate, and present first. That is a $15,000 project won because you picked up. AI Peak Biz makes this happen every time.",
    problems: [
      {
        title: "Spring Rush Overwhelms Small Teams",
        description:
          "Deck builders are slammed March through June. Every homeowner wants a new deck for summer. Call volume triples. Your 2 to 3 person team cannot build decks and answer phones simultaneously. Calls go to voicemail and those leads go to the next builder.",
        cost: "Typical loss: $10,000 to $30,000 per month during spring rush",
      },
      {
        title: "Material Questions Eat Phone Time",
        description:
          "Homeowners call with questions about composite vs. wood, Trex vs. TimberTech, pricing per square foot. Your team spends 20 minutes per call educating rather than selling. Meanwhile, new leads cannot get through.",
        cost: "Typical loss: $3,000 to $8,000 per month in leads lost to busy lines",
      },
      {
        title: "Quotes Delivered But Not Closed",
        description:
          "You visit a property, measure the space, design the deck, and present a $12,000 to $25,000 proposal. Then you are back building and forget to follow up. The homeowner gets a cheaper quote from someone else on day 4.",
        cost: "Typical loss: $8,000 to $25,000 per month in unworked quotes",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Deck Builders",
        description:
          "Your AI answers every call and captures project details — deck size, material preference, timeline, and budget. It books on-site estimates and handles basic material questions so your team focuses on building.",
      },
      {
        title: "Material Education Automation",
        description:
          "After initial contact, the system texts homeowners comparison guides for composite vs. wood, material warranties, and maintenance requirements. Educated buyers make faster decisions and choose premium options.",
      },
      {
        title: "Quote Follow-Up System",
        description:
          "After presenting a quote, the system follows up at 3, 7, and 14 days. It addresses common hesitations, reminds them about spring scheduling, and offers to answer questions. Close rates improve 25 to 35 percent.",
      },
    ],
    useCases: [
      {
        title: "The Deck Builder Booked Through Spring Rush",
        description:
          "A deck company gets 40 calls per week in April. The crew answers 15. The AI catches the other 25, booking 12 estimates. At $15,000 average project and 50 percent close rate, that is $90,000 in spring pipeline captured from one week of overflow calls.",
      },
      {
        title: "The Builder Closing More Quotes",
        description:
          "A deck builder delivers 10 quotes per month averaging $18,000. He closes 4. After implementing automated follow-up, he closes 6. Two additional decks per month is $36,000 in revenue from follow-up alone.",
      },
      {
        title: "The Company Upselling Composite",
        description:
          "Homeowners call asking about wood decks. The AI and education system explain composite benefits — no maintenance, 25-year warranty, better long-term value. 40 percent of callers upgrade from wood ($12,000) to composite ($20,000). Average project value jumps $3,200.",
      },
    ],
    faq: [
      {
        question: "Can the AI explain material options to callers?",
        answer:
          "Yes. The AI provides overview comparisons of wood vs. composite, explains warranty differences, and discusses maintenance requirements. For specific brand comparisons, it sends follow-up materials via text.",
      },
      {
        question: "Does it handle permit questions?",
        answer:
          "The AI explains that you handle all permitting as part of the project and that permit requirements vary by municipality. It notes the caller's location so you can address specific permit needs during the estimate.",
      },
      {
        question: "Can it estimate pricing over the phone?",
        answer:
          "We configure rough per-square-foot pricing ranges for standard deck types. The AI gives ballpark ranges and explains that a final quote requires an on-site measurement and design discussion.",
      },
      {
        question: "How does it handle deck repair vs. new build inquiries?",
        answer:
          "The AI asks whether the caller needs repair, board replacement, or a complete new deck. Each is routed to the appropriate estimate type and timeline.",
      },
    ],
    reviewIndices: [],
  },

  "construction/fencing": {
    slug: "fencing",
    parentSlug: "construction",
    name: "Fencing",
    title: "AI Front Desk for Fencing Companies",
    metaDescription:
      "Stop losing fence jobs to missed calls. AI Peak Biz answers every call, books estimates for wood, vinyl, and chain link, and follows up on quotes.",
    heroHeadline:
      "Envision a fencing business where every estimate request is captured — even mid-install.",
    heroSubhead:
      "You are setting posts in concrete. Your phone rings 4 times during a 3-hour install. Those were estimate requests for $3,000 to $8,000 fence jobs. Two of them hired whoever called back first. AI Peak Biz makes sure every call is answered while you build.",
    problems: [
      {
        title: "Cannot Answer While Setting Posts",
        description:
          "Fence installation is physical, continuous work. You cannot stop mid-pour to answer a phone call. A typical fencing crew misses 50 to 70 percent of daytime calls during installations. Each missed call is a potential $2,500 to $10,000 project.",
        cost: "Typical loss: $6,000 to $20,000 per month in missed estimate requests",
      },
      {
        title: "Neighbor Referral Chains Get Broken",
        description:
          "When you install a fence, 2 to 3 neighbors often call wanting the same thing. If you miss those neighbor calls, the chain breaks. Each neighbor is another $3,000 to $6,000 job you could win without any marketing cost.",
        cost: "Typical loss: $4,000 to $12,000 per month in lost neighbor referrals",
      },
      {
        title: "Seasonal Surge in Spring Overwhelms You",
        description:
          "Spring brings a flood of fencing inquiries — new puppies, property lines, privacy needs. Call volume can triple in 4 weeks. Without phone overflow capacity, you lose the spring surge to competitors.",
        cost: "Typical loss: $10,000 to $30,000 during spring fence season",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Fencing",
        description:
          "Your AI answers every call while you are on the install. It collects project details — fence type, linear footage estimate, purpose (privacy, pets, property line) — and books the estimate appointment.",
      },
      {
        title: "Neighbor Referral Capture",
        description:
          "After completing a fence, the system sends the customer a referral message to share with neighbors. When neighbors call, the AI answers immediately and books estimates for the same street.",
      },
      {
        title: "Quote Follow-Up Automation",
        description:
          "After delivering an estimate, the system follows up at 2, 5, and 10 days. Fencing is competitive on price — staying top of mind and reinforcing value wins the close over cheaper competitors.",
      },
    ],
    useCases: [
      {
        title: "The Fencing Crew Capturing Install-Day Calls",
        description:
          "A 2-crew fencing company is installing all day. 8 calls come in across both crews' phones. The AI answers all 8, booking 5 estimates. At $4,500 average fence project, that is $22,500 in pipeline captured during one day of installs.",
      },
      {
        title: "The Neighbor Chain Captured",
        description:
          "You install a $5,000 privacy fence. The referral system reaches the customer, who shares with 3 neighbors. All 3 call. The AI books all 3 estimates. You close 2 at $4,800 each. That is $9,600 in revenue from one referral prompt.",
      },
      {
        title: "The Company Winning Spring Season",
        description:
          "In March, call volume spikes from 10 to 30 per day. The AI handles all overflow, booking 15 additional estimates per week during the 6-week spring surge. At $4,000 average and 50 percent close rate, that is $180,000 in spring revenue captured.",
      },
    ],
    faq: [
      {
        question: "Can the AI quote per-linear-foot pricing?",
        answer:
          "We configure the AI with your pricing ranges for wood, vinyl, chain link, and ornamental iron by the linear foot. It provides ballpark estimates and explains that a final quote requires property measurement.",
      },
      {
        question: "Does it handle both residential and commercial fencing?",
        answer:
          "Yes. The AI identifies the project type and routes commercial fencing inquiries — schools, HOAs, construction sites — to your commercial process with appropriate pricing and timeline.",
      },
      {
        question: "Can it answer questions about permits and property lines?",
        answer:
          "The AI explains that you handle permitting and can discuss property line surveys during the estimate. It notes any known boundary concerns so you come prepared.",
      },
      {
        question: "How does it handle HOA approval questions?",
        answer:
          "The AI can explain that many HOAs require fence approval and that you work with homeowners to submit compliant designs. It asks if there is an HOA and notes requirements for the estimate visit.",
      },
    ],
    reviewIndices: [],
  },

  "construction/flooring": {
    slug: "flooring",
    parentSlug: "construction",
    name: "Flooring",
    title: "AI Front Desk for Flooring Companies",
    metaDescription:
      "Stop losing flooring jobs to missed calls. AI Peak Biz answers every call, books estimates for hardwood, tile, and LVP, and follows up on quotes.",
    heroHeadline:
      "Envision a flooring business where every call becomes a booked in-home estimate.",
    heroSubhead:
      "A homeowner finally decides to replace their 20-year-old carpet. They call three flooring companies. Two are on installations. You answer, book the in-home estimate for tomorrow, and present material options. That is a $6,000 to $15,000 job won by answering the phone.",
    problems: [
      {
        title: "Install Days Mean Zero Phone Coverage",
        description:
          "Flooring installation requires focus — laying tile, sanding hardwood, cutting LVP. Your crew is on their hands and knees all day. There is nobody to answer calls. A flooring company doing 3 installs per week misses 15 to 25 calls during those days.",
        cost: "Typical loss: $5,000 to $18,000 per month in calls missed during installs",
      },
      {
        title: "Material Overwhelm Paralyzes Buyers",
        description:
          "Homeowners are overwhelmed by choices — hardwood, engineered, LVP, tile, carpet. They call with questions, get voicemail, and go to Home Depot instead. Without quick education and guidance, they default to big-box stores.",
        cost: "Typical loss: $4,000 to $12,000 per month in buyers lost to big-box stores",
      },
      {
        title: "Estimates Delivered But Decisions Delayed",
        description:
          "Flooring is a visual, tactile decision. Homeowners want to see samples, compare options, and think. Without follow-up, they overthink for 3 weeks and eventually just live with the old floor or go with whoever reminds them.",
        cost: "Typical loss: $6,000 to $20,000 per month in stalled estimates",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Flooring",
        description:
          "Your AI answers every call and captures project details — rooms, square footage estimate, material preference, budget, and timeline. It books in-home estimates where your expertise shines with physical samples.",
      },
      {
        title: "Material Education Sequence",
        description:
          "After initial contact, the system sends material comparison guides — LVP vs. hardwood, porcelain vs. ceramic, waterproof options for kitchens. Educated buyers make faster decisions and choose higher-margin options.",
      },
      {
        title: "Estimate Follow-Up and Decision Support",
        description:
          "After presenting options, the system follows up with room visualizers, maintenance comparisons, and warranty details. It nudges the decision forward without being pushy.",
      },
    ],
    useCases: [
      {
        title: "The Flooring Company Missing Install-Day Calls",
        description:
          "A 3-person flooring company is on installs 4 days per week. They miss 20 calls during install days. The AI answers all 20, booking 8 in-home estimates. At $8,000 average project and 50 percent close rate, that is $32,000 per month in recovered revenue.",
      },
      {
        title: "The Company Competing With Home Depot",
        description:
          "A flooring installer loses leads to big-box stores because homeowners cannot reach him. With instant AI response and material education, homeowners understand why professional installation with premium materials is worth the investment. Average project value increases 30 percent.",
      },
      {
        title: "The Installer Closing Stalled Quotes",
        description:
          "A flooring company delivers 15 estimates per month. 6 go silent for weeks. The follow-up system re-engages 4 of those 6 over two weeks. 3 sign at $7,500 average. That is $22,500 per month in revenue from stalled quotes brought back to life.",
      },
    ],
    faq: [
      {
        question: "Can the AI answer questions about different flooring types?",
        answer:
          "Yes. The AI provides overview comparisons of hardwood, LVP, tile, and carpet — including durability, maintenance, and price ranges. For specific product recommendations, it books the in-home consultation with samples.",
      },
      {
        question: "Does it handle both residential and commercial flooring?",
        answer:
          "Yes. The AI identifies whether the caller needs residential or commercial flooring and routes accordingly. Commercial projects — offices, retail spaces, restaurants — go to your commercial estimating process.",
      },
      {
        question: "Can it estimate cost per square foot?",
        answer:
          "We configure the AI with your pricing ranges by material type and square footage. It gives ballpark ranges and explains that a final quote requires in-home measurement and material selection.",
      },
      {
        question: "How does it handle subfloor concerns?",
        answer:
          "The AI asks about the current flooring and any known subfloor issues — creaks, unevenness, moisture. These notes prepare your estimator for potential subfloor work during the in-home visit.",
      },
    ],
    reviewIndices: [],
  },

  "construction/painting": {
    slug: "painting",
    parentSlug: "construction",
    name: "Painting",
    title: "AI Front Desk for Painting Companies",
    metaDescription:
      "Stop losing painting jobs to missed calls. AI Peak Biz answers every call, books estimates for interior and exterior, and follows up on quotes.",
    heroHeadline:
      "Envision a painting business where every estimate request is captured — brush still in hand.",
    heroSubhead:
      "You are up a ladder cutting in a ceiling. Your phone rings. A homeowner wants an estimate for a $4,000 exterior paint job. Voicemail. They call the next painter. By the time you call back, they already have two estimates scheduled. AI Peak Biz keeps your pipeline full.",
    problems: [
      {
        title: "Cannot Answer While Painting",
        description:
          "Painters work with their hands, often on ladders or in rooms with drop cloths everywhere. You physically cannot answer the phone. A painting company with 2 to 3 crews on jobs misses 40 to 60 percent of daytime calls. Each call is a $1,500 to $8,000 interior or exterior job.",
        cost: "Typical loss: $5,000 to $15,000 per month in calls missed while painting",
      },
      {
        title: "Low Barrier Means High Competition",
        description:
          "Painting has low entry barriers. Homeowners get 3 to 5 estimates because they assume all painters are the same. Speed to respond and consistent follow-up differentiate you. If you call back in 4 hours, 3 competitors already responded.",
        cost: "Typical loss: $4,000 to $12,000 per month in leads won by faster competitors",
      },
      {
        title: "Repeat Business Not Captured",
        description:
          "A homeowner who painted their interior in 2022 needs exterior work in 2025. Without a system reminding them you exist, they start fresh on Google. You already earned their trust but you are not staying top of mind.",
        cost: "Typical loss: $3,000 to $8,000 per quarter in lost repeat customers",
      },
    ],
    solutions: [
      {
        title: "AI Voice Assistant for Painters",
        description:
          "Your AI answers every call while your crews paint. It collects job details — interior/exterior, number of rooms, home size, timeline — and books the estimate. Professional phone presence without an office person.",
      },
      {
        title: "Speed-to-Estimate Advantage",
        description:
          "The AI responds to every inquiry within 60 seconds and books the estimate within 24 hours. You show up first, present first, and win the job before competitors even call back.",
      },
      {
        title: "Past Customer Reactivation",
        description:
          "The system contacts past customers at 2 to 3 year intervals — when they are statistically due for their next paint job. It offers seasonal specials and books estimates before they start shopping competitors.",
      },
    ],
    useCases: [
      {
        title: "The Painting Crew Missing Daily Calls",
        description:
          "A 3-crew painting company misses 12 calls per day during jobs. The AI answers all 12, booking 5 estimates daily. At $3,500 average paint job and 40 percent close rate, that is $7,000 per day in closed revenue from previously missed calls.",
      },
      {
        title: "The Painter Winning on Speed",
        description:
          "A homeowner posts on Nextdoor asking for painter recommendations. 5 companies are tagged. Your AI calls back within 60 seconds of receiving the lead notification. You book the estimate before any competitor responds. That speed advantage wins you 3 extra jobs per month at $4,000 average.",
      },
      {
        title: "The Company Reactivating Past Clients",
        description:
          "A painting company has 400 past customers over 5 years. The reactivation system contacts customers at the 3-year mark. 60 respond with interest over 6 months. 25 book paint jobs at $3,800 average. That is $95,000 in revenue from existing relationships with zero ad spend.",
      },
    ],
    faq: [
      {
        question: "Can the AI provide rough pricing for paint jobs?",
        answer:
          "We configure the AI with your pricing ranges — per room for interior, per square foot for exterior. It gives ballpark ranges and explains that a final quote requires an in-person walkthrough.",
      },
      {
        question: "Does it handle both residential and commercial painting?",
        answer:
          "Yes. The AI identifies the project type and routes residential and commercial inquiries appropriately. Commercial jobs — offices, apartment complexes, retail — go to your commercial estimating process.",
      },
      {
        question: "Can it answer questions about paint types and finishes?",
        answer:
          "The AI can discuss common options — flat, eggshell, satin, semi-gloss — and explain which works best for different areas. For specific color consultations, it books the in-person estimate.",
      },
      {
        question: "How does it handle exterior vs. interior prioritization?",
        answer:
          "The AI identifies whether the job is interior, exterior, or both. It notes weather-sensitive exterior work for seasonal scheduling and books interior work year-round.",
      },
    ],
    reviewIndices: [],
  },
  // Merge Professional Services, Legal, Financial, Real Estate
  ...subIndustryContent2,
  // Merge Automotive, Fitness, Beauty, Education, Hospitality, Trades
  ...subIndustryContent3,
};

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
