import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/furnitureData';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const SocialProofReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#EAE1D3]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#845E2A] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Client Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] mt-2">
              Endorsed by Faisalabad Homeowners
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-lg border border-[#E2D6C5] shadow-sm flex items-center gap-4">
            <div className="text-center border-r border-[#EFE9DF] pr-4">
              <span className="font-serif text-3xl font-bold text-[#1C1A17]">4.8</span>
              <div className="flex items-center justify-center text-[#B8860B] mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C99E5C] text-[#C99E5C]" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                Google Verified Rating
              </p>
              <p className="text-xs text-[#7A6F5F] mt-0.5">
                Based on 63+ Authentic Client Reviews
              </p>
              <span className="inline-block text-[10px] text-[#845E2A] font-semibold mt-1">
                Top Rated Showroom in D Ground
              </span>
            </div>
          </div>
        </div>

        {/* Review Themes Banner */}
        <div className="mt-8 flex flex-wrap gap-2.5 items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5F5444]">
            Key Client Themes:
          </span>
          <span className="bg-[#F0E9DF] text-[#42392E] text-xs px-3 py-1 rounded-full font-medium">
            ✓ Flawless Stitching & Foam Density
          </span>
          <span className="bg-[#F0E9DF] text-[#42392E] text-xs px-3 py-1 rounded-full font-medium">
            ✓ Strictly On-Time Delivery
          </span>
          <span className="bg-[#F0E9DF] text-[#42392E] text-xs px-3 py-1 rounded-full font-medium">
            ✓ Honest Factory-Direct Pricing
          </span>
          <span className="bg-[#F0E9DF] text-[#42392E] text-xs px-3 py-1 rounded-full font-medium">
            ✓ Personal Attention by Sheheryar
          </span>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFFFF] p-8 rounded-lg border border-[#E7DDCE] shadow-sm flex flex-col justify-between relative group hover:border-[#845E2A] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#C99E5C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C99E5C]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8E8373] font-medium flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    {rev.date}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-[#F8F4EE] border border-[#EAE1D3] text-[#845E2A] text-[11px] font-bold px-2.5 py-1 rounded">
                    "{rev.highlight}"
                  </span>
                </div>

                <p className="text-sm text-[#4E4437] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-[#1C1A17]">
                    {rev.author}
                  </p>
                  <p className="text-[11px] text-[#877C6D]">
                    {rev.location}
                  </p>
                </div>

                <Quote className="w-6 h-6 text-[#E0D5C3]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Action */}
        <div className="mt-12 p-6 rounded-lg bg-[#F5EFE6] border border-[#E0D5C3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-lg font-bold text-[#1C1A17]">
              Want to see real photos of our recently delivered furniture in Faisalabad?
            </p>
            <p className="text-xs text-[#706453] mt-0.5">
              Ask our team on WhatsApp for live video walkthroughs or client installation photos.
            </p>
          </div>

          <a
            href={createGeneralWhatsAppUrl('Hi Sheheryar, can you share recent client installation photos and videos of your furniture in Faisalabad?')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-sheen shrink-0 bg-[#1C1A17] text-[#FAF8F5] px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2721] transition-colors"
          >
            Request Recent Portfolio on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
