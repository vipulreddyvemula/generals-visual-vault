import { Crosshair, Plane, Radar, Shield, Swords, Zap } from "lucide-react";
import type { Ability } from "@/lib/game-mock";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const icons = { scout: Radar, blitz: Swords, reinforce: Shield, fortify: Crosshair, airstrike: Plane, supply: Zap };

const stateStyles: Record<Ability["state"], string> = {
  AVAILABLE: "border-success/50 text-success",
  LOCKED: "border-border text-muted-foreground",
  COOLDOWN: "border-gold/50 text-gold",
};

export function AbilityCard({ ability, energy, onUse }: { ability: Ability; energy: number; onUse: (name: string) => void }) {
  const Icon = icons[ability.icon];
  const affordable = energy >= ability.cost;
  const usable = ability.state === "AVAILABLE" && affordable;
  return (
    <div
      className={cn(
        "rounded-md border border-panel-border bg-background/45 p-3",
        ability.state === "LOCKED" && "opacity-60",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="flex items-center gap-2 font-semibold text-foreground">
          <Icon className={cn("size-4", ability.state === "AVAILABLE" ? "text-primary" : "text-muted-foreground")} />
          {ability.name}
        </span>
        <span className={cn("rounded-sm border px-1.5 py-0.5 text-[10px] font-bold tracking-wider", stateStyles[ability.state])}>
          {ability.state}
        </span>
      </div>
      <p className="mt-2 min-h-8 text-xs leading-relaxed text-muted-foreground">{ability.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs font-semibold text-gold">
          <Zap className="size-3.5" />
          {ability.cost}
        </span>
        <Button size="sm" variant={usable ? "game" : "gameOutline"} disabled={!usable} className="h-8 px-4 text-xs" onClick={() => onUse(ability.name)}>
          {ability.state === "COOLDOWN" ? ability.cooldown : ability.state === "LOCKED" ? "Locked" : affordable ? "Use" : "Low energy"}
        </Button>
      </div>
    </div>
  );
}
