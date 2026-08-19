import React, { useState } from 'react';
import { FAQ_DATA } from '../data/furnitureData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#845E2A] inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Client Guide
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[#665D4F]">
            Everything you need to know about visiting our showroom, bespoke orders, and delivery.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-lg border border-[#E7DDCE] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1C1A17]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#845E2A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#544B3F] leading-relaxed border-t border-[#F2ECE3]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-[#7A6F5F]">
            Have a custom architectural inquiry?
          </p>
          <a
            href={createGeneralWhatsAppUrl('Hi Sheheryar, I have a specific question regarding custom furniture for my house in Faisalabad.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#845E2A] hover:text-[#1C1A17] mt-1.5 underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Speak directly with Sheheryar on WhatsApp (+92 323 6044130)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
