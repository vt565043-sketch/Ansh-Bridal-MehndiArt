import React from 'react';
import { CONTACT_INFO, SERVICE_AREAS } from '../data/mehendiData';
import { Sparkles, Phone, MessageCircle, Mail, MapPin, Instagram, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020716] border-t border-[#D4AF37]/20 pt-16 pb-24 md:pb-12 text-[#BAC8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full border border-[#D4AF37] bg-[#07173b] flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-royal text-base font-bold gold-gradient-text">
                  ANSH BRIDAL
                </span>
                <span className="text-[10px] tracking-widest text-[#E7C66B] uppercase font-semibold">
                  Mehandi Art
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A3B3D1] leading-relaxed">
              11 Years of Beautiful Bridal Mehendi Art. Crafting memorable, dark-staining traditional and modern henna for brides & families across Delhi NCR.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#07193f] border border-[#D4AF37]/30 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-[#030b1e] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#07193f] border border-[#D4AF37]/30 text-[#E7C66B] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#07193f] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.phoneCallUrl}
                className="h-9 w-9 rounded-full bg-[#07193f] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-royal text-sm font-bold text-[#F8F6F0] uppercase tracking-wider text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us (11+ Years)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Mehendi Services</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#D4AF37] transition-colors">Guest Prices & Packages</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Real Mehendi Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="font-royal text-sm font-bold text-[#F8F6F0] uppercase tracking-wider text-[#D4AF37]">
              Service Areas
            </h4>
            <div className="space-y-2 text-xs">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-1.5 text-[#D4DFEF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  <span>{area} (Home Service)</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <a
                href={CONTACT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#E7C66B] hover:underline"
              >
                <span>Leave a Google Review</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-royal text-sm font-bold text-[#F8F6F0] uppercase tracking-wider text-[#D4AF37]">
              Contact Details
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>+91 {CONTACT_INFO.phone1} / {CONTACT_INFO.phone2}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8EA1C2]">
          <div>
            © {new Date().getFullYear()} Ansh Bridal Mehandi Art. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Royal Blue & Gold Theme</span>
            <span>•</span>
            <span>View-Only Protected Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
