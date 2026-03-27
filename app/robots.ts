import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = "https://website-eta-puce-89.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
