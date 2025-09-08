export const API_BASE_URL = "https://dummyjson.com/products" as const;

export const SITE = {
  name: "ProductApp",
  url: "https://example.com",
  twitterHandle: "@productapp",
} as const;

export const SEO_DEFAULTS = {
  title: "ProductApp — Modern products catalog",
  description:
    "Browse a curated list of products with fast, responsive UI built with Next.js and Tailwind CSS.",
  ogImage: "/og.png",
} as const;