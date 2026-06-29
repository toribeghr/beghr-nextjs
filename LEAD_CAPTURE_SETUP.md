# BEG Lead-Capture — Setup (Free, Google Sheet)

Every form on the site captures leads into a **Google Sheet you own**, at $0, no monthly limit, no API key, nothing to configure in Vercel. Leads also trigger an email notification.

## How it works
1. A form (`LeadCaptureForm` or `PayrollLeadCaptureForm`) posts to the same-origin route **`/api/lead`**.
2. `/api/lead` (`src/app/api/lead/route.ts`) forwards the lead server-side to a **Google Apps Script web app** (the `LEAD_WEBHOOK` constant in that file).
3. Apps Script appends a row to the **BEG Leads** Google Sheet and emails the address set in `NOTIFY`.

Posting same-origin to `/api/lead` (then server-to-server to Apps Script) avoids browser CORS entirely. A successful submit also pushes a `generate_lead` event into `dataLayer` for analytics.

---

## The Apps Script (the free backend)

Lives in the **BEG Leads** Google Sheet → Extensions → Apps Script. Current code is mirrored in `BEG_Lead_Capture.gs` at the repo root. Summary:

```javascript
const SHEET_ID = '...';                 // the BEG Leads sheet ID
const NOTIFY  = 'theanthony.moretti@gmail.com';
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  SpreadsheetApp.openById(SHEET_ID).getSheets()[0]
    .appendRow([new Date(), d.name, d.email, d.company, d.tool, d.page || d.asset_url]);
  MailApp.sendEmail(NOTIFY, 'New BEG lead: ' + d.tool, /* details */);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Re-deploying the Apps Script (only if the script changes)
1. In the Apps Script editor: **Deploy → New deployment → Web app**, Execute as **Me**, Who has access **Anyone**.
2. Copy the **Web app URL** (ends in `/exec`).
3. Paste it into `LEAD_WEBHOOK` in `src/app/api/lead/route.ts`, commit, and ship.

> Editing an existing deployment instead of creating a new one keeps the same `/exec` URL, so the route doesn't need updating.

---

## Putting a form on a page

```tsx
import LeadCaptureForm from '@/components/LeadCaptureForm';

<LeadCaptureForm
  toolName="Salary & Hiring Guide"
  toolDescription="Get the 2026 salary ranges across 19 industries."
  assetUrl="/resources/salary-guide"   // optional: button shown after submit
  assetLabel="Get the guide"           // optional
  calendlyLink="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"  // optional
/>
```

`PayrollLeadCaptureForm` is the payroll-branded variant; both post to `/api/lead`, so both land in the same sheet. Change `toolName`/`toolDescription` per tool so the opt-in messaging matches the asset.

---

## Notes
- Hidden honeypot field filters bots automatically.
- $0 at any volume; data persists in a sheet you own (recoverable, queryable, readable for reporting).
- **Deferred (needs budget):** a branded autoresponder that emails the visitor the requested asset. When funded, that can be added in Apps Script (free `MailApp` reply) or via Resend.
- Old web3forms email-only flow is retired — it had no data store, so leads couldn't be recovered if an email failed.
