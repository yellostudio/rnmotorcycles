# Generated image asset pack

The downloadable image bundle includes files intended for `public/images/`:

- `hero-rider.webp` — cinematic text-free road hero, woman rider on the right, copy space on the left
- `mot-workshop.webp` — motorcycle workshop detail
- `motorcycle-servicing.webp` — hands-on engine maintenance
- `motorcycle-repairs.webp` — repair work
- `parts-accessories.webp` — motorcycle and rider products
- `south-devon-coast.webp` — illustrative South Devon-style coastal view

**Important:** These are AI-generated illustrative photos extracted from visual explorations, not photographs of the real RN Motorcycles garage, employees or stock. Do not attribute them to the actual business or present any fabricated workshop signage as genuine. Replace with approved site-specific photography when available.

Images are not committed through GitHub because this connector currently supports text-file updates only. Install the supplied image asset pack under `public/images/` before switching existing CSS backgrounds to local paths.

Recommended mappings when assets are installed:
- Hero CSS: `url('/images/hero-rider.webp')` with `background-position:center` and a dark left gradient
- `.service-image--mot`: `url('/images/mot-workshop.webp')`
- `.service-image--service`: `url('/images/motorcycle-servicing.webp')`
- `.service-image--repair`: `url('/images/motorcycle-repairs.webp')`
- Parts page: `/images/parts-accessories.webp`

**Caution:** The source montage is lower resolution than ideal for 4K screens. Keep the hero as a preliminary visual and obtain a dedicated 2400px+ render before launch.
