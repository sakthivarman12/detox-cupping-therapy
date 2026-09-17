'use client';

import { siteData } from '@/lib/site-data';
import { CheckCircle, MessageCircle, Calendar, Heart } from 'lucide-react';

export default function HomeVisitsSection() {
  const steps = [
    {
      number: '01',
      title: 'Book',
      description: 'Send an enquiry or contact Hussain via WhatsApp, phone, or email.',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Discuss',
      description: 'Confirm your preferred service and appointment details.',
      icon: MessageCircle,
    },
    {
      number: '03',
      title: 'Home Visit',
      description: 'Hussain visits your home for the scheduled session.',
      icon: CheckCircle,
    },
    {
      number: '04',
      title: 'Aftercare',
      description: 'Receive appropriate post-session guidance and support.',
      icon: Heart,
    },
  ];

  return (
    <section id="home-visits" className="py-20 md:py-32 bg-ivory">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
            Current Service Model
          </p>
          <h2 className="text-forest mb-6">Professional Wellness Sessions, At Home</h2>
          <p className="text-lg text-charcoal/80 mb-6">
            {siteData.practice.homeVisitsMessage}
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-white rounded-full" />
            HOME VISITS AVAILABLE
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-forest to-forest/20" />
                )}

                {/* Card */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-forest/10 border-2 border-forest flex items-center justify-center">
                        <IconComponent size={32} className="text-forest" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-forest text-ivory flex items-center justify-center font-serif font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-forest mb-3">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <button
            onClick={() => {
              const form = document.getElementById('booking-form');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary"
          >
            Book a Home Visit
          </button>
        </div>
      </div>
    </section>
  );
}
