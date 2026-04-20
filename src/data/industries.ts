import {
  Stethoscope, Wrench, HardHat, Briefcase, Scale, DollarSign,
  Home, Car, Dumbbell, Scissors, GraduationCap, UtensilsCrossed, Lock,
} from "lucide-react";

export interface Industry {
  name: string;
  slug: string;
  icon: typeof Stethoscope;
  subIndustries: string[];
}

export const industries: Industry[] = [
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: Stethoscope,
    subIndustries: ["Chiropractic", "Dental", "Medical Clinics", "Physical Therapy", "Optometry", "Veterinary", "Mental Health", "Med Spa", "Dermatology"],
  },
  {
    name: "Home Services",
    slug: "home-services",
    icon: Wrench,
    subIndustries: ["Plumbing", "Electrical", "HVAC", "Roofing", "Concrete", "Landscaping", "Pest Control", "Pool Service", "Garage Door", "Cleaning Services"],
  },
  {
    name: "Construction",
    slug: "construction",
    icon: HardHat,
    subIndustries: ["General Contractors", "Remodeling", "Solar", "Outdoor Living", "Decking", "Fencing", "Flooring", "Painting"],
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    icon: Briefcase,
    subIndustries: ["Accounting", "Bookkeeping", "Grant Writers", "Consultants", "Coaches", "Marketing Agencies"],
  },
  {
    name: "Legal",
    slug: "legal",
    icon: Scale,
    subIndustries: ["Personal Injury", "Family Law", "Estate Planning", "Criminal Defense", "Business Law", "Immigration"],
  },
  {
    name: "Financial",
    slug: "financial",
    icon: DollarSign,
    subIndustries: ["Financial Advisors", "Insurance Agents", "Mortgage Brokers", "Tax Preparers", "Investment Firms"],
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: Home,
    subIndustries: ["Realtors", "Property Management", "Real Estate Investors", "Title Companies"],
  },
  {
    name: "Automotive",
    slug: "automotive",
    icon: Car,
    subIndustries: ["Auto Repair", "Body Shops", "Detailing", "Tire Shops", "Dealerships"],
  },
  {
    name: "Fitness & Wellness",
    slug: "fitness-wellness",
    icon: Dumbbell,
    subIndustries: ["Gyms", "Personal Trainers", "Yoga Studios", "Nutritionists", "Massage Therapy"],
  },
  {
    name: "Beauty",
    slug: "beauty",
    icon: Scissors,
    subIndustries: ["Salons", "Barber Shops", "Nail Salons", "Lash Studios", "Tattoo Shops"],
  },
  {
    name: "Education",
    slug: "education",
    icon: GraduationCap,
    subIndustries: ["Tutoring", "Music Lessons", "Driving Schools", "Trade Schools"],
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    icon: UtensilsCrossed,
    subIndustries: ["Restaurants", "Cafes", "Catering", "Event Venues", "Hotels"],
  },
  {
    name: "Trades & Specialty",
    slug: "trades-specialty",
    icon: Lock,
    subIndustries: ["Locksmiths", "Movers", "Storage Facilities", "Security Companies"],
  },
];

export const BOOKING_URL = "https://link.aipeakbiz.com/widget/bookings/aipeakbiz-demo";
export const PHONE = "928-628-6080";
export const PHONE_TEL = "tel:9286286080";
export const EMAIL = "wylie@aipeakbiz.com";
