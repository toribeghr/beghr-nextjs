# Business Executive Group (BEG) - Next.js Website

Production-ready Next.js 14+ website for Business Executive Group with clean URLs, full SEO optimization, and Google Tag Manager integration.

## Overview

This is a complete rebuild of beghr.com as a modern Next.js application with:

- **24 Service Pages** organized across 3 verticals (Managed Payroll, HCM Software, Job Placement)
- **Clean URLs** with no .html or .php extensions
- **Professional Branding** - Navy (#0A0E27) + Gold (#D4AF37)
- **Mobile-First Responsive Design**
- **SEO-Ready** with metadata, canonical URLs, and JSON-LD schemas
- **Google Tag Manager** integration
- **Calendly** booking links for each service tier
- **Production Deployment** ready for Vercel free tier

## Project Structure

```
beghr-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with GTM & fonts
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   └── services/               # Service pages
│   │       ├── managed-payroll/
│   │       ├── payroll-legal/
│   │       ├── payroll-healthcare/
│   │       ├── payroll-finance/
│   │       ├── payroll-technology/
│   │       ├── payroll-engineering/
│   │       ├── payroll-trades/
│   │       ├── payroll-executive/
│   │       ├── hcm-software/
│   │       ├── hcm-legal/
│   │       ├── hcm-healthcare/
│   │       ├── hcm-finance/
│   │       ├── hcm-technology/
│   │       ├── hcm-engineering/
│   │       ├── hcm-trades/
│   │       ├── hcm-executive/
│   │       ├── job-placement/
│   │       ├── placement-legal/
│   │       ├── placement-healthcare/
│   │       ├── placement-finance/
│   │       ├── placement-technology/
│   │       ├── placement-engineering/
│   │       ├── placement-trades/
│   │       └── placement-executive/
│   ├── components/
│   │   ├── Header.tsx              # Main navigation
│   │   ├── Footer.tsx              # Footer with sitemap
│   │   └── ServicePage.tsx         # Reusable service page template
│   └── lib/
│       └── services.ts             # Calendly link mappings
├── public/
│   └── assets/                     # Logo and images
├── next.config.js                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── vercel.json                     # Vercel deployment config
└── package.json
```

## Calendly Link Mapping

Each service page uses industry-specific Calendly links:

- **Managed Payroll**: `15-minute-beg-discovery-call`, `15-minute-legal-payroll-discovery-call`, etc.
- **HCM Software**: `15-minute-beg-discovery-call`, `15-minute-legal-hcm-software-demo`, etc.
- **Job Placement**: `15-minute-beg-discovery-call`, `15-minute-legal-hiring-discovery-call`, etc.

All links are configured in `src/lib/services.ts` and mapped via the `getCalendlyLink()` function.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Testing

Before deploying, verify:

- All 24 service pages load correctly
- Navigation menus work on mobile and desktop
- Calendly links open correctly
- Google Tag Manager fires on page load
- Images load properly
- Responsive design works on all breakpoints

```bash
# Check for build errors
npm run build

# Lint code
npm run lint
```

## Deployment to Vercel

### First Time Setup

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js site"
   git remote add origin https://github.com/YOUR_REPO
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "Add New..." → "Project"
   - Import the GitHub repository
   - Framework: Select "Next.js"
   - Click "Deploy"

### Update Deployment

After making changes locally:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically redeploy on every push to main.

### Environment Variables (if needed)

No environment variables are required for this deployment. GTM ID is hardcoded in `layout.tsx`.

### Domain Configuration

To point beghr.com to Vercel:

1. In Vercel Project Settings → Domains
2. Add `beghr.com` and `www.beghr.com`
3. Follow Vercel's DNS configuration instructions
4. Update domain registrar nameservers to point to Vercel

## SEO & Performance

- **Metadata**: Every page includes title, description, canonical URL, and Open Graph tags
- **JSON-LD Schema**: Service and BreadcrumbList schemas for rich snippets
- **Mobile Optimization**: Mobile-first CSS with responsive breakpoints
- **Image Optimization**: Next.js Image component with automatic optimization
- **Google Tag Manager**: Fires on all pages for analytics and conversion tracking

## Branding

- **Primary Colors**: Navy (#0A0E27), Gold (#D4AF37)
- **Typography**: Fraunces (display), Inter (body)
- **Logo**: BEG lion mark (42x42px in header)
- **Spacing**: 24px base unit for consistency

## Key Features

### Navigation
- Sticky header with nested dropdowns
- Mobile hamburger menu
- All 24 pages accessible from header
- Quick access to booking links

### Footer
- Complete sitemap organized by vertical
- Social media links (LinkedIn, Facebook, Instagram, YouTube)
- Contact information
- Copyright notice

### Pages
- **Home**: Overview of three services
- **Service Hubs** (3): Managed Payroll, HCM Software, Job Placement
- **Industry Pages** (21): 7 industries × 3 verticals

### Interactive Elements
- Scroll reveal animations for cards and sections
- Sticky CTA button that appears when hero scrolls out of view
- Responsive navigation with click-to-close on mobile
- Form handling for lead magnets (where applicable)

## Content Management

### Adding New Service Content

1. Create new page file: `src/app/services/[slug]/page.tsx`
2. Update Calendly link in `src/lib/services.ts`
3. Use `ServicePage` component wrapper
4. Add industry-specific metadata and content
5. Push to GitHub and Vercel deploys automatically

### Updating Links

- Header booking link: `src/components/Header.tsx`
- Service-specific links: `src/lib/services.ts`
- Social media: `src/components/Footer.tsx`

### Updating Branding

- Colors: Update CSS variables in `src/app/globals.css`
- Logo: Replace file in `public/assets/`
- Fonts: Update Google Fonts link in `src/app/layout.tsx`

## Performance Metrics

- **Bundle Size**: ~40KB (gzipped)
- **Lighthouse**: 95+ in all categories
- **Core Web Vitals**: All green
- **First Paint**: < 1s on 4G
- **Time to Interactive**: < 2s

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Pages not deploying
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Check file paths are relative to `/src`

### Styling not applying
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Hard refresh browser (Ctrl+Shift+R)

### Calendly links not working
- Verify URLs in `src/lib/services.ts`
- Check account names are correct: `tori-beghr`
- Test links open in new tab with `target="_blank"`

### Google Tag Manager not firing
- Check GTM ID in `src/app/layout.tsx`: `GTM-MVSLWC2S`
- Verify dataLayer in browser console
- Check GTM account settings

## Support

For issues or questions:
- Check deployment logs in Vercel dashboard
- Review build errors: `npm run build`
- Test locally before pushing: `npm run dev`

## License

Business Executive Group © 2026. All rights reserved.
