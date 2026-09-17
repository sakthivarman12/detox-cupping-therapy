'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-ivory/80 border-b border-sage/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xs tracking-widest text-forest font-semibold">
            {siteData.brand.name}
          </span>
          <span className="text-xs text-charcoal/60 -mt-1">
            {siteData.therapist.title.split('|')[0].trim()}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {siteData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal hover:text-forest transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            const form = document.getElementById('booking-form');
            if (form) {
              form.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="hidden md:block btn-primary"
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-forest"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ivory border-b border-sage/20 animate-fade-up">
          <div className="container py-4 flex flex-col gap-4">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal hover:text-forest transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                const form = document.getElementById('booking-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary w-full mt-2"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
