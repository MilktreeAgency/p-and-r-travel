import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import DestinationsSection from './components/DestinationsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import SmartBookingModal from './components/SmartBookingModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-[#95B2B0] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <DestinationsSection />
        <CtaSection />
      </main>
      <Footer />

      {/* Floating Smart Booking Button */}
      <button
        onClick={() => setIsBookingModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#f43f5e] to-[#fb7185] text-white font-bold rounded-2xl shadow-2xl shadow-[#f43f5e]/40 hover:shadow-[#f43f5e]/60 hover:scale-105 transition-all duration-300 group"
      >
        <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
        <span className="hidden sm:inline">Smart Booking</span>
      </button>

      {/* Smart Booking Modal */}
      <SmartBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}