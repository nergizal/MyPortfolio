"use client";

import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  experiments,
  projectFilters,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { useI18n } from "@/i18n/context";
import { BentoCard } from "@/components/bento-card";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/phone-mockup";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

function Cover({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        featured ? "h-48 md:h-56" : "h-36",
      )}
      style={{
        background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
      }}
    >
      <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_80%,black,transparent_40%)]" />
      {project.mockup && featured ? (
        <div className="absolute -bottom-10 right-6 scale-75">
          <PhoneMockup kind={project.mockup} />
        </div>
      ) : null}
    </div>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const reduce = useReducedMotion();

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.22em] text-accent-2 uppercase">
          {t.projects.kicker}
        </p>
        <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-semibold">
          {t.projects.title}
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{t.projects.subtitle}</p>
      </Reveal>
      <div className="mt-8 flex flex-wrap gap-2">
        {projectFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase",
              filter === item.id
                ? "border-transparent bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {t.projects.filters[item.id]}
          </button>
        ))}
      </div>
      <LayoutGroup>
        <div className="mt-8 grid gap-4 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {visible.length === 0 ? (
              <p className="px-1 py-10 text-sm text-muted-foreground md:col-span-6">
                No projects in this category yet.
              </p>
            ) : null}
            {visible.map((project) => {
              const featured = project.featured && filter === "all";
              return (
                <motion.div
                  layout={!reduce}
                  key={project.slug}
                  initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                  className={featured ? "md:col-span-3" : "md:col-span-2"}
                >
                  <Link href={`/projects/${project.slug}`} className="block h-full">
                    <BentoCard className="h-full">
                      <Cover project={project} featured={Boolean(featured)} />
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-xl leading-tight">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="mt-1 size-4 shrink-0" />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {project.oneLiner}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-3 text-xs">
                          {project.github ? (
                            <span className="text-accent-2">{t.projects.github}</span>
                          ) : null}
                          {project.demo ? (
                            <span className="text-accent-2">{t.projects.demo}</span>
                          ) : null}
                        </div>
                      </div>
                    </BentoCard>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </LayoutGroup>
      <div className="mt-14">
        <h3 className="font-display text-2xl">{t.projects.experiments}</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {experiments.map((item) => (
            <BentoCard key={item.slug} className="p-4">
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                {item.tech.join(" · ")}
              </p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
