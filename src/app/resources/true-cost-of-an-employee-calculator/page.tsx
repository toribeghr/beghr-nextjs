import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import TrueCostCalculator from '@/components/TrueCostCalculator';

const DESC =
  'Free true cost of an employee calculator. Add base pay, employer payroll taxes (FICA, FUTA, SUTA), workers’ comp, benefits, and overhead to see the fully';

export const metadata: Metadata = {
  title: 'True Cost of an Employee Calculator (2026) | BEG',
  description: DESC,
  alternates: { canonical: 'https://www.beghr.com/resources/true-cost-of-an-employee-calculator' },
  openGraph: {
    title: 'True Cost of an Employee Calculator (2026) | BEG',
    description: DESC,
    url: 'https://www.beghr.com/resources/true-cost-of-an-employee-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'True Cost of an Employee Calculator (2026) | BEG',
    description: DESC,
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const FAQ = [
  {
    q: 'How much does an employee really cost beyond salary?',
    a: 'Most employees cost roughly 1.25 to 1.4 times their base pay once you add employer payroll taxes, workers’ compensation, benefits, retirement match, and overhead. The exact multiplier depends on benefits and your state rates.',
  },
  {
    q: 'What employer taxes are included in the true cost?',
    a: 'Employers pay a 6.2% Social Security match up to the wage base, 1.45% Medicare on all wages, 0.6% federal unemployment on the first $7,000, and state unemployment that varies by state and experience rating.',
  },
  {
    q: 'What is the employee cost multiplier?',
    a: 'The cost multiplier is the fully loaded annual cost divided by base pay. A 1.3x multiplier means every $100,000 in salary actually costs about $130,000 once taxes, benefits, and overhead are included.',
  },
  {
    q: 'Why does the true cost matter for pricing and hiring?',
    a: 'Knowing the loaded hourly cost lets you price work, set bill rates, and compare an in-house hire against outsourcing. Undercounting the burden leads to underpriced jobs and over-hiring.',
  },
];

export default function TrueCostCalculatorPage() {

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
          { '@type': 'ListItem', position: 3, name: 'True Cost of an Employee Calculator', item: 'https://www.beghr.com/resources/true-cost-of-an-employee-calculator' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'True Cost of an Employee Calculator',
        applicationCategory: 'BusinessApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: 'https://www.beghr.com/resources/true-cost-of-an-employee-calculator', description: DESC,
        provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/resources/true-cost-of-an-employee-calculator',
      }) }} />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool · Payroll Math Suite</p>
            <h1>True Cost of an Employee Calculator</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555', maxWidth: '660px', margin: '1rem auto 0', textAlign: 'center' }}>
              Salary is only the start. Add employer taxes, workers’ comp, benefits, and overhead to see what a hire actually costs per year and per hour, and the multiplier on top of base pay. Adjust every assumption to your business. No email required.
            </p>
          </div>
          <div className="tldr" style={{ maxWidth: '660px', margin: '1.75rem auto 0', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.1rem 1.25rem', fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
            <strong>The short version:</strong> A typical employee costs about 1.25 to 1.4 times base pay once employer payroll taxes, workers’ comp, benefits, and overhead are added. This calculator shows your exact loaded annual cost, hourly cost, and burden multiplier.
          </div>
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      <TrueCostCalculator />

      {/* AEO CONTENT */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What goes into the true cost of an employee?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            The loaded cost is base pay plus everything the employer pays on top: Social Security and Medicare matches, federal and state unemployment, workers’ compensation, health and retirement benefits, and overhead like equipment, software, and space.
          </p>

          <h2 style={{ marginTop: '2rem' }}>What is a typical employee cost multiplier?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            For most US employers the fully loaded cost lands between 1.25 and 1.4 times base salary. Richer benefits, higher workers’ comp class codes, and generous retirement matches push the multiplier up; lean benefits pull it down.
          </p>

          <h2 style={{ marginTop: '2rem' }}>How does this help compare hiring versus outsourcing?</h2>
          <p style={{ color: '#444', lineHeight: 1.75 }}>
            Once you know the true hourly cost of a role, you can compare it honestly against a managed service. A dedicated payroll hire can cost $60,000 to $100,000 loaded, where BEG managed payroll runs at $25 to $45 per employee per month.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>True cost of an employee FAQ</h2>
          {FAQ.map((f) => (
            <div key={f.q} className="faq-item" style={{ borderBottom: '1px solid #e5e5e5', padding: '1.1rem 0' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{f.q}</h3>
              <p style={{ color: '#555', lineHeight: 1.7, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUITE CROSS-LINKS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center"><p className="eyebrow">More Free Payroll Tools</p><h2>The rest of the payroll math suite</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1.75rem' }}>
            <Link href="/resources/final-paycheck-calculator" style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000' }}>
              <strong style={{ display: 'block', marginBottom: '0.35rem' }}>Final Paycheck Calculator</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>Get the exact final-pay deadline and PTO payout rule for any state.</span>
            </Link>
            <Link href="/resources/overtime-pay-calculator" style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000' }}>
              <strong style={{ display: 'block', marginBottom: '0.35rem' }}>Overtime Pay Calculator</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>Get the FLSA regular rate right, including bonuses and blended rates.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Lower Your Cost Per Employee</p>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>See how BEG cuts the burden of running payroll in-house.</h2>
          <p style={{ color: '#ccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            A dedicated payroll hire is a $60,000 to $100,000 loaded cost. BEG fully managed payroll runs at $25 to $45 PEPM, all-inclusive, and replaces that overhead. See your exact price in 90 seconds.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>
      </section>
    </>
  );
}
