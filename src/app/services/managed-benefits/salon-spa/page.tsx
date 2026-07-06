import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Salon & Spa Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for salons and spas: employee vs booth renter eligibility, part-time ACA tracking, enrollment handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/salon-spa' },
  openGraph: {
    title: 'Salon & Spa Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for salons and spas: employee vs booth renter eligibility, part-time ACA tracking, enrollment handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/salon-spa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Salon & Spa Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for salons and spas: employee vs booth renter eligibility, part-time ACA tracking, enrollment handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-salon-spa');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a salon or spa?',
    'Plan setup, online enrollment stylists and therapists complete between clients, ACA eligibility tracking for part-time-heavy schedules, Forms 1094-C and 1095-C where required, life-event changes, carrier updates, and COBRA or state continuation support.',
  ],
  [
    'Do booth renters get benefits through the salon?',
    'Generally no. A properly structured booth renter is self-employed under IRS classification factors and is not on your W-2, your benefits roster, or your ACA counts. The administrative discipline is keeping renter and employee records cleanly separate so nothing blurs the line.',
  ],
  [
    'How does ACA eligibility work for part-time stylists?',
    'IRS rules average hours over a lookback measurement period; employees averaging 30 or more per week must be offered coverage for the following stability period. A stylist whose book fills up for six months can cross that line, and the system flags it instead of leaving it to memory.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for salons?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your salon or spa stays the employer.',
  ],
  [
    'What does salon benefits administration cost?',
    'A monthly per-employee cost far below an internal admin hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
  [
    'What happens if a booth renter is misclassified?',
    'If the working relationship looks more like employment than self-employment (the salon sets prices, controls hours, or supplies product and the renter cannot say otherwise) the IRS can reclassify that renter as an employee, retroactively. That brings back pay, missed benefits eligibility, and potential ACA offer obligations for the period in question. Clean recordkeeping on the renter side is the best protection, and BEG Managed Benefits keeps the employee side of that line administratively clean so a reclassification does not also become a benefits data mess.',
  ],
  [
    'How does ACA eligibility work across a multi-location salon chain?',
    'ACA full-time employee counts and offer-of-coverage obligations aggregate across all locations under common ownership, not per store. A chain with four locations that each look small individually can still cross the 50 full-time-equivalent threshold for Applicable Large Employer status once combined. BEG Managed Benefits tracks hours and eligibility across the whole chain as one system, so filings reflect the true combined headcount instead of four disconnected spreadsheets.',
  ],
  [
    'Do seasonal or holiday temp staff need to be tracked for benefits?',
    'Yes, at least for eligibility purposes. Seasonal spikes around the holidays, prom, or wedding season often push part-time stylists and estheticians into full-time-average hours for a stretch, and those averaged hours count toward ACA measurement periods even if the extra hours do not last. Temp and seasonal staff also need a clear, documented classification from day one so they are not counted as, or confused with, booth renters.',
  ],
];

