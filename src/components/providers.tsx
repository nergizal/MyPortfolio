"use client";

import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/i18n/context";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { CommandPalette } from "@/components/command-palette";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <I18nProvider>
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette />
          <Toaster
            theme="system"
            position="bottom-center"
            toastOptions={{
              className: "font-sans",
            }}
          />
          {children}
        </SmoothScroll>
      </I18nProvider>
    </ThemeProvider>
  );
}
