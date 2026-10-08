import React from 'react';
import { CUSTOMER_REVIEWS, CONTACT_INFO } from '../data/mehendiData';
import { Sparkles, MessageSquare, Instagram, MapPin, ExternalLink } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#040e24] relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>Words From Our Brides</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0]">
            Customer <span className="gold-gradient-text">Experiences</span>
          </h2>

          <p className="text-sm sm:text-base text-[#BAC8DE]">
            Real feedback from brides and families who trusted us with their special occasions.
          </p>
        </div>

        {/* Reviews Grid (No fake stars, no fake "Verified Google Reviews" label) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="royal-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs font-semibold text-[#E7C66B]">{rev.event}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#E2D8C7] leading-relaxed italic mb-6">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#D4AF37]/15">
                <div className="font-royal text-sm font-bold text-[#F8F6F0]">
                  {rev.name}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#A3B3D1] mt-0.5">
                  <MapPin className="h-3 w-3 text-[#D4AF37]" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review & Instagram Promo Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Google Review Card */}
          <div className="rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#071a42] to-[#04102c] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#E7C66B] text-xs font-semibold uppercase">
                <Sparkles className="h-3 w-3 text-[#D4AF37]" /> Feedback
              </div>
              <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-[#F8F6F0]">
                Enjoyed Our Mehendi?
              </h3>
              <p className="text-xs sm:text-sm text-[#BAC8DE] leading-relaxed">
                If you loved your bridal or guest mehendi experience with Ansh Bridal Mehandi Art, please take a moment to leave a review on Google!
              </p>
            </div>

            <div>
              <a
                href={CONTACT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#030b1e] bg-gradient-to-r from-[#D4AF37] to-[#E8C872] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all w-full sm:w-auto"
              >
                <span>Leave a Google Review</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#081c49] to-[#04112e] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#E7C66B] text-xs font-semibold uppercase">
                <Instagram className="h-3 w-3 text-[#D4AF37]" /> Daily Updates
              </div>
              <h3 className="font-royal text-2xl sm:text-3xl font-extrabold text-[#F8F6F0]">
                Follow Our Mehendi Art
              </h3>
              <p className="text-xs sm:text-sm text-[#BAC8DE] leading-relaxed">
                Watch recent bridal transformations, reels, and behind-the-scenes on our official Instagram profile @ansh_bridal_mehandi_art.
              </p>
            </div>

            <div>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#F8F6F0] bg-[#0c2457] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-all w-full sm:w-auto shadow-md"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