export default function ManagedBenefitsSalonSpaPage() {
  return (
    <>
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
              { '@type': 'ListItem', position: 3, name: 'Salons & Spas', item: 'https://www.beghr.com/services/managed-benefits/salon-spa' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Salons & Spas"
        title="Half your chairs are employees. Half are renters. Benefits has to know exactly which is which."
        description="Salons and spas run the trickiest eligibility line in small business: W-2 stylists and therapists who may earn benefits, next to booth renters who must stay off the roster entirely, all on part-time-heavy schedules that drift toward the ACA line. BEG Managed Benefits, powered by isolved, keeps it straight while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '2 rosters', label: 'Employees and booth renters kept straight' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Salon Benefits Problem</p>
              <h2>An industry built on a classification line most owners have never had to defend.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: 'W-2 vs renter',
                  label: 'The IRS classification line running through the middle of your floor',
                  sub: 'IRS classification looks at behavioral control, financial control, and the relationship: who sets prices, who books clients, who owns the product. A renter treated like staff can be reclassified as an employee, and the benefits obligations arrive retroactively.',
                },
                {
                  stat: '30 hrs/wk',
                  label: 'The ACA full-time line a busy book quietly crosses',
                  sub: 'A part-time stylist whose demand grows can average full-time hours for months before anyone notices. Under IRS rules, averaged hours decide who must be offered coverage, and nobody at the front desk is averaging.',
                },
                {
                  stat: '0',
                  label: 'Benefits administrators on a typical salon payroll',
                  sub: 'Enrollment, carrier changes, and continuation notices land on the owner or the front desk between appointments. The work is not hard; it is constant, deadline-driven, and invisible until it is missed.',
                },
                {
                  stat: 'Holiday spike',
                  label: 'Seasonal staff who complicate the headcount you report',
                  sub: 'Salons and spas bring on seasonal or temp staff for the holiday rush, gift-card season, and prom or wedding peaks. Each one needs a clean classification decision and, if they cross into measurement periods, an eligibility record, not a verbal agreement forgotten by February.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" target="_blank" rel="noopener noreferrer">IRS, independent contractor or employee classification</a>.
            </p>
            <p className="reveal" style={{ fontSize: '0.95rem', color: '#444444', lineHeight: '1.7', marginTop: '1.5rem' }}>
              A common scenario: a day spa runs six W-2 estheticians and four booth-renting hairstylists under one roof. Two estheticians pick up extra shifts through December and January and drift past 30 hours a week on average. Nobody flags it until a filing deadline asks who was eligible for coverage in that stretch, and by then the answer requires reconstructing months of schedules by hand. The renters, meanwhile, need to stay completely off that same eligibility count, or the salon has just blurred the line it was trying to protect.
            </p>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Built for every shape a salon or spa business takes</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              {[
                {
                  title: 'Independent hair salons',
                  body: 'A single location with a mix of W-2 stylists and part-timers whose hours swing with the season. Eligibility tracking runs in the background instead of on a sticky note by the register.',
                },
                {
                  title: 'Day spas and medical spas',
                  body: 'Estheticians, massage therapists, and injectables staff often sit across different classifications and pay structures. Benefits administration has to match each person to the right roster, not a single default.',
                },
                {
                  title: 'Nail salons',
                  body: 'High part-time headcounts and frequent staff turnover make manual eligibility tracking especially error-prone. Automated lookback tracking catches the drift a busy front desk cannot.',
                },
                {
                  title: 'Barbershops',
                  body: 'Often a blend of commission employees and chair renters in a tight-knit shop. Keeping the renter roster and the benefits roster separate protects the classification your business model depends on.',
                },
                {
                  title: 'Salon suites and studio-rental groups',
                  body: 'The booth-renter-heavy model, where most of the building is independent operators and a small W-2 staff runs the front desk and support roles. Getting the line right here is the whole compliance question.',
                },
                {
                  title: 'Multi-location salon chains',
                  body: 'ACA eligibility and filing obligations aggregate across locations under common ownership, not per store. Enrollment, eligibility, and Forms 1094-C and 1095-C need one consistent system across every chair in every location.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000000' }}>{title}</h3>
                  <p style={{ margin: 0, color: '#555555', lineHeight: '1.65', fontSize: '0.92rem' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Salon and spa benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment between clients, not after close</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Nobody in a salon has desk time. The Benefits Admin Software plan puts plan comparison and enrollment on the phone: your W-2 stylists, therapists, and front desk staff research options, get AI-guided recommendations that balance cost and coverage, and enroll between appointments. Life events run through self-service workflows, and deductions sync to payroll so a plan change never turns into a payday conversation at the shampoo bowl.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Eligibility that respects the employee and renter line</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Software + ACA Compliance plan tracks eligibility for the people who are actually your employees: part-time stylists averaged over lookback measurement periods, full-timers offered coverage on schedule, and hours data that answers the question before a filing deadline asks it. Booth renters stay off the benefits roster entirely, which is exactly where properly classified renters belong. Where your headcount creates ACA filing obligations, Forms 1094-C and 1095-C are produced for you.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Continuation events without a compliance library</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Stylists move salons; it is the industry. When a covered employee leaves, federal COBRA or your state&apos;s continuation rules decide what notices are owed and when, and the thresholds differ for smaller employers. That scoping happens exactly on your discovery call, and afterward departures trigger the right notices on the right timelines without the owner researching anything.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a benefits team for a business without a back office</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes changes, and chases carrier updates, while a Benefits Auditing Analyst checks your data for quiet money leaks: former staff still on the invoice, elections that never reached the carrier, deduction mismatches. For a salon competing for talent against chains with HR departments, offering real benefits without absorbing the admin is the whole point.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment online. Software + ACA Compliance adds part-time eligibility tracking and required filings. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Commission and tip payroll the bigger fire? That is <Link href="/services/managed-payroll/salon-spa">managed payroll for salons and spas</Link>; for renter agreements and staff policies, see <Link href="/services/hr-outsourcing/salon-spa">salon and spa HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Salon and spa benefits administration, answered</h2>
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
