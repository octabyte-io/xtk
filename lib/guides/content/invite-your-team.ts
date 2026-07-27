import type { Guide } from "../types";

export const guide: Guide = {
  slug: "invite-your-team",
  title: "Invite your team to XTK: members, roles and admin transfer",
  description:
    "Invite team members to XTK from Xero Practice Manager, see what the Admin role controls, transfer Admin to a colleague, and remove or restore members.",
  series: "Getting started",
  order: 4,
  date: "2026-07-27",
  updated: "2026-07-27",
  readingTime: "6 min read",
  ogImage: "/images/guides/invite-your-team/og.png",
  thumbnail: {
    src: "/images/guides/invite-your-team/thumb.png",
    alt: "The XTK Team Members tab in Xero Practice Manager showing a roster of team members with their roles and statuses",
  },
  relatedSlugs: [
    "getting-started-with-xtk",
    "connect-document-storage",
    "connect-your-email",
    "billing-trial-and-subscription",
  ],
  faq: [
    {
      q: "Does each team member need their own XTK subscription?",
      a: "No. One subscription (or one free trial) covers the whole practice — there is no per-seat pricing. Invite as many colleagues as you like; each signs in with their own email and password.",
    },
    {
      q: "Can our practice have two Admins?",
      a: "No — there is exactly one Admin at a time. The Admin is the only person who can connect document storage, connect the shared practice mailbox, manage the team and handle billing. If the wrong person holds the role, transfer it from the Team Members tab: the moment you make a colleague the Admin, you become a Member.",
    },
    {
      q: "What if the invite expires or never arrives?",
      a: "Invite links are single-use and expire after 7 days. Just invite the same email again — XTK sends a fresh link and the old one stops working. If the email hasn't arrived at all, ask your colleague to check their spam folder before you resend.",
    },
    {
      q: "Can I bring back someone I removed?",
      a: "Yes. Removing a member hides them rather than erasing them — tick “Show deleted” to see removed members. To restore someone, simply invite the same email address again; they set a new password and rejoin with their old account.",
    },
    {
      q: "Why is there no “forgot password” link on the staff sign-in page?",
      a: "Staff passwords are changed from inside XTK: open the panel, go to My Account and choose Change password. If a colleague is locked out entirely, the Admin can remove them and re-invite the same email — accepting the fresh invite lets them set a brand-new password.",
    },
  ],
  body: [
    {
      type: "p",
      text: "One XTK subscription covers your whole practice, so once you're set up the next step is bringing everyone else in. The practice Admin invites colleagues by email from the Team Members tab in the XTK panel; each person clicks their invite link, chooses a password and lands signed in — ready to use XTK inside Xero Practice Manager (XPM) with their own account. This guide covers inviting, what Members can and can't do, handing the Admin role to someone else, and removing or restoring a member.",
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "Only the practice Admin — the person who registered the practice, unless the role has been transferred — can invite, remove or promote team members. You'll need each colleague's email address, and they'll need the XTK extension installed in their own browser plus their own Practice Manager login. New to XTK? Start with the getting-started guide.",
    },
    { type: "h2", text: "How team access works in XTK" },
    {
      type: "p",
      text: "Every practice has exactly one Admin; everyone else is a Member. Members use all the day-to-day features — documents, templates, signatures, document requests and the client portal — on the same shared storage and practice mailbox. Four things are reserved for the Admin: connecting or changing document storage, connecting the shared practice mailbox, managing the team, and billing. Members see the Document Storage tab as read-only information, and the Team Members and Billing & Subscription tabs don't appear for them at all.",
    },
    { type: "h2", text: "Invite a team member" },
    {
      type: "steps",
      steps: [
        {
          title: "Open the Team Members tab",
          text: "In Practice Manager, click the XTK launcher — the last item in the main navigation — then click “Team Members”. You'll see everyone in your practice with their role and status.",
          image: {
            src: "/images/guides/invite-your-team/01-team-members-roster.png",
            alt: "The Team Members tab in the XTK panel listing team members with roles and statuses, a filter box, a Show deleted toggle and an Invite member button",
            width: 1456,
            height: 822,
          },
        },
        {
          title: "Click “Invite member”",
          text: "The invite dialog opens with a single field.",
        },
        {
          title: "Enter their email and click “Invite”",
          text: "XTK emails your colleague a single-use invite link that's valid for 7 days.",
          image: {
            src: "/images/guides/invite-your-team/02-invite-member-dialog.png",
            alt: "XTK's Invite member dialog with an email address filled in, ready to add team members to the practice",
            width: 1456,
            height: 822,
          },
        },
        {
          title: "Watch for the new row",
          text: "Your colleague appears in the list straight away as “Member · Invited”, flipping to “Active” once they accept.",
        },
      ],
    },
    {
      type: "callout",
      title: "One practice per email",
      text: "An email address can only belong to one practice on XTK. If you see “That email is already attached to another Practice on XTK”, your colleague has an account elsewhere — they'll need to use a different address for yours.",
    },
    { type: "h2", text: "What your colleague sees" },
    {
      type: "steps",
      steps: [
        {
          title: "They open the invite email",
          text: "It's titled “You've been invited to XTK” and names your practice and the person who sent it. They click “Accept invitation” within 7 days.",
        },
        {
          title: "They choose a password",
          text: "The link opens the “Join your team on XTK” page, where they set a password of at least 8 characters and click “Set password and join”.",
          image: {
            src: "/images/guides/invite-your-team/04-accept-invite.png",
            alt: "The Join your team on XTK page where an invited team member sets a password to finish creating their account",
            width: 1456,
            height: 822,
          },
        },
        {
          title: "They're in — no verification step",
          text: "Accepting the invite signs them straight in. With the XTK extension installed in their browser, they open Practice Manager and everything is already connected — storage, templates and the practice mailbox are shared automatically.",
        },
      ],
    },
    {
      type: "callout",
      title: "Passwords change from My Account",
      text: "There is no “forgot password” link on the staff sign-in page. To change a password, open the XTK panel, go to My Account and click Change next to Password. If someone is locked out completely, the Admin can remove them and re-invite the same email — the fresh invite lets them set a new password.",
    },
    { type: "h2", text: "Transfer the Admin role" },
    {
      type: "p",
      text: "Handing over the practice — or just giving the role to the person who actually manages billing? The Admin role moves in one step, and because there is only ever one Admin, promoting a colleague automatically makes you a Member.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Open the member's row menu",
          text: "In “Team Members”, click the three-dot menu on your colleague's row. “Make admin” is offered only for members who have accepted their invite — you can't hand the role to someone still marked Invited.",
        },
        {
          title: "Click “Make admin” and confirm",
          text: "XTK spells out what changes: they gain full practice access, and you become a Member.",
          image: {
            src: "/images/guides/invite-your-team/03-make-admin-confirm.png",
            alt: "XTK's Make admin confirmation dialog explaining that the chosen member gains full practice access and the current Admin becomes a Member",
            width: 1456,
            height: 822,
          },
        },
        {
          title: "The role moves instantly",
          text: "Your colleague is now the Admin and the admin-only tabs leave your panel. If they have Practice Manager open at that moment, they should refresh the page to see their new Team Members and Billing tabs appear.",
        },
      ],
    },
    { type: "h2", text: "Remove a member — and bring them back" },
    {
      type: "p",
      text: "When someone leaves the practice, remove them from the same row menu: click the three-dot menu, choose “Delete” and confirm. They are signed out of XTK immediately on every device and their row disappears from the list. Nothing they worked on goes with them — client documents live in your practice's storage, and templates and requests belong to the practice.",
    },
    {
      type: "p",
      text: "Removal is reversible. Tick “Show deleted” above the list to see removed members, struck through with a “Deleted” status. To restore someone, invite the same email address again: they accept the fresh invite, choose a new password and rejoin as a Member.",
    },
    {
      type: "callout",
      title: "A few guard rails",
      text: "You can't remove yourself, and you can't transfer the Admin role to yourself. To leave a practice as the Admin, make a colleague the Admin first — then they can remove you.",
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: "With the team on board, everyone shares the same storage, templates and mailbox — so anything one person sets up benefits the whole practice. If you're still in your trial, the billing guide below explains what happens when it ends and how upgrading covers everyone at once.",
    },
  ],
};
