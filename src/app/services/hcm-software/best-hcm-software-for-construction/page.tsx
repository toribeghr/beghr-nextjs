import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import OvertimePayCalculator from '@/components/OvertimePayCalculator';

export const metadata: Metadata = {
  title: 'Best HCM Software for Construction 2026 | BEG',
  description: 'What to look for in construction HCM software in 2026, the certified payroll and job costing challenges contractors face, and why iSolved plus BEG fits.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/best-hcm-software-for-construction' },
  openGraph: {
    title: 'Best HCM Software for Construction 2026 | BEG',
    description: 'What to look for in construction HCM software in 2026, the certified payroll and job costing challenges contractors face, and why iSolved plus BEG fits.',
    url: 'https://beghr.com/services/hcm-software/best-hcm-software-for-construction',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best HCM Software for Construction 2026 | BEG', description: 'What to look for in construction HCM software in 2026, the certified payroll and job costing challenges contractors face, and why iSolved plus BEG fits.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What should construction companies look for in HCM software?',
    a: 'Look for certified payroll support, prevailing wage handling, multi-job cost allocation, and the ability to track hours by job and class. Mobile time capture for field crews and clean compliance reporting matter just as much as the pay run itself.',
  },
  {
    q: 'Why is iSolved a strong pick for contractors?',
    a: 'iSolved keeps payroll, time, HR, and benefits on a single connected platform, so field hours flow into payroll and job costing without rekeying. BEG configures the prevailing wage rules, classes, and job structure to match your contracts.',
  },
  {
    q: 'Can iSolved handle prevailing wage and certified payroll?',
    a: 'iSolved supports the pay rules and reporting structure that prevailing wage and certified payroll require. BEG sets up the wage determinations, fringe handling, and reporting so compliance is built into the process, not bolted on after.',
  },
  {
    q: 'Is iSolved the right choice for every contractor?',
    a: 'Not necessarily. A small residential builder with no public works has different needs than a commercial contractor running prevailing wage jobs across several states. The right fit depends on your job mix, compliance exposure, and crew size.',
  },
  {
    q: 'What does the Connector for Claude do for a construction office?',
    a: 'iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Office staff can pull job labor reports, check certified payroll status, and update records through conversation instead of navigating screens.',
  },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Best HCM Software for Construction', item: 'https://beghr.com/services/hcm-software/best-hcm-software-for-construction' },
  ],
};

export default function BestHCMConstructionPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Construction</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Best HCM Software for Construction in 2026</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Certified payroll, prevailing wage, and job costing make construction payroll a compliance exercise as much as a pay run. The right HCM platform handles all three from the same data. Here is what to look for.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What to Look For in HCM Software for Construction</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Construction payroll has a compliance layer that most industries never touch. On public works, certified payroll reports are due on a schedule, prevailing wage determinations dictate the rate for each class of worker, and fringe benefits have to be tracked and reported correctly. A platform that cannot model wage determinations and produce certified reports cleanly will turn every government job into a manual burden for your office.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Beyond compliance, the platform has to think in jobs. Crews move between sites, a single worker may log hours against several jobs and classes in one week, and finance needs labor allocated to the right job for accurate costing. Mobile or rugged time capture for the field, the ability to split hours by job and class, and reporting that ties labor back to each project are the features that separate a tool built for contractors from a generic payroll product.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The HR and Payroll Challenges Specific to Construction</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Certified payroll is the obvious one. Missing a report or filing the wrong rate can stall payments or jeopardize a contract, so the reporting has to be accurate and timely every cycle. When it is produced by hand from a spreadsheet, the risk compounds with every job you add.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Prevailing wage adds a second layer. The same employee can earn different rates depending on the job and the work classification, and fringe benefits have to be handled correctly alongside the base rate. Your system needs to apply the right determination automatically rather than relying on someone to remember it.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Multi-job cost allocation ties it together. Without clean job costing, a contractor cannot tell which projects are profitable until well after the fact. And because crews and projects often cross state lines, multi-state tax and overtime rules sit on top of everything else.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why iSolved Plus BEG Is a Top Pick for Contractors</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved is a single connected platform, which matters in construction because the same hours have to satisfy payroll, certified reporting, and job costing at once. When time is captured against the right job and class, the certified payroll report and the labor cost allocation come from the same source of truth rather than three reconciliations. With more than 7 million employees managed on the platform, iSolved is proven across complex, compliance-heavy environments.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            BEG is what makes the compliance side workable. BEG implements, configures, and supports the platform around your wage determinations, work classes, fringe handling, and job structure, and stays with you as you take on new contracts. The Forrester-documented 330% ROI for iSolved tends to land in construction where certified payroll moves from a manual scramble to a repeatable process.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            For the contractor-specific setup, see our <Link href="/services/hcm-software/construction" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM for construction</Link> page.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>How to Choose: It Depends on Your Job Mix</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            The honest answer is that the best platform depends on the work you take. A residential remodeler with no public contracts may never need certified payroll and could run on a simpler product. A commercial or infrastructure contractor with prevailing wage jobs across several states needs the full compliance and job-costing stack.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Ask how much of your work is public versus private, how many jobs and classes you run at once, whether you need certified payroll reporting, and whether you want a partner handling the compliance configuration. iSolved is a strong pick when prevailing wage and job costing are central and you want BEG running it. BEG will compare it fairly against what you have today.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{q}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>Free tool: calculate overtime the right way</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Bonuses and multiple pay rates change the math. Enter the week and see the correct FLSA overtime owed. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <OvertimePayCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See iSolved for Your Jobs</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your certified payroll and job costing needs and show you what iSolved plus BEG looks like for your company.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          { category: 'HCM technology', title: "iSolved HCM Platform Review: Modules, Pricing, and Who It's Built For (2026)", excerpt: 'Full isolved platform review covering payroll, time tracking, job costing, and the Connector for Claude.', href: '/blog/hcm-technology/isolved-platform' },
          { category: 'HCM technology', title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)', excerpt: 'Certified payroll and job reporting are high-effort tasks. Here is what to automate and what to keep human.', href: '/blog/hcm-technology/hr-automation' },
          { category: 'HCM technology', title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle', excerpt: 'Prevailing wage, multi-state rules, and what your HCM platform should be tracking automatically.', href: '/blog/hcm-technology/payroll-compliance' },
        ]}
      />
    </main>
  );
}
