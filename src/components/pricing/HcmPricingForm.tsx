'use client';

import { useState } from 'react';
import {
  CALENDLY, G, CARD, LINE, T1, T2, T3, money,
  HCM_TIERS, HCM_TIER_ORDER, HCM_PLATFORM_FEATURES, HCM_PICK_MODULES, hcmRecoFromPicks, hcmAllModules,
  type HcmTierKey,
} from './pricing';
import {
  TopBar, Wrap, Eyebrow, QTitle, OptionCard, GoldBtn, BackLink,
  ContactFields, Spinner, ResultCheck, resultCalendlyBtn,
  submitPricingLead, EMPTY_CONTACT, type Contact,
} from './ui';

// BEG HCM SOFTWARE (isolved People Cloud) - GET INSTANT QUOTE - 5 TIERS.
// Ported from the approved artifact beg-hcm-page-full.jsx (LOCKED July 1, 2026).
// Tier names Comply and Grow confirmed by Anthony July 1 ($35 / $45 PEPM, no base fee).
// Custom path at 200+ employees or 4+ EINs. 20% book-today annual discount (HCM only).

interface Opt {
  label: string;
  count?: number;
  eins?: number;
  score?: number;
  lvl?: number;
  need?: boolean;
  emoji?: string;
  custom?: boolean;
}

const EMP_OPTS: Opt[] = [
  { label: '1-14 employees', count: 10 }, { label: '15-25 employees', count: 20 },
  { label: '26-50 employees', count: 38 }, { label: '51-100 employees', count: 75 },
  { label: '101-200 employees', count: 150 }, { label: '200+ employees', count: 250, custom: true },
];

const STEPS: { id: string; q: string; hint: string; opts: Opt[]; grid?: boolean }[] = [
  { id: 'employees', q: 'How many employees are on the platform?', hint: 'This drives your per-employee price', opts: EMP_OPTS },
  { id: 'eins', q: 'How many EINs (legal entities) do you run?', hint: 'Some tiers carry a base fee per EIN',
    opts: [{ label: 'Just one EIN', eins: 1 }, { label: '2 EINs', eins: 2 }, { label: '3 EINs', eins: 3 }, { label: '4 or more', eins: 4, custom: true }] },
  { id: 'current', q: 'What are you running HR and payroll on today?', hint: 'Choose one to continue', grid: true,
    opts: [
      { label: 'ADP', emoji: '🏢' }, { label: 'Paychex', emoji: '🏢' },
      { label: 'Paycom', emoji: '🏢' }, { label: 'Paycor', emoji: '🏢' },
      { label: 'Paylocity', emoji: '🏢' }, { label: 'Gusto', emoji: '🌯' },
      { label: 'QuickBooks', emoji: '📗' }, { label: 'Workday', emoji: '🏢' },
      { label: 'Spreadsheets / manual', emoji: '📝' }, { label: 'Nothing yet', emoji: '🆕' },
    ] },
  { id: 'benefitsAdmin', q: 'How is benefits enrollment and administration handled today?', hint: 'Open enrollment, ACA filings, COBRA, carrier updates',
    opts: [
      { label: 'Our broker owns all of it', need: false, emoji: '🤵' },
      { label: 'HR juggles it in spreadsheets', need: true, emoji: '🤹' },
      { label: 'Honestly, nobody really owns it', need: true, emoji: '😬' },
      { label: "We don't offer benefits", need: false, emoji: '🚫' },
    ] },
  { id: 'states', q: 'How many states are your employees in?', hint: 'isolved covers all 50 - this just shapes setup',
    opts: [{ label: 'One state' }, { label: '2-5 states' }, { label: '6+ states' }] },
];

type Screen = 'quiz' | 'modules' | 'reco' | 'custom' | 'contact' | 'submitting' | 'result';

// Question numbering across the mixed flow (6 visible questions total)
const Q_NUM: Record<string, number> = { employees: 1, eins: 2, current: 3, benefitsAdmin: 5, states: 6 };
const TOTAL_Q = 6;

