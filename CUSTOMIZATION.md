# Detox Cupping Therapy Website - Customization Guide

This guide explains how to customize the website with your specific information.

## Content Management

All content is centralized in `/lib/site-data.ts`. This single file contains all text, links, and configuration for the website.

### Update Your Information

Edit `/lib/site-data.ts` and fill in the following placeholders:

#### Therapist Information
```typescript
therapist: {
  name: '[THERAPIST NAME]',  // Replace with your name
  title: 'Pharmacy Graduate | Certified Cupping Therapist | Flower Medicine Practitioner',
  bio: '...',  // Your professional biography
  quote: 'Every session begins with understanding the individual.',
  experience: '[YEARS] years of professional practice',
}
```

#### Qualifications
```typescript
qualifications: [
  {
    title: 'Pharmacy Graduate',
    qualification: '[PHARMACY QUALIFICATION]',  // e.g., "B.Pharm"
    institution: '[COLLEGE / UNIVERSITY]',      // e.g., "University of Mumbai"
    year: '[YEAR]',                             // e.g., "2018"
  },
  // ... update the others similarly
]
```

#### Contact Information
```typescript
contact: {
  phone: '[PHONE NUMBER]',
  whatsapp: '[WHATSAPP NUMBER]',
  email: '[EMAIL ADDRESS]',
  address: '[CLINIC ADDRESS]',
  workingHours: '[WORKING HOURS]',
  instagram: '[INSTAGRAM HANDLE]',
  mapsUrl: '[GOOGLE MAPS URL]',
}
```

#### Services
The services are pre-configured. You can edit descriptions, preparation steps, and aftercare instructions directly in the services array.

## Images

### Therapist Portraits
Replace placeholder images in `/public/images/therapist/`:
- `portrait.svg` → `portrait.jpg` (main hero image)
- `portrait-alt.svg` → `portrait-alt.jpg` (about section image)

**Important**: Do NOT use generic stock photos or AI-generated images that imply you are pictured when you are not. Use your actual professional photographs.

### Service Images
Replace images in `/public/images/{service-id}/`:
- `/public/images/dry-cupping/hero.svg` → `.jpg`
- `/public/images/wet-cupping/hero.svg` → `.jpg`
- `/public/images/flower-medicine/hero.svg` → `.jpg`

### Certificates
Replace certificate images in `/public/certificates/`:
- `pharmacy-certificate.svg` → `.jpg`
- `cupping-certification.svg` → `.jpg`
- `flower-medicine-certification.svg` → `.jpg`

**Important**: Only upload actual certificates. Do NOT create fake or fabricated certificates.

### OG Image
Replace `/public/og-image.svg` with a professional `.jpg` image (1200×630px recommended) for social media sharing.

## Testimonials

To add real client testimonials, update the `testimonials` array in `/lib/site-data.ts`:

```typescript
testimonials: [
  {
    name: 'First Name',
    initials: 'F.L.',
    text: 'My experience with [therapist name] was exceptional...',
  },
  // Add more testimonials
]
```

**Important**: 
- Only add testimonials from real clients who have given permission
- Do NOT create fake reviews
- Protect client privacy - use first names only or initials
- Do NOT include sensitive medical information

## FAQ

Edit the FAQ items in `/lib/site-data.ts` to match your practice:

```typescript
faq: [
  {
    question: 'What is dry cupping?',
    answer: 'Your answer here...',
  },
  // Customize as needed
]
```

## Approach Section

The "LISTEN, ASSESS, PERSONALIZE, SUPPORT" approach can be customized:

```typescript
approach: [
  {
    word: 'LISTEN',
    description: 'Understand the person, their goals, and their unique wellness needs.',
  },
  // Customize each word and description
]
```

## Safety Information

The safety disclaimer should not be changed without legal review. Contact a legal professional if you need to modify it.

## SEO Settings

Update SEO metadata in `/lib/site-data.ts`:

```typescript
seo: {
  title: 'Your Custom Title | Detox Cupping Therapy',
  description: 'Your custom meta description...',
  ogImage: '/og-image.jpg',
  twitterHandle: '@your_handle',
}
```

## Environment Variables

Create a `.env.local` file if you need to store sensitive information:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

The WhatsApp number from `siteData.contact.whatsapp` is automatically used, but you can override it with an environment variable if needed.

## Component Customization

### Color Palette

Colors are defined in `/tailwind.config.ts`:
- `cream`: #F8F7F3
- `ivory`: #FFFBF5
- `beige`: #E8E1D8
- `sage`: #C5D5C0
- `forest`: #2D5A46
- `charcoal`: #2C2C2C
- `gold`: #D4A574

To change colors, update the `extend.colors` section in `tailwind.config.ts`.

### Typography

Fonts are configured in `app/globals.css`:
- Body: Poppins (sans-serif)
- Headings: Playfair Display (serif)

To change fonts, update the Google Fonts import and CSS variables.

### Animations

Animations are defined in `tailwind.config.ts`. To disable animations for users who prefer reduced motion, the site respects `prefers-reduced-motion` automatically.

## Building and Deployment

### Build Locally
```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repo to Vercel at https://vercel.com
3. Vercel will automatically build and deploy on each push
4. Set up a custom domain in Vercel project settings

### Deploy to Other Platforms

This is a standard Next.js 15 application. It can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway
- Heroku
- Any server that supports Node.js

## Important Notes

### Medical Disclaimers

- Do NOT make unsubstantiated medical claims
- Do NOT claim cupping or flower medicine cures diseases
- Do NOT claim these practices guarantee results
- Always include appropriate medical disclaimers
- Encourage consultation with healthcare providers for medical concerns

### Professional Standards

- Maintain accurate, current qualifications and certificates
- Update the site if your qualifications change
- Do NOT invent or fabricate credentials
- Do NOT use misleading descriptions of your training or experience
- Be transparent about the limitations of your practice

### Privacy and GDPR

- The booking form collects personal information
- Ensure you have appropriate privacy policies in place
- Comply with GDPR, CCPA, and local privacy laws
- Never share client information without consent

## Support

For technical questions about the website setup, refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- Vercel deployment guide: https://vercel.com/docs

For content and design customization, all changes should be made in `/lib/site-data.ts` and component files.
