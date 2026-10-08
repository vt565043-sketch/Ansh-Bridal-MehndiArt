import React, { useState } from 'react';
import { APPROVED_PHOTOS, GALLERY_CATEGORIES, PhotoItem } from '../data/mehendiData';
import { SafeImage } from './SafeImage';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface GalleryProps {
  onOpenLightbox: (photo: PhotoItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter strictly across the 8 approved photos by their exact artType
  const filteredPhotos = activeCategory === 'All'
    ? APPROVED_PHOTOS
    : APPROVED_PHOTOS.filter((photo) => photo.artType === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#040e24] relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>8 Approved Art Types</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0]">
            Our Mehendi <span className="gold-gradient-text">Gallery</span>
          </h2>

          <p className="text-sm sm:text-base text-[#BAC8DE] leading-relaxed">
            Tap any artwork below to automatically open a pre-filled WhatsApp inquiry for that exact art type.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-[#D4AF37] font-medium pt-1">
            <ShieldCheck className="h-4 w-4" />
            <span>Click any card → WhatsApp opens with artwork query</span>
          </div>
        </div>

        {/* Categories / Filters bar: strictly the 8 approved art types */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-3 pt-1 scrollbar-none">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#061435] p-2 rounded-2xl border border-[#D4AF37]/25 shadow-lg max-w-5xl">
            {GALLERY_CATEGORIES.map((cat) => {
              const count = cat === 'All'
                ? APPROVED_PHOTOS.length
                : APPROVED_PHOTOS.filter((p) => p.artType === cat).length;

              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#E8C872] text-[#030b1e] shadow-md shadow-[#D4AF37]/20 font-bold'
                      : 'text-[#BAC8DE] hover:text-[#F8F6F0] hover:bg-[#0b2254]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] rounded-full px-1.5 py-0.2 ${
                      isActive ? 'bg-[#030b1e]/20 text-[#030b1e]' : 'bg-[#030b1e] text-[#D4AF37]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid: exactly the 8 approved photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="transform transition-all duration-300 hover:-translate-y-1.5"
            >
              <SafeImage
                photo={photo}
                aspectRatio="aspect-[3/4]"
                showCaption={true}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12 rounded-2xl border border-[#D4AF37]/20 bg-[#071638] p-8">
            <p className="text-sm text-[#BAC8DE]">No designs found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-3 text-xs font-semibold text-[#D4AF37] underline"
            >
              View all 8 portfolio designs
            </button>
          </div>
        )}

        {/* Bottom gallery notice */}
        <div className="mt-12 text-center text-xs text-[#8FA2C3]">
          Showing curated authentic collection of 8 art types • Click any card to inquire on WhatsApp
        </div>

      </div>
    </section>
  );
};
