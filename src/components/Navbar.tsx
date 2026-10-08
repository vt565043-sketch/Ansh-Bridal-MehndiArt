import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/mehendiData';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030b1e]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-lg shadow-[#020617]/50 py-3'
          : 'bg-gradient-to-b from-[#030b1e]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-full border border-[#D4AF37] bg-[#07173b] flex items-center justify-center shadow-md group-hover:border-[#E8C872] transition-colors">
              <Sparkles className="h-5 w-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-royal text-base sm:text-lg font-bold tracking-wider gold-gradient-text">
                ANSH BRIDAL
              </span>
              <span className="text-[10px] tracking-widest text-[#E8C872]/80 uppercase -mt-1 font-semibold">
                Mehandi Art
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider text-[#E8E2D5] hover:text-[#D4AF37] font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#D4AF37] after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.phoneCallUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/50 rounded-full hover:bg-[#D4AF37]/10 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[#030b1e] bg-gradient-to-r from-[#D4AF37] to-[#E8C872] rounded-full hover:from-[#E8C872] hover:to-[#F5DE9C] transition-all shadow-md shadow-[#D4AF37]/20"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#030b1e]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#D4AF37] text-[#030b1e] sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#E8C872] hover:bg-[#07173b] border border-[#D4AF37]/30"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#040e24] border-b border-[#D4AF37]/30 px-5 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#F3EFE6] hover:bg-[#0a2152] hover:text-[#D4AF37] border-l-2 border-transparent hover:border-[#D4AF37] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#D4AF37]/20 grid grid-cols-2 gap-2">
            <a
              href={CONTACT_INFO.phoneCallUrl}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/50 rounded-lg bg-[#07183e]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-[#030b1e] bg-[#D4AF37] rounded-lg"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
