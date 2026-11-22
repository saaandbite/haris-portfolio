# Haris Sandi Purna Yudha — Portfolio

Portfolio landing page for **Haris Sandi Purna Yudha**, UI/UX Designer &
Fullstack Developer, built with **Next.js 15 (App Router) + Tailwind CSS 3**.

Content is sourced from his public LinkedIn profile
([linkedin.com/in/harisforwork](https://www.linkedin.com/in/harisforwork),
checked 22 Nov 2026) and lives in one place: `lib/data.ts`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
npm start        # serve the production build
```

## Structure

```
app/
  layout.tsx      # fonts (Plus Jakarta Sans, Instrument Serif, JetBrains Mono), metadata
  page.tsx        # composes the sections
  globals.css     # Industrial Clean tokens, tabular-nums, spotlight, Lenis base
components/
  Header.tsx  Hero.tsx  About.tsx  Projects.tsx  GitHubActivity.tsx
  Experience.tsx  Education.tsx  Certifications.tsx  Awards.tsx  Footer.tsx
  SectionHeading.tsx
  motion/
    MotionProvider.tsx  # Lenis smooth scroll synced to GSAP ScrollTrigger
    Reveal.tsx          # GSAP scroll reveal — the only place GSAP touches the DOM
    ScrambleText.tsx    # motion-primitives Text Scrambler pattern
    AnimatedNumber.tsx  # motion-primitives Animated Number / NumberFlow pattern
    TiltCard.tsx        # paceui Tilt Card + Magic UI Spotlight pattern
lib/
  data.ts         # all LinkedIn content (8 roles, 6 projects, 10 certs, 2 awards)
```

## Design

Industrial Clean (from the `ui-ux-anti-slop` skill): `#FAFAFA` background,
`#FFFFFF` cards, `#E4E4E7` borders, `#09090B` / `#71717A` text, Emerald
`#10B981` accent. No purple-blue gradient, no uniform card grid, no
centered generic hero, no emoji — Phosphor Icons, one weight (Regular).

Motion, one animation owner per element:

- **Lenis + GSAP ScrollTrigger** — smooth scroll + section reveals
  (`components/motion/Reveal.tsx` only).
- **Text Scrambler** (motion-primitives pattern) — hero name, once on mount.
- **Animated Number** (motion-primitives / NumberFlow pattern) — hero stats,
  count-up on scroll into view, ease-out, tabular-nums.
- **Tilt Card + Spotlight** (paceui / Magic UI pattern) — project rows.
- No Framer Motion anywhere, so GSAP never shares an element with it.

## What is deliberately NOT here

- **Skills / Languages** — not visible on the public LinkedIn profile
  without sign-in; not invented.
- **Email** — LinkedIn masks it; contact is via LinkedIn and linktr.ee.
- **Streak / contribution totals** — GitHub's public API exposes no
  verified total. The contribution graph is loaded live from GitHub
  (`github.com/users/saaandbite/contributions`) and no number is claimed.
- **MediTalk description** — none visible on the public profile; marked as
  such on the page.

## Deploy

Static export (`output: "export"` in `next.config.ts`). Push this repo to
GitHub and connect it to Vercel — Vercel auto-detects Next.js and builds
with `npm run build`.
