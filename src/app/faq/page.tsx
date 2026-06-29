import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll FAQ | Common Questions Answered | BEG',
  description: 'Answers to the most common payroll questions: managed payroll, outsourcing, compliance, and switching providers. From Business Executive Group.',
  alternates: {
    canonical: 'https://www.beghr.com/faq',
  },
  openGraph: {
    title: 'Payroll FAQ | Common Questions Answered | BEG',
    description: 'Answers to the most common payroll questions: managed payroll, outsourcing, compliance, and switching providers. From Business Executive Group.',
    url: 'https://www.beghr.com/faq',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll FAQ | Common Questions Answered | BEG',
    description: 'Answers to the most common payroll questions: managed payroll, outsourcing, compliance, and switching providers.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqSections = [
  {
    title: 'Managed Payroll FAQ',
    desc: '12 detailed answers on what managed payroll is, how much it costs, what is included, implementation timelines, multi-state coverage, and how it differs from a PEO.',
    href: '/faq/managed-payroll',
    questions: ['What is managed payroll?', 'How much does managed payroll cost?', 'How long does implementation take?', 'Can you handle multi-state payroll?'],
    tag: '12 Questions',
  },
  {
    title: 'Payroll Outsourcing FAQ',
    desc: '10 answers covering what payroll outsourcing is, the real costs, risks, what a payroll outsourcing company handles, and how to switch providers.',
    href: '/faq/payroll-outsourcing',
    questions: ['What is payroll outsourcing?', 'What are the risks of outsourcing payroll?', 'What does a payroll outsourcing company handle?', 'Is payroll outsourcing right for my size company?'],
    tag: '10 Questions',
  },
  {
    title: 'Payroll Compliance FAQ',
    desc: '10 answers on federal and state compliance: W-2 deadlines, 941 deposit rules, FLSA requirements, multi-state obligations, and what managed payroll handles for you.',
    href: '/faq/payroll-compliance',
    questions: ['What are the main federal payroll compliance requirements?', 'What is the W-2 filing deadline?', 'How does multi-state payroll compliance work?', 'What are 941 payroll tax deposit deadlines?'],
    tag: '10 Questions',
  },
  {
    title: 'Switching Payroll Providers FAQ',
    desc: '10 answers on how to transition payroll without disruption: timing, data migration, mid-quarter switches, what to hand off, and what BEG\'s onboarding looks like.',
    href: '/faq/switching-payroll-providers',
    questions: ['When is the best time to switch payroll providers?', 'Will there be any disruption to employee pay?', 'How do you handle mid-year payroll history?', 'What is BEG\'s onboarding process?'],
    tag: '10 Questions',
  },
];

export default function FaqHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.beghr.com/faq' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Payroll FAQ</p>
            <h1>Common payroll questions, answered in full</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              Detailed answers to the questions employers ask most about managed payroll, outsourcing, compliance, and switching providers. No one-liners. Full paragraphs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '2rem' }}>
            {faqSections.map(({ title, desc, href, questions, tag }) => (
              <div key={href} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="reveal">
                <div>
                  <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>{tag}</span>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: '700', lineHeight: '1.35', marginBottom: '0.6rem' }}>{title}</h2>
                  <p style={{ fontSize: '0.91rem', color: '#555555', lineHeight: '1.65' }}>{desc}</p>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.83rem', fontWeight: '700', color: '#000000', marginBottom: '0.5rem' }}>Sample questions:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {questions.map((q) => (
                      <li key={q} style={{ fontSize: '0.85rem', color: '#555555', paddingLeft: '1rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#ECAC60', fontWeight: '700' }}>Q</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={href} className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.9rem', padding: '0.6rem 1.4rem' }}>
                  Read All {tag.split(' ')[0]} Questions &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow">Did Not Find Your Answer?</p>
          <h2>Book a free 15-minute call. Ask anything about managed payroll.</h2>
          <p style={{ color: '#555555', lineHeight: '1.7', margin: '1rem 0 2rem' }}>
            A BEG payroll specialist will answer your specific questions and tell you what <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>managed payroll</Link> would cost for your team. No commitment required.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free 15-Minute Call
          </Link>
        </div>
      </section>
    </>
  );
}
