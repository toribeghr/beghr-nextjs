/**
 * Payroll competitor / alternative page data.
 * Used by: src/app/services/managed-payroll/[competitor]/page.tsx (ISR data-route)
 *
 * PEPM figures from the BEG SEO strategy plan (June 2026).
 * No em-dashes or en-dashes anywhere -- use hyphens or commas only.
 */

export interface PayrollCompetitor {
  /** URL slug, e.g. "alternatives-to-adp" */
  slug: string;
  /** Display name of the competitor */
  name: string;
  /** Short label used in the title tag "BEG vs [shortName]" */
  shortName: string;
  /** Primary keyword phrase targeted */
  primaryKeyword: string;
  /** Title tag (60 chars max) */
  titleTag: string;
  /** Meta description (150-160 chars) */
  metaDescription: string;
  /** Hero headline */
  headline: string;
  /** Hero sub-headline */
  subHeadline: string;
  /** Competitor model in one phrase */
  competitorModel: string;
  /** Competitor typical PEPM range */
  competitorPEPM: string;
  /** Three specific pain points a buyer on this competitor feels */
  pains: string[];
  /** Four comparison rows [factor, BEG value, competitor value] */
  compRows: [string, string, string][];
  /** The three bonus objection-handlers */
  bonuses: { badge: string; title: string; objection: string; body: string }[];
  /** FAQ items specific to this comparison */
  faqs: { q: string; a: string }[];
  /** Related industry pages to cross-link */
  relatedIndustries: { href: string; label: string }[];
}

