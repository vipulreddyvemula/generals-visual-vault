// Mock data for the GENERALS gameplay prototype. No real game logic.

export type GamePlayer = {
  rank: number;
  name: string;
  colour: string; // hex, the 12-colour player system
  army: number;
  land: number;
  you?: boolean;
};

/** The GENERALS 12-colour player system. */
export const playerColours = [
  "#3b82f6", "#ef4444", "#22c55e", "#facc15", "#a855f7", "#f97316",
  "#22d3ee", "#f472b6", "#a16207", "#e2e8f0", "#64748b", "#111827",
] as const;

export const gamePlayers: GamePlayer[] = [
  { rank: 1, name: "Goose", colour: playerColours[6], army: 40, land: 3, you: true },
  { rank: 2, name: "Maverick", colour: playerColours[1], army: 38, land: 1 },
  { rank: 3, name: "Phoenix", colour: playerColours[2], army: 28, land: 5 },
  { rank: 4, name: "Shadow", colour: playerColours[3], army: 24, land: 4 },
  { rank: 5, name: "Reaper", colour: playerColours[4], army: 19, land: 2 },
  { rank: 6, name: "Titan", colour: playerColours[5], army: 16, land: 3 },
  { rank: 7, name: "Nova", colour: playerColours[0], army: 12, land: 2 },
  { rank: 8, name: "Vortex", colour: playerColours[7], army: 11, land: 1 },
];

export const matchInfo = {
  room: "Warzone Alpha",
  map: "20 × 20",
  speed: "Normal",
  turn: 37,
  clock: "00:42",
  latency: "32 ms",
};

export type Tile =
  | { kind: "empty" }
  | { kind: "mountain" }
  | { kind: "city"; army: number }
  | { kind: "general"; owner: number }
  | { kind: "owned"; owner: number; army: number };

export const MAP_SIZE = 20;

/** Deterministic pseudo-random battlefield so the prototype renders identically. */
export function buildBattlefield(): Tile[] {
  let seed = 20260914;
  const rand = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const tiles: Tile[] = Array.from({ length: MAP_SIZE * MAP_SIZE }, () => {
    const r = rand();
    if (r < 0.1) return { kind: "mountain" } as Tile;
    if (r < 0.135) return { kind: "city", army: 35 + Math.floor(rand() * 20) } as Tile;
    return { kind: "empty" } as Tile;
  });
  tiles[4 * MAP_SIZE + 15] = { kind: "general", owner: 0 };
  tiles[4 * MAP_SIZE + 4] = { kind: "general", owner: 1 };
  return tiles;
}

export type Ability = {
  name: string;
  description: string;
  cost: number;
  state: "AVAILABLE" | "LOCKED" | "COOLDOWN";
  icon: "scout" | "blitz" | "reinforce" | "fortify" | "airstrike" | "supply";
  cooldown?: string;
};

export const abilities: Ability[] = [
  { name: "Scout", description: "Reveal a 3 × 3 area of the fog.", cost: 20, state: "AVAILABLE", icon: "scout" },
  { name: "Blitz", description: "Double movement speed for one turn.", cost: 35, state: "AVAILABLE", icon: "blitz" },
  { name: "Reinforce", description: "Add 25 army to your general.", cost: 40, state: "COOLDOWN", icon: "reinforce", cooldown: "3 turns" },
  { name: "Fortify", description: "Halve incoming damage on one tile.", cost: 30, state: "AVAILABLE", icon: "fortify" },
  { name: "Airstrike", description: "Remove 15 army from an enemy tile.", cost: 60, state: "LOCKED", icon: "airstrike" },
  { name: "Supply Surge", description: "Instantly gain 20 commander energy.", cost: 25, state: "LOCKED", icon: "supply" },
];

export const mathChallenge = { question: "What is 17 × 23?", answer: "391" };
export const codeforcesChallenge = { id: "#4A", name: "Watermelon", url: "https://codeforces.com/problemset/problem/4/A" };

export const chatMessages = [
  { author: "Maverick", colour: playerColours[1], text: "Watch the north cities." },
  { author: "Phoenix", colour: playerColours[2], text: "Taking the middle, cover me." },
  { author: "Goose", colour: playerColours[6], text: "On it — moving half." },
];
