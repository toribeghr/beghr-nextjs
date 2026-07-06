import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'What an HRMS Actually Gives Employees (Not Just HR) | BEG',
  description: 'Pay stubs, PTO requests, benefits enrollment, and document access: what an HRMS gives employees directly, and how it differs from the tools HR admins use.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/hrms-for-employees' },
  openGraph: {
    title: 'What an HRMS Actually Gives Employees (Not Just HR) | BEG',
    description: 'Pay stubs, PTO requests, benefits enrollment, and document access: what an HRMS gives employees directly, and how it differs from the tools HR admins use.',
    url: 'https://www.beghr.com/services/hcm-software/hrms-for-employees',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'What an HRMS Actually Gives Employees (Not Just HR) | BEG', description: 'Pay stubs, PTO requests, benefits enrollment, and document access: what an HRMS gives employees directly, and how it differs from the tools HR admins use.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hrms-for-employees');

export default function HrmsForEmployeesPage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Employee Experience"
      title="What does an HRMS actually give employees, not just HR?"
      description="Most HRMS content is written for the HR admin buying the software. This page is written for the employee using it: what you can see, request, and do yourself, without emailing HR and waiting."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="hcm-software" />}
      heroStats={[
        { value: '4', label: 'Core self-service functions employees use most' },
        { value: '24/7', label: 'Employee portal access, no HR request needed' },
        { value: '330%', label: 'ROI documented by Forrester for isolved' },
      ]}
    >
      {/* TL;DR */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="tldr reveal" style={{ background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
            <p style={{ margin: 0, fontSize: '0.97rem', color: '#333333', lineHeight: '1.7' }}>
              <strong>Bottom line up front:</strong> an HRMS (human resources management system, also called an HCM system) gives employees a self-service portal to view pay stubs, request time off, enroll in benefits, and access HR documents on their own, without a phone call or email to HR. This is different from the admin-facing side, which HR and payroll staff use to run the company&apos;s HR operations.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS AN HRMS FOR EMPLOYEES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Basics</p>
            <h2>What is an HRMS from an employee&apos;s point of view?</h2>
          </div>
          <p style={{ maxWidth: '680px', margin: '0.75rem auto 0', color: '#333333', fontWeight: 600, textAlign: 'center', lineHeight: '1.6' }}>
            To an employee, an HRMS is a website or app where you log in to see your pay, request time off, manage your benefits, and update your own information, instead of asking HR to do it for you.
          </p>
          <p style={{ maxWidth: '720px', margin: '1.25rem auto 0', color: '#444444', lineHeight: '1.75', fontSize: '0.95rem' }}>
            HRMS stands for human resources management system. Companies also call the same category HCM (human capital management) or HRIS (human resources information system). Whatever the label, the part employees actually touch is the self-service portal, usually accessed through a browser or a mobile app. Your employer&apos;s HR and payroll team uses the same underlying platform on the admin side to process payroll, manage compliance, and configure benefits. You never see that side. You see a simpler, employee-facing layer built for four things: your pay, your time off, your benefits, and your documents.
          </p>
        </div>
      </section>

      {/* 4 CORE THINGS EMPLOYEES GET */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Can Actually Do</p>
            <h2>The four things an HRMS gives employees directly</h2>
          </div>
          <div className="beg-grid-2 reveal" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Pay stubs and pay history</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.93rem' }}>
                View and download current and past pay stubs any time, without waiting for HR to email a PDF. Most systems also show year-to-date earnings, tax withholding, and deduction breakdowns, and let you access W-2s electronically at year-end.
              </p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>PTO requests and balances</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.93rem' }}>
                Check your current PTO, sick time, and vacation balances in real time, then submit a time-off request that routes automatically to your manager for approval. No spreadsheet, no separate form, no guessing how many days you have left.
              </p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits enrollment and changes</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.93rem' }}>
                Enroll in health, dental, vision, and other benefits during open enrollment directly in the portal, and report qualifying life events (marriage, birth, loss of other coverage) yourself to trigger a special enrollment window, instead of routing paperwork through HR.
              </p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Document access and personal info</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.93rem' }}>
                Access your offer letter, handbook acknowledgments, and signed HR documents in one place. Update your home address, direct deposit account, and emergency contact yourself, with changes reflected in the next payroll cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE VS ADMIN SIDE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Real Difference</p>
            <h2>How is the employee side different from what HR sees?</h2>
          </div>
          <p style={{ maxWidth: '680px', margin: '0.75rem auto 0', color: '#333333', fontWeight: 600, textAlign: 'center', lineHeight: '1.6' }}>
            Employees see a simplified self-service view of their own record. HR and payroll admins see the full system: everyone&apos;s data, payroll processing tools, compliance tracking, and reporting across the whole company.
          </p>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', minWidth: '480px', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontWeight: '700' }}>What you do</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700', color: '#ECAC60' }}>Employee view</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>HR/admin view</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['View pay stub', 'Your own, anytime', "Everyone's, plus processing tools"],
                  ['Request time off', 'Submit and track your request', 'Approve, deny, manage team calendars'],
                  ['Enroll in benefits', 'Elect your own plan', 'Configure plans, manage carrier feeds'],
                  ['Update personal info', 'Your address, bank, contacts', "Everyone's records, compliance audit trail"],
                  ['Run payroll', 'Not available', 'Full payroll processing and tax filing'],
                ].map(([action, emp, admin], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.8rem 1rem', fontWeight: '600', color: '#222222' }}>{action}</td>
                    <td style={{ padding: '0.8rem 1rem', textAlign: 'center', color: '#000000' }}>{emp}</td>
                    <td style={{ padding: '0.8rem 1rem', textAlign: 'center', color: '#666666' }}>{admin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS FOR EMPLOYERS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">For HR Leaders and Owners</p>
            <h2>Why employee self-service saves your HR team real time</h2>
          </div>
          <p style={{ maxWidth: '680px', margin: '0.75rem auto 0', color: '#333333', fontWeight: 600, textAlign: 'center', lineHeight: '1.6' }}>
            Every pay-stub request, PTO question, and address change that an employee handles themselves is one fewer email, call, or ticket landing on your HR team&apos;s desk during the workday.
          </p>
          <p style={{ maxWidth: '720px', margin: '1.25rem auto 0', color: '#444444', lineHeight: '1.75', fontSize: '0.95rem' }}>
            The employee experience described above is not a soft perk. It is the front door to adoption. A confusing or clunky self-service portal means employees keep emailing HR anyway, and the platform never delivers the admin time savings it was purchased for. isolved People Cloud, which BEG implements and configures, includes employee self-service as a core part of the platform, alongside the payroll, benefits, and compliance tools your HR and payroll team uses on the admin side. BEG configures both sides during implementation so employees adopt the portal from day one instead of defaulting back to email.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common employee questions about HRMS access</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can I see my old pay stubs in an HRMS?</h3>
              <p>Yes. Most HRMS platforms keep a full pay history available for employees to view and download, often going back several years, along with year-end tax documents like your W-2.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need HR approval to request time off?</h3>
              <p>You submit the request yourself in the portal, but it still routes to your manager for approval before it is finalized. The system removes the manual step of emailing or filling out a paper form, not the approval itself.</p>
            </div>
            <div className="faq-item">
              <h3>Can I change my benefits outside of open enrollment?</h3>
              <p>Generally only if you have a qualifying life event, such as marriage, a new dependent, or losing other coverage. Most HRMS portals let you report the life event yourself, which opens a special enrollment window without waiting on HR to manually process it.</p>
            </div>
            <div className="faq-item">
              <h3>What happens if I update my address or direct deposit myself?</h3>
              <p>The change typically applies to the next payroll cycle once submitted, though some employers require HR to approve sensitive changes like direct deposit before they take effect, as a fraud-prevention step.</p>
            </div>
            <div className="faq-item">
              <h3>Is the employee HRMS app the same as what HR uses?</h3>
              <p>No. Employees use a simplified self-service layer scoped to their own record. HR and payroll administrators use the full platform, which includes payroll processing, compliance tracking, and company-wide reporting that employees never see.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIDEWAYS LINKS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="reveal" style={{ fontSize: '0.95rem', color: '#555555', textAlign: 'center', lineHeight: '1.7', margin: 0 }}>
            Evaluating platforms for your whole company, not just the employee experience? See the{' '}
            <Link href="/services/hcm-software/best-hcm-software">best HCM software comparison</Link>{' '}
            or explore the full{' '}
            <Link href="/services/hcm-software">isolved HCM software hub</Link>{' '}
            for pricing, implementation, and industry-specific pages.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA (routes to employer/buyer) */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>For HR Leaders and Business Owners</p>
          <h2 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Give your employees a self-service experience they will actually use.
          </h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            BEG implements and configures isolved People Cloud, including employee self-service, so your team stops emailing HR for pay stubs and PTO requests.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'HCM software',
            title: 'isolved Platform Overview: Features, Pricing, and Who It Is For',
            excerpt: 'A no-fluff breakdown of what isolved covers, who it fits best, and how it compares to the platforms most mid-size companies are already running.',
            href: '/blog/hcm-software/isolved-platform',
          },
          {
            category: 'HCM software',
            title: 'HR Automation in 2025: What isolved Actually Automates',
            excerpt: 'Most HR platforms promise automation but deliver report generation. Here is what genuine automation looks like and which tasks it eliminates.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'],
            },
            url: 'https://www.beghr.com/services/hcm-software/hrms-for-employees',
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
              { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
              { '@type': 'ListItem', position: 3, name: 'HRMS for Employees', item: 'https://www.beghr.com/services/hcm-software/hrms-for-employees' },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can I see my old pay stubs in an HRMS?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most HRMS platforms keep a full pay history available for employees to view and download, including year-end tax documents like your W-2.' },
              },
              {
                '@type': 'Question',
                name: 'Do I need HR approval to request time off?',
                acceptedAnswer: { '@type': 'Answer', text: 'You submit the request yourself, but it still routes to your manager for approval. The system removes the manual paperwork step, not the approval itself.' },
              },
              {
                '@type': 'Question',
                name: 'Can I change my benefits outside of open enrollment?',
                acceptedAnswer: { '@type': 'Answer', text: 'Generally only with a qualifying life event, such as marriage or a new dependent. Most HRMS portals let you report the event yourself to open a special enrollment window.' },
              },
              {
                '@type': 'Question',
                name: 'Is the employee HRMS app the same as what HR uses?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. Employees use a simplified self-service layer scoped to their own record. HR and payroll admins use the full platform with payroll processing and company-wide reporting.' },
              },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
