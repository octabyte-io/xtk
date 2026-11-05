# Cover and social image

Every post ships two PNGs in `xtk/public/images/blog/<slug>/`:

| File | Size | Built from | Purpose |
|---|---|---|---|
| `thumb.png` | 1200×675 | a **new bespoke** `user-guide/assets/blog-cover-<topic>.html` | card on /blog, hero under the H1 |
| `og.png` | 1200×630 | the shared `user-guide/assets/og-template.html` | LinkedIn/Slack/X share card |

Chrome: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`.

## og.png

```sh
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd ..   # from the xtk repo root, to the folder holding xtk/ and user-guide/
"$CH" --headless --disable-gpu --virtual-time-budget=5000 --hide-scrollbars \
  --window-size=1200,630 --screenshot="$PWD/xtk/public/images/blog/<slug>/og.png" \
  "file://$PWD/user-guide/assets/og-template.html#eyebrow=XTK Blog|title=<seoTitle without the — XTK tail>"
```

Use the `seoTitle` when the H1 is long; the template fits about three lines. Look at the PNG with
Read: the title must not touch the rule or the footer.

## thumb.png: the owner's cover rules

The owner rejected a set of covers that all looked identical: same pale wash, same white card,
same category chip, 60–90 words each. In the owner's words, a cover should be "attractive and
related to post maybe just by seeing it tell what this post is about instead of adding too much
information in image." So:

- **One idea per cover**: the article's own centrepiece (its key contrast, sequence, object or
  number), drawn so a glance tells you what the post is about.
- **Vary the frame, not just the drawing.** Don't reuse the old shell (pale wash + white card +
  category chip). Before choosing, open the 4–5 newest `blog-cover-*.html` files (by git date) and
  pick a ground and layout none of them uses: dark ink, split screen, full-bleed colour bands, grid
  paper, a tilted object, a photo-like scene drawn in CSS…
- **Headline readable at 480px wide**; roughly **15–25 words in total**; primary labels ≥ 22px,
  nothing below 17px.
- **Brand stays**: colour tokens from `xtk/app/globals.css`, Bricolage Grotesque (display) and
  Instrument Sans (text) from Google Fonts, the XTK mark drawn as the existing covers draw it.
- **No claim the post doesn't make**, and nothing XTK doesn't do (e.g. no initials field, no "files
  file themselves").
- Put a comment header at the top of the HTML: which post it is for, the idea, and that it departs
  from CONVENTIONS 9c's "copy the shell" rule (as `blog-cover-exit-cost.html` does).

Render:

```sh
"$CH" --headless --disable-gpu --virtual-time-budget=5000 --hide-scrollbars \
  --window-size=1200,675 --screenshot="$PWD/xtk/public/images/blog/<slug>/thumb.png" \
  "file://$PWD/user-guide/assets/blog-cover-<topic>.html"
```

Then **look at it** with Read. Most covers need a second pass for clipped text, overflow or a
crowded corner. Re-render until it is clean, then write the `thumbnail.alt` to match exactly what
the image shows, including its headline.

`npm run build` generates the optimised WebP versions under `nextImageExportOptimizer/`; commit
those along with the PNGs.
