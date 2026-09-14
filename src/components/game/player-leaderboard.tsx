import { Crown } from "lucide-react";
import { GoldPanel } from "@/components/game/game-panel";
import { gamePlayers } from "@/lib/game-mock";
import { cn } from "@/lib/utils";

export function PlayerLeaderboard({ selected, onSelect }: { selected: number | null; onSelect: (rank: number) => void }) {
  return (
    <GoldPanel className="w-[280px] p-4">
      <h2 className="font-brand text-lg font-bold tracking-[0.14em] text-gold">PLAYERS</h2>
      <div className="mt-3 grid grid-cols-[24px_1fr_44px_36px] items-center gap-2 border-b border-panel-border pb-2 text-[11px] uppercase tracking-wider text-muted-foreground">
        <span>#</span><span>Player</span><span className="text-right">Army</span><span className="text-right">Land</span>
      </div>
      <ul>
        {gamePlayers.map((p) => (
          <li key={p.name}>
            <button
              onClick={() => onSelect(p.rank)}
              className={cn(
                "grid w-full grid-cols-[24px_1fr_44px_36px] items-center gap-2 rounded-sm border-b border-panel-border/60 px-1 py-2 text-left text-sm transition-colors hover:bg-primary/10",
                p.you && "bg-primary/15",
                selected === p.rank && "ring-1 ring-inset ring-gold/70",
              )}
            >
              <span className={cn("font-semibold", p.you ? "text-primary" : "text-muted-foreground")}>{p.rank}</span>
              <span className="flex min-w-0 items-center gap-2">
                {p.you ? <Crown className="size-4 shrink-0 fill-primary text-primary" /> : null}
                <span className="size-3 shrink-0 rounded-full ring-1 ring-black/40" style={{ background: p.colour }} />
                <span className="truncate font-semibold text-foreground">{p.name}</span>
                {p.you ? <span className="text-xs text-success">(You)</span> : null}
              </span>
              <span className="text-right font-semibold tabular-nums text-foreground">{p.army}</span>
              <span className="text-right tabular-nums text-muted-foreground">{p.land}</span>
            </button>
          </li>
        ))}
      </ul>
    </GoldPanel>
  );
}
