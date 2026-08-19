import React from 'react';
import { MessageCircle, Navigation, Phone, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta-section" className="py-24 bg-[#171513] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle warm glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C99E5C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 bg-[#25221D] border border-[#3E382F] px-4 py-1.5 rounded-full text-xs text-[#C99E5C] font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Faisalabad’s Designer Destination</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Ready to Transform Your Space?
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#D2C8BA] max-w-2xl mx-auto leading-relaxed">
          Visit our showroom at D Ground, People’s Colony No. 1 or speak with our design team on WhatsApp about your next furniture piece.
        </p>

        {/* Location & Quick Contact Chip */}
        <div className="mt-6 inline-flex flex-wrap justify-center items-center gap-4 text-xs text-[#A89D8E] font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C99E5C]" />
            Hurrian Wala Chowk, D Ground, Faisalabad
          </span>
          <span className="hidden sm:inline text-[#4A4338]">•</span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#C99E5C]" />
            {BUSINESS_INFO.phoneFormatted}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            id="final-whatsapp-btn"
            href={createGeneralWhatsAppUrl('Hi Sheheryar, I would like to consult with you regarding luxury furniture for my home.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-sheen w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#C99E5C] text-[#171513] px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-[#D8AF6D] transition-colors shadow-lg group"
          >
            <MessageCircle className="w-5 h-5 text-[#171513] transition-transform group-hover:scale-110" />
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            id="final-directions-btn"
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25221D] border border-[#3E382F] text-[#FAF8F5] px-8 py-4 rounded-sm font-semibold text-xs uppercase tracking-wider hover:bg-[#322E28] hover:border-[#C99E5C]/50 transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#C99E5C]" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
