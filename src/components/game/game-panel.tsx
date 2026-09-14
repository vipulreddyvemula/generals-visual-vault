import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Dark translucent panel with gold corner brackets, matching the GENERALS identity. */
export function GoldPanel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("relative rounded-lg border border-gold/35 bg-panel-strong/85 shadow-[0_18px_60px_-25px_rgb(0_0_0/0.9)] backdrop-blur-md", className)}>
      <Corner className="left-0 top-0 border-l-2 border-t-2 rounded-tl-lg" />
      <Corner className="right-0 top-0 border-r-2 border-t-2 rounded-tr-lg" />
      <Corner className="bottom-0 left-0 border-b-2 border-l-2 rounded-bl-lg" />
      <Corner className="bottom-0 right-0 border-b-2 border-r-2 rounded-br-lg" />
      {children}
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return <span aria-hidden className={cn("pointer-events-none absolute size-4 border-gold/80", className)} />;
}
