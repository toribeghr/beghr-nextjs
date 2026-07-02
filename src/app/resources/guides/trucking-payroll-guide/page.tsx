import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Trucking Payroll Guide | Per-Mile & Multi-State | BEG',
  description: 'Trucking payroll guide: per-mile vs hourly pay, multi-state apportionment, per diem, owner-operator 1099 vs employee, and DOT hours overlap, fully managed.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/guides/trucking-payroll-guide',
  },
  openGraph: {
    title: 'Trucking Payroll Guide | Per-Mile & Multi-State | BEG',
    description: 'Trucking payroll guide: per-mile vs hourly pay, multi-state apportionment, per diem, owner-operator 1099 vs employee, and DOT hours overlap, fully managed.',
    url: 'https://www.beghr.com/resources/guides/trucking-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trucking Payroll Guide | Per-Mile & Multi-State | BEG',
    description: 'Trucking payroll guide: per-mile vs hourly pay, multi-state apportionment, per diem, owner-operator 1099 vs employee, and DOT hours overlap, fully managed.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: "How does per-mile pay interact with minimum wage and overtime?",
    a: "Per-mile drivers must still earn at least minimum wage for all hours worked, including non-driving time like loading, inspections, and detention. Many interstate drivers are exempt from federal overtime under the Motor Carrier Act, but state rules and short-haul work can change that. The safe approach is to track hours alongside miles so the per-mile rate can be tested against minimum wage. BEG runs that check every pay period.",
  },
  {
    q: "How is multi-state withholding apportioned for over-the-road drivers?",
    a: "A federal law commonly known as the Amtrak Act lets interstate transportation employees be taxed only by their state of residence, which simplifies withholding for over-the-road drivers who cross many states. The rules differ for drivers who work primarily within one or two states. BEG applies the correct apportionment rule based on each driver's route profile so withholding is right.",
  },
  {
    q: "Is driver per diem taxable on payroll?",
    a: "A properly structured per diem for meals and incidental expenses while away from home overnight is generally non-taxable under an accountable plan, which is a significant benefit for drivers. It must be documented and capped at allowable rates; a flat untracked stipend becomes taxable wages. BEG sets up per diem under an accountable plan so the tax benefit holds up.",
  },
  {
    q: "How do I decide whether an owner-operator is a 1099 contractor or an employee?",
    a: "Misclassification is the single biggest payroll risk in trucking. A genuine owner-operator who controls their schedule, supplies their own truck, and works for multiple carriers may be a 1099 contractor, but a driver who is directed like an employee is one regardless of the lease paperwork. The test is control, not the contract title. BEG helps structure the relationship correctly and runs whichever classification is appropriate.",
  },
];

