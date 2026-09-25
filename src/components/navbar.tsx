"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#home", key: "home" },
  { href: "/#about", key: "about" },
  { href: "/#skills", key: "skills" },
  { href: "/#projects", key: "projects" },
  { href: "/#experience", key: "experience" },
  { href: "/#contact", key: "contact" },
] as const;

export function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 right-3 left-3 z-50 mx-auto max-w-6xl">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between rounded-full border border-border bg-background/55 px-3 py-2 shadow-lg backdrop-blur-xl md:px-4"
      >
        <Link
          href="/#home"
          className="font-display px-2 text-sm font-semibold tracking-tight"
        >
          NA
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground"
              >
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            aria-label={t.a11y.language}
            className="font-mono"
          >
            {locale === "en" ? "TR" : "EN"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t.a11y.theme}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="size-4 dark:hidden" />
            <Moon className="hidden size-4 dark:block" />
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={site.cvPath} download>
              {t.nav.cv}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={t.a11y.menu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>
      <div
        className={cn(
          "mt-2 overflow-hidden rounded-3xl border border-border bg-background/80 backdrop-blur-xl md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="flex flex-col p-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm"
              >
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.cvPath}
              className="block rounded-2xl px-4 py-3 text-sm"
              download
            >
              {t.nav.cv}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
