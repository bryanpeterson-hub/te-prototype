# TE Connectivity — "Precision at the Edge"

An interactive, presenter-driven web presentation for the TE Connectivity Art of the Possible demo. Built with Vite + React + framer-motion, mirroring the Momentive deck's architecture and re-skinned to TE's orange-on-graphite brand.

## Run

```bash
cd presentation
npm install
npm run dev
```

Open http://localhost:5173.

## Navigate

- **→ / Space / click** — next scene
- **←** — previous scene
- **F** — fullscreen
- **Home / End** — jump to start / end

Some scenes reveal in steps on click before advancing (the Limbic Opening, the Cliffhanger, and each vignette Recap).

## Structure

1. **Project Blueprint intro** (account-team lead-in): cover, thank you, playbook must evolve, CMO jobs-to-be-done, agentic playbooks, current state, future state.
2. **Precision at the Edge**: Limbic Opening → The World Before → six demo vignettes (Lead-In / Live Demo handoff / Recap) → Resolution → Full Transformation → $2.4M pipeline → Call to Action.

Content lives in `src/slides/`; the vignette copy is in `src/slides/vignettes.js`. Shared primitives and animations are in `src/components/`; brand tokens are in `src/styles/tokens.css`.

## Build

```bash
npm run build && npm run preview
```
