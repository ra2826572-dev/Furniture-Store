import React from 'react';
import { Star, MapPin, Truck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-bar-section" className="border-y border-[#EAE2D5] bg-[#F5EFE6]/60 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 items-center">
          {/* Item 1: Google Rating */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAE0D0] flex items-center justify-center text-[#B8860B] shrink-0">
              <Star className="w-5 h-5 fill-[#C99E5C] text-[#C99E5C]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif font-bold text-base text-[#1C1A17]">{BUSINESS_INFO.rating}/5.0</span>
                <span className="text-xs text-[#7A6F5F]">Rating</span>
              </div>
              <p className="text-[11px] text-[#7A6F5F] font-medium">{BUSINESS_INFO.reviewCount}+ Google Reviews</p>
            </div>
          </div>

          {/* Item 2: Showroom Presence */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAE0D0] flex items-center justify-center text-[#845E2A] shrink-0">
              <MapPin className="w-5 h-5 text-[#845E2A]" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-[#1C1A17]">D Ground Showroom</p>
              <p className="text-[11px] text-[#7A6F5F]">People’s Colony No. 1</p>
            </div>
          </div>

          {/* Item 3: Custom Furniture */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAE0D0] flex items-center justify-center text-[#845E2A] shrink-0">
              <Sparkles className="w-5 h-5 text-[#845E2A]" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-[#1C1A17]">Custom Made</p>
              <p className="text-[11px] text-[#7A6F5F]">Tailored dimensions & fabric</p>
            </div>
          </div>

          {/* Item 4: Master Craftsmanship */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAE0D0] flex items-center justify-center text-[#845E2A] shrink-0">
              <Award className="w-5 h-5 text-[#845E2A]" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-[#1C1A17]">Artisanal Quality</p>
              <p className="text-[11px] text-[#7A6F5F]">Seasoned hardwood frames</p>
            </div>
          </div>

          {/* Item 5: White Glove Delivery */}
          <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-start sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#EAE0D0] flex items-center justify-center text-[#845E2A] shrink-0">
              <Truck className="w-5 h-5 text-[#845E2A]" />
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-[#1C1A17]">White-Glove Delivery</p>
              <p className="text-[11px] text-[#7A6F5F]">Faisalabad & Regional Setup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
