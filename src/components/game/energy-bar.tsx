import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function EnergyBar({ energy, max = 100 }: { energy: number; max?: number }) {
  const pct = Math.max(4, Math.round((energy / max) * 100));
  const low = energy < max * 0.35;
  return (
    <div className="rounded-md border border-panel-border bg-background/50 p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Commander Energy</span>
        <span className="text-lg font-bold text-foreground">
          {energy} <span className="text-sm font-normal text-muted-foreground">/ {max}</span>
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Zap className={cn("size-5 shrink-0", low ? "text-gold" : "text-primary")} />
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className={cn("h-full rounded-full transition-[width] duration-500", low ? "bg-gold" : "bg-primary shadow-game")}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      {low ? <p className="mt-2 text-xs text-gold">Low energy — complete a challenge to recharge.</p> : null}
    </div>
  );
}
