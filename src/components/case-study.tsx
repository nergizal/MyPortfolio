"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useI18n } from "@/i18n/context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/phone-mockup";

export function CaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project | null;
  next: Project | null;
}) {
  const { t } = useI18n();

  return (
    <main id="main" className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        {t.projects.back}
      </Link>
      <div
        className="relative mt-8 overflow-hidden rounded-3xl border border-border p-8"
        style={{
          background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
        }}
      >
        {project.mockup ? (
          <div className="flex justify-end">
            <PhoneMockup kind={project.mockup} />
          </div>
        ) : (
          <div className="h-32" />
        )}
      </div>
      <h1 className="font-display mt-8 text-[clamp(2rem,5vw,3.6rem)] leading-tight font-semibold">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{project.oneLiner}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        {project.github ? (
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noreferrer">
              {t.projects.github}
            </a>
          </Button>
        ) : null}
        {project.demo ? (
          <Button asChild variant="outline" size="sm">
            <a href={project.demo} target="_blank" rel="noreferrer">
              {t.projects.demo}
            </a>
          </Button>
        ) : null}
      </div>
      <section className="mt-12 space-y-10">
        <article>
          <h2 className="font-display text-2xl">{t.projects.overview}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">{t.projects.role}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.role}
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">{t.projects.architecture}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.architecture}
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl">{t.projects.stack}</h2>
          <p className="mt-3 text-muted-foreground">{project.tech.join(" · ")}</p>
        </article>
        <article>
          <h2 className="font-display text-2xl">{t.projects.features}</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="font-display text-2xl">{t.projects.challenges}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.challenges}
          </p>
        </article>
      </section>
      <nav className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-8">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="max-w-[45%]">
            <p className="font-mono text-[11px] text-muted-foreground uppercase">
              {t.projects.prev}
            </p>
            <p className="mt-1 flex items-center gap-2 font-medium">
              <ArrowLeft className="size-4" />
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="max-w-[45%] text-right">
            <p className="font-mono text-[11px] text-muted-foreground uppercase">
              {t.projects.next}
            </p>
            <p className="mt-1 inline-flex items-center gap-2 font-medium">
              {next.title}
              <ArrowRight className="size-4" />
            </p>
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
