// Lead persistence for the compliance template library.
//
// Template downloads are captured to two best-effort destinations:
//   1. A Zapier catch-hook (ZAPIER_TEMPLATE_LEADS_WEBHOOK_URL) — the new, purpose-built
//      pipeline that routes each lead to a per-category sheet tab via a Zapier Paths step.
//   2. The site's existing "BEG Leads" Google Apps Script store — kept because it is the
//      master lead sheet AND emails the team a notification on every lead (see
//      LEAD_CAPTURE_SETUP.md / src/app/api/lead/route.ts). Dropping it would lose that
//      notification, so template leads still land there too.
//
// Neither destination may block or fail document generation — both are wrapped so failure
// only logs. To go Zapier-only, delete the section 2 block below.

export interface Lead {
  name: string;
  workEmail: string;
  phone: string;
  templateSlug: string;
  templateTitle: string;
  category: string;
  timestamp: string; // ISO 8601
}

// Same Apps Script endpoint the rest of the site posts to. Kept here (not imported from
// the route) so saveLead stays self-contained and callable from anywhere server-side.
const LEAD_WEBHOOK =
  'https://script.google.com/macros/s/AKfycbzoW8klM7v0FPurAKiENIZJdBXZn36ae4ZWZcC3eeQ422jcjA1MOHDZM2QR6NSHlgs/exec';

/**
 * Persist a captured lead. Returns true only if every attempted destination succeeded.
 *
 * Failure here MUST NOT block the document download — the caller generates and streams
 * the file regardless, and simply logs a failed save. The lead is best-effort.
 */
export async function saveLead(lead: Lead): Promise<boolean> {
  const submittedAt = lead.timestamp;
  const sourceUrl = `https://www.beghr.com/resources/templates/${lead.templateSlug}`;
  let ok = true;

  // 1) Zapier catch-hook — routed to per-category sheet tabs downstream.
  const zapierUrl = process.env.ZAPIER_TEMPLATE_LEADS_WEBHOOK_URL;
  if (!zapierUrl) {
    // Not fatal: the doc still generates. Warn so a missing env var is visible in logs.
    console.warn(
      '[saveLead] ZAPIER_TEMPLATE_LEADS_WEBHOOK_URL is not set — skipping Zapier POST. ' +
        'Set it in the Vercel project settings before this goes live.'
    );
  } else {
    try {
      const res = await fetch(zapierUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: lead.name,
          workEmail: lead.workEmail,
          phone: lead.phone,
          templateSlug: lead.templateSlug,
          templateTitle: lead.templateTitle,
          category: lead.category,
          sourceUrl,
          submittedAt,
        }),
      });
      ok = res.ok && ok;
    } catch {
      ok = false;
    }
  }

  // 2) Existing BEG Leads store (master sheet + team email notification).
  try {
    const res = await fetch(LEAD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: lead.name,
        email: lead.workEmail,
        phone: lead.phone,
        // Reuse the Apps Script's existing columns: `tool` labels the asset, `page` the source.
        tool: `Template: ${lead.templateTitle}`,
        page: sourceUrl,
        asset_url: sourceUrl,
        company: '',
        timestamp: submittedAt,
      }),
      redirect: 'follow',
    });
    ok = res.ok && ok;
  } catch {
    ok = false;
  }

  return ok;
}
