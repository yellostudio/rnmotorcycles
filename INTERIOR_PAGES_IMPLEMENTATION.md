# Interior pages and image implementation

The service pages now share a responsive `interior-hero` pattern.

Hero classes: `interior-hero--mot`, `--servicing`, `--repairs`, `--parts`, `--about`.

## Photography

The GitHub code currently uses external illustrative photographs as placeholders, so the pages remain visually populated without broken image URLs. A companion image bundle contains four new AI-generated workshop hero assets: `mot-hero.webp`, `servicing-hero.webp`, `repairs-hero.webp`, `parts-hero.webp`.

To install, upload to `public/images/` and change those CSS background URLs to `/images/<file>.webp`. The images are web-optimised but are cropped from one montage and are therefore concept images, not final full-resolution production photography. The business should review them before publication.

## Layout rule

Desktop: Heading, introduction and CTA remain in the left 50–60% under a gradient; photography uses right-weighted subjects.

Mobile: The main subject sits lower in the hero, underneath the text block rather than behind its letters, using a strong top-to-bottom gradient.

## Content

Service copy reflects publicly listed services: MOTs, servicing, chain/sprockets, engine rebuilds, accident and insurance repairs and rider accessories. No outdated MOT price, promotions or unverified turnaround promises included.

The Contact page includes the supplied address, Monday–Saturday hours, Sunday closure, telephone links and Google Maps directions.

## Next production tasks

1. Upload and approve generated assets in repo; replace fallback stock images.
2. Verify all page layouts on Vercel and mobile browsers.
3. Verify the Resend sender and recipient variables and run successful end-to-end form test.
4. Confirm corporate trading name, location details and SEO release readiness.
