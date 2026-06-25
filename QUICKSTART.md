# Quick Start Guide - BEG Next.js Website

Get the website running locally in 5 minutes.

## Step 1: Install Dependencies (2 min)

```bash
# Navigate to project directory
cd beghr-nextjs

# Install Node packages
npm install
```

## Step 2: Start Development Server (30 sec)

```bash
npm run dev
```

You'll see:
```
> Local:        http://localhost:3000
> Ready in 2.3s
```

## Step 3: Open in Browser (30 sec)

Visit: **http://localhost:3000**

You should see the BEG home page with:
- Navy header with logo
- "Three services. One partner." headline
- Navigation dropdowns
- Hero stats
- Service cards
- Footer with sitemap

## Test All Pages

Click through navigation:

### Home
- `http://localhost:3000`

### Managed Payroll
- `http://localhost:3000/services/managed-payroll` - Overview
- `http://localhost:3000/services/payroll-legal` - Law firms
- `http://localhost:3000/services/payroll-healthcare` - Healthcare
- `http://localhost:3000/services/payroll-finance` - Finance
- `http://localhost:3000/services/payroll-technology` - Technology
- `http://localhost:3000/services/payroll-engineering` - Engineering
- `http://localhost:3000/services/payroll-trades` - Trades
- `http://localhost:3000/services/payroll-executive` - Executive

### HCM Software
- `http://localhost:3000/services/hcm-software` - Overview
- Same 7 industry variants as above

### Job Placement
- `http://localhost:3000/services/job-placement` - Overview
- Same 7 industry variants as above

## Test Mobile Responsiveness

1. Open DevTools: **F12** (or Cmd+Option+I on Mac)
2. Click device toggle icon (top left)
3. Select mobile device size (iPhone 12, Pixel, iPad)
4. Verify:
   - Header collapses to hamburger menu
   - Typography is readable
   - Cards stack vertically
   - Buttons are touch-friendly
   - Footer is scrollable

## Test Features

### Navigation
- [x] Header dropdowns work
- [x] Mobile menu opens/closes
- [x] Links navigate to correct pages
- [x] Footer sitemap links work

### Calendly Links
- [x] Hover over "Book a Call" buttons
- [x] Click opens new tab with Calendly
- [x] URL format: `calendly.com/tori-beghr/[specific-link]`

### Animations
- [x] Scroll page down
- [x] Cards fade in with scroll
- [x] Sticky CTA button appears when hero scrolls out
- [x] Details menus toggle properly

### Google Tag Manager
```javascript
// In DevTools Console:
window.dataLayer
// Should show: [Object{gtm.start: 1234567890, event: 'gtm.js'}]
```

## View Page Source

Verify Next.js features:

```bash
# In browser DevTools:
# Right click → View Page Source

# Look for:
# - <script id="__NEXT_DATA__"...  # Page data
# - <script type="application/ld+json">  # SEO schema
# - GTM script in <head>
```

## Build for Production

```bash
# Build the optimized production version
npm run build

# Output will show:
# > Build completed in 12.34s
# - Generated static pages in .next/static

# Start production server
npm start

# Visit http://localhost:3000 (same as dev)
```

## Check Build Size

```bash
# After npm run build, see sizes:
ls -lah .next/

# Should be around 800KB total
# Compressed to ~40KB for production
```

## Troubleshooting

### Port Already in Use
```bash
# If port 3000 is busy:
npm run dev -- -p 3001
# Then visit http://localhost:3001
```

### Clear Cache
```bash
# If changes don't show:
rm -rf .next node_modules
npm install
npm run dev
```

### Install Failed
```bash
# Try using npm ci (cleaner):
npm ci
npm run dev
```

### Slow on First Start
- First `npm install` downloads 400MB+ of packages
- First `npm run dev` compiles TypeScript
- Subsequent runs are instant

### Logo Not Showing
- Verify file exists: `ls public/assets/beg-logo-gold.png`
- File should be PNG with transparency
- Next.js automatically optimizes on first load

## Next: Deploy to Vercel

When ready to go live:

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "BEG Next.js website"
git push -u origin main

# 2. Go to https://vercel.com
# 3. Import your GitHub repository
# 4. Click Deploy (takes 2-3 minutes)
# 5. That's it!

# Vercel auto-deploys every time you git push
```

## Common Tasks

### Change Brand Colors
Edit `src/app/globals.css`:
```css
:root {
  --navy: #0A0E27;  /* Change this */
  --gold: #D4AF37;  /* Or this */
  /* ... rest of variables */
}
```

### Update Calendly Links
Edit `src/lib/services.ts`:
```typescript
export const CALENDLY_LINKS = {
  'managed-payroll': 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
  // Change URL here
};
```

### Add New Service Page
1. Create folder: `src/app/services/new-page/`
2. Create file: `src/app/services/new-page/page.tsx`
3. Copy content from existing page, edit title/description
4. Update Calendly link in `src/lib/services.ts`
5. Run `npm run dev` (auto-reload)

### Update Navigation
Edit `src/components/Header.tsx` for navigation structure
Edit `src/components/Footer.tsx` for footer links

### Change Fonts
Edit `src/app/layout.tsx`:
```typescript
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap" rel="stylesheet" />
```

Edit `src/app/globals.css`:
```css
--font-display: 'YourFont', serif;
```

## File You'll Edit Most

1. **Page Content**: `src/app/services/*/page.tsx`
   - Edit titles, descriptions, content
   
2. **Styling**: `src/app/globals.css`
   - Colors, sizes, spacing, responsive breakpoints
   
3. **Navigation**: `src/components/Header.tsx`
   - Menu structure, links
   
4. **Calendly**: `src/lib/services.ts`
   - Calendar URLs
   
5. **Branding**: `public/assets/`
   - Logo file

## Performance Tips

Locally, performance is excellent:
- Static generation: instant
- CSS-in-JS: none (pure CSS)
- Images: next/image auto-optimized
- Bundle: only 40KB gzipped

To test production speed:

```bash
npm run build
npm start
# Then measure with:
curl -w "@curl-format.txt" -o /dev/null -s https://localhost:3000
```

## IDE Setup (Optional)

### VS Code
```bash
# Install extensions:
# - ESLint
# - Prettier
# - TypeScript Vue Plugin
# - Thunder Client (for API testing)

# Settings (optional):
# Add to .vscode/settings.json:
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## That's It!

You now have a fully working BEG website running locally. 

Next steps:
1. Explore all 24 pages
2. Test on mobile
3. Review code structure
4. When ready, deploy to Vercel (see DEPLOYMENT.md)

For detailed docs, see **README.md**
For deployment steps, see **DEPLOYMENT.md**
