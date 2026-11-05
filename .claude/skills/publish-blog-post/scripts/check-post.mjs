#!/usr/bin/env node
// SEO + structure gate for one XTK blog post. Run from the xtk repo root:
//   node .claude/skills/publish-blog-post/scripts/check-post.mjs <slug>
// Exits 1 if any hard check fails. Warnings don't fail but should be read.
//
// Node can't import the TS content store directly (extensionless relative
// imports), so this copies lib/ to a temp dir, adds ".ts" to relative
// specifiers, and imports it with --experimental-strip-types.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const slug = process.argv[2];
if (!slug) {
  console.error("usage: check-post.mjs <slug>");
  process.exit(2);
}
const root = process.cwd();
if (!fs.existsSync(path.join(root, "lib/posts/index.ts"))) {
  console.error("run from the xtk repo root (lib/posts/index.ts not found)");
  process.exit(2);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "check-post-"));
fs.cpSync(path.join(root, "lib"), path.join(tmp, "lib"), { recursive: true });
const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)],
  );
for (const f of walk(tmp).filter((f) => f.endsWith(".ts"))) {
  const s = fs.readFileSync(f, "utf8");
  fs.writeFileSync(f, s.replace(/(from\s+"\.{1,2}\/[^"]+?)(?<!\.ts)"/g, '$1.ts"'));
}

const runner = path.join(tmp, "run.mts");
fs.writeFileSync(
  runner,
  `
import { posts, topics, postSeoTitle, postDescription } from "${tmp}/lib/posts/index.ts";
import { guides } from "${tmp}/lib/guides/index.ts";
const slug = ${JSON.stringify(slug)};
const p = posts.find((x) => x.slug === slug);
const fail = [], warn = [], info = [];
if (!p) { console.log(JSON.stringify({ fail: ["post not registered in lib/posts/index.ts"], warn, info })); process.exit(0); }

const text = (inl) => typeof inl === "string" ? inl : inl.map((x) => typeof x === "string" ? x : x.text).join("");
const links = [];
const collect = (inl) => { if (Array.isArray(inl)) for (const x of inl) if (typeof x !== "string") links.push(x.href); };
let words = 0, h2 = [];
for (const b of p.body) {
  if (b.type === "p" || b.type === "callout") { words += text(b.text).split(/\\s+/).length; collect(b.text); }
  if (b.type === "list") for (const i of b.items) { words += text(i).split(/\\s+/).length; collect(i); }
  if (b.type === "table") for (const r of b.rows) for (const c of r) { words += text(c).split(/\\s+/).length; collect(c); }
  if (b.type === "quote") words += b.text.split(/\\s+/).length;
  if (b.type === "h2") h2.push(b.text);
}
const seo = postSeoTitle(p), desc = postDescription(p);
info.push("rendered <title> (" + seo.length + "): " + seo);
info.push("description (" + desc.length + "): " + desc);
info.push("body words ~" + words + ", h2 sections " + h2.length + ", faq " + (p.faq?.length ?? 0) + ", readingTime " + p.readingTime);

if (seo.length > 60) fail.push("rendered title is " + seo.length + " chars (> 60): set a shorter seoTitle");
if (!p.description) fail.push("no description field (excerpt would be used)");
else if (desc.length < 120 || desc.length > 158) fail.push("description is " + desc.length + " chars (want 120-158)");
if (!p.topic) fail.push("no topic set");
if (!p.ogImage) fail.push("no ogImage");
if (!p.thumbnail) fail.push("no thumbnail");
for (const img of [p.ogImage, p.thumbnail?.src].filter(Boolean))
  if (!(await import("node:fs")).existsSync("${root}/public" + img)) fail.push("image file missing: public" + img);
if (words < 1200) warn.push("body is only ~" + words + " words; house range is 1,500-2,800");
if (h2.length < 4) warn.push("only " + h2.length + " h2 sections");

const postSlugs = new Set(posts.map((x) => x.slug)), guideSlugs = new Set(guides.map((g) => g.slug));
for (const s of p.relatedSlugs ?? []) if (!postSlugs.has(s)) fail.push("relatedSlugs has unknown slug " + s);
const internal = links.filter((h) => h.startsWith("/"));
const blogLinks = internal.filter((h) => h.startsWith("/blog/")).map((h) => h.slice(6).split("#")[0]);
const guideLinks = internal.filter((h) => h.startsWith("/guides/")).map((h) => h.slice(8).split("#")[0]);
for (const s of blogLinks) if (!postSlugs.has(s)) fail.push("inline link to unknown post /blog/" + s);
for (const s of guideLinks) if (!guideSlugs.has(s)) fail.push("inline link to unknown guide /guides/" + s);
info.push("inline links: " + blogLinks.length + " to posts, " + guideLinks.length + " to guides, " + (links.length - internal.length) + " external");

if (p.topic) {
  const pillar = topics[p.topic].pillarSlug;
  if (pillar !== slug && !blogLinks.includes(pillar)) fail.push("no inline link to the topic pillar /blog/" + pillar);
}
if (guideLinks.length === 0) warn.push("no inline link to any guide (the how-to for the XTK steps)");
if (blogLinks.length < 3) warn.push("fewer than 3 inline links to other posts");

// Inbound: which other posts/guides link here?
const inbound = [];
for (const o of posts) if (o.slug !== slug && JSON.stringify(o).includes('"/blog/' + slug + '"')) inbound.push("post " + o.slug);
for (const g of guides) if (JSON.stringify(g).includes('"/blog/' + slug + '"')) inbound.push("guide " + g.slug);
info.push("inbound links from: " + (inbound.join(", ") || "none"));
if (inbound.length === 0) fail.push("orphan: no existing post or guide links to this post");

// Cannibalization: another page whose title/seoTitle shares most of this seoTitle's words.
const stop = new Set("a an the and or of for to in on with your you how what why is are from by it its xero practice manager xpm xtk accountants accountant client clients".split(" "));
const toks = (s) => new Set(s.toLowerCase().replace(/[^a-z0-9 -]/g, " ").split(/\\s+/).filter((w) => w.length > 1 && !stop.has(w)));
const mine = toks(p.seoTitle ?? p.title);
const others = [...posts.filter((o) => o.slug !== slug).map((o) => ["post " + o.slug, o.seoTitle ?? o.title]), ...guides.map((g) => ["guide " + g.slug, g.title])];
for (const [who, t] of others) {
  const theirs = toks(t); const shared = [...mine].filter((w) => theirs.has(w));
  if (shared.length >= 2 && shared.length / mine.size >= 0.6) warn.push("possible cannibalization with " + who + ' ("' + t + '"), shared: ' + shared.join(", "));
}
console.log(JSON.stringify({ fail, warn, info }));
`,
);

let out;
try {
  out = execFileSync(process.execPath, ["--no-warnings", "--experimental-strip-types", runner], { encoding: "utf8" });
} catch (e) {
  console.error(e.stdout || "", e.stderr || e.message);
  process.exit(2);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
const { fail, warn, info } = JSON.parse(out.trim().split("\n").at(-1));
for (const l of info) console.log("  " + l);
for (const l of warn) console.log("WARN " + l);
for (const l of fail) console.log("FAIL " + l);
console.log(fail.length ? `\n${fail.length} failing check(s)` : "\nall hard checks pass");
process.exit(fail.length ? 1 : 0);
