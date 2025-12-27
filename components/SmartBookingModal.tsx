import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Plane, 
  ChevronRight, 
  ChevronLeft,
  User,
  Baby,
  Minus,
  Plus,
  Check,
  Loader2
} from 'lucide-react';

interface SmartBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularDestinations = [
  'Dubai', 'New York', 'Umrah', 'London', 'Maldives', 'Paris', 'Tokyo', 'Istanbul'
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const SmartBookingModal: React.FC<SmartBookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [destination, setDestination] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setDirection(0);
      setDestination('');
      setDepartureDate('');
      setReturnDate('');
      setAdults(1);
      setChildren(0);
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  // Typing simulation
  useEffect(() => {
    if (destination) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [destination]);

  const nextStep = () => {
    if (step < 4) {
      setDirection(1);
      if (step === 3) {
        // Trigger loading state for step 4
        setStep(4);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(true);
        }, 3000);
      } else {
        setStep(step + 1);
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return destination.length > 2;
      case 2:
        return departureDate && returnDate;
      case 3:
        return adults > 0;
      default:
        return true;
    }
  };

  const stepTitles = [
    { icon: MapPin, label: 'Destination' },
    { icon: Calendar, label: 'Dates' },
    { icon: Users, label: 'Travelers' },
    { icon: Plane, label: 'Confirm' },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f43f5e] to-[#fb7185] flex items-center justify-center shadow-lg shadow-[#f43f5e]/30">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Smart Booking</h2>
                    <p className="text-white/60 text-sm">AI-Powered Search</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Step Indicator */}
              <div className="flex items-center gap-2 mt-6">
                {stepTitles.map((s, i) => (
                  <div key={i} className="flex-1 flex items-center gap-2">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        step > i + 1
                          ? 'bg-[#f43f5e] text-white'
                          : step === i + 1
                          ? 'bg-white text-[#0f172a]'
                          : 'bg-white/10 text-white/40'
                      }`}
                    >
                      {step > i + 1 ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <s.icon className="w-4 h-4" />
                      )}
                    </div>
                    {i < 3 && (
                      <div
                        className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${
                          step > i + 1 ? 'bg-[#f43f5e]' : 'bg-white/10'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative min-h-[380px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 1: Destination */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 p-8"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                        Where is your dream destination?
                      </h3>
                      <p className="text-gray-500">
                        Type a city, country, or airport and let our AI find the best deals
                      </p>
                    </div>

                    {/* Search Input */}
                    <div className="relative mb-8">
                      <div className="relative">
                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#f43f5e]" />
                        <input
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="Start typing..."
                          className="w-full pl-14 pr-14 py-5 text-xl font-medium text-[#0f172a] bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#f43f5e] focus:bg-white focus:ring-4 focus:ring-[#f43f5e]/10 outline-none transition-all placeholder:text-gray-300"
                        />
                        {isTyping && (
                          <div className="absolute right-5 top-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-2 text-[#f43f5e]">
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span className="text-sm font-medium">AI Processing</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Popular Destinations */}
                    <div>
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        Popular Suggestions
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {popularDestinations.map((dest) => (
                          <button
                            key={dest}
                            onClick={() => setDestination(dest)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                              destination === dest
                                ? 'bg-[#f43f5e] text-white shadow-lg shadow-[#f43f5e]/30'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {dest}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Dates */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 p-8"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                        When are you traveling?
                      </h3>
                      <p className="text-gray-500">
                        Select your departure and return dates
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Departure Date */}
                      <label
                        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all block ${
                          departureDate
                            ? 'border-[#f43f5e] bg-[#f43f5e]/5'
                            : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#334155] flex items-center justify-center">
                            <Plane className="w-6 h-6 text-white -rotate-45" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                              Departure
                            </p>
                            <input
                              type="date"
                              value={departureDate}
                              onChange={(e) => setDepartureDate(e.target.value)}
                              className="w-full text-lg font-bold text-[#0f172a] bg-transparent outline-none cursor-pointer"
                            />
                          </div>
                        </div>
                      </label>

                      {/* Return Date */}
                      <label
                        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all block ${
                          returnDate
                            ? 'border-[#f43f5e] bg-[#f43f5e]/5'
                            : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#334155] flex items-center justify-center">
                            <Plane className="w-6 h-6 text-white rotate-[135deg]" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                              Return
                            </p>
                            <input
                              type="date"
                              value={returnDate}
                              onChange={(e) => setReturnDate(e.target.value)}
                              min={departureDate}
                              className="w-full text-lg font-bold text-[#0f172a] bg-transparent outline-none cursor-pointer"
                            />
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Quick Select */}
                    <div className="mt-8">
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Quick Select
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['This Weekend', 'Next Week', 'Next Month', 'Flexible'].map(
                          (option) => (
                            <button
                              key={option}
                              className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                              {option}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Travelers */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 p-8"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                        Who's traveling?
                      </h3>
                      <p className="text-gray-500">
                        Add the number of travelers for your trip
                      </p>
                    </div>

                    <div className="space-y-4 max-w-md mx-auto">
                      {/* Adults */}
                      <div className="flex items-center justify-between p-6 rounded-2xl bg-gray-50 border-2 border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#334155] flex items-center justify-center">
                            <User className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-[#0f172a] text-lg">Adults</p>
                            <p className="text-gray-400 text-sm">Age 12+</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            disabled={adults <= 1}
                            className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-[#0f172a] hover:border-[#f43f5e] hover:text-[#f43f5e] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-xl font-bold text-[#0f172a]">
                            {adults}
                          </span>
                          <button
                            onClick={() => setAdults(Math.min(9, adults + 1))}
                            disabled={adults >= 9}
                            className="w-10 h-10 rounded-xl bg-[#f43f5e] flex items-center justify-center text-white hover:bg-[#e11d48] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-lg shadow-[#f43f5e]/30"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between p-6 rounded-2xl bg-gray-50 border-2 border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f43f5e] to-[#fb7185] flex items-center justify-center">
                            <Baby className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-[#0f172a] text-lg">Children</p>
                            <p className="text-gray-400 text-sm">Age 2-11</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            disabled={children <= 0}
                            className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-[#0f172a] hover:border-[#f43f5e] hover:text-[#f43f5e] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-xl font-bold text-[#0f172a]">
                            {children}
                          </span>
                          <button
                            onClick={() => setChildren(Math.min(9, children + 1))}
                            disabled={children >= 9}
                            className="w-10 h-10 rounded-xl bg-[#f43f5e] flex items-center justify-center text-white hover:bg-[#e11d48] disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-lg shadow-[#f43f5e]/30"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-8 text-center">
                      <p className="text-gray-400">
                        Total travelers:{' '}
                        <span className="font-bold text-[#0f172a]">
                          {adults + children} {adults + children === 1 ? 'person' : 'people'}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Success */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 p-8 flex flex-col items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="text-center">
                        <div className="relative w-24 h-24 mx-auto mb-6">
                          <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                          <div className="absolute inset-0 rounded-full border-4 border-t-[#f43f5e] animate-spin" />
                          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#f43f5e] to-[#fb7185] flex items-center justify-center">
                            <Plane className="w-8 h-8 text-white animate-pulse" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                          Checking 400+ Airlines...
                        </h3>
                        <p className="text-gray-500">
                          Searching for unpublished rates and exclusive deals
                        </p>
                        <div className="flex items-center justify-center gap-1 mt-6">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full bg-[#f43f5e]"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : isSuccess ? (
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', duration: 0.6 }}
                          className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-400/30"
                        >
                          <Check className="w-12 h-12 text-white" strokeWidth={3} />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                            Itinerary Created!
                          </h3>
                          <p className="text-gray-500 max-w-sm mx-auto">
                            An expert is reviewing your request and will contact you
                            shortly with the best available options.
                          </p>
                        </motion.div>

                        {/* Summary Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mt-8 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-left max-w-sm mx-auto"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <MapPin className="w-4 h-4 text-[#f43f5e]" />
                            <span className="font-semibold text-[#0f172a]">
                              {destination}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="w-4 h-4 text-[#f43f5e]" />
                            <span className="text-gray-600">
                              {departureDate} → {returnDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="w-4 h-4 text-[#f43f5e]" />
                            <span className="text-gray-600">
                              {adults} Adult{adults > 1 ? 's' : ''}
                              {children > 0 &&
                                `, ${children} Child${children > 1 ? 'ren' : ''}`}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              {step > 1 && step < 4 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-gray-600 hover:text-[#0f172a] hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-[#f43f5e] hover:bg-[#e11d48] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#f43f5e]/30 hover:shadow-xl hover:shadow-[#f43f5e]/40"
                >
                  {step === 3 ? 'Find Best Deals' : 'Continue'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                isSuccess && (
                  <button
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] transition-all"
                  >
                    Close
                  </button>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmartBookingModal;

