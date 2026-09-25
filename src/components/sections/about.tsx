"use client";

import { education } from "@/data/experience";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";
import { BentoCard } from "@/components/bento-card";
import { Reveal } from "@/components/reveal";

export function About() {
  const { t } = useI18n();

  const tiles = [
    { label: t.about.location, value: site.location },
    { label: t.about.learning, value: site.currentlyLearning },
    { label: t.about.community, value: site.community },
    { label: t.about.competitions, value: site.competitions },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.22em] text-accent-2 uppercase">
          {t.about.kicker}
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.05] font-semibold">
          {t.about.title}
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-6">
        <BentoCard className="p-6 md:col-span-4 md:p-8">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t.about.story}
          </p>
          <div className="mt-8">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              {t.about.education}
            </p>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.id}>
                  <p className="font-medium">{item.school}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.program} · {item.start} – {item.end}
                    {item.detail ? ` · ${item.detail}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </BentoCard>
        <div className="grid gap-4 md:col-span-2">
          {tiles.map((tile) => (
            <BentoCard key={tile.label} className="p-5">
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                {tile.label}
              </p>
              <p className="mt-2 text-sm leading-snug">{tile.value}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
