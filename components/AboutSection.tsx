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
            <div className="w-full aspect-square relative rounded-2xl overflow-hidden shadow-2xl bg-beige">
              <Image
                src="/images/therapist/portrait-alt.svg"
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
                About Me
              </p>
              <h2 className="text-forest">Meet {siteData.therapist.name}</h2>
            </div>

            {/* Supporting heading */}
            <p className="text-lg text-charcoal/70 font-medium">
              Science-informed education. Traditional wellness practices. Personalized sessions.
            </p>

            {/* Bio */}
            <p className="text-charcoal/80 leading-relaxed">
              {siteData.therapist.bio || 'With a strong foundation in pharmaceutical science and a passion for holistic wellness, I have dedicated my practice to combining evidence-based education with traditional wellness approaches. My journey into cupping therapy and flower medicine reflects a commitment to understanding the individual and providing personalized, professional care.'}
            </p>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-forest font-serif italic border-l-4 border-gold pl-6">
              &quot;{siteData.therapist.quote}&quot;
            </blockquote>

            {/* Additional info */}
            <p className="text-charcoal/70">
              My approach centers on listening to your individual needs, assessing the most appropriate wellness practice for your circumstances, and providing thoughtful, personalized care. I believe that wellness is deeply personal, and every session should reflect that understanding.
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
