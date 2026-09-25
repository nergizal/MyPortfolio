"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

export function MagneticButton({
  children,
  className,
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={(event) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
      }}
      style={{ transition: "transform 180ms ease-out" }}
    >
      {children}
    </motion.div>
  );
}
