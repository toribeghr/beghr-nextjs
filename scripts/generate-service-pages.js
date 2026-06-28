#!/usr/bin/env node
/**
 * BEG Service Page Generator
 * Generates all NEPQ-optimized service pages across three verticals.
 * Run: node scripts/generate-service-pages.js
 */

const fs = require('fs');
const path = require('path');

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';
const BASE = path.join(__dirname, '..', 'src', 'app', 'services');

// ─── JOB PLACEMENT INDUSTRY DATA ────────────────────────────────────────────

const JP_INDUSTRIES = {
  healthcare: {
    eyebrow: 'Job Placement · Healthcare',
    metaTitle: 'Healthcare Job Placement | Clinical & Nursing Recruiting | BEG',
    metaDesc: 'Fill nursing and clinical roles before burnout sets in. Specialized healthcare recruiting with milestone billing and a 45-day replacement guarantee.',
    canonical: 'https://beghr.com/services/job-placement/healthcare',
    title: 'Your clinical vacancy is a patient care problem.',
    description: 'Every unfilled nursing or clinical role increases burnout, inflates overtime, and puts patient ratios at risk. Travel nurse agencies charge $150–$200 per hour to paper over the gap. We place permanent clinical staff in 23–35 days at roughly 50% less than contingency firms.',
    imageSrc: '/assets/hero-images/healthcare.svg',
    imageAlt: 'Healthcare organization with an unfilled clinical vacancy',
    stats: [
      { value: '23-35', label: 'Days to fill on average' },
      { value: '86%', label: 'Fill rate on active searches' },
      { value: '~50%', label: 'Less than contingency pricing' },
    ],
    painStats: [
      { stat: '$150–$200/hr', label: 'What travel agencies charge for the same role', sub: 'A permanent placement through BEG costs a fraction of what you spend on travel staff over 12 months.' },
      { stat: '1 in 5', label: 'Nurses plan to leave the profession', sub: 'The talent pool is shrinking. The best permanent candidates are passive — proactive sourcing is the only way to reach them.' },
      { stat: '2-4 weeks', label: 'Window before top candidates accept another offer', sub: 'Clinical talent in demand does not stay available long. A slow search misses the best people every time.' },
    ],
    roleExamples: 'registered nurses, nurse practitioners, physicians, clinical coordinators, and healthcare administrators',
    costPerWeek: '$15,000+',
    costLogic: 'One travel nurse covering a permanent vacancy costs $15,000–$30,000 per month more than a permanent hire. A 90-day vacancy managed with travel staff can cost your organization $45,000–$90,000 in excess spend before the search even closes.',
    talentContext: 'Strong clinical candidates are actively recruited by multiple health systems. A passive nurse who opens up to a new opportunity typically accepts an offer within 2–3 weeks. A search process that takes 90 days is not competing for those candidates — it is competing for whoever is left.',
    faqRoles: 'Registered nurses, nurse practitioners, licensed practical nurses, physicians, medical assistants, clinical coordinators, healthcare administrators, and other clinical and administrative healthcare roles.',
    faqBonus1: 'Instead of a lump-sum contingency fee, payments are tied to defined milestones in the search. Total cost is roughly 50% less than a contingency arrangement — and far less than continued travel nurse spend for the same seat.',
  },
  finance: {
    eyebrow: 'Job Placement · Finance',
    metaTitle: 'Finance & Accounting Job Placement | Controller & CPA Hiring | BEG',
    metaDesc: 'Place controllers, CPAs, and finance managers faster. Milestone billing, 45-day replacement guarantee. Specialized finance and accounting recruiting.',
    canonical: 'https://beghr.com/services/job-placement/finance',
    title: 'That controller vacancy is closing your books late.',
    description: 'An empty finance seat means delayed month-end close, stretched audits, and decisions made without clean numbers. We place controllers, CPAs, and senior accounting professionals in 23–35 days at roughly 50% less than contingency firms.',
    imageSrc: '/assets/hero-images/finance.svg',
    imageAlt: 'Finance team with an open controller or CPA position',
    stats: [
      { value: '23-35', label: 'Days to fill on average' },
      { value: '86%', label: 'Fill rate on active searches' },
      { value: '~50%', label: 'Less than contingency pricing' },
    ],
    painStats: [
      { stat: '$11,000+', label: 'Per month in absorbed cost per unfilled senior finance seat', sub: 'A controller at $130K salary equals roughly $11,000/month. Every month the seat is empty is $11,000 in overhead absorbed by a team already at capacity.' },
      { stat: '30+ days', label: 'Average delay to close when a senior finance role is unfilled', sub: 'Month-end close, board reporting, and audit prep all depend on headcount. One vacancy cascades into the whole finance function.' },
      { stat: '2-4 weeks', label: 'Window before senior finance candidates take another offer', sub: 'Qualified CPAs and controllers get multiple offers. A 90-day search is always fishing in a smaller pond.' },
    ],
    roleExamples: 'controllers, CPAs, CFOs, finance managers, senior accountants, FP&A analysts, and accounting directors',
    costPerWeek: '$11,000/month',
    costLogic: 'A controller or senior finance manager at $130,000 per year costs roughly $11,000 per month in salary alone. Every month that role stays open, your team absorbs the work without the headcount — and your close process, audit readiness, and financial reporting accuracy all suffer.',
    talentContext: 'Senior finance and accounting professionals are rarely on job boards. A CPA or controller who decides they are open to a move will receive multiple offers within two to three weeks. A search that relies on posting and waiting will always see only the candidates everyone else already passed on.',
    faqRoles: 'Controllers, CFOs, CPAs, finance managers, VP of Finance, FP&A analysts, senior accountants, accounting managers, and other finance and accounting leadership roles.',
    faqBonus1: 'Milestone-based pricing replaces the standard 20–25% contingency fee. Total cost is roughly 50% less. For a $130,000 controller placement, that difference is $13,000–$19,000 in your pocket versus a contingency arrangement.',
  },
  technology: {
    eyebrow: 'Job Placement · Technology',
    metaTitle: 'IT & Technology Job Placement | Dev & Data Recruiting | BEG',
    metaDesc: 'Place software engineers, data scientists, and IT professionals before your roadmap slips. Milestone billing, 45-day guarantee. Book a discovery call.',
    canonical: 'https://beghr.com/services/job-placement/technology',
    title: 'That open engineering seat is slipping your roadmap.',
    description: 'Every sprint without full headcount is a product commitment you cannot keep. Features slip. Technical debt compounds. The team carries the load until someone leaves too. We place software engineers, data scientists, and IT professionals in 23–35 days at roughly 50% less than contingency firms.',
    imageSrc: '/assets/hero-images/technology.svg',
    imageAlt: 'Technology team with an open engineering or developer role',
    stats: [
      { value: '23-35', label: 'Days to fill on average' },
      { value: '86%', label: 'Fill rate on active searches' },
      { value: '~50%', label: 'Less than contingency pricing' },
    ],
    painStats: [
      { stat: '$800–$1,500/day', label: 'Value of one senior engineer\'s sprint output', sub: 'One unfilled senior dev seat is not just a headcount gap — it is measurable product velocity you are not shipping.' },
      { stat: '10 days', label: 'Average time before a tech candidate has multiple competing offers', sub: 'In-demand engineers move fast. A 90-day process is not competing for the same candidates a 30-day process is.' },
      { stat: '3x', label: 'Harder to replace a senior engineer vs. hire for the role the first time', sub: 'Technical roles require deep screening. Volume-based recruiting firms flood you with unqualified applicants.' },
    ],
    roleExamples: 'software engineers, full-stack developers, data scientists, engineering managers, CTOs, DevOps engineers, and IT managers',
    costPerWeek: '$4,000–$7,500/week',
    costLogic: 'A senior engineer billing at $150,000–$200,000 per year represents $4,000–$7,500 per week in sprint capacity. A vacant seat for 12 weeks means roughly $48,000–$90,000 in unshipped product or absorbed overload — before you factor in the compounding effect on the rest of the team.',
    talentContext: 'Software engineers and data scientists with in-demand skills receive multiple recruiter outreaches daily. When a strong candidate decides to make a move, they typically have an offer within two weeks. Passive candidates are the best candidates — and they are not responding to job board postings.',
    faqRoles: 'Software engineers (frontend, backend, full-stack), mobile developers, data scientists, machine learning engineers, DevOps and platform engineers, engineering managers, CTOs, IT directors, and other technical leadership roles.',
    faqBonus1: 'Contingency tech recruiters typically charge 20–25% of first-year salary. For a $180,000 engineer, that is $36,000–$45,000. Milestone-based pricing brings that cost down by roughly 50%, while aligning our incentives with your timeline.',
  },
  engineering: {
    eyebrow: 'Job Placement · Engineering',
    metaTitle: 'Engineering Job Placement | Technical Recruiting Services | BEG',
    metaDesc: 'Fill engineering and technical roles on time. Specialized engineering recruiting with milestone billing and 45-day replacement guarantee.',
    canonical: 'https://beghr.com/services/job-placement/engineering',
    title: 'That open engineering role is putting projects behind.',
    description: 'An unfilled engineering seat does not pause your project timeline. It just means someone else absorbs the work — or the work does not get done. We place licensed engineers, PEs, and technical professionals in 23–35 days at roughly 50% less than contingency firms.',
    imageSrc: '/assets/hero-images/engineering.svg',
    imageAlt: 'Engineering firm with an open licensed engineer position',
    stats: [
      { value: '23-35', label: 'Days to fill on average' },
      { value: '86%', label: 'Fill rate on active searches' },
      { value: '~50%', label: 'Less than contingency pricing' },
    ],
    painStats: [
      { stat: '$5,000+', label: 'Per week in project delay cost from one unfilled engineering role', sub: 'Engineering project overruns cost money, client relationships, and future bid competitiveness. Headcount gaps are the most common cause.' },
      { stat: 'PE license', label: 'Required for many roles — and the candidate pool is small', sub: 'PE-licensed engineers are in high demand and low supply. Waiting for them to apply is not a strategy.' },
      { stat: '2-3 weeks', label: 'Before a qualified PE or senior engineer accepts another offer', sub: 'Licensed engineers are approached constantly. A slow search process always ends up with whoever was left.' },
    ],
    roleExamples: 'civil, structural, mechanical, electrical, and project engineers, PEs, engineering managers, and technical project leads',
    costPerWeek: '$5,000+',
    costLogic: 'A vacant engineering seat does not just mean one person\'s workload goes uncovered — it means project milestones slip, client commitments get missed, and your firm\'s reputation takes the hit. For most engineering firms, a delayed project costs more per week than the annual salary of the role that needs to be filled.',
    talentContext: 'Licensed engineers, especially PE-stamped professionals, are scarce and passively employed. They are not posting their resume on Indeed. When one opens up to a new opportunity, they receive offers quickly. A proactive sourcing approach is the only reliable way to reach this candidate pool.',
    faqRoles: 'Civil engineers, structural engineers, mechanical engineers, electrical engineers, project engineers, PE-licensed professionals, engineering managers, and technical project directors across construction, infrastructure, manufacturing, and industrial sectors.',
    faqBonus1: 'Milestone pricing replaces the standard contingency model. For a $100,000–$130,000 engineering role, contingency firms charge $20,000–$32,000 at close. Our total cost is roughly 50% less, structured across defined search milestones.',
  },
  executive: {
    eyebrow: 'Job Placement · Executive',
    metaTitle: 'Executive Search Services | C-Level & Director Recruiting | BEG',
    metaDesc: 'Confidential executive and director-level search. Milestone-based, 45-day guarantee. Find C-suite and leadership talent that moves the needle.',
    canonical: 'https://beghr.com/services/job-placement/executive',
    title: 'An empty leadership seat costs more than the salary.',
    description: 'Every month a C-suite or director role goes unfilled, decisions do not get made, strategies stall, and teams lose direction. We conduct confidential executive searches and place senior leaders in 23–35 days — discreetly, at roughly 50% less than traditional executive search firms.',
    imageSrc: '/assets/hero-images/executive.svg',
    imageAlt: 'Organization with an open C-suite or director role',
    stats: [
      { value: '23-35', label: 'Days to fill on average' },
      { value: '86%', label: 'Fill rate on active searches' },
      { value: '~50%', label: 'Less than traditional executive search' },
    ],
    painStats: [
      { stat: '$25,000+', label: 'Per month in opportunity cost from an empty C-suite seat', sub: 'External consultants, fractional executives, and absorbed board time all cost money while a permanent seat goes unfilled.' },
      { stat: '6–9 months', label: 'What traditional executive search firms take on average', sub: 'Legacy retained search models were built for a different era. The best candidates do not wait 6 months.' },
      { stat: 'Confidential', label: 'Every search — your competitors cannot know you are looking', sub: 'Executive vacancies signal instability. Discretion is not optional — it is the foundation of how we work.' },
    ],
    roleExamples: 'CEOs, COOs, CFOs, CTOs, CMOs, VPs, directors, and senior leadership across all functions',
    costPerWeek: '$6,000+',
    costLogic: 'An empty C-suite seat rarely stays quiet. Organizations fill the gap with external consultants ($200–$400/hour), fractional executives, or board member time — all of which cost more than the role itself. Beyond the direct cost, strategic decisions get delayed, teams lose direction, and competitors gain ground. The longer the vacancy, the more expensive the outcome.',
    talentContext: 'Senior executives are never on job boards. A CEO or VP who is open to a new opportunity is having private conversations, not submitting applications. Our sourcing approach is built around confidential outreach — proactively identifying and approaching passive candidates who would never surface through a posting.',
    faqRoles: 'CEOs, Presidents, COOs, CFOs, CTOs, CMOs, CROs, VPs of Sales, Marketing, Operations, Finance, HR, General Counsel, and Director-level leadership across all business functions.',
    faqBonus1: 'Traditional retained executive search firms charge 30–35% of first-year compensation — plus retainer fees regardless of outcome. Our milestone model totals roughly 50% less, with payment tied to defined progress rather than billed upfront.',
  },
  trades: {
    eyebrow: 'Job Placement · Skilled Trades',
    metaTitle: 'Skilled Trades Job Placement | Manufacturing Recruiting | BEG',
    metaDesc: 'Place skilled tradespeople and production staff before your line slows. Milestone billing, 45-day guarantee. Trades and manufacturing recruiting.',
    canonical: 'https://beghr.com/services/job-placement/trades',
    title: 'An open trades seat is slowing your production.',
    description: 'One unfilled skilled trades position does not just leave a gap on the org chart — it shows up in overtime costs, missed production quotas, and equipment sitting idle. We place electricians, machinists, welders, and skilled production staff in 23–35 days at roughly 50% less than contingency firms.',
    imageSrc: '/assets/hero-images/trades.svg',
    imageAlt: 'Manufacturing or trades operation with an open skilled position',
    stats: [
      { value: '23-35', label: 'Days to fill on average' },
      { value: '86%', label: 'Fill rate on active searches' },
      { value: '~50%', label: 'Less than contingency pricing' },
    ],
    painStats: [
      { stat: '$3,000+', label: 'Per week in overtime to cover one unfilled trades seat', sub: 'Overtime to backfill a vacancy is expensive and unsustainable. Burning out your current crew to cover a gap creates your next vacancy.' },
      { stat: 'Licensed', label: 'Many trades roles require certifications that shrink the pool', sub: 'Electricians, HVAC techs, and welders with active certifications are in short supply and actively recruited.' },
      { stat: '2 weeks', label: 'Before a qualified licensed tradesperson accepts another offer', sub: 'Certified trades professionals do not stay available long. A slow search always misses the strongest candidates.' },
    ],
    roleExamples: 'electricians, HVAC technicians, welders, machinists, maintenance mechanics, production supervisors, and licensed tradespeople',
    costPerWeek: '$3,000+',
    costLogic: 'Overtime to cover one unfilled trades position costs $3,000–$5,000 per week at 1.5x base pay rates. At 12 weeks, that is $36,000–$60,000 in excess labor cost — before counting missed production quotas, reduced throughput, and equipment underutilization. A 23-35 day search eliminates the bulk of that exposure.',
    talentContext: 'Licensed and certified tradespeople — electricians, HVAC techs, welders, machinists — are in short supply and high demand. When a certified tradesperson becomes available, multiple employers reach out immediately. A reactive search that waits for applications will consistently miss the most qualified candidates.',
    faqRoles: 'Electricians (journeyman and master), HVAC technicians, welders, machinists, CNC operators, maintenance mechanics, millwrights, pipefitters, production supervisors, and other licensed or certified skilled trades professionals.',
    faqBonus1: 'Contingency firms charge 20–25% of first-year salary. For a $65,000 tradesperson, that is $13,000–$16,000. Milestone pricing brings the total cost down by roughly 50%, paid at defined stages rather than as a lump sum when the hire starts.',
  },
};

