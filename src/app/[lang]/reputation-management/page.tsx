import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Reputation Management for Service Businesses",
  description:
    "AI Peak Biz builds automated reputation management systems. Get more 5-star Google reviews. Route negative feedback privately. Build trust that drives bookings.",
  alternates: { canonical: "https://www.aipeakbiz.com/reputation-management" },
};

export default function ReputationManagementPage() {
  return (
    <ServicePageContent
      title="Reputation Management"
      headline="More 5-star reviews. Every month. Without asking."
      description="Your happy customers leave without posting a review because nobody asks at the right time. Your AI reputation engine sends a review request after every visit. Happy customers are guided to Google. Concerns are routed to you privately. Your rating climbs every month."
      features={[
        { title: "Automated Review Requests", desc: "After every appointment or completed service, the system sends a text asking about their experience. No staff effort required." },
        { title: "Smart Routing", desc: "Positive responses are guided to leave a Google review with a direct link. Negative responses are sent privately to you so you can address them before they go public." },
        { title: "Consistent Growth", desc: "Most businesses add 15 to 30 new Google reviews per month. Your rating and review count climb steadily without any manual effort." },
        { title: "Competitive Advantage", desc: "A half-star difference in Google rating drives 15 to 20 percent of prospective customers to your competitor. Closing that gap means more inbound calls." },
        { title: "Review Monitoring", desc: "Track your Google reviews in one dashboard. See trends, respond to reviews, and understand your online reputation at a glance." },
        { title: "No Fake Reviews", desc: "Every review request goes to a real customer. We do not fabricate, incentivize, or manipulate reviews. Just systematic asking at the right time." },
      ]}
      stats={[
        { value: "15-30", label: "New reviews per month typical" },
        { value: "88%", label: "Trust online reviews like personal referrals" },
        { value: "0.5★", label: "Gap costs 15-20% of potential customers" },
      ]}
    />
  );
}
