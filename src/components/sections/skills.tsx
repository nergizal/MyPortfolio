"use client";

import { marqueeTech, skillGroups } from "@/data/skills";
import { useI18n } from "@/i18n/context";
import { BentoCard } from "@/components/bento-card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-accent-2 uppercase">
            {t.skills.kicker}
          </p>
          <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-semibold">
            {t.skills.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <BentoCard key={group.id} className="p-5">
              <h3 className="font-display text-lg">
                {t.skills.groups[group.id]}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
      <div className="mt-16 overflow-hidden border-y border-border py-5">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...marqueeTech, ...marqueeTech].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="font-display text-2xl tracking-tight text-muted-foreground/80"
            >
              {tech}
              <span className="ml-10 text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