// ─── MANAGED PAYROLL INDUSTRY DATA ──────────────────────────────────────────

const MP_INDUSTRIES = {
  legal: {
    eyebrow: 'Managed Payroll · Legal',
    metaTitle: 'Managed Payroll for Law Firms | $25–$35 PEPM | BEG',
    metaDesc: 'Outsource law firm payroll for $25–$35 PEPM. Partner distributions, trust accounting, and tax filings included. Request a free scope review.',
    canonical: 'https://beghr.com/services/managed-payroll/legal',
    title: 'Law firm payroll is complex. Your team should not be running it.',
    description: 'Partner distributions, trust account tracking, IOLTA compliance, and multi-tier compensation structures make legal payroll unlike any other. We manage all of it as a fully managed service at $25–$35 per employee per month — less than the cost of one payroll specialist.',
    imageSrc: '/assets/hero-images/legal.svg',
    imageAlt: 'Law firm with managed payroll service',
    painStats: [
      { stat: '$60K–$100K', label: 'Annual cost of one internal payroll specialist', sub: 'Salary, benefits, PTO, training, and turnover risk. Fully managed payroll at $25–$35 PEPM replaces that headcount entirely.' },
      { stat: 'IOLTA', label: 'Trust accounting compliance that most payroll systems miss', sub: 'Legal payroll requires separation of operating and trust funds. Generic payroll systems are not built for this.' },
      { stat: '$1,000+', label: 'Average IRS penalty per payroll filing error', sub: 'One missed deadline or miscalculated withholding triggers penalties, notices, and audit exposure.' },
    ],
    complexityNote: 'Law firm payroll includes partner draw schedules, associate salary tiers, IOLTA trust account compliance, multi-state bar registrations, and performance-based compensation. Generic payroll processors struggle with this. We are built for it.',
    internalHireCost: '$75,000',
    scarcityMonth: 'Every month you run payroll manually or pay an internal specialist is a month you are overpaying for a function that costs $25–$35 PEPM fully managed.',
    faqRoles: 'Partners, associates, paralegals, legal administrators, and support staff at law firms of all sizes.',
    howStep2: 'We map your partner distribution schedule, trust account structure, and compensation tiers before we touch a payroll run.',
    industries: 'law firm',
  },
  healthcare: {
    eyebrow: 'Managed Payroll · Healthcare',
    metaTitle: 'Managed Payroll for Healthcare | Shift Differential & Compliance | BEG',
    metaDesc: 'Healthcare payroll fully managed at $25–$35 PEPM. Shift differentials, compliance, and on-time filings included. Request a free scope review.',
    canonical: 'https://beghr.com/services/managed-payroll/healthcare',
    title: 'Healthcare payroll never stops. Neither do we.',
    description: '24/7 schedules, shift differentials, clinical overtime rules, and multi-state licensure make healthcare payroll the most complex in any industry. We manage it all at $25–$35 per employee per month — fully managed, no migration required.',
    imageSrc: '/assets/hero-images/healthcare.svg',
    imageAlt: 'Healthcare organization with fully managed payroll',
    painStats: [
      { stat: '$70K–$100K', label: 'Annual cost of one internal healthcare payroll specialist', sub: 'Healthcare payroll specialists command premium salaries due to complexity. Fully managed service at $25–$35 PEPM replaces that headcount.' },
      { stat: 'Shift diff', label: 'Differentials, on-call, and overtime rules your system must calculate perfectly', sub: 'One missed shift differential or overtime miscalculation triggers employee complaints, corrections, and potential DOL exposure.' },
      { stat: 'All 50 states', label: 'Multi-state compliance for distributed clinical teams', sub: 'Healthcare organizations operating across state lines face different tax rules, licensure, and overtime thresholds in every jurisdiction.' },
    ],
    complexityNote: 'Healthcare payroll includes 24/7 shift scheduling, differential pay rates, on-call and callback pay, clinical overtime rules, multi-state compliance, and benefits coordination for full-time and PRN staff. We manage every element as a fully managed service.',
    internalHireCost: '$85,000',
    scarcityMonth: 'Every month your team handles payroll manually is a month of compliance exposure, corrections, and staff time that should be going to patient care — not spreadsheets.',
    faqRoles: 'RNs, LPNs, clinical staff, PRN employees, administrative staff, and all healthcare team members across any org size.',
    howStep2: 'We map your shift structure, differential rates, on-call schedules, and multi-state employee roster before running your first payroll cycle.',
    industries: 'healthcare organization',
  },
  finance: {
    eyebrow: 'Managed Payroll · Finance',
    metaTitle: 'Managed Payroll for Finance Firms | $25–$35 PEPM | BEG',
    metaDesc: 'Finance and accounting payroll fully managed. Bonus structures, commission tracking, zero-error filings at $25–$35 PEPM. Request a scope review.',
    canonical: 'https://beghr.com/services/managed-payroll/finance',
    title: 'Finance firm payroll has zero tolerance for errors. Neither do we.',
    description: 'Bonus cycles, commission structures, deferred compensation, and performance-based pay make finance payroll a zero-error environment. One mistake in a filing is an audit trigger. We manage it all at $25–$35 per employee per month — fully managed, nothing to touch.',
    imageSrc: '/assets/hero-images/finance.svg',
    imageAlt: 'Finance firm with fully managed payroll service',
    painStats: [
      { stat: '$65K–$95K', label: 'Annual cost of a dedicated finance payroll specialist', sub: 'Salary, benefits, and turnover risk for one internal role. Fully managed payroll at $25–$35 PEPM replaces that headcount.' },
      { stat: 'Bonus cycles', label: 'And commission structures that must calculate flawlessly', sub: 'An error in a bonus or commission payout triggers correction requests, employee complaints, and potential payroll tax restatements.' },
      { stat: 'Audit risk', label: 'Every payroll filing error is a potential trigger', sub: 'Finance firms operate in a regulated environment. Payroll compliance is not optional — it is a fiduciary obligation.' },
    ],
    complexityNote: 'Finance payroll includes performance-based bonuses, variable commission structures, deferred compensation, carried interest tracking, and strict filing accuracy requirements. We handle all of it as a fully managed service.',
    internalHireCost: '$80,000',
    scarcityMonth: 'Every payroll cycle your team manages manually is compliance exposure. The cost of one IRS penalty or restatement exceeds what fully managed payroll costs for a year.',
    faqRoles: 'Partners, analysts, associates, portfolio managers, advisors, and administrative staff at investment firms, accounting firms, and financial services organizations.',
    howStep2: 'We document your bonus structures, commission schedules, and deferred comp arrangements before your first managed payroll run.',
    industries: 'finance firm',
  },
  technology: {
    eyebrow: 'Managed Payroll · Technology',
    metaTitle: 'Managed Payroll for Tech Companies | Remote Team Payroll | BEG',
    metaDesc: 'Tech company payroll managed at $25–$35 PEPM. Remote teams, multi-state compliance, and equity compensation included. Request a free scope review.',
    canonical: 'https://beghr.com/services/managed-payroll/technology',
    title: 'Remote team payroll across 12 states should not be your problem.',
    description: 'Multi-state remote teams, equity compensation events, contractor vs. employee classification, and rapid headcount scaling make tech payroll a moving target. We manage all of it at $25–$35 per employee per month — so your team focuses on shipping, not spreadsheets.',
    imageSrc: '/assets/hero-images/technology.svg',
    imageAlt: 'Tech company with distributed remote team payroll managed',
    painStats: [
      { stat: '12+ states', label: 'Average number of tax jurisdictions for a 50-person remote tech team', sub: 'Every state your employees work in has different tax registration, withholding, and filing requirements. Missing one triggers back penalties.' },
      { stat: '$65K–$90K', label: 'Annual cost of an internal payroll or HR ops hire', sub: 'Tech companies often staff up for payroll complexity during scaling. Fully managed service at $25–$35 PEPM is the cleaner option.' },
      { stat: 'Equity events', label: 'RSU vesting and option exercises create payroll tax complexity', sub: 'Stock compensation events require immediate payroll tax withholding. Miss the window and you have a restatement.' },
    ],
    complexityNote: 'Technology company payroll includes multi-state remote team compliance, equity compensation tax events, contractor classification management, and rapid headcount scaling. We manage all of it as a fully managed service — in your existing system, no migration required.',
    internalHireCost: '$75,000',
    scarcityMonth: 'Every month you scale headcount without a managed payroll partner is a month of increasing compliance exposure across more and more state tax jurisdictions.',
    faqRoles: 'Full-time employees, part-time staff, and W-2 contractors across all functions at technology companies of any stage.',
    howStep2: 'We map your multi-state employee distribution, equity compensation schedule, and contractor roster before your first managed payroll run.',
    industries: 'tech company',
  },
  engineering: {
    eyebrow: 'Managed Payroll · Engineering',
    metaTitle: 'Managed Payroll for Engineering Firms | Certified Payroll | BEG',
    metaDesc: 'Engineering payroll managed at $25–$35 PEPM. Prevailing wage, certified payroll, and project tracking all included. Request a scope review.',
    canonical: 'https://beghr.com/services/managed-payroll/engineering',
    title: 'Certified payroll and prevailing wage should not consume your team.',
    description: 'Government projects require certified payroll reports. Davis-Bacon and state prevailing wage rules vary by project. One error in a certified payroll submission delays payment or triggers a compliance review. We manage all of it at $25–$35 per employee per month — fully managed, nothing to touch.',
    imageSrc: '/assets/hero-images/engineering.svg',
    imageAlt: 'Engineering firm with certified payroll managed service',
    painStats: [
      { stat: 'Certified', label: 'Payroll reporting required on every government contract', sub: 'Weekly certified payroll reports, fringe benefit tracking, and compliance documentation — all required, all auditable.' },
      { stat: '$60K–$85K', label: 'Annual cost of an internal payroll specialist with certified payroll experience', sub: 'Finding someone who understands Davis-Bacon and prevailing wage is difficult. Managing it as a service is easier.' },
      { stat: 'Project-based', label: 'Labor tracking across multiple active projects simultaneously', sub: 'Engineering firms run multiple projects with different wage requirements. One system needs to handle all of them cleanly.' },
    ],
    complexityNote: 'Engineering firm payroll includes certified payroll reporting, Davis-Bacon and state prevailing wage compliance, multi-project labor tracking, fringe benefit calculations, and government contract documentation. We manage every element as a fully managed service.',
    internalHireCost: '$72,000',
    scarcityMonth: 'Every government project your team manages requires certified payroll compliance. One missed submission or calculation error puts your contract payment at risk.',
    faqRoles: 'Engineers, project managers, field technicians, administrative staff, and project labor at engineering and construction firms.',
    howStep2: 'We document your active project roster, prevailing wage rates, fringe benefit structures, and certified payroll submission schedule before your first managed run.',
    industries: 'engineering firm',
  },
  executive: {
    eyebrow: 'Managed Payroll · Executive',
    metaTitle: 'Executive Payroll Services | Deferred Comp & Benefits | BEG',
    metaDesc: 'Executive compensation managed discreetly at $25–$35 PEPM. Deferred comp, executive benefits, and complex arrangements handled. Request a call.',
    canonical: 'https://beghr.com/services/managed-payroll/executive',
    title: 'Executive compensation requires discretion and precision.',
    description: 'Deferred compensation plans, executive benefit structures, non-qualified plans, and complex bonus arrangements require a payroll partner who understands how to handle them — accurately and discreetly. We manage executive payroll at $25–$35 per employee per month.',
    imageSrc: '/assets/hero-images/executive.svg',
    imageAlt: 'Organization with executive compensation managed payroll',
    painStats: [
      { stat: 'NQDC plans', label: 'Non-qualified deferred compensation requires specialized handling', sub: 'NQDC plan distributions, timing elections, and 409A compliance all touch payroll. One miscalculation creates significant tax liability.' },
      { stat: 'Discretion', label: 'Executive payroll cannot go through standard HR workflows', sub: 'Compensation details for C-suite and board members require restricted access and separate processing.' },
      { stat: '$80K–$120K', label: 'Annual cost of an executive compensation specialist', sub: 'Organizations large enough to need specialized executive payroll often cannot justify the headcount. Fully managed service solves this.' },
    ],
    complexityNote: 'Executive payroll includes deferred compensation plan management, non-qualified benefit handling, 409A compliance, executive benefit coordination, and discreet processing separate from standard HR workflows.',
    internalHireCost: '$100,000',
    scarcityMonth: 'Executive compensation errors — missed 409A elections, late NQDC distributions, or incorrect withholding on executive benefits — create significant tax liability and potential IRS scrutiny.',
    faqRoles: 'C-suite executives, board members, senior vice presidents, directors, and other leadership with complex compensation arrangements.',
    howStep2: 'We document your NQDC plans, deferred comp elections, executive benefit structures, and access restrictions before processing a single payroll cycle.',
    industries: 'executive team',
  },
  trades: {
    eyebrow: 'Managed Payroll · Skilled Trades',
    metaTitle: 'Managed Payroll for Skilled Trades | Union & Certified Payroll | BEG',
    metaDesc: 'Trades and manufacturing payroll at $25–$35 PEPM. Union compliance, certified payroll, and multi-site management included. Request a scope review.',
    canonical: 'https://beghr.com/services/managed-payroll/trades',
    title: 'Union payroll and certified reporting should not slow your operation.',
    description: 'Union agreements, prevailing wage requirements, multi-site workforce management, and certified payroll reporting make trades payroll one of the most complex in any industry. We manage all of it at $25–$35 per employee per month — fully managed, nothing for your team to touch.',
    imageSrc: '/assets/hero-images/trades.svg',
    imageAlt: 'Skilled trades or manufacturing operation with managed payroll',
    painStats: [
      { stat: 'Union CBA', label: 'Collective bargaining agreements create non-negotiable payroll rules', sub: 'Union contract terms — wage rates, overtime rules, fringe benefits — must be calculated exactly right on every pay cycle.' },
      { stat: 'Multi-site', label: 'Different wage requirements across different project locations', sub: 'Prevailing wage rates vary by jurisdiction. A crew working two projects in different counties may have different required wages.' },
      { stat: '$60K–$80K', label: 'Annual cost of a payroll specialist with union and certified payroll experience', sub: 'Finding and keeping someone who understands union CBA compliance and certified payroll is difficult and expensive.' },
    ],
    complexityNote: 'Skilled trades payroll includes union CBA compliance, prevailing wage tracking by jurisdiction, certified payroll reporting, multi-site workforce management, fringe benefit calculations, and apprenticeship ratio tracking.',
    internalHireCost: '$70,000',
    scarcityMonth: 'Every pay cycle on a union contract is a compliance event. One missed CBA provision or incorrect fringe benefit calculation triggers a grievance or audit.',
    faqRoles: 'Union and non-union electricians, plumbers, HVAC technicians, welders, ironworkers, carpenters, heavy equipment operators, and other skilled trades and construction workers.',
    howStep2: 'We review your union CBAs, prevailing wage schedules, and multi-site project roster before processing your first managed payroll cycle.',
    industries: 'trades and manufacturing operation',
  },
};

