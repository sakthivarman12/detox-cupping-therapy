'use client';

import BookingForm from './BookingForm';

export default function BookingSection() {
  return (
    <section id="booking-form" className="py-20 md:py-32 bg-cream">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
            Next Steps
          </p>
          <h2 className="text-forest mb-6">Begin With a Conversation</h2>
          <p className="text-lg text-charcoal/70">
            Have questions about cupping therapy or flower medicine? Start with a consultation
            and learn more about the approach that may be appropriate for you.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="premium-card p-8 md:p-12">
            <BookingForm />
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="max-w-2xl mx-auto mt-12">
          <p className="text-center text-charcoal/70 text-sm mb-6">
            Prefer to reach out directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteData.contact.phone.replace(/\D/g, '')}`} className="btn-secondary">
              Call Us
            </a>
            <a
              href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(siteData.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
            <a href={`mailto:${siteData.contact.email}`} className="btn-secondary">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Import siteData for footer
import { siteData } from '@/lib/site-data';
