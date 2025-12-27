import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F3F2EF]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tight text-[#020887] relative">
            P&R Travel
            <span className="absolute -top-1 -right-3 text-[#334195] text-xl">✦</span>
          </span>
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
          className="md:hidden text-[#020887]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F3F2EF] border-b border-gray-200 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-lg font-medium text-[#020887]">Flights</a>
          <a href="#" className="text-lg font-medium text-[#020887]">Luxury Holidays</a>
          <a href="#" className="text-lg font-medium text-[#020887]">Religious Tours</a>
          <a href="#" className="text-lg font-medium text-[#020887]">Serena Hotels</a>
          <a href="#" className="text-lg font-medium text-[#020887]">About Our Heritage</a>
          <hr className="border-gray-300 my-2" />
          <button className="text-left font-semibold text-[#020887]">My Account / Register</button>
          <button className="w-full bg-[#020887] text-white px-5 py-3 rounded-full font-bold">
            Request Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;