'use client';

import { useState } from 'react';
import { CALENDLY, G, CARD, LINE, T1, T2, T3 } from './pricing';
import {
  TopBar, Wrap, Eyebrow, QTitle, OptionCard, GoldBtn, BackLink,
  ContactFields, Spinner, ResultCheck, resultCalendlyBtn,
  submitPricingLead, EMPTY_CONTACT, type Contact,
} from './ui';
import {
  BEN_TIERS, BEN_TIER_ORDER, BEN_NEEDS, benRecoFromNeeds, benEstimate, carrierFeedEstimate, rangeText,
  type BenTierKey,
} from './benefitsServices';

// BEG MANAGED BENEFITS - INSTANT ESTIMATE. Public positioning: "BEG Managed
// Benefits, powered by isolved." LOCKED (July 5, 2026): lead-gen ESTIMATE,
// ranges only, never hard isolved numbers. NEVER state publicly that the
// client signs/pays isolved or that isolved produces the quote; that is
// discovery-call material. BROKER RULE: never against brokers; BEG administers,
// the broker advises and places coverage. Dark design system per the approved
// artifacts. Do not redesign.

interface Opt { label: string; count?: number; feeds?: string; emoji?: string }

const EMP_OPTS: Opt[] = [
  { label: '1-49 employees', count: 25 }, { label: '50-99 employees', count: 75 },
  { label: '100-249 employees', count: 175 }, { label: '250-499 employees', count: 375 },
  { label: '500-999 employees', count: 750 }, { label: '1,000+ employees', count: 1500 },
];

const STEPS: { id: string; q: string; hint: string; opts: Opt[]; grid?: boolean }[] = [
  { id: 'employees', q: 'How many employees do you have?', hint: 'This shapes your monthly estimate', opts: EMP_OPTS },
  { id: 'adminToday', q: 'Who runs benefits administration today?', hint: 'Enrollment, life events, carrier updates. Your broker keeps advising either way.',
    opts: [
      { label: 'HR juggles it in spreadsheets', emoji: '🤹' },
      { label: 'One person owns it, on top of everything else', emoji: '🙋' },
      { label: 'Split between us and our broker', emoji: '🤝' },
      { label: 'Honestly, nobody really owns it', emoji: '😬' },
    ] },
  { id: 'carriers', q: 'How many benefit carriers do you work with?', hint: 'Medical, dental, vision, life. Carrier connections keep them all in sync.',
    opts: [
      { label: '1-2 carriers', feeds: '1-2' },
      { label: '3-5 carriers', feeds: '3-5' },
      { label: '6 or more carriers', feeds: '6+' },
    ] },
  { id: 'oeTiming', q: 'When is your next open enrollment?', hint: 'Setup works back from this date',
    opts: [
      { label: 'Within 3 months', emoji: '🔥' },
      { label: '3 to 6 months out', emoji: '🗓️' },
      { label: '6+ months out', emoji: '🌱' },
      { label: 'Not sure yet', emoji: '🤷' },
    ] },
];

type Screen = 'quiz' | 'needs' | 'reco' | 'contact' | 'submitting' | 'result';

const Q_NUM: Record<string, number> = { employees: 1, adminToday: 2, carriers: 4, oeTiming: 5 };
const TOTAL_Q = 5;

