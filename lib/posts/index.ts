/**
 * Content store for the /blog section. One file per post in ./content, types in
 * ./types.ts — the same layout as lib/guides. To publish a post: add
 * ./content/<slug>.ts, then one import + one entry in `posts` below.
 */

import type { Post, RelatedLink } from "./types";
import { topics } from "./topics";
import { TITLE_TEMPLATE } from "../site";

export type {
  Faq,
  Post,
  PostBlock,
  PostCategory,
  PostTopic,
  RelatedLink,
} from "./types";
export { topics } from "./topics";

import { post as introducingXtk } from "./content/introducing-xtk";
import { post as eSignaturesInsideXpm } from "./content/e-signatures-inside-xpm";
import { post as organiseClientDocumentsGoogleDrive } from "./content/organise-client-documents-google-drive";
import { post as clientPortalsClientsActuallyUse } from "./content/client-portals-clients-actually-use";
import { post as stopRetypingClientData } from "./content/stop-retyping-client-data";
import { post as xeroPracticeManagerDocumentManagement } from "./content/xero-practice-manager-document-management";
import { post as stopChasingClientsForDocuments } from "./content/stop-chasing-clients-for-documents";
import { post as esignatureLegalityForAccountants } from "./content/esignature-legality-for-accountants";
import { post as accountingClientOnboardingChecklist } from "./content/accounting-client-onboarding-checklist";
import { post as documentManagementForXeroPracticesCompared } from "./content/document-management-for-xero-practices-compared";
import { post as howLongAccountantsKeepClientRecords } from "./content/how-long-accountants-keep-client-records";
import { post as xeroPracticeManagerJobDocuments } from "./content/xero-practice-manager-job-documents";
import { post as xeroPartnerHubWhatHappensToYourDocuments } from "./content/xero-partner-hub-what-happens-to-your-documents";
import { post as busySeasonTriageForAccountingPractices } from "./content/busy-season-triage-for-accounting-practices";
import { post as makingTaxDigitalQuarterlyDocumentCollection } from "./content/making-tax-digital-quarterly-document-collection";
import { post as xeroWorkpapersAndYourClientDocuments } from "./content/xero-workpapers-and-your-client-documents";
import { post as whatLeavingADocumentSystemCosts } from "./content/what-leaving-a-document-system-costs";
import { post as companiesHouseIdentityVerificationRecords } from "./content/companies-house-identity-verification-records";
import { post as icaewEngagementLetterUpdate2026 } from "./content/icaew-engagement-letter-update-2026";
import { post as xeroPracticeManagerSharepointOnedrive } from "./content/xero-practice-manager-sharepoint-onedrive";
import { post as howToNameClientFiles } from "./content/how-to-name-client-files";
import { post as yearEndPackXeroPracticeManager } from "./content/year-end-pack-xero-practice-manager";
import { post as sendDocumentsToClientsWithoutAttachments } from "./content/send-documents-to-clients-without-attachments";
import { post as accountantsLetterForAHomeLoan } from "./content/accountants-letter-for-a-home-loan";
import { post as xeroPracticeManagerGoogleSharedDrive } from "./content/xero-practice-manager-google-shared-drive";
import { post as handingClientFilesToNewAccountant } from "./content/handing-client-files-to-new-accountant";
import { post as whichClientContactGetsWhichDocument } from "./content/which-client-contact-gets-which-document";
import { post as fixASignatureRequestAfterSending } from "./content/fix-a-signature-request-after-sending";
import { post as coveringEmailForClientDocuments } from "./content/covering-email-for-client-documents";
import { post as esignatureFormsClientsFillIn } from "./content/esignature-forms-clients-fill-in";
import { post as keepARecordOfWhatYouSentClients } from "./content/keep-a-record-of-what-you-sent-clients";
import { post as signedDocumentsBackWhoDealsWithThem } from "./content/signed-documents-back-who-deals-with-them";
import { post as oneSignerSignedOnPaper } from "./content/one-signer-signed-on-paper";
import { post as duplicateClientRecordsAndTheirDocuments } from "./content/duplicate-client-records-and-their-documents";
import { post as emailBouncedDocumentNeverArrived } from "./content/email-bounced-document-never-arrived";
import { post as clientsCantLogInToSign } from "./content/clients-cant-log-in-to-sign";

