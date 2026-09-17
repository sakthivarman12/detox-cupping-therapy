# Detox Cupping Therapy - Premium Website

A modern, luxury wellness website for Detox Cupping Therapy featuring dry cupping, wet cupping/Hijama, and flower medicine services.

## Features

✨ **Premium Design**
- Modern, minimalist aesthetic
- Professional typography with serif/sans-serif combination
- Sophisticated color palette (cream, sage, forest green, gold)
- Smooth animations and micro-interactions
- Mobile-responsive design

🎯 **User Experience**
- Hero section with parallax portrait interaction
- Smooth scroll navigation
- Sticky navbar with backdrop blur
- Floating WhatsApp contact button
- Mobile-friendly hamburger menu

📱 **Sections**
- **Hero**: Brand positioning with professional credentials
- **About**: Therapist biography and personal story
- **Qualifications**: Pharmacy, cupping, and flower medicine credentials
- **Services**: Detailed pages for each service with preparation and aftercare
- **Session Journey**: 4-step process visualization
- **Approach**: Philosophy highlighting key values
- **Safety**: Comprehensive safety and disclaimer information
- **FAQ**: Accordion-style frequently asked questions
- **Booking**: Professional consultation booking form
- **Contact**: Multiple contact methods

🔒 **Safety & Ethics**
- No fake testimonials or fabricated credentials
- Comprehensive medical disclaimers
- Safety-first messaging throughout
- Editable placeholders for all customizable content
- Privacy-conscious form design

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React icons
- **Fonts**: Playfair Display + Poppins via Google Fonts
- **Deployment**: Vercel-ready

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## Customization

All website content is managed in a single file for easy updates:

**`/lib/site-data.ts`** - Central content hub containing:
- Therapist information
- Qualifications and certifications
- Service descriptions
- FAQ items
- Contact information
- SEO metadata

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions on:
- Adding therapist information
- Uploading certificates and images
- Adding client testimonials
- Updating services
- Customizing colors and fonts
- Deploying the website

## Project Structure

```
/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   └── services/            # Service detail pages
│       ├── dry-cupping/
│       ├── wet-cupping/
│       └── flower-medicine/
├── components/              # React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── QualificationsSection.tsx
│   ├── ServicesSection.tsx
│   ├── SessionJourney.tsx
│   ├── ApproachSection.tsx
│   ├── SafetySection.tsx
│   ├── FAQAccordion.tsx
│   ├── BookingForm.tsx
│   ├── BookingSection.tsx
│   ├── ServiceDetailPage.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   └── site-data.ts         # All website content
├── public/                   # Static assets
│   ├── images/
│   │   ├── therapist/
│   │   ├── dry-cupping/
│   │   ├── wet-cupping/
│   │   └── flower-medicine/
│   └── certificates/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── CUSTOMIZATION.md
```

## Design System

### Colors
- **Cream**: #F8F7F3 (backgrounds)
- **Ivory**: #FFFBF5 (primary background)
- **Beige**: #E8E1D8 (accents)
- **Sage**: #C5D5C0 (borders, subtle accents)
- **Forest**: #2D5A46 (primary text, CTAs)
- **Charcoal**: #2C2C2C (secondary text)
- **Gold**: #D4A574 (highlights)

### Typography
- **Body**: Poppins (sans-serif)
- **Headings**: Playfair Display (serif)
- Responsive font sizing with clamp()

### Components
- Premium card styling with subtle borders and shadows
- Rounded corners (border-radius: 12px)
- Smooth transitions on all interactive elements
- Backdrop blur effects for modern aesthetics

## Accessibility

✓ Semantic HTML structure
✓ Keyboard navigation support
✓ ARIA labels where needed
✓ Focus states on interactive elements
✓ `prefers-reduced-motion` support
✓ Sufficient color contrast
✓ Alt text on all images
✓ Responsive design for all screen sizes

## Performance

- Static site generation (SSG) for home page
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Core Web Vitals optimized

**Lighthouse Target**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## SEO

✓ Structured metadata with Open Graph
✓ Twitter Card support
✓ Semantic HTML (heading hierarchy, etc.)
✓ Responsive meta descriptions
✓ Mobile-friendly design (mobile-first)
✓ Sitemap ready
✓ Robots.txt ready

## Deployment

### Vercel (Recommended)

Vercel is the best option for Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set custom domain in Vercel dashboard
```

### Other Platforms

The project can be deployed to any Node.js-compatible platform:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Fly.io

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for platform-specific instructions.

## Environment Variables

Optional environment variables in `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

## Legal & Compliance

### Medical Disclaimers
The website includes comprehensive disclaimers that:
- State that cupping and flower medicine are complementary wellness practices
- Do NOT claim to cure, treat, or prevent diseases
- Encourage consultation with healthcare providers
- Emphasize the importance of professional assessment

**Do NOT modify these disclaimers without legal review.**

### Professional Ethics
- Do NOT add fake testimonials
- Do NOT create fabricated certificates
- Do NOT use misleading credentials
- Do NOT imply medical qualifications you don't have
- Maintain accurate, up-to-date information

## Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Image Not Loading
- Ensure image files are in `/public/images/` directory
- Check file extensions match the component imports (.svg, .jpg, .png)
- Use `npm run build` to ensure all static assets are included

### TypeScript Errors
- Check `tsconfig.json` is correctly configured
- Ensure all component imports use correct paths
- Run `npm run build` to validate

## Performance Optimization

Current optimizations:
- Static site generation
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind (no runtime overhead)
- Minimal JavaScript bundle
- No external dependencies beyond essentials

Further optimization opportunities:
- Image webp conversion
- Service worker for offline support
- Advanced caching strategies

## Updates & Maintenance

To keep the site current:

1. **Monthly**: Review and update therapist availability/working hours
2. **Quarterly**: Check all links and external resources
3. **Yearly**: Review medical disclaimers and update if needed
4. **As Needed**: Add new testimonials, update qualifications, refresh photos

## Support & Questions

For technical issues:
1. Check [CUSTOMIZATION.md](./CUSTOMIZATION.md) for common tasks
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS docs: https://tailwindcss.com

For design or branding questions:
- All design decisions are documented in components
- Color palette is in `tailwind.config.ts`
- Fonts are configured in `app/globals.css`

## License

This website template is created for Detox Cupping Therapy.

## Credits

Built with:
- Next.js 15
- Tailwind CSS 3
- Lucide React Icons
- Playfair Display & Poppins Fonts

---

**Last Updated**: September 2026
**Status**: Production Ready ✓
