import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'New York Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for New York employers at $25-$45 PEPM. New York SDI, PFL, and NYC wage notice compliance. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/new-york' },
  openGraph: {
    title: 'New York Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for New York employers at $25-$45 PEPM. New York SDI, PFL, and NYC wage notice compliance. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/new-york',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New York Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for New York employers at $25-$45 PEPM. New York SDI, PFL, and NYC wage notice compliance. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('new-york-payroll');

export default function PayrollNewYorkPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for New York employers"
      eyebrow="Managed Payroll - New York"
      showHeroImage={false}
      title="New York payroll is the most complex in the country. We handle all of it."
      description="BEG provides fully managed payroll for New York employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">New York Payroll Requirements</p>
            <h2>What makes New York payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>New York has a highly complex state payroll environment, layered with multiple mandatory programs. Employers must withhold New York State income tax using graduated rates up to 10.9%, withhold New York City income tax for employees working and living in the five boroughs (rates up to 3.876%), withhold Yonkers earnings tax for Yonkers residents, withhold State Disability Insurance (SDI) contributions, and withhold Paid Family Leave (PFL) contributions. New York SUI requires employer contributions. All of these programs interact, with separate rate schedules, wage bases, and deposit requirements.</p>
            <p>New York SDI covers temporary disability due to non-work-related illness or injury, with the weekly benefit funded through employee contributions. PFL covers leave for bonding with a new child or caring for a seriously ill family member, funded by employee contributions. New York City&apos;s wage notice requirements and pay statement rules are stricter than state minimums. Employers with employees in New York City must also navigate the city&apos;s earned sick and safe leave law, which provides more generous benefits than the state&apos;s law.</p>
            <p>BEG manages New York&apos;s full payroll stack: state income tax withholding, NYC income tax withholding for city employees, Yonkers earnings tax for Yonkers residents, SDI withholding and remittance, PFL withholding and remittance, SUI employer contributions, compliant wage statements, new hire reporting, garnishment processing, and W-2 production. New York payroll without expert management is a penalty waiting to happen. BEG handles every program, every cycle.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for New York employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and New York state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>New York state income tax withholding (if applicable)</li>
            <li>New York state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to New York state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>New York SDI and Paid Family Leave deductions and remittance</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off New York payroll?</h2>
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
            name: 'New York Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'New York' },
            description: 'Fully managed payroll for New York employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'New York', item: 'https://beghr.com/services/managed-payroll/new-york' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in New York? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
