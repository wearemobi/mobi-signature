# <img src="https://wearemobi.com/icon-light.svg" width="24" height="24" valign="middle"> M.O.B.I.™ · SPEC or DOCS change request v1.0

## Context & Goal
Enable data-driven decision-making by integrating **Google Analytics (GA4)**. This allows M.O.B.I. to track engagement metrics (QR scans, WhatsApp clicks) for professional profiles.

### Technical Strategy
- **Provider:** Google Analytics 4 (GA4).
- **Implementation:** Integration via `next/script` in the root `layout.tsx`.
- **SSoT Integration:** The Tracking ID will be managed via an Environment Variable (`NEXT_PUBLIC_GA_ID`) to keep client repos independent.

### 3. Measurable Events (KPIs)
- `page_view`: General visits.
- `whatsapp_click`: High-intent lead generation.
- `profile_print`: Physical distribution interest.

## Implementation Plan
- [x] This issue is the trigger for a **New SPEC**.
- [x] Target Directory: `docs/`
- [x] Target Filename: `docs/SPEC-v1.6.md`

## Acceptance Criteria (Definition of Done)
- [ ] GA4 property created in Google Analytics console.
- [x] Tracking script active and verified in Realtime Reports.
- [x] No interference with `@media print` styles.
- [x] All stakeholders (or R&D) have reviewed the draft.
- [x] The document is merged into the `main` branch under the `docs/` folder.

---
Copyright © 2026 **M.O.B.I.™** (Machine Oriented Brilliant Ideas™)  
Transforming ideas into high-impact digital solutions. 🚀  
[wearemobi.com](https://wearemobi.com) · contact@wearemobi.com
