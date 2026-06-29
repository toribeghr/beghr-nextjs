import { NextResponse } from 'next/server';

// Lead capture for payroll resources. Sends two emails via Resend (free tier):
//   1) notification to Tori (the lead lands in her inbox, reply-to set to the lead)
//   2) branded auto-reply to the visitor with the exact asset they requested + Calendly
//
// Required env var (set in Vercel project settings): RESEND_API_KEY
// Sender domain (beghr.com) must be verified in Resend for delivery to work.

const FROM = 'BEG Resources <noreply@beghr.com>';
const NOTIFY_TO = 'tori.wint@beghr.com';
const REPLY_TO = 'tori.wint@beghr.com';
const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';
const GOLD = '#ECAC60';

async function sendEmail(key: string, payload: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

export async function POST(req: Request) {
  let data: Record<string, string> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'bad request' }, { status: 400 });
  }

  // honeypot: bots fill this hidden field; silently accept and drop
  if (data.botcheck) return NextResponse.json({ success: true });

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const company = (data.company || '').trim();
  const tool = (data.tool || 'BEG payroll resource').trim();
  const assetUrl = (data.asset_url || '').trim();
  const fullUrl = assetUrl.startsWith('/') ? `https://www.beghr.com${assetUrl}` : 'https://www.beghr.com/resources';

  if (!email || !email.includes('@')) {
    return NextResponse.json({ success: false, error: 'invalid email' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ success: false, error: 'email not configured' }, { status: 500 });
  }

  // 1) notify Tori
  const notifyHtml = `
    <h2 style="margin:0 0 12px">New payroll lead: ${tool}</h2>
    <table style="font-size:14px;line-height:1.6">
      <tr><td style="color:#555;padding-right:12px">Name</td><td><strong>${name || '(not given)'}</strong></td></tr>
      <tr><td style="color:#555;padding-right:12px">Email</td><td>${email}</td></tr>
      <tr><td style="color:#555;padding-right:12px">Company</td><td>${company || '(not given)'}</td></tr>
      <tr><td style="color:#555;padding-right:12px">Requested</td><td>${tool}</td></tr>
      <tr><td style="color:#555;padding-right:12px">Page</td><td><a href="${fullUrl}">${fullUrl}</a></td></tr>
    </table>`;

  // 2) branded auto-reply to the visitor
  const replyHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#222;max-width:520px">
      <p>Hi ${name || 'there'},</p>
      <p>Thanks for requesting the <strong>${tool}</strong>. Here it is:</p>
      <p>
        <a href="${fullUrl}" style="background:${GOLD};color:#000;font-weight:bold;padding:12px 22px;border-radius:6px;text-decoration:none;display:inline-block">Open your ${tool}</a>
      </p>
      <p>A quick note while you have it open: most employers who grab one of these are spending more hours on payroll than they realize. BEG runs payroll fully managed -- every filing, every deadline, every W-2 -- starting at $25 to $45 per employee per month, with no separate fees and no per-run charges.</p>
      <p>If you would rather just hand it off, grab 15 minutes here:<br>
        <a href="${CALENDLY}" style="color:#9a6b1f">Book a free 15-minute discovery call</a>
      </p>
      <p style="margin-top:24px">Talk soon,<br>
        Tori Wint<br>
        Business Executive Group<br>
        <a href="https://www.beghr.com" style="color:#9a6b1f">beghr.com</a>
      </p>
    </div>`;

  const [notified] = await Promise.all([
    sendEmail(key, {
      from: FROM,
      to: [NOTIFY_TO],
      reply_to: email || REPLY_TO,
      subject: `New payroll lead: ${tool}`,
      html: notifyHtml,
    }),
    sendEmail(key, {
      from: FROM,
      to: [email],
      reply_to: REPLY_TO,
      subject: `Here is your ${tool} from BEG`,
      html: replyHtml,
    }),
  ]);

  // As long as the notification to Tori went out, treat it as success for the visitor.
  return NextResponse.json({ success: notified });
}
