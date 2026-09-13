export const teamColours = [
  ["Blue", "bg-blue-500"], ["Red", "bg-red-500"], ["Green", "bg-emerald-500"],
  ["Yellow", "bg-yellow-300"], ["Purple", "bg-purple-500"], ["Orange", "bg-orange-500"],
  ["Cyan", "bg-cyan-400"], ["Pink", "bg-pink-400"], ["Brown", "bg-amber-700"],
  ["White", "bg-slate-100"], ["Gray", "bg-slate-500"], ["Black", "bg-neutral-950"],
] as const;

export const rooms = [
  { name: "Battlefield 1", colours: ["bg-red-500", "bg-blue-500"], players: "1 / 2", size: "20 × 20", speed: "Normal", terrain: "0.3 / 0.2 / 0.2", status: "Waiting" },
  { name: "Strategy Room", colours: ["bg-red-500", "bg-blue-500", "bg-emerald-500"], players: "2 / 3", size: "25 × 25", speed: "Fast", terrain: "0.4 / 0.1 / 0.1", status: "In Game" },
  { name: "Campus Clash", colours: ["bg-yellow-300", "bg-purple-500"], players: "1 / 2", size: "30 × 30", speed: "Normal", terrain: "0.2 / 0.3 / 0.2", status: "Waiting" },
  { name: "No Mercy", colours: ["bg-red-500", "bg-yellow-300", "bg-emerald-500"], players: "2 / 3", size: "15 × 15", speed: "Fast", terrain: "0.5 / 0.3 / 0.1", status: "Waiting" },
  { name: "Tactical", colours: ["bg-blue-500", "bg-red-500", "bg-cyan-400", "bg-yellow-300"], players: "3 / 4", size: "20 × 20", speed: "Normal", terrain: "0.3 / 0.3 / 0.3", status: "In Game" },
  { name: "Final Stand", colours: ["bg-cyan-400", "bg-pink-400"], players: "1 / 2", size: "25 × 25", speed: "Slow", terrain: "0.2 / 0.4 / 0.2", status: "Waiting" },
  { name: "Open Room", colours: ["bg-orange-500", "bg-slate-100", "bg-slate-400"], players: "2 / 3", size: "30 × 30", speed: "Normal", terrain: "0.3 / 0.2 / 0.3", status: "Waiting" },
  { name: "Let’s Play", colours: ["bg-purple-500"], players: "1 / 2", size: "20 × 20", speed: "Normal", terrain: "0.4 / 0.1 / 0.4", status: "Waiting" },
];

export const waitingPlayers = [
  { slot: 1, name: "Vipul", colour: "bg-blue-500", host: true },
  { slot: 2, name: "Arjun", colour: "bg-red-500", host: false },
];

export const leaderboard = [
  { rank: 1, name: "Vipul", land: 38, army: 126, colour: "bg-blue-500" },
  { rank: 2, name: "Arjun", land: 31, army: 104, colour: "bg-red-500" },
  { rank: 3, name: "Northwatch", land: 19, army: 72, colour: "bg-emerald-500" },
  { rank: 4, name: "Iron Vale", land: 12, army: 48, colour: "bg-yellow-300" },
];