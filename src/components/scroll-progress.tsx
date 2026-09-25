"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-60 h-[2px] bg-transparent"
    >
      <div
        className="h-full origin-left bg-linear-to-r from-accent to-accent-2"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
