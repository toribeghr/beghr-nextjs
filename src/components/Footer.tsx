export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="maps-section" style={{ paddingTop: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
            <div>
              <h3 style={{ marginBottom: '16px', color: '#ECAC60' }}>Contact</h3>
              <p style={{ color: '#fff', margin: '8px 0' }}>
                <strong>Business Executive Group</strong><br/>
                7700 Windrose Ave<br/>
                Plano, TX 75024<br/>
                <a href="tel:4694121204" style={{ color: '#ECAC60', textDecoration: 'none' }}>469-412-1204</a><br/>
                <a href="mailto:sales@beghr.com" style={{ color: '#ECAC60', textDecoration: 'none' }}>sales@beghr.com</a>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.123456789!2d-96.8252!3d33.0198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c0000000000000%3A0x0!2s7700%20Windrose%20Ave%2C%20Plano%2C%20TX%2075024!5e0!3m2!1sen!2sus!4v1624567890000"
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
          <span>Serving businesses nationwide &middot; Plano, TX &middot; 469-412-1204</span>
        </div>
      </div>
    </footer>
  );
}
