import { Metadata } from "next";
import { ConsultingPageContent } from "@/components/consulting-page";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "AI Consulting & Teaching for Businesses | AI Peak Biz",
    description:
      "AI Peak Biz provides hands-on AI consulting and teaching. We investigate your operations, recommend the right AI tools, and train your team to use them confidently.",
    alternates: buildLangAlternates(lang, "/ai-consulting"),
  };
}

export default function AIConsultingPage() {
  return <ConsultingPageContent />;
}
