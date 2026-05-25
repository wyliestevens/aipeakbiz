import { Metadata } from "next";
import { ServicePageContent } from "@/components/service-page";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Website Design for Service Businesses | AI Peak Biz",
    description:
      "AI Peak Biz designs and builds professional websites for service businesses. Fast, mobile-optimized, and built to convert visitors into booked appointments.",
    alternates: buildLangAlternates(lang, "/website-design"),
  };
}

export default function WebsiteDesignPage() {
  return (
    <ServicePageContent
      title="Website Design"
      headline="A website built to book appointments, not just look pretty."
      description="Your website is the first impression most customers get. We build fast, mobile-optimized sites designed specifically for service businesses. Clear calls to action, online booking, and SEO best practices built in from day one."
      features={[
        { title: "Built to Convert", desc: "Every page is designed with one goal: turning visitors into booked appointments. Clear calls to action, booking buttons, and click-to-call on every page." },
        { title: "Mobile-First Design", desc: "Over 70% of your visitors are on their phone. Your site loads fast, looks sharp, and works perfectly on every device." },
        { title: "SEO Built In", desc: "Proper page structure, meta tags, fast load times, and local SEO setup so your business shows up when customers search for your services." },
        { title: "Online Booking Integration", desc: "Visitors can book appointments directly from your website. No phone tag. No contact forms that go unanswered. Straight into your calendar." },
        { title: "Professional and On-Brand", desc: "Clean, modern design that reflects your business. We handle the copywriting, imagery, and layout so you get a site you are proud to send people to." },
        { title: "Ongoing Updates Included", desc: "Need to change your hours, add a service, or update pricing? We handle it. Your site stays current without you lifting a finger." },
      ]}
      stats={[
        { value: "70%+", label: "Of visitors browse on mobile" },
        { value: "3 sec", label: "Max load time for conversions" },
        { value: "2x", label: "More bookings vs generic sites" },
      ]}
    />
  );
}
