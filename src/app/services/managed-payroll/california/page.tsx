import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'California Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for California employers at $25-$45 PEPM. California AB5, SDI, and daily overtime managed. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/california' },
  openGraph: {
    title: 'California Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for California employers at $25-$45 PEPM. California AB5, SDI, and daily overtime managed. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/california',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'California Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for California employers at $25-$45 PEPM. California AB5, SDI, and daily overtime managed. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('california-payroll');

export default function PayrollCaliforniaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for California employers"
      eyebrow="Managed Payroll - California"
      showHeroImage={false}
      title="California payroll is the most complex in the country. We handle all of it."
      description="BEG provides fully managed payroll for California employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">California Payroll Requirements</p>
            <h2>What makes California payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>California has the most complex state payroll environment in the country. Employers must withhold California Personal Income Tax (PIT) using the state&apos;s graduated rate table, withhold State Disability Insurance (SDI) contributions from employees, and pay Employment Training Tax (ETT) and State Unemployment Insurance (SUI) on employee wages. All four of these taxes have separate rates, wage bases, and deposit schedules administered by the Employment Development Department (EDD). New employer SUI rates start around 3.4%.</p>
            <p>Beyond the four-tax EDD system, California imposes daily overtime. Employees who work more than 8 hours in a single workday are entitled to overtime at 1.5x, and hours beyond 12 in a single day are paid at 2x regular rate. California also has mandatory Paid Family Leave funded through the SDI contribution, meal and rest break premium pay obligations, final paycheck rules requiring immediate payment for discharged employees, and strict wage statement requirements that create penalty exposure for non-compliant pay stubs. AB5 adds contractor classification rules that affect how you report workers.</p>
            <p>BEG handles the full California payroll stack: PIT withholding at current rates, SDI and ETT withholding and remittance, daily overtime calculations, meal and rest break tracking, SUI filings with EDD, compliant wage statements, new hire reporting, and W-2 production. California payroll without a dedicated specialist is the fastest way to accumulate penalties. BEG is that specialist.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for California employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and California state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>California state income tax withholding (if applicable)</li>
            <li>California state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to California state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>California SDI, ETT, and daily overtime calculations</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off California payroll?</h2>
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
            name: 'California Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'California' },
            description: 'Fully managed payroll for California employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'California', item: 'https://beghr.com/services/managed-payroll/california' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in California? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
