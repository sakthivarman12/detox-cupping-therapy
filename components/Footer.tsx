'use client';

import Link from 'next/link';
import { siteData } from '@/lib/site-data';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-ivory/20">
          {/* Brand */}
          <div>
            <h4 className="font-serif text-xl mb-4">{siteData.brand.name}</h4>
            <p className="text-ivory/70 text-sm leading-relaxed">
              {siteData.therapist.title}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-semibold mb-4 text-ivory">Navigate</h5>
            <ul className="space-y-2 text-sm text-ivory/80">
              {siteData.navigation.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold mb-4 text-ivory">Services</h5>
            <ul className="space-y-2 text-sm text-ivory/80">
              {siteData.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    className="hover:text-ivory transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4 text-ivory">Contact</h5>
            <div className="space-y-3 text-sm text-ivory/80">
              {siteData.contact.phone !== '[PHONE NUMBER]' && (
                <a
                  href={`tel:${siteData.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 hover:text-ivory transition-colors"
                >
                  <Phone size={16} />
                  {siteData.contact.phone}
                </a>
              )}
              {siteData.contact.email !== '[EMAIL ADDRESS]' && (
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="flex items-center gap-2 hover:text-ivory transition-colors"
                >
                  <Mail size={16} />
                  {siteData.contact.email}
                </a>
              )}
              {siteData.contact.address !== '[CLINIC ADDRESS]' && (
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{siteData.contact.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="md:flex md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-ivory/60 mb-6 md:mb-0">
            © {currentYear} {siteData.brand.name}. All rights reserved.
          </p>

          {/* Social Links */}
          {siteData.contact.instagram !== '[INSTAGRAM HANDLE]' && (
            <a
              href={`https://instagram.com/${siteData.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ivory/70 hover:text-ivory transition-colors mb-6 md:mb-0"
            >
              <Instagram size={18} />
              Follow
            </a>
          )}

          {/* Disclaimer */}
          <p className="text-xs text-ivory/50 max-w-xs">
            Cupping and flower medicine are complementary wellness practices. Not substitutes
            for medical care. Always consult a healthcare provider with health concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
