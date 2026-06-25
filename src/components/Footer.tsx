import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <Link href="/" className="brand">
            <Image
              src="/assets/beg-logo-gold.png"
              alt="Business Executive Group"
              width={38}
              height={38}
            />
            <span>Business Executive Group</span>
          </Link>
          <nav style={{ display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
            <Link href="/services/managed-payroll">Managed Payroll</Link>
            <Link href="/services/hcm-software">HCM Software</Link>
            <Link href="/services/job-placement">Job Placement</Link>
            <Link href="/#network">Network</Link>
          </nav>
        </div>

        <div className="social" aria-label="Business Executive Group on social media">
          <a
            href="https://www.linkedin.com/company/businessexecutivegroup/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
            </svg>
          </a>
          <a
            href="https://facebook.com/thehrexecutivegroup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.45-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.4V13h2.75v8z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/thehrexecutivegroup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.85 2.85 0 00-.69-1.06 2.85 2.85 0 00-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1112 17a4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.14-.96a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@TheHRExecutiveGroup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23 12s0-3.2-.4-4.74a2.5 2.5 0 00-1.76-1.77C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.84.39A2.5 2.5 0 001.4 7.26C1 8.8 1 12 1 12s0 3.2.4 4.74a2.5 2.5 0 001.76 1.77c1.54.39 8.84.39 8.84.39s7.3 0 8.84-.39a2.5 2.5 0 001.76-1.77C23 15.2 23 12 23 12zm-13 3.27V8.73L15.5 12z" />
            </svg>
          </a>
        </div>

        <div className="maps-section" style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
            <div>
              <h3 style={{ marginBottom: '16px', color: '#D4AF37' }}>Contact</h3>
              <p style={{ color: '#C7D2E5', margin: '8px 0' }}>
                <strong>Business Executive Group</strong><br/>
                Celina, TX<br/>
                <a href="tel:4694121204" style={{ color: '#D4AF37', textDecoration: 'none' }}>469-412-1204</a><br/>
                <a href="mailto:tori.wint@beghr.com" style={{ color: '#D4AF37', textDecoration: 'none' }}>tori.wint@beghr.com</a>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.7463789370157!2d-96.30583!3d33.30876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3e1c6e6e6e6d%3A0x6e6e6e6e6e6e6e6e!2sCelina%2C%20TX!5e0!3m2!1sen!2sus!4v1624567890000"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '6px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; 2026 Business Executive Group. All rights reserved.</span>
          <span>Serving businesses nationwide &middot; Celina, TX &middot; 469-412-1204</span>
        </div>
      </div>
    </footer>
  );
}
