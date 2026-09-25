"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      data-cursor="hover"
      onMouseMove={onMove}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        "before:bg-[radial-gradient(420px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
