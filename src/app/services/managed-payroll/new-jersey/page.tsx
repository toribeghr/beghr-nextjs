import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'New Jersey Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for New Jersey employers at $25-$45 PEPM. New Jersey SDI, FLI, and earned sick leave. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/new-jersey' },
  openGraph: {
    title: 'New Jersey Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for New Jersey employers at $25-$45 PEPM. New Jersey SDI, FLI, and earned sick leave. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/new-jersey',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Jersey Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for New Jersey employers at $25-$45 PEPM. New Jersey SDI, FLI, and earned sick leave. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('new-jersey-payroll');

export default function PayrollNewJerseyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for New Jersey employers"
      eyebrow="Managed Payroll - New Jersey"
      showHeroImage={false}
      title="New Jersey payroll is the most complex in the country. We handle all of it."
      description="BEG provides fully managed payroll for New Jersey employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">New Jersey Payroll Requirements</p>
            <h2>What makes New Jersey payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>New Jersey has one of the most complex state payroll environments in the country. Employers must withhold New Jersey Gross Income Tax (GIT) using the state&apos;s graduated rate table, withhold State Disability Insurance (SDI) contributions from employees, withhold Family Leave Insurance (FLI) contributions, and withhold Workforce Development Partnership Fund (WDF) contributions. New Jersey SUI requires both employer and employee contributions. All of these programs are administered through the New Jersey Division of Taxation and the Department of Labor and Workforce Development.</p>
            <p>New Jersey&apos;s SDI program covers temporary disability due to non-work-related illness or injury. The FLI program covers paid leave to care for a new child or ill family member. Both require per-pay-period withholding from employees. New Jersey also mandates earned sick leave of at least one hour per 30 hours worked for most employees. New Jersey&apos;s wage payment laws include strict final paycheck rules and some of the broadest anti-retaliation provisions in the country.</p>
            <p>BEG manages New Jersey&apos;s multi-program payroll compliance: GIT withholding, SDI withholding and remittance, FLI withholding and remittance, WDF contributions, SUI employer contributions, earned sick leave tracking, quarterly filings, new hire reporting, garnishment processing, and W-2 production. New Jersey payroll without a specialist managing each program creates real compliance exposure. BEG is that specialist.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for New Jersey employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and New Jersey state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>New Jersey state income tax withholding (if applicable)</li>
            <li>New Jersey state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to New Jersey state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>New Jersey SDI and Family Leave Insurance contributions</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off New Jersey payroll?</h2>
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
            name: 'New Jersey Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'New Jersey' },
            description: 'Fully managed payroll for New Jersey employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'New Jersey', item: 'https://beghr.com/services/managed-payroll/new-jersey' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in New Jersey? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
