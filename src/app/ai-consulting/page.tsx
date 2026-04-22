import { Metadata } from "next";
import { ConsultingPageContent } from "@/components/consulting-page";

export const metadata: Metadata = {
  title: "AI Consulting for Businesses | AI Peak Biz",
  description:
    "Not sure how AI fits your business? AI Peak Biz provides hands-on consulting. We investigate your operations, recommend the right AI tools, and teach your team to use them.",
  alternates: { canonical: "https://www.aipeakbiz.com/ai-consulting" },
};

export default function AIConsultingPage() {
  return <ConsultingPageContent />;
}
