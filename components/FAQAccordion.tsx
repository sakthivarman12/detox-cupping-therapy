'use client';

import { useState } from 'react';
import { siteData } from '@/lib/site-data';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-ivory">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-xs tracking-widest text-forest font-semibold uppercase mb-4">
            Questions
          </p>
          <h2 className="text-forest">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {siteData.faq.map((item, idx) => (
            <div
              key={idx}
              className="premium-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-sage/5 transition-colors"
                aria-expanded={openIndex === idx}
              >
                <h3 className="text-forest text-left">{item.question}</h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-forest transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <div className="px-8 pb-6 border-t border-sage/20 animate-fade-up">
                  <p className="text-charcoal/70 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
