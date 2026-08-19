import React, { useState } from 'react';
import { COLLECTIONS, PRODUCTS } from '../data/furnitureData';
import { Product } from '../types';
import { ArrowUpRight, MessageCircle, Eye, Sparkles } from 'lucide-react';
import { createProductWhatsAppUrl, createGeneralWhatsAppUrl } from '../utils/whatsapp';

interface FeaturedCollectionsProps {
  onSelectProduct: (product: Product) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Curated Pieces' },
    { id: 'sofas', label: 'Signature & Curved Sofas' },
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom Suites' },
    { id: 'tables', label: 'Coffee & Center Tables' },
    { id: 'chairs', label: 'Accent Chairs' },
  ];

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="collections" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#EAE2D5]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#845E2A]">
              Curated Architectural Living
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] mt-2">
              Featured Collections
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#685E4F] max-w-md font-normal leading-relaxed">
            Every piece is designed with pure geometry, tactile imported upholstery, and bespoke proportions configured for modern Pakistani homes.
          </p>
        </div>

        {/* Category Editorial Cards Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className="group relative h-[360px] sm:h-[400px] rounded-lg overflow-hidden border border-[#E5DBCC] shadow-sm bg-[#EBE2D5]"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/85 via-[#141210]/30 to-transparent" />

              <div className="absolute top-4 right-4 bg-[#1C1A17]/70 backdrop-blur-md px-3 py-1 rounded text-[11px] font-medium text-[#D8CEBE] border border-white/10">
                {col.itemCountPlaceholder}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] tracking-widest uppercase text-[#C99E5C] font-semibold block mb-1">
                  Collection
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] leading-snug">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8CEBE] mt-1.5 line-clamp-2 leading-relaxed">
                  {col.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                  <button
                    onClick={() => setActiveTab(col.category)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAF8F5] hover:text-[#C99E5C] transition-colors cursor-pointer"
                  >
                    <span>Explore Pieces</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={createGeneralWhatsAppUrl(`Hi Sheheryar, I would like to know what designs are currently on display for "${col.title}" in your D Ground showroom.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] bg-white/15 hover:bg-[#25D366] hover:text-white px-2.5 py-1 rounded transition-colors text-[#FAF8F5] flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Curated Product Lookbook */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#845E2A]">
                Product Showcase
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17] mt-1">
                Explore Signature Pieces
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-[#1C1A17] text-[#FAF8F5] shadow-sm'
                      : 'bg-[#F2ECE1] text-[#605545] hover:bg-[#E8DFCFA] border border-[#E2D7C6]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#FFFFFF] rounded-lg border border-[#EAE3D7] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-64 overflow-hidden bg-[#EBE2D5] cursor-pointer" onClick={() => onSelectProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#1C1A17]/85 backdrop-blur-sm text-[#FAF8F5] text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded">
                        {product.badge}
                      </span>
                    )}
                    {product.isCurvedOrSculptural && (
                      <span className="absolute top-3 right-3 bg-[#C99E5C] text-[#1C1A17] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                        Curved Design
                      </span>
                    )}

                    <div className="absolute inset-0 bg-[#1C1A17]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="bg-white/90 hover:bg-white text-[#1C1A17] text-xs font-semibold px-3 py-2 rounded-sm shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-lg font-bold text-[#1C1A17] leading-snug">
                        {product.name}
                      </h4>
                    </div>

                    <p className="text-xs text-[#7A6F5F] mt-1 font-medium italic">
                      {product.tagline}
                    </p>

                    <p className="text-xs text-[#524B40] mt-3 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Placeholder Spec Tags */}
                    <div className="mt-4 pt-3 border-t border-[#F2EDE5] space-y-1.5 text-[11px]">
                      <p className="text-[#877C6D] flex items-center gap-1">
                        <span className="font-semibold text-[#544C3F]">Customization:</span>
                        <span>{product.dimensionsPlaceholder}</span>
                      </p>
                      <p className="text-[#877C6D]">
                        <span className="font-semibold text-[#544C3F]">Available Swatches:</span>{' '}
                        {product.finishOptionsPlaceholder.slice(0, 3).join(', ')}...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-[#F7F3EE]">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-semibold text-[#845E2A] hover:text-[#1C1A17] transition-colors underline cursor-pointer"
                  >
                    View Specs
                  </button>

                  <a
                    href={createProductWhatsAppUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-sheen flex items-center gap-1.5 bg-[#1C1A17] text-[#FAF8F5] px-3.5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#2C2721] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire Price</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
