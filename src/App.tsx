/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhotoStrip } from './components/PhotoStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Lightbox } from './components/Lightbox';
import { APPROVED_PHOTOS, PhotoItem } from './data/mehendiData';

export default function App() {
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoItem | null>(null);

  const handleOpenLightbox = (photo: PhotoItem) => {
    setLightboxPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setLightboxPhoto(null);
  };

  return (
    <div className="min-h-screen bg-[#030b1e] text-[#F8F6F0] selection:bg-[#D4AF37] selection:text-[#030b1e] pb-16 sm:pb-0">
      {/* Top Navigation */}
      <Navbar />

      <main>
        {/* 1. HERO */}
        <Hero onOpenLightbox={handleOpenLightbox} />

        {/* 2. PHOTOS */}
        <PhotoStrip onOpenLightbox={handleOpenLightbox} />

        {/* 3. ABOUT */}
        <About onOpenLightbox={handleOpenLightbox} />

        {/* 4. SERVICES & BRIDAL SECTION */}
        <Services />

        {/* 5. PACKAGES & GUEST PRICES */}
        <Packages />

        {/* 6. GALLERY */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* 7. WHY CHOOSE US & SERVICE AREAS & REVIEWS & SOCIALS */}
        <WhyChooseUs />
        <Reviews />

        {/* 8. CONTACT */}
        <Contact />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* 10. FIXED MOBILE BOTTOM BAR */}
      <MobileBottomBar />

      {/* LIGHTBOX MODAL */}
      <Lightbox
        photo={lightboxPhoto}
        photos={APPROVED_PHOTOS}
        onClose={handleCloseLightbox}
        onSelectPhoto={setLightboxPhoto}
      />
    </div>
  );
}
