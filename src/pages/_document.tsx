import { Html, Head, Main, NextScript } from "next/document";
import { SEO_DEFAULTS, SITE } from "@/utils/constants";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0b0f19" />
        <meta name="description" content={SEO_DEFAULTS.description} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:title" content={SEO_DEFAULTS.title} />
        <meta property="og:description" content={SEO_DEFAULTS.description} />
        <meta property="og:image" content={SEO_DEFAULTS.ogImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