// ─── HCM SOFTWARE INDUSTRY DATA ─────────────────────────────────────────────

const HCM_INDUSTRIES = {
  legal: {
    eyebrow: 'HCM Software · Legal',
    metaTitle: 'iSolved HCM for Law Firms | Legal HR & Payroll Platform | BEG',
    metaDesc: 'iSolved HCM for law firms. Manage partner compensation, associate tracking, and billable time on one platform. Implemented and supported by BEG.',
    canonical: 'https://beghr.com/services/hcm-software/legal',
    title: 'One HR platform built for how law firms actually operate.',
    description: 'Partner compensation tiers, associate tracking, billable time integration, and IOLTA-adjacent payroll make law firm HR unlike any generic HCM setup. iSolved People Cloud handles all of it — implemented and supported by BEG.',
    imageSrc: '/assets/hero-images/legal.svg',
    imageAlt: 'Law firm using iSolved HCM platform implemented by BEG',
    painStats: [
      { stat: '4+ systems', label: 'Average number of disconnected tools a law firm uses for HR', sub: 'Time tracking in one system, payroll in another, benefits in a third. Every data transfer is a reconciliation risk.' },
      { stat: 'IOLTA', label: 'Trust accounting compliance that most HR platforms ignore', sub: 'iSolved is configurable to handle legal firm compensation structures, including partner draws and trust account separation.' },
      { stat: '330%', label: 'ROI documented by Forrester for iSolved implementations', sub: 'The average iSolved client sees full ROI within 12 months based on reduced admin time, fewer errors, and eliminated point solutions.' },
    ],
    platformFit: 'iSolved for law firms handles partner distribution tracking, associate compensation tiers, benefits administration, time and attendance, and talent management in one connected platform. BEG configures and maintains it for your firm\'s specific structure.',
    claudeAngle: 'The iSolved Connector for Claude lets your HR or office manager complete tasks — pulling headcount reports, updating employee records, managing PTO — through a natural conversation with Claude AI. No forms. No manual data entry.',
    faqPrimary: 'Partner compensation and draw schedules, associate salary and bonus structures, paralegal and staff payroll, benefits administration, time and attendance tracking, and HR compliance.',
    contractNote: 'If your firm is on ADP, Paychex, or another platform, BEG will time implementation to align with your contract renewal — so you never pay for two systems at once.',
  },
  healthcare: {
    eyebrow: 'HCM Software · Healthcare',
    metaTitle: 'iSolved HCM for Healthcare | Clinical HR & Payroll Platform | BEG',
    metaDesc: 'iSolved HCM for healthcare. Shift scheduling, compliance tracking, and clinical staff management on one platform. Implemented and supported by BEG.',
    canonical: 'https://beghr.com/services/hcm-software/healthcare',
    title: 'One platform for every clinical schedule, shift, and compliance rule.',
    description: 'Healthcare HR means 24/7 scheduling, shift differentials, multi-site clinical staff, and compliance requirements that change constantly. iSolved People Cloud handles all of it in one platform — implemented and supported by BEG.',
    imageSrc: '/assets/hero-images/healthcare.svg',
    imageAlt: 'Healthcare organization using iSolved HCM platform',
    painStats: [
      { stat: '5+ tools', label: 'Average systems a mid-size healthcare org uses for HR', sub: 'Scheduling in one system, payroll in another, benefits in a third, compliance in a fourth. Silos cost time and create errors.' },
      { stat: 'ACA', label: 'And Joint Commission compliance built into iSolved', sub: 'Healthcare compliance is not optional. iSolved tracks and documents it so your team does not have to chase records manually.' },
      { stat: '330%', label: 'Average ROI documented by Forrester for iSolved clients', sub: 'Healthcare clients see the fastest ROI due to scheduling and overtime cost reduction in the first 90 days.' },
    ],
    platformFit: 'iSolved for healthcare manages 24/7 shift scheduling, differential pay calculation, multi-site clinical staff, ACA compliance tracking, benefits administration, and talent management in one connected platform. BEG implements and maintains it for your specific clinical structure.',
    claudeAngle: 'The iSolved Connector for Claude lets your HR team pull staffing reports, update employee records, and manage scheduling — all through a Claude AI conversation. Less time in the system, more time running the operation.',
    faqPrimary: 'RNs, LPNs, physicians, clinical coordinators, PRN and per-diem staff, administrative and support staff across single and multi-site healthcare organizations.',
    contractNote: 'BEG times implementation to your current platform contract renewal. Most healthcare clients complete the iSolved transition in 60–90 days with zero payroll interruption.',
  },
  finance: {
    eyebrow: 'HCM Software · Finance',
    metaTitle: 'iSolved HCM for Finance Firms | Bonus & Payroll Platform | BEG',
    metaDesc: 'iSolved HCM for finance and accounting. Bonus tracking, commission management, and payroll on one platform. Implemented and supported by BEG.',
    canonical: 'https://beghr.com/services/hcm-software/finance',
    title: 'One HR platform for firms where compensation gets complicated.',
    description: 'Performance bonuses, commission tracking, deferred compensation, and equity events require an HCM platform that can handle complexity without a custom dev project. iSolved People Cloud does — implemented and supported by BEG.',
    imageSrc: '/assets/hero-images/finance.svg',
    imageAlt: 'Finance firm using iSolved HCM platform implemented by BEG',
    painStats: [
      { stat: 'Bonus cycles', label: 'That most HR platforms cannot calculate without manual overrides', sub: 'Performance-based compensation requires configuration, not workarounds. iSolved handles complex pay structures natively.' },
      { stat: '100%', label: 'Payroll accuracy required in a zero-error-tolerance environment', sub: 'Finance firms cannot afford payroll restatements. iSolved\'s accuracy rate and audit trail eliminate the risk.' },
      { stat: '330%', label: 'Average ROI documented by Forrester for iSolved clients', sub: 'Finance firms with complex comp structures see the highest returns from elimination of manual reconciliation and spreadsheet errors.' },
    ],
    platformFit: 'iSolved for finance firms handles variable compensation tracking, bonus cycle management, commission calculation, deferred compensation events, benefits administration, and zero-error payroll in one connected platform.',
    claudeAngle: 'The iSolved Connector for Claude lets your HR or finance ops team run compensation reports, update employee data, and manage benefits enrollment — all through Claude AI. No system switching. No manual data pulls.',
    faqPrimary: 'Partners, analysts, portfolio managers, advisors, associates, and all staff at investment management firms, RIAs, accounting firms, and financial services companies.',
    contractNote: 'BEG aligns your iSolved implementation with your current platform contract renewal. Most finance clients are live in 60–90 days with no payroll interruption.',
  },
  technology: {
    eyebrow: 'HCM Software · Technology',
    metaTitle: 'iSolved HCM for Tech Companies | HR & Equity Platform | BEG',
    metaDesc: 'iSolved HCM for technology companies. Manage equity comp, contractors, and distributed teams on one platform. Implemented and supported by BEG.',
    canonical: 'https://beghr.com/services/hcm-software/technology',
    title: 'One HR platform that scales as fast as your headcount does.',
    description: 'Remote teams, equity events, contractor classification, and rapid headcount growth make tech company HR a moving target. iSolved People Cloud scales with you — implemented and supported by BEG, without ripping out your current system.',
    imageSrc: '/assets/hero-images/technology.svg',
    imageAlt: 'Tech company using iSolved HCM platform for distributed team management',
    painStats: [
      { stat: 'Multi-state', label: 'Tax compliance for distributed remote teams', sub: 'iSolved auto-updates state tax tables and handles registration across all 50 states as your team grows.' },
      { stat: 'Equity events', label: 'RSU vesting and option exercises handled natively', sub: 'iSolved processes equity compensation tax events without requiring a separate system or manual withholding calculations.' },
      { stat: '330%', label: 'Average ROI documented by Forrester for iSolved clients', sub: 'Technology companies see fast ROI through elimination of multi-system data transfer, HR ops time savings, and compliance cost avoidance.' },
    ],
    platformFit: 'iSolved for tech companies manages multi-state remote team compliance, equity compensation events, contractor and employee benefit administration, rapid onboarding workflows, and talent management — all in one connected platform.',
    claudeAngle: 'The iSolved Connector for Claude is a natural fit for tech-forward teams. Your HR ops team can complete tasks — onboarding new hires, pulling headcount reports, managing PTO policies — directly through Claude AI. It is the most advanced HR AI integration available in any HCM platform today.',
    faqPrimary: 'Full-time remote employees, W-2 contractors, part-time staff, and executive team members at software, SaaS, and technology companies at any stage of growth.',
    contractNote: 'Most tech companies complete the migration from their existing platform in 60–90 days. BEG handles the transition during your current contract\'s final 90 days so you switch cleanly at renewal.',
  },
  engineering: {
    eyebrow: 'HCM Software · Engineering',
    metaTitle: 'iSolved HCM for Engineering | Prevailing Wage & Payroll | BEG',
    metaDesc: 'iSolved HCM for engineering firms. Certified payroll, prevailing wage compliance, and project tracking on one platform. Implemented by BEG.',
    canonical: 'https://beghr.com/services/hcm-software/engineering',
    title: 'One platform for certified payroll, prevailing wage, and project HR.',
    description: 'Government contracts require certified payroll documentation. Davis-Bacon and state prevailing wage rules differ by project. iSolved People Cloud handles all of it in one connected platform — implemented and maintained by BEG.',
    imageSrc: '/assets/hero-images/engineering.svg',
    imageAlt: 'Engineering firm using iSolved HCM for certified payroll and project tracking',
    painStats: [
      { stat: 'Certified', label: 'Payroll reporting required on every government project', sub: 'Weekly certified payroll submissions are a contract requirement. iSolved generates them automatically from your payroll data.' },
      { stat: 'Davis-Bacon', label: 'And state prevailing wage compliance across all active projects', sub: 'iSolved tracks prevailing wage rates by project and jurisdiction, so every crew member is paid correctly every cycle.' },
      { stat: '330%', label: 'Average ROI documented by Forrester for iSolved clients', sub: 'Engineering firms save the most on compliance documentation time and audit-related costs after implementing iSolved.' },
    ],
    platformFit: 'iSolved for engineering firms handles certified payroll report generation, prevailing wage tracking by project and jurisdiction, multi-site workforce management, fringe benefit calculations, and government contract HR documentation in one platform.',
    claudeAngle: 'The iSolved Connector for Claude lets your project HR team pull labor reports, verify compliance documentation, and manage employee records — all through a Claude AI conversation. Less manual system work, more time managing projects.',
    faqPrimary: 'Engineers, project managers, field crews, prevailing wage workers, and administrative staff at civil, structural, mechanical, and infrastructure engineering firms.',
    contractNote: 'BEG times your iSolved implementation to your current platform renewal. Most engineering firms are live in 60–90 days, with certified payroll running correctly from the first government project cycle.',
  },
  executive: {
    eyebrow: 'HCM Software · Executive',
    metaTitle: 'iSolved HCM for Executive Teams | Deferred Comp Platform | BEG',
    metaDesc: 'iSolved HCM for executive compensation. Deferred comp tracking, complex benefits administration, and discreet management. Implemented by BEG.',
    canonical: 'https://beghr.com/services/hcm-software/executive',
    title: 'Executive compensation needs a platform — not a spreadsheet.',
    description: 'Deferred compensation plans, non-qualified benefits, 409A compliance, and restricted access requirements make executive HR a category of its own. iSolved People Cloud handles it correctly — implemented and maintained by BEG with full confidentiality controls.',
    imageSrc: '/assets/hero-images/executive.svg',
    imageAlt: 'Organization using iSolved HCM for executive compensation management',
    painStats: [
      { stat: 'NQDC plans', label: 'That must integrate cleanly with payroll tax processing', sub: 'Non-qualified deferred compensation distributions have specific tax timing requirements. iSolved handles the withholding automatically.' },
      { stat: '409A', label: 'Valuation compliance tracked within the same platform', sub: 'iSolved maintains the documentation trail for 409A compliance without requiring a separate system or manual recordkeeping.' },
      { stat: '330%', label: 'Average ROI documented by Forrester for iSolved clients', sub: 'Organizations with complex executive compensation see high ROI from elimination of manual tracking and reduced external consultant fees.' },
    ],
    platformFit: 'iSolved for executive teams manages NQDC plan distributions, 409A compliance documentation, deferred compensation elections, executive benefit administration, and restricted-access payroll processing — all in one platform with BEG-managed confidentiality controls.',
    claudeAngle: 'The iSolved Connector for Claude lets authorized HR team members access executive compensation data, pull reports, and manage benefit events — through Claude AI, with full access controls intact.',
    faqPrimary: 'C-suite executives, board members, senior vice presidents, and other leadership with non-qualified deferred compensation, equity, or complex benefit arrangements.',
    contractNote: 'BEG handles executive data migration and access control configuration as part of implementation. All executive compensation data is restricted to authorized users only, separate from standard employee records.',
  },
  trades: {
    eyebrow: 'HCM Software · Skilled Trades',
    metaTitle: 'iSolved HCM for Skilled Trades | Union & Multi-Site Payroll | BEG',
    metaDesc: 'iSolved HCM for trades and manufacturing. Union compliance, certified payroll, and multi-site management on one platform. Implemented by BEG.',
    canonical: 'https://beghr.com/services/hcm-software/trades',
    title: 'One platform for union compliance, multi-site payroll, and workforce tracking.',
    description: 'Union CBAs, prevailing wage by jurisdiction, multi-site workforce management, and certified payroll reporting require an HCM platform that can handle all of it without workarounds. iSolved People Cloud does — implemented and maintained by BEG.',
    imageSrc: '/assets/hero-images/trades.svg',
    imageAlt: 'Trades and manufacturing operation using iSolved HCM platform',
    painStats: [
      { stat: 'CBA', label: 'Collective bargaining agreement terms enforced in every payroll run', sub: 'iSolved calculates union wage rates, overtime premiums, fringe benefits, and apprenticeship ratios automatically from your CBA terms.' },
      { stat: 'Multi-site', label: 'Workforce management across multiple project locations', sub: 'Different prevailing wage rates by project and jurisdiction — iSolved tracks them all without manual rate tables.' },
      { stat: '330%', label: 'Average ROI documented by Forrester for iSolved clients', sub: 'Trades and manufacturing firms see high ROI from union compliance automation, overtime cost reduction, and certified payroll generation savings.' },
    ],
    platformFit: 'iSolved for trades and manufacturing handles union CBA compliance, prevailing wage tracking by jurisdiction, certified payroll report generation, multi-site workforce management, apprenticeship ratio tracking, and benefits administration in one connected platform.',
    claudeAngle: 'The iSolved Connector for Claude lets your HR and operations team pull workforce reports, verify union compliance documentation, and manage employee records — all through a Claude AI conversation. Less time in the system, more time running the operation.',
    faqPrimary: 'Union and non-union tradespeople, electricians, plumbers, HVAC technicians, welders, ironworkers, heavy equipment operators, production workers, and field supervisors.',
    contractNote: 'BEG times implementation to your current platform renewal and configures iSolved for your specific union CBAs and prevailing wage schedules before your first managed payroll run.',
  },
};

