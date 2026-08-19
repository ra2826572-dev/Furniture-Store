import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/furnitureData';
import { Compass, Sparkles, Hammer, ShieldCheck, Truck, Users } from 'lucide-react';

export const WhySheheryar: React.FC = () => {
  const icons = [Sparkles, Compass, Hammer, Truck, Users];

  return (
    <section id="why-sheheryar" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#845E2A]">
            The Standard of Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] mt-2">
            Why Discerning Homeowners Choose Sheheryar
          </h2>
          <p className="mt-3 text-base text-[#605647]">
            We bridge the gap between architectural interior design and local artisanal execution in Faisalabad.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-lg border border-[#E9E0D3] shadow-sm hover:border-[#845E2A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#F4EFE7] border border-[#E0D5C3] flex items-center justify-center text-[#845E2A]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-[#D8CEBE]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#845E2A] block mb-1.5">
                    {prop.tag}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#1C1A17] leading-snug">
                    {prop.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#5C5346] leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE3] flex items-center gap-1.5 text-xs text-[#845E2A] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality Assured in D Ground Showroom</span>
                </div>
              </div>
            );
          })}

          {/* Special CTA Card */}
          <div className="bg-[#1C1A17] text-[#FAF8F5] p-8 rounded-lg border border-[#2E2922] shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C99E5C] block mb-2">
                Consultation
              </span>
              <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                Building or Renovating a Home in Faisalabad?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#D8CEBE] leading-relaxed">
                Bring your architect's 2D floor plans or 3D renders to our D Ground showroom. We provide end-to-end bespoke furniture manufacturing tailored to your exact spaces.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#custom-studio"
                className="btn-gold-sheen inline-flex items-center justify-center w-full bg-[#C99E5C] text-[#1C1A17] py-3 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-[#D8AF6D] transition-colors"
              >
                Launch Custom Planner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
