import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo-name>; set basePath when
// deploying there (the workflow sets NEXT_PUBLIC_BASE_PATH). Leave unset for
// local dev or a user/organization site (username.github.io).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    loader: "custom",
    // Every <OptimizedImage> passes `sizes` with a 100vw branch, so Next drops
    // every candidate narrower than the smallest deviceSize — imageSizes would
    // only make the export optimizer write files no srcset ever references.
    imageSizes: [],
    // The widest source is 1562px, so anything above ~1600 is the same clamped
    // image under a different filename.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

export default nextConfig;