// ─── PAGE GENERATORS ─────────────────────────────────────────────────────────

function genJobPlacementPage(slug, data) {
  return `import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${data.metaTitle}',
  description: '${data.metaDesc}',
  alternates: { canonical: '${data.canonical}' },
  openGraph: { title: '${data.metaTitle}', description: '${data.metaDesc}', url: '${data.canonical}', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: '${data.metaTitle}', description: '${data.metaDesc}', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-${slug}');

export default function Placement${cap(slug.replace(/[^a-zA-Z0-9]/g, ''))}Page() {
  return (
    <ServicePage
      imageSrc="${data.imageSrc}"
      imageAlt="${data.imageAlt}"
      eyebrow="${data.eyebrow}"
      title="${data.title}"
      description="${data.description}"
      calendlyLink={CALENDLY}
      heroStats={${JSON.stringify(data.stats)}}
    >

${ktHub(data)}
      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Real Cost of a Slow Search</p>
            <h2>What does that open role actually cost your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            ${data.painStats.map(({ stat, label, sub }) => `{
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>${stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>${label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>${sub}</div>
                </div>
              ))()
            }`).join('\n            ')}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>From open role to placed hire in three steps</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Discovery call', body: 'We learn your organization, the role, and what a strong candidate actually looks like in your environment. 15 minutes. No fluff.' },
              { num: '02', title: 'Active sourcing', body: 'We go direct to passive candidates — professionals who are not on job boards but are quietly open to the right opportunity. This is where most searches fail.' },
              { num: '03', title: 'Shortlist review', body: 'You receive 3–5 pre-screened candidates. No stacks of resumes. No wasted interviews. You meet candidates who have already been qualified against your specific criteria.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things every organization wants — and most placement firms do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No contingency fees. Ever.',
                objection: 'Common objection: "We already work with contingency recruiters."',
                body: '${data.faqBonus1}',
              },
              {
                badge: 'Bonus 02',
                title: '45-day replacement guarantee at no charge.',
                objection: "Common objection: \\"What if the placement doesn't work out?\\"",
                body: 'If the hire does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge. Our guarantee is longer than most contingency firms and is built into every engagement.',
              },
              {
                badge: 'Bonus 03',
                title: 'A curated shortlist. Not a resume stack.',
                objection: 'Common objection: "We have used recruiters before and wasted time on bad candidates."',
                body: 'You will not sort through 20 resumes hoping one sticks. Your dedicated search specialist builds a shortlist of 3–5 candidates who have been screened against your specific criteria. You only meet people who are genuinely qualified. The first interview is a real conversation, not a screening exercise.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

${jdTool('Hiring ' + amp(indName(data)) + '? Grade your job description first.', amp(indName(data).toLowerCase()))}
      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every week that role stays open is a decision you are making.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>${data.costLogic}</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best candidates are only available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>${data.talentContext}</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>No commitment. We will tell you exactly what we can do for your search and what it costs.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What roles do you place?</h3>
              <p>${data.faqRoles}</p>
            </div>
            <div className="faq-item">
              <h3>How is this different from a staffing agency?</h3>
              <p>We are not a staffing agency. This is direct permanent placement with milestone-based pricing. You hire the candidate directly. We are not placing temps or contractors.</p>
            </div>
            <div className="faq-item">
              <h3>How does milestone-based pricing work?</h3>
              <p>Payments are tied to defined milestones in the search process rather than a lump-sum contingency fee at the end. Total cost is roughly 50% less than a standard contingency arrangement. Exact structure is covered on your discovery call.</p>
            </div>
            <div className="faq-item">
              <h3>What does the 45-day guarantee cover?</h3>
              <p>If the placed candidate does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge.</p>
            </div>
            <div className="faq-item">
              <h3>How quickly can you start a search?</h3>
              <p>Typically within one week of your discovery call. We begin active sourcing immediately after alignment on the role profile and compensation range.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What roles do you place?', acceptedAnswer: { '@type': 'Answer', text: '${data.faqRoles}' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'How does milestone-based pricing work?', acceptedAnswer: { '@type': 'Answer', text: 'Payments tied to defined milestones. Total cost roughly 50% less than contingency.' } },
              { '@type': 'Question', name: 'What does the 45-day guarantee cover?', acceptedAnswer: { '@type': 'Answer', text: 'If the hire does not work out within 45 days, we replace at no additional charge.' } },
            ],
          }),
        }}
      />

    </ServicePage>
  );
}
`;
}

