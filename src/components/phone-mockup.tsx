"use client";

import { cn } from "@/lib/utils";

type MockupKind = "studyflow" | "vetapp" | "moodify" | "istanbulkart";

const screens: Record<
  MockupKind,
  { app: string; blocks: { label: string; tone: string }[] }
> = {
  studyflow: {
    app: "StudyFlow",
    blocks: [
      { label: "Focus 25:00", tone: "from-violet-500/80 to-cyan-400/70" },
      { label: "Tasks", tone: "from-white/15 to-white/5" },
      { label: "Analytics", tone: "from-emerald-400/40 to-transparent" },
    ],
  },
  vetapp: {
    app: "VetApp",
    blocks: [
      { label: "Appointments", tone: "from-sky-400/70 to-indigo-500/50" },
      { label: "Pets", tone: "from-white/15 to-white/5" },
      { label: "Clinic", tone: "from-cyan-300/30 to-transparent" },
    ],
  },
  moodify: {
    app: "Moodify",
    blocks: [
      { label: "Mood: calm", tone: "from-orange-400/70 to-violet-500/60" },
      { label: "Now playing", tone: "from-white/15 to-white/5" },
      { label: "Queue", tone: "from-fuchsia-400/30 to-transparent" },
    ],
  },
  istanbulkart: {
    app: "Istanbulkart",
    blocks: [
      { label: "Card · ₺", tone: "from-rose-500/80 to-amber-400/50" },
      { label: "Pay", tone: "from-white/15 to-white/5" },
      { label: "History", tone: "from-orange-300/25 to-transparent" },
    ],
  },
};

export function PhoneMockup({
  kind,
  className,
}: {
  kind: MockupKind;
  className?: string;
}) {
  const screen = screens[kind];

  return (
    <div
      className={cn(
        "relative mx-auto w-[168px] rounded-[2rem] border border-white/20 bg-black/80 p-2 shadow-2xl",
        className,
      )}
      aria-hidden
    >
      <div className="overflow-hidden rounded-[1.55rem] bg-[#0b0b12]">
        <div className="mx-auto mt-2 h-4 w-16 rounded-full bg-white/10" />
        <div className="space-y-2 p-3 pt-4">
          <p className="font-mono text-[9px] tracking-[0.2em] text-white/50 uppercase">
            {screen.app}
          </p>
          {screen.blocks.map((block) => (
            <div
              key={block.label}
              className={cn(
                "rounded-2xl bg-linear-to-br p-3 text-[10px] font-medium text-white",
                block.tone,
              )}
            >
              {block.label}
            </div>
          ))}
          <div className="grid grid-cols-4 gap-1 pt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 rounded-lg bg-white/8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
