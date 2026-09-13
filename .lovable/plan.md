# GENERALS high-fidelity frontend prototype

## Goal
Build a desktop-first, frontend-only GENERALS prototype that closely matches the four supplied screens and extends the same visual system into one mock gameplay screen. All data and interactions remain local; no backend, authentication, matchmaking, or game logic will be added.

## Pages and flow
- `/` redirects to `/home`.
- `/home`: cinematic faction battlefield, gold GENERALS identity, primary actions, and the three-part status strip from the reference.
- `/player-details`: centered details panel over the battlefield, with editable name and Codeforces handle saved to `localStorage` after Continue.
- `/play`: create-room controls, join-code row, and a dense mock available-rooms table matching the reference proportions.
- `/waiting-room`: room identity, code copy action, 12-slot player list, chat, settings summary, Ready toggle, disabled/enabled Start Game state, and Leave Room.
- `/game`: dominant mock battlefield with compact HUD, leaderboard, movement controls, notifications, chat access, and a Commander panel containing energy, challenges, abilities, and game-over presentation.
- Header navigation and primary buttons connect the full prototype flow. “How to Play” opens a styled modal instead of adding an unrequested route.

## Visual system and assets
- Define the full dark navy, cold blue, warm red, gold, green status, danger red, border, overlay, and shadow system as semantic `oklch` tokens in `src/styles.css`.
- Load a condensed display face for the gold wordmark and a clean sans-serif for interface copy; retain the strong serif-like game-title treatment through a dedicated brand style.
- Generate original local cinematic battlefield artwork that mirrors the screenshots’ blue-left/red-right composition, silhouettes, flags, castle, mountains, and forests without embedding the screenshots themselves.
- Create reusable branded crown, faction flag, gold-line, and battlefield embellishments as source-controlled SVG/UI assets where illustration precision benefits from vector treatment.
- Match the references’ compact radius, translucent panels, fine blue-gray borders, restrained glows, strong blue CTAs, green online indicators, and red destructive controls.

## Component structure
- **Shell:** `GameHeader`, `GameFooter`, `GeneralsBrand`, `BattlefieldBackdrop`, `StatusIndicator`.
- **Primitives:** reusable `Button`, `Panel/Card`, `Input`, `Select`, `Slider`, `Toggle`, `Badge`, and `Modal` variants built on the existing component library.
- **Play:** `CreateRoomPanel`, `ColourPicker`, `RoomTable`, `RoomCard` for compact/mobile layouts.
- **Waiting room:** `PlayerCard`, `PlayerList`, `ChatPanel`, `RoomSettingsPanel`.
- **Gameplay:** `GameHud`, `BattlefieldGrid`, `Leaderboard`, `CommanderPanel`, `EnergyBar`, `AbilityCard`, `ChallengePanel`, `NotificationStack`, `GameOverModal`.
- Keep room, player, challenge, ability, leaderboard, and terrain display data in a dedicated mock-data module.

## Interaction details
- Persist only player name and Codeforces handle under one namespaced `localStorage` key; hydrate after mount to avoid rendering mismatch.
- Sliders, selects, colour choices, modifiers, join code, room creation, mock chat, copy feedback, Ready state, challenge tabs, ability states, map selections, and game-over modal are interactive client-side demonstrations.
- Buttons include hover, pressed, focus, disabled, and short loading feedback where an action implies transition.
- Start Game becomes available when the local player is ready, while remaining clearly presented as prototype behavior.

## Responsive and visual QA
- Optimize geometry first for 1920×1080, 1440×900, 1366×768, and 1280×720.
- At smaller widths, preserve visual hierarchy while stacking control regions and converting dense tables into scannable room cards.
- Compare `/home`, `/player-details`, `/play`, and `/waiting-room` against their matching screenshots for framing, panel dimensions, spacing, text scale, action sizing, and footer alignment.
- Validate all routes and interactions in the browser at desktop and mobile widths, then inspect for clipping, overlap, missing assets, console errors, and broken navigation.

## Project handoff
- Add a concise prototype guide covering component structure, route structure, styling decisions, generated/vector assets, mock-data shape, localStorage behavior, known visual approximations, and run commands.
