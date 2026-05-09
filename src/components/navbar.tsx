"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Globe } from "lucide-react";
import { BOOKING_URL, PHONE, PHONE_TEL } from "@/data/industries";
import { useDict, useLang } from "@/i18n/context";
import { usePathname } from "next/navigation";

function langPrefix(lang: string) {
  return lang === "es" ? "/es" : "";
}

export function Navbar() {
  const dict = useDict();
  const lang = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const prefix = langPrefix(lang);
  const navLinks = [
    { name: dict.nav.howItWorks, href: `${prefix}/#how-it-works` },
    { name: dict.nav.about, href: `${prefix}/about` },
    { name: dict.nav.pricing, href: `${prefix}/pricing` },
  ];

  // Build the alternate language URL
  const altLang = lang === "es" ? "en" : "es";
  const altPrefix = langPrefix(altLang);
  // Strip current lang prefix from pathname to get the base path
  const basePath = lang === "es" ? pathname.replace(/^\/es/, "") || "/" : pathname;
  const altHref = `${altPrefix}${basePath}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border-light"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href={`${prefix}/`} className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logo.png"
            alt="AI Peak Biz"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12"
            priority
          />
          <span className="text-lg font-bold text-text-primary">
            AI Peak Biz
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language switcher */}
          <Link
            href={altHref}
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
            title={dict.altLangName}
          >
            <Globe className="w-4 h-4" />
            {dict.altLangName}
          </Link>
          <a
            href={PHONE_TEL}
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
          <a
            href={BOOKING_URL}
            className="btn-primary text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.nav.bookCall}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border-light">
          <div className="container-custom py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-base text-text-secondary hover:text-text-primary hover:bg-background-alt rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border-light my-3" />
            <Link
              href={altHref}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-3 text-base text-text-secondary hover:text-text-primary hover:bg-background-alt rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" /> {dict.altLangName}
            </Link>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 px-3 py-3 text-base text-text-secondary"
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a
              href={BOOKING_URL}
              className="btn-primary text-sm text-center mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.nav.bookCall}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
