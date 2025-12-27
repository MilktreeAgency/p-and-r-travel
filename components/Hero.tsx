import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightLeft, 
  ChevronDown, 
  Plane, 
  Bed, 
  Moon, 
  Car,
  Loader2,
  Clock,
  Luggage,
  X,
  Check,
  Star
} from 'lucide-react';

// Mock flight data
const mockFlights = [
  {
    id: 1,
    airline: 'Emirates',
    logo: '🛩️',
    departure: '08:45',
    arrival: '14:30',
    duration: '5h 45m',
    stops: 'Direct',
    price: 489,
    originalPrice: 612,
    class: 'Economy',
    rating: 4.8,
  },
  {
    id: 2,
    airline: 'Qatar Airways',
    logo: '✈️',
    departure: '10:20',
    arrival: '17:55',
    duration: '7h 35m',
    stops: '1 stop (DOH)',
    price: 425,
    originalPrice: 530,
    class: 'Economy',
    rating: 4.7,
  },
  {
    id: 3,
    airline: 'British Airways',
    logo: '🇬🇧',
    departure: '14:15',
    arrival: '20:00',
    duration: '5h 45m',
    stops: 'Direct',
    price: 552,
    originalPrice: 690,
    class: 'Economy',
    rating: 4.5,
  },
  {
    id: 4,
    airline: 'Etihad Airways',
    logo: '🌟',
    departure: '22:30',
    arrival: '06:15+1',
    duration: '7h 45m',
    stops: '1 stop (AUH)',
    price: 398,
    originalPrice: 498,
    class: 'Economy',
    rating: 4.6,
  },
];

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Flights');
  const [fromCity, setFromCity] = useState('Southampton (SOU)');
  const [toCity, setToCity] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('1 Adult, Economy');
  
  // Search state
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);

  const handleSearch = () => {
    if (!toCity) return;
    
    setIsSearching(true);
    setSearchProgress(0);
    
    // Simulate search progress
    const progressInterval = setInterval(() => {
      setSearchProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Show results after loading
    setTimeout(() => {
      clearInterval(progressInterval);
      setSearchProgress(100);
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 300);
    }, 2500);
  };

  const closeResults = () => {
    setShowResults(false);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-visible bg-[#F3F2EF]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#020887] tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
          The World is Waiting. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#334195] to-[#647AA3] inline-block mt-2">
            Travel with Confidence.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#647AA3] max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
          Experience the difference of 40 years in travel. Whether it's a business trip or a spiritual journey, 
          let our experts curate the perfect itinerary for you. Call us for exclusive rates you won't find online.
        </p>

        {/* Flight Search Widget */}
        <div className="w-full max-w-[1100px] mx-auto bg-[#020887] rounded-3xl p-6 lg:p-8 shadow-2xl shadow-[#020887]/20 text-left animate-in fade-in slide-in-from-bottom-8 duration-700 ring-1 ring-white/10 relative">
          
          {/* Widget Header / Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-[#647AA3]/20 pb-6">
             {[
               { name: 'Flights', icon: Plane },
               { name: 'Hotels', icon: Bed },
               { name: 'Umrah & Hajj', icon: Moon },
               { name: 'Car Hire', icon: Car }
             ].map((tab) => (
                <button 
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.name 
                      ? 'bg-[#334195] text-white shadow-lg shadow-[#020887]/50 scale-105 ring-1 ring-[#647AA3]/50' 
                      : 'text-[#95B2B0] hover:text-white hover:bg-white/5'
                  }`}
                >
                   <tab.icon size={16} />
                   {tab.name}
                </button>
             ))}
          </div>

          {/* Sub-options */}
          <div className="flex items-center gap-6 mb-5 pl-1">
            <button className="flex items-center gap-2 text-[#95B2B0] border border-[#95B2B0]/30 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-white/5 hover:text-white transition-colors uppercase tracking-wider">
               Return <ChevronDown size={14} />
            </button>
            <div className="flex gap-4">
                <button className="text-white text-sm font-bold border-b-2 border-[#95B2B0] pb-0.5">One-way</button>
                <button className="text-[#647AA3] text-sm font-bold hover:text-white transition-colors pb-0.5">Multi-city</button>
            </div>
          </div>

          {/* Main Input Row */}
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* White Input Bar Container */}
            <div className="flex-1 bg-white rounded-2xl flex flex-col lg:flex-row relative shadow-xl h-auto lg:h-[88px] divide-y lg:divide-y-0 lg:divide-x divide-gray-100 ring-4 ring-white/5">
              
              {/* From Input */}
              <div className="flex-[1.4] relative p-4 pl-6 cursor-pointer hover:bg-[#F3F2EF] transition-colors group first:rounded-t-2xl lg:first:rounded-l-2xl lg:first:rounded-tr-none flex flex-col justify-center">
                <label className="block text-[11px] font-extrabold text-[#647AA3] uppercase tracking-wider mb-1">From</label>
                <input 
                  type="text" 
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full font-bold text-[#020887] text-[17px] outline-none bg-transparent placeholder:text-gray-300 truncate pr-4"
                />
                
                {/* Swap Icon */}
                <div className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20">
                    <div 
                      onClick={() => {
                        const temp = fromCity;
                        setFromCity(toCity);
                        setToCity(temp);
                      }}
                      className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-50 hover:scale-110 hover:border-[#647AA3] transition-all group-hover:shadow-blue-200/50 text-[#334195]"
                    >
                        <ArrowRightLeft size={16} />
                    </div>
                </div>
              </div>

              {/* To Input */}
              <div className="flex-[1.4] relative p-4 pl-8 cursor-pointer hover:bg-[#F3F2EF] transition-colors flex flex-col justify-center">
                <label className="block text-[11px] font-extrabold text-[#647AA3] uppercase tracking-wider mb-1">To</label>
                <input 
                  type="text" 
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  placeholder="Country, city or airport" 
                  className="w-full font-bold text-[#020887] text-[17px] outline-none bg-transparent placeholder:text-gray-300 truncate"
                />
              </div>

              {/* Depart Date */}
              <div className="flex-1 relative p-4 pl-6 cursor-pointer hover:bg-[#F3F2EF] transition-colors flex flex-col justify-center border-t lg:border-t-0">
                <label className="block text-[11px] font-extrabold text-[#647AA3] uppercase tracking-wider mb-1">Depart</label>
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="w-full font-bold text-[#020887] text-[17px] outline-none bg-transparent cursor-pointer"
                />
              </div>

              {/* Return Date */}
              <div className="flex-1 relative p-4 pl-6 cursor-pointer hover:bg-[#F3F2EF] transition-colors flex flex-col justify-center">
                <label className="block text-[11px] font-extrabold text-[#647AA3] uppercase tracking-wider mb-1">Return</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={departDate}
                  className="w-full font-bold text-[#020887] text-[17px] outline-none bg-transparent cursor-pointer"
                />
              </div>

              {/* Travellers */}
              <div className="flex-[1.2] relative p-4 pl-6 cursor-pointer hover:bg-[#F3F2EF] transition-colors rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none flex flex-col justify-center">
                <label className="block text-[11px] font-extrabold text-[#647AA3] uppercase tracking-wider mb-1">Travellers & Cabin</label>
                <div className="font-bold text-[#020887] text-[17px] truncate">{travelers}</div>
              </div>
            
            </div>

            {/* Search Button */}
            <button 
              onClick={handleSearch}
              disabled={!toCity || isSearching}
              className="bg-[#95B2B0] text-[#020887] font-bold text-xl px-10 py-4 lg:py-0 rounded-2xl hover:bg-white hover:text-[#020887] transition-all shadow-xl shadow-black/20 lg:w-auto w-full h-[88px] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  Search
                  <ArrowRightLeft className="hidden group-hover:block w-0 group-hover:w-5 transition-all duration-300" />
                </>
              )}
            </button>

          </div>

          {/* Widget Footer / Checkboxes */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-white text-sm font-bold pl-1">
            <label className="flex items-center gap-2 cursor-pointer select-none opacity-80 hover:opacity-100 transition-opacity">
               <div className="relative">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 border-[#95B2B0]/50 rounded bg-transparent peer-checked:bg-[#95B2B0] peer-checked:border-[#95B2B0] transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#020887] opacity-0 peer-checked:opacity-100 pointer-events-none">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
               </div>
               <span className="text-[#95B2B0]">Add nearby airports</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none opacity-80 hover:opacity-100 transition-opacity">
               <div className="relative">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 border-[#95B2B0]/50 rounded bg-transparent peer-checked:bg-[#95B2B0] peer-checked:border-[#95B2B0] transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#020887] opacity-0 peer-checked:opacity-100 pointer-events-none">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
               </div>
               <span className="text-[#95B2B0]">Direct flights only</span>
            </label>
            <div className="hidden md:block flex-1"></div>
            <label className="flex items-center gap-2 cursor-pointer select-none opacity-80 hover:opacity-100 transition-opacity">
               <div className="relative">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 border-[#95B2B0]/50 rounded bg-transparent peer-checked:bg-[#95B2B0] peer-checked:border-[#95B2B0] transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#020887] opacity-0 peer-checked:opacity-100 pointer-events-none">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
               </div>
               <span className="text-[#95B2B0]">Add a hotel</span>
            </label>
          </div>

        </div>

      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#F3F2EF] via-[#F3F2EF] to-white z-0 pointer-events-none" />

      {/* Search Loading Overlay */}
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020887]/90 backdrop-blur-sm"
          >
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-8">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#334195]" />
                {/* Progress ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    stroke="#95B2B0"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={377}
                    strokeDashoffset={377 - (377 * Math.min(searchProgress, 100)) / 100}
                    className="transition-all duration-200"
                  />
                </svg>
                {/* Center icon */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#334195] to-[#647AA3] flex items-center justify-center">
                  <Plane className="w-10 h-10 text-white animate-pulse" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Searching 400+ Airlines
              </h3>
              <p className="text-[#95B2B0] mb-4">
                Finding the best deals for {fromCity} → {toCity}
              </p>
              <div className="flex items-center justify-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#95B2B0]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flight Results Modal */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 pb-10 overflow-y-auto bg-[#020887]/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Results Header */}
              <div className="bg-gradient-to-r from-[#020887] to-[#334195] px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-white mb-2">
                      <span className="text-2xl font-bold">{fromCity.split('(')[0].trim()}</span>
                      <ArrowRightLeft className="w-5 h-5 text-[#95B2B0]" />
                      <span className="text-2xl font-bold">{toCity}</span>
                    </div>
                    <p className="text-[#95B2B0] text-sm">
                      {mockFlights.length} flights found • Best prices guaranteed
                    </p>
                  </div>
                  <button
                    onClick={closeResults}
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Flight Results */}
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {mockFlights.map((flight, index) => (
                  <motion.div
                    key={flight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-[#334195] rounded-2xl p-6 transition-all hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Airline Info */}
                      <div className="flex items-center gap-4 lg:w-48">
                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-2xl shadow-sm">
                          {flight.logo}
                        </div>
                        <div>
                          <p className="font-bold text-[#020887]">{flight.airline}</p>
                          <div className="flex items-center gap-1 text-sm text-[#647AA3]">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{flight.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Flight Times */}
                      <div className="flex-1 flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#020887]">{flight.departure}</p>
                          <p className="text-sm text-[#647AA3]">{fromCity.match(/\(([^)]+)\)/)?.[1] || 'DEP'}</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div className="flex items-center gap-2 text-sm text-[#647AA3] mb-1">
                            <Clock className="w-4 h-4" />
                            <span>{flight.duration}</span>
                          </div>
                          <div className="w-full h-0.5 bg-gray-200 relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#334195]" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#334195]" />
                            {flight.stops !== 'Direct' && (
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#95B2B0] border-2 border-white" />
                            )}
                          </div>
                          <p className="text-xs text-[#647AA3] mt-1">{flight.stops}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#020887]">{flight.arrival}</p>
                          <p className="text-sm text-[#647AA3]">{toCity.substring(0, 3).toUpperCase()}</p>
                        </div>
                      </div>

                      {/* Price & Book */}
                      <div className="lg:w-48 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-[#647AA3] line-through">£{flight.originalPrice}</p>
                          <p className="text-3xl font-extrabold text-[#020887]">£{flight.price}</p>
                          <p className="text-xs text-[#95B2B0]">per person</p>
                        </div>
                        <button className="px-6 py-3 bg-[#020887] hover:bg-[#334195] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#020887]/20 flex items-center gap-2 group-hover:scale-105">
                          Select
                          <Check className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Flight Details */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4 text-sm text-[#647AA3]">
                      <div className="flex items-center gap-2">
                        <Luggage className="w-4 h-4" />
                        <span>23kg checked bag included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4" />
                        <span>{flight.class}</span>
                      </div>
                      <div className="ml-auto text-[#334195] font-semibold">
                        Save £{flight.originalPrice - flight.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Results Footer */}
              <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[#647AA3] text-sm">
                  💡 <span className="font-semibold">Pro tip:</span> Call us for exclusive unpublished rates!
                </p>
                <button 
                  onClick={closeResults}
                  className="px-6 py-3 bg-[#95B2B0] hover:bg-[#020887] text-[#020887] hover:text-white font-bold rounded-xl transition-colors"
                >
                  Close Results
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
