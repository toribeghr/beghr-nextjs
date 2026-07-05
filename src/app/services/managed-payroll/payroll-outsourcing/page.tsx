import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Payroll Outsourcing | Instant Quote | BEG',
  description: 'Payroll outsourcing at $25-$45 PEPM, all-inclusive. No migration, transparent pricing, dedicated support. Get an instant quote in minutes.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/payroll-outsourcing' },
  openGraph: {
    title: 'Payroll Outsourcing | Instant Quote | BEG',
    description: 'Payroll outsourcing at $25-$45 PEPM, all-inclusive. No migration, transparent pricing, dedicated support. Get an instant quote in minutes.',
    url: 'https://www.beghr.com/services/managed-payroll/payroll-outsourcing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Payroll Outsourcing | Instant Quote | BEG', description: 'Payroll outsourcing at $25-$45 PEPM, all-inclusive. No migration, transparent pricing, dedicated support. Get an instant quote in minutes.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-outsourcing');

export default function PayrollOutsourcingPage() {
  return (
    <ServicePage
      heroVideoId="3J_TApCaG1E"
      showHeroImage={false}
      eyebrow="Managed Payroll · Payroll Outsourcing"
      title="Payroll outsourcing companies, compared the right way: cost, coverage, and what is actually included."
      description="Most payroll outsourcing companies bury pricing behind a sales call and a quote that changes after onboarding. BEG runs your entire payroll operation at $25-$45 per employee per month, all-inclusive, in your existing system. No migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'PEPM, all-inclusive' },
        { value: '$500', label: 'Monthly minimum' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* WHY COMPANIES OUTSOURCE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Companies Outsource Payroll</p>
            <h2>The real cost of running payroll processing in-house</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              {
                stat: '$70K-$100K/yr',
                label: 'Fully loaded cost of one in-house payroll specialist',
                sub: 'Salary, benefits, PTO, software licensing, and training for one person to run a function that a payroll outsourcing company handles for a fraction of the cost.',
              },
              {
                stat: '5+ hrs',
                label: 'Time spent per pay cycle on data entry and corrections',
                sub: 'Every cycle: gathering hours, entering data, reviewing for errors, and fixing mistakes. That time comes directly out of whatever your team is supposed to be doing instead.',
              },
              {
                stat: 'Penalties',
                label: 'The cost of a missed filing or late deposit',
                sub: 'Federal and state payroll tax penalties start accruing the day a deposit is late. A payroll outsourcing company that owns filing accuracy removes that exposure from your desk.',
              },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', color: '#444444', lineHeight: '1.7', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Three reasons come up in almost every conversation with a company shopping payroll outsourcing companies: time, penalty risk, and expertise. Payroll rules change every year, at the federal level and in every state a company has an employee. Keeping one internal hire current on all of it, while also expecting them to run error-free cycles every single pay period, is a hard ask. Outsourcing payroll services moves that burden to a team whose entire job is staying current.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What a Fully Managed Service Covers</p>
            <h2>What you should expect from a payroll outsourcing company</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Payroll processing, every cycle', body: 'Wages, hours, deductions, and pay runs handled start to finish, on whatever schedule your company runs today: weekly, biweekly, semi-monthly, or monthly.' },
              { title: 'Federal, state, and local tax filing', body: 'Withholding, deposits, and quarterly and annual filings handled and filed on time, in every state where you have an employee.' },
              { title: 'Year-end W-2s and 1099s', body: 'Prepared, filed, and delivered without your team chasing forms or reconciling totals at year-end.' },
              { title: 'New hire reporting and compliance updates', body: 'State new hire reporting, minimum wage changes, and payroll-related regulatory updates tracked and applied without you having to monitor them.' },
              { title: 'Garnishments and deductions', body: 'Child support orders, tax levies, and other garnishments calculated and remitted correctly, on the legally required schedule.' },
              { title: 'A dedicated point of contact', body: 'One person who knows your account, not a rotating support queue or a ticket number.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{item.title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.55' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW BEG WORKS INSIDE YOUR SYSTEM */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>BEG works inside the system you already have</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We review your current payroll setup, headcount, and complexity. You get a fixed monthly cost before anything moves.' },
              { num: '02', title: 'We configure your first cycle', body: 'We work inside your existing payroll platform, whether that is isolved, another provider, or an internal system. No migration required to get started.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every filing, every compliance update, fully managed by BEG. Your team reviews and approves. We do the rest.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', color: '#444444', lineHeight: '1.7', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            One of the biggest reasons companies delay outsourcing payroll services is the assumption that it requires ripping out their current platform. It does not. BEG operates as your managed payroll team inside the system you already run, isolved included. If a platform change makes sense down the road, we can handle that too, but it is never a requirement to get started.
          </p>
        </div>
      </section>

      {/* PRICING COMPARISON */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Cost of Outsourcing Payroll</p>
            <h2>Transparent pricing vs. the way most payroll service providers quote</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>What BEG charges: $25-$45 PEPM, $500 monthly minimum</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG prices managed payroll at $25 to $45 per employee per month, all-inclusive, with a $500 monthly minimum. That rate covers payroll processing, tax filing, compliance updates, year-end W-2s, and a dedicated point of contact. There is no separate line item for filing, no upcharge for corrections, and no add-on fee revealed after you sign. The number you are quoted is the number you pay.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Why most payroll service companies do not publish pricing</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Search "payroll outsourcing companies" and almost none of the major payroll service providers list a price. That is by design: pricing is built to flex based on what a sales rep thinks you will pay, then layered with implementation fees, per-report charges, and support tiers that only get disclosed once you are mid-negotiation. It is not that outsourcing payroll services is inherently expensive to price. It is that opaque pricing gives the vendor room to charge more when a buyer has less information.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The in-house comparison</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A fully loaded in-house payroll specialist runs $70,000 to $100,000 per year once you count salary, benefits, software, and training. On a 50-employee team, BEG's fully managed service runs roughly $15,000 to $27,000 per year at $25-$45 PEPM, all-inclusive. That comparison holds even before accounting for the penalty risk and time cost of running payroll processing in-house without a dedicated specialist.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#444444', marginBottom: '1rem' }}>
              See the full breakdown on our <Link href="/services/managed-payroll/pricing">managed payroll pricing page</Link>, or run your own numbers on the <Link href="/services/managed-payroll/cost-calculator">payroll cost calculator</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO LOOK FOR */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Choosing a Provider</p>
            <h2>What to look for in a payroll outsourcing company</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Published, all-inclusive pricing</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>If a payroll service company will not tell you a price range before a sales call, treat that as a signal, not a formality. Ask specifically what is included in the base rate and what triggers an additional charge.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>No forced platform migration</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Some payroll processing companies only operate on their own proprietary software, which means switching providers means switching systems, retraining your team, and re-entering historical data. Ask whether the provider can run payroll inside the platform you already use.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A named point of contact, not a ticket queue</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Ask who handles your account after onboarding. A support inbox that assigns a different rep to every ticket is a different service model than a dedicated specialist who already knows your payroll setup.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A clear compliance track record</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Ask directly how the provider handles a missed filing or late deposit, and who is responsible for the resulting penalty. A payroll outsourcing company confident in its process will have a straightforward answer.</p>
            </div>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', color: '#444444', lineHeight: '1.7', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Curious how specific platforms stack up against each other before you commit to a provider? See our <Link href="/services/managed-payroll/adp-vs-paychex">ADP vs. Paychex comparison</Link>. And if payroll is only part of what you need managed, our <Link href="/services/hr-outsourcing">HR outsourcing services</Link> cover the rest of the employee lifecycle.
          </p>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll outsourcing companies do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Switching payroll providers means switching platforms."',
                body: 'BEG operates as your managed payroll team inside your current system, isolved or otherwise. If a platform change makes sense later, we can handle that too, but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'One transparent, all-inclusive rate.',
                objection: 'Common objection: "Payroll service providers always add fees for every little thing."',
                body: 'The $25-$45 PEPM rate is all-inclusive: payroll processing, tax filing, compliance updates, year-end W-2s, and support. One number, everything included, quoted before you sign anything.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a support queue.',
                objection: 'Common objection: "Payroll vendors disappear after onboarding."',
                body: 'Your BEG payroll specialist is your ongoing contact. When something changes, a new hire, a state registration, a compliance update, you send one message. There is no ticket queue and no 1-800 number. Your team has a real person who knows your account.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every month you wait is money you are not getting back.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An in-house payroll specialist costs $70,000 to $100,000 per year in fully loaded compensation. Fully managed payroll at $25-$45 PEPM on a 50-person team runs roughly $15,000 to $27,000 per year. Every month spent running payroll manually is a month of penalty risk, corrections, and staff time that should be going toward growing the business.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions typically take 30-60 days. If you want a clean cutover at Q3, Q4, or January 1, the window to start is now. Companies that miss the quarter-start timing usually wait another three months, and the savings deferred are gone for good.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your payroll, give you a fixed monthly cost, and show you what transition looks like.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>What is the cost of outsourcing payroll?</h3>
              <p>BEG prices fully managed payroll at $25-$45 per employee per month, all-inclusive, with a $500 monthly minimum. That covers processing, tax filing, compliance updates, year-end W-2s, and dedicated support, with no hidden add-on fees.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to switch payroll systems to outsource payroll?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system, isolved or otherwise. Migration is an option, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>How is BEG different from other payroll service providers?</h3>
              <p>Transparent, published pricing instead of a sales-call quote, no forced platform migration, and a dedicated point of contact instead of a rotating support queue.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to transition to a payroll outsourcing company?</h3>
              <p>Most transitions take 30-60 days from scope review to first managed payroll run. We handle setup and testing, and your team reviews and approves before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>What is included in the $25-$45 PEPM rate?</h3>
              <p>Payroll processing every cycle, federal and state tax filing, new hire reporting, compliance updates, year-end W-2s and 1099s, and a dedicated BEG contact.</p>
            </div>
            <div className="faq-item">
              <h3>What size companies benefit most from outsourcing payroll services?</h3>
              <p>Companies from roughly 5 to 500 employees see the clearest savings, since they are large enough to need real payroll expertise but often too small to justify a full-time, dedicated in-house payroll specialist.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is the cost of outsourcing payroll?', acceptedAnswer: { '@type': 'Answer', text: 'BEG prices fully managed payroll at $25-$45 per employee per month, all-inclusive, with a $500 monthly minimum. That covers processing, tax filing, compliance updates, year-end W-2s, and dedicated support, with no hidden add-on fees.' } },
              { '@type': 'Question', name: 'Do we have to switch payroll systems to outsource payroll?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'How is BEG different from other payroll service providers?', acceptedAnswer: { '@type': 'Answer', text: 'Transparent, published pricing instead of a sales-call quote, no forced platform migration, and a dedicated point of contact instead of a rotating support queue.' } },
              { '@type': 'Question', name: 'How long does it take to transition to a payroll outsourcing company?', acceptedAnswer: { '@type': 'Answer', text: 'Most transitions take 30-60 days from scope review to first managed payroll run.' } },
              { '@type': 'Question', name: 'What is included in the $25-$45 PEPM rate?', acceptedAnswer: { '@type': 'Answer', text: 'Payroll processing every cycle, federal and state tax filing, new hire reporting, compliance updates, year-end W-2s and 1099s, and a dedicated BEG contact.' } },
              { '@type': 'Question', name: 'What size companies benefit most from outsourcing payroll services?', acceptedAnswer: { '@type': 'Answer', text: 'Companies from roughly 5 to 500 employees see the clearest savings.' } },
            ],
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
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Outsourcing', item: 'https://www.beghr.com/services/managed-payroll/payroll-outsourcing' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'ADP vs. Paychex: Which Payroll Provider Actually Costs Less?',
            excerpt: 'A transparent breakdown of what companies actually pay each provider, and where the hidden fees show up.',
            href: '/services/managed-payroll/adp-vs-paychex',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll Pricing: What $25-$45 PEPM Actually Includes',
            excerpt: 'A full breakdown of what is included in BEG fully managed payroll pricing, and how it compares to hiring in-house.',
            href: '/services/managed-payroll/pricing',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Payroll Cost Calculator: Estimate Your Fully Managed Rate',
            excerpt: 'Run your headcount through our calculator to see what fully managed payroll would cost your company per month.',
            href: '/services/managed-payroll/cost-calculator',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
