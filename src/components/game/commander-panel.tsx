import { Code2, ExternalLink, Puzzle, Swords } from "lucide-react";
import { useState } from "react";
import { AbilityCard } from "@/components/game/ability-card";
import { EnergyBar } from "@/components/game/energy-bar";
import { GoldPanel } from "@/components/game/game-panel";
import { StatusIndicator } from "@/components/generals-ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { abilities, codeforcesChallenge, mathChallenge } from "@/lib/game-mock";
import { cn } from "@/lib/utils";

export function CommanderPanel({ energy, onEnergy, onNotify }: { energy: number; onEnergy: (value: number) => void; onNotify: (message: string) => void }) {
  const [tab, setTab] = useState<"challenges" | "abilities">("challenges");

  return (
    <GoldPanel className="flex w-[400px] flex-col overflow-hidden p-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-brand text-2xl font-bold tracking-[0.08em] text-gold">COMMANDER</h2>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Tactical Uplink</p>
        </div>
        <StatusIndicator label="ONLINE" />
      </div>

      <div className="mt-4">
        <EnergyBar energy={energy} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3" role="tablist">
        <TabButton active={tab === "challenges"} onClick={() => setTab("challenges")} icon={<Puzzle className="size-4" />} label="CHALLENGES" />
        <TabButton active={tab === "abilities"} onClick={() => setTab("abilities")} icon={<Swords className="size-4" />} label="ABILITIES" />
      </div>

      <div className="mt-4 flex-1 overflow-y-auto pr-1">
        {tab === "challenges" ? (
          <div className="space-y-3">
            <MathChallenge onSolved={() => { onEnergy(Math.min(100, energy + 30)); onNotify("Math challenge verified — +30 energy."); }} />
            <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
              <span className="h-px flex-1 bg-panel-border" />OR<span className="h-px flex-1 bg-panel-border" />
            </div>
            <CodeforcesChallenge onVerify={() => onNotify("No accepted submission found yet.")} />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {abilities.map((a) => (
              <AbilityCard key={a.name} ability={a} energy={energy} onUse={(name) => { onEnergy(Math.max(0, energy - a.cost)); onNotify(`${name} deployed.`); }} />
            ))}
          </div>
        )}
      </div>
    </GoldPanel>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 rounded-md border py-3 text-xs font-bold tracking-[0.12em] transition-colors",
        active ? "border-primary bg-primary/20 text-foreground shadow-game" : "border-panel-border bg-background/40 text-muted-foreground hover:text-foreground",
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function MathChallenge({ onSolved }: { onSolved: () => void }) {
  const [value, setValue] = useState("");
  const [state, setState] = useState<"idle" | "wrong" | "solved">("idle");

  return (
    <section className="rounded-md border border-primary/40 bg-background/45 p-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-bold tracking-[0.1em] text-foreground">
          <Puzzle className="size-4 text-primary" />MATH CHALLENGE
        </h3>
        <span className="rounded-sm border border-success/50 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-success">AVAILABLE</span>
      </div>
      <p className="mt-3 text-base font-semibold text-foreground">{mathChallenge.question}</p>
      <Input
        value={value}
        onChange={(e) => { setValue(e.target.value); setState("idle"); }}
        placeholder="Enter your answer..."
        aria-label="Math challenge answer"
        className="mt-3 h-11 bg-background/70"
      />
      <Button
        variant="game"
        className="mt-3 w-full"
        disabled={!value.trim() || state === "solved"}
        onClick={() => {
          if (value.trim() === mathChallenge.answer) { setState("solved"); onSolved(); } else setState("wrong");
        }}
      >
        {state === "solved" ? "Verified" : "Verify Answer"}
      </Button>
      {state === "wrong" ? <p className="mt-2 text-xs text-danger">Incorrect — try again.</p> : null}
      {state === "solved" ? <p className="mt-2 text-xs text-success">Correct. Energy restored.</p> : null}
    </section>
  );
}

function CodeforcesChallenge({ onVerify }: { onVerify: () => void }) {
  return (
    <section className="rounded-md border border-panel-border bg-background/45 p-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-bold tracking-[0.1em] text-foreground">
          <Code2 className="size-4 text-primary" />CODEFORCES CHALLENGE
        </h3>
        <span className="rounded-sm border border-success/50 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-success">AVAILABLE</span>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-md border border-panel-border bg-secondary/40 px-3 py-2.5">
        <div>
          <p className="text-xs text-muted-foreground">{codeforcesChallenge.id}</p>
          <p className="text-base font-semibold text-foreground">{codeforcesChallenge.name}</p>
        </div>
        <a
          href={codeforcesChallenge.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-gold"
        >
          <ExternalLink className="size-4" />Open in Codeforces
        </a>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Solve on Codeforces using your handle.
        <br />Get Accepted, then verify.
      </p>
      <Button variant="game" className="mt-3 w-full" onClick={onVerify}>Verify Solution</Button>
    </section>
  );
}
