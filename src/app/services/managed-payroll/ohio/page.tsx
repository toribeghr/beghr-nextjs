import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Ohio Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Ohio employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/ohio' },
  openGraph: {
    title: 'Ohio Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Ohio employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/ohio',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Ohio Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Ohio employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('ohio-payroll');

export default function PayrollOhioPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Ohio employers"
      eyebrow="Managed Payroll - Ohio"
      showHeroImage={false}
      title="Ohio payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Ohio employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered from one account' },
        { value: '3-5 days', label: 'Implementation time' },
      ]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Ohio Payroll Requirements</p>
            <h2>What makes Ohio payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Ohio levies a graduated state income tax with a reduced top rate of 3.75%. Ohio employers must withhold state income tax using tables from the Ohio Department of Taxation. Ohio SUI is administered by the Ohio Department of Job and Family Services. A major complexity in Ohio payroll is the state&apos;s extensive local tax system: nearly 600 Ohio cities and villages levy local income taxes, with rates and rules that vary by municipality. The Regional Income Tax Agency (RITA) and Central Collection Agency (CCA) administer local taxes for many municipalities.</p>
            <p>Ohio&apos;s local income tax structure is one of the most complex in the country. An employer with employees working in multiple Ohio cities must withhold and remit to each applicable local tax authority separately, following that jurisdiction&apos;s filing schedule and rate. Ohio also has a school district income tax in some areas. Employees may have credit for taxes paid to multiple Ohio jurisdictions, creating withholding calculations that require careful configuration.</p>
            <p>BEG manages Ohio&apos;s layered payroll: state income tax withholding, local income tax withholding for each applicable Ohio municipality, school district tax where applicable, SUI filings, new hire reporting to the Ohio New Hire Reporting Center, garnishment processing, and year-end W-2 production. Ohio&apos;s local tax complexity is a significant operational burden for employers with workers in multiple cities. BEG manages each jurisdiction so your team handles none of it.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Ohio employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Ohio state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Ohio state income tax withholding (if applicable)</li>
            <li>Ohio state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Ohio state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>State income tax withholding and annual reconciliation</li>
            <li>Year-end close and 1099 production for contractors</li>
          </ul>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>
              Learn more about BEG Managed Payroll
            </Link>{' '}- fully managed at $25-$45 PEPM, all 50 states.
          </p>
        </div>
      </section>

      <section className="section section--dark" style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Ohio payroll?</h2>
          <p style={{ color: '#ccc', marginBottom: '2rem' }}>15-minute discovery call. We scope your situation and tell you exactly what BEG would handle.</p>
          <a href={CALENDLY} className="btn btn--gold">Book a Free Discovery Call</a>
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '1rem' }}>$25-$45 PEPM all-inclusive. No migration required. Live in 3-5 business days.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Ohio Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Ohio' },
            description: 'Fully managed payroll for Ohio employers at $25-$45 PEPM.',
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'Ohio', item: 'https://beghr.com/services/managed-payroll/ohio' },
            ],
          })
        }}
      />
    </ServicePage>
  );
}
