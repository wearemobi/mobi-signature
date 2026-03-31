# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.8.0] - 2026-03-31
### Added
- Integrated formal M.O.B.I.™ branding with a functional link to wearemobi.com in the footer.
- Validated and deployed the "Private Cloning" infrastructure strategy for pilot clients such as `signature-*`.

### Changed
- Performed comprehensive codebase sanitization by executing global `npm run lint` and `prettier`.

### Fixed
- Confirmed print integrity and high-contrast output for QR codes and identity elements on laser printers (specifically the HP M111w).

### Removed
- Removed obsolete "TODO" comments, debug logs, and development-only notes from `ShareSection.tsx` and `globals.css`.

## [1.7.0]
### Added
- Extended the Print Engine to support a physical networking format, forcing a Standard Business Card size (3.5" x 2") optimized for high-contrast laser printing.
- Implemented a global `.print-card-mode` CSS class to allow toggling between "Full Profile" and "Card" views.

### Changed
- Configured content filtering in card print mode to exclusively display the Avatar, Name, Headline, and QR Code, while hiding the bio, buttons, and social links.

## [1.6.0]
### Added
- Integrated Google Analytics 4 (GA4) via `next/script` in the root layout to track key engagement metrics such as `page_view`, `whatsapp_click`, and `profile_print`.
- Configured the GA4 Tracking ID to be managed as an environment variable (`NEXT_PUBLIC_GA_ID`) to maintain independent client repositories.

## [1.5.0]
### Added
- Implemented a clean document print engine specifically optimized for monochrome laser printers like the HP LaserJet M111w.
- Configured `@media print` styles to automatically hide interactive UI elements, such as buttons and navigation bars, during physical printing.

### Changed
- Ensured the QR code scales correctly to remain perfectly legible within a single-page physical layout.

## [1.4.0]
### Added
- Introduced an interactive Share Engine (`ShareSection.tsx`) allowing users to distribute their digital identity via native mobile sharing and QR codes.
- Implemented the primary Web Share API alongside an asynchronous Clipboard API fallback, featuring a 2-second visual confirmation state for "Link Copied".
- Integrated scalable SVG QR generation via `qrcode.react`, configuring it with Level 'H' (High) error correction for superior readability in high-contrast print scenarios.
- Injected dynamic share metadata, including names and roles, directly from `profile.json` properties.

## [1.2.0]
### Added
- Integrated a Markdown Engine using the lightweight, zero-dependency `marked` library to establish a "Single Source of Truth" for rendering rich text from JSON files.
- Created a `MarkdownBlock.tsx` wrapper component to correctly parse JSON `about` and `content` fields into headers, unordered lists, and bold text utilizing Tailwind v4 typography resets.

### Changed
- Enforced strict Black & White styling constraints on all dynamically rendered Markdown elements, forcing #000000 on #FFFFFF.

## [1.1.0]
### Added
- Established the core radical Black & White visual identity, ensuring premium high-contrast readability for web and laser printing.
- Configured global CSS variables utilizing Tailwind v4 syntax and integrated premium typography via `next/font` using Geist or Inter.

### Removed
- Eliminated all default Next.js 16 boilerplate styles, removing any grayscale or secondary colors to maintain the pure #000000 text on #FFFFFF background requirement.

## [1.0.0]
### Added
- Established the minimalist "Signature" boilerplate technical foundation utilizing Next.js 16+ (App Router), strict TypeScript 5, and Tailwind CSS v4.
- Built a clean `src` layout folder architecture following Next.js defaults, delivering zero console errors and ensuring build times of under 60 seconds.