export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export const posts: Post[] = [
  introducingXtk,
  eSignaturesInsideXpm,
  organiseClientDocumentsGoogleDrive,
  clientPortalsClientsActuallyUse,
  stopRetypingClientData,
  xeroPracticeManagerDocumentManagement,
  stopChasingClientsForDocuments,
  esignatureLegalityForAccountants,
  accountingClientOnboardingChecklist,
  documentManagementForXeroPracticesCompared,
  howLongAccountantsKeepClientRecords,
  xeroPracticeManagerJobDocuments,
  xeroPartnerHubWhatHappensToYourDocuments,
  busySeasonTriageForAccountingPractices,
  makingTaxDigitalQuarterlyDocumentCollection,
  xeroWorkpapersAndYourClientDocuments,
  whatLeavingADocumentSystemCosts,
  companiesHouseIdentityVerificationRecords,
  icaewEngagementLetterUpdate2026,
  xeroPracticeManagerSharepointOnedrive,
  howToNameClientFiles,
  yearEndPackXeroPracticeManager,
  sendDocumentsToClientsWithoutAttachments,
  accountantsLetterForAHomeLoan,
  xeroPracticeManagerGoogleSharedDrive,
  handingClientFilesToNewAccountant,
  whichClientContactGetsWhichDocument,
  fixASignatureRequestAfterSending,
  coveringEmailForClientDocuments,
  esignatureFormsClientsFillIn,
  keepARecordOfWhatYouSentClients,
  signedDocumentsBackWhoDealsWithThem,
  oneSignerSignedOnPaper,
  duplicateClientRecordsAndTheirDocuments,
  emailBouncedDocumentNeverArrived,
  clientsCantLogInToSign,
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts for the index, newest first. */
export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Other posts to suggest under an article. Curated `relatedSlugs` win; without
 * them, fall back to same category first, then newest.
 */
export function getRelatedPosts(slug: string, count = 2): Post[] {
  const current = getPost(slug);
  const others = getAllPosts().filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, count);
  if (current.relatedSlugs?.length) {
    return current.relatedSlugs
      .map((s) => getPost(s))
      .filter((p): p is Post => p !== undefined && p.slug !== slug)
      .slice(0, count);
  }
  return [
    ...others.filter((p) => p.category === current.category),
    ...others.filter((p) => p.category !== current.category),
  ].slice(0, count);
}

/**
 * The post's declared non-post related links, in declaration order. Mirrors
 * `getRelatedLinks` in lib/guides/index.ts.
 */
export function getPostRelatedLinks(slug: string): RelatedLink[] {
  return getPost(slug)?.relatedLinks ?? [];
}

/** The search-result title: `seoTitle` (or `title`), branded only if it fits. */
export function postSeoTitle(post: Post): string {
  const base = post.seoTitle ?? post.title;
  const branded = TITLE_TEMPLATE.replace("%s", base);
  return branded.length <= 60 ? branded : base;
}

/** Meta description: the dedicated field, else the card excerpt. */
export function postDescription(post: Post): string {
  return post.description ?? post.excerpt;
}

/** The pillar post of this post's topic, unless this post is the pillar. */
export function getTopicPillar(slug: string): Post | undefined {
  const topic = getPost(slug)?.topic;
  if (!topic) return undefined;
  const pillarSlug = topics[topic].pillarSlug;
  return pillarSlug === slug ? undefined : getPost(pillarSlug);
}

/** Every other post in a pillar's topic, newest first; empty for non-pillars. */
export function getTopicSpokes(slug: string): Post[] {
  const topic = getPost(slug)?.topic;
  if (!topic || topics[topic].pillarSlug !== slug) return [];
  return getAllPosts().filter((p) => p.topic === topic && p.slug !== slug);
}
