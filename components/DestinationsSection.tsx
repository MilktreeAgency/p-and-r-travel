import React, { useRef } from 'react';
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    name: "World",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Europe",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Asia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "South Pacific",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
  },
];

const recentlyViewed = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      location: "Santorini, Greece"
    },
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      location: "Bali, Indonesia"
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      location: "Maldives"
    },
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      location: "Dubai, UAE"
    }
]

const DestinationsSection: React.FC = () => {
  const destinationsScrollRef = useRef<HTMLDivElement>(null);
  const recentlyViewedScrollRef = useRef<HTMLDivElement>(null);

  const scrollDestinations = (direction: 'left' | 'right') => {
    if (destinationsScrollRef.current) {
      const scrollAmount = 360; // Card width + gap
      const newScrollPosition = destinationsScrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      destinationsScrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollRecentlyViewed = (direction: 'left' | 'right') => {
    if (recentlyViewedScrollRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = recentlyViewedScrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      recentlyViewedScrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDestinationClick = (destination: string) => {
    console.log('Navigating to:', destination);
    // Add your navigation logic here
  };

  const handleRecentlyViewedClick = (location: string) => {
    console.log('Viewing:', location);
    // Add your navigation logic here
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020887]">Explore the world's most stunning seasides</h2>
          <p className="text-[#647AA3] mt-2 font-medium text-sm md:text-base">2025's Travelers' Choice Awards Best of the Best Beaches</p>
        </div>

        {/* Horizontal Scroll / Grid */}
        <div className="relative group">
            {/* Left Arrow */}
            <button 
              onClick={() => scrollDestinations('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-4 shadow-xl border border-gray-100 hover:scale-110 transition-transform text-[#020887] -ml-6"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={() => scrollDestinations('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-4 shadow-xl border border-gray-100 hover:scale-110 transition-transform text-[#020887] -mr-6"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={destinationsScrollRef}
              className="flex gap-4 md:gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x px-1 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {destinations.map((dest, idx) => (
                <div 
                  key={idx} 
                  onClick={() => handleDestinationClick(dest.name)}
                  className="relative min-w-[85vw] sm:min-w-[300px] md:min-w-[340px] h-[420px] rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer snap-start transition-transform hover:-translate-y-2 group/card"
                >
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" />
                    
                    {/* Gradient - Restricted to bottom 2/3 so the top is clear */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#020887]/90 to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <div className="w-14 h-16 bg-[#95B2B0] text-[#020887] flex flex-col items-center justify-center font-bold text-[10px] rounded-b-lg shadow-lg relative after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-2 after:bg-[#95B2B0] after:-mt-2 after:rounded-t-lg">
                            <div className="w-8 h-8 rounded-full border-2 border-[#020887] flex items-center justify-center mb-1">
                                <div className="w-4 h-2 border-b-2 border-[#020887] rounded-full"></div>
                            </div>
                            2025
                        </div>
                    </div>

                    <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white tracking-tight">{dest.name}</h3>
                </div>
            ))}
            </div>
        </div>


        <div className="mt-20">
             <h2 className="text-2xl font-bold text-[#020887] mb-8">Recently viewed</h2>
             
             {/* Recently Viewed with Navigation */}
             <div className="relative">
               {/* Left Arrow - Only show on mobile/tablet when there's overflow */}
               <button 
                 onClick={() => scrollRecentlyViewed('left')}
                 className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl border border-gray-100 hover:scale-110 transition-transform text-[#020887] -ml-4"
                 aria-label="Scroll left"
               >
                 <ChevronLeft size={20} />
               </button>

               {/* Right Arrow - Only show on mobile/tablet when there's overflow */}
               <button 
                 onClick={() => scrollRecentlyViewed('right')}
                 className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl border border-gray-100 hover:scale-110 transition-transform text-[#020887] -mr-4"
                 aria-label="Scroll right"
               >
                 <ChevronRight size={20} />
               </button>

               {/* Grid/Scroll Container */}
               <div 
                 ref={recentlyViewedScrollRef}
                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:overflow-x-auto lg:overflow-x-visible sm:flex lg:grid scroll-smooth hide-scrollbar snap-x"
                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               >
                  {recentlyViewed.map((item, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => handleRecentlyViewedClick(item.location)}
                        className="aspect-[4/3] rounded-3xl overflow-hidden relative group w-full sm:min-w-[280px] lg:min-w-0 flex-shrink-0 cursor-pointer snap-start transition-transform hover:-translate-y-2"
                      >
                          <img src={item.image} alt={item.location} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold tracking-tight">{item.location}</h3>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log('Favorited:', item.location);
                            }}
                            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md z-10"
                          >
                              <Heart size={18} className="text-[#020887]" />
                          </button>
                      </div>
                  ))}
               </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default DestinationsSection;