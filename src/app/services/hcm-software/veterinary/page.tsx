import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'HCM for Veterinary Practices | Instant Price Quote | BEG',
  description: 'HCM software for veterinary practices and animal hospitals: credentialed staff tracking, multi-location payroll, scheduling, and benefits administration',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/veterinary' },
  openGraph: {
    title: 'HCM for Veterinary Practices | Instant Price Quote | BEG',
    description: 'HCM software for veterinary practices and animal hospitals: credentialed staff tracking, multi-location payroll, scheduling, and benefits administration',
    url: 'https://www.beghr.com/services/hcm-software/veterinary',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM for Veterinary Practices | Instant Price Quote | BEG', description: 'HCM software for veterinary practices and animal hospitals: credentialed staff tracking, multi-location payroll, scheduling, and benefits administration', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'Can isolved track veterinary licenses and DEA registrations for clinical staff?',
    a: 'Yes. BEG configures isolved to store license types, registration numbers, and expiration dates for each clinical employee, with expiration alerts so your practice is never unknowingly operating with a lapsed credential.',
  },
  {
    q: 'Does isolved handle the pay differences between DVMs, technicians, and support staff?',
    a: 'Yes. The isolved platform supports multiple pay types in one payroll run, including salary for DVMs, hourly for technicians and receptionists, and any shift differentials you apply. BEG configures the pay structure to match how your practice compensates each role.',
  },
  {
    q: 'How does isolved handle multi-location veterinary groups?',
    a: 'The isolved platform supports multiple locations in one connected system. BEG configures each clinic as its own cost center within the platform so you get location-level labor reporting alongside consolidated group-level payroll management.',
  },
  {
    q: 'Can isolved manage scheduling for a veterinary practice with extended or emergency hours?',
    a: 'Yes. The isolved scheduling and time module supports extended hours, on-call staffing, and shift differentials. BEG configures the scheduling rules to match your clinic hours and any pay premiums for emergency or after-hours work.',
  },
  {
    q: 'What does BEG handle after implementation?',
    a: 'BEG is your dedicated support contact year-round. When you open a new location, bring on a new DVM, or face a compliance change, your BEG contact handles it. No support queues, no starting over with someone who does not know your practice.',
  },
  {
    q: 'What is the isolved Connector for Claude?',
    a: 'The only live AI integration in an HCM platform that completes actual HR tasks through a Claude AI conversation. Your practice manager can run payroll, check credential expiration dates, and pull staffing reports by describing what they need. Available now.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'HCM Software for Veterinary Practices', item: 'https://www.beghr.com/services/hcm-software/veterinary' },
  ],
};

export default function HCMVeterinary() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Veterinary</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            HCM Software for Veterinary Practices
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Veterinary practices manage credentialed clinical staff, diverse pay structures across DVMs and support roles, complex scheduling with emergency hours, and often multi-location operations. Generic HR software misses all of that. The isolved platform handles it in one connected system. BEG implements and supports it for your practice.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      {/* Pain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why Veterinary HR Is More Complex Than It Looks</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A veterinary practice looks like a straightforward small business until you get into the HR details. Your DVMs hold state licenses and DEA registrations that must stay current. Your technicians may hold CVT or RVT credentials. You have a receptionist on hourly pay, a DVM on salary, and a relief vet on a per-day rate, all running through the same payroll system. Scheduling covers standard clinic hours plus emergency on-call shifts with different pay premiums.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Multi-location veterinary groups add another layer: separate clinic cost tracking, headcount management across locations, and the need for consolidated reporting for ownership. A platform that manages all of this together, rather than leaving your practice manager to reconcile separate tools, is what reduces the administrative load and the compliance exposure.
          </p>
        </div>
      </section>

      {/* Platform fit */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What isolved Handles for a Veterinary Practice</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              { title: 'License and credential tracking', body: 'Store state license, DEA registration, and technician certification data per employee with expiration alerts. Keep your practice compliant without manual tracking.' },
              { title: 'Multi-role payroll', body: 'Run salary for DVMs, hourly for technicians and support staff, and per-shift rates for relief vets in one payroll run with accurate tax handling for each.' },
              { title: 'Scheduling with shift differentials', body: 'Manage standard clinic hours, emergency on-call shifts, and extended hours with pay differentials applied automatically based on schedule configuration.' },
              { title: 'Multi-location management', body: 'Run each clinic location in one connected platform with cost center tracking and consolidated reporting for group ownership.' },
              { title: 'Benefits administration', body: 'Manage health, dental, and voluntary benefits for your full-time clinical and support staff in the same platform as payroll.' },
              { title: 'Onboarding and talent management', body: 'Digital onboarding for new DVMs and support staff, performance tracking, and document storage all in one place.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEG */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>BEG Implements and Supports isolved for Your Practice</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Getting isolved configured correctly for a veterinary practice requires understanding your credential types, pay structures, scheduling patterns, and location setup. BEG manages that configuration from discovery through go-live, migrates your existing data, and handles the transition without interrupting a payroll cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            After go-live, BEG stays on as your dedicated support partner. When you open a new clinic, bring on a new DVM, or update scheduling rules, your BEG contact handles it. One contact, year-round, no ticket queues.
          </p>
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>The Only HCM Platform With a Claude AI Connector</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            isolved launched the Connector for Claude in June 2026. Your practice manager can run payroll, check credential expiration status, pull staffing reports, and manage employee records through a Claude AI conversation, without navigating complex menus between patient appointments.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            Chatbots answer questions. isolved does the task. For a practice manager wearing multiple hats, that difference is real and measurable every week.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{q}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>


      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See How isolved Works for a Veterinary Practice
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We walk through your staff roles, credential tracking needs, and current system, then show you what isolved handles for your practice.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'HCM technology',
            title: "isolved HCM Platform Review: Modules, Pricing, and Who It's Built For (2026)",
            excerpt: 'Full isolved platform review covering payroll, benefits, time tracking, and the Connector for Claude.',
            href: '/blog/hcm-software/isolved-platform',
          },
          {
            category: 'HR compliance',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should handle automatically.',
            href: '/blog/hcm-software/payroll-compliance',
          },
          {
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'High-ROI HR automation targets for healthcare-adjacent and clinical practice environments.',
            href: '/blog/hcm-software/hr-automation',
          },
        ]}
      />
    </main>
  );
}
