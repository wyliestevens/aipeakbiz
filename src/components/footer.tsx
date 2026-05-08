import Link from "next/link";
import Image from "next/image";
import { BOOKING_URL, PHONE, PHONE_TEL, EMAIL } from "@/data/industries";

const solutionLinks = [
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const recentWork = [
  { name: "Used Slot Shop", href: "https://usedslotshop.com" },
  { name: "Last Song", href: "https://lastsong.pro" },
  { name: "Paycheck Calculator", href: "https://www.paycheck.center" },
];

export function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="AI Peak Biz" width={44} height={44} />
              <span className="text-lg font-bold text-white">
                AI Peak Biz
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Revenue recovery and customer communication for service businesses. Every call answered. Every lead captured. More appointments booked.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {solutionLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={BOOKING_URL} className="text-sm text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                </a>
              </li>
            </ul>
            <h3 className="text-sm font-semibold text-white mt-6 mb-4">Recent Work</h3>
            <ul className="space-y-2">
              {recentWork.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    title={`${l.name} -- built by AI Peak Biz`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href={PHONE_TEL} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="text-sm text-slate-500">Kingman, Arizona</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <p className="text-sm text-slate-500 text-center">&copy; 2026 AI Peak Biz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
