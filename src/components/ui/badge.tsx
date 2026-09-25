import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
