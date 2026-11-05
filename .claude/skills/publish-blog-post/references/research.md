# Research playbook

Research is the part that makes a post worth ranking. The site's best posts won because they found
something the top search results got wrong or left out, and because every XTK claim was checked
against the product's code. A post written from general knowledge reads like every other
accountancy blog and can quietly promise features XTK doesn't have.

Record everything in the brief as you go, with dates and URLs or file:line references. The brief
is what a future session (or the owner) uses to check the post.

## Contents
1. Demand: is this a real problem practices have?
2. The search results: what already ranks, and what it misses
3. Keyword choice with SearchFit
4. Product truth: xtk-app
5. Primary sources
6. Tool notes (what loads where)

---

## 1. Demand

Look for practitioners describing the problem in their own words. In order of usefulness:

- **Xero Product Ideas**, the Practice tools forum:
  `https://productideas.xero.com/forums/967127-practice-tools/filters/top?page=N&per_page=20`.
  Thread pages: `/suggestions/<id>`. Pages are server-rendered, so `curl` plus an HTML parser works
  without Chrome. Parse `li.uvIdea`, `.uvIdeaTitle a`, the first numeric `<strong>` is votes;
  in a thread, `.uvIdeaDescription`, `.uvUserActionBody` comments and `time[datetime]`. The forum's
  `/search?query=` redirects to Top and is useless; filter the full list yourself. Votes, the date
  posted, the latest comment date and the status ("Submitted", "Under review") are the numbers worth
  quoting.
- **Xero Central** (help articles). Use known article URLs; global search often redirects to a
  login. Accordion text sits in shadow DOM, so in Chrome you need to click and walk `shadowRoot`s.
  Some days it's blocked. If so, cite no Central page rather than citing from memory.
- **Xero's own www.xero.com pages** (curl works) are a citable primary source for what Xero's
  products do.
- **AccountingWEB** (Any Answers) and Reddit r/Accounting for practitioner threads. AccountingWEB
  can need about 8 seconds to load.

Note the reader's actual problem in one sentence. A queue entry fixes the subject, not the argument,
so research before trusting a queue item's thesis. Earlier queue theses have been wrong (see
brief 30, where the queue claimed something about per-client folders that turned out false).

## 2. The search results

Load WebSearch through ToolSearch (`select:WebSearch,WebFetch`) and search the two or three phrases
a practice would actually type, e.g. "xero practice manager <thing>", "<thing> for accountants",
and the plain question form. Open the top 3–5 organic results (WebFetch or curl) and note for each:

- what intent it serves (how-to, comparison, definition, vendor page);
- what it covers, and its rough length and structure;
- what it gets wrong, leaves out or dates badly. This gap becomes the post's angle.

If the results are all vendor landing pages, a genuinely useful article can win. If they are
Xero's own help pages answering exactly the question, pick a different angle or a different topic.
Write the findings in the brief under "Search results checked <date>".

## 3. Keyword choice with SearchFit

1. List 10–25 candidate phrases from the search results, the "People also ask" style questions,
   and the words practitioners used in the threads.
2. Invoke `searchfit-seo:keyword-clustering` with that list and the context below. It is a
   checklist that asks for keywords, site and goals, so supply them up front instead of letting it
   stop to ask:
   - site: https://xtk.octabyte.io, a Xero Practice Manager extension for documents, e-signatures,
     client requests and templates;
   - audience: staff at accounting practices on Xero (UK, AU, NZ);
   - existing clusters: the three topics in `lib/posts/topics.ts`;
   - the ownership map: `content-plan/seo-keyword-map.md`.
3. Choose **one primary phrase** that no existing page owns, plus 3–6 secondary phrases. If the
   best phrase is already owned, change the angle or add a row to an existing post instead of
   writing a competing page. That competition (cannibalization) was the main thing the
   2026-11-05 SEO pass had to undo.
4. Choose the topic cluster the post belongs to. If it fits none, raise it with the owner; a fourth
   topic needs a pillar too.

There is no keyword-volume tool here. Don't invent search volumes. Judge demand from the threads
and from whether the results look contested.

## 4. Product truth: xtk-app

`../xtk-app/` (from the xtk root) is the product: `backend/` (schema in
`backend/src/db/schema/`, procedures in `backend/src/router/` and feature folders), `web-portal/`
(portal, signing pages, e-sign editor), and the extension. The guides in `xtk/lib/guides/content/`
show what a user sees; the app code shows what the system does.

For every sentence in the draft that says XTK does, stores, sends, allows or prevents something,
find the line that proves it and write `file:line` in the brief's "XTK claims, checked against
xtk-app <short sha>" section (get the sha with `git -C ../xtk-app rev-parse --short HEAD`).
Things that have caught past drafts out:

- Field types: check the UI palette (`V1_PALETTE_FIELDS` in
  `web-portal/app/esign/[id]/edit/field-types.ts`), not the enum. Initials are not placeable.
- Everything in XTK is one client at a time. There is no bulk send across clients, no reminders and
  no scheduler, and roles are only `admin` and `member`.
- Signing needs no account (token link, 30-day expiry). The client portal does use a password.
- Where files land: signed copies go beside the original, request uploads go to the folder chosen,
  generated letters go to the folder being viewed. Don't say files "file themselves".
- Read the fixed system emails (`signing-mail`, `signing-flow/complete.ts`) before describing what
  a client receives.
- `user-guide/PRODUCT-FACTS.md` points into the code, and `user-guide/FINDINGS.md` lists known
  defects. Never present a known defect as working.

Anything the code shows is broken or surprising goes in the brief under "Product observations, for
the owner, NOT fixed". Don't fix product code from a blog session.

## 5. Primary sources

Re-open every page you cite on the day you cite it, and build each claim from the primary page,
not from a secondary summary or an earlier post. Prefer the regulator, the vendor's own pricing or
help page, or the professional body. Quote sparingly and never reproduce member-licensed text
(e.g. ICAEW helpsheet clauses). Put "last checked <date>" wherever prices or rules appear.

## 6. Tool notes

- icaew.com blocks Chrome automation, but curl with a browser User-Agent works.
- Large page text: Chrome tool output truncates around 1,000 characters. Write extracted text into
  `document.body` as `<pre>` and read it with `get_page_text` (~20k chars).
- Long in-page loops time out at ~45 s: start parallel fetches inside the page, store results on
  `window`, then poll.
