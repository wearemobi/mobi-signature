# <img src="https://wearemobi.com/icon-light.svg" width="24" height="24" valign="middle"> M.O.B.I.™ · SPEC or DOCS change request v1.0

## Context & Goal
To maintain the "Single Source of Truth" (JSON-driven) philosophy, we need a robust way to render rich text without complex HTML in our data files. The Markdown Engine will transform the about and content fields from the profile.json into clean, high-contrast B&W typography.

This is critical for displaying professional summaries and service lists with proper hierarchy (Bold, Lists, Headers).

## Implementation Plan
- [x] This issue is the trigger for a **New SPEC**.
- [x] Target Directory: `docs/`
- [x] Target Filename: `docs/SPEC-v1.2.md`
- [ ] Library Selection: Integrate marked (lightweight, zero-dependency parser).
- [ ] Component Creation: Build a `MarkdownBlock.tsx` wrapper that applies Tailwind v4 typography resets.
- [ ] B&W Styling: Force all rendered elements (h3, p, li, strong) to follow the `#000` on `#FFF` constraint.

## Acceptance Criteria (Definition of Done)
- [ ] All stakeholders (or R&D) have reviewed the draft.
- [ ] The document is merged into the `main` branch under the `docs/` folder.

---
Copyright © 2026 **M.O.B.I.™** (Machine Oriented Brilliant Ideas™)  
Transforming ideas into high-impact digital solutions. 🚀  
[wearemobi.com](https://wearemobi.com) · contact@wearemobi.com
