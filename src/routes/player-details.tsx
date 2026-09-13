import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Code2, Home, User } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { BattlefieldBackdrop, GeneralsBrand, Ornament, PageFrame, Panel } from "@/components/generals-ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "generals.player-profile";
export const Route = createFileRoute("/player-details")({
  head: () => ({ meta: [{ title: "Player Details — GENERALS" }, { name: "description", content: "Set your player identity before entering GENERALS." }, { property: "og:title", content: "Player Details — GENERALS" }, { property: "og:description", content: "Set your player identity before entering GENERALS." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: PlayerDetails,
});

function PlayerDetails() {
  const navigate = useNavigate({ from: "/player-details" });
  const [name, setName] = useState(""); const [handle, setHandle] = useState(""); const [loading, setLoading] = useState(false);
  useEffect(() => { try { const saved = localStorage.getItem(STORAGE_KEY); if (saved) { const profile = JSON.parse(saved) as {name?: string; handle?: string}; setName(profile.name ?? ""); setHandle(profile.handle ?? ""); } } catch {} }, []);
  const submit = (event: FormEvent) => { event.preventDefault(); setLoading(true); localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, handle })); window.setTimeout(() => navigate({to:"/play"}), 350); };
  return <PageFrame><BattlefieldBackdrop><main className="mx-auto flex min-h-[calc(100vh-129px)] max-w-[1536px] flex-col items-center justify-center px-5 py-8"><Ornament/><h1 className="mt-3"><GeneralsBrand large /></h1><p className="mt-1 font-serif text-xl sm:text-2xl">Strategy. Territory. Victory.</p><Panel className="mt-7 w-full max-w-[560px] p-7 sm:p-10"><header className="text-center"><h2 className="text-2xl font-bold">Enter Your Details</h2><p className="mt-1 text-sm text-muted-foreground">Set your identity to join the battlefield.</p></header><form onSubmit={submit} className="mt-7 space-y-6"><label className="block"><span className="mb-2 flex items-center gap-3 text-sm font-semibold"><User className="size-4"/>Your Name</span><Input value={name} onChange={e=>setName(e.target.value)} required placeholder="Enter your name" className="h-12 bg-background/40"/><small className="mt-2 block text-muted-foreground">This will be shown to other players in the room.</small></label><label className="block"><span className="mb-2 flex items-center gap-3 text-sm font-semibold"><Code2 className="size-4"/>Codeforces Handle</span><Input value={handle} onChange={e=>setHandle(e.target.value)} placeholder="Enter your Codeforces handle (e.g. tourist)" className="h-12 bg-background/40"/><small className="mt-2 block text-muted-foreground">Used for tournament verification.</small></label><Button type="submit" variant="game" className="w-full" disabled={loading}>{loading ? "Entering…" : <>Continue <ArrowRight/></>}</Button><div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border"/>or<span className="h-px flex-1 bg-border"/></div><Button asChild variant="gameOutline" className="w-full"><Link to="/home"><Home/>Back to Home</Link></Button></form></Panel></main></BattlefieldBackdrop></PageFrame>;
}