/**
 * Renders a schema.org JSON-LD object as a <script> tag. Accepts null so
 * callers can pass conditional builders (e.g. howToJsonLd) straight through.
 */
export default function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
