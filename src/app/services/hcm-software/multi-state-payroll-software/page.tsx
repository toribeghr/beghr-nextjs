import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Multi-State Payroll Software | BEG',
  description: 'Multi-state payroll software for tax registration, filing, remote workforces, and reciprocity. iSolved multi-state payroll configured and supported by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/multi-state-payroll-software' },
  openGraph: {
    title: 'Multi-State Payroll Software | BEG',
    description: 'Multi-state payroll software for tax registration, filing, remote workforces, and reciprocity. iSolved multi-state payroll configured and supported by BEG.',
    url: 'https://beghr.com/services/hcm-software/multi-state-payroll-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Multi-State Payroll Software | BEG', description: 'Multi-state payroll software for tax registration, filing, remote workforces, and reciprocity. iSolved multi-state payroll configured and supported by BEG.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does multi-state payroll software do?',
    a: 'Multi-state payroll software calculates, withholds, and files payroll taxes across every state where you have employees. It applies the right state and local rules, handles reciprocity between states, and keeps registrations and filings current as your workforce spreads out.',
  },
  {
    q: 'How does iSolved handle multi-state payroll?',
    a: 'iSolved applies each employee’s correct work-state and resident-state tax rules automatically, withholds accordingly, and files in every jurisdiction. Because payroll, HR, and time are one platform, a remote hire in a new state is set up correctly from the first pay run.',
  },
  {
    q: 'Can iSolved handle state tax registration and filing?',
    a: 'iSolved files state and local payroll taxes in the jurisdictions where you operate and supports the registration process new states require. BEG guides you through registering in new states so your filings are accurate and on time.',
  },
  {
    q: 'How does multi-state payroll handle remote employees?',
    a: 'Remote employees often live in one state and report to an office in another, which changes withholding. Multi-state payroll software assigns the correct work and resident state to each person so the right taxes are withheld and filed for every location.',
  },
  {
    q: 'What is reciprocity in multi-state payroll?',
    a: 'Reciprocity is an agreement between certain states that lets an employee pay income tax only to their home state. Multi-state payroll software applies these agreements automatically so cross-border employees are not taxed twice or withheld incorrectly.',
  },
  {
    q: 'Why use BEG to implement multi-state payroll?',
    a: 'BEG configures your state tax setup, reciprocity rules, and filing requirements, then supports you as you hire into new states. You work with one BEG contact who knows your footprint rather than a general support queue.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'Multi-State Payroll Software', item: 'https://beghr.com/services/hcm-software/multi-state-payroll-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://beghr.com/services/hcm-software/multi-state-payroll-software',
};

export default function MultiStatePayrollSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Multi-State Payroll</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Multi-State Payroll Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            A remote workforce means payroll tax in states you never planned for. The right software registers, withholds, and files correctly everywhere you hire. Here is what to look for and how iSolved plus BEG handles it.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="tldr" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Strong multi-state payroll software registers you in new states, withholds the right work-state and resident-state taxes, applies reciprocity, and files everywhere you have employees. iSolved does this on one connected platform, and BEG configures and supports your state tax setup as your remote workforce grows.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is multi-state payroll software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Multi-state payroll software calculates and files payroll taxes correctly across every state and locality where you employ people. It tracks each employee’s work state and resident state, applies the right withholding, handles reciprocity agreements between states, and produces the filings each jurisdiction requires.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for automatic work-state and resident-state tax handling, support for the registration process new states demand, built-in reciprocity logic, local tax handling where it applies, and on-time filing in every jurisdiction. The test is whether adding an employee in a new state is a clean setup or a manual research project for your team.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The problem arrived with remote work. The moment you hire someone who lives in a state where you have no presence, you generally have to register there, withhold that state’s taxes, and file there. Multiply that by a distributed team and you face a patchwork of registrations, rates, local taxes, and filing calendars that no spreadsheet keeps straight for long.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The risk is real. Wrong withholding frustrates employees at tax time, missed registrations and late filings draw penalties, and reciprocity mistakes can tax someone twice. Multi-state payroll software solves this by encoding the rules so the right thing happens automatically for each person, in each state, on each pay run.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles multi-state payroll as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved assigns each employee the correct work state and resident state, withholds the right taxes, applies reciprocity automatically, and files in every jurisdiction you operate in. Because payroll, HR, and time all live on one connected platform, a remote hire in a new state is set up correctly from the first pay run, with no separate tax tool to reconcile.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            That connected design is what keeps a distributed workforce compliant. Because more than 7 million employees are managed on iSolved, the platform is proven across the multi-state and remote tax scenarios employers run into as they grow beyond a single location.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Multi-state payroll is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and your team can check tax setup or filing status through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than hunting through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Multi-state setup is where expertise pays off. State registrations, local taxes, reciprocity agreements, and filing requirements all have to be configured for your specific footprint. BEG implements, configures, and supports your state tax setup, and guides you through registering as you hire into new states.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in multi-state payroll that return shows up where correct withholding and on-time filing prevent penalties and the cleanup that follows. When you hire in a new state or your footprint shifts, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single answer fits every employer, and an honest one should say so. A company with everyone in one state has simple needs. The value of true multi-state payroll grows with the number of states you employ in, how distributed your remote team is, and whether local taxes and reciprocity are in play.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many states you currently pay in, how fast your remote footprint is expanding, whether you face local taxes or reciprocity, and whether you want a partner managing registrations and filings or prefer to handle them yourself. iSolved is a strong fit when a multi-state or remote workforce is in the picture and you want BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <div className="faq">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="faq-item" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                <h3 style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>{q}</h3>
                <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See multi-state payroll in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through where you employ people, your registrations, and reciprocity, and show you what iSolved plus BEG looks like for your footprint.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
