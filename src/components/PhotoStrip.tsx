import React from 'react';
import { APPROVED_PHOTOS, PhotoItem } from '../data/mehendiData';
import { SafeImage } from './SafeImage';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PhotoStripProps {
  onOpenLightbox: (photo: PhotoItem) => void;
}

export const PhotoStrip: React.FC<PhotoStripProps> = ({ onOpenLightbox }) => {
  // Show a selection of 4 approved photos
  const featured = [
    APPROVED_PHOTOS[0], // Feet elephant
    APPROVED_PHOTOS[2], // RR monogram
    APPROVED_PHOTOS[7], // Jharokha Forearm
    APPROVED_PHOTOS[4], // Mandala
  ];

  return (
    <section className="relative py-12 bg-[#040e24] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              <Sparkles className="h-4 w-4" />
              <span>Authentic Client Art</span>
            </div>
            <h2 className="font-royal text-2xl sm:text-3xl font-bold text-[#F8F6F0]">
              Bridal & Wedding Highlights
            </h2>
          </div>
          <a
            href="#gallery"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E7C66B] hover:text-[#F5DE9C] transition-colors"
          >
            <span>Explore All 8 Real Portfolio Photos</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((photo) => (
            <div key={photo.id} className="transform transition-all duration-300 hover:-translate-y-1">
              <SafeImage
                photo={photo}
                aspectRatio="aspect-[3/4]"
                showCaption={true}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
