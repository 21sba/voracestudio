# Vorace Studio Design System

This document serves as the single source of truth for the core design rules, typography, spacing, and CSS conventions used across the project. 

## 1. Core Colors

The application relies on a set of 6 globally defined CSS color variables. These should always be used instead of hardcoding hex values.

- `--color1`: `#f1eee9` (Off-white / Background for inverted states)
- `--color2`: `#0f0f0f` (Near-black / Main background)
- `--color3`: `#EE204C` (Red / Primary accent & hover states)
- `--color4`: `#F7B1BD` (Pink / Secondary accent & text highlights)
- `--color5`: `#aca6a2` (Warm Gray / Secondary text & borders)
- `--color6`: `#181818` (Dark Gray / Surface backgrounds like bubble boxes)

**Semantic mapping:**
- `--color-text`: Defaults to `--color5` globally.

**Smart Invert (`.smart-invert`):**
When the `body` has the `.smart-invert` class (usually toggled via the footer or specific interactions), `--color3` and `--color4` swap roles visually for links and hover states to maintain contrast and style consistency.

---

## 2. Typography

All typography scales automatically based on the viewport width using CSS `clamp()`. This ensures text remains readable on mobile while scaling elegantly to desktop.

**Font Family:**
- `--font-sans`: `"Space Mono", monospace` (Used globally on the `body`)

**Typographic Scale:**
- `--size-title`: `clamp(2rem, 2.6vw, 2.4rem)` (Main page titles)
- `--size-title-h2`: `clamp(1rem, 2vw, 1.2rem)` (Section headers and project titles)
- `--size-body`: `clamp(0.8rem, 1.3vw, 1rem)` (Standard body copy)
- `--size-caption`: `clamp(0.8rem, 1.3vw, 0.9rem)` (Tags, dates, small labels)

**Line Height & Weights:**
- `--line-height`: `1.35`
- `--weight-regular`: `400`
- `--weight-bold`: `700`

**Utility Classes:**
- `.title`: Main page titles (H1 equivalent).
- `.subtitle` / `.section-title`: Secondary headings (H2 equivalent).
- `.md-highlight`: Highlights markdown-parsed text (uses `--color4`).

---

## 3. Spacing & Sizing

Maintain a strict rhythm by relying on the following global variables:

- `--gap`: `25px` (Standard gap between grid items and major layout blocks)
- `--padding`: `12px` (Internal padding for boxes and surface elements)
- `--radius`: `5px` (Standard border-radius for tags, buttons, and inner elements)
- `--outer-radius`: `calc(var(--radius) + var(--padding))` (Radius for outer containers like `.bubble-box` and `.cover-wrap` to maintain concentric borders)
- `--stroke`: `3px` (Used for spline paths and separation lines)

---

## 4. Standard UI Components

To maintain consistency, the following components are defined globally in `style.css` and should be reused across pages (e.g., Grid index, Work detail pages):

### Covers (`.cover-wrap`, `.cover-img`)
Wraps project thumbnails and case study images. It automatically applies the correct `--radius` or `--outer-radius` and handles hover effects. 
- *Grid specific:* The works grid enforces a strict `16 / 9` aspect ratio.
- *Pagebuilder specific:* The work detail page allows natural aspect ratios (`auto`).

### Meta Information (`.meta`, `.origin-date`)
A flex container used to align tags on the left and origin/date information on the right.

### Tags (`.tags`, `.tag`)
Used for project categories or disciplines. Tags use `--color3` background with `--color4` text, scaling up slightly on hover.

### Skeleton Loading (`.skeleton`)
A unified CSS-only shimmer effect for elements that are loading (like images). Add the `.skeleton` class to any container to apply the animated background gradient.

---

## 5. CSS Architecture

- `style.css`: Contains all CSS variables, typography baselines, standard UI components (tags, meta, covers), and global animations (skeleton).
- `home.css`: Scoped entirely to the interactions, scattering, and title animations of the index page.
- `about.css`: Scoped to the grid layout and value-accordions of the about page.
- `components/gridbuilder.css`: Scoped to the project listing (works page) and its specific 16:9 constraints and filtering logic.
- `components/pagebuilder.css`: Scoped to the individual project detail pages, handling the rich, multi-block case study layouts.
- `components/*.css`: Isolated styles for specific interactive widgets (menu, footer, loaders, copy-toast).

*Always aim to use global variables and shared utility classes before writing custom page-specific CSS.*
