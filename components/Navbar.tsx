import React, { useState, useEffect } from 'react';
import { Menu, X, User, Plane, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F3F2EF]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/pandr-logo.png" 
            alt="P&R Travel" 
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#020887] transition-colors">Flights</a>
          <a href="#" className="hover:text-[#020887] transition-colors">Luxury Holidays</a>
          <a href="#" className="hover:text-[#020887] transition-colors">Religious Tours</a>
          <a href="#" className="hover:text-[#020887] transition-colors">Serena Hotels</a>
          <a href="#" className="hover:text-[#020887] transition-colors">About Our Heritage</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-[#020887] hover:text-[#334195] transition-colors flex items-center gap-2">
            <User size={16} />
            My Account / Register
          </button>
          <button className="bg-[#020887] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#334195] transition-colors duration-200 shadow-lg shadow-[#020887]/20">
            Request Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#020887] z-[60] relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#020887] z-[55] md:hidden"
          >
            {/* Close Button - Top Right */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center hover:bg-white/20 active:scale-90 transition-all"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" strokeWidth={2.5} />
            </motion.button>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full" />
              <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-white rounded-full" />
              <Plane className="absolute top-1/3 right-1/4 w-32 h-32 text-white transform rotate-45" />
            </div>

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative h-full flex flex-col justify-between p-8 pt-20 overflow-y-auto"
            >
              {/* Logo */}
              <div className="mb-12">
                <img 
                  src="/pandr-logo.png" 
                  alt="P&R Travel" 
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col gap-1">
                {[
                  { label: 'Flights', href: '#' },
                  { label: 'Luxury Holidays', href: '#' },
                  { label: 'Religious Tours', href: '#' },
                  { label: 'Serena Hotels', href: '#' },
                  { label: 'About Our Heritage', href: '#' },
                ].map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-3xl font-bold py-4 border-b border-white/10 hover:bg-white/5 transition-colors active:bg-white/10 -mx-4 px-4"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 pt-8 border-t border-white/20"
              >
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 text-white font-semibold text-lg py-4 border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-colors active:bg-white/20"
                >
                  <User size={20} />
                  My Account / Register
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 bg-[#95B2B0] text-[#020887] font-bold text-lg py-4 rounded-2xl hover:bg-white transition-colors shadow-xl active:scale-95"
                >
                  <Phone size={20} />
                  Request Quote
                </button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-white/60 text-sm mt-8"
              >
                <p className="font-medium">40 Years of Excellence</p>
                <p className="text-white/40 text-xs mt-1">Call us for exclusive rates</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;