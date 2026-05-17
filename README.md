# CanYouHearMe — Video Conferencing Product Comparison

A static Next.js site comparing video conferencing hardware (sound bars, all-in-one displays, room companions, and device management platforms) across 9 manufacturers. Built for the Southeast Asia market with support for 6 languages.

**Live site:** [canyouhearme.vercel.app](https://canyouhearme.vercel.app) (or your Vercel URL)

---

## What It Does

- **41 products** across 5 categories: Bars, Displays, Companions, Management platforms
- **9 companies**: Logitech, Poly, Cisco, Neat, Yealink, Crestron, Lenovo, DTEN, MAXHUB
- **6 languages**: English 🇸🇬, Bahasa Melayu 🇲🇾, Bahasa Indonesia 🇮🇩, Thai 🇹🇭, Tagalog 🇵🇭, Vietnamese 🇻🇳
- **4 tools**: Product browser with filters, comparison wizard, company profiles, side-by-side compare table
- **No pricing** — manufacturer-neutral, spec-focused

---

## Tech Stack

- **Next.js 14** with static export (`output: 'export'`)
- **Tailwind CSS** for styling
- **TypeScript** throughout
- **No database** — all data in TypeScript files
- **No API calls** — fully static, works offline after load
- **Vercel** auto-deploy on push to `master`

---

## Project Structure

```
canyouhearme/
├── data/
│   ├── types.ts           # Product + Company TypeScript interfaces
│   ├── products.ts        # 41 products, companies list, platforms list
│   ├── companies.ts       # 9 company profiles (tagline, description, strengths, weaknesses)
│   ├── wizard.ts          # Wizard question options (room sizes, platforms, priorities, categories)
│   ├── i18n.tsx           # UI translations for all 6 languages (labels, buttons, nav, etc.)
│   ├── i18n-companies.ts  # Company profile content translations (taglines, descriptions, etc.)
│   └── i18n-wizard.ts     # Wizard option translations
│
├── pages/
│   ├── index.tsx          # Product browser (filters, compare mode, product cards)
│   ├── wizard.tsx         # Step-by-step wizard to find the right product
│   ├── companies.tsx      # Company cards with profiles
│   ├── company-compare.tsx # Side-by-side company comparison table
│   └── privacy.tsx        # Privacy policy page
│
├── public/
│   └── logo.png           # Site logo (used in header on all pages)
│
├── next.config.js         # Static export config
├── tailwind.config.js
└── package.json
```

---

## Adding a New Product

1. Open `data/products.ts`
2. Add a new object to the `products` array with this structure:

```typescript
{
  id: 'unique-slug',           // lowercase-with-hyphens
  name: 'Product Name',
  company: 'Neat',             // must match an entry in companies.ts
  category: 'bar',             // 'bar' | 'display' | 'companion' | 'management'
  subCategory: 'Small-Medium Room', // free text, shown on card
  cameraResolution: '50MP sensor',
  fieldOfView: '113° horizontal',
  opticalZoom: '4x digital',
  panTiltZoom: false,
  micCount: 5,
  micPickupRange: 'End-fire array',
  speakerOutput: 'Built-in speakerbox',
  maxResolution: '1080p / 720p',
  noiseCancellation: true,
  dimensions: '890 x 80 x 80 mm',
  weight: '3.1 kg',
  platformSupport: ['Zoom Rooms', 'Microsoft Teams', 'Google Meet', 'BYOD'],
  aiFeatures: ['Auto-framing', 'Noise suppression'],
  productUrl: 'https://manufacturer.com/product',
}
```

3. If it's a **hardware** product (bar/display/companion), fill camera/audio/physical specs.
4. If it's a **management** product, set `category: 'management'` and add a `description` field instead of hardware specs. See existing management products for the pattern.
5. Add the product name to the company's `products` array in `data/companies.ts`.
6. Run `npm run build` to verify.
7. Push — Vercel auto-deploys.

---

## Adding a New Company

1. Open `data/companies.ts`
2. Add a new object to `companyProfiles`:

```typescript
{
  id: 'company-slug',
  name: 'Company Name',
  tagline: 'Short tagline',
  description: '2-3 sentence description.',
  products: ['Product One', 'Product Two'],
  strengths: ['Strength 1', 'Strength 2', '...up to 9'],
  weaknesses: ['Weakness 1', 'Weakness 2', '...up to 6'],
  website: 'https://company.com',
  founded: '2019',
  headquarters: 'City, Country',
  marketPosition: 'Leader', // 'Leader' | 'Challenger' | 'Niche' | 'Emerging'
}
```

3. Add translations in `data/i18n-companies.ts` for all 6 languages (copy the pattern from existing companies).
4. Add the company name to `companies` array in `data/types.ts` if you want type safety (optional).
5. Build and push.

---

## Adding a New Language

1. **Add to language list** in `data/i18n.tsx`:
   - Add `{ code: 'xx', flag: '🇹🇭', label: 'Language Name', nativeLabel: 'Native Name' }` to `languages` array
   - Add `'xx'` to `Lang` type
   - Add `xx: { ... }` translation block to `t` object (copy English block and translate)

2. **Add company translations** in `data/i18n-companies.ts`:
   - Add `xx: { logitech: { tagline, description, strengths[], weaknesses[] }, ... }` block

3. **Add wizard translations** in `data/i18n-wizard.ts`:
   - Add `xx: { huddle: { label, desc }, small: ..., ... }` block

4. Build and push.

---

## Adding a New Category

1. Add to `Lang` type in `data/types.ts`: `category: 'bar' | 'display' | 'companion' | 'management' | 'your-new-category'`
2. Add filter option in `data/wizard.ts` `categoryOptions` array.
3. Add translations in `data/i18n-wizard.ts` for all languages: `cat_yournewcat: { label: '...', desc: '...' }`
4. Add tab label in `data/i18n.tsx` for all languages: `yourNewCategory: 'Label'`
5. Update `ViewMode` type and filter logic in `pages/index.tsx`.
6. Add ternary label in `pages/index.tsx` tab rendering.
7. Update `ProductCard` in `pages/index.tsx` if the new category needs special display logic.
8. Build and push.

---

## Translation Architecture

| File | What It Translates |
|------|-------------------|
| `data/i18n.tsx` | UI labels — buttons, nav, filters, wizard steps, product card labels, table headers, footer |
| `data/i18n-companies.ts` | Company content — taglines, descriptions, strengths, weaknesses |
| `data/i18n-wizard.ts` | Wizard options — room size labels, platform names, priority descriptions, category descriptions |

**Product names and technical specs** (camera resolution, mic count, dimensions, etc.) stay in English across all languages.

**Language preference** is stored in `localStorage` key `canyouhearme-lang`.

---

## Key Conventions

- **No pricing anywhere** — the site is manufacturer-neutral
- **Product specs stay in English** — technical data doesn't translate
- **Company content is translated** — descriptions, strengths, weaknesses
- **Build must be clean** — zero TypeScript/Next.js errors before push
- **Static export** — no API routes, no server-side rendering
- **All pages prerender** — check `next.config.js` has `output: 'export'`

---

## Local Development

```bash
npm install
npm run dev      # localhost:3000
npm run build    # verify static export works
```

---

## Deployment

- Push to `master` on GitHub
- Vercel auto-deploys (GitHub Actions → Vercel, no token needed)
- If build fails, check `npm run build` locally first

---

## Data Sources

All product specifications sourced from publicly available manufacturer documentation and datasheets. Data current as of May 2026. No affiliation with any manufacturer.
