'use client';

import { MessageCircle } from 'lucide-react';
import { siteData } from '@/lib/site-data';

export default function WhatsAppButton() {
  const whatsappNumber = siteData.contact.whatsapp.replace(/\D/g, '');

  if (!whatsappNumber || siteData.contact.whatsapp === '[WHATSAPP NUMBER]') {
    return null;
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(siteData.contact.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
