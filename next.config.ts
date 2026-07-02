import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo-name>; set basePath when
// deploying there (the workflow sets NEXT_PUBLIC_BASE_PATH). Leave unset for
// local dev or a user/organization site (username.github.io).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
