"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import { PhoneMockup } from "@/components/phone-mockup";
import { StaggerLines } from "@/components/reveal";

export function Hero() {
  const { t } = useI18n();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setRoleIndex((value) => (value + 1) % site.roles.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28"
    >
      <div className="aurora pointer-events-none absolute -top-24 right-0 left-0 h-[42rem]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
            </span>
            {t.hero.status}
          </div>
          <p className="font-mono text-xs tracking-[0.22em] text-muted-foreground uppercase">
            {site.title} · {t.hero.basedIn}
          </p>
          <h1 className="font-display mt-4 text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.9] font-semibold tracking-tight">
            <StaggerLines text={site.name} />
          </h1>
          <p className="mt-6 min-h-[1.6em] text-xl text-muted-foreground md:text-2xl">
            <span className="gradient-text font-medium">{site.roles[roleIndex]}</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {site.pitch}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton>
              <Button asChild variant="accent" size="lg">
                <a href="#projects">{t.hero.ctaProjects}</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="outline" size="lg">
                <a href={site.cvPath} download>
                  {t.hero.ctaCv}
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">{t.hero.ctaContact}</a>
              </Button>
            </MagneticButton>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={site.github.href}
              target="_blank"
              rel="noreferrer"
              aria-label={site.github.label}
              className="rounded-full border border-border p-2.5 hover:border-accent"
            >
              <GitHubIcon className="size-4" />
            </a>
            <a
              href={site.linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label={site.linkedin.label}
              className="rounded-full border border-border p-2.5 hover:border-accent"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="rounded-full border border-border p-2.5 hover:border-accent"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-8 rounded-full bg-linear-to-br from-accent/30 to-accent-2/20 blur-3xl" />
          <PhoneMockup kind="studyflow" className="relative rotate-[-8deg]" />
          <PhoneMockup
            kind="moodify"
            className="absolute top-10 right-6 hidden rotate-[10deg] sm:block"
          />
        </div>
      </div>
    </section>
  );
}
