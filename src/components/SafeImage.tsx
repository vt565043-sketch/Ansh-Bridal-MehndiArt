import React, { useState, useEffect, useRef } from 'react';
import { PhotoItem, getWhatsAppQueryUrl } from '../data/mehendiData';
import { HennaMandala } from './HennaMandala';
import { getOriginalPhoto, saveOriginalPhoto } from '../utils/photoStorage';
import { MessageCircle, Maximize2, ShieldCheck, Upload, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps {
  photo: PhotoItem;
  className?: string;
  aspectRatio?: string;
  showCaption?: boolean;
  onOpenLightbox?: (photo: PhotoItem) => void;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  photo,
  className = '',
  aspectRatio = 'aspect-[3/4]',
  showCaption = true,
  onOpenLightbox,
  priority = false,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(photo.src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check client IndexedDB for stored original photo
  useEffect(() => {
    let isMounted = true;
    getOriginalPhoto(photo.filename).then((storedDataUrl) => {
      if (isMounted && storedDataUrl) {
        setImageSrc(storedDataUrl);
        setHasError(false);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [photo.filename]);

  const whatsappUrl = getWhatsAppQueryUrl(photo.artType);

  const handleCardClick = (e: React.MouseEvent) => {
    // If the click is on an interactive control (upload button, file input, or lightbox trigger), don't redirect to WhatsApp
    const target = e.target as HTMLElement;
    if (target.closest('.interactive-action') || target.closest('input')) {
      return;
    }
    // If image is loaded, clicking card directs to WhatsApp with artwork query
    if (!hasError) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      // 1. Immediately display original photo with zero modifications
      setImageSrc(dataUrl);
      setHasError(false);
      setIsLoading(false);

      // 2. Persist in IndexedDB for instant load across sessions
      await saveOriginalPhoto(photo.filename, dataUrl);

      // 3. Save to server disk in public/images/
      try {
        await fetch('/api/upload-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: photo.filename, dataUrl }),
        });
      } catch (err) {
        console.error('Failed to sync photo to server:', err);
      } finally {
        setIsUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/25 bg-[#071638] select-none transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-2xl hover:shadow-[#D4AF37]/15 ${
        !hasError ? 'cursor-pointer' : ''
      } ${className}`}
      onContextMenu={(e) => e.preventDefault()} // Public image protection
      title={!hasError ? `Click to inquire about ${photo.artType} on WhatsApp` : undefined}
    >
      {/* Hidden file input for adding original photo without any edits */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        aria-hidden="true"
      />

      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#05112c]`}>
        {!hasError ? (
          <>
            <img
              src={imageSrc}
              alt={photo.artType}
              loading={priority ? 'eager' : 'lazy'}
              onError={() => setHasError(true)}
              onLoad={() => setIsLoading(false)}
              className={`h-full w-full object-cover object-center transition-transform duration-500 will-change-transform group-hover:scale-105 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ imageRendering: 'auto' }}
            />
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#071638] text-[#D4AF37]">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent mb-2" />
                <span className="text-xs tracking-widest uppercase font-mono text-[#D4AF37]/70">Loading Original Art...</span>
              </div>
            )}
          </>
        ) : (
          /* Clean original photo slot (Pure Vector, No AI) with direct Add Photo option */
          <div className="relative flex h-full w-full flex-col items-center justify-between p-4 text-center bg-gradient-to-b from-[#0a1f4d] via-[#07173a] to-[#040f26]">
            {/* Top Badge */}
            <div className="flex w-full items-center justify-between text-[11px] font-semibold tracking-wider text-[#D4AF37]/90 uppercase">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                Original Photo
              </span>
              <span className="rounded bg-[#D4AF37]/15 px-2 py-0.5 text-[#E7C66B] border border-[#D4AF37]/30">
                {photo.artType}
              </span>
            </div>

            {/* Center Pure Vector Henna Mandala */}
            <div className="my-auto flex flex-col items-center py-1">
              <div className="relative mb-2 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <HennaMandala className="w-16 h-16 text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]" />
              </div>
              <h4 className="font-royal text-xs sm:text-sm font-bold text-[#F8F6F0] line-clamp-2 px-1">
                {photo.artType}
              </h4>
              <p className="mt-0.5 text-[10px] font-mono text-[#D4AF37]/80 max-w-[190px] truncate">
                {photo.filename}
              </p>

              {/* Direct Add Original Photo Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="interactive-action mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C872] text-[#030b1e] text-[11px] font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Upload className="h-3 w-3" />
                <span>{isUploading ? 'Adding Photo...' : 'Add Original Photo'}</span>
              </button>
            </div>

            {/* Bottom info */}
            <div className="w-full border-t border-[#D4AF37]/15 pt-2 text-[10px] text-[#A3B1CC] flex items-center justify-between">
              <span className="text-[#E7C66B]">100% Original Photo</span>
              <span className="text-[#D4AF37] font-medium">0% AI</span>
            </div>
          </div>
        )}

        {/* Hover overlay with action buttons (WhatsApp Query + Lightbox) */}
        {!hasError && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#02091b] via-[#02091b]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-3.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-[#030b1e] shadow-md">
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp Query</span>
              </div>
              <div className="flex items-center gap-1.5">
                {/* Re-sync original photo button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="interactive-action flex items-center justify-center rounded-full bg-[#07193f]/90 border border-[#D4AF37]/50 p-2 text-[#E7C66B] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors shrink-0 shadow-md"
                  title="Replace with original photo"
                  aria-label="Upload photo"
                >
                  <Upload className="h-3.5 w-3.5" />
                </button>
                {onOpenLightbox && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox({ ...photo, src: imageSrc });
                    }}
                    className="interactive-action flex items-center justify-center rounded-full bg-[#07193f]/90 border border-[#D4AF37] p-2 text-[#E7C66B] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors shrink-0 shadow-md"
                    aria-label={`View ${photo.title} in full screen`}
                    title="Fullscreen preview"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {showCaption && (
        <div className="border-t border-[#D4AF37]/15 bg-[#051330] p-3 text-left">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-royal text-xs font-bold text-[#F8F6F0] truncate" title={photo.artType}>
              {photo.artType}
            </h3>
            <span className="shrink-0 rounded-full border border-[#D4AF37]/30 bg-[#0a204e] px-2 py-0.5 text-[10px] font-medium text-[#E7C66B]">
              Inquire
            </span>
          </div>
          <p className="mt-1 text-[11px] text-[#9FB0D0] line-clamp-2 leading-relaxed">
            {photo.description}
          </p>
        </div>
      )}
    </div>
  );
};
