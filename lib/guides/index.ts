/**
 * Content store for the /guides section (user-guide articles).
 *
 * Mirrors lib/posts.ts but with a richer block AST (images, steps, h3, video)
 * and guide-specific metadata (series, order, updated, faq, relatedSlugs) —
 * and, unlike posts.ts (small and static, so left flat), split one file per
 * guide: types live in ./types.ts, each article in ./content/<slug>.ts, and
 * this file registers them and exposes the helpers. Articles are authored one
 * per session — see user-guide/MASTER-PLAN.md for slugs, briefs and status.
 */

import type { Guide, GuideSeries } from "./types";
import { guideSeriesOrder } from "./types";

export type {
  Guide,
  GuideBlock,
  GuideFaq,
  GuideSeries,
  GuideStep,
} from "./types";
export { guideSeriesOrder } from "./types";

import { guide as gettingStartedWithXtk } from "./content/getting-started-with-xtk";
import { guide as connectDocumentStorage } from "./content/connect-document-storage";
import { guide as connectYourEmail } from "./content/connect-your-email";
import { guide as inviteYourTeam } from "./content/invite-your-team";
import { guide as manageClientDocuments } from "./content/manage-client-documents";
import { guide as bulkFileActions } from "./content/bulk-file-actions";
import { guide as documentTemplates } from "./content/document-templates";
import { guide as placeholderReference } from "./content/placeholder-reference";
import { guide as folderTemplates } from "./content/folder-templates";
import { guide as emailTemplates } from "./content/email-templates";
import { guide as howXtkHandlesYourData } from "./content/how-xtk-handles-your-data";

/**
 * The guide registry, in no particular order — helpers below sort. To publish
 * a guide: add ./content/<slug>.ts, then one import + one entry here. Keep
 * slugs/titles in sync with user-guide/MASTER-PLAN.md.
 */
export const guides: Guide[] = [
  gettingStartedWithXtk,
  connectDocumentStorage,
  connectYourEmail,
  inviteYourTeam,
  manageClientDocuments,
  bulkFileActions,
  documentTemplates,
  placeholderReference,
  folderTemplates,
  emailTemplates,
  howXtkHandlesYourData,
];

export function formatGuideDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** All guides in reading order: series order, then `order` within a series. */
export function getAllGuides(): Guide[] {
  return [...guides].sort((a, b) => {
    const s =
      guideSeriesOrder.indexOf(a.series) - guideSeriesOrder.indexOf(b.series);
    return s !== 0 ? s : a.order - b.order;
  });
}

/** Guides grouped by series, in series order; empty series omitted. */
export function getGuidesBySeries(): { series: GuideSeries; guides: Guide[] }[] {
  const all = getAllGuides();
  return guideSeriesOrder
    .map((series) => ({ series, guides: all.filter((g) => g.series === series) }))
    .filter((group) => group.guides.length > 0);
}

/** The guide's declared related guides, resolved and in declaration order. */
export function getRelatedGuides(slug: string): Guide[] {
  const current = getGuide(slug);
  if (!current) return [];
  return current.relatedSlugs
    .map((s) => getGuide(s))
    .filter((g): g is Guide => Boolean(g));
}

/** Previous/next guide within the full reading order (for series navigation). */
export function getAdjacentGuides(slug: string): {
  prev?: Guide;
  next?: Guide;
} {
  const all = getAllGuides();
  const i = all.findIndex((g) => g.slug === slug);
  if (i === -1) return {};
  return { prev: all[i - 1], next: all[i + 1] };
}
