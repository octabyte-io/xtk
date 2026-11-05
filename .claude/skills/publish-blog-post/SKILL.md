---
name: publish-blog-post
description: Research, write, SEO-check and publish a new blog post on the XTK marketing site (xtk.octabyte.io), using the SearchFit SEO plugin at each stage. Use this whenever the owner asks for a new post or article in this repo, in any phrasing ("write the next queued post", "do the next post from queue", "write a blog post about X", "publish a new article", "new SEO post", "add a post on …"), and also when they ask to research or pick the next blog topic. Covers topic and keyword research, cannibalization checks against existing posts, fact-checking against the xtk-app code, the post file, cover and social images, build checks, and commit and push.
---

# Publish a blog post on xtk.octabyte.io

A post here has to earn its ranking in a niche (Xero Practice Manager document and e-signature
workflow) where readers are professionals who notice vague or wrong claims. Three things make a
post work on this site, and the workflow below is built around them:

1. **It answers a real problem better than what already ranks.** That takes research before
   writing: practitioner threads, the current search results, and the gap between them.
2. **It owns one search phrase that no other page on the site owns.** The site is organised as
   three topic clusters, each with a pillar post, and every post links up to its pillar. A new post
   that targets an already-owned phrase competes with our own page (cannibalization) and both rank
   worse.
3. **Every XTK claim is true.** Claims are checked in the product code, because guides describe
   what users see while the code shows what actually happens. Past drafts promised features that
   didn't exist; the owner caught them.

Use the SearchFit skills as checklists at the stages named below. They tend to stop and ask
questions, so give them the inputs up front (site, audience, phrases, file) instead of handing the
questions on to the owner.

Repos (siblings in the folder above this repo, `../` from the xtk root):
- `xtk/`: this site. Remote `octabyte-io/xtk`, branch `main`. Commit and push here.
- `user-guide/`: covers' HTML, CONVENTIONS.md, PRODUCT-FACTS.md, FINDINGS.md. **Local only. Never
  add a remote or push**: it contains material that must not leave the machine. Commit locally.
- `xtk-app/`: the product source. Read only.
- `xtk/content-plan/`: briefs, queue, keyword map. Git-ignored; stays local.

Track the stages below as a todo list. Do them in order, because each one feeds the next.

---

## Stage 1: Pick the topic

- If the owner named a topic, use it, but still run the Stage 3 ownership check. If an existing
  post already owns the topic, say so and propose an angle that doesn't compete, or an update to
  that post.
- If they said "next queued post", open `content-plan/queue.md` and take the first unticked item.
  Its subject is fixed; its argument is not, so research before trusting its thesis.
- If the queue is finished (or there is none), research candidates: run
  `searchfit-seo:content-strategy` with the site context, the three clusters, and the ownership
  map, plus the demand sources in `references/research.md` §1. Bring back 3–4 topics, each with
  its demand evidence, primary phrase and cluster. Ask the owner to choose (AskUserQuestion),
  because topic choice is the owner's call. Write the approved list to a new `queue.md`, archiving
  the old one as `queue-<date>.md`.

Topic rules from the owner: **document and XPM workflow problems** (storing, naming, filing,
sending, collecting, signing, templates, bulk actions, getting files in and out of XPM). A
regulation can be context but never the subject: rules-led posts draw the wrong readers, carry
legal risk and go out of date.

## Stage 2: Research (before writing anything)

Follow `references/research.md`. In short:

1. **Demand**: find practitioners describing this problem (Xero Product Ideas threads, Xero
   Central, AccountingWEB). Note votes, dates and their words.
2. **Search results**: load WebSearch and WebFetch via ToolSearch, search the phrases a practice
   would type, and read the top 3–5 results. Write down what each covers and what it misses or gets
   wrong. That gap is the post's angle.
3. **Product truth**: for every planned XTK claim, find the proving line in `xtk-app` and note
   `file:line` plus the short sha.
4. **Primary sources**: re-open every page you'll cite, today.

Don't start drafting until the brief (Stage 4) can say what the post adds that the top results
don't. If you can't name that, the topic isn't ready. Tell the owner rather than writing a
me-too post.

## Stage 3: Keyword and cluster (SearchFit)

