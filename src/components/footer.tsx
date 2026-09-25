"use client";

import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p className="mt-2 font-mono tracking-wide">{t.footer.built}</p>
    </footer>
  );
}
