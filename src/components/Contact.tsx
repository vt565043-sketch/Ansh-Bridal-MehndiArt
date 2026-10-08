import React from 'react';
import { CONTACT_INFO } from '../data/mehendiData';
import { Sparkles, Phone, MessageCircle, Mail, MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#030b1e] relative overflow-hidden">
      {/* Decorative aura */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#0f2b66]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#07193f] text-[#E7C66B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>Get in Touch</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8F6F0]">
            Let's Create Beautiful <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Mehendi Memories</span>
          </h2>

          <p className="text-sm sm:text-base text-[#BAC8DE] leading-relaxed">
            Reach out directly to check wedding date availability, discuss bridal custom portraits, or book home service packages across Delhi NCR.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Card */}
          <div className="lg:col-span-7 royal-card rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-[#061435] border border-[#D4AF37]/25 space-y-2">
                <div className="h-10 w-10 rounded-xl bg-[#0c265e] text-[#D4AF37] flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="font-royal text-sm font-bold text-[#F8F6F0]">Direct Calls</h3>
                <div className="space-y-1">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="block text-sm font-semibold text-[#E7C66B] hover:underline"
                  >
                    +91 {CONTACT_INFO.phone1}
                  </a>
                  <a
                    href={`tel:+91${CONTACT_INFO.phone2}`}
                    className="block text-sm font-semibold text-[#E7C66B] hover:underline"
                  >
                    +91 {CONTACT_INFO.phone2}
                  </a>
                </div>
                <p className="text-[11px] text-[#A3B3D1]">Available 7 days • 9 AM - 10 PM</p>
              </div>

              {/* WhatsApp */}
              <div className="p-5 rounded-2xl bg-[#061435] border border-[#D4AF37]/25 space-y-2">
                <div className="h-10 w-10 rounded-xl bg-[#0c265e] text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="font-royal text-sm font-bold text-[#F8F6F0]">WhatsApp Us</h3>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold text-[#25D366] hover:underline"
                >
                  +91 {CONTACT_INFO.phone1}
                </a>
                <p className="text-[11px] text-[#A3B3D1]">Instant response for inquiries & photo shares</p>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#061435] border border-[#D4AF37]/25 space-y-2">
                <div className="h-10 w-10 rounded-xl bg-[#0c265e] text-[#D4AF37] flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="font-royal text-sm font-bold text-[#F8F6F0]">Email Us</h3>
                <a
                  href={CONTACT_INFO.emailUrl}
                  className="block text-xs sm:text-sm font-semibold text-[#E7C66B] hover:underline break-all"
                >
                  {CONTACT_INFO.email}
                </a>
                <p className="text-[11px] text-[#A3B3D1]">Send wedding invitations or event schedules</p>
              </div>

              {/* Studio Address */}
              <div className="p-5 rounded-2xl bg-[#061435] border border-[#D4AF37]/25 space-y-2">
                <div className="h-10 w-10 rounded-xl bg-[#0c265e] text-[#D4AF37] flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-royal text-sm font-bold text-[#F8F6F0]">Studio Address</h3>
                <p className="text-xs text-[#E2D8C7] leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
                <p className="text-[11px] text-[#A3B3D1]">Home service available across NCR</p>
              </div>

            </div>

            {/* Mandatory 4 Action Buttons from PART 3 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#D4AF37]/20">
              {/* Button 1: Call Now */}
              <a
                href={CONTACT_INFO.phoneCallUrl}
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#091e48] border border-[#D4AF37]/40 text-[#F8F6F0] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors text-xs font-bold"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>

              {/* Button 2: WhatsApp Us */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#25D366] text-[#030b1e] hover:bg-[#20ba59] transition-colors text-xs font-bold shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>

              {/* Button 3: Email Us */}
              <a
                href={CONTACT_INFO.emailUrl}
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#091e48] border border-[#D4AF37]/40 text-[#F8F6F0] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors text-xs font-bold"
              >
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>

              {/* Button 4: Get Directions */}
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E8C872] text-[#030b1e] hover:shadow-lg transition-all text-xs font-bold shadow"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location Card */}
          <div className="lg:col-span-5 royal-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-royal text-lg font-bold text-[#F8F6F0]">Find Us On Maps</h3>
                <p className="text-xs text-[#BAC8DE]">Amritpuram, Gamma 1, Greater Noida</p>
              </div>
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#E7C66B] hover:bg-[#D4AF37] hover:text-[#030b1e] transition-colors"
                aria-label="Open Google Maps in new window"
              >
                <Navigation className="h-4 w-4" />
              </a>
            </div>

            {/* Embedded interactive map visual box */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#040d21] p-6 text-center space-y-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-[#0c2459] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg">
                <MapPin className="h-8 w-8 animate-bounce" />
              </div>

              <div>
                <h4 className="font-royal text-base font-bold text-[#F8F6F0]">
                  Ansh Bridal Mehandi Art
                </h4>
                <p className="text-xs text-[#BAC8DE] mt-1 max-w-xs mx-auto leading-relaxed">
                  Amritpuram, Block E, Chandila, Gamma 1, Greater Noida, Uttar Pradesh 201310
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs text-[#030b1e] bg-[#D4AF37] hover:bg-[#E8C872] transition-colors shadow"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Service Coverage Note */}
            <div className="rounded-xl bg-[#040e24] p-4 border border-[#D4AF37]/15 text-xs text-[#A3B3D1] space-y-1.5">
              <div className="flex items-center gap-2 text-[#E7C66B] font-semibold">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                <span>Home Service Available Everywhere</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                We travel directly to your venue across Greater Noida, Noida, Delhi, Faridabad & Gurgaon with all professional supplies.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