export const payrollCompetitors: PayrollCompetitor[] = [
  // ---------------------------------------------------------------------------
  // ADP
  // ---------------------------------------------------------------------------
  {
    slug: 'alternatives-to-adp',
    name: 'ADP',
    shortName: 'ADP',
    primaryKeyword: 'alternatives to ADP',
    titleTag: 'ADP Alternative | $25-$35 PEPM Managed Payroll | BEG',
    metaDescription:
      'Switching from ADP? BEG runs fully managed payroll at $25-$35 PEPM, all-inclusive. No hidden fees, no per-run charges. Works in your existing system. Book a free scope review.',
    headline: 'Paying ADP $150+ per employee per month and still doing the work yourself?',
    subHeadline:
      'ADP charges you for software and still leaves the compliance checks, exception reviews, and employee questions on your desk. BEG manages the entire payroll function for $25-$35 PEPM -- all-inclusive, fully hands-off.',
    competitorModel: 'Software + optional add-on specialist tiers',
    competitorPEPM: '$150-$200+ PEPM (TotalSource PEO all-in)',
    pains: [
      'ADP module pricing stacks. Your base plan covers payroll processing, but tax filing, year-end W-2s, and compliance notices each trigger a separate line item on your invoice.',
      'Support means a call center. When you have a payroll question, you wait on hold and start from scratch explaining your account every time. There is no single person who knows your business.',
      'The PEO co-employment model means ADP technically co-employs your staff. You lose direct control over your own employment decisions, policies, and HR documentation.',
    ],
    compRows: [
      ['Monthly cost (50 employees)', '$1,250-$1,750 all-in', '$7,500-$10,000+ (TotalSource PEO)'],
      ['Who runs payroll', 'BEG: fully managed', 'You, with ADP software'],
      ['Hidden fees', 'None -- one flat PEPM', 'Per-run, W-2, year-end, add-on modules'],
      ['Migration required', 'No -- works in ADP or iSolved', 'Already in ADP but paying for it'],
      ['Co-employment risk', 'None -- you keep control', 'PEO model: ADP is co-employer'],
      ['Dedicated contact', 'Yes -- one BEG specialist', 'Call center queue'],
    ],
    bonuses: [
      {
        badge: 'Bonus 01',
        title: 'We can run payroll inside your existing ADP account.',
        objection: 'Common objection: "We have years of history in ADP and cannot start over."',
        body: 'You do not have to migrate anything. BEG can manage payroll directly inside your current ADP account -- same platform, same employee portals, same history. We just take the management off your plate. If you later want to move to iSolved, we handle that transition with zero disruption.',
      },
      {
        badge: 'Bonus 02',
        title: 'One flat rate. No module surprise on your next invoice.',
        objection: 'Common objection: "ADP keeps adding fees we did not plan for."',
        body: '$25-$35 PEPM covers everything: payroll processing, tax filings, W-2s, direct deposit, compliance monitoring, new hire reporting, garnishments, and year-end close. No per-run fees. No year-end surcharge. No add-on cost for a mid-cycle correction. One number, every month.',
      },
      {
        badge: 'Bonus 03',
        title: 'Free payroll fee audit before you commit to anything.',
        objection: 'Common objection: "I am not sure what I am actually paying ADP."',
        body: 'Send us your last three ADP invoices and we calculate your true cost per employee per month -- base fee, per-run charges, filing fees, and add-ons combined. Most companies discover they are paying $80-$150 PEPM effective rate even on a software-only plan. The audit is free and yours to keep whether or not you become a BEG client.',
      },
    ],
    faqs: [
      {
        q: 'Can BEG manage payroll inside my existing ADP account?',
        a: 'Yes. BEG can operate inside your current ADP environment as your managed service provider, handling payroll processing, compliance, and employee questions without requiring you to migrate to a new platform.',
      },
      {
        q: 'How much does ADP TotalSource actually cost compared to BEG?',
        a: 'ADP TotalSource as a PEO runs $150-$200 or more PEPM for most companies. BEG managed payroll is $25-$35 PEPM all-inclusive with no co-employment relationship and no PEO markup.',
      },
      {
        q: 'Does switching from ADP to BEG require migrating employee data?',
        a: 'Not necessarily. If you want to stay in ADP, we manage inside it. If you want to move to iSolved, BEG handles the full data migration with no disruption to your payroll cycle.',
      },
      {
        q: 'What does BEG include that ADP charges extra for?',
        a: 'BEG includes W-2 preparation, tax filing, garnishment processing, year-end close, and employee paycheck support in the flat PEPM rate. ADP frequently bills these as separate line items on top of the base subscription.',
      },
      {
        q: 'Can I keep my ADP employee self-service portal?',
        a: 'If we manage payroll inside your ADP account, yes -- employee portals remain unchanged. If you move to iSolved, employees gain the iSolved self-service portal plus the isolved Connector for Claude for AI-assisted HR tasks.',
      },
    ],
    relatedIndustries: [
      { href: '/services/managed-payroll/legal', label: 'Managed Payroll for Law Firms' },
      { href: '/services/managed-payroll/healthcare', label: 'Managed Payroll for Healthcare' },
      { href: '/services/managed-payroll/technology', label: 'Managed Payroll for Tech Companies' },
      { href: '/services/managed-payroll/finance', label: 'Managed Payroll for Finance Firms' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Gusto
  // ---------------------------------------------------------------------------
  {
    slug: 'alternatives-to-gusto',
    name: 'Gusto',
    shortName: 'Gusto',
    primaryKeyword: 'alternatives to Gusto',
    titleTag: 'Gusto Alternative | Fully Managed Payroll $25-$35 PEPM | BEG',
    metaDescription:
      'Gusto does payroll software. BEG does payroll for you. Fully managed at $25-$35 PEPM all-inclusive. No login, no manual steps. Works in your existing system.',
    headline: 'Gusto processes your payroll. You still have to run it.',
    subHeadline:
      'Gusto is payroll software built for owners who do not mind logging in, reviewing exceptions, and managing the process themselves. BEG is for companies who want payroll fully off their plate -- at a comparable cost.',
    competitorModel: 'Self-service payroll software for SMBs',
    competitorPEPM: '$40-$80 PEPM + $6 per employee add-ons',
    pains: [
      'Gusto is software, not a service. Someone on your team still has to log in each pay period, review payroll, approve the run, and handle anything that flags. That is hours every cycle that do not disappear just because you switched software.',
      'Gusto pricing stacks as you grow. The base plan adds per-employee fees for HR features, contractor payments, and next-day direct deposit. By the time you add the features you actually need, the effective PEPM is higher than the advertised rate.',
      'When something goes wrong in Gusto, support is chat or email. There is no dedicated specialist who knows your account. You explain your situation fresh every time.',
    ],
    compRows: [
      ['Monthly cost (50 employees)', '$1,250-$1,750 all-in', '$2,000-$4,000+ with all add-ons'],
      ['Who runs payroll', 'BEG: fully managed', 'You, inside Gusto'],
      ['Dedicated contact', 'Yes -- one BEG specialist', 'Chat and email support'],
      ['Multi-state compliance', 'Fully handled, all 50 states', 'Platform-assisted -- you verify'],
      ['Year-end W-2s', 'Fully managed by BEG', 'Gusto generates -- you distribute'],
      ['Contractor payments', 'Included in scope', '$6/contractor/month in Gusto'],
    ],
    bonuses: [
      {
        badge: 'Bonus 01',
        title: 'BEG manages payroll so your team never logs in.',
        objection: 'Common objection: "Gusto is easy enough for us to run ourselves."',
        body: 'Gusto is easy -- until it is not. A flagged direct deposit, a garnishment order, a new state registration, a year-end discrepancy. Those situations require time and expertise. BEG handles payroll from end to end. You do not log in. You do not approve runs. You do not handle employee paycheck questions. We do.',
      },
      {
        badge: 'Bonus 02',
        title: 'One flat rate that beats Gusto effective cost at scale.',
        objection: 'Common objection: "Gusto looks cheaper than managed payroll."',
        body: 'Gusto starts at $40 PEPM but adds $6 per employee for contractors, plus fees for next-day direct deposit, HR advisors, and premium support. At 50 employees with common add-ons, your effective rate is often $60-$80 PEPM and you are still doing the work. BEG is $25-$35 PEPM fully managed. The math closes fast when you add your team\'s time.',
      },
      {
        badge: 'Bonus 03',
        title: 'No migration required. We can run in your existing system.',
        objection: 'Common objection: "We just set up Gusto and do not want to redo it."',
        body: 'If you want to stay in Gusto, BEG can manage payroll operations inside it. You keep the platform your employees are used to. We take over the processing, compliance, and exception management. If you later prefer to move to iSolved, we handle the full migration.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between Gusto and BEG managed payroll?',
        a: 'Gusto is software -- your team logs in, approves payroll, and manages the process. BEG is a fully managed service -- BEG runs every cycle, files every tax, and handles every employee paycheck question so your team does nothing.',
      },
      {
        q: 'Is BEG managed payroll more expensive than Gusto?',
        a: 'BEG starts at $25-$35 PEPM. Gusto starts at $40 PEPM and adds per-employee fees for contractors, HR features, and premium support. At 30+ employees with typical add-ons, BEG is often less expensive effective PEPM -- and includes full management.',
      },
      {
        q: 'Can BEG manage payroll inside our existing Gusto account?',
        a: 'Yes. BEG can operate as your managed payroll team inside Gusto, handling processing and compliance without requiring you to change platforms.',
      },
      {
        q: 'Does Gusto handle multi-state payroll?',
        a: 'Gusto supports multi-state payroll with platform assistance, but your team still verifies compliance and manages state registrations. BEG handles multi-state payroll fully -- registrations, filings, and compliance in all 50 states -- as part of the flat PEPM.',
      },
      {
        q: 'What happens with W-2s at year-end using Gusto vs. BEG?',
        a: 'Gusto generates W-2s inside the platform. Your team still distributes them and handles corrections. BEG manages the full year-end process: reconciliation, filing with SSA, employee delivery, and W-2c corrections if needed.',
      },
    ],
    relatedIndustries: [
      { href: '/services/managed-payroll/technology', label: 'Managed Payroll for Tech Companies' },
      { href: '/services/managed-payroll/marketing-agency', label: 'Managed Payroll for Agencies' },
      { href: '/services/managed-payroll/healthcare', label: 'Managed Payroll for Healthcare' },
      { href: '/services/managed-payroll/finance', label: 'Managed Payroll for Finance Firms' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Paychex
  // ---------------------------------------------------------------------------
  {
    slug: 'alternatives-to-paychex',
    name: 'Paychex',
    shortName: 'Paychex',
    primaryKeyword: 'alternatives to Paychex',
    titleTag: 'Paychex Alternative | Fully Managed Payroll $25-$35 PEPM | BEG',
    metaDescription:
      'Switching from Paychex? BEG delivers fully managed payroll at $25-$35 PEPM with one dedicated specialist, no per-run fees, and zero migration required.',
    headline: 'Paychex charges per run, per filing, per feature -- and still leaves the work to you.',
    subHeadline:
      'Paychex Flex is software with optional specialist add-ons billed separately. BEG is a single flat-rate managed service where the entire payroll function is handled for you at a fraction of what Paychex costs all-in.',
    competitorModel: 'Payroll software + optional HR specialist tiers',
    competitorPEPM: '$50-$150 PEPM (Flex Select and above)',
    pains: [
      'Paychex Flex Essentials starts low, but the features you actually need -- HR advisors, time and attendance integration, compliance alerts -- are gated behind Select and Pro tiers that push your effective PEPM well past $100.',
      'A Paychex HR specialist is a shared resource assigned to many accounts. They know the platform, not your business. When payroll questions come up, you often wait for a callback and re-explain your situation every time.',
      'Per-run and per-filing fees compound quickly. Companies running bi-weekly payroll pay per-run charges 26 times per year. Year-end W-2 filing, tax notices, and off-cycle runs are often billed as extras on top.',
    ],
    compRows: [
      ['Monthly cost (50 employees)', '$1,250-$1,750 all-in', '$2,500-$7,500+ at Flex Select/Pro'],
      ['Dedicated specialist', 'Yes -- one BEG contact', 'Shared HR advisor (Flex Select+)'],
      ['Per-run fees', 'None', 'Common on all Paychex tiers'],
      ['W-2 filing', 'Included in PEPM', 'Often billed separately'],
      ['Migration required', 'No -- works in existing system', 'Already in Paychex'],
      ['Support model', 'Direct contact who knows your account', 'Call center or shared advisor'],
    ],
    bonuses: [
      {
        badge: 'Bonus 01',
        title: 'Free invoice audit -- find out what Paychex is actually charging you.',
        objection: 'Common objection: "We know what we pay Paychex."',
        body: 'Most Paychex clients are surprised by their true PEPM when they add base subscription, per-run charges, filing fees, and HR add-ons. BEG will review your last three Paychex invoices and calculate your real cost per employee per month at no charge. Most clients find they are paying $80-$150 effective PEPM before the audit. The report is yours to keep.',
      },
      {
        badge: 'Bonus 02',
        title: 'One number, every month. No Paychex line-item creep.',
        objection: 'Common objection: "Our Paychex invoice keeps going up and we cannot predict it."',
        body: '$25-$35 PEPM covers payroll processing, all tax filings, W-2s, direct deposit, garnishments, new hire reporting, and year-end close. No per-run fee. No W-2 add-on. No charge for off-cycle runs. One invoice, one number, every month for the life of your contract.',
      },
      {
        badge: 'Bonus 03',
        title: 'Stay in Paychex or move to iSolved. Either way, BEG manages it.',
        objection: 'Common objection: "We have employee history in Paychex we cannot lose."',
        body: 'BEG can manage your payroll operations inside your existing Paychex account -- your employees keep their portals, your data stays intact, and BEG takes the processing off your plate. If you want to move to iSolved for better features and lower cost, BEG handles the full migration with zero cycle disruption.',
      },
    ],
    faqs: [
      {
        q: 'What makes BEG different from Paychex Flex?',
        a: 'Paychex Flex is software your team manages. BEG is a fully managed service -- BEG runs every payroll cycle, handles every filing, and answers every employee paycheck question. Your team does not log in or touch payroll.',
      },
      {
        q: 'How does BEG pricing compare to Paychex Flex Select?',
        a: 'Paychex Flex Select runs $50-$100 PEPM on average before per-run and filing add-ons. BEG is $25-$35 PEPM all-inclusive with no add-ons and full management included.',
      },
      {
        q: 'Can BEG work inside our current Paychex account?',
        a: 'Yes. BEG can manage your payroll inside your existing Paychex platform, removing the processing burden from your team without requiring a data migration.',
      },
      {
        q: 'Does Paychex charge for W-2 filing?',
        a: 'Paychex frequently bills W-2 preparation, year-end filing, and tax notice handling as add-ons outside the base subscription. BEG includes the full year-end process in the flat PEPM.',
      },
      {
        q: 'What is the transition process from Paychex to BEG?',
        a: 'BEG reviews your current Paychex setup, maps your payroll structure, migrates data if moving to iSolved, and runs a clean parallel cycle before going live. Most companies complete transition in 3-5 business days.',
      },
    ],
    relatedIndustries: [
      { href: '/services/managed-payroll/legal', label: 'Managed Payroll for Law Firms' },
      { href: '/services/managed-payroll/healthcare', label: 'Managed Payroll for Healthcare' },
      { href: '/services/managed-payroll/engineering', label: 'Managed Payroll for Engineering Firms' },
      { href: '/services/managed-payroll/trades', label: 'Managed Payroll for Skilled Trades' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Deel
  // ---------------------------------------------------------------------------
  {
    slug: 'alternatives-to-deel',
    name: 'Deel',
    shortName: 'Deel',
    primaryKeyword: 'Deel alternative for US payroll',
    titleTag: 'Deel Alternative for US Payroll | $25-$35 PEPM | BEG',
    metaDescription:
      'Deel is built for global payroll complexity. If your team is US-based, BEG delivers fully managed domestic payroll at $25-$35 PEPM. No migration. No global overhead.',
    headline: 'Deel is built for global complexity your US-based team does not need.',
    subHeadline:
      'Deel pricing starts at $49 per employee per month for US payroll and climbs for contractor of record, EOR, and international features you may never use. BEG manages US payroll fully at $25-$35 PEPM with no global overhead.',
    competitorModel: 'Global payroll, EOR, and contractor management platform',
    competitorPEPM: '$49+ PEPM US payroll (higher for EOR and global)',
    pains: [
      'Deel pricing assumes global complexity. US-only companies pay for an international infrastructure they do not use -- EOR services, multi-currency, and global contractor of record -- bundled into a cost model built for multinational teams.',
      'Deel is a platform your team manages. Someone still has to log in, initiate payroll, review exceptions, and approve each run. The platform does not eliminate the management burden; it just moves it to a different screen.',
      'Deel support is global by design. Response times and support quality for US-specific compliance questions -- state tax registrations, SUTA, garnishments, ACA filings -- vary based on where your support rep is located and what US compliance expertise they have.',
    ],
    compRows: [
      ['Monthly cost (50 employees)', '$1,250-$1,750 all-in', '$2,450+ (US contractor or employee)'],
      ['Best fit', 'US-based 10-500 employee companies', 'Global teams with EOR needs'],
      ['Who runs payroll', 'BEG: fully managed', 'You, inside Deel'],
      ['US compliance depth', 'All 50 states, fully handled', 'US supported -- global-first design'],
      ['No migration required', 'Yes -- works in existing system', 'Deel is a new platform'],
      ['Dedicated US contact', 'Yes -- one BEG specialist', 'Global support model'],
    ],
    bonuses: [
      {
        badge: 'Bonus 01',
        title: 'US-first managed payroll without global platform overhead.',
        objection: 'Common objection: "Deel has strong reviews and we are evaluating it."',
        body: 'Deel is excellent for companies with international teams, contractors in multiple countries, or EOR needs. If your workforce is US-based, you are paying for a platform built around complexity you do not have. BEG is purpose-built for US payroll -- taxes, filings, garnishments, W-2s, all 50 states -- managed fully at $25-$35 PEPM.',
      },
      {
        badge: 'Bonus 02',
        title: 'No migration required. We work in your existing system.',
        objection: 'Common objection: "We are already mid-evaluation on Deel and do not want to restart."',
        body: 'BEG does not require you to move to a new platform. If you are already in ADP, Paychex, QuickBooks Payroll, or iSolved, BEG manages inside it. No new logins for your employees. No data migration project. No retraining your team.',
      },
      {
        badge: 'Bonus 03',
        title: 'Free payroll scope review in 24 hours.',
        objection: 'Common objection: "We need a quote before we can compare."',
        body: 'Tell us your employee count, pay frequency, and current payroll platform. BEG delivers your exact monthly cost within 24 hours. No sales cycle, no discovery marathon. One scope call, one number.',
      },
    ],
    faqs: [
      {
        q: 'Is Deel good for US-only payroll?',
        a: 'Deel supports US payroll, but its platform and pricing are built around global teams, EOR, and international contractors. US-only companies often pay for features and infrastructure they never use.',
      },
      {
        q: 'How does BEG compare to Deel for a 50-person US company?',
        a: 'BEG managed payroll for 50 US employees runs $1,250-$1,750 per month all-inclusive. Deel US payroll starts at $49 PEPM ($2,450/month) before add-ons and is a platform your team still manages.',
      },
      {
        q: 'Does BEG handle contractor payments like Deel?',
        a: 'BEG manages W-2 employee payroll fully. For 1099 contractor payments, ask your BEG specialist about scope -- most standard contractor payment workflows are included in the flat PEPM.',
      },
      {
        q: 'Does switching to BEG require moving off our current payroll platform?',
        a: 'No. BEG manages payroll inside your existing system. You can also move to iSolved if you want a better platform -- BEG handles that migration at no extra charge.',
      },
    ],
    relatedIndustries: [
      { href: '/services/managed-payroll/technology', label: 'Managed Payroll for Tech Companies' },
      { href: '/services/managed-payroll/marketing-agency', label: 'Managed Payroll for Agencies' },
      { href: '/services/managed-payroll/staffing-agency', label: 'Managed Payroll for Staffing Agencies' },
      { href: '/services/managed-payroll/finance', label: 'Managed Payroll for Finance Firms' },
    ],
  },

  // ---------------------------------------------------------------------------
  // Rippling
  // ---------------------------------------------------------------------------
  {
    slug: 'alternatives-to-rippling',
    name: 'Rippling',
    shortName: 'Rippling',
    primaryKeyword: 'Rippling alternative',
    titleTag: 'Rippling Alternative | Managed Payroll $25-$35 PEPM | BEG',
    metaDescription:
      'Rippling is a software platform. BEG is a fully managed payroll service. $25-$35 PEPM all-inclusive. Works in your existing system. No migration needed.',
    headline: 'Rippling automates payroll software. BEG eliminates payroll work entirely.',
    subHeadline:
      'Rippling charges $35-$100 PEPM for a platform your IT and HR team configures, maintains, and runs every cycle. BEG delivers the same outcome -- payroll running correctly every time -- for $25-$35 PEPM with zero management burden on your team.',
    competitorModel: 'HR and IT automation software platform',
    competitorPEPM: '$35-$100 PEPM (modular, per-feature pricing)',
    pains: [
      'Rippling is modular pricing built for IT teams. Each feature -- payroll, benefits, device management, time tracking -- is a separate add-on. Companies that need the full suite pay significantly more than the base rate suggests.',
      'Implementation in Rippling requires technical configuration of workflows, integrations, and automation rules. Your HR and IT teams own the setup, maintenance, and troubleshooting when automation breaks.',
      'Rippling automates payroll steps but does not remove them. Your team still needs to understand the system well enough to catch errors, handle exceptions, and manage edge cases. That expertise requirement does not go away.',
    ],
    compRows: [
      ['Monthly cost (50 employees)', '$1,250-$1,750 all-in', '$1,750-$5,000+ with modules'],
      ['Who runs payroll', 'BEG: fully managed', 'You, with automation'],
      ['Setup complexity', 'BEG handles full setup', 'Your IT and HR team configures'],
      ['Ongoing management', 'Fully on BEG', 'Your team monitors and maintains'],
      ['Compliance updates', 'BEG monitors and applies', 'Platform updates -- you verify'],
      ['Dedicated contact', 'Yes -- one BEG specialist', 'Platform support tickets'],
    ],
    bonuses: [
      {
        badge: 'Bonus 01',
        title: 'No implementation project. BEG is live in 3-5 days.',
        objection: 'Common objection: "We are already mid-implementation with Rippling."',
        body: 'Rippling implementations can take weeks to configure workflows, test integrations, and train your team. BEG reviews your current setup, migrates or connects to your system, and runs a clean first cycle in 3-5 business days. No IT project. No workflow configuration. No training burden.',
      },
      {
        badge: 'Bonus 02',
        title: 'BEG works in your existing system. No Rippling migration required.',
        objection: 'Common objection: "We just went through an implementation and cannot switch again."',
        body: 'If you are already in Rippling and do not want to move, BEG can manage your payroll operations inside Rippling. Your automation stays. Your portals stay. We take over the processing, exception management, and compliance monitoring so your team does nothing.',
      },
      {
        badge: 'Bonus 03',
        title: 'One flat PEPM. No Rippling module math.',
        objection: 'Common objection: "Rippling pricing is complicated and we are not sure what we need."',
        body: '$25-$35 PEPM. That is the number. Payroll processing, all filings, W-2s, garnishments, direct deposit, new hire reporting, compliance monitoring, and employee paycheck support. One invoice. No module decisions. No per-feature activation. Your BEG contact handles the scope.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between Rippling and BEG managed payroll?',
        a: 'Rippling is a platform that automates payroll tasks your team configures and runs. BEG is a managed service -- BEG runs payroll entirely. Your team does not log in, approve runs, or manage exceptions.',
      },
      {
        q: 'Is Rippling cheaper than BEG?',
        a: 'Rippling starts around $35 PEPM for the base platform, but full payroll functionality requires additional modules that push effective PEPM to $60-$100+. BEG is $25-$35 PEPM all-inclusive with full management.',
      },
      {
        q: 'Can BEG manage payroll if we are already inside Rippling?',
        a: 'Yes. BEG can manage your payroll operations inside your existing Rippling platform, handling processing and compliance so your team does not have to touch the system.',
      },
      {
        q: 'How long does it take to get started with BEG vs. Rippling?',
        a: 'BEG onboards in 3-5 business days. Rippling implementations typically take 2-8 weeks of IT and HR configuration. BEG does not require an implementation project from your team.',
      },
    ],
    relatedIndustries: [
      { href: '/services/managed-payroll/technology', label: 'Managed Payroll for Tech Companies' },
      { href: '/services/managed-payroll/marketing-agency', label: 'Managed Payroll for Agencies' },
      { href: '/services/managed-payroll/healthcare', label: 'Managed Payroll for Healthcare' },
      { href: '/services/managed-payroll/finance', label: 'Managed Payroll for Finance Firms' },
    ],
  },

  // ---------------------------------------------------------------------------
  // TriNet
  // ---------------------------------------------------------------------------
  {
    slug: 'alternatives-to-trinet',
    name: 'TriNet',
    shortName: 'TriNet',
    primaryKeyword: 'TriNet alternative',
    titleTag: 'TriNet Alternative | Managed Payroll Without a PEO | BEG',
    metaDescription:
      'TriNet charges $125-$200 PEPM and co-employs your staff. BEG delivers fully managed payroll at $25-$35 PEPM with no PEO, no co-employment, and full employer control.',
    headline: 'TriNet costs $125-$200 per employee per month and makes itself your co-employer.',
    subHeadline:
      'TriNet is a PEO -- a Professional Employer Organization. That means TriNet technically co-employs your staff, owns the employer-of-record relationship, and charges a premium for it. BEG delivers the managed payroll outcome without the PEO structure, co-employment risk, or PEO cost.',
    competitorModel: 'PEO (Professional Employer Organization)',
    competitorPEPM: '$125-$200 PEPM (PEO all-in)',
    pains: [
      'TriNet co-employment means TriNet is the employer of record for your staff. You lose direct control over HR policies, employment documentation, and certain employment decisions. If you outgrow TriNet or want to leave, transitioning your employees out of co-employment is a complex, disruptive process.',
      'PEO cost scales with headcount in ways that become painful at 100+ employees. At $150 PEPM and 100 employees, you are paying $15,000 per month for payroll and HR bundled together. BEG payroll at $35 PEPM for the same headcount is $3,500 per month.',
      'PEOs bundle payroll with benefits, compliance, and HR services and charge for all of it together. If you only need managed payroll -- not the full PEO suite -- you are overpaying for services you are not using.',
    ],
    compRows: [
      ['Monthly cost (50 employees)', '$1,250-$1,750 all-in', '$6,250-$10,000+ (PEO all-in)'],
      ['Co-employment', 'None -- you are always the employer', 'TriNet is co-employer of record'],
      ['Leaving the relationship', 'Clean -- your data, your employees', 'Complex employee transition out of PEO'],
      ['Services bundled', 'Payroll fully managed', 'Payroll + HR + benefits bundled'],
      ['What you pay for', 'Only what you use', 'Full PEO suite whether you use it or not'],
      ['Dedicated contact', 'Yes -- one BEG specialist', 'Shared HR team'],
    ],
    bonuses: [
      {
        badge: 'Bonus 01',
        title: 'You stay the employer. Always.',
        objection: 'Common objection: "We are concerned about losing control of our HR with a PEO."',
        body: 'BEG is not a PEO. We never co-employ your staff. You are the employer of record for every person on your payroll. BEG manages the payroll function -- processing, filings, compliance, employee support -- while you retain full control over your employment relationships, HR policies, and documentation.',
      },
      {
        badge: 'Bonus 02',
        title: 'Pay for managed payroll. Not a PEO suite you do not need.',
        objection: 'Common objection: "TriNet includes benefits and HR -- is that worth the extra cost?"',
        body: 'If you need a PEO for access to benefits pooling, HR compliance advisory, and employer-of-record services, TriNet may be right. If you need payroll managed correctly every cycle by a dedicated specialist, BEG is $25-$35 PEPM versus $125-$200 PEPM. The difference funds a lot of what you could spend on benefits directly.',
      },
      {
        badge: 'Bonus 03',
        title: 'No co-employment exit headaches if you decide to grow or change.',
        objection: 'Common objection: "We are worried about being locked into a PEO structure."',
        body: 'Exiting a PEO means transitioning all employees out of co-employment -- new EIN setup, benefits re-enrollment, payroll platform migration, and state registrations. Leaving BEG is clean: your employees are already on your EIN, in your system, with your data. Nothing changes for them.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a PEO like TriNet and BEG managed payroll?',
        a: 'A PEO co-employs your staff and bundles payroll, HR, and benefits under their employer-of-record structure. BEG is a managed payroll service -- we run payroll on your behalf while you remain the sole employer of all your staff.',
      },
      {
        q: 'How does TriNet cost compare to BEG at 50 employees?',
        a: 'TriNet at 50 employees runs approximately $6,250-$10,000 per month all-in. BEG managed payroll for 50 employees is $1,250-$1,750 per month with no bundled HR or PEO overhead.',
      },
      {
        q: 'Does BEG offer HR services beyond payroll?',
        a: 'BEG is focused on fully managed payroll. For companies that also need HCM software, benefits administration, or talent management, BEG is an authorized iSolved reseller and can connect you with those tools as separate services.',
      },
      {
        q: 'How do I transition off TriNet to BEG without disrupting payroll?',
        a: 'BEG manages the full transition: EIN setup if needed, state registrations, data migration, and a clean parallel cycle before going live. Most TriNet exits with BEG complete in 2-3 weeks.',
      },
      {
        q: 'Will my employees notice a change when switching from TriNet to BEG?',
        a: 'Employees will see a change in their pay stub portal and direct deposit information. BEG coordinates the employee communication and ensures direct deposit setup is complete before the first live cycle.',
      },
    ],
    relatedIndustries: [
      { href: '/services/managed-payroll/legal', label: 'Managed Payroll for Law Firms' },
      { href: '/services/managed-payroll/healthcare', label: 'Managed Payroll for Healthcare' },
      { href: '/services/managed-payroll/technology', label: 'Managed Payroll for Tech Companies' },
      { href: '/services/managed-payroll/engineering', label: 'Managed Payroll for Engineering Firms' },
    ],
  },
];

/** Map from slug to competitor record */
export const competitorBySlug: Record<string, PayrollCompetitor> = Object.fromEntries(
  payrollCompetitors.map((c) => [c.slug, c])
);

/** All competitor slugs */
export const competitorSlugs = payrollCompetitors.map((c) => c.slug);
