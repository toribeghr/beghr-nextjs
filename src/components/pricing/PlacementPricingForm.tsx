'use client';

import { useState } from 'react';
import { CALENDLY, G, BG, SURF, CARD, LINE, T1, T2, T3, money } from './pricing';
import { TIERS, INDUSTRIES, SALARY_OPTS, DURATION_DAYS, type SalaryOpt } from './placementData';
import {
  TopBar, Wrap, Eyebrow, GoldBtn, BackLink, ContactFields, Spinner,
  submitPricingLead, EMPTY_CONTACT, type Contact,
} from './ui';

// BEG SMART PRICING FORM - job placement, multi-industry, multi-role.
// Ported from the approved artifact beg-smart-pricing-form.jsx (LOCKED July 1, 2026).
// Flow: intro -> [industries unless preselected] -> roles -> batch questions
// -> contact -> result (per-role line items + combined total).

interface BatchOpt {
  label: string;
  emoji?: string;
  low?: number;
  high?: number;
}

const BATCH_STEPS: { id: string; q: string; hint: string; opts: BatchOpt[] }[] = [
  { id: 'salary', q: "What's the typical salary range across these roles?", hint: 'Used to calculate your cost comparison', opts: SALARY_OPTS },
  { id: 'duration', q: 'On average, how long have these roles been open?', hint: 'Choose one to continue',
    opts: [{ label: 'Just opened them' }, { label: 'Less than 30 days' }, { label: '30-60 days' }, { label: "60+ days - we've been struggling" }] },
  { id: 'companysize', q: 'How large is your organization?', hint: 'Choose one to continue',
    opts: [{ label: '1-25 employees' }, { label: '26-100 employees' }, { label: '101-500 employees' }, { label: '500+ employees' }] },
  { id: 'urgency', q: 'How soon do you need these filled?', hint: 'Choose one to continue',
    opts: [{ label: 'ASAP - within 30 days' }, { label: 'Within 60 days' }, { label: 'Within 90 days' }, { label: 'No hard deadline yet' }] },
  { id: 'recruiting', q: 'How are you currently sourcing candidates?', hint: 'This shapes your cost comparison',
    opts: [{ label: "We're paying a contingency firm", emoji: '💸' }, { label: "We tried a recruiter - it didn't work out", emoji: '😤' },
      { label: 'Internal search and job boards only', emoji: '📋' }, { label: 'First time using a placement service', emoji: '🆕' }] },
];

interface SelRole {
  industrySlug: string;
  name: string;
  tier: number;
}

type Screen = 'intro' | 'industries' | 'roles' | 'batch' | 'contact' | 'submitting' | 'result';

