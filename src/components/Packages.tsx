import React from 'react';
import { GUEST_PRICES, PACKAGES_20_GUESTS, CONTACT_INFO } from '../data/mehendiData';
import { Sparkles, Check, MessageCircle, Phone, Users, Crown, ArrowRight } from 'lucide-react';

export const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#030b1e] relative overflow-hidden">
      {/* Background ornamentation */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0e2758]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* --- PART A: INDIVIDUAL GUEST PRICING --- */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0]">
              Guest Mehendi <span className="gold-gradient-text">Prices</span>
            </h2>
            <p className="text-sm text-[#BAC8DE]">
              Simple, transparent per-person pricing for family, bridesmaids, and wedding guests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GUEST_PRICES.map((item) => (
              <div
                key={item.title}
                className="royal-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-royal text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
                      {item.price}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#A3B3D1] font-mono">
                      Per Person
                    </span>
                  </div>

                  <h3 className="font-royal text-base sm:text-lg font-bold text-[#F8F6F0] mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#BAC8DE] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
                  <span className="text-[11px] text-[#E0D7C5] flex items-center gap-1">
                    <Check className="h-3.5 w-3.5 text-[#D4AF37]" /> 100% Herbal
                  </span>
                  <a
                    href={`https://wa.me/918449227407?text=${encodeURIComponent(`Hi, I want to book Guest Mehndi: ${item.title} (${item.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#D4AF37] hover:text-[#E8C872] flex items-center gap-1"
                  >
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART B: 20 GUEST PACKAGES --- */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
              <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Event Packages</span>
            </div>
            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0]">
              20 Guest <span className="gold-gradient-text">Packages</span>
            </h2>
            <p className="text-sm text-[#BAC8DE]">
              Value-packed group packages tailored for Mehendi sangeet, engagement, and wedding festivities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PACKAGES_20_GUESTS.map((pkg) => (
              <div
                key={pkg.tier}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-[#0b2254] to-[#051433] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 scale-105 z-10'
                    : 'royal-card rounded-3xl'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C872] px-4 py-1 text-[11px] font-bold text-[#030b1e] uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Crown className="h-3.5 w-3.5" /> Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-royal text-sm font-extrabold tracking-widest text-[#E7C66B] uppercase">
                      {pkg.tier}
                    </span>
                    <span className="rounded-full bg-[#05112c] border border-[#D4AF37]/30 px-3 py-0.5 text-xs font-semibold text-[#F8F6F0]">
                      {pkg.guestCount}
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="font-royal text-3xl sm:text-4xl font-extrabold text-[#F8F6F0]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#BAC8DE] block mt-1">Complete 20 Guests Service</span>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-3 pt-4 border-t border-[#D4AF37]/20">
                    {pkg.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2D8C7]">
                        <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#D4AF37]/20">
                  <a
                    href={`https://wa.me/918449227407?text=${encodeURIComponent(`Hello, I want to book the ${pkg.tier} 20 Guests Package (${pkg.price}) for my upcoming event.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#E8C872] text-[#030b1e] hover:shadow-lg'
                        : 'bg-[#081a42] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/20'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book {pkg.tier} Package
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* --- PART C: 30 GUESTS CUSTOM PACKAGE (Mandatory Part 2) --- */}
        <div className="rounded-3xl border-2 border-[#D4AF37]/40 bg-gradient-to-r from-[#07193f] via-[#092257] to-[#07193f] p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#E7C66B] text-xs font-semibold uppercase">
                <Users className="h-3.5 w-3.5" /> Large Gatherings
              </div>
              <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-[#F8F6F0]">
                30 Guests — Custom Package
              </h3>
              <p className="text-xs sm:text-sm text-[#BAC8DE] max-w-xl">
                Planning a large mehendi party? We provide dedicated teams of artists for 30+ guests with flexible speed, custom patterns, and seamless on-site coordination.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/918449227407?text=${encodeURIComponent('Hello Ansh Bridal Mehandi Art, I am looking for a Custom Quote for 30 Guests Mehndi package.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#030b1e] bg-gradient-to-r from-[#D4AF37] to-[#E8C872] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all text-center"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Get Custom Quote</span>
              </a>
              <a
                href={CONTACT_INFO.phoneCallUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#F8F6F0] border border-[#D4AF37] bg-[#07183e] hover:bg-[#D4AF37]/15 transition-all text-center"
              >
                <Phone className="h-4 w-4 text-[#D4AF37]" />
                <span>Call Artist</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
