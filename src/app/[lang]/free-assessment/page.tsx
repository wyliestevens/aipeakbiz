import { Metadata } from "next";
import { AssessmentTool } from "@/components/assessment-tool";

export const metadata: Metadata = {
  title: "Free Revenue Loss Assessment",
  description:
    "Find out how much money your business is leaving on the table. This 2-minute assessment calculates your monthly revenue loss across 4 key areas. Free. No email required.",
  alternates: { canonical: "https://www.aipeakbiz.com/free-assessment" },
};

export default function FreeAssessmentPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 md:pt-32">
      <div className="container-custom">
        <AssessmentTool />
      </div>
    </section>
  );
}
