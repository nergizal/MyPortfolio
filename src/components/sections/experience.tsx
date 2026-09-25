"use client";

import { experience } from "@/data/experience";
import { useI18n } from "@/i18n/context";
import { Reveal } from "@/components/reveal";

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.22em] text-accent-2 uppercase">
          {t.experience.kicker}
        </p>
        <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-semibold">
          {t.experience.title}
        </h2>
      </Reveal>
      <ol className="relative mt-12 border-l border-border pl-6 md:pl-10">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <li className="relative mb-12 last:mb-0">
              <span className="absolute top-1.5 -left-[1.7rem] size-3 rounded-full bg-linear-to-br from-accent to-accent-2 md:-left-[2.7rem]" />
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                {item.start} — {item.current ? t.experience.present : item.end}
              </p>
              <h3 className="font-display mt-1 text-2xl">
                {item.role}
                <span className="text-muted-foreground"> · {item.org}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
