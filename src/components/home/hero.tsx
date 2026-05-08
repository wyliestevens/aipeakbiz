"use client";

import { useState } from "react";
import { BOOKING_URL } from "@/data/industries";
import { Play, Headphones, PhoneCall, Calendar } from "lucide-react";
import { VideoModal } from "./video-modal";

export function HeroSection() {
  const [videoModal, setVideoModal] = useState<"overview" | "demo" | null>(null);

  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <p className="text-sm font-medium tracking-wide text-brand uppercase mb-4">
              Revenue Recovery for Service Businesses
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-display leading-[1.1] mb-6">
              Every missed call is a job you already paid for and lost.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              AI Peak Biz helps service businesses respond to every lead instantly, answer every call 24/7, and book more appointments automatically. No more lost revenue from slow follow-up.
            </p>

            {/* Choose Your Experience */}
            <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-5">
              Choose Your Experience
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
              <button
                onClick={() => setVideoModal("overview")}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg border border-border bg-white text-text-primary font-medium text-sm hover:bg-background-alt hover:border-brand/30 transition-all"
              >
                <Play className="w-4 h-4 text-brand" />
                Watch 2-Minute Overview
              </button>
              <button
                onClick={() => setVideoModal("demo")}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg border border-border bg-white text-text-primary font-medium text-sm hover:bg-background-alt hover:border-brand/30 transition-all"
              >
                <Headphones className="w-4 h-4 text-brand" />
                Hear a Real AI Call
              </button>
              <a
                href="#demo"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg border border-border bg-white text-text-primary font-medium text-sm hover:bg-background-alt hover:border-brand/30 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-brand" />
                Try the AI Demo
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-brand text-white font-medium text-sm hover:bg-brand-dark transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {videoModal && (
        <VideoModal
          type={videoModal}
          onClose={() => setVideoModal(null)}
        />
      )}
    </>
  );
}
