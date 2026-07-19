"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Élément HTML à rendre — utile pour respecter la sémantique (ex: "li" dans un <ul>). */
  as?: "div" | "li";
};

const tags = {
  div: motion.div,
  li: motion.li,
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = tags[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
