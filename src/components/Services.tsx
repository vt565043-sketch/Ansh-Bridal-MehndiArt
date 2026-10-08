import React from 'react';
import { SERVICES, CONTACT_INFO, getWhatsAppQueryUrl } from '../data/mehendiData';
import { Sparkles, Check, Crown, Phone, MessageCircle } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#040e24] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Decorative background aura */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#112d59]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>8 Approved Art Offerings</span>
          </div>
          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0]">
            Our Mehendi <span className="gold-gradient-text">Art Types</span>
          </h2>
          <p className="text-sm sm:text-base text-[#BAC8DE] leading-relaxed">
            Delivering royal precision and bespoke designs across our 8 signature art types. Tap any card to open a pre-filled WhatsApp inquiry directly with our artist.
          </p>
        </div>

        {/* Strictly 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICES.map((service, index) => {
            const queryUrl = getWhatsAppQueryUrl(service.title);

            return (
              <a
                key={service.id}
                href={queryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="royal-card group rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/15 cursor-pointer text-left block"
                title={`Click to inquire about ${service.title} on WhatsApp`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-8 w-8 rounded-full bg-[#0d2760] border border-[#D4AF37]/40 flex items-center justify-center text-xs font-bold text-[#E7C66B]">
                      0{index + 1}
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-[#25D366] font-semibold bg-[#25D366]/10 px-2 py-0.5 rounded-full border border-[#25D366]/30">
                      <MessageCircle className="h-3 w-3" />
                      Inquire
                    </span>
                  </div>

                  <h3 className="font-royal text-base sm:text-lg font-bold text-[#F8F6F0] mb-2 group-hover:text-[#E7C66B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#A3B3D1] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#D4AF37]/15">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 text-[11px] text-[#E0D7C5]">
                      <Check className="h-3 w-3 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                  <div className="mt-3 pt-2 text-center text-xs font-bold text-[#D4AF37] group-hover:text-[#F3C969] flex items-center justify-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                    <span>WhatsApp Query →</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* BRIDAL SECTION */}
        <div className="relative rounded-3xl border-2 border-[#D4AF37]/50 bg-gradient-to-br from-[#07193f] via-[#051330] to-[#030b1e] p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Crown className="w-64 h-64 text-[#D4AF37]" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37] bg-[#0c2459] text-[#E7C66B] text-xs font-bold uppercase tracking-wider">
              <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Special Bridal Focus</span>
            </div>

            <h3 className="font-royal text-2xl sm:text-4xl font-extrabold text-[#F8F6F0] leading-tight">
              Your Big Day Deserves Beautiful Mehendi
            </h3>

            <p className="text-sm sm:text-base text-[#D4DFEF] leading-relaxed">
              From intricate bridal patterns to elegant bride & groom designs, create a mehendi look that reflects your style and becomes a beautiful part of your wedding memories.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {[
                'Bridal Mehendi',
                'Bride & Groom Mehendi',
                'Customized Designs',
                'Traditional Designs',
                'Home Service'
              ].map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#091e48] border border-[#D4AF37]/30 text-sm font-semibold text-[#F8F6F0]"
                >
                  <div className="h-5 w-5 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#030b1e] shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={getWhatsAppQueryUrl('Customise Bridal Mehndi')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#030b1e] bg-gradient-to-r from-[#D4AF37] to-[#E8C872] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Inquire on WhatsApp
              </a>
              <a
                href={CONTACT_INFO.phoneCallUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-[#D4AF37] border border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 transition-all"
              >
                <Phone className="h-4 w-4" />
                Call: {CONTACT_INFO.phone1}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