export default function HcmPricingForm({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<Screen>('quiz');
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, Opt>>({});
  const [picks, setPicks] = useState<string[]>([]);
  const [tierKey, setTierKey] = useState<HcmTierKey | null>(null);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [show, setShow] = useState(true);

  const fade = (fn: () => void) => { setShow(false); setTimeout(() => { fn(); setShow(true); }, 170); };
  const qNum = screen === 'modules' ? 4 : (Q_NUM[STEPS[step]?.id] ?? 1);
  const progressMap: Record<Screen, number> = { quiz: Math.round((qNum / TOTAL_Q) * 60), modules: 40, reco: 70, contact: 88, submitting: 95, result: 100, custom: 100 };
  const prog = progressMap[screen] ?? 0;

  function togglePick(id: string) {
    setPicks(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  }

  function pick(opt: Opt) {
    const id = STEPS[step].id;
    setAns(p => ({ ...p, [id]: opt }));
    if (opt.custom) { fade(() => setScreen('custom')); return; }
    if (id === 'current') { fade(() => setScreen('modules')); return; }
    if (id === 'benefitsAdmin') { fade(() => setScreen('reco')); return; }
    if (id === 'states') { fade(() => setScreen('contact')); return; }
    fade(() => setStep(step + 1));
  }
  function afterModules() {
    if (!picks.length) return;
    const i = STEPS.findIndex(s => s.id === 'benefitsAdmin');
    fade(() => { setScreen('quiz'); setStep(i); });
  }
  function acceptReco(key: HcmTierKey) {
    setTierKey(key);
    const i = STEPS.findIndex(s => s.id === 'states');
    fade(() => { setScreen('quiz'); setStep(i); });
  }
  function back() {
    if (screen === 'contact') { const i = STEPS.findIndex(s => s.id === 'states'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'reco') { const i = STEPS.findIndex(s => s.id === 'benefitsAdmin'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'modules') { const i = STEPS.findIndex(s => s.id === 'current'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'custom') { fade(() => setScreen('quiz')); }
    else if (screen === 'quiz') {
      const id = STEPS[step].id;
      if (id === 'states') fade(() => setScreen('reco'));
      else if (id === 'benefitsAdmin') fade(() => setScreen('modules'));
      else if (step > 0) fade(() => setStep(step - 1));
      else onClose();
    }
  }

  const canSubmit = !!(contact.name && contact.company && contact.email);

  const emp = ans.employees?.count ?? 0;
  const eins = ans.eins?.eins ?? 1;
  const tier = tierKey ? HCM_TIERS[tierKey] : HCM_TIERS.pay;
  const hasBase = tier.base > 0;
  const baseCost = hasBase ? tier.base * eins : 0;
  const pepmCost = emp * tier.pepm;
  const monthly = baseCost + pepmCost;
  const annual = monthly * 12;
  const bensNeed = ans.benefitsAdmin?.need === true;
  const reco = hcmRecoFromPicks(picks, bensNeed);
  const pickedNames = HCM_PICK_MODULES.filter(m => picks.includes(m.id)).map(m => m.name);
  const liveRank = HCM_TIERS[HCM_TIER_ORDER[HCM_PICK_MODULES.filter(m => picks.includes(m.id)).reduce((r, m) => Math.max(r, m.rank), 0)]];
  const chosenRank = tierKey ? HCM_TIERS[tierKey].rank : 0;
  const bensGap = reco.bensNeed && chosenRank < 3;

  function submit() {
    if (!canSubmit) return;
    fade(() => setScreen('submitting'));
    const lines = [
      `Tier: ${tier.name} (${tier.pkg})`,
      `Modules picked: ${pickedNames.join('; ')}`,
      `Employees: ${ans.employees?.label ?? ''} · EINs: ${eins}`,
      hasBase ? `${tier.name} base: $${tier.base} x ${eins} EIN${eins > 1 ? 's' : ''} = ${money(baseCost)}/mo` : 'No platform base fee at this tier',
      `Platform: ~${emp} x $${tier.pepm} PEPM = ${money(pepmCost)}/mo`,
      `MONTHLY: ${money(monthly)}  ANNUAL: ${money(annual)}`,
      `20% book-today annual discount: ${money(annual * 0.8)} (saves ${money(annual * 0.2)}; honor if call booked within 24h; final pricing may vary)`,
      'One-time implementation: quoted on the call (15-50 EE bracket fee; over 50 EEs additional per-employee by tier)',
    ].join('\n');
    const done = submitPricingLead({
      service: 'hcm-software',
      name: contact.name, email: contact.email, company: contact.company, phone: contact.phone,
      pricing_summary: lines,
      answers: JSON.stringify({
        employees: ans.employees?.label ?? '', eins: ans.eins?.label ?? '', current: ans.current?.label ?? '',
        modules: pickedNames,
        benefits_admin: ans.benefitsAdmin?.label ?? '', states: ans.states?.label ?? '',
        recommended: reco.key, chosen: tierKey ?? reco.key, benefits_gap: bensGap ? 'yes' : 'no',
        monthly: money(monthly), annual: money(annual),
        discount_annual: money(annual * 0.8), you_keep: money(annual * 0.2),
        tier_name: tier.name, tier_pkg: tier.pkg,
      }),
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
    Promise.all([done, new Promise(r => setTimeout(r, 900))]).then(() => fade(() => setScreen('result')));
  }

  return (
    <>
      <TopBar
        eyebrow="INSTANT HCM QUOTE"
        right={screen === 'quiz' ? `${qNum} / ${TOTAL_Q}` : screen === 'modules' ? `${picks.length} selected` : screen === 'reco' ? 'Our pick' : screen === 'contact' ? 'Last step' : 'Done'}
        progress={prog}
      />
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {screen === 'quiz' && (() => {
          const st = STEPS[step];
          const cur = ans[st.id];
          return (
            <Wrap show={show}>
              <Eyebrow>QUESTION {qNum} OF {TOTAL_Q}</Eyebrow>
              <QTitle q={st.q} hint={st.hint} />
              <div style={st.grid ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' } : {}}>
                {st.opts.map((opt, i) => (
                  <OptionCard key={i} selected={cur?.label === opt.label} onClick={() => pick(opt)} emoji={opt.emoji} label={opt.label} grid={st.grid} />
                ))}
              </div>
              <BackLink onClick={back} />
            </Wrap>
          );
        })()}

        {screen === 'modules' && (
          <Wrap show={show}>
            <Eyebrow>QUESTION 4 OF {TOTAL_Q}</Eyebrow>
            <h2 style={{ fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '4px', color: T1 }}>Which modules matter most to you?</h2>
            <p style={{ color: T3, fontSize: '0.72rem', marginBottom: '4px' }}>Tap everything you want the platform to own</p>
            <p style={{ color: '#555', fontSize: '0.7rem', marginBottom: '13px', lineHeight: 1.5 }}>Payroll, HR core and the isolved Connector for Claude are included in every tier</p>
            <div style={{ maxHeight: '46vh', overflowY: 'auto', paddingRight: '2px' }}>
              {Array.from(new Set(HCM_PICK_MODULES.map(m => m.group))).map(g => (
                <div key={g} style={{ marginBottom: '4px' }}>
                  <div style={{ fontSize: '0.66rem', color: G, fontWeight: 800, letterSpacing: '0.05em', margin: '10px 0 7px', textTransform: 'uppercase' }}>{g}</div>
                  {HCM_PICK_MODULES.filter(m => m.group === g).map(m => {
                    const sel = picks.includes(m.id);
                    return (
                      <button key={m.id} type="button" onClick={() => togglePick(m.id)} style={{ width: '100%', marginBottom: '6px', background: sel ? '#130d00' : CARD, border: `2px solid ${sel ? G : LINE}`, borderRadius: '9px', padding: '9px 11px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '8px', transition: 'all 0.13s' }}>
                        <span style={{ minWidth: '16px', height: '16px', borderRadius: '5px', border: `2px solid ${sel ? G : '#333'}`, background: sel ? G : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', color: '#000', flexShrink: 0, marginTop: '1px' }}>{sel ? '✓' : ''}</span>
                        <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>{m.emoji}</span>
                        <span style={{ flex: 1, lineHeight: 1.3 }}>
                          <span style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: sel ? G : '#ccc' }}>{m.name}</span>
                          <span style={{ display: 'block', fontSize: '0.68rem', color: T2, marginTop: '2px', lineHeight: 1.4 }}>{m.desc}</span>
                        </span>
                        <span style={{ fontSize: '0.62rem', color: T3, flexShrink: 0, marginTop: '2px' }}>{HCM_TIERS[HCM_TIER_ORDER[m.rank]].name}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
            <GoldBtn onClick={afterModules} disabled={!picks.length}>
              {picks.length ? `Build my package: ${liveRank.name} →` : 'Select modules to continue'}
            </GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'reco' && (
          <Wrap show={show}>
            <Eyebrow>BASED ON YOUR ANSWERS</Eyebrow>
            <h2 style={{ fontSize: '1.12rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '14px', color: T1 }}>
              Your tier: <span style={{ color: G }}>{HCM_TIERS[reco.key].name}</span> <span style={{ color: T3, fontSize: '0.78rem', fontWeight: 400 }}>({HCM_TIERS[reco.key].pkg})</span>
            </h2>

            <div style={{ background: '#130d00', border: `2px solid ${G}`, borderRadius: '12px', padding: '15px', marginBottom: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.4rem' }}>{HCM_TIERS[reco.key].emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: G }}>{HCM_TIERS[reco.key].name} - {HCM_TIERS[reco.key].tagline}</div>
                  <div style={{ fontSize: '0.72rem', color: T2 }}>
                    {HCM_TIERS[reco.key].base > 0
                      ? `$${HCM_TIERS[reco.key].base}/mo per EIN + $${HCM_TIERS[reco.key].pepm}/employee/month`
                      : `$${HCM_TIERS[reco.key].pepm}/employee/month - no platform base fee`}
                  </div>
                </div>
                <span style={{ background: G, color: '#000', fontSize: '0.6rem', fontWeight: 800, borderRadius: '5px', padding: '3px 8px', letterSpacing: '0.04em' }}>OUR PICK</span>
              </div>
              <div style={{ borderTop: '1px solid #2a2000', paddingTop: '10px', marginBottom: '11px' }}>
                <div style={{ fontSize: '0.64rem', color: T3, fontWeight: 800, letterSpacing: '0.05em', marginBottom: '7px' }}>WHY THIS FITS YOU</div>
                {reco.reasons.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '7px', fontSize: '0.76rem', color: '#bbb', marginBottom: '6px', lineHeight: 1.45 }}>
                    <span style={{ color: G, flexShrink: 0 }}>✓</span><span>{r}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #2a2000', paddingTop: '10px' }}>
                <div style={{ fontSize: '0.64rem', color: T3, fontWeight: 800, letterSpacing: '0.05em', marginBottom: '7px' }}>WHAT&apos;S INSIDE ({hcmAllModules(reco.key).length} MODULES)</div>
                <div style={{ maxHeight: '150px', overflowY: 'auto', paddingRight: '2px' }}>
                  {hcmAllModules(reco.key).map(([name, desc], i) => (
                    <div key={i} style={{ marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#ddd' }}>{name}</span>
                      <span style={{ fontSize: '0.7rem', color: T2 }}> - {desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => acceptReco(reco.key)} style={{ width: '100%', marginTop: '11px', background: G, color: '#000', border: 'none', borderRadius: '9px', padding: '12px', fontSize: '0.88rem', fontWeight: 800, cursor: 'pointer' }}>
                Continue with {HCM_TIERS[reco.key].name} →
              </button>
            </div>

            <div style={{ fontSize: '0.64rem', color: T3, fontWeight: 800, letterSpacing: '0.05em', margin: '12px 0 7px' }}>OR PICK A DIFFERENT TIER</div>
            {HCM_TIER_ORDER.filter(k => k !== reco.key).map(k => (
              <button key={k} type="button" onClick={() => acceptReco(k)} style={{ width: '100%', marginBottom: '6px', background: CARD, border: `1px solid ${LINE}`, borderRadius: '10px', padding: '10px 13px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1rem' }}>{HCM_TIERS[k].emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#999' }}>{HCM_TIERS[k].name} <span style={{ color: T3, fontWeight: 400 }}>({HCM_TIERS[k].pkg})</span></div>
                  <div style={{ fontSize: '0.65rem', color: T3 }}>
                    {HCM_TIERS[k].base > 0 ? `$${HCM_TIERS[k].base}/EIN + $${HCM_TIERS[k].pepm}/employee` : `$${HCM_TIERS[k].pepm}/employee, no base fee`}
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: T3 }}>→</span>
              </button>
            ))}
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'custom' && (
          <Wrap show={show}>
            <div style={{ textAlign: 'center', padding: '14px 0' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>🏛️</div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px', color: T1 }}>You&apos;re in custom-quote territory.</h2>
              <p style={{ color: T2, fontSize: '0.82rem', lineHeight: 1.6, margin: '0 auto 16px', maxWidth: '340px' }}>
                At your size the platform is scoped module by module around your org, with volume pricing packaged pricing can&apos;t touch. A 15-minute call gets you an exact number.
              </p>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: G, color: '#000', borderRadius: '10px', padding: '13px', fontSize: '0.9rem', fontWeight: 800, textDecoration: 'none', marginBottom: '8px' }}>
                Book Your Custom Quote Call →
              </a>
              <BackLink onClick={back} />
            </div>
          </Wrap>
        )}

        {screen === 'contact' && (
          <Wrap show={show}>
            <Eyebrow>ALMOST THERE</Eyebrow>
            <h2 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '4px', color: T1 }}>Where should we send your quote?</h2>
            <p style={{ color: T3, fontSize: '0.72rem', marginBottom: '17px' }}>No spam. Just your quote and next steps.</p>
            <ContactFields contact={contact} setContact={setContact} />
            <GoldBtn onClick={submit} disabled={!canSubmit}>Show My Quote →</GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'submitting' && <Wrap show={show}><Spinner label="Building your quote…" /></Wrap>}

        {screen === 'result' && (
          <Wrap show={show}>
            <div style={{ textAlign: 'center' }}>
              <ResultCheck />
              <h2 style={{ fontSize: '1.22rem', fontWeight: 800, marginBottom: '5px', color: T1 }}>Here&apos;s your quote.</h2>
              <p style={{ color: T2, fontSize: '0.79rem', lineHeight: 1.55, margin: '0 auto 16px', maxWidth: '330px' }}>
                isolved People Cloud on the {tier.name} tier ({tier.pkg}) for {ans.employees?.label.toLowerCase()}.
              </p>

              <div style={{ background: '#0c0800', border: `2px solid ${G}`, borderRadius: '14px', padding: '18px 15px 15px', marginBottom: '12px', textAlign: 'left' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.62rem', color: T3, letterSpacing: '0.05em', marginBottom: '3px' }}>MONTHLY</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: G, lineHeight: 1 }}>{money(monthly)}</div>
                    <div style={{ fontSize: '0.6rem', color: T3, marginTop: '2px' }}>per month</div>
                  </div>
                  <div style={{ textAlign: 'center', borderLeft: `1px solid ${LINE}` }}>
                    <div style={{ fontSize: '0.62rem', color: T3, letterSpacing: '0.05em', marginBottom: '3px' }}>ANNUAL</div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: T1, lineHeight: 1 }}>{money(annual)}</div>
                    <div style={{ fontSize: '0.6rem', color: T3, marginTop: '2px' }}>per year</div>
                  </div>
                </div>

                <div style={{ background: '#0f0b02', borderRadius: '9px', padding: '11px 12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.6rem', color: T3, fontWeight: 800, letterSpacing: '0.06em', marginBottom: '8px' }}>WHAT&apos;S IN YOUR QUOTE</div>
                  {hasBase && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#aaa', marginBottom: '5px' }}>
                      <span>{tier.name} base · ${tier.base} × {eins} EIN{eins > 1 ? 's' : ''}</span><span style={{ fontWeight: 700 }}>{money(baseCost)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#aaa', marginBottom: '5px' }}>
                    <span>Platform · ~{emp} × ${tier.pepm}</span><span style={{ fontWeight: 700 }}>{money(pepmCost)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: G, fontWeight: 800, borderTop: `1px solid ${LINE}`, paddingTop: '7px', marginTop: '3px' }}>
                    <span>Total / month</span><span>{money(monthly)}</span>
                  </div>
                  {!hasBase && (
                    <div style={{ fontSize: '0.64rem', color: '#4ade80', marginTop: '7px' }}>✓ No platform base fee at this tier - pure per-employee pricing</div>
                  )}
                  <div style={{ fontSize: '0.66rem', color: T2, marginTop: '7px', paddingTop: '7px', borderTop: `1px solid ${LINE}` }}>
                    + one-time implementation, quoted on your call
                  </div>
                  {bensGap && (
                    <div style={{ fontSize: '0.66rem', color: '#fbbf24', marginTop: '6px' }}>
                      ⚠ Your answers flagged unowned benefits admin - the Comply tier includes it. Worth comparing on your call.
                    </div>
                  )}
                </div>

                <div style={{ background: '#0d0a14', border: '1px solid #2d2245', borderRadius: '10px', padding: '12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.62rem', color: '#b79df5', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '6px' }}>🤖 INCLUDED: ISOLVED CONNECTOR FOR CLAUDE</div>
                  <p style={{ fontSize: '0.73rem', color: '#aaa', lineHeight: 1.55, margin: 0 }}>
                    Ask Claude AI to pull a report, check PTO or start a task and isolved does the work. Chatbots answer questions. Your platform completes them. No competitor on your list has this.
                  </p>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.62rem', color: T3, fontWeight: 800, letterSpacing: '0.05em', marginBottom: '7px' }}>EVERY TIER ALSO INCLUDES</div>
                  {HCM_PLATFORM_FEATURES.slice(1).map(([ic, name, desc]) => (
                    <div key={name} style={{ display: 'flex', gap: '7px', fontSize: '0.73rem', color: '#888', marginBottom: '5px' }}><span>{ic}</span><span><strong style={{ color: '#bbb' }}>{name}</strong> - {desc}</span></div>
                  ))}
                  <div style={{ display: 'flex', gap: '7px', fontSize: '0.73rem', color: '#888', marginBottom: '5px' }}><span>🇺🇸</span><span>All 50 states covered</span></div>
                </div>

                <div style={{ background: '#071207', border: '1px solid #1a3d1a', borderRadius: '10px', padding: '12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.62rem', color: '#4ade80', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '7px' }}>🎁 BOOK TODAY, LOCK IN 20% OFF YOUR ANNUAL PLAN</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.74rem', color: '#aaa' }}>Annual plan</span>
                    <span style={{ fontSize: '0.78rem', color: T3, textDecoration: 'line-through' }}>{money(annual)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
                    <span style={{ fontSize: '0.74rem', color: '#4ade80', fontWeight: 700 }}>With today&apos;s discount</span>
                    <span style={{ fontSize: '1.05rem', color: '#4ade80', fontWeight: 900 }}>{money(annual * 0.8)}</span>
                  </div>
                  <div style={{ background: '#0d1f0d', borderRadius: '8px', padding: '8px 11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.6rem', color: '#4ade80', fontWeight: 700 }}>YOU KEEP</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#4ade80' }}>{money(annual * 0.2)}</span>
                  </div>
                  <p style={{ fontSize: '0.64rem', color: T2, margin: '8px 0 0', lineHeight: 1.5 }}>
                    Book your discovery call today and the 20% annual discount is locked to your quote. Final pricing may vary based on your exact configuration.
                  </p>
                </div>

                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={resultCalendlyBtn}>
                  Book Today and Claim 20% Off →
                </a>
                <p style={{ color: T3, fontSize: '0.63rem', textAlign: 'center' }}>Exact quote, implementation and discount confirmed on your call</p>
              </div>

              <p style={{ color: T3, fontSize: '0.64rem', marginBottom: '12px' }}>A copy was sent to <span style={{ color: '#555' }}>{contact.email}</span></p>
              <button type="button" onClick={onClose} style={{ background: 'none', border: `1px solid ${LINE}`, borderRadius: '8px', padding: '7px 16px', color: '#666', fontSize: '0.7rem', cursor: 'pointer' }}>Close</button>
            </div>
          </Wrap>
        )}
      </div>
    </>
  );
}
