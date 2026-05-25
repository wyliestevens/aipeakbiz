import { Metadata } from "next";
import { buildLangAlternates } from "@/lib/seo";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Privacy Policy",
    description: "AI Peak Biz privacy policy. How we collect, use, and protect your information.",
    alternates: buildLangAlternates(lang, "/privacy-policy"),
  };
}

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary tracking-display mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-text-secondary">
          <p><strong className="text-text-primary">Effective Date:</strong> January 1, 2026</p>
          <p><strong className="text-text-primary">Last Updated:</strong> April 20, 2026</p>

          <p>AI Peak Biz (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website aipeakbiz.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fill out forms on our website (name, email, phone number, business information)</li>
            <li>Use our Free Assessment tool</li>
            <li>Book a demo or consultation</li>
            <li>Contact us via email, phone, or chat</li>
            <li>Subscribe to our communications</li>
          </ul>
          <p>We automatically collect certain information when you visit our website, including IP address, browser type, operating system, referring URLs, and pages visited. This information is collected through cookies, web beacons, and similar technologies.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our services</li>
            <li>To respond to your inquiries and fulfill your requests</li>
            <li>To send you marketing and promotional communications (with your consent)</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>

          <h2 className="text-xl font-bold text-text-primary mt-8">Third-Party Services</h2>
          <p>We use third-party services that may collect information about you, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google Analytics for website analytics</li>
            <li>Facebook Pixel for advertising measurement</li>
            <li>GoHighLevel for CRM and marketing automation</li>
            <li>Vercel for website hosting</li>
          </ul>
          <p>Each of these services has its own privacy policy governing how they use your data.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some features of our website.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Data Security</h2>
          <p>We use administrative, technical, and physical security measures to protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or port your data. To exercise these rights, contact us at wylie@aipeakbiz.com.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Children&apos;s Privacy</h2>
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.</p>

          <h2 className="text-xl font-bold text-text-primary mt-8">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
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
