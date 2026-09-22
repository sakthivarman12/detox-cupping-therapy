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
              <div className="w-96 h-auto md:w-[550px] md:h-auto relative rounded-2xl overflow-hidden shadow-2xl bg-beige">
                <Image
                  src="/images/services-banner.png"
                  alt="Personalized Cupping & Flower Medicine Services"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100%, 550px"
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

            {/* Therapist Name */}
            <div>
              <p className="text-sm tracking-widest text-charcoal/60 font-semibold uppercase">
                by {siteData.therapist.name}
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-forest leading-tight">
              Personalized Cupping & Flower Medicine Sessions, Brought to Your Home
            </h1>

            {/* Supporting paragraph */}
            <p className="text-lg text-charcoal/80 max-w-lg leading-relaxed">
              {siteData.therapist.name} is a Pharmacy Graduate, Certified Cupping Therapist, and Certified Flower Medicine Practitioner offering personalized home-visit wellness sessions.
            </p>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-white rounded-full" />
                HOME VISITS AVAILABLE
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/20 border border-sage text-forest rounded-full text-sm font-semibold">
                CLINIC COMING SOON
              </div>
            </div>

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
                Book a Home Visit
              </button>
              <a href="#qualifications" className="btn-secondary">
                View Qualifications
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
                  'Certified Flower Medicine Practitioner',
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
