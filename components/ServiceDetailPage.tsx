'use client';

import Image from 'next/image';
import Link from 'next/link';
import BookingForm from './BookingForm';
import { ArrowLeft } from 'lucide-react';

interface ServiceDetailPageProps {
  title: string;
  description: string;
  whatItIs: string;
  whatToExpect: string;
  sessionDuration: string;
  preparation: string[];
  aftercare: string[];
  serviceId: string;
}

export default function ServiceDetailPage({
  title,
  description,
  whatItIs,
  whatToExpect,
  sessionDuration,
  preparation,
  aftercare,
  serviceId,
}: ServiceDetailPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-96 pt-32 pb-12 md:pb-20 gradient-warm">
        <div className="container">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-forest hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
          <h1 className="text-forest max-w-2xl">{title}</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mt-6">{description}</p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="container">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={`/images/${serviceId}/hero.svg`}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-32 bg-ivory">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            {/* What It Is */}
            <div>
              <h2 className="text-forest mb-6">What It Is</h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">{whatItIs}</p>
            </div>

            {/* What To Expect */}
            <div>
              <h2 className="text-forest mb-6">What To Expect</h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">{whatToExpect}</p>
            </div>

            {/* Session Duration */}
            <div>
              <h3 className="text-forest mb-4">Session Duration</h3>
              <p className="text-charcoal/80">{sessionDuration}</p>
            </div>

            {/* Preparation */}
            <div>
              <h2 className="text-forest mb-6">How to Prepare</h2>
              <ul className="space-y-3">
                {preparation.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aftercare */}
            <div>
              <h2 className="text-forest mb-6">Aftercare & Recovery</h2>
              <ul className="space-y-3">
                {aftercare.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-forest mb-4">Ready to Begin?</h2>
              <p className="text-lg text-charcoal/70">
                Book your consultation for {title.toLowerCase()} today.
              </p>
            </div>

            <div className="premium-card p-8 md:p-12">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
