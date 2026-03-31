# WIN Store — Frontend Developer Assessment

A e-commerce web application built with Next.js 15, TypeScript, and Tailwind CSS.

## Live Demo

[https://winstore-rouge.vercel.app/]

## GitHub Repository

[https://github.com/msaaaad/Winstore.git]

---

## How to Run

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

1. Clone the repository
   ```bash
   git clone https://github.com/msaaaad/Winstore.git
   cd your-repo
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then open `.env.local` and set:
   ```
   API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build
```bash
npm run build
npm start
```

---

## Architecture

### Tech Stack
- **Next.js 15** — App Router
- **TypeScript** — full type safety across all layers
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icon library

### Folder Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — Navbar and Footer
│   ├── page.tsx                # Home page — fetches and composes all sections
│   └── product/
│       └── [id]/
│           └── page.tsx        # Dynamic single product page
├── actions/
│   └── products.ts             # All server actions — only place API calls exist
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroBanner.tsx      # Client component — carousel interaction
│   │   ├── CategorySlider.tsx  # Client component — slider interaction
│   │   ├── NewArrivals.tsx     # Server component — renders product grid
│   │   └── BestDeals.tsx       # Client component — category tab switching
│   ├── ui/
│   |   └── ProductCard.tsx     # Reusable product card
|   └── Inputs/
|       └── Select.tsx          # Reusable select type input
└── types/
    └── index.ts                # TypeScript interfaces for all data models
```

### Data Flow

```
page.tsx (Server)
    │
    ├── calls Server Actions (src/actions/products.ts)
    │       │
    │       └── fetch() with Next.js cache controls
    │               │
    │               └── External API
    │
    └── passes data as props to components
            │
            ├── Server Components → render directly
            └── Client Components → receive data, handle UI interaction only
```

### Key Architecture Decisions

**Server Actions only** — all API calls are isolated in `src/actions/products.ts`
marked with `"use server"`. No `fetch()`, `axios`, or any HTTP call exists inside
any component. This is enforced throughout the entire codebase.

**Server vs Client Components** — components are Server Components by default.
`"use client"` is added only when browser interaction is required:
- `HeroBanner` — slide state
- `CategorySlider` — scroll position state
- `BestDeals` — active category tab state

**Parallel data fetching** — the home page uses `Promise.all` to fetch categories
and products simultaneously, reducing total load time.

**Static generation** — product pages use `generateStaticParams` to pre-render
all product routes at build time. Individual pages load instantly with no
server hit per request.

**Next.js caching** — all server action fetches use `next: { revalidate: 3600 }`
to cache responses for one hour, reducing unnecessary API calls.

---

## Assumptions

- **Currency** — prices are displayed in Pakistani Rupees (Rs) to match the
  provided Figma design, as the API returns raw numeric values with no
  currency information.

- **Original price** — the API provides a single price value with no original
  or crossed-out price. A 20% markup is applied to simulate a before-discount
  price, purely for UI presentation purposes as shown in the design.

- **Category images** — the categories API returns only id and name with no
  image URLs. Category images are manually mapped from available product
  images to match the design layout.

- **Hero banner** — the assessment specifies static demo data for the hero
  section. Slide content and images are hardcoded using available product
  images from the API.

- **Seller name** — the design shows "Bin Bakar Electronics" as the seller
  name on product cards. The API returns no seller information, so this is
  used as a static placeholder consistent with the design.

- **Quantity selector** — the add/subtract quantity buttons on the product
  page are UI-only. No cart or state management library was used as per the
  assessment requirements.

- **Font** — Century Gothic is a licensed Monotype font unavailable on Google
  Fonts. A CSS font stack approximation is used:
  'Century Gothic', 'AppleGothic', 'Gill Sans', Calibri, sans-serif.
  This renders correctly on Windows and macOS. A self-hosted .woff2 file
  would be needed for guaranteed cross-platform consistency.

- **Thumbnail images** — the single product page shows a thumbnail row for
  UI completeness. Since the API returns one image per product, the same
  image is repeated across all thumbnails.

---

## Environment Variables

| Variable        | Description                  | Required |
|-----------------|------------------------------|----------|
| `API_BASE_URL`  | Base URL for the product API | Yes      |

See `.env.example` for reference.
