'use client';

import { siteData } from '@/lib/site-data';

export default function SessionJourney() {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-forest">Your Session Journey</h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {siteData.sessionJourney.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < siteData.sessionJourney.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-sage/50 via-sage/30 to-transparent" />
              )}

              {/* Step content */}
              <div className="relative z-10">
                {/* Step number circle */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-forest text-ivory font-serif text-2xl mb-6 mx-auto block">
                  {step.number}
                </div>

                {/* Step title */}
                <h3 className="text-forest text-center mb-3">{step.title}</h3>

                {/* Step description */}
                <p className="text-charcoal/70 text-sm text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
