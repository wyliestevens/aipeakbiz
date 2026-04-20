"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  alt = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`section-padding ${alt ? "bg-surface" : ""} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </motion.section>
  );
}
