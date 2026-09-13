import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Crown, Gamepad2, Home, Server, Swords, Users } from "lucide-react";
import type { ReactNode } from "react";
import battlefield from "@/assets/generals-battlefield.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function GeneralsBrand({ large = false }: { large?: boolean }) {
  return <div className={cn("brand-gold font-black leading-none", large ? "text-5xl sm:text-7xl lg:text-8xl" : "text-2xl lg:text-3xl")}>GENERALS</div>;
}

export function StatusIndicator({ label = "Server Online" }: { label?: string }) {
  return <span className="inline-flex items-center gap-2 text-sm text-success"><span className="size-2.5 rounded-full bg-success shadow-[0_0_12px_var(--success)]" />{label}</span>;
}

function RulesDialog({ children }: { children: ReactNode }) {
  return <Dialog><DialogTrigger asChild>{children}</DialogTrigger><DialogContent className="panel-surface border-panel-border bg-panel-strong sm:max-w-xl"><DialogHeader><DialogTitle className="font-brand text-2xl text-gold">How to Play</DialogTitle><DialogDescription className="text-muted-foreground">Claim territory, grow your army, and capture enemy generals.</DialogDescription></DialogHeader><div className="grid gap-3 text-sm text-foreground"><p><b className="text-gold">1. Expand.</b> Select a territory, then choose an adjacent tile.</p><p><b className="text-gold">2. Command.</b> Armies increase each turn. Move all or half your forces.</p><p><b className="text-gold">3. Conquer.</b> Capture the opposing general while defending your own.</p></div></DialogContent></Dialog>;
}

export function GameHeader() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const nav = [{ to: "/home", label: "Home", icon: Home }, { to: "/play", label: "Play", icon: Gamepad2 } ] as const;
  return <header className="relative z-40 h-16 border-b border-border bg-background/95 px-5 backdrop-blur-xl lg:px-12"><div className="mx-auto flex h-full max-w-[1536px] items-center justify-between"><Link to="/home" aria-label="GENERALS home"><GeneralsBrand /></Link><nav className="absolute left-1/2 hidden h-full -translate-x-1/2 items-center gap-9 md:flex">{nav.map(({to,label,icon:Icon}) => <Link key={to} to={to} className={cn("relative flex h-full items-center gap-2 text-muted-foreground transition-colors hover:text-foreground", path===to && "text-foreground after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-t-sm after:bg-primary")}><Icon className="size-5" />{label}</Link>)}<RulesDialog><button className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"><BookOpen className="size-5" />How to Play</button></RulesDialog></nav><div className="flex items-center gap-5"><span className="hidden sm:inline-flex"><StatusIndicator /></span><Button asChild variant="game" className="h-10"><Link to="/player-details">Join Game</Link></Button></div></div></header>;
}

export function GameFooter({ stats = false }: { stats?: boolean }) {
  return <footer className="relative z-10 border-t border-border bg-background/95 px-6 py-5"><div className="mx-auto flex max-w-[1536px] flex-wrap items-center justify-between gap-5"><div className="flex items-center gap-5"><GeneralsBrand /><span className="hidden h-7 w-px bg-border sm:block" /><span className="text-xs text-muted-foreground">Strategy. Territory. Victory.</span></div>{stats ? <div className="flex items-center gap-8 text-xs text-muted-foreground"><span className="flex items-center gap-2"><Users className="size-5 text-success"/><b className="text-foreground">42</b> Players Online</span><span className="flex items-center gap-2"><Gamepad2 className="size-5 text-primary"/><b className="text-foreground">8</b> Active Rooms</span><StatusIndicator /></div> : <span className="text-xs text-muted-foreground">v1.0.0</span>}</div></footer>;
}

export function BattlefieldBackdrop({ compact = false, children }: { compact?: boolean; children?: ReactNode }) {
  return <div className={cn("relative overflow-hidden", compact ? "min-h-36" : "min-h-[calc(100vh-64px)]")}><img src={battlefield} width={1920} height={1080} alt="Blue and red armies facing across a mountain battlefield" className="absolute inset-0 size-full object-cover object-center"/><div className="battlefield-vignette absolute inset-0"/><div className="relative z-10">{children}</div></div>;
}

export function Ornament() { return <div className="flex items-center justify-center gap-3 text-gold"><span className="h-px w-24 bg-gold/70"/><Crown className="size-8 fill-gold/25"/><span className="h-px w-24 bg-gold/70"/></div>; }

export function Panel({ className, children }: { className?: string; children: ReactNode }) { return <section className={cn("panel-surface rounded-lg", className)}>{children}</section>; }

export function PageFrame({ children, footerStats = false }: { children: ReactNode; footerStats?: boolean }) { return <div className="min-h-screen bg-background text-foreground"><GameHeader />{children}<GameFooter stats={footerStats}/></div>; }

export function MiniStat({ icon, label, value, detail, green = false }: { icon: ReactNode; label: string; value: string; detail: string; green?: boolean }) { return <div className="flex min-w-0 flex-1 items-center justify-center gap-5 px-5 py-5"><div className={cn("text-primary", green && "text-success")}>{icon}</div><div><div className="text-sm text-muted-foreground">{label}</div><div className={cn("mt-1 text-2xl font-bold", green && "text-success")}>{value}</div><div className="mt-1 text-xs text-muted-foreground">{detail}</div></div></div>; }

export function PageTitle({ title, subtitle }: { title: string; subtitle: string }) { return <div className="relative z-10 py-4 text-center"><h1 className="brand-gold text-5xl font-black lg:text-6xl">{title}</h1><div className="mx-auto my-1 h-px w-40 bg-gold/70"/><p className="text-muted-foreground">{subtitle}</p></div>; }

export const uiIcons = { Server, Swords };