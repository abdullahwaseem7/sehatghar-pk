import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/login/"],
    },
    sitemap: "https://sehatghar-pk.vercel.app/sitemap.xml",
  };
}
