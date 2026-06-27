import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Multi-Location Payroll for Franchise Owners: How to Manage Across Locations | BEG',
  description: 'How franchise operators manage payroll across multiple locations — cost center tracking, employee transfers, state minimum wage updates, and how to consolidate without losing per-location visibility.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/franchise/franchise-multi-location-payroll' },
};

const faqs = [
  {
    q: 'Does each franchise location need its own EIN?',
    a: 'If each location is a separate legal entity (separate LLC, for example), then yes — each entity has its own EIN and technically runs its own payroll. If all locations are under one legal entity, a single EIN can cover all locations, with department or cost center coding used to separate labor costs by location. Many multi-location franchise operators use one entity per location for liability separation purposes, which means managing multiple payroll accounts.',
  },
  {
    q: 'How do employee transfers between locations affect payroll?',
    a: 'When an employee moves from one location to another within the same legal entity, it is a department transfer in payroll — the employee\'s W-2 reflects all wages from the entity. When an employee moves from one location to a different entity, it is a termination and rehire — the employee gets two W-2s and the wage bases restart. Most franchise operators prefer same-entity structuring to avoid this complexity.',
  },
  {
    q: 'What happens when my franchise adds a location in a new state?',
    a: 'Each new state requires employer registration with the state revenue or tax agency (for income tax withholding) and the state unemployment agency (for SUI). You must obtain a state unemployment experience rating, configure withholding in your payroll system for that state, and submit new hire reports per that state\'s requirements. A managed payroll provider can handle new state registration as part of the expansion process.',
  },
  {
    q: 'Can I run all my franchise locations through one payroll system?',
    a: 'Yes. Most modern payroll platforms support multi-location or multi-entity setup within a single account. You can process all locations in one system while maintaining separate cost center tracking, separate check registers, and separate state filings. This is significantly more efficient than managing separate payroll accounts for each location.',
  },
];

export default function FranchiseMultiLocationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Franchise</p>
              <h1>Multi-Location Payroll for Franchise Owners: How to Manage Across Locations</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Running payroll for two locations is twice the work. Running it for five is not — if you have the right structure. Here is how multi-location franchise operators keep payroll organized and compliant at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          A franchise operator with three locations does not have three times the payroll problems of an operator with one location — they have ten times the administrative complexity. Each location may have its own minimum wage rate, its own manager, its own scheduling, and employees who occasionally float between locations. Consolidating payroll while maintaining per-location cost visibility is the central challenge.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Legal Entity Structure and Payroll Implications</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          The first structural decision franchise operators make is how to organize their legal entities. The two common approaches:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
          {[
            {
              label: 'One entity, all locations',
              pros: 'Single EIN, single payroll account, simpler employee transfers, one set of filings',
              cons: 'Liability from one location exposes all locations and assets, less separation between business units',
            },
            {
              label: 'Separate entity per location',
              pros: 'Liability isolation between locations, cleaner partnership buyout mechanics if co-owners',
              cons: 'Separate EINs, separate payroll accounts, employee transfers are terminations/rehires, more annual filings',
            },
          ].map(({ label, pros, cons }) => (
            <div key={label} style={{ border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.75rem' }}>{label}</strong>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.85rem', color: '#27ae60' }}><strong>Pros:</strong> {pros}</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#c0392b' }}><strong>Cons:</strong> {cons}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Cost Center Payroll Tracking</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Whether you run one entity or multiple, you need per-location labor cost visibility to manage your business. In payroll, this is accomplished through cost center or department coding. Every employee is assigned to a location-level cost center. Payroll reports can then be filtered by cost center to show labor costs per location — useful for comparing labor as a percentage of revenue across locations.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          When employees work across locations in the same pay period, the hours at each location should be split across cost centers. Most payroll systems support this natively — employees are coded to their primary location, and hours at other locations are entered under the secondary location's department code.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>State Minimum Wage Tracking Across Locations</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Franchise operators with locations in multiple states face automatic minimum wage updates that differ by state and often by city or county within states. Staying current on the applicable rate for each location is not optional — paying below the local minimum wage creates immediate liability, and minimum wage increases often take effect on January 1 without much fanfare.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          A managed payroll provider who monitors state and local minimum wage changes and updates payroll configurations automatically is one of the most practical reasons multi-location franchise operators outsource payroll. Getting a wage notice from the state about a minimum wage increase you missed by two months is an avoidable problem.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Scale your franchise without scaling your payroll headaches</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for multi-location franchise operators. Cost center tracking, state minimum wage updates, employee transfers — fully managed. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/franchise">Managed Payroll for Franchise Owners</Link> — full service details</li>
            <li><Link href="/blog/payroll/franchise/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Franchise Operators</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Franchise Multi-Location Payroll', item: 'https://beghr.com/blog/payroll/franchise/franchise-multi-location-payroll' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}
