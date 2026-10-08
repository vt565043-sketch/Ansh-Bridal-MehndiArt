import React from 'react';
import { CONTACT_INFO } from '../data/mehendiData';
import { Phone, MessageCircle } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#040e24]/95 backdrop-blur-md border-t border-[#D4AF37]/40 p-2.5 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={CONTACT_INFO.phoneCallUrl}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-[#F8F6F0] bg-[#091f4d] border border-[#D4AF37]/50 active:scale-95 transition-transform shadow"
          aria-label="Call Ansh Bridal Mehandi Art"
        >
          <Phone className="h-4 w-4 text-[#D4AF37]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-[#030b1e] bg-gradient-to-r from-[#25D366] to-[#1ebd5a] active:scale-95 transition-transform shadow-md"
          aria-label="WhatsApp Ansh Bridal Mehandi Art"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