function genManagedPayrollPage(slug, data) {
  return `import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${data.metaTitle}',
  description: '${data.metaDesc}',
  alternates: { canonical: '${data.canonical}' },
};

const CALENDLY = getCalendlyLink('payroll-${slug}');

export default function Payroll${cap(slug)}Page() {
  return (
    <ServicePage
      imageSrc="${data.imageSrc}"
      imageAlt="${data.imageAlt}"
      eyebrow="${data.eyebrow}"
      title="${data.title}"
      description="${data.description}"
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$35', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            ${data.painStats.map(({ stat, label, sub }) => `{
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>${stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>${label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>${sub}</div>
                </div>
              ))()
            }`).join('\n            ')}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your current payroll process, employee roster, and complexity. You get a fixed monthly cost — no surprises.' },
              { num: '02', title: '${data.howStep2 || "Transition and setup"}', body: 'We configure and run your first payroll cycles. No migration required — we work in your existing system. Transition takes 30–60 days.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every filing, every compliance update — fully managed by BEG. Your team touches nothing.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Switching payroll systems is too disruptive."',
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team inside your current system. If you want to move to a better platform, we can handle that too — but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll services always add fees for every little thing."',
                body: 'The $25–$35 PEPM rate is all-inclusive: payroll processing, tax filing, compliance updates, year-end W-2s, and support. There are no per-run fees, no year-end surcharges, and no module upsells. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a support queue.',
                objection: 'Common objection: "Payroll vendors disappear after onboarding."',
                body: 'Your BEG payroll specialist is your ongoing contact. When something changes — a new hire, a state registration, a compliance update — you send one message. There is no ticket queue, no chatbot, and no calling a 1-800 number. Your team has a real person who knows your account.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every month you wait is money you are not getting back.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your ${data.industries} costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$35 PEPM on a 50-person team costs $15,000–$21,000 per year. ${data.scarcityMonth}</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. If you want a clean cutover at Q3, Q4, or January 1 — the window to start is now. Companies that miss the quarter-start timing typically wait another 3 months. The savings you defer are gone for good.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your payroll, give you a fixed monthly cost, and show you what transition looks like.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Who do you run payroll for?</h3>
              <p>${data.faqRoles}</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. We operate as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$35 PEPM include?</h3>
              <p>Everything: payroll processing, federal and state tax filing, compliance updates, year-end W-2s, and dedicated BEG support. No add-on fees, no per-run charges, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30–60 days from scope review to first managed payroll run. We handle setup, testing, and go-live. Your team reviews and approves before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>What if our headcount changes?</h3>
              <p>Your rate adjusts with headcount. Adding or removing employees updates your monthly cost at the same per-employee rate. No contracts to renegotiate.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$35 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, tax filing, compliance updates, W-2s, and support. No add-on fees.' } },
              { '@type': 'Question', name: 'How long does the transition take?', acceptedAnswer: { '@type': 'Answer', text: '30-60 days from scope review to first managed payroll run.' } },
            ],
          }),
        }}
      />

    </ServicePage>
  );
}
`;
}

