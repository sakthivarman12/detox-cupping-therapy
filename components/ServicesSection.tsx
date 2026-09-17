'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/lib/site-data';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-ivory">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
            Wellness Services
          </p>
          <h2 className="text-forest mb-6">My Practice</h2>
          <p className="text-lg text-charcoal/70">
            Personalized wellness sessions designed around your individual needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteData.services.map((service) => (
            <Link key={service.id} href={service.route}>
              <div className="premium-card overflow-hidden h-full cursor-pointer group">
                {/* Image */}
                <div className="relative h-64 bg-gradient-sage overflow-hidden">
                  <Image
                    src={`/images/${service.id}/hero.svg`}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-forest">{service.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="pt-4 flex items-center gap-2 text-forest font-semibold group-hover:gap-3 transition-all">
                    {service.cta}
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
