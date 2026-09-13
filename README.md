# Generals UI Reference

# GENERALS — HIGH-FIDELITY UI PROTOTYPE ONLY

I am giving you four reference screenshots for a game called:

GENERALS

These screenshots define the visual identity and UI direction that

I want for the project.

IMPORTANT:

THIS IS A UI/UX PROTOTYPE TASK ONLY.

Do NOT build:

- backend

- multiplayer networking

- Socket.IO

- authentication

- database

- game engine

- game logic

- combat logic

- map generation

- Codeforces API

- Math judging

- tournament system

- real matchmaking

- real persistence

I only want you to generate the FRONTEND UI and interactions so that

I can later use your code/design as a reference and port it into my

existing Generals application.

============================================================

REFERENCE IMAGES

============================================================

I have provided four reference screenshots:

1. Player Details

2. Play / Create Room / Join Room

3. Waiting Room

4. Home / Landing Page

These screenshots are the PRIMARY VISUAL SOURCE OF TRUTH.

Do NOT treat them as loose inspiration.

Reproduce their:

- visual language

- layout

- proportions

- spacing

- typography

- colours

- cards

- buttons

- navigation

- backgrounds

- gradients

- borders

- shadows

- icons

- footer

- hierarchy

as closely as possible.

============================================================

DESIGN GOAL

============================================================

I want the entire application to feel like one polished,

professional strategy game website.

The visual identity should be:

- dark

- premium

- cinematic

- military/fantasy

- polished

- modern

- clean

- desktop-first

The reference design uses:

- dark navy/black base

- blue/cold faction atmosphere

- red/warm faction atmosphere

- gold GENERALS branding

- gold crown/emblem

- blue primary actions

- green status indicators

- red danger/destructive states

- dark translucent cards

- subtle borders

- restrained gradients

- elegant typography

- rounded panels

- subtle shadows

Do NOT replace this with:

- generic SaaS UI

- generic dashboard UI

- generic cyberpunk UI

- excessive neon

- random gradients

- unrelated fantasy art

- default Bootstrap styling

============================================================

IMPORTANT ASSET REQUIREMENT

============================================================

The screenshots contain distinctive visual artwork.

Do NOT simply replace these with random generic icons.

Identify the important visual elements visible in the reference:

- GENERALS wordmark

- crown/emblem

- blue/red battlefield artwork

- flags

- mountains

- castle

- decorative gold lines

Where possible, recreate or approximate these as local UI assets

rather than replacing them with emoji or generic icons.

The objective is for the prototype to visually resemble the supplied

screenshots, not merely contain the same text.

============================================================

TECH STACK

============================================================

Build the UI using:

- React

- TypeScript

- Tailwind CSS

Use a clean component architecture.

You may use a lightweight icon library for ordinary UI icons, but

distinctive branding elements should be treated separately.

Use mock/local data ONLY because this is a UI prototype.

Clearly isolate mock data from reusable UI components.

============================================================

PAGE 1 — HOME

============================================================

Recreate the Home page from the supplied Home screenshot.

Header:

GENERALS

Home

Play

How to Play

Server Online

Join Game

Hero:

GENERALS

Strategy. Territory. Victory.

Join a game, command your army, and conquer the map.

Buttons:

Play Now

How to Play

Stats panel:

Players Online

Active Rooms

Server Status

Do NOT add:

- leaderboard

- privacy

- contact

- competitive marketing

- strategic-depth marketing

- multiplayer marketing

- special ability marketing

============================================================

PAGE 2 — PLAYER DETAILS

============================================================

Create the Player Details page shown after Play Now.

Match the supplied screenshot.

Include:

Enter Your Details

Your Name

Codeforces Handle

Continue

Back to Home

Simulate browser persistence with localStorage.

Behavior:

First visit:

empty inputs.

After Continue:

save values.

Later visit:

automatically populate saved values.

The player can edit them.

This is only UI prototype behavior.

Do not implement real authentication.

============================================================

PAGE 3 — PLAY

============================================================

Recreate the supplied Play page.

Layout:

Create a New Room

Join a Room with Code

Available Rooms

Create Room controls:

Room Name

Player/team colour selection

12 distinct colours

Game Speed

Map Width

Map Height

Mountains Density

Cities Density

Swamps Density

Modifiers:

Fog of War

Reveal King

Allow Death Spectator

Warring States Mode

Use normalized 0–1 sliders where shown by the reference.

Available Rooms should visually match the supplied screenshot.

Populate it with mock data.

Do not implement a real backend.

============================================================

PAGE 4 — WAITING ROOM

============================================================

Recreate the supplied Waiting Room screenshot.

This is a SIMPLE waiting room.

