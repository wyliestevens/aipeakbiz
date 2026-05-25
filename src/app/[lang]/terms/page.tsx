import { Metadata } from "next";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Terms & Conditions",
    description: "AI Peak Biz terms and conditions governing use of our website and services.",
    alternates: buildLangAlternates(lang, "/terms"),
  };
}

export default function TermsPage() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-8">
          Terms &amp; Conditions
        </h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-text-secondary">
          <p><strong className="text-text-primary">Effective Date:</strong> January 1, 2026</p>
          <p><strong className="text-text-primary">Last Updated:</strong> April 20, 2026</p>

          <p>These Terms and Conditions (&quot;Terms&quot;) govern your use of the AI Peak Biz website at aipeakbiz.com and any services provided by AI Peak Biz (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website or using our services, you agree to be bound by these Terms.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Services</h2>
          <p>AI Peak Biz provides done-for-you AI front desk systems for service businesses, including AI voice assistants, AI chatbots, reputation management, CRM setup, and related automation services. All services are provided on a build-plus-monthly-management basis as described on our Pricing page.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>System build fees are due at the start of the project and are non-refundable once configuration begins.</li>
            <li>Monthly management fees are billed monthly in advance.</li>
            <li>All prices are in US dollars.</li>
            <li>Failure to pay may result in suspension or termination of services.</li>
          </ul>

          <h2 className="text-xl font-bold text-text-primary mt-8">Cancellation</h2>
          <p>You may cancel monthly management at any time by providing written notice. Upon cancellation, your AI front desk system will be deactivated. There are no refunds for partial months. The Founding System requires a 12-month commitment as specified in the agreement.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is the property of AI Peak Biz or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">System Ownership</h2>
          <p>AI front desk systems built by AI Peak Biz are managed services. The system configurations, AI training data, and automation workflows are maintained and operated by AI Peak Biz. They are not standalone software licenses. Upon cancellation of management, access to the system is discontinued.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Limitation of Liability</h2>
          <p>AI Peak Biz provides its services on an &quot;as is&quot; basis. We make no warranties, express or implied, regarding the performance, accuracy, or reliability of our AI systems. We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Indemnification</h2>
          <p>You agree to indemnify and hold harmless AI Peak Biz, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our services or violation of these Terms.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of the State of Arizona. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Mohave County, Arizona.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Changes to These Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Contact</h2>
          <p>
            AI Peak Biz<br />
            Kingman, Arizona<br />
            Email: <a href="mailto:wylie@aipeakbiz.com" className="text-accent-blue hover:underline">wylie@aipeakbiz.com</a><br />
            Phone: <a href="tel:9286286080" className="text-accent-blue hover:underline">928-628-6080</a>
          </p>
        </div>
      </div>
    </section>
  );
}
