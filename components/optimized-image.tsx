import ExportedImage, {
  type ExportedImageProps,
} from "next-image-export-optimizer";

// ExportedImage does not read Next's basePath on its own; inject the one the
// GitHub Pages workflow sets so image URLs resolve under the repo sub-path.
export default function OptimizedImage(
  props: Omit<ExportedImageProps, "basePath">
) {
  return (
    <ExportedImage
      basePath={process.env.NEXT_PUBLIC_BASE_PATH || ""}
      {...props}
    />
  );
}