export default function TruckingPayrollGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.beghr.com/resources/guides/trucking-payroll-guide',
                url: 'https://www.beghr.com/resources/guides/trucking-payroll-guide',
                name: 'Trucking Payroll Guide',
                datePublished: '2026-06-28',
                dateModified: '2026-06-28',
                author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti' },
                publisher: { '@type': 'Organization', name: 'Business Executive Group' },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
                  { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
                  { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://www.beghr.com/resources/guides' },
                  { '@type': 'ListItem', position: 4, name: 'Trucking Payroll Guide', item: 'https://www.beghr.com/resources/guides/trucking-payroll-guide' },
                ],
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Payroll Guide</p>
            <h1>Trucking Payroll Guide</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#666666' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Per-mile versus hourly pay, multi-state apportionment, per diem, owner-operator classification, and DOT hours-of-service overlap make trucking payroll its own discipline. Here is how each piece works and how managed payroll takes it off your plate.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources/guides" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All guides</Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', display: 'flex', justifyContent: 'center' }}>
          <PayrollLeadCaptureForm
            toolName="Trucking Payroll Guide"
            toolDescription="Per-mile vs hourly pay, multi-state apportionment, per diem, and owner-operator rules -- the full guide in your inbox."
            assetUrl="/resources/guides/trucking-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>


      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#faf6f0', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.75rem 2rem' }} className="reveal">
            <p style={{ fontWeight: '700', color: '#000000', marginBottom: '1rem', fontSize: '1rem' }}>Key takeaways</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444444', lineHeight: '1.75', fontSize: '0.95rem' }}>
              <li>Per-mile pay must still clear minimum wage for all hours worked, including non-driving time like loading and detention.</li>
              <li>Federal law lets most interstate drivers be taxed only by their state of residence, but route profile decides the rule.</li>
              <li>A properly structured per diem under an accountable plan is non-taxable; an untracked flat stipend is taxable wages.</li>
              <li>Owner-operator versus employee turns on control, not the lease title, and misclassification is trucking's biggest payroll risk. BEG runs it all fully managed at $25-$45 PEPM.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>Per-mile versus hourly pay</h2>
            <p>
              Trucking pays in ways most industries never see: cents per mile, percentage of load, hourly for local runs, plus accessorials for detention, layover, and stops. The compliance catch is that however a driver is paid, the wage still has to clear the applicable minimum wage for all hours worked. Non-driving time counts: pre-trip inspections, loading and unloading, fueling, and detention at a dock are working time even when no miles are turning.
            </p>
            <p>
              A per-mile rate that looks generous on a good week can fall below minimum wage on a week full of waiting. The way to stay clean is to track hours alongside miles and test the resulting effective rate every period. Many carriers do not, which is where back-wage claims start. Managed payroll runs the minimum-wage check automatically so a per-mile pay model does not quietly create liability.
            </p>

            <h2>Multi-state apportionment and the residency rule</h2>
            <p>
              An over-the-road driver might roll through eight states in a week, which would be a withholding nightmare if every state taxed the miles driven inside it. Federal law solves much of this. Under the statute commonly called the Amtrak Act, interstate transportation employees who work in two or more states can be taxed only by their state of residence, regardless of where the truck physically traveled.
            </p>
            <p>
              The simplification is real but conditional. Drivers who work primarily within one or two states, or who are not clearly interstate, fall under different rules, and getting the route classification wrong means withholding in the wrong state. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> applies the correct apportionment based on each driver's route profile so residency-based withholding is handled right.
            </p>

            <h2>Per diem done correctly</h2>
            <p>
              Per diem is one of the most valuable tools in driver pay. A per diem covering meals and incidental expenses while a driver is away from home overnight can be paid tax-free under an accountable plan, which raises the driver's take-home without raising taxable wages. But the benefit only holds if it is structured properly: tied to nights away from home, documented, and kept within allowable rates.
            </p>
            <p>
              A flat stipend dropped into every check without that structure is just taxable wages wearing a per diem label, and it can also reduce the wage base used for things like workers' compensation and future Social Security. BEG sets up per diem under an accountable plan so the tax advantage is legitimate and defensible rather than a flag for examination.
            </p>

            <h2>Owner-operator classification and DOT overlap</h2>
            <p>
              The biggest payroll risk in trucking is treating a driver as a 1099 owner-operator when they function as an employee. A true owner-operator controls their own schedule, supplies their own equipment, and can work for multiple carriers. A driver who is dispatched, directed, and dependent on one carrier is an employee no matter what the lease agreement says. The test is control, not the title on the contract, and misclassification exposes the carrier to back taxes, penalties, and benefit claims.
            </p>
            <p>
              DOT hours-of-service rules add a second layer: the logs that govern how long a driver can legally operate also become a source of truth for hours worked, and the two systems have to agree. For most carriers the alternative to managed payroll is an internal hire costing $60,000 to $100,000 fully loaded who has to master all of this. BEG helps structure classification correctly and delivers payroll directly at $25-$45 PEPM, all-inclusive, with implementation in three to five business days. See the full service on the <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>managed payroll overview</Link> or browse more <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>payroll guides</Link>.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                <h3 style={{ fontSize: '1.02rem', fontWeight: '700', color: '#000000', marginBottom: '0.6rem' }}>{f.q}</h3>
                <p style={{ margin: 0, color: '#555555', lineHeight: '1.7', fontSize: '0.93rem' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#000000', borderRadius: '10px', padding: '2.5rem', textAlign: 'center', color: '#ffffff' }} className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Let BEG Run It</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles trucking payroll fully managed. $25-$45 PEPM, all-inclusive.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              Per-mile minimum-wage checks, residency-based apportionment, accountable-plan per diem, and correct owner-operator classification, all handled by a dedicated BEG contact. No surcharges. No per-form fees.
            </p>
            <PricingCta service="managed-payroll" subline={false} />
          </div>
        </div>
      </section>
    </>
  );
}
