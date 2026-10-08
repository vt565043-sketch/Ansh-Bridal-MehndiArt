import React from 'react';
import { APPROVED_PHOTOS, CONTACT_INFO, PhotoItem } from '../data/mehendiData';
import { SafeImage } from './SafeImage';
import { MessageCircle, Phone, Award, Shield, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenLightbox: (photo: PhotoItem) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLightbox }) => {
  // Hero featured photo from the approved 8 photos
  const heroPhoto = APPROVED_PHOTOS[1]; // Dulha-Dulhan masterpiece

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:py-32 flex items-center overflow-hidden henna-pattern">
      {/* Royal subtle glow background orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#112d59]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#07193f]/80 backdrop-blur-sm text-[#E7C66B] text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>11 Years of Beautiful Bridal Mehendi Art</span>
            </div>

            {/* Main Brand Name */}
            <h1 className="font-royal text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8F6F0] tracking-tight leading-tight">
              ANSH BRIDAL <br />
              <span className="gold-gradient-text">MEHANDI ART</span>
            </h1>

            {/* Tagline */}
            <p className="font-serif-elegant text-xl sm:text-2xl lg:text-3xl italic text-[#E5D8BC]">
              “Beautiful Mehendi. Beautiful Memories.”
            </p>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-[#BAC8DE] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Creating elegant, intricate and memorable mehendi designs for brides, families and special occasions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-[#030b1e] bg-gradient-to-r from-[#D4AF37] via-[#E8C872] to-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={CONTACT_INFO.phoneCallUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#F8F6F0] border border-[#D4AF37] bg-[#07183e]/80 hover:bg-[#D4AF37]/15 transition-all"
              >
                <Phone className="h-4 w-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mandatory Trust Line */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#E0D7C5]">
              <span className="flex items-center gap-1.5 text-[#E7C66B]">
                <Award className="h-4 w-4 text-[#D4AF37]" />
                11 Years Experience
              </span>
              <span className="text-[#D4AF37]/50">•</span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[#D4AF37]" />
                Professional Team
              </span>
              <span className="text-[#D4AF37]/50">•</span>
              <span className="flex items-center gap-1.5 text-[#E7C66B]">
                <MapPin className="h-4 w-4 text-[#D4AF37]" />
                Home Service Available
              </span>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative golden frame */}
              <div className="absolute -inset-2 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#D4AF37]/15 to-transparent blur-sm pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl shadow-[#020617]/80 bg-[#07173b]">
                <div className="p-2 bg-gradient-to-r from-[#071a42] via-[#0b245c] to-[#071a42] border-b border-[#D4AF37]/30 flex items-center justify-between text-xs px-4">
                  <span className="text-[#E7C66B] font-royal font-semibold tracking-wider">
                    MASTERPIECE SHOWCASE
                  </span>
                  <span className="text-[10px] text-[#A3B3D1] font-mono">
                    {heroPhoto.filename}
                  </span>
                </div>

                <SafeImage
                  photo={heroPhoto}
                  aspectRatio="aspect-[4/5]"
                  showCaption={true}
                  onOpenLightbox={onOpenLightbox}
                  priority={true}
                  className="rounded-none border-0"
                />

                <div className="p-4 bg-[#051330] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-xs text-[#E3D9C6] font-medium">100% Herbal Natural Henna</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(heroPhoto)}
                    className="text-xs text-[#D4AF37] hover:underline font-semibold"
                  >
                    Tap to expand
                  </button>
                </div>
              </div>

              {/* Experience badge overlay */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 rounded-xl border border-[#D4AF37] bg-[#06173a] p-3 shadow-xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#D4AF37] text-[#030b1e] font-bold font-royal flex items-center justify-center text-sm shadow">
                  11+
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F8F6F0]">Years Experience</div>
                  <div className="text-[10px] text-[#E7C66B]">5,000+ Happy Brides</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
