'use client';

import { useEffect, useRef } from 'react';
import { siteData } from '@/lib/site-data';

export default function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.approach-card');
    cards?.forEach((card) => observer.observe(card));

    return () => cards?.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section id="approach" className="py-20 md:py-32 bg-ivory">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
            Philosophy
          </p>
          <h2 className="text-forest">More Than a Technique</h2>
        </div>

        {/* Approach Cards */}
        <div ref={containerRef} className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {siteData.approach.map((item, idx) => (
            <div
              key={idx}
              className="approach-card premium-card p-8 text-center opacity-0"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Word */}
              <h3 className="text-forest text-2xl font-serif font-bold mb-4">
                {item.word}
              </h3>

              {/* Description */}
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
