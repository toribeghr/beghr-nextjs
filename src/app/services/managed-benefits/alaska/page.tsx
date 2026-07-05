import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Alaska Mini-COBRA: No State Law | BEG',
  description: 'Alaska has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Alaska employers and staff can do.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/alaska' },
  openGraph: {
    title: 'Alaska Mini-COBRA: No State Law | BEG',
    description: 'Alaska has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Alaska employers and staff can do.',
    url: 'https://www.beghr.com/services/managed-benefits/alaska',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Alaska Mini-COBRA: No State Law | BEG', description: 'Alaska has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Alaska employers and staff can do.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-alaska');

const FAQS: [string, string][] = [
  [
    'Does Alaska have a mini-COBRA law?',
    'No. Alaska has no state continuation, or mini-COBRA, statute giving employees of small employers a right to keep group coverage after a qualifying event. Continuation in Alaska runs through federal COBRA, which applies only to employers with 20 or more employees.',
  ],
  [
    'What covers continuation in Alaska then?',
    'Federal COBRA for employers with 20 or more employees. Below that size there is no Alaska mandate, though a plan or carrier may offer voluntary continuation or conversion to an individual policy.',
  ],
  [
    'Where do Alaska employees get coverage after a job loss?',
    'Losing job-based coverage opens a special enrollment period. Uses HealthCare.gov (federal marketplace; Alaska does not run its own state-based exchange). Loss of coverage can also open Medicaid eligibility for lower-income households.',
  ],
  [
    'Is there any Alaska continuation right at all?',
    'There is no general termination-based right. Alaska\'s insurance code may contain narrow provisions, such as a limited extension for a totally disabled person, but nothing equivalent to COBRA for small-employer groups.',
  ],
  [
    'How does benefits administration help if there is no Alaska mandate?',
    'The workload does not disappear: enrollment, ACA tracking, federal COBRA once you cross 20 employees, and carrier updates still have to run. BEG Managed Benefits, powered by isolved, handles that administration in one system. You keep your broker; we do the work.',
  ],
];

export default function ManagedBenefitsAlaskaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Alaska mini-COBRA and state continuation coverage rules',
            description: 'Alaska has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Alaska employers and staff can do.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/alaska',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Alaska', item: 'https://www.beghr.com/services/managed-benefits/alaska' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Alaska"
        title="Alaska has no mini-COBRA. The benefits work still has to get done."
        description="Alaska does not require small employers to continue coverage after a qualifying event; only federal COBRA at 20-plus employees applies. But enrollment, ACA, and clean records still land on someone. BEG Managed Benefits, powered by isolved, runs that administration. You keep your broker; we do the work."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'No state law', label: 'Alaska has no mini-COBRA mandate' },
          { value: '20+', label: 'Federal COBRA threshold that does apply' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
        ]}
      >
        {/* STATE FACTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '860px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Alaska Continuation, In Brief</p>
              <h2>What Alaska law does and does not require</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>State mini-COBRA</td><td style={{ padding: '12px 16px', color: '#555555' }}>None. No state termination-based continuation mandate</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Federal COBRA</td><td style={{ padding: '12px 16px', color: '#555555' }}>Applies to employers with 20 or more employees</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Below 20 employees</td><td style={{ padding: '12px 16px', color: '#555555' }}>No state continuation requirement; voluntary continuation or conversion may be offered</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Marketplace</td><td style={{ padding: '12px 16px', color: '#555555' }}>Uses HealthCare.gov (federal marketplace; Alaska does not run its own state-based exchange).</td></tr>
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.8rem', color: '#888888', marginTop: '1rem', textAlign: 'center', lineHeight: 1.6 }}>
              Source: <a href="https://www.akleg.gov/basis/statutes.asp" target="_blank" rel="noopener noreferrer">Alaska statute and department of insurance (www.akleg.gov)</a>. This page is general information, not legal advice.
            </p>
          </div>
        </section>

        {/* ANGLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">No Mandate, Same Workload</p>
              <h2>The administration does not go away because the state stayed quiet</h2>
            </div>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1.5rem' }}>
              A Alaska employer still runs open enrollment, tracks ACA eligibility, handles federal COBRA once it crosses 20 employees, keeps carrier records current, and answers employee questions when someone leaves. The absence of a state mini-COBRA rule does not lighten that load; it just means your plan documents and process have to be clear about what you offer. BEG Managed Benefits, powered by isolved, runs that administration in one system: enrollment, ACA forms, federal COBRA when it applies, and clean data your broker and carriers can trust.
            </p>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              See <Link href="/services/managed-benefits/cobra-vs-mini-cobra">COBRA vs mini-COBRA</Link>, or return to the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Alaska continuation coverage, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
