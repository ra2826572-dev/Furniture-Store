import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FeaturedCollections } from './components/FeaturedCollections';
import { SignatureSofas } from './components/SignatureSofas';
import { WhySheheryar } from './components/WhySheheryar';
import { CustomFurnitureStudio } from './components/CustomFurnitureStudio';
import { ShowroomExperience } from './components/ShowroomExperience';
import { SocialProofReviews } from './components/SocialProofReviews';
import { SocialInstagramGallery } from './components/SocialInstagramGallery';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ShowroomBookingModal } from './components/ShowroomBookingModal';
import { StrategyProposalModal } from './components/StrategyProposalModal';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1A17] flex flex-col selection:bg-[#C99E5C]/20 selection:text-[#1C1A17]">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenProposal={() => setIsProposalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Featured Collections & Signature Pieces Showcase */}
        <FeaturedCollections onSelectProduct={(p) => setSelectedProduct(p)} />

        {/* 4. Signature Curved Sofas Focus */}
        <SignatureSofas />

        {/* 5. Why Sheheryar Value Propositions */}
        <WhySheheryar />

        {/* 6. Custom Furniture Studio & Live WhatsApp Configurator */}
        <CustomFurnitureStudio />

        {/* 7. Showroom Experience in D Ground Faisalabad */}
        <ShowroomExperience onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 8. Social Proof & Verified Google Reviews (4.8/5) */}
        <SocialProofReviews />

        {/* 9. Instagram Lookbook & Social Gallery */}
        <SocialInstagramGallery />

        {/* 10. FAQ Guide with Structured Schema Readiness */}
        <FAQSection />

        {/* 11. Final High-Conversion Action Section */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenProposal={() => setIsProposalOpen(true)}
      />

      {/* Sticky Mobile Floating Conversion Bar */}
      <MobileQuickBar />

      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <ShowroomBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <StrategyProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </div>
  );
}
