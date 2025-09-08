import Head from "next/head";
import { SEO_DEFAULTS, SITE } from "@/utils/constants";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  image = SEO_DEFAULTS.ogImage,
  url = SITE.url,
}: SEOProps) {
  const pageTitle = title ? `${title}` : SEO_DEFAULTS.title;
  const metaUrl = url;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={metaUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
