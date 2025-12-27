import React from 'react';
import { ShieldCheck, Phone, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020887] pt-24 pb-6 overflow-hidden relative text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Excellence in Travel Section */}
        <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Excellence in Travel Since 1986
            </h2>
            <p className="text-[#95B2B0] max-w-3xl text-lg md:text-xl font-medium leading-relaxed mb-10">
                For nearly four decades, P&R Travel has been the trusted partner for discerning travelers. 
                We specialize in First and Business Class fares, bespoke luxury holidays, and seamless religious pilgrimages. 
                Every booking is backed by full ATOL protection and our dedicated 24/7 UK support team. 
                Don't just book a trip; experience a legacy of service.
            </p>
            
            <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    <Award size={24} className="text-[#95B2B0]" />
                    <span className="font-bold text-white">ATOL Protected</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    <Phone size={24} className="text-[#95B2B0]" />
                    <span className="font-bold text-white">24/7 UK Support</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    <ShieldCheck size={24} className="text-[#95B2B0]" />
                    <span className="font-bold text-white">IATA Accredited</span>
                </div>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 border-t border-white/10 pt-16">
          
          <div>
            <h4 className="font-bold text-[#95B2B0] mb-6 text-sm opacity-80 uppercase tracking-wider">Book</h4>
            <ul className="space-y-4">
              {['Flights', 'Luxury Holidays', 'Religious Tours', 'Serena Hotels', 'Car Hire', 'Transfers'].map(link => (
                <li key={link}><a href="#" className="text-white/80 font-medium hover:text-white hover:underline decoration-[#95B2B0] underline-offset-4 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#95B2B0] mb-6 text-sm opacity-80 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              {['Travel Management', 'Group Booking', 'Visa Services', 'Travel Insurance', 'Airport Parking', 'Lounge Access'].map(link => (
                <li key={link}><a href="#" className="text-white/80 font-medium hover:text-white hover:underline decoration-[#95B2B0] underline-offset-4 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#95B2B0] mb-6 text-sm opacity-80 uppercase tracking-wider">About Us</h4>
            <ul className="space-y-4">
              {['Our Heritage', 'Testimonials', 'Careers', 'Contact Us', 'Branch Locations', 'Blog'].map(link => (
                <li key={link}><a href="#" className="text-white/80 font-medium hover:text-white hover:underline decoration-[#95B2B0] underline-offset-4 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#95B2B0] mb-6 text-sm opacity-80 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              {['Manage Booking', 'FAQs', 'Terms & Conditions', 'Privacy Policy', 'ATOL Protection', 'Sitemap'].map(link => (
                <li key={link}><a href="#" className="text-white/80 font-medium hover:text-white hover:underline decoration-[#95B2B0] underline-offset-4 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Massive Logo */}
        <div className="relative w-full flex justify-center items-center select-none pointer-events-none">
          <h1 className="text-[13vw] leading-none font-extrabold text-white/10 tracking-tighter w-full text-center uppercase">
            P&R Travel
          </h1>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-white/40 mt-8 border-t border-white/5 pt-8">
            <div className="mb-4 md:mb-0">
                © 2025 P&R Travel Ltd. All rights reserved.
            </div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Legal</a>
                <a href="#" className="hover:text-white">Trust center</a>
                <a href="#" className="hover:text-white">Privacy policy</a>
                <a href="#" className="hover:text-white">Cookies policy</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;