# <img src="https://wearemobi.com/icon-light.svg" width="24" height="24" valign="middle"> M.O.B.I.™ · SPEC or DOCS change request v1.0

## Context & Goal
The objective of version 1.4 is to transform the static signature into an interactive networking tool by implementing a **Share Engine**. This allows users to distribute their digital identity via QR codes or native mobile sharing.

## Implementation Plan
- [x] This issue is the trigger for a **New SPEC**.
- [x] Target Directory: `docs/`
- [x] Target Filename: `docs/SPEC-v1.4.md`

## 2. Technical Architecture
- **Component:** `ShareSection.tsx` (Client-side Component).
- **QR Engine:** `qrcode.react` (SVG implementation for scalability).
- **Sharing Protocol:** Web Share API (Primary) with an asynchronous Clipboard API fallback.
- **Data Flow:** Uses `window.location.href` for real-time URL detection, ensuring compatibility with multiple deployment environments (e.g., Cloudflare Pages subdomains).

## 3. Implementation Details
- **Dynamic Metadata:** Share titles and descriptions are injected via `profile.json` props (`name`, `role`).
- **Error Correction:** QR Code set to Level 'H' (High) to ensure readability in high-contrast or physical print scenarios.
- **User Feedback:** Implementation of a 2-second visual state for "Link Copied" confirmation.

## Acceptance Criteria (Definition of Done)
- [x] All stakeholders (or R&D) have reviewed the draft.
- [x] The document is merged into the `main` branch under the `docs/` folder.

---
Copyright © 2026 **M.O.B.I.™** (Machine Oriented Brilliant Ideas™)  
Transforming ideas into high-impact digital solutions. 🚀  
[wearemobi.com](https://wearemobi.com) · contact@wearemobi.com
