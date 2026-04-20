import Link from "next/link";
import Image from "next/image";
import { BOOKING_URL, PHONE, PHONE_TEL, EMAIL } from "@/data/industries";

const solutionLinks = [
  { name: "AI Chatbot", href: "/ai-chatbot" },
  { name: "AI Voice Assistant", href: "/ai-voice-assistant" },
  { name: "Reputation Management", href: "/reputation-management" },
  { name: "Pricing", href: "/pricing" },
  { name: "Free Assessment", href: "/free-assessment" },
];

const industryLinks = [
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Home Services", href: "/industries/home-services" },
  { name: "Construction", href: "/industries/construction" },
  { name: "Legal", href: "/industries/legal" },
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "All Industries", href: "/#industries" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Book a Demo", href: BOOKING_URL },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-custom">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="AI Peak Biz" width={32} height={32} />
              <span className="text-lg font-bold text-text-primary">
                AI Peak <em className="not-italic text-accent-blue">Biz</em>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              AI front desk systems for service businesses. Every call answered. Every lead captured. More appointments booked. More 5-star reviews.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutionLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Industries</h3>
            <ul className="space-y-2">
              {industryLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Contact</h3>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={PHONE_TEL} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="text-sm text-text-muted">Kingman, Arizona</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-custom mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">&copy; 2026 AI Peak Biz. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Terms</Link>
            <Link href="/disclaimer" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
