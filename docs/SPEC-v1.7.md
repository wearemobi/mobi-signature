# <img src="https://wearemobi.com/icon-light.svg" width="24" height="24" valign="middle"> M.O.B.I.™ · SPEC or DOCS change request v1.0

## Context & Goal
Extend the "Print Engine" to support a physical networking format. The goal is to allow users to print a **Standard Business Card (3.5" x 2")** directly from the browser, optimized for high-contrast laser printing (HP M111w).

### Technical Strategy
- **Format:** Force `@page { size: 3.5in 2in; margin: 0; }`.
- **CSS Trigger:** Use a global class `.print-card-mode` on `body` to toggle between "Full Profile" and "Card" view.
- **Content Filtering:** Only display: Avatar, Name, Headline, and QR Code. Hide bio, buttons, and social links.
- **Analytics:** Register a custom GA4 event `profile_card_print`.

## Implementation Plan
- [x] This issue is the trigger for a **New SPEC**.
- [ ] Target Directory: `docs/`
- [ ] Target Filename: `docs/SPEC-v1.0.md`

## Acceptance Criteria (Definition of Done)
- [ ] All stakeholders (or R&D) have reviewed the draft.
- [ ] The document is merged into the `main` branch under the `docs/` folder.

---
Copyright © 2026 **M.O.B.I.™** (Machine Oriented Brilliant Ideas™)  
Transforming ideas into high-impact digital solutions. 🚀  
[wearemobi.com](https://wearemobi.com) · contact@wearemobi.com
