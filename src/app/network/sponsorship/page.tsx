import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sponsorship | Business Executive Group',
  description: 'Sponsor BEG events and reach 1,500+ DFW entrepreneurs. Build brand visibility with decision-makers in the Dallas-Fort Worth business community.',
  alternates: {
    canonical: 'https://www.beghr.com/network/sponsorship',
  },
  openGraph: {
    title: 'Sponsorship | Business Executive Group',
    description: 'Sponsor BEG events and reach 1,500+ DFW entrepreneurs. Build brand visibility with decision-makers in the Dallas-Fort Worth business community.',
    url: 'https://www.beghr.com/network/sponsorship',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Sponsorship | Business Executive Group', description: 'Sponsor BEG events and reach 1,500+ DFW entrepreneurs. Build brand visibility with decision-makers in the Dallas-Fort Worth business community.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const tiers = [
  {
    name: 'Bronze Sponsor',
    emoji: '\u{1F949}',
    price: '$500',
    tagline: 'For businesses looking to support the community and gain exposure.',
    includesLabel: 'Includes',
    image: '/assets/sponsorship/bronze-tier.png',
    benefits: [
      'Logo placement on event signage and digital materials',
      'Recognition in pre-event email and social media',
      'One complimentary event ticket',
      'Included in the post-event thank-you message',
    ],
  },
  {
    name: 'Silver Sponsor',
    emoji: '\u{1F948}',
    price: '$1,000',
    tagline: 'For organizations seeking deeper engagement and brand visibility.',
    includesLabel: 'All Bronze benefits, plus',
    image: '/assets/sponsorship/silver-tier.png',
    benefits: [
      '2-minute spotlight segment during the event',
      'Logo on the event landing page with a clickable link',
      'Verbal recognition at event kickoff',
      'Two complimentary event tickets',
      'Branded materials in attendee gift bags',
    ],
  },
  {
    name: 'Gold Sponsor',
    emoji: '\u{1F947}',
    price: '$1,500',
    tagline: 'For premium partners who want to lead the conversation.',
    includesLabel: 'All Silver benefits, plus',
    image: '/assets/sponsorship/gold-tier.png',
    benefits: [
      '5-8 minute spotlight segment during the event',
      'Premium logo placement on all event collateral',
      'Four complimentary event tickets',
      'Option to host a branded activity or giveaway',
      'Featured post-event highlight on social channels',
    ],
  },
  {
    name: 'Platinum Sponsor',
    emoji: '\u{1F48E}',
    price: '$3,000',
    tagline: 'The top partnership tier for maximum visibility and recognition.',
    includesLabel: 'All Gold benefits, plus',
    image: '/assets/sponsorship/platinum-tier.png',
    benefits: [
      'Headline sponsor recognition across all event materials',
      'Prominent logo on the stage backdrop and event program',
      'Up to a 15-minute keynote or featured session',
      'Six complimentary event tickets',
      'Priority branded materials in attendee gift bags',
      'Dedicated spotlight in the post-event press release',
      'Platinum recognition across all social campaigns',
    ],
  },
];

const faqs = [
  {
    q: 'How much does it cost to sponsor a BEG event?',
    a: 'BEG event sponsorships range from $500 for Bronze to $3,000 for Platinum. Each tier includes everything in the tier below it, adding more event tickets, stage time, and brand visibility as the price increases.',
  },
  {
    q: 'What is the difference between the sponsorship tiers?',
    a: 'The four tiers are cumulative: Silver includes all Bronze benefits, Gold includes all Silver benefits, and Platinum includes all Gold benefits. Moving up a tier adds more complimentary tickets, longer stage time, and higher-visibility logo placement.',
  },
  {
    q: 'How do I become a BEG event sponsor?',
    a: 'Book a 15-minute call with our team. We will confirm which tier fits your goals and budget, lock in an upcoming event date, and handle the logo and materials collection ahead of time.',
  },
  {
    q: 'Do sponsors get complimentary event tickets?',
    a: 'Yes. Every tier includes at least one complimentary ticket, from one ticket at Bronze up to six tickets at Platinum, so your team can attend and network alongside the 1,500+ member community.',
  },
  {
    q: 'Can I sponsor more than one BEG event?',
    a: 'Yes. Many sponsors support BEG events on a recurring basis. Mention this on your discovery call and we will work out a schedule and pricing across multiple months.',
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: 'https://www.beghr.com/network/sponsorship',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      <section className="hero">
        <div className="container">
          <div className="hero-single">
              <p className="eyebrow">Network &middot; Sponsorship</p>
              <h1>Put your brand in front of DFW decision-makers.</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                BEG events bring together 1,500+ entrepreneurs and business owners across Dallas-Fort Worth.
                Sponsorship puts your brand in the room where deals get made.
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn--gold"
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Sponsorship
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="tldr" style={{ maxWidth: '660px', margin: '0 auto', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.1rem 1.25rem', fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
            <strong>The short version:</strong> Sponsor a BEG event for $500 to $3,000 depending on the tier you choose. Every tier includes logo placement, complimentary tickets, and social recognition, with stage time and headline billing added at the higher tiers.
          </div>
        </div>
      </section>

      {/* AEO QUESTION HEADING */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What do BEG event sponsorships include?</h2>
          <p style={{ marginTop: '1rem', color: '#5A6377', lineHeight: 1.75 }}>
            BEG sponsorships include logo placement, complimentary event tickets, and social media recognition at every tier, with keynote time, gift bag placement, and headline billing added at the higher tiers. Every event reaches BEG&apos;s network of 1,500+ Dallas-Fort Worth entrepreneurs and business owners.
          </p>
        </div>
      </section>

      {/* SPONSORSHIP TIERS */}
      <section className="section section--soft">
        <div className="container">
          <div className="head center">
            <p className="eyebrow">Sponsorship Tiers</p>
            <h2>Four ways to put your brand in front of the room.</h2>
          </div>

          <div className="cards" style={{ marginTop: '2.5rem' }}>
            {tiers.map((tier) => (
              <div className="card" key={tier.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tier.image}
                  alt={`${tier.name} package`}
                  style={{ width: '100%', height: '160px', objectFit: 'contain', background: '#F5F8FC', borderRadius: '10px', marginBottom: '1.25rem' }}
                />
                <h3>{tier.emoji} {tier.name}</h3>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold-deep)', margin: '4px 0 10px' }}>
                  {tier.price}
                </p>
                <p style={{ color: 'var(--slate)', fontSize: '0.9rem', marginBottom: '14px' }}>{tier.tagline}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ink)', marginBottom: '10px' }}>
                  {tier.includesLabel}
                </p>
                <ul>
                  {tier.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--slate)', fontSize: '0.9rem' }}>
            Not sure which tier fits? <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-deep)', fontWeight: 600 }}>Book a 15-minute call</a> and we will match you to one.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center">
            <p className="eyebrow">Common Questions</p>
            <h2>Sponsorship FAQ</h2>
          </div>
          <div className="faq" style={{ marginTop: '2rem' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '620px', textAlign: 'center' }}>
          <p style={{ color: 'var(--slate)' }}>
            Not ready to sponsor yet? <Link href="/network/membership" style={{ color: 'var(--gold-deep)', fontWeight: 600 }}>Learn about BEG membership</Link> instead.
          </p>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ maxWidth: '620px' }}>
          <p className="eyebrow">Partner With Us</p>
          <h2 style={{ color: '#fff' }}>Let&apos;s talk sponsorship.</h2>
          <p style={{ color: '#C7D2E5', marginTop: '16px' }}>
            Book a 15-minute call with our team to explore sponsorship opportunities with Business Executive Group.
          </p>
          <div style={{ marginTop: '26px', textAlign: 'center' }}>
            <a
              className="btn btn--gold"
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
