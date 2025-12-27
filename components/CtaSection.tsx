import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image (Wood Texture/Wicker) */}
      <div className="absolute inset-0 z-0">
        <img 
            src="/cta-bg-image.jpg" 
            className="w-full h-full object-cover"
            alt="Texture Background"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <span className="text-white/80 uppercase tracking-widest text-sm font-bold mb-4 block">Tailored for you</span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white max-w-3xl leading-tight mb-10 tracking-tight">
          Ready for your <br />
          next adventure?
        </h2>
        
        <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl">
          Start your journey
        </button>
      </div>
    </section>
  );
};

export default CtaSection;