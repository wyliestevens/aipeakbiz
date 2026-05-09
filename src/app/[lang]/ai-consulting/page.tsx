import { Metadata } from "next";
import { ConsultingPageContent } from "@/components/consulting-page";

export const metadata: Metadata = {
  title: "AI Consulting & Teaching for Businesses | AI Peak Biz",
  description:
    "AI Peak Biz provides hands-on AI consulting and teaching. We investigate your operations, recommend the right AI tools, and train your team to use them confidently.",
  alternates: { canonical: "https://www.aipeakbiz.com/ai-consulting" },
};

export default function AIConsultingPage() {
  return <ConsultingPageContent />;
}
