import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Best HCM Software for Nonprofits 2026 | BEG',
  description: 'What to look for in nonprofit HCM software in 2026, the grant allocation and funder reporting challenges nonprofits face, and why iSolved plus BEG fits.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/best-hcm-software-for-nonprofits' },
  openGraph: {
    title: 'Best HCM Software for Nonprofits 2026 | BEG',
    description: 'What to look for in nonprofit HCM software in 2026, the grant allocation and funder reporting challenges nonprofits face, and why iSolved plus BEG fits.',
    url: 'https://www.beghr.com/services/hcm-software/best-hcm-software-for-nonprofits',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Best HCM Software for Nonprofits 2026 | BEG', description: 'What to look for in nonprofit HCM software in 2026, the grant allocation and funder reporting challenges nonprofits face, and why iSolved plus BEG fits.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What should nonprofits look for in HCM software?',
    a: 'Look for the ability to allocate labor across grants and programs, reporting that satisfies funders and the board, and clean handling of payroll, benefits, and compliance on a limited administrative team. The platform should make stewardship of restricted funds defensible.',
  },
  {
    q: 'Why is iSolved a strong pick for nonprofits?',
    a: 'iSolved keeps payroll, time, HR, and benefits on a single connected platform, so staff time can be allocated to grants and programs from one source of truth. BEG configures the cost structure to match how you report to funders.',
  },
  {
    q: 'Can iSolved allocate labor across grants and programs?',
    a: 'Yes. iSolved captures time against cost centers, programs, and funding sources so labor can be allocated and reported accurately. BEG sets up the structure to match your grants and reporting requirements.',
  },
  {
    q: 'Is iSolved right for a small nonprofit?',
    a: 'It depends on your needs. A very small organization with a single funding stream may do fine on a simpler tool. The value grows as you manage multiple grants, programs, and funder reports with a lean administrative team.',
  },
  {
    q: 'What does the Connector for Claude offer a nonprofit team?',
    a: 'iSolved is the only HCM platform with a Connector for Claude, generally available in June 2026. Staff can pull allocation and labor reports and update records through conversation, which matters when administrative capacity is limited.',
  },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Best HCM Software for Nonprofits', item: 'https://www.beghr.com/services/hcm-software/best-hcm-software-for-nonprofits' },
  ],
};

export default function BestHCMNonprofitsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Nonprofits</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Best HCM Software for Nonprofits in 2026</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Grant allocation and funder reporting set nonprofit HR apart. The right HCM platform lets you allocate staff time across programs and defend it to funders and the board. Here is what to look for.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What to Look For in HCM Software for Nonprofits</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Nonprofits answer to people who fund the mission, and that shapes what good HCM software looks like. The single most important capability is the ability to allocate labor across grants, programs, and funding sources. When a program officer or staff member splits time across two grants and a general operating budget, the platform has to capture that allocation cleanly, because it becomes the basis for both internal stewardship and external reporting.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Reporting is the second pillar. Funders expect documentation that restricted dollars were spent as intended, and the board expects a clear view of where personnel costs land. The strongest platforms produce that reporting from the same payroll and time data rather than asking your team to rebuild it in spreadsheets each quarter. Because nonprofit administrative teams are usually small, the platform also has to keep payroll, benefits, and compliance manageable without a large back office.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The HR and Payroll Challenges Specific to Nonprofits</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Grant allocation is the defining challenge. Staff time often spans multiple funding sources, and the split has to be accurate and documented. When this is tracked outside the payroll system, errors creep in and audits become stressful.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Funder and board reporting is the second pressure. Each funder may want a different cut of how their dollars were used, and the board wants a clean organizational view. Pulling those reports by hand from disconnected systems consumes time the organization would rather spend on the mission.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Lean administrative capacity ties it together. Many nonprofits run HR, payroll, and benefits with a very small team, so any process that depends on manual reconciliation is fragile. Compliance still has to be met, and a single connected source of data is what makes that achievable.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why iSolved Plus BEG Is a Top Pick for Nonprofits</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved is a single connected platform, which is exactly what grant allocation and funder reporting need. Staff time is captured against programs and funding sources, and the allocation that drives payroll is the same data that supports your funder and board reporting. With more than 7 million employees managed on iSolved, the platform is dependable for organizations that must withstand scrutiny.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            BEG implements, configures, and supports the platform for your grants, programs, and reporting structure, and stays with you as funding changes. For a small administrative team, that managed approach removes a real burden. The Forrester-documented 330% ROI for iSolved tends to appear in nonprofits where accurate allocation and on-demand reporting replace hours of manual reconciliation.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            For the nonprofit-specific setup, see our <Link href="/services/hcm-software/nonprofit" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM for nonprofits</Link> page.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>How to Choose: It Depends on Your Funding Model</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No platform is right for every nonprofit, and a fair comparison should say so. An organization with a single unrestricted funding stream and a handful of staff may be served well by a simpler tool. The case for a connected platform strengthens as you manage multiple grants, programs, and funder reporting obligations.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Ask how many funding sources and programs you allocate across, how demanding your funder reporting is, how much administrative capacity you have, and whether you want a partner managing the platform. iSolved is a strong choice for grant-funded organizations that want BEG running it. BEG will compare it fairly against your current setup.
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
          <h2 style={{ marginBottom: '0.5rem' }}>What does this employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See iSolved for Your Organization</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through grant allocation and funder reporting and show you what iSolved plus BEG looks like for your nonprofit.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          { category: 'HCM technology', title: "iSolved HCM Platform Review: Modules, Pricing, and Who It's Built For (2026)", excerpt: 'Full isolved platform review covering payroll, benefits, time tracking, allocation, and the Connector for Claude.', href: '/blog/hcm-software/isolved-platform' },
          { category: 'HCM technology', title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)', excerpt: 'Grant allocation and funder reporting are high-effort tasks for lean teams. Here is what to automate.', href: '/blog/hcm-software/hr-automation' },
          { category: 'HCM technology', title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle', excerpt: 'What your HCM platform should be tracking automatically to keep compliance manageable for a small team.', href: '/blog/hcm-software/payroll-compliance' },
        ]}
      />
    </main>
  );
}
