import React from 'react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Sparkles, Calendar, Car, Accessibility, Wrench, CreditCard, Truck, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

interface ShowroomExperienceProps {
  onOpenBooking: () => void;
}

export const ShowroomExperience: React.FC<ShowroomExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="showroom" className="py-20 bg-[#F4EFE7]/80 border-t border-[#E8DFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showroom Architectural Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#D5C9B8] shadow-xl bg-[#E2D8C9]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Furniture Store By Sheheryar D Ground Faisalabad Showroom Experience"
                className="w-full h-[460px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-widest uppercase text-[#C99E5C] font-semibold">
                  Flagship Destination
                </span>
                <p className="font-serif text-2xl font-bold text-[#FAF8F5] mt-1">
                  D Ground, People’s Colony No. 1
                </p>
                <p className="text-xs text-[#D8CEBE] mt-1">
                  Experience true tactile luxury: sit in our curved sofas, feel velvet swatches, and inspect solid hardwood joinery in person.
                </p>
              </div>
            </div>

            {/* Quick Rating Floating Plaque */}
            <div className="absolute -top-4 -right-4 bg-[#FAF8F5] border border-[#E0D5C3] p-4 rounded-lg shadow-lg hidden sm:block max-w-[200px]">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-[#845E2A]">
                Google Verified
              </p>
              <p className="font-serif text-xl font-bold text-[#1C1A17] mt-0.5">
                4.8 ★★★★★
              </p>
              <p className="text-[10px] text-[#7A6F5F]">
                63+ Authentic Client Reviews in Faisalabad
              </p>
            </div>
          </div>

          {/* Right Column: Information, Hours, Directions & Booking */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#845E2A] inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Physical Showroom & Amenities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] mt-2">
                See the Difference in Person.
              </h2>
              <p className="mt-4 text-base text-[#595042] leading-relaxed">
                A photograph captures the silhouette, but only an in-person visit reveals the plush density of our high-resilience foam, the smooth curve of our joinery, and the weight of genuine craftsmanship.
              </p>

              {/* Showroom Details List */}
              <div className="mt-8 space-y-3.5">
                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded bg-[#FAF8F5] border border-[#E8DEC8]">
                  <div className="w-9 h-9 rounded bg-[#EFE8DC] flex items-center justify-center text-[#845E2A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                      Showroom Address & Parking
                    </p>
                    <p className="text-sm font-medium text-[#463D31] mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-[#877C6D] mt-0.5">
                      Landmark: {BUSINESS_INFO.landmark} • <strong className="text-[#845E2A]">Free parking lot & street parking available</strong>
                    </p>
                  </div>
                </div>

                {/* Operating Hours & Planning */}
                <div className="flex items-start gap-3.5 p-3.5 rounded bg-[#FAF8F5] border border-[#E8DEC8]">
                  <div className="w-9 h-9 rounded bg-[#EFE8DC] flex items-center justify-center text-[#845E2A] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                      Visiting Hours & Planning
                    </p>
                    <p className="text-sm font-medium text-[#463D31] mt-0.5">
                      {BUSINESS_INFO.hours}
                    </p>
                    <p className="text-xs text-[#877C6D] mt-0.5">
                      <strong>Quick visits welcome anytime.</strong> Private VIP walkthroughs and architect blueprint sessions available upon request.
                    </p>
                  </div>
                </div>

                {/* Phone & Direct Contact */}
                <div className="flex items-start gap-3.5 p-3.5 rounded bg-[#FAF8F5] border border-[#E8DEC8]">
                  <div className="w-9 h-9 rounded bg-[#EFE8DC] flex items-center justify-center text-[#845E2A] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                      Direct Telephone & WhatsApp
                    </p>
                    <p className="text-sm font-bold text-[#1C1A17] mt-0.5">
                      {BUSINESS_INFO.phoneFormatted}
                    </p>
                    <p className="text-xs text-[#877C6D] mt-0.5">
                      Contact person: Sheheryar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 pt-5 border-t border-[#DED4C4] flex flex-col sm:flex-row items-center gap-3.5">
              <a
                id="showroom-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-sheen w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#1C1A17] text-[#FAF8F5] px-6 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-wider hover:bg-[#2B2620] transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#C99E5C]" />
                <span>Get Google Maps Directions</span>
              </a>

              <button
                id="book-visit-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#FAF8F5] border border-[#3E382F] text-[#1C1A17] px-6 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-wider hover:bg-[#EAE0D0] transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#845E2A]" />
                <span>Schedule VIP Walkthrough</span>
              </button>
            </div>
          </div>
        </div>

        {/* Verified Amenities & Services Grid Banner */}
        <div className="mt-14 pt-12 border-t border-[#E8DFCFA]">
          <div className="mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#845E2A] block">
              Showroom Infrastructure & Client Services
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17] mt-1">
              Thoughtful Amenities Designed for Your Comfort
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Amenity 1: Accessibility */}
            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E5DACB] shadow-sm">
              <div className="w-10 h-10 rounded bg-[#EFE7DA] flex items-center justify-center text-[#845E2A] mb-3">
                <Accessibility className="w-5 h-5" />
              </div>
              <p className="font-serif font-bold text-base text-[#1C1A17]">
                Full Accessibility
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-[#5D5244]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Assistive hearing loop</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Wheelchair accessible seating</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Wheelchair accessible restroom</span>
                </li>
              </ul>
            </div>

            {/* Amenity 2: Delivery & Onsite */}
            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E5DACB] shadow-sm">
              <div className="w-10 h-10 rounded bg-[#EFE7DA] flex items-center justify-center text-[#845E2A] mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <p className="font-serif font-bold text-base text-[#1C1A17]">
                Delivery & Onsite
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-[#5D5244]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Regional white-glove delivery</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Same-day delivery (ready pieces)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Onsite room measuring services</span>
                </li>
              </ul>
            </div>

            {/* Amenity 3: Assembly & Repairs */}
            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E5DACB] shadow-sm">
              <div className="w-10 h-10 rounded bg-[#EFE7DA] flex items-center justify-center text-[#845E2A] mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <p className="font-serif font-bold text-base text-[#1C1A17]">
                Assembly & Care
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-[#5D5244]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Professional assembly service</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Post-purchase repair services</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Long-term maintenance support</span>
                </li>
              </ul>
            </div>

            {/* Amenity 4: Parking & Payment Options */}
            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E5DACB] shadow-sm">
              <div className="w-10 h-10 rounded bg-[#EFE7DA] flex items-center justify-center text-[#845E2A] mb-3">
                <CreditCard className="w-5 h-5" />
              </div>
              <p className="font-serif font-bold text-base text-[#1C1A17]">
                Parking & Payments
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-[#5D5244]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Free parking lot & street parking</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Debit cards & checks accepted</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#845E2A] shrink-0" />
                  <span>Direct bank transfer & cash</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

