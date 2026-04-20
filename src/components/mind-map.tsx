"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "@/data/industries";

const nodeColors = [
  "#3B82F6", // blue
  "#10B981", // green
  "#F59E0B", // amber
  "#8B5CF6", // violet
  "#EF4444", // red
  "#06B6D4", // cyan
  "#EC4899", // pink
  "#F97316", // orange
  "#14B8A6", // teal
  "#A855F7", // purple
  "#6366F1", // indigo
  "#84CC16", // lime
  "#0EA5E9", // sky
];

function MindMapDesktop() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const radius = 320;
  const centerX = 400;
  const centerY = 400;

  return (
    <div className="hidden md:block relative" style={{ width: 800, height: 800, margin: "0 auto" }}>
      {/* Center node with logo */}
      <motion.div
        className="absolute z-10 flex items-center justify-center rounded-full"
        style={{
          left: centerX - 70,
          top: centerY - 70,
          width: 140,
          height: 140,
        }}
        animate={{
          boxShadow: [
            "0 0 30px rgba(59, 130, 246, 0.3)",
            "0 0 50px rgba(59, 130, 246, 0.5)",
            "0 0 30px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[#0D3B3F] border-2 border-[#4DD9E0]/40 flex items-center justify-center shadow-lg">
          <Image
            src="/images/logo.png"
            alt="AI Peak Biz"
            width={90}
            height={90}
            className="w-[90px] h-[90px] object-contain"
          />
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
              stroke={isHovered ? nodeColors[i] : "#3A3A3E"}
              strokeWidth={isHovered ? 2.5 : 1}
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
        const color = nodeColors[i];

        return (
          <div
            key={ind.slug}
            className="absolute"
            style={{
              left: x - 60,
              top: y - 34,
              width: 120,
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
                  scale: isHovered ? 1.15 : 1,
                  boxShadow: isHovered
                    ? `0 0 24px ${color}66`
                    : `0 0 0px ${color}00`,
                }}
                transition={{ duration: 0.2 }}
                className="mx-auto w-[68px] h-[68px] rounded-full flex items-center justify-center mb-2 border-2 shadow-md"
                style={{
                  backgroundColor: `${color}15`,
                  borderColor: `${color}40`,
                }}
              >
                <Icon
                  className="w-7 h-7 transition-colors duration-200"
                  style={{ color }}
                />
              </motion.div>
              <span
                className={`text-sm font-semibold transition-colors duration-200 ${
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
                  className="absolute z-20 mt-2 left-1/2 -translate-x-1/2 w-48 glassmorphism rounded-lg p-3 shadow-xl"
                >
                  <div className="flex flex-wrap gap-1">
                    {ind.subIndustries.map((sub) => (
                      <span
                        key={sub}
                        className="inline-block px-2 py-0.5 text-[10px] rounded-full font-medium"
                        style={{
                          backgroundColor: `${color}15`,
                          color: color,
                          border: `1px solid ${color}30`,
                        }}
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
      {industries.map((ind, i) => {
        const Icon = ind.icon;
        const color = nodeColors[i];
        return (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="glassmorphism rounded-xl p-4 hover:border-accent-blue/50 transition-all duration-200 group"
            aria-label={`${ind.name} - click to learn more`}
          >
            <Icon className="w-7 h-7 mb-2" style={{ color }} />
            <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
              {ind.name}
            </h3>
            <div className="flex flex-wrap gap-1">
              {ind.subIndustries.slice(0, 4).map((sub) => (
                <span
                  key={sub}
                  className="inline-block px-1.5 py-0.5 text-[9px] rounded-full font-medium"
                  style={{
                    backgroundColor: `${color}12`,
                    color: color,
                  }}
                >
                  {sub}
                </span>
              ))}
              {ind.subIndustries.length > 4 && (
                <span className="inline-block px-1.5 py-0.5 text-[9px] rounded-full bg-white/10 text-text-muted">
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
