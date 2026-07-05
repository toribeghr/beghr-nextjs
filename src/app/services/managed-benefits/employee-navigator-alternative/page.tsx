import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Employee Navigator Alternative | Instant Estimate | BEG',
  description: 'Great software still leaves the work on your desk. BEG Managed Benefits, powered by isolved, does the administration. Your broker stays. Instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/employee-navigator-alternative' },
  openGraph: {
    title: 'Employee Navigator Alternative | Instant Estimate | BEG',
    description: 'Great software still leaves the work on your desk. BEG Managed Benefits, powered by isolved, does the administration. Your broker stays. Instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/employee-navigator-alternative',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Employee Navigator Alternative | Instant Estimate | BEG', description: 'Great software still leaves the work on your desk. BEG Managed Benefits, powered by isolved, does the administration. Your broker stays. Instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-employee-navigator-alternative');

const FAQS: [string, string][] = [
  [
    'Is BEG replacing our broker or Employee Navigator?',
    'Not your broker, ever. Your broker keeps advising you, negotiating renewals, and placing coverage no matter which administration system sits behind the plans. What BEG Managed Benefits, powered by isolved, changes is who does the administrative work: instead of your team running it in software, a dedicated team runs it for you.',
  ],
  [
    'How is BEG different from Employee Navigator?',
    'Employee Navigator is benefits administration software that insurance brokers license and provide to their employer clients; the employer team does the day-to-day work in the tool. BEG Managed Benefits is a service: on the Fully Managed plan, a dedicated Managed Benefits Specialist runs enrollment, life events, and carrier updates, and a Benefits Auditing Analyst checks your data.',
  ],
  [
    'Does Employee Navigator publish pricing?',
    'It publishes a tier comparison, Enhanced through Platinum, with plan pricing available through its sales team, and it notes a published per-employee fee for 834 EDI carrier feeds on some tiers. Its plans are built for and sold to brokers. BEG shows employers a monthly estimate on screen in about 90 seconds.',
  ],
  [
    'Our broker gives us Employee Navigator at no direct cost. Why pay for administration?',
    'Because the software was never the cost; the hours were. Every enrollment chased, life event keyed, carrier discrepancy fixed, and ACA form checked comes out of your team’s week. If those hours are cheap for you, keep them in-house. If they are not, a managed service usually costs less than the internal time it replaces.',
  ],
  [
    'What platform does BEG Managed Benefits run on?',
    'The service is powered by isolved, the HCM platform behind thousands of American employers. Benefits and payroll live on the same data, so deductions, eligibility, and ACA hours tracking stay in sync instead of drifting across systems.',
  ],
];

export default function EmployeeNavigatorAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Employee Navigator Alternative for Employers: Great Software, But Who Does the Work?',
            description: 'What Employee Navigator does well as broker-distributed benefits software, where software alone leaves work on the employer, and how BEG Managed Benefits, powered by isolved, adds the service layer while your broker stays.',
            datePublished: '2026-07-05',
            dateModified: '2026-07-05',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            url: 'https://www.beghr.com/services/managed-benefits/employee-navigator-alternative',
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
              { '@type': 'ListItem', position: 3, name: 'Employee Navigator Alternative', item: 'https://www.beghr.com/services/managed-benefits/employee-navigator-alternative' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Alternatives"
        title="Employee Navigator is good software. The question is who does the work in it."
        description="Your broker gave you a solid tool, and your broker should stay. BEG Managed Benefits, powered by isolved, adds what software alone cannot: a dedicated team that runs enrollment, changes, and compliance for you, with a monthly estimate on screen in about 90 seconds."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'Your broker stays, always' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* WHAT THEY DO WELL */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Credit Where Due</p>
              <h2>What Employee Navigator does well</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.employeenavigator.com/benefits-administration/" target="_blank" rel="noopener noreferrer">Employee Navigator</a> is one of the most widely used benefits administration platforms in the country, and it earned that position honestly. It gives insurance brokers a single platform to run online enrollment, <a href="https://www.employeenavigator.com/aca-reporting/" target="_blank" rel="noopener noreferrer">ACA reporting</a>, new hire onboarding, and HR recordkeeping for their employer clients, with hundreds of carrier, payroll, and TPA integrations. Its <a href="https://www.employeenavigator.com/pricing/" target="_blank" rel="noopener noreferrer">published tier comparison</a>, Enhanced through Platinum, is refreshingly transparent about what each plan includes, with plan pricing handled through its sales team.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                One thing worth saying plainly: if your broker set you up on Employee Navigator, that is a good sign about your broker. It means they invest in modern tooling for their clients instead of pushing paper enrollment forms. The tool is good, the channel is legitimate, and nothing on this page argues otherwise.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The comparison with BEG is not software versus software. It is software versus service: who actually does the administrative work that the software organizes.
              </p>
            </div>
          </div>
        </section>

        {/* THE REAL QUESTION */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Question</p>
              <h2>Great software. Now, who does the work?</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                None of this is a flaw in Employee Navigator. Software organizes work; it does not perform it. These are the jobs that stay on the employer&apos;s desk with any benefits software.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'The software assigns the work to your team', body: 'Someone on your side builds plans, keys life events, chases incomplete enrollments, and reconciles carrier discrepancies. The tool makes those tasks cleaner; it does not make them disappear from your week.' },
                { title: 'Open enrollment is still your project', body: 'Enrollment windows, employee reminders, election corrections, and payroll deduction syncs all need a project owner. In a software model, that owner is your HR person, in Q4, on top of everything else.' },
                { title: 'An ACA module is not ACA done', body: 'Employee Navigator has real ACA reporting features, with variable-hour tracking and 1094/1095 support. Features still need an operator: someone must watch eligibility all year, validate the data, and stand behind the filing.' },
                { title: 'Your broker provides the tool, not the hours', body: 'Brokers advise on plans, negotiate renewals, and support their clients generously. But the daily administrative hours inside the system were never the broker’s job, and it is not fair to expect them to become it.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>BEG Managed Benefits vs. Employee Navigator</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>BEG Managed Benefits</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Employee Navigator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['What it is', 'A managed service on the isolved platform', 'Benefits administration software distributed through brokers'],
                    ['Who does the admin work', 'A dedicated team on the Fully Managed plan', 'Your HR team, in the software'],
                    ['Your broker', 'Stays; we work alongside them', 'Stays; brokers license and run the platform'],
                    ['Open enrollment', 'Handled start to finish on the top plan', 'Strong tools your team drives'],
                    ['ACA reporting', 'Tracked and produced for you', 'Reporting module your team operates; some services carry added fees per its pricing page'],
                    ['Pricing visibility', 'Instant on-screen estimate for employers', 'Tier features published; plan pricing through sales, sold to brokers'],
                    ['Payroll connection', 'Same platform as BEG managed payroll', 'Payroll integrations'],
                    ['Getting started', '15-minute call after your estimate', 'Through your broker'],
                  ].map(([factor, beg, them], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{beg}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHO SHOULD STAY */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Honest Answer</p>
              <h2>When Employee Navigator is the right choice</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                If you have a capable person who genuinely owns benefits administration, your broker runs Employee Navigator well, and the workload fits inside that person&apos;s week, keep exactly what you have. The combination of a good broker and a modern platform is a strong setup, and paying for a managed service to replace work your team handles comfortably is spending money on a problem you do not have. Employee Navigator&apos;s breadth of integrations and its published tier structure also make it easy for your broker to grow the setup as you add carriers or products.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The time to look at BEG is when the tool is fine but the hours are not: when enrollment season swallows your HR person, ACA filings feel like a gamble, and the administration needs an owner whose whole job it is.
              </p>
            </div>
          </div>
        </section>

        {/* BEG SECTION */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The BEG Alternative</p>
              <h2>Service, not just software, and the broker stays</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, comes in three plans: benefits admin software your team drives, software plus ACA compliance with Forms 1094-C and 1095-C produced for you, and Fully Managed, where a dedicated Managed Benefits Specialist runs enrollment and changes while a Benefits Auditing Analyst checks your data for costly errors. Your broker keeps advising and placing coverage exactly as before; what moves is the operational load. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Comparing the software camp side by side? See the <Link href="/services/managed-benefits/plansource-alternative">PlanSource alternative</Link>, or the service camp via the <Link href="/services/managed-benefits/wex-alternative">WEX benefits alternative</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Employee Navigator alternatives, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* AUTHORITY SOURCES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center', lineHeight: 1.7, margin: 0 }}>
              Compliance references: <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, COBRA continuation coverage</a> and <a href="https://www.irs.gov/affordable-care-act/employers/information-reporting-by-applicable-large-employers" target="_blank" rel="noopener noreferrer">IRS ACA employer information reporting</a>. This page is general information, not legal advice.
            </p>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
