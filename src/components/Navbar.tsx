import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenProposal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenProposal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro announcement bar */}
      <div id="top-announcement-bar" className="bg-[#1C1A17] text-[#D8CEBE] text-xs py-2 px-4 border-b border-[#2E2A24]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C99E5C] animate-pulse"></span>
            <span className="tracking-wide">Flagship Showroom in D Ground, Faisalabad</span>
            <span className="hidden sm:inline text-[#8E8475]">|</span>
            <span className="hidden sm:inline text-[#E8DEC8]">⭐ 4.8/5 on Google (63 Reviews)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
            <button
              onClick={onOpenProposal}
              className="text-[#C99E5C] hover:text-[#E8DEC8] transition-colors underline font-medium cursor-pointer"
            >
              View Client Proposal & Strategy
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1 text-[#D8CEBE]"
            >
              <Phone className="w-3 h-3 text-[#C99E5C]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        id="main-site-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#EAE3D9] py-3.5'
            : 'bg-[#FAF8F5] py-5 border-b border-[#EFE9DF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-[#1C1A17] text-[#FAF8F5] flex items-center justify-center font-serif text-lg tracking-widest border border-[#C99E5C]/30 shadow-inner">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1C1A17] leading-none">
                SHEHERYAR
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#736859] mt-1 font-medium">
                Designer Furniture Showroom
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase text-[#3E382F]">
            <a href="#collections" className="hover:text-[#9A733E] transition-colors">
              Collections
            </a>
            <a href="#signature-sofas" className="hover:text-[#9A733E] transition-colors">
              Curved Sofas
            </a>
            <a href="#custom-studio" className="hover:text-[#9A733E] transition-colors">
              Custom Studio
            </a>
            <a href="#showroom" className="hover:text-[#9A733E] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C99E5C]" />
              D Ground Showroom
            </a>
            <a href="#reviews" className="hover:text-[#9A733E] transition-colors">
              Client Reviews
            </a>
            <button
              onClick={onOpenProposal}
              className="text-[#9A733E] bg-[#F3ECE0] px-2.5 py-1 rounded text-xs font-semibold hover:bg-[#EAE0D0] transition-colors"
            >
              Brand Strategy
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm border border-[#3E382F] text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#FAF8F5] transition-all cursor-pointer"
            >
              Book Showroom Visit
            </button>

            <a
              id="header-whatsapp-cta"
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-sheen flex items-center gap-2 bg-[#1C1A17] text-[#FAF8F5] px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2722] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1C1A17] hover:bg-[#EFE9DF] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE3D9] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-[#3E382F]">
              <a
                href="#collections"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#F0EAE1] hover:text-[#9A733E]"
              >
                Collections
              </a>
              <a
                href="#signature-sofas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#F0EAE1] hover:text-[#9A733E]"
              >
                Signature Curved Sofas
              </a>
              <a
                href="#custom-studio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#F0EAE1] hover:text-[#9A733E]"
              >
                Custom Furniture Studio
              </a>
              <a
                href="#showroom"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#F0EAE1] hover:text-[#9A733E] flex items-center justify-between"
              >
                <span>D Ground Showroom</span>
                <MapPin className="w-4 h-4 text-[#C99E5C]" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#F0EAE1] hover:text-[#9A733E]"
              >
                Google Reviews (4.8 ★)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposal();
                }}
                className="text-left py-2 text-[#9A733E] font-semibold flex items-center justify-between"
              >
                <span>Full Brand Strategy & Dossier</span>
                <Compass className="w-4 h-4" />
              </button>
            </nav>

            <div className="mt-5 pt-4 border-t border-[#EAE3D9] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-2.5 text-xs uppercase tracking-wider font-semibold border border-[#3E382F] text-[#1C1A17] rounded-sm"
              >
                Schedule Showroom Tour
              </button>
              <a
                href={createGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1C1A17] text-[#FAF8F5] py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