function genHCMPage(slug, data) {
  return `import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${data.metaTitle}',
  description: '${data.metaDesc}',
  alternates: { canonical: '${data.canonical}' },
};

const CALENDLY = getCalendlyLink('hcm-${slug}');

export default function HCM${cap(slug)}Page() {
  return (
    <ServicePage
      imageSrc="${data.imageSrc}"
      imageAlt="${data.imageAlt}"
      eyebrow="${data.eyebrow}"
      title="${data.title}"
      description="${data.description}"
      calendlyLink={CALENDLY}
      heroStats={[
        { value: 'iSolved', label: 'People Cloud — all-in-one HCM' },
        { value: '330%', label: 'ROI documented by Forrester' },
        { value: 'BEG', label: 'Implements and supports your platform' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Disconnected Systems</p>
            <h2>What are fragmented HR tools actually costing your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            ${data.painStats.map(({ stat, label, sub }) => `{
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>${stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>${label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>${sub}</div>
                </div>
              ))()
            }`).join('\n            ')}
          </div>
        </div>
      </section>

      {/* PLATFORM FIT */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why iSolved + BEG</p>
            <h2>Everything your HR team needs. One platform. One contact.</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444', maxWidth: '700px', margin: '1.5rem auto' }}>
            ${data.platformFit}
          </p>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Platform assessment', body: 'BEG reviews your current HR stack, headcount, and compliance requirements. You get a clear implementation plan and timeline.' },
              { num: '02', title: 'BEG-managed implementation', body: 'We configure iSolved for your specific structure — compensation, benefits, compliance, and workflows — and manage go-live.' },
              { num: '03', title: 'Ongoing BEG support', body: 'Your BEG contact manages updates, configuration changes, and compliance adjustments year-round. You are never sent to a support queue.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things your current HCM vendor probably cannot offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'BEG implementation included — no professional services invoice.',
                objection: 'Common objection: "HCM implementations are expensive and take forever."',
                body: 'BEG manages your full iSolved implementation — configuration, data migration, training, and go-live — as part of the relationship. You are not paying a separate professional services team $50,000 to stand up the system. Implementation is what BEG does.',
              },
              {
                badge: 'Bonus 02',
                title: 'iSolved Connector for Claude — HR tasks through AI.',
                objection: 'Common objection: "Every HCM vendor claims to have AI now."',
                body: '${data.claudeAngle} No competitor offers this. The iSolved Connector for Claude is generally available in the Claude directory today - not a roadmap item, not a beta feature.',
              },
              {
                badge: 'Bonus 03',
                title: 'One BEG contact. Not a support ticket queue.',
                objection: 'Common objection: "Software vendors disappear after you sign."',
                body: 'Your BEG contact manages your iSolved platform ongoing. When compliance requirements change, when you add a new location, when you need a new workflow configured — you call BEG. Not a 1-800 number. Not a ticket queue. Your account contact.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Contract Renewal Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before your current contract auto-renews.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>${data.contractNote} Miss that window and you are paying for two platforms or locked in for another year. BEG will help you plan around your renewal date.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Claude AI Advantage</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The only HCM platform with a live Claude AI integration.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>iSolved launched the Connector for Claude in June 2026. It is the only HCM integration that lets your team complete actual HR tasks through Claude AI — not just get answers, but take action. Paycom, Paylocity, and ADP have no equivalent. Companies that build their HR automation workflows around it now will compound that advantage over time.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>We will show you the platform, walk through your current setup, and give you a no-obligation cost comparison.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What does iSolved handle for our organization?</h3>
              <p>${data.faqPrimary}</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to migrate away from our current platform?</h3>
              <p>Yes — iSolved replaces your current HCM platform. BEG manages the full migration: data transfer, configuration, testing, and training. Most clients complete the transition in 60–90 days with zero payroll interruption.</p>
            </div>
            <div className="faq-item">
              <h3>What is the iSolved Connector for Claude?</h3>
              <p>It is the only live AI integration in an HCM platform that completes actual HR tasks. Instead of just answering questions, your team can run payroll, pull reports, and update records through a Claude AI conversation. Available now in Claude&apos;s directory.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG support us after implementation?</h3>
              <p>Your BEG contact manages your iSolved platform year-round. Configuration changes, compliance updates, new hires, new locations — one contact, no ticket queue.</p>
            </div>
            <div className="faq-item">
              <h3>What does iSolved cost?</h3>
              <p>iSolved is priced per employee per month based on your headcount and selected modules. BEG provides a transparent cost comparison against your current platform on your discovery call.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is the iSolved Connector for Claude?', acceptedAnswer: { '@type': 'Answer', text: 'The only live AI integration in an HCM platform that completes actual HR tasks through Claude AI. Available now.' } },
              { '@type': 'Question', name: 'Do we have to migrate from our current platform?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG manages the full migration in 60-90 days with no payroll interruption.' } },
              { '@type': 'Question', name: 'How does BEG support us after implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Your BEG contact manages your iSolved platform year-round. One contact, no ticket queue.' } },
            ],
          }),
        }}
      />

    </ServicePage>
  );
}
`;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function write(filePath, content) {
  // Brand rule: no em-dashes or en-dashes in the job-placement silo. Normalize to hyphens.
  if (filePath.includes(path.sep + 'job-placement' + path.sep)) {
    content = content.replace(/[—–]/g, '-');
  }
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ ' + path.relative(BASE, filePath));
}

// ─── EXECUTE ─────────────────────────────────────────────────────────────────

console.log('\n=== Job Placement Industry Pages ===');
for (const [slug, data] of Object.entries(JP_INDUSTRIES)) {
  write(path.join(BASE, 'job-placement', slug, 'page.tsx'), genJobPlacementPage(slug, data));
}

console.log('\n=== Managed Payroll Industry Pages ===');
for (const [slug, data] of Object.entries(MP_INDUSTRIES)) {
  write(path.join(BASE, 'managed-payroll', slug, 'page.tsx'), genManagedPayrollPage(slug, data));
}

console.log('\n=== HCM Software Industry Pages ===');
for (const [slug, data] of Object.entries(HCM_INDUSTRIES)) {
  write(path.join(BASE, 'hcm-software', slug, 'page.tsx'), genHCMPage(slug, data));
}

console.log('\nDone. All pages generated.');

// ─── JOB PLACEMENT EXPANSION: extra industries, city grid, role pages ────────

function loadOpt(p) { try { return require(p); } catch (e) { return null; } }

const JP_EXTRA = require('./data/jp-industries-extra.js');
const METROS = require('./data/metros.js');
const JP_ROLES = require('./data/jp-roles.js');

const PACK_FILES = ['./data/jp-pack-tier1.js', './data/jp-pack-tier2.js', './data/jp-pack-tier3.js'];
const PACKS = PACK_FILES.map(loadOpt).filter(Boolean);
const PACK_INDUSTRIES = Object.assign({}, ...PACKS.map(p => p.industries || {}));
const PACK_ROLES = Object.assign({}, ...PACKS.map(p => p.roles || {}));

const JP_NEW = Object.assign({}, JP_EXTRA, PACK_INDUSTRIES);
const JP_ALL = Object.assign({}, JP_INDUSTRIES, JP_NEW);
const INLINE_ROLES = loadOpt('./data/jp-roles-inline.js') || {};
const ALL_ROLES = Object.assign({}, JP_ROLES, PACK_ROLES, INLINE_ROLES);

const METRO_SLUGS = new Set(METROS.map(m => m.slug));

function indName(data) {
  const parts = String(data.eyebrow || '').split('·');
  return parts.length > 1 ? parts[parts.length - 1].trim() : 'Professional';
}

function esc(s) { return String(s).replace(/'/g, "\\'"); }

// ── Embedded Job Description Grader (engagement: lower bounce, longer time on page) ──
function amp(s) { return String(s).replace(/&/g, '&amp;'); }
function jdTool(heading, descNoun) {
  const desc = 'A weak posting quietly kills your pipeline. Paste your ' + descNoun + ' job description and get an instant 0 to 100 score, plus the exact fixes that get strong candidates to apply. Free, instant, and nothing you paste leaves your browser.';
  return `      {/* JOB DESCRIPTION GRADER */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Hiring Tool</p>
            <h2>${heading}</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>${desc}</p>
          </div>
        </div>
      </section>
      <JobDescriptionGrader />
`;
}

// ── AEO build standard: Key Takeaways (TL;DR) block + Service schema ──────────
function ktWrap(b1, b2, b3, schema) {
  const json = JSON.stringify(schema);
  return `      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>${b1}</li>
              <li>${b2}</li>
              <li>${b3}</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(json)} }} />
`;
}
function svc(extra) {
  return Object.assign({ "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Organization", name: "Business Executive Group", url: "https://beghr.com" } }, extra);
}
function ktHub(data) {
  const nm = indName(data), j = nm.replace(/&/g, '&amp;'), lo = nm.toLowerCase();
  return ktWrap(
    j + ' roles stay open because the strongest candidates are employed, passive, and rarely on job boards.',
    'BEG sources them directly and fills permanent roles in 23-35 days, with an 86% fill rate.',
    'Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.',
    svc({ serviceType: nm + ' placement', name: nm + ' Placement', areaServed: { "@type": "Country", name: "United States" }, url: data.canonical, description: 'Permanent ' + lo + ' placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.' })
  );
}
function ktCity(name, metro, url) {
  const j = name.replace(/&/g, '&amp;'), lo = name.toLowerCase();
  return ktWrap(
    j + ' roles in ' + metro.name + ' stay open because the best candidates are passive and rarely on job boards.',
    'BEG sources ' + lo + ' talent in ' + metro.name + ' directly and fills permanent roles in 23-35 days.',
    'Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.',
    svc({ serviceType: name + ' placement', name: name + ' Placement in ' + metro.name, areaServed: { "@type": "City", name: metro.name }, url: url, description: 'Permanent ' + lo + ' placement in ' + metro.name + ' in 23-35 days at roughly 50% less than contingency.' })
  );
}
function ktRole(name, role, url) {
  const rn = role.name, j = rn.replace(/&/g, '&amp;'), lo = rn.toLowerCase();
  return ktWrap(
    j + ' searches stall because the best candidates are passive and field multiple offers.',
    'BEG sources them directly and places permanent hires in 23-35 days, with an 86% fill rate.',
    'Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.',
    svc({ serviceType: rn + ' placement', name: rn + ' Placement', areaServed: { "@type": "Country", name: "United States" }, url: url, description: 'Permanent ' + lo + ' placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.' })
  );
}

function genCityPage(industrySlug, data, metro) {
  const name = indName(data);
  const url = `https://beghr.com/services/job-placement/${industrySlug}/${metro.slug}`;
  const nearby = (metro.nearby || []).filter(s => METRO_SLUGS.has(s)).slice(0, 3);
  const nearbyLinks = nearby.length
    ? nearby.map(s => {
        const m = METROS.find(x => x.slug === s);
        return `<Link href="/services/job-placement/${industrySlug}/${s}" style={{ color: '#000000', fontWeight: 600 }}>${m.name}</Link>`;
      }).join(', ')
    : '';
  const nearbyClause = nearbyLinks ? `, or explore nearby markets: ${nearbyLinks}` : '';
  return `import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${esc(name)} Recruiters in ${metro.name} | BEG',
  description: '${esc(name)} placement in ${metro.name}. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: '${url}' },
  openGraph: { title: '${esc(name)} Recruiters in ${metro.name} | BEG', description: '${esc(name)} placement in ${metro.name} in 23-35 days at roughly 50% less than contingency.', url: '${url}', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: '${esc(name)} Recruiters in ${metro.name} | BEG', description: '${esc(name)} placement in ${metro.name} in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-${industrySlug}-${metro.slug}');

export default function Placement${cap(industrySlug.replace(/[^a-zA-Z0-9]/g, ''))}${cap(metro.slug.replace(/[^a-zA-Z0-9]/g, ''))}Page() {
  return (
    <ServicePage
      eyebrow="Job Placement · ${esc(name)} · ${metro.name}"
      title="That open ${esc(name.toLowerCase())} role in ${metro.name} is costing you every week."
      description="${esc(metro.name)} is ${esc(metro.blurb)}. We source passive ${esc(name.toLowerCase())} candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={${JSON.stringify(data.stats)}}
    >
${ktCity(name, metro, url)}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The ${esc(metro.name)} Talent Market</p>
            <h2>Why ${esc(name.toLowerCase())} roles are hard to fill in ${esc(metro.name)}</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            ${esc(metro.name)} sits in the ${esc(metro.region)} and is ${esc(metro.blurb)}. The strongest ${esc(name.toLowerCase())} candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive ${esc(name.toLowerCase())} talent in ${esc(metro.name)} and the surrounding ${esc(metro.stateAbbr)} market directly, before they ever see a listing.
          </p>
        </div>
      </section>
${jdTool('Hiring ' + amp(name) + ' in ' + metro.name + '? Grade your job description first.', amp(name.toLowerCase()))}

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that ${esc(metro.name)} seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>${esc(data.costLogic)}</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>${esc(data.talentContext)}</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Keep Exploring</p>
            <h2>${esc(name)} placement near ${esc(metro.name)}</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/${industrySlug}" style={{ color: '#000000', fontWeight: 600 }}>${esc(name.toLowerCase())} placement service</Link>${nearbyClause}.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do you place ${esc(name.toLowerCase())} candidates in ${esc(metro.name)}?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent ${esc(name.toLowerCase())} searches in ${esc(metro.name)} and across ${esc(metro.state)}, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
`;
}

function genRolePage(industrySlug, data, role) {
  const name = indName(data);
  const url = `https://beghr.com/services/job-placement/${industrySlug}/${role.slug}`;
  const siblings = (ALL_ROLES[industrySlug] || []).filter(r => r.slug !== role.slug).slice(0, 4);
  const sibLinks = siblings.length
    ? siblings.map(r => `<Link href="/services/job-placement/${industrySlug}/${r.slug}" style={{ color: '#000000', fontWeight: 600 }}>${r.name}</Link>`).join(', ')
    : '';
  const sibClause = sibLinks ? `, or explore: ${sibLinks}` : '';
  return `import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${esc(role.name)} Recruiters | 23-35 Days | BEG',
  description: '${esc(role.name)} placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: '${url}' },
  openGraph: { title: '${esc(role.name)} Recruiters | 23-35 Days | BEG', description: '${esc(role.name)} placement in 23-35 days at roughly 50% less than contingency.', url: '${url}', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: '${esc(role.name)} Recruiters | 23-35 Days | BEG', description: '${esc(role.name)} placement in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-${industrySlug}-${role.slug}');

export default function Placement${cap(industrySlug.replace(/[^a-zA-Z0-9]/g, ''))}${cap(role.slug.replace(/[^a-zA-Z0-9]/g, ''))}Page() {
  return (
    <ServicePage
      eyebrow="Job Placement · ${esc(name)} · ${esc(role.name)}"
      title="Your ${esc(role.name.toLowerCase())} search has been open too long."
      description="${esc(role.note)} We place permanent ${esc(role.name.toLowerCase())} candidates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroStats={${JSON.stringify(data.stats)}}
    >
${ktRole(name, role, url)}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best ${esc(role.name.toLowerCase())} candidates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            ${esc(role.note)} That is why a posting-and-waiting search rarely fills a ${esc(role.name.toLowerCase())} seat with the right person. We source passive ${esc(role.name.toLowerCase())} candidates directly, screen them against your specific criteria, and deliver a shortlist of 3 to 5 people, not a stack of resumes.
          </p>
        </div>
      </section>
${jdTool('Hiring a ' + amp(role.name) + '? Grade your job description first.', role.name.toLowerCase())}

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week this seat is open has a cost.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>${esc(data.costLogic)}</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The right candidate is available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>${esc(data.talentContext)}</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Searches</p>
            <h2>Other ${esc(name.toLowerCase())} roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/${industrySlug}" style={{ color: '#000000', fontWeight: 600 }}>${esc(name.toLowerCase())} placement service</Link>${sibClause}.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How long does it take to place a ${esc(role.name.toLowerCase())}?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
`;
}

console.log('\n=== Job Placement: New Industry Hubs ===');
for (const [slug, data] of Object.entries(JP_NEW)) {
  write(path.join(BASE, 'job-placement', slug, 'page.tsx'), genJobPlacementPage(slug, data));
}

console.log('\n=== Job Placement: City Grid (industry x metro) ===');
let cityCount = 0;
for (const [slug, data] of Object.entries(JP_ALL)) {
  for (const metro of METROS) {
    write(path.join(BASE, 'job-placement', slug, metro.slug, 'page.tsx'), genCityPage(slug, data, metro));
    cityCount++;
  }
}
console.log('City pages: ' + cityCount);

console.log('\n=== Job Placement: Role Pages (industry x role) ===');
let roleCount = 0;
for (const [slug, roles] of Object.entries(ALL_ROLES)) {
  const data = JP_ALL[slug];
  if (!data) { console.log('  ! skip roles for unknown industry: ' + slug); continue; }
  for (const role of roles) {
    write(path.join(BASE, 'job-placement', slug, role.slug, 'page.tsx'), genRolePage(slug, data, role));
    roleCount++;
  }
}
console.log('Role pages: ' + roleCount);
console.log('\nExpansion complete. Industries: ' + Object.keys(JP_ALL).length);