export default function BenefitsPricingForm({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<Screen>('quiz');
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, Opt>>({});
  const [needs, setNeeds] = useState<string[]>([]);
  const [tierKey, setTierKey] = useState<BenTierKey | null>(null);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [show, setShow] = useState(true);

  const fade = (fn: () => void) => { setShow(false); setTimeout(() => { fn(); setShow(true); }, 170); };
  const qNum = screen === 'needs' ? 3 : (Q_NUM[STEPS[step]?.id] ?? 1);
  const progressMap: Record<Screen, number> = { quiz: Math.round((qNum / TOTAL_Q) * 60), needs: 36, reco: 70, contact: 88, submitting: 95, result: 100 };
  const prog = progressMap[screen] ?? 0;

  function toggleNeed(id: string) {
    setNeeds(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  }

  function pick(opt: Opt) {
    const id = STEPS[step].id;
    setAns(p => ({ ...p, [id]: opt }));
    if (id === 'adminToday') { fade(() => setScreen('needs')); return; }
    if (id === 'carriers') { fade(() => setScreen('quiz')); setStep(STEPS.findIndex(s => s.id === 'oeTiming')); return; }
    if (id === 'oeTiming') { fade(() => setScreen('contact')); return; }
    fade(() => setStep(step + 1));
  }
  function afterNeeds() {
    if (!needs.length) return;
    fade(() => setScreen('reco'));
  }
  function acceptReco(key: BenTierKey) {
    setTierKey(key);
    const i = STEPS.findIndex(s => s.id === 'carriers');
    fade(() => { setScreen('quiz'); setStep(i); });
  }
  function back() {
    if (screen === 'contact') { const i = STEPS.findIndex(s => s.id === 'oeTiming'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'reco') { fade(() => setScreen('needs')); }
    else if (screen === 'needs') { const i = STEPS.findIndex(s => s.id === 'adminToday'); fade(() => { setScreen('quiz'); setStep(i); }); }
    else if (screen === 'quiz') {
      const id = STEPS[step].id;
      if (id === 'oeTiming') { const i = STEPS.findIndex(s => s.id === 'carriers'); fade(() => setStep(i)); }
      else if (id === 'carriers') fade(() => setScreen('reco'));
      else if (step > 0) fade(() => setStep(step - 1));
      else onClose();
    }
  }

  const canSubmit = !!(contact.name && contact.company && contact.email);

  const emp = ans.employees?.count ?? 25;
  const reco = benRecoFromNeeds(needs);
  const tier = BEN_TIERS[tierKey ?? reco.key];
  const est = benEstimate(tier.key, emp);
  const manyCarriers = ans.carriers?.feeds === '3-5' || ans.carriers?.feeds === '6+';
  const feedEst = carrierFeedEstimate(emp);
  const cobraFlag = needs.includes('cobra');
  const pickedNames = BEN_NEEDS.filter(n => needs.includes(n.id)).map(n => n.name);
  const liveTier = BEN_TIERS[benRecoFromNeeds(needs).key];

  function submit() {
    if (!canSubmit) return;
    fade(() => setScreen('submitting'));
    const lines = [
      `Tier: ${tier.name} (BEG Managed Benefits, powered by isolved)`,
      `Employees: ${ans.employees?.label ?? ''}`,
      `Needs picked: ${pickedNames.join('; ')}`,
      `ESTIMATE: ${rangeText(est)}/mo`,
      manyCarriers ? `Carrier connections add-on estimate: ${rangeText(feedEst)}/mo` : 'Carrier connections: 1-2, scoped on call',
      cobraFlag ? 'COBRA/continuation: FLAGGED, scope on call' : 'COBRA/continuation: not flagged',
      `Admin today: ${ans.adminToday?.label ?? ''} · Carriers: ${ans.carriers?.label ?? ''} · Next OE: ${ans.oeTiming?.label ?? ''}`,
      'Estimate based on your answers; exact pricing is confirmed on your discovery call.',
    ].join('\n');
    const done = submitPricingLead({
      service: 'managed-benefits',
      name: contact.name, email: contact.email, company: contact.company, phone: contact.phone,
      pricing_summary: lines,
      answers: JSON.stringify({
        employees: ans.employees?.label ?? '', admin_today: ans.adminToday?.label ?? '',
        needs: pickedNames,
        carriers: ans.carriers?.label ?? '', oe_timing: ans.oeTiming?.label ?? '',
        recommended: reco.key, chosen: tier.key,
        est_range: rangeText(est) + '/mo',
        carrier_feed_est: manyCarriers ? rangeText(feedEst) + '/mo' : '',
        cobra_flag: cobraFlag ? 'yes' : '',
      }),
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
    Promise.all([done, new Promise(r => setTimeout(r, 900))]).then(() => fade(() => setScreen('result')));
  }

  return (
    <>
      <TopBar
        eyebrow="INSTANT BENEFITS ESTIMATE"
        right={screen === 'quiz' ? `${qNum} / ${TOTAL_Q}` : screen === 'needs' ? `${needs.length} selected` : screen === 'reco' ? 'Our pick' : screen === 'contact' ? 'Last step' : 'Done'}
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

        {screen === 'needs' && (
          <Wrap show={show}>
            <Eyebrow>QUESTION 3 OF {TOTAL_Q}</Eyebrow>
            <h2 style={{ fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '4px', color: T1 }}>What should stop being your problem?</h2>
            <p style={{ color: T3, fontSize: '0.72rem', marginBottom: '13px' }}>Tap everything you want handled</p>
            <div style={{ maxHeight: '46vh', overflowY: 'auto', paddingRight: '2px' }}>
              {BEN_NEEDS.map(n => {
                const sel = needs.includes(n.id);
                return (
                  <button key={n.id} type="button" onClick={() => toggleNeed(n.id)} style={{ width: '100%', marginBottom: '6px', background: sel ? '#130d00' : CARD, border: `2px solid ${sel ? G : LINE}`, borderRadius: '9px', padding: '9px 11px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '8px', transition: 'all 0.13s' }}>
                    <span style={{ minWidth: '16px', height: '16px', borderRadius: '5px', border: `2px solid ${sel ? G : '#333'}`, background: sel ? G : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', color: '#000', flexShrink: 0, marginTop: '1px' }}>{sel ? '✓' : ''}</span>
                    <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>{n.emoji}</span>
                    <span style={{ flex: 1, lineHeight: 1.3 }}>
                      <span style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: sel ? G : '#ccc' }}>{n.name}</span>
                      <span style={{ display: 'block', fontSize: '0.68rem', color: T2, marginTop: '2px', lineHeight: 1.4 }}>{n.desc}</span>
                    </span>
                    <span style={{ fontSize: '0.62rem', color: T3, flexShrink: 0, marginTop: '2px' }}>{n.flagOnly ? 'On call' : BEN_TIERS[BEN_TIER_ORDER[n.rank]].name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
            <GoldBtn onClick={afterNeeds} disabled={!needs.length}>
              {needs.length ? `Build my plan: ${liveTier.name} →` : 'Select needs to continue'}
            </GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'reco' && (
          <Wrap show={show}>
            <Eyebrow>OUR PICK FOR YOU</Eyebrow>
            <QTitle q={`${BEN_TIERS[reco.key].name} covers everything you tapped`} hint="Estimates shown; exact pricing is confirmed on your call. Any tier is selectable." />
            {BEN_TIER_ORDER.map(k => {
              const t = BEN_TIERS[k];
              const r = benEstimate(k, emp);
              const isReco = k === reco.key;
              const covers = t.rank >= reco.rank;
              return (
                <button key={k} type="button" onClick={() => acceptReco(k)} style={{ width: '100%', marginBottom: '7px', background: isReco ? '#130d00' : CARD, border: `2px solid ${isReco ? G : LINE}`, borderRadius: '10px', padding: '12px 13px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.13s' }}>
                  <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: isReco ? G : T1 }}>
                      {t.name}{isReco ? ' · our pick' : ''}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: isReco ? G : '#ccc', fontWeight: 600 }}>{rangeText(r)}/mo est.</span>
                  </span>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: T2, marginTop: '3px' }}>{t.tag}{!covers ? ' · does not cover everything you tapped' : ''}</span>
                </button>
              );
            })}
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'contact' && (
          <Wrap show={show}>
            <Eyebrow>LAST STEP</Eyebrow>
            <QTitle q="Where should we send your estimate?" hint="On screen right now, in your inbox 10 seconds later" />
            <ContactFields contact={contact} setContact={setContact} />
            <GoldBtn onClick={submit} disabled={!canSubmit}>Show my estimate →</GoldBtn>
            <BackLink onClick={back} />
          </Wrap>
        )}

        {screen === 'submitting' && <Wrap show={show}><Spinner label="Building your estimate..." /></Wrap>}

        {screen === 'result' && (
          <Wrap show={show}>
            <div style={{ textAlign: 'center' }}>
              <ResultCheck />
              <div style={{ fontSize: '0.66rem', color: G, fontWeight: 800, letterSpacing: '0.07em', marginBottom: '6px' }}>YOUR MANAGED BENEFITS ESTIMATE</div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T1, marginBottom: '2px' }}>{tier.name} · {ans.employees?.label ?? ''}</h2>
              <p style={{ fontSize: '0.66rem', color: T2, margin: '2px 0 0' }}>BEG Managed Benefits, powered by isolved</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: G, margin: '6px 0 2px' }}>{rangeText(est)}/mo</div>
              {manyCarriers && (
                <p style={{ fontSize: '0.72rem', color: '#ccc', margin: '4px 0 0' }}>Carrier connections add-on: {rangeText(feedEst)}/mo estimated</p>
              )}
              {cobraFlag && (
                <p style={{ fontSize: '0.72rem', color: '#ccc', margin: '4px 0 0' }}>COBRA and continuation: scoped exactly on your call</p>
              )}
              <p style={{ fontSize: '0.68rem', color: T2, margin: '8px 0 14px', lineHeight: 1.5 }}>
                Estimate based on your answers. Exact pricing and scope are confirmed on your discovery call. One-time setup is quoted on the call. You keep your broker; BEG handles the administration.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: '10px', padding: '12px 14px', marginBottom: '12px' }}>
              <div style={{ fontSize: '0.66rem', color: G, fontWeight: 800, letterSpacing: '0.05em', marginBottom: '7px' }}>WHAT {tier.name.toUpperCase()} HANDLES</div>
              {tier.features.map((f, i) => (
                <p key={i} style={{ fontSize: '0.74rem', color: '#ccc', margin: '0 0 5px', lineHeight: 1.45 }}>✓ {f}</p>
              ))}
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={resultCalendlyBtn}>Book your free 15-minute call</a>
            <p style={{ fontSize: '0.66rem', color: T3, textAlign: 'center', margin: '6px 0 0' }}>Your estimate is in your inbox. The call turns it into your exact price.</p>
          </Wrap>
        )}
      </div>
    </>
  );
}
