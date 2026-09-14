import { Crown } from "lucide-react";
import { buildBattlefield, gamePlayers, MAP_SIZE } from "@/lib/game-mock";
import { cn } from "@/lib/utils";

const tiles = buildBattlefield();

export function BattlefieldGrid({ selected, onSelect }: { selected: number | null; onSelect: (index: number) => void }) {
  return (
    <div
      className="grid aspect-square w-full max-w-[min(660px,calc(100vh-190px))] bg-tile-line"
      style={{ gridTemplateColumns: `repeat(${MAP_SIZE}, minmax(0, 1fr))`, gap: "1px", padding: "1px" }}
      role="grid"
      aria-label="Battlefield"
    >
      {tiles.map((tile, index) => {
        const owner = "owner" in tile ? gamePlayers[tile.owner] : undefined;
        return (
          <button
            key={index}
            role="gridcell"
            aria-label={`Tile ${index + 1}`}
            onClick={() => onSelect(index)}
            className={cn(
              "relative flex items-center justify-center text-[11px] font-bold leading-none text-tile-ink transition-[filter]",
              tile.kind === "empty" && "bg-tile hover:brightness-95",
              tile.kind === "mountain" && "bg-tile-mountain",
              tile.kind === "city" && "bg-tile-city text-background",
              tile.kind === "general" && "hover:brightness-110",
              selected === index && "z-10 outline-2 outline-gold",
            )}
            style={owner ? { background: owner.colour } : undefined}
          >
            {tile.kind === "mountain" ? <MountainGlyph /> : null}
            {tile.kind === "city" ? (
              <>
                <CastleGlyph />
                <span className="relative z-10 text-primary-foreground">{tile.army}</span>
              </>
            ) : null}
            {tile.kind === "general" ? <Crown className="size-3.5 fill-primary-foreground text-primary-foreground drop-shadow" /> : null}
          </button>
        );
      })}
    </div>
  );
}

function MountainGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 text-tile-ink/70">
      <path d="M2 19 L9 7 L13 13 L16 9 L22 19 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function CastleGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="absolute inset-0 size-full text-tile/60">
      <path d="M4 20 V9 h2 V6 h2 v3 h2 V5 h4 v4 h2 V6 h2 v3 h2 v11 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
