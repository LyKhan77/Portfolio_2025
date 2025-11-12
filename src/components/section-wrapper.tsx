"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function SectionWrapper({ children, delay = 0.2 }: SectionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}