Show:

Room name

Waiting for Players

Room code

Copy button

Players

Room Chat

Room Settings summary

Ready

Start Game

Leave Room

Do NOT show:

- map preview

- terrain preview

- modifier editor

- unnecessary dashboards

Use mock data.

Create a 12-player-capable visual player list.

Use distinct player colours.

============================================================

ACTUAL GAMEPLAY UI — DESIGN SYSTEM EXTENSION

============================================================

IMPORTANT:

The supplied screenshots DO NOT show the actual gameplay screen.

Therefore, DO NOT create a new unrelated gameplay UI.

Instead create ONE additional UI prototype page:

GAMEPLAY

This is ONLY a VISUAL PROTOTYPE.

Use a fake/mock battlefield for demonstration.

The gameplay screen should visually feel like the natural continuation

of the four supplied screens.

The layout may differ because gameplay has different requirements.

The battlefield should remain the dominant element.

Include mock versions of:

- top game HUD

- player information

- army counts

- territory information

- timer/turn

- leaderboard

- battlefield

- movement/attack controls

- chat button

- Commander panel

- Energy

- Math challenge

- Codeforces challenge

- Commander abilities

- notifications

- game-over state

However, keep the gameplay screen compact and functional-looking.

Do not turn it into a generic dashboard.

============================================================

GAMEPLAY DESIGN LANGUAGE

============================================================

The gameplay screen must inherit:

- same dark navy surfaces

- same blue/red faction language

- same gold GENERALS identity

- same border treatment

- same typography

- same button language

- same status indicators

- same panel styling

- same icon treatment

as the four supplied screenshots.

Think:

"same designer, same game, next screen."

NOT:

"completely different game."

============================================================

COMMANDER PANEL

============================================================

Create a polished mock Commander panel.

Show:

Energy

Challenges

Math

Codeforces

Abilities

Use the same visual system as the supplied UI.

Do not implement actual challenge judging.

Use mock interaction states such as:

LOCKED

AVAILABLE

ACTIVE

COOLDOWN

============================================================

GAMEPLAY MAP

============================================================

Create a convincing GENERALS-style mock battlefield.

This is only a prototype.

The purpose is to demonstrate how the existing game's battlefield

could visually integrate with the new UI.

Do NOT implement actual game simulation.

============================================================

INTERACTIONS

============================================================

Build enough frontend interaction to demonstrate the intended UX.

Examples:

Play Now

→ Player Details

Continue

→ Play

Create Room

→ Waiting Room

Join with Code

→ Waiting Room

Available Room → Join

→ Waiting Room

Waiting Room → Start Game

→ Gameplay mock

Ready button changes state.

Copy room code works.

Profile values persist in localStorage.

Buttons should have:

- hover

- active

- disabled

- loading

states where visually appropriate.

============================================================

RESPONSIVE

============================================================

Primary target:

desktop/laptop.

Reference dimensions should be the priority.

Ensure the prototype works at:

1920×1080

1440×900

1366×768

1280×720

Then gracefully adapt to smaller screens.

============================================================

COMPONENT ARCHITECTURE

============================================================

Create reusable UI components for:

- Header

- Navigation

- Button

- Card

- Input

- Select

- Slider

- Toggle

- Badge

- Status indicator

- Player card

- Room card

- Room table

- Chat panel

- Modal

- Commander panel

- Ability card

- Energy bar

Do not duplicate CSS unnecessarily.

============================================================

VISUAL QA

============================================================

This is critical.

After generating the UI:

Compare every reference page against the supplied screenshot.

Do NOT only verify content.

Compare:

- geometry

- proportions

- spacing

- typography

- colours

- background

- card dimensions

- button dimensions

- navigation

- footer

- alignment

Iterate until the result is visually very close.

The goal is NOT:

"same information."

The goal is:

"same visual design."

============================================================

OUTPUT

============================================================

Generate a complete frontend prototype with routes for:

/home

/player-details

/play

/waiting-room

/game

Use mock/local data only.

Do not implement a backend.

At the end provide:

1. Component structure

2. Route structure

3. Important styling decisions

4. Asset list

5. Mock data structure

6. How localStorage is used

7. Any visual elements that could not be reproduced closely

8. Instructions for running the prototype

============================================================

FINAL RULE

============================================================

This prototype will later be used as the VISUAL REFERENCE for an

existing real Generals game.

Therefore prioritize:

VISUAL FIDELITY

over

backend functionality.

Do not simplify the screenshots into generic UI.

Do not invent a different visual identity.

Make it look like the supplied screenshots belong to a real,

finished game product.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/31dd98f1-ba14-4759-83ff-f7a10668ad63).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
