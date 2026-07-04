'use client';

import { useState } from 'react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const LOADED_HR_RATE = 65; // loaded $/hr for HR/admin time (matches payroll calculator)

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

function calc(count: number, systems: number, adminHours: number) {
  // Admin time reclaimed by consolidating onto one connected platform.
  // More disconnected systems = more reconciliation and double entry to eliminate.
  const reductionRate = Math.min(0.6, 0.12 * (systems - 1) + 0.1);
  const weeklyHoursSaved = adminHours * reductionRate;
  const annualHoursSaved = weeklyHoursSaved * 52;
  const laborValue = annualHoursSaved * LOADED_HR_RATE;

  // Error and duplicate-entry cost avoided. Each extra system is another
  // failure point for payroll and data-transfer errors. Conservative estimate.
  const errorAvoided = (systems - 1) * (300 + count * 6);

  const annualValue = laborValue + errorAvoided;

  return {
    reductionPct: Math.round(reductionRate * 100),
    weeklyHoursSaved,
    annualHoursSaved: Math.round(annualHoursSaved),
    laborValue,
    errorAvoided,
    annualValue,
  };
}

export default function HCMROICalculator() {
  const [count, setCount] = useState(75);
  const [systems, setSystems] = useState(4);
  const [adminHours, setAdminHours] = useState(12);

  const r = calc(count, systems, adminHours);

  return (
    <>
      {/* CALCULATOR WIDGET */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e5e5' }}>

            {/* Employee count */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem', color: '#000' }}>Number of employees</label>
                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>{count}</span>
              </div>
              <input
                type="range" min={10} max={500} step={5} value={count}
                onChange={e => setCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#ECAC60', cursor: 'pointer', height: '4px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Systems */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem', color: '#000' }}>Separate HR / payroll systems you use today</label>
                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>{systems}</span>
              </div>
              <input
                type="range" min={1} max={6} step={1} value={systems}
                onChange={e => setSystems(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#ECAC60', cursor: 'pointer', height: '4px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                <span>1 system</span>
                <span>6+ systems</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '0.5rem', lineHeight: '1.5' }}>
                Count every tool: payroll, time and attendance, benefits, onboarding, HR records, and recruiting. The average HR team juggles four or more.
              </p>
            </div>

            {/* Admin hours */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '700', fontSize: '1rem', color: '#000' }}>Hours per week your team spends on manual HR / payroll admin</label>
                <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#000', lineHeight: 1 }}>{adminHours}</span>
              </div>
              <input
                type="range" min={2} max={40} step={1} value={adminHours}
                onChange={e => setAdminHours(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#ECAC60', cursor: 'pointer', height: '4px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#999', marginTop: '0.3rem' }}>
                <span>2 hrs</span>
                <span>40 hrs</span>
              </div>
            </div>

            {/* Results panel */}
            <div style={{ background: '#000', borderRadius: '10px', padding: '2rem', color: '#fff' }}>
              <p style={{ color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', marginTop: 0 }}>
                Your estimate: {count} employees, {systems} systems
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                {/* Hours reclaimed */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Admin hours reclaimed / year
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', lineHeight: 1 }}>
                    {r.annualHoursSaved.toLocaleString()} hrs
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    About a {r.reductionPct}% cut in manual admin from one connected platform
                  </div>
                </div>

                {/* Labor value */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Reclaimed time value / year
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1 }}>
                    {fmt(r.laborValue)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    Reclaimed hours at a loaded ${LOADED_HR_RATE}/hr labor rate
                  </div>
                </div>

                {/* Total annual value */}
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Estimated annual value
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4ade80', lineHeight: 1 }}>
                    {fmt(r.annualValue)}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '0.4rem', lineHeight: '1.45' }}>
                    Reclaimed time plus {fmt(r.errorAvoided)} in avoided error and double-entry cost
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #222', paddingTop: '1.5rem', textAlign: 'center' }}>
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--gold"
                  style={{ fontSize: '0.97rem', padding: '0.85rem 2.25rem', display: 'inline-block' }}
                >
                  Get Your Custom ROI Review: Book a 15-Min Call
                </Link>
                <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.8rem', marginBottom: 0, lineHeight: '1.5' }}>
                  This calculator uses conservative industry averages. Forrester documented a 330% ROI for isolved clients. BEG gives you an exact, configured ROI on your discovery call, no commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DRIVES THE ROI */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Where the ROI Comes From</p>
            <h2>The cost is not the software. It is everything around the software.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }} className="reveal">
            {[
              { title: 'One platform, not four', items: ['Payroll, HR, time, and benefits in one system', 'No reconciliation between tools', 'No data transferred by hand', 'One login, one source of truth'] },
              { title: 'Reclaimed admin time', items: ['Manual entry eliminated', 'Fewer corrections and re-runs', 'Self-service for employees', 'Reporting in minutes, not hours'] },
              { title: 'Fewer costly errors', items: ['No re-keying between systems', 'Automated tax and compliance', 'Fewer late or wrong paychecks', 'Lower penalty and rework risk'] },
              { title: 'BEG runs it for you', items: ['BEG implements and configures it', 'Configured for your industry', 'Year-round local support', 'You are never alone in a ticket queue'] },
            ].map(({ title, items }) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.85rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map(item => (
                    <li key={item} style={{ fontSize: '0.86rem', color: '#444', padding: '0.3rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', borderBottom: '1px solid #f2f2f2' }}>
                      <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE AI DIFFERENTIATOR */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Difference No Competitor Has</p>
            <h2>The only HCM platform with a Connector for Claude.</h2>
          </div>
          <p style={{ marginTop: '1rem', color: '#555', textAlign: 'center', lineHeight: '1.75', maxWidth: '660px', margin: '1rem auto 0' }}>
            Other platforms added a chatbot that answers questions. isolved went further. The Connector for Claude, generally available since June 2026, lets your team complete real HR tasks through a Claude conversation. That is admin time your calculator above does not even count yet. No other platform on the market offers this.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/services/hcm-software" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See the Full isolved Platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
