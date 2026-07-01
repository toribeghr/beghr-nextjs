import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'isolved Login Help | Instant Price Quote + Support | BEG',
  description: 'Common isolved login issues and how to resolve them. BEG clients get direct support from a dedicated contact, not a ticket queue, for access and system questions.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/isolved-login-help' },
  openGraph: {
    title: 'isolved Login Help | Instant Price Quote + Support | BEG',
    description: 'Common isolved login issues and how to resolve them. BEG clients get direct support from a dedicated contact, not a ticket queue, for access and system questions.',
    url: 'https://www.beghr.com/services/hcm-software/isolved-login-help',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'isolved Login Help | Instant Price Quote + Support | BEG', description: 'Common isolved login issues and how to resolve them. BEG clients get direct support from a dedicated contact, not a ticket queue, for access and system questions.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'I cannot log into isolved. What is the first step?',
    a: 'The most common causes of isolved login failure are an expired or incorrect password, an account that has been locked after multiple failed attempts, a browser cache issue, or multi-factor authentication not completing correctly. Start with the password reset link on the isolved login page. If the account is locked, your isolved administrator or your BEG contact can unlock it.',
  },
  {
    q: 'How do I reset my isolved password?',
    a: 'On the isolved login page, select the "Forgot Password" link. Enter the email address associated with your account and follow the reset instructions sent to that address. If the email does not arrive within a few minutes, check your spam folder and confirm the email address with your isolved administrator.',
  },
  {
    q: 'My isolved account is locked. How do I get it unlocked?',
    a: 'Account lockouts happen after a set number of failed login attempts. Your isolved system administrator can unlock the account from within the platform. BEG clients can contact their BEG support contact directly to get an account unlocked quickly.',
  },
  {
    q: 'I am not receiving the isolved multi-factor authentication code. What should I do?',
    a: 'If you are not receiving the MFA code, check that the phone number or email address on your account is current. Codes delivered by SMS can occasionally be delayed by carrier networks. If you use an authenticator app, verify that your device time is correctly synced. Your isolved administrator can update authentication settings if needed.',
  },
  {
    q: 'The isolved platform is loading slowly or not loading at all. What should I check?',
    a: 'Start by clearing your browser cache and cookies and trying again in an incognito or private window. The isolved platform works best in current versions of Chrome, Edge, or Firefox. If you are on a corporate network, check whether a firewall or proxy is blocking isolved. If the issue persists across multiple browsers and networks, check the isolved status page or contact BEG.',
  },
  {
    q: 'I am a BEG client with a login or access issue. How do I get help?',
    a: 'Contact your dedicated BEG support contact directly. BEG clients do not go through a general support queue. Your BEG contact can resolve access issues, coordinate with isolved support, and get you back into the system. If you do not have BEG as your implementation partner and want dedicated support, the 15-minute discovery call is the starting point.',
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
    { '@type': 'ListItem', position: 3, name: 'isolved Login Help', item: 'https://www.beghr.com/services/hcm-software/isolved-login-help' },
  ],
};

export default function IsolvedLoginHelp() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>isolved · Login Help</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            isolved Login Help and Access Issues
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '700px' }}>
            Most isolved login issues come down to a small set of causes: password expiration, account lockout, MFA delivery, or browser compatibility. This page covers the most common issues and how to resolve them. BEG clients have a faster path: one call to your dedicated BEG contact.
          </p>
        </div>
      </section>

      {/* Common issues */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Common isolved Login Issues and Fixes</h2>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {[
              {
                issue: 'Incorrect password or password expired',
                fix: 'Use the "Forgot Password" link on the isolved login page. Enter your account email address and follow the reset link sent to that address. Passwords in isolved expire on a schedule set by your administrator. If the reset email does not arrive, check spam and confirm the email on file with your admin.',
              },
              {
                issue: 'Account locked after failed login attempts',
                fix: 'isolved locks accounts after a configured number of failed attempts. Your isolved system administrator can unlock the account from within the platform. BEG clients: contact your BEG support contact directly for a faster resolution.',
              },
              {
                issue: 'Multi-factor authentication code not arriving',
                fix: 'If you are expecting an SMS code, check that your phone number on file is current and that you have signal. SMS codes can be delayed by a few minutes under carrier load. If you use an authenticator app, verify that your device clock is synced correctly. Your admin can update authentication settings if the delivery method is incorrect.',
              },
              {
                issue: 'Platform loading slowly or not at all',
                fix: 'Clear your browser cache and cookies and reload in an incognito window. isolved performs best in current Chrome, Edge, or Firefox. If you are on a corporate network, a firewall or proxy may be blocking the platform. Test on a mobile connection to isolate whether the issue is network-side.',
              },
              {
                issue: 'No access to a module or feature you expect',
                fix: 'Access to isolved modules is controlled by user roles configured by your administrator. If you cannot see a module you need, your isolved admin or BEG contact needs to update your role permissions. This is not a login issue but an access control configuration.',
              },
              {
                issue: 'Single sign-on (SSO) not working',
                fix: 'SSO issues typically stem from a configuration mismatch between your identity provider and isolved. Your IT administrator and your BEG contact need to troubleshoot this together. Common causes include expired certificates, incorrect redirect URLs, or a user account not provisioned in the identity provider.',
              },
            ].map(({ issue, fix }) => (
              <div key={issue} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{issue}</strong>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#444', lineHeight: '1.65' }}>{fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEG client support */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>The Difference for BEG Clients</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            If BEG manages your isolved platform, you do not go through a support ticket queue for issues like this. Your dedicated BEG contact can resolve most access issues directly or coordinate with isolved support on your behalf, with your account context already in hand. One call or message, not a ticket and a wait.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            This is the practical difference between having a software vendor and having a managed implementation partner. When something breaks, you reach a person who knows your configuration, not a general support line.
          </p>
        </div>
      </section>

      {/* Not a BEG client */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>Not a BEG Client? Here Is What Changes If You Were</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            If you are not currently working with BEG and you are experiencing isolved support frustrations, whether that is login issues, slow response from a support queue, or configuration problems that nobody seems to own, BEG can help with that.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1.5rem' }}>
            BEG is not a rip-and-replace. In many cases, BEG can take over the management and support of an existing isolved implementation, bringing dedicated year-round support to a platform you are already running. The 15-minute discovery call is the right place to start.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ display: 'inline-block' }}>
            Book a 15-Minute Discovery Call
          </Link>
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
            category: 'HCM technology',
            title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
            excerpt: 'High-ROI HR automation targets for teams already running isolved who want to get more from the platform.',
            href: '/blog/hcm-software/hr-automation',
          },
          {
            category: 'HR compliance',
            title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
            excerpt: 'Federal and state payroll tax changes in 2026 and what your HCM platform should handle automatically.',
            href: '/blog/hcm-software/payroll-compliance',
          },
        ]}
      />
    </main>
  );
}
