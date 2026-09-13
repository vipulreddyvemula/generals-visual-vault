# GENERALS UI Prototype

Frontend-only React, TypeScript, and Tailwind prototype. The workspace uses TanStack Start; the page and component modules are intentionally framework-light for direct porting into Next.js App Router.

## Routes
- `/home` cinematic landing page
- `/player-details` local player profile
- `/play` room creation and room browser
- `/waiting-room` lobby, chat, ready flow
- `/game` mock tactical battlefield

## Structure
- `src/components/generals-ui.tsx`: shared shell, brand, panels, header, footer, modal, backdrop
- `src/components/ui`: reusable controls and variants
- `src/lib/mock-data.ts`: rooms, players, colours, leaderboard
- `src/routes`: one page per route
- `src/assets/generals-battlefield.jpg`: original generated cinematic art

## Styling
Semantic OKLCH tokens in `src/styles.css` drive dark navy surfaces, faction blue/red, gold branding, green status, danger red, borders, shadows, and typography. The generated artwork approximates the references; exact original character and emblem artwork was unavailable.

## Local storage
`generals.player-profile` stores only the player name and Codeforces handle after Continue. No authentication or persistence service exists.

## Run
```bash
bun install
bun run dev
```