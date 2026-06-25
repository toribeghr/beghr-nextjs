# Deployment Guide - BEG Next.js Website

Complete step-by-step guide to deploy the BEG website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Node.js 18+ installed locally
- Git installed locally

## Step 1: Prepare Local Repository

```bash
# Navigate to project directory
cd beghr-nextjs

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: BEG Next.js website

- 24 service pages with clean URLs
- Responsive design (mobile-first)
- Google Tag Manager integration
- Calendly booking links
- Professional branding (navy + gold)"

# Create .gitignore if needed
echo ".next/
node_modules/
.env.local
.DS_Store" >> .gitignore
```

## Step 2: Push to GitHub

### Option A: Create New Repository

```bash
# Go to https://github.com/new
# Create repository: "beghr-nextjs"
# Do NOT initialize with README, .gitignore, or license

# After creating, follow GitHub's instructions:
git remote add origin https://github.com/[YOUR_USERNAME]/beghr-nextjs.git
git branch -M main
git push -u origin main
```

### Option B: Push to Existing Repository

```bash
git remote add origin https://github.com/[YOUR_USERNAME]/beghr-nextjs.git
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Connect GitHub to Vercel (Recommended)

1. Go to https://vercel.com and sign in
2. Click **"Add New"** → **"Project"**
3. Select **"Import Git Repository"**
4. Authorize GitHub if prompted
5. Search for and select `beghr-nextjs` repository
6. Click **"Import"**
7. On Import Project page:
   - **Framework Preset**: Next.js (auto-selected)
   - **Project Name**: `beghr` or `beghr-nextjs`
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - Leave environment variables empty
8. Click **"Deploy"**
9. Wait for build to complete (2-3 minutes)

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# ? Set up and deploy? Y
# ? Which scope? (select your account)
# ? Link to existing project? N
# ? What's your project name? beghr
# ? In which directory is your code? ./
# ? Want to modify vercel.json? N
# ? Auto add Vercel configuration? Y

# Deploy to production:
vercel --prod
```

## Step 4: Verify Deployment

After deployment completes:

1. Visit the Vercel project URL (e.g., `https://beghr-nextjs.vercel.app`)
2. Test pages:
   - Home: `/`
   - Services: `/services/managed-payroll`, `/services/hcm-software`, etc.
   - Verify clean URLs work (no .html or .php)
3. Check mobile responsiveness
4. Verify Google Tag Manager fires (check browser console → dataLayer)
5. Test Calendly links open correctly in new tabs
6. Verify footer sitemap links work
7. Check images load correctly

## Step 5: Point Domain to Vercel

### Update Domain Registrar (Porkbun example)

1. Go to Porkbun.com and log in
2. Find beghr.com and click **"Manage"**
3. Go to **"Nameservers"** section
4. Change nameservers to Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. Save changes
6. Wait 24-48 hours for DNS propagation

### Configure in Vercel

1. In Vercel project dashboard, go to **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter `beghr.com`
4. Vercel will show nameserver instructions
5. Confirm nameservers are set correctly in Porkbun
6. Wait for verification (usually instant after DNS propagates)
7. Add `www.beghr.com` as alias:
   - Click **"Add"** again
   - Enter `www.beghr.com`
   - Select **"Redirect to beghr.com"** if you want www to redirect

### SSL Certificate

Vercel automatically provisions free SSL certificates. Verify HTTPS works:

```bash
curl -I https://beghr.com
# Should return 200 OK and show secure headers
```

## Step 6: Google Tag Manager Setup

GTM ID `GTM-MVSLWC2S` is already configured in code.

To verify it works:

1. Open https://beghr.com in browser
2. Open DevTools (F12)
3. Go to Console tab
4. Type: `window.dataLayer`
5. Should show array with GTM events

To update GTM ID in the future:

1. Edit `src/app/layout.tsx`
2. Find the GTM script: `GTM-MVSLWC2S`
3. Replace with new ID
4. Commit and push:
   ```bash
   git add src/app/layout.tsx
   git commit -m "Update GTM ID"
   git push
   ```
5. Vercel will auto-deploy

## Step 7: Monitoring & Updates

### View Deployment Status

- Go to Vercel Dashboard
- Click on project
- See latest deployments and their status
- Click deployment to see build logs

### Make Updates

After making changes locally:

```bash
# Test locally first
npm run dev
# Visit http://localhost:3000 and verify changes

# Then push to GitHub
git add .
git commit -m "Description of changes"
git push origin main

# Vercel automatically deploys
# Monitor deployment in Vercel dashboard
```

### Rollback Deployment

If something breaks:

1. Go to Vercel Dashboard
2. Click on project
3. Find previous deployment
4. Click **"Promote to Production"**

## Troubleshooting

### Build Fails on Vercel

Check build logs:

1. Go to Vercel project
2. Click on failed deployment
3. Click **"View Build Logs"**
4. Look for error messages

Common issues:
- TypeScript errors: Check `npm run build` locally
- Missing imports: Verify file paths use `/src` alias
- Environmental issues: Clear `.next` folder and rebuild

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Pages Not Loading

1. Check DNS propagation: `nslookup beghr.com`
2. Clear Vercel cache:
   - Go to Settings → Advanced
   - Click **"Clear Cache"**
   - Trigger new deployment (push to GitHub)
3. Verify `.next` folder exists locally:
   ```bash
   npm run build
   ls -la .next
   ```

### Slow Performance

1. Check Vercel Analytics: Dashboard → "Analytics"
2. Identify slow pages and optimize:
   - Images: Use WebP format
   - JavaScript: Check bundle size
   - CSS: Minimize unused styles
3. Run Lighthouse audit:
   ```bash
   npx lighthouse https://beghr.com
   ```

### Calendly Links Not Working

1. Verify URLs in `src/lib/services.ts`
2. Check account name: should be `tori-beghr`
3. Test link format:
   ```
   https://calendly.com/tori-beghr/15-minute-beg-discovery-call
   ```
4. Ensure links have `target="_blank"` (already in code)

## Security Checklist

- [ ] `.gitignore` includes sensitive files
- [ ] No secrets in code or `vercel.json`
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Security headers configured in `next.config.js`
- [ ] Content Security Policy headers verified

## Performance Optimization

### Monitor Performance

```bash
# Run Lighthouse audit
npx lighthouse https://beghr.com --view

# Check Core Web Vitals
npm install -g web-vitals
web-vitals https://beghr.com
```

### Optimize Assets

If needed, optimize images before adding:

```bash
# Install ImageMagick
brew install imagemagick  # macOS
# or apt-get install imagemagick  # Linux

# Optimize PNG
convert beg-logo-gold.png -quality 95 -strip beg-logo-gold.png

# Convert to WebP for faster delivery
cwebp -q 95 image.png -o image.webp
```

## Maintenance Schedule

- **Weekly**: Check Vercel deployment logs
- **Monthly**: Review analytics in Vercel dashboard
- **Quarterly**: Audit Core Web Vitals and performance
- **Yearly**: Update dependencies and security patches

## Useful Vercel Commands

```bash
# View current project
vercel whoami

# View deployment history
vercel ls

# View environment variables
vercel env list

# Promote specific deployment to production
vercel promote [DEPLOYMENT_URL]

# View analytics
vercel analytics
```

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Community: https://github.com/vercel/vercel/discussions
- Create Issue: https://github.com/vercel/vercel/issues
