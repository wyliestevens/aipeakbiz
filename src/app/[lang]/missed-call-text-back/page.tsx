import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Missed Call Text-Back for Service Businesses | AI Peak Biz",
  description:
    "Never lose a lead to a missed call again. AI Peak Biz sets up automated text-back that responds within 60 seconds with a booking link.",
  alternates: { canonical: "https://www.aipeakbiz.com/missed-call-text-back" },
};

export default function MissedCallTextBackPage() {
  return (
    <ServicePageContent
      title="Missed Call Text-Back"
      headline="Miss a call? Your system texts them back in 60 seconds."
      description="When your team cannot answer the phone, your system sends an instant text with a booking link. The customer describes what they need and schedules an appointment before they even think about calling your competitor."
      features={[
        { title: "60-Second Response", desc: "The moment a call goes unanswered, a text goes out automatically. No delays, no manual follow-up, no leads slipping through the cracks." },
        { title: "Booking Link Included", desc: "Every text includes a direct link to your calendar. The customer can book an appointment right from the text message without waiting for a callback." },
        { title: "Custom Messaging", desc: "The text sounds like it came from your front desk, not a robot. We customize the message to match your business tone and include the right next step." },
        { title: "After-Hours Coverage", desc: "Missed calls at 8 PM on a Saturday still get a response. Your system works around the clock so no lead goes cold overnight." },
        { title: "Two-Way Texting", desc: "Customers can reply to the text and have a real conversation. Questions get answered, details get captured, and appointments get booked." },
        { title: "Lead Tracking", desc: "Every missed call and text-back is logged in your CRM. You can see exactly how many leads were saved and how many booked." },
      ]}
      stats={[
        { value: "60s", label: "Average response time" },
        { value: "80%", label: "Of callers who hit voicemail never call back" },
        { value: "30%+", label: "Of missed calls converted to bookings" },
      ]}
    />
  );
}
