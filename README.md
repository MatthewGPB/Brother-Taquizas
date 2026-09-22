# Grow Palm Beach — Website v2

Next.js 15 site with three-tier pricing, AI-optimization positioning, and founder-led voice. Deployed on Vercel.

## Quick start

```bash
npm install
npm run dev
```

## Editing content

Everything lives in **`lib/content.ts`** — pricing, testimonials, FAQs, images, contact info. Edit, save, push. Vercel auto-deploys.

## Key structure

- Homepage flow: Hero → Logos → AI stats → **Pricing (3 plans)** → Stats → Process → Testimonials → Case study → Founder → FAQ → CTA
- The 3x guarantee lives inside the Full Growth pricing card + a note under the pricing grid + the FAQ. It does NOT apply site-wide.
- Book Call page: 15-minute call framing, Calendly embedded.

## Images

Local images go in `public/images/` and are referenced as `/images/filename.jpg` in `lib/content.ts`.
Targets: hero/founder ~1000-1200px wide JPG under 200KB; logos PNG under 50KB; OG image exactly 1200x630.

## Deploy

Push to GitHub → Vercel auto-builds. Uses Next.js ^15.1.6 (patched) + React ^18.3.1 (stable).
