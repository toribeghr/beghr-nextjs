import { NextResponse } from 'next/server';

// Sponsorship checkout submissions go to two places:
//  1. Notion — a new row in the existing "Sponsors" database (BEG Operations workspace),
//     status "Prospective" until the bank transfer is confirmed by hand.
//  2. Email — reuses the same zero-config lead webhook already wired up for pricing/lead
//     capture elsewhere on the site (see /api/lead/route.ts). No new secret needed for this half.
//
// Requires ONE new Vercel environment variable: NOTION_TOKEN
//   Create an internal integration at https://www.notion.so/my-integrations, then share the
//   "Sponsors" database with it (••• menu on the database -> Connections -> add the integration).
//   Without NOTION_TOKEN set, the order still emails through; only the Notion row is skipped.

const LEAD_WEBHOOK =
  'https://script.google.com/macros/s/AKfycbzoW8klM7v0FPurAKiENIZJdBXZn36ae4ZWZcC3eeQ422jcjA1MOHDZM2QR6NSHlgs/exec';

const SPONSORS_DATABASE_ID = '3d106597-c660-4942-b21f-8bcb5e53142e';

const TIERS: Record<string, { label: string; price: number }> = {
  bronze: { label: 'Bronze', price: 500 },
  silver: { label: 'Silver', price: 1000 },
  gold: { label: 'Gold', price: 1500 },
  platinum: { label: 'Platinum', price: 3000 },
};

export async function POST(req: Request) {
  let data: Record<string, string | number> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'bad request' }, { status: 400 });
  }

  // honeypot
  if (data.botcheck) return NextResponse.json({ success: true });

  const tierKey = String(data.tier || '').toLowerCase();
  const tier = TIERS[tierKey];
  if (!tier) {
    return NextResponse.json({ success: false, error: 'invalid tier' }, { status: 400 });
  }

  const email = String(data.email || '').trim();
  if (!email || !email.includes('@')) {
    return NextResponse.json({ success: false, error: 'invalid email' }, { status: 400 });
  }

  const fullName = String(data.fullName || '').trim();
  const companyName = String(data.companyName || '').trim();
  const phone = String(data.phone || '').trim();
  const quantity = Math.max(1, Math.min(10, Number(data.quantity) || 1));
  const total = tier.price * quantity;
  const sponsorName = companyName || fullName || `${tier.label} Sponsor (unnamed)`;

  const notesText = [
    `Submitted via beghr.com/network/sponsorship checkout.`,
    `Contact: ${fullName || '(not provided)'}${phone ? ` · ${phone}` : ''}`,
    `Quantity: ${quantity} x ${tier.label} @ $${tier.price.toLocaleString()}`,
    `Payment: bank transfer, pending manual confirmation.`,
    `Submitted: ${new Date().toISOString()}`,
  ].join('\n');

  const results = await Promise.allSettled([
    // 1. Notion row
    (async () => {
      const token = process.env.NOTION_TOKEN;
      if (!token) throw new Error('NOTION_TOKEN not configured');
      const res = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parent: { database_id: SPONSORS_DATABASE_ID },
          properties: {
            'Sponsor Name': { title: [{ text: { content: sponsorName } }] },
            Status: { select: { name: 'Prospective' } },
            'Contact Email': { email },
            Tier: { select: { name: tier.label } },
            'Annual Value': { number: total },
            Notes: { rich_text: [{ text: { content: notesText } }] },
          },
        }),
      });
      if (!res.ok) throw new Error(`Notion ${res.status}: ${await res.text()}`);
    })(),

    // 2. Email via the existing lead webhook (same payload shape as /api/lead)
    fetch(LEAD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      body: JSON.stringify({
        name: fullName,
        email,
        company: companyName,
        tool: 'Sponsorship Order',
        asset_url: '',
        page: '/network/sponsorship/checkout',
        service: `${tier.label} Sponsorship`,
        phone,
        pricing_summary: `${quantity} x ${tier.label} @ $${tier.price.toLocaleString()} = $${total.toLocaleString()}`,
        answers: '',
      }),
    }),
  ]);

  const notionOk = results[0].status === 'fulfilled';
  const emailOk = results[1].status === 'fulfilled';

  if (!notionOk) {
    console.error('Sponsorship order: Notion write failed', results[0].status === 'rejected' ? results[0].reason : '');
  }
  if (!emailOk) {
    console.error('Sponsorship order: email webhook failed', results[1].status === 'rejected' ? results[1].reason : '');
  }

  // Success as long as at least one notification path worked, so a real order is never
  // silently dropped just because one integration hiccups.
  return NextResponse.json({ success: notionOk || emailOk, notionOk, emailOk });
}
