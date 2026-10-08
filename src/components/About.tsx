import React from 'react';
import { APPROVED_PHOTOS, CONTACT_INFO, PhotoItem } from '../data/mehendiData';
import { SafeImage } from './SafeImage';
import { Sparkles, Check, HeartHandshake, ShieldCheck, Clock, Award } from 'lucide-react';

interface AboutProps {
  onOpenLightbox: (photo: PhotoItem) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenLightbox }) => {
  const aboutPhoto = APPROVED_PHOTOS[2]; // RR monogram personalized photo

  return (
    <section id="about" className="py-20 md:py-28 bg-[#030b1e] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#112d59]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/30 to-transparent blur-md opacity-40 pointer-events-none" />
              <div className="relative rounded-2xl border-2 border-[#D4AF37]/40 bg-[#07173b] p-2.5 shadow-2xl">
                <SafeImage
                  photo={aboutPhoto}
                  aspectRatio="aspect-[4/5]"
                  showCaption={true}
                  onOpenLightbox={onOpenLightbox}
                  className="rounded-xl"
                />

                <div className="mt-4 p-4 rounded-xl bg-[#040e24] border border-[#D4AF37]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#F8F6F0]">Authentic Artistry</div>
                      <div className="text-[11px] text-[#D4AF37]">11+ Years of Trust</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#A3B3D1] font-mono">{aboutPhoto.filename}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Heritage & Artistry</span>
            </div>

            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0] leading-tight">
              About Ansh Bridal <br />
              <span className="gold-gradient-text">Mehandi Art</span>
            </h2>

            {/* Prominent 11+ Years Experience Callout */}
            <div className="inline-flex items-center gap-4 py-2 px-4 rounded-xl bg-gradient-to-r from-[#081a42] to-[#0d2864] border border-[#D4AF37]/30">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] font-royal">
                11+
              </div>
              <div className="text-xs sm:text-sm text-[#F8F6F0]">
                <strong className="block text-[#E7C66B]">Years Experience</strong>
                Creating timeless bridal heirlooms across Delhi NCR
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#BAC8DE] leading-relaxed">
              At <strong className="text-[#F8F6F0]">Ansh Bridal Mehandi Art</strong>, we believe every bride deserves a royal celebration. With over 11 years of hands-on expertise, our master artists specialize in intricate, personalized mehendi designs that turn wedding emotions into living art.
            </p>

            <p className="text-sm sm:text-base text-[#BAC8DE] leading-relaxed">
              From historic Rajasthani architecture to bespoke couple portraiture, customized hashtags, and delicate Arabic floral bel, every stroke is executed with steady precision, patience, and 100% natural herbal cones.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#051433] border border-[#D4AF37]/20">
                <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-[#E0D7C5]">
                  <strong className="block text-[#F8F6F0]">100% Natural Henna</strong>
                  Organic, chemical-free paste ensuring deep, dark, long-lasting stains.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#051433] border border-[#D4AF37]/20">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-[#E0D7C5]">
                  <strong className="block text-[#F8F6F0]">Professional Team</strong>
                  Punctual, trained artists equipped for large gatherings & sangeet nights.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#051433] border border-[#D4AF37]/20">
                <Clock className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-[#E0D7C5]">
                  <strong className="block text-[#F8F6F0]">Doorstep Home Service</strong>
                  Direct service at your home or wedding banquet across Noida & NCR.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#051433] border border-[#D4AF37]/20">
                <HeartHandshake className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-[#E0D7C5]">
                  <strong className="block text-[#F8F6F0]">Custom Storytelling</strong>
                  Initials, couple portraits, wedding dates, and personalized elements.
                </div>
              </div>
            </div>

            {/* Quick action */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D4AF37] hover:text-[#E8C872] underline underline-offset-4"
              >
                Discuss Your Wedding Dates With Our Artist →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
