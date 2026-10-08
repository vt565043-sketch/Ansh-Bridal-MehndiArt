import React from 'react';
import { WHY_CHOOSE_US, SERVICE_AREAS } from '../data/mehendiData';
import { Sparkles, MapPin, CheckCircle2, Shield, HeartHandshake, Palette, Home, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [Clock, Shield, Sparkles, HeartHandshake, Palette, Home];

  return (
    <section className="py-20 md:py-28 bg-[#030b1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* --- PART 1: WHY CHOOSE US --- */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Why Brides Trust Ansh Mehendi</span>
            </div>
            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0]">
              Why Choose <span className="gold-gradient-text">Us</span>
            </h2>
            <p className="text-sm sm:text-base text-[#BAC8DE]">
              Exquisite artistry, punctual artists, and 100% pure herbal dark stains tailored for your memorable day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={item.title}
                  className="royal-card rounded-2xl p-6 transition-all duration-300 hover:border-[#D4AF37] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/10"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0c265e] to-[#061433] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5 shadow">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-royal text-lg font-bold text-[#F8F6F0] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BAC8DE] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- PART 2: SERVICE AREAS (Mandatory Part 3) --- */}
        <div className="rounded-3xl border-2 border-[#D4AF37]/40 bg-gradient-to-br from-[#07193f] via-[#051433] to-[#02091c] p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#E7C66B] text-xs font-semibold uppercase">
              <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Doorstep Home Service</span>
            </div>
            <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-[#F8F6F0]">
              Our Service Areas
            </h3>
            <p className="text-xs sm:text-sm text-[#BAC8DE]">
              We provide professional bridal and guest mehendi home services across the entire Delhi National Capital Region:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="rounded-2xl bg-[#091f4d] border border-[#D4AF37]/30 p-4 text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#0c2966] hover:shadow-md hover:shadow-[#D4AF37]/20 flex flex-col items-center justify-center gap-2"
              >
                <div className="h-9 w-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-royal text-sm sm:text-base font-bold text-[#F8F6F0]">
                  {area}
                </span>
                <span className="text-[10px] text-[#E7C66B] font-medium">Home Service Available</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 text-center">
            <span className="text-xs text-[#BAC8DE]">
              Booking your wedding dates early ensures guaranteed slot availability for your bridal mehendi!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
