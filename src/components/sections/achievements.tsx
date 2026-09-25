"use client";

import { achievements } from "@/data/experience";
import { useI18n } from "@/i18n/context";
import { BentoCard } from "@/components/bento-card";
import { Reveal } from "@/components/reveal";

export function Achievements() {
  const { t } = useI18n();

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.22em] text-accent-2 uppercase">
          {t.achievements.kicker}
        </p>
        <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-semibold">
          {t.achievements.title}
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <BentoCard key={item.id} className="p-6">
            <p className="font-mono text-accent-2">0{index + 1}</p>
            <h3 className="font-display mt-4 text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
