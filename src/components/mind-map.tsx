"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "@/data/industries";

function MindMapDesktop() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const radius = 320;
  const centerX = 400;
  const centerY = 400;

  return (
    <div className="hidden md:block relative" style={{ width: 800, height: 800, margin: "0 auto" }}>
      {/* Center node */}
      <motion.div
        className="absolute z-10 flex items-center justify-center"
        style={{
          left: centerX - 64,
          top: centerY - 64,
          width: 128,
          height: 128,
        }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 40px rgba(139, 92, 246, 0.5)",
            "0 0 20px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-blue via-accent-violet to-accent-pink flex items-center justify-center">
          <span className="text-white font-bold text-sm text-center leading-tight px-2">
            AI Peak<br />Biz
          </span>
        </div>
      </motion.div>

      {/* Connection lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 800"
      >
        {industries.map((ind, i) => {
          const angle = (2 * Math.PI * i) / industries.length - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const isHovered = hoveredSlug === ind.slug;
          return (
            <line
              key={ind.slug}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke={isHovered ? "#8B5CF6" : "#27272A"}
              strokeWidth={isHovered ? 2 : 1}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Industry nodes */}
      {industries.map((ind, i) => {
        const angle = (2 * Math.PI * i) / industries.length - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const isHovered = hoveredSlug === ind.slug;
        const Icon = ind.icon;

        return (
          <div
            key={ind.slug}
            className="absolute"
            style={{
              left: x - 56,
              top: y - 28,
              width: 112,
            }}
            onMouseEnter={() => setHoveredSlug(ind.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            <Link
              href={`/industries/${ind.slug}`}
              className="block text-center group"
              aria-label={`${ind.name} - click to learn more`}
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  boxShadow: isHovered
                    ? "0 0 24px rgba(59, 130, 246, 0.4)"
                    : "0 0 0px rgba(59, 130, 246, 0)",
                }}
                transition={{ duration: 0.2 }}
                className="mx-auto w-14 h-14 rounded-full glassmorphism flex items-center justify-center mb-1.5"
              >
                <Icon
                  className={`w-6 h-6 transition-colors duration-200 ${
                    isHovered ? "text-accent-blue" : "text-text-secondary"
                  }`}
                />
              </motion.div>
              <span
                className={`text-xs font-medium transition-colors duration-200 ${
                  isHovered ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {ind.name}
              </span>
            </Link>

            {/* Sub-industry chips on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-20 mt-2 left-1/2 -translate-x-1/2 w-48 glassmorphism rounded-lg p-3 shadow-2xl"
                >
                  <div className="flex flex-wrap gap-1">
                    {ind.subIndustries.map((sub) => (
                      <span
                        key={sub}
                        className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function MindMapMobile() {
  return (
    <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
      {industries.map((ind) => {
        const Icon = ind.icon;
        return (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="glassmorphism rounded-xl p-4 hover:border-accent-blue/50 transition-all duration-200 group"
            aria-label={`${ind.name} - click to learn more`}
          >
            <Icon className="w-6 h-6 text-accent-blue mb-2" />
            <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
              {ind.name}
            </h3>
            <div className="flex flex-wrap gap-1">
              {ind.subIndustries.slice(0, 4).map((sub) => (
                <span
                  key={sub}
                  className="inline-block px-1.5 py-0.5 text-[9px] rounded-full bg-accent-blue/10 text-accent-blue/80"
                >
                  {sub}
                </span>
              ))}
              {ind.subIndustries.length > 4 && (
                <span className="inline-block px-1.5 py-0.5 text-[9px] rounded-full bg-white/5 text-text-muted">
                  +{ind.subIndustries.length - 4}
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function MindMap() {
  return (
    <>
      <MindMapDesktop />
      <MindMapMobile />
    </>
  );
}
