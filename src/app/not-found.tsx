"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <main
      id="main"
      className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-28 text-center"
    >
      <p className="font-mono text-xs tracking-[0.24em] text-accent-2 uppercase">
        404
      </p>
      <h1 className="font-display mt-4 text-[clamp(2.4rem,8vw,5.5rem)] leading-[0.95] font-semibold">
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">{t.notFound.body}</p>
      <Button asChild variant="accent" className="mt-8">
        <Link href="/">{t.notFound.home}</Link>
      </Button>
    </main>
  );
}
