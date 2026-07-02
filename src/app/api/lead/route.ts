import { NextResponse } from 'next/server';

// Lead capture (free, no API key, no monthly cost).
// Each submission is forwarded server-side to a Google Apps Script web app, which appends a
// row to the BEG Leads Google Sheet and emails a notification. Forms post to this route on the
// same origin, so there is no browser CORS issue, and there is no secret to configure in Vercel.
const LEAD_WEBHOOK =
  'https://script.google.com/macros/s/AKfycbzoW8klM7v0FPurAKiENIZJdBXZn36ae4ZWZcC3eeQ422jcjA1MOHDZM2QR6NSHlgs/exec';

export async function POST(req: Request) {
  let data: Record<string, string> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'bad request' }, { status: 400 });
  }

  // honeypot: bots fill this hidden field; silently accept and drop
  if (data.botcheck) return NextResponse.json({ success: true });

  const email = (data.email || '').trim();
  if (!email || !email.includes('@')) {
    return NextResponse.json({ success: false, error: 'invalid email' }, { status: 400 });
  }

  const payload = {
    name: (data.name || '').trim(),
    email,
    company: (data.company || '').trim(),
    tool: (data.tool || 'BEG resource').trim(),
    asset_url: (data.asset_url || '').trim(),
    page: (data.page || data.asset_url || '').trim(),
    // Instant-pricing fields (empty for resource forms; Apps Script routes on `service`)
    service: (data.service || '').trim(),
    phone: (data.phone || '').trim(),
    pricing_summary: (data.pricing_summary || '').trim(),
    answers: (data.answers || '').trim(),
  };

  try {
    const res = await fetch(LEAD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    return NextResponse.json({ success: res.ok });
  } catch {
    return NextResponse.json({ success: false, error: 'capture failed' }, { status: 502 });
  }
}
