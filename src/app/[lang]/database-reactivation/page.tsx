import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Database Reactivation for Service Businesses | AI Peak Biz",
  description:
    "AI Peak Biz reactivates your dormant customer database with automated outreach. Win back past customers who already know and trust your business.",
  alternates: { canonical: "https://www.aipeakbiz.com/database-reactivation" },
};

export default function DatabaseReactivationPage() {
  return (
    <ServicePageContent
      title="Database Reactivation"
      headline="Your past customers are your cheapest source of new revenue."
      description="Most service businesses are sitting on a goldmine of past customers who just need a nudge. We build automated reactivation campaigns that reach out to dormant contacts with the right message at the right time, bringing them back without you spending a dollar on ads."
      features={[
        { title: "Automated Outreach", desc: "Customers who have not visited in 30, 60, or 90 days receive personalized check-in messages. Many just need a reminder that you exist." },
        { title: "Multi-Channel Campaigns", desc: "Reach past customers through text, email, or both. The system follows up multiple times so one missed message does not mean a lost customer." },
        { title: "Personalized Messaging", desc: "Messages reference the customer by name and can mention their last service. It feels personal, not like a mass blast." },
        { title: "Special Offers and Incentives", desc: "We help you craft the right offer to bring people back, whether that is a discount, a free consultation, or just a friendly check-in." },
        { title: "Booking Built In", desc: "Every message includes a direct link to schedule. Customers go from 'I should call them' to 'I just booked' in one tap." },
        { title: "ROI You Can Measure", desc: "Track exactly how many past customers rebooked, how much revenue was recovered, and your cost per reactivation. No guessing." },
      ]}
      stats={[
        { value: "5x", label: "Cheaper than acquiring new customers" },
        { value: "15-25%", label: "Typical reactivation rate" },
        { value: "$0", label: "Ad spend required" },
      ]}
    />
  );
}
