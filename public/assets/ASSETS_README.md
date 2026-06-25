# Asset Files

## Logo

Place the BEG logo here:

### Files Needed

1. **beg-logo-gold.png** (required)
   - Size: 400x400px or larger
   - Format: PNG with transparent background
   - Color: Gold (#D4AF37)
   - Usage: Header logo (displayed at 42x42px), footer, favicons

### Asset Locations in Code

- Header: `src/components/Header.tsx` → uses `beg-logo-gold.png`
- Footer: `src/components/Footer.tsx` → uses `beg-logo-gold.png`
- Favicon: `src/app/layout.tsx` → references `beg-logo-gold.png`

### How to Add

1. Copy `beg-logo-gold.png` to this directory
2. The Next.js Image component will automatically optimize it
3. No cache busting needed - files are automatically hashed

### Optimization

If adding your own logo:

```bash
# Example: convert PNG to optimized size
convert beg-logo-gold.png -resize 400x400 -quality 95 beg-logo-gold.png
```

## Additional Assets

Add any other images or fonts here:

- `hero-bg.jpg` - Hero section background (optional)
- `testimonial-*.jpg` - Testimonial images (optional)
- `icon-*.svg` - Service icons (optional)

All files should be optimized:
- Images: JPEG or WebP for photos, PNG for graphics with transparency
- SVGs: Minified, no embedded styles
- Max file size: 200KB for images, 50KB for SVGs
