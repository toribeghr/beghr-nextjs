# BEG Lead-Capture Form — Setup (Free, ~3 minutes)

This is a BEG-branded form that lives on your website and emails every lead straight to your inbox. It costs $0, has no monthly limit, and needs no credit card. It uses a free service called **Web3Forms** just to deliver the emails.

## What you get
- A form on your site (black + gold, on brand) that says exactly which tool the person is requesting.
- Every submission (name, email, company) emailed to you automatically.
- A "you're all set" thank-you screen that can show a download button and a "book a call" link.

---

## Step 1 — Get your free key (30 seconds)
1. Go to **https://web3forms.com**
2. Type the email address where you want leads to arrive (e.g. anthony@beghr.com).
3. They email you an **Access Key** (a string of letters and numbers). Copy it.

That's the only signup. No password, no billing.

## Step 2 — Paste the key into the form (1 line)
Open this file in the project:

`src/components/LeadCaptureForm.tsx`

Near the top you'll see this line:

```
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';
```

Replace `YOUR_ACCESS_KEY_HERE` with the key from Step 1. Save. Done — the form now works everywhere it's used.

## Step 3 — Put the form on any page
Drop this onto any page where you want to capture a lead (I can wire it in for you on whichever pages you choose):

```
import LeadCaptureForm from '@/components/LeadCaptureForm';

<LeadCaptureForm
  toolName="Salary & Hiring Guide"
  toolDescription="Get the 2026 salary ranges across 19 industries, sent to your inbox."
  assetUrl="/resources/salary-guide"
  assetLabel="Get the guide"
  calendlyLink="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
/>
```

Change `toolName` and `toolDescription` per tool so the messaging matches what they're opting into. `assetUrl`/`assetLabel` are optional (the button shown after they submit). `calendlyLink` is optional.

---

## Want leads in a Google Sheet instead of your email?
Same form, different free backend. Tell me and I'll switch it to **Google Apps Script**, which drops every lead into a Google Sheet you own. Setup is a little longer (about 10 minutes: create a Sheet, paste a short script I give you, click Deploy, copy the link). Both are free — email delivery is just the simplest to start.

## Notes
- The form has a hidden anti-spam field, so bots get filtered automatically.
- Nothing here costs money at any volume.
- Once your key is pasted and the form is on a page, just push the change live like any other update and it's working.

Just say the word and I'll wire the form onto the specific pages you want to gate (for example a printable Salary Guide PDF, the Hiring Manager Toolkit, or the 45-Day Search Playbook once we build those).
