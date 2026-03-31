# <img src="https://wearemobi.com/icon-light.svg" width="24" height="24" valign="middle"> M.O.B.I.™ · SPEC or DOCS change request v1.0

## Context & Goal
Consolidate the Signature Engine as a stable, production-grade product (v1.x). The primary focus is codebase purification, formalizing the M.O.B.I.™ brand presence, and validating the "Private Cloning" strategy for pilot clients (e.g., signature-*).

## Implementation Plan
- [x] This issue is the trigger for a **New SPEC**.
- [x] Target Directory: `docs/`
- [x] Target Filename: `docs/SPEC-v1.8.md`

## Acceptance Criteria (Definition of Done)
- [ ] All stakeholders (or R&D) have reviewed the draft.
- [ ] The document is merged into the `main` branch under the `docs/` folder.
- [ ] Code Sanitization: Global execution of npm run lint and prettier. Removal of all "debug" logs, obsolete "TODO" comments, and dev-only notes in ShareSection.tsx and globals.css.
- [ ] Branding Integration: Functional link to [wearemobi.com](https://wearemobi.com/) added to the footer with target="_blank" and rel="noopener noreferrer".
- [ ] Release Management: Creation of the formal GitHub Tag v1.0.0 and an updated CHANGELOG.md.
- [ ] Cloning Validation: Successful deployment of the first private pilot clone (signature-*) synced via upstream.
- [ ] Print Integrity: Confirmed high-contrast output for QR and identity on laser printers (HP M111w).

---
Copyright © 2026 **M.O.B.I.™** (Machine Oriented Brilliant Ideas™)  
Transforming ideas into high-impact digital solutions. 🚀  
[wearemobi.com](https://wearemobi.com) · contact@wearemobi.com
