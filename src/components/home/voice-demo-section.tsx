"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function VoiceDemoSection() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/voice-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: digits }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm text-sm mb-6">
            <Phone className="w-4 h-4 text-brand" />
            <span className="text-text-primary font-medium">Live Demo</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-display mb-4">
            Hear our AI voice assistant for yourself.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Enter your phone number and our AI will call you in under a minute.
            Have a real conversation with it. Ask it questions. See what your
            customers will experience.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-2xl p-8 inline-flex flex-col items-center gap-3"
            >
              <CheckCircle className="w-10 h-10 text-green-400" />
              <p className="text-lg font-semibold text-text-primary">
                Your phone is about to ring.
              </p>
              <p className="text-sm text-text-secondary">
                Our AI voice assistant will call you shortly. Pick up and have a conversation with it.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => {
                    setPhone(formatPhone(e.target.value));
                    if (status === "error") setStatus("idle");
                  }}
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-[#1E1E22] border border-[#3A3A3E] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors text-base"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary text-base px-6 py-4 w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Call Me Now <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400 mt-3">{errorMsg}</p>
          )}

          <p className="text-xs text-text-muted mt-4">
            By submitting your number, you consent to receive a demo call from our AI voice assistant.
            Standard messaging rates may apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
