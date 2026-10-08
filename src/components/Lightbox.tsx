import React, { useEffect, useState } from 'react';
import { PhotoItem, CONTACT_INFO, getWhatsAppQueryUrl } from '../data/mehendiData';
import { HennaMandala } from './HennaMandala';
import { X, ChevronLeft, ChevronRight, MessageCircle, Phone, Tag } from 'lucide-react';

interface LightboxProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [photo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  const whatsappUrl = getWhatsAppQueryUrl(photo.artType);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-full border border-[#D4AF37]/40 bg-[#071638] p-2.5 text-[#F8F6F0] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors"
        aria-label="Close image lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 md:left-6 z-40 rounded-full border border-[#D4AF37]/30 bg-[#071638]/80 p-3 text-[#F8F6F0] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors"
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 md:right-6 z-40 rounded-full border border-[#D4AF37]/30 bg-[#071638]/80 p-3 text-[#F8F6F0] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors"
        aria-label="Next photo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Main Content Modal */}
      <div className="relative max-h-[92vh] max-w-4xl w-full flex flex-col md:flex-row rounded-2xl border border-[#D4AF37]/40 bg-[#061435] overflow-hidden shadow-2xl">
        {/* Image view */}
        <div className="relative flex-1 bg-[#020718] flex items-center justify-center p-3 min-h-[300px] md:min-h-[500px]">
          {!imageError ? (
            <img
              src={photo.src}
              alt={photo.title}
              onError={() => setImageError(true)}
              className="max-h-[70vh] md:max-h-[85vh] w-auto max-w-full object-contain rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center text-[#D4AF37]">
              <HennaMandala className="w-28 h-28 text-[#D4AF37] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
              <div className="font-royal text-lg font-bold text-[#F8F6F0] mb-2">{photo.artType}</div>
              <p className="text-xs text-[#9FB0D0] mb-3 font-mono">{photo.filename}</p>
              <div className="inline-block rounded-full border border-[#D4AF37]/40 bg-[#071a42] px-3 py-1 text-xs text-[#E7C66B]">
                Authentic Portfolio Slot • 0% AI
              </div>
            </div>
          )}
        </div>

        {/* Details Sidebar */}
        <div className="w-full md:w-80 flex flex-col justify-between p-6 bg-[#07173b] border-t md:border-t-0 md:border-l border-[#D4AF37]/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/15 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                Photo {currentIndex + 1} of {photos.length}
              </span>
            </div>

            <h3 className="font-royal text-lg font-bold text-[#F8F6F0] mb-2">
              {photo.artType}
            </h3>

            <p className="text-xs text-[#A3B3D1] leading-relaxed mb-4">
              {photo.description}
            </p>

            <div className="mb-4">
              <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] mb-2 flex items-center gap-1">
                <Tag className="h-3 w-3" /> Art Category
              </h4>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded bg-[#0f2b66] px-2.5 py-1 text-xs font-semibold text-[#F3EFE6] border border-[#D4AF37]/30">
                  {photo.artType}
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-[#040e24] p-3 border border-[#D4AF37]/15 mb-4 text-[11px] text-[#9FB0D0]">
              <span className="font-semibold text-[#D4AF37]">Filename: </span>
              <span className="font-mono text-[10px] break-all">{photo.filename}</span>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#D4AF37]/20">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#25D366] hover:bg-[#20ba59] px-4 py-2.5 text-xs font-bold text-[#030b1e] transition-colors shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              Inquire «{photo.artType}» on WhatsApp
            </a>
            <a
              href={CONTACT_INFO.phoneCallUrl}
              className="flex items-center justify-center gap-2 w-full rounded-lg border border-[#D4AF37] bg-transparent hover:bg-[#D4AF37]/10 px-4 py-2.5 text-xs font-semibold text-[#D4AF37] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call: {CONTACT_INFO.phone1}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
