import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  // Do not allow the unfinished site to be indexed. Enable only after launch approval.
  return { rules: { userAgent: "*", disallow: "/" } };
}
