import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Restaurant Payroll Guide | Tips, Tip Credit & FICA | BEG',
  description: 'Restaurant payroll guide covering tip credits, tipped minimum wage, tip pooling, the FICA tip credit, and multi-location compliance.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/guides/restaurant-payroll-guide',
  },
  openGraph: {
    title: 'Restaurant Payroll Guide | Tips, Tip Credit & FICA | BEG',
    description: 'Restaurant payroll guide covering tip credits, tipped minimum wage, tip pooling, the FICA tip credit, and multi-location compliance.',
    url: 'https://www.beghr.com/resources/guides/restaurant-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Payroll Guide | Tips, Tip Credit & FICA | BEG',
    description: 'Restaurant payroll guide covering tip credits, tipped minimum wage, tip pooling, the FICA tip credit, and multi-location compliance.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is the tip credit and how does it work?',
    a: 'The tip credit lets an employer count a portion of an employee\'s tips toward the federal minimum wage. Federal law sets a tipped cash wage of $2.13 per hour, and the employer may claim up to $5.12 per hour in tips as a credit to reach the $7.25 federal minimum. If tips fall short in any week, the employer must make up the difference. Many states set a higher cash wage or ban the tip credit entirely, so the rule that applies is whichever is most generous to the employee.',
  },
  {
    q: 'What is the FICA tip credit and is it worth claiming?',
    a: 'The FICA tip credit is a federal income tax credit, claimed on Form 8846, that reimburses employers for the Social Security and Medicare taxes they pay on employee tips above the minimum wage. For a full-service restaurant with significant tipped wages, this credit can return thousands of dollars per year. It is frequently missed because it requires accurate tip reporting tied to each pay period, which is exactly what a managed payroll process captures automatically.',
  },
  {
    q: 'Can a restaurant require tip pooling?',
    a: 'Yes, within limits. Federal rules allow mandatory tip pools among employees who customarily receive tips, such as servers, bussers, and bartenders. Since 2018, when an employer pays the full minimum wage and takes no tip credit, the pool can also include non-tipped back-of-house staff like cooks and dishwashers. Managers, supervisors, and owners can never share in a tip pool. State rules vary, so the pool structure has to be validated against both federal and state law.',
  },
  {
    q: 'How does payroll work across multiple restaurant locations?',
    a: 'Multi-location payroll multiplies the complexity because each site can sit in a different state or city with its own minimum wage, tip credit rules, and local taxes. Employees who work shifts at more than one location need wages and taxes allocated correctly per jurisdiction. BEG runs all locations through one managed process at $25 to $45 per employee per month, so reporting is consolidated while each location stays compliant with its local rules.',
  },
];

