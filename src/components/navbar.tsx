"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { industries, BOOKING_URL, PHONE, PHONE_TEL } from "@/data/industries";

const serviceLinks = [
  { name: "AI Chatbot", href: "/ai-chatbot" },
  { name: "AI Voice Assistant", href: "/ai-voice-assistant" },
  { name: "Reputation Management", href: "/reputation-management" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glassmorphism shadow-lg"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="AI Peak Biz"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
            priority
          />
          <span className="text-lg font-bold text-text-primary">
            AI Peak <em className="not-italic text-accent-blue">Biz</em>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              Industries <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-64 glassmorphism rounded-xl p-2 shadow-2xl"
                >
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <ind.icon className="w-4 h-4 text-accent-blue" />
                      {ind.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 glassmorphism rounded-xl p-2 shadow-2xl"
                >
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/pricing" className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg">
            Pricing
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg">
            About
          </Link>
          <Link href="/free-assessment" className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg">
            Free Assessment
          </Link>
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
          <a href={BOOKING_URL} className="btn-primary text-sm" target="_blank" rel="noopener noreferrer">
            Book a Demo
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glassmorphism border-t border-border-custom overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3 pt-2">Industries</p>
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                >
                  <ind.icon className="w-4 h-4 text-accent-blue" />
                  {ind.name}
                </Link>
              ))}
              <div className="border-t border-border-custom my-2" />
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3">Services</p>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                >
                  {s.name}
                </Link>
              ))}
              <div className="border-t border-border-custom my-2" />
              <Link href="/pricing" onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary">Pricing</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary">About</Link>
              <Link href="/free-assessment" onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary">Free Assessment</Link>
              <div className="border-t border-border-custom my-2" />
              <a href={PHONE_TEL} className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href={BOOKING_URL} className="btn-primary text-sm text-center mx-3" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
