"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useI18n } from "@/i18n/context";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

const sections = [
  { id: "home", href: "/#home" },
  { id: "about", href: "/#about" },
  { id: "skills", href: "/#skills" },
  { id: "projects", href: "/#projects" },
  { id: "experience", href: "/#experience" },
  { id: "contact", href: "/#contact" },
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    router.push(href);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0">
        <DialogTitle className="sr-only">{t.a11y.command}</DialogTitle>
        <Command className="bg-transparent text-foreground" label={t.a11y.command}>
          <Command.Input
            placeholder={t.command.placeholder}
            className="h-12 w-full border-b border-border bg-transparent px-4 text-sm outline-none"
          />
          <Command.List className="max-h-80 overflow-auto p-2">
            <Command.Empty className="px-3 py-6 text-sm text-muted-foreground">
              {t.command.empty}
            </Command.Empty>
            <Command.Group heading={t.command.sections} className="text-xs text-muted-foreground">
              {sections.map((section) => (
                <Command.Item
                  key={section.id}
                  value={section.id}
                  onSelect={() => go(section.href)}
                  className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-muted"
                >
                  {t.nav[section.id === "home" ? "home" : section.id]}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading={t.command.projects} className="text-xs text-muted-foreground">
              {projects.map((project) => (
                <Command.Item
                  key={project.slug}
                  value={project.title}
                  onSelect={() => go(`/projects/${project.slug}`)}
                  className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-muted"
                >
                  {project.title}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading={t.command.actions} className="text-xs text-muted-foreground">
              <Command.Item
                value="theme"
                onSelect={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-muted"
              >
                {theme === "dark" ? t.command.themeLight : t.command.themeDark}
              </Command.Item>
              <Command.Item
                value="language"
                onSelect={() => {
                  setLocale(locale === "en" ? "tr" : "en");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-muted"
              >
                {locale === "en" ? t.command.langTr : t.command.langEn}
              </Command.Item>
              <Command.Item
                value="github"
                onSelect={() => go(site.github.href)}
                className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-muted"
              >
                {t.command.github}
              </Command.Item>
              <Command.Item
                value="linkedin"
                onSelect={() => go(site.linkedin.href)}
                className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-muted"
              >
                {t.command.linkedin}
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
