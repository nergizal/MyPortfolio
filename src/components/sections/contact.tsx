"use client";

import { useState } from "react";
import { toast } from "sonner";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { copyToClipboard } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const { t } = useI18n();
  const [pending, setPending] = useState(false);
  const [copied, setCopied] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("fail");
      toast.success(t.contact.success);
      form.reset();
    } catch {
      toast.error(t.contact.error);
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.22em] text-accent-2 uppercase">
          {t.contact.kicker}
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] font-semibold">
          {t.contact.title}
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">{t.contact.subtitle}</p>
      </Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="sr-only" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm">
              {t.contact.name}
            </label>
            <Input id="name" name="name" required minLength={2} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm">
              {t.contact.email}
            </label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm">
              {t.contact.message}
            </label>
            <Textarea id="message" name="message" required minLength={12} />
          </div>
          <Button type="submit" variant="accent" disabled={pending}>
            {pending ? t.contact.sending : t.contact.send}
          </Button>
        </form>
        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={async () => {
                await copyToClipboard(site.email);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              }}
            >
              {copied ? t.contact.copied : t.contact.copy}
            </Button>
            <Button asChild variant="outline">
              <a href={site.github.href} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.linkedin.href} target="_blank" rel="noreferrer">
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="font-mono text-sm text-muted-foreground">{site.email}</p>
        </div>
      </div>
    </section>
  );
}
