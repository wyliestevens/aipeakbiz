import { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Peak Biz was founded by Wylie Stevens after 20 years in healthcare. We build and manage AI front desk systems for service businesses from Kingman, Arizona.",
  alternates: { canonical: "https://www.aipeakbiz.com/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
