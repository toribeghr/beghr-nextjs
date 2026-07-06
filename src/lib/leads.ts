// Lead persistence for the compliance template library.
//
// The site's existing lead store is a Google Apps Script web app that appends a row to
// the "BEG Leads" Google Sheet and emails a notification (see LEAD_CAPTURE_SETUP.md and
// src/app/api/lead/route.ts). saveLead() forwards template downloads into that same store
// so every captured lead lands in one place.

export interface Lead {
  name: string;
  workEmail: string;
  phone: string;
  templateSlug: string;
  timestamp: string; // ISO 8601
}

// Same Apps Script endpoint the rest of the site posts to. Kept here (not imported from
// the route) so saveLead stays self-contained and callable from anywhere server-side.
const LEAD_WEBHOOK =
  'https://script.google.com/macros/s/AKfycbzoW8klM7v0FPurAKiENIZJdBXZn36ae4ZWZcC3eeQ422jcjA1MOHDZM2QR6NSHlgs/exec';

/**
 * Persist a captured lead. Returns true on success, false on failure.
 *
 * Failure here MUST NOT block the document download — the caller generates and streams
 * the file regardless, and simply logs a failed save. The lead is best-effort.
 */
export async function saveLead(lead: Lead): Promise<boolean> {
  // TODO: wire to Notion "BEG Operations" outreach log via Notion API.
  // When ready, create a page in the Notion database here (name, work email, phone,
  // template slug, timestamp) in addition to — or instead of — the Sheet write below.
  // Isolating it in this function keeps the generation flow untouched when that lands.

  try {
    const payload = {
      name: lead.name,
      email: lead.workEmail,
      phone: lead.phone,
      // Reuse the Apps Script's existing columns: `tool` labels the asset, `page` the source.
      tool: `Template: ${lead.templateSlug}`,
      page: `/resources/templates/${lead.templateSlug}`,
      asset_url: `/resources/templates/${lead.templateSlug}`,
      company: '',
      timestamp: lead.timestamp,
    };

    const res = await fetch(LEAD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    return res.ok;
  } catch {
    return false;
  }
}
