# apple-icon.png

180×180 apple-touch-icon, the size current iOS asks for. It is the same mark as
`app/icon.svg` on the brand-blue background, rendered once and committed as a
static file.

It is deliberately **not** an `apple-icon.tsx` / `ImageResponse` route. Under
`output: "export"` that route exports to `out/apple-icon` — no file extension —
so GitHub Pages serves it without an `image/png` Content-Type, and the
`/apple-icon.png` URL referenced by `app/manifest.ts` and the `Organization`
`logo` in `lib/structured-data.ts` 404s. A static PNG keeps the extension.

To regenerate at a different size, render the SVG below at N×N and replace this
file (the `<rect>` background is what `ImageResponse` drew as the container):

```svg
<svg width="180" height="180" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" fill="#0077C7"/>
  <g stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round">
    <path d="M5.5 10.5 16 22.5"/>
    <path d="M16 10.5 5.5 22.5"/>
  </g>
  <g stroke="#9BD7F5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 9 V15.2"/>
    <path d="M18.8 11 H23.2"/>
    <path d="M21 16.8 V24"/>
    <path d="M24.6 18 21.3 20.8"/>
    <path d="M21.8 20.4 25 24"/>
  </g>
</svg>
```
