'use client';

import { siteData } from '@/lib/site-data';
import { Award, BookOpen, Leaf } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <BookOpen size={32} />,
  Award: <Award size={32} />,
  Leaf: <Leaf size={32} />,
};

export default function QualificationsSection() {
  return (
    <section id="qualifications" className="py-20 md:py-32 bg-cream">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
            Professional Foundation
          </p>
          <h2 className="text-forest mb-6">
            Qualifications That Shape My Practice
          </h2>
          <p className="text-lg text-charcoal/70">
            My credentials in pharmacy, cupping therapy, and flower medicine form the foundation
            of my professional approach to wellness.
          </p>
        </div>

        {/* Qualification Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteData.qualifications.map((qual, idx) => (
            <div key={idx} className="premium-card p-8 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest/5 text-forest mb-6 mx-auto">
                {iconMap[qual.icon] || <Award size={32} />}
              </div>

              {/* Title */}
              <h3 className="text-forest mb-4">{qual.title}</h3>

              {/* Details */}
              <div className="space-y-3 text-charcoal/70 text-sm">
                <div>
                  <p className="font-semibold text-charcoal mb-1">Qualification</p>
                  <p>{qual.qualification}</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Institution</p>
                  <p>{qual.institution}</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Year</p>
                  <p>{qual.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
