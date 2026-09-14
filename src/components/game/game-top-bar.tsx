import { Check, Copy, Flag, Hourglass, Settings, Signal } from "lucide-react";
import { useState } from "react";
import { GeneralsBrand, StatusIndicator } from "@/components/generals-ui";
import { Button } from "@/components/ui/button";
import { matchInfo } from "@/lib/game-mock";

export function GameTopBar({ onSurrender }: { onSurrender: () => void }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    void navigator.clipboard?.writeText(matchInfo.room);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <header className="relative z-30 flex h-[76px] shrink-0 items-center gap-4 px-5">
      <GeneralsBrand />

      <div className="ml-2 rounded-md border border-panel-border bg-panel-strong/80 px-4 py-2 backdrop-blur-md">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          Room: {matchInfo.room}
          <button onClick={copy} aria-label="Copy room name" className="text-muted-foreground transition-colors hover:text-gold">
            {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
          </button>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Map: {matchInfo.map} <span className="mx-1 text-border">|</span> Speed: {matchInfo.speed}
        </p>
      </div>

      <div className="relative mx-auto flex h-[70px] min-w-[290px] flex-col items-center justify-center rounded-b-2xl border-x border-b border-gold/45 bg-gradient-to-b from-panel-strong to-background/85 px-10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Hourglass className="size-5 text-gold" />
          <span className="font-brand text-2xl font-bold tracking-wide text-foreground">Turn {matchInfo.turn}</span>
        </div>
        <span className="text-xl font-bold tabular-nums text-primary">{matchInfo.clock}</span>
        <span aria-hidden className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-b border-r border-gold/60 bg-background" />
      </div>

      <div className="flex items-center gap-5 rounded-md border border-panel-border bg-panel-strong/80 px-5 py-2.5 backdrop-blur-md">
        <StatusIndicator />
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Signal className="size-4 text-success" />
          {matchInfo.latency}
        </span>
      </div>

      <Button variant="gameOutline" size="icon" aria-label="Match settings" className="size-12 shrink-0">
        <Settings className="size-5" />
      </Button>
      <Button variant="danger" onClick={onSurrender} className="shrink-0 gap-2">
        <Flag className="size-4" />
        Surrender
      </Button>
    </header>
  );
}
