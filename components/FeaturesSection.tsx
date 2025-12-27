import React, { useState } from 'react';
import { Palmtree, Moon, Hotel, ArrowRight } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Holidays');

  return (
    <section className="bg-[#F3F2EF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Toggle Pills */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-lg shadow-[#020887]/5 inline-flex border border-gray-100">
            {['Holidays', 'Religious', 'Hotels'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-[#020887] text-white shadow-md' 
                    : 'text-[#647AA3] hover:text-[#020887]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#020887] mb-6 tracking-tight">
            Latest Holiday Offers
          </h2>
          <p className="text-[#647AA3] max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Escape the ordinary with our curated selection of luxury retreats and spiritual journeys, designed for discerning travelers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Ash Grey - Luxury Family */}
          {/* Using Ash Grey background with Royal Blue content for high-end look */}
          <div className="bg-[#95B2B0] rounded-[40px] p-10 flex flex-col justify-between min-h-[500px] hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-[#95B2B0]/20">
             <div className="mb-8">
                 <div className="w-24 h-24 bg-[#020887]/10 rounded-full flex items-center justify-center mb-6">
                    <Palmtree size={40} className="text-[#020887]" />
                 </div>
                 <h3 className="text-3xl font-bold text-[#020887] mb-4 tracking-tight">Luxury Family Retreat</h3>
                 <p className="text-[#020887]/90 leading-relaxed font-medium text-lg">
                    Escape the ordinary with a family retreat designed for effortless relaxation. Enjoy 5-star accommodation, private airport transfers, and curated activities.
                 </p>
             </div>
             <button className="w-14 h-14 bg-[#020887] rounded-full flex items-center justify-center text-[#95B2B0] hover:bg-[#334195] transition-colors">
                 <ArrowRight size={24} />
             </button>
          </div>

          {/* Card 2: Image Background - Religious Tours */}
          <div className="relative rounded-[40px] overflow-hidden min-h-[500px] group shadow-xl shadow-black/10">
             <img 
               src="/religious-journeys-bg.jpg" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               alt="Mosque"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020887] via-[#020887]/40 to-transparent opacity-90"></div>
             <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <Moon size={32} className="text-[#95B2B0]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Religious Journeys</h3>
                <p className="text-[#95B2B0] leading-relaxed font-medium mb-6">
                   Expertly managed Umrah & Hajj packages. Focus on your spiritual journey while we handle the logistics.
                </p>
                <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                    View Packages <ArrowRight size={18} />
                </button>
             </div>
          </div>

          {/* Card 3: White - Serena Hotels */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col justify-between min-h-[500px] border border-gray-100 shadow-xl shadow-gray-200/50 hover:scale-[1.02] transition-transform duration-300">
             <div>
                 <div className="w-24 h-24 bg-[#F3F2EF] rounded-full flex items-center justify-center mb-6">
                    <Hotel size={40} className="text-[#020887]" />
                 </div>
                 <h3 className="text-3xl font-bold text-[#020887] mb-4 tracking-tight">Serena Hotels</h3>
                 <p className="text-[#647AA3] leading-relaxed font-medium mb-6">
                    Experience heritage and luxury with our exclusive partnership. Discover architectural masterpieces.
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-[#020887]">
                        <div className="w-2 h-2 bg-[#95B2B0] rounded-full"></div>
                        Exclusive Rates
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[#020887]">
                        <div className="w-2 h-2 bg-[#95B2B0] rounded-full"></div>
                        Complimentary Upgrades
                    </li>
                 </ul>
             </div>
             <button className="text-[#020887] font-bold flex items-center gap-2 mt-8 hover:gap-4 transition-all">
                Explore Hotels <ArrowRight size={20} />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;