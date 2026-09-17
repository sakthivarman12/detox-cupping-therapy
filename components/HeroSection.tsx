'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { siteData } from '@/lib/site-data';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !portraitRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;

      portraitRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      if (portraitRef.current) {
        portraitRef.current.style.transform = 'translate(0, 0)';
      }
    };

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-12 md:pt-32 md:pb-20 gradient-warm overflow-hidden"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left: Portrait */}
          <div className="relative flex items-center justify-center order-2 md:order-1">
            <div
              ref={portraitRef}
              className="relative transition-transform duration-300 ease-out"
            >
              <div className="w-80 h-96 md:w-96 md:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl bg-beige">
                <Image
                  src="/images/therapist/portrait.svg"
                  alt={siteData.therapist.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-sage/30 rounded-full" />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-sage/10 rounded-full" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-6 md:space-y-8">
            {/* Eyebrow */}
            <div className="inline-block">
              <p className="text-xs tracking-widest text-forest font-semibold uppercase">
                {siteData.brand.name}
              </p>
            </div>

            {/* Credentials */}
            <div>
              <p className="text-xs tracking-widest text-charcoal/60 font-semibold uppercase">
                {siteData.therapist.title}
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-forest leading-tight">
              A Personalized Approach to Cupping & Holistic Wellness
            </h1>

            {/* Supporting paragraph */}
            <p className="text-lg text-charcoal/80 max-w-lg leading-relaxed">
              Combining a pharmacy education, professional cupping training, and flower medicine
              practice to create thoughtful, personalized wellness sessions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const form = document.getElementById('booking-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                Book a Consultation
              </button>
              <a href="#services" className="btn-secondary">
                Explore My Practice
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-sage/20">
              <p className="text-xs text-charcoal/60 mb-4 uppercase tracking-wide font-semibold">
                Professional Qualifications
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Pharmacy Graduate',
                  'Certified Cupping Therapist',
                  'Flower Medicine Practitioner',
                ].map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-forest/5 border border-sage/30 rounded-full text-sm text-forest font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-forest rounded-full" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated cupping circle */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 md:w-96 md:h-96 border-2 border-sage/10 rounded-full animate-float pointer-events-none" />
    </section>
  );
}
