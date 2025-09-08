## Project Overview

A production-ready Next.js + TypeScript + Tailwind CSS project that lists products and shows individual product details using the DummyJSON API. The app emphasizes clean structure, strict typing, responsive UI, image optimization, and basic SEO (including Open Graph).

### Features

- Responsive products grid (top 10) and product detail page
- Axios-based data fetching via custom hooks
- Strict TypeScript types for API responses
- Image optimization with `next/image` and priority hints for LCP
- Reusable SEO component with sensible defaults

### Tech Stack

- Next.js 15 (Pages Router)
- TypeScript 5
- Tailwind CSS v4
- Axios

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
# http://localhost:3000
```

3. Build and start (production)

```bash
npm run build
npm start
```

### Required Image Config

The app loads product images from `cdn.dummyjson.com`. This is configured in `next.config.ts` under `images.remotePatterns`. If you change image sources, update this config and restart the dev server.

## API

- Base URL: `https://dummyjson.com/products`
- List: `GET /products?limit=10`
- Detail: `GET /products/:id`

Hooks:

- `useFetchProducts(limit?: number)` → `{ data, isLoading, error, refetch }`
- `useFetchProductDetail(id?: string | number)` → `{ data, isLoading, error, refetch }`

## Folder Structure

```
.
├─ next.config.ts
├─ package.json
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Product.tsx           # Home page content (grid, header, refresh)
│  │  ├─ ProductCard.tsx       # Card UI for a single product
│  │  └─ SEO.tsx               # Reusable SEO meta component
│  ├─ hooks/
│  │  ├─ useFetchProductDetail.ts
│  │  └─ useFetchProducts.ts
│  ├─ layouts/
│  │  ├─ Footer.tsx
│  │  ├─ Navbar.tsx
│  │  └─ index.tsx             # MainLayout (Navbar + children + Footer)
│  ├─ pages/
│  │  ├─ 404.tsx               # Custom 404 page
│  │  ├─ _app.tsx              # Global layout wiring
│  │  ├─ _document.tsx         # SEO defaults and meta tags
│  │  ├─ index.tsx             # Uses <Product /> component
│  │  └─ product/
│  │     └─ [id].tsx           # Product detail page
│  ├─ styles/
│  │  └─ globals.css           # Tailwind v4 import and global styles
│  ├─ types/
│  │  └─ product.ts            # Strict API types
│  └─ utils/
│     └─ constants.ts          # SITE + SEO defaults
└─ tsconfig.json
```

## Key Decisions

- Types live in `src/types/product.ts` for strict contracts.
- Data fetching in hooks keeps components lean and reusable.
- Tailwind utilities are used directly in components; no custom JS design tokens.
- `next/image` for responsive images and better Core Web Vitals. The first few product cards can opt-in to `priority` for LCP.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm start` – run production build
- `npm run lint` – run Next.js lint

## Accessibility & SEO

- Semantic HTML sections (`main`, `section`, `article`, `header`)
- Alt text for images
- Keyboard-focusable links/buttons; visible focus states
- SEO defaults in `_document.tsx` and page-level overrides via `SEO` component

## Next Steps / Potential Improvements

1. Implement Global State Management: Introduce Zustand or Redux to handle complex data flows efficiently, improve data consistency, and enhance overall app performance.
2. Advanced Search & Enhanced Browsing Experience: Add real-time search suggestions, multi-level filters, and server-side pagination to make exploring large datasets seamless. Optionally implement infinite scrolling.
3. Optimized API Handling & Prefetching: Use SWR to enable smart caching, background revalidation, and data prefetching to improve responsiveness and reduce redundant API calls.