1. Invoke `searchfit-seo:keyword-clustering` with 10–25 candidate phrases from Stage 2, plus the
   site context, the clusters in `lib/posts/topics.ts` and `content-plan/seo-keyword-map.md`.
2. Pick **one primary phrase** no page owns, plus 3–6 secondary phrases, and the **topic** (cluster).
3. Slug = the primary phrase in kebab-case, short. Slugs are permanent.
4. If the best phrase is owned by an existing page, change the angle, or propose updating that page
   instead. Don't publish a competing post.

## Stage 4: Brief (SearchFit)

Invoke `searchfit-seo:content-brief` with the primary and secondary phrases, the gap from the search
results, the cluster and its pillar, and the audience. Then write the brief as
`content-plan/NN-<short-name>.md` (next number in sequence) in the house shape (see brief 32):
slug, category, date, markets, status, **Thesis**, the search-results gap, outline (h2 list),
**Primary/secondary phrases**, **seoTitle and description drafts**, internal links planned (pillar,
spokes, guide, and which existing post will link in), **XTK claims, checked against xtk-app <sha>**
with file:line, sources with checked dates, cover idea, and product observations.

## Stage 5: Write the post (SearchFit on-page rules)

Follow `references/post-format.md` for the file, the fields, the blocks and the voice. Read 2–3
recent posts first. Then:

- Create `lib/posts/content/<slug>.ts` and register it in `lib/posts/index.ts`.
- Put the primary phrase in the `seoTitle` (≤ 60), the description (120–158) and the first 100 words.
- Link once up to the pillar (early), 2–4 times across to neighbouring spokes, and at least once
  down to the relevant guide. Then **edit 1–2 existing posts to link to the new one**, so it isn't
  an orphan.
- FAQ only with questions readers really ask.
- Invoke `searchfit-seo:on-page-seo` on the new file (give it the primary phrase and the file path)
  and fix what it finds that fits the rules in post-format.md.

## Stage 6: Images

Follow `references/images.md`: a **new bespoke cover** (`thumb.png`) in the owner's style (one idea,
~15–25 words, a frame none of the recent covers uses), and `og.png` from the shared template using
the `seoTitle`. Look at both PNGs before moving on.

## Stage 7: Check everything

Run these from `xtk/`, and fix and re-run until all pass:

```sh
node .claude/skills/publish-blog-post/scripts/check-post.mjs <slug>   # SEO + links + orphan + overlap
npx tsc --noEmit -p . && npx eslint .
npm run build                                                         # also fails on broken links
```

`check-post.mjs` fails on: a title over 60, a description outside 120–158, no topic, a missing
image, no pillar link, links to unknown pages, or no inbound link. It warns on thin bodies and on
possible title overlap with another page. Treat an overlap warning as a real question: is that page
targeting the same search? Then invoke `searchfit-seo:seo-check` on the post file as a last
read-through.

Then confirm the rendered page in `out/blog/<slug>.html`: one `<title>` of the expected text, the
meta description, one `<h1>`, `BlogPosting` (+ `FAQPage` if there is an FAQ) JSON-LD that parses,
the "Part of our series" pillar link, and the URL present in `out/sitemap.xml` and `out/llms.txt`.

## Stage 8: Publish

1. Re-read the post once as a practitioner would. Does every XTK sentence have a checked line in the
   brief? Does it help a practice that never buys XTK?
2. Bookkeeping (local, git-ignored): finish the brief, add the README index line, tick the queue
   item, and add the row to `content-plan/seo-keyword-map.md`.
3. `xtk`: on `main`, stage the post, the index registration, the edits to inbound-linking posts,
   the images and the generated WebP files. Commit with a message like
   `blog: <short title>` (house style; see `git log`) and the attribution lines, then
   `git push origin main`. Pushing to main deploys the site through GitHub Pages; the owner's
   request to publish is the go-ahead for this push.
4. `user-guide`: commit the new cover HTML locally. **Do not push and never create a remote.**
5. Update the auto-memory note for the blog queue (what was written, its slug and commit, and what
   is next) so the next session knows where things stand.
6. Tell the owner, in plain words: the URL, the search phrase it targets and why that phrase was
   free, what the research found that competitors miss, any product observations, and that Search
   Console can be nudged with the sitemap.
