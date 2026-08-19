import React from 'react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { Phone, MessageCircle, MapPin, Star, Sparkles, Navigation, Clock, Compass } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenProposal }) => {
  return (
    <footer className="bg-[#12110F] text-[#D8CEBE] border-t border-[#26221B] pt-16 pb-24 lg:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#26221B]">
          {/* Brand & Monogram Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] text-[#1C1A17] flex items-center justify-center font-serif text-lg tracking-widest font-bold">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                  SHEHERYAR
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C99E5C] mt-1 font-medium">
                  Designer Furniture Showroom
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9E9280] leading-relaxed max-w-sm">
              Faisalabad's destination for contemporary curved sofas, sculptural tables, and architectural bespoke interior furniture.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#1E1B17] border border-[#332D23] px-3 py-1.5 rounded text-[11px] text-[#C99E5C]">
              <Star className="w-3.5 h-3.5 fill-[#C99E5C]" />
              <span className="font-bold text-white">4.8 / 5.0</span>
              <span className="text-[#847868]">| 63+ Google Reviews</span>
            </div>
          </div>

          {/* Showroom & Location Info */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Flagship Showroom
            </p>
            <p className="text-[#A39886] leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-[11px] text-[#C99E5C]">
              Landmark: {BUSINESS_INFO.landmark}
            </p>
            <div className="pt-2 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C99E5C]" />
              <span className="text-[#A39886]">{BUSINESS_INFO.hours}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </p>
            <ul className="space-y-2 text-[#A39886]">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Featured Collections
                </a>
              </li>
              <li>
                <a href="#signature-sofas" className="hover:text-white transition-colors">
                  Curved Sofas
                </a>
              </li>
              <li>
                <a href="#custom-studio" className="hover:text-white transition-colors">
                  Custom Studio
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-white transition-colors">
                  D Ground Showroom
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white transition-colors">
                  FAQ Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions & Proposal */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact
            </p>
            <p className="text-[#A39886]">
              Telephone / WhatsApp:
              <br />
              <strong className="text-white text-sm">{BUSINESS_INFO.phoneFormatted}</strong>
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={createGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-sheen w-full flex items-center justify-center gap-2 bg-[#25D366] text-[#12110F] py-2.5 rounded font-bold text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 text-[#12110F]" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenProposal}
                className="w-full flex items-center justify-center gap-1.5 bg-[#1F1B16] border border-[#3A3326] text-[#C99E5C] hover:text-white hover:border-[#C99E5C] py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Open Strategic Dossier</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Developer Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#756A5B] text-[11px]">
          <p>
            © {new Date().getFullYear()} Furniture Store By Sheheryar. All rights reserved. D Ground, Faisalabad.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#8E8373]">[NEEDS CLIENT CONFIRMATION: Registered Business Registration Details]</span>
            <button
              onClick={onOpenProposal}
              className="text-[#C99E5C] hover:underline"
            >
              Proposal Strategy View
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
