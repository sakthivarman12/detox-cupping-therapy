'use client';

import { siteData } from '@/lib/site-data';
import { Shield, AlertCircle } from 'lucide-react';

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 md:py-32 bg-cream">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest/10 text-forest mb-6 mx-auto">
            <Shield size={32} />
          </div>
          <h2 className="text-forest mb-6">Your Safety Comes First</h2>
          <p className="text-lg text-charcoal/70">
            Professional practices and transparent communication are at the heart of every
            session.
          </p>
        </div>

        {/* Safety Points */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {siteData.safetyPoints.map((point, idx) => (
            <div key={idx} className="premium-card p-8">
              <h3 className="text-forest mb-4">{point.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto bg-forest/5 border border-forest/20 rounded-lg p-8">
          <div className="flex gap-4">
            <AlertCircle className="text-forest flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="font-semibold text-forest mb-2">Important Disclaimer</p>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {siteData.safetyDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
