import React from 'react';
import { Plane, Star, BadgeCheck, ArrowRight } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#020887] py-48 md:py-64 relative overflow-hidden text-white">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[600px]">
        
        {/* Central Text */}
        <h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-center leading-none tracking-tight mb-12 z-20">
          Handpicked<br />
          <span className="text-[#95B2B0]">Exclusive Fares</span>
        </h2>

        <p className="text-[#647AA3] text-center max-w-2xl text-lg md:text-2xl mb-16 z-20 font-medium leading-relaxed">
          We negotiate directly with the world's leading airlines to bring you premium seats at prices you won't see on comparison sites. Secure your seat today.
        </p>

        <div className="flex gap-4 z-20">
            <button className="bg-[#95B2B0] text-[#020887] px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all flex items-center gap-2 shadow-lg shadow-[#020887]/50 hover:scale-105 duration-300">
                View all offers <ArrowRight size={24} />
            </button>
        </div>

        {/* Floating Pills - Pushed further to corners for spacing */}
        
        {/* Top Left - Ash Grey Glow */}
        <div className="hidden lg:flex absolute top-20 left-10 xl:left-24 bg-[#334195]/40 backdrop-blur-md border border-[#95B2B0]/30 text-white px-6 py-3 rounded-full items-center gap-3 animate-float-slow shadow-xl z-10 hover:scale-110 transition-transform cursor-pointer">
           <Plane size={20} className="rotate-45 text-[#95B2B0]" />
           <span className="font-bold tracking-wide">London to Dubai - <span className="text-[#95B2B0]">£450</span></span>
        </div>

        {/* Top Right - Clean White Glass */}
        <div className="hidden lg:flex absolute top-32 right-10 xl:right-32 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full items-center gap-3 animate-float-medium shadow-xl z-10 hover:scale-110 transition-transform cursor-pointer">
           <Star size={20} className="text-[#95B2B0]" />
           <span className="font-bold">Business Class Upgrade</span>
        </div>

        {/* Bottom Right - Solid Ash Accent */}
        <div className="hidden lg:flex absolute bottom-32 right-20 xl:right-48 bg-[#95B2B0] text-[#020887] px-6 py-3 rounded-full items-center gap-3 animate-float-fast shadow-xl shadow-[#000]/20 z-10 hover:scale-110 transition-transform cursor-pointer">
           <BadgeCheck size={20} />
           <span className="font-bold">400+ Airline Partners</span>
        </div>
        
         {/* Bottom Left - French Blue */}
         <div className="hidden lg:flex absolute bottom-40 left-10 xl:left-32 bg-[#334195] border border-white/10 text-white px-6 py-3 rounded-full items-center gap-3 animate-float-medium shadow-xl z-10 hover:scale-110 transition-transform cursor-pointer">
           <Plane size={20} className="rotate-45 text-[#95B2B0]" />
           <span className="font-bold">NYC to London - <span className="text-[#95B2B0]">£350</span></span>
        </div>

        {/* Mobile View - Stacked Pills */}
        <div className="flex flex-wrap gap-4 justify-center mt-12 lg:hidden">
            <div className="bg-[#334195] border border-white/10 text-white px-4 py-2 rounded-full text-sm font-bold">LHR - DXB £450</div>
            <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold">Business Class Deals</div>
            <div className="bg-[#95B2B0] text-[#020887] px-4 py-2 rounded-full text-sm font-bold">400+ Airlines</div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;