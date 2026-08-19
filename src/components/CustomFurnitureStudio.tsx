import React, { useState } from 'react';
import { CustomInquiryState } from '../types';
import { createCustomCommissionWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Sparkles, Sliders, CheckCircle2, Ruler, Palette, FileText } from 'lucide-react';

export const CustomFurnitureStudio: React.FC = () => {
  const [form, setForm] = useState<CustomInquiryState>({
    roomType: 'Drawing Room / Formal Lounge',
    pieceType: 'Curved Statement Sofa (Made to Measure)',
    preferredStyle: 'Contemporary Minimalist / Curved',
    dimensionsNote: 'Approx 14ft x 18ft room area',
    fabricPreference: 'Imported Bouclé / Velvet',
    colorTone: 'Warm Ivory / Champagne Beige',
    specialRequests: 'Need recommendation for high-density foam & durable child-safe fabric',
  });

  const [isCopied, setIsCopied] = useState(false);

  const roomOptions = [
    'Drawing Room / Formal Lounge',
    'Main Living Room / Family Lounge',
    'Master Bedroom Suite',
    'Dining Room Architecture',
    'Executive Home Office',
    'Complete Home Package',
  ];

  const pieceOptions = [
    'Curved Statement Sofa (Made to Measure)',
    'L-Shape Modular Sectional',
    'Fluted Master Bed & Integrated Side Tables',
    'Organic Marble & Fluted Coffee Table',
    'Sculptural Swivel Accent Chairs (Pair)',
    'Full Room Custom Suite',
  ];

  const fabricOptions = [
    'Imported Bouclé / Textured Weave',
    'High-Wear Matte Velvet',
    'Soft Chenille & Wool Blend',
    'Premium Nu-Leather / Saddle Eco-Leather',
    'Bring My Own Interior Designer Fabric',
  ];

  const colorOptions = [
    'Warm Ivory / Off-White / Cream',
    'Beige / Sand / Champagne',
    'Muted Taupe / Greige',
    'Charcoal / Deep Slate',
    'Custom Palette Matching My Curtains/Walls',
  ];

  return (
    <section id="custom-studio" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#845E2A] inline-flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" />
            Bespoke Manufacturing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] mt-2">
            Custom Furniture Studio
          </h2>
          <p className="mt-3 text-base text-[#605647] leading-relaxed">
            Every home has distinct proportions. Configure your envisioned dimensions, silhouette, and upholstery below to start a direct consultation with Sheheryar.
          </p>
        </div>

        {/* Interactive Customizer Container */}
        <div className="bg-[#FFFFFF] rounded-xl border border-[#E5DACB] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Interactive Selection Controls */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#F0E8DD]">
              <Sparkles className="w-5 h-5 text-[#845E2A]" />
              <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                Configure Your Custom Piece
              </h3>
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4437] mb-2 flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-[#845E2A]" />
                1. Target Room / Living Space
              </label>
              <select
                value={form.roomType}
                onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors"
              >
                {roomOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Piece Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4437] mb-2">
                2. Furniture Silhouette & Category
              </label>
              <select
                value={form.pieceType}
                onChange={(e) => setForm({ ...form, pieceType: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors"
              >
                {pieceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Fabric & Upholstery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4437] mb-2 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#845E2A]" />
                  3. Fabric Texture
                </label>
                <select
                  value={form.fabricPreference}
                  onChange={(e) => setForm({ ...form, fabricPreference: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
                >
                  {fabricOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4437] mb-2">
                  4. Color Palette
                </label>
                <select
                  value={form.colorTone}
                  onChange={(e) => setForm({ ...form, colorTone: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
                >
                  {colorOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Room Dimensions / Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4437] mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#845E2A]" />
                5. Approximate Wall Dimensions or Floor Plan Notes
              </label>
              <input
                type="text"
                value={form.dimensionsNote}
                onChange={(e) => setForm({ ...form, dimensionsNote: e.target.value })}
                placeholder="e.g., 12ft back wall, 8ft return on right, need 7-seater setup"
                className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
              />
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4437] mb-2">
                6. Custom Requests (e.g. Foam Firmness, Brass Accents, Wood Polish)
              </label>
              <textarea
                rows={2}
                value={form.specialRequests}
                onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                placeholder="Tell us any specific preferences or architect drawings you have..."
                className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
              />
            </div>
          </div>

          {/* Right Column: Live Inquiry Summary & WhatsApp Launch */}
          <div className="lg:col-span-5 bg-[#1C1A17] text-[#FAF8F5] p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#2E2922]">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#C99E5C] font-semibold block mb-2">
                Live Specification Summary
              </span>
              <h4 className="font-serif text-2xl font-bold text-white leading-snug">
                Bespoke Brief Ready for Sheheryar
              </h4>
              <p className="text-xs text-[#D8CEBE] mt-2 leading-relaxed">
                Clicking the button below directly opens WhatsApp with these exact parameters prefilled for instant review.
              </p>

              {/* Formatted Code Block / Card */}
              <div className="mt-6 bg-[#26231E] rounded-md p-4 border border-[#3E382F] text-xs font-mono space-y-2 text-[#EAE0D0]">
                <p><span className="text-[#C99E5C]">Room:</span> {form.roomType}</p>
                <p><span className="text-[#C99E5C]">Item:</span> {form.pieceType}</p>
                <p><span className="text-[#C99E5C]">Fabric:</span> {form.fabricPreference}</p>
                <p><span className="text-[#C99E5C]">Tone:</span> {form.colorTone}</p>
                <p><span className="text-[#C99E5C]">Dimensions:</span> {form.dimensionsNote}</p>
              </div>

              {/* Trust Checkmarks */}
              <div className="mt-6 space-y-2 text-xs text-[#C5BBAE]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C99E5C]" />
                  <span>3D CAD layout review & physical fabric swatch matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C99E5C]" />
                  <span>Transparent itemized quotation before manufacturing</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#38332A]">
              <a
                id="custom-piece-whatsapp-cta"
                href={createCustomCommissionWhatsAppUrl(form)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-sheen w-full flex items-center justify-center gap-2.5 bg-[#C99E5C] text-[#1C1A17] py-4 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-[#D9AF6D] transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-[#1C1A17]" />
                <span>Discuss Your Custom Piece on WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-[#8E8475] mt-2.5">
                Direct reply from Sheheryar (+92 323 6044130)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
