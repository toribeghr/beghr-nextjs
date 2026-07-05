import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Idaho Mini-COBRA: No State Continuation Law | BEG',
  description: 'Idaho has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Idaho employers and their staff can do.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/idaho' },
  openGraph: {
    title: 'Idaho Mini-COBRA: No State Continuation Law | BEG',
    description: 'Idaho has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Idaho employers and their staff can do.',
    url: 'https://www.beghr.com/services/managed-benefits/idaho',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Idaho Mini-COBRA: No State Continuation Law | BEG', description: 'Idaho has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Idaho employers and their staff can do.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-idaho');

const FAQS: [string, string][] = [
  [
    'Does Idaho have a mini-COBRA law?',
    'No. Idaho has no state continuation (mini-COBRA) statute that gives employees of small employers a right to keep group coverage after a qualifying event. Continuation in Idaho runs through federal COBRA, which applies only to employers with 20 or more employees.',
  ],
  [
    'What is the Small Employer Health Insurance Availability Act then?',
    'Idaho Code Title 41, Chapter 47 requires insurers to actively offer and guaranteed-issue health plans to small employers of 2 to 50 employees and regulates how those plans are rated. It governs access and pricing, not the right to continue coverage after someone leaves.',
  ],
  [
    'Is there any Idaho continuation right at all?',
    'Only a narrow one. Idaho Code 41-2213 requires a limited extension of benefits for a person who is totally disabled when a group policy is discontinued. That is a disability provision, not a general termination-based continuation right.',
  ],
  [
    'What can a small Idaho employer do for departing staff?',
    'An employer can choose to offer continuation voluntarily, and the plan or carrier may allow conversion to an individual policy. Employers with 20 or more employees must offer federal COBRA. Below that, there is no Idaho mandate, so clarity in your plan documents matters.',
  ],
  [
    'Where do laid-off Idaho employees get coverage?',
    'Loss of job-based coverage is a qualifying event for a special enrollment period on Idaho’s state marketplace, Your Health Idaho, and can also open Medicaid eligibility. That is often more affordable than continuation for lower-income households.',
  ],
  [
    'How does benefits administration help if there is no Idaho mandate?',
    'The administration burden does not disappear: enrollment, ACA tracking, federal COBRA at 20-plus employees, carrier updates, and clean records still have to be run. BEG Managed Benefits, powered by isolved, handles that in one system. You keep your broker; we do the administration.',
  ],
];

export default function ManagedBenefitsIdahoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Idaho mini-COBRA: the state has no continuation mandate',
            description: 'Idaho has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small Idaho employers and their staff can do.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/idaho',
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
              { '@type': 'ListItem', position: 3, name: 'Idaho', item: 'https://www.beghr.com/services/managed-benefits/idaho' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Idaho"
        title="Idaho has no mini-COBRA. The benefits work still has to get done."
        description="Idaho does not require small employers to continue coverage after a qualifying event; only federal COBRA at 20-plus employees applies. But enrollment, ACA, and clean records still land on someone. BEG Managed Benefits, powered by isolved, runs that administration. You keep your broker; we do the work."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'No state law', label: 'Idaho has no mini-COBRA continuation mandate' },
          { value: '20+', label: 'Federal COBRA threshold that does apply' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
        ]}
      >
        {/* ANSWER-FIRST FACTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Idaho Continuation, In Brief</p>
              <h2>What Idaho law does and does not require</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <tbody>
                  {[
                    ['State mini-COBRA', 'None. Idaho has no termination-based state continuation mandate'],
                    ['What does apply below 20 employees', 'No state continuation requirement; the plan or carrier may offer voluntary continuation or conversion'],
                    ['Federal COBRA', 'Applies to employers with 20 or more employees'],
                    ['Small Employer Health Insurance Availability Act', 'Idaho Code Title 41, Chapter 47: guaranteed availability and rating for employers of 2 to 50, not continuation'],
                    ['Disability extension', 'Idaho Code 41-2213 extends benefits only for a person totally disabled when a group policy is discontinued'],
                    ['Marketplace', 'Your Health Idaho, with a special enrollment period after losing job-based coverage'],
                  ].map(([k, v], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>{k}</td>
                      <td style={{ padding: '12px 16px', color: '#555555' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://doi.idaho.gov/consumers/health-insurance/group-health/" target="_blank" rel="noopener noreferrer">Idaho Department of Insurance, group health insurance</a>. This page is general information, not legal advice.
            </p>
          </div>
        </section>

        {/* BEG ANGLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">No Mandate, Same Workload</p>
              <h2>The administration does not go away because the state stayed quiet</h2>
            </div>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1.5rem' }}>
              An Idaho employer still runs open enrollment, tracks ACA eligibility, handles federal COBRA once it crosses 20 employees, keeps carrier records current, and answers employee questions when someone leaves. The absence of a state mini-COBRA rule does not lighten that load; it just means your plan documents and process have to be clear about what you offer.
            </p>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1rem' }}>
              BEG Managed Benefits, powered by isolved, runs that administration in one system: enrollment, ACA forms, federal COBRA when it applies, and clean data your broker and carriers can trust. Your broker keeps advising you and placing coverage. We own the operational work behind it.
            </p>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Compare the framework: <Link href="/services/managed-benefits/cobra-vs-mini-cobra">COBRA vs mini-COBRA</Link>, or return to the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Idaho continuation coverage, answered</h2>
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
