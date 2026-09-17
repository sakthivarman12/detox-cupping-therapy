'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    area: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        area: '',
        date: '',
        time: '',
        message: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-forest mb-6 animate-fade-up" />
        <h3 className="text-forest mb-4">Thank You!</h3>
        <p className="text-charcoal/70 mb-2">We have received your inquiry.</p>
        <p className="text-charcoal/60 text-sm">
          We will be in touch within 24 hours to confirm your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors"
            placeholder="Your phone number"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors"
          placeholder="Your email"
        />
      </div>

      {/* Service Selection and Area */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Preferred Service *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors"
          >
            <option value="">Select a service</option>
            <option value="dry-cupping">Dry Cupping</option>
            <option value="wet-cupping">Wet Cupping / Hijama</option>
            <option value="flower-medicine">Flower Medicine</option>
            <option value="consultation">General Consultation</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Area / Locality
          </label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors"
            placeholder="Your area or locality"
          />
        </div>
      </div>

      {/* Date and Time */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Preferred Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          Additional Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-sage/30 rounded-lg bg-ivory focus:outline-none focus:border-forest transition-colors resize-none"
          placeholder="Tell us about your wellness goals or any concerns..."
        />
      </div>

      {/* Home Visits Note */}
      <div className="bg-forest/5 border border-sage/30 rounded-lg p-4">
        <p className="text-sm text-charcoal/80">
          <span className="font-semibold text-forest">Home Visits Available:</span> Detox Cupping Therapy
          currently provides personalized sessions at your home by appointment.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <span className="w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin mr-2" />
            Submitting...
          </>
        ) : (
          'Book a Home Visit'
        )}
      </button>

      {/* Privacy note */}
      <p className="text-xs text-charcoal/50 text-center">
        We respect your privacy. Your information will only be used to confirm your
        home-visit consultation.
      </p>
    </form>
  );
}
