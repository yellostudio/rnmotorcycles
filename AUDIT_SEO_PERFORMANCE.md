# RN Motorcycles — SEO and performance audit
Date: 17 October 2026
Scope: GitHub source review of the Next.js website and public business-reference checks. **Not** a Lighthouse or live-user performance measurement.

## Completed in feature branch
- Replace injected HTML on homepage with server-rendered JSX and real Next.js links. This removes a client-side HTML insertion pattern that hurt crawlability, maintainability and keyboard interaction.
- Link home service cards, headings and key service mentions to four actual routes: `/services/motorcycle-mots`, `/services/servicing`, `/services/repairs` and `/services/parts-accessories`.
- Add consistent primary navigation across homepage, service, About and Contact pages; mobile menu includes all services.
- Retain unique page metadata for the service pages and maintain a safe `noindex` stance while site facts and final domain are unconfirmed.
- Add `robots.ts` preventing crawler indexing before launch.

## SEO review
| Area | Finding | Next action | Priority |
| --- | --- | --- | --- |
| Indexability | `robots.index=false` and robots disallow all are intentional pre-launch safeguards | Remove these once domain, pages and legal/privacy copy are approved | Critical at launch |
| Canonicals | No agreed production hostname | Set `metadataBase`, per-route canonical URLs and redirects once the canonical domain is confirmed | Critical at launch |
| Sitemap | No production sitemap available yet | Generate `sitemap.xml` for approved URLs only; submit to Search Console | High |
| Internal linking | Homepage previously relied on phone calls and anchors instead of service pages | Fixed in this branch | Fixed |
| Service landing pages | Four indexable-when-launched service routes exist, but each is still brief | Add useful verified detail: eligibility, workshop process, service scope, pricing when confirmed, FAQs reflecting actual customer needs | High |
| Local SEO | Business name, telephone and Church Street Garage address are available | Confirm postcode, name, hours and listing consistency across Google Business Profile, Yell and existing site | High |
| Structured data | MotorcycleRepair JSON-LD already present, with unapproved factual fields risk | Confirm legal trading name, social profiles, service categories and hours before enrichment | Medium |
| Reviews | Three 2022–2023 quotations in original homepage | Confirm permission/source and obtain recent reviews; do not invent aggregateRating schema | Medium |
| Accessibility | Old homepage injected HTML and form was mailto-based | Semantic JSX and integrated enquiry component now used; verify focus/contrast/keyboard in-browser | High |
| Security | Enquiry endpoint has honeypot and validation but no persistent rate limiting | Add rate limiting, privacy notice, retention policy and abuse monitoring before public launch | High |

## Performance review
| Area | Source finding | Recommendation |
| --- | --- | --- |
| Homepage rendering | Previously entire page was a client component rendering `dangerouslySetInnerHTML` and DOM event listeners | Replaced with mostly server-rendered JSX; only header menu and form hydrate |
| Image delivery | Hero, service cards and About photo currently use remote Unsplash CSS backgrounds | Use approved local images, responsive formats (AVIF/WebP), controlled sizes and cache strategy. Preload the LCP hero intentionally, but lazy-load below-fold images |
| Font delivery | Barlow Condensed and DM Sans now loaded via `next/font/google` | Keep only used weights and verify generated font subset sizes |
| Hero layout | Fixed minimum heights plus extremely large headings | Test mobile 320–430px widths and ensure hero text does not overlap rider |
| CSS | Large compressed global stylesheet with some duplicate selector overrides | Refactor modularly; eliminate unused rules after final design approval |
| Third-party calls | Unsplash image URLs create external dependency | Migrate to self-hosted images before launch |
| Analytics | No production analytics or RUM verified | Add privacy-compliant analytics and measure INP, LCP, CLS with field data |
| Forms | Resend endpoint is server-only | Verify deliverability, error path, rate limiting and avoid shipping key to client |
| Build/test | Production build and Lighthouse cannot be executed in this connector-only environment | Run `npm ci && npm run build`; test mobile Lighthouse and real Vercel preview, including network waterfall |

### Targets after testing
Aim for Core Web Vitals at the 75th percentile: **LCP ≤2.5 s**, **INP ≤200 ms**, **CLS ≤0.1**. These are targets, not current results.

## Launch gates
1. Confirm production hostname and business details.
2. Replace placeholder photography; preserve text-free, right-aligned female rider in homepage hero.
3. Verify Resend sender/recipient settings and rate limiting; publish a privacy notice.
4. Check build, mobile navigation, contact form, keyboard focus and all links.
5. Add canonical tags, sitemap and Google Business Profile matching; lift `noindex` and robots disallow only when ready.
6. Run Lighthouse and Web Vitals after Vercel access is available; prioritise measured regressions rather than estimates.
