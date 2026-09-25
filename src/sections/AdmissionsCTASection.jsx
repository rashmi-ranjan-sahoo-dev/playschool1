import React, { useRef } from 'react';
import { schoolConfig } from '../config/schoolConfig';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';

/**
 * Admissions CTA Strip:
 * - Reduced padding: py-5 sm:py-6
 * - Vibrant theme orange background (#f57f25)
 * - Admissions open callout with Dual CTA (Book a Campus Tour & WhatsApp Enquiry)
 * - GSAP ScrollTrigger entrance animation
 * - Smooth micro-animations and fully responsive layout
 */
export function AdmissionsCTASection({ onBookVisit }) {
  const containerRef = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    try {
      if (containerRef.current) {
        gsap.from(containerRef.current.children, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }
    } catch {
      // Fallback
    }
  }, [], containerRef);

  const whatsappUrl =
    schoolConfig.contact?.whatsapp?.url ||
    `https://wa.me/91${(schoolConfig.contact?.phone || '9848022334').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      'Hello Little Veda! I am interested in admission for my child for the upcoming academic year.'
    )}`;

  return (
    <div className="bg-[#f57f25] py-5 sm:py-6 text-white relative overflow-hidden">
      {/* Decorative background glow circle */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none blur-xl" />

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10"
      >
        {/* Left Text */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-200 uppercase tracking-widest bg-black/15 px-3 py-0.5 rounded-full mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Admissions Open {schoolConfig.academic.currentSession}</span>
          </div>
          <p className="font-script text-2xl sm:text-3xl text-white tracking-wide">
            Looking for a joyful, caring preschool in Visakhapatnam?
          </p>
          <p className="text-xs sm:text-sm text-white/90 mt-0.5">
            Limited cohort seats available for Playgroup, Nursery, LKG, UKG & Daycare.
          </p>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center flex-wrap justify-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-extrabold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onBookVisit}
            className="font-script text-lg sm:text-xl bg-white hover:bg-black text-[#f57f25] hover:text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Campus Tour</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdmissionsCTASection;
