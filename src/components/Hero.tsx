import React from 'react';
import { MessageCircle, MapPin, ArrowUpRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero-section" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#EFE6D8]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E8DDD0]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & High-Intent Conversion */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Showroom Credibility Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#F2ECE1] border border-[#DFD5C6] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#5F5444] mb-6">
              <span className="flex items-center text-[#B8860B]">
                <Star className="w-3.5 h-3.5 fill-[#C99E5C] text-[#C99E5C]" />
                <span className="font-semibold ml-1 text-[#221F1B]">4.8/5</span>
              </span>
              <span className="text-[#8E8373]">•</span>
              <span>63+ Verified Google Reviews</span>
              <span className="text-[#8E8373]">•</span>
              <span className="font-medium text-[#845E2A]">D Ground, Faisalabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1815] leading-[1.12]">
              Furniture Designed to <span className="italic font-normal text-[#9A733E]">Define</span> Your Space.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#554D41] leading-relaxed max-w-xl font-normal">
              Experience the pinnacle of contemporary living. Specializing in bespoke curved sofas, sculptural statement furniture, and architectural bedroom suites handcrafted for Faisalabad’s most discerning residences.
            </p>

            {/* Quick Value Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg border-y border-[#E8DEC8] py-3.5 my-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7E7465]">Aesthetic</p>
                <p className="font-serif text-sm sm:text-base font-semibold text-[#1C1A17] mt-0.5">Contemporary & Curved</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7E7465]">Customization</p>
                <p className="font-serif text-sm sm:text-base font-semibold text-[#1C1A17] mt-0.5">100% Made to Measure</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7E7465]">Showroom</p>
                <p className="font-serif text-sm sm:text-base font-semibold text-[#1C1A17] mt-0.5">D Ground, Faisalabad</p>
              </div>
            </div>

            {/* Primary & Secondary Direct CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                id="hero-primary-whatsapp-btn"
                href={createGeneralWhatsAppUrl('Hi Sheheryar, I saw your premium furniture collection on your website and would like to inquire about customized sofas for my home in Faisalabad.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-sheen flex items-center justify-center gap-2.5 bg-[#1C1A17] text-[#FAF8F5] px-7 py-4 rounded-sm font-semibold text-sm uppercase tracking-wider hover:bg-[#2F2A23] transition-all shadow-md group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8CEBE]" />
              </a>

              <button
                id="hero-secondary-showroom-btn"
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 bg-[#F3EDE3] border border-[#D5C9B8] text-[#1C1A17] px-6 py-4 rounded-sm font-semibold text-sm uppercase tracking-wider hover:bg-[#EAE0D1] hover:border-[#1C1A17] transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#9A733E]" />
                <span>Visit Showroom</span>
              </button>
            </div>

            {/* Contextual Assurance */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#7A7061]">
              <ShieldCheck className="w-4 h-4 text-[#9A733E]" />
              <span>Direct personal consultation with Sheheryar • No obligation quotes</span>
            </div>
          </div>

          {/* Right Column: Architectural Hero Showcase Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-lg overflow-hidden border border-[#E0D5C3] shadow-2xl bg-[#EBE2D5]">
                {/* Hero Showcase Image */}
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"
                  alt="Furniture Store By Sheheryar Showroom Presentation in Faisalabad"
                  className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Subtle gradient overlay for editorial text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/75 via-transparent to-transparent" />

                {/* In-Image Architectural Badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="bg-[#1C1A17]/85 backdrop-blur-md p-4 rounded border border-white/10 text-white max-w-xs">
                    <span className="text-[10px] tracking-widest uppercase text-[#C99E5C] font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Flagship Design
                    </span>
                    <p className="font-serif text-sm sm:text-base font-medium mt-1 leading-snug">
                      The Seraphina Curved Living Suite
                    </p>
                    <p className="text-[11px] text-[#D8CEBE] mt-0.5">
                      Available in customizable bouclé, velvet & dimensions
                    </p>
                  </div>

                  <a
                    href="#signature-sofas"
                    className="hidden sm:inline-flex items-center gap-1.5 bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-[#1C1A17] text-xs font-semibold px-3 py-2 rounded backdrop-blur-md transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 bg-[#FAF8F5] border border-[#E0D5C3] px-4 py-2.5 rounded shadow-lg text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></div>
                <span className="font-serif font-bold text-[#1C1A17]">Sheheryar Studio</span>
                <span className="text-[#847868]">| D Ground, Faisalabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
