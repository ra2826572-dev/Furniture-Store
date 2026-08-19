import React from 'react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { Instagram, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const SocialInstagramGallery: React.FC = () => {
  const socialGallery = [
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      caption: 'Curved Bouclé Sectional installed in Canal Road luxury villa',
      tag: '#FaisalabadLiving',
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
      caption: 'Sculptural continuous line sofa with fluted travertine center table',
      tag: '#DGroundShowroom',
    },
    {
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
      caption: 'Floor-to-ceiling upholstered vertical channel master bedroom suite',
      tag: '#MasterSuite',
    },
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      caption: 'Cocooning swivel armchair in imported textured chenille',
      tag: '#StatementChair',
    },
  ];

  return (
    <section id="social-gallery" className="py-20 bg-[#F5EFE6]/50 border-t border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E8DEC8]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#845E2A] inline-flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5" />
              Showroom Lookbook & Social
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] mt-2">
              Follow Our Latest Designs
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs text-[#7A6F5F] font-mono">
              {BUSINESS_INFO.instagramHandle}
            </span>
            <a
              href={createGeneralWhatsAppUrl('Hi Sheheryar, please send me your Instagram profile or direct video catalogue link.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-sheen inline-flex items-center gap-2 bg-[#1C1A17] text-[#FAF8F5] px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2721] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C99E5C]" />
              <span>Explore Recent Releases</span>
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {socialGallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-80 rounded-lg overflow-hidden border border-[#E2D6C5] shadow-sm bg-[#EBE2D5]"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/85 via-[#141210]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 bg-[#1C1A17]/60 backdrop-blur-md p-1.5 rounded-full text-white">
                <Instagram className="w-3.5 h-3.5 text-[#D8CEBE]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] text-[#C99E5C] font-semibold uppercase tracking-wider block mb-1">
                  {item.tag}
                </span>
                <p className="text-xs font-medium text-[#FAF8F5] leading-snug line-clamp-2">
                  {item.caption}
                </p>

                <a
                  href={createGeneralWhatsAppUrl(`Hi Sheheryar, I saw this piece from your gallery ("${item.caption}"). Can you share more details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] text-[#D8CEBE] hover:text-[#C99E5C] font-semibold"
                >
                  <span>Inquire About This Look</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
