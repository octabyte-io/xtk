import type { Post } from "../types";

export const post: Post = {
  slug: "busy-season-triage-for-accounting-practices",
  title: "Busy-season triage: how to order the work when it all arrives at once",
  seoTitle: "Busy season triage for accounting practices",
  description:
    "Busy season triage for accounting practices: how to order the work when it all arrives at once, and why the ATO and Inland Revenue put late clients first.",
  excerpt:
    "The crush isn't a client behaviour problem, it's a calendar design problem — and two of the three revenue authorities have already solved it. Both solved it the same way, and both put your least reliable clients first.",
  date: "2026-08-17",
  readingTime: "15 min read",
  category: "Practice tips",
  topic: "client-documents",
  author: { name: "The XTK team", role: "Product" },
  ogImage: "/images/blog/busy-season-triage-for-accounting-practices/og.png",
  thumbnail: {
    src: "/images/blog/busy-season-triage-for-accounting-practices/thumb.png",
    alt: "Two calendars compared: one with a single January deadline and 475,722 returns stacked on the final day, beside a tiered calendar spreading the same work across 31 October, 31 January, 28 February, 31 March and 15 May, with the first tier labelled clients who were late last year",
  },
  relatedSlugs: [
    "stop-chasing-clients-for-documents",
    "making-tax-digital-quarterly-document-collection",
    "xero-practice-manager-job-documents",
    "accounting-client-onboarding-checklist",
  ],
  relatedLinks: [
    { label: "Document requests", href: "/guides/document-requests" },
    { label: "Notifications", href: "/guides/notifications" },
    { label: "Folder templates", href: "/guides/folder-templates" },
    { label: "Pricing", href: "/pricing" },
  ],
  body: [
    {
      type: "p",
      text: "Sort by readiness, not by arrival order. Three buckets — ready, blocked on the client, blocked on us — re-sorted weekly, and inside “ready” you work the earliest statutory deadline first. If your revenue authority already tiers its deadlines, copy the tiering rather than inventing one: it has done the prioritising for you, and it puts your least reliable clients at the front.",
    },
    {
      type: "p",
      text: "That last part is the one most practices get backwards, and it is the argument of this article. Everything below runs with no software you do not already have.",
    },
    { type: "h2", text: "What does triage actually mean in a practice?" },
    {
      type: "p",
      text: "Sorting by state rather than by sequence. The word comes from medicine, where the sort has three properties worth stealing: it happens before treatment rather than during it, it ignores who arrived first, and it is redone as states change. A practice that sorts once in September and then works the list is not triaging, it is queueing.",
    },
    {
      type: "p",
      text: [
        "The thing being sorted is the ",
        { text: "job", href: "/blog/xero-practice-manager-job-documents" },
        ", not the client. This matters more than it sounds. A client with a company return ready to start and a trust return waiting on a bank statement sits in two buckets at once, and any system that sorts whole clients has to pick one of those two truths and lose the other. Sorting jobs keeps both.",
      ],
    },
    { type: "h2", text: "When is your busy season, actually?" },
    {
      type: "p",
      text: "That depends on which deadline binds each client, and in two of the three markets XTK sells into the answer is not one date but five. Here is the individual and trust calendar a practice with UK, Australian and New Zealand clients is actually working against, in chronological order.",
    },
    {
      type: "table",
      head: ["Deadline", "Who it binds", "Authority"],
      rows: [
        ["31 Oct 2026", "AU: any prior-year return outstanding at 30 June 2026", "ATO agent program"],
        ["31 Oct 2026", "AU: self-lodgers, and the cut-off to engage a new agent", "ATO"],
        ["31 Oct 2026", "UK: paper returns for 2025/26", "HMRC"],
        ["31 Jan 2027", "AU: large and medium trusts, taxable last year lodged", "ATO agent program"],
        ["31 Jan 2027", "UK: online returns and payment for 2025/26", "HMRC"],
        ["28 Feb 2027", "AU: large and medium trusts, non-taxable or newly registered", "ATO agent program"],
        ["31 Mar 2027", "AU: clients whose last return produced a liability of $20,000 or more", "ATO agent program"],
        ["31 Mar 2027", "NZ: agent clients with an extension of time, year to 31 March 2026", "Inland Revenue"],
        ["15 May 2027", "AU: all remaining individuals and trusts", "ATO agent program"],
        ["5 Jun 2027", "AU: concession on returns due 15 May, if payment is made too", "ATO agent program"],
        ["7 Jul 2027", "NZ: returns with no extension of time, year to 31 March 2027", "Inland Revenue"],
      ],
      caption:
        "As of 17 August 2026, from each authority's own pages. Due dates vary by client circumstance — check the source for yours, and note the ATO refreshes its program each July.",
    },
    {
      type: "p",
      text: [
        "Read down the “who it binds” column and the shape of the problem appears. The ",
        {
          text: "Australian agent program",
          href: "https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/registered-agent-lodgment-program/due-dates-for-tax-returns-by-client-type/individuals-and-trusts",
        },
        " sorts a practice's clients into five tiers across seven months. ",
        {
          text: "New Zealand",
          href: "https://www.ird.govt.nz/topics/intermediaries/extension-of-time-arrangements",
        },
        " runs two dates. The ",
        {
          text: "United Kingdom",
          href: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
        },
        " has one, for everybody: 31 January, 11:59pm.",
      ],
    },
    { type: "h2", text: "Why does one deadline for everybody produce a crush?" },
    {
      type: "p",
      text: [
        "Because a shared deadline synchronises every client in the country, and the numbers are stark once someone counts them. For the 2024 to 2025 tax year, ",
        {
          text: "HMRC reported",
          href: "https://www.gov.uk/government/news/1148-million-beat-the-self-assessment-deadline",
        },
        " that 11.48 million people filed by 31 January — and that 475,722 of them waited until the final day. An estimated one million missed it entirely.",
      ],
    },
    {
      type: "p",
      text: "One figure in that release deserves more attention than the headline. The busiest hour of deadline day was not the last one: 32,982 returns were filed between 17:00 and 17:59, against 27,456 in the final hour. The peak lands inside office hours, which means most of deadline day is not panicking taxpayers at kitchen tables. It is practices clearing a queue, at the one moment in the year when clearing a queue is most expensive.",
    },
    {
      type: "p",
      text: "A synchronised deadline does not create more work. It compresses the same work into the window where every review is rushed, every query has no time to come back, and every staff absence is unrecoverable. The work was always there; the calendar decided when you would do it.",
    },
    { type: "h2", text: "How does a tiered calendar prevent it?" },
    {
      type: "p",
      text: "By deciding in advance that different clients are due at different times, so no practice ever has its whole book due at once. Australia's agent program is the clearest published example, and it is worth reading as scheduling rather than as compliance. The tiers are in the table above: five dates from 31 October 2026 to 15 May 2027, sorted by trust size, by tax liability — clients whose latest return produced a bill of $20,000 or more come earlier — and by one other thing.",
    },
    {
      type: "p",
      text: "Look at what the first tier is made of. It is not the biggest clients, the oldest clients, or the most profitable ones. Tier one is individuals and trusts with a prior-year return still outstanding at 30 June. Tier one is the clients who were late last year.",
    },
    { type: "h2", text: "Why do the late clients go first?" },
    {
      type: "p",
      text: "Because being late is not a fact about a client's motivation, it is a fact about how long their work takes to finish in calendar days rather than desk hours. A client with two returns outstanding cannot be started and completed in one sitting no matter how much capacity you point at them. Their records need reconstructing, their queries need answering by someone who has forgotten the year in question, and every round trip costs a week.",
    },
    {
      type: "p",
      text: "Elapsed time is the only resource a busy season cannot manufacture. You can buy desk hours in December — contractors, overtime, a temp on data entry. You cannot buy back the three weeks a client will take to find a 2024 bank statement. So the work that consumes elapsed time has to start when elapsed time is cheap, which is now.",
    },
    {
      type: "p",
      text: "That is why the instinct most practices have — leave the difficult, disorganised, chronically late clients until last, because chasing them is unpleasant — is precisely wrong. It puts the elapsed-time-heavy work into the part of the year with none left. Both revenue authorities that stagger deadlines reached the opposite conclusion independently: Australia moves the previously-late client to the earliest tier, and New Zealand withholds the extension of time from a newly linked client with more than one return outstanding. Neither is punishing anyone; both are scheduling. Adopt the tiering you are already subject to and you get a work order that is defensible to a partner and one no client can argue with, because it is the authority's own.",
    },
    { type: "h2", text: "The three-bucket sort" },
    {
      type: "p",
      text: "Every open job goes in exactly one of three buckets, and the definitions have to be tight enough that two different people sorting the same job agree.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Ready. Everything needed to do the work is in your possession, and the next action is somebody in the practice doing the work. If you would have to ask anyone for anything before starting, it is not ready.",
        "Blocked on the client. The next action belongs to the client, and you have asked for it specifically enough that they know what it is. A job where you have been meaning to ask is not blocked on the client. It is blocked on you.",
        "Blocked on us. The next action belongs to the practice but is not the work itself — a review sitting with a partner, a query drafted but not sent, a job waiting on a colleague's file, an unanswered internal question, a job nobody has been assigned to.",
      ],
    },
    {
      type: "p",
      text: "The third bucket is the one practices refuse to create, and it is the one that shortens the season. Its contents are almost always invisible, because every item in it is somebody's intention rather than an event, and intentions do not appear in any system. It is also the only bucket a partner can clear in an afternoon without anyone outside the building doing anything.",
    },
    {
      type: "p",
      text: "Expect it to be embarrassing the first time. A practice that has never separated “waiting on the client” from “waiting on us” usually finds that a good share of what it called client delay was its own, sitting for weeks with nobody knowing whose it was.",
    },
    { type: "h2", text: "How do you order the work inside “ready”?" },
    {
      type: "p",
      text: "Three keys, applied in this order, and the order is the whole point:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Deadline tier. The statutory date the client is actually bound by, not the date you associate with their type of work. In Australia this is handed to you; in the UK, where one date binds everyone, you build the tiers yourself and the next two keys do the work.",
        "Elapsed-time risk. Within a tier, start the jobs most likely to need a round trip to somebody outside the practice — first-year clients, clients who were late last year, anything with a missing record, anything needing a third party such as a bank, a lawyer or an auditor.",
        "Size, last. A job's hours matter for resourcing the week; they should not decide which week it falls in.",
      ],
    },
    {
      type: "p",
      text: "Alphabetical and arrival order need no argument. Smallest-first is more tempting, because it clears rows and feels like progress, and it fails because the rows it clears are the ones that would still have been clearable in January. The one honest exception: if a job genuinely takes five minutes and it is in front of you, finishing it costs less than scheduling it. Keep that narrow — the moment it becomes a category rather than a moment, you are doing smallest-first with a better name.",
    },
    { type: "h2", text: "Is it always better to lodge early?" },
    {
      type: "p",
      text: "No, and this is where generic busy-season advice quietly harms a client. In Australia, the payment date for a return due 15 May is staggered by when the return is lodged and processed. Lodge up to and including 12 February 2027 and the payment is due 21 March 2027. Lodge between 13 February and 12 March and it is due 21 April 2027. Lodge from 13 March and it is due 5 June 2027.",
    },
    {
      type: "p",
      text: "So for a client with a bill to pay and a tight cash position, doing their return in early February rather than late March moves their payment date forward by roughly ten weeks. The work was done better and earlier, and the client is worse off — and nothing in the practice's own throughput metrics would ever show it.",
    },
    {
      type: "p",
      text: "The rule that survives is narrower than “lodge early” and more useful: get the work ready early, then sequence lodgment for the client's circumstances rather than the firm's queue. A refund position goes as soon as it is right. A payment position with a cash-flow problem is finished early and lodged deliberately. Either way, tell the client which you did, because the thing that reliably damages the relationship is a payment date they did not see coming.",
    },
    { type: "h2", text: "What do you do with the blocked-on-client bucket?" },
    {
      type: "p",
      text: [
        "Work it as a batch, not as a set of individual clients. The bucket exists so that chasing becomes one task done well on a Tuesday rather than forty interruptions across six weeks, and so that a job nobody can progress stops occupying anybody's attention until it can. The mechanics of the asking — what to itemise, where the files should land, how to make the outstanding items visible to the client rather than only to you — are a subject in their own right, and this blog has ",
        { text: "a five-step system for it", href: "/blog/stop-chasing-clients-for-documents" },
        ".",
      ],
    },
    {
      type: "p",
      text: [
        "One deadline belongs in this section rather than that one, because it is about sequencing rather than chasing. In Australia, a client engaging you for the first time, or moving from another agent, ",
        {
          text: "should contact you before 31 October",
          href: "https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return/lodge-your-tax-return-with-a-registered-tax-agent",
        },
        " to be part of your lodgment program. That makes September and October an ",
        { text: "onboarding", href: "/blog/accounting-client-onboarding-checklist" },
        " deadline as well as a filing one: a prospect who signs in November has already lost the extended dates for that year.",
      ],
    },
    { type: "h2", text: "Where does Practice Manager already do this?" },
    {
      type: "p",
      text: "More than most practices use it for. The three buckets do not need a new tool, a spreadsheet or a project board — they need three job states and three saved filters in software you are already paying for.",
    },
    {
      type: "p",
      text: "A job in Xero Practice Manager carries a job number, an owning client, a start date and a due date, a priority, an assigned manager, partner and staff, an estimated time against the time actually recorded, a percentage complete, and a job state that your practice defines itself. The Job Manager filters on those fields and lets you save the filters you use repeatedly.",
    },
    {
      type: "p",
      text: "Which gives you a working implementation in an afternoon:",
    },
    {
      type: "list",
      items: [
        "Add three job states — Ready, Waiting on client, Waiting on us — alongside whatever states you already run, and make one of them the default for new jobs so nothing lands unsorted.",
        "Set the due date on every job to the client's actual statutory deadline rather than an internal target, so that sorting by due date sorts by tier.",
        "Save one filter per bucket, and a fourth for the only view that matters on a Monday: state is Ready, ordered by due date.",
        "Put the practice's estimated time against the ready bucket for the coming fortnight. If it exceeds the hours you have, the sort has just told you something no amount of working harder will change.",
      ],
    },
    {
      type: "p",
      text: "Two habits make the difference between a system and three unused dropdowns. Changing state has to be part of doing the work rather than an administrative step afterwards — the person who sends a query sets the state to Waiting on client in the same minute. And somebody has to own the Waiting on us filter, by name, with a standing slot in the week to empty it.",
    },
    { type: "h2", text: "Where does XTK help, and where does it stop?" },
    {
      type: "p",
      text: [
        "XTK's honest contribution to triage is narrow, and it is worth being exact about, because triage is a cross-client problem and XTK is not a cross-client tool. What it does help with is the evidence a sort depends on. A ",
        { text: "document request", href: "/guides/document-requests" },
        " turns “have we got everything for this job?” into something answerable at a glance, because each requested item is badged Provided or Outstanding as files arrive in the client's folder. That is the difference between a job you have classified as blocked and a job you assume is blocked.",
      ],
    },
    {
      type: "p",
      text: [
        "The ",
        { text: "notification tray", href: "/guides/notifications" },
        " is practice-wide too: XTK records one row per event for the whole practice, so you learn that a client has uploaded or signed without opening every client's tabs.",
      ],
    },
    {
      type: "p",
      text: "Now the limits, because they bear on this article specifically. The tray is a feed, not a work queue — XTK's own guide calls it a launcher rather than a workspace. It shows the twenty most recent events, pages back through ninety days, then deletes them, and the unread badge stops counting at “9+”. More to the point, a feed reports arrivals. Triage needs absences. Outstanding-versus-provided state lives inside one client's Documents tab, and nothing in XTK aggregates what is still missing across every client.",
    },
    {
      type: "p",
      text: "Nor is there a scheduler anywhere in the product: no automatic reminders, no chasing on a cadence, no capacity planning, no workload dashboard. Following up is a manual action, and on a document request it rotates the link, so the previously emailed one stops working. The cross-client view lives in the Job Manager, which is where it belongs, and the sorting is done by a person.",
    },
    { type: "h2", text: "A pre-season checklist" },
    {
      type: "p",
      text: "Six weeks before your ramp — early September for an Australian practice, mid-November for a UK one — in this order:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Pull every client's actual statutory deadline from the authority's own tiering, not from memory or last year's spreadsheet.",
        "Find the clients in the earliest tier. In Australia that means anyone with a prior-year return outstanding at 30 June; in the UK and New Zealand, build the tier yourself from who was late last year.",
        "Create the three job states and set every open job's due date to the client's real deadline.",
        "Sort every open job into a bucket once, by hand. This is a two-hour job for a small practice and it is the only step with no shortcut.",
        "Count the Waiting on us bucket and clear it before the season starts. This is the cheapest week of the year in which to do it.",
        "Send the earliest-tier document requests now, itemised, with a single destination for the files.",
        "Compare the estimated hours in the ready bucket against the hours you actually have, and take whatever decision that arithmetic forces while there is still time to take it.",
      ],
    },
    { type: "h2", text: "What to measure across one season" },
    {
      type: "p",
      text: "Two numbers, and they answer different questions. First, what share of jobs entered the Waiting on us bucket at all. Second, the median number of days a job spent there once it did.",
    },
    {
      type: "p",
      text: "The first is a design number: it tells you how often the practice itself is the constraint, and it is reduced by changing how work is handed over, reviewed and assigned. The second is an execution number: it tells you how long the practice takes to notice, and it is reduced by somebody owning the filter. A practice that measures only total turnaround time cannot tell those two failures apart, and will spend a year fixing the wrong one.",
    },
    {
      type: "p",
      text: [
        "Neither number needs new software. Both need the buckets to exist, which is the whole of the argument: the sort is free, the states are already in Practice Manager, and the only thing a ",
        { text: "flat-priced layer over your own storage", href: "/pricing" },
        " changes is how quickly you can tell which bucket a job belongs in.",
      ],
    },
    {
      type: "callout",
      title: "Dates, and what this article is not",
      text: "XTK is an independent product and is not affiliated with or endorsed by Xero Limited. The deadlines above were taken from the ATO, HMRC and Inland Revenue's own pages on 17 August 2026 and apply to specific years and client circumstances — this is general information, not tax advice, and your clients' due dates should be confirmed against the authority or your professional body. Product limits described here were correct as of August 2026.",
    },
  ],
  faq: [
    {
      q: "When does busy season start in the UK, Australia and New Zealand?",
      a: "It depends on which deadline binds each client, and only the UK has a single one. UK online self assessment returns for 2025/26 are due 31 January 2027, so the ramp runs from about November. Australia's registered agent lodgment program spreads individuals and trusts across 31 October 2026, 31 January, 28 February, 31 March and 15 May 2027, with a 5 June concession — several smaller ramps rather than one. In New Zealand, returns without an extension of time are due 7 July, and agents' clients can get an extension to 31 March the following year.",
    },
    {
      q: "Should I start with my easiest clients or my hardest?",
      a: "Start with the ones most likely to need something from outside the practice — first-year clients, clients who were late last year, anything with a missing record or a third party involved. Elapsed time is the only resource a busy season cannot buy more of, so the work that consumes it has to start when it is cheap. Both revenue authorities that stagger deadlines agree: Australia puts clients with a prior-year return outstanding in the earliest tier, and New Zealand withholds the extension of time from a newly linked client with more than one return outstanding.",
    },
    {
      q: "Is it always better to lodge a tax return early?",
      a: "No. In Australia, the payment date for a return due 15 May depends on when it is lodged and processed: lodged by 12 February 2027, payment is due 21 March 2027; lodged from 13 March 2027, it is due 5 June 2027. For a client with a bill to pay and tight cash flow, lodging in February instead of late March brings their payment date forward by about ten weeks. Get the work ready early, sequence lodgment for the client's circumstances, and tell them which you did.",
    },
    {
      q: "Can Xero Practice Manager show me which jobs are waiting on a client?",
      a: "Yes, if you set it up. Job states in Practice Manager are defined by your own practice, so you can add Ready, Waiting on client and Waiting on us, set a default state for new jobs, and save a Job Manager filter per state. With each job's due date, priority and estimated time alongside, that gives a cross-client view of what is ready and what is blocked, with no additional software.",
    },
  ],
};