export default function PlacementPricingForm({ industry = null, onClose }: { industry?: string | null; onClose: () => void }) {
  const preselected = industry ? INDUSTRIES[industry] : undefined;

  const [screen, setScreen] = useState<Screen>('intro');
  const [selInds, setSelInds] = useState<string[]>(preselected && industry ? [industry] : []);
  const [selRoles, setSelRoles] = useState<SelRole[]>([]);
  const [batchIdx, setBatchIdx] = useState(0);
  const [batch, setBatch] = useState<Record<string, BatchOpt>>({});
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [show, setShow] = useState(true);

  const fade = (fn: () => void) => { setShow(false); setTimeout(() => { fn(); setShow(true); }, 175); };

  const prog = screen === 'intro' ? 0
    : screen === 'industries' ? 12
    : screen === 'roles' ? 26
    : screen === 'batch' ? 40 + Math.round((batchIdx / BATCH_STEPS.length) * 45)
    : screen === 'contact' ? 92 : 100;

  function toggleInd(slug: string) {
    setSelInds(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]);
  }
  function toggleRole(slug: string, role: { name: string; tier: number }) {
    const key = slug + '::' + role.name;
    setSelRoles(prev => {
      const exists = prev.find(r => r.industrySlug + '::' + r.name === key);
      return exists ? prev.filter(r => r.industrySlug + '::' + r.name !== key)
        : [...prev, { industrySlug: slug, name: role.name, tier: role.tier }];
    });
  }
  const roleSelected = (slug: string, name: string) => selRoles.some(r => r.industrySlug === slug && r.name === name);

  function startFlow() {
    if (preselected) fade(() => setScreen('roles'));
    else fade(() => setScreen('industries'));
  }
  function afterIndustries() { if (selInds.length) fade(() => setScreen('roles')); }
  function afterRoles() { if (selRoles.length) fade(() => setScreen('batch')); }

  function pickBatch(opt: BatchOpt) {
    setBatch(p => ({ ...p, [BATCH_STEPS[batchIdx].id]: opt }));
    if (batchIdx < BATCH_STEPS.length - 1) fade(() => setBatchIdx(batchIdx + 1));
    else fade(() => setScreen('contact'));
  }

  function back() {
    if (screen === 'contact') fade(() => setScreen('batch'));
    else if (screen === 'batch') {
      if (batchIdx > 0) fade(() => setBatchIdx(batchIdx - 1));
      else fade(() => setScreen('roles'));
    }
    else if (screen === 'roles') { if (preselected) fade(() => setScreen('intro')); else fade(() => setScreen('industries')); }
    else if (screen === 'industries') fade(() => setScreen('intro'));
    else if (screen === 'intro') onClose();
  }

  const canSubmit = !!(contact.name && contact.company && contact.email);

  // result computations
  const sal = batch.salary as SalaryOpt | undefined;
  const recruiting = batch.recruiting?.label ?? '';
  const showSavings = recruiting.includes('contingency') || recruiting.includes('recruiter');
  const daysOpen = DURATION_DAYS[batch.duration?.label ?? ''] ?? 0;
  const showVac = daysOpen >= 45;

  const lineItems = selRoles.map(r => {
    const t = TIERS[r.tier];
    return { ...r, tierLabel: t.label, base: t.base, high: t.high, ind: INDUSTRIES[r.industrySlug] };
  });
  const totalBase = lineItems.reduce((s, r) => s + r.base, 0);
  const totalHigh = lineItems.reduce((s, r) => s + r.high, 0);

  const cLow = sal ? Math.round(sal.low * 0.20) : 0;
  const cHigh = sal ? Math.round(sal.high * 0.30) : 0;
  const totalContingencyLow = cLow * lineItems.length;
  const totalContingencyHigh = cHigh * lineItems.length;
  const savingsLow = Math.max(0, totalContingencyLow - totalHigh);
  const savingsHigh = Math.max(0, totalContingencyHigh - totalBase);

  const salMid = sal ? (sal.low + sal.high) / 2 : 0;
  const dailyCost = salMid ? Math.round((salMid / 260) * 1.4) * lineItems.length : 0;
  const totalVac = Math.round(dailyCost * daysOpen);
  const weekCost = Math.round(dailyCost * 7);

  function submit() {
    if (!canSubmit) return;
    fade(() => setScreen('submitting'));
    const lines = lineItems
      .map(x => `${x.name} (${x.ind.label}, ${x.tierLabel}): ${money(x.base)} - ${money(x.high)}`)
      .concat([`COMBINED TOTAL: ${money(totalBase)} - ${money(totalHigh)}`])
      .concat(showSavings && sal ? [`Savings vs contingency: ${money(savingsLow)} - ${money(savingsHigh)}`] : [])
      .join('\n');
    const done = submitPricingLead({
      service: 'job-placement',
      name: contact.name, email: contact.email, company: contact.company, phone: contact.phone,
      pricing_summary: lines,
      answers: JSON.stringify({
        industries: selInds, roles: selRoles.map(r => `${r.industrySlug}: ${r.name} (T${r.tier})`),
        salary: sal?.label ?? '', duration: batch.duration?.label ?? '',
        company_size: batch.companysize?.label ?? '', urgency: batch.urgency?.label ?? '',
        sourcing: recruiting,
      }),
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
    Promise.all([done, new Promise(r => setTimeout(r, 900))]).then(() => fade(() => setScreen('result')));
  }

  const right = screen === 'industries' ? `${selInds.length} selected`
    : screen === 'roles' ? `${selRoles.length} role${selRoles.length === 1 ? '' : 's'}`
    : screen === 'batch' ? `${batchIdx + 1} / ${BATCH_STEPS.length}`
    : screen === 'contact' ? 'Last step'
    : screen === 'submitting' ? 'Calculating…'
    : screen === 'result' ? <span style={{ color: '#4ade80' }}>✓ Complete</span> : undefined;

  return (
    <>
      <TopBar eyebrow="BEG · JOB PLACEMENT" right={right} progress={prog} />
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {screen === 'intro' && (
          <Wrap show={show}>
            <div style={{ textAlign: 'center', padding: '14px 0' }}>
              <div style={{ fontSize: '2.6rem', marginBottom: '16px' }}>{preselected ? preselected.emoji : '⚡'}</div>
              <h2 style={{ fontSize: '1.55rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '12px', color: T1 }}>
                {preselected ? <>Hiring in {preselected.label}?</> : <>Tell Us What You&apos;re Hiring.</>}<br />
                <span style={{ color: G }}>Get Pricing in 90 Seconds.</span>
              </h2>
              <p style={{ color: T2, fontSize: '0.88rem', lineHeight: 1.65, margin: '0 auto 26px', maxWidth: '380px' }}>
                Pick the roles you need filled{preselected ? '' : ' across any of our industries'}. We&apos;ll show a flat-fee estimate for each, what you&apos;re saving vs. contingency, and the cost of leaving them open.
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                {([['⚡', '23-35 day avg fill'], ['✅', '86% fill rate'], ['💰', '~50% less']] as [string, string][]).map(([i, t]) => (
                  <div key={t} style={{ background: SURF, border: `1px solid ${LINE}`, borderRadius: '99px', padding: '5px 14px', fontSize: '0.74rem', color: '#999', display: 'flex', gap: '6px', alignItems: 'center' }}>{i} {t}</div>
                ))}
              </div>
              <GoldBtn onClick={startFlow} mt="0">Get Pricing in 90 Seconds →</GoldBtn>
              <p style={{ color: T3, fontSize: '0.68rem', marginTop: '10px' }}>No commitment required</p>
            </div>
          </Wrap>
        )}

        {screen === 'industries' && (
          <Wrap show={show}>
            <Eyebrow>STEP 1</Eyebrow>
            <h2 style={{ fontSize: '1.18rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '5px', color: T1 }}>What industries are you hiring for?</h2>
            <p style={{ color: T3, fontSize: '0.74rem', marginBottom: '16px' }}>Select all that apply - you&apos;ll pick roles next</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', maxHeight: '46vh', overflowY: 'auto', paddingRight: '2px' }}>
              {Object.entries(INDUSTRIES).map(([slug, ind]) => {
                const sel = selInds.includes(slug);
                return (
                  <button key={slug} type="button" onClick={() => toggleInd(slug)} style={{ background: sel ? '#130d00' : CARD, border: `2px solid ${sel ? G : LINE}`, borderRadius: '10px', padding: '11px 10px', color: sel ? G : '#ccc', fontSize: '0.8rem', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '7px', fontWeight: sel ? 600 : 400, transition: 'all 0.13s' }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>{ind.emoji}</span>
                    <span style={{ flex: 1, lineHeight: 1.25 }}>{ind.label}</span>
                    {sel && <span style={{ fontSize: '0.75rem', flexShrink: 0 }}>✓</span>}
                  </button>
                );
              })}
            </div>
            <GoldBtn onClick={afterIndustries} disabled={!selInds.length} mt="16px">
              {selInds.length ? `Continue with ${selInds.length} ${selInds.length === 1 ? 'industry' : 'industries'} →` : 'Select at least one industry'}
            </GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'roles' && (
          <Wrap show={show}>
            <Eyebrow>STEP 2</Eyebrow>
            <h2 style={{ fontSize: '1.18rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '5px', color: T1 }}>Which roles do you need filled?</h2>
            <p style={{ color: T3, fontSize: '0.74rem', marginBottom: '16px' }}>Select all that apply across your industries</p>
            <div style={{ maxHeight: '48vh', overflowY: 'auto', paddingRight: '2px' }}>
              {selInds.map(slug => {
                const ind = INDUSTRIES[slug];
                return (
                  <div key={slug} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px', position: 'sticky', top: 0, background: BG, paddingBottom: '3px' }}>
                      <span style={{ fontSize: '0.95rem' }}>{ind.emoji}</span>
                      <span style={{ fontSize: '0.72rem', color: G, fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{ind.label}</span>
                    </div>
                    {ind.roles.map((role, i) => {
                      const sel = roleSelected(slug, role.name);
                      return (
                        <button key={i} type="button" onClick={() => toggleRole(slug, role)} style={{ width: '100%', marginBottom: '6px', background: sel ? '#130d00' : CARD, border: `2px solid ${sel ? G : LINE}`, borderRadius: '9px', padding: '10px 12px', color: sel ? G : '#ccc', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '9px', fontWeight: sel ? 600 : 400, transition: 'all 0.13s' }}>
                          <span style={{ minWidth: '18px', height: '18px', borderRadius: '5px', border: `2px solid ${sel ? G : '#333'}`, background: sel ? G : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: '#000', flexShrink: 0 }}>{sel ? '✓' : ''}</span>
                          <span style={{ flex: 1 }}>{role.name}</span>
                          <span style={{ fontSize: '0.66rem', color: T3, flexShrink: 0 }}>{TIERS[role.tier].label}</span>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <GoldBtn onClick={afterRoles} disabled={!selRoles.length} mt="16px">
              {selRoles.length ? `Get Pricing for ${selRoles.length} Role${selRoles.length === 1 ? '' : 's'} →` : 'Select at least one role'}
            </GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'batch' && (() => {
          const st = BATCH_STEPS[batchIdx];
          const cur = batch[st.id];
          return (
            <Wrap show={show}>
              <Eyebrow>ABOUT THESE ROLES</Eyebrow>
              <h2 style={{ fontSize: '1.16rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '5px', color: T1 }}>{st.q}</h2>
              <p style={{ color: T3, fontSize: '0.74rem', marginBottom: '16px' }}>{st.hint}</p>
              {st.opts.map((opt, i) => {
                const sel = cur?.label === opt.label;
                return (
                  <button key={i} type="button" onClick={() => pickBatch(opt)} style={{ width: '100%', marginBottom: '7px', background: sel ? '#130d00' : CARD, border: `2px solid ${sel ? G : LINE}`, borderRadius: '10px', padding: '11px 14px', color: sel ? G : '#ccc', fontSize: '0.87rem', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: sel ? 600 : 400, transition: 'all 0.13s' }}>
                    {opt.emoji && <span style={{ fontSize: '1rem' }}>{opt.emoji}</span>}
                    <span style={{ flex: 1 }}>{opt.label}</span>
                    {sel && <span style={{ fontSize: '0.8rem' }}>✓</span>}
                  </button>
                );
              })}
              <BackLink onClick={back} />
            </Wrap>
          );
        })()}

        {screen === 'contact' && (
          <Wrap show={show}>
            <Eyebrow>ALMOST THERE</Eyebrow>
            <h2 style={{ fontSize: '1.16rem', fontWeight: 700, marginBottom: '6px', color: T1 }}>Where should we send your pricing?</h2>
            <p style={{ color: T3, fontSize: '0.74rem', marginBottom: '20px' }}>No spam. Just your quote and next steps.</p>
            <ContactFields contact={contact} setContact={setContact} />
            <GoldBtn onClick={submit} disabled={!canSubmit}>Show My Pricing →</GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'submitting' && <Wrap show={show}><Spinner label="Building your estimate…" /></Wrap>}

        {screen === 'result' && (
          <Wrap show={show}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#0a180a', border: '2px solid #4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontSize: '1.5rem' }}>✓</div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '6px', color: T1 }}>Here&apos;s your estimate.</h2>
              <p style={{ color: T2, fontSize: '0.83rem', lineHeight: 1.55, margin: '0 auto 20px', maxWidth: '360px' }}>
                Flat-fee pricing for each role you selected, plus what you&apos;re saving vs. contingency.
              </p>

              <div style={{ background: '#0c0800', border: `2px solid ${G}`, borderRadius: '16px', padding: '20px 18px 18px', marginBottom: '14px', textAlign: 'left' }}>
                <p style={{ color: T3, fontSize: '0.68rem', letterSpacing: '0.05em', marginBottom: '14px', textAlign: 'center' }}>YOUR PLACEMENT FEE - {lineItems.length} ROLE{lineItems.length === 1 ? '' : 'S'}</p>

                {lineItems.map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', padding: '11px 0', borderBottom: i < lineItems.length - 1 ? `1px solid ${LINE}` : 'none' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: T1, marginBottom: '2px' }}>{r.name}</div>
                      <div style={{ fontSize: '0.68rem', color: T3, display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>{r.ind.emoji}</span><span>{r.ind.label}</span><span style={{ color: '#444' }}>·</span><span>{r.tierLabel}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: G }}>{money(r.base)}</div>
                      <div style={{ fontSize: '0.66rem', color: T3 }}>to {money(r.high)}</div>
                    </div>
                  </div>
                ))}

                {lineItems.length > 1 && (
                  <div style={{ marginTop: '12px', paddingTop: '14px', borderTop: `2px solid ${G}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: T1, letterSpacing: '0.02em' }}>COMBINED TOTAL</div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 900, color: G, lineHeight: 1.1 }}>{money(totalBase)}</div>
                      <div style={{ fontSize: '0.68rem', color: T3 }}>to {money(totalHigh)}</div>
                    </div>
                  </div>
                )}

                <p style={{ color: T3, fontSize: '0.68rem', marginTop: '14px', textAlign: 'center', lineHeight: 1.5 }}>
                  One-time flat fees · milestone-based · zero upfront cost
                </p>
              </div>

              {showSavings && sal && (
                <div style={{ background: '#071207', border: '1px solid #1a3d1a', borderRadius: '12px', padding: '15px', marginBottom: '12px', textAlign: 'left' }}>
                  <div style={{ fontSize: '0.66rem', color: '#4ade80', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '11px' }}>💰 YOUR SAVINGS VS. CONTINGENCY</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '8px', alignItems: 'center', marginBottom: '11px' }}>
                    <div style={{ background: '#1a0a0a', border: '1px solid #3d1a1a', borderRadius: '8px', padding: '9px 10px' }}>
                      <div style={{ fontSize: '0.56rem', color: '#f87171', fontWeight: 700, marginBottom: '3px' }}>CONTINGENCY</div>
                      <div style={{ fontSize: '0.62rem', color: T3, marginBottom: '2px' }}>~20-30% salary × {lineItems.length}</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f87171' }}>{money(totalContingencyLow)}<br /><span style={{ fontSize: '0.62rem', fontWeight: 400, color: T3 }}>to</span><br />{money(totalContingencyHigh)}</div>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '1.2rem', color: T3 }}>→</div>
                    <div style={{ background: '#0a1a0a', border: '1px solid #1a3d1a', borderRadius: '8px', padding: '9px 10px' }}>
                      <div style={{ fontSize: '0.56rem', color: '#4ade80', fontWeight: 700, marginBottom: '3px' }}>BEG FLAT FEE</div>
                      <div style={{ fontSize: '0.62rem', color: T3, marginBottom: '2px' }}>All {lineItems.length} role{lineItems.length === 1 ? '' : 's'}</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#4ade80' }}>{money(totalBase)}<br /><span style={{ fontSize: '0.62rem', fontWeight: 400, color: T3 }}>to</span><br />{money(totalHigh)}</div>
                    </div>
                  </div>
                  <div style={{ background: '#0d1f0d', borderRadius: '8px', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.6rem', color: '#4ade80', fontWeight: 700 }}>YOUR TOTAL SAVINGS</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#4ade80' }}>{money(savingsLow)} - {money(savingsHigh)}</div>
                  </div>
                </div>
              )}

              {showVac && sal && (
                <div style={{ background: '#0d0a00', border: '1px solid #4d3800', borderRadius: '12px', padding: '15px', marginBottom: '12px', textAlign: 'left' }}>
                  <div style={{ fontSize: '0.66rem', color: '#fbbf24', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '11px' }}>⏰ COST OF LEAVING THESE ROLES OPEN</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                    <div style={{ background: '#1a1000', border: '1px solid #4d3800', borderRadius: '8px', padding: '9px 10px' }}>
                      <div style={{ fontSize: '0.56rem', color: '#fbbf24', fontWeight: 700, marginBottom: '3px' }}>DAILY OVERHEAD</div>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#fbbf24' }}>{money(dailyCost)}</div>
                      <div style={{ fontSize: '0.6rem', color: T3 }}>all roles / day</div>
                    </div>
                    <div style={{ background: '#1a1000', border: '1px solid #4d3800', borderRadius: '8px', padding: '9px 10px' }}>
                      <div style={{ fontSize: '0.56rem', color: '#fbbf24', fontWeight: 700, marginBottom: '3px' }}>SPENT WAITING</div>
                      <div style={{ fontSize: '1rem', fontWeight: 900, color: '#fbbf24' }}>{money(totalVac)}</div>
                      <div style={{ fontSize: '0.6rem', color: T3 }}>~{daysOpen} days open</div>
                    </div>
                  </div>
                  <div style={{ background: '#1a1000', borderRadius: '8px', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#aaa', maxWidth: '165px' }}>Each week costs <span style={{ color: '#fbbf24', fontWeight: 700 }}>{money(weekCost)}</span> more</div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.56rem', color: '#fbbf24', fontWeight: 700 }}>BEG FILLS IN</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#fbbf24' }}>23-35 days</div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ background: '#0c0800', border: `2px solid ${G}`, borderRadius: '12px', padding: '16px 18px', marginBottom: '14px', textAlign: 'left' }}>
                {([['⚡', '23-35 day average fill'], ['✅', '86% fill rate'], ['🛡️', '45-day replacement guarantee'], ['🏛️', 'Clients pay iSolved directly']] as [string, string][]).map(([ic, tx]) => (
                  <div key={tx} style={{ display: 'flex', gap: '8px', fontSize: '0.78rem', color: '#888', marginBottom: '7px' }}><span>{ic}</span><span>{tx}</span></div>
                ))}
                <div style={{ background: '#141000', border: '1px solid #4a3800', borderRadius: '9px', padding: '10px 12px', marginTop: '6px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.95rem', flexShrink: 0 }}>🔁</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: G, marginBottom: '2px' }}>Same role again? 50% off.</div>
                    <div style={{ fontSize: '0.7rem', color: '#888', lineHeight: 1.5 }}>Subsequent hires for the same role, JD, and location are half the fee.</div>
                  </div>
                </div>
              </div>

              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: G, color: '#000', borderRadius: '10px', padding: '13px', fontSize: '0.9rem', fontWeight: 800, textDecoration: 'none', marginBottom: '7px', textAlign: 'center' }}>
                Book Your Free 15-Min Discovery Call →
              </a>
              <p style={{ color: T3, fontSize: '0.67rem', marginBottom: '16px', textAlign: 'center' }}>Exact fees confirmed on your call · A copy was sent to {contact.email}</p>
              <button type="button" onClick={onClose} style={{ background: 'none', border: `1px solid ${LINE}`, borderRadius: '8px', padding: '7px 18px', color: '#666', fontSize: '0.72rem', cursor: 'pointer' }}>Close</button>
            </div>
          </Wrap>
        )}
      </div>
    </>
  );
}
