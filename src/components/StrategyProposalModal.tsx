import React, { useState } from 'react';
import { X, BookOpen, Layers, Target, MapPin, MessageCircle, Search, Smartphone, ListChecks, CheckCircle2, Copy, FileText, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';

interface StrategyProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyProposalModal: React.FC<StrategyProposalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'strategy' | 'copy' | 'seo' | 'checklist'>('strategy');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#141210]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-xl border border-[#D5C9B8] shadow-2xl max-w-5xl w-full h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#1C1A17] text-[#FAF8F5] p-5 sm:p-6 flex items-center justify-between border-b border-[#2E2922] shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#C99E5C] text-[#1C1A17] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                Executive Strategy Dossier
              </span>
              <span className="text-xs text-[#A39786]">Prepared for Sheheryar</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              Furniture Store By Sheheryar — Strategic Web Concept
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#26231E] border border-[#3E382F] flex items-center justify-center text-white hover:bg-[#38332B] transition-colors cursor-pointer"
            aria-label="Close Proposal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#EFE8DD] px-6 py-2.5 flex flex-wrap gap-2 border-b border-[#DFD6C7] shrink-0">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'strategy'
                ? 'bg-[#1C1A17] text-white shadow-sm'
                : 'text-[#5C5243] hover:bg-[#E4DBCB]'
            }`}
          >
            1. Brand, ICP & Architecture
          </button>
          <button
            onClick={() => setActiveTab('copy')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'copy'
                ? 'bg-[#1C1A17] text-white shadow-sm'
                : 'text-[#5C5243] hover:bg-[#E4DBCB]'
            }`}
          >
            2. Wireframe & Complete Copy
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'seo'
                ? 'bg-[#1C1A17] text-white shadow-sm'
                : 'text-[#5C5243] hover:bg-[#E4DBCB]'
            }`}
          >
            3. Local SEO & WhatsApp Strategy
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'checklist'
                ? 'bg-[#845E2A] text-white shadow-sm'
                : 'text-[#5C5243] hover:bg-[#E4DBCB]'
            }`}
          >
            4. Client Information Checklist
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#2B2721] flex-1">
          {activeTab === 'strategy' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* 1. Brand Positioning */}
              <div className="bg-white p-6 rounded-lg border border-[#E5DACB]">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17] flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#845E2A]" />
                  1. Brand Positioning
                </h3>
                <p className="text-xs sm:text-sm text-[#544B3F] mt-2 leading-relaxed">
                  <strong>Positioning Statement:</strong> "Furniture Store By Sheheryar is Faisalabad’s premier architectural furniture house, delivering bespoke curved sofas, monolithic travertine centerpieces, and tailored bedroom suites for homeowners and interior architects who demand international aesthetics paired with uncompromising local craftsmanship."
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Core Archetype</span>
                    <span className="text-[#6E6353]">Architectural Luxury + Modern Pakistani Craft</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Primary Differentiator</span>
                    <span className="text-[#6E6353]">Sculptural curved designs & custom room tailoring</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Flagship Anchor</span>
                    <span className="text-[#6E6353]">D Ground, Hurrian Wala Chowk Showroom</span>
                  </div>
                </div>
              </div>

              {/* 2. Ideal Customer Profile (ICP) */}
              <div className="bg-white p-6 rounded-lg border border-[#E5DACB]">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                  2. Ideal Customer Profile (ICP)
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#ECE2D5] space-y-2">
                    <p className="font-bold text-sm text-[#1C1A17]">Primary ICP: Luxury Home Builders & Renovators</p>
                    <p className="text-[#554B3E]"><strong>Location:</strong> People’s Colony, Canal Road, Citi Housing, FDA City, Kohinoor, Eden Gardens Faisalabad.</p>
                    <p className="text-[#554B3E]"><strong>Psychographics:</strong> Appreciates minimalism, organic shapes (curved bouclé sofas), and custom sizing to fit specific high-ceiling drawing rooms.</p>
                    <p className="text-[#554B3E]"><strong>Key Buying Trigger:</strong> Needs furniture that looks custom-designed by an interior architect rather than mass-market catalog pieces.</p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#ECE2D5] space-y-2">
                    <p className="font-bold text-sm text-[#1C1A17]">Secondary ICP: Interior Designers & Architects</p>
                    <p className="text-[#554B3E]"><strong>Profile:</strong> Design studios in Faisalabad and Lahore sourcing bespoke manufacturing partners for client villas.</p>
                    <p className="text-[#554B3E]"><strong>Expectation:</strong> Precision CAD execution, fabric swatch availability in showroom, and reliable on-time handover.</p>
                  </div>
                </div>
              </div>

              {/* 3. Visual Design System & Color Palette */}
              <div className="bg-white p-6 rounded-lg border border-[#E5DACB] space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                  3. Visual Design System & Typography
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
                  <div className="p-3 rounded bg-[#FAF8F5] border border-[#D8CEBE]">
                    <div className="w-full h-8 rounded bg-[#FAF8F5] border border-[#DDD] mb-2" />
                    <span className="font-bold">#FAF8F5</span>
                    <p className="text-[10px] text-[#7A6F5F]">Warm Ivory Canvas</p>
                  </div>
                  <div className="p-3 rounded bg-[#FAF8F5] border border-[#D8CEBE]">
                    <div className="w-full h-8 rounded bg-[#1C1A17] mb-2" />
                    <span className="font-bold">#1C1A17</span>
                    <p className="text-[10px] text-[#7A6F5F]">Deep Charcoal</p>
                  </div>
                  <div className="p-3 rounded bg-[#FAF8F5] border border-[#D8CEBE]">
                    <div className="w-full h-8 rounded bg-[#C99E5C] mb-2" />
                    <span className="font-bold">#C99E5C</span>
                    <p className="text-[10px] text-[#7A6F5F]">Brushed Gold</p>
                  </div>
                  <div className="p-3 rounded bg-[#FAF8F5] border border-[#D8CEBE]">
                    <div className="w-full h-8 rounded bg-[#9A733E] mb-2" />
                    <span className="font-bold">#9A733E</span>
                    <p className="text-[10px] text-[#7A6F5F]">Warm Taupe</p>
                  </div>
                  <div className="p-3 rounded bg-[#FAF8F5] border border-[#D8CEBE]">
                    <div className="w-full h-8 rounded bg-[#25D366] mb-2" />
                    <span className="font-bold">#25D366</span>
                    <p className="text-[10px] text-[#7A6F5F]">WhatsApp Signal</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#E5DACB]">
                    <span className="font-bold block text-sm font-serif">Playfair Display & Cormorant Garamond</span>
                    <p className="text-[#706555] mt-1">High-contrast serif pairing for editorial luxury headings and architectural cadence.</p>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#E5DACB]">
                    <span className="font-bold block text-sm font-sans">Plus Jakarta Sans</span>
                    <p className="text-[#706555] mt-1">Refined, balanced geometric sans-serif for body typography, specs, and mobile legibility.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'copy' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white p-6 rounded-lg border border-[#E5DACB]">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17] mb-4">
                  Homepage Wireframe & Content Strategy
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2D8CA]">
                    <span className="font-bold text-[#845E2A] uppercase">Section 1: Hero</span>
                    <p className="text-[#1C1A17] font-semibold mt-1">Headline: "Furniture Designed to Define Your Space."</p>
                    <p className="text-[#554C3E] mt-0.5">Subcopy: Specializing in bespoke curved sofas, sculptural statement furniture, and architectural bedroom suites handcrafted for Faisalabad’s most discerning residences.</p>
                    <p className="text-[#845E2A] font-medium mt-1">CTAs: [Chat on WhatsApp (+92 323 6044130)] | [Visit Showroom (D Ground)]</p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2D8CA]">
                    <span className="font-bold text-[#845E2A] uppercase">Section 2: Trust Ribbon</span>
                    <p className="text-[#554C3E]">4.8/5.0 Google Rating • 63+ Verified Reviews • D Ground Flagship Showroom • Master Hardwood Joinery • Regional White-Glove Delivery.</p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2D8CA]">
                    <span className="font-bold text-[#845E2A] uppercase">Section 3: Featured Collections</span>
                    <p className="text-[#554C3E]">Curated architectural categories: Living Room Architecture, Signature & Curved Sofas, Master Bedroom Suites, Sculptural Tables & Marble, Designer Accent Chairs, Custom Commissions.</p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2D8CA]">
                    <span className="font-bold text-[#845E2A] uppercase">Section 4: Signature Curved Sofas</span>
                    <p className="text-[#1C1A17] font-semibold mt-1">"Statement pieces for spaces that deserve more."</p>
                    <p className="text-[#554C3E]">Explaining monolithic curvature, 38-density cloud foam, and imported performance fabrics (bouclé, velvet, chenille).</p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2D8CA]">
                    <span className="font-bold text-[#845E2A] uppercase">Section 5: Custom Furniture Studio</span>
                    <p className="text-[#554C3E]">Interactive configurator: Allows homeowners to choose room type, silhouette, fabric, color, and wall dimensions with instant formatted WhatsApp output.</p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2D8CA]">
                    <span className="font-bold text-[#845E2A] uppercase">Section 6: Showroom Experience & Verified Amenities</span>
                    <p className="text-[#1C1A17] font-semibold mt-1">"See the difference in person."</p>
                    <p className="text-[#554C3E]">D Ground, Hurrian Wala Chowk, People’s Colony No. 1, Faisalabad. Google Maps directions and VIP appointment scheduler.</p>
                    <p className="text-[#845E2A] font-medium mt-1">Verified GBP Amenities: Assistive Hearing Loop, Wheelchair Accessible Seating & Restroom, Free Parking Lot & Street Parking, Same-Day & White-Glove Delivery, Assembly & Repair Services, Debit Cards & Checks.</p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2D8CA]">
                    <span className="font-bold text-[#845E2A] uppercase">Section 7: Final Conversion Block</span>
                    <p className="text-[#1C1A17] font-semibold mt-1">"Ready to Transform Your Space?"</p>
                    <p className="text-[#554C3E]">Direct action triggers: [WhatsApp Us] & [Get Directions].</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white p-6 rounded-lg border border-[#E5DACB] space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17] flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#845E2A]" />
                  Local SEO & Search Strategy (Faisalabad Focus)
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Primary Page Title Tag</span>
                    <code className="text-[#845E2A]">Furniture Store By Sheheryar | Luxury Designer Furniture in Faisalabad</code>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Meta Description</span>
                    <p className="text-[#554B3E]">Discover bespoke luxury sofas, curved designer living room collections, custom bedrooms, and architectural furniture at D Ground, People's Colony No. 1, Faisalabad.</p>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">High-Value Target Keywords</span>
                    <p className="text-[#554B3E]">furniture store in faisalabad, luxury furniture faisalabad, designer furniture faisalabad, curved sofa shop faisalabad, custom furniture d ground faisalabad, bedroom furniture peoples colony faisalabad, modern furniture showroom faisalabad.</p>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Google Business Profile (GBP) Synchronization</span>
                    <p className="text-[#554B3E]">Match exact NAP (Name: Furniture Store By Sheheryar, Address: D Ground, Hurrian Wala Chowk, People’s Colony No. 1, Phone: +92 323 6044130). Maintain weekly photo updates of new showroom displays to preserve the 4.8-star rank.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Conversion Architecture */}
              <div className="bg-white p-6 rounded-lg border border-[#E5DACB] space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17] flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  WhatsApp Funnel Strategy (Pakistani Market Optimization)
                </h3>
                <p className="text-xs text-[#554B3E] leading-relaxed">
                  In Pakistan, luxury home furniture conversion happens over WhatsApp. The website avoids cart checkouts and instead deploys contextual intent prefilling:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Product Level</span>
                    <p className="text-[#6D6252] mt-0.5">Prefills exact product title, selected fabric finish, and asks for price & showroom availability.</p>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Custom Studio</span>
                    <p className="text-[#6D6252] mt-0.5">Formats complete specification brief (room, dimensions, fabric tone, special notes).</p>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#ECE2D5]">
                    <span className="font-bold text-[#1C1A17] block">Showroom Booking</span>
                    <p className="text-[#6D6252] mt-0.5">Prefills client name, requested date, time slot, and furniture category of interest.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white p-6 rounded-lg border border-[#E5DACB] space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#845E2A] flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-[#845E2A]" />
                  Missing Information to Collect from Business Owner
                </h3>
                <p className="text-xs text-[#635848]">
                  The following items are explicitly marked with <code>[NEEDS CLIENT CONFIRMATION]</code> across the concept and should be finalized with Sheheryar before official production deployment:
                </p>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-[#FFFBF5] rounded border border-[#EFE3D3] flex items-start gap-2">
                    <span className="font-mono font-bold text-[#845E2A]">[1]</span>
                    <div>
                      <strong className="text-[#1C1A17]">Exact Business Operating Hours:</strong>
                      <p className="text-[#685D4E]">Verify exact daily opening/closing timings (currently set to 11:00 AM – 10:30 PM) and Friday prayer break timings.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FFFBF5] rounded border border-[#EFE3D3] flex items-start gap-2">
                    <span className="font-mono font-bold text-[#845E2A]">[2]</span>
                    <div>
                      <strong className="text-[#1C1A17]">Official Social Media & Instagram Handle:</strong>
                      <p className="text-[#685D4E]">Confirm verified Instagram handle and Facebook page link.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FFFBF5] rounded border border-[#EFE3D3] flex items-start gap-2">
                    <span className="font-mono font-bold text-[#845E2A]">[3]</span>
                    <div>
                      <strong className="text-[#1C1A17]">Custom Furniture Production Lead Time:</strong>
                      <p className="text-[#685D4E]">Confirm average delivery turnaround for bespoke curved sofas (e.g. 14 to 28 days).</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FFFBF5] rounded border border-[#EFE3D3] flex items-start gap-2">
                    <span className="font-mono font-bold text-[#845E2A]">[4]</span>
                    <div>
                      <strong className="text-[#1C1A17]">Regional Delivery Coverage:</strong>
                      <p className="text-[#685D4E]">Confirm logistics details and transport terms for shipments to Lahore, Islamabad, Rawalpindi, and Multan.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FFFBF5] rounded border border-[#EFE3D3] flex items-start gap-2">
                    <span className="font-mono font-bold text-[#845E2A]">[5]</span>
                    <div>
                      <strong className="text-[#1C1A17]">Warranty & Structural Guarantee Terms:</strong>
                      <p className="text-[#685D4E]">Confirm structural warranty on kiln-dried hardwood frames and high-density cushioning foam.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FFFBF5] rounded border border-[#EFE3D3] flex items-start gap-2">
                    <span className="font-mono font-bold text-[#845E2A]">[6]</span>
                    <div>
                      <strong className="text-[#1C1A17]">High-Resolution Showroom Photography:</strong>
                      <p className="text-[#685D4E]">Collect raw 4K photos of latest floor pieces in D Ground to replace concept imagery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#EFE8DD] p-4 px-6 border-t border-[#DFD6C7] flex items-center justify-between shrink-0">
          <p className="text-xs text-[#706453]">
            Proposal Concept prepared for <strong>Furniture Store By Sheheryar</strong>
          </p>
          <button
            onClick={onClose}
            className="bg-[#1C1A17] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded cursor-pointer hover:bg-[#2B2721] transition-colors"
          >
            Close Strategy Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
