import React, { useState } from 'react';
import { MessageCircle, Check, Sparkles, Layers, Shield, ArrowUpRight } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const SignatureSofas: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<string>('Alabaster Bouclé');

  const swatches = [
    { name: 'Alabaster Bouclé', color: '#F3EFE6', tone: 'Light Textured' },
    { name: 'Mushroom Taupe Velvet', color: '#9E9486', tone: 'Matte Sheen' },
    { name: 'Oatmeal Tweed', color: '#D5CBBB', tone: 'Heavy Weave' },
    { name: 'Warm Sand Chenille', color: '#E4DAC8', tone: 'Ultra Soft' },
    { name: 'Smoked Charcoal', color: '#3A3835', tone: 'Bold Architectural' },
  ];

  const craftsmanshipPillars = [
    {
      title: 'Monolithic Curved Geometry',
      desc: 'Seamless continuous contouring that creates effortless flow in high-ceiling living and drawing rooms.',
    },
    {
      title: 'Multi-Density Cloud Foam Core',
      desc: '38-density high-resilience base foam with memory topper wrap—guaranteeing no sagging over years of hospitality use.',
    },
    {
      title: 'Kiln-Dried Hardwood Skeleton',
      desc: 'Reinforced seasoned internal framework with mortise-and-tenon corner blocks for lifelong structural integrity.',
    },
    {
      title: 'Imported Performance Textiles',
      desc: 'Curated international fabrics treated for stain resistance, high rub-count durability, and luxurious tactile depth.',
    },
  ];

  return (
    <section id="signature-sofas" className="py-20 bg-[#F4EFE7]/70 border-y border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#845E2A] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Showroom Specialty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] mt-3">
            Statement Pieces for Spaces That Deserve More.
          </h2>
          <p className="mt-4 text-base text-[#5D5344] leading-relaxed">
            The defining signature of Furniture Store By Sheheryar. We engineer sculptural curved seating that serves as the architectural focal point of your interior.
          </p>
        </div>

        {/* Feature Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Big Image Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-[#D8CEBE] shadow-xl bg-[#E2D8C9]">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=90"
                alt="Signature Curved Sofa by Sheheryar Faisalabad"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />

              <div className="absolute top-4 left-4 bg-[#1C1A17]/85 backdrop-blur-md text-[#FAF8F5] px-4 py-2 rounded text-xs">
                <span className="text-[#C99E5C] font-semibold">Custom Radius Arc:</span> Made-to-measure for your drawing room
              </div>

              <div className="absolute bottom-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md px-3.5 py-2 rounded border border-[#E0D5C3] text-xs font-medium text-[#1C1A17]">
                Active Swatch: <span className="font-bold text-[#845E2A]">{selectedSwatch}</span>
              </div>
            </div>

            {/* Swatch Selector */}
            <div className="mt-6 p-4 rounded-lg bg-[#FAF8F5] border border-[#E5DBCC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#1C1A17]">
                  Select Upholstery Texture:
                </p>
                <p className="text-[11px] text-[#7A6F5F]">
                  Imported European swatches available at our D Ground showroom
                </p>
              </div>

              <div className="flex items-center gap-3">
                {swatches.map((swatch) => (
                  <button
                    key={swatch.name}
                    onClick={() => setSelectedSwatch(swatch.name)}
                    className={`relative w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                      selectedSwatch === swatch.name
                        ? 'border-[#1C1A17] scale-110 shadow-md'
                        : 'border-[#D5C9B8] hover:scale-105'
                    }`}
                    style={{ backgroundColor: swatch.color }}
                    title={`${swatch.name} (${swatch.tone})`}
                    aria-label={swatch.name}
                  >
                    {selectedSwatch === swatch.name && (
                      <Check className="w-4 h-4 text-[#1C1A17] mx-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering & Value Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
                Why Our Curved Sofas Are Faisalabad’s Preferred Centerpieces
              </h3>

              <div className="space-y-4">
                {craftsmanshipPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded bg-[#FAF8F5] border border-[#E5DBCC] hover:border-[#845E2A] transition-colors"
                  >
                    <p className="font-serif font-bold text-sm text-[#1C1A17]">
                      {pillar.title}
                    </p>
                    <p className="text-xs text-[#5E5547] mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contextual WhatsApp CTA */}
            <div className="mt-8 pt-6 border-t border-[#DED4C4]">
              <a
                id="signature-sofa-whatsapp-btn"
                href={createGeneralWhatsAppUrl(`Hi Sheheryar, I saw your signature curved sofa collection on your website (interested in ${selectedSwatch}). Can you share customization dimensions and pricing?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-sheen w-full flex items-center justify-center gap-2.5 bg-[#1C1A17] text-[#FAF8F5] px-6 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-wider hover:bg-[#2C2721] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ask About This Collection on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8CEBE]" />
              </a>
              <p className="text-[11px] text-center text-[#7E7363] mt-2">
                Have floor plans or photos? Send them over WhatsApp for layout advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
