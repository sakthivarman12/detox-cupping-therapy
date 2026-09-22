'use client';

import Image from 'next/image';
import { siteData } from '@/lib/site-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-ivory">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Portrait */}
          <div className="relative">
            <div className="w-full h-auto relative rounded-2xl overflow-hidden shadow-2xl bg-beige">
              <Image
                src="/images/therapist/hussain.png"
                alt={siteData.therapist.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border-2 border-sage/20 rounded-full pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
                About Hussain
              </p>
              <h2 className="text-forest">Meet {siteData.therapist.name}</h2>
            </div>

            {/* Supporting heading */}
            <p className="text-lg text-charcoal/70 font-medium">
              A qualified, certified, and personalized approach to holistic wellness.
            </p>

            {/* Bio */}
            <p className="text-charcoal/80 leading-relaxed">
              {siteData.therapist.bio}
            </p>

            {/* Professional designation */}
            <div className="space-y-3 py-4">
              <p className="text-sm text-charcoal/70">
                <span className="font-semibold text-forest">Professional Designation:</span>
              </p>
              <p className="text-base text-charcoal font-medium">
                {siteData.therapist.title}
              </p>
              <p className="text-sm text-charcoal/70">
                <span className="font-semibold text-forest">Practice Type:</span> {siteData.therapist.practiceType}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-forest font-serif italic border-l-4 border-gold pl-6">
              &quot;{siteData.therapist.quote}&quot;
            </blockquote>

            {/* Additional info */}
            <p className="text-charcoal/70">
              Hussain&apos;s approach centers on listening to your individual needs, assessing the most appropriate wellness practice for your circumstances, and providing thoughtful, personalized care. Professional practice, individual attention, and safety-conscious care form the foundation of every session.
            </p>

            {/* CTA */}
            <button
              onClick={() => {
                const form = document.getElementById('booking-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
