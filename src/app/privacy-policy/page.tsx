import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Business Executive Group',
  description: 'Privacy policy for Business Executive Group — how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://beghr.com/privacy-policy',
  },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '760px' }}>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p style={{ color: 'var(--slate)', marginTop: '8px', marginBottom: '40px' }}>Last updated: June 2026</p>

        <div style={{ lineHeight: 1.8, fontSize: '1rem' }}>
          <h2 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' }}>1. Information We Collect</h2>
          <p>When you submit a form or book a discovery call on this site, we collect your name, email address, phone number, and company name. We also collect standard analytics data (page views, session duration) through Google Analytics.</p>

          <h2 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' }}>2. How We Use Your Information</h2>
          <p>We use your contact information solely to respond to your inquiry, schedule discovery calls, and follow up regarding our services (managed payroll, HCM software, and job placement). We do not sell your information to third parties.</p>

          <h2 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' }}>3. Google Analytics & GTM</h2>
          <p>This site uses Google Tag Manager and Google Analytics 4 to understand how visitors interact with our pages. These tools may set cookies on your device. You can opt out at any time via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Google&apos;s opt-out tool</a>.</p>

          <h2 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' }}>4. Data Retention</h2>
          <p>We retain contact information for as long as needed to service your inquiry or as required by law. You may request deletion of your data at any time by emailing <a href="mailto:tori.wint@beghr.com" style={{ color: 'var(--gold)' }}>tori.wint@beghr.com</a>.</p>

          <h2 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' }}>5. Third-Party Services</h2>
          <p>We use Calendly for scheduling, which has its own privacy policy. Links to third-party sites are provided for convenience and do not constitute an endorsement.</p>

          <h2 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.2rem' }}>6. Contact</h2>
          <p>Questions about this policy? Reach us at <a href="mailto:tori.wint@beghr.com" style={{ color: 'var(--gold)' }}>tori.wint@beghr.com</a> or call <a href="tel:4694121204" style={{ color: 'var(--gold)' }}>469-412-1204</a>.</p>
        </div>
      </div>
    </section>
  );
}
