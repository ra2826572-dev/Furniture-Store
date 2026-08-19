import React, { useState } from 'react';
import { Product } from '../types';
import { X, MessageCircle, Ruler, Sparkles, Check, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { createProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedFinish, setSelectedFinish] = useState<string>(product.finishOptionsPlaceholder[0] || 'Default');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E0D5C3] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#D5C9B8] flex items-center justify-center text-[#1C1A17] hover:bg-[#EAE0D0] transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8">
          {/* Images Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="rounded-lg overflow-hidden border border-[#E5DACB] bg-[#EBE2D5] h-72 sm:h-96">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.secondaryImage && (
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-20 h-16 rounded overflow-hidden border-2 cursor-pointer ${
                    activeImage === product.image ? 'border-[#1C1A17]' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-20 h-16 rounded overflow-hidden border-2 cursor-pointer ${
                    activeImage === product.secondaryImage ? 'border-[#1C1A17]' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={product.secondaryImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {product.badge && (
                <span className="inline-block bg-[#1C1A17] text-[#FAF8F5] text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded mb-2">
                  {product.badge}
                </span>
              )}

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17] leading-tight">
                {product.name}
              </h3>
              <p className="text-xs text-[#845E2A] font-semibold italic mt-1">
                {product.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#544B3F] mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Price Indicator (Placeholder labeled as required) */}
              <div className="mt-5 p-3.5 rounded bg-[#FAF8F5] border border-[#E8DEC8]">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#1C1A17]">
                    Pricing Structure:
                  </span>
                  <span className="text-xs font-mono font-bold text-[#845E2A]">
                    [Price: Custom Quoted upon Dimension & Fabric Selection]
                  </span>
                </div>
                <p className="text-[11px] text-[#7A6F5F] mt-1">
                  *Because every piece is handcrafted to your exact dimensions and selected imported textile, pricing is calculated transparently per running foot / layout.
                </p>
              </div>

              {/* Specifications Placeholders */}
              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <Ruler className="w-4 h-4 text-[#845E2A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1C1A17]">Dimensions: </span>
                    <span className="text-[#63594B]">{product.dimensionsPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-[#845E2A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1C1A17]">Materials: </span>
                    <span className="text-[#63594B]">{product.materialsPlaceholder}</span>
                  </div>
                </div>
              </div>

              {/* Swatches / Finish Selection */}
              <div className="mt-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1A17] mb-2">
                  Select Preferred Upholstery / Finish:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.finishOptionsPlaceholder.map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      className={`text-xs px-3 py-1.5 rounded border transition-all cursor-pointer ${
                        selectedFinish === finish
                          ? 'bg-[#1C1A17] text-[#FAF8F5] border-[#1C1A17]'
                          : 'bg-[#FAF8F5] text-[#554B3E] border-[#D8CEBE] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#F0E8DD]">
              <a
                href={createProductWhatsAppUrl(product, selectedFinish)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-sheen w-full flex items-center justify-center gap-2 bg-[#1C1A17] text-[#FAF8F5] py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#2F2922] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Inquire About "{product.name}" on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-[#8C8070] mt-2">
                Showroom team replies promptly with fabric samples and exact quotation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