export default function RestaurantPayrollGuidePage() {
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
                url: 'https://www.beghr.com/resources/guides/restaurant-payroll-guide',
                name: 'Restaurant Payroll Guide',
                datePublished: '2026-06-28',
                dateModified: '2026-06-28',
                author: {
                  '@type': 'Person',
                  name: 'Anthony Moretti',
                  url: 'https://www.linkedin.com/in/theanthonymoretti',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'Business Executive Group',
                },
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
                  { '@type': 'ListItem', position: 4, name: 'Restaurant Payroll Guide', item: 'https://www.beghr.com/resources/guides/restaurant-payroll-guide' },
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
            <h1>Restaurant Payroll Guide: Tips, Tip Credit, and FICA</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#777777' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Restaurant payroll is the hardest payroll there is. Tipped wages, the tip credit, tip pooling, the FICA tip credit, and multi-location rules turn a simple paycheck into a compliance minefield. This guide breaks down what owners actually need to get right.
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
            toolName="Restaurant Payroll Guide"
            toolDescription="Tip credits, the FICA tip credit, tip pooling, and multi-location runs -- the full guide in your inbox."
            assetUrl="/resources/guides/restaurant-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>


      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#faf6ef', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.75rem 2rem' }} className="reveal">
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: 0 }}>Key takeaways</h2>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444444', lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>The tip credit lets restaurants pay a cash wage as low as $2.13 per hour federally, but the employer must top up any week tips fail to reach the full minimum wage.</li>
              <li>The FICA tip credit on Form 8846 reimburses employers for payroll taxes on tips and is one of the most commonly missed restaurant tax savings.</li>
              <li>Tip pools can include back-of-house staff only when no tip credit is taken, and managers or owners can never share in a tip pool.</li>
              <li>BEG handles restaurant payroll fully managed at $25 to $45 per employee per month, including tip credit tracking and multi-location compliance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>The tipped minimum wage and the tip credit</h2>
            <p>
              The single biggest source of restaurant wage-and-hour lawsuits is the tip credit. Federal law sets a tipped cash wage of $2.13 per hour and allows the employer to claim up to $5.12 per hour of an employee’s tips as a credit toward the $7.25 federal minimum wage. The catch is that the math has to work every single pay period. If an employee’s cash wage plus reported tips does not reach the full minimum wage for the hours worked, the employer is legally required to make up the gap.
            </p>
            <p>
              States complicate this further. Some, like California, Oregon, and Washington, ban the tip credit entirely and require the full state minimum wage in cash before tips. Others set a tipped cash wage above the federal $2.13. When federal and state rules conflict, the employer must apply whichever is more favorable to the employee. A restaurant operator who assumes the federal floor applies everywhere is exposed to back-wage claims, liquidated damages, and attorney fees. Accurate per-period tip tracking is the only defense, and it is the foundation everything else in restaurant payroll is built on.
            </p>

            <h2>Tip pooling and tip credit interaction</h2>
            <p>
              Tip pooling is legal and common, but the rules are precise. A mandatory tip pool can include employees who customarily and regularly receive tips, such as servers, bartenders, bussers, and food runners. A 2018 change to federal law opened pools to non-tipped back-of-house staff like cooks and dishwashers, but only when the employer pays the full minimum wage and takes no tip credit. The moment a restaurant claims the tip credit, the back-of-house can no longer be in the pool.
            </p>
            <p>
              Two lines can never be crossed. Managers, supervisors, and owners are barred from sharing in any tip pool regardless of whether they serve tables. And the employer cannot keep any portion of employee tips for the house. Violations here carry steep penalties, including the return of the full tip credit claimed plus damages. Because the pool structure depends on whether the tip credit is taken, the payroll system and the tip policy have to be designed together, not separately.
            </p>

            <h2>The FICA tip credit: money most restaurants leave on the table</h2>
            <p>
              The FICA tip credit is a federal income tax credit that reimburses employers for the Social Security and Medicare taxes they pay on reported employee tips above the minimum wage. It is claimed on Form 8846 and flows through to the business return. For a full-service restaurant with a tipped staff, this credit routinely returns thousands of dollars a year, and it is one of the most commonly overlooked tax benefits in the industry.
            </p>
            <p>
              The reason it gets missed is mechanical. Claiming the credit requires clean, period-by-period records of reported tips tied to the correct wage base, and many restaurants either under-report tips or keep records too loose to support the claim. A managed payroll process captures tip reporting at the source every pay period, which both keeps the restaurant compliant on minimum wage and produces the exact documentation the FICA tip credit requires. The compliance work and the tax savings come from the same clean data.
            </p>

            <h2>Multi-location payroll across jurisdictions</h2>
            <p>
              Once a restaurant group operates more than one location, payroll complexity multiplies rather than adds. Each location can sit in a different state, county, or city, each with its own minimum wage, tip credit treatment, paid sick leave rules, and local taxes. An employee who picks up shifts at two locations needs wages and taxes allocated to the correct jurisdiction for each shift, and reporting that consolidates cleanly for the owner.
            </p>
            <p>
              This is where doing payroll in-house breaks down fastest. A single bookkeeper juggling spreadsheets across three cities will eventually misapply a local minimum wage or a city tax, and in a tipped environment those errors compound. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> runs every location through one process, applies the correct rules per jurisdiction, and gives the owner consolidated reporting, all for a flat $25 to $45 per employee per month with no per-location surcharge.
            </p>

            <h2>Why managed payroll fits restaurants specifically</h2>
            <p>
              Restaurants run on thin margins and high turnover, which means owners cannot afford either a costly payroll mistake or a full-time payroll hire. A fully managed service replaces that internal role for a fraction of the cost, absorbs the tip credit and tip pooling complexity, captures the data the FICA tip credit needs, and scales across locations without adding headcount. For an operator who would rather think about food and guests than wage-and-hour law, that trade is the entire value. See the rest of our practical payroll references in the <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG guides library</Link>.
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
            {faqs.map(({ q, a }) => (
              <div key={q} className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#000000', marginTop: 0, marginBottom: '0.6rem' }}>{q}</h3>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.7' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#000000', borderRadius: '10px', padding: '2.5rem', textAlign: 'center', color: '#ffffff' }} className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Hand Off Restaurant Payroll</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles restaurant payroll fully managed at $25-$45 PEPM.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              Tip credit tracking, tip pooling compliance, FICA tip credit documentation, and multi-location reporting, all handled by your dedicated BEG payroll contact. No per-location surcharge.
            </p>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a Free 15-Minute Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
