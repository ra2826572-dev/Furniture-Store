import React from 'react';
import { MessageCircle, Phone, Navigation, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      id="mobile-conversion-bar"
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1A17]/95 backdrop-blur-md border-t border-[#383229] p-3 px-4 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {/* WhatsApp Direct Chat */}
        <a
          href={createGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-sheen flex items-center justify-center gap-1.5 bg-[#25D366] text-[#141210] font-bold py-2.5 px-2 rounded font-sans tracking-wide"
        >
          <MessageCircle className="w-4 h-4 text-[#141210]" />
          <span>WhatsApp</span>
        </a>

        {/* Direct Phone Call */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 bg-[#2A2620] text-[#FAF8F5] font-semibold py-2.5 px-2 rounded border border-[#3E382F] tracking-wide"
        >
          <Phone className="w-3.5 h-3.5 text-[#C99E5C]" />
          <span>Call Showroom</span>
        </a>

        {/* Google Maps Directions */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#2A2620] text-[#FAF8F5] font-semibold py-2.5 px-2 rounded border border-[#3E382F] tracking-wide"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C99E5C]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
};
