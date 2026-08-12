import type { Guide } from "../types";

export const guide: Guide = {
  slug: "notifications",
  title: "XTK notifications: the bell, settings and desktop alerts",
  description:
    "Read the XTK notifications bell in Xero Practice Manager, choose Practice or Mine, switch any of the 13 per-type alerts, and turn on desktop notifications.",
  series: "Account & trust",
  order: 16,
  date: "2026-07-28",
  updated: "2026-07-28",
  readingTime: "10 min read",
  ogImage: "/images/guides/notifications/og.png",
  thumbnail: {
    src: "/images/guides/notifications/thumb.png",
    alt: "The XTK notifications bell open in Xero Practice Manager, showing a tray of unread signature, document request and client portal activity grouped by day",
  },
  relatedSlugs: [
    "document-requests",
    "send-documents-for-signature",
    "set-up-client-portal",
    "getting-started-with-xtk",
    "esignatures-what-your-client-sees",
  ],
  relatedLinks: [
    { label: "Support", href: "/support" },
  ],
  faq: [
    {
      q: "Why didn't a desktop notification appear?",
      a: "Almost always because an XPM tab was open: XTK alerts you only when none is open anywhere, and a background or minimised tab counts. Otherwise, check that the switch is on (it is off by default), that the browser is running, and that your operating system is allowing notifications for your browser — Do Not Disturb and Focus swallow them silently. “Send test notification” isolates that last cause, because it ignores the poll and the open-tab rule.",
    },
    {
      q: "Do XTK notifications duplicate Xero's own notifications?",
      a: "No — two bells, two lists. XTK's blue bell is the first icon in Practice Manager's row of tools, to the left of Xero's, and it reports only XTK activity: signature requests, document requests, client portal activity and your XTK connections. Xero's bell is untouched, and marking one tray read never affects the other.",
    },
    {
      q: "Does everyone in my practice see the same notifications?",
      a: "Everyone sees the same events but reads them independently: XTK stores one row per event for the whole practice, and your read state, badge and “Mark all read” affect only you. Two things narrow what you see — the Practice or Mine setting, and self-suppression, so you are never notified about your own actions. A new team member also starts empty, seeing only events from the moment they joined.",
    },
    {
      q: "Will XTK email me as well?",
      a: "No. XTK doesn't email staff about your own practice's activity — the bell, and optionally a desktop alert, is the staff surface. The emails XTK sends go outward, to clients and signers: invitations, document requests and completed signed documents. The one notification about email is “An email fails to send”, for when one of those didn't get through.",
    },
    {
      q: "How long do notifications stay in the tray?",
      a: "90 days, then XTK deletes them outright, read or unread, so the tray never becomes an archive. Within that window it loads the 20 most recent and “Load more” pages back through the rest. The badge displays at most “9+”, so 9+ can be any number from ten upwards.",
    },
  ],
  body: [
    {
      type: "p",
      text: "XTK adds its own notification bell to Xero Practice Manager (XPM), so you learn that a client has signed, uploaded or accepted an invitation without opening every client's tabs. Notifications live in three places: the bell and its tray in XPM's top bar, the settings in My Account (a Practice-or-Mine filter plus 13 switches), and desktop notifications for when no XPM tab is open.",
    },
    {
      type: "p",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited.",
    },
    {
      type: "callout",
      title: "Before you start",
      text: "You need XTK installed and signed in, and a Practice Manager tab open — the bell is injected into XPM's own top bar. There is no Admin-only gate: every team member has their own bell, settings and read state. In a read-only practice (expired trial or cancelled subscription) the bell still works, but settings changes and “Mark all read” don't save.",
    },
    {
      type: "h2",
      text: "Where is the XTK bell, and how is it different from Xero's?",
    },
    {
      type: "p",
      text: "Look at the round icons at the top right of Practice Manager, beside your initials: XTK's filled blue bell is the first of them, immediately left of Xero's own icons — including Xero's bell, which keeps its own separate list. A red badge counts your unread notifications, capping at “9+”, and refreshes about every 50 seconds or whenever you open the tray.",
    },
    {
      type: "image",
      src: "/images/guides/notifications/01-bell-and-tray.png",
      alt: "The XTK notifications bell open in Xero Practice Manager showing the tray of unread notifications grouped under Today and Yesterday, with the Mark all read link",
      caption:
        "XTK's blue bell sits first in Practice Manager's row of tools.",
      width: 1440,
      height: 757,
    },
    {
      type: "p",
      text: [
        "The bell isn't only on the client-facing pages. It renders on Practice Manager's older screens too — the ",
        { text: "job", href: "/guides/job-documents" },
        " and ",
        { text: "quote", href: "/guides/quote-documents" },
        " pages, which Xero serves from a different address — with the same tray and the same detail dialogs, so you don't have to go back to the client list to see what's happened.",
      ],
    },
    { type: "h2", text: "How do I read and clear the tray?" },
    {
      type: "steps",
      steps: [
        {
          title: "Click the blue bell",
          text: "The tray opens beneath it, headed “Notifications” with your unread count. Clicking outside it, or pressing Esc, closes it again.",
        },
        {
          title: "Read the list, newest first",
          text: "Rows are grouped under “Today”, “Yesterday” and “Earlier”, each a single line timestamped “just now”, “31 minutes ago”, a time of day for yesterday, or a dd/MM/yyyy date. Unread rows carry a blue dot; with nothing to show, the tray says “You're all caught up”.",
        },
        {
          title: "Click a row to open what it is about",
          text: "That marks it read and opens the matching detail dialog over the page, wherever you are in XPM.",
        },
        {
          title: "Page back through older activity",
          text: "The tray holds the 20 most recent notifications; “Load more” fetches the next 20, back to the 90-day limit.",
        },
        {
          title: "Clear the badge with “Mark all read”",
          text: "The link at the top right clears it for you and only you — your colleagues' badges are unaffected. It greys out when nothing is unread.",
        },
      ],
    },
    {
      type: "p",
      text: "The tray is a launcher, not a workspace — where a click takes you depends on the type:",
    },
    {
      type: "table",
      head: ["Notification about", "Clicking the row opens"],
      rows: [
        ["A signature request", "The signature request's detail dialog"],
        ["A document request", "The document request's detail dialog"],
        ["An email that failed", "The request the email belonged to"],
        ["A connection needing attention", "My Account, at that connection"],
        ["Client portal activity", "Nothing yet — it only marks it read"],
        ["A client accepting an invite", "Nothing yet — it only marks it read"],
      ],
      caption:
        "What a click on each kind of notification does.",
    },
    {
      type: "p",
      text: [
        "The signature dialog is the one the Signatures tab shows, and ",
        { text: "the document request dialog", href: "/guides/document-requests" },
        " is its read-only twin. A warning such as “Drive needs reconnecting” means an account XTK depends on has lost permission, so file actions or outgoing email fail until ",
        { text: "an Admin", href: "/guides/invite-your-team" },
        " reconnects it.",
      ],
    },
    {
      type: "image",
      src: "/images/guides/notifications/02-notification-detail-dialog.png",
      alt: "A document request detail dialog opened from a click in the XTK notifications tray, showing the provided count, each requested item marked Provided or Outstanding, and the uploaded files",
      width: 1440,
      height: 757,
    },
    {
      type: "h2",
      text: "Should I see the whole practice's activity, or only mine?",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Open the XTK panel",
          text: "In Practice Manager, click “XTK” in the main navigation; the panel opens on “My Account”.",
        },
        {
          title: "Find the “Notifications” column",
          text: "It sits beside your login details, starting with the row “Show notifications for”.",
        },
        {
          title: "Choose “Practice” or “Mine”",
          text: "The two buttons are a single switch. It saves immediately and the bell updates without a reload — there is no Save button in this panel.",
        },
      ],
    },
    {
      type: "image",
      src: "/images/guides/notifications/03-notification-settings.png",
      alt: "The Notifications settings in the XTK panel's My Account tab, showing the Practice and Mine scope switch and the Desktop notifications master toggle",
      caption:
        "Every setting here is per person and saves as you touch it.",
      width: 1440,
      height: 757,
    },
    {
      type: "p",
      text: "“Mine” is the default: only work you started — requests you created, activity on portals you enabled, and, if you are the Admin, connection warnings. “Practice” widens that to the whole practice. The setting filters your view rather than what XTK records, so switching either way is instant, retroactive and lossless.",
    },
    {
      type: "callout",
      title: "You are never notified about your own actions",
      text: "Whichever scope you choose, XTK suppresses notifications for actions you performed yourself — void a request and your colleagues hear about it, you don't. So a one-person practice sees fewer than it expects, but client-driven events still arrive: the client is not you.",
    },
    { type: "h2", text: "Which notifications can I switch off?" },
    {
      type: "p",
      text: "Below those two rows are four groups holding 13 switches. Each group header has a parent switch: click it to turn the whole group on, or off if it is already fully on. A group with mixed children shows a half-on parent — which is why Signatures and Document Requests start out looking partly on: two of the 13 are off by default, being the chattiest.",
    },
    {
      type: "table",
      head: ["Group", "Switch", "Default"],
      rows: [
        ["Signatures", "A recipient signs", "On"],
        ["Signatures", "Everyone has signed", "On"],
        ["Signatures", "A recipient declines", "On"],
        ["Signatures", "A request is voided", "On"],
        ["Signatures", "A recipient opens a request", "Off"],
        ["Document Requests", "A client submits documents", "On"],
        ["Document Requests", "A request is cancelled", "On"],
        ["Document Requests", "A request expires", "On"],
        ["Document Requests", "A client makes their first upload", "Off"],
        ["Portal activity", "A client uploads or creates files", "On"],
        ["Portal activity", "A client accepts an invite", "On"],
        ["System & integrations", "A connection needs attention", "On"],
        ["System & integrations", "An email fails to send", "On"],
      ],
      caption:
        "All 13 per-type notification switches in XTK, and how they start out.",
    },
    {
      type: "image",
      src: "/images/guides/notifications/04-per-type-toggles.png",
      alt: "The four groups of XTK notification settings — Signatures, Document Requests, Portal activity and System and integrations — with their 13 per-type switches",
      width: 1440,
      height: 757,
    },
    {
      type: "callout",
      title:
        "Switching a type off hides it, and switching it back on brings it back",
      text: "A switch you turn off filters that type out of your tray and badge, including notifications that already exist — the rows are still recorded, just hidden. Turn it back on and the history reappears, provided it is inside the 90-day window. Your settings never affect a colleague's tray.",
    },
    { type: "h2", text: "How do I turn on desktop notifications?" },
    {
      type: "p",
      text: "Desktop notifications are your operating system's own alerts — the banner in the corner of the screen — for when you aren't looking at Practice Manager at all. They are off until you turn them on.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Open My Account in the XTK panel",
          text: "Click “XTK” in Practice Manager's main navigation; the “Notifications” column is on the right.",
        },
        {
          title: "Switch on “Desktop notifications”",
          text: "The row's hint states the rule: “Show an OS notification for new activity — only when no Xero Practice Manager tab is open (an open tab surfaces it in the bell instead).”",
        },
        {
          title: "Click “Send test notification”",
          text: "The button appears under the row once the switch is on. It asks XTK's background worker for one alert immediately — titled “XTK”, reading “Test notification — desktop notifications are working.” — ignoring the rules about polling and open tabs, and notifying nobody but you.",
          image: {
            src: "/images/guides/notifications/05-send-test-notification.png",
            alt: "The Desktop notifications switch turned on in XTK's settings with the Send test notification button and the confirmation that a test desktop notification was sent",
            width: 780,
            height: 150,
          },
        },
        {
          title: "Read the confirmation carefully",
          text: "XTK reports “Sent.” once your browser accepted the alert, which is not the same as you seeing it — hence the rest of the message: if nothing appeared, check Do Not Disturb or Focus and your OS notification settings.",
        },
      ],
    },
    {
      type: "p",
      text: "You won't see a permission pop-up: XTK asks for that permission at install. Switching the feature on saves your preference and checks whether your operating system is letting your browser post alerts at all. If it isn't, the switch still turns on and warns underneath: “Desktop notifications are on, but your browser is blocked from showing them. Allow notifications for your browser in your operating system settings.”",
    },
    {
      type: "callout",
      title: "When a desktop alert will and won't appear",
      text: "The worker checks about once a minute, and alerts you only when desktop notifications are on and no XPM tab is open anywhere — a background tab, a minimised window or a second window all count as open, and hand the job to the bell. The first check after you switch the feature on alerts you about nothing by design, so you never get a burst for a backlog, and anything already read in the bell is skipped. Clicking an alert focuses your XPM tab, marks it read and opens the same detail dialog.",
    },
    {
      type: "h2",
      text: "The bar at the top of the page asking me to turn them on",
    },
    {
      type: "p",
      text: "Because the setting is buried in My Account, XTK also nudges you from the top of the page: a slim blue bar under your trial or billing bar, reading “Turn on desktop notifications to get alerted about new activity in XTK — even when Xero isn't open.”",
    },
    {
      type: "p",
      text: "The bar carries a “Turn on” action, a “Send test” shortcut and a dismiss control. Dismissing it is remembered on that browser, so once you've made your choice it stops asking.",
    },
    {
      type: "p",
      text: "“Turn on” does exactly what the switch in My Account does, then leaves the bar up so you can press “Send test”. The “✕” dismisses it for good on that browser — remembered through reloads and sign-outs, and it doesn't return if you later switch desktop notifications off.",
    },
    { type: "h2", text: "Troubleshooting: no desktop alert arrived" },
    {
      type: "p",
      text: "Work down the list — the first two explain most cases.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Is an XPM tab open anywhere? That alone suppresses every desktop alert, by design. Close them all and trigger the activity again, or use “Send test notification”, which ignores the rule.",
        "Is the switch on? It is off by default — and in a read-only practice a change silently fails to save, so it will be back off after a reload.",
        "Did the test alert appear? If yes, allow a minute for polling, and remember the first check after enabling alerts you about nothing. If not, the cause is at the OS level.",
        "Is your OS letting your browser post notifications? Check Do Not Disturb or Focus, and your browser's entry in your OS notification settings.",
        "Is the type switched on, and is your scope right? A switched-off type never reaches the tray or an alert, and on “Mine” you aren't alerted about a colleague's requests.",
        "Was it a follow-up upload? Files added within the hour roll into the row already in your tray, and fire no second alert — though the bell shows it as new.",
      ],
    },
    { type: "h2", text: "Where next" },
    {
      type: "p",
      text: [
        "Notifications only have something to report once the workflows behind them are running, so the next steps are the events themselves: ",
        { text: "requesting documents from clients", href: "/guides/document-requests" },
        ", ",
        { text: "sending documents for e-signature", href: "/guides/send-documents-for-signature" },
        ", and ",
        { text: "setting up a client portal", href: "/guides/set-up-client-portal" },
        ". If XTK is new to you, start with ",
        { text: "the getting-started guide", href: "/guides/getting-started-with-xtk" },
        ".",
      ],
    },
  ],
};
