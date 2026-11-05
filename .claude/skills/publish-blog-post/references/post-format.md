# Post file format and on-page SEO rules

## The file

One post = one file, `lib/posts/content/<slug>.ts`, registered in `lib/posts/index.ts` (one
`import { post as <camelCaseSlug> } from "./content/<slug>";` and one entry in the `posts` array).
Types are in `lib/posts/types.ts`. Read two or three recent posts in full before drafting (sort the
folder by `date`); they are the voice reference.

```ts
import type { Post } from "../types";

export const post: Post = {
  slug: "kebab-case-primary-phrase",       // permanent: never change after publishing
  title: "The H1: may be conversational, any length",
  seoTitle: "Primary phrase first, ≤ 60 chars", // needed when title > 60 or lacks the phrase
  description:
    "120–158 chars. Primary phrase in the first sentence; say what the reader gets.",
  excerpt:
    "Card teaser, 1–3 sentences. Can be longer than the description.",
  date: "YYYY-MM-DD",                        // today
  readingTime: "N min read",                 // body words ÷ 200, rounded
  category: "Practice tips",                 // "Product" | "Guides" | "Practice tips" | "Company"
  topic: "e-signatures",                     // a key of lib/posts/topics.ts
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/<slug>/og.png",
  thumbnail: { src: "/images/blog/<slug>/thumb.png", alt: "What the cover actually shows" },
  relatedSlugs: ["closest-spoke", "next-closest", "pillar-or-other"],     // 3, best first
  relatedLinks: [{ label: "Guide's real title or a short form", href: "/guides/<slug>" }],
  body: [ /* blocks */ ],
  faq: [ /* optional, see below */ ],
};
```

`" — XTK"` is appended to `seoTitle` automatically only if the result still fits in 60 characters.
Don't add it yourself.

### Body blocks

`p`, `h2`, `list` (`ordered?: true`), `quote` (`cite?`), `callout` (`title` + `text`) and `table`
(`head`, `rows`, `caption?`). Links are allowed only in `Inline` fields: `p.text`, list items,
`callout.text` and table cells. They are not allowed in `h2`, `quote`, callout titles, table
headers or captions.

```ts
{ type: "p", text: [
  "Plain text, then ",
  { text: "natural anchor words", href: "/blog/other-slug" },
  ", then more text.",
] }
```

`href` must be an existing route (`/blog/<slug>`, `/guides/<slug>`, `/pricing`, …) or a full
`https://` URL. The build's `assertContentLinks()` fails on a broken internal link.

## On-page SEO rules (what `searchfit-seo:on-page-seo` checks, applied to this site)

- **One H1** (the `title`); the page template renders it. Body headings are `h2` only, and each
  should read as an answer or step a skimmer could act on. Put the primary or a secondary phrase in
  one or two h2s where it reads naturally, not in all of them.
- **First 100 words**: name the reader's problem and the primary phrase, and say what the article
  will give them. The house pattern is a one-paragraph answer, then a sentence listing what the
  article covers.
- **Length**: 1,500–2,800 body words. Long enough to be the best answer, not padded. A table is
  worth it only for genuinely tabular comparisons (it's the hardest thing to read on a phone).
- **Internal links** (the pyramid; this is what tells Google which page owns which phrase):
  - one inline link **up to the topic pillar**, early, with descriptive anchor text;
  - 2–4 inline links **across** to the spokes that own the neighbouring subtopics. Link instead of
    re-explaining them;
  - at least one link **down** to the guide with the XTK steps;
  - vary the anchor text; never "click here";
  - **inbound**: edit 1–2 existing posts (and the relevant guide's `relatedLinks` if it fits) so
    something links to the new post. A post nothing links to is an orphan. The topic pillar lists
    it automatically, but add at least one contextual inline link from the most related spoke.
- **External links**: cite primary sources inline with the claim they support.
- **FAQ**: only questions readers really arrive with (from the threads or the questions you saw in
  search). 3–5 is typical. Answers are plain strings, 1–3 sentences, and must not contradict the
  body. FAQs render as `FAQPage` JSON-LD automatically.
- **Structured data**: `BlogPosting`, `BreadcrumbList` and `FAQPage` are generated from the post by
  `lib/structured-data.ts`. Don't hand-write JSON-LD. `searchfit-seo:schema-markup` is only needed
  if a post needs a type the site doesn't emit yet, and that's a code change to discuss first.
- **Images**: the cover's `alt` describes what the image shows, including its headline text.

## Voice

British spelling; sentence-case headings; no exclamation marks; no "In today's fast-paced world".
Concrete over enthusiastic: name the file, the field, the email and the number. XTK appears where it
genuinely solves the problem, with an honest callout when it doesn't. Recent posts often carry an
"XTK and Xero" or "What XTK does not do here" callout. The post must be useful to a practice that
never buys XTK and stays on Xero's own document packs. Topics are document and XPM workflow first;
a regulation can be context but never the subject.

## Bookkeeping after publishing

- Brief `content-plan/NN-<short-name>.md`: set the status to ✅ written <date> and record what
  changed from the plan, the claims checked, the cover, the numbers (words, reading time, build
  result) and product observations. Use brief 32 as the shape.
- `content-plan/README.md`: add the index line for the brief.
- `content-plan/queue.md`: tick the item if it came from the queue.
- `content-plan/seo-keyword-map.md`: add a row giving the new post's primary phrase and its owner.
- `content-plan/` is git-ignored: these files stay local and are not committed.
