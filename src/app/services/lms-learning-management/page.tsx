import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import InlineSearch from '@/components/InlineSearch';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Learning Management System (LMS) for Growing Teams | BEG',
  description: 'Still training with sign-in sheets and scattered videos? BEG resells and configures isolved Learn & Grow so you assign, track, and prove training, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/lms-learning-management' },
  openGraph: {
    title: 'Learning Management System (LMS) for Growing Teams | BEG',
    description: 'Still training with sign-in sheets and scattered videos? BEG resells and configures isolved Learn & Grow so you assign, track, and prove training, nationwide.',
    url: 'https://www.beghr.com/services/lms-learning-management',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Learning Management System (LMS) for Growing Teams | BEG', description: 'Still training with sign-in sheets and scattered videos? BEG resells and configures isolved Learn & Grow so you assign, track, and prove training, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('lms-learning-management');

const FAQS: [string, string][] = [
  [
    'What is a learning management system?',
    'A learning management system, or LMS, is software that hosts your training courses, assigns them to the right people, and tracks who completed what. It replaces sign-in sheets, scattered videos, and spreadsheets with one system of record for training.',
  ],
  [
    'Is this isolved Learn & Grow?',
    'Yes. BEG resells, configures, implements, and supports isolved Learn & Grow, the learning management module built into the isolved platform. It is the software running behind this service.',
  ],
  [
    'Does BEG build the software?',
    'No. isolved builds and maintains Learn & Grow. BEG resells it, configures it to your roles and training requirements, and provides ongoing support so your team gets it running correctly.',
  ],
  [
    'Can we upload our own training content?',
    'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes, and add social learning and gamification to keep people engaged.',
  ],
  [
    'What does it cost?',
    'isolved Learn & Grow is bundled into the Grow tier of isolved HCM at no separate module charge. Your total is the Grow tier per-employee rate, which starts at $45 per employee per month and includes the full talent suite alongside Learning Management. Answer a few questions and get an instant estimate on screen in about 90 seconds, no call required.',
  ],
  [
    'What is a learning management system used for?',
    'A learning management system is used to host training courses, assign them by role, deliver them on any device, and track who completed what. Companies use it for compliance training, onboarding, and ongoing professional development in one place.',
  ],
  [
    'Is isolved Learn & Grow a good LMS for a small business?',
    'Yes. Because Learn & Grow is a module on the isolved platform, a small business gets a full LMS without buying and integrating separate software. BEG configures and supports it, and it is bundled into the Grow tier of isolved HCM at no separate module charge.',
  ],
  [
    'Do you serve my state?',
    'Yes. BEG supports learning management for companies in all 50 states, configured and delivered remotely.',
  ],
];

export default function LearningManagementSystemPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <ServicePage
        showHeroImage={false}
        eyebrow="Learning Management System · Powered by isolved"
        title="Still training your team with sign-in sheets, scattered videos, and hope?"
        description="When training lives in binders, inboxes, and one-off videos, people fall behind, compliance lapses, and you cannot prove who completed what. isolved Learn & Grow, resold and configured by BEG, puts every course, assignment, and completion record in one system. Train faster, stay compliant, and prove it, in all 50 states, without adding software to manage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
          { value: 'All 50', label: 'States served, remote nationwide' },
          { value: 'One system', label: 'Courses, assignments, and records in one place' },
          { value: 'isolved', label: 'Learn & Grow, resold and configured by BEG' },
        ]}
      >
        {/* SITE SEARCH */}
        <InlineSearch
          vertical="LMS"
          heading="Looking for something specific?"
          subhead="Search our learning management pages and guides."
          chips={['LMS pricing', 'compliance training', 'employee onboarding', 'isolved Learn & Grow']}
        />
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Scattered Training Actually Costs You</p>
              <h2>Every course tracked by hand is a compliance gap waiting to happen.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '~$1,200',
                  label: 'Average spend on training per employee per year',
                  sub: 'Most organizations already invest in training. Scattered across binders and one-off videos, that spend is impossible to measure or prove.',
                },
                {
                  stat: 'Compliance',
                  label: 'Lapsed training is a liability',
                  sub: 'Safety, harassment, and industry-specific requirements do not wait. A missed renewal becomes a risk the moment someone asks for proof.',
                },
                {
                  stat: '1 Folder',
                  label: 'Is not a training system',
                  sub: 'Videos in a drive and sign-in sheets in a binder tell you almost nothing about who completed, passed, and is due to renew.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="container" style={{ maxWidth: '820px' }}>
          <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
            Source:{' '}
            <a href="https://www.td.org/research-reports" target="_blank" rel="noopener noreferrer">ATD, State of the Industry, direct learning expenditure per employee</a>.
          </p>
        </div>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How It Works</p>
              <h2>From scattered training to one tracked system in three steps</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  num: '01',
                  title: 'BEG configures isolved Learn & Grow',
                  body: 'We set up Learn & Grow around your roles, required courses, and renewal schedules, so it fits how your team actually trains from day one.',
                },
                {
                  num: '02',
                  title: 'Assign courses and upload your own content',
                  body: 'Use the isolved course library or upload your own videos, documents, and quizzes, then assign them by role, location, or team.',
                },
                {
                  num: '03',
                  title: 'Track completions and prove compliance',
                  body: 'Every completion, score, and due date is tracked automatically, so your people stay current and you can produce the record on demand.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What You Get</p>
              <h2>Everything inside isolved Learn &amp; Grow, configured for your team</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
                {
                  heading: 'Course library and content upload',
                  body: 'Start with the isolved course library or upload your own videos, documents, slide decks, and quizzes, all in one place.',
                },
                {
                  heading: 'Assignments by role and due date',
                  body: 'Assign required training by role, location, or team, with due dates, renewals, and automatic reminders so nothing lapses.',
                },
                {
                  heading: 'Social learning and gamification',
                  body: 'Keep people engaged with social learning and gamification built into the platform, not bolted on.',
                },
                {
                  heading: 'Completion tracking and reporting',
                  body: 'See who completed, who passed, and who is due to renew in one dashboard, so an audit becomes a report you pull.',
                },
                {
                  heading: 'Mobile and connected to HR',
                  body: 'Learners train from any device, and records connect to the rest of isolved so onboarding, HR, and payroll stay in sync.',
                },
              ].map(({ heading, body }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000000' }}>{heading}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Why BEG</p>
              <h2>A reseller who configures it, supports it, and connects it to the rest of your stack</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  title: 'We configure and support it',
                  body: 'BEG resells isolved Learn & Grow and does the setup: your roles, your courses, your team trained on it. When something needs adjusting, BEG is who you call.',
                },
                {
                  title: 'National remote delivery',
                  body: 'Every client is set up and supported remotely, so it works the same whether your team is in one office or spread across the country.',
                },
                {
                  title: 'Connected to HR and payroll',
                  body: 'Training does not stand alone. It connects to onboarding, HR, and payroll inside isolved, so a completed course and a new hire live in the same system.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* BY INDUSTRY */}
        <section className="section section--soft">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">By Industry</p>
              <h2>Learning management built for how your industry actually trains</h2>
            </div>
            <div className="cards">
              <Link href="/services/lms-learning-management/healthcare" className="card-link reveal">
                <span className="tag">Healthcare</span>
                <h3>Healthcare</h3>
                <p>Assign, track, and prove HIPAA, bloodborne pathogens, and clinical competency training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/construction" className="card-link reveal">
                <span className="tag">Construction &amp; Trades</span>
                <h3>Construction &amp; Trades</h3>
                <p>Assign, track, and prove OSHA, jobsite safety, and equipment certification training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/multi-unit-restaurant" className="card-link reveal">
                <span className="tag">Restaurants &amp; Hospitality</span>
                <h3>Restaurants &amp; Hospitality</h3>
                <p>Assign, track, and prove food safety, alcohol service, and harassment-prevention training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/senior-care" className="card-link reveal">
                <span className="tag">Senior Care</span>
                <h3>Senior Care</h3>
                <p>Assign, track, and prove resident care, dementia, and state-mandated caregiver training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/home-health" className="card-link reveal">
                <span className="tag">Home Health</span>
                <h3>Home Health</h3>
                <p>Assign, track, and prove in-home care, HIPAA, and aide certification training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/manufacturing" className="card-link reveal">
                <span className="tag">Manufacturing</span>
                <h3>Manufacturing</h3>
                <p>Assign, track, and prove OSHA, machine safety, and quality-standard training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/accounting-cpa" className="card-link reveal">
                <span className="tag">Accounting &amp; CPA Firms</span>
                <h3>Accounting &amp; CPA Firms</h3>
                <p>Assign, track, and prove CPE, ethics, and data-security training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/agriculture" className="card-link reveal">
                <span className="tag">Agriculture</span>
                <h3>Agriculture</h3>
                <p>Assign, track, and prove equipment safety, chemical handling, and worker-protection training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/architecture" className="card-link reveal">
                <span className="tag">Architecture</span>
                <h3>Architecture</h3>
                <p>Assign, track, and prove licensure CE, software, and standards training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/auto-dealership" className="card-link reveal">
                <span className="tag">Auto Dealerships</span>
                <h3>Auto Dealerships</h3>
                <p>Assign, track, and prove sales certification, F&amp;I compliance, and safety training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/brewery" className="card-link reveal">
                <span className="tag">Breweries</span>
                <h3>Breweries</h3>
                <p>Assign, track, and prove alcohol service, food safety, and equipment safety training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/cannabis" className="card-link reveal">
                <span className="tag">Cannabis</span>
                <h3>Cannabis</h3>
                <p>Assign, track, and prove state compliance, seed-to-sale, and safety training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/childcare" className="card-link reveal">
                <span className="tag">Childcare</span>
                <h3>Childcare</h3>
                <p>Assign, track, and prove state licensing, CPR, and child-safety training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/church" className="card-link reveal">
                <span className="tag">Churches &amp; Faith-Based</span>
                <h3>Churches &amp; Faith-Based</h3>
                <p>Assign, track, and prove child-protection, safety, and background-check training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/education" className="card-link reveal">
                <span className="tag">Education</span>
                <h3>Education</h3>
                <p>Assign, track, and prove mandated-reporter, safety, and professional-development training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/engineering" className="card-link reveal">
                <span className="tag">Engineering</span>
                <h3>Engineering</h3>
                <p>Assign, track, and prove licensure PDH, safety, and standards training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/events" className="card-link reveal">
                <span className="tag">Events</span>
                <h3>Events</h3>
                <p>Assign, track, and prove safety, alcohol service, and crowd-management training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/executive" className="card-link reveal">
                <span className="tag">Executive &amp; Leadership</span>
                <h3>Executive &amp; Leadership</h3>
                <p>Assign, track, and prove leadership, compliance, and harassment-prevention training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/finance" className="card-link reveal">
                <span className="tag">Finance</span>
                <h3>Finance</h3>
                <p>Assign, track, and prove compliance, anti-money-laundering, and data-security training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/fitness" className="card-link reveal">
                <span className="tag">Fitness &amp; Gyms</span>
                <h3>Fitness &amp; Gyms</h3>
                <p>Assign, track, and prove CPR, certification, and safety training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/franchise" className="card-link reveal">
                <span className="tag">Franchise</span>
                <h3>Franchise</h3>
                <p>Assign, track, and prove brand-standard, safety, and compliance training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/government-contractor" className="card-link reveal">
                <span className="tag">Government Contractors</span>
                <h3>Government Contractors</h3>
                <p>Assign, track, and prove security, ethics, and compliance training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/home-services" className="card-link reveal">
                <span className="tag">Home Services</span>
                <h3>Home Services</h3>
                <p>Assign, track, and prove safety, licensing, and customer-service training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/insurance-agency" className="card-link reveal">
                <span className="tag">Insurance Agencies</span>
                <h3>Insurance Agencies</h3>
                <p>Assign, track, and prove licensing CE, compliance, and product training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/legal" className="card-link reveal">
                <span className="tag">Legal</span>
                <h3>Legal</h3>
                <p>Assign, track, and prove CLE, ethics, and data-security training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/marketing-agency" className="card-link reveal">
                <span className="tag">Marketing Agencies</span>
                <h3>Marketing Agencies</h3>
                <p>Assign, track, and prove tools, compliance, and onboarding training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/property-management" className="card-link reveal">
                <span className="tag">Property Management</span>
                <h3>Property Management</h3>
                <p>Assign, track, and prove fair-housing, safety, and compliance training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/salon-spa" className="card-link reveal">
                <span className="tag">Salon &amp; Spa</span>
                <h3>Salon &amp; Spa</h3>
                <p>Assign, track, and prove licensing, sanitation, and safety training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/security" className="card-link reveal">
                <span className="tag">Security</span>
                <h3>Security</h3>
                <p>Assign, track, and prove state licensing, use-of-force, and safety training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/staffing-agency" className="card-link reveal">
                <span className="tag">Staffing Agencies</span>
                <h3>Staffing Agencies</h3>
                <p>Assign, track, and prove client-specific, safety, and compliance training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/technology" className="card-link reveal">
                <span className="tag">Technology</span>
                <h3>Technology</h3>
                <p>Assign, track, and prove security, compliance, and tools training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/trades" className="card-link reveal">
                <span className="tag">Skilled Trades</span>
                <h3>Skilled Trades</h3>
                <p>Assign, track, and prove safety, certification, and equipment training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/trucking" className="card-link reveal">
                <span className="tag">Trucking</span>
                <h3>Trucking</h3>
                <p>Assign, track, and prove DOT, safety, and compliance training in one system.</p>
              </Link>
              <Link href="/services/lms-learning-management/veterinary" className="card-link reveal">
                <span className="tag">Veterinary</span>
                <h3>Veterinary</h3>
                <p>Assign, track, and prove clinical, safety, and OSHA training in one system.</p>
              </Link>
            </div>
          </div>
        </section>
        {/* BY STATE */}
        <section className="section">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">By State</p>
              <h2>Employee training compliance, state by state</h2>
            </div>
            <div className="cards">
              <Link href="/services/lms-learning-management/alabama" className="card-link reveal">
                <span className="tag">Alabama</span>
                <h3>Alabama</h3>
                <p>Employee training compliance for Alabama employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/alaska" className="card-link reveal">
                <span className="tag">Alaska</span>
                <h3>Alaska</h3>
                <p>Employee training compliance for Alaska employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/arizona" className="card-link reveal">
                <span className="tag">Arizona</span>
                <h3>Arizona</h3>
                <p>Employee training compliance for Arizona employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/arkansas" className="card-link reveal">
                <span className="tag">Arkansas</span>
                <h3>Arkansas</h3>
                <p>Employee training compliance for Arkansas employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/california" className="card-link reveal">
                <span className="tag">California</span>
                <h3>California</h3>
                <p>Employee training compliance for California employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/colorado" className="card-link reveal">
                <span className="tag">Colorado</span>
                <h3>Colorado</h3>
                <p>Employee training compliance for Colorado employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/connecticut" className="card-link reveal">
                <span className="tag">Connecticut</span>
                <h3>Connecticut</h3>
                <p>Employee training compliance for Connecticut employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/delaware" className="card-link reveal">
                <span className="tag">Delaware</span>
                <h3>Delaware</h3>
                <p>Employee training compliance for Delaware employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/florida" className="card-link reveal">
                <span className="tag">Florida</span>
                <h3>Florida</h3>
                <p>Employee training compliance for Florida employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/georgia" className="card-link reveal">
                <span className="tag">Georgia</span>
                <h3>Georgia</h3>
                <p>Employee training compliance for Georgia employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/hawaii" className="card-link reveal">
                <span className="tag">Hawaii</span>
                <h3>Hawaii</h3>
                <p>Employee training compliance for Hawaii employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/idaho" className="card-link reveal">
                <span className="tag">Idaho</span>
                <h3>Idaho</h3>
                <p>Employee training compliance for Idaho employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/illinois" className="card-link reveal">
                <span className="tag">Illinois</span>
                <h3>Illinois</h3>
                <p>Employee training compliance for Illinois employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/indiana" className="card-link reveal">
                <span className="tag">Indiana</span>
                <h3>Indiana</h3>
                <p>Employee training compliance for Indiana employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/iowa" className="card-link reveal">
                <span className="tag">Iowa</span>
                <h3>Iowa</h3>
                <p>Employee training compliance for Iowa employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/kansas" className="card-link reveal">
                <span className="tag">Kansas</span>
                <h3>Kansas</h3>
                <p>Employee training compliance for Kansas employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/kentucky" className="card-link reveal">
                <span className="tag">Kentucky</span>
                <h3>Kentucky</h3>
                <p>Employee training compliance for Kentucky employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/louisiana" className="card-link reveal">
                <span className="tag">Louisiana</span>
                <h3>Louisiana</h3>
                <p>Employee training compliance for Louisiana employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/maine" className="card-link reveal">
                <span className="tag">Maine</span>
                <h3>Maine</h3>
                <p>Employee training compliance for Maine employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/maryland" className="card-link reveal">
                <span className="tag">Maryland</span>
                <h3>Maryland</h3>
                <p>Employee training compliance for Maryland employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/massachusetts" className="card-link reveal">
                <span className="tag">Massachusetts</span>
                <h3>Massachusetts</h3>
                <p>Employee training compliance for Massachusetts employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/michigan" className="card-link reveal">
                <span className="tag">Michigan</span>
                <h3>Michigan</h3>
                <p>Employee training compliance for Michigan employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/minnesota" className="card-link reveal">
                <span className="tag">Minnesota</span>
                <h3>Minnesota</h3>
                <p>Employee training compliance for Minnesota employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/mississippi" className="card-link reveal">
                <span className="tag">Mississippi</span>
                <h3>Mississippi</h3>
                <p>Employee training compliance for Mississippi employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/missouri" className="card-link reveal">
                <span className="tag">Missouri</span>
                <h3>Missouri</h3>
                <p>Employee training compliance for Missouri employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/montana" className="card-link reveal">
                <span className="tag">Montana</span>
                <h3>Montana</h3>
                <p>Employee training compliance for Montana employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/nebraska" className="card-link reveal">
                <span className="tag">Nebraska</span>
                <h3>Nebraska</h3>
                <p>Employee training compliance for Nebraska employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/nevada" className="card-link reveal">
                <span className="tag">Nevada</span>
                <h3>Nevada</h3>
                <p>Employee training compliance for Nevada employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/new-hampshire" className="card-link reveal">
                <span className="tag">New Hampshire</span>
                <h3>New Hampshire</h3>
                <p>Employee training compliance for New Hampshire employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/new-jersey" className="card-link reveal">
                <span className="tag">New Jersey</span>
                <h3>New Jersey</h3>
                <p>Employee training compliance for New Jersey employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/new-mexico" className="card-link reveal">
                <span className="tag">New Mexico</span>
                <h3>New Mexico</h3>
                <p>Employee training compliance for New Mexico employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/new-york" className="card-link reveal">
                <span className="tag">New York</span>
                <h3>New York</h3>
                <p>Employee training compliance for New York employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/north-carolina" className="card-link reveal">
                <span className="tag">North Carolina</span>
                <h3>North Carolina</h3>
                <p>Employee training compliance for North Carolina employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/north-dakota" className="card-link reveal">
                <span className="tag">North Dakota</span>
                <h3>North Dakota</h3>
                <p>Employee training compliance for North Dakota employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/ohio" className="card-link reveal">
                <span className="tag">Ohio</span>
                <h3>Ohio</h3>
                <p>Employee training compliance for Ohio employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/oklahoma" className="card-link reveal">
                <span className="tag">Oklahoma</span>
                <h3>Oklahoma</h3>
                <p>Employee training compliance for Oklahoma employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/oregon" className="card-link reveal">
                <span className="tag">Oregon</span>
                <h3>Oregon</h3>
                <p>Employee training compliance for Oregon employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/pennsylvania" className="card-link reveal">
                <span className="tag">Pennsylvania</span>
                <h3>Pennsylvania</h3>
                <p>Employee training compliance for Pennsylvania employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/rhode-island" className="card-link reveal">
                <span className="tag">Rhode Island</span>
                <h3>Rhode Island</h3>
                <p>Employee training compliance for Rhode Island employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/south-carolina" className="card-link reveal">
                <span className="tag">South Carolina</span>
                <h3>South Carolina</h3>
                <p>Employee training compliance for South Carolina employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/south-dakota" className="card-link reveal">
                <span className="tag">South Dakota</span>
                <h3>South Dakota</h3>
                <p>Employee training compliance for South Dakota employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/tennessee" className="card-link reveal">
                <span className="tag">Tennessee</span>
                <h3>Tennessee</h3>
                <p>Employee training compliance for Tennessee employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/texas" className="card-link reveal">
                <span className="tag">Texas</span>
                <h3>Texas</h3>
                <p>Employee training compliance for Texas employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/utah" className="card-link reveal">
                <span className="tag">Utah</span>
                <h3>Utah</h3>
                <p>Employee training compliance for Utah employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/vermont" className="card-link reveal">
                <span className="tag">Vermont</span>
                <h3>Vermont</h3>
                <p>Employee training compliance for Vermont employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/virginia" className="card-link reveal">
                <span className="tag">Virginia</span>
                <h3>Virginia</h3>
                <p>Employee training compliance for Virginia employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/washington" className="card-link reveal">
                <span className="tag">Washington</span>
                <h3>Washington</h3>
                <p>Employee training compliance for Washington employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/west-virginia" className="card-link reveal">
                <span className="tag">West Virginia</span>
                <h3>West Virginia</h3>
                <p>Employee training compliance for West Virginia employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/wisconsin" className="card-link reveal">
                <span className="tag">Wisconsin</span>
                <h3>Wisconsin</h3>
                <p>Employee training compliance for Wisconsin employers.</p>
              </Link>
              <Link href="/services/lms-learning-management/wyoming" className="card-link reveal">
                <span className="tag">Wyoming</span>
                <h3>Wyoming</h3>
                <p>Employee training compliance for Wyoming employers.</p>
              </Link>
            </div>
          </div>
        </section>
        {/* EXPLORE */}
        <section className="section">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">Explore</p>
              <h2>Learn more about learning management</h2>
            </div>
            <div className="cards">
              <Link href="/services/lms-learning-management/isolved-learn-grow" className="card-link reveal">
                <h3>Inside isolved Learn &amp; Grow</h3>
                <p>A closer look at the platform BEG resells, configures, and supports.</p>
              </Link>
              <Link href="/services/lms-learning-management/lms-for-compliance-training" className="card-link reveal">
                <h3>LMS for compliance training</h3>
                <p>Assign, track, and prove required training without the binder.</p>
              </Link>
              <Link href="/services/lms-learning-management/employee-onboarding-lms" className="card-link reveal">
                <h3>Employee onboarding LMS</h3>
                <p>Get new hires productive in days with a consistent onboarding path.</p>
              </Link>
              <Link href="/services/lms-learning-management/lms-vs-diy-training" className="card-link reveal">
                <h3>LMS vs DIY training</h3>
                <p>Why binders, spreadsheets, and free videos break down as you grow.</p>
              </Link>
              <Link href="/services/lms-learning-management/lms-pricing" className="card-link reveal">
                <h3>LMS pricing</h3>
                <p>How Learning Management is bundled into isolved HCM pricing.</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '760px' }}>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center' }}>
              Further reading and sources: <a href="https://en.wikipedia.org/wiki/Learning_management_system" target="_blank" rel="noopener noreferrer">Learning management system, overview</a>, <a href="https://www.isolvedhcm.com/talent-management/learning-management-system" target="_blank" rel="noopener noreferrer">isolved Learn &amp; Grow, product</a>, <a href="https://www.td.org/content/press-release/atd-research-spending-on-employee-training-remains-strong" target="_blank" rel="noopener noreferrer">ATD, employee training spend research</a>.
            </p>
          </div>
        </section>
        {/* CROSS-SILO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Rest of the Stack</p>
              <h2>Learning management is one module. BEG handles the rest too.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll eating your week?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  BEG&apos;s core service is <Link href="/services/managed-payroll">fully managed payroll</Link>: every cycle, filing, and W-2 handled, in your existing system.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">isolved HCM</Link> puts payroll, HR, time, benefits, and Learn &amp; Grow on one platform.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Hiring too?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system">Applicant tracking</Link> gets every candidate into one pipeline, then hands off into onboarding.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need HR support too?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hr-outsourcing">HR outsourcing</Link> backs up your team with certified HR professionals and a dedicated partner.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* MID-PAGE CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Learning management, answered plainly</h2>
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
