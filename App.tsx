import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import DestinationsSection from './components/DestinationsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
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
    </div>
  );
}
