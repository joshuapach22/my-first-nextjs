import type { Metadata } from "next";

const SITE_URL = "https://sterlingtheapp.com";
const SITE_NAME = "Sterling";

// Next.js replaces `openGraph`/`twitter` wholesale rather than merging
// individual fields with the parent layout's metadata, so every page needs
// its own complete block. This keeps that boilerplate (siteName, locale,
// card type) in one place while still letting each page's title/description
// produce a distinct social preview.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      // A page-level `openGraph` object replaces the layout's entirely
      // rather than merging fields, which also drops the auto-detected
      // opengraph-image.png file convention. Point at it explicitly so
      // every page keeps a preview image.
      images: [`${SITE_URL}/opengraph-image.png`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
